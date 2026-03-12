(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var fm={exports:{}},Oc={};var qv;function zM(){if(qv)return Oc;qv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Oc.Fragment=t,Oc.jsx=i,Oc.jsxs=i,Oc}var jv;function HM(){return jv||(jv=1,fm.exports=zM()),fm.exports}var wt=HM(),dm={exports:{}},Se={};var Zv;function GM(){if(Zv)return Se;Zv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(I,k,vt){this.props=I,this.context=k,this.refs=M,this.updater=vt||E}y.prototype.isReactComponent={},y.prototype.setState=function(I,k){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,k,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=y.prototype;function L(I,k,vt){this.props=I,this.context=k,this.refs=M,this.updater=vt||E}var D=L.prototype=new C;D.constructor=L,w(D,y.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function z(){}var H={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(I,k,vt){var At=vt.ref;return{$$typeof:r,type:I,key:k,ref:At!==void 0?At:null,props:vt}}function mt(I,k){return N(I.type,k,I.props)}function V(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function et(I){var k={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(vt){return k[vt]})}var rt=/\/+/g;function ot(I,k){return typeof I=="object"&&I!==null&&I.key!=null?et(""+I.key):k.toString(36)}function Q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(z,z):(I.status="pending",I.then(function(k){I.status==="pending"&&(I.status="fulfilled",I.value=k)},function(k){I.status==="pending"&&(I.status="rejected",I.reason=k)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,k,vt,At,Vt){var $=typeof I;($==="undefined"||$==="boolean")&&(I=null);var Mt=!1;if(I===null)Mt=!0;else switch($){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(I.$$typeof){case r:case t:Mt=!0;break;case _:return Mt=I._init,O(Mt(I._payload),k,vt,At,Vt)}}if(Mt)return Vt=Vt(I),Mt=At===""?"."+ot(I,0):At,B(Vt)?(vt="",Mt!=null&&(vt=Mt.replace(rt,"$&/")+"/"),O(Vt,k,vt,"",function(ie){return ie})):Vt!=null&&(V(Vt)&&(Vt=mt(Vt,vt+(Vt.key==null||I&&I.key===Vt.key?"":(""+Vt.key).replace(rt,"$&/")+"/")+Mt)),k.push(Vt)),1;Mt=0;var Nt=At===""?".":At+":";if(B(I))for(var Xt=0;Xt<I.length;Xt++)At=I[Xt],$=Nt+ot(At,Xt),Mt+=O(At,k,vt,$,Vt);else if(Xt=S(I),typeof Xt=="function")for(I=Xt.call(I),Xt=0;!(At=I.next()).done;)At=At.value,$=Nt+ot(At,Xt++),Mt+=O(At,k,vt,$,Vt);else if($==="object"){if(typeof I.then=="function")return O(Q(I),k,vt,At,Vt);throw k=String(I),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function P(I,k,vt){if(I==null)return I;var At=[],Vt=0;return O(I,At,"","",function($){return k.call(vt,$,Vt++)}),At}function ct(I){if(I._status===-1){var k=I._result;k=k(),k.then(function(vt){(I._status===0||I._status===-1)&&(I._status=1,I._result=vt)},function(vt){(I._status===0||I._status===-1)&&(I._status=2,I._result=vt)}),I._status===-1&&(I._status=0,I._result=k)}if(I._status===1)return I._result.default;throw I._result}var _t=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Dt={map:P,forEach:function(I,k,vt){P(I,function(){k.apply(this,arguments)},vt)},count:function(I){var k=0;return P(I,function(){k++}),k},toArray:function(I){return P(I,function(k){return k})||[]},only:function(I){if(!V(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Se.Activity=v,Se.Children=Dt,Se.Component=y,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=L,Se.StrictMode=s,Se.Suspense=m,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,Se.__COMPILER_RUNTIME={__proto__:null,c:function(I){return H.H.useMemoCache(I)}},Se.cache=function(I){return function(){return I.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(I,k,vt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var At=w({},I.props),Vt=I.key;if(k!=null)for($ in k.key!==void 0&&(Vt=""+k.key),k)!T.call(k,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&k.ref===void 0||(At[$]=k[$]);var $=arguments.length-2;if($===1)At.children=vt;else if(1<$){for(var Mt=Array($),Nt=0;Nt<$;Nt++)Mt[Nt]=arguments[Nt+2];At.children=Mt}return N(I.type,Vt,At)},Se.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Se.createElement=function(I,k,vt){var At,Vt={},$=null;if(k!=null)for(At in k.key!==void 0&&($=""+k.key),k)T.call(k,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Vt[At]=k[At]);var Mt=arguments.length-2;if(Mt===1)Vt.children=vt;else if(1<Mt){for(var Nt=Array(Mt),Xt=0;Xt<Mt;Xt++)Nt[Xt]=arguments[Xt+2];Vt.children=Nt}if(I&&I.defaultProps)for(At in Mt=I.defaultProps,Mt)Vt[At]===void 0&&(Vt[At]=Mt[At]);return N(I,$,Vt)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(I){return{$$typeof:h,render:I}},Se.isValidElement=V,Se.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ct}},Se.memo=function(I,k){return{$$typeof:p,type:I,compare:k===void 0?null:k}},Se.startTransition=function(I){var k=H.T,vt={};H.T=vt;try{var At=I(),Vt=H.S;Vt!==null&&Vt(vt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(z,_t)}catch($){_t($)}finally{k!==null&&vt.types!==null&&(k.types=vt.types),H.T=k}},Se.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},Se.use=function(I){return H.H.use(I)},Se.useActionState=function(I,k,vt){return H.H.useActionState(I,k,vt)},Se.useCallback=function(I,k){return H.H.useCallback(I,k)},Se.useContext=function(I){return H.H.useContext(I)},Se.useDebugValue=function(){},Se.useDeferredValue=function(I,k){return H.H.useDeferredValue(I,k)},Se.useEffect=function(I,k){return H.H.useEffect(I,k)},Se.useEffectEvent=function(I){return H.H.useEffectEvent(I)},Se.useId=function(){return H.H.useId()},Se.useImperativeHandle=function(I,k,vt){return H.H.useImperativeHandle(I,k,vt)},Se.useInsertionEffect=function(I,k){return H.H.useInsertionEffect(I,k)},Se.useLayoutEffect=function(I,k){return H.H.useLayoutEffect(I,k)},Se.useMemo=function(I,k){return H.H.useMemo(I,k)},Se.useOptimistic=function(I,k){return H.H.useOptimistic(I,k)},Se.useReducer=function(I,k,vt){return H.H.useReducer(I,k,vt)},Se.useRef=function(I){return H.H.useRef(I)},Se.useState=function(I){return H.H.useState(I)},Se.useSyncExternalStore=function(I,k,vt){return H.H.useSyncExternalStore(I,k,vt)},Se.useTransition=function(){return H.H.useTransition()},Se.version="19.2.4",Se}var Kv;function g0(){return Kv||(Kv=1,dm.exports=GM()),dm.exports}var ee=g0(),hm={exports:{}},Ic={},pm={exports:{}},mm={};var Qv;function VM(){return Qv||(Qv=1,(function(r){function t(O,P){var ct=O.length;O.push(P);t:for(;0<ct;){var _t=ct-1>>>1,Dt=O[_t];if(0<l(Dt,P))O[_t]=P,O[ct]=Dt,ct=_t;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var P=O[0],ct=O.pop();if(ct!==P){O[0]=ct;t:for(var _t=0,Dt=O.length,I=Dt>>>1;_t<I;){var k=2*(_t+1)-1,vt=O[k],At=k+1,Vt=O[At];if(0>l(vt,ct))At<Dt&&0>l(Vt,vt)?(O[_t]=Vt,O[At]=ct,_t=At):(O[_t]=vt,O[k]=ct,_t=k);else if(At<Dt&&0>l(Vt,ct))O[_t]=Vt,O[At]=ct,_t=At;else break t}}return P}function l(O,P){var ct=O.sortIndex-P.sortIndex;return ct!==0?ct:O.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var P=i(p);P!==null;){if(P.callback===null)s(p);else if(P.startTime<=O)s(p),P.sortIndex=P.expirationTime,t(m,P);else break;P=i(p)}}function B(O){if(w=!1,D(O),!E)if(i(m)!==null)E=!0,z||(z=!0,et());else{var P=i(p);P!==null&&Q(B,P.startTime-O)}}var z=!1,H=-1,T=5,N=-1;function mt(){return M?!0:!(r.unstable_now()-N<T)}function V(){if(M=!1,z){var O=r.unstable_now();N=O;var P=!0;try{t:{E=!1,w&&(w=!1,C(H),H=-1),S=!0;var ct=g;try{e:{for(D(O),v=i(m);v!==null&&!(v.expirationTime>O&&mt());){var _t=v.callback;if(typeof _t=="function"){v.callback=null,g=v.priorityLevel;var Dt=_t(v.expirationTime<=O);if(O=r.unstable_now(),typeof Dt=="function"){v.callback=Dt,D(O),P=!0;break e}v===i(m)&&s(m),D(O)}else s(m);v=i(m)}if(v!==null)P=!0;else{var I=i(p);I!==null&&Q(B,I.startTime-O),P=!1}}break t}finally{v=null,g=ct,S=!1}P=void 0}}finally{P?et():z=!1}}}var et;if(typeof L=="function")et=function(){L(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ot=rt.port2;rt.port1.onmessage=V,et=function(){ot.postMessage(null)}}else et=function(){y(V,0)};function Q(O,P){H=y(function(){O(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var ct=g;g=P;try{return O()}finally{g=ct}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ct=g;g=O;try{return P()}finally{g=ct}},r.unstable_scheduleCallback=function(O,P,ct){var _t=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?_t+ct:_t):ct=_t,O){case 1:var Dt=-1;break;case 2:Dt=250;break;case 5:Dt=1073741823;break;case 4:Dt=1e4;break;default:Dt=5e3}return Dt=ct+Dt,O={id:_++,callback:P,priorityLevel:O,startTime:ct,expirationTime:Dt,sortIndex:-1},ct>_t?(O.sortIndex=ct,t(p,O),i(m)===null&&O===i(p)&&(w?(C(H),H=-1):w=!0,Q(B,ct-_t))):(O.sortIndex=Dt,t(m,O),E||S||(E=!0,z||(z=!0,et()))),O},r.unstable_shouldYield=mt,r.unstable_wrapCallback=function(O){var P=g;return function(){var ct=g;g=P;try{return O.apply(this,arguments)}finally{g=ct}}}})(mm)),mm}var Jv;function kM(){return Jv||(Jv=1,pm.exports=VM()),pm.exports}var gm={exports:{}},Ai={};var $v;function XM(){if($v)return Ai;$v=1;var r=g0();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ai.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ai.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Ai.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Ai.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ai.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ai.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ai.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ai.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ai.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ai.requestFormReset=function(m){s.d.r(m)},Ai.unstable_batchedUpdates=function(m,p){return m(p)},Ai.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Ai.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ai.version="19.2.4",Ai}var tx;function WM(){if(tx)return gm.exports;tx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gm.exports=XM(),gm.exports}var ex;function YM(){if(ex)return Ic;ex=1;var r=kM(),t=g0(),i=WM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=d;break}if(A===o){x=!0,o=u,a=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===a){x=!0,a=d,o=u;break}if(A===o){x=!0,o=d,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var Q=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},_t=[],Dt=-1;function I(e){return{current:e}}function k(e){0>Dt||(e.current=_t[Dt],_t[Dt]=null,Dt--)}function vt(e,n){Dt++,_t[Dt]=e.current,e.current=n}var At=I(null),Vt=I(null),$=I(null),Mt=I(null);function Nt(e,n){switch(vt($,n),vt(Vt,e),vt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?gv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=gv(n),e=_v(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(At),vt(At,e)}function Xt(){k(At),k(Vt),k($)}function ie(e){e.memoizedState!==null&&vt(Mt,e);var n=At.current,a=_v(n,e.type);n!==a&&(vt(Vt,e),vt(At,a))}function re(e){Vt.current===e&&(k(At),k(Vt)),Mt.current===e&&(k(Mt),Dc._currentValue=ct)}var hn,Ce;function ye(e){if(hn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);hn=n&&n[1]||"",Ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hn+e+Ce}var Xe=!1;function ve(e,n){if(!e||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(dt){var lt=dt}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(dt){lt=dt}e.call(Rt.prototype)}}else{try{throw Error()}catch(dt){lt=dt}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(dt){if(dt&&lt&&typeof dt.stack=="string")return[dt.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var G=x.split(`
`),st=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===st.length)for(o=G.length-1,u=st.length-1;1<=o&&0<=u&&G[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==st[u]){var xt=`
`+G[o].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=o&&0<=u);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ye(a):""}function mn(e,n){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye("Lazy");case 13:return e.child!==n&&n!==null?ye("Suspense Fallback"):ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return ye("Activity");default:return""}}function X(e){try{var n="",a=null;do n+=mn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $e=Object.prototype.hasOwnProperty,Ne=r.unstable_scheduleCallback,We=r.unstable_cancelCallback,te=r.unstable_shouldYield,U=r.unstable_requestPaint,b=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,F=r.unstable_ImmediatePriority,nt=r.unstable_UserBlockingPriority,Z=r.unstable_NormalPriority,Lt=r.unstable_LowPriority,gt=r.unstable_IdlePriority,Pt=r.log,Qt=r.unstable_setDisableYieldValue,ut=null,Et=null;function ht(e){if(typeof Pt=="function"&&Qt(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(ut,e)}catch{}}var bt=Math.clz32?Math.clz32:Y,yt=Math.log,de=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(yt(e)/de|0)|0}var Ot=256,Ut=262144,Ht=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Ct(o):(x&=A,x!==0?u=Ct(x):a||(a=A&~e,a!==0&&(u=Ct(a))))):(A=o&~d,A!==0?u=Ct(A):x!==0?u=Ct(x):a||(a=o&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xe(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Me(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Qe(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pn(e,n,a,o,u,d){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,st=e.hiddenUpdates;for(a=x&~a;0<a;){var xt=31-bt(a),Rt=1<<xt;A[xt]=0,G[xt]=-1;var lt=st[xt];if(lt!==null)for(st[xt]=null,xt=0;xt<lt.length;xt++){var dt=lt[xt];dt!==null&&(dt.lane&=-536870913)}a&=~Rt}o!==0&&Gi(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function Gi(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ki(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function pa(e,n){var a=n&-n;return a=(a&42)!==0?1:Nn(a),(a&(e.suspendedLanes|n))!==0?0:a}function Nn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Di(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Hv(e.type))}function Oa(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var xi=Math.random().toString(36).slice(2),gn="__reactFiber$"+xi,An="__reactProps$"+xi,ma="__reactContainer$"+xi,Ia="__reactEvents$"+xi,Gr="__reactListeners$"+xi,Vr="__reactHandles$"+xi,hs="__reactResources$"+xi,ga="__reactMarker$"+xi;function Qi(e){delete e[gn],delete e[An],delete e[Ia],delete e[Gr],delete e[Vr]}function Si(e){var n=e[gn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ma]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=bv(e);e!==null;){if(a=e[gn])return a;e=bv(e)}return n}e=a,a=e.parentNode}return null}function $a(e){if(e=e[gn]||e[ma]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ji(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[hs];return n||(n=e[hs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[ga]=!0}var ft=new Set,at={};function tt(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(at[e]=n,e=0;e<n.length;e++)ft.add(n[e])}var Yt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Kt={};function ne(e){return $e.call(Kt,e)?!0:$e.call(Gt,e)?!1:Yt.test(e)?Kt[e]=!0:(Gt[e]=!0,!1)}function he(e,n,a){if(ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function se(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function an(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pe(e){if(!e._valueTracker){var n=an(e)?"checked":"value";e._valueTracker=sn(e,n,""+e[n])}}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=an(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ei=/[\n"\\]/g;function ue(e){return e.replace(ei,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fn(e,n,a,o,u,d,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Ni(e,x,_e(n)):a!=null?Ni(e,x,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function Bn(e,n,a,o,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){pe(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),pe(e)}function Ni(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Le(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),pe(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $i(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||yn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pa(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&$i(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&$i(e,d,n[d])}function Ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Do(e){return Mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var kl=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ps=null,ms=null;function Li(e){var n=$a(e);if(n&&(e=n.stateNode)){var a=e[An]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(s(90));Fn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&_n(o)}break t;case"textarea":Le(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&yi(e,!!a.multiple,n,!1)}}}var Ui=!1;function ui(e,n,a){if(Ui)return e(n,a);Ui=!0;try{var o=e(n);return o}finally{if(Ui=!1,(ps!==null||ms!==null)&&(sf(),ps&&(n=ps,e=ms,ms=ps=null,Li(n),e)))for(n=0;n<e.length;n++)Li(e[n])}}function Oi(e,n){var a=e.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fa=!1;if(ni)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){Fa=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{Fa=!1}var Ii=null,Qs=null,gs=null;function ta(){if(gs)return gs;var e,n=Qs,a=n.length,o,u="value"in Ii?Ii.value:Ii.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return gs=u.slice(e,1<o?1-o:void 0)}function va(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Xl(){return!1}function Ln(e){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?kr:Xl,this.isPropagationStopped=Xl,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Ln(za),Mi=v({},za,{view:0,detail:0}),fu=Ln(Mi),No,ii,_s,Lo=v({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_s&&(_s&&e.type==="mousemove"?(No=e.screenX-_s.screenX,ii=e.screenY-_s.screenY):ii=No=0,_s=e),No)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),Wl=Ln(Lo),Yl=v({},Lo,{dataTransfer:0}),Uo=Ln(Yl),Eh=v({},Mi,{relatedTarget:0}),Xr=Ln(Eh),ql=v({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),du=Ln(ql),hu=v({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oo=Ln(hu),Js=v({},za,{data:0}),pu=Ln(Js),bh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$s={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mu[e])?!!n[e]:!1}function Wr(){return gu}var jl=v({},Mi,{key:function(e){if(e.key){var n=bh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$s[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wr,charCode:function(e){return e.type==="keypress"?va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tr=Ln(jl),_u=v({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=Ln(_u),Yr=v({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wr}),Zl=Ln(Yr),Kl=v({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ql=Ln(Kl),vu=v({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xu=Ln(vu),Su=v({},za,{newState:0,oldState:0}),Po=Ln(Su),yu=[9,13,27,32],Fo=ni&&"CompositionEvent"in window,er=null;ni&&"documentMode"in document&&(er=document.documentMode);var qr=ni&&"TextEvent"in window&&!er,Jl=ni&&(!Fo||er&&8<er&&11>=er),$l=" ",tc=!1;function ec(e,n){switch(e){case"keyup":return yu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vs=!1;function Mu(e,n){switch(e){case"compositionend":return Bo(n);case"keypress":return n.which!==32?null:(tc=!0,$l);case"textInput":return e=n.data,e===$l&&tc?null:e;default:return null}}function Eu(e,n){if(vs)return e==="compositionend"||!Fo&&ec(e,n)?(e=ta(),gs=Qs=Ii=null,vs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jl&&n.locale!=="ko"?null:n.data;default:return null}}var bu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function St(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bu[e.type]:n==="textarea"}function jt(e,n,a,o){ps?ms?ms.push(o):ms=[o]:ps=o,n=df(n,"onChange"),0<n.length&&(a=new ea("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Zt=null,Wt=null;function zt(e){uv(e,0)}function ce(e){var n=Ji(e);if(_n(n))return e}function Ue(e,n){if(e==="change")return n}var Ze=!1;if(ni){var He;if(ni){var fi="oninput"in document;if(!fi){var Ei=document.createElement("div");Ei.setAttribute("oninput","return;"),fi=typeof Ei.oninput=="function"}He=fi}else He=!1;Ze=He&&(!document.documentMode||9<document.documentMode)}function Mn(){Zt&&(Zt.detachEvent("onpropertychange",Pe),Wt=Zt=null)}function Pe(e){if(e.propertyName==="value"&&ce(Wt)){var n=[];jt(n,Wt,e,ts(e)),ui(zt,n)}}function fn(e,n,a){e==="focusin"?(Mn(),Zt=n,Wt=a,Zt.attachEvent("onpropertychange",Pe)):e==="focusout"&&Mn()}function En(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ce(Wt)}function tn(e,n){if(e==="click")return ce(n)}function Vi(e,n){if(e==="input"||e==="change")return ce(n)}function xs(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Un=typeof Object.is=="function"?Object.is:xs;function na(e,n){if(Un(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!$e.call(n,u)||!Un(e[u],n[u]))return!1}return!0}function It(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cn(e,n){var a=It(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=It(a)}}function Pi(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pi(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ha(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function di(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ga=ni&&"documentMode"in document&&11>=document.documentMode,hi=null,Ss=null,jn=null,Hn=!1;function bi(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hn||hi==null||hi!==Jt(o)||(o=hi,"selectionStart"in o&&di(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jn&&na(jn,o)||(jn=o,o=df(Ss,"onSelect"),0<o.length&&(n=new ea("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=hi)))}function Zn(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Te={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},rn={},ai={};ni&&(ai=document.createElement("div").style,"AnimationEvent"in window||(delete Te.animationend.animation,delete Te.animationiteration.animation,delete Te.animationstart.animation),"TransitionEvent"in window||delete Te.transitionend.transition);function Gn(e){if(rn[e])return rn[e];if(!Te[e])return e;var n=Te[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ai)return rn[e]=n[a];return e}var ia=Gn("animationend"),Ye=Gn("animationiteration"),es=Gn("animationstart"),jr=Gn("transitionrun"),nr=Gn("transitionstart"),xa=Gn("transitioncancel"),Sa=Gn("transitionend"),ir=new Map,Zr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zr.push("scrollEnd");function Kn(e,n){ir.set(e,n),tt(n,[e])}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],sr=0,Th=0;function Tu(){for(var e=sr,n=Th=sr=0;n<e;){var a=Ti[n];Ti[n++]=null;var o=Ti[n];Ti[n++]=null;var u=Ti[n];Ti[n++]=null;var d=Ti[n];if(Ti[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&W0(a,u,d)}}function Au(e,n,a,o){Ti[sr++]=e,Ti[sr++]=n,Ti[sr++]=a,Ti[sr++]=o,Th|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ah(e,n,a,o){return Au(e,n,a,o),Ru(e)}function Kr(e,n){return Au(e,null,null,n),Ru(e)}function W0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-bt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Ru(e){if(50<Ec)throw Ec=0,Ip=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zo={};function My(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function aa(e,n,a,o){return new My(e,n,a,o)}function Rh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ys(e,n){var a=e.alternate;return a===null?(a=aa(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Y0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cu(e,n,a,o,u,d){var x=0;if(o=e,typeof e=="function")Rh(e)&&(x=1);else if(typeof e=="string")x=RM(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=aa(31,a,n,u),e.elementType=N,e.lanes=d,e;case w:return Qr(a.children,u,d,n);case M:x=8,u|=24;break;case y:return e=aa(12,a,n,u|2),e.elementType=y,e.lanes=d,e;case B:return e=aa(13,a,n,u),e.elementType=B,e.lanes=d,e;case z:return e=aa(19,a,n,u),e.elementType=z,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case C:x=9;break t;case D:x=11;break t;case H:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=aa(x,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Qr(e,n,a,o){return e=aa(7,e,o,n),e.lanes=a,e}function Ch(e,n,a){return e=aa(6,e,null,n),e.lanes=a,e}function q0(e){var n=aa(18,null,null,0);return n.stateNode=e,n}function wh(e,n,a){return n=aa(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var j0=new WeakMap;function ya(e,n){if(typeof e=="object"&&e!==null){var a=j0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:X(n)},j0.set(e,n),n)}return{value:e,source:n,stack:X(n)}}var Ho=[],Go=0,wu=null,nc=0,Ma=[],Ea=0,rr=null,ns=1,is="";function Ms(e,n){Ho[Go++]=nc,Ho[Go++]=wu,wu=e,nc=n}function Z0(e,n,a){Ma[Ea++]=ns,Ma[Ea++]=is,Ma[Ea++]=rr,rr=e;var o=ns;e=is;var u=32-bt(o)-1;o&=~(1<<u),a+=1;var d=32-bt(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ns=1<<32-bt(n)+u|a<<u|o,is=d+e}else ns=1<<d|a<<u|o,is=e}function Dh(e){e.return!==null&&(Ms(e,1),Z0(e,1,0))}function Nh(e){for(;e===wu;)wu=Ho[--Go],Ho[Go]=null,nc=Ho[--Go],Ho[Go]=null;for(;e===rr;)rr=Ma[--Ea],Ma[Ea]=null,is=Ma[--Ea],Ma[Ea]=null,ns=Ma[--Ea],Ma[Ea]=null}function K0(e,n){Ma[Ea++]=ns,Ma[Ea++]=is,Ma[Ea++]=rr,ns=n.id,is=n.overflow,rr=e}var pi=null,vn=null,ze=!1,or=null,ba=!1,Lh=Error(s(519));function lr(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ic(ya(n,e)),Lh}function Q0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[gn]=e,n[An]=o,a){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(a=0;a<Tc.length;a++)Ie(Tc[a],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":Ie("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ie("invalid",n);break;case"textarea":Ie("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||pv(n.textContent,a)?(o.popover!=null&&(Ie("beforetoggle",n),Ie("toggle",n)),o.onScroll!=null&&Ie("scroll",n),o.onScrollEnd!=null&&Ie("scrollend",n),o.onClick!=null&&(n.onclick=_a),n=!0):n=!1,n||lr(e,!0)}function J0(e){for(pi=e.return;pi;)switch(pi.tag){case 5:case 31:case 13:ba=!1;return;case 27:case 3:ba=!0;return;default:pi=pi.return}}function Vo(e){if(e!==pi)return!1;if(!ze)return J0(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kp(e.type,e.memoizedProps)),a=!a),a&&vn&&lr(e),J0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));vn=Ev(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));vn=Ev(e)}else n===27?(n=vn,Mr(e.type)?(e=em,em=null,vn=e):vn=n):vn=pi?Aa(e.stateNode.nextSibling):null;return!0}function Jr(){vn=pi=null,ze=!1}function Uh(){var e=or;return e!==null&&(Yi===null?Yi=e:Yi.push.apply(Yi,e),or=null),e}function ic(e){or===null?or=[e]:or.push(e)}var Oh=I(null),$r=null,Es=null;function cr(e,n,a){vt(Oh,n._currentValue),n._currentValue=a}function bs(e){e._currentValue=Oh.current,k(Oh)}function Ih(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ph(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Ih(d.return,a,e),o||(x=null);break t}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Ih(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ko(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Un(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===Mt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Dc):e=[Dc])}u=u.return}e!==null&&Ph(n,e,a,o),n.flags|=262144}function Du(e){for(e=e.firstContext;e!==null;){if(!Un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function to(e){$r=e,Es=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mi(e){return $0($r,e)}function Nu(e,n){return $r===null&&to(e),$0(e,n)}function $0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Es===null){if(e===null)throw Error(s(308));Es=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Es=Es.next=n;return a}var Ey=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},by=r.unstable_scheduleCallback,Ty=r.unstable_NormalPriority,Vn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fh(){return{controller:new Ey,data:new Map,refCount:0}}function ac(e){e.refCount--,e.refCount===0&&by(Ty,function(){e.controller.abort()})}var sc=null,Bh=0,Xo=0,Wo=null;function Ay(e,n){if(sc===null){var a=sc=[];Bh=0,Xo=Gp(),Wo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bh++,n.then(tg,tg),n}function tg(){if(--Bh===0&&sc!==null){Wo!==null&&(Wo.status="fulfilled");var e=sc;sc=null,Xo=0,Wo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ry(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var eg=O.S;O.S=function(e,n){B_=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ay(e,n),eg!==null&&eg(e,n)};var eo=I(null);function zh(){var e=eo.current;return e!==null?e:dn.pooledCache}function Lu(e,n){n===null?vt(eo,eo.current):vt(eo,n.pool)}function ng(){var e=zh();return e===null?null:{parent:Vn._currentValue,pool:e}}var Yo=Error(s(460)),Hh=Error(s(474)),Uu=Error(s(542)),Ou={then:function(){}};function ig(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ag(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_a,_a),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rg(e),e;default:if(typeof n.status=="string")n.then(_a,_a);else{if(e=dn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rg(e),e}throw io=n,Yo}}function no(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(io=a,Yo):a}}var io=null;function sg(){if(io===null)throw Error(s(459));var e=io;return io=null,e}function rg(e){if(e===Yo||e===Uu)throw Error(s(483))}var qo=null,rc=0;function Iu(e){var n=rc;return rc+=1,qo===null&&(qo=[]),ag(qo,e,n)}function oc(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Pu(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function og(e){function n(J,W){if(e){var it=J.deletions;it===null?(J.deletions=[W],J.flags|=16):it.push(W)}}function a(J,W){if(!e)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=ys(J,W),J.index=0,J.sibling=null,J}function d(J,W,it){return J.index=it,e?(it=J.alternate,it!==null?(it=it.index,it<W?(J.flags|=67108866,W):it):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function x(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function A(J,W,it,Tt){return W===null||W.tag!==6?(W=Ch(it,J.mode,Tt),W.return=J,W):(W=u(W,it),W.return=J,W)}function G(J,W,it,Tt){var oe=it.type;return oe===w?xt(J,W,it.props.children,Tt,it.key):W!==null&&(W.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===T&&no(oe)===W.type)?(W=u(W,it.props),oc(W,it),W.return=J,W):(W=Cu(it.type,it.key,it.props,null,J.mode,Tt),oc(W,it),W.return=J,W)}function st(J,W,it,Tt){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=wh(it,J.mode,Tt),W.return=J,W):(W=u(W,it.children||[]),W.return=J,W)}function xt(J,W,it,Tt,oe){return W===null||W.tag!==7?(W=Qr(it,J.mode,Tt,oe),W.return=J,W):(W=u(W,it),W.return=J,W)}function Rt(J,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Ch(""+W,J.mode,it),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return it=Cu(W.type,W.key,W.props,null,J.mode,it),oc(it,W),it.return=J,it;case E:return W=wh(W,J.mode,it),W.return=J,W;case T:return W=no(W),Rt(J,W,it)}if(Q(W)||et(W))return W=Qr(W,J.mode,it,null),W.return=J,W;if(typeof W.then=="function")return Rt(J,Iu(W),it);if(W.$$typeof===L)return Rt(J,Nu(J,W),it);Pu(J,W)}return null}function lt(J,W,it,Tt){var oe=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return oe!==null?null:A(J,W,""+it,Tt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case S:return it.key===oe?G(J,W,it,Tt):null;case E:return it.key===oe?st(J,W,it,Tt):null;case T:return it=no(it),lt(J,W,it,Tt)}if(Q(it)||et(it))return oe!==null?null:xt(J,W,it,Tt,null);if(typeof it.then=="function")return lt(J,W,Iu(it),Tt);if(it.$$typeof===L)return lt(J,W,Nu(J,it),Tt);Pu(J,it)}return null}function dt(J,W,it,Tt,oe){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return J=J.get(it)||null,A(W,J,""+Tt,oe);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case S:return J=J.get(Tt.key===null?it:Tt.key)||null,G(W,J,Tt,oe);case E:return J=J.get(Tt.key===null?it:Tt.key)||null,st(W,J,Tt,oe);case T:return Tt=no(Tt),dt(J,W,it,Tt,oe)}if(Q(Tt)||et(Tt))return J=J.get(it)||null,xt(W,J,Tt,oe,null);if(typeof Tt.then=="function")return dt(J,W,it,Iu(Tt),oe);if(Tt.$$typeof===L)return dt(J,W,it,Nu(W,Tt),oe);Pu(W,Tt)}return null}function $t(J,W,it,Tt){for(var oe=null,qe=null,ae=W,Ae=W=0,Be=null;ae!==null&&Ae<it.length;Ae++){ae.index>Ae?(Be=ae,ae=null):Be=ae.sibling;var je=lt(J,ae,it[Ae],Tt);if(je===null){ae===null&&(ae=Be);break}e&&ae&&je.alternate===null&&n(J,ae),W=d(je,W,Ae),qe===null?oe=je:qe.sibling=je,qe=je,ae=Be}if(Ae===it.length)return a(J,ae),ze&&Ms(J,Ae),oe;if(ae===null){for(;Ae<it.length;Ae++)ae=Rt(J,it[Ae],Tt),ae!==null&&(W=d(ae,W,Ae),qe===null?oe=ae:qe.sibling=ae,qe=ae);return ze&&Ms(J,Ae),oe}for(ae=o(ae);Ae<it.length;Ae++)Be=dt(ae,J,Ae,it[Ae],Tt),Be!==null&&(e&&Be.alternate!==null&&ae.delete(Be.key===null?Ae:Be.key),W=d(Be,W,Ae),qe===null?oe=Be:qe.sibling=Be,qe=Be);return e&&ae.forEach(function(Rr){return n(J,Rr)}),ze&&Ms(J,Ae),oe}function me(J,W,it,Tt){if(it==null)throw Error(s(151));for(var oe=null,qe=null,ae=W,Ae=W=0,Be=null,je=it.next();ae!==null&&!je.done;Ae++,je=it.next()){ae.index>Ae?(Be=ae,ae=null):Be=ae.sibling;var Rr=lt(J,ae,je.value,Tt);if(Rr===null){ae===null&&(ae=Be);break}e&&ae&&Rr.alternate===null&&n(J,ae),W=d(Rr,W,Ae),qe===null?oe=Rr:qe.sibling=Rr,qe=Rr,ae=Be}if(je.done)return a(J,ae),ze&&Ms(J,Ae),oe;if(ae===null){for(;!je.done;Ae++,je=it.next())je=Rt(J,je.value,Tt),je!==null&&(W=d(je,W,Ae),qe===null?oe=je:qe.sibling=je,qe=je);return ze&&Ms(J,Ae),oe}for(ae=o(ae);!je.done;Ae++,je=it.next())je=dt(ae,J,Ae,je.value,Tt),je!==null&&(e&&je.alternate!==null&&ae.delete(je.key===null?Ae:je.key),W=d(je,W,Ae),qe===null?oe=je:qe.sibling=je,qe=je);return e&&ae.forEach(function(BM){return n(J,BM)}),ze&&Ms(J,Ae),oe}function cn(J,W,it,Tt){if(typeof it=="object"&&it!==null&&it.type===w&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case S:t:{for(var oe=it.key;W!==null;){if(W.key===oe){if(oe=it.type,oe===w){if(W.tag===7){a(J,W.sibling),Tt=u(W,it.props.children),Tt.return=J,J=Tt;break t}}else if(W.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===T&&no(oe)===W.type){a(J,W.sibling),Tt=u(W,it.props),oc(Tt,it),Tt.return=J,J=Tt;break t}a(J,W);break}else n(J,W);W=W.sibling}it.type===w?(Tt=Qr(it.props.children,J.mode,Tt,it.key),Tt.return=J,J=Tt):(Tt=Cu(it.type,it.key,it.props,null,J.mode,Tt),oc(Tt,it),Tt.return=J,J=Tt)}return x(J);case E:t:{for(oe=it.key;W!==null;){if(W.key===oe)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){a(J,W.sibling),Tt=u(W,it.children||[]),Tt.return=J,J=Tt;break t}else{a(J,W);break}else n(J,W);W=W.sibling}Tt=wh(it,J.mode,Tt),Tt.return=J,J=Tt}return x(J);case T:return it=no(it),cn(J,W,it,Tt)}if(Q(it))return $t(J,W,it,Tt);if(et(it)){if(oe=et(it),typeof oe!="function")throw Error(s(150));return it=oe.call(it),me(J,W,it,Tt)}if(typeof it.then=="function")return cn(J,W,Iu(it),Tt);if(it.$$typeof===L)return cn(J,W,Nu(J,it),Tt);Pu(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(a(J,W.sibling),Tt=u(W,it),Tt.return=J,J=Tt):(a(J,W),Tt=Ch(it,J.mode,Tt),Tt.return=J,J=Tt),x(J)):a(J,W)}return function(J,W,it,Tt){try{rc=0;var oe=cn(J,W,it,Tt);return qo=null,oe}catch(ae){if(ae===Yo||ae===Uu)throw ae;var qe=aa(29,ae,null,J.mode);return qe.lanes=Tt,qe.return=J,qe}}}var ao=og(!0),lg=og(!1),ur=!1;function Gh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function dr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ke&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ru(e),W0(e,null,a),n}return Au(e,o,n,a),Ru(e)}function lc(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ki(e,a)}}function kh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Xh=!1;function cc(){if(Xh){var e=Wo;if(e!==null)throw e}}function uc(e,n,a,o){Xh=!1;var u=e.updateQueue;ur=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,st=G.next;G.next=null,x===null?d=st:x.next=st,x=G;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,A=xt.lastBaseUpdate,A!==x&&(A===null?xt.firstBaseUpdate=st:A.next=st,xt.lastBaseUpdate=G))}if(d!==null){var Rt=u.baseState;x=0,xt=st=G=null,A=d;do{var lt=A.lane&-536870913,dt=lt!==A.lane;if(dt?(Fe&lt)===lt:(o&lt)===lt){lt!==0&&lt===Xo&&(Xh=!0),xt!==null&&(xt=xt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var $t=e,me=A;lt=n;var cn=a;switch(me.tag){case 1:if($t=me.payload,typeof $t=="function"){Rt=$t.call(cn,Rt,lt);break t}Rt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=me.payload,lt=typeof $t=="function"?$t.call(cn,Rt,lt):$t,lt==null)break t;Rt=v({},Rt,lt);break t;case 2:ur=!0}}lt=A.callback,lt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[lt]:dt.push(lt))}else dt={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},xt===null?(st=xt=dt,G=Rt):xt=xt.next=dt,x|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;dt=A,A=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);xt===null&&(G=Rt),u.baseState=G,u.firstBaseUpdate=st,u.lastBaseUpdate=xt,d===null&&(u.shared.lanes=0),_r|=x,e.lanes=x,e.memoizedState=Rt}}function cg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ug(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cg(a[e],n)}var jo=I(null),Fu=I(0);function fg(e,n){e=Us,vt(Fu,e),vt(jo,n),Us=e|n.baseLanes}function Wh(){vt(Fu,Us),vt(jo,jo.current)}function Yh(){Us=Fu.current,k(jo),k(Fu)}var sa=I(null),Ta=null;function hr(e){var n=e.alternate;vt(On,On.current&1),vt(sa,e),Ta===null&&(n===null||jo.current!==null||n.memoizedState!==null)&&(Ta=e)}function qh(e){vt(On,On.current),vt(sa,e),Ta===null&&(Ta=e)}function dg(e){e.tag===22?(vt(On,On.current),vt(sa,e),Ta===null&&(Ta=e)):pr()}function pr(){vt(On,On.current),vt(sa,sa.current)}function ra(e){k(sa),Ta===e&&(Ta=null),k(On)}var On=I(0);function Bu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$p(a)||tm(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ts=0,Ee=null,on=null,kn=null,zu=!1,Zo=!1,so=!1,Hu=0,fc=0,Ko=null,Cy=0;function wn(){throw Error(s(321))}function jh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Un(e[a],n[a]))return!1;return!0}function Zh(e,n,a,o,u,d){return Ts=d,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Zg:up,so=!1,d=a(o,u),so=!1,Zo&&(d=pg(n,a,o,u)),hg(e),d}function hg(e){O.H=pc;var n=on!==null&&on.next!==null;if(Ts=0,kn=on=Ee=null,zu=!1,fc=0,Ko=null,n)throw Error(s(300));e===null||Xn||(e=e.dependencies,e!==null&&Du(e)&&(Xn=!0))}function pg(e,n,a,o){Ee=e;var u=0;do{if(Zo&&(Ko=null),fc=0,Zo=!1,25<=u)throw Error(s(301));if(u+=1,kn=on=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Kg,d=n(a,o)}while(Zo);return d}function wy(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?dc(n):n,e=e.useState()[0],(on!==null?on.memoizedState:null)!==e&&(Ee.flags|=1024),n}function Kh(){var e=Hu!==0;return Hu=0,e}function Qh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Jh(e){if(zu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}zu=!1}Ts=0,kn=on=Ee=null,Zo=!1,fc=Hu=0,Ko=null}function Fi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?Ee.memoizedState=kn=e:kn=kn.next=e,kn}function In(){if(on===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=on.next;var n=kn===null?Ee.memoizedState:kn.next;if(n!==null)kn=n,on=e;else{if(e===null)throw Ee.alternate===null?Error(s(467)):Error(s(310));on=e,e={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},kn===null?Ee.memoizedState=kn=e:kn=kn.next=e}return kn}function Gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dc(e){var n=fc;return fc+=1,Ko===null&&(Ko=[]),e=ag(Ko,e,n),n=Ee,(kn===null?n.memoizedState:kn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Zg:up),e}function Vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dc(e);if(e.$$typeof===L)return mi(e)}throw Error(s(438,String(e)))}function $h(e){var n=null,a=Ee.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ee.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gu(),Ee.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=mt;return n.index++,a}function As(e,n){return typeof n=="function"?n(e):n}function ku(e){var n=In();return tp(n,on,e)}function tp(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=x=null,G=null,st=n,xt=!1;do{var Rt=st.lane&-536870913;if(Rt!==st.lane?(Fe&Rt)===Rt:(Ts&Rt)===Rt){var lt=st.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Rt===Xo&&(xt=!0);else if((Ts&lt)===lt){st=st.next,lt===Xo&&(xt=!0);continue}else Rt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(A=G=Rt,x=d):G=G.next=Rt,Ee.lanes|=lt,_r|=lt;Rt=st.action,so&&a(d,Rt),d=st.hasEagerState?st.eagerState:a(d,Rt)}else lt={lane:Rt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(A=G=lt,x=d):G=G.next=lt,Ee.lanes|=Rt,_r|=Rt;st=st.next}while(st!==null&&st!==n);if(G===null?x=d:G.next=A,!Un(d,e.memoizedState)&&(Xn=!0,xt&&(a=Wo,a!==null)))throw a;e.memoizedState=d,e.baseState=x,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ep(e){var n=In(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);Un(d,n.memoizedState)||(Xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function mg(e,n,a){var o=Ee,u=In(),d=ze;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Un((on||u).memoizedState,a);if(x&&(u.memoizedState=a,Xn=!0),u=u.queue,ap(vg.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||kn!==null&&kn.memoizedState.tag&1){if(o.flags|=2048,Qo(9,{destroy:void 0},_g.bind(null,o,u,a,n),null),dn===null)throw Error(s(349));d||(Ts&127)!==0||gg(o,n,a)}return a}function gg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ee.updateQueue,n===null?(n=Gu(),Ee.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _g(e,n,a,o){n.value=a,n.getSnapshot=o,xg(n)&&Sg(e)}function vg(e,n,a){return a(function(){xg(n)&&Sg(e)})}function xg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Un(e,a)}catch{return!0}}function Sg(e){var n=Kr(e,2);n!==null&&qi(n,e,2)}function np(e){var n=Fi();if(typeof e=="function"){var a=e;if(e=a(),so){ht(!0);try{a()}finally{ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:e},n}function yg(e,n,a,o){return e.baseState=a,tp(e,on,typeof o=="function"?o:As)}function Dy(e,n,a,o,u){if(Yu(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Mg(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Mg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=O.T,x={};O.T=x;try{var A=a(u,o),G=O.S;G!==null&&G(x,A),Eg(e,n,A)}catch(st){ip(e,n,st)}finally{d!==null&&x.types!==null&&(d.types=x.types),O.T=d}}else try{d=a(u,o),Eg(e,n,d)}catch(st){ip(e,n,st)}}function Eg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bg(e,n,o)},function(o){return ip(e,n,o)}):bg(e,n,a)}function bg(e,n,a){n.status="fulfilled",n.value=a,Tg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Mg(e,a)))}function ip(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Tg(n),n=n.next;while(n!==o)}e.action=null}function Tg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ag(e,n){return n}function Rg(e,n){if(ze){var a=dn.formState;if(a!==null){t:{var o=Ee;if(ze){if(vn){e:{for(var u=vn,d=ba;u.nodeType!==8;){if(!d){u=null;break e}if(u=Aa(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){vn=Aa(u.nextSibling),o=u.data==="F!";break t}}lr(o)}o=!1}o&&(n=a[0])}}return a=Fi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ag,lastRenderedState:n},a.queue=o,a=Yg.bind(null,Ee,o),o.dispatch=a,o=np(!1),d=cp.bind(null,Ee,!1,o.queue),o=Fi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Dy.bind(null,Ee,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Cg(e){var n=In();return wg(n,on,e)}function wg(e,n,a){if(n=tp(e,n,Ag)[0],e=ku(As)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=dc(n)}catch(x){throw x===Yo?Uu:x}else o=n;n=In();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Ee.flags|=2048,Qo(9,{destroy:void 0},Ny.bind(null,u,a),null)),[o,d,e]}function Ny(e,n){e.action=n}function Dg(e){var n=In(),a=on;if(a!==null)return wg(n,a,e);In(),n=n.memoizedState,a=In();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Qo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=Gu(),Ee.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ng(){return In().memoizedState}function Xu(e,n,a,o){var u=Fi();Ee.flags|=e,u.memoizedState=Qo(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wu(e,n,a,o){var u=In();o=o===void 0?null:o;var d=u.memoizedState.inst;on!==null&&o!==null&&jh(o,on.memoizedState.deps)?u.memoizedState=Qo(n,d,a,o):(Ee.flags|=e,u.memoizedState=Qo(1|n,d,a,o))}function Lg(e,n){Xu(8390656,8,e,n)}function ap(e,n){Wu(2048,8,e,n)}function Ly(e){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=Gu(),Ee.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ug(e){var n=In().memoizedState;return Ly({ref:n,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Og(e,n){return Wu(4,2,e,n)}function Ig(e,n){return Wu(4,4,e,n)}function Pg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fg(e,n,a){a=a!=null?a.concat([e]):null,Wu(4,4,Pg.bind(null,n,e),a)}function sp(){}function Bg(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&jh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function zg(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&jh(n,o[1]))return o[0];if(o=e(),so){ht(!0);try{e()}finally{ht(!1)}}return a.memoizedState=[o,n],o}function rp(e,n,a){return a===void 0||(Ts&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=H_(),Ee.lanes|=e,_r|=e,a)}function Hg(e,n,a,o){return Un(a,n)?a:jo.current!==null?(e=rp(e,a,o),Un(e,n)||(Xn=!0),e):(Ts&42)===0||(Ts&1073741824)!==0&&(Fe&261930)===0?(Xn=!0,e.memoizedState=a):(e=H_(),Ee.lanes|=e,_r|=e,n)}function Gg(e,n,a,o,u){var d=P.p;P.p=d!==0&&8>d?d:8;var x=O.T,A={};O.T=A,cp(e,!1,n,a);try{var G=u(),st=O.S;if(st!==null&&st(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var xt=Ry(G,o);hc(e,n,xt,ca(e))}else hc(e,n,o,ca(e))}catch(Rt){hc(e,n,{then:function(){},status:"rejected",reason:Rt},ca())}finally{P.p=d,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function Uy(){}function op(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Vg(e).queue;Gg(e,u,n,ct,a===null?Uy:function(){return kg(e),a(o)})}function Vg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function kg(e){var n=Vg(e);n.next===null&&(n=e.alternate.memoizedState),hc(e,n.next.queue,{},ca())}function lp(){return mi(Dc)}function Xg(){return In().memoizedState}function Wg(){return In().memoizedState}function Oy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ca();e=fr(a);var o=dr(n,e,a);o!==null&&(qi(o,n,a),lc(o,n,a)),n={cache:Fh()},e.payload=n;return}n=n.return}}function Iy(e,n,a){var o=ca();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yu(e)?qg(n,a):(a=Ah(e,n,a,o),a!==null&&(qi(a,e,o),jg(a,n,o)))}function Yg(e,n,a){var o=ca();hc(e,n,a,o)}function hc(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yu(e))qg(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,A=d(x,a);if(u.hasEagerState=!0,u.eagerState=A,Un(A,x))return Au(e,n,u,0),dn===null&&Tu(),!1}catch{}if(a=Ah(e,n,u,o),a!==null)return qi(a,e,o),jg(a,n,o),!0}return!1}function cp(e,n,a,o){if(o={lane:2,revertLane:Gp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yu(e)){if(n)throw Error(s(479))}else n=Ah(e,a,o,2),n!==null&&qi(n,e,2)}function Yu(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function qg(e,n){Zo=zu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ki(e,a)}}var pc={readContext:mi,use:Vu,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn};pc.useEffectEvent=wn;var Zg={readContext:mi,use:Vu,useCallback:function(e,n){return Fi().memoizedState=[e,n===void 0?null:n],e},useContext:mi,useEffect:Lg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Xu(4194308,4,Pg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Xu(4194308,4,e,n)},useInsertionEffect:function(e,n){Xu(4,2,e,n)},useMemo:function(e,n){var a=Fi();n=n===void 0?null:n;var o=e();if(so){ht(!0);try{e()}finally{ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fi();if(a!==void 0){var u=a(n);if(so){ht(!0);try{a(n)}finally{ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Iy.bind(null,Ee,e),[o.memoizedState,e]},useRef:function(e){var n=Fi();return e={current:e},n.memoizedState=e},useState:function(e){e=np(e);var n=e.queue,a=Yg.bind(null,Ee,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sp,useDeferredValue:function(e,n){var a=Fi();return rp(a,e,n)},useTransition:function(){var e=np(!1);return e=Gg.bind(null,Ee,e.queue,!0,!1),Fi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ee,u=Fi();if(ze){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),dn===null)throw Error(s(349));(Fe&127)!==0||gg(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Lg(vg.bind(null,o,d,e),[e]),o.flags|=2048,Qo(9,{destroy:void 0},_g.bind(null,o,d,a,n),null),a},useId:function(){var e=Fi(),n=dn.identifierPrefix;if(ze){var a=is,o=ns;a=(o&~(1<<32-bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Cy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lp,useFormState:Rg,useActionState:Rg,useOptimistic:function(e){var n=Fi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cp.bind(null,Ee,!0,a),a.dispatch=n,[e,n]},useMemoCache:$h,useCacheRefresh:function(){return Fi().memoizedState=Oy.bind(null,Ee)},useEffectEvent:function(e){var n=Fi(),a={impl:e};return n.memoizedState=a,function(){if((Ke&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},up={readContext:mi,use:Vu,useCallback:Bg,useContext:mi,useEffect:ap,useImperativeHandle:Fg,useInsertionEffect:Og,useLayoutEffect:Ig,useMemo:zg,useReducer:ku,useRef:Ng,useState:function(){return ku(As)},useDebugValue:sp,useDeferredValue:function(e,n){var a=In();return Hg(a,on.memoizedState,e,n)},useTransition:function(){var e=ku(As)[0],n=In().memoizedState;return[typeof e=="boolean"?e:dc(e),n]},useSyncExternalStore:mg,useId:Xg,useHostTransitionStatus:lp,useFormState:Cg,useActionState:Cg,useOptimistic:function(e,n){var a=In();return yg(a,on,e,n)},useMemoCache:$h,useCacheRefresh:Wg};up.useEffectEvent=Ug;var Kg={readContext:mi,use:Vu,useCallback:Bg,useContext:mi,useEffect:ap,useImperativeHandle:Fg,useInsertionEffect:Og,useLayoutEffect:Ig,useMemo:zg,useReducer:ep,useRef:Ng,useState:function(){return ep(As)},useDebugValue:sp,useDeferredValue:function(e,n){var a=In();return on===null?rp(a,e,n):Hg(a,on.memoizedState,e,n)},useTransition:function(){var e=ep(As)[0],n=In().memoizedState;return[typeof e=="boolean"?e:dc(e),n]},useSyncExternalStore:mg,useId:Xg,useHostTransitionStatus:lp,useFormState:Dg,useActionState:Dg,useOptimistic:function(e,n){var a=In();return on!==null?yg(a,on,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$h,useCacheRefresh:Wg};Kg.useEffectEvent=Ug;function fp(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var dp={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ca(),u=fr(o);u.payload=n,a!=null&&(u.callback=a),n=dr(e,u,o),n!==null&&(qi(n,e,o),lc(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ca(),u=fr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=dr(e,u,o),n!==null&&(qi(n,e,o),lc(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ca(),o=fr(a);o.tag=2,n!=null&&(o.callback=n),n=dr(e,o,a),n!==null&&(qi(n,e,a),lc(n,e,a))}};function Qg(e,n,a,o,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!na(a,o)||!na(u,d):!0}function Jg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&dp.enqueueReplaceState(n,n.state,null)}function ro(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function $g(e){ar(e)}function t_(e){console.error(e)}function e_(e){ar(e)}function qu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function n_(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hp(e,n,a){return a=fr(a),a.tag=3,a.payload={element:null},a.callback=function(){qu(e,n)},a}function i_(e){return e=fr(e),e.tag=3,e}function a_(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){n_(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){n_(n,a,o),typeof u!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Py(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ko(n,a,u,!0),a=sa.current,a!==null){switch(a.tag){case 31:case 13:return Ta===null?rf():a.alternate===null&&Dn===0&&(Dn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ou?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Bp(e,o,u)),!1;case 22:return a.flags|=65536,o===Ou?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Bp(e,o,u)),!1}throw Error(s(435,a.tag))}return Bp(e,o,u),rf(),!1}if(ze)return n=sa.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lh&&(e=Error(s(422),{cause:o}),ic(ya(e,a)))):(o!==Lh&&(n=Error(s(423),{cause:o}),ic(ya(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ya(o,a),u=hp(e.stateNode,o,u),kh(e,u),Dn!==4&&(Dn=2)),!1;var d=Error(s(520),{cause:o});if(d=ya(d,a),Mc===null?Mc=[d]:Mc.push(d),Dn!==4&&(Dn=2),n===null)return!0;o=ya(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=hp(a.stateNode,o,e),kh(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(vr===null||!vr.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=i_(u),a_(u,e,a,o),kh(a,u),!1}a=a.return}while(a!==null);return!1}var pp=Error(s(461)),Xn=!1;function gi(e,n,a,o){n.child=e===null?lg(n,null,a,o):ao(n,e.child,a,o)}function s_(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return to(n),o=Zh(e,n,a,x,d,u),A=Kh(),e!==null&&!Xn?(Qh(e,n,u),Rs(e,n,u)):(ze&&A&&Dh(n),n.flags|=1,gi(e,n,o,u),n.child)}function r_(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Rh(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,o_(e,n,d,o,u)):(e=Cu(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Mp(e,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:na,a(x,o)&&e.ref===n.ref)return Rs(e,n,u)}return n.flags|=1,e=ys(d,o),e.ref=n.ref,e.return=n,n.child=e}function o_(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(na(d,o)&&e.ref===n.ref)if(Xn=!1,n.pendingProps=o=d,Mp(e,u))(e.flags&131072)!==0&&(Xn=!0);else return n.lanes=e.lanes,Rs(e,n,u)}return mp(e,n,a,o,u)}function l_(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return c_(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lu(n,d!==null?d.cachePool:null),d!==null?fg(n,d):Wh(),dg(n);else return o=n.lanes=536870912,c_(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Lu(n,d.cachePool),fg(n,d),pr(),n.memoizedState=null):(e!==null&&Lu(n,null),Wh(),pr());return gi(e,n,u,a),n.child}function mc(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function c_(e,n,a,o,u){var d=zh();return d=d===null?null:{parent:Vn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Lu(n,null),Wh(),dg(n),e!==null&&ko(e,n,o,!0),n.childLanes=u,null}function ju(e,n){return n=Ku({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function u_(e,n,a){return ao(n,e.child,null,a),e=ju(n,n.pendingProps),e.flags|=2,ra(n),n.memoizedState=null,e}function Fy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ze){if(o.mode==="hidden")return e=ju(n,o),n.lanes=536870912,mc(null,e);if(qh(n),(e=vn)?(e=Mv(e,ba),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rr!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},a=q0(e),a.return=n,n.child=a,pi=n,vn=null)):e=null,e===null)throw lr(n);return n.lanes=536870912,null}return ju(n,o)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(qh(n),u)if(n.flags&256)n.flags&=-257,n=u_(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Xn||ko(e,n,a,!1),u=(a&e.childLanes)!==0,Xn||u){if(o=dn,o!==null&&(x=pa(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,Kr(e,x),qi(o,e,x),pp;rf(),n=u_(e,n,a)}else e=d.treeContext,vn=Aa(x.nextSibling),pi=n,ze=!0,or=null,ba=!1,e!==null&&K0(n,e),n=ju(n,o),n.flags|=4096;return n}return e=ys(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Zu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mp(e,n,a,o,u){return to(n),a=Zh(e,n,a,o,void 0,u),o=Kh(),e!==null&&!Xn?(Qh(e,n,u),Rs(e,n,u)):(ze&&o&&Dh(n),n.flags|=1,gi(e,n,a,u),n.child)}function f_(e,n,a,o,u,d){return to(n),n.updateQueue=null,a=pg(n,o,a,u),hg(e),o=Kh(),e!==null&&!Xn?(Qh(e,n,d),Rs(e,n,d)):(ze&&o&&Dh(n),n.flags|=1,gi(e,n,a,d),n.child)}function d_(e,n,a,o,u){if(to(n),n.stateNode===null){var d=zo,x=a.contextType;typeof x=="object"&&x!==null&&(d=mi(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=dp,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Gh(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?mi(x):zo,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(fp(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&dp.enqueueReplaceState(d,d.state,null),uc(n,o,d,u),cc(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,G=ro(a,A);d.props=G;var st=d.context,xt=a.contextType;x=zo,typeof xt=="object"&&xt!==null&&(x=mi(xt));var Rt=a.getDerivedStateFromProps;xt=typeof Rt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,xt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||st!==x)&&Jg(n,d,o,x),ur=!1;var lt=n.memoizedState;d.state=lt,uc(n,o,d,u),cc(),st=n.memoizedState,A||lt!==st||ur?(typeof Rt=="function"&&(fp(n,a,Rt,o),st=n.memoizedState),(G=ur||Qg(n,a,G,o,lt,st,x))?(xt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=x,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Vh(e,n),x=n.memoizedProps,xt=ro(a,x),d.props=xt,Rt=n.pendingProps,lt=d.context,st=a.contextType,G=zo,typeof st=="object"&&st!==null&&(G=mi(st)),A=a.getDerivedStateFromProps,(st=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Rt||lt!==G)&&Jg(n,d,o,G),ur=!1,lt=n.memoizedState,d.state=lt,uc(n,o,d,u),cc();var dt=n.memoizedState;x!==Rt||lt!==dt||ur||e!==null&&e.dependencies!==null&&Du(e.dependencies)?(typeof A=="function"&&(fp(n,a,A,o),dt=n.memoizedState),(xt=ur||Qg(n,a,xt,o,lt,dt,G)||e!==null&&e.dependencies!==null&&Du(e.dependencies))?(st||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,dt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,dt,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),d.props=o,d.state=dt,d.context=G,o=xt):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Zu(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=ao(n,e.child,null,u),n.child=ao(n,null,a,u)):gi(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Rs(e,n,u),e}function h_(e,n,a,o){return Jr(),n.flags|=256,gi(e,n,a,o),n.child}var gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _p(e){return{baseLanes:e,cachePool:ng()}}function vp(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=la),e}function p_(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(u?hr(n):pr(),(e=vn)?(e=Mv(e,ba),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rr!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},a=q0(e),a.return=n,n.child=a,pi=n,vn=null)):e=null,e===null)throw lr(n);return tm(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(pr(),u=n.mode,A=Ku({mode:"hidden",children:A},u),o=Qr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=_p(a),o.childLanes=vp(e,x,a),n.memoizedState=gp,mc(null,o)):(hr(n),xp(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)n.flags&256?(hr(n),n.flags&=-257,n=Sp(e,n,a)):n.memoizedState!==null?(pr(),n.child=e.child,n.flags|=128,n=null):(pr(),A=o.fallback,u=n.mode,o=Ku({mode:"visible",children:o.children},u),A=Qr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,ao(n,e.child,null,a),o=n.child,o.memoizedState=_p(a),o.childLanes=vp(e,x,a),n.memoizedState=gp,n=mc(null,o));else if(hr(n),tm(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var st=x.dgst;x=st,o=Error(s(419)),o.stack="",o.digest=x,ic({value:o,source:null,stack:null}),n=Sp(e,n,a)}else if(Xn||ko(e,n,a,!1),x=(a&e.childLanes)!==0,Xn||x){if(x=dn,x!==null&&(o=pa(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Kr(e,o),qi(x,e,o),pp;$p(A)||rf(),n=Sp(e,n,a)}else $p(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,vn=Aa(A.nextSibling),pi=n,ze=!0,or=null,ba=!1,e!==null&&K0(n,e),n=xp(n,o.children),n.flags|=4096);return n}return u?(pr(),A=o.fallback,u=n.mode,G=e.child,st=G.sibling,o=ys(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,st!==null?A=ys(st,A):(A=Qr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,mc(null,o),o=n.child,A=e.child.memoizedState,A===null?A=_p(a):(u=A.cachePool,u!==null?(G=Vn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=ng(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=vp(e,x,a),n.memoizedState=gp,mc(e.child,o)):(hr(n),a=e.child,e=a.sibling,a=ys(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function xp(e,n){return n=Ku({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ku(e,n){return e=aa(22,e,null,n),e.lanes=0,e}function Sp(e,n,a){return ao(n,e.child,null,a),e=xp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function m_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ih(e.return,n,a)}function yp(e,n,a,o,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function g_(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=On.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,vt(On,x),gi(e,n,o,a),o=ze?nc:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&m_(e,a,n);else if(e.tag===19)m_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Bu(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yp(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}yp(n,!0,a,null,d,o);break;case"together":yp(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Rs(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),_r|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ko(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ys(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ys(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Mp(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Du(e)))}function By(e,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),cr(n,Vn,e.memoizedState.cache),Jr();break;case 27:case 5:ie(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:cr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(hr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?p_(e,n,a):(hr(n),e=Rs(e,n,a),e!==null?e.sibling:null);hr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ko(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return g_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(On,On.current),o)break;return null;case 22:return n.lanes=0,l_(e,n,a,n.pendingProps);case 24:cr(n,Vn,e.memoizedState.cache)}return Rs(e,n,a)}function __(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Xn=!0;else{if(!Mp(e,a)&&(n.flags&128)===0)return Xn=!1,By(e,n,a);Xn=(e.flags&131072)!==0}else Xn=!1,ze&&(n.flags&1048576)!==0&&Z0(n,nc,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=no(n.elementType),n.type=e,typeof e=="function")Rh(e)?(o=ro(e,o),n.tag=1,n=d_(null,n,e,o,a)):(n.tag=0,n=mp(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=s_(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=r_(null,n,e,o,a);break t}}throw n=ot(e)||e,Error(s(306,n,""))}}return n;case 0:return mp(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ro(o,n.pendingProps),d_(e,n,o,u,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Vh(e,n),uc(n,o,null,a);var x=n.memoizedState;if(o=x.cache,cr(n,Vn,o),o!==d.cache&&Ph(n,[Vn],a,!0),cc(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=h_(e,n,o,a);break t}else if(o!==u){u=ya(Error(s(424)),n),ic(u),n=h_(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,vn=Aa(e.firstChild),pi=n,ze=!0,or=null,ba=!0,a=lg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Jr(),o===u){n=Rs(e,n,a);break t}gi(e,n,o,a)}n=n.child}return n;case 26:return Zu(e,n),e===null?(a=Cv(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=hf($.current).createElement(a),o[gn]=n,o[An]=e,_i(o,a,e),q(o),n.stateNode=o):n.memoizedState=Cv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&ze&&(o=n.stateNode=Tv(n.type,n.pendingProps,$.current),pi=n,ba=!0,u=vn,Mr(n.type)?(em=u,vn=Aa(o.firstChild)):vn=u),gi(e,n,n.pendingProps.children,a),Zu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((u=o=vn)&&(o=pM(o,n.type,n.pendingProps,ba),o!==null?(n.stateNode=o,pi=n,vn=Aa(o.firstChild),ba=!1,u=!0):u=!1),u||lr(n)),ie(n),u=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,o=d.children,Kp(u,d)?o=null:x!==null&&Kp(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Zh(e,n,wy,null,null,a),Dc._currentValue=u),Zu(e,n),gi(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=vn)&&(a=mM(a,n.pendingProps,ba),a!==null?(n.stateNode=a,pi=n,vn=null,e=!0):e=!1),e||lr(n)),null;case 13:return p_(e,n,a);case 4:return Nt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ao(n,null,o,a):gi(e,n,o,a),n.child;case 11:return s_(e,n,n.type,n.pendingProps,a);case 7:return gi(e,n,n.pendingProps,a),n.child;case 8:return gi(e,n,n.pendingProps.children,a),n.child;case 12:return gi(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,cr(n,n.type,o.value),gi(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,to(n),u=mi(u),o=o(u),n.flags|=1,gi(e,n,o,a),n.child;case 14:return r_(e,n,n.type,n.pendingProps,a);case 15:return o_(e,n,n.type,n.pendingProps,a);case 19:return g_(e,n,a);case 31:return Fy(e,n,a);case 22:return l_(e,n,a,n.pendingProps);case 24:return to(n),o=mi(Vn),e===null?(u=zh(),u===null&&(u=dn,d=Fh(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Gh(n),cr(n,Vn,u)):((e.lanes&a)!==0&&(Vh(e,n),uc(n,null,null,a),cc()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),cr(n,Vn,o)):(o=d.cache,cr(n,Vn,o),o!==u.cache&&Ph(n,[Vn],a,!0))),gi(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Cs(e){e.flags|=4}function Ep(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(X_())e.flags|=8192;else throw io=Ou,Hh}else e.flags&=-16777217}function v_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uv(n))if(X_())e.flags|=8192;else throw io=Ou,Hh}function Qu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?xe():536870912,e.lanes|=n,el|=n)}function gc(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function xn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function zy(e,n,a){var o=n.pendingProps;switch(Nh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(n),null;case 1:return xn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),bs(Vn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vo(n)?Cs(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uh())),xn(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(Cs(n),d!==null?(xn(n),v_(n,d)):(xn(n),Ep(n,u,null,o,a))):d?d!==e.memoizedState?(Cs(n),xn(n),v_(n,d)):(xn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Cs(n),xn(n),Ep(n,u,e,o,a)),null;case 27:if(re(n),a=$.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Cs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return xn(n),null}e=At.current,Vo(n)?Q0(n):(e=Tv(u,o,a),n.stateNode=e,Cs(n))}return xn(n),null;case 5:if(re(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Cs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return xn(n),null}if(d=At.current,Vo(n))Q0(n);else{var x=hf($.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[gn]=n,d[An]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(_i(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Cs(n)}}return xn(n),Ep(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Cs(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=$.current,Vo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=pi,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[gn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||pv(e.nodeValue,a)),e||lr(n,!0)}else e=hf(e).createTextNode(o),e[gn]=n,n.stateNode=e}return xn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Vo(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[gn]=n}else Jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xn(n),e=!1}else a=Uh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ra(n),n):(ra(n),null);if((n.flags&128)!==0)throw Error(s(558))}return xn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Vo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xn(n),u=!1}else u=Uh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ra(n),n):(ra(n),null)}return ra(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Qu(n,n.updateQueue),xn(n),null);case 4:return Xt(),e===null&&Wp(n.stateNode.containerInfo),xn(n),null;case 10:return bs(n.type),xn(n),null;case 19:if(k(On),o=n.memoizedState,o===null)return xn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)gc(o,!1);else{if(Dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Bu(e),d!==null){for(n.flags|=128,gc(o,!1),e=d.updateQueue,n.updateQueue=e,Qu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Y0(a,e),a=a.sibling;return vt(On,On.current&1|2),ze&&Ms(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>nf&&(n.flags|=128,u=!0,gc(o,!1),n.lanes=4194304)}else{if(!u)if(e=Bu(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Qu(n,e),gc(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ze)return xn(n),null}else 2*b()-o.renderingStartTime>nf&&a!==536870912&&(n.flags|=128,u=!0,gc(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=On.current,vt(On,u?a&1|2:a&1),ze&&Ms(n,o.treeForkCount),e):(xn(n),null);case 22:case 23:return ra(n),Yh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(xn(n),n.subtreeFlags&6&&(n.flags|=8192)):xn(n),a=n.updateQueue,a!==null&&Qu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&k(eo),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),bs(Vn),xn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Hy(e,n){switch(Nh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bs(Vn),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return re(n),null;case 31:if(n.memoizedState!==null){if(ra(n),n.alternate===null)throw Error(s(340));Jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ra(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return k(On),null;case 4:return Xt(),null;case 10:return bs(n.type),null;case 22:case 23:return ra(n),Yh(),e!==null&&k(eo),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return bs(Vn),null;case 25:return null;default:return null}}function x_(e,n){switch(Nh(n),n.tag){case 3:bs(Vn),Xt();break;case 26:case 27:case 5:re(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&ra(n);break;case 13:ra(n);break;case 19:k(On);break;case 10:bs(n.type);break;case 22:case 23:ra(n),Yh(),e!==null&&k(eo);break;case 24:bs(Vn)}}function _c(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){nn(n,n.return,A)}}function mr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var G=a,st=A;try{st()}catch(xt){nn(u,G,xt)}}}o=o.next}while(o!==d)}}catch(xt){nn(n,n.return,xt)}}function S_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ug(n,a)}catch(o){nn(e,e.return,o)}}}function y_(e,n,a){a.props=ro(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){nn(e,n,o)}}function vc(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){nn(e,n,u)}}function as(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){nn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){nn(e,n,u)}else a.current=null}function M_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){nn(e,e.return,u)}}function bp(e,n,a){try{var o=e.stateNode;lM(o,e.type,a,n),o[An]=n}catch(u){nn(e,e.return,u)}}function E_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mr(e.type)||e.tag===4}function Tp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||E_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ap(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=_a));else if(o!==4&&(o===27&&Mr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ap(e,n,a),e=e.sibling;e!==null;)Ap(e,n,a),e=e.sibling}function Ju(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Mr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ju(e,n,a),e=e.sibling;e!==null;)Ju(e,n,a),e=e.sibling}function b_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);_i(n,o,a),n[gn]=e,n[An]=a}catch(d){nn(e,e.return,d)}}var ws=!1,Wn=!1,Rp=!1,T_=typeof WeakSet=="function"?WeakSet:Set,si=null;function Gy(e,n){if(e=e.containerInfo,jp=Sf,e=Ha(e),di(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var x=0,A=-1,G=-1,st=0,xt=0,Rt=e,lt=null;e:for(;;){for(var dt;Rt!==a||u!==0&&Rt.nodeType!==3||(A=x+u),Rt!==d||o!==0&&Rt.nodeType!==3||(G=x+o),Rt.nodeType===3&&(x+=Rt.nodeValue.length),(dt=Rt.firstChild)!==null;)lt=Rt,Rt=dt;for(;;){if(Rt===e)break e;if(lt===a&&++st===u&&(A=x),lt===d&&++xt===o&&(G=x),(dt=Rt.nextSibling)!==null)break;Rt=lt,lt=Rt.parentNode}Rt=dt}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zp={focusedElem:e,selectionRange:a},Sf=!1,si=n;si!==null;)if(n=si,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,si=e;else for(;si!==null;){switch(n=si,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var $t=ro(a.type,u);e=o.getSnapshotBeforeUpdate($t,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(me){nn(a,a.return,me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Jp(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,si=e;break}si=n.return}}function A_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ns(e,a),o&4&&_c(5,a);break;case 1:if(Ns(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){nn(a,a.return,x)}else{var u=ro(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){nn(a,a.return,x)}}o&64&&S_(a),o&512&&vc(a,a.return);break;case 3:if(Ns(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ug(e,n)}catch(x){nn(a,a.return,x)}}break;case 27:n===null&&o&4&&b_(a);case 26:case 5:Ns(e,a),n===null&&o&4&&M_(a),o&512&&vc(a,a.return);break;case 12:Ns(e,a);break;case 31:Ns(e,a),o&4&&w_(e,a);break;case 13:Ns(e,a),o&4&&D_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ky.bind(null,a),gM(e,a))));break;case 22:if(o=a.memoizedState!==null||ws,!o){n=n!==null&&n.memoizedState!==null||Wn,u=ws;var d=Wn;ws=o,(Wn=n)&&!d?Ls(e,a,(a.subtreeFlags&8772)!==0):Ns(e,a),ws=u,Wn=d}break;case 30:break;default:Ns(e,a)}}function R_(e){var n=e.alternate;n!==null&&(e.alternate=null,R_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Sn=null,ki=!1;function Ds(e,n,a){for(a=a.child;a!==null;)C_(e,n,a),a=a.sibling}function C_(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Wn||as(a,n),Ds(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Wn||as(a,n);var o=Sn,u=ki;Mr(a.type)&&(Sn=a.stateNode,ki=!1),Ds(e,n,a),Rc(a.stateNode),Sn=o,ki=u;break;case 5:Wn||as(a,n);case 6:if(o=Sn,u=ki,Sn=null,Ds(e,n,a),Sn=o,ki=u,Sn!==null)if(ki)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(d){nn(a,n,d)}else try{Sn.removeChild(a.stateNode)}catch(d){nn(a,n,d)}break;case 18:Sn!==null&&(ki?(e=Sn,Sv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cl(e)):Sv(Sn,a.stateNode));break;case 4:o=Sn,u=ki,Sn=a.stateNode.containerInfo,ki=!0,Ds(e,n,a),Sn=o,ki=u;break;case 0:case 11:case 14:case 15:mr(2,a,n),Wn||mr(4,a,n),Ds(e,n,a);break;case 1:Wn||(as(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&y_(a,n,o)),Ds(e,n,a);break;case 21:Ds(e,n,a);break;case 22:Wn=(o=Wn)||a.memoizedState!==null,Ds(e,n,a),Wn=o;break;default:Ds(e,n,a)}}function w_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cl(e)}catch(a){nn(n,n.return,a)}}}function D_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cl(e)}catch(a){nn(n,n.return,a)}}function Vy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new T_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new T_),n;default:throw Error(s(435,e.tag))}}function $u(e,n){var a=Vy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Qy.bind(null,e,o);o.then(u,u)}})}function Xi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Mr(A.type)){Sn=A.stateNode,ki=!1;break t}break;case 5:Sn=A.stateNode,ki=!1;break t;case 3:case 4:Sn=A.stateNode.containerInfo,ki=!0;break t}A=A.return}if(Sn===null)throw Error(s(160));C_(d,x,u),Sn=null,ki=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)N_(n,e),n=n.sibling}var Va=null;function N_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xi(n,e),Wi(e),o&4&&(mr(3,e,e.return),_c(3,e),mr(5,e,e.return));break;case 1:Xi(n,e),Wi(e),o&512&&(Wn||a===null||as(a,a.return)),o&64&&ws&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Va;if(Xi(n,e),Wi(e),o&512&&(Wn||a===null||as(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ga]||d[gn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),_i(d,o,a),d[gn]=e,q(d),o=d;break t;case"link":var x=Nv("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}d=u.createElement(o),_i(d,o,a),u.head.appendChild(d);break;case"meta":if(x=Nv("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}d=u.createElement(o),_i(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[gn]=e,q(d),o=d}e.stateNode=o}else Lv(u,e.type,e.stateNode);else e.stateNode=Dv(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Lv(u,e.type,e.stateNode):Dv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bp(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xi(n,e),Wi(e),o&512&&(Wn||a===null||as(a,a.return)),a!==null&&o&4&&bp(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xi(n,e),Wi(e),o&512&&(Wn||a===null||as(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch($t){nn(e,e.return,$t)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,bp(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Rp=!0);break;case 6:if(Xi(n,e),Wi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($t){nn(e,e.return,$t)}}break;case 3:if(gf=null,u=Va,Va=pf(n.containerInfo),Xi(n,e),Va=u,Wi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{cl(n.containerInfo)}catch($t){nn(e,e.return,$t)}Rp&&(Rp=!1,L_(e));break;case 4:o=Va,Va=pf(e.stateNode.containerInfo),Xi(n,e),Wi(e),Va=o;break;case 12:Xi(n,e),Wi(e);break;case 31:Xi(n,e),Wi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$u(e,o)));break;case 13:Xi(n,e),Wi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ef=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$u(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,st=ws,xt=Wn;if(ws=st||u,Wn=xt||G,Xi(n,e),Wn=xt,ws=st,Wi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ws||Wn||oo(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=G.stateNode;var Rt=G.memoizedProps.style,lt=Rt!=null&&Rt.hasOwnProperty("display")?Rt.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch($t){nn(G,G.return,$t)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch($t){nn(G,G.return,$t)}}}else if(n.tag===18){if(a===null){G=n;try{var dt=G.stateNode;u?yv(dt,!0):yv(G.stateNode,!1)}catch($t){nn(G,G.return,$t)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$u(e,a))));break;case 19:Xi(n,e),Wi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$u(e,o)));break;case 30:break;case 21:break;default:Xi(n,e),Wi(e)}}function Wi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(E_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Tp(e);Ju(e,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(zn(x,""),a.flags&=-33);var A=Tp(e);Ju(e,A,x);break;case 3:case 4:var G=a.stateNode.containerInfo,st=Tp(e);Ap(e,st,G);break;default:throw Error(s(161))}}catch(xt){nn(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function L_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;L_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ns(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A_(e,n.alternate,n),n=n.sibling}function oo(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:mr(4,n,n.return),oo(n);break;case 1:as(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&y_(n,n.return,a),oo(n);break;case 27:Rc(n.stateNode);case 26:case 5:as(n,n.return),oo(n);break;case 22:n.memoizedState===null&&oo(n);break;case 30:oo(n);break;default:oo(n)}e=e.sibling}}function Ls(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ls(u,d,a),_c(4,d);break;case 1:if(Ls(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){nn(o,o.return,st)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)cg(G[u],A)}catch(st){nn(o,o.return,st)}}a&&x&64&&S_(d),vc(d,d.return);break;case 27:b_(d);case 26:case 5:Ls(u,d,a),a&&o===null&&x&4&&M_(d),vc(d,d.return);break;case 12:Ls(u,d,a);break;case 31:Ls(u,d,a),a&&x&4&&w_(u,d);break;case 13:Ls(u,d,a),a&&x&4&&D_(u,d);break;case 22:d.memoizedState===null&&Ls(u,d,a),vc(d,d.return);break;case 30:break;default:Ls(u,d,a)}n=n.sibling}}function Cp(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ac(a))}function wp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ac(e))}function ka(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U_(e,n,a,o),n=n.sibling}function U_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ka(e,n,a,o),u&2048&&_c(9,n);break;case 1:ka(e,n,a,o);break;case 3:ka(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ac(e)));break;case 12:if(u&2048){ka(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){nn(n,n.return,G)}}else ka(e,n,a,o);break;case 31:ka(e,n,a,o);break;case 13:ka(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?ka(e,n,a,o):xc(e,n):d._visibility&2?ka(e,n,a,o):(d._visibility|=2,Jo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Cp(x,n);break;case 24:ka(e,n,a,o),u&2048&&wp(n.alternate,n);break;default:ka(e,n,a,o)}}function Jo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,A=a,G=o,st=x.flags;switch(x.tag){case 0:case 11:case 15:Jo(d,x,A,G,u),_c(8,x);break;case 23:break;case 22:var xt=x.stateNode;x.memoizedState!==null?xt._visibility&2?Jo(d,x,A,G,u):xc(d,x):(xt._visibility|=2,Jo(d,x,A,G,u)),u&&st&2048&&Cp(x.alternate,x);break;case 24:Jo(d,x,A,G,u),u&&st&2048&&wp(x.alternate,x);break;default:Jo(d,x,A,G,u)}n=n.sibling}}function xc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:xc(a,o),u&2048&&Cp(o.alternate,o);break;case 24:xc(a,o),u&2048&&wp(o.alternate,o);break;default:xc(a,o)}n=n.sibling}}var Sc=8192;function $o(e,n,a){if(e.subtreeFlags&Sc)for(e=e.child;e!==null;)O_(e,n,a),e=e.sibling}function O_(e,n,a){switch(e.tag){case 26:$o(e,n,a),e.flags&Sc&&e.memoizedState!==null&&CM(a,Va,e.memoizedState,e.memoizedProps);break;case 5:$o(e,n,a);break;case 3:case 4:var o=Va;Va=pf(e.stateNode.containerInfo),$o(e,n,a),Va=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Sc,Sc=16777216,$o(e,n,a),Sc=o):$o(e,n,a));break;default:$o(e,n,a)}}function I_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];si=o,F_(o,e)}I_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)P_(e),e=e.sibling}function P_(e){switch(e.tag){case 0:case 11:case 15:yc(e),e.flags&2048&&mr(9,e,e.return);break;case 3:yc(e);break;case 12:yc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,tf(e)):yc(e);break;default:yc(e)}}function tf(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];si=o,F_(o,e)}I_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:mr(8,n,n.return),tf(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tf(n));break;default:tf(n)}e=e.sibling}}function F_(e,n){for(;si!==null;){var a=si;switch(a.tag){case 0:case 11:case 15:mr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ac(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,si=o;else t:for(a=e;si!==null;){o=si;var u=o.sibling,d=o.return;if(R_(o),o===a){si=null;break t}if(u!==null){u.return=d,si=u;break t}si=d}}}var ky={getCacheForType:function(e){var n=mi(Vn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return mi(Vn).controller.signal}},Xy=typeof WeakMap=="function"?WeakMap:Map,Ke=0,dn=null,Oe=null,Fe=0,en=0,oa=null,gr=!1,tl=!1,Dp=!1,Us=0,Dn=0,_r=0,lo=0,Np=0,la=0,el=0,Mc=null,Yi=null,Lp=!1,ef=0,B_=0,nf=1/0,af=null,vr=null,Qn=0,xr=null,nl=null,Os=0,Up=0,Op=null,z_=null,Ec=0,Ip=null;function ca(){return(Ke&2)!==0&&Fe!==0?Fe&-Fe:O.T!==null?Gp():Di()}function H_(){if(la===0)if((Fe&536870912)===0||ze){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),la=e}else la=536870912;return e=sa.current,e!==null&&(e.flags|=32),la}function qi(e,n,a){(e===dn&&(en===2||en===9)||e.cancelPendingCommit!==null)&&(il(e,0),Sr(e,Fe,la,!1)),Qe(e,a),((Ke&2)===0||e!==dn)&&(e===dn&&((Ke&2)===0&&(lo|=a),Dn===4&&Sr(e,Fe,la,!1)),ss(e))}function G_(e,n,a){if((Ke&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?qy(e,n):Fp(e,n,!0),d=o;do{if(u===0){tl&&!o&&Sr(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Wy(a)){u=Fp(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Mc;var G=A.current.memoizedState.isDehydrated;if(G&&(il(A,x).flags|=256),x=Fp(A,x,!1),x!==2){if(Dp&&!G){A.errorRecoveryDisabledLanes|=d,lo|=d,u=4;break t}d=Yi,Yi=u,d!==null&&(Yi===null?Yi=d:Yi.push.apply(Yi,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){il(e,0),Sr(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Sr(o,n,la,!gr);break t;case 2:Yi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ef+300-b(),10<u)){if(Sr(o,n,la,!gr),pt(o,0,!0)!==0)break t;Os=n,o.timeoutHandle=vv(V_.bind(null,o,a,Yi,af,Lp,n,la,lo,el,gr,d,"Throttled",-0,0),u);break t}V_(o,a,Yi,af,Lp,n,la,lo,el,gr,d,null,-0,0)}}break}while(!0);ss(e)}function V_(e,n,a,o,u,d,x,A,G,st,xt,Rt,lt,dt){if(e.timeoutHandle=-1,Rt=n.subtreeFlags,Rt&8192||(Rt&16785408)===16785408){Rt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},O_(n,d,Rt);var $t=(d&62914560)===d?ef-b():(d&4194048)===d?B_-b():0;if($t=wM(Rt,$t),$t!==null){Os=d,e.cancelPendingCommit=$t(K_.bind(null,e,n,d,a,o,u,x,A,G,xt,Rt,null,lt,dt)),Sr(e,d,x,!st);return}}K_(e,n,d,a,o,u,x,A,G)}function Wy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Un(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sr(e,n,a,o){n&=~Np,n&=~lo,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-bt(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&Gi(e,a,n)}function sf(){return(Ke&6)===0?(bc(0),!1):!0}function Pp(){if(Oe!==null){if(en===0)var e=Oe.return;else e=Oe,Es=$r=null,Jh(e),qo=null,rc=0,e=Oe;for(;e!==null;)x_(e.alternate,e),e=e.return;Oe=null}}function il(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Os=0,Pp(),dn=e,Oe=a=ys(e.current,null),Fe=n,en=0,oa=null,gr=!1,tl=Bt(e,n),Dp=!1,el=la=Np=lo=_r=Dn=0,Yi=Mc=null,Lp=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-bt(o),d=1<<u;n|=e[u],o&=~d}return Us=n,Tu(),a}function k_(e,n){Ee=null,O.H=pc,n===Yo||n===Uu?(n=sg(),en=3):n===Hh?(n=sg(),en=4):en=n===pp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oa=n,Oe===null&&(Dn=1,qu(e,ya(n,e.current)))}function X_(){var e=sa.current;return e===null?!0:(Fe&4194048)===Fe?Ta===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===Ta:!1}function W_(){var e=O.H;return O.H=pc,e===null?pc:e}function Y_(){var e=O.A;return O.A=ky,e}function rf(){Dn=4,gr||(Fe&4194048)!==Fe&&sa.current!==null||(tl=!0),(_r&134217727)===0&&(lo&134217727)===0||dn===null||Sr(dn,Fe,la,!1)}function Fp(e,n,a){var o=Ke;Ke|=2;var u=W_(),d=Y_();(dn!==e||Fe!==n)&&(af=null,il(e,n)),n=!1;var x=Dn;t:do try{if(en!==0&&Oe!==null){var A=Oe,G=oa;switch(en){case 8:Pp(),x=6;break t;case 3:case 2:case 9:case 6:sa.current===null&&(n=!0);var st=en;if(en=0,oa=null,al(e,A,G,st),a&&tl){x=0;break t}break;default:st=en,en=0,oa=null,al(e,A,G,st)}}Yy(),x=Dn;break}catch(xt){k_(e,xt)}while(!0);return n&&e.shellSuspendCounter++,Es=$r=null,Ke=o,O.H=u,O.A=d,Oe===null&&(dn=null,Fe=0,Tu()),x}function Yy(){for(;Oe!==null;)q_(Oe)}function qy(e,n){var a=Ke;Ke|=2;var o=W_(),u=Y_();dn!==e||Fe!==n?(af=null,nf=b()+500,il(e,n)):tl=Bt(e,n);t:do try{if(en!==0&&Oe!==null){n=Oe;var d=oa;e:switch(en){case 1:en=0,oa=null,al(e,n,d,1);break;case 2:case 9:if(ig(d)){en=0,oa=null,j_(n);break}n=function(){en!==2&&en!==9||dn!==e||(en=7),ss(e)},d.then(n,n);break t;case 3:en=7;break t;case 4:en=5;break t;case 7:ig(d)?(en=0,oa=null,j_(n)):(en=0,oa=null,al(e,n,d,7));break;case 5:var x=null;switch(Oe.tag){case 26:x=Oe.memoizedState;case 5:case 27:var A=Oe;if(x?Uv(x):A.stateNode.complete){en=0,oa=null;var G=A.sibling;if(G!==null)Oe=G;else{var st=A.return;st!==null?(Oe=st,of(st)):Oe=null}break e}}en=0,oa=null,al(e,n,d,5);break;case 6:en=0,oa=null,al(e,n,d,6);break;case 8:Pp(),Dn=6;break t;default:throw Error(s(462))}}jy();break}catch(xt){k_(e,xt)}while(!0);return Es=$r=null,O.H=o,O.A=u,Ke=a,Oe!==null?0:(dn=null,Fe=0,Tu(),Dn)}function jy(){for(;Oe!==null&&!te();)q_(Oe)}function q_(e){var n=__(e.alternate,e,Us);e.memoizedProps=e.pendingProps,n===null?of(e):Oe=n}function j_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=f_(a,n,n.pendingProps,n.type,void 0,Fe);break;case 11:n=f_(a,n,n.pendingProps,n.type.render,n.ref,Fe);break;case 5:Jh(n);default:x_(a,n),n=Oe=Y0(n,Us),n=__(a,n,Us)}e.memoizedProps=e.pendingProps,n===null?of(e):Oe=n}function al(e,n,a,o){Es=$r=null,Jh(n),qo=null,rc=0;var u=n.return;try{if(Py(e,u,n,a,Fe)){Dn=1,qu(e,ya(a,e.current)),Oe=null;return}}catch(d){if(u!==null)throw Oe=u,d;Dn=1,qu(e,ya(a,e.current)),Oe=null;return}n.flags&32768?(ze||o===1?e=!0:tl||(Fe&536870912)!==0?e=!1:(gr=e=!0,(o===2||o===9||o===3||o===6)&&(o=sa.current,o!==null&&o.tag===13&&(o.flags|=16384))),Z_(n,e)):of(n)}function of(e){var n=e;do{if((n.flags&32768)!==0){Z_(n,gr);return}e=n.return;var a=zy(n.alternate,n,Us);if(a!==null){Oe=a;return}if(n=n.sibling,n!==null){Oe=n;return}Oe=n=e}while(n!==null);Dn===0&&(Dn=5)}function Z_(e,n){do{var a=Hy(e.alternate,e);if(a!==null){a.flags&=32767,Oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Oe=e;return}Oe=e=a}while(e!==null);Dn=6,Oe=null}function K_(e,n,a,o,u,d,x,A,G){e.cancelPendingCommit=null;do lf();while(Qn!==0);if((Ke&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Th,Pn(e,a,d,x,A,G),e===dn&&(Oe=dn=null,Fe=0),nl=n,xr=e,Os=a,Up=d,Op=u,z_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jy(Z,function(){return ev(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=P.p,P.p=2,x=Ke,Ke|=4;try{Gy(e,n,a)}finally{Ke=x,P.p=u,O.T=o}}Qn=1,Q_(),J_(),$_()}}function Q_(){if(Qn===1){Qn=0;var e=xr,n=nl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Ke;Ke|=4;try{N_(n,e);var d=Zp,x=Ha(e.containerInfo),A=d.focusedElem,G=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&Pi(A.ownerDocument.documentElement,A)){if(G!==null&&di(A)){var st=G.start,xt=G.end;if(xt===void 0&&(xt=st),"selectionStart"in A)A.selectionStart=st,A.selectionEnd=Math.min(xt,A.value.length);else{var Rt=A.ownerDocument||document,lt=Rt&&Rt.defaultView||window;if(lt.getSelection){var dt=lt.getSelection(),$t=A.textContent.length,me=Math.min(G.start,$t),cn=G.end===void 0?me:Math.min(G.end,$t);!dt.extend&&me>cn&&(x=cn,cn=me,me=x);var J=Cn(A,me),W=Cn(A,cn);if(J&&W&&(dt.rangeCount!==1||dt.anchorNode!==J.node||dt.anchorOffset!==J.offset||dt.focusNode!==W.node||dt.focusOffset!==W.offset)){var it=Rt.createRange();it.setStart(J.node,J.offset),dt.removeAllRanges(),me>cn?(dt.addRange(it),dt.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),dt.addRange(it))}}}}for(Rt=[],dt=A;dt=dt.parentNode;)dt.nodeType===1&&Rt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Rt.length;A++){var Tt=Rt[A];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}Sf=!!jp,Zp=jp=null}finally{Ke=u,P.p=o,O.T=a}}e.current=n,Qn=2}}function J_(){if(Qn===2){Qn=0;var e=xr,n=nl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Ke;Ke|=4;try{A_(e,n.alternate,n)}finally{Ke=u,P.p=o,O.T=a}}Qn=3}}function $_(){if(Qn===4||Qn===3){Qn=0,U();var e=xr,n=nl,a=Os,o=z_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Qn=5:(Qn=0,nl=xr=null,tv(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(vr=null),Zs(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=P.p,P.p=2,O.T=null;try{for(var d=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];d(A.value,{componentStack:A.stack})}}finally{O.T=n,P.p=u}}(Os&3)!==0&&lf(),ss(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ip?Ec++:(Ec=0,Ip=e):Ec=0,bc(0)}}function tv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ac(n)))}function lf(){return Q_(),J_(),$_(),ev()}function ev(){if(Qn!==5)return!1;var e=xr,n=Up;Up=0;var a=Zs(Os),o=O.T,u=P.p;try{P.p=32>a?32:a,O.T=null,a=Op,Op=null;var d=xr,x=Os;if(Qn=0,nl=xr=null,Os=0,(Ke&6)!==0)throw Error(s(331));var A=Ke;if(Ke|=4,P_(d.current),U_(d,d.current,x,a),Ke=A,bc(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ut,d)}catch{}return!0}finally{P.p=u,O.T=o,tv(e,n)}}function nv(e,n,a){n=ya(a,n),n=hp(e.stateNode,n,2),e=dr(e,n,2),e!==null&&(Qe(e,2),ss(e))}function nn(e,n,a){if(e.tag===3)nv(e,e,a);else for(;n!==null;){if(n.tag===3){nv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(vr===null||!vr.has(o))){e=ya(a,e),a=i_(2),o=dr(n,a,2),o!==null&&(a_(a,o,n,e),Qe(o,2),ss(o));break}}n=n.return}}function Bp(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Xy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Dp=!0,u.add(a),e=Zy.bind(null,e,n,a),n.then(e,e))}function Zy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,dn===e&&(Fe&a)===a&&(Dn===4||Dn===3&&(Fe&62914560)===Fe&&300>b()-ef?(Ke&2)===0&&il(e,0):Np|=a,el===Fe&&(el=0)),ss(e)}function iv(e,n){n===0&&(n=xe()),e=Kr(e,n),e!==null&&(Qe(e,n),ss(e))}function Ky(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),iv(e,a)}function Qy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),iv(e,a)}function Jy(e,n){return Ne(e,n)}var cf=null,sl=null,zp=!1,uf=!1,Hp=!1,yr=0;function ss(e){e!==sl&&e.next===null&&(sl===null?cf=sl=e:sl=sl.next=e),uf=!0,zp||(zp=!0,tM())}function bc(e,n){if(!Hp&&uf){Hp=!0;do for(var a=!1,o=cf;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-bt(42|e)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,ov(o,d))}else d=Fe,d=pt(o,o===dn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Bt(o,d)||(a=!0,ov(o,d));o=o.next}while(a);Hp=!1}}function $y(){av()}function av(){uf=zp=!1;var e=0;yr!==0&&uM()&&(e=yr);for(var n=b(),a=null,o=cf;o!==null;){var u=o.next,d=sv(o,n);d===0?(o.next=null,a===null?cf=u:a.next=u,u===null&&(sl=a)):(a=o,(e!==0||(d&3)!==0)&&(uf=!0)),o=u}Qn!==0&&Qn!==5||bc(e),yr!==0&&(yr=0)}function sv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-bt(d),A=1<<x,G=u[x];G===-1?((A&a)===0||(A&o)!==0)&&(u[x]=le(A,n)):G<=n&&(e.expiredLanes|=A),d&=~A}if(n=dn,a=Fe,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(en===2||en===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&We(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&We(o),Zs(a)){case 2:case 8:a=nt;break;case 32:a=Z;break;case 268435456:a=gt;break;default:a=Z}return o=rv.bind(null,e),a=Ne(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&We(o),e.callbackPriority=2,e.callbackNode=null,2}function rv(e,n){if(Qn!==0&&Qn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lf()&&e.callbackNode!==a)return null;var o=Fe;return o=pt(e,e===dn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(G_(e,o,n),sv(e,b()),e.callbackNode!=null&&e.callbackNode===a?rv.bind(null,e):null)}function ov(e,n){if(lf())return null;G_(e,n,!0)}function tM(){dM(function(){(Ke&6)!==0?Ne(F,$y):av()})}function Gp(){if(yr===0){var e=Xo;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),yr=e}return yr}function lv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Do(""+e)}function cv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function eM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=lv((u[An]||null).action),x=o.submitter;x&&(n=(n=x[An]||null)?lv(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var A=new ea("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(yr!==0){var G=x?cv(u,x):new FormData(u);op(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=x?cv(u,x):new FormData(u),op(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Vp=0;Vp<Zr.length;Vp++){var kp=Zr[Vp],nM=kp.toLowerCase(),iM=kp[0].toUpperCase()+kp.slice(1);Kn(nM,"on"+iM)}Kn(ia,"onAnimationEnd"),Kn(Ye,"onAnimationIteration"),Kn(es,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(jr,"onTransitionRun"),Kn(nr,"onTransitionStart"),Kn(xa,"onTransitionCancel"),Kn(Sa,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tc));function uv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],G=A.instance,st=A.currentTarget;if(A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=st;try{d(u)}catch(xt){ar(xt)}u.currentTarget=null,d=G}else for(x=0;x<o.length;x++){if(A=o[x],G=A.instance,st=A.currentTarget,A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=st;try{d(u)}catch(xt){ar(xt)}u.currentTarget=null,d=G}}}}function Ie(e,n){var a=n[Ia];a===void 0&&(a=n[Ia]=new Set);var o=e+"__bubble";a.has(o)||(fv(n,e,2,!1),a.add(o))}function Xp(e,n,a){var o=0;n&&(o|=4),fv(a,e,o,n)}var ff="_reactListening"+Math.random().toString(36).slice(2);function Wp(e){if(!e[ff]){e[ff]=!0,ft.forEach(function(a){a!=="selectionchange"&&(aM.has(a)||Xp(a,!1,e),Xp(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ff]||(n[ff]=!0,Xp("selectionchange",!1,n))}}function fv(e,n,a,o){switch(Hv(n)){case 2:var u=LM;break;case 8:u=UM;break;default:u=rm}a=u.bind(null,n,a,e),u=void 0,!Fa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Yp(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Si(A),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=d=x;continue t}A=A.parentNode}}o=o.return}ui(function(){var st=d,xt=ts(a),Rt=[];t:{var lt=ir.get(e);if(lt!==void 0){var dt=ea,$t=e;switch(e){case"keypress":if(va(a)===0)break t;case"keydown":case"keyup":dt=tr;break;case"focusin":$t="focus",dt=Xr;break;case"focusout":$t="blur",dt=Xr;break;case"beforeblur":case"afterblur":dt=Xr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Uo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Zl;break;case ia:case Ye:case es:dt=du;break;case Sa:dt=Ql;break;case"scroll":case"scrollend":dt=fu;break;case"wheel":dt=xu;break;case"copy":case"cut":case"paste":dt=Oo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Io;break;case"toggle":case"beforetoggle":dt=Po}var me=(n&4)!==0,cn=!me&&(e==="scroll"||e==="scrollend"),J=me?lt!==null?lt+"Capture":null:lt;me=[];for(var W=st,it;W!==null;){var Tt=W;if(it=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||it===null||J===null||(Tt=Oi(W,J),Tt!=null&&me.push(Ac(W,Tt,it))),cn)break;W=W.return}0<me.length&&(lt=new dt(lt,$t,null,a,xt),Rt.push({event:lt,listeners:me}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",lt&&a!==kl&&($t=a.relatedTarget||a.fromElement)&&(Si($t)||$t[ma]))break t;if((dt||lt)&&(lt=xt.window===xt?xt:(lt=xt.ownerDocument)?lt.defaultView||lt.parentWindow:window,dt?($t=a.relatedTarget||a.toElement,dt=st,$t=$t?Si($t):null,$t!==null&&(cn=c($t),me=$t.tag,$t!==cn||me!==5&&me!==27&&me!==6)&&($t=null)):(dt=null,$t=st),dt!==$t)){if(me=Wl,Tt="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(me=Io,Tt="onPointerLeave",J="onPointerEnter",W="pointer"),cn=dt==null?lt:Ji(dt),it=$t==null?lt:Ji($t),lt=new me(Tt,W+"leave",dt,a,xt),lt.target=cn,lt.relatedTarget=it,Tt=null,Si(xt)===st&&(me=new me(J,W+"enter",$t,a,xt),me.target=it,me.relatedTarget=cn,Tt=me),cn=Tt,dt&&$t)e:{for(me=sM,J=dt,W=$t,it=0,Tt=J;Tt;Tt=me(Tt))it++;Tt=0;for(var oe=W;oe;oe=me(oe))Tt++;for(;0<it-Tt;)J=me(J),it--;for(;0<Tt-it;)W=me(W),Tt--;for(;it--;){if(J===W||W!==null&&J===W.alternate){me=J;break e}J=me(J),W=me(W)}me=null}else me=null;dt!==null&&dv(Rt,lt,dt,me,!1),$t!==null&&cn!==null&&dv(Rt,cn,$t,me,!0)}}t:{if(lt=st?Ji(st):window,dt=lt.nodeName&&lt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&lt.type==="file")var qe=Ue;else if(St(lt))if(Ze)qe=Vi;else{qe=En;var ae=fn}else dt=lt.nodeName,!dt||dt.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&Ks(st.elementType)&&(qe=Ue):qe=tn;if(qe&&(qe=qe(e,st))){jt(Rt,qe,a,xt);break t}ae&&ae(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&Ni(lt,"number",lt.value)}switch(ae=st?Ji(st):window,e){case"focusin":(St(ae)||ae.contentEditable==="true")&&(hi=ae,Ss=st,jn=null);break;case"focusout":jn=Ss=hi=null;break;case"mousedown":Hn=!0;break;case"contextmenu":case"mouseup":case"dragend":Hn=!1,bi(Rt,a,xt);break;case"selectionchange":if(Ga)break;case"keydown":case"keyup":bi(Rt,a,xt)}var Ae;if(Fo)t:{switch(e){case"compositionstart":var Be="onCompositionStart";break t;case"compositionend":Be="onCompositionEnd";break t;case"compositionupdate":Be="onCompositionUpdate";break t}Be=void 0}else vs?ec(e,a)&&(Be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Be="onCompositionStart");Be&&(Jl&&a.locale!=="ko"&&(vs||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&vs&&(Ae=ta()):(Ii=xt,Qs="value"in Ii?Ii.value:Ii.textContent,vs=!0)),ae=df(st,Be),0<ae.length&&(Be=new pu(Be,e,null,a,xt),Rt.push({event:Be,listeners:ae}),Ae?Be.data=Ae:(Ae=Bo(a),Ae!==null&&(Be.data=Ae)))),(Ae=qr?Mu(e,a):Eu(e,a))&&(Be=df(st,"onBeforeInput"),0<Be.length&&(ae=new pu("onBeforeInput","beforeinput",null,a,xt),Rt.push({event:ae,listeners:Be}),ae.data=Ae)),eM(Rt,e,st,a,xt)}uv(Rt,n)})}function Ac(e,n,a){return{instance:e,listener:n,currentTarget:a}}function df(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Oi(e,a),u!=null&&o.unshift(Ac(e,u,d)),u=Oi(e,n),u!=null&&o.push(Ac(e,u,d))),e.tag===3)return o;e=e.return}return[]}function sM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dv(e,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var A=a,G=A.alternate,st=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||st===null||(G=st,u?(st=Oi(a,d),st!=null&&x.unshift(Ac(a,st,G))):u||(st=Oi(a,d),st!=null&&x.push(Ac(a,st,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var rM=/\r\n?/g,oM=/\u0000|\uFFFD/g;function hv(e){return(typeof e=="string"?e:""+e).replace(rM,`
`).replace(oM,"")}function pv(e,n){return n=hv(n),hv(e)===n}function ln(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":se(e,"class",o);break;case"tabIndex":se(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,a,o);break;case"style":Pa(e,o,d);break;case"data":if(n!=="object"){se(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Do(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&ln(e,n,"name",u.name,u,null),ln(e,n,"formEncType",u.formEncType,u,null),ln(e,n,"formMethod",u.formMethod,u,null),ln(e,n,"formTarget",u.formTarget,u,null)):(ln(e,n,"encType",u.encType,u,null),ln(e,n,"method",u.method,u,null),ln(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Do(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=_a);break;case"onScroll":o!=null&&Ie("scroll",e);break;case"onScrollEnd":o!=null&&Ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Do(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),he(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":he(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yh.get(a)||a,he(e,a,o))}}function qp(e,n,a,o,u,d){switch(a){case"style":Pa(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&Ie("scroll",e);break;case"onScrollEnd":o!=null&&Ie("scrollend",e);break;case"onClick":o!=null&&(e.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):he(e,a,o)}}}function _i(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,d,x,a,null)}}u&&ln(e,n,"srcSet",a.srcSet,a,null),o&&ln(e,n,"src",a.src,a,null);return;case"input":Ie("invalid",e);var A=d=x=u=null,G=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var xt=a[o];if(xt!=null)switch(o){case"name":u=xt;break;case"type":x=xt;break;case"checked":G=xt;break;case"defaultChecked":st=xt;break;case"value":d=xt;break;case"defaultValue":A=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(s(137,n));break;default:ln(e,n,o,xt,a,null)}}Bn(e,d,A,G,st,x,u,!1);return;case"select":Ie("invalid",e),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:ln(e,n,u,A,a,null)}n=d,a=x,e.multiple=!!o,n!=null?yi(e,!!o,n,!1):a!=null&&yi(e,!!o,a,!0);return;case"textarea":Ie("invalid",e),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ln(e,n,x,A,a,null)}Rn(e,o,u,d);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ln(e,n,G,o,a,null));return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(o=0;o<Tc.length;o++)Ie(Tc[o],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,st,o,a,null)}return;default:if(Ks(n)){for(xt in a)a.hasOwnProperty(xt)&&(o=a[xt],o!==void 0&&qp(e,n,xt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ln(e,n,A,o,a,null))}function lM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,G=null,st=null,xt=null;for(dt in a){var Rt=a[dt];if(a.hasOwnProperty(dt)&&Rt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":G=Rt;default:o.hasOwnProperty(dt)||ln(e,n,dt,null,o,Rt)}}for(var lt in o){var dt=o[lt];if(Rt=a[lt],o.hasOwnProperty(lt)&&(dt!=null||Rt!=null))switch(lt){case"type":d=dt;break;case"name":u=dt;break;case"checked":st=dt;break;case"defaultChecked":xt=dt;break;case"value":x=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==Rt&&ln(e,n,lt,dt,o,Rt)}}Fn(e,x,A,G,st,xt,d,u);return;case"select":dt=x=A=lt=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":dt=G;default:o.hasOwnProperty(d)||ln(e,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":lt=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==G&&ln(e,n,u,d,o,G)}n=A,a=x,o=dt,lt!=null?yi(e,!!a,lt,!1):!!o!=!!a&&(n!=null?yi(e,!!a,n,!0):yi(e,!!a,a?[]:"",!1));return;case"textarea":dt=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ln(e,n,A,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":lt=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&ln(e,n,x,u,o,d)}Le(e,lt,dt);return;case"option":for(var $t in a)lt=a[$t],a.hasOwnProperty($t)&&lt!=null&&!o.hasOwnProperty($t)&&($t==="selected"?e.selected=!1:ln(e,n,$t,null,o,lt));for(G in o)lt=o[G],dt=a[G],o.hasOwnProperty(G)&&lt!==dt&&(lt!=null||dt!=null)&&(G==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":ln(e,n,G,lt,o,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)lt=a[me],a.hasOwnProperty(me)&&lt!=null&&!o.hasOwnProperty(me)&&ln(e,n,me,null,o,lt);for(st in o)if(lt=o[st],dt=a[st],o.hasOwnProperty(st)&&lt!==dt&&(lt!=null||dt!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:ln(e,n,st,lt,o,dt)}return;default:if(Ks(n)){for(var cn in a)lt=a[cn],a.hasOwnProperty(cn)&&lt!==void 0&&!o.hasOwnProperty(cn)&&qp(e,n,cn,void 0,o,lt);for(xt in o)lt=o[xt],dt=a[xt],!o.hasOwnProperty(xt)||lt===dt||lt===void 0&&dt===void 0||qp(e,n,xt,lt,o,dt);return}}for(var J in a)lt=a[J],a.hasOwnProperty(J)&&lt!=null&&!o.hasOwnProperty(J)&&ln(e,n,J,null,o,lt);for(Rt in o)lt=o[Rt],dt=a[Rt],!o.hasOwnProperty(Rt)||lt===dt||lt==null&&dt==null||ln(e,n,Rt,lt,o,dt)}function mv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&mv(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],st=G.startTime;if(st>A)break;var xt=G.transferSize,Rt=G.initiatorType;xt&&mv(Rt)&&(G=G.responseEnd,x+=xt*(G<A?1:(A-st)/(G-st)))}if(--o,n+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jp=null,Zp=null;function hf(e){return e.nodeType===9?e:e.ownerDocument}function gv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _v(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Kp(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qp=null;function uM(){var e=window.event;return e&&e.type==="popstate"?e===Qp?!1:(Qp=e,!0):(Qp=null,!1)}var vv=typeof setTimeout=="function"?setTimeout:void 0,fM=typeof clearTimeout=="function"?clearTimeout:void 0,xv=typeof Promise=="function"?Promise:void 0,dM=typeof queueMicrotask=="function"?queueMicrotask:typeof xv<"u"?function(e){return xv.resolve(null).then(e).catch(hM)}:vv;function hM(e){setTimeout(function(){throw e})}function Mr(e){return e==="head"}function Sv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),cl(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Rc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rc(a);for(var d=a.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[ga]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Rc(e.ownerDocument.body);a=u}while(a);cl(n)}function yv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Jp(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jp(a),Qi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ga])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Aa(e.nextSibling),e===null)break}return null}function mM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Aa(e.nextSibling),e===null))return null;return e}function Mv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Aa(e.nextSibling),e===null))return null;return e}function $p(e){return e.data==="$?"||e.data==="$~"}function tm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Aa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var em=null;function Ev(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Aa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function bv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Tv(e,n,a){switch(n=hf(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Rc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qi(e)}var Ra=new Map,Av=new Set;function pf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Is=P.d;P.d={f:_M,r:vM,D:xM,C:SM,L:yM,m:MM,X:bM,S:EM,M:TM};function _M(){var e=Is.f(),n=sf();return e||n}function vM(e){var n=$a(e);n!==null&&n.tag===5&&n.type==="form"?kg(n):Is.r(e)}var rl=typeof document>"u"?null:document;function Rv(e,n,a){var o=rl;if(o&&typeof n=="string"&&n){var u=ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Av.has(u)||(Av.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),_i(n,"link",e),q(n),o.head.appendChild(n)))}}function xM(e){Is.D(e),Rv("dns-prefetch",e,null)}function SM(e,n){Is.C(e,n),Rv("preconnect",e,n)}function yM(e,n,a){Is.L(e,n,a);var o=rl;if(o&&e&&n){var u='link[rel="preload"][as="'+ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ue(a.imageSizes)+'"]')):u+='[href="'+ue(e)+'"]';var d=u;switch(n){case"style":d=ol(e);break;case"script":d=ll(e)}Ra.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ra.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Cc(d))||n==="script"&&o.querySelector(wc(d))||(n=o.createElement("link"),_i(n,"link",e),q(n),o.head.appendChild(n)))}}function MM(e,n){Is.m(e,n);var a=rl;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ue(o)+'"][href="'+ue(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ll(e)}if(!Ra.has(d)&&(e=v({rel:"modulepreload",href:e},n),Ra.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wc(d)))return}o=a.createElement("link"),_i(o,"link",e),q(o),a.head.appendChild(o)}}}function EM(e,n,a){Is.S(e,n,a);var o=rl;if(o&&e){var u=R(o).hoistableStyles,d=ol(e);n=n||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Cc(d)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ra.get(d))&&nm(e,a);var G=x=o.createElement("link");q(G),_i(G,"link",e),G._p=new Promise(function(st,xt){G.onload=st,G.onerror=xt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,mf(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function bM(e,n){Is.X(e,n);var a=rl;if(a&&e){var o=R(a).hoistableScripts,u=ll(e),d=o.get(u);d||(d=a.querySelector(wc(u)),d||(e=v({src:e,async:!0},n),(n=Ra.get(u))&&im(e,n),d=a.createElement("script"),q(d),_i(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function TM(e,n){Is.M(e,n);var a=rl;if(a&&e){var o=R(a).hoistableScripts,u=ll(e),d=o.get(u);d||(d=a.querySelector(wc(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=Ra.get(u))&&im(e,n),d=a.createElement("script"),q(d),_i(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Cv(e,n,a,o){var u=(u=$.current)?pf(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ol(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ol(a.href);var d=R(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(Cc(e)))&&!d._p&&(x.instance=d,x.state.loading=5),Ra.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ra.set(e,a),d||AM(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ll(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ol(e){return'href="'+ue(e)+'"'}function Cc(e){return'link[rel="stylesheet"]['+e+"]"}function wv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function AM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),_i(n,"link",a),q(n),e.head.appendChild(n))}function ll(e){return'[src="'+ue(e)+'"]'}function wc(e){return"script[async]"+e}function Dv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ue(a.href)+'"]');if(o)return n.instance=o,q(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),q(o),_i(o,"style",u),mf(o,a.precedence,e),n.instance=o;case"stylesheet":u=ol(a.href);var d=e.querySelector(Cc(u));if(d)return n.state.loading|=4,n.instance=d,q(d),d;o=wv(a),(u=Ra.get(u))&&nm(o,u),d=(e.ownerDocument||e).createElement("link"),q(d);var x=d;return x._p=new Promise(function(A,G){x.onload=A,x.onerror=G}),_i(d,"link",o),n.state.loading|=4,mf(d,a.precedence,e),n.instance=d;case"script":return d=ll(a.src),(u=e.querySelector(wc(d)))?(n.instance=u,q(u),u):(o=a,(u=Ra.get(d))&&(o=v({},a),im(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),_i(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mf(o,a.precedence,e));return n.instance}function mf(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function im(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var gf=null;function Nv(e,n,a){if(gf===null){var o=new Map,u=gf=new Map;u.set(a,o)}else u=gf,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[ga]||d[gn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(d):o.set(x,[d])}}return o}function Lv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function RM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Uv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function CM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ol(o.href),d=n.querySelector(Cc(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_f.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,q(d);return}d=n.ownerDocument||n,o=wv(o),(u=Ra.get(u))&&nm(o,u),d=d.createElement("link"),q(d);var x=d;x._p=new Promise(function(A,G){x.onload=A,x.onerror=G}),_i(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_f.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var am=0;function wM(e,n){return e.stylesheets&&e.count===0&&xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&xf(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&am===0&&(am=62500*cM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xf(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>am?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _f(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vf=null;function xf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vf=new Map,n.forEach(DM,e),vf=null,_f.call(e))}function DM(e,n){if(!(n.state.loading&4)){var a=vf.get(e);if(a)var o=a.get(null);else{a=new Map,vf.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=_f.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Dc={$$typeof:L,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function NM(e,n,a,o,u,d,x,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Ov(e,n,a,o,u,d,x,A,G,st,xt,Rt){return e=new NM(e,n,a,x,G,st,xt,Rt,A),n=1,d===!0&&(n|=24),d=aa(3,null,null,n),e.current=d,d.stateNode=e,n=Fh(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Gh(d),e}function Iv(e){return e?(e=zo,e):zo}function Pv(e,n,a,o,u,d){u=Iv(u),o.context===null?o.context=u:o.pendingContext=u,o=fr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=dr(e,o,n),a!==null&&(qi(a,e,n),lc(a,e,n))}function Fv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sm(e,n){Fv(e,n),(e=e.alternate)&&Fv(e,n)}function Bv(e){if(e.tag===13||e.tag===31){var n=Kr(e,67108864);n!==null&&qi(n,e,67108864),sm(e,67108864)}}function zv(e){if(e.tag===13||e.tag===31){var n=ca();n=Nn(n);var a=Kr(e,n);a!==null&&qi(a,e,n),sm(e,n)}}var Sf=!0;function LM(e,n,a,o){var u=O.T;O.T=null;var d=P.p;try{P.p=2,rm(e,n,a,o)}finally{P.p=d,O.T=u}}function UM(e,n,a,o){var u=O.T;O.T=null;var d=P.p;try{P.p=8,rm(e,n,a,o)}finally{P.p=d,O.T=u}}function rm(e,n,a,o){if(Sf){var u=om(o);if(u===null)Yp(e,n,o,yf,a),Gv(e,o);else if(IM(u,e,n,a,o))o.stopPropagation();else if(Gv(e,o),n&4&&-1<OM.indexOf(e)){for(;u!==null;){var d=$a(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ct(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var G=1<<31-bt(x);A.entanglements[1]|=G,x&=~G}ss(d),(Ke&6)===0&&(nf=b()+500,bc(0))}}break;case 31:case 13:A=Kr(d,2),A!==null&&qi(A,d,2),sf(),sm(d,2)}if(d=om(o),d===null&&Yp(e,n,o,yf,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Yp(e,n,o,null,a)}}function om(e){return e=ts(e),lm(e)}var yf=null;function lm(e){if(yf=null,e=Si(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yf=e,null}function Hv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case F:return 2;case nt:return 8;case Z:case Lt:return 32;case gt:return 268435456;default:return 32}default:return 32}}var cm=!1,Er=null,br=null,Tr=null,Nc=new Map,Lc=new Map,Ar=[],OM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gv(e,n){switch(e){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Nc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lc.delete(n.pointerId)}}function Uc(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=$a(n),n!==null&&Bv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function IM(e,n,a,o,u){switch(n){case"focusin":return Er=Uc(Er,e,n,a,o,u),!0;case"dragenter":return br=Uc(br,e,n,a,o,u),!0;case"mouseover":return Tr=Uc(Tr,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Nc.set(d,Uc(Nc.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Lc.set(d,Uc(Lc.get(d)||null,e,n,a,o,u)),!0}return!1}function Vv(e){var n=Si(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Oa(e.priority,function(){zv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Oa(e.priority,function(){zv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mf(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=om(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);kl=o,a.target.dispatchEvent(o),kl=null}else return n=$a(a),n!==null&&Bv(n),e.blockedOn=a,!1;n.shift()}return!0}function kv(e,n,a){Mf(e)&&a.delete(n)}function PM(){cm=!1,Er!==null&&Mf(Er)&&(Er=null),br!==null&&Mf(br)&&(br=null),Tr!==null&&Mf(Tr)&&(Tr=null),Nc.forEach(kv),Lc.forEach(kv)}function Ef(e,n){e.blockedOn===n&&(e.blockedOn=null,cm||(cm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PM)))}var bf=null;function Xv(e){bf!==e&&(bf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bf===e&&(bf=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(lm(o||a)===null)continue;break}var d=$a(a);d!==null&&(e.splice(n,3),n-=3,op(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function cl(e){function n(G){return Ef(G,e)}Er!==null&&Ef(Er,e),br!==null&&Ef(br,e),Tr!==null&&Ef(Tr,e),Nc.forEach(n),Lc.forEach(n);for(var a=0;a<Ar.length;a++){var o=Ar[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ar.length&&(a=Ar[0],a.blockedOn===null);)Vv(a),a.blockedOn===null&&Ar.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[An]||null;if(typeof d=="function")x||Xv(a);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[An]||null)A=x.formAction;else if(lm(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Xv(a)}}}function Wv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function um(e){this._internalRoot=e}Tf.prototype.render=um.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ca();Pv(a,o,e,n,null,null)},Tf.prototype.unmount=um.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pv(e.current,2,null,e,null,null),sf(),n[ma]=null}};function Tf(e){this._internalRoot=e}Tf.prototype.unstable_scheduleHydration=function(e){if(e){var n=Di();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ar.length&&n!==0&&n<Ar[a].priority;a++);Ar.splice(a,0,e),a===0&&Vv(e)}};var Yv=t.version;if(Yv!=="19.2.4")throw Error(s(527,Yv,"19.2.4"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var FM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Af=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Af.isDisabled&&Af.supportsFiber)try{ut=Af.inject(FM),Et=Af}catch{}}return Ic.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=$g,d=t_,x=e_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Ov(e,1,!1,null,null,a,o,null,u,d,x,Wv),e[ma]=n.current,Wp(e),new um(n)},Ic.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=$g,x=t_,A=e_,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Ov(e,1,!0,n,a??null,o,u,G,d,x,A,Wv),n.context=Iv(null),a=n.current,o=ca(),o=Nn(o),u=fr(o),u.callback=null,dr(a,u,o),a=o,n.current.lanes=a,Qe(n,a),ss(n),e[ma]=n.current,Wp(e),new Tf(n)},Ic.version="19.2.4",Ic}var nx;function qM(){if(nx)return hm.exports;nx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hm.exports=YM(),hm.exports}var jM=qM();const th="183",lS=0,e0=1,cS=2,uS=0,Mo=1,fS=2,Cl=3,qs=0,wi=1,qn=2,us=0,Eo=1,n0=2,i0=3,a0=4,dS=5,Ir=100,hS=101,pS=102,mS=103,gS=104,_S=200,vS=201,xS=202,SS=203,ud=204,fd=205,yS=206,MS=207,ES=208,bS=209,TS=210,AS=211,RS=212,CS=213,wS=214,dd=0,hd=1,pd=2,bo=3,md=4,gd=5,_d=6,vd=7,eh=0,DS=1,NS=2,Za=0,_0=1,v0=2,x0=3,nh=4,S0=5,y0=6,M0=7,E0=300,Br=301,To=302,id=303,ad=304,uu=306,Ll=1e3,cs=1001,xd=1002,oi=1003,LS=1004,Zc=1005,li=1006,sd=1007,Ws=1008,Zi=1009,b0=1010,T0=1011,Ul=1012,ih=1013,Qa=1014,Na=1015,fs=1016,ah=1017,sh=1018,Ol=1020,A0=35902,R0=35899,C0=1021,w0=1022,La=1023,ds=1026,Pr=1027,rh=1028,oh=1029,Ao=1030,lh=1031,ch=1033,$c=33776,tu=33777,eu=33778,nu=33779,Sd=35840,yd=35841,Md=35842,Ed=35843,bd=36196,Td=37492,Ad=37496,Rd=37488,Cd=37489,wd=37490,Dd=37491,Nd=37808,Ld=37809,Ud=37810,Od=37811,Id=37812,Pd=37813,Fd=37814,Bd=37815,zd=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,Wd=36492,Yd=36494,qd=36495,jd=36283,Zd=36284,Kd=36285,Qd=36286,US=3200,uh=0,OS=1,ks="",Jn="srgb",Ro="srgb-linear",ru="linear",Je="srgb",xo=7680,s0=519,IS=512,PS=513,FS=514,fh=515,BS=516,zS=517,dh=518,HS=519,r0=35044,o0="300 es",ja=2e3,Il=2001;function ZM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Jd(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function GS(){const r=Jd("canvas");return r.style.display="block",r}const ix={};function l0(...r){const t="THREE."+r.shift();console.log(t,...r)}function VS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ge(...r){r=VS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ve(...r){r=VS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function ou(...r){const t=r.join(" ");t in ix||(ix[t]=!0,ge(...r))}function KM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const QM={[dd]:hd,[pd]:_d,[md]:vd,[bo]:gd,[hd]:dd,[_d]:pd,[vd]:md,[gd]:bo};class Co{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ax=1234567;const iu=Math.PI/180,Pl=180/Math.PI;function zl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ri[r&255]+Ri[r>>8&255]+Ri[r>>16&255]+Ri[r>>24&255]+"-"+Ri[t&255]+Ri[t>>8&255]+"-"+Ri[t>>16&15|64]+Ri[t>>24&255]+"-"+Ri[i&63|128]+Ri[i>>8&255]+"-"+Ri[i>>16&255]+Ri[i>>24&255]+Ri[s&255]+Ri[s>>8&255]+Ri[s>>16&255]+Ri[s>>24&255]).toLowerCase()}function we(r,t,i){return Math.max(t,Math.min(i,r))}function D0(r,t){return(r%t+t)%t}function JM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function $M(r,t,i){return r!==t?(i-r)/(t-r):0}function au(r,t,i){return(1-i)*r+i*t}function tE(r,t,i,s){return au(r,t,1-Math.exp(-i*s))}function eE(r,t=1){return t-Math.abs(D0(r,t*2)-t)}function nE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function iE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function aE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function sE(r,t){return r+Math.random()*(t-r)}function rE(r){return r*(.5-Math.random())}function oE(r){r!==void 0&&(ax=r);let t=ax+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lE(r){return r*iu}function cE(r){return r*Pl}function uE(r){return(r&r-1)===0&&r!==0}function fE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hE(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),S=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*_,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*E,m*S,h*p);break;case"YXY":r.set(m*S,h*_,m*E,h*p);break;case"ZYZ":r.set(m*E,m*S,h*_,h*p);break;default:ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Rl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:iu,RAD2DEG:Pl,generateUUID:zl,clamp:we,euclideanModulo:D0,mapLinear:JM,inverseLerp:$M,lerp:au,damp:tE,pingpong:eE,smoothstep:nE,smootherstep:iE,randInt:aE,randFloat:sE,randFloatSpread:rE,seededRandom:oE,degToRad:lE,radToDeg:cE,isPowerOfTwo:uE,ceilPowerOfTwo:fE,floorPowerOfTwo:dE,setQuaternionFromProperEuler:hE,normalize:Bi,denormalize:Rl};class De{constructor(t=0,i=0){De.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(we(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class js{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],S=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==S||_!==E){let M=m*g+p*S+_*E+v*w;M<0&&(g=-g,S=-S,E=-E,w=-w,M=-M);let y=1-h;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);y=Math.sin(y*C)/L,h=Math.sin(h*C)/L,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+w*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+w*h;const C=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=C,p*=C,_*=C,v*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+_*v+m*S-p*g,t[i+1]=m*E+_*g+p*v-h*S,t[i+2]=p*E+_*S+h*g-m*v,t[i+3]=_*E-h*v-m*g-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(c/2),g=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>h&&s>v){const S=2*Math.sqrt(1+s-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-s-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(sx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(sx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),_=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*_,this.y=s+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _m.copy(this).projectOnVector(t),this.sub(_m)}reflect(t){return this.sub(_m.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(we(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _m=new K,sx=new js;class be{constructor(t,i,s,l,c,f,h,m,p){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],S=s[5],E=s[8],w=l[0],M=l[3],y=l[6],C=l[1],L=l[4],D=l[7],B=l[2],z=l[5],H=l[8];return c[0]=f*w+h*C+m*B,c[3]=f*M+h*L+m*z,c[6]=f*y+h*D+m*H,c[1]=p*w+_*C+v*B,c[4]=p*M+_*L+v*z,c[7]=p*y+_*D+v*H,c[2]=g*w+S*C+E*B,c[5]=g*M+S*L+E*z,c[8]=g*y+S*D+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,E=i*v+s*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(h*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-h*i)*w,t[6]=S*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(vm.makeScale(t,i)),this}rotate(t){return this.premultiply(vm.makeRotation(-t)),this}translate(t,i){return this.premultiply(vm.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vm=new be,rx=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ox=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pE(){const r={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Je&&(l.r=Ys(l.r),l.g=Ys(l.g),l.b=Ys(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Je&&(l.r=Nl(l.r),l.g=Nl(l.g),l.b=Nl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ks?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ou("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ou("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ro]:{primaries:t,whitePoint:s,transfer:ru,toXYZ:rx,fromXYZ:ox,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:t,whitePoint:s,transfer:Je,toXYZ:rx,fromXYZ:ox,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),r}const ke=pE();function Ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ul;class kS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ul===void 0&&(ul=Jd("canvas")),ul.width=t.width,ul.height=t.height;const l=ul.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ul}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Jd("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ys(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ys(i[s]/255)*255):i[s]=Ys(i[s]);return{data:i,width:t.width,height:t.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mE=0;class hh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=zl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(xm(l[f].image)):c.push(xm(l[f]))}else c=xm(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function xm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ge("Texture: Unable to serialize Texture."),{})}let gE=0;const Sm=new K;class vi extends Co{constructor(t=vi.DEFAULT_IMAGE,i=vi.DEFAULT_MAPPING,s=cs,l=cs,c=li,f=Ws,h=La,m=Zi,p=vi.DEFAULT_ANISOTROPY,_=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=zl(),this.name="",this.source=new hh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sm).x}get height(){return this.source.getSize(Sm).y}get depth(){return this.source.getSize(Sm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ge(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ge(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ll:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ll:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=E0;vi.DEFAULT_ANISOTROPY=1;class Tn{constructor(t=0,i=0,s=0,l=1){Tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],w=m[2],M=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(S+1)/2,B=(y+1)/2,z=(_+g)/4,H=(v+w)/4,T=(E+M)/4;return L>D&&L>B?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=z/s,c=H/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=z/l,c=T/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=H/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(v-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this.w=we(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this.w=we(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XS extends Co{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Tn(0,0,t,i),this.scissorTest=!1,this.viewport=new Tn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new vi(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ka extends XS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class N0 extends vi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WS extends vi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(t,i,s,l,c,f,h,m,p,_,v,g,S,E,w,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,_,v,g,S,E,w,M)}set(t,i,s,l,c,f,h,m,p,_,v,g,S,E,w,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/fl.setFromMatrixColumn(t,0).length(),c=1/fl.setFromMatrixColumn(t,1).length(),f=1/fl.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,S=f*v,E=h*_,w=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=g-w*p,i[9]=-h*m,i[2]=w-g*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,S=m*v,E=p*_,w=p*v;i[0]=g+w*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=S*h-E,i[6]=w+g*h,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,S=m*v,E=p*_,w=p*v;i[0]=g-w*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*_,i[9]=w-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,S=f*v,E=h*_,w=h*v;i[0]=m*_,i[4]=E*p-S,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,S=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=w-g*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+E,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,S=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_E,t,vE)}lookAt(t,i,s){const l=this.elements;return ua.subVectors(t,i),ua.lengthSq()===0&&(ua.z=1),ua.normalize(),Cr.crossVectors(s,ua),Cr.lengthSq()===0&&(Math.abs(s.z)===1?ua.x+=1e-4:ua.z+=1e-4,ua.normalize(),Cr.crossVectors(s,ua)),Cr.normalize(),Rf.crossVectors(ua,Cr),l[0]=Cr.x,l[4]=Rf.x,l[8]=ua.x,l[1]=Cr.y,l[5]=Rf.y,l[9]=ua.y,l[2]=Cr.z,l[6]=Rf.z,l[10]=ua.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],S=s[13],E=s[2],w=s[6],M=s[10],y=s[14],C=s[3],L=s[7],D=s[11],B=s[15],z=l[0],H=l[4],T=l[8],N=l[12],mt=l[1],V=l[5],et=l[9],rt=l[13],ot=l[2],Q=l[6],O=l[10],P=l[14],ct=l[3],_t=l[7],Dt=l[11],I=l[15];return c[0]=f*z+h*mt+m*ot+p*ct,c[4]=f*H+h*V+m*Q+p*_t,c[8]=f*T+h*et+m*O+p*Dt,c[12]=f*N+h*rt+m*P+p*I,c[1]=_*z+v*mt+g*ot+S*ct,c[5]=_*H+v*V+g*Q+S*_t,c[9]=_*T+v*et+g*O+S*Dt,c[13]=_*N+v*rt+g*P+S*I,c[2]=E*z+w*mt+M*ot+y*ct,c[6]=E*H+w*V+M*Q+y*_t,c[10]=E*T+w*et+M*O+y*Dt,c[14]=E*N+w*rt+M*P+y*I,c[3]=C*z+L*mt+D*ot+B*ct,c[7]=C*H+L*V+D*Q+B*_t,c[11]=C*T+L*et+D*O+B*Dt,c[15]=C*N+L*rt+D*P+B*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],S=t[14],E=t[3],w=t[7],M=t[11],y=t[15],C=m*S-p*g,L=h*S-p*v,D=h*g-m*v,B=f*S-p*_,z=f*g-m*_,H=f*v-h*_;return i*(w*C-M*L+y*D)-s*(E*C-M*B+y*z)+l*(E*L-w*B+y*H)-c*(E*D-w*z+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],S=t[11],E=t[12],w=t[13],M=t[14],y=t[15],C=i*h-s*f,L=i*m-l*f,D=i*p-c*f,B=s*m-l*h,z=s*p-c*h,H=l*p-c*m,T=_*w-v*E,N=_*M-g*E,mt=_*y-S*E,V=v*M-g*w,et=v*y-S*w,rt=g*y-S*M,ot=C*rt-L*et+D*V+B*mt-z*N+H*T;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ot;return t[0]=(h*rt-m*et+p*V)*Q,t[1]=(l*et-s*rt-c*V)*Q,t[2]=(w*H-M*z+y*B)*Q,t[3]=(g*z-v*H-S*B)*Q,t[4]=(m*mt-f*rt-p*N)*Q,t[5]=(i*rt-l*mt+c*N)*Q,t[6]=(M*D-E*H-y*L)*Q,t[7]=(_*H-g*D+S*L)*Q,t[8]=(f*et-h*mt+p*T)*Q,t[9]=(s*mt-i*et-c*T)*Q,t[10]=(E*z-w*D+y*C)*Q,t[11]=(v*D-_*z-S*C)*Q,t[12]=(h*N-f*V-m*T)*Q,t[13]=(i*V-s*N+l*T)*Q,t[14]=(w*L-E*B-M*C)*Q,t[15]=(_*B-v*L+g*C)*Q,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,E=c*v,w=f*_,M=f*v,y=h*v,C=m*p,L=m*_,D=m*v,B=s.x,z=s.y,H=s.z;return l[0]=(1-(w+y))*B,l[1]=(S+D)*B,l[2]=(E-L)*B,l[3]=0,l[4]=(S-D)*z,l[5]=(1-(g+y))*z,l[6]=(M+C)*z,l[7]=0,l[8]=(E+L)*H,l[9]=(M-C)*H,l[10]=(1-(g+w))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=fl.set(l[0],l[1],l[2]).length();const h=fl.set(l[4],l[5],l[6]).length(),m=fl.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Xa.copy(this);const p=1/f,_=1/h,v=1/m;return Xa.elements[0]*=p,Xa.elements[1]*=p,Xa.elements[2]*=p,Xa.elements[4]*=_,Xa.elements[5]*=_,Xa.elements[6]*=_,Xa.elements[8]*=v,Xa.elements[9]*=v,Xa.elements[10]*=v,i.setFromRotationMatrix(Xa),s.x=f,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,f,h=ja,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(h===ja)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===Il)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=ja,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(h===ja)E=-2/(f-c),w=-(f+c)/(f-c);else if(h===Il)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fl=new K,Xa=new un,_E=new K(0,0,0),vE=new K(1,1,1),Cr=new K,Rf=new K,ua=new K,lx=new un,cx=new js;class da{constructor(t=0,i=0,s=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-we(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(we(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-we(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(we(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return lx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return cx.setFromEuler(this),this.setFromQuaternion(cx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xE=0;const ux=new K,dl=new js,Ps=new un,Cf=new K,Pc=new K,SE=new K,yE=new js,fx=new K(1,0,0),dx=new K(0,1,0),hx=new K(0,0,1),px={type:"added"},ME={type:"removed"},hl={type:"childadded",child:null},ym={type:"childremoved",child:null};class pn extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new K,i=new da,s=new js,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new be}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return dl.setFromAxisAngle(t,i),this.quaternion.multiply(dl),this}rotateOnWorldAxis(t,i){return dl.setFromAxisAngle(t,i),this.quaternion.premultiply(dl),this}rotateX(t){return this.rotateOnAxis(fx,t)}rotateY(t){return this.rotateOnAxis(dx,t)}rotateZ(t){return this.rotateOnAxis(hx,t)}translateOnAxis(t,i){return ux.copy(t).applyQuaternion(this.quaternion),this.position.add(ux.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fx,t)}translateY(t){return this.translateOnAxis(dx,t)}translateZ(t){return this.translateOnAxis(hx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cf.copy(t):Cf.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Pc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(Pc,Cf,this.up):Ps.lookAt(Cf,Pc,this.up),this.quaternion.setFromRotationMatrix(Ps),l&&(Ps.extractRotation(l.matrixWorld),dl.setFromRotationMatrix(Ps),this.quaternion.premultiply(dl.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(px),hl.child=t,this.dispatchEvent(hl),hl.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ME),ym.child=t,this.dispatchEvent(ym),ym.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(px),hl.child=t,this.dispatchEvent(hl),hl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pc,t,SE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pc,yE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}pn.DEFAULT_UP=new K(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wl extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),y=this._getHandJoint(p,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new wl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const YS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},wf={h:0,s:0,l:0};function Mm(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ke.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ke.workingColorSpace){return this.r=t,this.g=i,this.b=s,ke.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ke.workingColorSpace){if(t=D0(t,1),i=we(i,0,1),s=we(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Mm(f,c,t+1/3),this.g=Mm(f,c,t),this.b=Mm(f,c,t-1/3)}return ke.colorSpaceToWorking(this,l),this}setStyle(t,i=Jn){function s(c){c!==void 0&&parseFloat(c)<1&&ge("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ge("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ge("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Jn){const s=YS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ge("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}copyLinearToSRGB(t){return this.r=Nl(t.r),this.g=Nl(t.g),this.b=Nl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return ke.workingToColorSpace(Ci.copy(this),t),Math.round(we(Ci.r*255,0,255))*65536+Math.round(we(Ci.g*255,0,255))*256+Math.round(we(Ci.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ke.workingColorSpace){ke.workingToColorSpace(Ci.copy(this),i);const s=Ci.r,l=Ci.g,c=Ci.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=ke.workingColorSpace){return ke.workingToColorSpace(Ci.copy(this),i),t.r=Ci.r,t.g=Ci.g,t.b=Ci.b,t}getStyle(t=Jn){ke.workingToColorSpace(Ci.copy(this),t);const i=Ci.r,s=Ci.g,l=Ci.b;return t!==Jn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(wr),this.setHSL(wr.h+t,wr.s+i,wr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(wr),t.getHSL(wf);const s=au(wr.h,wf.h,i),l=au(wr.s,wf.s,i),c=au(wr.l,wf.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ci=new fe;fe.NAMES=YS;class lu{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=i,this.far=s}clone(){return new lu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class L0 extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Wa=new K,Fs=new K,Em=new K,Bs=new K,pl=new K,ml=new K,mx=new K,bm=new K,Tm=new K,Am=new K,Rm=new Tn,Cm=new Tn,wm=new Tn;class Da{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Wa.subVectors(t,i),l.cross(Wa);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Wa.subVectors(l,i),Fs.subVectors(s,i),Em.subVectors(t,i);const f=Wa.dot(Wa),h=Wa.dot(Fs),m=Wa.dot(Em),p=Fs.dot(Fs),_=Fs.dot(Em),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,Bs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Bs.x),m.addScaledVector(f,Bs.y),m.addScaledVector(h,Bs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Rm.setScalar(0),Cm.setScalar(0),wm.setScalar(0),Rm.fromBufferAttribute(t,i),Cm.fromBufferAttribute(t,s),wm.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Rm,c.x),f.addScaledVector(Cm,c.y),f.addScaledVector(wm,c.z),f}static isFrontFacing(t,i,s,l){return Wa.subVectors(s,i),Fs.subVectors(t,i),Wa.cross(Fs).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wa.subVectors(this.c,this.b),Fs.subVectors(this.a,this.b),Wa.cross(Fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Da.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Da.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Da.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Da.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Da.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;pl.subVectors(l,s),ml.subVectors(c,s),bm.subVectors(t,s);const m=pl.dot(bm),p=ml.dot(bm);if(m<=0&&p<=0)return i.copy(s);Tm.subVectors(t,l);const _=pl.dot(Tm),v=ml.dot(Tm);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(pl,f);Am.subVectors(t,c);const S=pl.dot(Am),E=ml.dot(Am);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(ml,h);const M=_*E-S*v;if(M<=0&&v-_>=0&&S-E>=0)return mx.subVectors(c,l),h=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(mx,h);const y=1/(M+w+g);return f=w*y,h=g*y,i.copy(s).addScaledVector(pl,f).addScaledVector(ml,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class zr{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ya.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ya.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ya.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ya):Ya.fromBufferAttribute(c,f),Ya.applyMatrix4(t.matrixWorld),this.expandByPoint(Ya);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Df.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Df.copy(s.boundingBox)),Df.applyMatrix4(t.matrixWorld),this.union(Df)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ya),Ya.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fc),Nf.subVectors(this.max,Fc),gl.subVectors(t.a,Fc),_l.subVectors(t.b,Fc),vl.subVectors(t.c,Fc),Dr.subVectors(_l,gl),Nr.subVectors(vl,_l),co.subVectors(gl,vl);let i=[0,-Dr.z,Dr.y,0,-Nr.z,Nr.y,0,-co.z,co.y,Dr.z,0,-Dr.x,Nr.z,0,-Nr.x,co.z,0,-co.x,-Dr.y,Dr.x,0,-Nr.y,Nr.x,0,-co.y,co.x,0];return!Dm(i,gl,_l,vl,Nf)||(i=[1,0,0,0,1,0,0,0,1],!Dm(i,gl,_l,vl,Nf))?!1:(Lf.crossVectors(Dr,Nr),i=[Lf.x,Lf.y,Lf.z],Dm(i,gl,_l,vl,Nf))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ya).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ya).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zs=[new K,new K,new K,new K,new K,new K,new K,new K],Ya=new K,Df=new zr,gl=new K,_l=new K,vl=new K,Dr=new K,Nr=new K,co=new K,Fc=new K,Nf=new K,Lf=new K,uo=new K;function Dm(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){uo.fromArray(r,c);const h=l.x*Math.abs(uo.x)+l.y*Math.abs(uo.y)+l.z*Math.abs(uo.z),m=t.dot(uo),p=i.dot(uo),_=s.dot(uo);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Yn=new K,Uf=new De;let bE=0;class Ua{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=r0,this.updateRanges=[],this.gpuType=Na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uf.fromBufferAttribute(this,i),Uf.applyMatrix3(t),this.setXY(i,Uf.x,Uf.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Yn.fromBufferAttribute(this,i),Yn.applyMatrix3(t),this.setXYZ(i,Yn.x,Yn.y,Yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Yn.fromBufferAttribute(this,i),Yn.applyMatrix4(t),this.setXYZ(i,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Yn.fromBufferAttribute(this,i),Yn.applyNormalMatrix(t),this.setXYZ(i,Yn.x,Yn.y,Yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Yn.fromBufferAttribute(this,i),Yn.transformDirection(t),this.setXYZ(i,Yn.x,Yn.y,Yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Rl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Rl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Rl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Rl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Rl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bi(i,this.array),s=Bi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bi(i,this.array),s=Bi(s,this.array),l=Bi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Bi(i,this.array),s=Bi(s,this.array),l=Bi(l,this.array),c=Bi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==r0&&(t.usage=this.usage),t}}class U0 extends Ua{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class O0 extends Ua{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ci extends Ua{constructor(t,i,s){super(new Float32Array(t),i,s)}}const TE=new zr,Bc=new K,Nm=new K;class Hl{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):TE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bc.subVectors(t,this.center);const i=Bc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bc.copy(t.center).add(Nm)),this.expandByPoint(Bc.copy(t.center).sub(Nm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let AE=0;const Ca=new un,Lm=new pn,xl=new K,fa=new zr,zc=new zr,ri=new K;class ha extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ZM(t)?O0:U0)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new be().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ca.makeRotationFromQuaternion(t),this.applyMatrix4(Ca),this}rotateX(t){return Ca.makeRotationX(t),this.applyMatrix4(Ca),this}rotateY(t){return Ca.makeRotationY(t),this.applyMatrix4(Ca),this}rotateZ(t){return Ca.makeRotationZ(t),this.applyMatrix4(Ca),this}translate(t,i,s){return Ca.makeTranslation(t,i,s),this.applyMatrix4(Ca),this}scale(t,i,s){return Ca.makeScale(t,i,s),this.applyMatrix4(Ca),this}lookAt(t){return Lm.lookAt(t),Lm.updateMatrix(),this.applyMatrix4(Lm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xl).negate(),this.translate(xl.x,xl.y,xl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ci(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];fa.setFromBufferAttribute(c),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,fa.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,fa.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(fa.min),this.boundingBox.expandByPoint(fa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(fa.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];zc.setFromBufferAttribute(h),this.morphTargetsRelative?(ri.addVectors(fa.min,zc.min),fa.expandByPoint(ri),ri.addVectors(fa.max,zc.max),fa.expandByPoint(ri)):(fa.expandByPoint(zc.min),fa.expandByPoint(zc.max))}fa.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)ri.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(ri));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)ri.fromBufferAttribute(h,p),m&&(xl.fromBufferAttribute(t,p),ri.add(xl)),l=Math.max(l,s.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ua(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new K,m[T]=new K;const p=new K,_=new K,v=new K,g=new De,S=new De,E=new De,w=new K,M=new K;function y(T,N,mt){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),v.fromBufferAttribute(s,mt),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,N),E.fromBufferAttribute(c,mt),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),h[T].add(w),h[N].add(w),h[mt].add(w),m[T].add(M),m[N].add(M),m[mt].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,N=C.length;T<N;++T){const mt=C[T],V=mt.start,et=mt.count;for(let rt=V,ot=V+et;rt<ot;rt+=3)y(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new K,D=new K,B=new K,z=new K;function H(T){B.fromBufferAttribute(l,T),z.copy(B);const N=h[T];L.copy(N),L.sub(B.multiplyScalar(B.dot(N))).normalize(),D.crossVectors(z,N);const V=D.dot(m[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,V)}for(let T=0,N=C.length;T<N;++T){const mt=C[T],V=mt.start,et=mt.count;for(let rt=V,ot=V+et;rt<ot;rt+=3)H(t.getX(rt+0)),H(t.getX(rt+1)),H(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ua(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,f=new K,h=new K,m=new K,p=new K,_=new K,v=new K;if(t)for(let g=0,S=t.count;g<S;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)ri.fromBufferAttribute(t,i),ri.normalize(),t.setXYZ(i,ri.x,ri.y,ri.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?S=m[w]*h.data.stride+h.offset:S=m[w]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new Ua(g,_,v)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ha,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=t(g,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let RE=0;class wo extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=Eo,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ge(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ge(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(s.blending=this.blending),this.side!==qs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ud&&(s.blendSrc=this.blendSrc),this.blendDst!==fd&&(s.blendDst=this.blendDst),this.blendEquation!==Ir&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Hs=new K,Um=new K,Of=new K,Lr=new K,Om=new K,If=new K,Im=new K;class I0{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hs)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Hs.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Hs.copy(this.origin).addScaledVector(this.direction,i),Hs.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Um.copy(t).add(i).multiplyScalar(.5),Of.copy(i).sub(t).normalize(),Lr.copy(this.origin).sub(Um);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Of),h=Lr.dot(this.direction),m=-Lr.dot(Of),p=Lr.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Um).addScaledVector(Of,g),S}intersectSphere(t,i){Hs.subVectors(t.center,this.origin);const s=Hs.dot(this.direction),l=Hs.dot(Hs)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Hs)!==null}intersectTriangle(t,i,s,l,c){Om.subVectors(i,t),If.subVectors(s,t),Im.crossVectors(Om,If);let f=this.direction.dot(Im),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Lr.subVectors(this.origin,t);const m=h*this.direction.dot(If.crossVectors(Lr,If));if(m<0)return null;const p=h*this.direction.dot(Om.cross(Lr));if(p<0||m+p>f)return null;const _=-h*Lr.dot(Im);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cu extends wo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gx=new un,fo=new I0,Pf=new Hl,_x=new K,Ff=new K,Bf=new K,zf=new K,Pm=new K,Hf=new K,vx=new K,Gf=new K;class Ge extends pn{constructor(t=new ha,i=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Hf.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Pm.fromBufferAttribute(v,t),f?Hf.addScaledVector(Pm,_):Hf.addScaledVector(Pm.sub(i),_))}i.add(Hf)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pf.copy(s.boundingSphere),Pf.applyMatrix4(c),fo.copy(t.ray).recast(t.near),!(Pf.containsPoint(fo.origin)===!1&&(fo.intersectSphere(Pf,_x)===null||fo.origin.distanceToSquared(_x)>(t.far-t.near)**2))&&(gx.copy(c).invert(),fo.copy(t.ray).applyMatrix4(gx),!(s.boundingBox!==null&&fo.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,fo)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=f[M.materialIndex],C=Math.max(M.start,S.start),L=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let D=C,B=L;D<B;D+=3){const z=h.getX(D),H=h.getX(D+1),T=h.getX(D+2);l=Vf(this,y,t,s,p,_,v,z,H,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let M=E,y=w;M<y;M+=3){const C=h.getX(M),L=h.getX(M+1),D=h.getX(M+2);l=Vf(this,f,t,s,p,_,v,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=f[M.materialIndex],C=Math.max(M.start,S.start),L=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=C,B=L;D<B;D+=3){const z=D,H=D+1,T=D+2;l=Vf(this,y,t,s,p,_,v,z,H,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=E,y=w;M<y;M+=3){const C=M,L=M+1,D=M+2;l=Vf(this,f,t,s,p,_,v,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function CE(r,t,i,s,l,c,f,h){let m;if(t.side===wi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===qs,h),m===null)return null;Gf.copy(h),Gf.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Gf);return p<i.near||p>i.far?null:{distance:p,point:Gf.clone(),object:r}}function Vf(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Ff),r.getVertexPosition(m,Bf),r.getVertexPosition(p,zf);const _=CE(r,t,i,s,Ff,Bf,zf,vx);if(_){const v=new K;Da.getBarycoord(vx,Ff,Bf,zf,v),l&&(_.uv=Da.getInterpolatedAttribute(l,h,m,p,v,new De)),c&&(_.uv1=Da.getInterpolatedAttribute(c,h,m,p,v,new De)),f&&(_.normal=Da.getInterpolatedAttribute(f,h,m,p,v,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new K,materialIndex:0};Da.getNormal(Ff,Bf,zf,g.normal),_.face=g,_.barycoord=v}return _}class P0 extends vi{constructor(t=null,i=1,s=1,l,c,f,h,m,p=oi,_=oi,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c0 extends Ua{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Sl=new un,xx=new un,kf=[],Sx=new zr,wE=new un,Hc=new Ge,Gc=new Hl;class qS extends Ge{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new c0(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,wE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new zr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Sl),Sx.copy(t.boundingBox).applyMatrix4(Sl),this.boundingBox.union(Sx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Sl),Gc.copy(t.boundingSphere).applyMatrix4(Sl),this.boundingSphere.union(Gc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Hc.geometry=this.geometry,Hc.material=this.material,Hc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gc.copy(this.boundingSphere),Gc.applyMatrix4(s),t.ray.intersectsSphere(Gc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Sl),xx.multiplyMatrices(s,Sl),Hc.matrixWorld=xx,Hc.raycast(t,kf);for(let f=0,h=kf.length;f<h;f++){const m=kf[f];m.instanceId=c,m.object=this,i.push(m)}kf.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new c0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new P0(new Float32Array(l*this.count),l,this.count,rh,Na));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fm=new K,DE=new K,NE=new be;class Or{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Fm.subVectors(s,i).cross(DE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Fm),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||NE.getNormalMatrix(t),l=this.coplanarPoint(Fm).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ho=new Hl,LE=new De(.5,.5),Xf=new K;class mh{constructor(t=new Or,i=new Or,s=new Or,l=new Or,c=new Or,f=new Or){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ja,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],w=c[9],M=c[10],y=c[11],C=c[12],L=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-f,S-_,y-E,B-C).normalize(),l[1].setComponents(p+f,S+_,y+E,B+C).normalize(),l[2].setComponents(p+h,S+v,y+w,B+L).normalize(),l[3].setComponents(p-h,S-v,y-w,B-L).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(p-m,S-g,y-M,B-D).normalize();else if(l[4].setComponents(p-m,S-g,y-M,B-D).normalize(),i===ja)l[5].setComponents(p+m,S+g,y+M,B+D).normalize();else if(i===Il)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ho.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ho)}intersectsSprite(t){ho.center.set(0,0,0);const i=LE.distanceTo(t.center);return ho.radius=.7071067811865476+i,ho.applyMatrix4(t.matrixWorld),this.intersectsSphere(ho)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xf.x=l.normal.x>0?t.max.x:t.min.x,Xf.y=l.normal.y>0?t.max.y:t.min.y,Xf.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Xf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class F0 extends vi{constructor(t=[],i=Br,s,l,c,f,h,m,p,_){super(t,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dl extends vi{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fl extends vi{constructor(t,i,s=Qa,l,c,f,h=oi,m=oi,p,_=ds,v=1){if(_!==ds&&_!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jS extends Fl{constructor(t,i=Qa,s=Br,l,c,f=oi,h=oi,m,p=ds){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class B0 extends vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hr extends ha{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ci(p,3)),this.setAttribute("normal",new ci(_,3)),this.setAttribute("uv",new ci(v,2));function E(w,M,y,C,L,D,B,z,H,T,N){const mt=D/H,V=B/T,et=D/2,rt=B/2,ot=z/2,Q=H+1,O=T+1;let P=0,ct=0;const _t=new K;for(let Dt=0;Dt<O;Dt++){const I=Dt*V-rt;for(let k=0;k<Q;k++){const vt=k*mt-et;_t[w]=vt*C,_t[M]=I*L,_t[y]=ot,p.push(_t.x,_t.y,_t.z),_t[w]=0,_t[M]=0,_t[y]=z>0?1:-1,_.push(_t.x,_t.y,_t.z),v.push(k/H),v.push(1-Dt/T),P+=1}}for(let Dt=0;Dt<T;Dt++)for(let I=0;I<H;I++){const k=g+I+Q*Dt,vt=g+I+Q*(Dt+1),At=g+(I+1)+Q*(Dt+1),Vt=g+(I+1)+Q*Dt;m.push(k,vt,Vt),m.push(vt,At,Vt),ct+=6}h.addGroup(S,ct,N),S+=ct,g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ZS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ge("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,S=(f-_)/g;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new De:new K);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new K,l=[],c=[],f=[],h=new K,m=new un;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new K)}c[0]=new K,f[0]=new K;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(we(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(we(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function z0(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,_,v){let g=(f-c)/p-(h-c)/(p+_)+(h-f)/_,S=(h-f)/_-(m-f)/(_+v)+(m-h)/v;g*=_,S*=_,l(f,h,g,S)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const Wf=new K,Bm=new z0,zm=new z0,Hm=new z0;class KS extends ZS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new K){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(Wf.subVectors(l[0],l[1]).add(l[0]),p=Wf);const v=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(Wf.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Wf),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),S),w=Math.pow(v.distanceToSquared(g),S),M=Math.pow(g.distanceToSquared(_),S);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),Bm.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,w,M),zm.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,w,M),Hm.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,w,M)}else this.curveType==="catmullrom"&&(Bm.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),zm.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),Hm.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(Bm.calc(m),zm.calc(m),Hm.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new K().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ls extends ha{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=t/h,g=i/m,S=[],E=[],w=[],M=[];for(let y=0;y<_;y++){const C=y*g-f;for(let L=0;L<p;L++){const D=L*v-c;E.push(D,-C,0),w.push(0,0,1),M.push(L/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let C=0;C<h;C++){const L=C+p*y,D=C+p*(y+1),B=C+1+p*(y+1),z=C+1+p*y;S.push(L,D,z),S.push(D,B,z)}this.setIndex(S),this.setAttribute("position",new ci(E,3)),this.setAttribute("normal",new ci(w,3)),this.setAttribute("uv",new ci(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.widthSegments,t.heightSegments)}}class gh extends ha{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,S=new K,E=new De;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const y=c+M/s*f;S.x=v*Math.cos(y),S.y=v*Math.sin(y),m.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,_.push(E.x,E.y)}v+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let y=0;y<s;y++){const C=y+M,L=C,D=C+s+1,B=C+s+2,z=C+1;h.push(L,D,z),h.push(D,B,z)}}this.setIndex(h),this.setAttribute("position",new ci(m,3)),this.setAttribute("normal",new ci(p,3)),this.setAttribute("uv",new ci(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _h extends ha{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const _=[],v=new K,g=new K,S=[],E=[],w=[],M=[];for(let y=0;y<=s;y++){const C=[],L=y/s;let D=0;y===0&&f===0?D=.5/i:y===s&&m===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const z=B/i;v.x=-t*Math.cos(l+z*c)*Math.sin(f+L*h),v.y=t*Math.cos(f+L*h),v.z=t*Math.sin(l+z*c)*Math.sin(f+L*h),E.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(z+D,1-L),C.push(p++)}_.push(C)}for(let y=0;y<s;y++)for(let C=0;C<i;C++){const L=_[y][C+1],D=_[y][C],B=_[y+1][C],z=_[y+1][C+1];(y!==0||f>0)&&S.push(L,D,z),(y!==s-1||m<Math.PI)&&S.push(D,B,z)}this.setIndex(S),this.setAttribute("position",new ci(E,3)),this.setAttribute("normal",new ci(w,3)),this.setAttribute("uv",new ci(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _h(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Bl(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zi(r){const t={};for(let i=0;i<r.length;i++){const s=Bl(r[i]);for(const l in s)t[l]=s[l]}return t}function UE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function QS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ke.workingColorSpace}const JS={clone:Bl,merge:zi};var OE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends wo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bl(t.uniforms),this.uniformsGroups=UE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class $S extends Ja{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xs extends wo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class So extends Xs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ty extends wo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=eh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ey extends wo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ny extends wo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gl extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class iy extends Gl{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Gm=new un,yx=new K,Mx=new K;class H0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;yx.setFromMatrixPosition(t.matrixWorld),i.position.copy(yx),Mx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Mx),i.updateMatrixWorld(),Gm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Il||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Gm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yf=new K,qf=new js,rs=new K;class G0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ja,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yf,qf,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yf,qf,rs.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Yf,qf,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yf,qf,rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new K,Ex=new De,bx=new De;class Hi extends G0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Pl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ur.x,Ur.y).multiplyScalar(-t/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ur.x,Ur.y).multiplyScalar(-t/Ur.z)}getViewSize(t,i){return this.getViewBounds(t,Ex,bx),i.subVectors(bx,Ex)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(iu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class PE extends H0{constructor(){super(new Hi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Pl*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class od extends Gl{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new PE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class FE extends H0{constructor(){super(new Hi(90,1,.5,500)),this.isPointLightShadow=!0}}class su extends Gl{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new FE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class vh extends G0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BE extends H0{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u0 extends Gl{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new BE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ay extends Gl{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const yl=-90,Ml=1;class sy extends pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Hi(yl,Ml,t,i);l.layers=this.layers,this.add(l);const c=new Hi(yl,Ml,t,i);c.layers=this.layers,this.add(c);const f=new Hi(yl,Ml,t,i);f.layers=this.layers,this.add(f);const h=new Hi(yl,Ml,t,i);h.layers=this.layers,this.add(h);const m=new Hi(yl,Ml,t,i);m.layers=this.layers,this.add(m);const p=new Hi(yl,Ml,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===ja)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Il)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ry extends Hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Tx=new un;class oy{constructor(t,i,s=0,l=1/0){this.ray=new I0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ve("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Tx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tx),this}intersectObject(t,i=!0,s=[]){return f0(t,this,s,i),s.sort(Ax),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)f0(t[l],this,s,i);return s.sort(Ax),s}}function Ax(r,t){return r.distance-t.distance}function f0(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)f0(c[f],t,i,!0)}}class ly{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ge("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Rx(r,t,i,s){const l=zE(s);switch(i){case C0:return r*t;case rh:return r*t/l.components*l.byteLength;case oh:return r*t/l.components*l.byteLength;case Ao:return r*t*2/l.components*l.byteLength;case lh:return r*t*2/l.components*l.byteLength;case w0:return r*t*3/l.components*l.byteLength;case La:return r*t*4/l.components*l.byteLength;case ch:return r*t*4/l.components*l.byteLength;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:case Ed:return Math.max(r,16)*Math.max(t,8)/4;case Sd:case Md:return Math.max(r,8)*Math.max(t,8)/2;case bd:case Td:case Rd:case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ad:case wd:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wd:case Yd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case jd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Kd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zE(r){switch(r){case Zi:case b0:return{byteLength:1,components:1};case Ul:case T0:case fs:return{byteLength:2,components:1};case ah:case sh:return{byteLength:2,components:4};case Qa:case ih:case Na:return{byteLength:4,components:1};case A0:case R0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);function cy(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function HE(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var GE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VE=`#ifdef USE_ALPHAHASH
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
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qE=`#ifdef USE_AOMAP
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
#endif`,jE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZE=`#ifdef USE_BATCHING
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
#endif`,KE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$E=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tb=`#ifdef USE_IRIDESCENCE
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
#endif`,eb=`#ifdef USE_BUMPMAP
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
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ub=`#define PI 3.141592653589793
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
} // validated`,fb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,db=`vec3 transformedNormal = objectNormal;
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
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_b="gl_FragColor = linearToOutputTexel( gl_FragColor );",vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cb=`#ifdef USE_GRADIENTMAP
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
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lb=`uniform bool receiveShadow;
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
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
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
#endif`,zb=`uniform sampler2D dfgLUT;
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
}`,Hb=`
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kb=`#if defined( USE_POINTS_UV )
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
#endif`,Qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
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
#endif`,i1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c1=`#ifdef USE_NORMALMAP
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
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T1=`float getShadowMask() {
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
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,q1=`#if DEPTH_PACKING == 3200
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
}`,j1=`#define DISTANCE
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
}`,Z1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
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
}`,$1=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,eT=`uniform vec3 diffuse;
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define LAMBERT
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
}`,aT=`#define MATCAP
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
}`,sT=`#define MATCAP
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
}`,rT=`#define NORMAL
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
}`,oT=`#define NORMAL
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
}`,lT=`#define PHONG
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
}`,cT=`#define PHONG
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
}`,uT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,dT=`#define TOON
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
}`,hT=`#define TOON
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
}`,pT=`uniform float size;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 color;
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
}`,vT=`uniform float rotation;
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
}`,xT=`uniform vec3 diffuse;
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
}`,Re={alphahash_fragment:GE,alphahash_pars_fragment:VE,alphamap_fragment:kE,alphamap_pars_fragment:XE,alphatest_fragment:WE,alphatest_pars_fragment:YE,aomap_fragment:qE,aomap_pars_fragment:jE,batching_pars_vertex:ZE,batching_vertex:KE,begin_vertex:QE,beginnormal_vertex:JE,bsdfs:$E,iridescence_fragment:tb,bumpmap_pars_fragment:eb,clipping_planes_fragment:nb,clipping_planes_pars_fragment:ib,clipping_planes_pars_vertex:ab,clipping_planes_vertex:sb,color_fragment:rb,color_pars_fragment:ob,color_pars_vertex:lb,color_vertex:cb,common:ub,cube_uv_reflection_fragment:fb,defaultnormal_vertex:db,displacementmap_pars_vertex:hb,displacementmap_vertex:pb,emissivemap_fragment:mb,emissivemap_pars_fragment:gb,colorspace_fragment:_b,colorspace_pars_fragment:vb,envmap_fragment:xb,envmap_common_pars_fragment:Sb,envmap_pars_fragment:yb,envmap_pars_vertex:Mb,envmap_physical_pars_fragment:Ub,envmap_vertex:Eb,fog_vertex:bb,fog_pars_vertex:Tb,fog_fragment:Ab,fog_pars_fragment:Rb,gradientmap_pars_fragment:Cb,lightmap_pars_fragment:wb,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Nb,lights_pars_begin:Lb,lights_toon_fragment:Ob,lights_toon_pars_fragment:Ib,lights_phong_fragment:Pb,lights_phong_pars_fragment:Fb,lights_physical_fragment:Bb,lights_physical_pars_fragment:zb,lights_fragment_begin:Hb,lights_fragment_maps:Gb,lights_fragment_end:Vb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Xb,logdepthbuf_pars_vertex:Wb,logdepthbuf_vertex:Yb,map_fragment:qb,map_pars_fragment:jb,map_particle_fragment:Zb,map_particle_pars_fragment:Kb,metalnessmap_fragment:Qb,metalnessmap_pars_fragment:Jb,morphinstance_vertex:$b,morphcolor_vertex:t1,morphnormal_vertex:e1,morphtarget_pars_vertex:n1,morphtarget_vertex:i1,normal_fragment_begin:a1,normal_fragment_maps:s1,normal_pars_fragment:r1,normal_pars_vertex:o1,normal_vertex:l1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:d1,iridescence_pars_fragment:h1,opaque_fragment:p1,packing:m1,premultiplied_alpha_fragment:g1,project_vertex:_1,dithering_fragment:v1,dithering_pars_fragment:x1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:E1,shadowmap_vertex:b1,shadowmask_pars_fragment:T1,skinbase_vertex:A1,skinning_pars_vertex:R1,skinning_vertex:C1,skinnormal_vertex:w1,specularmap_fragment:D1,specularmap_pars_fragment:N1,tonemapping_fragment:L1,tonemapping_pars_fragment:U1,transmission_fragment:O1,transmission_pars_fragment:I1,uv_pars_fragment:P1,uv_pars_vertex:F1,uv_vertex:B1,worldpos_vertex:z1,background_vert:H1,background_frag:G1,backgroundCube_vert:V1,backgroundCube_frag:k1,cube_vert:X1,cube_frag:W1,depth_vert:Y1,depth_frag:q1,distance_vert:j1,distance_frag:Z1,equirect_vert:K1,equirect_frag:Q1,linedashed_vert:J1,linedashed_frag:$1,meshbasic_vert:tT,meshbasic_frag:eT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:aT,meshmatcap_frag:sT,meshnormal_vert:rT,meshnormal_frag:oT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:fT,meshtoon_vert:dT,meshtoon_frag:hT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:_T,sprite_vert:vT,sprite_frag:xT},kt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},qa={basic:{uniforms:zi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:zi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:zi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:zi([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:zi([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:zi([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:zi([kt.points,kt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:zi([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:zi([kt.common,kt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:zi([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:zi([kt.sprite,kt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distance:{uniforms:zi([kt.common,kt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distance_vert,fragmentShader:Re.distance_frag},shadow:{uniforms:zi([kt.lights,kt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};qa.physical={uniforms:zi([qa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const jf={r:0,b:0,g:0},po=new da,ST=new un;function yT(r,t,i,s,l,c){const f=new fe(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const D=C.backgroundBlurriness>0;L=t.get(L,D)}return L}function E(C){let L=!1;const D=S(C);D===null?M(f,h):D&&D.isColor&&(M(D,1),L=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,L){const D=S(L);D&&(D.isCubeTexture||D.mapping===uu)?(p===void 0&&(p=new Ge(new Hr(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Bl(qa.backgroundCube.uniforms),vertexShader:qa.backgroundCube.vertexShader,fragmentShader:qa.backgroundCube.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),po.copy(L.backgroundRotation),po.x*=-1,po.y*=-1,po.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(po)),p.material.toneMapped=ke.getTransfer(D.colorSpace)!==Je,(_!==D||v!==D.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ge(new ls(2,2),new Ja({name:"BackgroundMaterial",uniforms:Bl(qa.background.uniforms),vertexShader:qa.background.vertexShader,fragmentShader:qa.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=ke.getTransfer(D.colorSpace)!==Je,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,v=D.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(jf,QS(r)),i.buffers.color.setClear(jf.r,jf.g,jf.b,L,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,L=1){f.set(C),h=L,M(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,M(f,h)},render:E,addToRenderList:w,dispose:y}}function MT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(V,et,rt,ot,Q){let O=!1;const P=v(V,ot,rt,et);c!==P&&(c=P,p(c.object)),O=S(V,ot,rt,Q),O&&E(V,ot,rt,Q),Q!==null&&t.update(Q,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,D(V,et,rt,ot),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function _(V){return r.deleteVertexArray(V)}function v(V,et,rt,ot){const Q=ot.wireframe===!0;let O=s[et.id];O===void 0&&(O={},s[et.id]=O);const P=V.isInstancedMesh===!0?V.id:0;let ct=O[P];ct===void 0&&(ct={},O[P]=ct);let _t=ct[rt.id];_t===void 0&&(_t={},ct[rt.id]=_t);let Dt=_t[Q];return Dt===void 0&&(Dt=g(m()),_t[Q]=Dt),Dt}function g(V){const et=[],rt=[],ot=[];for(let Q=0;Q<i;Q++)et[Q]=0,rt[Q]=0,ot[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:rt,attributeDivisors:ot,object:V,attributes:{},index:null}}function S(V,et,rt,ot){const Q=c.attributes,O=et.attributes;let P=0;const ct=rt.getAttributes();for(const _t in ct)if(ct[_t].location>=0){const I=Q[_t];let k=O[_t];if(k===void 0&&(_t==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),_t==="instanceColor"&&V.instanceColor&&(k=V.instanceColor)),I===void 0||I.attribute!==k||k&&I.data!==k.data)return!0;P++}return c.attributesNum!==P||c.index!==ot}function E(V,et,rt,ot){const Q={},O=et.attributes;let P=0;const ct=rt.getAttributes();for(const _t in ct)if(ct[_t].location>=0){let I=O[_t];I===void 0&&(_t==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),_t==="instanceColor"&&V.instanceColor&&(I=V.instanceColor));const k={};k.attribute=I,I&&I.data&&(k.data=I.data),Q[_t]=k,P++}c.attributes=Q,c.attributesNum=P,c.index=ot}function w(){const V=c.newAttributes;for(let et=0,rt=V.length;et<rt;et++)V[et]=0}function M(V){y(V,0)}function y(V,et){const rt=c.newAttributes,ot=c.enabledAttributes,Q=c.attributeDivisors;rt[V]=1,ot[V]===0&&(r.enableVertexAttribArray(V),ot[V]=1),Q[V]!==et&&(r.vertexAttribDivisor(V,et),Q[V]=et)}function C(){const V=c.newAttributes,et=c.enabledAttributes;for(let rt=0,ot=et.length;rt<ot;rt++)et[rt]!==V[rt]&&(r.disableVertexAttribArray(rt),et[rt]=0)}function L(V,et,rt,ot,Q,O,P){P===!0?r.vertexAttribIPointer(V,et,rt,Q,O):r.vertexAttribPointer(V,et,rt,ot,Q,O)}function D(V,et,rt,ot){w();const Q=ot.attributes,O=rt.getAttributes(),P=et.defaultAttributeValues;for(const ct in O){const _t=O[ct];if(_t.location>=0){let Dt=Q[ct];if(Dt===void 0&&(ct==="instanceMatrix"&&V.instanceMatrix&&(Dt=V.instanceMatrix),ct==="instanceColor"&&V.instanceColor&&(Dt=V.instanceColor)),Dt!==void 0){const I=Dt.normalized,k=Dt.itemSize,vt=t.get(Dt);if(vt===void 0)continue;const At=vt.buffer,Vt=vt.type,$=vt.bytesPerElement,Mt=Vt===r.INT||Vt===r.UNSIGNED_INT||Dt.gpuType===ih;if(Dt.isInterleavedBufferAttribute){const Nt=Dt.data,Xt=Nt.stride,ie=Dt.offset;if(Nt.isInstancedInterleavedBuffer){for(let re=0;re<_t.locationSize;re++)y(_t.location+re,Nt.meshPerAttribute);V.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let re=0;re<_t.locationSize;re++)M(_t.location+re);r.bindBuffer(r.ARRAY_BUFFER,At);for(let re=0;re<_t.locationSize;re++)L(_t.location+re,k/_t.locationSize,Vt,I,Xt*$,(ie+k/_t.locationSize*re)*$,Mt)}else{if(Dt.isInstancedBufferAttribute){for(let Nt=0;Nt<_t.locationSize;Nt++)y(_t.location+Nt,Dt.meshPerAttribute);V.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Nt=0;Nt<_t.locationSize;Nt++)M(_t.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Nt=0;Nt<_t.locationSize;Nt++)L(_t.location+Nt,k/_t.locationSize,Vt,I,k*$,k/_t.locationSize*Nt*$,Mt)}}else if(P!==void 0){const I=P[ct];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(_t.location,I);break;case 3:r.vertexAttrib3fv(_t.location,I);break;case 4:r.vertexAttrib4fv(_t.location,I);break;default:r.vertexAttrib1fv(_t.location,I)}}}}C()}function B(){N();for(const V in s){const et=s[V];for(const rt in et){const ot=et[rt];for(const Q in ot){const O=ot[Q];for(const P in O)_(O[P].object),delete O[P];delete ot[Q]}}delete s[V]}}function z(V){if(s[V.id]===void 0)return;const et=s[V.id];for(const rt in et){const ot=et[rt];for(const Q in ot){const O=ot[Q];for(const P in O)_(O[P].object),delete O[P];delete ot[Q]}}delete s[V.id]}function H(V){for(const et in s){const rt=s[et];for(const ot in rt){const Q=rt[ot];if(Q[V.id]===void 0)continue;const O=Q[V.id];for(const P in O)_(O[P].object),delete O[P];delete Q[V.id]}}}function T(V){for(const et in s){const rt=s[et],ot=V.isInstancedMesh===!0?V.id:0,Q=rt[ot];if(Q!==void 0){for(const O in Q){const P=Q[O];for(const ct in P)_(P[ct].object),delete P[ct];delete Q[O]}delete rt[ot],Object.keys(rt).length===0&&delete s[et]}}}function N(){mt(),f=!0,c!==l&&(c=l,p(c.object))}function mt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:mt,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfObject:T,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function ET(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let S=0;for(let E=0;E<v;E++)S+=_[E];i.update(S,s,1)}function m(p,_,v,g){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],_[E],g[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function bT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==La&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const T=H===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Zi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Na&&!T)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ge("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:D,maxSamples:B,samples:z}}function TT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Or,h=new be,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,L=C*4;let D=y.clippingState||null;m.value=D,D=_(E,g,L,S);for(let B=0;B!==L;++B)D[B]=i[B];y.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,S,E){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const y=S+w*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,D=S;L!==w;++L,D+=4)f.copy(v[L]).applyMatrix4(C,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const Fr=4,Cx=[.125,.215,.35,.446,.526,.582],yo=20,AT=256,Vc=new vh,wx=new fe;let Vm=null,km=0,Xm=0,Wm=!1;const RT=new K;class $d{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=RT}=c;Vm=this._renderer.getRenderTarget(),km=this._renderer.getActiveCubeFace(),Xm=this._renderer.getActiveMipmapLevel(),Wm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vm,km,Xm),this._renderer.xr.enabled=Wm,t.scissorTest=!1,El(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Br||t.mapping===To?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vm=this._renderer.getRenderTarget(),km=this._renderer.getActiveCubeFace(),Xm=this._renderer.getActiveMipmapLevel(),Wm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:li,minFilter:li,generateMipmaps:!1,type:fs,format:La,colorSpace:Ro,depthBuffer:!1},l=Dx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CT(c)),this._blurMaterial=DT(c,t,i),this._ggxMaterial=wT(c,t,i)}return l}_compileMaterial(t){const i=new Ge(new ha,t);this._renderer.compile(i,Vc)}_sceneToCubeUV(t,i,s,l,c){const m=new Hi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(wx),v.toneMapping=Za,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new Hr,new cu({name:"PMREM.Background",side:wi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,y=!0):(M.color.copy(wx),y=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const B=this._cubeSize;El(l,D*B,L>2?B:0,B,B),v.setRenderTarget(l),y&&v.render(w,m),v.render(t,m)}v.toneMapping=S,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Br||t.mapping===To;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;El(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Vc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-Fr?s-E+Fr:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,El(c,M,y,3*w,2*w),l.setRenderTarget(c),l.render(h,Vc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,El(t,M,y,3*w,2*w),l.setRenderTarget(t),l.render(h,Vc)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*yo-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):yo;M>yo&&ge(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${yo}`);const y=[];let C=0;for(let H=0;H<yo;++H){const T=H/w,N=Math.exp(-T*T/2);y.push(N),H===0?C+=N:H<M&&(C+=2*N)}for(let H=0;H<y.length;H++)y[H]=y[H]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const D=this._sizeLods[l],B=3*D*(l>L-Fr?l-L+Fr:0),z=4*(this._cubeSize-D);El(i,B,z,3*D,2*D),m.setRenderTarget(i),m.render(v,Vc)}}function CT(r){const t=[],i=[],s=[];let l=r;const c=r-Fr+1+Cx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-Fr?m=Cx[f-r+Fr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,w=3,M=2,y=1,C=new Float32Array(w*E*S),L=new Float32Array(M*E*S),D=new Float32Array(y*E*S);for(let z=0;z<S;z++){const H=z%3*2/3-1,T=z>2?0:-1,N=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];C.set(N,w*E*z),L.set(g,M*E*z);const mt=[z,z,z,z,z,z];D.set(mt,y*E*z)}const B=new ha;B.setAttribute("position",new Ua(C,w)),B.setAttribute("uv",new Ua(L,M)),B.setAttribute("faceIndex",new Ua(D,y)),s.push(new Ge(B,null)),l>Fr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Dx(r,t,i){const s=new Ka(r,t,i);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function El(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function wT(r,t,i){return new Ja({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function DT(r,t,i){const s=new Float32Array(yo),l=new K(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:yo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Nx(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Lx(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function xh(){return`

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
	`}class V0 extends Ka{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new F0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Hr(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:Bl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:wi,blending:us});c.uniforms.tEquirect.value=i;const f=new Ge(l,c),h=i.minFilter;return i.minFilter===Ws&&(i.minFilter=li),new sy(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function NT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===id||S===ad)if(t.has(g)){const E=t.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new V0(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===id||S===ad,w=S===Br||S===To;if(E||w){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new $d(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return E&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new $d(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function h(g,S){return S===id?g.mapping=Br:S===ad&&(g.mapping=To),g}function m(g){let S=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function LT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ou("WebGLRenderer: "+s+" extension not supported."),l}}}function UT(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)t.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const C=S.array;w=S.version;for(let L=0,D=C.length;L<D;L+=3){const B=C[L+0],z=C[L+1],H=C[L+2];g.push(B,z,z,H,H,B)}}else{const C=E.array;w=E.version;for(let L=0,D=C.length/3-1;L<D;L+=3){const B=L+0,z=L+1,H=L+2;g.push(B,z,z,H,H,B)}}const M=new(E.count>=65535?O0:U0)(g,1);M.version=w;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function OT(r,t,i){let s;function l(g){s=g}let c,f;function h(g){c=g.type,f=g.bytesPerElement}function m(g,S){r.drawElements(s,S,c,g*f),i.update(S,s,1)}function p(g,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,g*f,E),i.update(S,s,E))}function _(g,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,g,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,s,1)}function v(g,S,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<g.length;y++)p(g[y]/f,S[y],w[y]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,g,0,w,0,E);let y=0;for(let C=0;C<E;C++)y+=S[C]*w[C];i.update(y,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function IT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ve("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function PT(r,t,i){const s=new WeakMap,l=new Tn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let mt=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",mt)};var S=mt;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let B=h.attributes.position.count*D,z=1;B>t.maxTextureSize&&(z=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const H=new Float32Array(B*z*4*v),T=new N0(H,B,z,v);T.type=Na,T.needsUpdate=!0;const N=D*4;for(let V=0;V<v;V++){const et=y[V],rt=C[V],ot=L[V],Q=B*z*4*V;for(let O=0;O<et.count;O++){const P=O*N;E===!0&&(l.fromBufferAttribute(et,O),H[Q+P+0]=l.x,H[Q+P+1]=l.y,H[Q+P+2]=l.z,H[Q+P+3]=0),w===!0&&(l.fromBufferAttribute(rt,O),H[Q+P+4]=l.x,H[Q+P+5]=l.y,H[Q+P+6]=l.z,H[Q+P+7]=0),M===!0&&(l.fromBufferAttribute(ot,O),H[Q+P+8]=l.x,H[Q+P+9]=l.y,H[Q+P+10]=l.z,H[Q+P+11]=ot.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new De(B,z)},s.set(h,g),h.addEventListener("dispose",mt)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function FT(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const BT={[_0]:"LINEAR_TONE_MAPPING",[v0]:"REINHARD_TONE_MAPPING",[x0]:"CINEON_TONE_MAPPING",[nh]:"ACES_FILMIC_TONE_MAPPING",[y0]:"AGX_TONE_MAPPING",[M0]:"NEUTRAL_TONE_MAPPING",[S0]:"CUSTOM_TONE_MAPPING"};function zT(r,t,i,s,l){const c=new Ka(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ka(t,i,{type:fs,depthBuffer:!1,stencilBuffer:!1}),h=new ha;h.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ci([0,2,0,0,2,0],2));const m=new $S({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ge(h,m),_=new vh(-1,1,1,-1,0,1);let v=null,g=null,S=!1,E,w=null,M=[],y=!1;this.setSize=function(C,L){c.setSize(C,L),f.setSize(C,L);for(let D=0;D<M.length;D++){const B=M[D];B.setSize&&B.setSize(C,L)}},this.setEffects=function(C){M=C,y=M.length>0&&M[0].isRenderPass===!0;const L=c.width,D=c.height;for(let B=0;B<M.length;B++){const z=M[B];z.setSize&&z.setSize(L,D)}},this.begin=function(C,L){if(S||C.toneMapping===Za&&M.length===0)return!1;if(w=L,L!==null){const D=L.width,B=L.height;(c.width!==D||c.height!==B)&&this.setSize(D,B)}return y===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=Za,!0},this.hasRenderPass=function(){return y},this.end=function(C,L){C.toneMapping=E,S=!0;let D=c,B=f;for(let z=0;z<M.length;z++){const H=M[z];if(H.enabled!==!1&&(H.render(C,B,D,L),H.needsSwap!==!1)){const T=D;D=B,B=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},ke.getTransfer(v)===Je&&(m.defines.SRGB_TRANSFER="");const z=BT[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(p,_),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const uy=new vi,d0=new Fl(1,1),fy=new N0,dy=new WS,hy=new F0,Ux=[],Ox=[],Ix=new Float32Array(16),Px=new Float32Array(9),Fx=new Float32Array(4);function Vl(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Ux[l];if(c===void 0&&(c=new Float32Array(l),Ux[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function $n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function ti(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Sh(r,t){let i=Ox[t];i===void 0&&(i=new Int32Array(t),Ox[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function HT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function GT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if($n(i,t))return;r.uniform2fv(this.addr,t),ti(i,t)}}function VT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if($n(i,t))return;r.uniform3fv(this.addr,t),ti(i,t)}}function kT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if($n(i,t))return;r.uniform4fv(this.addr,t),ti(i,t)}}function XT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if($n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),ti(i,t)}else{if($n(i,s))return;Fx.set(s),r.uniformMatrix2fv(this.addr,!1,Fx),ti(i,s)}}function WT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if($n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),ti(i,t)}else{if($n(i,s))return;Px.set(s),r.uniformMatrix3fv(this.addr,!1,Px),ti(i,s)}}function YT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if($n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),ti(i,t)}else{if($n(i,s))return;Ix.set(s),r.uniformMatrix4fv(this.addr,!1,Ix),ti(i,s)}}function qT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if($n(i,t))return;r.uniform2iv(this.addr,t),ti(i,t)}}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if($n(i,t))return;r.uniform3iv(this.addr,t),ti(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if($n(i,t))return;r.uniform4iv(this.addr,t),ti(i,t)}}function QT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if($n(i,t))return;r.uniform2uiv(this.addr,t),ti(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if($n(i,t))return;r.uniform3uiv(this.addr,t),ti(i,t)}}function tA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if($n(i,t))return;r.uniform4uiv(this.addr,t),ti(i,t)}}function eA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(d0.compareFunction=i.isReversedDepthBuffer()?dh:fh,c=d0):c=uy,i.setTexture2D(t||c,l)}function nA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||dy,l)}function iA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||hy,l)}function aA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||fy,l)}function sA(r){switch(r){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return YT;case 5124:case 35670:return qT;case 35667:case 35671:return jT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}function rA(r,t){r.uniform1fv(this.addr,t)}function oA(r,t){const i=Vl(t,this.size,2);r.uniform2fv(this.addr,i)}function lA(r,t){const i=Vl(t,this.size,3);r.uniform3fv(this.addr,i)}function cA(r,t){const i=Vl(t,this.size,4);r.uniform4fv(this.addr,i)}function uA(r,t){const i=Vl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function fA(r,t){const i=Vl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function dA(r,t){const i=Vl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function hA(r,t){r.uniform1iv(this.addr,t)}function pA(r,t){r.uniform2iv(this.addr,t)}function mA(r,t){r.uniform3iv(this.addr,t)}function gA(r,t){r.uniform4iv(this.addr,t)}function _A(r,t){r.uniform1uiv(this.addr,t)}function vA(r,t){r.uniform2uiv(this.addr,t)}function xA(r,t){r.uniform3uiv(this.addr,t)}function SA(r,t){r.uniform4uiv(this.addr,t)}function yA(r,t,i){const s=this.cache,l=t.length,c=Sh(i,l);$n(s,c)||(r.uniform1iv(this.addr,c),ti(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=d0:f=uy;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function MA(r,t,i){const s=this.cache,l=t.length,c=Sh(i,l);$n(s,c)||(r.uniform1iv(this.addr,c),ti(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||dy,c[f])}function EA(r,t,i){const s=this.cache,l=t.length,c=Sh(i,l);$n(s,c)||(r.uniform1iv(this.addr,c),ti(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||hy,c[f])}function bA(r,t,i){const s=this.cache,l=t.length,c=Sh(i,l);$n(s,c)||(r.uniform1iv(this.addr,c),ti(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||fy,c[f])}function TA(r){switch(r){case 5126:return rA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return xA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return bA}}class AA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=sA(i.type)}}class RA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=TA(i.type)}}class CA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Ym=/(\w+)(\])?(\[|\.)?/g;function Bx(r,t){r.seq.push(t),r.map[t.id]=t}function wA(r,t,i){const s=r.name,l=s.length;for(Ym.lastIndex=0;;){const c=Ym.exec(s),f=Ym.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Bx(i,p===void 0?new AA(h,r,t):new RA(h,r,t));break}else{let v=i.map[h];v===void 0&&(v=new CA(h),Bx(i,v)),i=v}}}class ld{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);wA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function zx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const DA=37297;let NA=0;function LA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const Hx=new be;function UA(r){ke._getMatrix(Hx,ke.workingColorSpace,r);const t=`mat3( ${Hx.elements.map(i=>i.toFixed(4))} )`;switch(ke.getTransfer(r)){case ru:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Gx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+LA(r.getShaderSource(t),h)}else return c}function OA(r,t){const i=UA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const IA={[_0]:"Linear",[v0]:"Reinhard",[x0]:"Cineon",[nh]:"ACESFilmic",[y0]:"AgX",[M0]:"Neutral",[S0]:"Custom"};function PA(r,t){const i=IA[t];return i===void 0?(ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zf=new K;function FA(){ke.getLuminanceCoefficients(Zf);const r=Zf.x.toFixed(4),t=Zf.y.toFixed(4),i=Zf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kc).join(`
`)}function zA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function HA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Kc(r){return r!==""}function Vx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function h0(r){return r.replace(GA,kA)}const VA=new Map;function kA(r,t){let i=Re[t];if(i===void 0){const s=VA.get(t);if(s!==void 0)i=Re[s],ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return h0(i)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xx(r){return r.replace(XA,WA)}function WA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Wx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const YA={[Mo]:"SHADOWMAP_TYPE_PCF",[Cl]:"SHADOWMAP_TYPE_VSM"};function qA(r){return YA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jA={[Br]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function ZA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":jA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const KA={[To]:"ENVMAP_MODE_REFRACTION"};function QA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":KA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JA={[eh]:"ENVMAP_BLENDING_MULTIPLY",[DS]:"ENVMAP_BLENDING_MIX",[NS]:"ENVMAP_BLENDING_ADD"};function $A(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":JA[r.combine]||"ENVMAP_BLENDING_NONE"}function t2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function e2(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=qA(i),p=ZA(i),_=QA(i),v=$A(i),g=t2(i),S=BA(i),E=zA(c),w=l.createProgram();let M,y,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Kc).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Kc).join(`
`),y.length>0&&(y+=`
`)):(M=[Wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kc).join(`
`),y=[Wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?Re.tonemapping_pars_fragment:"",i.toneMapping!==Za?PA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,OA("linearToOutputTexel",i.outputColorSpace),FA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Kc).join(`
`)),f=h0(f),f=Vx(f,i),f=kx(f,i),h=h0(h),h=Vx(h,i),h=kx(h,i),f=Xx(f),h=Xx(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===o0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===o0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=C+M+f,D=C+y+h,B=zx(l,l.VERTEX_SHADER,L),z=zx(l,l.FRAGMENT_SHADER,D);l.attachShader(w,B),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function H(V){if(r.debug.checkShaderErrors){const et=l.getProgramInfoLog(w)||"",rt=l.getShaderInfoLog(B)||"",ot=l.getShaderInfoLog(z)||"",Q=et.trim(),O=rt.trim(),P=ot.trim();let ct=!0,_t=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,B,z);else{const Dt=Gx(l,B,"vertex"),I=Gx(l,z,"fragment");Ve("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+Dt+`
`+I)}else Q!==""?ge("WebGLProgram: Program Info Log:",Q):(O===""||P==="")&&(_t=!1);_t&&(V.diagnostics={runnable:ct,programLog:Q,vertexShader:{log:O,prefix:M},fragmentShader:{log:P,prefix:y}})}l.deleteShader(B),l.deleteShader(z),T=new ld(l,w),N=HA(l,w)}let T;this.getUniforms=function(){return T===void 0&&H(this),T};let N;this.getAttributes=function(){return N===void 0&&H(this),N};let mt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return mt===!1&&(mt=l.getProgramParameter(w,DA)),mt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=NA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=z,this}let n2=0;class i2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new a2(t),i.set(t,s)),s}}class a2{constructor(t){this.id=n2++,this.code=t,this.usedTimes=0}}function s2(r,t,i,s,l,c){const f=new ph,h=new i2,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,mt,V,et){const rt=V.fog,ot=et.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=t.get(T.envMap||Q,O),ct=P&&P.mapping===uu?P.image.height:null,_t=S[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ge("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Dt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,I=Dt!==void 0?Dt.length:0;let k=0;ot.morphAttributes.position!==void 0&&(k=1),ot.morphAttributes.normal!==void 0&&(k=2),ot.morphAttributes.color!==void 0&&(k=3);let vt,At,Vt,$;if(_t){const Me=qa[_t];vt=Me.vertexShader,At=Me.fragmentShader}else vt=T.vertexShader,At=T.fragmentShader,h.update(T),Vt=h.getVertexShaderID(T),$=h.getFragmentShaderID(T);const Mt=r.getRenderTarget(),Nt=r.state.buffers.depth.getReversed(),Xt=et.isInstancedMesh===!0,ie=et.isBatchedMesh===!0,re=!!T.map,hn=!!T.matcap,Ce=!!P,ye=!!T.aoMap,Xe=!!T.lightMap,ve=!!T.bumpMap,mn=!!T.normalMap,X=!!T.displacementMap,$e=!!T.emissiveMap,Ne=!!T.metalnessMap,We=!!T.roughnessMap,te=T.anisotropy>0,U=T.clearcoat>0,b=T.dispersion>0,j=T.iridescence>0,F=T.sheen>0,nt=T.transmission>0,Z=te&&!!T.anisotropyMap,Lt=U&&!!T.clearcoatMap,gt=U&&!!T.clearcoatNormalMap,Pt=U&&!!T.clearcoatRoughnessMap,Qt=j&&!!T.iridescenceMap,ut=j&&!!T.iridescenceThicknessMap,Et=F&&!!T.sheenColorMap,ht=F&&!!T.sheenRoughnessMap,bt=!!T.specularMap,yt=!!T.specularColorMap,de=!!T.specularIntensityMap,Y=nt&&!!T.transmissionMap,Ot=nt&&!!T.thicknessMap,Ut=!!T.gradientMap,Ht=!!T.alphaMap,Ct=T.alphaTest>0,pt=!!T.alphaHash,Bt=!!T.extensions;let le=Za;T.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(le=r.toneMapping);const xe={shaderID:_t,shaderType:T.type,shaderName:T.name,vertexShader:vt,fragmentShader:At,defines:T.defines,customVertexShaderID:Vt,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ie,batchingColor:ie&&et._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&et.instanceColor!==null,instancingMorph:Xt&&et.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ro,alphaToCoverage:!!T.alphaToCoverage,map:re,matcap:hn,envMap:Ce,envMapMode:Ce&&P.mapping,envMapCubeUVHeight:ct,aoMap:ye,lightMap:Xe,bumpMap:ve,normalMap:mn,displacementMap:X,emissiveMap:$e,normalMapObjectSpace:mn&&T.normalMapType===OS,normalMapTangentSpace:mn&&T.normalMapType===uh,metalnessMap:Ne,roughnessMap:We,anisotropy:te,anisotropyMap:Z,clearcoat:U,clearcoatMap:Lt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Pt,dispersion:b,iridescence:j,iridescenceMap:Qt,iridescenceThicknessMap:ut,sheen:F,sheenColorMap:Et,sheenRoughnessMap:ht,specularMap:bt,specularColorMap:yt,specularIntensityMap:de,transmission:nt,transmissionMap:Y,thicknessMap:Ot,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===Eo&&T.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Ct,alphaHash:pt,combine:T.combine,mapUv:re&&E(T.map.channel),aoMapUv:ye&&E(T.aoMap.channel),lightMapUv:Xe&&E(T.lightMap.channel),bumpMapUv:ve&&E(T.bumpMap.channel),normalMapUv:mn&&E(T.normalMap.channel),displacementMapUv:X&&E(T.displacementMap.channel),emissiveMapUv:$e&&E(T.emissiveMap.channel),metalnessMapUv:Ne&&E(T.metalnessMap.channel),roughnessMapUv:We&&E(T.roughnessMap.channel),anisotropyMapUv:Z&&E(T.anisotropyMap.channel),clearcoatMapUv:Lt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:gt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:ht&&E(T.sheenRoughnessMap.channel),specularMapUv:bt&&E(T.specularMap.channel),specularColorMapUv:yt&&E(T.specularColorMap.channel),specularIntensityMapUv:de&&E(T.specularIntensityMap.channel),transmissionMapUv:Y&&E(T.transmissionMap.channel),thicknessMapUv:Ot&&E(T.thicknessMap.channel),alphaMapUv:Ht&&E(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(mn||te),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ot.attributes.uv&&(re||Ht),fog:!!rt,useFog:T.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ot.attributes.normal===void 0&&mn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Nt,skinning:et.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:k,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&mt.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:re&&T.map.isVideoTexture===!0&&ke.getTransfer(T.map.colorSpace)===Je,decodeVideoTextureEmissive:$e&&T.emissiveMap.isVideoTexture===!0&&ke.getTransfer(T.emissiveMap.colorSpace)===Je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qn,flipSided:T.side===wi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Bt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&T.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xe.vertexUv1s=m.has(1),xe.vertexUv2s=m.has(2),xe.vertexUv3s=m.has(3),m.clear(),xe}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const mt in T.defines)N.push(mt),N.push(T.defines[mt]);return T.isRawShaderMaterial===!1&&(y(N,T),C(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function y(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function C(T,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),T.push(f.mask)}function L(T){const N=S[T.type];let mt;if(N){const V=qa[N];mt=JS.clone(V.uniforms)}else mt=T.uniforms;return mt}function D(T,N){let mt=_.get(N);return mt!==void 0?++mt.usedTimes:(mt=new e2(r,N,T,l),p.push(mt),_.set(N,mt)),mt}function B(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function z(T){h.remove(T)}function H(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:D,releaseProgram:B,releaseShaderCache:z,programs:p,dispose:H}}function r2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function o2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Yx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function qx(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,w,M,y){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:y},r[t]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=E,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=y),t++,C}function m(g,S,E,w,M,y){const C=h(g,S,E,w,M,y);E.transmission>0?s.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,S,E,w,M,y){const C=h(g,S,E,w,M,y);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,S){i.length>1&&i.sort(g||o2),s.length>1&&s.sort(S||Yx),l.length>1&&l.sort(S||Yx)}function v(){for(let g=t,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function l2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new qx,r.set(s,[f])):l>=c.length?(f=new qx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function c2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new fe};break;case"SpotLight":i={position:new K,direction:new K,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function u2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let f2=0;function d2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function h2(r){const t=new c2,i=u2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new un,f=new un;function h(p){let _=0,v=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,E=0,w=0,M=0,y=0,C=0,L=0,D=0,B=0,z=0,H=0;p.sort(d2);for(let N=0,mt=p.length;N<mt;N++){const V=p[N],et=V.color,rt=V.intensity,ot=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ao?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=et.r*rt,v+=et.g*rt,g+=et.b*rt;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],rt);H++}else if(V.isDirectionalLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const P=V.shadow,ct=i.get(V);ct.shadowIntensity=P.intensity,ct.shadowBias=P.bias,ct.shadowNormalBias=P.normalBias,ct.shadowRadius=P.radius,ct.shadowMapSize=P.mapSize,s.directionalShadow[S]=ct,s.directionalShadowMap[S]=Q,s.directionalShadowMatrix[S]=V.shadow.matrix,C++}s.directional[S]=O,S++}else if(V.isSpotLight){const O=t.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(et).multiplyScalar(rt),O.distance=ot,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[w]=O;const P=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,P.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[w]=P.matrix,V.castShadow){const ct=i.get(V);ct.shadowIntensity=P.intensity,ct.shadowBias=P.bias,ct.shadowNormalBias=P.normalBias,ct.shadowRadius=P.radius,ct.shadowMapSize=P.mapSize,s.spotShadow[w]=ct,s.spotShadowMap[w]=Q,D++}w++}else if(V.isRectAreaLight){const O=t.get(V);O.color.copy(et).multiplyScalar(rt),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=O,M++}else if(V.isPointLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const P=V.shadow,ct=i.get(V);ct.shadowIntensity=P.intensity,ct.shadowBias=P.bias,ct.shadowNormalBias=P.normalBias,ct.shadowRadius=P.radius,ct.shadowMapSize=P.mapSize,ct.shadowCameraNear=P.camera.near,ct.shadowCameraFar=P.camera.far,s.pointShadow[E]=ct,s.pointShadowMap[E]=Q,s.pointShadowMatrix[E]=V.shadow.matrix,L++}s.point[E]=O,E++}else if(V.isHemisphereLight){const O=t.get(V);O.skyColor.copy(V.color).multiplyScalar(rt),O.groundColor.copy(V.groundColor).multiplyScalar(rt),s.hemi[y]=O,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=kt.LTC_FLOAT_1,s.rectAreaLTC2=kt.LTC_FLOAT_2):(s.rectAreaLTC1=kt.LTC_HALF_1,s.rectAreaLTC2=kt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==D||T.numSpotMaps!==B||T.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+B-z,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=H,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=D,T.numSpotMaps=B,T.numLightProbes=H,s.version=f2++)}function m(p,_){let v=0,g=0,S=0,E=0,w=0;const M=_.matrixWorldInverse;for(let y=0,C=p.length;y<C;y++){const L=p[y];if(L.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(L.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:h,setupView:m,state:s}}function jx(r){const t=new h2(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function p2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new jx(r),t.set(l,[h])):c>=f.length?(h=new jx(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const m2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g2=`uniform sampler2D shadow_pass;
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
}`,_2=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],v2=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Zx=new un,kc=new K,qm=new K;function x2(r,t,i){let s=new mh;const l=new De,c=new De,f=new Tn,h=new ey,m=new ny,p={},_=i.maxTextureSize,v={[qs]:wi,[wi]:qs,[qn]:qn},g=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:m2,fragmentShader:g2}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new ha;E.setAttribute("position",new Ua(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ge(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let y=this.type;this.render=function(z,H,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===fS&&(ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mo);const N=r.getRenderTarget(),mt=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),et=r.state;et.setBlending(us),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const rt=y!==this.type;rt&&H.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(Q=>Q.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,Q=z.length;ot<Q;ot++){const O=z[ot],P=O.shadow;if(P===void 0){ge("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const ct=P.getFrameExtents();l.multiply(ct),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ct.x),l.x=c.x*ct.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ct.y),l.y=c.y*ct.y,P.mapSize.y=c.y));const _t=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=_t,P.map===null||rt===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Cl){if(O.isPointLight){ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ka(l.x,l.y,{format:Ao,type:fs,minFilter:li,magFilter:li,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new Fl(l.x,l.y,Na),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=ds,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=oi,P.map.depthTexture.magFilter=oi}else O.isPointLight?(P.map=new V0(l.x),P.map.depthTexture=new jS(l.x,Qa)):(P.map=new Ka(l.x,l.y),P.map.depthTexture=new Fl(l.x,l.y,Qa)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=ds,this.type===Mo?(P.map.depthTexture.compareFunction=_t?dh:fh,P.map.depthTexture.minFilter=li,P.map.depthTexture.magFilter=li):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=oi,P.map.depthTexture.magFilter=oi);P.camera.updateProjectionMatrix()}const Dt=P.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Dt;I++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,I),r.clear();else{I===0&&(r.setRenderTarget(P.map),r.clear());const k=P.getViewport(I);f.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),et.viewport(f)}if(O.isPointLight){const k=P.camera,vt=P.matrix,At=O.distance||k.far;At!==k.far&&(k.far=At,k.updateProjectionMatrix()),kc.setFromMatrixPosition(O.matrixWorld),k.position.copy(kc),qm.copy(k.position),qm.add(_2[I]),k.up.copy(v2[I]),k.lookAt(qm),k.updateMatrixWorld(),vt.makeTranslation(-kc.x,-kc.y,-kc.z),Zx.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Zx,k.coordinateSystem,k.reversedDepth)}else P.updateMatrices(O);s=P.getFrustum(),D(H,T,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Cl&&C(P,T),P.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(N,mt,V)};function C(z,H){const T=t.update(w);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ka(l.x,l.y,{format:Ao,type:fs})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(H,null,T,g,w,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(H,null,T,S,w,null)}function L(z,H,T,N){let mt=null;const V=T.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)mt=V;else if(mt=T.isPointLight===!0?m:h,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const et=mt.uuid,rt=H.uuid;let ot=p[et];ot===void 0&&(ot={},p[et]=ot);let Q=ot[rt];Q===void 0&&(Q=mt.clone(),ot[rt]=Q,H.addEventListener("dispose",B)),mt=Q}if(mt.visible=H.visible,mt.wireframe=H.wireframe,N===Cl?mt.side=H.shadowSide!==null?H.shadowSide:H.side:mt.side=H.shadowSide!==null?H.shadowSide:v[H.side],mt.alphaMap=H.alphaMap,mt.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,mt.map=H.map,mt.clipShadows=H.clipShadows,mt.clippingPlanes=H.clippingPlanes,mt.clipIntersection=H.clipIntersection,mt.displacementMap=H.displacementMap,mt.displacementScale=H.displacementScale,mt.displacementBias=H.displacementBias,mt.wireframeLinewidth=H.wireframeLinewidth,mt.linewidth=H.linewidth,T.isPointLight===!0&&mt.isMeshDistanceMaterial===!0){const et=r.properties.get(mt);et.light=T}return mt}function D(z,H,T,N,mt){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&mt===Cl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,z.matrixWorld);const rt=t.update(z),ot=z.material;if(Array.isArray(ot)){const Q=rt.groups;for(let O=0,P=Q.length;O<P;O++){const ct=Q[O],_t=ot[ct.materialIndex];if(_t&&_t.visible){const Dt=L(z,_t,N,mt);z.onBeforeShadow(r,z,H,T,rt,Dt,ct),r.renderBufferDirect(T,null,rt,Dt,z,ct),z.onAfterShadow(r,z,H,T,rt,Dt,ct)}}}else if(ot.visible){const Q=L(z,ot,N,mt);z.onBeforeShadow(r,z,H,T,rt,Q,null),r.renderBufferDirect(T,null,rt,Q,z,null),z.onAfterShadow(r,z,H,T,rt,Q,null)}}const et=z.children;for(let rt=0,ot=et.length;rt<ot;rt++)D(et[rt],H,T,N,mt)}function B(z){z.target.removeEventListener("dispose",B);for(const T in p){const N=p[T],mt=z.target.uuid;mt in N&&(N[mt].dispose(),delete N[mt])}}}function S2(r,t){function i(){let Y=!1;const Ot=new Tn;let Ut=null;const Ht=new Tn(0,0,0,0);return{setMask:function(Ct){Ut!==Ct&&!Y&&(r.colorMask(Ct,Ct,Ct,Ct),Ut=Ct)},setLocked:function(Ct){Y=Ct},setClear:function(Ct,pt,Bt,le,xe){xe===!0&&(Ct*=le,pt*=le,Bt*=le),Ot.set(Ct,pt,Bt,le),Ht.equals(Ot)===!1&&(r.clearColor(Ct,pt,Bt,le),Ht.copy(Ot))},reset:function(){Y=!1,Ut=null,Ht.set(-1,0,0,0)}}}function s(){let Y=!1,Ot=!1,Ut=null,Ht=null,Ct=null;return{setReversed:function(pt){if(Ot!==pt){const Bt=t.get("EXT_clip_control");pt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ot=pt;const le=Ct;Ct=null,this.setClear(le)}},getReversed:function(){return Ot},setTest:function(pt){pt?Mt(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(pt){Ut!==pt&&!Y&&(r.depthMask(pt),Ut=pt)},setFunc:function(pt){if(Ot&&(pt=QM[pt]),Ht!==pt){switch(pt){case dd:r.depthFunc(r.NEVER);break;case hd:r.depthFunc(r.ALWAYS);break;case pd:r.depthFunc(r.LESS);break;case bo:r.depthFunc(r.LEQUAL);break;case md:r.depthFunc(r.EQUAL);break;case gd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=pt}},setLocked:function(pt){Y=pt},setClear:function(pt){Ct!==pt&&(Ct=pt,Ot&&(pt=1-pt),r.clearDepth(pt))},reset:function(){Y=!1,Ut=null,Ht=null,Ct=null,Ot=!1}}}function l(){let Y=!1,Ot=null,Ut=null,Ht=null,Ct=null,pt=null,Bt=null,le=null,xe=null;return{setTest:function(Me){Y||(Me?Mt(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(Me){Ot!==Me&&!Y&&(r.stencilMask(Me),Ot=Me)},setFunc:function(Me,Qe,Pn){(Ut!==Me||Ht!==Qe||Ct!==Pn)&&(r.stencilFunc(Me,Qe,Pn),Ut=Me,Ht=Qe,Ct=Pn)},setOp:function(Me,Qe,Pn){(pt!==Me||Bt!==Qe||le!==Pn)&&(r.stencilOp(Me,Qe,Pn),pt=Me,Bt=Qe,le=Pn)},setLocked:function(Me){Y=Me},setClear:function(Me){xe!==Me&&(r.clearStencil(Me),xe=Me)},reset:function(){Y=!1,Ot=null,Ut=null,Ht=null,Ct=null,pt=null,Bt=null,le=null,xe=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,S=[],E=null,w=!1,M=null,y=null,C=null,L=null,D=null,B=null,z=null,H=new fe(0,0,0),T=0,N=!1,mt=null,V=null,et=null,rt=null,ot=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,P=0;const ct=r.getParameter(r.VERSION);ct.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(ct)[1]),O=P>=1):ct.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),O=P>=2);let _t=null,Dt={};const I=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),vt=new Tn().fromArray(I),At=new Tn().fromArray(k);function Vt(Y,Ot,Ut,Ht){const Ct=new Uint8Array(4),pt=r.createTexture();r.bindTexture(Y,pt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<Ut;Bt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Ot+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return pt}const $={};$[r.TEXTURE_2D]=Vt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Mt(r.DEPTH_TEST),f.setFunc(bo),ve(!1),mn(e0),Mt(r.CULL_FACE),ye(us);function Mt(Y){_[Y]!==!0&&(r.enable(Y),_[Y]=!0)}function Nt(Y){_[Y]!==!1&&(r.disable(Y),_[Y]=!1)}function Xt(Y,Ot){return v[Y]!==Ot?(r.bindFramebuffer(Y,Ot),v[Y]=Ot,Y===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ot),Y===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function ie(Y,Ot){let Ut=S,Ht=!1;if(Y){Ut=g.get(Ot),Ut===void 0&&(Ut=[],g.set(Ot,Ut));const Ct=Y.textures;if(Ut.length!==Ct.length||Ut[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Bt=Ct.length;pt<Bt;pt++)Ut[pt]=r.COLOR_ATTACHMENT0+pt;Ut.length=Ct.length,Ht=!0}}else Ut[0]!==r.BACK&&(Ut[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(Ut)}function re(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const hn={[Ir]:r.FUNC_ADD,[hS]:r.FUNC_SUBTRACT,[pS]:r.FUNC_REVERSE_SUBTRACT};hn[mS]=r.MIN,hn[gS]=r.MAX;const Ce={[_S]:r.ZERO,[vS]:r.ONE,[xS]:r.SRC_COLOR,[ud]:r.SRC_ALPHA,[TS]:r.SRC_ALPHA_SATURATE,[ES]:r.DST_COLOR,[yS]:r.DST_ALPHA,[SS]:r.ONE_MINUS_SRC_COLOR,[fd]:r.ONE_MINUS_SRC_ALPHA,[bS]:r.ONE_MINUS_DST_COLOR,[MS]:r.ONE_MINUS_DST_ALPHA,[AS]:r.CONSTANT_COLOR,[RS]:r.ONE_MINUS_CONSTANT_COLOR,[CS]:r.CONSTANT_ALPHA,[wS]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(Y,Ot,Ut,Ht,Ct,pt,Bt,le,xe,Me){if(Y===us){w===!0&&(Nt(r.BLEND),w=!1);return}if(w===!1&&(Mt(r.BLEND),w=!0),Y!==dS){if(Y!==M||Me!==N){if((y!==Ir||D!==Ir)&&(r.blendEquation(r.FUNC_ADD),y=Ir,D=Ir),Me)switch(Y){case Eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case n0:r.blendFunc(r.ONE,r.ONE);break;case i0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case a0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case n0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case i0:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a0:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",Y);break}C=null,L=null,B=null,z=null,H.set(0,0,0),T=0,M=Y,N=Me}return}Ct=Ct||Ot,pt=pt||Ut,Bt=Bt||Ht,(Ot!==y||Ct!==D)&&(r.blendEquationSeparate(hn[Ot],hn[Ct]),y=Ot,D=Ct),(Ut!==C||Ht!==L||pt!==B||Bt!==z)&&(r.blendFuncSeparate(Ce[Ut],Ce[Ht],Ce[pt],Ce[Bt]),C=Ut,L=Ht,B=pt,z=Bt),(le.equals(H)===!1||xe!==T)&&(r.blendColor(le.r,le.g,le.b,xe),H.copy(le),T=xe),M=Y,N=!1}function Xe(Y,Ot){Y.side===qn?Nt(r.CULL_FACE):Mt(r.CULL_FACE);let Ut=Y.side===wi;Ot&&(Ut=!Ut),ve(Ut),Y.blending===Eo&&Y.transparent===!1?ye(us):ye(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ht=Y.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$e(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ve(Y){mt!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),mt=Y)}function mn(Y){Y!==lS?(Mt(r.CULL_FACE),Y!==V&&(Y===e0?r.cullFace(r.BACK):Y===cS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),V=Y}function X(Y){Y!==et&&(O&&r.lineWidth(Y),et=Y)}function $e(Y,Ot,Ut){Y?(Mt(r.POLYGON_OFFSET_FILL),(rt!==Ot||ot!==Ut)&&(rt=Ot,ot=Ut,f.getReversed()&&(Ot=-Ot),r.polygonOffset(Ot,Ut))):Nt(r.POLYGON_OFFSET_FILL)}function Ne(Y){Y?Mt(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function We(Y){Y===void 0&&(Y=r.TEXTURE0+Q-1),_t!==Y&&(r.activeTexture(Y),_t=Y)}function te(Y,Ot,Ut){Ut===void 0&&(_t===null?Ut=r.TEXTURE0+Q-1:Ut=_t);let Ht=Dt[Ut];Ht===void 0&&(Ht={type:void 0,texture:void 0},Dt[Ut]=Ht),(Ht.type!==Y||Ht.texture!==Ot)&&(_t!==Ut&&(r.activeTexture(Ut),_t=Ut),r.bindTexture(Y,Ot||$[Y]),Ht.type=Y,Ht.texture=Ot)}function U(){const Y=Dt[_t];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function F(){try{r.texSubImage2D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function nt(){try{r.texSubImage3D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function Lt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function gt(){try{r.texStorage2D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function Pt(){try{r.texStorage3D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function Qt(){try{r.texImage2D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function ut(){try{r.texImage3D(...arguments)}catch(Y){Ve("WebGLState:",Y)}}function Et(Y){vt.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),vt.copy(Y))}function ht(Y){At.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),At.copy(Y))}function bt(Y,Ot){let Ut=p.get(Ot);Ut===void 0&&(Ut=new WeakMap,p.set(Ot,Ut));let Ht=Ut.get(Y);Ht===void 0&&(Ht=r.getUniformBlockIndex(Ot,Y.name),Ut.set(Y,Ht))}function yt(Y,Ot){const Ht=p.get(Ot).get(Y);m.get(Ot)!==Ht&&(r.uniformBlockBinding(Ot,Ht,Y.__bindingPointIndex),m.set(Ot,Ht))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},_t=null,Dt={},v={},g=new WeakMap,S=[],E=null,w=!1,M=null,y=null,C=null,L=null,D=null,B=null,z=null,H=new fe(0,0,0),T=0,N=!1,mt=null,V=null,et=null,rt=null,ot=null,vt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Mt,disable:Nt,bindFramebuffer:Xt,drawBuffers:ie,useProgram:re,setBlending:ye,setMaterial:Xe,setFlipSided:ve,setCullFace:mn,setLineWidth:X,setPolygonOffset:$e,setScissorTest:Ne,activeTexture:We,bindTexture:te,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:Qt,texImage3D:ut,updateUBOMapping:bt,uniformBlockBinding:yt,texStorage2D:gt,texStorage3D:Pt,texSubImage2D:F,texSubImage3D:nt,compressedTexSubImage2D:Z,compressedTexSubImage3D:Lt,scissor:Et,viewport:ht,reset:de}}function y2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new De,_=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return S?new OffscreenCanvas(U,b):Jd("canvas")}function w(U,b,j){let F=1;const nt=te(U);if((nt.width>j||nt.height>j)&&(F=j/Math.max(nt.width,nt.height)),F<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Z=Math.floor(F*nt.width),Lt=Math.floor(F*nt.height);v===void 0&&(v=E(Z,Lt));const gt=b?E(Z,Lt):v;return gt.width=Z,gt.height=Lt,gt.getContext("2d").drawImage(U,0,0,Z,Lt),ge("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+Lt+")."),gt}else return"data"in U&&ge("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){r.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(U,b,j,F,nt=!1){if(U!==null){if(r[U]!==void 0)return r[U];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Z=b;if(b===r.RED&&(j===r.FLOAT&&(Z=r.R32F),j===r.HALF_FLOAT&&(Z=r.R16F),j===r.UNSIGNED_BYTE&&(Z=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(Z=r.R8UI),j===r.UNSIGNED_SHORT&&(Z=r.R16UI),j===r.UNSIGNED_INT&&(Z=r.R32UI),j===r.BYTE&&(Z=r.R8I),j===r.SHORT&&(Z=r.R16I),j===r.INT&&(Z=r.R32I)),b===r.RG&&(j===r.FLOAT&&(Z=r.RG32F),j===r.HALF_FLOAT&&(Z=r.RG16F),j===r.UNSIGNED_BYTE&&(Z=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(Z=r.RG8UI),j===r.UNSIGNED_SHORT&&(Z=r.RG16UI),j===r.UNSIGNED_INT&&(Z=r.RG32UI),j===r.BYTE&&(Z=r.RG8I),j===r.SHORT&&(Z=r.RG16I),j===r.INT&&(Z=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),j===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),j===r.UNSIGNED_INT&&(Z=r.RGB32UI),j===r.BYTE&&(Z=r.RGB8I),j===r.SHORT&&(Z=r.RGB16I),j===r.INT&&(Z=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),j===r.UNSIGNED_INT&&(Z=r.RGBA32UI),j===r.BYTE&&(Z=r.RGBA8I),j===r.SHORT&&(Z=r.RGBA16I),j===r.INT&&(Z=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),b===r.RGBA){const Lt=nt?ru:ke.getTransfer(F);j===r.FLOAT&&(Z=r.RGBA32F),j===r.HALF_FLOAT&&(Z=r.RGBA16F),j===r.UNSIGNED_BYTE&&(Z=Lt===Je?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function D(U,b){let j;return U?b===null||b===Qa||b===Ol?j=r.DEPTH24_STENCIL8:b===Na?j=r.DEPTH32F_STENCIL8:b===Ul&&(j=r.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qa||b===Ol?j=r.DEPTH_COMPONENT24:b===Na?j=r.DEPTH_COMPONENT32F:b===Ul&&(j=r.DEPTH_COMPONENT16),j}function B(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==oi&&U.minFilter!==li?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function z(U){const b=U.target;b.removeEventListener("dispose",z),T(b),b.isVideoTexture&&_.delete(b)}function H(U){const b=U.target;b.removeEventListener("dispose",H),mt(b)}function T(U){const b=s.get(U);if(b.__webglInit===void 0)return;const j=U.source,F=g.get(j);if(F){const nt=F[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&N(U),Object.keys(F).length===0&&g.delete(j)}s.remove(U)}function N(U){const b=s.get(U);r.deleteTexture(b.__webglTexture);const j=U.source,F=g.get(j);delete F[b.__cacheKey],f.memory.textures--}function mt(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(b.__webglFramebuffer[F]))for(let nt=0;nt<b.__webglFramebuffer[F].length;nt++)r.deleteFramebuffer(b.__webglFramebuffer[F][nt]);else r.deleteFramebuffer(b.__webglFramebuffer[F]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[F])}else{if(Array.isArray(b.__webglFramebuffer))for(let F=0;F<b.__webglFramebuffer.length;F++)r.deleteFramebuffer(b.__webglFramebuffer[F]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let F=0;F<b.__webglColorRenderbuffer.length;F++)b.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[F]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=U.textures;for(let F=0,nt=j.length;F<nt;F++){const Z=s.get(j[F]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),f.memory.textures--),s.remove(j[F])}s.remove(U)}let V=0;function et(){V=0}function rt(){const U=V;return U>=l.maxTextures&&ge("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ot(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function Q(U,b){const j=s.get(U);if(U.isVideoTexture&&Ne(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const F=U.image;if(F===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else{$(j,U,b);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function O(U,b){const j=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){$(j,U,b);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function P(U,b){const j=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){$(j,U,b);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function ct(U,b){const j=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&j.__version!==U.version){Mt(j,U,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const _t={[Ll]:r.REPEAT,[cs]:r.CLAMP_TO_EDGE,[xd]:r.MIRRORED_REPEAT},Dt={[oi]:r.NEAREST,[LS]:r.NEAREST_MIPMAP_NEAREST,[Zc]:r.NEAREST_MIPMAP_LINEAR,[li]:r.LINEAR,[sd]:r.LINEAR_MIPMAP_NEAREST,[Ws]:r.LINEAR_MIPMAP_LINEAR},I={[IS]:r.NEVER,[HS]:r.ALWAYS,[PS]:r.LESS,[fh]:r.LEQUAL,[FS]:r.EQUAL,[dh]:r.GEQUAL,[BS]:r.GREATER,[zS]:r.NOTEQUAL};function k(U,b){if(b.type===Na&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===li||b.magFilter===sd||b.magFilter===Zc||b.magFilter===Ws||b.minFilter===li||b.minFilter===sd||b.minFilter===Zc||b.minFilter===Ws)&&ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,_t[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,_t[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,_t[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Dt[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Dt[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===oi||b.minFilter!==Zc&&b.minFilter!==Ws||b.type===Na&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function vt(U,b){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",z));const F=b.source;let nt=g.get(F);nt===void 0&&(nt={},g.set(F,nt));const Z=ot(b);if(Z!==U.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),nt[Z].usedTimes++;const Lt=nt[U.__cacheKey];Lt!==void 0&&(nt[U.__cacheKey].usedTimes--,Lt.usedTimes===0&&N(b)),U.__cacheKey=Z,U.__webglTexture=nt[Z].texture}return j}function At(U,b,j){return Math.floor(Math.floor(U/j)/b)}function Vt(U,b,j,F){const Z=U.updateRanges;if(Z.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,F,b.data);else{Z.sort((ut,Et)=>ut.start-Et.start);let Lt=0;for(let ut=1;ut<Z.length;ut++){const Et=Z[Lt],ht=Z[ut],bt=Et.start+Et.count,yt=At(ht.start,b.width,4),de=At(Et.start,b.width,4);ht.start<=bt+1&&yt===de&&At(ht.start+ht.count-1,b.width,4)===yt?Et.count=Math.max(Et.count,ht.start+ht.count-Et.start):(++Lt,Z[Lt]=ht)}Z.length=Lt+1;const gt=r.getParameter(r.UNPACK_ROW_LENGTH),Pt=r.getParameter(r.UNPACK_SKIP_PIXELS),Qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let ut=0,Et=Z.length;ut<Et;ut++){const ht=Z[ut],bt=Math.floor(ht.start/4),yt=Math.ceil(ht.count/4),de=bt%b.width,Y=Math.floor(bt/b.width),Ot=yt,Ut=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,de,Y,Ot,Ut,j,F,b.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,gt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qt)}}function $(U,b,j){let F=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(F=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(F=r.TEXTURE_3D);const nt=vt(U,b),Z=b.source;i.bindTexture(F,U.__webglTexture,r.TEXTURE0+j);const Lt=s.get(Z);if(Z.version!==Lt.__version||nt===!0){i.activeTexture(r.TEXTURE0+j);const gt=ke.getPrimaries(ke.workingColorSpace),Pt=b.colorSpace===ks?null:ke.getPrimaries(b.colorSpace),Qt=b.colorSpace===ks||gt===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ut=w(b.image,!1,l.maxTextureSize);ut=We(b,ut);const Et=c.convert(b.format,b.colorSpace),ht=c.convert(b.type);let bt=L(b.internalFormat,Et,ht,b.colorSpace,b.isVideoTexture);k(F,b);let yt;const de=b.mipmaps,Y=b.isVideoTexture!==!0,Ot=Lt.__version===void 0||nt===!0,Ut=Z.dataReady,Ht=B(b,ut);if(b.isDepthTexture)bt=D(b.format===Pr,b.type),Ot&&(Y?i.texStorage2D(r.TEXTURE_2D,1,bt,ut.width,ut.height):i.texImage2D(r.TEXTURE_2D,0,bt,ut.width,ut.height,0,Et,ht,null));else if(b.isDataTexture)if(de.length>0){Y&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,bt,de[0].width,de[0].height);for(let Ct=0,pt=de.length;Ct<pt;Ct++)yt=de[Ct],Y?Ut&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,yt.width,yt.height,Et,ht,yt.data):i.texImage2D(r.TEXTURE_2D,Ct,bt,yt.width,yt.height,0,Et,ht,yt.data);b.generateMipmaps=!1}else Y?(Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,bt,ut.width,ut.height),Ut&&Vt(b,ut,Et,ht)):i.texImage2D(r.TEXTURE_2D,0,bt,ut.width,ut.height,0,Et,ht,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,bt,de[0].width,de[0].height,ut.depth);for(let Ct=0,pt=de.length;Ct<pt;Ct++)if(yt=de[Ct],b.format!==La)if(Et!==null)if(Y){if(Ut)if(b.layerUpdates.size>0){const Bt=Rx(yt.width,yt.height,b.format,b.type);for(const le of b.layerUpdates){const xe=yt.data.subarray(le*Bt/yt.data.BYTES_PER_ELEMENT,(le+1)*Bt/yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,le,yt.width,yt.height,1,Et,xe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,yt.width,yt.height,ut.depth,Et,yt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ct,bt,yt.width,yt.height,ut.depth,0,yt.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ut&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,yt.width,yt.height,ut.depth,Et,ht,yt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ct,bt,yt.width,yt.height,ut.depth,0,Et,ht,yt.data)}else{Y&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,bt,de[0].width,de[0].height);for(let Ct=0,pt=de.length;Ct<pt;Ct++)yt=de[Ct],b.format!==La?Et!==null?Y?Ut&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ct,0,0,yt.width,yt.height,Et,yt.data):i.compressedTexImage2D(r.TEXTURE_2D,Ct,bt,yt.width,yt.height,0,yt.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ut&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,yt.width,yt.height,Et,ht,yt.data):i.texImage2D(r.TEXTURE_2D,Ct,bt,yt.width,yt.height,0,Et,ht,yt.data)}else if(b.isDataArrayTexture)if(Y){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,bt,ut.width,ut.height,ut.depth),Ut)if(b.layerUpdates.size>0){const Ct=Rx(ut.width,ut.height,b.format,b.type);for(const pt of b.layerUpdates){const Bt=ut.data.subarray(pt*Ct/ut.data.BYTES_PER_ELEMENT,(pt+1)*Ct/ut.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,ut.width,ut.height,1,Et,ht,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,ht,ut.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,ut.width,ut.height,ut.depth,0,Et,ht,ut.data);else if(b.isData3DTexture)Y?(Ot&&i.texStorage3D(r.TEXTURE_3D,Ht,bt,ut.width,ut.height,ut.depth),Ut&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,ht,ut.data)):i.texImage3D(r.TEXTURE_3D,0,bt,ut.width,ut.height,ut.depth,0,Et,ht,ut.data);else if(b.isFramebufferTexture){if(Ot)if(Y)i.texStorage2D(r.TEXTURE_2D,Ht,bt,ut.width,ut.height);else{let Ct=ut.width,pt=ut.height;for(let Bt=0;Bt<Ht;Bt++)i.texImage2D(r.TEXTURE_2D,Bt,bt,Ct,pt,0,Et,ht,null),Ct>>=1,pt>>=1}}else if(de.length>0){if(Y&&Ot){const Ct=te(de[0]);i.texStorage2D(r.TEXTURE_2D,Ht,bt,Ct.width,Ct.height)}for(let Ct=0,pt=de.length;Ct<pt;Ct++)yt=de[Ct],Y?Ut&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Et,ht,yt):i.texImage2D(r.TEXTURE_2D,Ct,bt,Et,ht,yt);b.generateMipmaps=!1}else if(Y){if(Ot){const Ct=te(ut);i.texStorage2D(r.TEXTURE_2D,Ht,bt,Ct.width,Ct.height)}Ut&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,ht,ut)}else i.texImage2D(r.TEXTURE_2D,0,bt,Et,ht,ut);M(b)&&y(F),Lt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Mt(U,b,j){if(b.image.length!==6)return;const F=vt(U,b),nt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+j);const Z=s.get(nt);if(nt.version!==Z.__version||F===!0){i.activeTexture(r.TEXTURE0+j);const Lt=ke.getPrimaries(ke.workingColorSpace),gt=b.colorSpace===ks?null:ke.getPrimaries(b.colorSpace),Pt=b.colorSpace===ks||Lt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let pt=0;pt<6;pt++)!Qt&&!ut?Et[pt]=w(b.image[pt],!0,l.maxCubemapSize):Et[pt]=ut?b.image[pt].image:b.image[pt],Et[pt]=We(b,Et[pt]);const ht=Et[0],bt=c.convert(b.format,b.colorSpace),yt=c.convert(b.type),de=L(b.internalFormat,bt,yt,b.colorSpace),Y=b.isVideoTexture!==!0,Ot=Z.__version===void 0||F===!0,Ut=nt.dataReady;let Ht=B(b,ht);k(r.TEXTURE_CUBE_MAP,b);let Ct;if(Qt){Y&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,de,ht.width,ht.height);for(let pt=0;pt<6;pt++){Ct=Et[pt].mipmaps;for(let Bt=0;Bt<Ct.length;Bt++){const le=Ct[Bt];b.format!==La?bt!==null?Y?Ut&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,0,0,le.width,le.height,bt,le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,de,le.width,le.height,0,le.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,0,0,le.width,le.height,bt,yt,le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,de,le.width,le.height,0,bt,yt,le.data)}}}else{if(Ct=b.mipmaps,Y&&Ot){Ct.length>0&&Ht++;const pt=te(Et[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,de,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(ut){Y?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Et[pt].width,Et[pt].height,bt,yt,Et[pt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,de,Et[pt].width,Et[pt].height,0,bt,yt,Et[pt].data);for(let Bt=0;Bt<Ct.length;Bt++){const xe=Ct[Bt].image[pt].image;Y?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,0,0,xe.width,xe.height,bt,yt,xe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,de,xe.width,xe.height,0,bt,yt,xe.data)}}else{Y?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,bt,yt,Et[pt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,de,bt,yt,Et[pt]);for(let Bt=0;Bt<Ct.length;Bt++){const le=Ct[Bt];Y?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,0,0,bt,yt,le.image[pt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,de,bt,yt,le.image[pt])}}}M(b)&&y(r.TEXTURE_CUBE_MAP),Z.__version=nt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Nt(U,b,j,F,nt,Z){const Lt=c.convert(j.format,j.colorSpace),gt=c.convert(j.type),Pt=L(j.internalFormat,Lt,gt,j.colorSpace),Qt=s.get(b),ut=s.get(j);if(ut.__renderTarget=b,!Qt.__hasExternalTextures){const Et=Math.max(1,b.width>>Z),ht=Math.max(1,b.height>>Z);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?i.texImage3D(nt,Z,Pt,Et,ht,b.depth,0,Lt,gt,null):i.texImage2D(nt,Z,Pt,Et,ht,0,Lt,gt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),$e(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,F,nt,ut.__webglTexture,0,X(b)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,F,nt,ut.__webglTexture,Z),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(U,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const F=b.depthTexture,nt=F&&F.isDepthTexture?F.type:null,Z=D(b.stencilBuffer,nt),Lt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$e(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(b),Z,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(b),Z,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Z,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Lt,r.RENDERBUFFER,U)}else{const F=b.textures;for(let nt=0;nt<F.length;nt++){const Z=F[nt],Lt=c.convert(Z.format,Z.colorSpace),gt=c.convert(Z.type),Pt=L(Z.internalFormat,Lt,gt,Z.colorSpace);$e(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(b),Pt,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(b),Pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Pt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ie(U,b,j){const F=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=s.get(b.depthTexture);if(nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),nt.__webglTexture===void 0){nt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),k(r.TEXTURE_CUBE_MAP,b.depthTexture);const Qt=c.convert(b.depthTexture.format),ut=c.convert(b.depthTexture.type);let Et;b.depthTexture.format===ds?Et=r.DEPTH_COMPONENT24:b.depthTexture.format===Pr&&(Et=r.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Et,b.width,b.height,0,Qt,ut,null)}}else Q(b.depthTexture,0);const Z=nt.__webglTexture,Lt=X(b),gt=F?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Pt=b.depthTexture.format===Pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ds)$e(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pt,gt,Z,0,Lt):r.framebufferTexture2D(r.FRAMEBUFFER,Pt,gt,Z,0);else if(b.depthTexture.format===Pr)$e(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pt,gt,Z,0,Lt):r.framebufferTexture2D(r.FRAMEBUFFER,Pt,gt,Z,0);else throw new Error("Unknown depthTexture format")}function re(U){const b=s.get(U),j=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const F=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),F){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,F.removeEventListener("dispose",nt)};F.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=F}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let F=0;F<6;F++)ie(b.__webglFramebuffer[F],U,F);else{const F=U.texture.mipmaps;F&&F.length>0?ie(b.__webglFramebuffer[0],U,0):ie(b.__webglFramebuffer,U,0)}else if(j){b.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[F]),b.__webglDepthbuffer[F]===void 0)b.__webglDepthbuffer[F]=r.createRenderbuffer(),Xt(b.__webglDepthbuffer[F],U,!1);else{const nt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[F];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,Z)}}else{const F=U.texture.mipmaps;if(F&&F.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xt(b.__webglDepthbuffer,U,!1);else{const nt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,Z)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function hn(U,b,j){const F=s.get(U);b!==void 0&&Nt(F.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&re(U)}function Ce(U){const b=U.texture,j=s.get(U),F=s.get(b);U.addEventListener("dispose",H);const nt=U.textures,Z=U.isWebGLCubeRenderTarget===!0,Lt=nt.length>1;if(Lt||(F.__webglTexture===void 0&&(F.__webglTexture=r.createTexture()),F.__version=b.version,f.memory.textures++),Z){j.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[gt]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)j.__webglFramebuffer[gt][Pt]=r.createFramebuffer()}else j.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)j.__webglFramebuffer[gt]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Lt)for(let gt=0,Pt=nt.length;gt<Pt;gt++){const Qt=s.get(nt[gt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&$e(U)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){const Pt=nt[gt];j.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[gt]);const Qt=c.convert(Pt.format,Pt.colorSpace),ut=c.convert(Pt.type),Et=L(Pt.internalFormat,Qt,ut,Pt.colorSpace,U.isXRRenderTarget===!0),ht=X(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,Et,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,j.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(j.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture),k(r.TEXTURE_CUBE_MAP,b);for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Nt(j.__webglFramebuffer[gt][Pt],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt);else Nt(j.__webglFramebuffer[gt],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);M(b)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let gt=0,Pt=nt.length;gt<Pt;gt++){const Qt=nt[gt],ut=s.get(Qt);let Et=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,ut.__webglTexture),k(Et,Qt),Nt(j.__webglFramebuffer,U,Qt,r.COLOR_ATTACHMENT0+gt,Et,0),M(Qt)&&y(Et)}i.unbindTexture()}else{let gt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(gt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(gt,F.__webglTexture),k(gt,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Nt(j.__webglFramebuffer[Pt],U,b,r.COLOR_ATTACHMENT0,gt,Pt);else Nt(j.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,gt,0);M(b)&&y(gt),i.unbindTexture()}U.depthBuffer&&re(U)}function ye(U){const b=U.textures;for(let j=0,F=b.length;j<F;j++){const nt=b[j];if(M(nt)){const Z=C(U),Lt=s.get(nt).__webglTexture;i.bindTexture(Z,Lt),y(Z),i.unbindTexture()}}}const Xe=[],ve=[];function mn(U){if(U.samples>0){if($e(U)===!1){const b=U.textures,j=U.width,F=U.height;let nt=r.COLOR_BUFFER_BIT;const Z=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=s.get(U),gt=b.length>1;if(gt)for(let Qt=0;Qt<b.length;Qt++)i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Pt=U.texture.mipmaps;Pt&&Pt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Qt=0;Qt<b.length;Qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Qt]);const ut=s.get(b[Qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ut,0)}r.blitFramebuffer(0,0,j,F,0,0,j,F,nt,r.NEAREST),m===!0&&(Xe.length=0,ve.length=0,Xe.push(r.COLOR_ATTACHMENT0+Qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Xe.push(Z),ve.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let Qt=0;Qt<b.length;Qt++){i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Qt]);const ut=s.get(b[Qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.TEXTURE_2D,ut,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function X(U){return Math.min(l.maxSamples,U.samples)}function $e(U){const b=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ne(U){const b=f.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function We(U,b){const j=U.colorSpace,F=U.format,nt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Ro&&j!==ks&&(ke.getTransfer(j)===Je?(F!==La||nt!==Zi)&&ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",j)),b}function te(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=et,this.setTexture2D=Q,this.setTexture2DArray=O,this.setTexture3D=P,this.setTextureCube=ct,this.rebindTextures=hn,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function py(r,t){function i(s,l=ks){let c;const f=ke.getTransfer(l);if(s===Zi)return r.UNSIGNED_BYTE;if(s===ah)return r.UNSIGNED_SHORT_4_4_4_4;if(s===sh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===A0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===R0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===b0)return r.BYTE;if(s===T0)return r.SHORT;if(s===Ul)return r.UNSIGNED_SHORT;if(s===ih)return r.INT;if(s===Qa)return r.UNSIGNED_INT;if(s===Na)return r.FLOAT;if(s===fs)return r.HALF_FLOAT;if(s===C0)return r.ALPHA;if(s===w0)return r.RGB;if(s===La)return r.RGBA;if(s===ds)return r.DEPTH_COMPONENT;if(s===Pr)return r.DEPTH_STENCIL;if(s===rh)return r.RED;if(s===oh)return r.RED_INTEGER;if(s===Ao)return r.RG;if(s===lh)return r.RG_INTEGER;if(s===ch)return r.RGBA_INTEGER;if(s===$c||s===tu||s===eu||s===nu)if(f===Je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sd||s===yd||s===Md||s===Ed)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===bd||s===Td)return f===Je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ad)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rd)return c.COMPRESSED_R11_EAC;if(s===Cd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===wd)return c.COMPRESSED_RG11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Nd||s===Ld||s===Ud||s===Od||s===Id||s===Pd||s===Fd||s===Bd||s===zd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ld)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ud)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Od)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Id)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wd||s===Yd||s===qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Wd)return f===Je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jd||s===Zd||s===Kd||s===Qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ol?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const M2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E2=`
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

}`;class b2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new B0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ja({vertexShader:M2,fragmentShader:E2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ge(new ls(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T2 extends Co{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",M=new b2,y={},C=i.getContextAttributes();let L=null,D=null;const B=[],z=[],H=new De;let T=null;const N=new Hi;N.viewport=new Tn;const mt=new Hi;mt.viewport=new Tn;const V=[N,mt],et=new ry;let rt=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Mt=B[$];return Mt===void 0&&(Mt=new rd,B[$]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function($){let Mt=B[$];return Mt===void 0&&(Mt=new rd,B[$]=Mt),Mt.getGripSpace()},this.getHand=function($){let Mt=B[$];return Mt===void 0&&(Mt=new rd,B[$]=Mt),Mt.getHandSpace()};function Q($){const Mt=z.indexOf($.inputSource);if(Mt===-1)return;const Nt=B[Mt];Nt!==void 0&&(Nt.update($.inputSource,$.frame,p||f),Nt.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",P);for(let $=0;$<B.length;$++){const Mt=z[$];Mt!==null&&(z[$]=null,B[$].disconnect(Mt))}rt=null,ot=null,M.reset();for(const $ in y)delete y[$];t.setRenderTarget(L),S=null,g=null,v=null,l=null,D=null,Vt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,s.isPresenting===!0&&ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",O),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(H),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Xt=null,ie=null;C.depth&&(ie=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Nt=C.stencil?Pr:ds,Xt=C.stencil?Ol:Qa);const re={colorFormat:i.RGBA8,depthFormat:ie,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(re),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Ka(g.textureWidth,g.textureHeight,{format:La,type:Zi,depthTexture:new Fl(g.textureWidth,g.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Nt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Nt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Ka(S.framebufferWidth,S.framebufferHeight,{format:La,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Vt.setContext(l),Vt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P($){for(let Mt=0;Mt<$.removed.length;Mt++){const Nt=$.removed[Mt],Xt=z.indexOf(Nt);Xt>=0&&(z[Xt]=null,B[Xt].disconnect(Nt))}for(let Mt=0;Mt<$.added.length;Mt++){const Nt=$.added[Mt];let Xt=z.indexOf(Nt);if(Xt===-1){for(let re=0;re<B.length;re++)if(re>=z.length){z.push(Nt),Xt=re;break}else if(z[re]===null){z[re]=Nt,Xt=re;break}if(Xt===-1)break}const ie=B[Xt];ie&&ie.connect(Nt)}}const ct=new K,_t=new K;function Dt($,Mt,Nt){ct.setFromMatrixPosition(Mt.matrixWorld),_t.setFromMatrixPosition(Nt.matrixWorld);const Xt=ct.distanceTo(_t),ie=Mt.projectionMatrix.elements,re=Nt.projectionMatrix.elements,hn=ie[14]/(ie[10]-1),Ce=ie[14]/(ie[10]+1),ye=(ie[9]+1)/ie[5],Xe=(ie[9]-1)/ie[5],ve=(ie[8]-1)/ie[0],mn=(re[8]+1)/re[0],X=hn*ve,$e=hn*mn,Ne=Xt/(-ve+mn),We=Ne*-ve;if(Mt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(We),$.translateZ(Ne),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ie[10]===-1)$.projectionMatrix.copy(Mt.projectionMatrix),$.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const te=hn+Ne,U=Ce+Ne,b=X-We,j=$e+(Xt-We),F=ye*Ce/U*te,nt=Xe*Ce/U*te;$.projectionMatrix.makePerspective(b,j,F,nt,te,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function I($,Mt){Mt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Mt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let Mt=$.near,Nt=$.far;M.texture!==null&&(M.depthNear>0&&(Mt=M.depthNear),M.depthFar>0&&(Nt=M.depthFar)),et.near=mt.near=N.near=Mt,et.far=mt.far=N.far=Nt,(rt!==et.near||ot!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),rt=et.near,ot=et.far),et.layers.mask=$.layers.mask|6,N.layers.mask=et.layers.mask&-5,mt.layers.mask=et.layers.mask&-3;const Xt=$.parent,ie=et.cameras;I(et,Xt);for(let re=0;re<ie.length;re++)I(ie[re],Xt);ie.length===2?Dt(et,N,mt):et.projectionMatrix.copy(N.projectionMatrix),k($,et,Xt)};function k($,Mt,Nt){Nt===null?$.matrix.copy(Mt.matrixWorld):($.matrix.copy(Nt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Mt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Mt.projectionMatrix),$.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Pl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function($){m=$,g!==null&&(g.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(et)},this.getCameraTexture=function($){return y[$]};let vt=null;function At($,Mt){if(_=Mt.getViewerPose(p||f),E=Mt,_!==null){const Nt=_.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let Xt=!1;Nt.length!==et.cameras.length&&(et.cameras.length=0,Xt=!0);for(let Ce=0;Ce<Nt.length;Ce++){const ye=Nt[Ce];let Xe=null;if(S!==null)Xe=S.getViewport(ye);else{const mn=v.getViewSubImage(g,ye);Xe=mn.viewport,Ce===0&&(t.setRenderTargetTextures(D,mn.colorTexture,mn.depthStencilTexture),t.setRenderTarget(D))}let ve=V[Ce];ve===void 0&&(ve=new Hi,ve.layers.enable(Ce),ve.viewport=new Tn,V[Ce]=ve),ve.matrix.fromArray(ye.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ye.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ce===0&&(et.matrix.copy(ve.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Xt===!0&&et.cameras.push(ve)}const ie=l.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const Ce=v.getDepthInformation(Nt[0]);Ce&&Ce.isValid&&Ce.texture&&M.init(Ce,l.renderState)}if(ie&&ie.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let Ce=0;Ce<Nt.length;Ce++){const ye=Nt[Ce].camera;if(ye){let Xe=y[ye];Xe||(Xe=new B0,y[ye]=Xe);const ve=v.getCameraImage(ye);Xe.sourceTexture=ve}}}}for(let Nt=0;Nt<B.length;Nt++){const Xt=z[Nt],ie=B[Nt];Xt!==null&&ie!==void 0&&ie.update(Xt,Mt,p||f)}vt&&vt($,Mt),Mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Mt}),E=null}const Vt=new cy;Vt.setAnimationLoop(At),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}}const mo=new da,A2=new un;function R2(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,QS(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,C,L,D){y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,D)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,C,L):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===wi&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===wi&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const C=t.get(y),L=C.envMap,D=C.envMapRotation;L&&(M.envMap.value=L,mo.copy(D),mo.x*=-1,mo.y*=-1,mo.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),M.envMapRotation.value.setFromMatrix4(A2.makeRotationFromEuler(mo)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,C,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*C,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,C){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===wi&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const C=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function C2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const D=L.program;s.uniformBlockBinding(C,D)}function p(C,L){let D=l[C.id];D===void 0&&(E(C),D=_(C),l[C.id]=D,C.addEventListener("dispose",M));const B=L.program;s.updateUBOMapping(C,B);const z=t.render.frame;c[C.id]!==z&&(g(C),c[C.id]=z)}function _(C){const L=v();C.__bindingPointIndex=L;const D=r.createBuffer(),B=C.__size,z=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function v(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],D=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,H=D.length;z<H;z++){const T=Array.isArray(D[z])?D[z]:[D[z]];for(let N=0,mt=T.length;N<mt;N++){const V=T[N];if(S(V,z,N,B)===!0){const et=V.__offset,rt=Array.isArray(V.value)?V.value:[V.value];let ot=0;for(let Q=0;Q<rt.length;Q++){const O=rt[Q],P=w(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,et+ot,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,ot),ot+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,et,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,L,D,B){const z=C.value,H=L+"_"+D;if(B[H]===void 0)return typeof z=="number"||typeof z=="boolean"?B[H]=z:B[H]=z.clone(),!0;{const T=B[H];if(typeof z=="number"||typeof z=="boolean"){if(T!==z)return B[H]=z,!0}else if(T.equals(z)===!1)return T.copy(z),!0}return!1}function E(C){const L=C.uniforms;let D=0;const B=16;for(let H=0,T=L.length;H<T;H++){const N=Array.isArray(L[H])?L[H]:[L[H]];for(let mt=0,V=N.length;mt<V;mt++){const et=N[mt],rt=Array.isArray(et.value)?et.value:[et.value];for(let ot=0,Q=rt.length;ot<Q;ot++){const O=rt[ot],P=w(O),ct=D%B,_t=ct%P.boundary,Dt=ct+_t;D+=_t,Dt!==0&&B-Dt<P.storage&&(D+=B-Dt),et.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=P.storage}}}const z=D%B;return z>0&&(D+=B-z),C.__size=D,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ge("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const w2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let os=null;function D2(){return os===null&&(os=new P0(w2,16,16,Ao,fs),os.name="DFG_LUT",os.minFilter=li,os.magFilter=li,os.wrapS=cs,os.wrapT=cs,os.generateMipmaps=!1,os.needsUpdate=!0),os}class my{constructor(t={}){const{canvas:i=GS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Zi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const w=S,M=new Set([ch,lh,oh]),y=new Set([Zi,Qa,Ul,Ol,ah,sh]),C=new Uint32Array(4),L=new Int32Array(4);let D=null,B=null;const z=[],H=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let mt=!1;this._outputColorSpace=Jn;let V=0,et=0,rt=null,ot=-1,Q=null;const O=new Tn,P=new Tn;let ct=null;const _t=new fe(0);let Dt=0,I=i.width,k=i.height,vt=1,At=null,Vt=null;const $=new Tn(0,0,I,k),Mt=new Tn(0,0,I,k);let Nt=!1;const Xt=new mh;let ie=!1,re=!1;const hn=new un,Ce=new K,ye=new Tn,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function mn(){return rt===null?vt:1}let X=s;function $e(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${th}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",le,!1),i.addEventListener("webglcontextcreationerror",xe,!1),X===null){const q="webgl2";if(X=$e(q,R),X===null)throw $e(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ve("WebGLRenderer: "+R.message),R}let Ne,We,te,U,b,j,F,nt,Z,Lt,gt,Pt,Qt,ut,Et,ht,bt,yt,de,Y,Ot,Ut,Ht;function Ct(){Ne=new LT(X),Ne.init(),Ot=new py(X,Ne),We=new bT(X,Ne,t,Ot),te=new S2(X,Ne),We.reversedDepthBuffer&&g&&te.buffers.depth.setReversed(!0),U=new IT(X),b=new r2,j=new y2(X,Ne,te,b,We,Ot,U),F=new NT(N),nt=new HE(X),Ut=new MT(X,nt),Z=new UT(X,nt,U,Ut),Lt=new FT(X,Z,nt,Ut,U),yt=new PT(X,We,j),Et=new TT(b),gt=new s2(N,F,Ne,We,Ut,Et),Pt=new R2(N,b),Qt=new l2,ut=new p2(Ne),bt=new yT(N,F,te,Lt,E,m),ht=new x2(N,Lt,We),Ht=new C2(X,U,We,te),de=new ET(X,Ne,U),Y=new OT(X,Ne,U),U.programs=gt.programs,N.capabilities=We,N.extensions=Ne,N.properties=b,N.renderLists=Qt,N.shadowMap=ht,N.state=te,N.info=U}Ct(),w!==Zi&&(T=new zT(w,i.width,i.height,l,c));const pt=new T2(N,X);this.xr=pt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize(I,k,!1))},this.getSize=function(R){return R.set(I,k)},this.setSize=function(R,q,ft=!0){if(pt.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,k=q,i.width=Math.floor(R*vt),i.height=Math.floor(q*vt),ft===!0&&(i.style.width=R+"px",i.style.height=q+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*vt,k*vt).floor()},this.setDrawingBufferSize=function(R,q,ft){I=R,k=q,vt=ft,i.width=Math.floor(R*ft),i.height=Math.floor(q*ft),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(w===Zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,q,ft,at){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,ft,at),te.viewport(O.copy($).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(Mt)},this.setScissor=function(R,q,ft,at){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,q,ft,at),te.scissor(P.copy(Mt).multiplyScalar(vt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){te.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Vt=R},this.getClearColor=function(R){return R.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ft=!0){let at=0;if(R){let tt=!1;if(rt!==null){const Ft=rt.texture.format;tt=M.has(Ft)}if(tt){const Ft=rt.texture.type,Yt=y.has(Ft),Gt=bt.getClearColor(),Kt=bt.getClearAlpha(),ne=Gt.r,he=Gt.g,se=Gt.b;Yt?(C[0]=ne,C[1]=he,C[2]=se,C[3]=Kt,X.clearBufferuiv(X.COLOR,0,C)):(L[0]=ne,L[1]=he,L[2]=se,L[3]=Kt,X.clearBufferiv(X.COLOR,0,L))}else at|=X.COLOR_BUFFER_BIT}q&&(at|=X.DEPTH_BUFFER_BIT),ft&&(at|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&X.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",le,!1),i.removeEventListener("webglcontextcreationerror",xe,!1),bt.dispose(),Qt.dispose(),ut.dispose(),b.dispose(),F.dispose(),Lt.dispose(),Ut.dispose(),Ht.dispose(),gt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Nn),pt.removeEventListener("sessionend",Zs),Di.stop()};function Bt(R){R.preventDefault(),l0("WebGLRenderer: Context Lost."),mt=!0}function le(){l0("WebGLRenderer: Context Restored."),mt=!1;const R=U.autoReset,q=ht.enabled,ft=ht.autoUpdate,at=ht.needsUpdate,tt=ht.type;Ct(),U.autoReset=R,ht.enabled=q,ht.autoUpdate=ft,ht.needsUpdate=at,ht.type=tt}function xe(R){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Me(R){const q=R.target;q.removeEventListener("dispose",Me),Qe(q)}function Qe(R){Pn(R),b.remove(R)}function Pn(R){const q=b.get(R).programs;q!==void 0&&(q.forEach(function(ft){gt.releaseProgram(ft)}),R.isShaderMaterial&&gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ft,at,tt,Ft){q===null&&(q=Xe);const Yt=tt.isMesh&&tt.matrixWorld.determinant()<0,Gt=hs(R,q,ft,at,tt);te.setMaterial(at,Yt);let Kt=ft.index,ne=1;if(at.wireframe===!0){if(Kt=Z.getWireframeAttribute(ft),Kt===void 0)return;ne=2}const he=ft.drawRange,se=ft.attributes.position;let qt=he.start*ne,_e=(he.start+he.count)*ne;Ft!==null&&(qt=Math.max(qt,Ft.start*ne),_e=Math.min(_e,(Ft.start+Ft.count)*ne)),Kt!==null?(qt=Math.max(qt,0),_e=Math.min(_e,Kt.count)):se!=null&&(qt=Math.max(qt,0),_e=Math.min(_e,se.count));const an=_e-qt;if(an<0||an===1/0)return;Ut.setup(tt,at,Gt,ft,Kt);let sn,pe=de;if(Kt!==null&&(sn=nt.get(Kt),pe=Y,pe.setIndex(sn)),tt.isMesh)at.wireframe===!0?(te.setLineWidth(at.wireframeLinewidth*mn()),pe.setMode(X.LINES)):pe.setMode(X.TRIANGLES);else if(tt.isLine){let _n=at.linewidth;_n===void 0&&(_n=1),te.setLineWidth(_n*mn()),tt.isLineSegments?pe.setMode(X.LINES):tt.isLineLoop?pe.setMode(X.LINE_LOOP):pe.setMode(X.LINE_STRIP)}else tt.isPoints?pe.setMode(X.POINTS):tt.isSprite&&pe.setMode(X.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)ou("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))pe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const _n=tt._multiDrawStarts,Jt=tt._multiDrawCounts,ei=tt._multiDrawCount,ue=Kt?nt.get(Kt).bytesPerElement:1,Fn=b.get(at).currentProgram.getUniforms();for(let Bn=0;Bn<ei;Bn++)Fn.setValue(X,"_gl_DrawID",Bn),pe.render(_n[Bn]/ue,Jt[Bn])}else if(tt.isInstancedMesh)pe.renderInstances(qt,an,tt.count);else if(ft.isInstancedBufferGeometry){const _n=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Jt=Math.min(ft.instanceCount,_n);pe.renderInstances(qt,an,Jt)}else pe.render(qt,an)};function Gi(R,q,ft){R.transparent===!0&&R.side===qn&&R.forceSinglePass===!1?(R.side=wi,R.needsUpdate=!0,Ia(R,q,ft),R.side=qs,R.needsUpdate=!0,Ia(R,q,ft),R.side=qn):Ia(R,q,ft)}this.compile=function(R,q,ft=null){ft===null&&(ft=R),B=ut.get(ft),B.init(q),H.push(B),ft.traverseVisible(function(tt){tt.isLight&&tt.layers.test(q.layers)&&(B.pushLight(tt),tt.castShadow&&B.pushShadow(tt))}),R!==ft&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(q.layers)&&(B.pushLight(tt),tt.castShadow&&B.pushShadow(tt))}),B.setupLights();const at=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ft=tt.material;if(Ft)if(Array.isArray(Ft))for(let Yt=0;Yt<Ft.length;Yt++){const Gt=Ft[Yt];Gi(Gt,ft,tt),at.add(Gt)}else Gi(Ft,ft,tt),at.add(Ft)}),B=H.pop(),at},this.compileAsync=function(R,q,ft=null){const at=this.compile(R,q,ft);return new Promise(tt=>{function Ft(){if(at.forEach(function(Yt){b.get(Yt).currentProgram.isReady()&&at.delete(Yt)}),at.size===0){tt(R);return}setTimeout(Ft,10)}Ne.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Ki=null;function pa(R){Ki&&Ki(R)}function Nn(){Di.stop()}function Zs(){Di.start()}const Di=new cy;Di.setAnimationLoop(pa),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(R){Ki=R,pt.setAnimationLoop(R),R===null?Di.stop():Di.start()},pt.addEventListener("sessionstart",Nn),pt.addEventListener("sessionend",Zs),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(mt===!0)return;const ft=pt.enabled===!0&&pt.isPresenting===!0,at=T!==null&&(rt===null||ft)&&T.begin(N,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(q),q=pt.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,q,rt),B=ut.get(R,H.length),B.init(q),H.push(B),hn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xt.setFromProjectionMatrix(hn,ja,q.reversedDepth),re=this.localClippingEnabled,ie=Et.init(this.clippingPlanes,re),D=Qt.get(R,z.length),D.init(),z.push(D),pt.enabled===!0&&pt.isPresenting===!0){const Yt=N.xr.getDepthSensingMesh();Yt!==null&&Oa(Yt,q,-1/0,N.sortObjects)}Oa(R,q,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(At,Vt),ve=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,ve&&bt.addToRenderList(D,R),this.info.render.frame++,ie===!0&&Et.beginShadows();const tt=B.state.shadowsArray;if(ht.render(tt,R,q),ie===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&T.hasRenderPass())===!1){const Yt=D.opaque,Gt=D.transmissive;if(B.setupLights(),q.isArrayCamera){const Kt=q.cameras;if(Gt.length>0)for(let ne=0,he=Kt.length;ne<he;ne++){const se=Kt[ne];gn(Yt,Gt,R,se)}ve&&bt.render(R);for(let ne=0,he=Kt.length;ne<he;ne++){const se=Kt[ne];xi(D,R,se,se.viewport)}}else Gt.length>0&&gn(Yt,Gt,R,q),ve&&bt.render(R),xi(D,R,q)}rt!==null&&et===0&&(j.updateMultisampleRenderTarget(rt),j.updateRenderTargetMipmap(rt)),at&&T.end(N),R.isScene===!0&&R.onAfterRender(N,R,q),Ut.resetDefaultState(),ot=-1,Q=null,H.pop(),H.length>0?(B=H[H.length-1],ie===!0&&Et.setGlobalState(N.clippingPlanes,B.state.camera)):B=null,z.pop(),z.length>0?D=z[z.length-1]:D=null};function Oa(R,q,ft,at){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ft=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){at&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(hn);const Yt=Lt.update(R),Gt=R.material;Gt.visible&&D.push(R,Yt,Gt,ft,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const Yt=Lt.update(R),Gt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),ye.copy(Yt.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(hn)),Array.isArray(Gt)){const Kt=Yt.groups;for(let ne=0,he=Kt.length;ne<he;ne++){const se=Kt[ne],qt=Gt[se.materialIndex];qt&&qt.visible&&D.push(R,Yt,qt,ft,ye.z,se)}}else Gt.visible&&D.push(R,Yt,Gt,ft,ye.z,null)}}const Ft=R.children;for(let Yt=0,Gt=Ft.length;Yt<Gt;Yt++)Oa(Ft[Yt],q,ft,at)}function xi(R,q,ft,at){const{opaque:tt,transmissive:Ft,transparent:Yt}=R;B.setupLightsView(ft),ie===!0&&Et.setGlobalState(N.clippingPlanes,ft),at&&te.viewport(O.copy(at)),tt.length>0&&An(tt,q,ft),Ft.length>0&&An(Ft,q,ft),Yt.length>0&&An(Yt,q,ft),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function gn(R,q,ft,at){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[at.id]===void 0){const qt=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[at.id]=new Ka(1,1,{generateMipmaps:!0,type:qt?fs:Zi,minFilter:Ws,samples:Math.max(4,We.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const Ft=B.state.transmissionRenderTarget[at.id],Yt=at.viewport||O;Ft.setSize(Yt.z*N.transmissionResolutionScale,Yt.w*N.transmissionResolutionScale);const Gt=N.getRenderTarget(),Kt=N.getActiveCubeFace(),ne=N.getActiveMipmapLevel();N.setRenderTarget(Ft),N.getClearColor(_t),Dt=N.getClearAlpha(),Dt<1&&N.setClearColor(16777215,.5),N.clear(),ve&&bt.render(ft);const he=N.toneMapping;N.toneMapping=Za;const se=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),B.setupLightsView(at),ie===!0&&Et.setGlobalState(N.clippingPlanes,at),An(R,ft,at),j.updateMultisampleRenderTarget(Ft),j.updateRenderTargetMipmap(Ft),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let _e=0,an=q.length;_e<an;_e++){const sn=q[_e],{object:pe,geometry:_n,material:Jt,group:ei}=sn;if(Jt.side===qn&&pe.layers.test(at.layers)){const ue=Jt.side;Jt.side=wi,Jt.needsUpdate=!0,ma(pe,ft,at,_n,Jt,ei),Jt.side=ue,Jt.needsUpdate=!0,qt=!0}}qt===!0&&(j.updateMultisampleRenderTarget(Ft),j.updateRenderTargetMipmap(Ft))}N.setRenderTarget(Gt,Kt,ne),N.setClearColor(_t,Dt),se!==void 0&&(at.viewport=se),N.toneMapping=he}function An(R,q,ft){const at=q.isScene===!0?q.overrideMaterial:null;for(let tt=0,Ft=R.length;tt<Ft;tt++){const Yt=R[tt],{object:Gt,geometry:Kt,group:ne}=Yt;let he=Yt.material;he.allowOverride===!0&&at!==null&&(he=at),Gt.layers.test(ft.layers)&&ma(Gt,q,ft,Kt,he,ne)}}function ma(R,q,ft,at,tt,Ft){R.onBeforeRender(N,q,ft,at,tt,Ft),R.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(N,q,ft,at,R,Ft),tt.transparent===!0&&tt.side===qn&&tt.forceSinglePass===!1?(tt.side=wi,tt.needsUpdate=!0,N.renderBufferDirect(ft,q,at,tt,R,Ft),tt.side=qs,tt.needsUpdate=!0,N.renderBufferDirect(ft,q,at,tt,R,Ft),tt.side=qn):N.renderBufferDirect(ft,q,at,tt,R,Ft),R.onAfterRender(N,q,ft,at,tt,Ft)}function Ia(R,q,ft){q.isScene!==!0&&(q=Xe);const at=b.get(R),tt=B.state.lights,Ft=B.state.shadowsArray,Yt=tt.state.version,Gt=gt.getParameters(R,tt.state,Ft,q,ft),Kt=gt.getProgramCacheKey(Gt);let ne=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,at.fog=q.fog;const he=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=F.get(R.envMap||at.environment,he),at.envMapRotation=at.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",Me),ne=new Map,at.programs=ne);let se=ne.get(Kt);if(se!==void 0){if(at.currentProgram===se&&at.lightsStateVersion===Yt)return Vr(R,Gt),se}else Gt.uniforms=gt.getUniforms(R),R.onBeforeCompile(Gt,N),se=gt.acquireProgram(Gt,Kt),ne.set(Kt,se),at.uniforms=Gt.uniforms;const qt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=Et.uniform),Vr(R,Gt),at.needsLights=Qi(R),at.lightsStateVersion=Yt,at.needsLights&&(qt.ambientLightColor.value=tt.state.ambient,qt.lightProbe.value=tt.state.probe,qt.directionalLights.value=tt.state.directional,qt.directionalLightShadows.value=tt.state.directionalShadow,qt.spotLights.value=tt.state.spot,qt.spotLightShadows.value=tt.state.spotShadow,qt.rectAreaLights.value=tt.state.rectArea,qt.ltc_1.value=tt.state.rectAreaLTC1,qt.ltc_2.value=tt.state.rectAreaLTC2,qt.pointLights.value=tt.state.point,qt.pointLightShadows.value=tt.state.pointShadow,qt.hemisphereLights.value=tt.state.hemi,qt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,qt.spotLightMatrix.value=tt.state.spotLightMatrix,qt.spotLightMap.value=tt.state.spotLightMap,qt.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=se,at.uniformsList=null,se}function Gr(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=ld.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Vr(R,q){const ft=b.get(R);ft.outputColorSpace=q.outputColorSpace,ft.batching=q.batching,ft.batchingColor=q.batchingColor,ft.instancing=q.instancing,ft.instancingColor=q.instancingColor,ft.instancingMorph=q.instancingMorph,ft.skinning=q.skinning,ft.morphTargets=q.morphTargets,ft.morphNormals=q.morphNormals,ft.morphColors=q.morphColors,ft.morphTargetsCount=q.morphTargetsCount,ft.numClippingPlanes=q.numClippingPlanes,ft.numIntersection=q.numClipIntersection,ft.vertexAlphas=q.vertexAlphas,ft.vertexTangents=q.vertexTangents,ft.toneMapping=q.toneMapping}function hs(R,q,ft,at,tt){q.isScene!==!0&&(q=Xe),j.resetTextureUnits();const Ft=q.fog,Yt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?q.environment:null,Gt=rt===null?N.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ro,Kt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,ne=F.get(at.envMap||Yt,Kt),he=at.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,se=!!ft.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),qt=!!ft.morphAttributes.position,_e=!!ft.morphAttributes.normal,an=!!ft.morphAttributes.color;let sn=Za;at.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(sn=N.toneMapping);const pe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,_n=pe!==void 0?pe.length:0,Jt=b.get(at),ei=B.state.lights;if(ie===!0&&(re===!0||R!==Q)){const yn=R===Q&&at.id===ot;Et.setState(at,R,yn)}let ue=!1;at.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==ei.state.version||Jt.outputColorSpace!==Gt||tt.isBatchedMesh&&Jt.batching===!1||!tt.isBatchedMesh&&Jt.batching===!0||tt.isBatchedMesh&&Jt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Jt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Jt.instancing===!1||!tt.isInstancedMesh&&Jt.instancing===!0||tt.isSkinnedMesh&&Jt.skinning===!1||!tt.isSkinnedMesh&&Jt.skinning===!0||tt.isInstancedMesh&&Jt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Jt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Jt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Jt.instancingMorph===!1&&tt.morphTexture!==null||Jt.envMap!==ne||at.fog===!0&&Jt.fog!==Ft||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Et.numPlanes||Jt.numIntersection!==Et.numIntersection)||Jt.vertexAlphas!==he||Jt.vertexTangents!==se||Jt.morphTargets!==qt||Jt.morphNormals!==_e||Jt.morphColors!==an||Jt.toneMapping!==sn||Jt.morphTargetsCount!==_n)&&(ue=!0):(ue=!0,Jt.__version=at.version);let Fn=Jt.currentProgram;ue===!0&&(Fn=Ia(at,q,tt));let Bn=!1,Ni=!1,yi=!1;const Le=Fn.getUniforms(),Rn=Jt.uniforms;if(te.useProgram(Fn.program)&&(Bn=!0,Ni=!0,yi=!0),at.id!==ot&&(ot=at.id,Ni=!0),Bn||Q!==R){te.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Le.setValue(X,"projectionMatrix",R.projectionMatrix),Le.setValue(X,"viewMatrix",R.matrixWorldInverse);const $i=Le.map.cameraPosition;$i!==void 0&&$i.setValue(X,Ce.setFromMatrixPosition(R.matrixWorld)),We.logarithmicDepthBuffer&&Le.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Le.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,Ni=!0,yi=!0)}if(Jt.needsLights&&(ei.state.directionalShadowMap.length>0&&Le.setValue(X,"directionalShadowMap",ei.state.directionalShadowMap,j),ei.state.spotShadowMap.length>0&&Le.setValue(X,"spotShadowMap",ei.state.spotShadowMap,j),ei.state.pointShadowMap.length>0&&Le.setValue(X,"pointShadowMap",ei.state.pointShadowMap,j)),tt.isSkinnedMesh){Le.setOptional(X,tt,"bindMatrix"),Le.setOptional(X,tt,"bindMatrixInverse");const yn=tt.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Le.setValue(X,"boneTexture",yn.boneTexture,j))}tt.isBatchedMesh&&(Le.setOptional(X,tt,"batchingTexture"),Le.setValue(X,"batchingTexture",tt._matricesTexture,j),Le.setOptional(X,tt,"batchingIdTexture"),Le.setValue(X,"batchingIdTexture",tt._indirectTexture,j),Le.setOptional(X,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Le.setValue(X,"batchingColorTexture",tt._colorsTexture,j));const zn=ft.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&yt.update(tt,ft,Fn),(Ni||Jt.receiveShadow!==tt.receiveShadow)&&(Jt.receiveShadow=tt.receiveShadow,Le.setValue(X,"receiveShadow",tt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=D2()),Ni&&(Le.setValue(X,"toneMappingExposure",N.toneMappingExposure),Jt.needsLights&&ga(Rn,yi),Ft&&at.fog===!0&&Pt.refreshFogUniforms(Rn,Ft),Pt.refreshMaterialUniforms(Rn,at,vt,k,B.state.transmissionRenderTarget[R.id]),ld.upload(X,Gr(Jt),Rn,j)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ld.upload(X,Gr(Jt),Rn,j),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Le.setValue(X,"center",tt.center),Le.setValue(X,"modelViewMatrix",tt.modelViewMatrix),Le.setValue(X,"normalMatrix",tt.normalMatrix),Le.setValue(X,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const yn=at.uniformsGroups;for(let $i=0,Pa=yn.length;$i<Pa;$i++){const Ks=yn[$i];Ht.update(Ks,Fn),Ht.bind(Ks,Fn)}}return Fn}function ga(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Qi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,q,ft){const at=b.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=q,b.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ft,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ft=b.get(R);ft.__webglFramebuffer=q,ft.__useDefaultFramebuffer=q===void 0};const Si=X.createFramebuffer();this.setRenderTarget=function(R,q=0,ft=0){rt=R,V=q,et=ft;let at=null,tt=!1,Ft=!1;if(R){const Gt=b.get(R);if(Gt.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(X.FRAMEBUFFER,Gt.__webglFramebuffer),O.copy(R.viewport),P.copy(R.scissor),ct=R.scissorTest,te.viewport(O),te.scissor(P),te.setScissorTest(ct),ot=-1;return}else if(Gt.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Gt.__hasExternalTextures)j.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const he=R.depthTexture;if(Gt.__boundDepthTexture!==he){if(he!==null&&b.has(he)&&(R.width!==he.image.width||R.height!==he.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ft=!0);const ne=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[q])?at=ne[q][ft]:at=ne[q],tt=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?at=b.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?at=ne[ft]:at=ne,O.copy(R.viewport),P.copy(R.scissor),ct=R.scissorTest}else O.copy($).multiplyScalar(vt).floor(),P.copy(Mt).multiplyScalar(vt).floor(),ct=Nt;if(ft!==0&&(at=Si),te.bindFramebuffer(X.FRAMEBUFFER,at)&&te.drawBuffers(R,at),te.viewport(O),te.scissor(P),te.setScissorTest(ct),tt){const Gt=b.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Gt.__webglTexture,ft)}else if(Ft){const Gt=q;for(let Kt=0;Kt<R.textures.length;Kt++){const ne=b.get(R.textures[Kt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Kt,ne.__webglTexture,ft,Gt)}}else if(R!==null&&ft!==0){const Gt=b.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Gt.__webglTexture,ft)}ot=-1},this.readRenderTargetPixels=function(R,q,ft,at,tt,Ft,Yt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Yt!==void 0&&(Kt=Kt[Yt]),Kt){te.bindFramebuffer(X.FRAMEBUFFER,Kt);try{const ne=R.textures[Gt],he=ne.format,se=ne.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Gt),!We.textureFormatReadable(he)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(se)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-at&&ft>=0&&ft<=R.height-tt&&X.readPixels(q,ft,at,tt,Ot.convert(he),Ot.convert(se),Ft)}finally{const ne=rt!==null?b.get(rt).__webglFramebuffer:null;te.bindFramebuffer(X.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,q,ft,at,tt,Ft,Yt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Yt!==void 0&&(Kt=Kt[Yt]),Kt)if(q>=0&&q<=R.width-at&&ft>=0&&ft<=R.height-tt){te.bindFramebuffer(X.FRAMEBUFFER,Kt);const ne=R.textures[Gt],he=ne.format,se=ne.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Gt),!We.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,qt),X.bufferData(X.PIXEL_PACK_BUFFER,Ft.byteLength,X.STREAM_READ),X.readPixels(q,ft,at,tt,Ot.convert(he),Ot.convert(se),0);const _e=rt!==null?b.get(rt).__webglFramebuffer:null;te.bindFramebuffer(X.FRAMEBUFFER,_e);const an=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await KM(X,an,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,qt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ft),X.deleteBuffer(qt),X.deleteSync(an),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ft=0){const at=Math.pow(2,-ft),tt=Math.floor(R.image.width*at),Ft=Math.floor(R.image.height*at),Yt=q!==null?q.x:0,Gt=q!==null?q.y:0;j.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ft,0,0,Yt,Gt,tt,Ft),te.unbindTexture()};const $a=X.createFramebuffer(),Ji=X.createFramebuffer();this.copyTextureToTexture=function(R,q,ft=null,at=null,tt=0,Ft=0){let Yt,Gt,Kt,ne,he,se,qt,_e,an;const sn=R.isCompressedTexture?R.mipmaps[Ft]:R.image;if(ft!==null)Yt=ft.max.x-ft.min.x,Gt=ft.max.y-ft.min.y,Kt=ft.isBox3?ft.max.z-ft.min.z:1,ne=ft.min.x,he=ft.min.y,se=ft.isBox3?ft.min.z:0;else{const Rn=Math.pow(2,-tt);Yt=Math.floor(sn.width*Rn),Gt=Math.floor(sn.height*Rn),R.isDataArrayTexture?Kt=sn.depth:R.isData3DTexture?Kt=Math.floor(sn.depth*Rn):Kt=1,ne=0,he=0,se=0}at!==null?(qt=at.x,_e=at.y,an=at.z):(qt=0,_e=0,an=0);const pe=Ot.convert(q.format),_n=Ot.convert(q.type);let Jt;q.isData3DTexture?(j.setTexture3D(q,0),Jt=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),Jt=X.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),Jt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const ei=X.getParameter(X.UNPACK_ROW_LENGTH),ue=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Fn=X.getParameter(X.UNPACK_SKIP_PIXELS),Bn=X.getParameter(X.UNPACK_SKIP_ROWS),Ni=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,sn.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,sn.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ne),X.pixelStorei(X.UNPACK_SKIP_ROWS,he),X.pixelStorei(X.UNPACK_SKIP_IMAGES,se);const yi=R.isDataArrayTexture||R.isData3DTexture,Le=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Rn=b.get(R),zn=b.get(q),yn=b.get(Rn.__renderTarget),$i=b.get(zn.__renderTarget);te.bindFramebuffer(X.READ_FRAMEBUFFER,yn.__webglFramebuffer),te.bindFramebuffer(X.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Pa=0;Pa<Kt;Pa++)yi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(R).__webglTexture,tt,se+Pa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Ft,an+Pa)),X.blitFramebuffer(ne,he,Yt,Gt,qt,_e,Yt,Gt,X.DEPTH_BUFFER_BIT,X.NEAREST);te.bindFramebuffer(X.READ_FRAMEBUFFER,null),te.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||b.has(R)){const Rn=b.get(R),zn=b.get(q);te.bindFramebuffer(X.READ_FRAMEBUFFER,$a),te.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ji);for(let yn=0;yn<Kt;yn++)yi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Rn.__webglTexture,tt,se+yn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Rn.__webglTexture,tt),Le?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,zn.__webglTexture,Ft,an+yn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,zn.__webglTexture,Ft),tt!==0?X.blitFramebuffer(ne,he,Yt,Gt,qt,_e,Yt,Gt,X.COLOR_BUFFER_BIT,X.NEAREST):Le?X.copyTexSubImage3D(Jt,Ft,qt,_e,an+yn,ne,he,Yt,Gt):X.copyTexSubImage2D(Jt,Ft,qt,_e,ne,he,Yt,Gt);te.bindFramebuffer(X.READ_FRAMEBUFFER,null),te.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Le?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Jt,Ft,qt,_e,an,Yt,Gt,Kt,pe,_n,sn.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(Jt,Ft,qt,_e,an,Yt,Gt,Kt,pe,sn.data):X.texSubImage3D(Jt,Ft,qt,_e,an,Yt,Gt,Kt,pe,_n,sn):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ft,qt,_e,Yt,Gt,pe,_n,sn.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ft,qt,_e,sn.width,sn.height,pe,sn.data):X.texSubImage2D(X.TEXTURE_2D,Ft,qt,_e,Yt,Gt,pe,_n,sn);X.pixelStorei(X.UNPACK_ROW_LENGTH,ei),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ue),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Fn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Bn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ni),Ft===0&&q.generateMipmaps&&X.generateMipmap(Jt),te.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),te.unbindTexture()},this.resetState=function(){V=0,et=0,rt=null,te.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ja}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(t),i.unpackColorSpace=ke._getUnpackColorSpace()}}const N2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:nh,AddEquation:Ir,AddOperation:NS,AdditiveBlending:n0,AgXToneMapping:y0,AlphaFormat:C0,AlwaysCompare:HS,AlwaysDepth:hd,AlwaysStencilFunc:s0,AmbientLight:ay,ArrayCamera:ry,BackSide:wi,BasicDepthPacking:US,BasicShadowMap:uS,Box3:zr,BoxGeometry:Hr,BufferAttribute:Ua,BufferGeometry:ha,ByteType:b0,Camera:G0,CanvasTexture:Dl,CatmullRomCurve3:KS,CineonToneMapping:x0,ClampToEdgeWrapping:cs,Clock:ly,Color:fe,ColorManagement:ke,ConstantAlphaFactor:CS,ConstantColorFactor:AS,CubeCamera:sy,CubeDepthTexture:jS,CubeReflectionMapping:Br,CubeRefractionMapping:To,CubeTexture:F0,CubeUVReflectionMapping:uu,CullFaceBack:e0,CullFaceFront:cS,CullFaceNone:lS,Curve:ZS,CustomBlending:dS,CustomToneMapping:S0,Data3DTexture:WS,DataArrayTexture:N0,DataTexture:P0,DepthFormat:ds,DepthStencilFormat:Pr,DepthTexture:Fl,DirectionalLight:u0,DoubleSide:qn,DstAlphaFactor:yS,DstColorFactor:ES,EqualCompare:FS,EqualDepth:md,EquirectangularReflectionMapping:id,EquirectangularRefractionMapping:ad,Euler:da,EventDispatcher:Co,ExternalTexture:B0,Float32BufferAttribute:ci,FloatType:Na,Fog:lu,FrontSide:qs,Frustum:mh,GLSL3:o0,GreaterCompare:BS,GreaterDepth:_d,GreaterEqualCompare:dh,GreaterEqualDepth:gd,Group:wl,HalfFloatType:fs,HemisphereLight:iy,ImageUtils:kS,InstancedBufferAttribute:c0,InstancedMesh:qS,IntType:ih,KeepStencilOp:xo,Layers:ph,LessCompare:PS,LessDepth:pd,LessEqualCompare:fh,LessEqualDepth:bo,Light:Gl,LinearFilter:li,LinearMipmapLinearFilter:Ws,LinearMipmapNearestFilter:sd,LinearSRGBColorSpace:Ro,LinearToneMapping:_0,LinearTransfer:ru,Material:wo,MathUtils:bn,Matrix3:be,Matrix4:un,MaxEquation:gS,Mesh:Ge,MeshBasicMaterial:cu,MeshDepthMaterial:ey,MeshDistanceMaterial:ny,MeshLambertMaterial:ty,MeshPhysicalMaterial:So,MeshStandardMaterial:Xs,MinEquation:mS,MirroredRepeatWrapping:xd,MixOperation:DS,MultiplyBlending:a0,MultiplyOperation:eh,NearestFilter:oi,NearestMipmapLinearFilter:Zc,NearestMipmapNearestFilter:LS,NeutralToneMapping:M0,NeverCompare:IS,NeverDepth:dd,NoBlending:us,NoColorSpace:ks,NoToneMapping:Za,NormalBlending:Eo,NotEqualCompare:zS,NotEqualDepth:vd,Object3D:pn,ObjectSpaceNormalMap:OS,OneFactor:vS,OneMinusConstantAlphaFactor:wS,OneMinusConstantColorFactor:RS,OneMinusDstAlphaFactor:MS,OneMinusDstColorFactor:bS,OneMinusSrcAlphaFactor:fd,OneMinusSrcColorFactor:SS,OrthographicCamera:vh,PCFShadowMap:Mo,PCFSoftShadowMap:fS,PMREMGenerator:$d,PerspectiveCamera:Hi,Plane:Or,PlaneGeometry:ls,PointLight:su,Quaternion:js,R11_EAC_Format:Rd,RED_GREEN_RGTC2_Format:Kd,RED_RGTC1_Format:jd,REVISION:th,RG11_EAC_Format:wd,RGBAFormat:La,RGBAIntegerFormat:ch,RGBA_ASTC_10x10_Format:Vd,RGBA_ASTC_10x5_Format:zd,RGBA_ASTC_10x6_Format:Hd,RGBA_ASTC_10x8_Format:Gd,RGBA_ASTC_12x10_Format:kd,RGBA_ASTC_12x12_Format:Xd,RGBA_ASTC_4x4_Format:Nd,RGBA_ASTC_5x4_Format:Ld,RGBA_ASTC_5x5_Format:Ud,RGBA_ASTC_6x5_Format:Od,RGBA_ASTC_6x6_Format:Id,RGBA_ASTC_8x5_Format:Pd,RGBA_ASTC_8x6_Format:Fd,RGBA_ASTC_8x8_Format:Bd,RGBA_BPTC_Format:Wd,RGBA_ETC2_EAC_Format:Ad,RGBA_PVRTC_2BPPV1_Format:Ed,RGBA_PVRTC_4BPPV1_Format:Md,RGBA_S3TC_DXT1_Format:tu,RGBA_S3TC_DXT3_Format:eu,RGBA_S3TC_DXT5_Format:nu,RGBFormat:w0,RGB_BPTC_SIGNED_Format:Yd,RGB_BPTC_UNSIGNED_Format:qd,RGB_ETC1_Format:bd,RGB_ETC2_Format:Td,RGB_PVRTC_2BPPV1_Format:yd,RGB_PVRTC_4BPPV1_Format:Sd,RGB_S3TC_DXT1_Format:$c,RGFormat:Ao,RGIntegerFormat:lh,RawShaderMaterial:$S,Ray:I0,Raycaster:oy,RedFormat:rh,RedIntegerFormat:oh,ReinhardToneMapping:v0,RenderTarget:XS,RepeatWrapping:Ll,ReverseSubtractEquation:pS,RingGeometry:gh,SIGNED_R11_EAC_Format:Cd,SIGNED_RED_GREEN_RGTC2_Format:Qd,SIGNED_RED_RGTC1_Format:Zd,SIGNED_RG11_EAC_Format:Dd,SRGBColorSpace:Jn,SRGBTransfer:Je,Scene:L0,ShaderChunk:Re,ShaderLib:qa,ShaderMaterial:Ja,ShortType:T0,Source:hh,Sphere:Hl,SphereGeometry:_h,SpotLight:od,SrcAlphaFactor:ud,SrcAlphaSaturateFactor:TS,SrcColorFactor:xS,StaticDrawUsage:r0,SubtractEquation:hS,SubtractiveBlending:i0,TangentSpaceNormalMap:uh,Texture:vi,Triangle:Da,UVMapping:E0,Uint16BufferAttribute:U0,Uint32BufferAttribute:O0,UniformsLib:kt,UniformsUtils:JS,UnsignedByteType:Zi,UnsignedInt101111Type:R0,UnsignedInt248Type:Ol,UnsignedInt5999Type:A0,UnsignedIntType:Qa,UnsignedShort4444Type:ah,UnsignedShort5551Type:sh,UnsignedShortType:Ul,VSMShadowMap:Cl,Vector2:De,Vector3:K,Vector4:Tn,WebGLCoordinateSystem:ja,WebGLCubeRenderTarget:V0,WebGLRenderTarget:Ka,WebGLRenderer:my,WebGLUtils:py,WebGPUCoordinateSystem:Il,WebXRController:rd,ZeroFactor:_S,createCanvasElement:GS,error:Ve,log:l0,warn:ge,warnOnce:ou},Symbol.toStringTag,{value:"Module"}));class L2 extends L0{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Hr;t.deleteAttribute("uv");const i=new Xs({side:wi}),s=new Xs,l=new su(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Ge(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new qS(t,s,6),h=new pn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),f.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),f.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),f.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),f.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),f.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),f.setMatrixAt(5,h.matrix),this.add(f);const m=new Ge(t,bl(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Ge(t,bl(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Ge(t,bl(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Ge(t,bl(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Ge(t,bl(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const S=new Ge(t,bl(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function bl(r){return new ty({color:0,emissive:16777215,emissiveIntensity:r})}const U2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],O2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],I2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],P2=["LOW","MEDIUM","HIGH","EXTREME"],F2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],B2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],z2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},H2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},G2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},V2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},k2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function gy(r){return(r-90)*Math.PI/180}function X2(r,t,i,s){const l=gy(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function Tl(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function k0(r){Tl("subject",r.subject,U2),Tl("domain",r.domain,O2),Tl("verb",r.verb,I2),Tl("magnitude",r.magnitude,P2),Tl("time",r.time,F2),Tl("certainty",r.certainty,B2)}function _y(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=k2[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return k0(s),s}function Qc(r){return k0(r),[r.subject,r.domain,r.verb,r.magnitude,r.time,r.certainty].join(".")}function Jc(r){return Qc(_y(r))}function W2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),h=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(h,m):r.lineTo(h,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,h=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,h):r.lineTo(f,h)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Xc(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,h=Math.sqrt(c*c+f*f)||1,m=c/h,p=f/h,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},S={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(S.x,S.y),r.closePath(),r.fill(),r.restore()}function Wc(r,t,i,s,l,c){const f=V2[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let h=1;h<=f;h+=1){const m=h/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function Y2(r,t,i){k0(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,h=l*.5,m=i?.backgroundColor??"rgba(6,14,24,0.74)",p=i?.lineColor??"rgba(102,221,255,0.96)",_=i?.gridColor??"rgba(102,221,255,0.58)";r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,h,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,h,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,h,c*.12,0,Math.PI*2),r.stroke();const v=z2[t.domain],g=H2[t.time]*c,S=G2[t.magnitude]*c,E=X2(f,h,g,v),w=gy(v),M=Math.cos(w),y=Math.sin(w),C=-y,L=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let D={x:E.x,y:E.y},B={x:E.x+M*S,y:E.y+y*S},z;if(t.verb==="EXISTS")D={x:E.x-C*(S*.48),y:E.y-L*(S*.48)},B={x:E.x+C*(S*.48),y:E.y+L*(S*.48)},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),Wc(r,t,D,B,p);else if(t.verb==="DECLINES")B={x:E.x-M*S,y:E.y-y*S},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),Xc(r,D,B,p,7),Wc(r,t,D,B,p);else if(t.verb==="TRANSFORMS")z={x:E.x+C*(S*.34)+M*(S*.34),y:E.y+L*(S*.34)+y*(S*.34)},r.beginPath(),r.moveTo(D.x,D.y),r.quadraticCurveTo(z.x,z.y,B.x,B.y),r.stroke(),Xc(r,z,B,p,7),Wc(r,t,D,B,p,z);else if(t.verb==="INFLUENCES"){const T={x:E.x+C*3.4,y:E.y+L*3.4},N={x:B.x+C*3.4,y:B.y+L*3.4},mt={x:E.x-C*3.4,y:E.y-L*3.4},V={x:B.x-C*3.4,y:B.y-L*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(N.x,N.y),r.moveTo(mt.x,mt.y),r.lineTo(V.x,V.y),r.stroke(),Xc(r,T,N,p,6.6),Xc(r,mt,V,p,6.6),Wc(r,t,T,N,p)}else r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),Xc(r,D,B,p,7),Wc(r,t,D,B,p);r.fillStyle=p,r.beginPath(),r.arc(f,h,5,0,Math.PI*2),r.fill(),W2(r,t.subject,E,p)}function Kx(r,t,i){const s=_y(t);Y2(r,s,i)}const Qx="intelligenspartiet:language",q2={nb:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Film",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideGlyphWall:"Glyff",outsideBack:"Tilbake",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signaturer",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Film",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideGlyphWall:"Glyff",outsideBack:"Back",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signatures",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},j2=100,Gs=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],Vs=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],go=["LOW","MEDIUM","HIGH","EXTREME"],_o=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],Yc=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],jm=[{phase:"signal-whisper",subjects:["IDEA","TECHNOLOGY","INSTITUTION"],domains:["MEDIA","CULTURE","TECHNOLOGY","EDUCATION","INDIVIDUALS"],verbs:["EXISTS","INFLUENCES","GROWS"],magnitudes:["LOW","MEDIUM"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"attention-displacement",subjects:["INDIVIDUAL","IDEA","SYSTEM"],domains:["INDIVIDUALS","MEDIA","ORGANIZATIONS","TECHNOLOGY"],verbs:["INFLUENCES","GROWS","DECLINES"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["PROBABLE","CONFIRMED"]},{phase:"output-surge",subjects:["SYSTEM","TECHNOLOGY","INSTITUTION"],domains:["TECHNOLOGY","ORGANIZATIONS","ECONOMY","INFRASTRUCTURE"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["HIGH","EXTREME"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"cognitive-strain",subjects:["INDIVIDUAL","SYSTEM","TECHNOLOGY"],domains:["INDIVIDUALS","ORGANIZATIONS","EDUCATION","SCIENCE"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["HIGH","EXTREME"],times:["NOW","LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"blame-cycle",subjects:["INSTITUTION","EVENT","SYSTEM"],domains:["POLITICS","SOCIETY","MEDIA","ECONOMY"],verbs:["INFLUENCES","TRANSFORMS","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"resistance-ritual",subjects:["INSTITUTION","INDIVIDUAL","EVENT"],domains:["CULTURE","POLITICS","ORGANIZATIONS","SOCIETY"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["MEDIUM","HIGH"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"reskilling-wave",subjects:["IDEA","INSTITUTION","SYSTEM"],domains:["EDUCATION","SCIENCE","ORGANIZATIONS","TECHNOLOGY"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["PROBABLE","CONFIRMED"]},{phase:"institutional-memory",subjects:["INSTITUTION","SYSTEM","BREAKTHROUGH"],domains:["INFRASTRUCTURE","ORGANIZATIONS","ECONOMY","SCIENCE"],verbs:["EXISTS","TRANSFORMS","GROWS"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["INDICATION","PROBABLE","CONFIRMED"]},{phase:"myth-afterimage",subjects:["EVENT","IDEA","INDIVIDUAL"],domains:["CULTURE","MEDIA","SOCIETY","EDUCATION"],verbs:["EXISTS","INFLUENCES","DECLINES"],magnitudes:["LOW","MEDIUM","HIGH"],times:["Y3_10","GT10Y"],certainties:["INDICATION","PROBABLE"]},{phase:"recurrence",subjects:["SYSTEM","INSTITUTION","INDIVIDUAL"],domains:["SOCIETY","POLITICS","ORGANIZATIONS","INDIVIDUALS"],verbs:["TRANSFORMS","INFLUENCES","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["GT10Y","NOW"],certainties:["PROBABLE","CONFIRMED"]}],Al=(r,t,i=0)=>r[(t+i)%r.length],qc=(r,t,i)=>{const s=r.indexOf(t),l=s>=0?s:0;return r[(l+i+r.length*32)%r.length]},Z2=r=>{const t=[],i=new Set,s=Math.ceil(r/jm.length);for(let l=0;l<jm.length;l+=1){const c=jm[l];for(let f=0;f<s&&t.length<r;f+=1){let h={subject:Al(c.subjects,f,l),domain:Al(c.domains,f,l*2),verb:Al(c.verbs,f,l+f%3),magnitude:Al(c.magnitudes,f,Math.floor(f/2)),time:Al(c.times,f,Math.floor(f/3)),certainty:Al(c.certainties,f,f%2)},m=Jc(Qc(h));if(i.has(m)){let p=!1;for(let _=1;_<=Vs.length*_o.length;_+=1){const v={...h,subject:qc(Gs,h.subject,Math.floor(_/7)),domain:qc(Vs,h.domain,_),magnitude:qc(go,h.magnitude,Math.floor(_/4)),time:qc(_o,h.time,Math.floor(_/2)),certainty:qc(Yc,h.certainty,Math.floor(_/3))},g=Jc(Qc(v));if(!i.has(g)){h=v,m=g,p=!0;break}}if(!p)for(const _ of Gs){for(const v of Vs){for(const g of go){for(const S of _o){for(const E of Yc){const w=Jc(Qc({subject:_,domain:v,verb:h.verb,magnitude:g,time:S,certainty:E}));if(!i.has(w)){h={subject:_,domain:v,verb:h.verb,magnitude:g,time:S,certainty:E},m=w,p=!0;break}}if(p)break}if(p)break}if(p)break}if(p)break}}if(i.has(m)){const p=Gs.length*Vs.length*go.length*_o.length*Yc.length;for(let _=0;_<p;_+=1){const v=t.length+_,g=v%Gs.length,S=Math.floor(v/Gs.length)%Vs.length,E=Math.floor(v/(Gs.length*Vs.length))%go.length,w=Math.floor(v/(Gs.length*Vs.length*go.length))%_o.length,M=Math.floor(v/(Gs.length*Vs.length*go.length*_o.length))%Yc.length,y={subject:Gs[g],domain:Vs[S],verb:h.verb,magnitude:go[E],time:_o[w],certainty:Yc[M]},C=Jc(Qc(y));if(!i.has(C)){m=C;break}}}i.add(m),t.push({id:`ra-${String(t.length+1).padStart(3,"0")}`,canonical:m,phase:c.phase})}}return t},K2=Z2(j2),Q2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},Zm=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:Q2}),Kf=[Zm("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),Zm("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),Zm("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],J2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),ji=r=>{let t=r%1;return t<0&&(t+=1),t},$2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),ji(r+l*(1-Math.exp(-i*s)))},Jx=12,Km=9,Qf=.12,$x=-1,Qm=2.4,tR=.3,eR=1.2,nR=.3,tS=6741503,iR=5,aR=3.2,sR=.35,rR=.25,Jm=400,oR=2.5,eS=16755251,Jf=3,lR=new K(Jm*-.04,Jm*-.42,Jm*1.02),nS=-.14,iS=.2,aS=0,sS=-22,cR=7,uR=["v1-cognitive-overproduction"],fR=["halfwall-06"],dR=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],cd=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],hR="https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",pR=Math.max(0,cd.findIndex(r=>r.video===hR)),X0=17.6,vy=X0*(16/9),xy=vy*Math.sqrt(3)/2,mR=.56,gR=31.2,$f=xy*2.62,rS=X0*.56,_R=60,vR=40,xR=220,SR=360,yR=105,MR=.75,oS=96,p0=[330,250,180,120],ER=[2,3.2,4.8,6.2],bR=[.12,.17,.22,.3],td={tailPath:"",taperPaths:p0.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},$m=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],h=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${h} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},TR=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),AR=(r,t,i,s,l,c)=>{Sy(r,t,l).forEach((h,m)=>{r.fillText(h,i,s+m*c)})},Sy=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const h=s[f];if(!h)continue;const m=`${c}${h} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${h} `):c=m}return c.trim()&&l.push(c.trim()),l},RR=/\(\s*bold\s*\)/gi,CR=/\(\s*new\s*line\s*\)/gi,wR=/\(\s*new\s*paragraph\s*\)/gi,DR=r=>{const i=r.replace(/\r\n?/g,`
`).replace(wR,`

`).replace(CR,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const h=/\(\s*bold\s*\)/i.test(c),m=c.replace(RR,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:h,paragraphBreak:s}),s=!1}),l},NR=(r,t,i,s,l,c,f,h,m=.6)=>{const p=DR(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?h:f,Sy(r,v.text,l).forEach(E=>{r.fillText(E,i,_),_+=c})}),r.font=f},LR=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,yy=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),UR=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),OR=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],IR=new Map(OR.map(([r,t])=>[yy(r),t])),PR=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],FR=PR.map(([r,t])=>[new RegExp(UR(r),"gi"),t]),BR={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},zR=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),HR=r=>{let t=r;return FR.forEach(([i,s])=>{t=t.replace(i,s)}),t},GR=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=BR[t.toLowerCase()];return i?zR(t,i):t}),VR=r=>{const t=r.trim();return t?(IR.get(yy(t))??GR(HR(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},kR=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(LR,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>VR(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},ed=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},m0=Math.PI*2,vo=r=>Math.min(1,Math.max(0,r)),jc=(r,t,i,s,l)=>{const c=m0*(r*i+s),f=m0*(t*i+l),h=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return h+m},nd=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Dl(s)},wa=(r,t,i,s,l=!1)=>{r.wrapS=Ll,r.wrapT=Ll,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=Ws,r.magFilter=li,l&&(r.colorSpace=Jn),r.needsUpdate=!0},t0=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:h,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:S,roughnessBase:E,roughnessRange:w,normalStrength:M,aoStrength:y}=r,C=t*i,L=new fe(l),D=new Float32Array(C);let B=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY;for(let ot=0;ot<i;ot+=1)for(let Q=0;Q<t;Q+=1){const O=ot*t+Q,P=Q/t,ct=ot/i,_t=jc(P,ct,c,s*.11,s*.23),Dt=jc(P,ct,f,s*.41+.18,s*.29+.07),I=jc(P,ct,h,s*.71+.43,s*.53+.31),k=Math.sin(m0*((P+ct*.33)*m+s*.17));let vt=0;if(_!=="none"&&v>0){const $=(_==="x"?P:ct)*v%1,Mt=Math.min($,1-$);vt=Math.exp(-Math.pow(Mt/Math.max(1e-4,S),2))}const At=_t*.6+Dt*.28+I*.12+k*p-vt*g;D[O]=At,At<B&&(B=At),At>z&&(z=At)}const H=new Float32Array(C),T=Math.max(1e-4,z-B),N=new Uint8ClampedArray(C*4),mt=new Uint8ClampedArray(C*4),V=new Uint8ClampedArray(C*4);for(let ot=0;ot<i;ot+=1)for(let Q=0;Q<t;Q+=1){const O=ot*t+Q,P=O*4,ct=Q/t,_t=ot/i,Dt=vo((D[O]-B)/T);H[O]=Dt;const I=jc(ct,_t,f*.6,s*.19+.62,s*.73+.14)*.5+.5,k=vo(.78+(Dt-.5)*.24+(I-.5)*.12),vt=jc(ct,_t,c*.5,s*.37+.89,s*.13+.44),At=1+vt*.017,Vt=1+vt*.007,$=1-vt*.013,Mt=vo(E+(1-Dt)*w+(I-.5)*.14),Nt=vo(.94-(1-Dt)*y);N[P]=Math.round(vo(L.r*k*At)*255),N[P+1]=Math.round(vo(L.g*k*Vt)*255),N[P+2]=Math.round(vo(L.b*k*$)*255),N[P+3]=255;const Xt=Math.round(Mt*255);mt[P]=Xt,mt[P+1]=Xt,mt[P+2]=Xt,mt[P+3]=255;const ie=Math.round(Nt*255);V[P]=ie,V[P+1]=ie,V[P+2]=ie,V[P+3]=255}const et=(ot,Q)=>{const O=(ot+t)%t,P=(Q+i)%i;return H[P*t+O]},rt=new Uint8ClampedArray(C*4);for(let ot=0;ot<i;ot+=1)for(let Q=0;Q<t;Q+=1){const P=(ot*t+Q)*4,ct=et(Q+1,ot)-et(Q-1,ot),_t=et(Q,ot+1)-et(Q,ot-1),Dt=-ct*M,I=-_t*M,k=1,vt=1/Math.hypot(Dt,I,k);rt[P]=Math.round((Dt*vt*.5+.5)*255),rt[P+1]=Math.round((I*vt*.5+.5)*255),rt[P+2]=Math.round((k*vt*.5+.5)*255),rt[P+3]=255}return{albedo:nd(N,t,i),normal:nd(rt,t,i),roughness:nd(mt,t,i),ao:nd(V,t,i)}},XR=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const h=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=h*255,c/=h*255,f/=h*255;const m=l*.2126+c*.7152+f*.0722;return{color:new fe(l,c,f),luminance:m}};function WR(){const r=ee.useRef([]),t=ee.useRef(null),[i,s]=ee.useState(!1),[l,c]=ee.useState({width:1,height:1}),[f,h]=ee.useState(td);return ee.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},S=()=>{v()},E=(C,L)=>typeof C.addEventListener=="function"?(C.addEventListener("change",L),()=>C.removeEventListener("change",L)):(C.addListener(L),()=>C.removeListener(L));v(),g();const w=E(m,S),M=E(p,S),y=E(_,S);return window.addEventListener("resize",g,{passive:!0}),()=>{w(),M(),y(),window.removeEventListener("resize",g)}},[]),ee.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],h(td);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,S=g[g.length-1];if(S){const E=v.x-S.x,w=v.y-S.y;if(Math.hypot(E,w)<MR)return}g.push(v),g.length>oS&&g.splice(0,g.length-oS)},p=()=>{const _=performance.now(),v=_-SR,g=r.current;let S=0;for(;S<g.length&&g[S].t<v;)S+=1;if(S>0&&g.splice(0,S),g.length<2)h(E=>E.visible?td:E);else{const E=$m(g),w=p0.map(B=>{const z=_-B;let H=g.length-1;for(;H>0&&g[H-1].t>=z;)H-=1;const T=g.slice(H);return $m(T.length>=2?T:g.slice(-2))}),M=_-yR;let y=g.length-1;for(;y>0&&g[y-1].t>=M;)y-=1;let C=g.slice(y);C.length<2&&(C=g.slice(-2));const L=$m(C),D=C[C.length-1]??g[g.length-1];h(B=>B.visible&&B.tailPath===E&&B.taperPaths.every((z,H)=>z===w[H])&&B.headPath===L&&B.headX===D.x&&B.headY===D.y?B:{tailPath:E,taperPaths:w,headPath:L,headX:D.x,headY:D.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],h(td)}},[i]),i?wt.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[wt.jsxs("defs",{children:[wt.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[wt.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),wt.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),wt.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[wt.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),wt.jsxs("feMerge",{children:[wt.jsx("feMergeNode",{in:"blur"}),wt.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?wt.jsxs(wt.Fragment,{children:[wt.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?wt.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:bR[p],strokeWidth:ER[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${p0[p]}`):null),wt.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),wt.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function YR(){const r=ee.useRef(null),t=ee.useRef([]),i=ee.useRef(Qf),s=ee.useRef(Qf),l=ee.useRef(!1),c=ee.useRef([]),f=ee.useRef(null),h=ee.useRef(null);ee.useEffect(()=>{const F=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=F,document.documentElement.style.overscrollBehavior=""}},[]);const[m,p]=ee.useState(Kf),[_,v]=ee.useState([]),[g,S]=ee.useState(Kf[0].id),[E,w]=ee.useState(!0),[M,y]=ee.useState(!1),[C,L]=ee.useState(!1),[D,B]=ee.useState("menu"),[z,H]=ee.useState([]),[T,N]=ee.useState(!1),[mt,V]=ee.useState(""),[et,rt]=ee.useState(()=>pR),[ot,Q]=ee.useState(""),[O,P]=ee.useState(""),[ct,_t]=ee.useState(""),[Dt,I]=ee.useState(null),[k,vt]=ee.useState(()=>{if(typeof window>"u")return"nb";try{const F=window.localStorage.getItem(Qx);if(F==="nb"||F==="en")return F}catch{}return"nb"});ee.useEffect(()=>{try{window.localStorage.setItem(Qx,k)}catch{}},[k]);const At=q2[k],Vt=ee.useMemo(()=>F=>k==="nb"?kR(F):F,[k]),$=ee.useMemo(()=>K2.map((F,nt)=>{let Z="";if(typeof document<"u"){const Lt=document.createElement("canvas");Lt.width=420,Lt.height=420;const gt=Lt.getContext("2d");if(gt)try{Kx(gt,F.canonical,{backgroundColor:"rgba(0,0,0,0)",lineColor:"rgba(46,39,33,0.94)",gridColor:"rgba(69,60,53,0.48)"}),Z=Lt.toDataURL("image/png")}catch{Z=""}}return{...F,index:nt,previewDataUrl:Z}}),[]);ee.useEffect(()=>{const F=new Set($.map(nt=>nt.canonical));F.size!==$.length&&console.warn(`Glyff wall uniqueness violation: ${$.length-F.size} duplicates detected.`)},[$]);const Mt=ee.useMemo(()=>JSON.stringify({version:"rl-story-v1",name:"replacement-anxiety-pattern",protocol:"ra-sequence-v1",read_order:"left_to_right_top_to_bottom",count:$.length,items:$.map(F=>({order:F.index+1,id:F.id,phase:F.phase,canonical:F.canonical}))},null,2),[$]),Nt=ee.useCallback(()=>{f.current?.()},[]),Xt=ee.useCallback(()=>{h.current=null,I(null)},[]),ie=ee.useCallback(F=>{F.preventDefault();const nt=ot.trim(),Z=O.trim(),Lt=ct.trim();if(!nt||!Z||!Lt)return;const gt=k==="nb"?"Kontakt fra Signaturer":"Contact from Signatures",Pt=[`${k==="nb"?"Navn":"Name"}: ${nt}`,`${k==="nb"?"E-post":"Email"}: ${Z}`,"",`${k==="nb"?"Melding":"Message"}:`,Lt].join(`
`),Qt=`mailto:lars@larscuzner.com?subject=${encodeURIComponent(gt)}&body=${encodeURIComponent(Pt)}`;window.location.href=Qt},[k,O,ct,ot]),re=ee.useRef(0),hn=ee.useRef(0),Ce=ee.useRef(null),ye=ee.useCallback(F=>{const nt=F>=0?1:-1;rt(Z=>{const Lt=cd.length;return(Z+nt+Lt)%Lt})},[]),Xe=ee.useCallback(F=>{F.preventDefault();const nt=Math.abs(F.deltaX)>Math.abs(F.deltaY)?F.deltaX:F.deltaY;re.current+=nt;const Z=performance.now();Z-hn.current<xR||Math.abs(re.current)<vR||(ye(re.current>0?1:-1),re.current=0,hn.current=Z)},[ye]),ve=ee.useCallback(F=>{Ce.current=F.touches[0]?.clientX??null},[]),mn=ee.useCallback(F=>{const nt=Ce.current,Z=F.changedTouches[0]?.clientX??null;if(Ce.current=null,nt===null||Z===null)return;const Lt=Z-nt;Math.abs(Lt)<28||ye(Lt<0?1:-1)},[ye]);ee.useEffect(()=>{C||B("menu")},[C]),ee.useEffect(()=>{D==="videos"&&(re.current=0,hn.current=0)},[D]),ee.useEffect(()=>{if(!C||D!=="videos")return;let F=!1;const nt=()=>{F||c.current.forEach(Lt=>{if(!Lt||!Lt.paused&&Lt.readyState>=2)return;const gt=Lt.play();gt&&typeof gt.catch=="function"&&gt.catch(()=>{})})};nt();const Z=window.setInterval(nt,900);return()=>{F=!0,window.clearInterval(Z)}},[C,D]),ee.useEffect(()=>{if(!C||D!=="news")return;let F=!1;const nt=gt=>({title:String(gt?.title??"").trim(),source:String(gt?.source??"").trim(),url:String(gt?.url??"").trim(),snippet:String(gt?.snippet??"").trim(),published_at:String(gt?.published_at??"").trim(),published:gt?.published!==!1}),Z=gt=>{const Pt=Date.parse(gt);return Number.isFinite(Pt)?Pt:0};return(async()=>{N(!0),V("");for(const gt of dR)try{const Pt=await fetch(gt,{cache:"no-store"});if(!Pt.ok)continue;const Qt=await Pt.json();if(!Array.isArray(Qt?.items))continue;const ut=Qt.items.map(nt).filter(Et=>Et.published&&Et.title&&Et.url).sort((Et,ht)=>Z(ht.published_at)-Z(Et.published_at));if(F)return;H(ut),N(!1);return}catch{}F||(H([]),V(At.outsideNewsError),N(!1))})(),()=>{F=!0}},[C,D,At.outsideNewsError]),ee.useEffect(()=>{let F=!1;return(async()=>{try{const Z=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),Lt=Z.headers.get("content-type")??"";if(!Z.ok)throw new Error(`HTTP ${Z.status} while loading glyph language map`);if(!Lt.toLowerCase().includes("application/json")){const bt=await Z.text();throw new Error(`Expected JSON but got '${Lt||"unknown"}' (${bt.slice(0,120)})`)}const gt=await Z.json();if(!Array.isArray(gt?.items))throw new Error("Glyph language payload missing 'items' array");const Pt=gt.items.map((bt,yt)=>J2(bt,yt)).filter(bt=>bt.enabled!==!1),Qt=new Map,ut=[],Et=[],ht=[];if(Pt.forEach(bt=>{if(!bt.canonical){Et.push(`${bt.id} (empty canonical)`);return}let yt="";try{yt=Jc(bt.canonical)}catch{Et.push(`${bt.id} (${bt.canonical})`);return}const de=Qt.get(yt);if(de&&de!==bt.id){ht.push(`${bt.id} duplicates ${de} (${yt})`);return}Qt.set(yt,bt.id),ut.push({...bt,canonical:yt})}),Et.length>0&&console.warn("Glyph language map dropped invalid canonical rows:",Et.join("; ")),ht.length>0&&console.warn("Glyph language map dropped duplicate canonical rows:",ht.join("; ")),F)return;v(ut)}catch(Z){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",Z),F)return;v([])}})(),()=>{F=!0}},[]),ee.useEffect(()=>{if(l.current||m.length===0)return;let F=null;for(const Lt of uR){const gt=_.find(Pt=>Pt.id===Lt&&Pt.panel_id);if(gt?.panel_id){F=gt.panel_id;break}}F||(F=fR.find(Lt=>m.some(gt=>gt.id===Lt))??null);const nt=(F?m.find(Lt=>Lt.id===F):void 0)??m[0],Z=typeof nt?.installation?.placement_t=="number"?ji(nt.installation.placement_t):Qf;i.current=Z,s.current=Z,nt?.id&&S(nt.id),l.current=!0},[_,m]);const X=ee.useMemo(()=>_.filter(F=>F.enabled!==!1&&typeof F.canonical=="string"&&F.canonical.trim().length>0),[_]),$e=ee.useMemo(()=>{const F=new Map;if(!m.length||!X.length)return F;const nt=gt=>{const Pt=ji(gt);return ji(Qf-Pt)},Z=[...m].sort((gt,Pt)=>{const Qt=typeof gt.installation?.placement_t=="number"?gt.installation.placement_t:0,ut=typeof Pt.installation?.placement_t=="number"?Pt.installation.placement_t:0,Et=nt(Qt),ht=nt(ut);return Et===ht?gt.id.localeCompare(Pt.id):Et-ht}),Lt=Math.min(Z.length,X.length);for(let gt=0;gt<Lt;gt+=1)F.set(Z[gt].id,X[gt]);return F},[m,X]),Ne=ee.useMemo(()=>{const F=new Map;return $e.forEach((nt,Z)=>{nt.canonical&&F.set(Z,nt.canonical)}),F},[$e]),We=ee.useMemo(()=>{const F=new Map;return $e.forEach((nt,Z)=>{F.set(Z,{label:nt.label||"",note:nt.note||"",labelNb:nt.label_nb||"",noteNb:nt.note_nb||""})}),F},[$e]);ee.useEffect(()=>{let F=!1;return(async()=>{w(!0),y(!1);try{const Z=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),Lt=Z.headers.get("content-type")??"";if(!Z.ok)throw new Error(`HTTP ${Z.status} while loading panel data`);if(!Lt.toLowerCase().includes("application/json")){const ht=await Z.text();throw new Error(`Expected JSON but got '${Lt||"unknown"}' (${ht.slice(0,120)})`)}const gt=await Z.json();if(!Array.isArray(gt?.panels))throw new Error("Panel payload missing 'panels' array");const Pt=typeof gt.media_root=="string"?gt.media_root.replace(/\/+$/,""):"",Qt=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",ut=ht=>/^https?:\/\//i.test(ht)&&Qt?`/proxy?url=${encodeURIComponent(ht)}`:ht,Et=gt.panels.map(ht=>{const bt=typeof ht?.source=="string"?ht.source.replace(/^\/+/,""):"",yt=bt?Pt?`${Pt}/${bt}`:`/${bt}`:void 0,de=yt?ut(yt):void 0,Y=typeof ht?.poster=="string"?ht.poster.replace(/^\/+/,""):"",Ot=Y?Pt?`${Pt}/${Y}`:`/${Y}`:void 0,Ut=Ot?ut(Ot):void 0,Ht=ht?.type==="image"||ht?.type==="video"?ht.type:"text",Ct=ht?.content??{},pt=String(Ct?.title??"Untitled").trim()||"Untitled",Bt=String(Ct?.description??"").trim(),le=String(Ct?.title_nb??Ct?.title_no??"").trim(),xe=String(Ct?.description_nb??Ct?.description_no??"").trim(),Me=String(Ct?.title_en??"").trim(),Qe=String(Ct?.description_en??"").trim();return{...ht,kind:Ht,type:Ht,title:pt,body:Bt,title_nb:le||pt,body_nb:xe||Bt,title_en:Me,body_en:Qe,cta:Ct?.cta,poster:Ut,image:Ht==="image"?de:void 0,video:Ht==="video"?de:void 0}});if(Et.length===0)throw new Error("Panel payload contained 0 panels");if(F)return;p(Et),S(Et[0].id)}catch(Z){if(console.error("Failed to load panels; using fallback data.",Z),F)return;p(Kf),S(Kf[0].id),y(!0)}finally{F||w(!1)}})(),()=>{F=!0}},[]);const te=ee.useMemo(()=>m.find(F=>F.id===g)??m[0]??{title:"",body:""},[g,m]),U=ee.useMemo(()=>F=>{const nt=We.get(F.id);if(k==="nb"){const gt=ed(nt?.labelNb,F.title_nb,Vt(nt?.label||""),Vt(F.title||"")),Pt=ed(nt?.noteNb,F.body_nb,Vt(nt?.note||""),Vt(F.body||""));return{title:gt||"Mangler norsk tittel",body:Pt||"Mangler norsk tekst."}}const Z=ed(nt?.label,F.title_en),Lt=ed(nt?.note,F.body_en);return{title:Z||"Missing English title",body:Lt||"Missing English text."}},[We,k,Vt]),b=ee.useMemo(()=>U(te).title,[te,U]),j=ee.useMemo(()=>new Intl.DateTimeFormat(k==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[k]);return ee.useEffect(()=>{if(m.length===0)return;const F=r.current;if(!F)return;f.current=null,L(!1),Xt();let nt=!1,Z=()=>{};return(()=>{if(nt||!F)return;t.current=[];const gt=window.matchMedia("(prefers-reduced-motion: reduce)"),Pt=window.matchMedia("(max-width: 767px)"),Qt=gt.matches,ut=Pt.matches,Et=St=>{const jt=U(St);h.current=St.id,I({panelId:St.id,title:jt.title,body:jt.body})},ht=new L0;ht.background=new fe(987671),ht.fog=new lu(987671,38,230);const bt=new Hi(ut?72:64,F.clientWidth/F.clientHeight,.1,1200),yt=new my({antialias:!ut,alpha:!1,powerPreference:"high-performance"});yt.setPixelRatio(Math.min(window.devicePixelRatio,ut?1:1.5)),yt.setSize(F.clientWidth,F.clientHeight),yt.outputColorSpace=Jn,yt.toneMapping=nh,yt.toneMappingExposure=ut?.76:.72,yt.shadowMap.enabled=!ut,yt.shadowMap.type=Mo,F.appendChild(yt.domElement);let de=!1;const Y=St=>{de!==St&&(de=St,yt.shadowMap.type=St?uS:Mo,yt.shadowMap.needsUpdate=!0)},Ot=new $d(yt),Ut=Ot.fromScene(new L2,.06);ht.environment=Ut.texture;const Ht=new ay(16185599,.05);ht.add(Ht);const Ct=new iy(14739442,1777446,.08);ht.add(Ct);const pt=TR(N2),Bt=new KS(pt,!0,"catmullrom",.17),le=ut?180:300,xe=Math.min(8,yt.capabilities.getMaxAnisotropy()),Me=ut?256:512,Qe=t0({width:Me,height:Me,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});wa(Qe.albedo,4.8,24,xe,!0),wa(Qe.normal,4.8,24,xe),wa(Qe.roughness,4.8,24,xe),wa(Qe.ao,4.8,24,xe);const Pn=t0({width:Me,height:Me,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});wa(Pn.albedo,2.2,24,xe,!0),wa(Pn.normal,2.2,24,xe),wa(Pn.roughness,2.2,24,xe),wa(Pn.ao,2.2,24,xe);const Gi=t0({width:Me,height:Me,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});wa(Gi.albedo,3.4,24,xe,!0),wa(Gi.normal,3.4,24,xe),wa(Gi.roughness,3.4,24,xe),wa(Gi.ao,3.4,24,xe);const Ki=new So({color:9607586,map:Qe.albedo,normalMap:Qe.normal,normalScale:new De(.32,.32),roughnessMap:Qe.roughness,roughness:.38,metalness:0,aoMap:Qe.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:qn}),pa=new So({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:qn}),Nn=new So({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new fe(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:qn}),Zs=()=>{const St=[],jt=new K(0,1,0);let Zt=new K(1,0,0);for(let It=0;It<=le;It+=1){const Cn=It/le,Pi=Bt.getPointAt(Cn),Ha=Cn===1?Pi.clone().sub(Bt.getPointAt(Cn-.001)).normalize():Bt.getPointAt(Cn+.001).sub(Pi).normalize();let di=new K().crossVectors(Ha,jt).normalize();di.lengthSq()<1e-4&&(di=Zt.clone()),di.dot(Zt)<0&&di.multiplyScalar(-1),Zt=di.clone();const Ga=new K().crossVectors(di,Ha).normalize();St.push({pt:Pi,right:di,up:Ga,t:Cn})}const Wt=(It,Cn,Pi=!1)=>{const Ha=[],di=[],Ga=[];for(let jn=0;jn<=le;jn+=1){const Hn=St[jn],bi=It(Hn),Zn=Cn(Hn);Ha.push(bi.x,bi.y,bi.z,Zn.x,Zn.y,Zn.z),di.push(0,Hn.t,1,Hn.t)}for(let jn=0;jn<le;jn+=1){const Hn=jn*2,bi=Hn+1,Zn=Hn+2,Te=Hn+3;Pi?Ga.push(Hn,Zn,bi,Zn,Te,bi):Ga.push(Hn,bi,Zn,Zn,bi,Te)}const hi=new ha;hi.setAttribute("position",new ci(Ha,3));const Ss=new ci(di,2);return hi.setAttribute("uv",Ss),hi.setAttribute("uv2",Ss.clone()),hi.setIndex(Ga),hi.computeVertexNormals(),hi},zt=Jx*.5,ce=Km*.5,Ue=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ce)).add(It.right.clone().multiplyScalar(-zt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ce)).add(It.right.clone().multiplyScalar(zt))),Ze=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce)).add(It.right.clone().multiplyScalar(-zt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce)).add(It.right.clone().multiplyScalar(zt)),!0),He=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ce)).add(It.right.clone().multiplyScalar(-zt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce)).add(It.right.clone().multiplyScalar(-zt)),!0),fi=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ce)).add(It.right.clone().multiplyScalar(zt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce)).add(It.right.clone().multiplyScalar(zt))),Ei=.08,Mn=.015,Pe=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce-Ei)).add(It.right.clone().multiplyScalar(-zt+Mn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce)).add(It.right.clone().multiplyScalar(-zt+Mn)),!0),fn=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce-Ei)).add(It.right.clone().multiplyScalar(zt-Mn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce)).add(It.right.clone().multiplyScalar(zt-Mn)),!1),En=.22,tn=.018,Vi=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ce)).add(It.right.clone().multiplyScalar(-zt+tn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ce+En)).add(It.right.clone().multiplyScalar(-zt+tn)),!0),xs=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ce)).add(It.right.clone().multiplyScalar(zt-tn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ce+En)).add(It.right.clone().multiplyScalar(zt-tn)),!1),Un=.14,na=Wt(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce-.05)).add(It.right.clone().multiplyScalar(-Un)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ce-.05)).add(It.right.clone().multiplyScalar(Un)),!0);return{floorGeo:Ue,ceilGeo:Ze,leftGeo:He,rightGeo:fi,leftSkirtGeo:Vi,rightSkirtGeo:xs,trackRailGeo:na,leftCrownGeo:Pe,rightCrownGeo:fn}},{floorGeo:Di,ceilGeo:Oa,leftGeo:xi,rightGeo:gn,leftSkirtGeo:An,rightSkirtGeo:ma,trackRailGeo:Ia,leftCrownGeo:Gr,rightCrownGeo:Vr}=Zs(),hs=new Ge(Di,Ki),ga=new Ge(Oa,Nn),Qi=new Ge(xi,pa),Si=new Ge(gn,pa),$a=new So({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),Ji=new Xs({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:qn}),R=new Ge(An,Ji),q=new Ge(ma,Ji);R.receiveShadow=!0,q.receiveShadow=!0;const ft=new Ge(Gr,Ji),at=new Ge(Vr,Ji);ft.receiveShadow=!1,at.receiveShadow=!1;const tt=new So({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:qn}),Ft=new Ge(Ia,tt);Ft.receiveShadow=!1,hs.receiveShadow=!0,hs.castShadow=!0,ga.receiveShadow=!0,ga.castShadow=!0,Qi&&(Qi.receiveShadow=!0,Qi.castShadow=!0),Si&&(Si.receiveShadow=!0,Si.castShadow=!0),ht.add(hs),ht.add(ga),Qi&&ht.add(Qi),Si&&ht.add(Si),ht.add(R),ht.add(q),ht.add(ft),ht.add(at),ht.add(Ft);const Yt=[hs,ga,R,q,ft,at,Ft];Qi&&Yt.push(Qi),Si&&Yt.push(Si);const Gt=new K(0,1,0),Kt=new pn,ne=new pn,he=new pn;ht.add(Kt),ht.add(ne),ht.add(he);const se=new od(16773598,ut?16:24,34,Math.PI/8.4,.44,2);se.target=Kt,se.castShadow=!ut,se.castShadow&&(se.shadow.mapSize.width=2048,se.shadow.mapSize.height=2048,se.shadow.bias=-35e-5,se.shadow.normalBias=.012,se.shadow.camera.near=.4,se.shadow.camera.far=34),ht.add(se);const qt=new od(12571903,ut?6:9,34,Math.PI/6.5,.68,2);qt.target=ne,qt.castShadow=!1,ht.add(qt);const _e=new od(14083583,ut?5:7,28,Math.PI/7.8,.6,2);_e.target=he,_e.castShadow=!1,ht.add(_e);const an=new pn,sn=new pn;ht.add(an),ht.add(sn);const pe=new u0(16774374,0);if(pe.target=an,pe.castShadow=!ut,pe.castShadow){pe.shadow.mapSize.width=4096,pe.shadow.mapSize.height=4096,pe.shadow.bias=-8e-5,pe.shadow.normalBias=.0012,pe.shadow.radius=0;const St=ut?250:220;pe.shadow.camera.left=-St,pe.shadow.camera.right=St,pe.shadow.camera.top=St,pe.shadow.camera.bottom=-St,pe.shadow.camera.near=25,pe.shadow.camera.far=980}ht.add(pe);const _n=new u0(9090280,0);_n.target=sn,ht.add(_n),Di.computeBoundingBox(),Di.computeBoundingSphere(),Oa.computeBoundingBox(),Oa.computeBoundingSphere(),xi.computeBoundingBox(),xi.computeBoundingSphere(),gn.computeBoundingBox(),gn.computeBoundingSphere();const ei=m.some(St=>St.installation?.mount_type==="continuous_led_wall"||St.installation?.mount_type==="jutting_half_wall")?m:ut?m.filter((St,jt)=>jt%2===0):m,ue=[],Fn=[],Bn=[],Ni=[],yi=[],Le=[],Rn=[],zn=St=>{if(!St.paused&&St.currentTime>0)return;const jt=St.play();jt&&typeof jt.catch=="function"&&jt.catch(()=>{})},yn=setInterval(()=>{let St=!0;Le.forEach(jt=>{(jt.paused||jt.readyState<2)&&(St=!1,zn(jt))}),St&&Le.length>0&&clearInterval(yn)},500);yi.push(()=>clearInterval(yn));const $i=new Hr(1,1,.2),Pa=new ls(.82,.82),Ks=new So({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),yh=(St,jt)=>{const Wt=document.createElement("canvas");Wt.width=512,Wt.height=512;const zt=Wt.getContext("2d");zt.clearRect(0,0,512,512);const ce=Ne.get(jt);if(ce)try{Kx(zt,ce,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const fn=new Dl(Wt);return fn.colorSpace=Jn,fn}catch(fn){console.warn(`Invalid glyph canonical sentence for panel '${jt}': '${ce}'. Falling back to procedural glyph.`,fn)}const Ue=512/2,Ze=512/2,He=St*137.508;zt.fillStyle="rgba(6,14,24,0.7)",zt.beginPath(),zt.arc(Ue,Ze,512*.42,0,Math.PI*2),zt.fill(),zt.strokeStyle="rgba(102,221,255,0.95)",zt.lineWidth=2.5,zt.lineCap="round",zt.beginPath(),zt.arc(Ue,Ze,512*.38,0,Math.PI*2),zt.stroke();const fi=3+St%4;for(let fn=0;fn<fi;fn++){const En=fn/fi*Math.PI*2+He,tn=512*.08,Vi=512*.32;zt.beginPath(),zt.moveTo(Ue+Math.cos(En)*tn,Ze+Math.sin(En)*tn),zt.lineTo(Ue+Math.cos(En)*Vi,Ze+Math.sin(En)*Vi),zt.stroke()}const Ei=2+St%3;for(let fn=0;fn<Ei;fn++){const En=512*(.15+fn*.09),tn=He+fn*1.2;zt.beginPath(),zt.arc(Ue,Ze,En,tn,tn+Math.PI*(.4+St%3*.2)),zt.stroke()}zt.fillStyle="rgba(102,221,255,0.85)";const Mn=3+St%5;for(let fn=0;fn<Mn;fn++){const En=He+fn/Mn*Math.PI*2,tn=512*(.2+fn%3*.06);zt.beginPath(),zt.arc(Ue+Math.cos(En)*tn,Ze+Math.sin(En)*tn,4,0,Math.PI*2),zt.fill()}zt.strokeStyle="rgba(102,221,255,0.5)",zt.lineWidth=1.5,zt.beginPath(),zt.arc(Ue,Ze,512*.12,0,Math.PI*2),zt.stroke(),zt.fillStyle="rgba(102,221,255,0.95)",zt.beginPath(),zt.arc(Ue,Ze,6,0,Math.PI*2),zt.fill();const Pe=new Dl(Wt);return Pe.colorSpace=Jn,Pe},Mh=(St,jt)=>{const Zt=document.createElement("canvas");Zt.width=1024,Zt.height=640;const Wt=Zt.getContext("2d");Wt.fillStyle="rgba(8,12,18,0.88)",Wt.beginPath(),Wt.roundRect(16,16,992,608,24),Wt.fill(),Wt.strokeStyle="rgba(102,221,255,0.25)",Wt.lineWidth=2,Wt.beginPath(),Wt.roundRect(16,16,992,608,24),Wt.stroke(),Wt.fillStyle="rgba(102,221,255,0.95)",Wt.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",AR(Wt,St.toUpperCase(),60,100,900,58),Wt.strokeStyle="rgba(102,221,255,0.3)",Wt.lineWidth=2,Wt.beginPath(),Wt.moveTo(60,180),Wt.lineTo(960,180),Wt.stroke(),Wt.fillStyle="rgba(220,230,240,0.9)";const zt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",ce="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";Wt.font=zt,NR(Wt,jt,60,230,900,42,zt,ce);const Ue=new Dl(Zt);return Ue.colorSpace=Jn,Ue},Do=()=>{const jt=document.createElement("canvas");jt.width=512,jt.height=512;const Zt=jt.getContext("2d"),Wt=512/2,zt=512/2;Zt.beginPath(),Zt.arc(Wt,zt,512*.42,0,Math.PI*2),Zt.fillStyle="rgba(6,14,24,0.7)",Zt.fill(),Zt.strokeStyle="rgba(255,170,51,0.9)",Zt.lineWidth=6,Zt.beginPath(),Zt.arc(Wt,zt,512*.38,0,Math.PI*2),Zt.stroke();const ce=8;for(let Ze=0;Ze<ce;Ze++){const He=Ze/ce*Math.PI*2-Math.PI/2;Zt.strokeStyle=`rgba(255,${170+Math.round(Math.sin(Ze)*40)},51,0.8)`,Zt.lineWidth=4,Zt.beginPath(),Zt.moveTo(Wt+Math.cos(He)*512*.12,zt+Math.sin(He)*512*.12),Zt.lineTo(Wt+Math.cos(He)*512*.34,zt+Math.sin(He)*512*.34),Zt.stroke();const fi=Wt+Math.cos(He)*512*.34,Ei=zt+Math.sin(He)*512*.34,Mn=512*.06;Zt.beginPath(),Zt.moveTo(fi,Ei),Zt.lineTo(fi-Mn*Math.cos(He-.4),Ei-Mn*Math.sin(He-.4)),Zt.moveTo(fi,Ei),Zt.lineTo(fi-Mn*Math.cos(He+.4),Ei-Mn*Math.sin(He+.4)),Zt.stroke()}Zt.beginPath(),Zt.arc(Wt,zt,512*.06,0,Math.PI*2),Zt.fillStyle="rgba(255,200,80,0.95)",Zt.fill();const Ue=new Dl(jt);return Ue.colorSpace=Jn,Ue},_a=St=>{const jt=ji(St),Zt=Bt.getPointAt(jt),zt=Bt.getPointAt(ji(jt+.002)).clone().sub(Zt).normalize();let ce=new K().crossVectors(zt,Gt).normalize();ce.lengthSq()<1e-4&&(ce=new K(1,0,0));const Ue=new K().crossVectors(ce,zt).normalize();return{point:Zt,tangent:zt,right:ce,up:Ue}},kl=St=>{const jt=St.uv?.y;if(typeof jt=="number"&&Number.isFinite(jt))return ji(jt);const Zt=ut?180:320;let Wt=0,zt=Number.POSITIVE_INFINITY;for(let ce=0;ce<=Zt;ce+=1){const Ue=ce/Zt,He=Bt.getPointAt(Ue).distanceToSquared(St.point);He<zt&&(zt=He,Wt=Ue)}return ji(Wt)};Bt.getLength();const ts=[],ps=new ls(Qm*2,Qm*2),ms=new ls(iR,aR);ei.forEach((St,jt)=>{const Zt=St.installation,Wt=ji(Zt?.placement_t??.05+jt/ei.length),{point:zt,right:ce,up:Ue}=_a(Wt),Ze=Zt?.side==="left",Ei=(Zt?.side==="center"?0:Ze?-1:1)*Jx*.12,Mn=zt.clone().add(ce.clone().multiplyScalar(Ei)).add(Ue.clone().multiplyScalar(.5)),Pe=yh(jt,St.id);Fn.push(Pe);const fn=new Xs({color:16777215,emissive:new fe(tS),emissiveIntensity:1.2,map:Pe,emissiveMap:Pe,transparent:!0,alphaTest:.05,side:qn,depthWrite:!1});Bn.push(fn);const En=new Ge(ps,fn);En.position.copy(Mn),En.userData={panel:St,isGlyph:!0},ue.push(En),ht.add(En);const tn=U(St),Vi=tn.title,xs=tn.body,Un=Mh(Vi,xs);Fn.push(Un);const na=new Xs({color:16777215,emissive:new fe(1122867),emissiveIntensity:.3,map:Un,transparent:!0,opacity:0,side:qn,depthWrite:!0});Bn.push(na);const It=new Ge(ms,na),Cn=new wl;Cn.add(It),Cn.position.copy(Mn),Cn.scale.setScalar(.01),Cn.visible=!1,ht.add(Cn);const Pi=new su(tS,ut?6:12,20,1.5);Pi.position.copy(Mn),ht.add(Pi),ts.push({mesh:En,card:Cn,panel:St,progress:Wt,baseY:Mn.y,expanded:!1,expandT:0}),t.current.push({meta:St,progress:Wt})});let Li=!1,Ui=0,ui=0,Oi=0,ni=0,Fa=0,Ba=!1,Ii=!1,Qs=0,gs=0,ta=null,va=!1,kr=0,Xl=0,Ln=!1,za=!1;const ea={x:0,y:0},Mi={x:0,y:0},fu=new K,No=new K,ii=new K,_s=32;for(let St=0;St<_s;St++)ii.add(Bt.getPointAt(St/_s));ii.divideScalar(_s);const Lo=()=>{fu.copy(ii).add(lR),No.copy(ii)},Wl=()=>{ts.forEach(St=>{St.expanded=!1})},Yl=St=>{Li!==St&&(Li=St,Ba=!1,Ii=!1,ta=null,va=!1,L(St),St&&(Ln=!1,za=!0,ui=nS,Oi=iS,ni=aS,Fa=sS,Lo(),Wl(),Xt()))},Uo=()=>{Yl(!Li)};f.current=Uo;const Eh=new ls(Jf*2,Jf*2),Xr=Do();Fn.push(Xr);const ql=new Xs({color:16777215,emissive:new fe(eS),emissiveIntensity:1.4,map:Xr,emissiveMap:Xr,transparent:!0,alphaTest:.05,side:qn,depthWrite:!1});Bn.push(ql);const{point:du,up:hu}=_a(rR),Oo=du.clone().add(hu.clone().multiplyScalar(1)),Js=new Ge(Eh,ql);Js.position.copy(Oo),Js.userData={isExitGlyph:!0},ht.add(Js);const pu=new ls(Jf*5,Jf*5),bh=new cu({visible:!1,side:qn}),$s=new Ge(pu,bh);$s.position.copy(Oo),$s.userData={isExitGlyph:!0},ue.push($s),ht.add($s);const mu=new su(eS,ut?6:12,20,1.5);mu.position.copy(Oo),ht.add(mu);const gu=new _h(ut?1.25:1.6,26,26);Ni.push(gu);const Wr=new Xs({color:16764788,emissive:new fe(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});Bn.push(Wr);const jl=du.clone().add(hu.clone().multiplyScalar(Km*.52+.32)),tr=new Ge(gu,Wr);tr.position.copy(jl),tr.userData={isReentryDot:!0},ue.push(tr),ht.add(tr);const _u=new gh(ut?1.75:2.2,ut?2.35:2.95,52);Ni.push(_u);const Io=new cu({color:16761948,transparent:!0,opacity:0,side:qn,depthWrite:!1});Bn.push(Io);const Yr=new Ge(_u,Io);Yr.position.copy(jl),ht.add(Yr);const Zl=new su(16761948,0,ut?34:44,2);Zl.position.copy(jl),ht.add(Zl);const Kl=new oy,Ql=new De,vu=St=>{Le.forEach(zn);const jt=yt.domElement.getBoundingClientRect();Ql.x=(St.clientX-jt.left)/jt.width*2-1,Ql.y=-((St.clientY-jt.top)/jt.height)*2+1,Qs=St.clientX,gs=St.clientY,Kl.setFromCamera(Ql,bt);const Zt=Kl.intersectObjects(ue,!1);if(Li){if(Zt.length>0){const Wt=Zt[0].object;if(Wt.userData.isReentryDot){Yl(!1);return}if(Wt.userData.isExitGlyph){Uo();return}}if(Ba=!0,Ii=St.shiftKey||St.altKey||St.button===2,ta=null,va=!1,kr=St.clientX,Xl=St.clientY,!Ii&&St.button===0){const Wt=Kl.intersectObjects(Yt,!1);Wt.length>0&&(ta=kl(Wt[0]))}return}if(Zt.length>0){const Wt=Zt[0].object;if(Wt.userData.isExitGlyph){Uo();return}const zt=Wt.userData.panel;if(zt){if(ut){h.current===zt.id?Xt():Et(zt),Wl();return}const ce=ts.find(Ue=>Ue.panel.id===zt.id);ce&&(ce.expanded?ce.expanded=!1:(ts.forEach(Ue=>{Ue.expanded=!1}),ce.expanded=!0))}}else ut||ts.forEach(Wt=>{Wt.expanded=!1})};yt.domElement.addEventListener("pointerdown",vu);const xu=St=>{const jt=yt.domElement.getBoundingClientRect(),Zt=(St.clientX-jt.left)/jt.width,Wt=(St.clientY-jt.top)/jt.height;if(ea.x=(Zt-.5)*2,ea.y=(Wt-.5)*2,Li&&Ba){if(ta!==null&&!va){if(Math.hypot(St.clientX-kr,St.clientY-Xl)<=cR){Qs=St.clientX,gs=St.clientY;return}va=!0,ta=null}const zt=St.clientX-Qs,ce=St.clientY-gs;Qs=St.clientX,gs=St.clientY,Ln=!0,Ii?ni=bn.clamp(ni+zt*.0038,-Math.PI*.48,Math.PI*.48):(ui+=zt*.0046,Oi=bn.clamp(Oi+ce*.0035,-.88,.88));return}},Su=()=>{ea.x=0,ea.y=0,Ba=!1,Ii=!1,ta=null,va=!1},Po=()=>{Li&&ta!==null&&!va&&(i.current=ta,s.current=ta,Yl(!1)),Ba=!1,Ii=!1,ta=null,va=!1},yu=St=>{Li&&St.preventDefault()};yt.domElement.addEventListener("pointermove",xu,{passive:!0}),yt.domElement.addEventListener("pointerleave",Su,{passive:!0}),yt.domElement.addEventListener("pointerup",Po,{passive:!0}),yt.domElement.addEventListener("pointercancel",Po,{passive:!0}),yt.domElement.addEventListener("contextmenu",yu);const Fo=St=>{if(St.preventDefault(),Li){Ln=!0,ui+=St.deltaY*.0017,Fa=bn.clamp(Fa+St.deltaY*.22,-165,230);return}Le.forEach(zn),i.current=ji(i.current+$x*St.deltaY*75e-6)};yt.domElement.addEventListener("wheel",Fo,{passive:!1});const er=St=>{(St.key==="o"||St.key==="O")&&Uo()};window.addEventListener("keydown",er);let qr=0;const Jl=St=>{Le.forEach(zn),qr=St.touches[0]?.clientY??0},$l=St=>{St.preventDefault();const jt=St.touches[0]?.clientY??qr,Zt=qr-jt;if(Li){Ln=!0,ui+=Zt*.0021,Fa=bn.clamp(Fa+Zt*.13,-165,230),qr=jt;return}i.current=ji(i.current+$x*Zt*11e-5),qr=jt};yt.domElement.addEventListener("touchstart",Jl,{passive:!0}),yt.domElement.addEventListener("touchmove",$l,{passive:!1});const tc=()=>{F&&(bt.aspect=F.clientWidth/F.clientHeight,bt.updateProjectionMatrix(),yt.setSize(F.clientWidth,F.clientHeight))};window.addEventListener("resize",tc);const ec=new ly,Bo=new K,vs=new K,Mu=new K;let Eu=m.length>0?m[0].id:"";const bu=()=>{if(nt)return;const St=ec.getDelta(),jt=ec.getElapsedTime();s.current=$2(s.current,i.current,Qt?2.8:4.8,St),Mi.x+=(ea.x-Mi.x)*.07,Mi.y+=(ea.y-Mi.y)*.07,za&&(ea.x=0,ea.y=0,Mi.x=0,Mi.y=0,za=!1);const Zt=s.current,Wt=ji(Zt+(ut?.008:.01)),zt=Bt.getPointAt(Zt),ce=Bt.getPointAt(Wt),Ue=Bt.getPointAt(ji(Zt+.002)).sub(Bt.getPointAt(ji(Zt-.002))).normalize();let Ze=new K().crossVectors(Ue,Gt).normalize();Ze.lengthSq()<1e-4&&(Ze=new K(1,0,0));const He=new K().crossVectors(Ze,Ue).normalize(),fi=Ze.clone().multiplyScalar(Mi.x*(ut?0:.62)).add(He.clone().multiplyScalar(Mi.y*(ut?0:.42))),Ei=Qt?new K:He.clone().multiplyScalar(Math.sin(jt*.45)*.12),Mn=1/oR;Li&&Ui<1?Ui=Math.min(1,Ui+Mn*St):!Li&&Ui>0&&(Ui=Math.max(0,Ui-Mn*St));const Pe=Ui<.5?4*Ui*Ui*Ui:1-Math.pow(-2*Ui+2,3)/2;Li&&!Ln&&(ui=nS,Oi=iS,ni=aS,Fa=sS);const fn=bn.smoothstep(Pe,.18,1),En=Ln?fn:0,tn=Mi.x*(ut?0:15.4)*En,Vi=Mi.y*(ut?0:9.2)*En;an.position.copy(ii).add(new K(Math.sin(ui)*6.8+tn*.2,Oi*2.4+Vi*.18,Math.cos(ui)*3.6-tn*.13)),sn.position.copy(ii).add(new K(-Math.sin(ui)*3.2,Oi*.9,Math.cos(ui)*2.1)),pe.position.set(ii.x+700+tn*2.8+Math.sin(ui)*52,ii.y+290+Vi*1.35+Oi*28,ii.z-130-tn*1.3+Math.cos(ui)*30),_n.position.set(ii.x-470-tn*.82-Math.sin(ui)*16,ii.y+35+Vi*.22+Oi*10,ii.z+360+tn*.6-Math.cos(ui)*12);const xs=fu.clone().sub(ii).applyQuaternion(new js().setFromEuler(new da(Oi,ui,0,"YXZ"))),Un=bn.clamp(xs.length()+Fa,260,860);xs.setLength(Un);const na=ii.clone().add(xs).add(new K(tn,Vi*.84,tn*.58)),It=No.clone().add(new K(tn*.11,Vi*.095,tn*.085)),Cn=new js;if(Pe>.01){Y(Pe>.26),ht.fog instanceof lu&&(ht.fog.near=bn.lerp(38,9999,Pe),ht.fog.far=bn.lerp(230,1e4,Pe));const Te=new fe(987671),rn=new fe(132106);ht.background.copy(Te).lerp(rn,Pe),Ht.intensity=bn.lerp(.05,.002,Pe),Ct.intensity=bn.lerp(.08,.007,Pe),pe.intensity=bn.lerp(0,ut?4.6:8.6,Pe),_n.intensity=bn.lerp(0,ut?.02:.03,Pe),yt.toneMappingExposure=bn.lerp(ut?.76:.72,ut?.75:.76,Pe),[Ki,pa].forEach(ai=>{ai.emissive.set(3359829),ai.emissiveIntensity=0}),Ki.envMapIntensity=bn.lerp(.74,.04,Pe),pa.envMapIntensity=bn.lerp(.08,.01,Pe),Nn.color.set(0).lerp(new fe(16777215),Pe),Nn.toneMapped=Pe>.5,Nn.fog=Pe>.5,Nn.emissive.set(16777215),Nn.emissiveIntensity=bn.lerp(1,.02,Pe),Nn.envMapIntensity=bn.lerp(0,.03,Pe)}else Y(!1),Ht.intensity=.05,Ct.intensity=.08,pe.intensity=0,_n.intensity=0,yt.toneMappingExposure=ut?.76:.72,ht.background.set(987671),[Ki,pa].forEach(Te=>{Te.emissive.set(0),Te.emissiveIntensity=0}),Ki.envMapIntensity=.74,pa.envMapIntensity=.08,Nn.color.set(0),Nn.toneMapped=!1,Nn.fog=!1,Nn.emissive.set(16777215),Nn.emissiveIntensity=1,Nn.envMapIntensity=0;const Pi=He.clone().multiplyScalar(-Km*.2),Ha=zt.clone().add(Pi).add(fi).add(Ei),di=ce.clone().add(Pi).add(fi.multiplyScalar(.22));if(Pe>.99){if(bt.position.copy(na),bt.lookAt(It),Math.abs(ni)>1e-4){const Te=It.clone().sub(bt.position).normalize();Cn.setFromAxisAngle(Te,ni),bt.quaternion.multiply(Cn)}}else if(Pe>.001){bt.position.lerpVectors(Ha,na,Pe);const Te=di.clone().lerp(It,Pe);if(bt.lookAt(Te),Math.abs(ni)>1e-4){const rn=Te.clone().sub(bt.position).normalize();Cn.setFromAxisAngle(rn,ni*Pe),bt.quaternion.multiply(Cn)}}else bt.position.copy(Ha),bt.lookAt(di);const Ga=.94+Math.sin(jt*.23)*.06,hi=ce.clone().add(Pi);se.position.copy(bt.position).add(He.clone().multiplyScalar(2.9)).add(Ze.clone().multiplyScalar(2.1)).add(Ue.clone().multiplyScalar(-2.2)),Kt.position.copy(hi).add(Ze.clone().multiplyScalar(2.5)).add(He.clone().multiplyScalar(-.9)),se.intensity=(ut?14:21)*Ga,qt.position.copy(bt.position).add(He.clone().multiplyScalar(2)).add(Ze.clone().multiplyScalar(-2.4)).add(Ue.clone().multiplyScalar(-1.1)),ne.position.copy(hi).add(Ze.clone().multiplyScalar(-2)).add(He.clone().multiplyScalar(-1.4)),qt.intensity=(ut?5:8)*Ga,_e.position.copy(bt.position).add(He.clone().multiplyScalar(1.4)).add(Ue.clone().multiplyScalar(2.8)).add(Ze.clone().multiplyScalar(.6)),he.position.copy(hi).add(He.clone().multiplyScalar(-.8)),_e.intensity=(ut?4:6.2)*Ga,ue.forEach(Te=>{const rn=Te.userData;if(!rn||!rn.shading||!rn.material)return;const ai=rn.shading,Gn=rn.material,ia=rn.video,Ye=rn;let es=1;ai.lighting?.flicker_sync&&ia&&ia.readyState>=3&&(es=.88+Math.sin(jt*22)*.1*Math.sin(jt*6.7));let jr=1;if(ai.movement_reaction?.type==="viewing_angle_fade"){Bo.set(0,0,0),Te.getWorldPosition(Bo),vs.set(0,0,1).applyQuaternion(Te.quaternion),Mu.copy(bt.position).sub(Bo).normalize();const xa=vs,Sa=Mu,ir=Math.max(0,xa.dot(Sa)),Zr=ai.movement_reaction.cone_angle_degrees===60?3:1.5;jr=Math.pow(ir,Zr)}const nr=rn.baseEmissive*es*jr;if(Gn.emissiveIntensity=nr,Ye.bounceLights&&Ye.bounceLights.length>0){const xa=Ye.bounceSampleCtx,Sa=Ye.bounceSampleCanvas;if(ia&&xa&&Sa&&(Ye.bounceNextSampleAt??0)<=jt){const Kn=XR(ia,Sa,xa);if(Kn){Ye.bounceTargetColor||(Ye.bounceTargetColor=Kn.color.clone());const ar=Kn.color.clone().lerp(new fe(1,.97,.93),.18);Ye.bounceTargetColor.copy(ar);const Ti=bn.clamp(.22+Kn.luminance*1.9,.22,2.25);Ye.bounceTargetIntensity=(Ye.bounceBaseIntensity??5)*Ti*(.25+nr*1.25)}Ye.bounceNextSampleAt=jt+1/(ut?2:4)}else ia||(Ye.bounceTargetIntensity=(Ye.bounceBaseIntensity??5)*(.22+nr*1.1));const ir=Ye.bounceTargetIntensity??0,Zr=Ye.bounceCurrentIntensity??0;Ye.bounceCurrentIntensity=bn.lerp(Zr,ir,1-Math.exp(-6.2*St)),Ye.bounceCurrentColor||(Ye.bounceCurrentColor=(Ye.bounceTargetColor??new fe(1,1,1)).clone()),Ye.bounceTargetColor&&Ye.bounceCurrentColor.lerp(Ye.bounceTargetColor,1-Math.exp(-5.4*St)),Ye.bounceLights.forEach((Kn,ar)=>{const Ti=Math.max(1,Ye.bounceLights.length-1),sr=1-ar/Ti*.34;Kn.color.copy(Ye.bounceCurrentColor),Kn.intensity=(Ye.bounceCurrentIntensity??0)*sr})}}),Rn.forEach(({mesh:Te,basePosition:rn,strength:ai})=>{const Gn=Te.parent;if(!Gn)return;const ia=Gn.worldToLocal(bt.position.clone()),Ye=bn.clamp(ia.x*.008,-.18,.18)*ai,es=bn.clamp(ia.y*.006,-.14,.14)*ai;Te.position.x=rn.x+Ye,Te.position.y=rn.y+es}),ts.forEach((Te,rn)=>{const{mesh:ai,card:Gn}=Te;ai.lookAt(bt.position);const ia=rn*.7,Ye=Te.baseY+Math.sin(jt*eR+ia)*tR;ai.position.y=Ye,ai.rotateZ(nR*St);const es=ai.material;es.emissiveIntensity=1+Math.sin(jt*2+rn)*.4;const jr=!ut&&Te.expanded?1:0,nr=1/sR;Te.expandT<jr?Te.expandT=Math.min(1,Te.expandT+nr*St):Te.expandT>jr&&(Te.expandT=Math.max(0,Te.expandT-nr*St));const xa=Te.expandT,Sa=xa<.5?4*xa*xa*xa:1-Math.pow(-2*xa+2,3)/2;if(!ut&&Sa>.001){Gn.visible=!0,Gn.position.copy(ai.position),Gn.position.y-=Qm+.3,Gn.lookAt(bt.position),Gn.scale.setScalar(Sa);const ir=Gn.children[0].material;ir.opacity=Sa}else Gn.visible=!1;es.opacity=ut?1:1-Sa*.4});const Ss=Oo.y+Math.sin(jt*.8)*.35;Js.lookAt(bt.position),Js.position.y=Ss,Js.rotateZ(.15*St),ql.emissiveIntensity=1.2+Math.sin(jt*1.5)*.5,$s.lookAt(bt.position),$s.position.y=Ss;const jn=.72+Math.sin(jt*2.35)*.28,Hn=bn.smoothstep(Pe,.2,.95);tr.visible=Hn>.001,Yr.visible=Hn>.001,tr.scale.setScalar(.88+jn*.28),Wr.emissiveIntensity=Hn*(.48+jn*.45),Zl.intensity=Hn*(ut?4.6:7.4)*jn,Yr.lookAt(bt.position),Yr.scale.setScalar(.95+jn*.18),Io.opacity=Hn*(.2+jn*.32);let bi=t.current[0]?.meta.id??(m.length>0?m[0].id:""),Zn=Number.POSITIVE_INFINITY;t.current.forEach(Te=>{let rn=Math.abs(Zt-Te.progress);rn>.5&&(rn=1-rn),rn<Zn&&(Zn=rn,bi=Te.meta.id)}),bi!==Eu&&(Eu=bi,S(bi)),yt.render(ht,bt),requestAnimationFrame(bu)};bu(),Z=()=>{f.current=null,Xt(),yt.domElement.removeEventListener("pointerdown",vu),yt.domElement.removeEventListener("pointermove",xu),yt.domElement.removeEventListener("pointerleave",Su),yt.domElement.removeEventListener("pointerup",Po),yt.domElement.removeEventListener("pointercancel",Po),yt.domElement.removeEventListener("contextmenu",yu),yt.domElement.removeEventListener("wheel",Fo),yt.domElement.removeEventListener("touchstart",Jl),yt.domElement.removeEventListener("touchmove",$l),window.removeEventListener("resize",tc),window.removeEventListener("keydown",er),F.contains(yt.domElement)&&F.removeChild(yt.domElement),ue.forEach(St=>{const jt=St.userData?.video;jt&&(jt.pause(),jt.src="",jt.load())}),Le.forEach(St=>{St.pause(),St.src="",St.load()}),yi.forEach(St=>St()),Fn.forEach(St=>St.dispose?.()),Ni.forEach(St=>St.dispose()),ps.dispose(),ms.dispose(),Qe.albedo.dispose(),Qe.normal.dispose(),Qe.roughness.dispose(),Qe.ao.dispose(),Pn.albedo.dispose(),Pn.normal.dispose(),Pn.roughness.dispose(),Pn.ao.dispose(),Gi.albedo.dispose(),Gi.normal.dispose(),Gi.roughness.dispose(),Gi.ao.dispose(),Bn.forEach(St=>St.dispose()),Ut.texture.dispose(),Ut.dispose(),Ot.dispose(),Ki.dispose(),pa.dispose(),$a.dispose(),Nn.dispose(),Ks.dispose(),$i.dispose(),Pa.dispose(),Di.dispose(),Oa.dispose(),xi.dispose(),gn.dispose(),An.dispose(),ma.dispose(),Gr.dispose(),Vr.dispose(),Ia.dispose(),Ji.dispose(),tt.dispose(),yt.dispose()}})(),()=>{nt=!0,f.current=null,Z()}},[m,Ne,U,Xt]),wt.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[wt.jsx("div",{ref:r,className:"absolute inset-0"}),wt.jsx(WR,{}),wt.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[wt.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[wt.jsx("button",{type:"button",onClick:()=>vt("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${k==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":k==="nb",children:"NO"}),wt.jsx("button",{type:"button",onClick:()=>vt("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${k==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":k==="en",children:"EN"})]}),wt.jsx("button",{type:"button",onClick:Nt,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":C,children:C?"get in":"get out"})]}),E||M?wt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:E?At.loadingPanels:At.panelsFallback}):null,C?null:wt.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[wt.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:At.siteName}),wt.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[At.activeInstallation,": ",b]})]}),Dt&&!C?wt.jsx("div",{className:"pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 md:hidden",children:wt.jsxs("section",{className:"pointer-events-auto w-full max-w-[30rem] rounded-2xl border border-[#7fd9ff]/28 bg-[#061324]/94 px-4 py-3 text-[#e6f4ff] shadow-[0_22px_56px_rgba(0,0,0,0.62)] backdrop-blur",children:[wt.jsxs("div",{className:"flex items-start justify-between gap-3",children:[wt.jsx("h2",{className:"text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9edfff]",children:Dt.title}),wt.jsx("button",{type:"button",onClick:Xt,className:"pointer-events-auto rounded-full border border-[#7fd9ff]/35 px-3 py-[0.28rem] text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#d7f0ff] transition active:translate-y-[1px]",children:k==="nb"?"Lukk":"Close"})]}),wt.jsx("p",{className:"mt-2 max-h-[52svh] overflow-y-auto whitespace-pre-line text-[0.83rem] leading-relaxed text-[#d9e7f4]",children:Dt.body})]})}):null,C?wt.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[wt.jsx("style",{children:`
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
            `}),D==="menu"?wt.jsxs(wt.Fragment,{children:[wt.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:At.siteName}),wt.jsx("button",{type:"button",onClick:()=>B("videos"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:wt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:At.outsideVideos})}),wt.jsx("button",{type:"button",onClick:()=>B("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:wt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:At.outsideSignatures})})]}):null,D!=="menu"?wt.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[wt.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[wt.jsx("button",{type:"button",onClick:()=>B("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:At.outsideBack}),D==="videos"?wt.jsx(wt.Fragment,{children:wt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:At.outsideVideosTitle})}):null,D==="signatures"?wt.jsx(wt.Fragment,{children:wt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:At.outsideSignaturesTitle})}):null,D==="news"?wt.jsxs(wt.Fragment,{children:[wt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:At.outsideNewsTitle}),wt.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:At.outsideNewsBody})]}):null,D==="glyphwall"?wt.jsxs(wt.Fragment,{children:[wt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:At.outsideGlyphWallTitle}),At.outsideGlyphWallBody?wt.jsx("p",{className:"mt-2 max-w-4xl text-sm leading-relaxed text-[#b8cbe6] md:text-base",children:At.outsideGlyphWallBody}):null]}):null]}),D==="signatures"?wt.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:wt.jsxs("form",{onSubmit:ie,className:"max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6",children:[wt.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[wt.jsxs("label",{className:"block",children:[wt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:k==="nb"?"Navn":"Name"}),wt.jsx("input",{type:"text",required:!0,autoComplete:"name",value:ot,onChange:F=>Q(F.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),wt.jsxs("label",{className:"block",children:[wt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:k==="nb"?"E-post":"Email"}),wt.jsx("input",{type:"email",required:!0,autoComplete:"email",value:O,onChange:F=>P(F.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]})]}),wt.jsxs("label",{className:"mt-3 block",children:[wt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:k==="nb"?"Melding":"Message"}),wt.jsx("textarea",{required:!0,rows:5,value:ct,onChange:F=>_t(F.target.value),className:"mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),wt.jsx("button",{type:"submit",className:"mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]",children:k==="nb"?"Send melding":"Send message"})]})}):null,D==="news"?wt.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[T?wt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:At.outsideNewsLoading}):null,!T&&mt?wt.jsx("p",{className:"text-sm text-[#ffb6b6]",children:mt}):null,!T&&!mt&&z.length===0?wt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:At.outsideNewsEmpty}):null,!T&&!mt&&z.length>0?wt.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:z.map(F=>{const nt=Date.parse(F.published_at),Z=Number.isFinite(nt)?j.format(new Date(nt)):F.published_at;return wt.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[wt.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[F.source,Z?` · ${Z}`:""]}),wt.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:F.title}),F.snippet?wt.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:F.snippet}):null,wt.jsx("a",{href:F.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:k==="nb"?"Åpne sak":"Open story"})]},`${F.url}-${F.title}`)})}):null]}):null,D==="glyphwall"?wt.jsx("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:wt.jsxs("section",{className:"relative h-full","data-rl-story-version":"rl-story-v1","data-rl-story-name":"replacement-anxiety-pattern",children:[wt.jsx("div",{className:"relative h-full overflow-auto",children:wt.jsx("div",{className:"grid grid-cols-3 gap-y-6 pb-6 sm:grid-cols-4 md:grid-cols-6 md:gap-y-7 lg:grid-cols-8 xl:grid-cols-10",children:$.map(F=>wt.jsxs("article",{className:"relative flex items-center justify-center","data-rl-story-index":F.index+1,"data-rl-canonical":F.canonical,"data-rl-id":F.id,"data-rl-phase":F.phase,children:[wt.jsx("div",{className:"relative h-[7rem] w-[7rem] overflow-hidden rounded-full border border-[#86b5eb]/34",style:{background:"radial-gradient(circle_at_42%_38%,rgba(122,213,255,0.26),rgba(13,27,52,0.94)_66%), radial-gradient(circle_at_75%_82%,rgba(43,163,255,0.16),rgba(0,0,0,0)_58%)",animation:F.index%3===0?"glyffFloatA 7.8s ease-in-out infinite, glyffHoloPulse 6.6s ease-in-out infinite, glyffHoloTwinkle 4.9s ease-in-out infinite":F.index%3===1?"glyffFloatB 9.2s ease-in-out infinite, glyffHoloPulse 7.4s ease-in-out infinite, glyffHoloTwinkle 5.3s ease-in-out infinite":"glyffFloatC 8.4s ease-in-out infinite, glyffHoloPulse 6.9s ease-in-out infinite, glyffHoloTwinkle 5.1s ease-in-out infinite",animationDelay:`${F.index%11*.16}s, ${F.index%7*.21}s, ${F.index%5*.27}s`},children:F.previewDataUrl?wt.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-full bg-[#11213c]",children:[wt.jsx("img",{src:F.previewDataUrl,alt:`Glyff ${F.index+1}`,className:"absolute inset-0 h-full w-full object-cover mix-blend-screen",style:{opacity:.88,filter:"saturate(1.48) hue-rotate(8deg) contrast(1.12)"},loading:"lazy"}),wt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full",style:{background:"radial-gradient(circle_at_20%_18%,rgba(204,240,255,0.26),rgba(204,240,255,0)_42%), radial-gradient(circle_at_82%_79%,rgba(0,0,0,0.28),rgba(0,0,0,0)_56%)"}}),wt.jsx("div",{className:"pointer-events-none absolute rounded-full",style:{inset:"-34%",background:"conic-gradient(from 0deg, rgba(128,250,255,0) 0deg, rgba(128,250,255,0.36) 72deg, rgba(123,170,255,0.06) 148deg, rgba(128,250,255,0) 260deg)",mixBlendMode:"screen",animation:"glyffHoloSweep 7.1s linear infinite",animationDelay:`${F.index%9*.31}s`}}),wt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full",style:{background:"repeating-linear-gradient(180deg, rgba(151,228,255,0.16) 0px, rgba(151,228,255,0.16) 1px, rgba(10,18,34,0) 1px, rgba(10,18,34,0) 4px), linear-gradient(135deg, rgba(77,236,255,0.18) 0%, rgba(77,236,255,0) 54%)",mixBlendMode:"screen",opacity:.38,animation:"glyffHoloScan 2.7s linear infinite"}}),wt.jsx("div",{className:"pointer-events-none absolute rounded-full",style:{inset:"1px",border:"1px solid rgba(164,238,255,0.52)",boxShadow:"0 0 18px rgba(131,237,255,0.28), inset 0 0 12px rgba(110,221,255,0.22)"}})]}):wt.jsx("div",{className:"h-full w-full rounded-full bg-[#11213c]"})}),wt.jsx("span",{className:"sr-only",children:F.canonical})]},F.id))})}),wt.jsx("pre",{className:"sr-only","data-rl-story-payload":!0,children:Mt})]})}):null,D==="videos"?wt.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:Xe,onTouchStart:ve,onTouchEnd:mn,children:wt.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[wt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-black"}),wt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_120px_rgba(0,0,0,0.92)]"}),wt.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#e5e7eb]",children:[et+1," / ",cd.length]}),wt.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.35)]"}),wt.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${gR.toFixed(3)}rem) rotateY(${-et*_R}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[wt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/10",style:{width:`${$f.toFixed(3)}rem`,height:`${$f.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${rS.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,1) 100%)",boxShadow:"none"}}),wt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/8",style:{width:`${$f.toFixed(3)}rem`,height:`${$f.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${rS.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 100%)"}}),cd.map((F,nt)=>wt.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_22px_44px_rgba(0,0,0,0.86)]",style:{width:`${(vy+mR).toFixed(3)}rem`,height:`${X0}rem`,transform:`translate(-50%, -50%) rotateY(${nt*60}deg) translateZ(-${xy.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:wt.jsx("video",{ref:Z=>{c.current[nt]=Z},src:F.video,poster:F.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${F.video}-${nt}`))]})]})}):null]}):null]}):null]})}function qR(){return wt.jsx("div",{className:"min-h-screen bg-[#080604]",children:wt.jsx(YR,{})})}jM.createRoot(document.getElementById("root")).render(wt.jsx(ee.StrictMode,{children:wt.jsx(qR,{})}));
