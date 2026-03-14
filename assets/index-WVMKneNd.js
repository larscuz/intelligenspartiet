(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Vm={exports:{}},bu={};var mx;function lE(){if(mx)return bu;mx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return bu.Fragment=t,bu.jsx=i,bu.jsxs=i,bu}var gx;function cE(){return gx||(gx=1,Vm.exports=lE()),Vm.exports}var Et=cE(),km={exports:{}},Re={};var _x;function uE(){if(_x)return Re;_x=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function S(F,q,_t){this.props=F,this.context=q,this.refs=M,this.updater=_t||E}S.prototype.isReactComponent={},S.prototype.setState=function(F,q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,q,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function A(){}A.prototype=S.prototype;function L(F,q,_t){this.props=F,this.context=q,this.refs=M,this.updater=_t||E}var w=L.prototype=new A;w.constructor=L,D(w,S.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function U(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function N(F,q,_t){var Ot=_t.ref;return{$$typeof:r,type:F,key:q,ref:Ot!==void 0?Ot:null,props:_t}}function nt(F,q){return N(F.type,q,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function j(F){var q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(_t){return q[_t]})}var $=/\/+/g;function tt(F,q){return typeof F=="object"&&F!==null&&F.key!=null?j(""+F.key):q.toString(36)}function Z(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(U,U):(F.status="pending",F.then(function(q){F.status==="pending"&&(F.status="fulfilled",F.value=q)},function(q){F.status==="pending"&&(F.status="rejected",F.reason=q)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function O(F,q,_t,Ot,qt){var it=typeof F;(it==="undefined"||it==="boolean")&&(F=null);var Mt=!1;if(F===null)Mt=!0;else switch(it){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(F.$$typeof){case r:case t:Mt=!0;break;case _:return Mt=F._init,O(Mt(F._payload),q,_t,Ot,qt)}}if(Mt)return qt=qt(F),Mt=Ot===""?"."+tt(F,0):Ot,I(qt)?(_t="",Mt!=null&&(_t=Mt.replace($,"$&/")+"/"),O(qt,q,_t,"",function(ce){return ce})):qt!=null&&(G(qt)&&(qt=nt(qt,_t+(qt.key==null||F&&F.key===qt.key?"":(""+qt.key).replace($,"$&/")+"/")+Mt)),q.push(qt)),1;Mt=0;var wt=Ot===""?".":Ot+":";if(I(F))for(var Qt=0;Qt<F.length;Qt++)Ot=F[Qt],it=wt+tt(Ot,Qt),Mt+=O(Ot,q,_t,it,qt);else if(Qt=x(F),typeof Qt=="function")for(F=Qt.call(F),Qt=0;!(Ot=F.next()).done;)Ot=Ot.value,it=wt+tt(Ot,Qt++),Mt+=O(Ot,q,_t,it,qt);else if(it==="object"){if(typeof F.then=="function")return O(Z(F),q,_t,Ot,qt);throw q=String(F),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function B(F,q,_t){if(F==null)return F;var Ot=[],qt=0;return O(F,Ot,"","",function(it){return q.call(_t,it,qt++)}),Ot}function ct(F){if(F._status===-1){var q=F._result;q=q(),q.then(function(_t){(F._status===0||F._status===-1)&&(F._status=1,F._result=_t)},function(_t){(F._status===0||F._status===-1)&&(F._status=2,F._result=_t)}),F._status===-1&&(F._status=0,F._result=q)}if(F._status===1)return F._result.default;throw F._result}var pt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},Ct={map:B,forEach:function(F,q,_t){B(F,function(){q.apply(this,arguments)},_t)},count:function(F){var q=0;return B(F,function(){q++}),q},toArray:function(F){return B(F,function(q){return q})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return Re.Activity=v,Re.Children=Ct,Re.Component=S,Re.Fragment=i,Re.Profiler=l,Re.PureComponent=L,Re.StrictMode=s,Re.Suspense=m,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Re.__COMPILER_RUNTIME={__proto__:null,c:function(F){return z.H.useMemoCache(F)}},Re.cache=function(F){return function(){return F.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(F,q,_t){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Ot=D({},F.props),qt=F.key;if(q!=null)for(it in q.key!==void 0&&(qt=""+q.key),q)!b.call(q,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&q.ref===void 0||(Ot[it]=q[it]);var it=arguments.length-2;if(it===1)Ot.children=_t;else if(1<it){for(var Mt=Array(it),wt=0;wt<it;wt++)Mt[wt]=arguments[wt+2];Ot.children=Mt}return N(F.type,qt,Ot)},Re.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},Re.createElement=function(F,q,_t){var Ot,qt={},it=null;if(q!=null)for(Ot in q.key!==void 0&&(it=""+q.key),q)b.call(q,Ot)&&Ot!=="key"&&Ot!=="__self"&&Ot!=="__source"&&(qt[Ot]=q[Ot]);var Mt=arguments.length-2;if(Mt===1)qt.children=_t;else if(1<Mt){for(var wt=Array(Mt),Qt=0;Qt<Mt;Qt++)wt[Qt]=arguments[Qt+2];qt.children=wt}if(F&&F.defaultProps)for(Ot in Mt=F.defaultProps,Mt)qt[Ot]===void 0&&(qt[Ot]=Mt[Ot]);return N(F,it,qt)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(F){return{$$typeof:h,render:F}},Re.isValidElement=G,Re.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:ct}},Re.memo=function(F,q){return{$$typeof:p,type:F,compare:q===void 0?null:q}},Re.startTransition=function(F){var q=z.T,_t={};z.T=_t;try{var Ot=F(),qt=z.S;qt!==null&&qt(_t,Ot),typeof Ot=="object"&&Ot!==null&&typeof Ot.then=="function"&&Ot.then(U,pt)}catch(it){pt(it)}finally{q!==null&&_t.types!==null&&(q.types=_t.types),z.T=q}},Re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Re.use=function(F){return z.H.use(F)},Re.useActionState=function(F,q,_t){return z.H.useActionState(F,q,_t)},Re.useCallback=function(F,q){return z.H.useCallback(F,q)},Re.useContext=function(F){return z.H.useContext(F)},Re.useDebugValue=function(){},Re.useDeferredValue=function(F,q){return z.H.useDeferredValue(F,q)},Re.useEffect=function(F,q){return z.H.useEffect(F,q)},Re.useEffectEvent=function(F){return z.H.useEffectEvent(F)},Re.useId=function(){return z.H.useId()},Re.useImperativeHandle=function(F,q,_t){return z.H.useImperativeHandle(F,q,_t)},Re.useInsertionEffect=function(F,q){return z.H.useInsertionEffect(F,q)},Re.useLayoutEffect=function(F,q){return z.H.useLayoutEffect(F,q)},Re.useMemo=function(F,q){return z.H.useMemo(F,q)},Re.useOptimistic=function(F,q){return z.H.useOptimistic(F,q)},Re.useReducer=function(F,q,_t){return z.H.useReducer(F,q,_t)},Re.useRef=function(F){return z.H.useRef(F)},Re.useState=function(F){return z.H.useState(F)},Re.useSyncExternalStore=function(F,q,_t){return z.H.useSyncExternalStore(F,q,_t)},Re.useTransition=function(){return z.H.useTransition()},Re.version="19.2.4",Re}var vx;function q0(){return vx||(vx=1,km.exports=uE()),km.exports}var Vt=q0(),Xm={exports:{}},Tu={},Wm={exports:{}},Ym={};var xx;function fE(){return xx||(xx=1,(function(r){function t(O,B){var ct=O.length;O.push(B);t:for(;0<ct;){var pt=ct-1>>>1,Ct=O[pt];if(0<l(Ct,B))O[pt]=B,O[ct]=Ct,ct=pt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],ct=O.pop();if(ct!==B){O[0]=ct;t:for(var pt=0,Ct=O.length,F=Ct>>>1;pt<F;){var q=2*(pt+1)-1,_t=O[q],Ot=q+1,qt=O[Ot];if(0>l(_t,ct))Ot<Ct&&0>l(qt,_t)?(O[pt]=qt,O[Ot]=ct,pt=Ot):(O[pt]=_t,O[q]=ct,pt=q);else if(Ot<Ct&&0>l(qt,ct))O[pt]=qt,O[Ot]=ct,pt=Ot;else break t}}return B}function l(O,B){var ct=O.sortIndex-B.sortIndex;return ct!==0?ct:O.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,x=!1,E=!1,D=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=O)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function I(O){if(D=!1,w(O),!E)if(i(m)!==null)E=!0,U||(U=!0,j());else{var B=i(p);B!==null&&Z(I,B.startTime-O)}}var U=!1,z=-1,b=5,N=-1;function nt(){return M?!0:!(r.unstable_now()-N<b)}function G(){if(M=!1,U){var O=r.unstable_now();N=O;var B=!0;try{t:{E=!1,D&&(D=!1,A(z),z=-1),x=!0;var ct=g;try{e:{for(w(O),v=i(m);v!==null&&!(v.expirationTime>O&&nt());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,g=v.priorityLevel;var Ct=pt(v.expirationTime<=O);if(O=r.unstable_now(),typeof Ct=="function"){v.callback=Ct,w(O),B=!0;break e}v===i(m)&&s(m),w(O)}else s(m);v=i(m)}if(v!==null)B=!0;else{var F=i(p);F!==null&&Z(I,F.startTime-O),B=!1}}break t}finally{v=null,g=ct,x=!1}B=void 0}}finally{B?j():U=!1}}}var j;if(typeof L=="function")j=function(){L(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,tt=$.port2;$.port1.onmessage=G,j=function(){tt.postMessage(null)}}else j=function(){S(G,0)};function Z(O,B){z=S(function(){O(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var ct=g;g=B;try{return O()}finally{g=ct}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ct=g;g=O;try{return B()}finally{g=ct}},r.unstable_scheduleCallback=function(O,B,ct){var pt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?pt+ct:pt):ct=pt,O){case 1:var Ct=-1;break;case 2:Ct=250;break;case 5:Ct=1073741823;break;case 4:Ct=1e4;break;default:Ct=5e3}return Ct=ct+Ct,O={id:_++,callback:B,priorityLevel:O,startTime:ct,expirationTime:Ct,sortIndex:-1},ct>pt?(O.sortIndex=ct,t(p,O),i(m)===null&&O===i(p)&&(D?(A(z),z=-1):D=!0,Z(I,ct-pt))):(O.sortIndex=Ct,t(m,O),E||x||(E=!0,U||(U=!0,j()))),O},r.unstable_shouldYield=nt,r.unstable_wrapCallback=function(O){var B=g;return function(){var ct=g;g=B;try{return O.apply(this,arguments)}finally{g=ct}}}})(Ym)),Ym}var yx;function dE(){return yx||(yx=1,Wm.exports=fE()),Wm.exports}var qm={exports:{}},zi={};var Sx;function hE(){if(Sx)return zi;Sx=1;var r=q0();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},zi.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},zi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zi.requestFormReset=function(m){s.d.r(m)},zi.unstable_batchedUpdates=function(m,p){return m(p)},zi.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},zi.useFormStatus=function(){return f.H.useHostTransitionStatus()},zi.version="19.2.4",zi}var Mx;function pE(){if(Mx)return qm.exports;Mx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qm.exports=hE(),qm.exports}var Ex;function mE(){if(Ex)return Tu;Ex=1;var r=dE(),t=q0(),i=pE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var Z=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},pt=[],Ct=-1;function F(e){return{current:e}}function q(e){0>Ct||(e.current=pt[Ct],pt[Ct]=null,Ct--)}function _t(e,n){Ct++,pt[Ct]=e.current,e.current=n}var Ot=F(null),qt=F(null),it=F(null),Mt=F(null);function wt(e,n){switch(_t(it,n),_t(qt,e),_t(Ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Bv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Bv(n),e=zv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Ot),_t(Ot,e)}function Qt(){q(Ot),q(qt),q(it)}function ce(e){e.memoizedState!==null&&_t(Mt,e);var n=Ot.current,a=zv(n,e.type);n!==a&&(_t(qt,e),_t(Ot,a))}function kt(e){qt.current===e&&(q(Ot),q(qt)),Mt.current===e&&(q(Mt),yu._currentValue=ct)}var An,de;function Ce(e){if(An===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);An=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+An+e+de}var Be=!1;function be(e,n){if(!e||Be)return"";Be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var At=function(){throw Error()};if(Object.defineProperty(At.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(At,[])}catch(ht){var lt=ht}Reflect.construct(e,[],At)}else{try{At.call()}catch(ht){lt=ht}e.call(At.prototype)}}else{try{throw Error()}catch(ht){lt=ht}(At=e())&&typeof At.catch=="function"&&At.catch(function(){})}}catch(ht){if(ht&&lt&&typeof ht.stack=="string")return[ht.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var V=y.split(`
`),rt=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===rt.length)for(o=V.length-1,u=rt.length-1;1<=o&&0<=u&&V[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==rt[u]){var St=`
`+V[o].replace(" at new "," at ");return e.displayName&&St.includes("<anonymous>")&&(St=St.replace("<anonymous>",e.displayName)),St}while(1<=o&&0<=u);break}}}finally{Be=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ce(a):""}function Rn(e,n){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce("Lazy");case 13:return e.child!==n&&n!==null?Ce("Suspense Fallback"):Ce("Suspense");case 19:return Ce("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return Ce("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=Rn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Tn=Object.prototype.hasOwnProperty,ke=r.unstable_scheduleCallback,Xe=r.unstable_cancelCallback,le=r.unstable_shouldYield,P=r.unstable_requestPaint,T=r.unstable_now,K=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Rt=r.unstable_UserBlockingPriority,gt=r.unstable_NormalPriority,re=r.unstable_LowPriority,Ft=r.unstable_IdlePriority,ue=r.log,pe=r.unstable_setDisableYieldValue,Nt=null,Dt=null;function Xt(e){if(typeof ue=="function"&&pe(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Nt,e)}catch{}}var Wt=Math.clz32?Math.clz32:H,Zt=Math.log,Q=Math.LN2;function H(e){return e>>>=0,e===0?32:31-(Zt(e)/Q|0)|0}var dt=256,xt=262144,Tt=4194304;function yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=yt(o):(y&=R,y!==0?u=yt(y):a||(a=R&~e,a!==0&&(u=yt(a))))):(R=o&~d,R!==0?u=yt(R):y!==0?u=yt(y):a||(a=o&~e,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function mt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(){var e=Tt;return Tt<<=1,(Tt&62914560)===0&&(Tt=4194304),e}function zt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ee(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yn(e,n,a,o,u,d){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,rt=e.hiddenUpdates;for(a=y&~a;0<a;){var St=31-Wt(a),At=1<<St;R[St]=0,V[St]=-1;var lt=rt[St];if(lt!==null)for(rt[St]=null,St=0;St<lt.length;St++){var ht=lt[St];ht!==null&&(ht.lane&=-536870913)}a&=~At}o!==0&&Ca(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~n))}function Ca(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function wa(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function vs(e,n){var a=n&-n;return a=(a&42)!==0?1:ki(a),(a&(e.suspendedLanes|n))!==0?0:a}function ki(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xi(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:lx(e.type))}function Bn(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var gi=Math.random().toString(36).slice(2),Qe="__reactFiber$"+gi,pn="__reactProps$"+gi,Nn="__reactContainer$"+gi,bi="__reactEvents$"+gi,fa="__reactListeners$"+gi,Qa="__reactHandles$"+gi,Da="__reactResources$"+gi,zn="__reactMarker$"+gi;function yo(e){delete e[Qe],delete e[pn],delete e[bi],delete e[fa],delete e[Qa]}function da(e){var n=e[Qe];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Nn]||a[Qe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Yv(e);e!==null;){if(a=e[Qe])return a;e=Yv(e)}return n}e=a,a=e.parentNode}return null}function ha(e){if(e=e[Qe]||e[Nn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Na(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function C(e){var n=e[Da];return n||(n=e[Da]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[zn]=!0}var ft=new Set,ot={};function et(e,n){Ht(e,n),Ht(e+"Capture",n)}function Ht(e,n){for(ot[e]=n,e=0;e<n.length;e++)ft.add(n[e])}var jt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Jt={};function ne(e){return Tn.call(Jt,e)?!0:Tn.call(Gt,e)?!1:jt.test(e)?Jt[e]=!0:(Gt[e]=!0,!1)}function xe(e,n,a){if(ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ve(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function $t(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Je(e){if(!e._valueTracker){var n=mn(e)?"checked":"value";e._valueTracker=gn(e,n,""+e[n])}}function Pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=mn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _i=/[\n"\\]/g;function ye(e){return e.replace(_i,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function oi(e,n,a,o,u,d,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Te(n)):e.value!==""+Te(n)&&(e.value=""+Te(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,y,Te(n)):a!=null?Ln(e,y,Te(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Te(R):e.removeAttribute("name")}function Ti(e,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Je(e);return}a=a!=null?""+Te(a):"",n=n!=null?""+Te(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Je(e)}function Ln(e,n,a){n==="number"&&te(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Te(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function je(e,n,a){if(n!=null&&(n=""+Te(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Te(a):""}function Un(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Te(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Je(e)}function ci(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var He=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ai(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||He.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function xs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ai(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ai(e,d,n[d])}function Xs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ar=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return Ar.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vi(){}var So=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rr=null,Ii=null;function Dc(e){var n=ha(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(s(90));oi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Pn(o)}break t;case"textarea":je(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&li(e,!!a.multiple,n,!1)}}}var Nc=!1;function nf(e,n,a){if(Nc)return e(n,a);Nc=!0;try{var o=e(n);return o}finally{if(Nc=!1,(Rr!==null||Ii!==null)&&(Wf(),Rr&&(n=Rr,e=Ii,Ii=Rr=null,Dc(n),e)))for(n=0;n<e.length;n++)Dc(e[n])}}function Mo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=!1;if($a)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Lc=!1}var ts=null,Uc=null,es=null;function Oc(){if(es)return es;var e,n=Uc,a=n.length,o,u="value"in ts?ts.value:ts.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return es=u.slice(e,1<o?1-o:void 0)}function bo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function Ji(){return!1}function $e(e){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Cn:Ji,this.isPropagationStopped=Ji,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),n}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=$e(Jn),$i=v({},Jn,{view:0,detail:0}),af=$e($i),La,To,Ws,Cr=v({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(La=e.screenX-Ws.screenX,To=e.screenY-Ws.screenY):To=La=0,Ws=e),La)},movementY:function(e){return"movementY"in e?e.movementY:To}}),Wi=$e(Cr),is=v({},Cr,{dataTransfer:0}),ys=$e(is),Ys=v({},$i,{relatedTarget:0}),Ss=$e(Ys),qs=v({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),dl=$e(qs),hl=v({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ma=$e(hl),Ms=v({},Jn,{data:0}),Ic=$e(Ms),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Es(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Pc[e])?!!n[e]:!1}function ta(){return Es}var rf=v({},$i,{key:function(e){if(e.key){var n=sf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),of=$e(rf),pl=v({},Cr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qn=$e(pl),Fc=v({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Dr=$e(Fc),pp=v({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bs=$e(pp),lf=v({},Cr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=$e(lf),ea=v({},Jn,{newState:0,oldState:0}),Ao=$e(ea),js=[9,13,27,32],Ts=$a&&"CompositionEvent"in window,Nr=null;$a&&"documentMode"in document&&(Nr=document.documentMode);var mp=$a&&"TextEvent"in window&&!Nr,Bc=$a&&(!Ts||Nr&&8<Nr&&11>=Nr),ml=" ",Ro=!1;function uf(e,n){switch(e){case"keyup":return js.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var As=!1;function ff(e,n){switch(e){case"compositionend":return gl(n);case"keypress":return n.which!==32?null:(Ro=!0,ml);case"textInput":return e=n.data,e===ml&&Ro?null:e;default:return null}}function df(e,n){if(As)return e==="compositionend"||!Ts&&uf(e,n)?(e=Oc(),es=Uc=ts=null,As=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bc&&n.locale!=="ko"?null:n.data;default:return null}}var _l={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_l[e.type]:n==="textarea"}function hf(e,n,a,o){Rr?Ii?Ii.push(o):Ii=[o]:Rr=o,n=Jf(n,"onChange"),0<n.length&&(a=new ns("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Co=null,Ua=null;function pf(e){Lv(e,0)}function wo(e){var n=Na(e);if(Pn(n))return e}function vl(e,n){if(e==="change")return n}var xl=!1;if($a){var Rs;if($a){var yl="oninput"in document;if(!yl){var Sl=document.createElement("div");Sl.setAttribute("oninput","return;"),yl=typeof Sl.oninput=="function"}Rs=yl}else Rs=!1;xl=Rs&&(!document.documentMode||9<document.documentMode)}function Lr(){Co&&(Co.detachEvent("onpropertychange",Ml),Ua=Co=null)}function Ml(e){if(e.propertyName==="value"&&wo(Ua)){var n=[];hf(n,Ua,e,pa(e)),nf(pf,n)}}function Do(e,n,a){e==="focusin"?(Lr(),Co=n,Ua=a,Co.attachEvent("onpropertychange",Ml)):e==="focusout"&&Lr()}function $n(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Ua)}function zc(e,n){if(e==="click")return wo(n)}function mf(e,n){if(e==="input"||e==="change")return wo(n)}function gf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Pi=typeof Object.is=="function"?Object.is:gf;function Ur(e,n){if(Pi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Tn.call(n,u)||!Pi(e[u],n[u]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,n){var a=Hc(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hc(a)}}function Vc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function No(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=te(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=te(e.document)}return n}function Or(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kc=$a&&"documentMode"in document&&11>=document.documentMode,Cs=null,Ir=null,Pr=null,El=!1;function Lo(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;El||Cs==null||Cs!==te(o)||(o=Cs,"selectionStart"in o&&Or(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Pr&&Ur(Pr,o)||(Pr=o,o=Jf(Ir,"onSelect"),0<o.length&&(n=new ns("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Cs)))}function ws(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},bl={},Xc={};$a&&(Xc=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Fi(e){if(bl[e])return bl[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xc)return bl[e]=n[a];return e}var Tl=Fi("animationend"),Wc=Fi("animationiteration"),Yc=Fi("animationstart"),Ks=Fi("transitionrun"),_f=Fi("transitionstart"),vf=Fi("transitioncancel"),Al=Fi("transitionend"),Rl=new Map,Cl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cl.push("scrollEnd");function na(e,n){Rl.set(e,n),et(n,[e])}var Uo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ci=[],Qs=0,wl=0;function Oo(){for(var e=Qs,n=wl=Qs=0;n<e;){var a=Ci[n];Ci[n++]=null;var o=Ci[n];Ci[n++]=null;var u=Ci[n];Ci[n++]=null;var d=Ci[n];if(Ci[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&qc(a,u,d)}}function as(e,n,a,o){Ci[Qs++]=e,Ci[Qs++]=n,Ci[Qs++]=a,Ci[Qs++]=o,wl|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ns(e,n,a,o){return as(e,n,a,o),Io(e)}function Ls(e,n){return as(e,null,null,n),Io(e)}function qc(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Wt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Io(e){if(50<hu)throw hu=0,dm=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Js={};function jc(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bi(e,n,a,o){return new jc(e,n,a,o)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ga(e,n){var a=e.alternate;return a===null?(a=Bi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zc(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Po(e,n,a,o,u,d){var y=0;if(o=e,typeof e=="function")Dl(e)&&(y=1);else if(typeof e=="string")y=KM(e,a,Ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Bi(31,a,n,u),e.elementType=N,e.lanes=d,e;case D:return at(a.children,u,d,n);case M:y=8,u|=24;break;case S:return e=Bi(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case I:return e=Bi(13,a,n,u),e.elementType=I,e.lanes=d,e;case U:return e=Bi(19,a,n,u),e.elementType=U,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case A:y=9;break t;case w:y=11;break t;case z:y=14;break t;case b:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Bi(y,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function at(e,n,a,o){return e=Bi(7,e,o,n),e.lanes=a,e}function It(e,n,a){return e=Bi(6,e,null,n),e.lanes=a,e}function Kt(e){var n=Bi(18,null,null,0);return n.stateNode=e,n}function Bt(e,n,a){return n=Bi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pt=new WeakMap;function ae(e,n){if(typeof e=="object"&&e!==null){var a=Pt.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},Pt.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var se=[],Ve=0,We=null,On=0,fn=[],ze=0,Ee=null,Ae=1,we="";function _n(e,n){se[Ve++]=On,se[Ve++]=We,We=e,On=n}function Oa(e,n,a){fn[ze++]=Ae,fn[ze++]=we,fn[ze++]=Ee,Ee=e;var o=Ae;e=we;var u=32-Wt(o)-1;o&=~(1<<u),a+=1;var d=32-Wt(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ae=1<<32-Wt(n)+u|a<<u|o,we=d+e}else Ae=1<<d|a<<u|o,we=e}function xi(e){e.return!==null&&(_n(e,1),Oa(e,1,0))}function Yi(e){for(;e===We;)We=se[--Ve],se[Ve]=null,On=se[--Ve],se[Ve]=null;for(;e===Ee;)Ee=fn[--ze],fn[ze]=null,we=fn[--ze],fn[ze]=null,Ae=fn[--ze],fn[ze]=null}function ss(e,n){fn[ze++]=Ae,fn[ze++]=we,fn[ze++]=Ee,Ae=n.id,we=n.overflow,Ee=e}var Ut=null,De=null,Se=!1,ui=null,vn=!1,Ia=Error(s(519));function yi(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Us(ae(n,e)),Ia}function Fr(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Qe]=e,n[pn]=o,a){case"dialog":qe("cancel",n),qe("close",n);break;case"iframe":case"object":case"embed":qe("load",n);break;case"video":case"audio":for(a=0;a<mu.length;a++)qe(mu[a],n);break;case"source":qe("error",n);break;case"img":case"image":case"link":qe("error",n),qe("load",n);break;case"details":qe("toggle",n);break;case"input":qe("invalid",n),Ti(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":qe("invalid",n);break;case"textarea":qe("invalid",n),Un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Pv(n.textContent,a)?(o.popover!=null&&(qe("beforetoggle",n),qe("toggle",n)),o.onScroll!=null&&qe("scroll",n),o.onScrollEnd!=null&&qe("scrollend",n),o.onClick!=null&&(n.onclick=vi),n=!0):n=!1,n||yi(e,!0)}function Pa(e){for(Ut=e.return;Ut;)switch(Ut.tag){case 5:case 31:case 13:vn=!1;return;case 27:case 3:vn=!0;return;default:Ut=Ut.return}}function wn(e){if(e!==Ut)return!1;if(!Se)return Pa(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rm(e.type,e.memoizedProps)),a=!a),a&&De&&yi(e),Pa(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));De=Wv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));De=Wv(e)}else n===27?(n=De,Jr(e.type)?(e=Lm,Lm=null,De=e):De=n):De=Ut?ka(e.stateNode.nextSibling):null;return!0}function fi(){De=Ut=null,Se=!1}function ia(){var e=ui;return e!==null&&(oa===null?oa=e:oa.push.apply(oa,e),ui=null),e}function Us(e){ui===null?ui=[e]:ui.push(e)}var Fo=F(null),Os=null,Fa=null;function Ba(e,n,a){_t(Fo,n._currentValue),n._currentValue=a}function _a(e){e._currentValue=Fo.current,q(Fo)}function Nl(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function $s(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Nl(d.return,a,e),o||(y=null);break t}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Nl(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function za(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;Pi(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===Mt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(yu):e=[yu])}u=u.return}e!==null&&$s(n,e,a,o),n.flags|=262144}function Bo(e){for(e=e.firstContext;e!==null;){if(!Pi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Os=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ti(e){return nn(Os,e)}function Ne(e,n){return Os===null&&Ha(e),nn(e,n)}function nn(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fa===null){if(e===null)throw Error(s(308));Fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fa=Fa.next=n;return a}var Hn=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},on=r.unstable_scheduleCallback,wi=r.unstable_NormalPriority,me={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Di(){return{controller:new Hn,data:new Map,refCount:0}}function qi(e){e.refCount--,e.refCount===0&&on(wi,function(){e.controller.abort()})}var ei=null,ni=0,Gn=0,Ni=null;function Br(e,n){if(ei===null){var a=ei=[];ni=0,Gn=vm(),Ni={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ni++,n.then(Ga,Ga),n}function Ga(){if(--ni===0&&ei!==null){Ni!==null&&(Ni.status="fulfilled");var e=ei;ei=null,Gn=0,Ni=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function zr(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Is=O.S;O.S=function(e,n){rv=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Br(e,n),Is!==null&&Is(e,n)};var tr=F(null);function gp(){var e=tr.current;return e!==null?e:En.pooledCache}function xf(e,n){n===null?_t(tr,tr.current):_t(tr,n.pool)}function bg(){var e=gp();return e===null?null:{parent:me._currentValue,pool:e}}var Ll=Error(s(460)),_p=Error(s(474)),yf=Error(s(542)),Sf={then:function(){}};function Tg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ag(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(vi,vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cg(e),e;default:if(typeof n.status=="string")n.then(vi,vi);else{if(e=En,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cg(e),e}throw Ho=n,Ll}}function zo(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ho=a,Ll):a}}var Ho=null;function Rg(){if(Ho===null)throw Error(s(459));var e=Ho;return Ho=null,e}function Cg(e){if(e===Ll||e===yf)throw Error(s(483))}var Ul=null,Kc=0;function Mf(e){var n=Kc;return Kc+=1,Ul===null&&(Ul=[]),Ag(Ul,e,n)}function Qc(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ef(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wg(e){function n(J,W){if(e){var st=J.deletions;st===null?(J.deletions=[W],J.flags|=16):st.push(W)}}function a(J,W){if(!e)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=ga(J,W),J.index=0,J.sibling=null,J}function d(J,W,st){return J.index=st,e?(st=J.alternate,st!==null?(st=st.index,st<W?(J.flags|=67108866,W):st):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function y(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,st,bt){return W===null||W.tag!==6?(W=It(st,J.mode,bt),W.return=J,W):(W=u(W,st),W.return=J,W)}function V(J,W,st,bt){var he=st.type;return he===D?St(J,W,st.props.children,bt,st.key):W!==null&&(W.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===b&&zo(he)===W.type)?(W=u(W,st.props),Qc(W,st),W.return=J,W):(W=Po(st.type,st.key,st.props,null,J.mode,bt),Qc(W,st),W.return=J,W)}function rt(J,W,st,bt){return W===null||W.tag!==4||W.stateNode.containerInfo!==st.containerInfo||W.stateNode.implementation!==st.implementation?(W=Bt(st,J.mode,bt),W.return=J,W):(W=u(W,st.children||[]),W.return=J,W)}function St(J,W,st,bt,he){return W===null||W.tag!==7?(W=at(st,J.mode,bt,he),W.return=J,W):(W=u(W,st),W.return=J,W)}function At(J,W,st){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=It(""+W,J.mode,st),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return st=Po(W.type,W.key,W.props,null,J.mode,st),Qc(st,W),st.return=J,st;case E:return W=Bt(W,J.mode,st),W.return=J,W;case b:return W=zo(W),At(J,W,st)}if(Z(W)||j(W))return W=at(W,J.mode,st,null),W.return=J,W;if(typeof W.then=="function")return At(J,Mf(W),st);if(W.$$typeof===L)return At(J,Ne(J,W),st);Ef(J,W)}return null}function lt(J,W,st,bt){var he=W!==null?W.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return he!==null?null:R(J,W,""+st,bt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case x:return st.key===he?V(J,W,st,bt):null;case E:return st.key===he?rt(J,W,st,bt):null;case b:return st=zo(st),lt(J,W,st,bt)}if(Z(st)||j(st))return he!==null?null:St(J,W,st,bt,null);if(typeof st.then=="function")return lt(J,W,Mf(st),bt);if(st.$$typeof===L)return lt(J,W,Ne(J,st),bt);Ef(J,st)}return null}function ht(J,W,st,bt,he){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return J=J.get(st)||null,R(W,J,""+bt,he);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case x:return J=J.get(bt.key===null?st:bt.key)||null,V(W,J,bt,he);case E:return J=J.get(bt.key===null?st:bt.key)||null,rt(W,J,bt,he);case b:return bt=zo(bt),ht(J,W,st,bt,he)}if(Z(bt)||j(bt))return J=J.get(st)||null,St(W,J,bt,he,null);if(typeof bt.then=="function")return ht(J,W,st,Mf(bt),he);if(bt.$$typeof===L)return ht(J,W,st,Ne(W,bt),he);Ef(W,bt)}return null}function oe(J,W,st,bt){for(var he=null,sn=null,fe=W,Pe=W=0,Ke=null;fe!==null&&Pe<st.length;Pe++){fe.index>Pe?(Ke=fe,fe=null):Ke=fe.sibling;var rn=lt(J,fe,st[Pe],bt);if(rn===null){fe===null&&(fe=Ke);break}e&&fe&&rn.alternate===null&&n(J,fe),W=d(rn,W,Pe),sn===null?he=rn:sn.sibling=rn,sn=rn,fe=Ke}if(Pe===st.length)return a(J,fe),Se&&_n(J,Pe),he;if(fe===null){for(;Pe<st.length;Pe++)fe=At(J,st[Pe],bt),fe!==null&&(W=d(fe,W,Pe),sn===null?he=fe:sn.sibling=fe,sn=fe);return Se&&_n(J,Pe),he}for(fe=o(fe);Pe<st.length;Pe++)Ke=ht(fe,J,Pe,st[Pe],bt),Ke!==null&&(e&&Ke.alternate!==null&&fe.delete(Ke.key===null?Pe:Ke.key),W=d(Ke,W,Pe),sn===null?he=Ke:sn.sibling=Ke,sn=Ke);return e&&fe.forEach(function(io){return n(J,io)}),Se&&_n(J,Pe),he}function _e(J,W,st,bt){if(st==null)throw Error(s(151));for(var he=null,sn=null,fe=W,Pe=W=0,Ke=null,rn=st.next();fe!==null&&!rn.done;Pe++,rn=st.next()){fe.index>Pe?(Ke=fe,fe=null):Ke=fe.sibling;var io=lt(J,fe,rn.value,bt);if(io===null){fe===null&&(fe=Ke);break}e&&fe&&io.alternate===null&&n(J,fe),W=d(io,W,Pe),sn===null?he=io:sn.sibling=io,sn=io,fe=Ke}if(rn.done)return a(J,fe),Se&&_n(J,Pe),he;if(fe===null){for(;!rn.done;Pe++,rn=st.next())rn=At(J,rn.value,bt),rn!==null&&(W=d(rn,W,Pe),sn===null?he=rn:sn.sibling=rn,sn=rn);return Se&&_n(J,Pe),he}for(fe=o(fe);!rn.done;Pe++,rn=st.next())rn=ht(fe,J,Pe,rn.value,bt),rn!==null&&(e&&rn.alternate!==null&&fe.delete(rn.key===null?Pe:rn.key),W=d(rn,W,Pe),sn===null?he=rn:sn.sibling=rn,sn=rn);return e&&fe.forEach(function(oE){return n(J,oE)}),Se&&_n(J,Pe),he}function Sn(J,W,st,bt){if(typeof st=="object"&&st!==null&&st.type===D&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case x:t:{for(var he=st.key;W!==null;){if(W.key===he){if(he=st.type,he===D){if(W.tag===7){a(J,W.sibling),bt=u(W,st.props.children),bt.return=J,J=bt;break t}}else if(W.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===b&&zo(he)===W.type){a(J,W.sibling),bt=u(W,st.props),Qc(bt,st),bt.return=J,J=bt;break t}a(J,W);break}else n(J,W);W=W.sibling}st.type===D?(bt=at(st.props.children,J.mode,bt,st.key),bt.return=J,J=bt):(bt=Po(st.type,st.key,st.props,null,J.mode,bt),Qc(bt,st),bt.return=J,J=bt)}return y(J);case E:t:{for(he=st.key;W!==null;){if(W.key===he)if(W.tag===4&&W.stateNode.containerInfo===st.containerInfo&&W.stateNode.implementation===st.implementation){a(J,W.sibling),bt=u(W,st.children||[]),bt.return=J,J=bt;break t}else{a(J,W);break}else n(J,W);W=W.sibling}bt=Bt(st,J.mode,bt),bt.return=J,J=bt}return y(J);case b:return st=zo(st),Sn(J,W,st,bt)}if(Z(st))return oe(J,W,st,bt);if(j(st)){if(he=j(st),typeof he!="function")throw Error(s(150));return st=he.call(st),_e(J,W,st,bt)}if(typeof st.then=="function")return Sn(J,W,Mf(st),bt);if(st.$$typeof===L)return Sn(J,W,Ne(J,st),bt);Ef(J,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,W!==null&&W.tag===6?(a(J,W.sibling),bt=u(W,st),bt.return=J,J=bt):(a(J,W),bt=It(st,J.mode,bt),bt.return=J,J=bt),y(J)):a(J,W)}return function(J,W,st,bt){try{Kc=0;var he=Sn(J,W,st,bt);return Ul=null,he}catch(fe){if(fe===Ll||fe===yf)throw fe;var sn=Bi(29,fe,null,J.mode);return sn.lanes=bt,sn.return=J,sn}}}var Go=wg(!0),Dg=wg(!1),Hr=!1;function vp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ln&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Io(e),qc(e,null,a),n}return as(e,o,n,a),Io(e)}function Jc(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,wa(e,a)}}function yp(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Sp=!1;function $c(){if(Sp){var e=Ni;if(e!==null)throw e}}function tu(e,n,a,o){Sp=!1;var u=e.updateQueue;Hr=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,rt=V.next;V.next=null,y===null?d=rt:y.next=rt,y=V;var St=e.alternate;St!==null&&(St=St.updateQueue,R=St.lastBaseUpdate,R!==y&&(R===null?St.firstBaseUpdate=rt:R.next=rt,St.lastBaseUpdate=V))}if(d!==null){var At=u.baseState;y=0,St=rt=V=null,R=d;do{var lt=R.lane&-536870913,ht=lt!==R.lane;if(ht?(Ze&lt)===lt:(o&lt)===lt){lt!==0&&lt===Gn&&(Sp=!0),St!==null&&(St=St.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var oe=e,_e=R;lt=n;var Sn=a;switch(_e.tag){case 1:if(oe=_e.payload,typeof oe=="function"){At=oe.call(Sn,At,lt);break t}At=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=_e.payload,lt=typeof oe=="function"?oe.call(Sn,At,lt):oe,lt==null)break t;At=v({},At,lt);break t;case 2:Hr=!0}}lt=R.callback,lt!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[lt]:ht.push(lt))}else ht={lane:lt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},St===null?(rt=St=ht,V=At):St=St.next=ht,y|=lt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ht=R,R=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);St===null&&(V=At),u.baseState=V,u.firstBaseUpdate=rt,u.lastBaseUpdate=St,d===null&&(u.shared.lanes=0),qr|=y,e.lanes=y,e.memoizedState=At}}function Ng(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Lg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ng(a[e],n)}var Ol=F(null),bf=F(0);function Ug(e,n){e=cr,_t(bf,e),_t(Ol,n),cr=e|n.baseLanes}function Mp(){_t(bf,cr),_t(Ol,Ol.current)}function Ep(){cr=bf.current,q(Ol),q(bf)}var va=F(null),Va=null;function kr(e){var n=e.alternate;_t(jn,jn.current&1),_t(va,e),Va===null&&(n===null||Ol.current!==null||n.memoizedState!==null)&&(Va=e)}function bp(e){_t(jn,jn.current),_t(va,e),Va===null&&(Va=e)}function Og(e){e.tag===22?(_t(jn,jn.current),_t(va,e),Va===null&&(Va=e)):Xr()}function Xr(){_t(jn,jn.current),_t(va,va.current)}function xa(e){q(va),Va===e&&(Va=null),q(jn)}var jn=F(0);function Tf(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Dm(a)||Nm(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var er=0,Ue=null,xn=null,ii=null,Af=!1,Il=!1,Vo=!1,Rf=0,eu=0,Pl=null,QS=0;function Vn(){throw Error(s(321))}function Tp(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Pi(e[a],n[a]))return!1;return!0}function Ap(e,n,a,o,u,d){return er=d,Ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?__:Gp,Vo=!1,d=a(o,u),Vo=!1,Il&&(d=Pg(n,a,o,u)),Ig(e),d}function Ig(e){O.H=au;var n=xn!==null&&xn.next!==null;if(er=0,ii=xn=Ue=null,Af=!1,eu=0,Pl=null,n)throw Error(s(300));e===null||ai||(e=e.dependencies,e!==null&&Bo(e)&&(ai=!0))}function Pg(e,n,a,o){Ue=e;var u=0;do{if(Il&&(Pl=null),eu=0,Il=!1,25<=u)throw Error(s(301));if(u+=1,ii=xn=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=v_,d=n(a,o)}while(Il);return d}function JS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?nu(n):n,e=e.useState()[0],(xn!==null?xn.memoizedState:null)!==e&&(Ue.flags|=1024),n}function Rp(){var e=Rf!==0;return Rf=0,e}function Cp(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wp(e){if(Af){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Af=!1}er=0,ii=xn=Ue=null,Il=!1,eu=Rf=0,Pl=null}function ji(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ii===null?Ue.memoizedState=ii=e:ii=ii.next=e,ii}function Zn(){if(xn===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=xn.next;var n=ii===null?Ue.memoizedState:ii.next;if(n!==null)ii=n,xn=e;else{if(e===null)throw Ue.alternate===null?Error(s(467)):Error(s(310));xn=e,e={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},ii===null?Ue.memoizedState=ii=e:ii=ii.next=e}return ii}function Cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nu(e){var n=eu;return eu+=1,Pl===null&&(Pl=[]),e=Ag(Pl,e,n),n=Ue,(ii===null?n.memoizedState:ii.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?__:Gp),e}function wf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nu(e);if(e.$$typeof===L)return ti(e)}throw Error(s(438,String(e)))}function Dp(e){var n=null,a=Ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cf(),Ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=nt;return n.index++,a}function nr(e,n){return typeof n=="function"?n(e):n}function Df(e){var n=Zn();return Np(n,xn,e)}function Np(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var R=y=null,V=null,rt=n,St=!1;do{var At=rt.lane&-536870913;if(At!==rt.lane?(Ze&At)===At:(er&At)===At){var lt=rt.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),At===Gn&&(St=!0);else if((er&lt)===lt){rt=rt.next,lt===Gn&&(St=!0);continue}else At={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},V===null?(R=V=At,y=d):V=V.next=At,Ue.lanes|=lt,qr|=lt;At=rt.action,Vo&&a(d,At),d=rt.hasEagerState?rt.eagerState:a(d,At)}else lt={lane:At,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},V===null?(R=V=lt,y=d):V=V.next=lt,Ue.lanes|=At,qr|=At;rt=rt.next}while(rt!==null&&rt!==n);if(V===null?y=d:V.next=R,!Pi(d,e.memoizedState)&&(ai=!0,St&&(a=Ni,a!==null)))throw a;e.memoizedState=d,e.baseState=y,e.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Lp(e){var n=Zn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);Pi(d,n.memoizedState)||(ai=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Fg(e,n,a){var o=Ue,u=Zn(),d=Se;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Pi((xn||u).memoizedState,a);if(y&&(u.memoizedState=a,ai=!0),u=u.queue,Ip(Hg.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||ii!==null&&ii.memoizedState.tag&1){if(o.flags|=2048,Fl(9,{destroy:void 0},zg.bind(null,o,u,a,n),null),En===null)throw Error(s(349));d||(er&127)!==0||Bg(o,n,a)}return a}function Bg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ue.updateQueue,n===null?(n=Cf(),Ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function zg(e,n,a,o){n.value=a,n.getSnapshot=o,Gg(n)&&Vg(e)}function Hg(e,n,a){return a(function(){Gg(n)&&Vg(e)})}function Gg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Pi(e,a)}catch{return!0}}function Vg(e){var n=Ls(e,2);n!==null&&la(n,e,2)}function Up(e){var n=ji();if(typeof e=="function"){var a=e;if(e=a(),Vo){Xt(!0);try{a()}finally{Xt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},n}function kg(e,n,a,o){return e.baseState=a,Np(e,xn,typeof o=="function"?o:nr)}function $S(e,n,a,o,u){if(Uf(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Xg(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Xg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=O.T,y={};O.T=y;try{var R=a(u,o),V=O.S;V!==null&&V(y,R),Wg(e,n,R)}catch(rt){Op(e,n,rt)}finally{d!==null&&y.types!==null&&(d.types=y.types),O.T=d}}else try{d=a(u,o),Wg(e,n,d)}catch(rt){Op(e,n,rt)}}function Wg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Yg(e,n,o)},function(o){return Op(e,n,o)}):Yg(e,n,a)}function Yg(e,n,a){n.status="fulfilled",n.value=a,qg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Xg(e,a)))}function Op(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,qg(n),n=n.next;while(n!==o)}e.action=null}function qg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function jg(e,n){return n}function Zg(e,n){if(Se){var a=En.formState;if(a!==null){t:{var o=Ue;if(Se){if(De){e:{for(var u=De,d=vn;u.nodeType!==8;){if(!d){u=null;break e}if(u=ka(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){De=ka(u.nextSibling),o=u.data==="F!";break t}}yi(o)}o=!1}o&&(n=a[0])}}return a=ji(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jg,lastRenderedState:n},a.queue=o,a=p_.bind(null,Ue,o),o.dispatch=a,o=Up(!1),d=Hp.bind(null,Ue,!1,o.queue),o=ji(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=$S.bind(null,Ue,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Kg(e){var n=Zn();return Qg(n,xn,e)}function Qg(e,n,a){if(n=Np(e,n,jg)[0],e=Df(nr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=nu(n)}catch(y){throw y===Ll?yf:y}else o=n;n=Zn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Ue.flags|=2048,Fl(9,{destroy:void 0},tM.bind(null,u,a),null)),[o,d,e]}function tM(e,n){e.action=n}function Jg(e){var n=Zn(),a=xn;if(a!==null)return Qg(n,a,e);Zn(),n=n.memoizedState,a=Zn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Fl(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ue.updateQueue,n===null&&(n=Cf(),Ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function $g(){return Zn().memoizedState}function Nf(e,n,a,o){var u=ji();Ue.flags|=e,u.memoizedState=Fl(1|n,{destroy:void 0},a,o===void 0?null:o)}function Lf(e,n,a,o){var u=Zn();o=o===void 0?null:o;var d=u.memoizedState.inst;xn!==null&&o!==null&&Tp(o,xn.memoizedState.deps)?u.memoizedState=Fl(n,d,a,o):(Ue.flags|=e,u.memoizedState=Fl(1|n,d,a,o))}function t_(e,n){Nf(8390656,8,e,n)}function Ip(e,n){Lf(2048,8,e,n)}function eM(e){Ue.flags|=4;var n=Ue.updateQueue;if(n===null)n=Cf(),Ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function e_(e){var n=Zn().memoizedState;return eM({ref:n,nextImpl:e}),function(){if((ln&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function n_(e,n){return Lf(4,2,e,n)}function i_(e,n){return Lf(4,4,e,n)}function a_(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function s_(e,n,a){a=a!=null?a.concat([e]):null,Lf(4,4,a_.bind(null,n,e),a)}function Pp(){}function r_(e,n){var a=Zn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Tp(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function o_(e,n){var a=Zn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Tp(n,o[1]))return o[0];if(o=e(),Vo){Xt(!0);try{e()}finally{Xt(!1)}}return a.memoizedState=[o,n],o}function Fp(e,n,a){return a===void 0||(er&1073741824)!==0&&(Ze&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=lv(),Ue.lanes|=e,qr|=e,a)}function l_(e,n,a,o){return Pi(a,n)?a:Ol.current!==null?(e=Fp(e,a,o),Pi(e,n)||(ai=!0),e):(er&42)===0||(er&1073741824)!==0&&(Ze&261930)===0?(ai=!0,e.memoizedState=a):(e=lv(),Ue.lanes|=e,qr|=e,n)}function c_(e,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var y=O.T,R={};O.T=R,Hp(e,!1,n,a);try{var V=u(),rt=O.S;if(rt!==null&&rt(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var St=zr(V,o);iu(e,n,St,Ma(e))}else iu(e,n,o,Ma(e))}catch(At){iu(e,n,{then:function(){},status:"rejected",reason:At},Ma())}finally{B.p=d,y!==null&&R.types!==null&&(y.types=R.types),O.T=y}}function nM(){}function Bp(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=u_(e).queue;c_(e,u,n,ct,a===null?nM:function(){return f_(e),a(o)})}function u_(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function f_(e){var n=u_(e);n.next===null&&(n=e.alternate.memoizedState),iu(e,n.next.queue,{},Ma())}function zp(){return ti(yu)}function d_(){return Zn().memoizedState}function h_(){return Zn().memoizedState}function iM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ma();e=Gr(a);var o=Vr(n,e,a);o!==null&&(la(o,n,a),Jc(o,n,a)),n={cache:Di()},e.payload=n;return}n=n.return}}function aM(e,n,a){var o=Ma();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Uf(e)?m_(n,a):(a=Ns(e,n,a,o),a!==null&&(la(a,e,o),g_(a,n,o)))}function p_(e,n,a){var o=Ma();iu(e,n,a,o)}function iu(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uf(e))m_(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,Pi(R,y))return as(e,n,u,0),En===null&&Oo(),!1}catch{}if(a=Ns(e,n,u,o),a!==null)return la(a,e,o),g_(a,n,o),!0}return!1}function Hp(e,n,a,o){if(o={lane:2,revertLane:vm(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Uf(e)){if(n)throw Error(s(479))}else n=Ns(e,a,o,2),n!==null&&la(n,e,2)}function Uf(e){var n=e.alternate;return e===Ue||n!==null&&n===Ue}function m_(e,n){Il=Af=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function g_(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,wa(e,a)}}var au={readContext:ti,use:wf,useCallback:Vn,useContext:Vn,useEffect:Vn,useImperativeHandle:Vn,useLayoutEffect:Vn,useInsertionEffect:Vn,useMemo:Vn,useReducer:Vn,useRef:Vn,useState:Vn,useDebugValue:Vn,useDeferredValue:Vn,useTransition:Vn,useSyncExternalStore:Vn,useId:Vn,useHostTransitionStatus:Vn,useFormState:Vn,useActionState:Vn,useOptimistic:Vn,useMemoCache:Vn,useCacheRefresh:Vn};au.useEffectEvent=Vn;var __={readContext:ti,use:wf,useCallback:function(e,n){return ji().memoizedState=[e,n===void 0?null:n],e},useContext:ti,useEffect:t_,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nf(4194308,4,a_.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nf(4194308,4,e,n)},useInsertionEffect:function(e,n){Nf(4,2,e,n)},useMemo:function(e,n){var a=ji();n=n===void 0?null:n;var o=e();if(Vo){Xt(!0);try{e()}finally{Xt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ji();if(a!==void 0){var u=a(n);if(Vo){Xt(!0);try{a(n)}finally{Xt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=aM.bind(null,Ue,e),[o.memoizedState,e]},useRef:function(e){var n=ji();return e={current:e},n.memoizedState=e},useState:function(e){e=Up(e);var n=e.queue,a=p_.bind(null,Ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pp,useDeferredValue:function(e,n){var a=ji();return Fp(a,e,n)},useTransition:function(){var e=Up(!1);return e=c_.bind(null,Ue,e.queue,!0,!1),ji().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ue,u=ji();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),En===null)throw Error(s(349));(Ze&127)!==0||Bg(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,t_(Hg.bind(null,o,d,e),[e]),o.flags|=2048,Fl(9,{destroy:void 0},zg.bind(null,o,d,a,n),null),a},useId:function(){var e=ji(),n=En.identifierPrefix;if(Se){var a=we,o=Ae;a=(o&~(1<<32-Wt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rf++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=QS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:zp,useFormState:Zg,useActionState:Zg,useOptimistic:function(e){var n=ji();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hp.bind(null,Ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Dp,useCacheRefresh:function(){return ji().memoizedState=iM.bind(null,Ue)},useEffectEvent:function(e){var n=ji(),a={impl:e};return n.memoizedState=a,function(){if((ln&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Gp={readContext:ti,use:wf,useCallback:r_,useContext:ti,useEffect:Ip,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:Df,useRef:$g,useState:function(){return Df(nr)},useDebugValue:Pp,useDeferredValue:function(e,n){var a=Zn();return l_(a,xn.memoizedState,e,n)},useTransition:function(){var e=Df(nr)[0],n=Zn().memoizedState;return[typeof e=="boolean"?e:nu(e),n]},useSyncExternalStore:Fg,useId:d_,useHostTransitionStatus:zp,useFormState:Kg,useActionState:Kg,useOptimistic:function(e,n){var a=Zn();return kg(a,xn,e,n)},useMemoCache:Dp,useCacheRefresh:h_};Gp.useEffectEvent=e_;var v_={readContext:ti,use:wf,useCallback:r_,useContext:ti,useEffect:Ip,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:Lp,useRef:$g,useState:function(){return Lp(nr)},useDebugValue:Pp,useDeferredValue:function(e,n){var a=Zn();return xn===null?Fp(a,e,n):l_(a,xn.memoizedState,e,n)},useTransition:function(){var e=Lp(nr)[0],n=Zn().memoizedState;return[typeof e=="boolean"?e:nu(e),n]},useSyncExternalStore:Fg,useId:d_,useHostTransitionStatus:zp,useFormState:Jg,useActionState:Jg,useOptimistic:function(e,n){var a=Zn();return xn!==null?kg(a,xn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Dp,useCacheRefresh:h_};v_.useEffectEvent=e_;function Vp(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var kp={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Ma(),u=Gr(o);u.payload=n,a!=null&&(u.callback=a),n=Vr(e,u,o),n!==null&&(la(n,e,o),Jc(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Ma(),u=Gr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Vr(e,u,o),n!==null&&(la(n,e,o),Jc(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ma(),o=Gr(a);o.tag=2,n!=null&&(o.callback=n),n=Vr(e,o,a),n!==null&&(la(n,e,a),Jc(n,e,a))}};function x_(e,n,a,o,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!Ur(a,o)||!Ur(u,d):!0}function y_(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&kp.enqueueReplaceState(n,n.state,null)}function ko(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function S_(e){Uo(e)}function M_(e){console.error(e)}function E_(e){Uo(e)}function Of(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function b_(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Xp(e,n,a){return a=Gr(a),a.tag=3,a.payload={element:null},a.callback=function(){Of(e,n)},a}function T_(e){return e=Gr(e),e.tag=3,e}function A_(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){b_(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){b_(n,a,o),typeof u!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function sM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&za(n,a,u,!0),a=va.current,a!==null){switch(a.tag){case 31:case 13:return Va===null?Yf():a.alternate===null&&kn===0&&(kn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Sf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),mm(e,o,u)),!1;case 22:return a.flags|=65536,o===Sf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),mm(e,o,u)),!1}throw Error(s(435,a.tag))}return mm(e,o,u),Yf(),!1}if(Se)return n=va.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ia&&(e=Error(s(422),{cause:o}),Us(ae(e,a)))):(o!==Ia&&(n=Error(s(423),{cause:o}),Us(ae(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ae(o,a),u=Xp(e.stateNode,o,u),yp(e,u),kn!==4&&(kn=2)),!1;var d=Error(s(520),{cause:o});if(d=ae(d,a),du===null?du=[d]:du.push(d),kn!==4&&(kn=2),n===null)return!0;o=ae(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Xp(a.stateNode,o,e),yp(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(jr===null||!jr.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=T_(u),A_(u,e,a,o),yp(a,u),!1}a=a.return}while(a!==null);return!1}var Wp=Error(s(461)),ai=!1;function Li(e,n,a,o){n.child=e===null?Dg(n,null,a,o):Go(n,e.child,a,o)}function R_(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Ha(n),o=Ap(e,n,a,y,d,u),R=Rp(),e!==null&&!ai?(Cp(e,n,u),ir(e,n,u)):(Se&&R&&xi(n),n.flags|=1,Li(e,n,o,u),n.child)}function C_(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Dl(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,w_(e,n,d,o,u)):(e=Po(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!$p(e,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ur,a(y,o)&&e.ref===n.ref)return ir(e,n,u)}return n.flags|=1,e=ga(d,o),e.ref=n.ref,e.return=n,n.child=e}function w_(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Ur(d,o)&&e.ref===n.ref)if(ai=!1,n.pendingProps=o=d,$p(e,u))(e.flags&131072)!==0&&(ai=!0);else return n.lanes=e.lanes,ir(e,n,u)}return Yp(e,n,a,o,u)}function D_(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return N_(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xf(n,d!==null?d.cachePool:null),d!==null?Ug(n,d):Mp(),Og(n);else return o=n.lanes=536870912,N_(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(xf(n,d.cachePool),Ug(n,d),Xr(),n.memoizedState=null):(e!==null&&xf(n,null),Mp(),Xr());return Li(e,n,u,a),n.child}function su(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function N_(e,n,a,o,u){var d=gp();return d=d===null?null:{parent:me._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&xf(n,null),Mp(),Og(n),e!==null&&za(e,n,o,!0),n.childLanes=u,null}function If(e,n){return n=Ff({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function L_(e,n,a){return Go(n,e.child,null,a),e=If(n,n.pendingProps),e.flags|=2,xa(n),n.memoizedState=null,e}function rM(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=If(n,o),n.lanes=536870912,su(null,e);if(bp(n),(e=De)?(e=Xv(e,vn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ee!==null?{id:Ae,overflow:we}:null,retryLane:536870912,hydrationErrors:null},a=Kt(e),a.return=n,n.child=a,Ut=n,De=null)):e=null,e===null)throw yi(n);return n.lanes=536870912,null}return If(n,o)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(bp(n),u)if(n.flags&256)n.flags&=-257,n=L_(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(ai||za(e,n,a,!1),u=(a&e.childLanes)!==0,ai||u){if(o=En,o!==null&&(y=vs(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,Ls(e,y),la(o,e,y),Wp;Yf(),n=L_(e,n,a)}else e=d.treeContext,De=ka(y.nextSibling),Ut=n,Se=!0,ui=null,vn=!1,e!==null&&ss(n,e),n=If(n,o),n.flags|=4096;return n}return e=ga(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Pf(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Yp(e,n,a,o,u){return Ha(n),a=Ap(e,n,a,o,void 0,u),o=Rp(),e!==null&&!ai?(Cp(e,n,u),ir(e,n,u)):(Se&&o&&xi(n),n.flags|=1,Li(e,n,a,u),n.child)}function U_(e,n,a,o,u,d){return Ha(n),n.updateQueue=null,a=Pg(n,o,a,u),Ig(e),o=Rp(),e!==null&&!ai?(Cp(e,n,d),ir(e,n,d)):(Se&&o&&xi(n),n.flags|=1,Li(e,n,a,d),n.child)}function O_(e,n,a,o,u){if(Ha(n),n.stateNode===null){var d=Js,y=a.contextType;typeof y=="object"&&y!==null&&(d=ti(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=kp,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},vp(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?ti(y):Js,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Vp(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&kp.enqueueReplaceState(d,d.state,null),tu(n,o,d,u),$c(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var R=n.memoizedProps,V=ko(a,R);d.props=V;var rt=d.context,St=a.contextType;y=Js,typeof St=="object"&&St!==null&&(y=ti(St));var At=a.getDerivedStateFromProps;St=typeof At=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,St||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||rt!==y)&&y_(n,d,o,y),Hr=!1;var lt=n.memoizedState;d.state=lt,tu(n,o,d,u),$c(),rt=n.memoizedState,R||lt!==rt||Hr?(typeof At=="function"&&(Vp(n,a,At,o),rt=n.memoizedState),(V=Hr||x_(n,a,V,o,lt,rt,y))?(St||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),d.props=o,d.state=rt,d.context=y,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,xp(e,n),y=n.memoizedProps,St=ko(a,y),d.props=St,At=n.pendingProps,lt=d.context,rt=a.contextType,V=Js,typeof rt=="object"&&rt!==null&&(V=ti(rt)),R=a.getDerivedStateFromProps,(rt=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==At||lt!==V)&&y_(n,d,o,V),Hr=!1,lt=n.memoizedState,d.state=lt,tu(n,o,d,u),$c();var ht=n.memoizedState;y!==At||lt!==ht||Hr||e!==null&&e.dependencies!==null&&Bo(e.dependencies)?(typeof R=="function"&&(Vp(n,a,R,o),ht=n.memoizedState),(St=Hr||x_(n,a,St,o,lt,ht,V)||e!==null&&e.dependencies!==null&&Bo(e.dependencies))?(rt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ht,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ht,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),d.props=o,d.state=ht,d.context=V,o=St):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Pf(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Go(n,e.child,null,u),n.child=Go(n,null,a,u)):Li(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ir(e,n,u),e}function I_(e,n,a,o){return fi(),n.flags|=256,Li(e,n,a,o),n.child}var qp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jp(e){return{baseLanes:e,cachePool:bg()}}function Zp(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Sa),e}function P_(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(jn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(u?kr(n):Xr(),(e=De)?(e=Xv(e,vn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ee!==null?{id:Ae,overflow:we}:null,retryLane:536870912,hydrationErrors:null},a=Kt(e),a.return=n,n.child=a,Ut=n,De=null)):e=null,e===null)throw yi(n);return Nm(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Xr(),u=n.mode,R=Ff({mode:"hidden",children:R},u),o=at(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=jp(a),o.childLanes=Zp(e,y,a),n.memoizedState=qp,su(null,o)):(kr(n),Kp(n,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(d)n.flags&256?(kr(n),n.flags&=-257,n=Qp(e,n,a)):n.memoizedState!==null?(Xr(),n.child=e.child,n.flags|=128,n=null):(Xr(),R=o.fallback,u=n.mode,o=Ff({mode:"visible",children:o.children},u),R=at(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Go(n,e.child,null,a),o=n.child,o.memoizedState=jp(a),o.childLanes=Zp(e,y,a),n.memoizedState=qp,n=su(null,o));else if(kr(n),Nm(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var rt=y.dgst;y=rt,o=Error(s(419)),o.stack="",o.digest=y,Us({value:o,source:null,stack:null}),n=Qp(e,n,a)}else if(ai||za(e,n,a,!1),y=(a&e.childLanes)!==0,ai||y){if(y=En,y!==null&&(o=vs(y,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Ls(e,o),la(y,e,o),Wp;Dm(R)||Yf(),n=Qp(e,n,a)}else Dm(R)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,De=ka(R.nextSibling),Ut=n,Se=!0,ui=null,vn=!1,e!==null&&ss(n,e),n=Kp(n,o.children),n.flags|=4096);return n}return u?(Xr(),R=o.fallback,u=n.mode,V=e.child,rt=V.sibling,o=ga(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,rt!==null?R=ga(rt,R):(R=at(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,su(null,o),o=n.child,R=e.child.memoizedState,R===null?R=jp(a):(u=R.cachePool,u!==null?(V=me._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=bg(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Zp(e,y,a),n.memoizedState=qp,su(e.child,o)):(kr(n),a=e.child,e=a.sibling,a=ga(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Kp(e,n){return n=Ff({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ff(e,n){return e=Bi(22,e,null,n),e.lanes=0,e}function Qp(e,n,a){return Go(n,e.child,null,a),e=Kp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function F_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Nl(e.return,n,a)}function Jp(e,n,a,o,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function B_(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=jn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,_t(jn,y),Li(e,n,o,a),o=Se?On:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&F_(e,a,n);else if(e.tag===19)F_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Tf(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Jp(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Tf(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Jp(n,!0,a,null,d,o);break;case"together":Jp(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ir(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),qr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(za(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ga(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ga(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function $p(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Bo(e)))}function oM(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ba(n,me,e.memoizedState.cache),fi();break;case 27:case 5:ce(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bp(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(kr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?P_(e,n,a):(kr(n),e=ir(e,n,a),e!==null?e.sibling:null);kr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(za(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return B_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(jn,jn.current),o)break;return null;case 22:return n.lanes=0,D_(e,n,a,n.pendingProps);case 24:Ba(n,me,e.memoizedState.cache)}return ir(e,n,a)}function z_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ai=!0;else{if(!$p(e,a)&&(n.flags&128)===0)return ai=!1,oM(e,n,a);ai=(e.flags&131072)!==0}else ai=!1,Se&&(n.flags&1048576)!==0&&Oa(n,On,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=zo(n.elementType),n.type=e,typeof e=="function")Dl(e)?(o=ko(e,o),n.tag=1,n=O_(null,n,e,o,a)):(n.tag=0,n=Yp(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=R_(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=C_(null,n,e,o,a);break t}}throw n=tt(e)||e,Error(s(306,n,""))}}return n;case 0:return Yp(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ko(o,n.pendingProps),O_(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,xp(e,n),tu(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ba(n,me,o),o!==d.cache&&$s(n,[me],a,!0),$c(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=I_(e,n,o,a);break t}else if(o!==u){u=ae(Error(s(424)),n),Us(u),n=I_(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,De=ka(e.firstChild),Ut=n,Se=!0,ui=null,vn=!0,a=Dg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fi(),o===u){n=ir(e,n,a);break t}Li(e,n,o,a)}n=n.child}return n;case 26:return Pf(e,n),e===null?(a=Kv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,o=$f(it.current).createElement(a),o[Qe]=n,o[pn]=e,Ui(o,a,e),Y(o),n.stateNode=o):n.memoizedState=Kv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ce(n),e===null&&Se&&(o=n.stateNode=qv(n.type,n.pendingProps,it.current),Ut=n,vn=!0,u=De,Jr(n.type)?(Lm=u,De=ka(o.firstChild)):De=u),Li(e,n,n.pendingProps.children,a),Pf(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((u=o=De)&&(o=FM(o,n.type,n.pendingProps,vn),o!==null?(n.stateNode=o,Ut=n,De=ka(o.firstChild),vn=!1,u=!0):u=!1),u||yi(n)),ce(n),u=n.type,d=n.pendingProps,y=e!==null?e.memoizedProps:null,o=d.children,Rm(u,d)?o=null:y!==null&&Rm(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Ap(e,n,JS,null,null,a),yu._currentValue=u),Pf(e,n),Li(e,n,o,a),n.child;case 6:return e===null&&Se&&((e=a=De)&&(a=BM(a,n.pendingProps,vn),a!==null?(n.stateNode=a,Ut=n,De=null,e=!0):e=!1),e||yi(n)),null;case 13:return P_(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Go(n,null,o,a):Li(e,n,o,a),n.child;case 11:return R_(e,n,n.type,n.pendingProps,a);case 7:return Li(e,n,n.pendingProps,a),n.child;case 8:return Li(e,n,n.pendingProps.children,a),n.child;case 12:return Li(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),Li(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ha(n),u=ti(u),o=o(u),n.flags|=1,Li(e,n,o,a),n.child;case 14:return C_(e,n,n.type,n.pendingProps,a);case 15:return w_(e,n,n.type,n.pendingProps,a);case 19:return B_(e,n,a);case 31:return rM(e,n,a);case 22:return D_(e,n,a,n.pendingProps);case 24:return Ha(n),o=ti(me),e===null?(u=gp(),u===null&&(u=En,d=Di(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},vp(n),Ba(n,me,u)):((e.lanes&a)!==0&&(xp(e,n),tu(n,null,null,a),$c()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,me,o)):(o=d.cache,Ba(n,me,o),o!==u.cache&&$s(n,[me],a,!0))),Li(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ar(e){e.flags|=4}function tm(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(dv())e.flags|=8192;else throw Ho=Sf,_p}else e.flags&=-16777217}function H_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ex(n))if(dv())e.flags|=8192;else throw Ho=Sf,_p}function Bf(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Gl|=n)}function ru(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function lM(e,n,a){var o=n.pendingProps;switch(Yi(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(n),null;case 1:return Dn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),_a(me),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wn(n)?ar(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ia())),Dn(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ar(n),d!==null?(Dn(n),H_(n,d)):(Dn(n),tm(n,u,null,o,a))):d?d!==e.memoizedState?(ar(n),Dn(n),H_(n,d)):(Dn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ar(n),Dn(n),tm(n,u,e,o,a)),null;case 27:if(kt(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ar(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Dn(n),null}e=Ot.current,wn(n)?Fr(n):(e=qv(u,o,a),n.stateNode=e,ar(n))}return Dn(n),null;case 5:if(kt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ar(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Dn(n),null}if(d=Ot.current,wn(n))Fr(n);else{var y=$f(it.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[Qe]=n,d[pn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;t:switch(Ui(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ar(n)}}return Dn(n),tm(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ar(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,wn(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Ut,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Qe]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Pv(e.nodeValue,a)),e||yi(n,!0)}else e=$f(e).createTextNode(o),e[Qe]=n,n.stateNode=e}return Dn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=wn(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qe]=n}else fi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Dn(n),e=!1}else a=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(xa(n),n):(xa(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Dn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=wn(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Qe]=n}else fi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Dn(n),u=!1}else u=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(xa(n),n):(xa(n),null)}return xa(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bf(n,n.updateQueue),Dn(n),null);case 4:return Qt(),e===null&&Mm(n.stateNode.containerInfo),Dn(n),null;case 10:return _a(n.type),Dn(n),null;case 19:if(q(jn),o=n.memoizedState,o===null)return Dn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)ru(o,!1);else{if(kn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Tf(e),d!==null){for(n.flags|=128,ru(o,!1),e=d.updateQueue,n.updateQueue=e,Bf(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Zc(a,e),a=a.sibling;return _t(jn,jn.current&1|2),Se&&_n(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>kf&&(n.flags|=128,u=!0,ru(o,!1),n.lanes=4194304)}else{if(!u)if(e=Tf(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Bf(n,e),ru(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Se)return Dn(n),null}else 2*T()-o.renderingStartTime>kf&&a!==536870912&&(n.flags|=128,u=!0,ru(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=jn.current,_t(jn,u?a&1|2:a&1),Se&&_n(n,o.treeForkCount),e):(Dn(n),null);case 22:case 23:return xa(n),Ep(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Dn(n),n.subtreeFlags&6&&(n.flags|=8192)):Dn(n),a=n.updateQueue,a!==null&&Bf(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(tr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(me),Dn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cM(e,n){switch(Yi(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _a(me),Qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 31:if(n.memoizedState!==null){if(xa(n),n.alternate===null)throw Error(s(340));fi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(xa(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(jn),null;case 4:return Qt(),null;case 10:return _a(n.type),null;case 22:case 23:return xa(n),Ep(),e!==null&&q(tr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _a(me),null;case 25:return null;default:return null}}function G_(e,n){switch(Yi(n),n.tag){case 3:_a(me),Qt();break;case 26:case 27:case 5:kt(n);break;case 4:Qt();break;case 31:n.memoizedState!==null&&xa(n);break;case 13:xa(n);break;case 19:q(jn);break;case 10:_a(n.type);break;case 22:case 23:xa(n),Ep(),e!==null&&q(tr);break;case 24:_a(me)}}function ou(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){hn(n,n.return,R)}}function Wr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var V=a,rt=R;try{rt()}catch(St){hn(u,V,St)}}}o=o.next}while(o!==d)}}catch(St){hn(n,n.return,St)}}function V_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Lg(n,a)}catch(o){hn(e,e.return,o)}}}function k_(e,n,a){a.props=ko(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){hn(e,n,o)}}function lu(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){hn(e,n,u)}}function Ps(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){hn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){hn(e,n,u)}else a.current=null}function X_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){hn(e,e.return,u)}}function em(e,n,a){try{var o=e.stateNode;NM(o,e.type,a,n),o[pn]=n}catch(u){hn(e,e.return,u)}}function W_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jr(e.type)||e.tag===4}function nm(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||W_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function im(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=vi));else if(o!==4&&(o===27&&Jr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(im(e,n,a),e=e.sibling;e!==null;)im(e,n,a),e=e.sibling}function zf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Jr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zf(e,n,a),e=e.sibling;e!==null;)zf(e,n,a),e=e.sibling}function Y_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ui(n,o,a),n[Qe]=e,n[pn]=a}catch(d){hn(e,e.return,d)}}var sr=!1,si=!1,am=!1,q_=typeof WeakSet=="function"?WeakSet:Set,Si=null;function uM(e,n){if(e=e.containerInfo,Tm=rd,e=No(e),Or(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var y=0,R=-1,V=-1,rt=0,St=0,At=e,lt=null;e:for(;;){for(var ht;At!==a||u!==0&&At.nodeType!==3||(R=y+u),At!==d||o!==0&&At.nodeType!==3||(V=y+o),At.nodeType===3&&(y+=At.nodeValue.length),(ht=At.firstChild)!==null;)lt=At,At=ht;for(;;){if(At===e)break e;if(lt===a&&++rt===u&&(R=y),lt===d&&++St===o&&(V=y),(ht=At.nextSibling)!==null)break;At=lt,lt=At.parentNode}At=ht}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Am={focusedElem:e,selectionRange:a},rd=!1,Si=n;Si!==null;)if(n=Si,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Si=e;else for(;Si!==null;){switch(n=Si,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var oe=ko(a.type,u);e=o.getSnapshotBeforeUpdate(oe,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(_e){hn(a,a.return,_e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)wm(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Si=e;break}Si=n.return}}function j_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:or(e,a),o&4&&ou(5,a);break;case 1:if(or(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){hn(a,a.return,y)}else{var u=ko(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){hn(a,a.return,y)}}o&64&&V_(a),o&512&&lu(a,a.return);break;case 3:if(or(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lg(e,n)}catch(y){hn(a,a.return,y)}}break;case 27:n===null&&o&4&&Y_(a);case 26:case 5:or(e,a),n===null&&o&4&&X_(a),o&512&&lu(a,a.return);break;case 12:or(e,a);break;case 31:or(e,a),o&4&&Q_(e,a);break;case 13:or(e,a),o&4&&J_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xM.bind(null,a),zM(e,a))));break;case 22:if(o=a.memoizedState!==null||sr,!o){n=n!==null&&n.memoizedState!==null||si,u=sr;var d=si;sr=o,(si=n)&&!d?lr(e,a,(a.subtreeFlags&8772)!==0):or(e,a),sr=u,si=d}break;case 30:break;default:or(e,a)}}function Z_(e){var n=e.alternate;n!==null&&(e.alternate=null,Z_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&yo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var In=null,aa=!1;function rr(e,n,a){for(a=a.child;a!==null;)K_(e,n,a),a=a.sibling}function K_(e,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Nt,a)}catch{}switch(a.tag){case 26:si||Ps(a,n),rr(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:si||Ps(a,n);var o=In,u=aa;Jr(a.type)&&(In=a.stateNode,aa=!1),rr(e,n,a),_u(a.stateNode),In=o,aa=u;break;case 5:si||Ps(a,n);case 6:if(o=In,u=aa,In=null,rr(e,n,a),In=o,aa=u,In!==null)if(aa)try{(In.nodeType===9?In.body:In.nodeName==="HTML"?In.ownerDocument.body:In).removeChild(a.stateNode)}catch(d){hn(a,n,d)}else try{In.removeChild(a.stateNode)}catch(d){hn(a,n,d)}break;case 18:In!==null&&(aa?(e=In,Vv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Zl(e)):Vv(In,a.stateNode));break;case 4:o=In,u=aa,In=a.stateNode.containerInfo,aa=!0,rr(e,n,a),In=o,aa=u;break;case 0:case 11:case 14:case 15:Wr(2,a,n),si||Wr(4,a,n),rr(e,n,a);break;case 1:si||(Ps(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&k_(a,n,o)),rr(e,n,a);break;case 21:rr(e,n,a);break;case 22:si=(o=si)||a.memoizedState!==null,rr(e,n,a),si=o;break;default:rr(e,n,a)}}function Q_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zl(e)}catch(a){hn(n,n.return,a)}}}function J_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zl(e)}catch(a){hn(n,n.return,a)}}function fM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new q_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new q_),n;default:throw Error(s(435,e.tag))}}function Hf(e,n){var a=fM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=yM.bind(null,e,o);o.then(u,u)}})}function sa(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,y=n,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(Jr(R.type)){In=R.stateNode,aa=!1;break t}break;case 5:In=R.stateNode,aa=!1;break t;case 3:case 4:In=R.stateNode.containerInfo,aa=!0;break t}R=R.return}if(In===null)throw Error(s(160));K_(d,y,u),In=null,aa=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$_(n,e),n=n.sibling}var rs=null;function $_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sa(n,e),ra(e),o&4&&(Wr(3,e,e.return),ou(3,e),Wr(5,e,e.return));break;case 1:sa(n,e),ra(e),o&512&&(si||a===null||Ps(a,a.return)),o&64&&sr&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=rs;if(sa(n,e),ra(e),o&512&&(si||a===null||Ps(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[zn]||d[Qe]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Ui(d,o,a),d[Qe]=e,Y(d),o=d;break t;case"link":var y=$v("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break e}}d=u.createElement(o),Ui(d,o,a),u.head.appendChild(d);break;case"meta":if(y=$v("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break e}}d=u.createElement(o),Ui(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[Qe]=e,Y(d),o=d}e.stateNode=o}else tx(u,e.type,e.stateNode);else e.stateNode=Jv(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?tx(u,e.type,e.stateNode):Jv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&em(e,e.memoizedProps,a.memoizedProps)}break;case 27:sa(n,e),ra(e),o&512&&(si||a===null||Ps(a,a.return)),a!==null&&o&4&&em(e,e.memoizedProps,a.memoizedProps);break;case 5:if(sa(n,e),ra(e),o&512&&(si||a===null||Ps(a,a.return)),e.flags&32){u=e.stateNode;try{ci(u,"")}catch(oe){hn(e,e.return,oe)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,em(e,u,a!==null?a.memoizedProps:u)),o&1024&&(am=!0);break;case 6:if(sa(n,e),ra(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(oe){hn(e,e.return,oe)}}break;case 3:if(nd=null,u=rs,rs=td(n.containerInfo),sa(n,e),rs=u,ra(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Zl(n.containerInfo)}catch(oe){hn(e,e.return,oe)}am&&(am=!1,tv(e));break;case 4:o=rs,rs=td(e.stateNode.containerInfo),sa(n,e),ra(e),rs=o;break;case 12:sa(n,e),ra(e);break;case 31:sa(n,e),ra(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hf(e,o)));break;case 13:sa(n,e),ra(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vf=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hf(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,rt=sr,St=si;if(sr=rt||u,si=St||V,sa(n,e),si=St,sr=rt,ra(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||sr||si||Xo(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=V.stateNode;var At=V.memoizedProps.style,lt=At!=null&&At.hasOwnProperty("display")?At.display:null;R.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(oe){hn(V,V.return,oe)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(oe){hn(V,V.return,oe)}}}else if(n.tag===18){if(a===null){V=n;try{var ht=V.stateNode;u?kv(ht,!0):kv(V.stateNode,!1)}catch(oe){hn(V,V.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Hf(e,a))));break;case 19:sa(n,e),ra(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hf(e,o)));break;case 30:break;case 21:break;default:sa(n,e),ra(e)}}function ra(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(W_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=nm(e);zf(e,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(ci(y,""),a.flags&=-33);var R=nm(e);zf(e,R,y);break;case 3:case 4:var V=a.stateNode.containerInfo,rt=nm(e);im(e,rt,V);break;default:throw Error(s(161))}}catch(St){hn(e,e.return,St)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function tv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;tv(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function or(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)j_(e,n.alternate,n),n=n.sibling}function Xo(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Wr(4,n,n.return),Xo(n);break;case 1:Ps(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&k_(n,n.return,a),Xo(n);break;case 27:_u(n.stateNode);case 26:case 5:Ps(n,n.return),Xo(n);break;case 22:n.memoizedState===null&&Xo(n);break;case 30:Xo(n);break;default:Xo(n)}e=e.sibling}}function lr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:lr(u,d,a),ou(4,d);break;case 1:if(lr(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){hn(o,o.return,rt)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Ng(V[u],R)}catch(rt){hn(o,o.return,rt)}}a&&y&64&&V_(d),lu(d,d.return);break;case 27:Y_(d);case 26:case 5:lr(u,d,a),a&&o===null&&y&4&&X_(d),lu(d,d.return);break;case 12:lr(u,d,a);break;case 31:lr(u,d,a),a&&y&4&&Q_(u,d);break;case 13:lr(u,d,a),a&&y&4&&J_(u,d);break;case 22:d.memoizedState===null&&lr(u,d,a),lu(d,d.return);break;case 30:break;default:lr(u,d,a)}n=n.sibling}}function sm(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qi(a))}function rm(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qi(e))}function os(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ev(e,n,a,o),n=n.sibling}function ev(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:os(e,n,a,o),u&2048&&ou(9,n);break;case 1:os(e,n,a,o);break;case 3:os(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qi(e)));break;case 12:if(u&2048){os(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){hn(n,n.return,V)}}else os(e,n,a,o);break;case 31:os(e,n,a,o);break;case 13:os(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?os(e,n,a,o):cu(e,n):d._visibility&2?os(e,n,a,o):(d._visibility|=2,Bl(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&sm(y,n);break;case 24:os(e,n,a,o),u&2048&&rm(n.alternate,n);break;default:os(e,n,a,o)}}function Bl(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,y=n,R=a,V=o,rt=y.flags;switch(y.tag){case 0:case 11:case 15:Bl(d,y,R,V,u),ou(8,y);break;case 23:break;case 22:var St=y.stateNode;y.memoizedState!==null?St._visibility&2?Bl(d,y,R,V,u):cu(d,y):(St._visibility|=2,Bl(d,y,R,V,u)),u&&rt&2048&&sm(y.alternate,y);break;case 24:Bl(d,y,R,V,u),u&&rt&2048&&rm(y.alternate,y);break;default:Bl(d,y,R,V,u)}n=n.sibling}}function cu(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:cu(a,o),u&2048&&sm(o.alternate,o);break;case 24:cu(a,o),u&2048&&rm(o.alternate,o);break;default:cu(a,o)}n=n.sibling}}var uu=8192;function zl(e,n,a){if(e.subtreeFlags&uu)for(e=e.child;e!==null;)nv(e,n,a),e=e.sibling}function nv(e,n,a){switch(e.tag){case 26:zl(e,n,a),e.flags&uu&&e.memoizedState!==null&&QM(a,rs,e.memoizedState,e.memoizedProps);break;case 5:zl(e,n,a);break;case 3:case 4:var o=rs;rs=td(e.stateNode.containerInfo),zl(e,n,a),rs=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=uu,uu=16777216,zl(e,n,a),uu=o):zl(e,n,a));break;default:zl(e,n,a)}}function iv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Si=o,sv(o,e)}iv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)av(e),e=e.sibling}function av(e){switch(e.tag){case 0:case 11:case 15:fu(e),e.flags&2048&&Wr(9,e,e.return);break;case 3:fu(e);break;case 12:fu(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gf(e)):fu(e);break;default:fu(e)}}function Gf(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Si=o,sv(o,e)}iv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Wr(8,n,n.return),Gf(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gf(n));break;default:Gf(n)}e=e.sibling}}function sv(e,n){for(;Si!==null;){var a=Si;switch(a.tag){case 0:case 11:case 15:Wr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qi(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Si=o;else t:for(a=e;Si!==null;){o=Si;var u=o.sibling,d=o.return;if(Z_(o),o===a){Si=null;break t}if(u!==null){u.return=d,Si=u;break t}Si=d}}}var dM={getCacheForType:function(e){var n=ti(me),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ti(me).controller.signal}},hM=typeof WeakMap=="function"?WeakMap:Map,ln=0,En=null,Ye=null,Ze=0,dn=0,ya=null,Yr=!1,Hl=!1,om=!1,cr=0,kn=0,qr=0,Wo=0,lm=0,Sa=0,Gl=0,du=null,oa=null,cm=!1,Vf=0,rv=0,kf=1/0,Xf=null,jr=null,di=0,Zr=null,Vl=null,ur=0,um=0,fm=null,ov=null,hu=0,dm=null;function Ma(){return(ln&2)!==0&&Ze!==0?Ze&-Ze:O.T!==null?vm():Xi()}function lv(){if(Sa===0)if((Ze&536870912)===0||Se){var e=xt;xt<<=1,(xt&3932160)===0&&(xt=262144),Sa=e}else Sa=536870912;return e=va.current,e!==null&&(e.flags|=32),Sa}function la(e,n,a){(e===En&&(dn===2||dn===9)||e.cancelPendingCommit!==null)&&(kl(e,0),Kr(e,Ze,Sa,!1)),ee(e,a),((ln&2)===0||e!==En)&&(e===En&&((ln&2)===0&&(Wo|=a),kn===4&&Kr(e,Ze,Sa,!1)),Fs(e))}function cv(e,n,a){if((ln&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||mt(e,n),u=o?gM(e,n):pm(e,n,!0),d=o;do{if(u===0){Hl&&!o&&Kr(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!pM(a)){u=pm(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=du;var V=R.current.memoizedState.isDehydrated;if(V&&(kl(R,y).flags|=256),y=pm(R,y,!1),y!==2){if(om&&!V){R.errorRecoveryDisabledLanes|=d,Wo|=d,u=4;break t}d=oa,oa=u,d!==null&&(oa===null?oa=d:oa.push.apply(oa,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){kl(e,0),Kr(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Kr(o,n,Sa,!Yr);break t;case 2:oa=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vf+300-T(),10<u)){if(Kr(o,n,Sa,!Yr),ut(o,0,!0)!==0)break t;ur=n,o.timeoutHandle=Hv(uv.bind(null,o,a,oa,Xf,cm,n,Sa,Wo,Gl,Yr,d,"Throttled",-0,0),u);break t}uv(o,a,oa,Xf,cm,n,Sa,Wo,Gl,Yr,d,null,-0,0)}}break}while(!0);Fs(e)}function uv(e,n,a,o,u,d,y,R,V,rt,St,At,lt,ht){if(e.timeoutHandle=-1,At=n.subtreeFlags,At&8192||(At&16785408)===16785408){At={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vi},nv(n,d,At);var oe=(d&62914560)===d?Vf-T():(d&4194048)===d?rv-T():0;if(oe=JM(At,oe),oe!==null){ur=d,e.cancelPendingCommit=oe(vv.bind(null,e,n,d,a,o,u,y,R,V,St,At,null,lt,ht)),Kr(e,d,y,!rt);return}}vv(e,n,d,a,o,u,y,R,V)}function pM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Pi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Kr(e,n,a,o){n&=~lm,n&=~Wo,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Wt(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&Ca(e,a,n)}function Wf(){return(ln&6)===0?(pu(0),!1):!0}function hm(){if(Ye!==null){if(dn===0)var e=Ye.return;else e=Ye,Fa=Os=null,wp(e),Ul=null,Kc=0,e=Ye;for(;e!==null;)G_(e.alternate,e),e=e.return;Ye=null}}function kl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,OM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ur=0,hm(),En=e,Ye=a=ga(e.current,null),Ze=n,dn=0,ya=null,Yr=!1,Hl=mt(e,n),om=!1,Gl=Sa=lm=Wo=qr=kn=0,oa=du=null,cm=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Wt(o),d=1<<u;n|=e[u],o&=~d}return cr=n,Oo(),a}function fv(e,n){Ue=null,O.H=au,n===Ll||n===yf?(n=Rg(),dn=3):n===_p?(n=Rg(),dn=4):dn=n===Wp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ya=n,Ye===null&&(kn=1,Of(e,ae(n,e.current)))}function dv(){var e=va.current;return e===null?!0:(Ze&4194048)===Ze?Va===null:(Ze&62914560)===Ze||(Ze&536870912)!==0?e===Va:!1}function hv(){var e=O.H;return O.H=au,e===null?au:e}function pv(){var e=O.A;return O.A=dM,e}function Yf(){kn=4,Yr||(Ze&4194048)!==Ze&&va.current!==null||(Hl=!0),(qr&134217727)===0&&(Wo&134217727)===0||En===null||Kr(En,Ze,Sa,!1)}function pm(e,n,a){var o=ln;ln|=2;var u=hv(),d=pv();(En!==e||Ze!==n)&&(Xf=null,kl(e,n)),n=!1;var y=kn;t:do try{if(dn!==0&&Ye!==null){var R=Ye,V=ya;switch(dn){case 8:hm(),y=6;break t;case 3:case 2:case 9:case 6:va.current===null&&(n=!0);var rt=dn;if(dn=0,ya=null,Xl(e,R,V,rt),a&&Hl){y=0;break t}break;default:rt=dn,dn=0,ya=null,Xl(e,R,V,rt)}}mM(),y=kn;break}catch(St){fv(e,St)}while(!0);return n&&e.shellSuspendCounter++,Fa=Os=null,ln=o,O.H=u,O.A=d,Ye===null&&(En=null,Ze=0,Oo()),y}function mM(){for(;Ye!==null;)mv(Ye)}function gM(e,n){var a=ln;ln|=2;var o=hv(),u=pv();En!==e||Ze!==n?(Xf=null,kf=T()+500,kl(e,n)):Hl=mt(e,n);t:do try{if(dn!==0&&Ye!==null){n=Ye;var d=ya;e:switch(dn){case 1:dn=0,ya=null,Xl(e,n,d,1);break;case 2:case 9:if(Tg(d)){dn=0,ya=null,gv(n);break}n=function(){dn!==2&&dn!==9||En!==e||(dn=7),Fs(e)},d.then(n,n);break t;case 3:dn=7;break t;case 4:dn=5;break t;case 7:Tg(d)?(dn=0,ya=null,gv(n)):(dn=0,ya=null,Xl(e,n,d,7));break;case 5:var y=null;switch(Ye.tag){case 26:y=Ye.memoizedState;case 5:case 27:var R=Ye;if(y?ex(y):R.stateNode.complete){dn=0,ya=null;var V=R.sibling;if(V!==null)Ye=V;else{var rt=R.return;rt!==null?(Ye=rt,qf(rt)):Ye=null}break e}}dn=0,ya=null,Xl(e,n,d,5);break;case 6:dn=0,ya=null,Xl(e,n,d,6);break;case 8:hm(),kn=6;break t;default:throw Error(s(462))}}_M();break}catch(St){fv(e,St)}while(!0);return Fa=Os=null,O.H=o,O.A=u,ln=a,Ye!==null?0:(En=null,Ze=0,Oo(),kn)}function _M(){for(;Ye!==null&&!le();)mv(Ye)}function mv(e){var n=z_(e.alternate,e,cr);e.memoizedProps=e.pendingProps,n===null?qf(e):Ye=n}function gv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=U_(a,n,n.pendingProps,n.type,void 0,Ze);break;case 11:n=U_(a,n,n.pendingProps,n.type.render,n.ref,Ze);break;case 5:wp(n);default:G_(a,n),n=Ye=Zc(n,cr),n=z_(a,n,cr)}e.memoizedProps=e.pendingProps,n===null?qf(e):Ye=n}function Xl(e,n,a,o){Fa=Os=null,wp(n),Ul=null,Kc=0;var u=n.return;try{if(sM(e,u,n,a,Ze)){kn=1,Of(e,ae(a,e.current)),Ye=null;return}}catch(d){if(u!==null)throw Ye=u,d;kn=1,Of(e,ae(a,e.current)),Ye=null;return}n.flags&32768?(Se||o===1?e=!0:Hl||(Ze&536870912)!==0?e=!1:(Yr=e=!0,(o===2||o===9||o===3||o===6)&&(o=va.current,o!==null&&o.tag===13&&(o.flags|=16384))),_v(n,e)):qf(n)}function qf(e){var n=e;do{if((n.flags&32768)!==0){_v(n,Yr);return}e=n.return;var a=lM(n.alternate,n,cr);if(a!==null){Ye=a;return}if(n=n.sibling,n!==null){Ye=n;return}Ye=n=e}while(n!==null);kn===0&&(kn=5)}function _v(e,n){do{var a=cM(e.alternate,e);if(a!==null){a.flags&=32767,Ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=a}while(e!==null);kn=6,Ye=null}function vv(e,n,a,o,u,d,y,R,V){e.cancelPendingCommit=null;do jf();while(di!==0);if((ln&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=wl,Yn(e,a,d,y,R,V),e===En&&(Ye=En=null,Ze=0),Vl=n,Zr=e,ur=a,um=d,fm=u,ov=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,SM(gt,function(){return Ev(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=B.p,B.p=2,y=ln,ln|=4;try{uM(e,n,a)}finally{ln=y,B.p=u,O.T=o}}di=1,xv(),yv(),Sv()}}function xv(){if(di===1){di=0;var e=Zr,n=Vl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var u=ln;ln|=4;try{$_(n,e);var d=Am,y=No(e.containerInfo),R=d.focusedElem,V=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&Vc(R.ownerDocument.documentElement,R)){if(V!==null&&Or(R)){var rt=V.start,St=V.end;if(St===void 0&&(St=rt),"selectionStart"in R)R.selectionStart=rt,R.selectionEnd=Math.min(St,R.value.length);else{var At=R.ownerDocument||document,lt=At&&At.defaultView||window;if(lt.getSelection){var ht=lt.getSelection(),oe=R.textContent.length,_e=Math.min(V.start,oe),Sn=V.end===void 0?_e:Math.min(V.end,oe);!ht.extend&&_e>Sn&&(y=Sn,Sn=_e,_e=y);var J=Gc(R,_e),W=Gc(R,Sn);if(J&&W&&(ht.rangeCount!==1||ht.anchorNode!==J.node||ht.anchorOffset!==J.offset||ht.focusNode!==W.node||ht.focusOffset!==W.offset)){var st=At.createRange();st.setStart(J.node,J.offset),ht.removeAllRanges(),_e>Sn?(ht.addRange(st),ht.extend(W.node,W.offset)):(st.setEnd(W.node,W.offset),ht.addRange(st))}}}}for(At=[],ht=R;ht=ht.parentNode;)ht.nodeType===1&&At.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<At.length;R++){var bt=At[R];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}rd=!!Tm,Am=Tm=null}finally{ln=u,B.p=o,O.T=a}}e.current=n,di=2}}function yv(){if(di===2){di=0;var e=Zr,n=Vl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var u=ln;ln|=4;try{j_(e,n.alternate,n)}finally{ln=u,B.p=o,O.T=a}}di=3}}function Sv(){if(di===4||di===3){di=0,P();var e=Zr,n=Vl,a=ur,o=ov;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?di=5:(di=0,Vl=Zr=null,Mv(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(jr=null),Qn(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Nt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=B.p,B.p=2,O.T=null;try{for(var d=e.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{O.T=n,B.p=u}}(ur&3)!==0&&jf(),Fs(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===dm?hu++:(hu=0,dm=e):hu=0,pu(0)}}function Mv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qi(n)))}function jf(){return xv(),yv(),Sv(),Ev()}function Ev(){if(di!==5)return!1;var e=Zr,n=um;um=0;var a=Qn(ur),o=O.T,u=B.p;try{B.p=32>a?32:a,O.T=null,a=fm,fm=null;var d=Zr,y=ur;if(di=0,Vl=Zr=null,ur=0,(ln&6)!==0)throw Error(s(331));var R=ln;if(ln|=4,av(d.current),ev(d,d.current,y,a),ln=R,pu(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Nt,d)}catch{}return!0}finally{B.p=u,O.T=o,Mv(e,n)}}function bv(e,n,a){n=ae(a,n),n=Xp(e.stateNode,n,2),e=Vr(e,n,2),e!==null&&(ee(e,2),Fs(e))}function hn(e,n,a){if(e.tag===3)bv(e,e,a);else for(;n!==null;){if(n.tag===3){bv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(jr===null||!jr.has(o))){e=ae(a,e),a=T_(2),o=Vr(n,a,2),o!==null&&(A_(a,o,n,e),ee(o,2),Fs(o));break}}n=n.return}}function mm(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new hM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(om=!0,u.add(a),e=vM.bind(null,e,n,a),n.then(e,e))}function vM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,En===e&&(Ze&a)===a&&(kn===4||kn===3&&(Ze&62914560)===Ze&&300>T()-Vf?(ln&2)===0&&kl(e,0):lm|=a,Gl===Ze&&(Gl=0)),Fs(e)}function Tv(e,n){n===0&&(n=Lt()),e=Ls(e,n),e!==null&&(ee(e,n),Fs(e))}function xM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Tv(e,a)}function yM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Tv(e,a)}function SM(e,n){return ke(e,n)}var Zf=null,Wl=null,gm=!1,Kf=!1,_m=!1,Qr=0;function Fs(e){e!==Wl&&e.next===null&&(Wl===null?Zf=Wl=e:Wl=Wl.next=e),Kf=!0,gm||(gm=!0,EM())}function pu(e,n){if(!_m&&Kf){_m=!0;do for(var a=!1,o=Zf;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Wt(42|e)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,wv(o,d))}else d=Ze,d=ut(o,o===En?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||mt(o,d)||(a=!0,wv(o,d));o=o.next}while(a);_m=!1}}function MM(){Av()}function Av(){Kf=gm=!1;var e=0;Qr!==0&&UM()&&(e=Qr);for(var n=T(),a=null,o=Zf;o!==null;){var u=o.next,d=Rv(o,n);d===0?(o.next=null,a===null?Zf=u:a.next=u,u===null&&(Wl=a)):(a=o,(e!==0||(d&3)!==0)&&(Kf=!0)),o=u}di!==0&&di!==5||pu(e),Qr!==0&&(Qr=0)}function Rv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Wt(d),R=1<<y,V=u[y];V===-1?((R&a)===0||(R&o)!==0)&&(u[y]=ie(R,n)):V<=n&&(e.expiredLanes|=R),d&=~R}if(n=En,a=Ze,a=ut(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(dn===2||dn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||mt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Xe(o),Qn(a)){case 2:case 8:a=Rt;break;case 32:a=gt;break;case 268435456:a=Ft;break;default:a=gt}return o=Cv.bind(null,e),a=ke(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Xe(o),e.callbackPriority=2,e.callbackNode=null,2}function Cv(e,n){if(di!==0&&di!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jf()&&e.callbackNode!==a)return null;var o=Ze;return o=ut(e,e===En?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(cv(e,o,n),Rv(e,T()),e.callbackNode!=null&&e.callbackNode===a?Cv.bind(null,e):null)}function wv(e,n){if(jf())return null;cv(e,n,!0)}function EM(){IM(function(){(ln&6)!==0?ke(vt,MM):Av()})}function vm(){if(Qr===0){var e=Gn;e===0&&(e=dt,dt<<=1,(dt&261888)===0&&(dt=256)),Qr=e}return Qr}function Dv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function Nv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function bM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Dv((u[pn]||null).action),y=o.submitter;y&&(n=(n=y[pn]||null)?Dv(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new ns("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qr!==0){var V=y?Nv(u,y):new FormData(u);Bp(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(R.preventDefault(),V=y?Nv(u,y):new FormData(u),Bp(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var xm=0;xm<Cl.length;xm++){var ym=Cl[xm],TM=ym.toLowerCase(),AM=ym[0].toUpperCase()+ym.slice(1);na(TM,"on"+AM)}na(Tl,"onAnimationEnd"),na(Wc,"onAnimationIteration"),na(Yc,"onAnimationStart"),na("dblclick","onDoubleClick"),na("focusin","onFocus"),na("focusout","onBlur"),na(Ks,"onTransitionRun"),na(_f,"onTransitionStart"),na(vf,"onTransitionCancel"),na(Al,"onTransitionEnd"),Ht("onMouseEnter",["mouseout","mouseover"]),Ht("onMouseLeave",["mouseout","mouseover"]),Ht("onPointerEnter",["pointerout","pointerover"]),Ht("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function Lv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],V=R.instance,rt=R.currentTarget;if(R=R.listener,V!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=rt;try{d(u)}catch(St){Uo(St)}u.currentTarget=null,d=V}else for(y=0;y<o.length;y++){if(R=o[y],V=R.instance,rt=R.currentTarget,R=R.listener,V!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=rt;try{d(u)}catch(St){Uo(St)}u.currentTarget=null,d=V}}}}function qe(e,n){var a=n[bi];a===void 0&&(a=n[bi]=new Set);var o=e+"__bubble";a.has(o)||(Uv(n,e,2,!1),a.add(o))}function Sm(e,n,a){var o=0;n&&(o|=4),Uv(a,e,o,n)}var Qf="_reactListening"+Math.random().toString(36).slice(2);function Mm(e){if(!e[Qf]){e[Qf]=!0,ft.forEach(function(a){a!=="selectionchange"&&(RM.has(a)||Sm(a,!1,e),Sm(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Qf]||(n[Qf]=!0,Sm("selectionchange",!1,n))}}function Uv(e,n,a,o){switch(lx(n)){case 2:var u=eE;break;case 8:u=nE;break;default:u=Fm}a=u.bind(null,n,a,e),u=void 0,!Lc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Em(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=da(R),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=d=y;continue t}R=R.parentNode}}o=o.return}nf(function(){var rt=d,St=pa(a),At=[];t:{var lt=Rl.get(e);if(lt!==void 0){var ht=ns,oe=e;switch(e){case"keypress":if(bo(a)===0)break t;case"keydown":case"keyup":ht=of;break;case"focusin":oe="focus",ht=Ss;break;case"focusout":oe="blur",ht=Ss;break;case"beforeblur":case"afterblur":ht=Ss;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Wi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=ys;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Dr;break;case Tl:case Wc:case Yc:ht=dl;break;case Al:ht=bs;break;case"scroll":case"scrollend":ht=af;break;case"wheel":ht=cf;break;case"copy":case"cut":case"paste":ht=ma;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=qn;break;case"toggle":case"beforetoggle":ht=Ao}var _e=(n&4)!==0,Sn=!_e&&(e==="scroll"||e==="scrollend"),J=_e?lt!==null?lt+"Capture":null:lt;_e=[];for(var W=rt,st;W!==null;){var bt=W;if(st=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||st===null||J===null||(bt=Mo(W,J),bt!=null&&_e.push(gu(W,bt,st))),Sn)break;W=W.return}0<_e.length&&(lt=new ht(lt,oe,null,a,St),At.push({event:lt,listeners:_e}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",lt&&a!==So&&(oe=a.relatedTarget||a.fromElement)&&(da(oe)||oe[Nn]))break t;if((ht||lt)&&(lt=St.window===St?St:(lt=St.ownerDocument)?lt.defaultView||lt.parentWindow:window,ht?(oe=a.relatedTarget||a.toElement,ht=rt,oe=oe?da(oe):null,oe!==null&&(Sn=c(oe),_e=oe.tag,oe!==Sn||_e!==5&&_e!==27&&_e!==6)&&(oe=null)):(ht=null,oe=rt),ht!==oe)){if(_e=Wi,bt="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(_e=qn,bt="onPointerLeave",J="onPointerEnter",W="pointer"),Sn=ht==null?lt:Na(ht),st=oe==null?lt:Na(oe),lt=new _e(bt,W+"leave",ht,a,St),lt.target=Sn,lt.relatedTarget=st,bt=null,da(St)===rt&&(_e=new _e(J,W+"enter",oe,a,St),_e.target=st,_e.relatedTarget=Sn,bt=_e),Sn=bt,ht&&oe)e:{for(_e=CM,J=ht,W=oe,st=0,bt=J;bt;bt=_e(bt))st++;bt=0;for(var he=W;he;he=_e(he))bt++;for(;0<st-bt;)J=_e(J),st--;for(;0<bt-st;)W=_e(W),bt--;for(;st--;){if(J===W||W!==null&&J===W.alternate){_e=J;break e}J=_e(J),W=_e(W)}_e=null}else _e=null;ht!==null&&Ov(At,lt,ht,_e,!1),oe!==null&&Sn!==null&&Ov(At,Sn,oe,_e,!0)}}t:{if(lt=rt?Na(rt):window,ht=lt.nodeName&&lt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&lt.type==="file")var sn=vl;else if(Zs(lt))if(xl)sn=mf;else{sn=$n;var fe=Do}else ht=lt.nodeName,!ht||ht.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?rt&&Xs(rt.elementType)&&(sn=vl):sn=zc;if(sn&&(sn=sn(e,rt))){hf(At,sn,a,St);break t}fe&&fe(e,lt,rt),e==="focusout"&&rt&&lt.type==="number"&&rt.memoizedProps.value!=null&&Ln(lt,"number",lt.value)}switch(fe=rt?Na(rt):window,e){case"focusin":(Zs(fe)||fe.contentEditable==="true")&&(Cs=fe,Ir=rt,Pr=null);break;case"focusout":Pr=Ir=Cs=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,Lo(At,a,St);break;case"selectionchange":if(kc)break;case"keydown":case"keyup":Lo(At,a,St)}var Pe;if(Ts)t:{switch(e){case"compositionstart":var Ke="onCompositionStart";break t;case"compositionend":Ke="onCompositionEnd";break t;case"compositionupdate":Ke="onCompositionUpdate";break t}Ke=void 0}else As?uf(e,a)&&(Ke="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ke="onCompositionStart");Ke&&(Bc&&a.locale!=="ko"&&(As||Ke!=="onCompositionStart"?Ke==="onCompositionEnd"&&As&&(Pe=Oc()):(ts=St,Uc="value"in ts?ts.value:ts.textContent,As=!0)),fe=Jf(rt,Ke),0<fe.length&&(Ke=new Ic(Ke,e,null,a,St),At.push({event:Ke,listeners:fe}),Pe?Ke.data=Pe:(Pe=gl(a),Pe!==null&&(Ke.data=Pe)))),(Pe=mp?ff(e,a):df(e,a))&&(Ke=Jf(rt,"onBeforeInput"),0<Ke.length&&(fe=new Ic("onBeforeInput","beforeinput",null,a,St),At.push({event:fe,listeners:Ke}),fe.data=Pe)),bM(At,e,rt,a,St)}Lv(At,n)})}function gu(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jf(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Mo(e,a),u!=null&&o.unshift(gu(e,u,d)),u=Mo(e,n),u!=null&&o.push(gu(e,u,d))),e.tag===3)return o;e=e.return}return[]}function CM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ov(e,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,V=R.alternate,rt=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||rt===null||(V=rt,u?(rt=Mo(a,d),rt!=null&&y.unshift(gu(a,rt,V))):u||(rt=Mo(a,d),rt!=null&&y.push(gu(a,rt,V)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var wM=/\r\n?/g,DM=/\u0000|\uFFFD/g;function Iv(e){return(typeof e=="string"?e:""+e).replace(wM,`
`).replace(DM,"")}function Pv(e,n){return n=Iv(n),Iv(e)===n}function yn(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ci(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ci(e,""+o);break;case"className":ve(e,"class",o);break;case"tabIndex":ve(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ve(e,a,o);break;case"style":xs(e,o,d);break;case"data":if(n!=="object"){ve(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ri(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&yn(e,n,"name",u.name,u,null),yn(e,n,"formEncType",u.formEncType,u,null),yn(e,n,"formMethod",u.formMethod,u,null),yn(e,n,"formTarget",u.formTarget,u,null)):(yn(e,n,"encType",u.encType,u,null),yn(e,n,"method",u.method,u,null),yn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ri(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=vi);break;case"onScroll":o!=null&&qe("scroll",e);break;case"onScrollEnd":o!=null&&qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ri(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":qe("beforetoggle",e),qe("toggle",e),xe(e,"popover",o);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ja.get(a)||a,xe(e,a,o))}}function bm(e,n,a,o,u,d){switch(a){case"style":xs(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ci(e,o):(typeof o=="number"||typeof o=="bigint")&&ci(e,""+o);break;case"onScroll":o!=null&&qe("scroll",e);break;case"onScrollEnd":o!=null&&qe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[pn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):xe(e,a,o)}}}function Ui(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",e),qe("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:yn(e,n,d,y,a,null)}}u&&yn(e,n,"srcSet",a.srcSet,a,null),o&&yn(e,n,"src",a.src,a,null);return;case"input":qe("invalid",e);var R=d=y=u=null,V=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var St=a[o];if(St!=null)switch(o){case"name":u=St;break;case"type":y=St;break;case"checked":V=St;break;case"defaultChecked":rt=St;break;case"value":d=St;break;case"defaultValue":R=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(s(137,n));break;default:yn(e,n,o,St,a,null)}}Ti(e,d,R,V,rt,y,u,!1);return;case"select":qe("invalid",e),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:yn(e,n,u,R,a,null)}n=d,a=y,e.multiple=!!o,n!=null?li(e,!!o,n,!1):a!=null&&li(e,!!o,a,!0);return;case"textarea":qe("invalid",e),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:yn(e,n,y,R,a,null)}Un(e,o,u,d);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":yn(e,n,V,o,a,null));return;case"dialog":qe("beforetoggle",e),qe("toggle",e),qe("cancel",e),qe("close",e);break;case"iframe":case"object":qe("load",e);break;case"video":case"audio":for(o=0;o<mu.length;o++)qe(mu[o],e);break;case"image":qe("error",e),qe("load",e);break;case"details":qe("toggle",e);break;case"embed":case"source":case"link":qe("error",e),qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:yn(e,n,rt,o,a,null)}return;default:if(Xs(n)){for(St in a)a.hasOwnProperty(St)&&(o=a[St],o!==void 0&&bm(e,n,St,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&yn(e,n,R,o,a,null))}function NM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,V=null,rt=null,St=null;for(ht in a){var At=a[ht];if(a.hasOwnProperty(ht)&&At!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":V=At;default:o.hasOwnProperty(ht)||yn(e,n,ht,null,o,At)}}for(var lt in o){var ht=o[lt];if(At=a[lt],o.hasOwnProperty(lt)&&(ht!=null||At!=null))switch(lt){case"type":d=ht;break;case"name":u=ht;break;case"checked":rt=ht;break;case"defaultChecked":St=ht;break;case"value":y=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==At&&yn(e,n,lt,ht,o,At)}}oi(e,y,R,V,rt,St,d,u);return;case"select":ht=y=R=lt=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ht=V;default:o.hasOwnProperty(d)||yn(e,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":lt=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==V&&yn(e,n,u,d,o,V)}n=R,a=y,o=ht,lt!=null?li(e,!!a,lt,!1):!!o!=!!a&&(n!=null?li(e,!!a,n,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":ht=lt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:yn(e,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":lt=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&yn(e,n,y,u,o,d)}je(e,lt,ht);return;case"option":for(var oe in a)lt=a[oe],a.hasOwnProperty(oe)&&lt!=null&&!o.hasOwnProperty(oe)&&(oe==="selected"?e.selected=!1:yn(e,n,oe,null,o,lt));for(V in o)lt=o[V],ht=a[V],o.hasOwnProperty(V)&&lt!==ht&&(lt!=null||ht!=null)&&(V==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":yn(e,n,V,lt,o,ht));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in a)lt=a[_e],a.hasOwnProperty(_e)&&lt!=null&&!o.hasOwnProperty(_e)&&yn(e,n,_e,null,o,lt);for(rt in o)if(lt=o[rt],ht=a[rt],o.hasOwnProperty(rt)&&lt!==ht&&(lt!=null||ht!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:yn(e,n,rt,lt,o,ht)}return;default:if(Xs(n)){for(var Sn in a)lt=a[Sn],a.hasOwnProperty(Sn)&&lt!==void 0&&!o.hasOwnProperty(Sn)&&bm(e,n,Sn,void 0,o,lt);for(St in o)lt=o[St],ht=a[St],!o.hasOwnProperty(St)||lt===ht||lt===void 0&&ht===void 0||bm(e,n,St,lt,o,ht);return}}for(var J in a)lt=a[J],a.hasOwnProperty(J)&&lt!=null&&!o.hasOwnProperty(J)&&yn(e,n,J,null,o,lt);for(At in o)lt=o[At],ht=a[At],!o.hasOwnProperty(At)||lt===ht||lt==null&&ht==null||yn(e,n,At,lt,o,ht)}function Fv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function LM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&Fv(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],rt=V.startTime;if(rt>R)break;var St=V.transferSize,At=V.initiatorType;St&&Fv(At)&&(V=V.responseEnd,y+=St*(V<R?1:(R-rt)/(V-rt)))}if(--o,n+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tm=null,Am=null;function $f(e){return e.nodeType===9?e:e.ownerDocument}function Bv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rm(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cm=null;function UM(){var e=window.event;return e&&e.type==="popstate"?e===Cm?!1:(Cm=e,!0):(Cm=null,!1)}var Hv=typeof setTimeout=="function"?setTimeout:void 0,OM=typeof clearTimeout=="function"?clearTimeout:void 0,Gv=typeof Promise=="function"?Promise:void 0,IM=typeof queueMicrotask=="function"?queueMicrotask:typeof Gv<"u"?function(e){return Gv.resolve(null).then(e).catch(PM)}:Hv;function PM(e){setTimeout(function(){throw e})}function Jr(e){return e==="head"}function Vv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Zl(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")_u(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_u(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[zn]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&_u(e.ownerDocument.body);a=u}while(a);Zl(n)}function kv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function wm(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wm(a),yo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function FM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[zn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ka(e.nextSibling),e===null)break}return null}function BM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ka(e.nextSibling),e===null))return null;return e}function Xv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ka(e.nextSibling),e===null))return null;return e}function Dm(e){return e.data==="$?"||e.data==="$~"}function Nm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ka(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Lm=null;function Wv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ka(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Yv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function qv(e,n,a){switch(n=$f(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _u(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);yo(e)}var Xa=new Map,jv=new Set;function td(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fr=B.d;B.d={f:HM,r:GM,D:VM,C:kM,L:XM,m:WM,X:qM,S:YM,M:jM};function HM(){var e=fr.f(),n=Wf();return e||n}function GM(e){var n=ha(e);n!==null&&n.tag===5&&n.type==="form"?f_(n):fr.r(e)}var Yl=typeof document>"u"?null:document;function Zv(e,n,a){var o=Yl;if(o&&typeof n=="string"&&n){var u=ye(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),jv.has(u)||(jv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ui(n,"link",e),Y(n),o.head.appendChild(n)))}}function VM(e){fr.D(e),Zv("dns-prefetch",e,null)}function kM(e,n){fr.C(e,n),Zv("preconnect",e,n)}function XM(e,n,a){fr.L(e,n,a);var o=Yl;if(o&&e&&n){var u='link[rel="preload"][as="'+ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ye(a.imageSizes)+'"]')):u+='[href="'+ye(e)+'"]';var d=u;switch(n){case"style":d=ql(e);break;case"script":d=jl(e)}Xa.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Xa.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(vu(d))||n==="script"&&o.querySelector(xu(d))||(n=o.createElement("link"),Ui(n,"link",e),Y(n),o.head.appendChild(n)))}}function WM(e,n){fr.m(e,n);var a=Yl;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ye(o)+'"][href="'+ye(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=jl(e)}if(!Xa.has(d)&&(e=v({rel:"modulepreload",href:e},n),Xa.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xu(d)))return}o=a.createElement("link"),Ui(o,"link",e),Y(o),a.head.appendChild(o)}}}function YM(e,n,a){fr.S(e,n,a);var o=Yl;if(o&&e){var u=C(o).hoistableStyles,d=ql(e);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(vu(d)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Xa.get(d))&&Um(e,a);var V=y=o.createElement("link");Y(V),Ui(V,"link",e),V._p=new Promise(function(rt,St){V.onload=rt,V.onerror=St}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ed(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function qM(e,n){fr.X(e,n);var a=Yl;if(a&&e){var o=C(a).hoistableScripts,u=jl(e),d=o.get(u);d||(d=a.querySelector(xu(u)),d||(e=v({src:e,async:!0},n),(n=Xa.get(u))&&Om(e,n),d=a.createElement("script"),Y(d),Ui(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function jM(e,n){fr.M(e,n);var a=Yl;if(a&&e){var o=C(a).hoistableScripts,u=jl(e),d=o.get(u);d||(d=a.querySelector(xu(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=Xa.get(u))&&Om(e,n),d=a.createElement("script"),Y(d),Ui(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Kv(e,n,a,o){var u=(u=it.current)?td(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ql(a.href),a=C(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ql(a.href);var d=C(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(vu(e)))&&!d._p&&(y.instance=d,y.state.loading=5),Xa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xa.set(e,a),d||ZM(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=jl(a),a=C(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ql(e){return'href="'+ye(e)+'"'}function vu(e){return'link[rel="stylesheet"]['+e+"]"}function Qv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function ZM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ui(n,"link",a),Y(n),e.head.appendChild(n))}function jl(e){return'[src="'+ye(e)+'"]'}function xu(e){return"script[async]"+e}function Jv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ye(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),Ui(o,"style",u),ed(o,a.precedence,e),n.instance=o;case"stylesheet":u=ql(a.href);var d=e.querySelector(vu(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=Qv(a),(u=Xa.get(u))&&Um(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var y=d;return y._p=new Promise(function(R,V){y.onload=R,y.onerror=V}),Ui(d,"link",o),n.state.loading|=4,ed(d,a.precedence,e),n.instance=d;case"script":return d=jl(a.src),(u=e.querySelector(xu(d)))?(n.instance=u,Y(u),u):(o=a,(u=Xa.get(d))&&(o=v({},a),Om(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),Ui(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ed(o,a.precedence,e));return n.instance}function ed(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Um(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Om(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nd=null;function $v(e,n,a){if(nd===null){var o=new Map,u=nd=new Map;u.set(a,o)}else u=nd,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[zn]||d[Qe]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function tx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function KM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ex(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function QM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ql(o.href),d=n.querySelector(vu(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=id.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=Qv(o),(u=Xa.get(u))&&Um(o,u),d=d.createElement("link"),Y(d);var y=d;y._p=new Promise(function(R,V){y.onload=R,y.onerror=V}),Ui(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=id.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Im=0;function JM(e,n){return e.stylesheets&&e.count===0&&sd(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&sd(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Im===0&&(Im=62500*LM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sd(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Im?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function id(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ad=null;function sd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ad=new Map,n.forEach($M,e),ad=null,id.call(e))}function $M(e,n){if(!(n.state.loading&4)){var a=ad.get(e);if(a)var o=a.get(null);else{a=new Map,ad.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=id.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var yu={$$typeof:L,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function tE(e,n,a,o,u,d,y,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zt(0),this.hiddenUpdates=zt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function nx(e,n,a,o,u,d,y,R,V,rt,St,At){return e=new tE(e,n,a,y,V,rt,St,At,R),n=1,d===!0&&(n|=24),d=Bi(3,null,null,n),e.current=d,d.stateNode=e,n=Di(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},vp(d),e}function ix(e){return e?(e=Js,e):Js}function ax(e,n,a,o,u,d){u=ix(u),o.context===null?o.context=u:o.pendingContext=u,o=Gr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Vr(e,o,n),a!==null&&(la(a,e,n),Jc(a,e,n))}function sx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pm(e,n){sx(e,n),(e=e.alternate)&&sx(e,n)}function rx(e){if(e.tag===13||e.tag===31){var n=Ls(e,67108864);n!==null&&la(n,e,67108864),Pm(e,67108864)}}function ox(e){if(e.tag===13||e.tag===31){var n=Ma();n=ki(n);var a=Ls(e,n);a!==null&&la(a,e,n),Pm(e,n)}}var rd=!0;function eE(e,n,a,o){var u=O.T;O.T=null;var d=B.p;try{B.p=2,Fm(e,n,a,o)}finally{B.p=d,O.T=u}}function nE(e,n,a,o){var u=O.T;O.T=null;var d=B.p;try{B.p=8,Fm(e,n,a,o)}finally{B.p=d,O.T=u}}function Fm(e,n,a,o){if(rd){var u=Bm(o);if(u===null)Em(e,n,o,od,a),cx(e,o);else if(aE(u,e,n,a,o))o.stopPropagation();else if(cx(e,o),n&4&&-1<iE.indexOf(e)){for(;u!==null;){var d=ha(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=yt(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var V=1<<31-Wt(y);R.entanglements[1]|=V,y&=~V}Fs(d),(ln&6)===0&&(kf=T()+500,pu(0))}}break;case 31:case 13:R=Ls(d,2),R!==null&&la(R,d,2),Wf(),Pm(d,2)}if(d=Bm(o),d===null&&Em(e,n,o,od,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Em(e,n,o,null,a)}}function Bm(e){return e=pa(e),zm(e)}var od=null;function zm(e){if(od=null,e=da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return od=e,null}function lx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case vt:return 2;case Rt:return 8;case gt:case re:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var Hm=!1,$r=null,to=null,eo=null,Su=new Map,Mu=new Map,no=[],iE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cx(e,n){switch(e){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":to=null;break;case"mouseover":case"mouseout":eo=null;break;case"pointerover":case"pointerout":Su.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mu.delete(n.pointerId)}}function Eu(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ha(n),n!==null&&rx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function aE(e,n,a,o,u){switch(n){case"focusin":return $r=Eu($r,e,n,a,o,u),!0;case"dragenter":return to=Eu(to,e,n,a,o,u),!0;case"mouseover":return eo=Eu(eo,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Su.set(d,Eu(Su.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Mu.set(d,Eu(Mu.get(d)||null,e,n,a,o,u)),!0}return!1}function ux(e){var n=da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Bn(e.priority,function(){ox(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Bn(e.priority,function(){ox(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ld(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bm(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);So=o,a.target.dispatchEvent(o),So=null}else return n=ha(a),n!==null&&rx(n),e.blockedOn=a,!1;n.shift()}return!0}function fx(e,n,a){ld(e)&&a.delete(n)}function sE(){Hm=!1,$r!==null&&ld($r)&&($r=null),to!==null&&ld(to)&&(to=null),eo!==null&&ld(eo)&&(eo=null),Su.forEach(fx),Mu.forEach(fx)}function cd(e,n){e.blockedOn===n&&(e.blockedOn=null,Hm||(Hm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sE)))}var ud=null;function dx(e){ud!==e&&(ud=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ud===e&&(ud=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(zm(o||a)===null)continue;break}var d=ha(a);d!==null&&(e.splice(n,3),n-=3,Bp(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Zl(e){function n(V){return cd(V,e)}$r!==null&&cd($r,e),to!==null&&cd(to,e),eo!==null&&cd(eo,e),Su.forEach(n),Mu.forEach(n);for(var a=0;a<no.length;a++){var o=no[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<no.length&&(a=no[0],a.blockedOn===null);)ux(a),a.blockedOn===null&&no.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[pn]||null;if(typeof d=="function")y||dx(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[pn]||null)R=y.formAction;else if(zm(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),dx(a)}}}function hx(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Gm(e){this._internalRoot=e}fd.prototype.render=Gm.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Ma();ax(a,o,e,n,null,null)},fd.prototype.unmount=Gm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ax(e.current,2,null,e,null,null),Wf(),n[Nn]=null}};function fd(e){this._internalRoot=e}fd.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<no.length&&n!==0&&n<no[a].priority;a++);no.splice(a,0,e),a===0&&ux(e)}};var px=t.version;if(px!=="19.2.4")throw Error(s(527,px,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var rE={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dd.isDisabled&&dd.supportsFiber)try{Nt=dd.inject(rE),Dt=dd}catch{}}return Tu.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=S_,d=M_,y=E_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=nx(e,1,!1,null,null,a,o,null,u,d,y,hx),e[Nn]=n.current,Mm(e),new Gm(n)},Tu.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=S_,y=M_,R=E_,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=nx(e,1,!0,n,a??null,o,u,V,d,y,R,hx),n.context=ix(null),a=n.current,o=Ma(),o=ki(o),u=Gr(o),u.callback=null,Vr(a,u,o),a=o,n.current.lanes=a,ee(n,a),Fs(n),e[Nn]=n.current,Mm(e),new fd(n)},Tu.version="19.2.4",Tu}var bx;function gE(){if(bx)return Xm.exports;bx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Xm.exports=mE(),Xm.exports}var _E=gE();const Gh="183",Uy=0,L0=1,Oy=2,Iy=0,al=1,Py=2,gc=3,br=0,Vi=1,Xn=2,Gs=0,sl=1,Qd=2,U0=3,O0=4,Fy=5,ho=100,By=101,zy=102,Hy=103,Gy=104,Vy=200,ky=201,Xy=202,Wy=203,Jd=204,$d=205,Yy=206,qy=207,jy=208,Zy=209,Ky=210,Qy=211,Jy=212,$y=213,tS=214,th=0,eh=1,nh=2,rl=3,ih=4,ah=5,sh=6,rh=7,Vh=0,eS=1,nS=2,ps=0,j0=1,Z0=2,K0=3,kh=4,Q0=5,J0=6,$0=7,tg=300,_o=301,ol=302,Xd=303,Wd=304,ef=306,xc=1e3,Hs=1001,oh=1002,Ei=1003,iS=1004,zu=1005,Wn=1006,Yd=1007,Mr=1008,ua=1009,eg=1010,ng=1011,yc=1012,Xh=1013,gs=1014,ja=1015,Vs=1016,Wh=1017,Yh=1018,Sc=1020,ig=35902,ag=35899,sg=1021,rg=1022,Za=1023,ks=1026,po=1027,qh=1028,jh=1029,ll=1030,Zh=1031,Kh=1033,ku=33776,Xu=33777,Wu=33778,Yu=33779,lh=35840,ch=35841,uh=35842,fh=35843,dh=36196,hh=37492,ph=37496,mh=37488,gh=37489,_h=37490,vh=37491,xh=37808,yh=37809,Sh=37810,Mh=37811,Eh=37812,bh=37813,Th=37814,Ah=37815,Rh=37816,Ch=37817,wh=37818,Dh=37819,Nh=37820,Lh=37821,Uh=36492,Oh=36494,Ih=36495,Ph=36283,Fh=36284,Bh=36285,zh=36286,aS=3200,Qh=0,sS=1,Sr="",Kn="srgb",cl="srgb-linear",Zu="linear",cn="srgb",el=7680,I0=519,rS=512,oS=513,lS=514,Jh=515,cS=516,uS=517,$h=518,fS=519,P0=35044,dS=35048,F0="300 es",hs=2e3,Mc=2001;function vE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ku(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hS(){const r=Ku("canvas");return r.style.display="block",r}const Tx={};function B0(...r){const t="THREE."+r.shift();console.log(t,...r)}function pS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Me(...r){r=pS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function tn(...r){r=pS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Qu(...r){const t=r.join(" ");t in Tx||(Tx[t]=!0,Me(...r))}function xE(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const yE={[th]:eh,[nh]:sh,[ih]:rh,[rl]:ah,[eh]:th,[sh]:nh,[rh]:ih,[ah]:rl};class ul{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ax=1234567;const qu=Math.PI/180,Ec=180/Math.PI;function Ac(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hi[r&255]+Hi[r>>8&255]+Hi[r>>16&255]+Hi[r>>24&255]+"-"+Hi[t&255]+Hi[t>>8&255]+"-"+Hi[t>>16&15|64]+Hi[t>>24&255]+"-"+Hi[i&63|128]+Hi[i>>8&255]+"-"+Hi[i>>16&255]+Hi[i>>24&255]+Hi[s&255]+Hi[s>>8&255]+Hi[s>>16&255]+Hi[s>>24&255]).toLowerCase()}function Ge(r,t,i){return Math.max(t,Math.min(i,r))}function og(r,t){return(r%t+t)%t}function SE(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function ME(r,t,i){return r!==t?(i-r)/(t-r):0}function ju(r,t,i){return(1-i)*r+i*t}function EE(r,t,i,s){return ju(r,t,1-Math.exp(-i*s))}function bE(r,t=1){return t-Math.abs(og(r,t*2)-t)}function TE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function AE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function RE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function CE(r,t){return r+Math.random()*(t-r)}function wE(r){return r*(.5-Math.random())}function DE(r){r!==void 0&&(Ax=r);let t=Ax+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function NE(r){return r*qu}function LE(r){return r*Ec}function UE(r){return(r&r-1)===0&&r!==0}function OE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function IE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function PE(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),x=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*_,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*E,m*x,h*p);break;case"YXY":r.set(m*x,h*_,m*E,h*p);break;case"ZYZ":r.set(m*E,m*x,h*_,h*p);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function pc(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const an={DEG2RAD:qu,RAD2DEG:Ec,generateUUID:Ac,clamp:Ge,euclideanModulo:og,mapLinear:SE,inverseLerp:ME,lerp:ju,damp:EE,pingpong:bE,smoothstep:TE,smootherstep:AE,randInt:RE,randFloat:CE,randFloatSpread:wE,seededRandom:DE,degToRad:NE,radToDeg:LE,isPowerOfTwo:UE,ceilPowerOfTwo:OE,floorPowerOfTwo:IE,setQuaternionFromProperEuler:PE,normalize:Zi,denormalize:pc};class Le{constructor(t=0,i=0){Le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],x=c[f+1],E=c[f+2],D=c[f+3];if(v!==D||m!==g||p!==x||_!==E){let M=m*g+p*x+_*E+v*D;M<0&&(g=-g,x=-x,E=-E,D=-D,M=-M);let S=1-h;if(M<.9995){const A=Math.acos(M),L=Math.sin(A);S=Math.sin(S*A)/L,h=Math.sin(h*A)/L,m=m*S+g*h,p=p*S+x*h,_=_*S+E*h,v=v*S+D*h}else{m=m*S+g*h,p=p*S+x*h,_=_*S+E*h,v=v*S+D*h;const A=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=A,p*=A,_*=A,v*=A}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],x=c[f+2],E=c[f+3];return t[i]=h*E+_*v+m*x-p*g,t[i+1]=m*E+_*g+p*v-h*x,t[i+2]=p*E+_*x+h*g-m*v,t[i+3]=_*E-h*v-m*g-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(c/2),g=m(s/2),x=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v-g*x*E;break;case"YXZ":this._x=g*_*v+p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v+g*x*E;break;case"ZXY":this._x=g*_*v-p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v-g*x*E;break;case"ZYX":this._x=g*_*v-p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v+g*x*E;break;case"YZX":this._x=g*_*v+p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v-g*x*E;break;case"XZY":this._x=g*_*v-p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v+g*x*E;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-m)*x,this._y=(c-p)*x,this._z=(f-l)*x}else if(s>h&&s>v){const x=2*Math.sqrt(1+s-h-v);this._w=(_-m)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+p)/x}else if(h>v){const x=2*Math.sqrt(1+h-s-v);this._w=(c-p)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(m+_)/x}else{const x=2*Math.sqrt(1+v-s-h);this._w=(f-l)/x,this._x=(c+p)/x,this._y=(m+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,i=0,s=0){X.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Rx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Rx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),_=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*_,this.y=s+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this.z=Ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this.z=Ge(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return jm.copy(this).projectOnVector(t),this.sub(jm)}reflect(t){return this.sub(jm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jm=new X,Rx=new Tr;class Ie{constructor(t,i,s,l,c,f,h,m,p){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],x=s[5],E=s[8],D=l[0],M=l[3],S=l[6],A=l[1],L=l[4],w=l[7],I=l[2],U=l[5],z=l[8];return c[0]=f*D+h*A+m*I,c[3]=f*M+h*L+m*U,c[6]=f*S+h*w+m*z,c[1]=p*D+_*A+v*I,c[4]=p*M+_*L+v*U,c[7]=p*S+_*w+v*z,c[2]=g*D+x*A+E*I,c[5]=g*M+x*L+E*U,c[8]=g*S+x*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*f-h*p,g=h*m-_*c,x=p*c-f*m,E=i*v+s*g+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/E;return t[0]=v*D,t[1]=(l*p-_*s)*D,t[2]=(h*s-l*f)*D,t[3]=g*D,t[4]=(_*i-l*m)*D,t[5]=(l*c-h*i)*D,t[6]=x*D,t[7]=(s*m-p*i)*D,t[8]=(f*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Zm.makeScale(t,i)),this}rotate(t){return this.premultiply(Zm.makeRotation(-t)),this}translate(t,i){return this.premultiply(Zm.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zm=new Ie,Cx=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wx=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FE(){const r={enabled:!0,workingColorSpace:cl,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===cn&&(l.r=Er(l.r),l.g=Er(l.g),l.b=Er(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===cn&&(l.r=vc(l.r),l.g=vc(l.g),l.b=vc(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Sr?Zu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[cl]:{primaries:t,whitePoint:s,transfer:Zu,toXYZ:Cx,fromXYZ:wx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:s,transfer:cn,toXYZ:Cx,fromXYZ:wx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),r}const en=FE();function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Kl;class mS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Kl===void 0&&(Kl=Ku("canvas")),Kl.width=t.width,Kl.height=t.height;const l=Kl.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Kl}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ku("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Er(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Er(i[s]/255)*255):i[s]=Er(i[s]);return{data:i,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BE=0;class tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Ac(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Km(l[f].image)):c.push(Km(l[f]))}else c=Km(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Km(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let zE=0;const Qm=new X;class hi extends ul{constructor(t=hi.DEFAULT_IMAGE,i=hi.DEFAULT_MAPPING,s=Hs,l=Hs,c=Wn,f=Mr,h=Za,m=ua,p=hi.DEFAULT_ANISOTROPY,_=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Ac(),this.name="",this.source=new tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qm).x}get height(){return this.source.getSize(Qm).y}get depth(){return this.source.getSize(Qm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xc:t.x=t.x-Math.floor(t.x);break;case Hs:t.x=t.x<0?0:1;break;case oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xc:t.y=t.y-Math.floor(t.y);break;case Hs:t.y=t.y<0?0:1;break;case oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=tg;hi.DEFAULT_ANISOTROPY=1;class Fn{constructor(t=0,i=0,s=0,l=1){Fn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],x=m[5],E=m[9],D=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(x+1)/2,I=(S+1)/2,U=(_+g)/4,z=(v+D)/4,b=(E+M)/4;return L>w&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=U/s,c=z/s):w>I?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=U/l,c=b/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=b/c),this.set(s,l,c,i),this}let A=Math.sqrt((M-E)*(M-E)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(M-E)/A,this.y=(v-D)/A,this.z=(g-_)/A,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this.z=Ge(this.z,t.z,i.z),this.w=Ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this.z=Ge(this.z,t,i),this.w=Ge(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gS extends ul{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Fn(0,0,t,i),this.scissorTest=!1,this.viewport=new Fn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new hi(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends gS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class lg extends hi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends hi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(t,i,s,l,c,f,h,m,p,_,v,g,x,E,D,M){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,_,v,g,x,E,D,M)}set(t,i,s,l,c,f,h,m,p,_,v,g,x,E,D,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=x,S[7]=E,S[11]=D,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ql.setFromMatrixColumn(t,0).length(),c=1/Ql.setFromMatrixColumn(t,1).length(),f=1/Ql.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,x=f*v,E=h*_,D=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=x+E*p,i[5]=g-D*p,i[9]=-h*m,i[2]=D-g*p,i[6]=E+x*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,x=m*v,E=p*_,D=p*v;i[0]=g+D*h,i[4]=E*h-x,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=x*h-E,i[6]=D+g*h,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,x=m*v,E=p*_,D=p*v;i[0]=g-D*h,i[4]=-f*v,i[8]=E+x*h,i[1]=x+E*h,i[5]=f*_,i[9]=D-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,x=f*v,E=h*_,D=h*v;i[0]=m*_,i[4]=E*p-x,i[8]=g*p+D,i[1]=m*v,i[5]=D*p+g,i[9]=x*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,x=f*p,E=h*m,D=h*p;i[0]=m*_,i[4]=D-g*v,i[8]=E*v+x,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=x*v+E,i[10]=g-D*v}else if(t.order==="XZY"){const g=f*m,x=f*p,E=h*m,D=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+D,i[5]=f*_,i[9]=x*v-E,i[2]=E*v-x,i[6]=h*_,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(HE,t,GE)}lookAt(t,i,s){const l=this.elements;return Ea.subVectors(t,i),Ea.lengthSq()===0&&(Ea.z=1),Ea.normalize(),ao.crossVectors(s,Ea),ao.lengthSq()===0&&(Math.abs(s.z)===1?Ea.x+=1e-4:Ea.z+=1e-4,Ea.normalize(),ao.crossVectors(s,Ea)),ao.normalize(),hd.crossVectors(Ea,ao),l[0]=ao.x,l[4]=hd.x,l[8]=Ea.x,l[1]=ao.y,l[5]=hd.y,l[9]=Ea.y,l[2]=ao.z,l[6]=hd.z,l[10]=Ea.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],x=s[13],E=s[2],D=s[6],M=s[10],S=s[14],A=s[3],L=s[7],w=s[11],I=s[15],U=l[0],z=l[4],b=l[8],N=l[12],nt=l[1],G=l[5],j=l[9],$=l[13],tt=l[2],Z=l[6],O=l[10],B=l[14],ct=l[3],pt=l[7],Ct=l[11],F=l[15];return c[0]=f*U+h*nt+m*tt+p*ct,c[4]=f*z+h*G+m*Z+p*pt,c[8]=f*b+h*j+m*O+p*Ct,c[12]=f*N+h*$+m*B+p*F,c[1]=_*U+v*nt+g*tt+x*ct,c[5]=_*z+v*G+g*Z+x*pt,c[9]=_*b+v*j+g*O+x*Ct,c[13]=_*N+v*$+g*B+x*F,c[2]=E*U+D*nt+M*tt+S*ct,c[6]=E*z+D*G+M*Z+S*pt,c[10]=E*b+D*j+M*O+S*Ct,c[14]=E*N+D*$+M*B+S*F,c[3]=A*U+L*nt+w*tt+I*ct,c[7]=A*z+L*G+w*Z+I*pt,c[11]=A*b+L*j+w*O+I*Ct,c[15]=A*N+L*$+w*B+I*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],x=t[14],E=t[3],D=t[7],M=t[11],S=t[15],A=m*x-p*g,L=h*x-p*v,w=h*g-m*v,I=f*x-p*_,U=f*g-m*_,z=f*v-h*_;return i*(D*A-M*L+S*w)-s*(E*A-M*I+S*U)+l*(E*L-D*I+S*z)-c*(E*w-D*U+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],x=t[11],E=t[12],D=t[13],M=t[14],S=t[15],A=i*h-s*f,L=i*m-l*f,w=i*p-c*f,I=s*m-l*h,U=s*p-c*h,z=l*p-c*m,b=_*D-v*E,N=_*M-g*E,nt=_*S-x*E,G=v*M-g*D,j=v*S-x*D,$=g*S-x*M,tt=A*$-L*j+w*G+I*nt-U*N+z*b;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/tt;return t[0]=(h*$-m*j+p*G)*Z,t[1]=(l*j-s*$-c*G)*Z,t[2]=(D*z-M*U+S*I)*Z,t[3]=(g*U-v*z-x*I)*Z,t[4]=(m*nt-f*$-p*N)*Z,t[5]=(i*$-l*nt+c*N)*Z,t[6]=(M*w-E*z-S*L)*Z,t[7]=(_*z-g*w+x*L)*Z,t[8]=(f*j-h*nt+p*b)*Z,t[9]=(s*nt-i*j-c*b)*Z,t[10]=(E*U-D*w+S*A)*Z,t[11]=(v*w-_*U-x*A)*Z,t[12]=(h*N-f*G-m*b)*Z,t[13]=(i*G-s*N+l*b)*Z,t[14]=(D*L-E*I-M*A)*Z,t[15]=(_*I-v*L+g*A)*Z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,x=c*_,E=c*v,D=f*_,M=f*v,S=h*v,A=m*p,L=m*_,w=m*v,I=s.x,U=s.y,z=s.z;return l[0]=(1-(D+S))*I,l[1]=(x+w)*I,l[2]=(E-L)*I,l[3]=0,l[4]=(x-w)*U,l[5]=(1-(g+S))*U,l[6]=(M+A)*U,l[7]=0,l[8]=(E+L)*z,l[9]=(M-A)*z,l[10]=(1-(g+D))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ql.set(l[0],l[1],l[2]).length();const h=Ql.set(l[4],l[5],l[6]).length(),m=Ql.set(l[8],l[9],l[10]).length();c<0&&(f=-f),ls.copy(this);const p=1/f,_=1/h,v=1/m;return ls.elements[0]*=p,ls.elements[1]*=p,ls.elements[2]*=p,ls.elements[4]*=_,ls.elements[5]*=_,ls.elements[6]*=_,ls.elements[8]*=v,ls.elements[9]*=v,ls.elements[10]*=v,i.setFromRotationMatrix(ls),s.x=f,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,f,h=hs,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),x=(s+l)/(s-l);let E,D;if(m)E=c/(f-c),D=f*c/(f-c);else if(h===hs)E=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(h===Mc)E=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=hs,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,D;if(m)E=1/(f-c),D=f/(f-c);else if(h===hs)E=-2/(f-c),D=-(f+c)/(f-c);else if(h===Mc)E=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ql=new X,ls=new Mn,HE=new X(0,0,0),GE=new X(1,1,1),ao=new X,hd=new X,Ea=new X,Dx=new Mn,Nx=new Tr;class Ra{constructor(t=0,i=0,s=0,l=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ge(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Dx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Nx.setFromEuler(this),this.setFromQuaternion(Nx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let VE=0;const Lx=new X,Jl=new Tr,dr=new Mn,pd=new X,Au=new X,kE=new X,XE=new Tr,Ux=new X(1,0,0),Ox=new X(0,1,0),Ix=new X(0,0,1),Px={type:"added"},WE={type:"removed"},$l={type:"childadded",child:null},Jm={type:"childremoved",child:null};class bn extends ul{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new X,i=new Ra,s=new Tr,l=new X(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Mn},normalMatrix:{value:new Ie}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Jl.setFromAxisAngle(t,i),this.quaternion.multiply(Jl),this}rotateOnWorldAxis(t,i){return Jl.setFromAxisAngle(t,i),this.quaternion.premultiply(Jl),this}rotateX(t){return this.rotateOnAxis(Ux,t)}rotateY(t){return this.rotateOnAxis(Ox,t)}rotateZ(t){return this.rotateOnAxis(Ix,t)}translateOnAxis(t,i){return Lx.copy(t).applyQuaternion(this.quaternion),this.position.add(Lx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ux,t)}translateY(t){return this.translateOnAxis(Ox,t)}translateZ(t){return this.translateOnAxis(Ix,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?pd.copy(t):pd.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Au.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Au,pd,this.up):dr.lookAt(pd,Au,this.up),this.quaternion.setFromRotationMatrix(dr),l&&(dr.extractRotation(l.matrixWorld),Jl.setFromRotationMatrix(dr),this.quaternion.premultiply(Jl.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(tn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Px),$l.child=t,this.dispatchEvent($l),$l.child=null):tn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WE),Jm.child=t,this.dispatchEvent(Jm),Jm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dr.multiply(t.parent.matrixWorld)),t.applyMatrix4(dr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Px),$l.child=t,this.dispatchEvent($l),$l.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Au,t,kE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Au,XE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),x=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new X(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mo extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,s),S=this._getHandJoint(p,D);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,E=.005;p.inputState.pinching&&g>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new mo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const vS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},so={h:0,s:0,l:0},md={h:0,s:0,l:0};function $m(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,en.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=en.workingColorSpace){return this.r=t,this.g=i,this.b=s,en.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=en.workingColorSpace){if(t=og(t,1),i=Ge(i,0,1),s=Ge(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=$m(f,c,t+1/3),this.g=$m(f,c,t),this.b=$m(f,c,t-1/3)}return en.colorSpaceToWorking(this,l),this}setStyle(t,i=Kn){function s(c){c!==void 0&&parseFloat(c)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Me("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Kn){const s=vS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}copyLinearToSRGB(t){return this.r=vc(t.r),this.g=vc(t.g),this.b=vc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return en.workingToColorSpace(Gi.copy(this),t),Math.round(Ge(Gi.r*255,0,255))*65536+Math.round(Ge(Gi.g*255,0,255))*256+Math.round(Ge(Gi.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=en.workingColorSpace){en.workingToColorSpace(Gi.copy(this),i);const s=Gi.r,l=Gi.g,c=Gi.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=en.workingColorSpace){return en.workingToColorSpace(Gi.copy(this),i),t.r=Gi.r,t.g=Gi.g,t.b=Gi.b,t}getStyle(t=Kn){en.workingToColorSpace(Gi.copy(this),t);const i=Gi.r,s=Gi.g,l=Gi.b;return t!==Kn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(so),this.setHSL(so.h+t,so.s+i,so.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(so),t.getHSL(md);const s=ju(so.h,md.h,i),l=ju(so.s,md.s,i),c=ju(so.l,md.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gi=new ge;ge.NAMES=vS;class Ju{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ge(t),this.near=i,this.far=s}clone(){return new Ju(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cg extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const cs=new X,hr=new X,t0=new X,pr=new X,tc=new X,ec=new X,Fx=new X,e0=new X,n0=new X,i0=new X,a0=new Fn,s0=new Fn,r0=new Fn;class qa{constructor(t=new X,i=new X,s=new X){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),cs.subVectors(t,i),l.cross(cs);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){cs.subVectors(l,i),hr.subVectors(s,i),t0.subVectors(t,i);const f=cs.dot(cs),h=cs.dot(hr),m=cs.dot(t0),p=hr.dot(hr),_=hr.dot(t0),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,x=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,pr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pr.x),m.addScaledVector(f,pr.y),m.addScaledVector(h,pr.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return a0.setScalar(0),s0.setScalar(0),r0.setScalar(0),a0.fromBufferAttribute(t,i),s0.fromBufferAttribute(t,s),r0.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(a0,c.x),f.addScaledVector(s0,c.y),f.addScaledVector(r0,c.z),f}static isFrontFacing(t,i,s,l){return cs.subVectors(s,i),hr.subVectors(t,i),cs.cross(hr).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cs.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),cs.cross(hr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return qa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return qa.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return qa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;tc.subVectors(l,s),ec.subVectors(c,s),e0.subVectors(t,s);const m=tc.dot(e0),p=ec.dot(e0);if(m<=0&&p<=0)return i.copy(s);n0.subVectors(t,l);const _=tc.dot(n0),v=ec.dot(n0);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(tc,f);i0.subVectors(t,c);const x=tc.dot(i0),E=ec.dot(i0);if(E>=0&&x<=E)return i.copy(c);const D=x*p-m*E;if(D<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(ec,h);const M=_*E-x*v;if(M<=0&&v-_>=0&&x-E>=0)return Fx.subVectors(c,l),h=(v-_)/(v-_+(x-E)),i.copy(l).addScaledVector(Fx,h);const S=1/(M+D+g);return f=D*S,h=g*S,i.copy(s).addScaledVector(tc,f).addScaledVector(ec,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class vo{constructor(t=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(us.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(us.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=us.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,us):us.fromBufferAttribute(c,f),us.applyMatrix4(t.matrixWorld),this.expandByPoint(us);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gd.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gd.copy(s.boundingBox)),gd.applyMatrix4(t.matrixWorld),this.union(gd)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,us),us.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ru),_d.subVectors(this.max,Ru),nc.subVectors(t.a,Ru),ic.subVectors(t.b,Ru),ac.subVectors(t.c,Ru),ro.subVectors(ic,nc),oo.subVectors(ac,ic),Yo.subVectors(nc,ac);let i=[0,-ro.z,ro.y,0,-oo.z,oo.y,0,-Yo.z,Yo.y,ro.z,0,-ro.x,oo.z,0,-oo.x,Yo.z,0,-Yo.x,-ro.y,ro.x,0,-oo.y,oo.x,0,-Yo.y,Yo.x,0];return!o0(i,nc,ic,ac,_d)||(i=[1,0,0,0,1,0,0,0,1],!o0(i,nc,ic,ac,_d))?!1:(vd.crossVectors(ro,oo),i=[vd.x,vd.y,vd.z],o0(i,nc,ic,ac,_d))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,us).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(us).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const mr=[new X,new X,new X,new X,new X,new X,new X,new X],us=new X,gd=new vo,nc=new X,ic=new X,ac=new X,ro=new X,oo=new X,Yo=new X,Ru=new X,_d=new X,vd=new X,qo=new X;function o0(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){qo.fromArray(r,c);const h=l.x*Math.abs(qo.x)+l.y*Math.abs(qo.y)+l.z*Math.abs(qo.z),m=t.dot(qo),p=i.dot(qo),_=s.dot(qo);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const ri=new X,xd=new Le;let qE=0;class Ka{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=P0,this.updateRanges=[],this.gpuType=ja,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xd.fromBufferAttribute(this,i),xd.applyMatrix3(t),this.setXY(i,xd.x,xd.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ri.fromBufferAttribute(this,i),ri.applyMatrix3(t),this.setXYZ(i,ri.x,ri.y,ri.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)ri.fromBufferAttribute(this,i),ri.applyMatrix4(t),this.setXYZ(i,ri.x,ri.y,ri.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)ri.fromBufferAttribute(this,i),ri.applyNormalMatrix(t),this.setXYZ(i,ri.x,ri.y,ri.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)ri.fromBufferAttribute(this,i),ri.transformDirection(t),this.setXYZ(i,ri.x,ri.y,ri.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=pc(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=pc(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=pc(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=pc(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=pc(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zi(i,this.array),s=Zi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zi(i,this.array),s=Zi(s,this.array),l=Zi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zi(i,this.array),s=Zi(s,this.array),l=Zi(l,this.array),c=Zi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==P0&&(t.usage=this.usage),t}}class ug extends Ka{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class fg extends Ka{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class un extends Ka{constructor(t,i,s){super(new Float32Array(t),i,s)}}const jE=new vo,Cu=new X,l0=new X;class Rc{constructor(t=new X,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):jE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cu.subVectors(t,this.center);const i=Cu.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Cu,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(l0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cu.copy(t.center).add(l0)),this.expandByPoint(Cu.copy(t.center).sub(l0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ZE=0;const Wa=new Mn,c0=new bn,sc=new X,ba=new vo,wu=new vo,Mi=new X;class Oi extends ul{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vE(t)?fg:ug)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Ie().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wa.makeRotationFromQuaternion(t),this.applyMatrix4(Wa),this}rotateX(t){return Wa.makeRotationX(t),this.applyMatrix4(Wa),this}rotateY(t){return Wa.makeRotationY(t),this.applyMatrix4(Wa),this}rotateZ(t){return Wa.makeRotationZ(t),this.applyMatrix4(Wa),this}translate(t,i,s){return Wa.makeTranslation(t,i,s),this.applyMatrix4(Wa),this}scale(t,i,s){return Wa.makeScale(t,i,s),this.applyMatrix4(Wa),this}lookAt(t){return c0.lookAt(t),c0.updateMatrix(),this.applyMatrix4(c0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sc).negate(),this.translate(sc.x,sc.y,sc.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new un(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ba.setFromBufferAttribute(c),this.morphTargetsRelative?(Mi.addVectors(this.boundingBox.min,ba.min),this.boundingBox.expandByPoint(Mi),Mi.addVectors(this.boundingBox.max,ba.max),this.boundingBox.expandByPoint(Mi)):(this.boundingBox.expandByPoint(ba.min),this.boundingBox.expandByPoint(ba.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(ba.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];wu.setFromBufferAttribute(h),this.morphTargetsRelative?(Mi.addVectors(ba.min,wu.min),ba.expandByPoint(Mi),Mi.addVectors(ba.max,wu.max),ba.expandByPoint(Mi)):(ba.expandByPoint(wu.min),ba.expandByPoint(wu.max))}ba.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Mi.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mi));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Mi.fromBufferAttribute(h,p),m&&(sc.fromBufferAttribute(t,p),Mi.add(sc)),l=Math.max(l,s.distanceToSquared(Mi))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&tn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){tn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ka(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new X,m[b]=new X;const p=new X,_=new X,v=new X,g=new Le,x=new Le,E=new Le,D=new X,M=new X;function S(b,N,nt){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,N),v.fromBufferAttribute(s,nt),g.fromBufferAttribute(c,b),x.fromBufferAttribute(c,N),E.fromBufferAttribute(c,nt),_.sub(p),v.sub(p),x.sub(g),E.sub(g);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(D.copy(_).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(G),M.copy(v).multiplyScalar(x.x).addScaledVector(_,-E.x).multiplyScalar(G),h[b].add(D),h[N].add(D),h[nt].add(D),m[b].add(M),m[N].add(M),m[nt].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let b=0,N=A.length;b<N;++b){const nt=A[b],G=nt.start,j=nt.count;for(let $=G,tt=G+j;$<tt;$+=3)S(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new X,w=new X,I=new X,U=new X;function z(b){I.fromBufferAttribute(l,b),U.copy(I);const N=h[b];L.copy(N),L.sub(I.multiplyScalar(I.dot(N))).normalize(),w.crossVectors(U,N);const G=w.dot(m[b])<0?-1:1;f.setXYZW(b,L.x,L.y,L.z,G)}for(let b=0,N=A.length;b<N;++b){const nt=A[b],G=nt.start,j=nt.count;for(let $=G,tt=G+j;$<tt;$+=3)z(t.getX($+0)),z(t.getX($+1)),z(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ka(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,x=s.count;g<x;g++)s.setXYZ(g,0,0,0);const l=new X,c=new X,f=new X,h=new X,m=new X,p=new X,_=new X,v=new X;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),D=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,x=i.count;g<x;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mi.fromBufferAttribute(t,i),Mi.normalize(),t.setXYZ(i,Mi.x,Mi.y,Mi.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let x=0,E=0;for(let D=0,M=m.length;D<M;D++){h.isInterleavedBufferAttribute?x=m[D]*h.data.stride+h.offset:x=m[D]*_;for(let S=0;S<_;S++)g[E++]=p[x++]}return new Ka(g,_,v)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],x=t(g,s);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const x=p[v];_.push(x.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KE=0;class fl extends ul{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ac(),this.name="",this.type="Material",this.blending=sl,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=$d,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==sl&&(s.blending=this.blending),this.side!==br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jd&&(s.blendSrc=this.blendSrc),this.blendDst!==$d&&(s.blendDst=this.blendDst),this.blendEquation!==ho&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==I0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==el&&(s.stencilFail=this.stencilFail),this.stencilZFail!==el&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==el&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const gr=new X,u0=new X,yd=new X,lo=new X,f0=new X,Sd=new X,d0=new X;class dg{constructor(t=new X,i=new X(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gr)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=gr.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(gr.copy(this.origin).addScaledVector(this.direction,i),gr.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){u0.copy(t).add(i).multiplyScalar(.5),yd.copy(i).sub(t).normalize(),lo.copy(this.origin).sub(u0);const c=t.distanceTo(i)*.5,f=-this.direction.dot(yd),h=lo.dot(this.direction),m=-lo.dot(yd),p=lo.lengthSq(),_=Math.abs(1-f*f);let v,g,x,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const D=1/_;v*=D,g*=D,x=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),x=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),x=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),x=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),x=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(u0).addScaledVector(yd,g),x}intersectSphere(t,i){gr.subVectors(t.center,this.origin);const s=gr.dot(this.direction),l=gr.dot(gr)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,gr)!==null}intersectTriangle(t,i,s,l,c){f0.subVectors(i,t),Sd.subVectors(s,t),d0.crossVectors(f0,Sd);let f=this.direction.dot(d0),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;lo.subVectors(this.origin,t);const m=h*this.direction.dot(Sd.crossVectors(lo,Sd));if(m<0)return null;const p=h*this.direction.dot(f0.cross(lo));if(p<0||m+p>f)return null;const _=-h*lo.dot(d0);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yr extends fl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bx=new Mn,jo=new dg,Md=new Rc,zx=new X,Ed=new X,bd=new X,Td=new X,h0=new X,Ad=new X,Hx=new X,Rd=new X;class Oe extends bn{constructor(t=new Oi,i=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Ad.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(h0.fromBufferAttribute(v,t),f?Ad.addScaledVector(h0,_):Ad.addScaledVector(h0.sub(i),_))}i.add(Ad)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Md.copy(s.boundingSphere),Md.applyMatrix4(c),jo.copy(t.ray).recast(t.near),!(Md.containsPoint(jo.origin)===!1&&(jo.intersectSphere(Md,zx)===null||jo.origin.distanceToSquared(zx)>(t.far-t.near)**2))&&(Bx.copy(c).invert(),jo.copy(t.ray).applyMatrix4(Bx),!(s.boundingBox!==null&&jo.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,jo)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,D=g.length;E<D;E++){const M=g[E],S=f[M.materialIndex],A=Math.max(M.start,x.start),L=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let w=A,I=L;w<I;w+=3){const U=h.getX(w),z=h.getX(w+1),b=h.getX(w+2);l=Cd(this,S,t,s,p,_,v,U,z,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),D=Math.min(h.count,x.start+x.count);for(let M=E,S=D;M<S;M+=3){const A=h.getX(M),L=h.getX(M+1),w=h.getX(M+2);l=Cd(this,f,t,s,p,_,v,A,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,D=g.length;E<D;E++){const M=g[E],S=f[M.materialIndex],A=Math.max(M.start,x.start),L=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let w=A,I=L;w<I;w+=3){const U=w,z=w+1,b=w+2;l=Cd(this,S,t,s,p,_,v,U,z,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),D=Math.min(m.count,x.start+x.count);for(let M=E,S=D;M<S;M+=3){const A=M,L=M+1,w=M+2;l=Cd(this,f,t,s,p,_,v,A,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function QE(r,t,i,s,l,c,f,h){let m;if(t.side===Vi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===br,h),m===null)return null;Rd.copy(h),Rd.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Rd);return p<i.near||p>i.far?null:{distance:p,point:Rd.clone(),object:r}}function Cd(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Ed),r.getVertexPosition(m,bd),r.getVertexPosition(p,Td);const _=QE(r,t,i,s,Ed,bd,Td,Hx);if(_){const v=new X;qa.getBarycoord(Hx,Ed,bd,Td,v),l&&(_.uv=qa.getInterpolatedAttribute(l,h,m,p,v,new Le)),c&&(_.uv1=qa.getInterpolatedAttribute(c,h,m,p,v,new Le)),f&&(_.normal=qa.getInterpolatedAttribute(f,h,m,p,v,new X),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new X,materialIndex:0};qa.getNormal(Ed,bd,Td,g.normal),_.face=g,_.barycoord=v}return _}class hg extends hi{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Ei,_=Ei,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class z0 extends Ka{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rc=new Mn,Gx=new Mn,wd=[],Vx=new vo,JE=new Mn,Du=new Oe,Nu=new Rc;class pg extends Oe{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new z0(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,JE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new vo),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,rc),Vx.copy(t.boundingBox).applyMatrix4(rc),this.boundingBox.union(Vx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rc),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,rc),Nu.copy(t.boundingSphere).applyMatrix4(rc),this.boundingSphere.union(Nu)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Du.geometry=this.geometry,Du.material=this.material,Du.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nu.copy(this.boundingSphere),Nu.applyMatrix4(s),t.ray.intersectsSphere(Nu)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,rc),Gx.multiplyMatrices(s,rc),Du.matrixWorld=Gx,Du.raycast(t,wd);for(let f=0,h=wd.length;f<h;f++){const m=wd[f];m.instanceId=c,m.object=this,i.push(m)}wd.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new z0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new hg(new Float32Array(l*this.count),l,this.count,qh,ja));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const p0=new X,$E=new X,tb=new Ie;class uo{constructor(t=new X(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=p0.subVectors(s,i).cross($E.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(p0),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||tb.getNormalMatrix(t),l=this.coplanarPoint(p0).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zo=new Rc,eb=new Le(.5,.5),Dd=new X;class np{constructor(t=new uo,i=new uo,s=new uo,l=new uo,c=new uo,f=new uo){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=hs,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],x=c[7],E=c[8],D=c[9],M=c[10],S=c[11],A=c[12],L=c[13],w=c[14],I=c[15];if(l[0].setComponents(p-f,x-_,S-E,I-A).normalize(),l[1].setComponents(p+f,x+_,S+E,I+A).normalize(),l[2].setComponents(p+h,x+v,S+D,I+L).normalize(),l[3].setComponents(p-h,x-v,S-D,I-L).normalize(),s)l[4].setComponents(m,g,M,w).normalize(),l[5].setComponents(p-m,x-g,S-M,I-w).normalize();else if(l[4].setComponents(p-m,x-g,S-M,I-w).normalize(),i===hs)l[5].setComponents(p+m,x+g,S+M,I+w).normalize();else if(i===Mc)l[5].setComponents(m,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zo)}intersectsSprite(t){Zo.center.set(0,0,0);const i=eb.distanceTo(t.center);return Zo.radius=.7071067811865476+i,Zo.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zo)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Dd.x=l.normal.x>0?t.max.x:t.min.x,Dd.y=l.normal.y>0?t.max.y:t.min.y,Dd.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dd)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xS extends hi{constructor(t,i,s,l,c=Wn,f=Wn,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const _=this;function v(){_.needsUpdate=!0,_._requestVideoFrameCallbackId=t.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(v))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class mg extends hi{constructor(t=[],i=_o,s,l,c,f,h,m,p,_){super(t,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _c extends hi{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bc extends hi{constructor(t,i,s=gs,l,c,f,h=Ei,m=Ei,p,_=ks,v=1){if(_!==ks&&_!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class yS extends bc{constructor(t,i=gs,s=_o,l,c,f=Ei,h=Ei,m,p=ks){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gg extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xo extends Oi{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,x=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(v,2));function E(D,M,S,A,L,w,I,U,z,b,N){const nt=w/z,G=I/b,j=w/2,$=I/2,tt=U/2,Z=z+1,O=b+1;let B=0,ct=0;const pt=new X;for(let Ct=0;Ct<O;Ct++){const F=Ct*G-$;for(let q=0;q<Z;q++){const _t=q*nt-j;pt[D]=_t*A,pt[M]=F*L,pt[S]=tt,p.push(pt.x,pt.y,pt.z),pt[D]=0,pt[M]=0,pt[S]=U>0?1:-1,_.push(pt.x,pt.y,pt.z),v.push(q/z),v.push(1-Ct/b),B+=1}}for(let Ct=0;Ct<b;Ct++)for(let F=0;F<z;F++){const q=g+F+Z*Ct,_t=g+F+Z*(Ct+1),Ot=g+(F+1)+Z*(Ct+1),qt=g+(F+1)+Z*Ct;m.push(q,_t,qt),m.push(_t,Ot,qt),ct+=6}h.addGroup(x,ct,N),x+=ct,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $u extends Oi{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],h=[],m=[],p=new X,_=new Le;f.push(0,0,0),h.push(0,0,1),m.push(.5,.5);for(let v=0,g=3;v<=i;v++,g+=3){const x=s+v/i*l;p.x=t*Math.cos(x),p.y=t*Math.sin(x),f.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(f[g]/t+1)/2,_.y=(f[g+1]/t+1)/2,m.push(_.x,_.y)}for(let v=1;v<=i;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new un(f,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $u(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class tf extends Oi{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],x=[];let E=0;const D=[],M=s/2;let S=0;A(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(x,2));function A(){const w=new X,I=new X;let U=0;const z=(i-t)/s;for(let b=0;b<=c;b++){const N=[],nt=b/c,G=nt*(i-t)+t;for(let j=0;j<=l;j++){const $=j/l,tt=$*m+h,Z=Math.sin(tt),O=Math.cos(tt);I.x=G*Z,I.y=-nt*s+M,I.z=G*O,v.push(I.x,I.y,I.z),w.set(Z,z,O).normalize(),g.push(w.x,w.y,w.z),x.push($,1-nt),N.push(E++)}D.push(N)}for(let b=0;b<l;b++)for(let N=0;N<c;N++){const nt=D[N][b],G=D[N+1][b],j=D[N+1][b+1],$=D[N][b+1];(t>0||N!==0)&&(_.push(nt,G,$),U+=3),(i>0||N!==c-1)&&(_.push(G,j,$),U+=3)}p.addGroup(S,U,0),S+=U}function L(w){const I=E,U=new Le,z=new X;let b=0;const N=w===!0?t:i,nt=w===!0?1:-1;for(let j=1;j<=l;j++)v.push(0,M*nt,0),g.push(0,nt,0),x.push(.5,.5),E++;const G=E;for(let j=0;j<=l;j++){const tt=j/l*m+h,Z=Math.cos(tt),O=Math.sin(tt);z.x=N*O,z.y=M*nt,z.z=N*Z,v.push(z.x,z.y,z.z),g.push(0,nt,0),U.x=Z*.5+.5,U.y=O*.5*nt+.5,x.push(U.x,U.y),E++}for(let j=0;j<l;j++){const $=I+j,tt=G+j;w===!0?_.push(tt,tt+1,$):_.push(tt+1,tt,$),b+=3}p.addGroup(S,b,w===!0?1:2),S+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ip extends Oi{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];h(l),p(s),_(),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(c.slice(),3)),this.setAttribute("uv",new un(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(A){const L=new X,w=new X,I=new X;for(let U=0;U<i.length;U+=3)x(i[U+0],L),x(i[U+1],w),x(i[U+2],I),m(L,w,I,A)}function m(A,L,w,I){const U=I+1,z=[];for(let b=0;b<=U;b++){z[b]=[];const N=A.clone().lerp(w,b/U),nt=L.clone().lerp(w,b/U),G=U-b;for(let j=0;j<=G;j++)j===0&&b===U?z[b][j]=N:z[b][j]=N.clone().lerp(nt,j/G)}for(let b=0;b<U;b++)for(let N=0;N<2*(U-b)-1;N++){const nt=Math.floor(N/2);N%2===0?(g(z[b][nt+1]),g(z[b+1][nt]),g(z[b][nt])):(g(z[b][nt+1]),g(z[b+1][nt+1]),g(z[b+1][nt]))}}function p(A){const L=new X;for(let w=0;w<c.length;w+=3)L.x=c[w+0],L.y=c[w+1],L.z=c[w+2],L.normalize().multiplyScalar(A),c[w+0]=L.x,c[w+1]=L.y,c[w+2]=L.z}function _(){const A=new X;for(let L=0;L<c.length;L+=3){A.x=c[L+0],A.y=c[L+1],A.z=c[L+2];const w=M(A)/2/Math.PI+.5,I=S(A)/Math.PI+.5;f.push(w,1-I)}E(),v()}function v(){for(let A=0;A<f.length;A+=6){const L=f[A+0],w=f[A+2],I=f[A+4],U=Math.max(L,w,I),z=Math.min(L,w,I);U>.9&&z<.1&&(L<.2&&(f[A+0]+=1),w<.2&&(f[A+2]+=1),I<.2&&(f[A+4]+=1))}}function g(A){c.push(A.x,A.y,A.z)}function x(A,L){const w=A*3;L.x=t[w+0],L.y=t[w+1],L.z=t[w+2]}function E(){const A=new X,L=new X,w=new X,I=new X,U=new Le,z=new Le,b=new Le;for(let N=0,nt=0;N<c.length;N+=9,nt+=6){A.set(c[N+0],c[N+1],c[N+2]),L.set(c[N+3],c[N+4],c[N+5]),w.set(c[N+6],c[N+7],c[N+8]),U.set(f[nt+0],f[nt+1]),z.set(f[nt+2],f[nt+3]),b.set(f[nt+4],f[nt+5]),I.copy(A).add(L).add(w).divideScalar(3);const G=M(I);D(U,nt+0,A,G),D(z,nt+2,L,G),D(b,nt+4,w,G)}}function D(A,L,w,I){I<0&&A.x===1&&(f[L]=A.x-1),w.x===0&&w.z===0&&(f[L]=I/2/Math.PI+.5)}function M(A){return Math.atan2(A.z,-A.x)}function S(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.vertices,t.indices,t.radius,t.detail)}}class SS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,x=(f-_)/g;return(l+x)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new Le:new X);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new X,l=[],c=[],f=[],h=new X,m=new Mn;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new X)}c[0]=new X,f[0]=new X;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),h.crossVectors(l[x-1],l[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Ge(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}f[x].crossVectors(l[x],c[x])}if(i===!0){let x=Math.acos(Ge(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],x*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function _g(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,_,v){let g=(f-c)/p-(h-c)/(p+_)+(h-f)/_,x=(h-f)/_-(m-f)/(_+v)+(m-h)/v;g*=_,x*=_,l(f,h,g,x)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const Nd=new X,m0=new _g,g0=new _g,_0=new _g;class MS extends SS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new X){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(Nd.subVectors(l[0],l[1]).add(l[0]),p=Nd);const v=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(Nd.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Nd),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),x),D=Math.pow(v.distanceToSquared(g),x),M=Math.pow(g.distanceToSquared(_),x);D<1e-4&&(D=1),E<1e-4&&(E=D),M<1e-4&&(M=D),m0.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,D,M),g0.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,D,M),_0.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,D,M)}else this.curveType==="catmullrom"&&(m0.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),g0.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),_0.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(m0.calc(m),g0.calc(m),_0.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new X().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Aa extends Oi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=t/h,g=i/m,x=[],E=[],D=[],M=[];for(let S=0;S<_;S++){const A=S*g-f;for(let L=0;L<p;L++){const w=L*v-c;E.push(w,-A,0),D.push(0,0,1),M.push(L/h),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let A=0;A<h;A++){const L=A+p*S,w=A+p*(S+1),I=A+1+p*(S+1),U=A+1+p*S;x.push(L,w,U),x.push(w,I,U)}this.setIndex(x),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(D,3)),this.setAttribute("uv",new un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.width,t.height,t.widthSegments,t.heightSegments)}}class ap extends Oi{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,x=new X,E=new Le;for(let D=0;D<=l;D++){for(let M=0;M<=s;M++){const S=c+M/s*f;x.x=v*Math.cos(S),x.y=v*Math.sin(S),m.push(x.x,x.y,x.z),p.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,_.push(E.x,E.y)}v+=g}for(let D=0;D<l;D++){const M=D*(s+1);for(let S=0;S<s;S++){const A=S+M,L=A,w=A+s+1,I=A+s+2,U=A+1;h.push(L,w,U),h.push(w,I,U)}}this.setIndex(h),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ap(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sp extends Oi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const _=[],v=new X,g=new X,x=[],E=[],D=[],M=[];for(let S=0;S<=s;S++){const A=[],L=S/s;let w=0;S===0&&f===0?w=.5/i:S===s&&m===Math.PI&&(w=-.5/i);for(let I=0;I<=i;I++){const U=I/i;v.x=-t*Math.cos(l+U*c)*Math.sin(f+L*h),v.y=t*Math.cos(f+L*h),v.z=t*Math.sin(l+U*c)*Math.sin(f+L*h),E.push(v.x,v.y,v.z),g.copy(v).normalize(),D.push(g.x,g.y,g.z),M.push(U+w,1-L),A.push(p++)}_.push(A)}for(let S=0;S<s;S++)for(let A=0;A<i;A++){const L=_[S][A+1],w=_[S][A],I=_[S+1][A],U=_[S+1][A+1];(S!==0||f>0)&&x.push(L,w,U),(S!==s-1||m<Math.PI)&&x.push(w,I,U)}this.setIndex(x),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(D,3)),this.setAttribute("uv",new un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rp extends ip{constructor(t=1,i=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,l,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new rp(t.radius,t.detail)}}class op extends Oi{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:h},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],_=[],v=[],g=new X,x=new X,E=new X;for(let D=0;D<=s;D++){const M=f+D/s*h;for(let S=0;S<=l;S++){const A=S/l*c;x.x=(t+i*Math.cos(M))*Math.cos(A),x.y=(t+i*Math.cos(M))*Math.sin(A),x.z=i*Math.sin(M),p.push(x.x,x.y,x.z),g.x=t*Math.cos(A),g.y=t*Math.sin(A),E.subVectors(x,g).normalize(),_.push(E.x,E.y,E.z),v.push(S/l),v.push(D/s)}}for(let D=1;D<=s;D++)for(let M=1;M<=l;M++){const S=(l+1)*D+M-1,A=(l+1)*(D-1)+M-1,L=(l+1)*(D-1)+M,w=(l+1)*D+M;m.push(S,A,w),m.push(A,L,w)}this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Tc(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ki(r){const t={};for(let i=0;i<r.length;i++){const s=Tc(r[i]);for(const l in s)t[l]=s[l]}return t}function nb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ES(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:en.workingColorSpace}const bS={clone:Tc,merge:Ki};var ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ab=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _s extends fl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ib,this.fragmentShader=ab,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tc(t.uniforms),this.uniformsGroups=nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class TS extends _s{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ta extends fl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nl extends Ta{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class AS extends fl{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=Vh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class RS extends fl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CS extends fl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(kx(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!kx(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function kx(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class wS{constructor(t,i,s){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,h),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=p.length;v<g;v+=2){const x=p[v],E=p[v+1];if(x.global&&(x.lastIndex=0),x.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const DS=new wS;class lp{constructor(t){this.manager=t!==void 0?t:DS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}lp.DEFAULT_MATERIAL_NAME="__DEFAULT";const oc=new WeakMap;class NS extends lp{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=jd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let v=oc.get(f);v===void 0&&(v=[],oc.set(f,v)),v.push({onLoad:i,onError:l})}return f}const h=Ku("img");function m(){_(),i&&i(this);const v=oc.get(this)||[];for(let g=0;g<v.length;g++){const x=v[g];x.onLoad&&x.onLoad(this)}oc.delete(this),c.manager.itemEnd(t)}function p(v){_(),l&&l(v),jd.remove(`image:${t}`);const g=oc.get(this)||[];for(let x=0;x<g.length;x++){const E=g[x];E.onError&&E.onError(v)}oc.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),jd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class LS extends lp{constructor(t){super(t)}load(t,i,s,l){const c=new hi,f=new NS(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class Cc extends bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class US extends Cc{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const v0=new Mn,Xx=new X,Wx=new X;class vg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=ua,this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Xx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xx),Wx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Wx),i.updateMatrixWorld(),v0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(v0,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Mc||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(v0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ld=new X,Ud=new Tr,Bs=new X;class xg extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=hs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ld,Ud,Bs),Bs.x===1&&Bs.y===1&&Bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ld,Ud,Bs.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Ld,Ud,Bs),Bs.x===1&&Bs.y===1&&Bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ld,Ud,Bs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const co=new X,Yx=new Le,qx=new Le;class Qi extends xg{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ec*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ec*2*Math.atan(Math.tan(qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){co.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(co.x,co.y).multiplyScalar(-t/co.z),co.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(co.x,co.y).multiplyScalar(-t/co.z)}getViewSize(t,i){return this.getViewBounds(t,Yx,qx),i.subVectors(qx,Yx)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class sb extends vg{constructor(){super(new Qi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Ec*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zd extends Cc{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new sb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class rb extends vg{constructor(){super(new Qi(90,1,.5,500)),this.isPointLightShadow=!0}}class fo extends Cc{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new rb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class cp extends xg{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ob extends vg{constructor(){super(new cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H0 extends Cc{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new ob}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class OS extends Cc{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const lc=-90,cc=1;class IS extends bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qi(lc,cc,t,i);l.layers=this.layers,this.add(l);const c=new Qi(lc,cc,t,i);c.layers=this.layers,this.add(c);const f=new Qi(lc,cc,t,i);f.layers=this.layers,this.add(f);const h=new Qi(lc,cc,t,i);h.layers=this.layers,this.add(h);const m=new Qi(lc,cc,t,i);m.layers=this.layers,this.add(m);const p=new Qi(lc,cc,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===hs)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Mc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class PS extends Qi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const jx=new Mn;class FS{constructor(t,i,s=0,l=1/0){this.ray=new dg(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):tn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return jx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jx),this}intersectObject(t,i=!0,s=[]){return G0(t,this,s,i),s.sort(Zx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)G0(t[l],this,s,i);return s.sort(Zx),s}}function Zx(r,t){return r.distance-t.distance}function G0(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)G0(c[f],t,i,!0)}}class BS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Kx(r,t,i,s){const l=lb(s);switch(i){case sg:return r*t;case qh:return r*t/l.components*l.byteLength;case jh:return r*t/l.components*l.byteLength;case ll:return r*t*2/l.components*l.byteLength;case Zh:return r*t*2/l.components*l.byteLength;case rg:return r*t*3/l.components*l.byteLength;case Za:return r*t*4/l.components*l.byteLength;case Kh:return r*t*4/l.components*l.byteLength;case ku:case Xu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wu:case Yu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ch:case fh:return Math.max(r,16)*Math.max(t,8)/4;case lh:case uh:return Math.max(r,8)*Math.max(t,8)/2;case dh:case hh:case mh:case gh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ph:case _h:case vh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Th:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case wh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Uh:case Oh:case Ih:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ph:case Fh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Bh:case zh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lb(r){switch(r){case ua:case eg:return{byteLength:1,components:1};case yc:case ng:case Vs:return{byteLength:2,components:1};case Wh:case Yh:return{byteLength:2,components:4};case gs:case Xh:case ja:return{byteLength:4,components:1};case ig:case ag:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);function zS(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cb(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<v.length;x++){const E=v[g],D=v[x];D.start<=E.start+E.count+1?E.count=Math.max(E.count,D.start+D.count-E.start):(++g,v[g]=D)}v.length=g+1;for(let x=0,E=v.length;x<E;x++){const D=v[x];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
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
#endif`,db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
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
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
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
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
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
#endif`,bb=`#ifdef USE_BUMPMAP
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
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ub=`#define PI 3.141592653589793
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
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ib=`vec3 transformedNormal = objectNormal;
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
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qb=`#ifdef USE_GRADIENTMAP
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
}`,Jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
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
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o1=`PhysicalMaterial material;
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
#endif`,l1=`uniform sampler2D dfgLUT;
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
}`,c1=`
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x1=`#if defined( USE_POINTS_UV )
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
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j1=`float getShadowMask() {
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
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,$1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
}`,_T=`#define DISTANCE
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
}`,vT=`#define DISTANCE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,bT=`uniform vec3 diffuse;
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
}`,TT=`#define LAMBERT
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define MATCAP
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
}`,CT=`#define MATCAP
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
}`,wT=`#define NORMAL
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
}`,DT=`#define NORMAL
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
}`,NT=`#define PHONG
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
}`,LT=`#define PHONG
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
}`,UT=`#define STANDARD
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
}`,OT=`#define STANDARD
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
}`,IT=`#define TOON
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
}`,PT=`#define TOON
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
}`,FT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,HT=`uniform vec3 color;
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
}`,GT=`uniform float rotation;
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
}`,VT=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:ub,alphahash_pars_fragment:fb,alphamap_fragment:db,alphamap_pars_fragment:hb,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:xb,begin_vertex:yb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:bb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Cb,color_fragment:wb,color_pars_fragment:Db,color_pars_vertex:Nb,color_vertex:Lb,common:Ub,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Pb,displacementmap_vertex:Fb,emissivemap_fragment:Bb,emissivemap_pars_fragment:zb,colorspace_fragment:Hb,colorspace_pars_fragment:Gb,envmap_fragment:Vb,envmap_common_pars_fragment:kb,envmap_pars_fragment:Xb,envmap_pars_vertex:Wb,envmap_physical_pars_fragment:n1,envmap_vertex:Yb,fog_vertex:qb,fog_pars_vertex:jb,fog_fragment:Zb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Qb,lightmap_pars_fragment:Jb,lights_lambert_fragment:$b,lights_lambert_pars_fragment:t1,lights_pars_begin:e1,lights_toon_fragment:i1,lights_toon_pars_fragment:a1,lights_phong_fragment:s1,lights_phong_pars_fragment:r1,lights_physical_fragment:o1,lights_physical_pars_fragment:l1,lights_fragment_begin:c1,lights_fragment_maps:u1,lights_fragment_end:f1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:_1,map_particle_fragment:v1,map_particle_pars_fragment:x1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:S1,morphinstance_vertex:M1,morphcolor_vertex:E1,morphnormal_vertex:b1,morphtarget_pars_vertex:T1,morphtarget_vertex:A1,normal_fragment_begin:R1,normal_fragment_maps:C1,normal_pars_fragment:w1,normal_pars_vertex:D1,normal_vertex:N1,normalmap_pars_fragment:L1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:P1,opaque_fragment:F1,packing:B1,premultiplied_alpha_fragment:z1,project_vertex:H1,dithering_fragment:G1,dithering_pars_fragment:V1,roughnessmap_fragment:k1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:Y1,shadowmap_vertex:q1,shadowmask_pars_fragment:j1,skinbase_vertex:Z1,skinning_pars_vertex:K1,skinning_vertex:Q1,skinnormal_vertex:J1,specularmap_fragment:$1,specularmap_pars_fragment:tT,tonemapping_fragment:eT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:aT,uv_pars_fragment:sT,uv_pars_vertex:rT,uv_vertex:oT,worldpos_vertex:lT,background_vert:cT,background_frag:uT,backgroundCube_vert:fT,backgroundCube_frag:dT,cube_vert:hT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distance_vert:_T,distance_frag:vT,equirect_vert:xT,equirect_frag:yT,linedashed_vert:ST,linedashed_frag:MT,meshbasic_vert:ET,meshbasic_frag:bT,meshlambert_vert:TT,meshlambert_frag:AT,meshmatcap_vert:RT,meshmatcap_frag:CT,meshnormal_vert:wT,meshnormal_frag:DT,meshphong_vert:NT,meshphong_frag:LT,meshphysical_vert:UT,meshphysical_frag:OT,meshtoon_vert:IT,meshtoon_frag:PT,points_vert:FT,points_frag:BT,shadow_vert:zT,shadow_frag:HT,sprite_vert:GT,sprite_frag:VT},Yt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ds={basic:{uniforms:Ki([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ki([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ki([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ki([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ki([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ki([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ki([Yt.points,Yt.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ki([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ki([Yt.common,Yt.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ki([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ki([Yt.sprite,Yt.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Ki([Yt.common,Yt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Ki([Yt.lights,Yt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ds.physical={uniforms:Ki([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Od={r:0,b:0,g:0},Ko=new Ra,kT=new Mn;function XT(r,t,i,s,l,c){const f=new ge(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function x(A){let L=A.isScene===!0?A.background:null;if(L&&L.isTexture){const w=A.backgroundBlurriness>0;L=t.get(L,w)}return L}function E(A){let L=!1;const w=x(A);w===null?M(f,h):w&&w.isColor&&(M(w,1),L=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(A,L){const w=x(L);w&&(w.isCubeTexture||w.mapping===ef)?(p===void 0&&(p=new Oe(new xo(1,1,1),new _s({name:"BackgroundCubeMaterial",uniforms:Tc(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ko.copy(L.backgroundRotation),Ko.x*=-1,Ko.y*=-1,Ko.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ko.y*=-1,Ko.z*=-1),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(Ko)),p.material.toneMapped=en.getTransfer(w.colorSpace)!==cn,(_!==w||v!==w.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=w,v=w.version,g=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Oe(new Aa(2,2),new _s({name:"BackgroundMaterial",uniforms:Tc(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=en.getTransfer(w.colorSpace)!==cn,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,v=w.version,g=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function M(A,L){A.getRGB(Od,ES(r)),i.buffers.color.setClear(Od.r,Od.g,Od.b,L,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,L=1){f.set(A),h=L,M(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,M(f,h)},render:E,addToRenderList:D,dispose:S}}function WT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(G,j,$,tt,Z){let O=!1;const B=v(G,tt,$,j);c!==B&&(c=B,p(c.object)),O=x(G,tt,$,Z),O&&E(G,tt,$,Z),Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,w(G,j,$,tt),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,j,$,tt){const Z=tt.wireframe===!0;let O=s[j.id];O===void 0&&(O={},s[j.id]=O);const B=G.isInstancedMesh===!0?G.id:0;let ct=O[B];ct===void 0&&(ct={},O[B]=ct);let pt=ct[$.id];pt===void 0&&(pt={},ct[$.id]=pt);let Ct=pt[Z];return Ct===void 0&&(Ct=g(m()),pt[Z]=Ct),Ct}function g(G){const j=[],$=[],tt=[];for(let Z=0;Z<i;Z++)j[Z]=0,$[Z]=0,tt[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:$,attributeDivisors:tt,object:G,attributes:{},index:null}}function x(G,j,$,tt){const Z=c.attributes,O=j.attributes;let B=0;const ct=$.getAttributes();for(const pt in ct)if(ct[pt].location>=0){const F=Z[pt];let q=O[pt];if(q===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),F===void 0||F.attribute!==q||q&&F.data!==q.data)return!0;B++}return c.attributesNum!==B||c.index!==tt}function E(G,j,$,tt){const Z={},O=j.attributes;let B=0;const ct=$.getAttributes();for(const pt in ct)if(ct[pt].location>=0){let F=O[pt];F===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(F=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(F=G.instanceColor));const q={};q.attribute=F,F&&F.data&&(q.data=F.data),Z[pt]=q,B++}c.attributes=Z,c.attributesNum=B,c.index=tt}function D(){const G=c.newAttributes;for(let j=0,$=G.length;j<$;j++)G[j]=0}function M(G){S(G,0)}function S(G,j){const $=c.newAttributes,tt=c.enabledAttributes,Z=c.attributeDivisors;$[G]=1,tt[G]===0&&(r.enableVertexAttribArray(G),tt[G]=1),Z[G]!==j&&(r.vertexAttribDivisor(G,j),Z[G]=j)}function A(){const G=c.newAttributes,j=c.enabledAttributes;for(let $=0,tt=j.length;$<tt;$++)j[$]!==G[$]&&(r.disableVertexAttribArray($),j[$]=0)}function L(G,j,$,tt,Z,O,B){B===!0?r.vertexAttribIPointer(G,j,$,Z,O):r.vertexAttribPointer(G,j,$,tt,Z,O)}function w(G,j,$,tt){D();const Z=tt.attributes,O=$.getAttributes(),B=j.defaultAttributeValues;for(const ct in O){const pt=O[ct];if(pt.location>=0){let Ct=Z[ct];if(Ct===void 0&&(ct==="instanceMatrix"&&G.instanceMatrix&&(Ct=G.instanceMatrix),ct==="instanceColor"&&G.instanceColor&&(Ct=G.instanceColor)),Ct!==void 0){const F=Ct.normalized,q=Ct.itemSize,_t=t.get(Ct);if(_t===void 0)continue;const Ot=_t.buffer,qt=_t.type,it=_t.bytesPerElement,Mt=qt===r.INT||qt===r.UNSIGNED_INT||Ct.gpuType===Xh;if(Ct.isInterleavedBufferAttribute){const wt=Ct.data,Qt=wt.stride,ce=Ct.offset;if(wt.isInstancedInterleavedBuffer){for(let kt=0;kt<pt.locationSize;kt++)S(pt.location+kt,wt.meshPerAttribute);G.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let kt=0;kt<pt.locationSize;kt++)M(pt.location+kt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let kt=0;kt<pt.locationSize;kt++)L(pt.location+kt,q/pt.locationSize,qt,F,Qt*it,(ce+q/pt.locationSize*kt)*it,Mt)}else{if(Ct.isInstancedBufferAttribute){for(let wt=0;wt<pt.locationSize;wt++)S(pt.location+wt,Ct.meshPerAttribute);G.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let wt=0;wt<pt.locationSize;wt++)M(pt.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let wt=0;wt<pt.locationSize;wt++)L(pt.location+wt,q/pt.locationSize,qt,F,q*it,q/pt.locationSize*wt*it,Mt)}}else if(B!==void 0){const F=B[ct];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(pt.location,F);break;case 3:r.vertexAttrib3fv(pt.location,F);break;case 4:r.vertexAttrib4fv(pt.location,F);break;default:r.vertexAttrib1fv(pt.location,F)}}}}A()}function I(){N();for(const G in s){const j=s[G];for(const $ in j){const tt=j[$];for(const Z in tt){const O=tt[Z];for(const B in O)_(O[B].object),delete O[B];delete tt[Z]}}delete s[G]}}function U(G){if(s[G.id]===void 0)return;const j=s[G.id];for(const $ in j){const tt=j[$];for(const Z in tt){const O=tt[Z];for(const B in O)_(O[B].object),delete O[B];delete tt[Z]}}delete s[G.id]}function z(G){for(const j in s){const $=s[j];for(const tt in $){const Z=$[tt];if(Z[G.id]===void 0)continue;const O=Z[G.id];for(const B in O)_(O[B].object),delete O[B];delete Z[G.id]}}}function b(G){for(const j in s){const $=s[j],tt=G.isInstancedMesh===!0?G.id:0,Z=$[tt];if(Z!==void 0){for(const O in Z){const B=Z[O];for(const ct in B)_(B[ct].object),delete B[ct];delete Z[O]}delete $[tt],Object.keys($).length===0&&delete s[j]}}}function N(){nt(),f=!0,c!==l&&(c=l,p(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:nt,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:M,disableUnusedAttributes:A}}function YT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let x=0;for(let E=0;E<v;E++)x+=_[E];i.update(x,s,1)}function m(p,_,v,g){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)f(p[E],_[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let E=0;for(let D=0;D<v;D++)E+=_[D]*g[D];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function qT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Za&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const b=z===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ua&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ja&&!b)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(Me("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:D,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:w,maxSamples:I,samples:U}}function jT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new uo,h=new Ie,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||s!==0||l;return l=g,s=v.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,x){const E=v.clippingPlanes,D=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const A=c?0:s,L=A*4;let w=S.clippingState||null;m.value=w,w=_(E,g,L,x);for(let I=0;I!==L;++I)w[I]=i[I];S.clippingState=w,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=A}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,x,E){const D=v!==null?v.length:0;let M=null;if(D!==0){if(M=m.value,E!==!0||M===null){const S=x+D*4,A=g.matrixWorldInverse;h.getNormalMatrix(A),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,w=x;L!==D;++L,w+=4)f.copy(v[L]).applyMatrix4(A,h),f.normal.toArray(M,w),M[w+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}const go=4,Qx=[.125,.215,.35,.446,.526,.582],il=20,ZT=256,Lu=new cp,Jx=new ge;let x0=null,y0=0,S0=0,M0=!1;const KT=new X;class Hh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=KT}=c;x0=this._renderer.getRenderTarget(),y0=this._renderer.getActiveCubeFace(),S0=this._renderer.getActiveMipmapLevel(),M0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ey(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ty(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(x0,y0,S0),this._renderer.xr.enabled=M0,t.scissorTest=!1,uc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_o||t.mapping===ol?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),x0=this._renderer.getRenderTarget(),y0=this._renderer.getActiveCubeFace(),S0=this._renderer.getActiveMipmapLevel(),M0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Vs,format:Za,colorSpace:cl,depthBuffer:!1},l=$x(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$x(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QT(c)),this._blurMaterial=$T(c,t,i),this._ggxMaterial=JT(c,t,i)}return l}_compileMaterial(t){const i=new Oe(new Oi,t);this._renderer.compile(i,Lu)}_sceneToCubeUV(t,i,s,l,c){const m=new Qi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(Jx),v.toneMapping=ps,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new xo,new yr({name:"PMREM.Background",side:Vi,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let S=!1;const A=t.background;A?A.isColor&&(M.color.copy(A),t.background=null,S=!0):(M.color.copy(Jx),S=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):w===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const I=this._cubeSize;uc(l,w*I,L>2?I:0,I,I),v.setRenderTarget(l),S&&v.render(D,m),v.render(t,m)}v.toneMapping=x,v.autoClear=g,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===_o||t.mapping===ol;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ey()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ty());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;uc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Lu)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,x=v*g,{_lodMax:E}=this,D=this._sizeLods[s],M=3*D*(s>E-go?s-E+go:0),S=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=E-i,uc(c,M,S,3*D,2*D),l.setRenderTarget(c),l.render(h,Lu),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,uc(t,M,S,3*D,2*D),l.setRenderTarget(t),l.render(h,Lu)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&tn("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,x=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*il-1),D=c/E,M=isFinite(c)?1+Math.floor(_*D):il;M>il&&Me(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${il}`);const S=[];let A=0;for(let z=0;z<il;++z){const b=z/D,N=Math.exp(-b*b/2);S.push(N),z===0?A+=N:z<M&&(A+=2*N)}for(let z=0;z<S.length;z++)S[z]=S[z]/A;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const w=this._sizeLods[l],I=3*w*(l>L-go?l-L+go:0),U=4*(this._cubeSize-w);uc(i,I,U,3*w,2*w),m.setRenderTarget(i),m.render(v,Lu)}}function QT(r){const t=[],i=[],s=[];let l=r;const c=r-go+1+Qx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-go?m=Qx[f-r+go-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,E=6,D=3,M=2,S=1,A=new Float32Array(D*E*x),L=new Float32Array(M*E*x),w=new Float32Array(S*E*x);for(let U=0;U<x;U++){const z=U%3*2/3-1,b=U>2?0:-1,N=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];A.set(N,D*E*U),L.set(g,M*E*U);const nt=[U,U,U,U,U,U];w.set(nt,S*E*U)}const I=new Oi;I.setAttribute("position",new Ka(A,D)),I.setAttribute("uv",new Ka(L,M)),I.setAttribute("faceIndex",new Ka(w,S)),s.push(new Oe(I,null)),l>go&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function $x(r,t,i){const s=new ms(r,t,i);return s.texture.mapping=ef,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function uc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function JT(r,t,i){return new _s({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:up(),fragmentShader:`

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
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function $T(r,t,i){const s=new Float32Array(il),l=new X(0,1,0);return new _s({name:"SphericalGaussianBlur",defines:{n:il,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:up(),fragmentShader:`

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
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function ty(){return new _s({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:up(),fragmentShader:`

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
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function ey(){return new _s({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function up(){return`

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
	`}class yg extends ms{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new mg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new xo(5,5,5),c=new _s({name:"CubemapFromEquirect",uniforms:Tc(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vi,blending:Gs});c.uniforms.tEquirect.value=i;const f=new Oe(l,c),h=i.minFilter;return i.minFilter===Mr&&(i.minFilter=Wn),new IS(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function tA(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,x=!1){return g==null?null:x?f(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===Xd||x===Wd)if(t.has(g)){const E=t.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const D=new yg(E.height);return D.fromEquirectangularTexture(r,g),t.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const x=g.mapping,E=x===Xd||x===Wd,D=x===_o||x===ol;if(E||D){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Hh(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const A=g.image;return E&&A&&A.height>0||D&&A&&m(A)?(s===null&&(s=new Hh(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function h(g,x){return x===Xd?g.mapping=_o:x===Wd&&(g.mapping=ol),g}function m(g){let x=0;const E=6;for(let D=0;D<E;D++)g[D]!==void 0&&x++;return x===E}function p(g){const x=g.target;x.removeEventListener("dispose",p);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function eA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qu("WebGLRenderer: "+s+" extension not supported."),l}}}function nA(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const x=c.get(g);x&&(t.remove(x),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function p(v){const g=[],x=v.index,E=v.attributes.position;let D=0;if(E===void 0)return;if(x!==null){const A=x.array;D=x.version;for(let L=0,w=A.length;L<w;L+=3){const I=A[L+0],U=A[L+1],z=A[L+2];g.push(I,U,U,z,z,I)}}else{const A=E.array;D=E.version;for(let L=0,w=A.length/3-1;L<w;L+=3){const I=L+0,U=L+1,z=L+2;g.push(I,U,U,z,z,I)}}const M=new(E.count>=65535?fg:ug)(g,1);M.version=D;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function iA(r,t,i){let s;function l(g){s=g}let c,f;function h(g){c=g.type,f=g.bytesPerElement}function m(g,x){r.drawElements(s,x,c,g*f),i.update(x,s,1)}function p(g,x,E){E!==0&&(r.drawElementsInstanced(s,x,c,g*f,E),i.update(x,s,E))}function _(g,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,g,0,E);let M=0;for(let S=0;S<E;S++)M+=x[S];i.update(M,s,1)}function v(g,x,E,D){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/f,x[S],D[S]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,c,g,0,D,0,E);let S=0;for(let A=0;A<E;A++)S+=x[A]*D[A];i.update(S,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function aA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:tn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sA(r,t,i){const s=new WeakMap,l=new Fn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let nt=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",nt)};var x=nt;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),D===!0&&(w=2),M===!0&&(w=3);let I=h.attributes.position.count*w,U=1;I>t.maxTextureSize&&(U=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*U*4*v),b=new lg(z,I,U,v);b.type=ja,b.needsUpdate=!0;const N=w*4;for(let G=0;G<v;G++){const j=S[G],$=A[G],tt=L[G],Z=I*U*4*G;for(let O=0;O<j.count;O++){const B=O*N;E===!0&&(l.fromBufferAttribute(j,O),z[Z+B+0]=l.x,z[Z+B+1]=l.y,z[Z+B+2]=l.z,z[Z+B+3]=0),D===!0&&(l.fromBufferAttribute($,O),z[Z+B+4]=l.x,z[Z+B+5]=l.y,z[Z+B+6]=l.z,z[Z+B+7]=0),M===!0&&(l.fromBufferAttribute(tt,O),z[Z+B+8]=l.x,z[Z+B+9]=l.y,z[Z+B+10]=l.z,z[Z+B+11]=tt.itemSize===4?l.w:1)}}g={count:v,texture:b,size:new Le(I,U)},s.set(h,g),h.addEventListener("dispose",nt)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const D=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function rA(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==_&&(x.update(),c.set(x,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const oA={[j0]:"LINEAR_TONE_MAPPING",[Z0]:"REINHARD_TONE_MAPPING",[K0]:"CINEON_TONE_MAPPING",[kh]:"ACES_FILMIC_TONE_MAPPING",[J0]:"AGX_TONE_MAPPING",[$0]:"NEUTRAL_TONE_MAPPING",[Q0]:"CUSTOM_TONE_MAPPING"};function lA(r,t,i,s,l){const c=new ms(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ms(t,i,{type:Vs,depthBuffer:!1,stencilBuffer:!1}),h=new Oi;h.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new un([0,2,0,0,2,0],2));const m=new TS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Oe(h,m),_=new cp(-1,1,1,-1,0,1);let v=null,g=null,x=!1,E,D=null,M=[],S=!1;this.setSize=function(A,L){c.setSize(A,L),f.setSize(A,L);for(let w=0;w<M.length;w++){const I=M[w];I.setSize&&I.setSize(A,L)}},this.setEffects=function(A){M=A,S=M.length>0&&M[0].isRenderPass===!0;const L=c.width,w=c.height;for(let I=0;I<M.length;I++){const U=M[I];U.setSize&&U.setSize(L,w)}},this.begin=function(A,L){if(x||A.toneMapping===ps&&M.length===0)return!1;if(D=L,L!==null){const w=L.width,I=L.height;(c.width!==w||c.height!==I)&&this.setSize(w,I)}return S===!1&&A.setRenderTarget(c),E=A.toneMapping,A.toneMapping=ps,!0},this.hasRenderPass=function(){return S},this.end=function(A,L){A.toneMapping=E,x=!0;let w=c,I=f;for(let U=0;U<M.length;U++){const z=M[U];if(z.enabled!==!1&&(z.render(A,I,w,L),z.needsSwap!==!1)){const b=w;w=I,I=b}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,m.defines={},en.getTransfer(v)===cn&&(m.defines.SRGB_TRANSFER="");const U=oA[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(D),A.render(p,_),D=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const HS=new hi,V0=new bc(1,1),GS=new lg,VS=new _S,kS=new mg,ny=[],iy=[],ay=new Float32Array(16),sy=new Float32Array(9),ry=new Float32Array(4);function wc(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=ny[l];if(c===void 0&&(c=new Float32Array(l),ny[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function pi(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function mi(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function fp(r,t){let i=iy[t];i===void 0&&(i=new Int32Array(t),iy[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function cA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pi(i,t))return;r.uniform2fv(this.addr,t),mi(i,t)}}function fA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pi(i,t))return;r.uniform3fv(this.addr,t),mi(i,t)}}function dA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pi(i,t))return;r.uniform4fv(this.addr,t),mi(i,t)}}function hA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pi(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),mi(i,t)}else{if(pi(i,s))return;ry.set(s),r.uniformMatrix2fv(this.addr,!1,ry),mi(i,s)}}function pA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pi(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),mi(i,t)}else{if(pi(i,s))return;sy.set(s),r.uniformMatrix3fv(this.addr,!1,sy),mi(i,s)}}function mA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pi(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),mi(i,t)}else{if(pi(i,s))return;ay.set(s),r.uniformMatrix4fv(this.addr,!1,ay),mi(i,s)}}function gA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function _A(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pi(i,t))return;r.uniform2iv(this.addr,t),mi(i,t)}}function vA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pi(i,t))return;r.uniform3iv(this.addr,t),mi(i,t)}}function xA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pi(i,t))return;r.uniform4iv(this.addr,t),mi(i,t)}}function yA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function SA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pi(i,t))return;r.uniform2uiv(this.addr,t),mi(i,t)}}function MA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pi(i,t))return;r.uniform3uiv(this.addr,t),mi(i,t)}}function EA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pi(i,t))return;r.uniform4uiv(this.addr,t),mi(i,t)}}function bA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(V0.compareFunction=i.isReversedDepthBuffer()?$h:Jh,c=V0):c=HS,i.setTexture2D(t||c,l)}function TA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||VS,l)}function AA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||kS,l)}function RA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||GS,l)}function CA(r){switch(r){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return dA;case 35674:return hA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return yA;case 36294:return SA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}function wA(r,t){r.uniform1fv(this.addr,t)}function DA(r,t){const i=wc(t,this.size,2);r.uniform2fv(this.addr,i)}function NA(r,t){const i=wc(t,this.size,3);r.uniform3fv(this.addr,i)}function LA(r,t){const i=wc(t,this.size,4);r.uniform4fv(this.addr,i)}function UA(r,t){const i=wc(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function OA(r,t){const i=wc(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function IA(r,t){const i=wc(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function PA(r,t){r.uniform1iv(this.addr,t)}function FA(r,t){r.uniform2iv(this.addr,t)}function BA(r,t){r.uniform3iv(this.addr,t)}function zA(r,t){r.uniform4iv(this.addr,t)}function HA(r,t){r.uniform1uiv(this.addr,t)}function GA(r,t){r.uniform2uiv(this.addr,t)}function VA(r,t){r.uniform3uiv(this.addr,t)}function kA(r,t){r.uniform4uiv(this.addr,t)}function XA(r,t,i){const s=this.cache,l=t.length,c=fp(i,l);pi(s,c)||(r.uniform1iv(this.addr,c),mi(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=V0:f=HS;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function WA(r,t,i){const s=this.cache,l=t.length,c=fp(i,l);pi(s,c)||(r.uniform1iv(this.addr,c),mi(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||VS,c[f])}function YA(r,t,i){const s=this.cache,l=t.length,c=fp(i,l);pi(s,c)||(r.uniform1iv(this.addr,c),mi(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||kS,c[f])}function qA(r,t,i){const s=this.cache,l=t.length,c=fp(i,l);pi(s,c)||(r.uniform1iv(this.addr,c),mi(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||GS,c[f])}function jA(r){switch(r){case 5126:return wA;case 35664:return DA;case 35665:return NA;case 35666:return LA;case 35674:return UA;case 35675:return OA;case 35676:return IA;case 5124:case 35670:return PA;case 35667:case 35671:return FA;case 35668:case 35672:return BA;case 35669:case 35673:return zA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return qA}}class ZA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=CA(i.type)}}class KA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jA(i.type)}}class QA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const E0=/(\w+)(\])?(\[|\.)?/g;function oy(r,t){r.seq.push(t),r.map[t.id]=t}function JA(r,t,i){const s=r.name,l=s.length;for(E0.lastIndex=0;;){const c=E0.exec(s),f=E0.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){oy(i,p===void 0?new ZA(h,r,t):new KA(h,r,t));break}else{let v=i.map[h];v===void 0&&(v=new QA(h),oy(i,v)),i=v}}}class Kd{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);JA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function ly(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const $A=37297;let t2=0;function e2(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const cy=new Ie;function n2(r){en._getMatrix(cy,en.workingColorSpace,r);const t=`mat3( ${cy.elements.map(i=>i.toFixed(4))} )`;switch(en.getTransfer(r)){case Zu:return[t,"LinearTransferOETF"];case cn:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function uy(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+e2(r.getShaderSource(t),h)}else return c}function i2(r,t){const i=n2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const a2={[j0]:"Linear",[Z0]:"Reinhard",[K0]:"Cineon",[kh]:"ACESFilmic",[J0]:"AgX",[$0]:"Neutral",[Q0]:"Custom"};function s2(r,t){const i=a2[t];return i===void 0?(Me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Id=new X;function r2(){en.getLuminanceCoefficients(Id);const r=Id.x.toFixed(4),t=Id.y.toFixed(4),i=Id.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hu).join(`
`)}function l2(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function c2(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Hu(r){return r!==""}function fy(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dy(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const u2=/^[ \t]*#include +<([\w\d./]+)>/gm;function k0(r){return r.replace(u2,d2)}const f2=new Map;function d2(r,t){let i=Fe[t];if(i===void 0){const s=f2.get(t);if(s!==void 0)i=Fe[s],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return k0(i)}const h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hy(r){return r.replace(h2,p2)}function p2(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function py(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const m2={[al]:"SHADOWMAP_TYPE_PCF",[gc]:"SHADOWMAP_TYPE_VSM"};function g2(r){return m2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _2={[_o]:"ENVMAP_TYPE_CUBE",[ol]:"ENVMAP_TYPE_CUBE",[ef]:"ENVMAP_TYPE_CUBE_UV"};function v2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const x2={[ol]:"ENVMAP_MODE_REFRACTION"};function y2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":x2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S2={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[eS]:"ENVMAP_BLENDING_MIX",[nS]:"ENVMAP_BLENDING_ADD"};function M2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":S2[r.combine]||"ENVMAP_BLENDING_NONE"}function E2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function b2(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=g2(i),p=v2(i),_=y2(i),v=M2(i),g=E2(i),x=o2(i),E=l2(c),D=l.createProgram();let M,S,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Hu).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Hu).join(`
`),S.length>0&&(S+=`
`)):(M=[py(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hu).join(`
`),S=[py(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ps?"#define TONE_MAPPING":"",i.toneMapping!==ps?Fe.tonemapping_pars_fragment:"",i.toneMapping!==ps?s2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,i2("linearToOutputTexel",i.outputColorSpace),r2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Hu).join(`
`)),f=k0(f),f=fy(f,i),f=dy(f,i),h=k0(h),h=fy(h,i),h=dy(h,i),f=hy(f),h=hy(h),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===F0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===F0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=A+M+f,w=A+S+h,I=ly(l,l.VERTEX_SHADER,L),U=ly(l,l.FRAGMENT_SHADER,w);l.attachShader(D,I),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(G){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(D)||"",$=l.getShaderInfoLog(I)||"",tt=l.getShaderInfoLog(U)||"",Z=j.trim(),O=$.trim(),B=tt.trim();let ct=!0,pt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,I,U);else{const Ct=uy(l,I,"vertex"),F=uy(l,U,"fragment");tn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+Ct+`
`+F)}else Z!==""?Me("WebGLProgram: Program Info Log:",Z):(O===""||B==="")&&(pt=!1);pt&&(G.diagnostics={runnable:ct,programLog:Z,vertexShader:{log:O,prefix:M},fragmentShader:{log:B,prefix:S}})}l.deleteShader(I),l.deleteShader(U),b=new Kd(l,D),N=c2(l,D)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let nt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return nt===!1&&(nt=l.getProgramParameter(D,$A)),nt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t2++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=I,this.fragmentShader=U,this}let T2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new R2(t),i.set(t,s)),s}}class R2{constructor(t){this.id=T2++,this.code=t,this.usedTimes=0}}function C2(r,t,i,s,l,c){const f=new ep,h=new A2,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function D(b,N,nt,G,j){const $=G.fog,tt=j.geometry,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,B=t.get(b.envMap||Z,O),ct=B&&B.mapping===ef?B.image.height:null,pt=x[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&Me("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const Ct=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,F=Ct!==void 0?Ct.length:0;let q=0;tt.morphAttributes.position!==void 0&&(q=1),tt.morphAttributes.normal!==void 0&&(q=2),tt.morphAttributes.color!==void 0&&(q=3);let _t,Ot,qt,it;if(pt){const zt=ds[pt];_t=zt.vertexShader,Ot=zt.fragmentShader}else _t=b.vertexShader,Ot=b.fragmentShader,h.update(b),qt=h.getVertexShaderID(b),it=h.getFragmentShaderID(b);const Mt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Qt=j.isInstancedMesh===!0,ce=j.isBatchedMesh===!0,kt=!!b.map,An=!!b.matcap,de=!!B,Ce=!!b.aoMap,Be=!!b.lightMap,be=!!b.bumpMap,Rn=!!b.normalMap,k=!!b.displacementMap,Tn=!!b.emissiveMap,ke=!!b.metalnessMap,Xe=!!b.roughnessMap,le=b.anisotropy>0,P=b.clearcoat>0,T=b.dispersion>0,K=b.iridescence>0,vt=b.sheen>0,Rt=b.transmission>0,gt=le&&!!b.anisotropyMap,re=P&&!!b.clearcoatMap,Ft=P&&!!b.clearcoatNormalMap,ue=P&&!!b.clearcoatRoughnessMap,pe=K&&!!b.iridescenceMap,Nt=K&&!!b.iridescenceThicknessMap,Dt=vt&&!!b.sheenColorMap,Xt=vt&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Zt=!!b.specularColorMap,Q=!!b.specularIntensityMap,H=Rt&&!!b.transmissionMap,dt=Rt&&!!b.thicknessMap,xt=!!b.gradientMap,Tt=!!b.alphaMap,yt=b.alphaTest>0,ut=!!b.alphaHash,mt=!!b.extensions;let ie=ps;b.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Lt={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:Ot,defines:b.defines,customVertexShaderID:qt,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:ce,batchingColor:ce&&j._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&j.instanceColor!==null,instancingMorph:Qt&&j.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:cl,alphaToCoverage:!!b.alphaToCoverage,map:kt,matcap:An,envMap:de,envMapMode:de&&B.mapping,envMapCubeUVHeight:ct,aoMap:Ce,lightMap:Be,bumpMap:be,normalMap:Rn,displacementMap:k,emissiveMap:Tn,normalMapObjectSpace:Rn&&b.normalMapType===sS,normalMapTangentSpace:Rn&&b.normalMapType===Qh,metalnessMap:ke,roughnessMap:Xe,anisotropy:le,anisotropyMap:gt,clearcoat:P,clearcoatMap:re,clearcoatNormalMap:Ft,clearcoatRoughnessMap:ue,dispersion:T,iridescence:K,iridescenceMap:pe,iridescenceThicknessMap:Nt,sheen:vt,sheenColorMap:Dt,sheenRoughnessMap:Xt,specularMap:Wt,specularColorMap:Zt,specularIntensityMap:Q,transmission:Rt,transmissionMap:H,thicknessMap:dt,gradientMap:xt,opaque:b.transparent===!1&&b.blending===sl&&b.alphaToCoverage===!1,alphaMap:Tt,alphaTest:yt,alphaHash:ut,combine:b.combine,mapUv:kt&&E(b.map.channel),aoMapUv:Ce&&E(b.aoMap.channel),lightMapUv:Be&&E(b.lightMap.channel),bumpMapUv:be&&E(b.bumpMap.channel),normalMapUv:Rn&&E(b.normalMap.channel),displacementMapUv:k&&E(b.displacementMap.channel),emissiveMapUv:Tn&&E(b.emissiveMap.channel),metalnessMapUv:ke&&E(b.metalnessMap.channel),roughnessMapUv:Xe&&E(b.roughnessMap.channel),anisotropyMapUv:gt&&E(b.anisotropyMap.channel),clearcoatMapUv:re&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&E(b.sheenRoughnessMap.channel),specularMapUv:Wt&&E(b.specularMap.channel),specularColorMapUv:Zt&&E(b.specularColorMap.channel),specularIntensityMapUv:Q&&E(b.specularIntensityMap.channel),transmissionMapUv:H&&E(b.transmissionMap.channel),thicknessMapUv:dt&&E(b.thicknessMap.channel),alphaMapUv:Tt&&E(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Rn||le),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!tt.attributes.uv&&(kt||Tt),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||tt.attributes.normal===void 0&&Rn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:j.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&nt.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:kt&&b.map.isVideoTexture===!0&&en.getTransfer(b.map.colorSpace)===cn,decodeVideoTextureEmissive:Tn&&b.emissiveMap.isVideoTexture===!0&&en.getTransfer(b.emissiveMap.colorSpace)===cn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===Vi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:mt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&b.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=m.has(1),Lt.vertexUv2s=m.has(2),Lt.vertexUv3s=m.has(3),m.clear(),Lt}function M(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const nt in b.defines)N.push(nt),N.push(b.defines[nt]);return b.isRawShaderMaterial===!1&&(S(N,b),A(N,b),N.push(r.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function S(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function A(b,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),b.push(f.mask)}function L(b){const N=x[b.type];let nt;if(N){const G=ds[N];nt=bS.clone(G.uniforms)}else nt=b.uniforms;return nt}function w(b,N){let nt=_.get(N);return nt!==void 0?++nt.usedTimes:(nt=new b2(r,N,b,l),p.push(nt),_.set(N,nt)),nt}function I(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function U(b){h.remove(b)}function z(){h.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:L,acquireProgram:w,releaseProgram:I,releaseShaderCache:U,programs:p,dispose:z}}function w2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function D2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function my(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gy(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function h(g,x,E,D,M,S){let A=r[t];return A===void 0?(A={id:g.id,object:g,geometry:x,material:E,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:M,group:S},r[t]=A):(A.id=g.id,A.object=g,A.geometry=x,A.material=E,A.materialVariant=f(g),A.groupOrder=D,A.renderOrder=g.renderOrder,A.z=M,A.group=S),t++,A}function m(g,x,E,D,M,S){const A=h(g,x,E,D,M,S);E.transmission>0?s.push(A):E.transparent===!0?l.push(A):i.push(A)}function p(g,x,E,D,M,S){const A=h(g,x,E,D,M,S);E.transmission>0?s.unshift(A):E.transparent===!0?l.unshift(A):i.unshift(A)}function _(g,x){i.length>1&&i.sort(g||D2),s.length>1&&s.sort(x||my),l.length>1&&l.sort(x||my)}function v(){for(let g=t,x=r.length;g<x;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function N2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new gy,r.set(s,[f])):l>=c.length?(f=new gy,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function L2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new X,color:new ge};break;case"SpotLight":i={position:new X,direction:new X,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=i,i}}}function U2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let O2=0;function I2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function P2(r){const t=new L2,i=U2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const l=new X,c=new Mn,f=new Mn;function h(p){let _=0,v=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,E=0,D=0,M=0,S=0,A=0,L=0,w=0,I=0,U=0,z=0;p.sort(I2);for(let N=0,nt=p.length;N<nt;N++){const G=p[N],j=G.color,$=G.intensity,tt=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===ll?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=j.r*$,v+=j.g*$,g+=j.b*$;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],$);z++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,ct=i.get(G);ct.shadowIntensity=B.intensity,ct.shadowBias=B.bias,ct.shadowNormalBias=B.normalBias,ct.shadowRadius=B.radius,ct.shadowMapSize=B.mapSize,s.directionalShadow[x]=ct,s.directionalShadowMap[x]=Z,s.directionalShadowMatrix[x]=G.shadow.matrix,A++}s.directional[x]=O,x++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(j).multiplyScalar($),O.distance=tt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[D]=O;const B=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,B.updateMatrices(G),G.castShadow&&U++),s.spotLightMatrix[D]=B.matrix,G.castShadow){const ct=i.get(G);ct.shadowIntensity=B.intensity,ct.shadowBias=B.bias,ct.shadowNormalBias=B.normalBias,ct.shadowRadius=B.radius,ct.shadowMapSize=B.mapSize,s.spotShadow[D]=ct,s.spotShadowMap[D]=Z,w++}D++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(j).multiplyScalar($),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const B=G.shadow,ct=i.get(G);ct.shadowIntensity=B.intensity,ct.shadowBias=B.bias,ct.shadowNormalBias=B.normalBias,ct.shadowRadius=B.radius,ct.shadowMapSize=B.mapSize,ct.shadowCameraNear=B.camera.near,ct.shadowCameraFar=B.camera.far,s.pointShadow[E]=ct,s.pointShadowMap[E]=Z,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=O,E++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar($),O.groundColor.copy(G.groundColor).multiplyScalar($),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Yt.LTC_FLOAT_1,s.rectAreaLTC2=Yt.LTC_FLOAT_2):(s.rectAreaLTC1=Yt.LTC_HALF_1,s.rectAreaLTC2=Yt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==x||b.pointLength!==E||b.spotLength!==D||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==A||b.numPointShadows!==L||b.numSpotShadows!==w||b.numSpotMaps!==I||b.numLightProbes!==z)&&(s.directional.length=x,s.spot.length=D,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+I-U,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=z,b.directionalLength=x,b.pointLength=E,b.spotLength=D,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=A,b.numPointShadows=L,b.numSpotShadows=w,b.numSpotMaps=I,b.numLightProbes=z,s.version=O2++)}function m(p,_){let v=0,g=0,x=0,E=0,D=0;const M=_.matrixWorldInverse;for(let S=0,A=p.length;S<A;S++){const L=p[S];if(L.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(L.isSpotLight){const w=s.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(L.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const w=s.hemi[D];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),D++}}}return{setup:h,setupView:m,state:s}}function _y(r){const t=new P2(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function F2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new _y(r),t.set(l,[h])):c>=f.length?(h=new _y(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const B2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
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
}`,H2=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],G2=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],vy=new Mn,Uu=new X,b0=new X;function V2(r,t,i){let s=new np;const l=new Le,c=new Le,f=new Fn,h=new RS,m=new CS,p={},_=i.maxTextureSize,v={[br]:Vi,[Vi]:br,[Xn]:Xn},g=new _s({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:B2,fragmentShader:z2}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Oi;E.setAttribute("position",new Ka(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Oe(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let S=this.type;this.render=function(U,z,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===Py&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=al);const N=r.getRenderTarget(),nt=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Gs),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const $=S!==this.type;$&&z.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(Z=>Z.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,Z=U.length;tt<Z;tt++){const O=U[tt],B=O.shadow;if(B===void 0){Me("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ct=B.getFrameExtents();l.multiply(ct),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ct.x),l.x=c.x*ct.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ct.y),l.y=c.y*ct.y,B.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=pt,B.map===null||$===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===gc){if(O.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ms(l.x,l.y,{format:ll,type:Vs,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new bc(l.x,l.y,ja),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=ks,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ei,B.map.depthTexture.magFilter=Ei}else O.isPointLight?(B.map=new yg(l.x),B.map.depthTexture=new yS(l.x,gs)):(B.map=new ms(l.x,l.y),B.map.depthTexture=new bc(l.x,l.y,gs)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=ks,this.type===al?(B.map.depthTexture.compareFunction=pt?$h:Jh,B.map.depthTexture.minFilter=Wn,B.map.depthTexture.magFilter=Wn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ei,B.map.depthTexture.magFilter=Ei);B.camera.updateProjectionMatrix()}const Ct=B.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<Ct;F++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,F),r.clear();else{F===0&&(r.setRenderTarget(B.map),r.clear());const q=B.getViewport(F);f.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),j.viewport(f)}if(O.isPointLight){const q=B.camera,_t=B.matrix,Ot=O.distance||q.far;Ot!==q.far&&(q.far=Ot,q.updateProjectionMatrix()),Uu.setFromMatrixPosition(O.matrixWorld),q.position.copy(Uu),b0.copy(q.position),b0.add(H2[F]),q.up.copy(G2[F]),q.lookAt(b0),q.updateMatrixWorld(),_t.makeTranslation(-Uu.x,-Uu.y,-Uu.z),vy.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(vy,q.coordinateSystem,q.reversedDepth)}else B.updateMatrices(O);s=B.getFrustum(),w(z,b,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===gc&&A(B,b),B.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(N,nt,G)};function A(U,z){const b=t.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ms(l.x,l.y,{format:ll,type:Vs})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(z,null,b,g,D,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(z,null,b,x,D,null)}function L(U,z,b,N){let nt=null;const G=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)nt=G;else if(nt=b.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const j=nt.uuid,$=z.uuid;let tt=p[j];tt===void 0&&(tt={},p[j]=tt);let Z=tt[$];Z===void 0&&(Z=nt.clone(),tt[$]=Z,z.addEventListener("dispose",I)),nt=Z}if(nt.visible=z.visible,nt.wireframe=z.wireframe,N===gc?nt.side=z.shadowSide!==null?z.shadowSide:z.side:nt.side=z.shadowSide!==null?z.shadowSide:v[z.side],nt.alphaMap=z.alphaMap,nt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,nt.map=z.map,nt.clipShadows=z.clipShadows,nt.clippingPlanes=z.clippingPlanes,nt.clipIntersection=z.clipIntersection,nt.displacementMap=z.displacementMap,nt.displacementScale=z.displacementScale,nt.displacementBias=z.displacementBias,nt.wireframeLinewidth=z.wireframeLinewidth,nt.linewidth=z.linewidth,b.isPointLight===!0&&nt.isMeshDistanceMaterial===!0){const j=r.properties.get(nt);j.light=b}return nt}function w(U,z,b,N,nt){if(U.visible===!1)return;if(U.layers.test(z.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&nt===gc)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const $=t.update(U),tt=U.material;if(Array.isArray(tt)){const Z=$.groups;for(let O=0,B=Z.length;O<B;O++){const ct=Z[O],pt=tt[ct.materialIndex];if(pt&&pt.visible){const Ct=L(U,pt,N,nt);U.onBeforeShadow(r,U,z,b,$,Ct,ct),r.renderBufferDirect(b,null,$,Ct,U,ct),U.onAfterShadow(r,U,z,b,$,Ct,ct)}}}else if(tt.visible){const Z=L(U,tt,N,nt);U.onBeforeShadow(r,U,z,b,$,Z,null),r.renderBufferDirect(b,null,$,Z,U,null),U.onAfterShadow(r,U,z,b,$,Z,null)}}const j=U.children;for(let $=0,tt=j.length;$<tt;$++)w(j[$],z,b,N,nt)}function I(U){U.target.removeEventListener("dispose",I);for(const b in p){const N=p[b],nt=U.target.uuid;nt in N&&(N[nt].dispose(),delete N[nt])}}}function k2(r,t){function i(){let H=!1;const dt=new Fn;let xt=null;const Tt=new Fn(0,0,0,0);return{setMask:function(yt){xt!==yt&&!H&&(r.colorMask(yt,yt,yt,yt),xt=yt)},setLocked:function(yt){H=yt},setClear:function(yt,ut,mt,ie,Lt){Lt===!0&&(yt*=ie,ut*=ie,mt*=ie),dt.set(yt,ut,mt,ie),Tt.equals(dt)===!1&&(r.clearColor(yt,ut,mt,ie),Tt.copy(dt))},reset:function(){H=!1,xt=null,Tt.set(-1,0,0,0)}}}function s(){let H=!1,dt=!1,xt=null,Tt=null,yt=null;return{setReversed:function(ut){if(dt!==ut){const mt=t.get("EXT_clip_control");ut?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),dt=ut;const ie=yt;yt=null,this.setClear(ie)}},getReversed:function(){return dt},setTest:function(ut){ut?Mt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(ut){xt!==ut&&!H&&(r.depthMask(ut),xt=ut)},setFunc:function(ut){if(dt&&(ut=yE[ut]),Tt!==ut){switch(ut){case th:r.depthFunc(r.NEVER);break;case eh:r.depthFunc(r.ALWAYS);break;case nh:r.depthFunc(r.LESS);break;case rl:r.depthFunc(r.LEQUAL);break;case ih:r.depthFunc(r.EQUAL);break;case ah:r.depthFunc(r.GEQUAL);break;case sh:r.depthFunc(r.GREATER);break;case rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Tt=ut}},setLocked:function(ut){H=ut},setClear:function(ut){yt!==ut&&(yt=ut,dt&&(ut=1-ut),r.clearDepth(ut))},reset:function(){H=!1,xt=null,Tt=null,yt=null,dt=!1}}}function l(){let H=!1,dt=null,xt=null,Tt=null,yt=null,ut=null,mt=null,ie=null,Lt=null;return{setTest:function(zt){H||(zt?Mt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(zt){dt!==zt&&!H&&(r.stencilMask(zt),dt=zt)},setFunc:function(zt,ee,Yn){(xt!==zt||Tt!==ee||yt!==Yn)&&(r.stencilFunc(zt,ee,Yn),xt=zt,Tt=ee,yt=Yn)},setOp:function(zt,ee,Yn){(ut!==zt||mt!==ee||ie!==Yn)&&(r.stencilOp(zt,ee,Yn),ut=zt,mt=ee,ie=Yn)},setLocked:function(zt){H=zt},setClear:function(zt){Lt!==zt&&(r.clearStencil(zt),Lt=zt)},reset:function(){H=!1,dt=null,xt=null,Tt=null,yt=null,ut=null,mt=null,ie=null,Lt=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,x=[],E=null,D=!1,M=null,S=null,A=null,L=null,w=null,I=null,U=null,z=new ge(0,0,0),b=0,N=!1,nt=null,G=null,j=null,$=null,tt=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const ct=r.getParameter(r.VERSION);ct.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ct)[1]),O=B>=1):ct.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),O=B>=2);let pt=null,Ct={};const F=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),_t=new Fn().fromArray(F),Ot=new Fn().fromArray(q);function qt(H,dt,xt,Tt){const yt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(H,ut),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let mt=0;mt<xt;mt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,Tt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(dt+mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return ut}const it={};it[r.TEXTURE_2D]=qt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Mt(r.DEPTH_TEST),f.setFunc(rl),be(!1),Rn(L0),Mt(r.CULL_FACE),Ce(Gs);function Mt(H){_[H]!==!0&&(r.enable(H),_[H]=!0)}function wt(H){_[H]!==!1&&(r.disable(H),_[H]=!1)}function Qt(H,dt){return v[H]!==dt?(r.bindFramebuffer(H,dt),v[H]=dt,H===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=dt),H===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function ce(H,dt){let xt=x,Tt=!1;if(H){xt=g.get(dt),xt===void 0&&(xt=[],g.set(dt,xt));const yt=H.textures;if(xt.length!==yt.length||xt[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,mt=yt.length;ut<mt;ut++)xt[ut]=r.COLOR_ATTACHMENT0+ut;xt.length=yt.length,Tt=!0}}else xt[0]!==r.BACK&&(xt[0]=r.BACK,Tt=!0);Tt&&r.drawBuffers(xt)}function kt(H){return E!==H?(r.useProgram(H),E=H,!0):!1}const An={[ho]:r.FUNC_ADD,[By]:r.FUNC_SUBTRACT,[zy]:r.FUNC_REVERSE_SUBTRACT};An[Hy]=r.MIN,An[Gy]=r.MAX;const de={[Vy]:r.ZERO,[ky]:r.ONE,[Xy]:r.SRC_COLOR,[Jd]:r.SRC_ALPHA,[Ky]:r.SRC_ALPHA_SATURATE,[jy]:r.DST_COLOR,[Yy]:r.DST_ALPHA,[Wy]:r.ONE_MINUS_SRC_COLOR,[$d]:r.ONE_MINUS_SRC_ALPHA,[Zy]:r.ONE_MINUS_DST_COLOR,[qy]:r.ONE_MINUS_DST_ALPHA,[Qy]:r.CONSTANT_COLOR,[Jy]:r.ONE_MINUS_CONSTANT_COLOR,[$y]:r.CONSTANT_ALPHA,[tS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ce(H,dt,xt,Tt,yt,ut,mt,ie,Lt,zt){if(H===Gs){D===!0&&(wt(r.BLEND),D=!1);return}if(D===!1&&(Mt(r.BLEND),D=!0),H!==Fy){if(H!==M||zt!==N){if((S!==ho||w!==ho)&&(r.blendEquation(r.FUNC_ADD),S=ho,w=ho),zt)switch(H){case sl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qd:r.blendFunc(r.ONE,r.ONE);break;case U0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case O0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:tn("WebGLState: Invalid blending: ",H);break}else switch(H){case sl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case U0:tn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case O0:tn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tn("WebGLState: Invalid blending: ",H);break}A=null,L=null,I=null,U=null,z.set(0,0,0),b=0,M=H,N=zt}return}yt=yt||dt,ut=ut||xt,mt=mt||Tt,(dt!==S||yt!==w)&&(r.blendEquationSeparate(An[dt],An[yt]),S=dt,w=yt),(xt!==A||Tt!==L||ut!==I||mt!==U)&&(r.blendFuncSeparate(de[xt],de[Tt],de[ut],de[mt]),A=xt,L=Tt,I=ut,U=mt),(ie.equals(z)===!1||Lt!==b)&&(r.blendColor(ie.r,ie.g,ie.b,Lt),z.copy(ie),b=Lt),M=H,N=!1}function Be(H,dt){H.side===Xn?wt(r.CULL_FACE):Mt(r.CULL_FACE);let xt=H.side===Vi;dt&&(xt=!xt),be(xt),H.blending===sl&&H.transparent===!1?Ce(Gs):Ce(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),c.setMask(H.colorWrite);const Tt=H.stencilWrite;h.setTest(Tt),Tt&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tn(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function be(H){nt!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),nt=H)}function Rn(H){H!==Uy?(Mt(r.CULL_FACE),H!==G&&(H===L0?r.cullFace(r.BACK):H===Oy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),G=H}function k(H){H!==j&&(O&&r.lineWidth(H),j=H)}function Tn(H,dt,xt){H?(Mt(r.POLYGON_OFFSET_FILL),($!==dt||tt!==xt)&&($=dt,tt=xt,f.getReversed()&&(dt=-dt),r.polygonOffset(dt,xt))):wt(r.POLYGON_OFFSET_FILL)}function ke(H){H?Mt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Xe(H){H===void 0&&(H=r.TEXTURE0+Z-1),pt!==H&&(r.activeTexture(H),pt=H)}function le(H,dt,xt){xt===void 0&&(pt===null?xt=r.TEXTURE0+Z-1:xt=pt);let Tt=Ct[xt];Tt===void 0&&(Tt={type:void 0,texture:void 0},Ct[xt]=Tt),(Tt.type!==H||Tt.texture!==dt)&&(pt!==xt&&(r.activeTexture(xt),pt=xt),r.bindTexture(H,dt||it[H]),Tt.type=H,Tt.texture=dt)}function P(){const H=Ct[pt];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(H){tn("WebGLState:",H)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(H){tn("WebGLState:",H)}}function vt(){try{r.texSubImage2D(...arguments)}catch(H){tn("WebGLState:",H)}}function Rt(){try{r.texSubImage3D(...arguments)}catch(H){tn("WebGLState:",H)}}function gt(){try{r.compressedTexSubImage2D(...arguments)}catch(H){tn("WebGLState:",H)}}function re(){try{r.compressedTexSubImage3D(...arguments)}catch(H){tn("WebGLState:",H)}}function Ft(){try{r.texStorage2D(...arguments)}catch(H){tn("WebGLState:",H)}}function ue(){try{r.texStorage3D(...arguments)}catch(H){tn("WebGLState:",H)}}function pe(){try{r.texImage2D(...arguments)}catch(H){tn("WebGLState:",H)}}function Nt(){try{r.texImage3D(...arguments)}catch(H){tn("WebGLState:",H)}}function Dt(H){_t.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),_t.copy(H))}function Xt(H){Ot.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Ot.copy(H))}function Wt(H,dt){let xt=p.get(dt);xt===void 0&&(xt=new WeakMap,p.set(dt,xt));let Tt=xt.get(H);Tt===void 0&&(Tt=r.getUniformBlockIndex(dt,H.name),xt.set(H,Tt))}function Zt(H,dt){const Tt=p.get(dt).get(H);m.get(dt)!==Tt&&(r.uniformBlockBinding(dt,Tt,H.__bindingPointIndex),m.set(dt,Tt))}function Q(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},pt=null,Ct={},v={},g=new WeakMap,x=[],E=null,D=!1,M=null,S=null,A=null,L=null,w=null,I=null,U=null,z=new ge(0,0,0),b=0,N=!1,nt=null,G=null,j=null,$=null,tt=null,_t.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Mt,disable:wt,bindFramebuffer:Qt,drawBuffers:ce,useProgram:kt,setBlending:Ce,setMaterial:Be,setFlipSided:be,setCullFace:Rn,setLineWidth:k,setPolygonOffset:Tn,setScissorTest:ke,activeTexture:Xe,bindTexture:le,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:pe,texImage3D:Nt,updateUBOMapping:Wt,uniformBlockBinding:Zt,texStorage2D:Ft,texStorage3D:ue,texSubImage2D:vt,texSubImage3D:Rt,compressedTexSubImage2D:gt,compressedTexSubImage3D:re,scissor:Dt,viewport:Xt,reset:Q}}function X2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,_=new WeakMap;let v;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return x?new OffscreenCanvas(P,T):Ku("canvas")}function D(P,T,K){let vt=1;const Rt=le(P);if((Rt.width>K||Rt.height>K)&&(vt=K/Math.max(Rt.width,Rt.height)),vt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const gt=Math.floor(vt*Rt.width),re=Math.floor(vt*Rt.height);v===void 0&&(v=E(gt,re));const Ft=T?E(gt,re):v;return Ft.width=gt,Ft.height=re,Ft.getContext("2d").drawImage(P,0,0,gt,re),Me("WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+gt+"x"+re+")."),Ft}else return"data"in P&&Me("WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),P;return P}function M(P){return P.generateMipmaps}function S(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,T,K,vt,Rt=!1){if(P!==null){if(r[P]!==void 0)return r[P];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let gt=T;if(T===r.RED&&(K===r.FLOAT&&(gt=r.R32F),K===r.HALF_FLOAT&&(gt=r.R16F),K===r.UNSIGNED_BYTE&&(gt=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(gt=r.R8UI),K===r.UNSIGNED_SHORT&&(gt=r.R16UI),K===r.UNSIGNED_INT&&(gt=r.R32UI),K===r.BYTE&&(gt=r.R8I),K===r.SHORT&&(gt=r.R16I),K===r.INT&&(gt=r.R32I)),T===r.RG&&(K===r.FLOAT&&(gt=r.RG32F),K===r.HALF_FLOAT&&(gt=r.RG16F),K===r.UNSIGNED_BYTE&&(gt=r.RG8)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(gt=r.RG8UI),K===r.UNSIGNED_SHORT&&(gt=r.RG16UI),K===r.UNSIGNED_INT&&(gt=r.RG32UI),K===r.BYTE&&(gt=r.RG8I),K===r.SHORT&&(gt=r.RG16I),K===r.INT&&(gt=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(gt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(gt=r.RGB16UI),K===r.UNSIGNED_INT&&(gt=r.RGB32UI),K===r.BYTE&&(gt=r.RGB8I),K===r.SHORT&&(gt=r.RGB16I),K===r.INT&&(gt=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(gt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(gt=r.RGBA16UI),K===r.UNSIGNED_INT&&(gt=r.RGBA32UI),K===r.BYTE&&(gt=r.RGBA8I),K===r.SHORT&&(gt=r.RGBA16I),K===r.INT&&(gt=r.RGBA32I)),T===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(gt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(gt=r.R11F_G11F_B10F)),T===r.RGBA){const re=Rt?Zu:en.getTransfer(vt);K===r.FLOAT&&(gt=r.RGBA32F),K===r.HALF_FLOAT&&(gt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(gt=re===cn?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(gt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(gt=r.RGB5_A1)}return(gt===r.R16F||gt===r.R32F||gt===r.RG16F||gt===r.RG32F||gt===r.RGBA16F||gt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function w(P,T){let K;return P?T===null||T===gs||T===Sc?K=r.DEPTH24_STENCIL8:T===ja?K=r.DEPTH32F_STENCIL8:T===yc&&(K=r.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gs||T===Sc?K=r.DEPTH_COMPONENT24:T===ja?K=r.DEPTH_COMPONENT32F:T===yc&&(K=r.DEPTH_COMPONENT16),K}function I(P,T){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ei&&P.minFilter!==Wn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function U(P){const T=P.target;T.removeEventListener("dispose",U),b(T),T.isVideoTexture&&_.delete(T)}function z(P){const T=P.target;T.removeEventListener("dispose",z),nt(T)}function b(P){const T=s.get(P);if(T.__webglInit===void 0)return;const K=P.source,vt=g.get(K);if(vt){const Rt=vt[T.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&N(P),Object.keys(vt).length===0&&g.delete(K)}s.remove(P)}function N(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const K=P.source,vt=g.get(K);delete vt[T.__cacheKey],f.memory.textures--}function nt(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(T.__webglFramebuffer[vt]))for(let Rt=0;Rt<T.__webglFramebuffer[vt].length;Rt++)r.deleteFramebuffer(T.__webglFramebuffer[vt][Rt]);else r.deleteFramebuffer(T.__webglFramebuffer[vt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[vt])}else{if(Array.isArray(T.__webglFramebuffer))for(let vt=0;vt<T.__webglFramebuffer.length;vt++)r.deleteFramebuffer(T.__webglFramebuffer[vt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let vt=0;vt<T.__webglColorRenderbuffer.length;vt++)T.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[vt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=P.textures;for(let vt=0,Rt=K.length;vt<Rt;vt++){const gt=s.get(K[vt]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),f.memory.textures--),s.remove(K[vt])}s.remove(P)}let G=0;function j(){G=0}function $(){const P=G;return P>=l.maxTextures&&Me("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function tt(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Z(P,T){const K=s.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const vt=P.image;if(vt===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{it(K,P,T);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function O(P,T){const K=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){it(K,P,T);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function B(P,T){const K=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){it(K,P,T);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function ct(P,T){const K=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){Mt(K,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const pt={[xc]:r.REPEAT,[Hs]:r.CLAMP_TO_EDGE,[oh]:r.MIRRORED_REPEAT},Ct={[Ei]:r.NEAREST,[iS]:r.NEAREST_MIPMAP_NEAREST,[zu]:r.NEAREST_MIPMAP_LINEAR,[Wn]:r.LINEAR,[Yd]:r.LINEAR_MIPMAP_NEAREST,[Mr]:r.LINEAR_MIPMAP_LINEAR},F={[rS]:r.NEVER,[fS]:r.ALWAYS,[oS]:r.LESS,[Jh]:r.LEQUAL,[lS]:r.EQUAL,[$h]:r.GEQUAL,[cS]:r.GREATER,[uS]:r.NOTEQUAL};function q(P,T){if(T.type===ja&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Wn||T.magFilter===Yd||T.magFilter===zu||T.magFilter===Mr||T.minFilter===Wn||T.minFilter===Yd||T.minFilter===zu||T.minFilter===Mr)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,pt[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,pt[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,pt[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Ct[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Ct[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==zu&&T.minFilter!==Mr||T.type===ja&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function _t(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",U));const vt=T.source;let Rt=g.get(vt);Rt===void 0&&(Rt={},g.set(vt,Rt));const gt=tt(T);if(gt!==P.__cacheKey){Rt[gt]===void 0&&(Rt[gt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),Rt[gt].usedTimes++;const re=Rt[P.__cacheKey];re!==void 0&&(Rt[P.__cacheKey].usedTimes--,re.usedTimes===0&&N(T)),P.__cacheKey=gt,P.__webglTexture=Rt[gt].texture}return K}function Ot(P,T,K){return Math.floor(Math.floor(P/K)/T)}function qt(P,T,K,vt){const gt=P.updateRanges;if(gt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,K,vt,T.data);else{gt.sort((Nt,Dt)=>Nt.start-Dt.start);let re=0;for(let Nt=1;Nt<gt.length;Nt++){const Dt=gt[re],Xt=gt[Nt],Wt=Dt.start+Dt.count,Zt=Ot(Xt.start,T.width,4),Q=Ot(Dt.start,T.width,4);Xt.start<=Wt+1&&Zt===Q&&Ot(Xt.start+Xt.count-1,T.width,4)===Zt?Dt.count=Math.max(Dt.count,Xt.start+Xt.count-Dt.start):(++re,gt[re]=Xt)}gt.length=re+1;const Ft=r.getParameter(r.UNPACK_ROW_LENGTH),ue=r.getParameter(r.UNPACK_SKIP_PIXELS),pe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Nt=0,Dt=gt.length;Nt<Dt;Nt++){const Xt=gt[Nt],Wt=Math.floor(Xt.start/4),Zt=Math.ceil(Xt.count/4),Q=Wt%T.width,H=Math.floor(Wt/T.width),dt=Zt,xt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),i.texSubImage2D(r.TEXTURE_2D,0,Q,H,dt,xt,K,vt,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ft),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function it(P,T,K){let vt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=r.TEXTURE_3D);const Rt=_t(P,T),gt=T.source;i.bindTexture(vt,P.__webglTexture,r.TEXTURE0+K);const re=s.get(gt);if(gt.version!==re.__version||Rt===!0){i.activeTexture(r.TEXTURE0+K);const Ft=en.getPrimaries(en.workingColorSpace),ue=T.colorSpace===Sr?null:en.getPrimaries(T.colorSpace),pe=T.colorSpace===Sr||Ft===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Nt=D(T.image,!1,l.maxTextureSize);Nt=Xe(T,Nt);const Dt=c.convert(T.format,T.colorSpace),Xt=c.convert(T.type);let Wt=L(T.internalFormat,Dt,Xt,T.colorSpace,T.isVideoTexture);q(vt,T);let Zt;const Q=T.mipmaps,H=T.isVideoTexture!==!0,dt=re.__version===void 0||Rt===!0,xt=gt.dataReady,Tt=I(T,Nt);if(T.isDepthTexture)Wt=w(T.format===po,T.type),dt&&(H?i.texStorage2D(r.TEXTURE_2D,1,Wt,Nt.width,Nt.height):i.texImage2D(r.TEXTURE_2D,0,Wt,Nt.width,Nt.height,0,Dt,Xt,null));else if(T.isDataTexture)if(Q.length>0){H&&dt&&i.texStorage2D(r.TEXTURE_2D,Tt,Wt,Q[0].width,Q[0].height);for(let yt=0,ut=Q.length;yt<ut;yt++)Zt=Q[yt],H?xt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Zt.width,Zt.height,Dt,Xt,Zt.data):i.texImage2D(r.TEXTURE_2D,yt,Wt,Zt.width,Zt.height,0,Dt,Xt,Zt.data);T.generateMipmaps=!1}else H?(dt&&i.texStorage2D(r.TEXTURE_2D,Tt,Wt,Nt.width,Nt.height),xt&&qt(T,Nt,Dt,Xt)):i.texImage2D(r.TEXTURE_2D,0,Wt,Nt.width,Nt.height,0,Dt,Xt,Nt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Wt,Q[0].width,Q[0].height,Nt.depth);for(let yt=0,ut=Q.length;yt<ut;yt++)if(Zt=Q[yt],T.format!==Za)if(Dt!==null)if(H){if(xt)if(T.layerUpdates.size>0){const mt=Kx(Zt.width,Zt.height,T.format,T.type);for(const ie of T.layerUpdates){const Lt=Zt.data.subarray(ie*mt/Zt.data.BYTES_PER_ELEMENT,(ie+1)*mt/Zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,ie,Zt.width,Zt.height,1,Dt,Lt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,Zt.width,Zt.height,Nt.depth,Dt,Zt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,yt,Wt,Zt.width,Zt.height,Nt.depth,0,Zt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?xt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,Zt.width,Zt.height,Nt.depth,Dt,Xt,Zt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,yt,Wt,Zt.width,Zt.height,Nt.depth,0,Dt,Xt,Zt.data)}else{H&&dt&&i.texStorage2D(r.TEXTURE_2D,Tt,Wt,Q[0].width,Q[0].height);for(let yt=0,ut=Q.length;yt<ut;yt++)Zt=Q[yt],T.format!==Za?Dt!==null?H?xt&&i.compressedTexSubImage2D(r.TEXTURE_2D,yt,0,0,Zt.width,Zt.height,Dt,Zt.data):i.compressedTexImage2D(r.TEXTURE_2D,yt,Wt,Zt.width,Zt.height,0,Zt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?xt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Zt.width,Zt.height,Dt,Xt,Zt.data):i.texImage2D(r.TEXTURE_2D,yt,Wt,Zt.width,Zt.height,0,Dt,Xt,Zt.data)}else if(T.isDataArrayTexture)if(H){if(dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Wt,Nt.width,Nt.height,Nt.depth),xt)if(T.layerUpdates.size>0){const yt=Kx(Nt.width,Nt.height,T.format,T.type);for(const ut of T.layerUpdates){const mt=Nt.data.subarray(ut*yt/Nt.data.BYTES_PER_ELEMENT,(ut+1)*yt/Nt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,Nt.width,Nt.height,1,Dt,Xt,mt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Nt.width,Nt.height,Nt.depth,Dt,Xt,Nt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,Nt.width,Nt.height,Nt.depth,0,Dt,Xt,Nt.data);else if(T.isData3DTexture)H?(dt&&i.texStorage3D(r.TEXTURE_3D,Tt,Wt,Nt.width,Nt.height,Nt.depth),xt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Nt.width,Nt.height,Nt.depth,Dt,Xt,Nt.data)):i.texImage3D(r.TEXTURE_3D,0,Wt,Nt.width,Nt.height,Nt.depth,0,Dt,Xt,Nt.data);else if(T.isFramebufferTexture){if(dt)if(H)i.texStorage2D(r.TEXTURE_2D,Tt,Wt,Nt.width,Nt.height);else{let yt=Nt.width,ut=Nt.height;for(let mt=0;mt<Tt;mt++)i.texImage2D(r.TEXTURE_2D,mt,Wt,yt,ut,0,Dt,Xt,null),yt>>=1,ut>>=1}}else if(Q.length>0){if(H&&dt){const yt=le(Q[0]);i.texStorage2D(r.TEXTURE_2D,Tt,Wt,yt.width,yt.height)}for(let yt=0,ut=Q.length;yt<ut;yt++)Zt=Q[yt],H?xt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Dt,Xt,Zt):i.texImage2D(r.TEXTURE_2D,yt,Wt,Dt,Xt,Zt);T.generateMipmaps=!1}else if(H){if(dt){const yt=le(Nt);i.texStorage2D(r.TEXTURE_2D,Tt,Wt,yt.width,yt.height)}xt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,Xt,Nt)}else i.texImage2D(r.TEXTURE_2D,0,Wt,Dt,Xt,Nt);M(T)&&S(vt),re.__version=gt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Mt(P,T,K){if(T.image.length!==6)return;const vt=_t(P,T),Rt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+K);const gt=s.get(Rt);if(Rt.version!==gt.__version||vt===!0){i.activeTexture(r.TEXTURE0+K);const re=en.getPrimaries(en.workingColorSpace),Ft=T.colorSpace===Sr?null:en.getPrimaries(T.colorSpace),ue=T.colorSpace===Sr||re===Ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const pe=T.isCompressedTexture||T.image[0].isCompressedTexture,Nt=T.image[0]&&T.image[0].isDataTexture,Dt=[];for(let ut=0;ut<6;ut++)!pe&&!Nt?Dt[ut]=D(T.image[ut],!0,l.maxCubemapSize):Dt[ut]=Nt?T.image[ut].image:T.image[ut],Dt[ut]=Xe(T,Dt[ut]);const Xt=Dt[0],Wt=c.convert(T.format,T.colorSpace),Zt=c.convert(T.type),Q=L(T.internalFormat,Wt,Zt,T.colorSpace),H=T.isVideoTexture!==!0,dt=gt.__version===void 0||vt===!0,xt=Rt.dataReady;let Tt=I(T,Xt);q(r.TEXTURE_CUBE_MAP,T);let yt;if(pe){H&&dt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,Q,Xt.width,Xt.height);for(let ut=0;ut<6;ut++){yt=Dt[ut].mipmaps;for(let mt=0;mt<yt.length;mt++){const ie=yt[mt];T.format!==Za?Wt!==null?H?xt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt,0,0,ie.width,ie.height,Wt,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt,Q,ie.width,ie.height,0,ie.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt,0,0,ie.width,ie.height,Wt,Zt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt,Q,ie.width,ie.height,0,Wt,Zt,ie.data)}}}else{if(yt=T.mipmaps,H&&dt){yt.length>0&&Tt++;const ut=le(Dt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,Q,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Nt){H?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Dt[ut].width,Dt[ut].height,Wt,Zt,Dt[ut].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Q,Dt[ut].width,Dt[ut].height,0,Wt,Zt,Dt[ut].data);for(let mt=0;mt<yt.length;mt++){const Lt=yt[mt].image[ut].image;H?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt+1,0,0,Lt.width,Lt.height,Wt,Zt,Lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt+1,Q,Lt.width,Lt.height,0,Wt,Zt,Lt.data)}}else{H?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Wt,Zt,Dt[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Q,Wt,Zt,Dt[ut]);for(let mt=0;mt<yt.length;mt++){const ie=yt[mt];H?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt+1,0,0,Wt,Zt,ie.image[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt+1,Q,Wt,Zt,ie.image[ut])}}}M(T)&&S(r.TEXTURE_CUBE_MAP),gt.__version=Rt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function wt(P,T,K,vt,Rt,gt){const re=c.convert(K.format,K.colorSpace),Ft=c.convert(K.type),ue=L(K.internalFormat,re,Ft,K.colorSpace),pe=s.get(T),Nt=s.get(K);if(Nt.__renderTarget=T,!pe.__hasExternalTextures){const Dt=Math.max(1,T.width>>gt),Xt=Math.max(1,T.height>>gt);Rt===r.TEXTURE_3D||Rt===r.TEXTURE_2D_ARRAY?i.texImage3D(Rt,gt,ue,Dt,Xt,T.depth,0,re,Ft,null):i.texImage2D(Rt,gt,ue,Dt,Xt,0,re,Ft,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Tn(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Rt,Nt.__webglTexture,0,k(T)):(Rt===r.TEXTURE_2D||Rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Rt,Nt.__webglTexture,gt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(P,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const vt=T.depthTexture,Rt=vt&&vt.isDepthTexture?vt.type:null,gt=w(T.stencilBuffer,Rt),re=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Tn(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),gt,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),gt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,gt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,P)}else{const vt=T.textures;for(let Rt=0;Rt<vt.length;Rt++){const gt=vt[Rt],re=c.convert(gt.format,gt.colorSpace),Ft=c.convert(gt.type),ue=L(gt.internalFormat,re,Ft,gt.colorSpace);Tn(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),ue,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),ue,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ue,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(P,T,K){const vt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Rt=s.get(T.depthTexture);if(Rt.__renderTarget=T,(!Rt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),vt){if(Rt.__webglInit===void 0&&(Rt.__webglInit=!0,T.depthTexture.addEventListener("dispose",U)),Rt.__webglTexture===void 0){Rt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Rt.__webglTexture),q(r.TEXTURE_CUBE_MAP,T.depthTexture);const pe=c.convert(T.depthTexture.format),Nt=c.convert(T.depthTexture.type);let Dt;T.depthTexture.format===ks?Dt=r.DEPTH_COMPONENT24:T.depthTexture.format===po&&(Dt=r.DEPTH24_STENCIL8);for(let Xt=0;Xt<6;Xt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Dt,T.width,T.height,0,pe,Nt,null)}}else Z(T.depthTexture,0);const gt=Rt.__webglTexture,re=k(T),Ft=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,ue=T.depthTexture.format===po?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===ks)Tn(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,Ft,gt,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,ue,Ft,gt,0);else if(T.depthTexture.format===po)Tn(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,Ft,gt,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,ue,Ft,gt,0);else throw new Error("Unknown depthTexture format")}function kt(P){const T=s.get(P),K=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const vt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),vt){const Rt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,vt.removeEventListener("dispose",Rt)};vt.addEventListener("dispose",Rt),T.__depthDisposeCallback=Rt}T.__boundDepthTexture=vt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let vt=0;vt<6;vt++)ce(T.__webglFramebuffer[vt],P,vt);else{const vt=P.texture.mipmaps;vt&&vt.length>0?ce(T.__webglFramebuffer[0],P,0):ce(T.__webglFramebuffer,P,0)}else if(K){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]===void 0)T.__webglDepthbuffer[vt]=r.createRenderbuffer(),Qt(T.__webglDepthbuffer[vt],P,!1);else{const Rt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,gt)}}else{const vt=P.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Qt(T.__webglDepthbuffer,P,!1);else{const Rt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,gt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function An(P,T,K){const vt=s.get(P);T!==void 0&&wt(vt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&kt(P)}function de(P){const T=P.texture,K=s.get(P),vt=s.get(T);P.addEventListener("dispose",z);const Rt=P.textures,gt=P.isWebGLCubeRenderTarget===!0,re=Rt.length>1;if(re||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=T.version,f.memory.textures++),gt){K.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ft]=[];for(let ue=0;ue<T.mipmaps.length;ue++)K.__webglFramebuffer[Ft][ue]=r.createFramebuffer()}else K.__webglFramebuffer[Ft]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ft=0;Ft<T.mipmaps.length;Ft++)K.__webglFramebuffer[Ft]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(re)for(let Ft=0,ue=Rt.length;Ft<ue;Ft++){const pe=s.get(Rt[Ft]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Tn(P)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ft=0;Ft<Rt.length;Ft++){const ue=Rt[Ft];K.__webglColorRenderbuffer[Ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Ft]);const pe=c.convert(ue.format,ue.colorSpace),Nt=c.convert(ue.type),Dt=L(ue.internalFormat,pe,Nt,ue.colorSpace,P.isXRRenderTarget===!0),Xt=k(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,Dt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.RENDERBUFFER,K.__webglColorRenderbuffer[Ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Qt(K.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(gt){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),q(r.TEXTURE_CUBE_MAP,T);for(let Ft=0;Ft<6;Ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)wt(K.__webglFramebuffer[Ft][ue],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ue);else wt(K.__webglFramebuffer[Ft],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);M(T)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(re){for(let Ft=0,ue=Rt.length;Ft<ue;Ft++){const pe=Rt[Ft],Nt=s.get(pe);let Dt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Nt.__webglTexture),q(Dt,pe),wt(K.__webglFramebuffer,P,pe,r.COLOR_ATTACHMENT0+Ft,Dt,0),M(pe)&&S(Dt)}i.unbindTexture()}else{let Ft=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ft=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ft,vt.__webglTexture),q(Ft,T),T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)wt(K.__webglFramebuffer[ue],P,T,r.COLOR_ATTACHMENT0,Ft,ue);else wt(K.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Ft,0);M(T)&&S(Ft),i.unbindTexture()}P.depthBuffer&&kt(P)}function Ce(P){const T=P.textures;for(let K=0,vt=T.length;K<vt;K++){const Rt=T[K];if(M(Rt)){const gt=A(P),re=s.get(Rt).__webglTexture;i.bindTexture(gt,re),S(gt),i.unbindTexture()}}}const Be=[],be=[];function Rn(P){if(P.samples>0){if(Tn(P)===!1){const T=P.textures,K=P.width,vt=P.height;let Rt=r.COLOR_BUFFER_BIT;const gt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=s.get(P),Ft=T.length>1;if(Ft)for(let pe=0;pe<T.length;pe++)i.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const ue=P.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Rt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Rt|=r.STENCIL_BUFFER_BIT)),Ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const Nt=s.get(T[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Nt,0)}r.blitFramebuffer(0,0,K,vt,0,0,K,vt,Rt,r.NEAREST),m===!0&&(Be.length=0,be.length=0,Be.push(r.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Be.push(gt),be.push(gt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ft)for(let pe=0;pe<T.length;pe++){i.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const Nt=s.get(T[pe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,Nt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function k(P){return Math.min(l.maxSamples,P.samples)}function Tn(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(P){const T=f.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function Xe(P,T){const K=P.colorSpace,vt=P.format,Rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==cl&&K!==Sr&&(en.getTransfer(K)===cn?(vt!==Za||Rt!==ua)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tn("WebGLTextures: Unsupported texture color space:",K)),T}function le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=j,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=ct,this.rebindTextures=An,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function XS(r,t){function i(s,l=Sr){let c;const f=en.getTransfer(l);if(s===ua)return r.UNSIGNED_BYTE;if(s===Wh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ig)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ag)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===eg)return r.BYTE;if(s===ng)return r.SHORT;if(s===yc)return r.UNSIGNED_SHORT;if(s===Xh)return r.INT;if(s===gs)return r.UNSIGNED_INT;if(s===ja)return r.FLOAT;if(s===Vs)return r.HALF_FLOAT;if(s===sg)return r.ALPHA;if(s===rg)return r.RGB;if(s===Za)return r.RGBA;if(s===ks)return r.DEPTH_COMPONENT;if(s===po)return r.DEPTH_STENCIL;if(s===qh)return r.RED;if(s===jh)return r.RED_INTEGER;if(s===ll)return r.RG;if(s===Zh)return r.RG_INTEGER;if(s===Kh)return r.RGBA_INTEGER;if(s===ku||s===Xu||s===Wu||s===Yu)if(f===cn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ku)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ku)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lh||s===ch||s===uh||s===fh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===dh||s===hh)return f===cn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ph)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===mh)return c.COMPRESSED_R11_EAC;if(s===gh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===_h)return c.COMPRESSED_RG11_EAC;if(s===vh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===xh||s===yh||s===Sh||s===Mh||s===Eh||s===bh||s===Th||s===Ah||s===Rh||s===Ch||s===wh||s===Dh||s===Nh||s===Lh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===xh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Eh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Th)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ch)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lh)return f===cn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uh||s===Oh||s===Ih)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Uh)return f===cn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ih)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ph||s===Fh||s===Bh||s===zh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ph)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Fh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sc?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const W2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y2=`
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

}`;class q2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new gg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new _s({vertexShader:W2,fragmentShader:Y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oe(new Aa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j2 extends ul{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,x=null,E=null;const D=typeof XRWebGLBinding<"u",M=new q2,S={},A=i.getContextAttributes();let L=null,w=null;const I=[],U=[],z=new Le;let b=null;const N=new Qi;N.viewport=new Fn;const nt=new Qi;nt.viewport=new Fn;const G=[N,nt],j=new PS;let $=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let Mt=I[it];return Mt===void 0&&(Mt=new qd,I[it]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(it){let Mt=I[it];return Mt===void 0&&(Mt=new qd,I[it]=Mt),Mt.getGripSpace()},this.getHand=function(it){let Mt=I[it];return Mt===void 0&&(Mt=new qd,I[it]=Mt),Mt.getHandSpace()};function Z(it){const Mt=U.indexOf(it.inputSource);if(Mt===-1)return;const wt=I[Mt];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||f),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function O(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let it=0;it<I.length;it++){const Mt=U[it];Mt!==null&&(U[it]=null,I[it].disconnect(Mt))}$=null,tt=null,M.reset();for(const it in S)delete S[it];t.setRenderTarget(L),x=null,g=null,v=null,l=null,w=null,qt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),A.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Qt=null,ce=null;A.depth&&(ce=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=A.stencil?po:ks,Qt=A.stencil?Sc:gs);const kt={colorFormat:i.RGBA8,depthFormat:ce,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(kt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),w=new ms(g.textureWidth,g.textureHeight,{format:Za,type:ua,depthTexture:new bc(g.textureWidth,g.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const wt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new ms(x.framebufferWidth,x.framebufferHeight,{format:Za,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),qt.setContext(l),qt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(it){for(let Mt=0;Mt<it.removed.length;Mt++){const wt=it.removed[Mt],Qt=U.indexOf(wt);Qt>=0&&(U[Qt]=null,I[Qt].disconnect(wt))}for(let Mt=0;Mt<it.added.length;Mt++){const wt=it.added[Mt];let Qt=U.indexOf(wt);if(Qt===-1){for(let kt=0;kt<I.length;kt++)if(kt>=U.length){U.push(wt),Qt=kt;break}else if(U[kt]===null){U[kt]=wt,Qt=kt;break}if(Qt===-1)break}const ce=I[Qt];ce&&ce.connect(wt)}}const ct=new X,pt=new X;function Ct(it,Mt,wt){ct.setFromMatrixPosition(Mt.matrixWorld),pt.setFromMatrixPosition(wt.matrixWorld);const Qt=ct.distanceTo(pt),ce=Mt.projectionMatrix.elements,kt=wt.projectionMatrix.elements,An=ce[14]/(ce[10]-1),de=ce[14]/(ce[10]+1),Ce=(ce[9]+1)/ce[5],Be=(ce[9]-1)/ce[5],be=(ce[8]-1)/ce[0],Rn=(kt[8]+1)/kt[0],k=An*be,Tn=An*Rn,ke=Qt/(-be+Rn),Xe=ke*-be;if(Mt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Xe),it.translateZ(ke),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),ce[10]===-1)it.projectionMatrix.copy(Mt.projectionMatrix),it.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const le=An+ke,P=de+ke,T=k-Xe,K=Tn+(Qt-Xe),vt=Ce*de/P*le,Rt=Be*de/P*le;it.projectionMatrix.makePerspective(T,K,vt,Rt,le,P),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function F(it,Mt){Mt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(Mt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let Mt=it.near,wt=it.far;M.texture!==null&&(M.depthNear>0&&(Mt=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),j.near=nt.near=N.near=Mt,j.far=nt.far=N.far=wt,($!==j.near||tt!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),$=j.near,tt=j.far),j.layers.mask=it.layers.mask|6,N.layers.mask=j.layers.mask&-5,nt.layers.mask=j.layers.mask&-3;const Qt=it.parent,ce=j.cameras;F(j,Qt);for(let kt=0;kt<ce.length;kt++)F(ce[kt],Qt);ce.length===2?Ct(j,N,nt):j.projectionMatrix.copy(N.projectionMatrix),q(it,j,Qt)};function q(it,Mt,wt){wt===null?it.matrix.copy(Mt.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(Mt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(Mt.projectionMatrix),it.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ec*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&x===null))return m},this.setFoveation=function(it){m=it,g!==null&&(g.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(it){return S[it]};let _t=null;function Ot(it,Mt){if(_=Mt.getViewerPose(p||f),E=Mt,_!==null){const wt=_.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let Qt=!1;wt.length!==j.cameras.length&&(j.cameras.length=0,Qt=!0);for(let de=0;de<wt.length;de++){const Ce=wt[de];let Be=null;if(x!==null)Be=x.getViewport(Ce);else{const Rn=v.getViewSubImage(g,Ce);Be=Rn.viewport,de===0&&(t.setRenderTargetTextures(w,Rn.colorTexture,Rn.depthStencilTexture),t.setRenderTarget(w))}let be=G[de];be===void 0&&(be=new Qi,be.layers.enable(de),be.viewport=new Fn,G[de]=be),be.matrix.fromArray(Ce.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ce.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Be.x,Be.y,Be.width,Be.height),de===0&&(j.matrix.copy(be.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Qt===!0&&j.cameras.push(be)}const ce=l.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const de=v.getDepthInformation(wt[0]);de&&de.isValid&&de.texture&&M.init(de,l.renderState)}if(ce&&ce.includes("camera-access")&&D){t.state.unbindTexture(),v=s.getBinding();for(let de=0;de<wt.length;de++){const Ce=wt[de].camera;if(Ce){let Be=S[Ce];Be||(Be=new gg,S[Ce]=Be);const be=v.getCameraImage(Ce);Be.sourceTexture=be}}}}for(let wt=0;wt<I.length;wt++){const Qt=U[wt],ce=I[wt];Qt!==null&&ce!==void 0&&ce.update(Qt,Mt,p||f)}_t&&_t(it,Mt),Mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Mt}),E=null}const qt=new zS;qt.setAnimationLoop(Ot),this.setAnimationLoop=function(it){_t=it},this.dispose=function(){}}}const Qo=new Ra,Z2=new Mn;function K2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,ES(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,A,L,w){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&x(M,S,w)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),D(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?m(M,S,A,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Vi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Vi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const A=t.get(S),L=A.envMap,w=A.envMapRotation;L&&(M.envMap.value=L,Qo.copy(w),Qo.x*=-1,Qo.y*=-1,Qo.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Qo.y*=-1,Qo.z*=-1),M.envMapRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(Qo)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,A,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*A,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,A){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Vi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=A.texture,M.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function D(M,S){const A=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(A.matrixWorld),M.nearDistance.value=A.shadow.camera.near,M.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Q2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,L){const w=L.program;s.uniformBlockBinding(A,w)}function p(A,L){let w=l[A.id];w===void 0&&(E(A),w=_(A),l[A.id]=w,A.addEventListener("dispose",M));const I=L.program;s.updateUBOMapping(A,I);const U=t.render.frame;c[A.id]!==U&&(g(A),c[A.id]=U)}function _(A){const L=v();A.__bindingPointIndex=L;const w=r.createBuffer(),I=A.__size,U=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,I,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function v(){for(let A=0;A<h;A++)if(f.indexOf(A)===-1)return f.push(A),A;return tn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const L=l[A.id],w=A.uniforms,I=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let U=0,z=w.length;U<z;U++){const b=Array.isArray(w[U])?w[U]:[w[U]];for(let N=0,nt=b.length;N<nt;N++){const G=b[N];if(x(G,U,N,I)===!0){const j=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let tt=0;for(let Z=0;Z<$.length;Z++){const O=$[Z],B=D(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,j+tt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,tt),tt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(A,L,w,I){const U=A.value,z=L+"_"+w;if(I[z]===void 0)return typeof U=="number"||typeof U=="boolean"?I[z]=U:I[z]=U.clone(),!0;{const b=I[z];if(typeof U=="number"||typeof U=="boolean"){if(b!==U)return I[z]=U,!0}else if(b.equals(U)===!1)return b.copy(U),!0}return!1}function E(A){const L=A.uniforms;let w=0;const I=16;for(let z=0,b=L.length;z<b;z++){const N=Array.isArray(L[z])?L[z]:[L[z]];for(let nt=0,G=N.length;nt<G;nt++){const j=N[nt],$=Array.isArray(j.value)?j.value:[j.value];for(let tt=0,Z=$.length;tt<Z;tt++){const O=$[tt],B=D(O),ct=w%I,pt=ct%B.boundary,Ct=ct+pt;w+=pt,Ct!==0&&I-Ct<B.storage&&(w+=I-Ct),j.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=B.storage}}}const U=w%I;return U>0&&(w+=I-U),A.__size=w,A.__cache={},this}function D(A){const L={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(L.boundary=4,L.storage=4):A.isVector2?(L.boundary=8,L.storage=8):A.isVector3||A.isColor?(L.boundary=16,L.storage=12):A.isVector4?(L.boundary=16,L.storage=16):A.isMatrix3?(L.boundary=48,L.storage=48):A.isMatrix4?(L.boundary=64,L.storage=64):A.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",A),L}function M(A){const L=A.target;L.removeEventListener("dispose",M);const w=f.indexOf(L.__bindingPointIndex);f.splice(w,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const A in l)r.deleteBuffer(l[A]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const J2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zs=null;function $2(){return zs===null&&(zs=new hg(J2,16,16,ll,Vs),zs.name="DFG_LUT",zs.minFilter=Wn,zs.magFilter=Wn,zs.wrapS=Hs,zs.wrapT=Hs,zs.generateMipmaps=!1,zs.needsUpdate=!0),zs}class WS{constructor(t={}){const{canvas:i=hS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=ua}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const D=x,M=new Set([Kh,Zh,jh]),S=new Set([ua,gs,yc,Sc,Wh,Yh]),A=new Uint32Array(4),L=new Int32Array(4);let w=null,I=null;const U=[],z=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ps,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let nt=!1;this._outputColorSpace=Kn;let G=0,j=0,$=null,tt=-1,Z=null;const O=new Fn,B=new Fn;let ct=null;const pt=new ge(0);let Ct=0,F=i.width,q=i.height,_t=1,Ot=null,qt=null;const it=new Fn(0,0,F,q),Mt=new Fn(0,0,F,q);let wt=!1;const Qt=new np;let ce=!1,kt=!1;const An=new Mn,de=new X,Ce=new Fn,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Rn(){return $===null?_t:1}let k=s;function Tn(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gh}`),i.addEventListener("webglcontextlost",mt,!1),i.addEventListener("webglcontextrestored",ie,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),k===null){const Y="webgl2";if(k=Tn(Y,C),k===null)throw Tn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw tn("WebGLRenderer: "+C.message),C}let ke,Xe,le,P,T,K,vt,Rt,gt,re,Ft,ue,pe,Nt,Dt,Xt,Wt,Zt,Q,H,dt,xt,Tt;function yt(){ke=new eA(k),ke.init(),dt=new XS(k,ke),Xe=new qT(k,ke,t,dt),le=new k2(k,ke),Xe.reversedDepthBuffer&&g&&le.buffers.depth.setReversed(!0),P=new aA(k),T=new w2,K=new X2(k,ke,le,T,Xe,dt,P),vt=new tA(N),Rt=new cb(k),xt=new WT(k,Rt),gt=new nA(k,Rt,P,xt),re=new rA(k,gt,Rt,xt,P),Zt=new sA(k,Xe,K),Dt=new jT(T),Ft=new C2(N,vt,ke,Xe,xt,Dt),ue=new K2(N,T),pe=new N2,Nt=new F2(ke),Wt=new XT(N,vt,le,re,E,m),Xt=new V2(N,re,Xe),Tt=new Q2(k,P,Xe,le),Q=new YT(k,ke,P),H=new iA(k,ke,P),P.programs=Ft.programs,N.capabilities=Xe,N.extensions=ke,N.properties=T,N.renderLists=pe,N.shadowMap=Xt,N.state=le,N.info=P}yt(),D!==ua&&(b=new lA(D,i.width,i.height,l,c));const ut=new j2(N,k);this.xr=ut,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=ke.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ke.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(C){C!==void 0&&(_t=C,this.setSize(F,q,!1))},this.getSize=function(C){return C.set(F,q)},this.setSize=function(C,Y,ft=!0){if(ut.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,q=Y,i.width=Math.floor(C*_t),i.height=Math.floor(Y*_t),ft===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(F*_t,q*_t).floor()},this.setDrawingBufferSize=function(C,Y,ft){F=C,q=Y,_t=ft,i.width=Math.floor(C*ft),i.height=Math.floor(Y*ft),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(D===ua){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,Y,ft,ot){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,Y,ft,ot),le.viewport(O.copy(it).multiplyScalar(_t).round())},this.getScissor=function(C){return C.copy(Mt)},this.setScissor=function(C,Y,ft,ot){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,Y,ft,ot),le.scissor(B.copy(Mt).multiplyScalar(_t).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(C){le.setScissorTest(wt=C)},this.setOpaqueSort=function(C){Ot=C},this.setTransparentSort=function(C){qt=C},this.getClearColor=function(C){return C.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ft=!0){let ot=0;if(C){let et=!1;if($!==null){const Ht=$.texture.format;et=M.has(Ht)}if(et){const Ht=$.texture.type,jt=S.has(Ht),Gt=Wt.getClearColor(),Jt=Wt.getClearAlpha(),ne=Gt.r,xe=Gt.g,ve=Gt.b;jt?(A[0]=ne,A[1]=xe,A[2]=ve,A[3]=Jt,k.clearBufferuiv(k.COLOR,0,A)):(L[0]=ne,L[1]=xe,L[2]=ve,L[3]=Jt,k.clearBufferiv(k.COLOR,0,L))}else ot|=k.COLOR_BUFFER_BIT}Y&&(ot|=k.DEPTH_BUFFER_BIT),ft&&(ot|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&k.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",mt,!1),i.removeEventListener("webglcontextrestored",ie,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Wt.dispose(),pe.dispose(),Nt.dispose(),T.dispose(),vt.dispose(),re.dispose(),xt.dispose(),Tt.dispose(),Ft.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ki),ut.removeEventListener("sessionend",Qn),Xi.stop()};function mt(C){C.preventDefault(),B0("WebGLRenderer: Context Lost."),nt=!0}function ie(){B0("WebGLRenderer: Context Restored."),nt=!1;const C=P.autoReset,Y=Xt.enabled,ft=Xt.autoUpdate,ot=Xt.needsUpdate,et=Xt.type;yt(),P.autoReset=C,Xt.enabled=Y,Xt.autoUpdate=ft,Xt.needsUpdate=ot,Xt.type=et}function Lt(C){tn("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function zt(C){const Y=C.target;Y.removeEventListener("dispose",zt),ee(Y)}function ee(C){Yn(C),T.remove(C)}function Yn(C){const Y=T.get(C).programs;Y!==void 0&&(Y.forEach(function(ft){Ft.releaseProgram(ft)}),C.isShaderMaterial&&Ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ft,ot,et,Ht){Y===null&&(Y=Be);const jt=et.isMesh&&et.matrixWorld.determinant()<0,Gt=Da(C,Y,ft,ot,et);le.setMaterial(ot,jt);let Jt=ft.index,ne=1;if(ot.wireframe===!0){if(Jt=gt.getWireframeAttribute(ft),Jt===void 0)return;ne=2}const xe=ft.drawRange,ve=ft.attributes.position;let $t=xe.start*ne,Te=(xe.start+xe.count)*ne;Ht!==null&&($t=Math.max($t,Ht.start*ne),Te=Math.min(Te,(Ht.start+Ht.count)*ne)),Jt!==null?($t=Math.max($t,0),Te=Math.min(Te,Jt.count)):ve!=null&&($t=Math.max($t,0),Te=Math.min(Te,ve.count));const mn=Te-$t;if(mn<0||mn===1/0)return;xt.setup(et,ot,Gt,ft,Jt);let gn,Je=Q;if(Jt!==null&&(gn=Rt.get(Jt),Je=H,Je.setIndex(gn)),et.isMesh)ot.wireframe===!0?(le.setLineWidth(ot.wireframeLinewidth*Rn()),Je.setMode(k.LINES)):Je.setMode(k.TRIANGLES);else if(et.isLine){let Pn=ot.linewidth;Pn===void 0&&(Pn=1),le.setLineWidth(Pn*Rn()),et.isLineSegments?Je.setMode(k.LINES):et.isLineLoop?Je.setMode(k.LINE_LOOP):Je.setMode(k.LINE_STRIP)}else et.isPoints?Je.setMode(k.POINTS):et.isSprite&&Je.setMode(k.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Qu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Je.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Pn=et._multiDrawStarts,te=et._multiDrawCounts,_i=et._multiDrawCount,ye=Jt?Rt.get(Jt).bytesPerElement:1,oi=T.get(ot).currentProgram.getUniforms();for(let Ti=0;Ti<_i;Ti++)oi.setValue(k,"_gl_DrawID",Ti),Je.render(Pn[Ti]/ye,te[Ti])}else if(et.isInstancedMesh)Je.renderInstances($t,mn,et.count);else if(ft.isInstancedBufferGeometry){const Pn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,te=Math.min(ft.instanceCount,Pn);Je.renderInstances($t,mn,te)}else Je.render($t,mn)};function Ca(C,Y,ft){C.transparent===!0&&C.side===Xn&&C.forceSinglePass===!1?(C.side=Vi,C.needsUpdate=!0,bi(C,Y,ft),C.side=br,C.needsUpdate=!0,bi(C,Y,ft),C.side=Xn):bi(C,Y,ft)}this.compile=function(C,Y,ft=null){ft===null&&(ft=C),I=Nt.get(ft),I.init(Y),z.push(I),ft.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(I.pushLight(et),et.castShadow&&I.pushShadow(et))}),C!==ft&&C.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(I.pushLight(et),et.castShadow&&I.pushShadow(et))}),I.setupLights();const ot=new Set;return C.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Ht=et.material;if(Ht)if(Array.isArray(Ht))for(let jt=0;jt<Ht.length;jt++){const Gt=Ht[jt];Ca(Gt,ft,et),ot.add(Gt)}else Ca(Ht,ft,et),ot.add(Ht)}),I=z.pop(),ot},this.compileAsync=function(C,Y,ft=null){const ot=this.compile(C,Y,ft);return new Promise(et=>{function Ht(){if(ot.forEach(function(jt){T.get(jt).currentProgram.isReady()&&ot.delete(jt)}),ot.size===0){et(C);return}setTimeout(Ht,10)}ke.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let wa=null;function vs(C){wa&&wa(C)}function ki(){Xi.stop()}function Qn(){Xi.start()}const Xi=new zS;Xi.setAnimationLoop(vs),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(C){wa=C,ut.setAnimationLoop(C),C===null?Xi.stop():Xi.start()},ut.addEventListener("sessionstart",ki),ut.addEventListener("sessionend",Qn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){tn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(nt===!0)return;const ft=ut.enabled===!0&&ut.isPresenting===!0,ot=b!==null&&($===null||ft)&&b.begin(N,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Y),Y=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,Y,$),I=Nt.get(C,z.length),I.init(Y),z.push(I),An.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Qt.setFromProjectionMatrix(An,hs,Y.reversedDepth),kt=this.localClippingEnabled,ce=Dt.init(this.clippingPlanes,kt),w=pe.get(C,U.length),w.init(),U.push(w),ut.enabled===!0&&ut.isPresenting===!0){const jt=N.xr.getDepthSensingMesh();jt!==null&&Bn(jt,Y,-1/0,N.sortObjects)}Bn(C,Y,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(Ot,qt),be=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,be&&Wt.addToRenderList(w,C),this.info.render.frame++,ce===!0&&Dt.beginShadows();const et=I.state.shadowsArray;if(Xt.render(et,C,Y),ce===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&b.hasRenderPass())===!1){const jt=w.opaque,Gt=w.transmissive;if(I.setupLights(),Y.isArrayCamera){const Jt=Y.cameras;if(Gt.length>0)for(let ne=0,xe=Jt.length;ne<xe;ne++){const ve=Jt[ne];Qe(jt,Gt,C,ve)}be&&Wt.render(C);for(let ne=0,xe=Jt.length;ne<xe;ne++){const ve=Jt[ne];gi(w,C,ve,ve.viewport)}}else Gt.length>0&&Qe(jt,Gt,C,Y),be&&Wt.render(C),gi(w,C,Y)}$!==null&&j===0&&(K.updateMultisampleRenderTarget($),K.updateRenderTargetMipmap($)),ot&&b.end(N),C.isScene===!0&&C.onAfterRender(N,C,Y),xt.resetDefaultState(),tt=-1,Z=null,z.pop(),z.length>0?(I=z[z.length-1],ce===!0&&Dt.setGlobalState(N.clippingPlanes,I.state.camera)):I=null,U.pop(),U.length>0?w=U[U.length-1]:w=null};function Bn(C,Y,ft,ot){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ft=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Qt.intersectsSprite(C)){ot&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(An);const jt=re.update(C),Gt=C.material;Gt.visible&&w.push(C,jt,Gt,ft,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Qt.intersectsObject(C))){const jt=re.update(C),Gt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Ce.copy(jt.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(An)),Array.isArray(Gt)){const Jt=jt.groups;for(let ne=0,xe=Jt.length;ne<xe;ne++){const ve=Jt[ne],$t=Gt[ve.materialIndex];$t&&$t.visible&&w.push(C,jt,$t,ft,Ce.z,ve)}}else Gt.visible&&w.push(C,jt,Gt,ft,Ce.z,null)}}const Ht=C.children;for(let jt=0,Gt=Ht.length;jt<Gt;jt++)Bn(Ht[jt],Y,ft,ot)}function gi(C,Y,ft,ot){const{opaque:et,transmissive:Ht,transparent:jt}=C;I.setupLightsView(ft),ce===!0&&Dt.setGlobalState(N.clippingPlanes,ft),ot&&le.viewport(O.copy(ot)),et.length>0&&pn(et,Y,ft),Ht.length>0&&pn(Ht,Y,ft),jt.length>0&&pn(jt,Y,ft),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Qe(C,Y,ft,ot){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ot.id]===void 0){const $t=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ot.id]=new ms(1,1,{generateMipmaps:!0,type:$t?Vs:ua,minFilter:Mr,samples:Math.max(4,Xe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:en.workingColorSpace})}const Ht=I.state.transmissionRenderTarget[ot.id],jt=ot.viewport||O;Ht.setSize(jt.z*N.transmissionResolutionScale,jt.w*N.transmissionResolutionScale);const Gt=N.getRenderTarget(),Jt=N.getActiveCubeFace(),ne=N.getActiveMipmapLevel();N.setRenderTarget(Ht),N.getClearColor(pt),Ct=N.getClearAlpha(),Ct<1&&N.setClearColor(16777215,.5),N.clear(),be&&Wt.render(ft);const xe=N.toneMapping;N.toneMapping=ps;const ve=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),I.setupLightsView(ot),ce===!0&&Dt.setGlobalState(N.clippingPlanes,ot),pn(C,ft,ot),K.updateMultisampleRenderTarget(Ht),K.updateRenderTargetMipmap(Ht),ke.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Te=0,mn=Y.length;Te<mn;Te++){const gn=Y[Te],{object:Je,geometry:Pn,material:te,group:_i}=gn;if(te.side===Xn&&Je.layers.test(ot.layers)){const ye=te.side;te.side=Vi,te.needsUpdate=!0,Nn(Je,ft,ot,Pn,te,_i),te.side=ye,te.needsUpdate=!0,$t=!0}}$t===!0&&(K.updateMultisampleRenderTarget(Ht),K.updateRenderTargetMipmap(Ht))}N.setRenderTarget(Gt,Jt,ne),N.setClearColor(pt,Ct),ve!==void 0&&(ot.viewport=ve),N.toneMapping=xe}function pn(C,Y,ft){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let et=0,Ht=C.length;et<Ht;et++){const jt=C[et],{object:Gt,geometry:Jt,group:ne}=jt;let xe=jt.material;xe.allowOverride===!0&&ot!==null&&(xe=ot),Gt.layers.test(ft.layers)&&Nn(Gt,Y,ft,Jt,xe,ne)}}function Nn(C,Y,ft,ot,et,Ht){C.onBeforeRender(N,Y,ft,ot,et,Ht),C.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),et.onBeforeRender(N,Y,ft,ot,C,Ht),et.transparent===!0&&et.side===Xn&&et.forceSinglePass===!1?(et.side=Vi,et.needsUpdate=!0,N.renderBufferDirect(ft,Y,ot,et,C,Ht),et.side=br,et.needsUpdate=!0,N.renderBufferDirect(ft,Y,ot,et,C,Ht),et.side=Xn):N.renderBufferDirect(ft,Y,ot,et,C,Ht),C.onAfterRender(N,Y,ft,ot,et,Ht)}function bi(C,Y,ft){Y.isScene!==!0&&(Y=Be);const ot=T.get(C),et=I.state.lights,Ht=I.state.shadowsArray,jt=et.state.version,Gt=Ft.getParameters(C,et.state,Ht,Y,ft),Jt=Ft.getProgramCacheKey(Gt);let ne=ot.programs;ot.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,ot.fog=Y.fog;const xe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ot.envMap=vt.get(C.envMap||ot.environment,xe),ot.envMapRotation=ot.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",zt),ne=new Map,ot.programs=ne);let ve=ne.get(Jt);if(ve!==void 0){if(ot.currentProgram===ve&&ot.lightsStateVersion===jt)return Qa(C,Gt),ve}else Gt.uniforms=Ft.getUniforms(C),C.onBeforeCompile(Gt,N),ve=Ft.acquireProgram(Gt,Jt),ne.set(Jt,ve),ot.uniforms=Gt.uniforms;const $t=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($t.clippingPlanes=Dt.uniform),Qa(C,Gt),ot.needsLights=yo(C),ot.lightsStateVersion=jt,ot.needsLights&&($t.ambientLightColor.value=et.state.ambient,$t.lightProbe.value=et.state.probe,$t.directionalLights.value=et.state.directional,$t.directionalLightShadows.value=et.state.directionalShadow,$t.spotLights.value=et.state.spot,$t.spotLightShadows.value=et.state.spotShadow,$t.rectAreaLights.value=et.state.rectArea,$t.ltc_1.value=et.state.rectAreaLTC1,$t.ltc_2.value=et.state.rectAreaLTC2,$t.pointLights.value=et.state.point,$t.pointLightShadows.value=et.state.pointShadow,$t.hemisphereLights.value=et.state.hemi,$t.directionalShadowMatrix.value=et.state.directionalShadowMatrix,$t.spotLightMatrix.value=et.state.spotLightMatrix,$t.spotLightMap.value=et.state.spotLightMap,$t.pointShadowMatrix.value=et.state.pointShadowMatrix),ot.currentProgram=ve,ot.uniformsList=null,ve}function fa(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Kd.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Qa(C,Y){const ft=T.get(C);ft.outputColorSpace=Y.outputColorSpace,ft.batching=Y.batching,ft.batchingColor=Y.batchingColor,ft.instancing=Y.instancing,ft.instancingColor=Y.instancingColor,ft.instancingMorph=Y.instancingMorph,ft.skinning=Y.skinning,ft.morphTargets=Y.morphTargets,ft.morphNormals=Y.morphNormals,ft.morphColors=Y.morphColors,ft.morphTargetsCount=Y.morphTargetsCount,ft.numClippingPlanes=Y.numClippingPlanes,ft.numIntersection=Y.numClipIntersection,ft.vertexAlphas=Y.vertexAlphas,ft.vertexTangents=Y.vertexTangents,ft.toneMapping=Y.toneMapping}function Da(C,Y,ft,ot,et){Y.isScene!==!0&&(Y=Be),K.resetTextureUnits();const Ht=Y.fog,jt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?Y.environment:null,Gt=$===null?N.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:cl,Jt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,ne=vt.get(ot.envMap||jt,Jt),xe=ot.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ve=!!ft.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!ft.morphAttributes.position,Te=!!ft.morphAttributes.normal,mn=!!ft.morphAttributes.color;let gn=ps;ot.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(gn=N.toneMapping);const Je=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Pn=Je!==void 0?Je.length:0,te=T.get(ot),_i=I.state.lights;if(ce===!0&&(kt===!0||C!==Z)){const He=C===Z&&ot.id===tt;Dt.setState(ot,C,He)}let ye=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==_i.state.version||te.outputColorSpace!==Gt||et.isBatchedMesh&&te.batching===!1||!et.isBatchedMesh&&te.batching===!0||et.isBatchedMesh&&te.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&te.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&te.instancing===!1||!et.isInstancedMesh&&te.instancing===!0||et.isSkinnedMesh&&te.skinning===!1||!et.isSkinnedMesh&&te.skinning===!0||et.isInstancedMesh&&te.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&te.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&te.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&te.instancingMorph===!1&&et.morphTexture!==null||te.envMap!==ne||ot.fog===!0&&te.fog!==Ht||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Dt.numPlanes||te.numIntersection!==Dt.numIntersection)||te.vertexAlphas!==xe||te.vertexTangents!==ve||te.morphTargets!==$t||te.morphNormals!==Te||te.morphColors!==mn||te.toneMapping!==gn||te.morphTargetsCount!==Pn)&&(ye=!0):(ye=!0,te.__version=ot.version);let oi=te.currentProgram;ye===!0&&(oi=bi(ot,Y,et));let Ti=!1,Ln=!1,li=!1;const je=oi.getUniforms(),Un=te.uniforms;if(le.useProgram(oi.program)&&(Ti=!0,Ln=!0,li=!0),ot.id!==tt&&(tt=ot.id,Ln=!0),Ti||Z!==C){le.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),je.setValue(k,"projectionMatrix",C.projectionMatrix),je.setValue(k,"viewMatrix",C.matrixWorldInverse);const Ai=je.map.cameraPosition;Ai!==void 0&&Ai.setValue(k,de.setFromMatrixPosition(C.matrixWorld)),Xe.logarithmicDepthBuffer&&je.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&je.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,Ln=!0,li=!0)}if(te.needsLights&&(_i.state.directionalShadowMap.length>0&&je.setValue(k,"directionalShadowMap",_i.state.directionalShadowMap,K),_i.state.spotShadowMap.length>0&&je.setValue(k,"spotShadowMap",_i.state.spotShadowMap,K),_i.state.pointShadowMap.length>0&&je.setValue(k,"pointShadowMap",_i.state.pointShadowMap,K)),et.isSkinnedMesh){je.setOptional(k,et,"bindMatrix"),je.setOptional(k,et,"bindMatrixInverse");const He=et.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),je.setValue(k,"boneTexture",He.boneTexture,K))}et.isBatchedMesh&&(je.setOptional(k,et,"batchingTexture"),je.setValue(k,"batchingTexture",et._matricesTexture,K),je.setOptional(k,et,"batchingIdTexture"),je.setValue(k,"batchingIdTexture",et._indirectTexture,K),je.setOptional(k,et,"batchingColorTexture"),et._colorsTexture!==null&&je.setValue(k,"batchingColorTexture",et._colorsTexture,K));const ci=ft.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Zt.update(et,ft,oi),(Ln||te.receiveShadow!==et.receiveShadow)&&(te.receiveShadow=et.receiveShadow,je.setValue(k,"receiveShadow",et.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&Y.environment!==null&&(Un.envMapIntensity.value=Y.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=$2()),Ln&&(je.setValue(k,"toneMappingExposure",N.toneMappingExposure),te.needsLights&&zn(Un,li),Ht&&ot.fog===!0&&ue.refreshFogUniforms(Un,Ht),ue.refreshMaterialUniforms(Un,ot,_t,q,I.state.transmissionRenderTarget[C.id]),Kd.upload(k,fa(te),Un,K)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Kd.upload(k,fa(te),Un,K),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&je.setValue(k,"center",et.center),je.setValue(k,"modelViewMatrix",et.modelViewMatrix),je.setValue(k,"normalMatrix",et.normalMatrix),je.setValue(k,"modelMatrix",et.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const He=ot.uniformsGroups;for(let Ai=0,xs=He.length;Ai<xs;Ai++){const Xs=He[Ai];Tt.update(Xs,oi),Tt.bind(Xs,oi)}}return oi}function zn(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function yo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,Y,ft){const ot=T.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),T.get(C.texture).__webglTexture=Y,T.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ft,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ft=T.get(C);ft.__webglFramebuffer=Y,ft.__useDefaultFramebuffer=Y===void 0};const da=k.createFramebuffer();this.setRenderTarget=function(C,Y=0,ft=0){$=C,G=Y,j=ft;let ot=null,et=!1,Ht=!1;if(C){const Gt=T.get(C);if(Gt.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(k.FRAMEBUFFER,Gt.__webglFramebuffer),O.copy(C.viewport),B.copy(C.scissor),ct=C.scissorTest,le.viewport(O),le.scissor(B),le.setScissorTest(ct),tt=-1;return}else if(Gt.__webglFramebuffer===void 0)K.setupRenderTarget(C);else if(Gt.__hasExternalTextures)K.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const xe=C.depthTexture;if(Gt.__boundDepthTexture!==xe){if(xe!==null&&T.has(xe)&&(C.width!==xe.image.width||C.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ht=!0);const ne=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?ot=ne[Y][ft]:ot=ne[Y],et=!0):C.samples>0&&K.useMultisampledRTT(C)===!1?ot=T.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?ot=ne[ft]:ot=ne,O.copy(C.viewport),B.copy(C.scissor),ct=C.scissorTest}else O.copy(it).multiplyScalar(_t).floor(),B.copy(Mt).multiplyScalar(_t).floor(),ct=wt;if(ft!==0&&(ot=da),le.bindFramebuffer(k.FRAMEBUFFER,ot)&&le.drawBuffers(C,ot),le.viewport(O),le.scissor(B),le.setScissorTest(ct),et){const Gt=T.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Gt.__webglTexture,ft)}else if(Ht){const Gt=Y;for(let Jt=0;Jt<C.textures.length;Jt++){const ne=T.get(C.textures[Jt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Jt,ne.__webglTexture,ft,Gt)}}else if(C!==null&&ft!==0){const Gt=T.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Gt.__webglTexture,ft)}tt=-1},this.readRenderTargetPixels=function(C,Y,ft,ot,et,Ht,jt,Gt=0){if(!(C&&C.isWebGLRenderTarget)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt){le.bindFramebuffer(k.FRAMEBUFFER,Jt);try{const ne=C.textures[Gt],xe=ne.format,ve=ne.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Gt),!Xe.textureFormatReadable(xe)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ve)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ot&&ft>=0&&ft<=C.height-et&&k.readPixels(Y,ft,ot,et,dt.convert(xe),dt.convert(ve),Ht)}finally{const ne=$!==null?T.get($).__webglFramebuffer:null;le.bindFramebuffer(k.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ft,ot,et,Ht,jt,Gt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt)if(Y>=0&&Y<=C.width-ot&&ft>=0&&ft<=C.height-et){le.bindFramebuffer(k.FRAMEBUFFER,Jt);const ne=C.textures[Gt],xe=ne.format,ve=ne.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Gt),!Xe.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$t),k.bufferData(k.PIXEL_PACK_BUFFER,Ht.byteLength,k.STREAM_READ),k.readPixels(Y,ft,ot,et,dt.convert(xe),dt.convert(ve),0);const Te=$!==null?T.get($).__webglFramebuffer:null;le.bindFramebuffer(k.FRAMEBUFFER,Te);const mn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await xE(k,mn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$t),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ht),k.deleteBuffer($t),k.deleteSync(mn),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ft=0){const ot=Math.pow(2,-ft),et=Math.floor(C.image.width*ot),Ht=Math.floor(C.image.height*ot),jt=Y!==null?Y.x:0,Gt=Y!==null?Y.y:0;K.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ft,0,0,jt,Gt,et,Ht),le.unbindTexture()};const ha=k.createFramebuffer(),Na=k.createFramebuffer();this.copyTextureToTexture=function(C,Y,ft=null,ot=null,et=0,Ht=0){let jt,Gt,Jt,ne,xe,ve,$t,Te,mn;const gn=C.isCompressedTexture?C.mipmaps[Ht]:C.image;if(ft!==null)jt=ft.max.x-ft.min.x,Gt=ft.max.y-ft.min.y,Jt=ft.isBox3?ft.max.z-ft.min.z:1,ne=ft.min.x,xe=ft.min.y,ve=ft.isBox3?ft.min.z:0;else{const Un=Math.pow(2,-et);jt=Math.floor(gn.width*Un),Gt=Math.floor(gn.height*Un),C.isDataArrayTexture?Jt=gn.depth:C.isData3DTexture?Jt=Math.floor(gn.depth*Un):Jt=1,ne=0,xe=0,ve=0}ot!==null?($t=ot.x,Te=ot.y,mn=ot.z):($t=0,Te=0,mn=0);const Je=dt.convert(Y.format),Pn=dt.convert(Y.type);let te;Y.isData3DTexture?(K.setTexture3D(Y,0),te=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(K.setTexture2DArray(Y,0),te=k.TEXTURE_2D_ARRAY):(K.setTexture2D(Y,0),te=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const _i=k.getParameter(k.UNPACK_ROW_LENGTH),ye=k.getParameter(k.UNPACK_IMAGE_HEIGHT),oi=k.getParameter(k.UNPACK_SKIP_PIXELS),Ti=k.getParameter(k.UNPACK_SKIP_ROWS),Ln=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,gn.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gn.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,xe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ve);const li=C.isDataArrayTexture||C.isData3DTexture,je=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const Un=T.get(C),ci=T.get(Y),He=T.get(Un.__renderTarget),Ai=T.get(ci.__renderTarget);le.bindFramebuffer(k.READ_FRAMEBUFFER,He.__webglFramebuffer),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let xs=0;xs<Jt;xs++)li&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(C).__webglTexture,et,ve+xs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,Ht,mn+xs)),k.blitFramebuffer(ne,xe,jt,Gt,$t,Te,jt,Gt,k.DEPTH_BUFFER_BIT,k.NEAREST);le.bindFramebuffer(k.READ_FRAMEBUFFER,null),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(et!==0||C.isRenderTargetTexture||T.has(C)){const Un=T.get(C),ci=T.get(Y);le.bindFramebuffer(k.READ_FRAMEBUFFER,ha),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,Na);for(let He=0;He<Jt;He++)li?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Un.__webglTexture,et,ve+He):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Un.__webglTexture,et),je?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ci.__webglTexture,Ht,mn+He):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ci.__webglTexture,Ht),et!==0?k.blitFramebuffer(ne,xe,jt,Gt,$t,Te,jt,Gt,k.COLOR_BUFFER_BIT,k.NEAREST):je?k.copyTexSubImage3D(te,Ht,$t,Te,mn+He,ne,xe,jt,Gt):k.copyTexSubImage2D(te,Ht,$t,Te,ne,xe,jt,Gt);le.bindFramebuffer(k.READ_FRAMEBUFFER,null),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else je?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(te,Ht,$t,Te,mn,jt,Gt,Jt,Je,Pn,gn.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(te,Ht,$t,Te,mn,jt,Gt,Jt,Je,gn.data):k.texSubImage3D(te,Ht,$t,Te,mn,jt,Gt,Jt,Je,Pn,gn):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ht,$t,Te,jt,Gt,Je,Pn,gn.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ht,$t,Te,gn.width,gn.height,Je,gn.data):k.texSubImage2D(k.TEXTURE_2D,Ht,$t,Te,jt,Gt,Je,Pn,gn);k.pixelStorei(k.UNPACK_ROW_LENGTH,_i),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye),k.pixelStorei(k.UNPACK_SKIP_PIXELS,oi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ti),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ln),Ht===0&&Y.generateMipmaps&&k.generateMipmap(te),le.unbindTexture()},this.initRenderTarget=function(C){T.get(C).__webglFramebuffer===void 0&&K.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?K.setTextureCube(C,0):C.isData3DTexture?K.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?K.setTexture2DArray(C,0):K.setTexture2D(C,0),le.unbindTexture()},this.resetState=function(){G=0,j=0,$=null,le.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=en._getDrawingBufferColorSpace(t),i.unpackColorSpace=en._getUnpackColorSpace()}}const tR=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:kh,AddEquation:ho,AddOperation:nS,AdditiveBlending:Qd,AgXToneMapping:J0,AlphaFormat:sg,AlwaysCompare:fS,AlwaysDepth:eh,AlwaysStencilFunc:I0,AmbientLight:OS,ArrayCamera:PS,BackSide:Vi,BasicDepthPacking:aS,BasicShadowMap:Iy,Box3:vo,BoxGeometry:xo,BufferAttribute:Ka,BufferGeometry:Oi,ByteType:eg,Cache:jd,Camera:xg,CanvasTexture:_c,CatmullRomCurve3:MS,CineonToneMapping:K0,CircleGeometry:$u,ClampToEdgeWrapping:Hs,Clock:BS,Color:ge,ColorManagement:en,ConstantAlphaFactor:$y,ConstantColorFactor:Qy,CubeCamera:IS,CubeDepthTexture:yS,CubeReflectionMapping:_o,CubeRefractionMapping:ol,CubeTexture:mg,CubeUVReflectionMapping:ef,CullFaceBack:L0,CullFaceFront:Oy,CullFaceNone:Uy,Curve:SS,CustomBlending:Fy,CustomToneMapping:Q0,CylinderGeometry:tf,Data3DTexture:_S,DataArrayTexture:lg,DataTexture:hg,DefaultLoadingManager:DS,DepthFormat:ks,DepthStencilFormat:po,DepthTexture:bc,DirectionalLight:H0,DoubleSide:Xn,DstAlphaFactor:Yy,DstColorFactor:jy,DynamicDrawUsage:dS,EqualCompare:lS,EqualDepth:ih,EquirectangularReflectionMapping:Xd,EquirectangularRefractionMapping:Wd,Euler:Ra,EventDispatcher:ul,ExternalTexture:gg,Float32BufferAttribute:un,FloatType:ja,Fog:Ju,FrontSide:br,Frustum:np,GLSL3:F0,GreaterCompare:cS,GreaterDepth:sh,GreaterEqualCompare:$h,GreaterEqualDepth:ah,Group:mo,HalfFloatType:Vs,HemisphereLight:US,ImageLoader:NS,ImageUtils:mS,InstancedBufferAttribute:z0,InstancedMesh:pg,IntType:Xh,KeepStencilOp:el,Layers:ep,LessCompare:oS,LessDepth:nh,LessEqualCompare:Jh,LessEqualDepth:rl,Light:Cc,LinearFilter:Wn,LinearMipmapLinearFilter:Mr,LinearMipmapNearestFilter:Yd,LinearSRGBColorSpace:cl,LinearToneMapping:j0,LinearTransfer:Zu,Loader:lp,LoadingManager:wS,Material:fl,MathUtils:an,Matrix3:Ie,Matrix4:Mn,MaxEquation:Gy,Mesh:Oe,MeshBasicMaterial:yr,MeshDepthMaterial:RS,MeshDistanceMaterial:CS,MeshLambertMaterial:AS,MeshPhysicalMaterial:nl,MeshStandardMaterial:Ta,MinEquation:Hy,MirroredRepeatWrapping:oh,MixOperation:eS,MultiplyBlending:O0,MultiplyOperation:Vh,NearestFilter:Ei,NearestMipmapLinearFilter:zu,NearestMipmapNearestFilter:iS,NeutralToneMapping:$0,NeverCompare:rS,NeverDepth:th,NoBlending:Gs,NoColorSpace:Sr,NoToneMapping:ps,NormalBlending:sl,NotEqualCompare:uS,NotEqualDepth:rh,Object3D:bn,ObjectSpaceNormalMap:sS,OneFactor:ky,OneMinusConstantAlphaFactor:tS,OneMinusConstantColorFactor:Jy,OneMinusDstAlphaFactor:qy,OneMinusDstColorFactor:Zy,OneMinusSrcAlphaFactor:$d,OneMinusSrcColorFactor:Wy,OrthographicCamera:cp,PCFShadowMap:al,PCFSoftShadowMap:Py,PMREMGenerator:Hh,PerspectiveCamera:Qi,Plane:uo,PlaneGeometry:Aa,PointLight:fo,PolyhedronGeometry:ip,Quaternion:Tr,R11_EAC_Format:mh,RED_GREEN_RGTC2_Format:Bh,RED_RGTC1_Format:Ph,REVISION:Gh,RG11_EAC_Format:_h,RGBAFormat:Za,RGBAIntegerFormat:Kh,RGBA_ASTC_10x10_Format:Dh,RGBA_ASTC_10x5_Format:Rh,RGBA_ASTC_10x6_Format:Ch,RGBA_ASTC_10x8_Format:wh,RGBA_ASTC_12x10_Format:Nh,RGBA_ASTC_12x12_Format:Lh,RGBA_ASTC_4x4_Format:xh,RGBA_ASTC_5x4_Format:yh,RGBA_ASTC_5x5_Format:Sh,RGBA_ASTC_6x5_Format:Mh,RGBA_ASTC_6x6_Format:Eh,RGBA_ASTC_8x5_Format:bh,RGBA_ASTC_8x6_Format:Th,RGBA_ASTC_8x8_Format:Ah,RGBA_BPTC_Format:Uh,RGBA_ETC2_EAC_Format:ph,RGBA_PVRTC_2BPPV1_Format:fh,RGBA_PVRTC_4BPPV1_Format:uh,RGBA_S3TC_DXT1_Format:Xu,RGBA_S3TC_DXT3_Format:Wu,RGBA_S3TC_DXT5_Format:Yu,RGBFormat:rg,RGB_BPTC_SIGNED_Format:Oh,RGB_BPTC_UNSIGNED_Format:Ih,RGB_ETC1_Format:dh,RGB_ETC2_Format:hh,RGB_PVRTC_2BPPV1_Format:ch,RGB_PVRTC_4BPPV1_Format:lh,RGB_S3TC_DXT1_Format:ku,RGFormat:ll,RGIntegerFormat:Zh,RawShaderMaterial:TS,Ray:dg,Raycaster:FS,RedFormat:qh,RedIntegerFormat:jh,ReinhardToneMapping:Z0,RenderTarget:gS,RepeatWrapping:xc,ReverseSubtractEquation:zy,RingGeometry:ap,SIGNED_R11_EAC_Format:gh,SIGNED_RED_GREEN_RGTC2_Format:zh,SIGNED_RED_RGTC1_Format:Fh,SIGNED_RG11_EAC_Format:vh,SRGBColorSpace:Kn,SRGBTransfer:cn,Scene:cg,ShaderChunk:Fe,ShaderLib:ds,ShaderMaterial:_s,ShortType:ng,Source:tp,Sphere:Rc,SphereGeometry:sp,SpotLight:Zd,SrcAlphaFactor:Jd,SrcAlphaSaturateFactor:Ky,SrcColorFactor:Xy,StaticDrawUsage:P0,SubtractEquation:By,SubtractiveBlending:U0,TangentSpaceNormalMap:Qh,TetrahedronGeometry:rp,Texture:hi,TextureLoader:LS,TorusGeometry:op,Triangle:qa,UVMapping:tg,Uint16BufferAttribute:ug,Uint32BufferAttribute:fg,UniformsLib:Yt,UniformsUtils:bS,UnsignedByteType:ua,UnsignedInt101111Type:ag,UnsignedInt248Type:Sc,UnsignedInt5999Type:ig,UnsignedIntType:gs,UnsignedShort4444Type:Wh,UnsignedShort5551Type:Yh,UnsignedShortType:yc,VSMShadowMap:gc,Vector2:Le,Vector3:X,Vector4:Fn,VideoTexture:xS,WebGLCoordinateSystem:hs,WebGLCubeRenderTarget:yg,WebGLRenderTarget:ms,WebGLRenderer:WS,WebGLUtils:XS,WebGPUCoordinateSystem:Mc,WebXRController:qd,ZeroFactor:Vy,createCanvasElement:hS,error:tn,log:B0,warn:Me,warnOnce:Qu},Symbol.toStringTag,{value:"Module"}));class eR extends cg{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new xo;t.deleteAttribute("uv");const i=new Ta({side:Vi}),s=new Ta,l=new fo(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Oe(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new pg(t,s,6),h=new bn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),f.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),f.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),f.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),f.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),f.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),f.setMatrixAt(5,h.matrix),this.add(f);const m=new Oe(t,fc(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Oe(t,fc(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Oe(t,fc(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Oe(t,fc(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Oe(t,fc(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const x=new Oe(t,fc(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function fc(r){return new AS({color:0,emissive:16777215,emissiveIntensity:r})}const nR=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],iR=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],aR=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],sR=["LOW","MEDIUM","HIGH","EXTREME"],rR=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],oR=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],lR={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},cR={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},uR={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},fR={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},dR={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function YS(r){return(r-90)*Math.PI/180}function hR(r,t,i,s){const l=YS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function dc(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function Sg(r){dc("subject",r.subject,nR),dc("domain",r.domain,iR),dc("verb",r.verb,aR),dc("magnitude",r.magnitude,sR),dc("time",r.time,rR),dc("certainty",r.certainty,oR)}function qS(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=dR[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return Sg(s),s}function Gu(r){return Sg(r),[r.subject,r.domain,r.verb,r.magnitude,r.time,r.certainty].join(".")}function Vu(r){return Gu(qS(r))}function pR(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),h=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(h,m):r.lineTo(h,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,h=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,h):r.lineTo(f,h)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Ou(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,h=Math.sqrt(c*c+f*f)||1,m=c/h,p=f/h,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},x={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(x.x,x.y),r.closePath(),r.fill(),r.restore()}function Iu(r,t,i,s,l,c){const f=fR[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let h=1;h<=f;h+=1){const m=h/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function mR(r,t,i){Sg(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,h=l*.5,m=i?.backgroundColor??"rgba(6,14,24,0.74)",p=i?.lineColor??"rgba(102,221,255,0.96)",_=i?.gridColor??"rgba(102,221,255,0.58)";r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,h,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,h,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,h,c*.12,0,Math.PI*2),r.stroke();const v=lR[t.domain],g=cR[t.time]*c,x=uR[t.magnitude]*c,E=hR(f,h,g,v),D=YS(v),M=Math.cos(D),S=Math.sin(D),A=-S,L=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let w={x:E.x,y:E.y},I={x:E.x+M*x,y:E.y+S*x},U;if(t.verb==="EXISTS")w={x:E.x-A*(x*.48),y:E.y-L*(x*.48)},I={x:E.x+A*(x*.48),y:E.y+L*(x*.48)},r.beginPath(),r.moveTo(w.x,w.y),r.lineTo(I.x,I.y),r.stroke(),Iu(r,t,w,I,p);else if(t.verb==="DECLINES")I={x:E.x-M*x,y:E.y-S*x},r.beginPath(),r.moveTo(w.x,w.y),r.lineTo(I.x,I.y),r.stroke(),Ou(r,w,I,p,7),Iu(r,t,w,I,p);else if(t.verb==="TRANSFORMS")U={x:E.x+A*(x*.34)+M*(x*.34),y:E.y+L*(x*.34)+S*(x*.34)},r.beginPath(),r.moveTo(w.x,w.y),r.quadraticCurveTo(U.x,U.y,I.x,I.y),r.stroke(),Ou(r,U,I,p,7),Iu(r,t,w,I,p,U);else if(t.verb==="INFLUENCES"){const b={x:E.x+A*3.4,y:E.y+L*3.4},N={x:I.x+A*3.4,y:I.y+L*3.4},nt={x:E.x-A*3.4,y:E.y-L*3.4},G={x:I.x-A*3.4,y:I.y-L*3.4};r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(N.x,N.y),r.moveTo(nt.x,nt.y),r.lineTo(G.x,G.y),r.stroke(),Ou(r,b,N,p,6.6),Ou(r,nt,G,p,6.6),Iu(r,t,b,N,p)}else r.beginPath(),r.moveTo(w.x,w.y),r.lineTo(I.x,I.y),r.stroke(),Ou(r,w,I,p,7),Iu(r,t,w,I,p);r.fillStyle=p,r.beginPath(),r.arc(f,h,5,0,Math.PI*2),r.fill(),pR(r,t.subject,E,p)}function xy(r,t,i){const s=qS(t);mR(r,s,i)}const yy="intelligenspartiet:language",gR={nb:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Film",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideGlyphWall:"Glyff",outsideSignal:"Signal",outsideBack:"Tilbake",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signaturer",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter.",outsideSignalTitle:"Signalrom"},en:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Film",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideGlyphWall:"Glyff",outsideSignal:"Signal",outsideBack:"Back",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signatures",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news.",outsideSignalTitle:"Signal Room"}},_R=100,_r=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],vr=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],Jo=["LOW","MEDIUM","HIGH","EXTREME"],$o=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],Pu=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],T0=[{phase:"signal-whisper",subjects:["IDEA","TECHNOLOGY","INSTITUTION"],domains:["MEDIA","CULTURE","TECHNOLOGY","EDUCATION","INDIVIDUALS"],verbs:["EXISTS","INFLUENCES","GROWS"],magnitudes:["LOW","MEDIUM"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"attention-displacement",subjects:["INDIVIDUAL","IDEA","SYSTEM"],domains:["INDIVIDUALS","MEDIA","ORGANIZATIONS","TECHNOLOGY"],verbs:["INFLUENCES","GROWS","DECLINES"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["PROBABLE","CONFIRMED"]},{phase:"output-surge",subjects:["SYSTEM","TECHNOLOGY","INSTITUTION"],domains:["TECHNOLOGY","ORGANIZATIONS","ECONOMY","INFRASTRUCTURE"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["HIGH","EXTREME"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"cognitive-strain",subjects:["INDIVIDUAL","SYSTEM","TECHNOLOGY"],domains:["INDIVIDUALS","ORGANIZATIONS","EDUCATION","SCIENCE"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["HIGH","EXTREME"],times:["NOW","LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"blame-cycle",subjects:["INSTITUTION","EVENT","SYSTEM"],domains:["POLITICS","SOCIETY","MEDIA","ECONOMY"],verbs:["INFLUENCES","TRANSFORMS","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"resistance-ritual",subjects:["INSTITUTION","INDIVIDUAL","EVENT"],domains:["CULTURE","POLITICS","ORGANIZATIONS","SOCIETY"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["MEDIUM","HIGH"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"reskilling-wave",subjects:["IDEA","INSTITUTION","SYSTEM"],domains:["EDUCATION","SCIENCE","ORGANIZATIONS","TECHNOLOGY"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["PROBABLE","CONFIRMED"]},{phase:"institutional-memory",subjects:["INSTITUTION","SYSTEM","BREAKTHROUGH"],domains:["INFRASTRUCTURE","ORGANIZATIONS","ECONOMY","SCIENCE"],verbs:["EXISTS","TRANSFORMS","GROWS"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["INDICATION","PROBABLE","CONFIRMED"]},{phase:"myth-afterimage",subjects:["EVENT","IDEA","INDIVIDUAL"],domains:["CULTURE","MEDIA","SOCIETY","EDUCATION"],verbs:["EXISTS","INFLUENCES","DECLINES"],magnitudes:["LOW","MEDIUM","HIGH"],times:["Y3_10","GT10Y"],certainties:["INDICATION","PROBABLE"]},{phase:"recurrence",subjects:["SYSTEM","INSTITUTION","INDIVIDUAL"],domains:["SOCIETY","POLITICS","ORGANIZATIONS","INDIVIDUALS"],verbs:["TRANSFORMS","INFLUENCES","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["GT10Y","NOW"],certainties:["PROBABLE","CONFIRMED"]}],hc=(r,t,i=0)=>r[(t+i)%r.length],Fu=(r,t,i)=>{const s=r.indexOf(t),l=s>=0?s:0;return r[(l+i+r.length*32)%r.length]},vR=r=>{const t=[],i=new Set,s=Math.ceil(r/T0.length);for(let l=0;l<T0.length;l+=1){const c=T0[l];for(let f=0;f<s&&t.length<r;f+=1){let h={subject:hc(c.subjects,f,l),domain:hc(c.domains,f,l*2),verb:hc(c.verbs,f,l+f%3),magnitude:hc(c.magnitudes,f,Math.floor(f/2)),time:hc(c.times,f,Math.floor(f/3)),certainty:hc(c.certainties,f,f%2)},m=Vu(Gu(h));if(i.has(m)){let p=!1;for(let _=1;_<=vr.length*$o.length;_+=1){const v={...h,subject:Fu(_r,h.subject,Math.floor(_/7)),domain:Fu(vr,h.domain,_),magnitude:Fu(Jo,h.magnitude,Math.floor(_/4)),time:Fu($o,h.time,Math.floor(_/2)),certainty:Fu(Pu,h.certainty,Math.floor(_/3))},g=Vu(Gu(v));if(!i.has(g)){h=v,m=g,p=!0;break}}if(!p)for(const _ of _r){for(const v of vr){for(const g of Jo){for(const x of $o){for(const E of Pu){const D=Vu(Gu({subject:_,domain:v,verb:h.verb,magnitude:g,time:x,certainty:E}));if(!i.has(D)){h={subject:_,domain:v,verb:h.verb,magnitude:g,time:x,certainty:E},m=D,p=!0;break}}if(p)break}if(p)break}if(p)break}if(p)break}}if(i.has(m)){const p=_r.length*vr.length*Jo.length*$o.length*Pu.length;for(let _=0;_<p;_+=1){const v=t.length+_,g=v%_r.length,x=Math.floor(v/_r.length)%vr.length,E=Math.floor(v/(_r.length*vr.length))%Jo.length,D=Math.floor(v/(_r.length*vr.length*Jo.length))%$o.length,M=Math.floor(v/(_r.length*vr.length*Jo.length*$o.length))%Pu.length,S={subject:_r[g],domain:vr[x],verb:h.verb,magnitude:Jo[E],time:$o[D],certainty:Pu[M]},A=Vu(Gu(S));if(!i.has(A)){m=A;break}}}i.add(m),t.push({id:`ra-${String(t.length+1).padStart(3,"0")}`,canonical:m,phase:c.phase})}}return t},xR=vR(_R),yR={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},A0=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:yR}),Pd=[A0("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),A0("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),A0("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],SR=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),ca=r=>{let t=r%1;return t<0&&(t+=1),t},MR=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),ca(r+l*(1-Math.exp(-i*s)))},Sy=12,R0=9,Fd=.12,My=-1,C0=2.4,ER=.3,bR=1.2,TR=.3,Ey=6741503,AR=5,RR=3.2,CR=.35,wR=.25,w0=400,DR=2.5,by=16755251,Bd=3,NR=new X(w0*-.04,w0*-.42,w0*1.02),Ty=-.14,Ay=.2,Ry=0,Cy=-22,LR=7,UR=["v1-cognitive-overproduction"],OR=["halfwall-06"],IR=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],PR="/gullhaien/nominert.png",FR=1e3/593,wy=8.4,Mg="https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/Intelligenspartiet2027.mp4",jS="https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/Skjermbilde%202026-03-01%20kl.%2015.09.35.png",xr=[{video:Mg,poster:jS},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],BR=Mg,zR=Math.max(0,xr.findIndex(r=>r.video===BR)),dp=17.6,Eg=dp*(16/9),hp=Eg*Math.sqrt(3)/2,HR=.56,GR=31.2,zd=hp*2.62,Dy=dp*.56,VR=Eg+5.4,Ny=dp+4.4,kR=hp+.22,XR=0,WR=hp+.72,YR=.72,qR=1.35,fs=18,X0=fs*(16/9),mc=X0*Math.sqrt(3)/2,Hd=mc*1.06,jR=17,ZR=2.8,KR=.00185,QR=.0062,JR=.0036,$R=60,tC=40,eC=220,nC=360,iC=105,aC=.75,Ly=96,W0=[330,250,180,120],sC=[2,3.2,4.8,6.2],rC=[.12,.17,.22,.3],Gd={tailPath:"",taperPaths:W0.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},D0=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],h=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${h} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},oC=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),lC=(r,t,i,s,l,c)=>{ZS(r,t,l).forEach((h,m)=>{r.fillText(h,i,s+m*c)})},ZS=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const h=s[f];if(!h)continue;const m=`${c}${h} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${h} `):c=m}return c.trim()&&l.push(c.trim()),l},cC=/\(\s*bold\s*\)/gi,uC=/\(\s*new\s*line\s*\)/gi,fC=/\(\s*new\s*paragraph\s*\)/gi,dC=r=>{const i=r.replace(/\r\n?/g,`
`).replace(fC,`

`).replace(uC,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const h=/\(\s*bold\s*\)/i.test(c),m=c.replace(cC,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:h,paragraphBreak:s}),s=!1}),l},hC=(r,t,i,s,l,c,f,h,m=.6)=>{const p=dC(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?h:f,ZS(r,v.text,l).forEach(E=>{r.fillText(E,i,_),_+=c})}),r.font=f},pC=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,KS=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),mC=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),gC=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],_C=new Map(gC.map(([r,t])=>[KS(r),t])),vC=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],xC=vC.map(([r,t])=>[new RegExp(mC(r),"gi"),t]),yC={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},SC=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),MC=r=>{let t=r;return xC.forEach(([i,s])=>{t=t.replace(i,s)}),t},EC=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=yC[t.toLowerCase()];return i?SC(t,i):t}),bC=r=>{const t=r.trim();return t?(_C.get(KS(t))??EC(MC(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},TC=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(pC,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>bC(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},Vd=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},Y0=Math.PI*2,tl=r=>Math.min(1,Math.max(0,r)),Bu=(r,t,i,s,l)=>{const c=Y0*(r*i+s),f=Y0*(t*i+l),h=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return h+m},kd=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new _c(s)},Ya=(r,t,i,s,l=!1)=>{r.wrapS=xc,r.wrapT=xc,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=Mr,r.magFilter=Wn,l&&(r.colorSpace=Kn),r.needsUpdate=!0},N0=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:h,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:x,roughnessBase:E,roughnessRange:D,normalStrength:M,aoStrength:S}=r,A=t*i,L=new ge(l),w=new Float32Array(A);let I=Number.POSITIVE_INFINITY,U=Number.NEGATIVE_INFINITY;for(let tt=0;tt<i;tt+=1)for(let Z=0;Z<t;Z+=1){const O=tt*t+Z,B=Z/t,ct=tt/i,pt=Bu(B,ct,c,s*.11,s*.23),Ct=Bu(B,ct,f,s*.41+.18,s*.29+.07),F=Bu(B,ct,h,s*.71+.43,s*.53+.31),q=Math.sin(Y0*((B+ct*.33)*m+s*.17));let _t=0;if(_!=="none"&&v>0){const it=(_==="x"?B:ct)*v%1,Mt=Math.min(it,1-it);_t=Math.exp(-Math.pow(Mt/Math.max(1e-4,x),2))}const Ot=pt*.6+Ct*.28+F*.12+q*p-_t*g;w[O]=Ot,Ot<I&&(I=Ot),Ot>U&&(U=Ot)}const z=new Float32Array(A),b=Math.max(1e-4,U-I),N=new Uint8ClampedArray(A*4),nt=new Uint8ClampedArray(A*4),G=new Uint8ClampedArray(A*4);for(let tt=0;tt<i;tt+=1)for(let Z=0;Z<t;Z+=1){const O=tt*t+Z,B=O*4,ct=Z/t,pt=tt/i,Ct=tl((w[O]-I)/b);z[O]=Ct;const F=Bu(ct,pt,f*.6,s*.19+.62,s*.73+.14)*.5+.5,q=tl(.78+(Ct-.5)*.24+(F-.5)*.12),_t=Bu(ct,pt,c*.5,s*.37+.89,s*.13+.44),Ot=1+_t*.017,qt=1+_t*.007,it=1-_t*.013,Mt=tl(E+(1-Ct)*D+(F-.5)*.14),wt=tl(.94-(1-Ct)*S);N[B]=Math.round(tl(L.r*q*Ot)*255),N[B+1]=Math.round(tl(L.g*q*qt)*255),N[B+2]=Math.round(tl(L.b*q*it)*255),N[B+3]=255;const Qt=Math.round(Mt*255);nt[B]=Qt,nt[B+1]=Qt,nt[B+2]=Qt,nt[B+3]=255;const ce=Math.round(wt*255);G[B]=ce,G[B+1]=ce,G[B+2]=ce,G[B+3]=255}const j=(tt,Z)=>{const O=(tt+t)%t,B=(Z+i)%i;return z[B*t+O]},$=new Uint8ClampedArray(A*4);for(let tt=0;tt<i;tt+=1)for(let Z=0;Z<t;Z+=1){const B=(tt*t+Z)*4,ct=j(Z+1,tt)-j(Z-1,tt),pt=j(Z,tt+1)-j(Z,tt-1),Ct=-ct*M,F=-pt*M,q=1,_t=1/Math.hypot(Ct,F,q);$[B]=Math.round((Ct*_t*.5+.5)*255),$[B+1]=Math.round((F*_t*.5+.5)*255),$[B+2]=Math.round((q*_t*.5+.5)*255),$[B+3]=255}return{albedo:kd(N,t,i),normal:kd($,t,i),roughness:kd(nt,t,i),ao:kd(G,t,i)}},AC=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const h=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=h*255,c/=h*255,f/=h*255;const m=l*.2126+c*.7152+f*.0722;return{color:new ge(l,c,f),luminance:m}};function RC(){const r=Vt.useRef([]),t=Vt.useRef(null),[i,s]=Vt.useState(!1),[l,c]=Vt.useState({width:1,height:1}),[f,h]=Vt.useState(Gd);return Vt.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},x=()=>{v()},E=(A,L)=>typeof A.addEventListener=="function"?(A.addEventListener("change",L),()=>A.removeEventListener("change",L)):(A.addListener(L),()=>A.removeListener(L));v(),g();const D=E(m,x),M=E(p,x),S=E(_,x);return window.addEventListener("resize",g,{passive:!0}),()=>{D(),M(),S(),window.removeEventListener("resize",g)}},[]),Vt.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],h(Gd);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,x=g[g.length-1];if(x){const E=v.x-x.x,D=v.y-x.y;if(Math.hypot(E,D)<aC)return}g.push(v),g.length>Ly&&g.splice(0,g.length-Ly)},p=()=>{const _=performance.now(),v=_-nC,g=r.current;let x=0;for(;x<g.length&&g[x].t<v;)x+=1;if(x>0&&g.splice(0,x),g.length<2)h(E=>E.visible?Gd:E);else{const E=D0(g),D=W0.map(I=>{const U=_-I;let z=g.length-1;for(;z>0&&g[z-1].t>=U;)z-=1;const b=g.slice(z);return D0(b.length>=2?b:g.slice(-2))}),M=_-iC;let S=g.length-1;for(;S>0&&g[S-1].t>=M;)S-=1;let A=g.slice(S);A.length<2&&(A=g.slice(-2));const L=D0(A),w=A[A.length-1]??g[g.length-1];h(I=>I.visible&&I.tailPath===E&&I.taperPaths.every((U,z)=>U===D[z])&&I.headPath===L&&I.headX===w.x&&I.headY===w.y?I:{tailPath:E,taperPaths:D,headPath:L,headX:w.x,headY:w.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],h(Gd)}},[i]),i?Et.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[Et.jsxs("defs",{children:[Et.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Et.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),Et.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),Et.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[Et.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),Et.jsxs("feMerge",{children:[Et.jsx("feMergeNode",{in:"blur"}),Et.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?Et.jsxs(Et.Fragment,{children:[Et.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?Et.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:rC[p],strokeWidth:sC[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${W0[p]}`):null),Et.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),Et.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function CC(){const r=Vt.useRef(null),t=Vt.useRef([]),i=Vt.useRef(Fd),s=Vt.useRef(Fd),l=Vt.useRef(!1),c=Vt.useRef([]),f=Vt.useRef(null),h=Vt.useRef(null),m=Vt.useRef(null),p=Vt.useRef(null),_=Vt.useRef(null),v=Vt.useRef(null);Vt.useEffect(()=>{const Q=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=Q,document.documentElement.style.overscrollBehavior=""}},[]);const[g,x]=Vt.useState(Pd),[E,D]=Vt.useState([]),[M,S]=Vt.useState(Pd[0].id),[A,L]=Vt.useState(!0),[w,I]=Vt.useState(!1),[U,z]=Vt.useState(!1),[b,N]=Vt.useState("menu"),nt=Vt.useRef("menu"),[G,j]=Vt.useState(!1),[$,tt]=Vt.useState([]),[Z,O]=Vt.useState(!1),[B,ct]=Vt.useState(""),[pt,Ct]=Vt.useState(()=>zR),[F,q]=Vt.useState(""),[_t,Ot]=Vt.useState(""),[qt,it]=Vt.useState(""),[Mt,wt]=Vt.useState(!1),[Qt,ce]=Vt.useState(null),[kt,An]=Vt.useState(()=>{if(typeof window>"u")return"nb";try{const Q=window.localStorage.getItem(yy);if(Q==="nb"||Q==="en")return Q}catch{}return"nb"});Vt.useEffect(()=>{try{window.localStorage.setItem(yy,kt)}catch{}},[kt]),Vt.useEffect(()=>{nt.current=b},[b]);const de=gR[kt],Ce=Vt.useMemo(()=>Q=>kt==="nb"?TC(Q):Q,[kt]),Be=Vt.useMemo(()=>xR.map((Q,H)=>{let dt="";if(typeof document<"u"){const xt=document.createElement("canvas");xt.width=420,xt.height=420;const Tt=xt.getContext("2d");if(Tt)try{xy(Tt,Q.canonical,{backgroundColor:"rgba(0,0,0,0)",lineColor:"rgba(46,39,33,0.94)",gridColor:"rgba(69,60,53,0.48)"}),dt=xt.toDataURL("image/png")}catch{dt=""}}return{...Q,index:H,previewDataUrl:dt}}),[]);Vt.useEffect(()=>{const Q=new Set(Be.map(H=>H.canonical));Q.size!==Be.length&&console.warn(`Glyff wall uniqueness violation: ${Be.length-Q.size} duplicates detected.`)},[Be]);const be=Vt.useMemo(()=>JSON.stringify({version:"rl-story-v1",name:"replacement-anxiety-pattern",protocol:"ra-sequence-v1",read_order:"left_to_right_top_to_bottom",count:Be.length,items:Be.map(Q=>({order:Q.index+1,id:Q.id,phase:Q.phase,canonical:Q.canonical}))},null,2),[Be]),Rn=Vt.useCallback(()=>{f.current?.()},[]),k=Vt.useCallback(()=>{h.current?.()},[]),Tn=Vt.useCallback(()=>{m.current?.()},[]),ke=Vt.useCallback(()=>{wt(!1)},[]),Xe=Vt.useCallback(()=>{v.current=null,ce(null)},[]),le=Vt.useCallback(Q=>{Q.preventDefault();const H=F.trim(),dt=_t.trim(),xt=qt.trim();if(!H||!dt||!xt)return;const Tt=kt==="nb"?"Kontakt fra Signaturer":"Contact from Signatures",yt=[`${kt==="nb"?"Navn":"Name"}: ${H}`,`${kt==="nb"?"E-post":"Email"}: ${dt}`,"",`${kt==="nb"?"Melding":"Message"}:`,xt].join(`
`),ut=`mailto:lars@larscuzner.com?subject=${encodeURIComponent(Tt)}&body=${encodeURIComponent(yt)}`;window.location.href=ut},[kt,_t,qt,F]),P=Vt.useRef(0),T=Vt.useRef(0),K=Vt.useRef(null),vt=Vt.useCallback(Q=>{const H=Q>=0?1:-1;Ct(dt=>{const xt=xr.length;return(dt+H+xt)%xt})},[]),Rt=Vt.useCallback(Q=>{Q.preventDefault();const H=Math.abs(Q.deltaX)>Math.abs(Q.deltaY)?Q.deltaX:Q.deltaY;P.current+=H;const dt=performance.now();dt-T.current<eC||Math.abs(P.current)<tC||(vt(P.current>0?1:-1),P.current=0,T.current=dt)},[vt]),gt=Vt.useCallback(Q=>{K.current=Q.touches[0]?.clientX??null},[]),re=Vt.useCallback(Q=>{const H=K.current,dt=Q.changedTouches[0]?.clientX??null;if(K.current=null,H===null||dt===null)return;const xt=dt-H;Math.abs(xt)<28||vt(xt<0?1:-1)},[vt]);Vt.useEffect(()=>{U||N("menu")},[U]),Vt.useEffect(()=>{U||j(!1)},[U]),Vt.useEffect(()=>{G||wt(!1)},[G]),Vt.useEffect(()=>{if(!Mt)return;const Q=_.current;if(!Q)return;const H=Q.play();H&&typeof H.catch=="function"&&H.catch(()=>{})},[Mt]),Vt.useEffect(()=>{if(!Mt)return;const Q=H=>{H.key==="Escape"&&wt(!1)};return window.addEventListener("keydown",Q),()=>{window.removeEventListener("keydown",Q)}},[Mt]),Vt.useEffect(()=>{b==="videos"&&(P.current=0,T.current=0)},[b]),Vt.useEffect(()=>{if(!U||b!=="videos")return;let Q=!1;const H=()=>{Q||c.current.forEach(xt=>{if(!xt||!xt.paused&&xt.readyState>=2)return;const Tt=xt.play();Tt&&typeof Tt.catch=="function"&&Tt.catch(()=>{})})};H();const dt=window.setInterval(H,900);return()=>{Q=!0,window.clearInterval(dt)}},[U,b]),Vt.useEffect(()=>{if(!U||b!=="news")return;let Q=!1;const H=Tt=>({title:String(Tt?.title??"").trim(),source:String(Tt?.source??"").trim(),url:String(Tt?.url??"").trim(),snippet:String(Tt?.snippet??"").trim(),published_at:String(Tt?.published_at??"").trim(),published:Tt?.published!==!1}),dt=Tt=>{const yt=Date.parse(Tt);return Number.isFinite(yt)?yt:0};return(async()=>{O(!0),ct("");for(const Tt of IR)try{const yt=await fetch(Tt,{cache:"no-store"});if(!yt.ok)continue;const ut=await yt.json();if(!Array.isArray(ut?.items))continue;const mt=ut.items.map(H).filter(ie=>ie.published&&ie.title&&ie.url).sort((ie,Lt)=>dt(Lt.published_at)-dt(ie.published_at));if(Q)return;tt(mt),O(!1);return}catch{}Q||(tt([]),ct(de.outsideNewsError),O(!1))})(),()=>{Q=!0}},[U,b,de.outsideNewsError]),Vt.useEffect(()=>{let Q=!1;return(async()=>{try{const dt=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),xt=dt.headers.get("content-type")??"";if(!dt.ok)throw new Error(`HTTP ${dt.status} while loading glyph language map`);if(!xt.toLowerCase().includes("application/json")){const zt=await dt.text();throw new Error(`Expected JSON but got '${xt||"unknown"}' (${zt.slice(0,120)})`)}const Tt=await dt.json();if(!Array.isArray(Tt?.items))throw new Error("Glyph language payload missing 'items' array");const yt=Tt.items.map((zt,ee)=>SR(zt,ee)).filter(zt=>zt.enabled!==!1),ut=new Map,mt=[],ie=[],Lt=[];if(yt.forEach(zt=>{if(!zt.canonical){ie.push(`${zt.id} (empty canonical)`);return}let ee="";try{ee=Vu(zt.canonical)}catch{ie.push(`${zt.id} (${zt.canonical})`);return}const Yn=ut.get(ee);if(Yn&&Yn!==zt.id){Lt.push(`${zt.id} duplicates ${Yn} (${ee})`);return}ut.set(ee,zt.id),mt.push({...zt,canonical:ee})}),ie.length>0&&console.warn("Glyph language map dropped invalid canonical rows:",ie.join("; ")),Lt.length>0&&console.warn("Glyph language map dropped duplicate canonical rows:",Lt.join("; ")),Q)return;D(mt)}catch(dt){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",dt),Q)return;D([])}})(),()=>{Q=!0}},[]),Vt.useEffect(()=>{if(l.current||g.length===0)return;let Q=null;for(const xt of UR){const Tt=E.find(yt=>yt.id===xt&&yt.panel_id);if(Tt?.panel_id){Q=Tt.panel_id;break}}Q||(Q=OR.find(xt=>g.some(Tt=>Tt.id===xt))??null);const H=(Q?g.find(xt=>xt.id===Q):void 0)??g[0],dt=typeof H?.installation?.placement_t=="number"?ca(H.installation.placement_t):Fd;i.current=dt,s.current=dt,H?.id&&S(H.id),l.current=!0},[E,g]);const Ft=Vt.useMemo(()=>E.filter(Q=>Q.enabled!==!1&&typeof Q.canonical=="string"&&Q.canonical.trim().length>0),[E]),ue=Vt.useMemo(()=>{const Q=new Map;if(!g.length||!Ft.length)return Q;const H=Tt=>{const yt=ca(Tt);return ca(Fd-yt)},dt=[...g].sort((Tt,yt)=>{const ut=typeof Tt.installation?.placement_t=="number"?Tt.installation.placement_t:0,mt=typeof yt.installation?.placement_t=="number"?yt.installation.placement_t:0,ie=H(ut),Lt=H(mt);return ie===Lt?Tt.id.localeCompare(yt.id):ie-Lt}),xt=Math.min(dt.length,Ft.length);for(let Tt=0;Tt<xt;Tt+=1)Q.set(dt[Tt].id,Ft[Tt]);return Q},[g,Ft]),pe=Vt.useMemo(()=>{const Q=new Map;return ue.forEach((H,dt)=>{H.canonical&&Q.set(dt,H.canonical)}),Q},[ue]),Nt=Vt.useMemo(()=>{const Q=new Map;return ue.forEach((H,dt)=>{Q.set(dt,{label:H.label||"",note:H.note||"",labelNb:H.label_nb||"",noteNb:H.note_nb||""})}),Q},[ue]);Vt.useEffect(()=>{let Q=!1;return(async()=>{L(!0),I(!1);try{const dt=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),xt=dt.headers.get("content-type")??"";if(!dt.ok)throw new Error(`HTTP ${dt.status} while loading panel data`);if(!xt.toLowerCase().includes("application/json")){const Lt=await dt.text();throw new Error(`Expected JSON but got '${xt||"unknown"}' (${Lt.slice(0,120)})`)}const Tt=await dt.json();if(!Array.isArray(Tt?.panels))throw new Error("Panel payload missing 'panels' array");const yt=typeof Tt.media_root=="string"?Tt.media_root.replace(/\/+$/,""):"",ut=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",mt=Lt=>/^https?:\/\//i.test(Lt)&&ut?`/proxy?url=${encodeURIComponent(Lt)}`:Lt,ie=Tt.panels.map(Lt=>{const zt=typeof Lt?.source=="string"?Lt.source.replace(/^\/+/,""):"",ee=zt?yt?`${yt}/${zt}`:`/${zt}`:void 0,Yn=ee?mt(ee):void 0,Ca=typeof Lt?.poster=="string"?Lt.poster.replace(/^\/+/,""):"",wa=Ca?yt?`${yt}/${Ca}`:`/${Ca}`:void 0,vs=wa?mt(wa):void 0,ki=Lt?.type==="image"||Lt?.type==="video"?Lt.type:"text",Qn=Lt?.content??{},Xi=String(Qn?.title??"Untitled").trim()||"Untitled",Bn=String(Qn?.description??"").trim(),gi=String(Qn?.title_nb??Qn?.title_no??"").trim(),Qe=String(Qn?.description_nb??Qn?.description_no??"").trim(),pn=String(Qn?.title_en??"").trim(),Nn=String(Qn?.description_en??"").trim();return{...Lt,kind:ki,type:ki,title:Xi,body:Bn,title_nb:gi||Xi,body_nb:Qe||Bn,title_en:pn,body_en:Nn,cta:Qn?.cta,poster:vs,image:ki==="image"?Yn:void 0,video:ki==="video"?Yn:void 0}});if(ie.length===0)throw new Error("Panel payload contained 0 panels");if(Q)return;x(ie),S(ie[0].id)}catch(dt){if(console.error("Failed to load panels; using fallback data.",dt),Q)return;x(Pd),S(Pd[0].id),I(!0)}finally{Q||L(!1)}})(),()=>{Q=!0}},[]);const Dt=Vt.useMemo(()=>g.find(Q=>Q.id===M)??g[0]??{title:"",body:""},[M,g]),Xt=Vt.useMemo(()=>Q=>{const H=Nt.get(Q.id);if(kt==="nb"){const Tt=Vd(H?.labelNb,Q.title_nb,Ce(H?.label||""),Ce(Q.title||"")),yt=Vd(H?.noteNb,Q.body_nb,Ce(H?.note||""),Ce(Q.body||""));return{title:Tt||"Mangler norsk tittel",body:yt||"Mangler norsk tekst."}}const dt=Vd(H?.label,Q.title_en),xt=Vd(H?.note,Q.body_en);return{title:dt||"Missing English title",body:xt||"Missing English text."}},[Nt,kt,Ce]),Wt=Vt.useMemo(()=>Xt(Dt).title,[Dt,Xt]),Zt=Vt.useMemo(()=>new Intl.DateTimeFormat(kt==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[kt]);return Vt.useEffect(()=>{if(g.length===0)return;const Q=r.current;if(!Q)return;f.current=null,h.current=null,m.current=null,z(!1),j(!1),Xe();let H=!1,dt=()=>{};return(()=>{if(H||!Q)return;t.current=[];const Tt=window.matchMedia("(prefers-reduced-motion: reduce)"),yt=window.matchMedia("(max-width: 767px)"),ut=Tt.matches,mt=yt.matches,ie=at=>{const It=Xt(at);v.current=at.id,ce({panelId:at.id,title:It.title,body:It.body})},Lt=new cg;Lt.background=new ge(987671),Lt.fog=new Ju(987671,38,230);const zt=new Qi(mt?72:64,Q.clientWidth/Q.clientHeight,.1,1200),ee=new WS({antialias:!mt,alpha:!1,powerPreference:"high-performance"});ee.setPixelRatio(Math.min(window.devicePixelRatio,mt?1:1.5)),ee.setSize(Q.clientWidth,Q.clientHeight),ee.outputColorSpace=Kn,ee.toneMapping=kh,ee.toneMappingExposure=mt?.76:.72,ee.shadowMap.enabled=!mt,ee.shadowMap.type=al,Q.appendChild(ee.domElement);let Yn=!1;const Ca=at=>{Yn!==at&&(Yn=at,ee.shadowMap.type=at?Iy:al,ee.shadowMap.needsUpdate=!0)},wa=new Hh(ee),vs=wa.fromScene(new eR,.06);Lt.environment=vs.texture;const ki=new OS(16185599,.05);Lt.add(ki);const Qn=new US(14739442,1777446,.08);Lt.add(Qn);const Xi=oC(tR),Bn=new MS(Xi,!0,"catmullrom",.17),gi=mt?180:300,Qe=Math.min(8,ee.capabilities.getMaxAnisotropy()),pn=mt?256:512,Nn=N0({width:pn,height:pn,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});Ya(Nn.albedo,4.8,24,Qe,!0),Ya(Nn.normal,4.8,24,Qe),Ya(Nn.roughness,4.8,24,Qe),Ya(Nn.ao,4.8,24,Qe);const bi=N0({width:pn,height:pn,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});Ya(bi.albedo,2.2,24,Qe,!0),Ya(bi.normal,2.2,24,Qe),Ya(bi.roughness,2.2,24,Qe),Ya(bi.ao,2.2,24,Qe);const fa=N0({width:pn,height:pn,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});Ya(fa.albedo,3.4,24,Qe,!0),Ya(fa.normal,3.4,24,Qe),Ya(fa.roughness,3.4,24,Qe),Ya(fa.ao,3.4,24,Qe);const Qa=new nl({color:9607586,map:Nn.albedo,normalMap:Nn.normal,normalScale:new Le(.32,.32),roughnessMap:Nn.roughness,roughness:.38,metalness:0,aoMap:Nn.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Xn}),Da=new nl({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Xn}),zn=new nl({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new ge(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Xn}),yo=()=>{const at=[],It=new X(0,1,0);let Kt=new X(1,0,0);for(let Ut=0;Ut<=gi;Ut+=1){const De=Ut/gi,Se=Bn.getPointAt(De),ui=De===1?Se.clone().sub(Bn.getPointAt(De-.001)).normalize():Bn.getPointAt(De+.001).sub(Se).normalize();let vn=new X().crossVectors(ui,It).normalize();vn.lengthSq()<1e-4&&(vn=Kt.clone()),vn.dot(Kt)<0&&vn.multiplyScalar(-1),Kt=vn.clone();const Ia=new X().crossVectors(vn,ui).normalize();at.push({pt:Se,right:vn,up:Ia,t:De})}const Bt=(Ut,De,Se=!1)=>{const ui=[],vn=[],Ia=[];for(let Pa=0;Pa<=gi;Pa+=1){const wn=at[Pa],fi=Ut(wn),ia=De(wn);ui.push(fi.x,fi.y,fi.z,ia.x,ia.y,ia.z),vn.push(0,wn.t,1,wn.t)}for(let Pa=0;Pa<gi;Pa+=1){const wn=Pa*2,fi=wn+1,ia=wn+2,Us=wn+3;Se?Ia.push(wn,ia,fi,ia,Us,fi):Ia.push(wn,fi,ia,ia,fi,Us)}const yi=new Oi;yi.setAttribute("position",new un(ui,3));const Fr=new un(vn,2);return yi.setAttribute("uv",Fr),yi.setAttribute("uv2",Fr.clone()),yi.setIndex(Ia),yi.computeVertexNormals(),yi},Pt=Sy*.5,ae=R0*.5,se=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ae)).add(Ut.right.clone().multiplyScalar(-Pt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ae)).add(Ut.right.clone().multiplyScalar(Pt))),Ve=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae)).add(Ut.right.clone().multiplyScalar(-Pt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae)).add(Ut.right.clone().multiplyScalar(Pt)),!0),We=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ae)).add(Ut.right.clone().multiplyScalar(-Pt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae)).add(Ut.right.clone().multiplyScalar(-Pt)),!0),On=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ae)).add(Ut.right.clone().multiplyScalar(Pt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae)).add(Ut.right.clone().multiplyScalar(Pt))),fn=.08,ze=.015,Ee=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae-fn)).add(Ut.right.clone().multiplyScalar(-Pt+ze)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae)).add(Ut.right.clone().multiplyScalar(-Pt+ze)),!0),Ae=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae-fn)).add(Ut.right.clone().multiplyScalar(Pt-ze)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae)).add(Ut.right.clone().multiplyScalar(Pt-ze)),!1),we=.22,_n=.018,Oa=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ae)).add(Ut.right.clone().multiplyScalar(-Pt+_n)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ae+we)).add(Ut.right.clone().multiplyScalar(-Pt+_n)),!0),xi=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ae)).add(Ut.right.clone().multiplyScalar(Pt-_n)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ae+we)).add(Ut.right.clone().multiplyScalar(Pt-_n)),!1),Yi=.14,ss=Bt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae-.05)).add(Ut.right.clone().multiplyScalar(-Yi)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ae-.05)).add(Ut.right.clone().multiplyScalar(Yi)),!0);return{floorGeo:se,ceilGeo:Ve,leftGeo:We,rightGeo:On,leftSkirtGeo:Oa,rightSkirtGeo:xi,trackRailGeo:ss,leftCrownGeo:Ee,rightCrownGeo:Ae}},{floorGeo:da,ceilGeo:ha,leftGeo:Na,rightGeo:C,leftSkirtGeo:Y,rightSkirtGeo:ft,trackRailGeo:ot,leftCrownGeo:et,rightCrownGeo:Ht}=yo(),jt=new Oe(da,Qa),Gt=new Oe(ha,zn),Jt=new Oe(Na,Da),ne=new Oe(C,Da),xe=new nl({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),ve=new Ta({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Xn}),$t=new Oe(Y,ve),Te=new Oe(ft,ve);$t.receiveShadow=!0,Te.receiveShadow=!0;const mn=new Oe(et,ve),gn=new Oe(Ht,ve);mn.receiveShadow=!1,gn.receiveShadow=!1;const Je=new nl({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Xn}),Pn=new Oe(ot,Je);Pn.receiveShadow=!1,jt.receiveShadow=!0,jt.castShadow=!0,Gt.receiveShadow=!0,Gt.castShadow=!0,Jt&&(Jt.receiveShadow=!0,Jt.castShadow=!0),ne&&(ne.receiveShadow=!0,ne.castShadow=!0),Lt.add(jt),Lt.add(Gt),Jt&&Lt.add(Jt),ne&&Lt.add(ne),Lt.add($t),Lt.add(Te),Lt.add(mn),Lt.add(gn),Lt.add(Pn);const te=[jt,Gt,$t,Te,mn,gn,Pn];Jt&&te.push(Jt),ne&&te.push(ne);const _i=new X(0,1,0),ye=new bn,oi=new bn,Ti=new bn;Lt.add(ye),Lt.add(oi),Lt.add(Ti);const Ln=new Zd(16773598,mt?16:24,34,Math.PI/8.4,.44,2);Ln.target=ye,Ln.castShadow=!mt,Ln.castShadow&&(Ln.shadow.mapSize.width=2048,Ln.shadow.mapSize.height=2048,Ln.shadow.bias=-35e-5,Ln.shadow.normalBias=.012,Ln.shadow.camera.near=.4,Ln.shadow.camera.far=34),Lt.add(Ln);const li=new Zd(12571903,mt?6:9,34,Math.PI/6.5,.68,2);li.target=oi,li.castShadow=!1,Lt.add(li);const je=new Zd(14083583,mt?5:7,28,Math.PI/7.8,.6,2);je.target=Ti,je.castShadow=!1,Lt.add(je);const Un=new bn,ci=new bn;Lt.add(Un),Lt.add(ci);const He=new H0(16774374,0);if(He.target=Un,He.castShadow=!mt,He.castShadow){He.shadow.mapSize.width=4096,He.shadow.mapSize.height=4096,He.shadow.bias=-8e-5,He.shadow.normalBias=.0012,He.shadow.radius=0;const at=mt?250:220;He.shadow.camera.left=-at,He.shadow.camera.right=at,He.shadow.camera.top=at,He.shadow.camera.bottom=-at,He.shadow.camera.near=25,He.shadow.camera.far=980}Lt.add(He);const Ai=new H0(9090280,0);Ai.target=ci,Lt.add(Ai),da.computeBoundingBox(),da.computeBoundingSphere(),ha.computeBoundingBox(),ha.computeBoundingSphere(),Na.computeBoundingBox(),Na.computeBoundingSphere(),C.computeBoundingBox(),C.computeBoundingSphere();const Xs=g.some(at=>at.installation?.mount_type==="continuous_led_wall"||at.installation?.mount_type==="jutting_half_wall")?g:mt?g.filter((at,It)=>It%2===0):g,Ja=[],Ar=[],Ri=[],vi=[],So=[],pa=[],Rr=[],Ii=at=>{if(!at.paused&&at.currentTime>0)return;const It=at.play();It&&typeof It.catch=="function"&&It.catch(()=>{})},Dc=setInterval(()=>{let at=!0;pa.forEach(It=>{(It.paused||It.readyState<2)&&(at=!1,Ii(It))}),at&&pa.length>0&&clearInterval(Dc)},500);So.push(()=>clearInterval(Dc));const Nc=new xo(1,1,.2),nf=new Aa(.82,.82),Mo=new nl({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),$a=(at,It)=>{const Bt=document.createElement("canvas");Bt.width=512,Bt.height=512;const Pt=Bt.getContext("2d");Pt.clearRect(0,0,512,512);const ae=pe.get(It);if(ae)try{xy(Pt,ae,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const Ae=new _c(Bt);return Ae.colorSpace=Kn,Ae}catch(Ae){console.warn(`Invalid glyph canonical sentence for panel '${It}': '${ae}'. Falling back to procedural glyph.`,Ae)}const se=512/2,Ve=512/2,We=at*137.508;Pt.fillStyle="rgba(6,14,24,0.7)",Pt.beginPath(),Pt.arc(se,Ve,512*.42,0,Math.PI*2),Pt.fill(),Pt.strokeStyle="rgba(102,221,255,0.95)",Pt.lineWidth=2.5,Pt.lineCap="round",Pt.beginPath(),Pt.arc(se,Ve,512*.38,0,Math.PI*2),Pt.stroke();const On=3+at%4;for(let Ae=0;Ae<On;Ae++){const we=Ae/On*Math.PI*2+We,_n=512*.08,Oa=512*.32;Pt.beginPath(),Pt.moveTo(se+Math.cos(we)*_n,Ve+Math.sin(we)*_n),Pt.lineTo(se+Math.cos(we)*Oa,Ve+Math.sin(we)*Oa),Pt.stroke()}const fn=2+at%3;for(let Ae=0;Ae<fn;Ae++){const we=512*(.15+Ae*.09),_n=We+Ae*1.2;Pt.beginPath(),Pt.arc(se,Ve,we,_n,_n+Math.PI*(.4+at%3*.2)),Pt.stroke()}Pt.fillStyle="rgba(102,221,255,0.85)";const ze=3+at%5;for(let Ae=0;Ae<ze;Ae++){const we=We+Ae/ze*Math.PI*2,_n=512*(.2+Ae%3*.06);Pt.beginPath(),Pt.arc(se+Math.cos(we)*_n,Ve+Math.sin(we)*_n,4,0,Math.PI*2),Pt.fill()}Pt.strokeStyle="rgba(102,221,255,0.5)",Pt.lineWidth=1.5,Pt.beginPath(),Pt.arc(se,Ve,512*.12,0,Math.PI*2),Pt.stroke(),Pt.fillStyle="rgba(102,221,255,0.95)",Pt.beginPath(),Pt.arc(se,Ve,6,0,Math.PI*2),Pt.fill();const Ee=new _c(Bt);return Ee.colorSpace=Kn,Ee},Lc=(at,It)=>{const Kt=document.createElement("canvas");Kt.width=1024,Kt.height=640;const Bt=Kt.getContext("2d");Bt.fillStyle="rgba(8,12,18,0.88)",Bt.beginPath(),Bt.roundRect(16,16,992,608,24),Bt.fill(),Bt.strokeStyle="rgba(102,221,255,0.25)",Bt.lineWidth=2,Bt.beginPath(),Bt.roundRect(16,16,992,608,24),Bt.stroke(),Bt.fillStyle="rgba(102,221,255,0.95)",Bt.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",lC(Bt,at.toUpperCase(),60,100,900,58),Bt.strokeStyle="rgba(102,221,255,0.3)",Bt.lineWidth=2,Bt.beginPath(),Bt.moveTo(60,180),Bt.lineTo(960,180),Bt.stroke(),Bt.fillStyle="rgba(220,230,240,0.9)";const Pt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",ae="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";Bt.font=Pt,hC(Bt,It,60,230,900,42,Pt,ae);const se=new _c(Kt);return se.colorSpace=Kn,se},Eo=()=>{const It=document.createElement("canvas");It.width=512,It.height=512;const Kt=It.getContext("2d"),Bt=512/2,Pt=512/2;Kt.beginPath(),Kt.arc(Bt,Pt,512*.42,0,Math.PI*2),Kt.fillStyle="rgba(6,14,24,0.7)",Kt.fill(),Kt.strokeStyle="rgba(255,170,51,0.9)",Kt.lineWidth=6,Kt.beginPath(),Kt.arc(Bt,Pt,512*.38,0,Math.PI*2),Kt.stroke();const ae=8;for(let Ve=0;Ve<ae;Ve++){const We=Ve/ae*Math.PI*2-Math.PI/2;Kt.strokeStyle=`rgba(255,${170+Math.round(Math.sin(Ve)*40)},51,0.8)`,Kt.lineWidth=4,Kt.beginPath(),Kt.moveTo(Bt+Math.cos(We)*512*.12,Pt+Math.sin(We)*512*.12),Kt.lineTo(Bt+Math.cos(We)*512*.34,Pt+Math.sin(We)*512*.34),Kt.stroke();const On=Bt+Math.cos(We)*512*.34,fn=Pt+Math.sin(We)*512*.34,ze=512*.06;Kt.beginPath(),Kt.moveTo(On,fn),Kt.lineTo(On-ze*Math.cos(We-.4),fn-ze*Math.sin(We-.4)),Kt.moveTo(On,fn),Kt.lineTo(On-ze*Math.cos(We+.4),fn-ze*Math.sin(We+.4)),Kt.stroke()}Kt.beginPath(),Kt.arc(Bt,Pt,512*.06,0,Math.PI*2),Kt.fillStyle="rgba(255,200,80,0.95)",Kt.fill();const se=new _c(It);return se.colorSpace=Kn,se},ts=at=>{const It=ca(at),Kt=Bn.getPointAt(It),Pt=Bn.getPointAt(ca(It+.002)).clone().sub(Kt).normalize();let ae=new X().crossVectors(Pt,_i).normalize();ae.lengthSq()<1e-4&&(ae=new X(1,0,0));const se=new X().crossVectors(ae,Pt).normalize();return{point:Kt,tangent:Pt,right:ae,up:se}},Uc=at=>{const It=at.uv?.y;if(typeof It=="number"&&Number.isFinite(It))return ca(It);const Kt=mt?180:320;let Bt=0,Pt=Number.POSITIVE_INFINITY;for(let ae=0;ae<=Kt;ae+=1){const se=ae/Kt,We=Bn.getPointAt(se).distanceToSquared(at.point);We<Pt&&(Pt=We,Bt=se)}return ca(Bt)};Bn.getLength();const es=[],Oc=new Aa(C0*2,C0*2),bo=new Aa(AR,RR);Xs.forEach((at,It)=>{const Kt=at.installation,Bt=ca(Kt?.placement_t??.05+It/Xs.length),{point:Pt,right:ae,up:se}=ts(Bt),Ve=Kt?.side==="left",fn=(Kt?.side==="center"?0:Ve?-1:1)*Sy*.12,ze=Pt.clone().add(ae.clone().multiplyScalar(fn)).add(se.clone().multiplyScalar(.5)),Ee=$a(It,at.id);Ar.push(Ee);const Ae=new Ta({color:16777215,emissive:new ge(Ey),emissiveIntensity:1.2,map:Ee,emissiveMap:Ee,transparent:!0,alphaTest:.05,side:Xn,depthWrite:!1});Ri.push(Ae);const we=new Oe(Oc,Ae);we.position.copy(ze),we.userData={panel:at,isGlyph:!0},Ja.push(we),Lt.add(we);const _n=Xt(at),Oa=_n.title,xi=_n.body,Yi=Lc(Oa,xi);Ar.push(Yi);const ss=new Ta({color:16777215,emissive:new ge(1122867),emissiveIntensity:.3,map:Yi,transparent:!0,opacity:0,side:Xn,depthWrite:!0});Ri.push(ss);const Ut=new Oe(bo,ss),De=new mo;De.add(Ut),De.position.copy(ze),De.scale.setScalar(.01),De.visible=!1,Lt.add(De);const Se=new fo(Ey,mt?6:12,20,1.5);Se.position.copy(ze),Lt.add(Se),es.push({mesh:we,card:De,panel:at,progress:Bt,baseY:ze.y,expanded:!1,expandT:0}),t.current.push({meta:at,progress:Bt})});let Cn=!1,Ji=0,$e=0,Jn=0,ns=0,$i=.08,af=0,La=!1,To=0,Ws=0,Cr=!1,Wi=0,is=0,ys=0,Ys=0,Ss=!1,qs=!1,dl=0,hl=0,ma=null,Ms=!1,Ic=0,sf=0,wr=!1,Pc=!1;const Es={x:0,y:0},ta={x:0,y:0},rf=new X,of=new X,pl=at=>{Cr!==at&&(Cr=at,j(at))},qn=new X,Fc=32;for(let at=0;at<Fc;at++)qn.add(Bn.getPointAt(at/Fc));qn.divideScalar(Fc);const Dr=ut?mt?480:800:mt?1200:2200,pp=qn.clone().add(new X(-6,10,4)),bs=new mo;bs.position.copy(pp),bs.visible=!1,Lt.add(bs);const lf=new rp(mt?1.6:1.2);vi.push(lf);const cf=new yr({color:16777215,transparent:!0,opacity:.94,blending:Qd,depthWrite:!1,depthTest:!1,toneMapped:!1});Ri.push(cf);const ea=new pg(lf,cf,Dr);ea.instanceMatrix.setUsage(dS),ea.frustumCulled=!1,ea.renderOrder=20,bs.add(ea);const Ao=new bn,js=new X,Ts=new ge,Nr=Array.from({length:Dr},()=>new X((Math.random()-.5)*80,(Math.random()-.5)*80,(Math.random()-.5)*80));for(let at=0;at<Dr;at+=1)ea.setColorAt(at,Ts.setHex(2783743));ea.instanceColor&&(ea.instanceColor.needsUpdate=!0);const mp=()=>{rf.copy(qn).add(NR),of.copy(qn)},Bc=()=>{es.forEach(at=>{at.expanded=!1})},ml=at=>{Cn!==at&&(Cn=at,Ss=!1,qs=!1,La=!1,ma=null,Ms=!1,z(at),at?($e=0,Jn=0,ns=0,$i=.08,af=0,pl(!1),wr=!1,Pc=!0,Wi=Ty,is=Ay,ys=Ry,Ys=Cy,mp(),Bc(),Xe()):pl(!1))},Ro=()=>{ml(!Cn)};f.current=Ro;const uf=new Aa(Bd*2,Bd*2),gl=Eo();Ar.push(gl);const As=new Ta({color:16777215,emissive:new ge(by),emissiveIntensity:1.4,map:gl,emissiveMap:gl,transparent:!0,alphaTest:.05,side:Xn,depthWrite:!1});Ri.push(As);const{point:ff,up:df}=ts(wR),_l=ff.clone().add(df.clone().multiplyScalar(1)),Zs=new Oe(uf,As);Zs.position.copy(_l),Zs.userData={isExitGlyph:!0},Lt.add(Zs);const hf=new Aa(Bd*5,Bd*5),Co=new yr({visible:!1,side:Xn}),Ua=new Oe(hf,Co);Ua.position.copy(_l),Ua.userData={isExitGlyph:!0},Ja.push(Ua),Lt.add(Ua);const pf=new fo(by,mt?6:12,20,1.5);pf.position.copy(_l),Lt.add(pf);const wo=new sp(mt?1.25:1.6,26,26);vi.push(wo);const vl=new Ta({color:16764788,emissive:new ge(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});Ri.push(vl);const xl=ff.clone().add(df.clone().multiplyScalar(R0*.52+.32)),Rs=new Oe(wo,vl);Rs.position.copy(xl),Rs.userData={isReentryDot:!0},Ja.push(Rs),Lt.add(Rs);const yl=new ap(mt?1.75:2.2,mt?2.35:2.95,52);vi.push(yl);const Sl=new yr({color:16761948,transparent:!0,opacity:0,side:Xn,depthWrite:!1});Ri.push(Sl);const Lr=new Oe(yl,Sl);Lr.position.copy(xl),Lt.add(Lr);const Ml=new fo(16761948,0,mt?34:44,2);Ml.position.copy(xl),Lt.add(Ml);const Do=qn.clone().add(new X(-178,42,118)),$n=new mo;$n.position.copy(Do),$n.visible=!1,Lt.add($n);const zc=new Ta({color:3093563,roughness:.88,metalness:.06}),mf=new Ta({color:5923435,roughness:.54,metalness:.14}),gf=new Ta({color:2040617,roughness:.92,metalness:.04});Ri.push(zc,mf,gf);const Pi=new Aa(X0+2.6,fs+2.4),Ur=new Aa(X0,fs),Hc=new $u(Hd,6),Gc=new $u(Hd,6),Vc=new tf(.2,.2,fs+2.8,10);vi.push(Pi,Ur,Hc,Gc,Vc);const No=new Oe(Hc,gf);No.rotation.x=-Math.PI*.5,No.position.y=-fs*.52,No.receiveShadow=!0,$n.add(No);const Or=new Oe(Gc,zc);Or.rotation.x=Math.PI*.5,Or.position.y=fs*.52,Or.receiveShadow=!0,$n.add(Or);const kc=new fo(15985630,0,96,2);kc.position.set(0,fs*.34,0),$n.add(kc);const Cs=new fo(11123666,0,74,2);Cs.position.set(0,-fs*.1,mc*.3),$n.add(Cs);const Ir=new LS().load(PR);Ir.colorSpace=Kn,Ir.anisotropy=ee.capabilities.getMaxAnisotropy(),Ar.push(Ir);const Pr=new Aa(wy,wy/FR);vi.push(Pr);const El=new yr({map:Ir,transparent:!0,alphaTest:.06,depthWrite:!1,toneMapped:!1});Ri.push(El);const Lo=new Oe(Pr,El),ws=fs*.34,Ds=xr[0]?.video??"";for(let at=0;at<6;at+=1){const It=at*Math.PI/3,Kt=mc+1,Bt=mc-.18,Pt=new Oe(Pi,zc);Pt.position.set(-Math.sin(It)*Kt,0,-Math.cos(It)*Kt),Pt.rotation.y=It,Pt.castShadow=!0,Pt.receiveShadow=!0,$n.add(Pt);const ae=xr[at%xr.length],se=document.createElement("video");se.src=ae.video,se.poster=ae.poster,se.autoplay=!0,se.loop=!0,se.muted=!0,se.playsInline=!0,se.preload="metadata",se.crossOrigin="anonymous",se.setAttribute("playsinline","true"),se.setAttribute("webkit-playsinline","true"),pa.push(se);let Ve=!1;const We=()=>{Ve||!Ds||se.src===Ds||(Ve=!0,se.src=Ds,se.load(),Ii(se))},On=()=>{Ii(se)},fn=()=>{We()};se.addEventListener("loadeddata",On),se.addEventListener("canplay",On),se.addEventListener("error",fn),So.push(()=>{se.removeEventListener("loadeddata",On),se.removeEventListener("canplay",On),se.removeEventListener("error",fn)});const ze=new xS(se);ze.colorSpace=Kn,ze.minFilter=Wn,ze.magFilter=Wn,ze.generateMipmaps=!1,Ar.push(ze),Ii(se);const Ee=new yr({color:16777215,map:ze,side:Xn,toneMapped:!1});Ri.push(Ee);const Ae=new Oe(Ur,Ee);Ae.position.set(-Math.sin(It)*Bt,0,-Math.cos(It)*Bt),Ae.rotation.y=It,Ae.castShadow=!1,Ae.receiveShadow=!0,at===0&&(Ae.userData={isMainFilmWall:!0},Ja.push(Ae),Lo.position.set(0,ws,-Bt+.72),Lo.rotation.y=It,$n.add(Lo)),$n.add(Ae)}for(let at=0;at<6;at+=1){const It=at*Math.PI/3+Math.PI/6,Kt=mc+1.56,Bt=new Oe(Vc,mf);Bt.position.set(-Math.sin(It)*Kt,0,-Math.cos(It)*Kt),Bt.castShadow=!0,Bt.receiveShadow=!0,$n.add(Bt)}const bl=new op(2.15,.2,12,48);vi.push(bl);const Xc=new Ta({color:15129027,roughness:.46,metalness:.24});Ri.push(Xc);const Fi=new Oe(bl,Xc);Fi.position.copy(Do.clone().add(new X(0,-fs*.22,mc-4.4))),Fi.rotation.x=Math.PI*.5,Fi.userData={isFilmRoomExit:!0},Ja.push(Fi),Lt.add(Fi);const Tl=new fo(15914669,0,26,2);Tl.position.copy(Fi.position).add(new X(0,1.2,0)),Lt.add(Tl);const Wc=new tf(Hd*1.08,Hd*1.08,fs*1.2,6);vi.push(Wc);const Yc=new yr({visible:!1,side:Xn});Ri.push(Yc);const Ks=new Oe(Wc,Yc);Ks.userData={isFilmRoomPortal:!0},Ja.push(Ks),Lt.add(Ks);const _f=()=>{Cn&&(Ss=!1,qs=!1,ma=null,Ms=!1,La=!1,Jn=1,N("menu"),pl(!0),pa.forEach(Ii))},vf=()=>{Cn&&(Jn=0,La=!1)};h.current=_f,m.current=vf;const Al=new FS,Rl=new Le,Cl=at=>{pa.forEach(Ii);const It=ee.domElement.getBoundingClientRect();Rl.x=(at.clientX-It.left)/It.width*2-1,Rl.y=-((at.clientY-It.top)/It.height)*2+1,dl=at.clientX,hl=at.clientY,Al.setFromCamera(Rl,zt);const Kt=Al.intersectObjects(Ja,!1);if(Cn){if(Kt.length>0){const Bt=Kt[0].object;if(Bt.userData.isFilmRoomPortal){_f();return}if(Bt.userData.isFilmRoomExit){vf();return}if(Bt.userData.isMainFilmWall&&$e>.12){La=!1,wt(!0);return}if(Bt.userData.isReentryDot){ml(!1);return}if(Bt.userData.isExitGlyph){Ro();return}}if($e>.12){La=at.button===0,To=at.clientX,Ws=at.clientY;return}if(Ss=!0,qs=at.shiftKey||at.altKey||at.button===2,ma=null,Ms=!1,Ic=at.clientX,sf=at.clientY,!qs&&at.button===0&&$e<.08){const Bt=Al.intersectObjects(te,!1);Bt.length>0&&(ma=Uc(Bt[0]))}return}if(Kt.length>0){const Bt=Kt[0].object;if(Bt.userData.isExitGlyph){Ro();return}const Pt=Bt.userData.panel;if(Pt){if(mt){v.current===Pt.id?Xe():ie(Pt),Bc();return}const ae=es.find(se=>se.panel.id===Pt.id);ae&&(ae.expanded?ae.expanded=!1:(es.forEach(se=>{se.expanded=!1}),ae.expanded=!0))}}else mt||es.forEach(Bt=>{Bt.expanded=!1})};ee.domElement.addEventListener("pointerdown",Cl);const na=at=>{const It=ee.domElement.getBoundingClientRect(),Kt=(at.clientX-It.left)/It.width,Bt=(at.clientY-It.top)/It.height;if(Es.x=(Kt-.5)*2,Es.y=(Bt-.5)*2,Cn&&La){const Pt=at.clientX-To,ae=at.clientY-Ws;To=at.clientX,Ws=at.clientY,ns+=Pt*.0042,$i=an.clamp($i+ae*.0032,-.46,.42);return}if(Cn&&Ss){if(ma!==null&&!Ms){if(Math.hypot(at.clientX-Ic,at.clientY-sf)<=LR){dl=at.clientX,hl=at.clientY;return}Ms=!0,ma=null}const Pt=at.clientX-dl,ae=at.clientY-hl;dl=at.clientX,hl=at.clientY,wr=!0,qs?ys=an.clamp(ys+Pt*.0038,-Math.PI*.48,Math.PI*.48):(Wi+=Pt*.0046,is=an.clamp(is+ae*.0035,-.88,.88));return}},Uo=()=>{Es.x=0,Es.y=0,La=!1,Ss=!1,qs=!1,ma=null,Ms=!1},Ci=()=>{Cn&&ma!==null&&!Ms&&(i.current=ma,s.current=ma,ml(!1)),La=!1,Ss=!1,qs=!1,ma=null,Ms=!1},Qs=at=>{Cn&&at.preventDefault()};ee.domElement.addEventListener("pointermove",na,{passive:!0}),ee.domElement.addEventListener("pointerleave",Uo,{passive:!0}),ee.domElement.addEventListener("pointerup",Ci,{passive:!0}),ee.domElement.addEventListener("pointercancel",Ci,{passive:!0}),ee.domElement.addEventListener("contextmenu",Qs);const wl=at=>{if(at.preventDefault(),Cn){if($e>.12){const It=Math.abs(at.deltaX)>Math.abs(at.deltaY)?at.deltaX:at.deltaY;ns+=It*KR,$i=an.clamp($i+at.deltaY*65e-5,-.46,.42);return}wr=!0,Ys=an.clamp(Ys+at.deltaY*.32,-165,230);return}pa.forEach(Ii),i.current=ca(i.current+My*at.deltaY*75e-6)};ee.domElement.addEventListener("wheel",wl,{passive:!1});const Oo=at=>{(at.key==="o"||at.key==="O")&&Ro()};window.addEventListener("keydown",Oo);let as=0,Ns=0;const Ls=at=>{pa.forEach(Ii),as=at.touches[0]?.clientX??0,Ns=at.touches[0]?.clientY??0},qc=at=>{at.preventDefault();const It=at.touches[0]?.clientX??as,Kt=at.touches[0]?.clientY??Ns,Bt=as-It,Pt=Ns-Kt;if(Cn){if($e>.12){ns+=Bt*QR,$i=an.clamp($i+Pt*JR,-.46,.42),as=It,Ns=Kt;return}wr=!0,Ys=an.clamp(Ys+Pt*.22,-165,230),as=It,Ns=Kt;return}i.current=ca(i.current+My*Pt*11e-5),as=It,Ns=Kt};ee.domElement.addEventListener("touchstart",Ls,{passive:!0}),ee.domElement.addEventListener("touchmove",qc,{passive:!1});const Io=()=>{Q&&(zt.aspect=Q.clientWidth/Q.clientHeight,zt.updateProjectionMatrix(),ee.setSize(Q.clientWidth,Q.clientHeight))};window.addEventListener("resize",Io);const Js=new BS,jc=new X,Bi=new X,Dl=new X,ga=new X;let Zc=g.length>0?g[0].id:"";const Po=()=>{if(H)return;const at=Js.getDelta(),It=Js.getElapsedTime();s.current=MR(s.current,i.current,ut?2.8:4.8,at),ta.x+=(Es.x-ta.x)*.07,ta.y+=(Es.y-ta.y)*.07,Pc&&(Es.x=0,Es.y=0,ta.x=0,ta.y=0,Pc=!1);const Kt=s.current,Bt=ca(Kt+(mt?.008:.01)),Pt=Bn.getPointAt(Kt),ae=Bn.getPointAt(Bt),se=Bn.getPointAt(ca(Kt+.002)).sub(Bn.getPointAt(ca(Kt-.002))).normalize();let Ve=new X().crossVectors(se,_i).normalize();Ve.lengthSq()<1e-4&&(Ve=new X(1,0,0));const We=new X().crossVectors(Ve,se).normalize(),On=Ve.clone().multiplyScalar(ta.x*(mt?0:.62)).add(We.clone().multiplyScalar(ta.y*(mt?0:.42))),fn=ut?new X:We.clone().multiplyScalar(Math.sin(It*.45)*.12),ze=1/DR;Cn&&Ji<1?Ji=Math.min(1,Ji+ze*at):!Cn&&Ji>0&&(Ji=Math.max(0,Ji-ze*at));const Ee=Ji<.5?4*Ji*Ji*Ji:1-Math.pow(-2*Ji+2,3)/2,Ae=1/qR;Jn>$e?$e=Math.min(Jn,$e+Ae*at):Jn<$e&&($e=Math.max(Jn,$e-Ae*at));const we=$e<.5?4*$e*$e*$e:1-Math.pow(-2*$e+2,3)/2;Jn===0&&$e<=.001&&Cr&&pl(!1),Jn>.01&&$e>.08&&pa.forEach(Ii),Cn&&!wr&&(Wi=Ty,is=Ay,ys=Ry,Ys=Cy);const _n=an.smoothstep(Ee,.18,1),Oa=wr?_n:0,xi=ta.x*(mt?0:15.4)*Oa,Yi=ta.y*(mt?0:9.2)*Oa;Un.position.copy(qn).add(new X(Math.sin(Wi)*6.8+xi*.2,is*2.4+Yi*.18,Math.cos(Wi)*3.6-xi*.13)),ci.position.copy(qn).add(new X(-Math.sin(Wi)*3.2,is*.9,Math.cos(Wi)*2.1)),He.position.set(qn.x+700+xi*2.8+Math.sin(Wi)*52,qn.y+290+Yi*1.35+is*28,qn.z-130-xi*1.3+Math.cos(Wi)*30),Ai.position.set(qn.x-470-xi*.82-Math.sin(Wi)*16,qn.y+35+Yi*.22+is*10,qn.z+360+xi*.6-Math.cos(Wi)*12);const ss=rf.clone().sub(qn).applyQuaternion(new Tr().setFromEuler(new Ra(is,Wi,0,"YXZ"))),Ut=an.clamp(ss.length()+Ys,260,860);ss.setLength(Ut);const De=qn.clone().add(ss).add(new X(xi,Yi*.84,xi*.58)),Se=of.clone().add(new X(xi*.11,Yi*.095,xi*.085)),ui=new Tr,vn=an.smoothstep(Ee,.24,.96)*(1-we),Ia=Cn&&(vn>.001||we>.001||Jn>.001),yi=an.lerp(.22,1,we);$n.visible=Ia,$n.scale.setScalar(yi),$n.position.copy(Do).add(new X(0,Math.sin(It*.72)*.9*(1-we),0)),$n.rotation.y=It*.18*(1-we),Lo.position.y=ws+Math.sin(It*1.18)*.22,Fi.visible=we>.08,Tl.intensity=an.lerp(0,mt?1.8:2.9,we);const Fr=Ia?1:0;kc.intensity=an.lerp(mt?.34:.58,mt?2.6:4.8,we)*Fr,Cs.intensity=an.lerp(mt?.14:.24,mt?1.2:2.1,we)*Fr,Fi.rotation.z=It*.18;const Pa=Cn&&Jn<.01&&vn>.08;Ks.visible=Pa,Ks.position.copy($n.position),Ks.rotation.copy($n.rotation),Ks.scale.setScalar(yi);const wn=p.current;if(wn)if(Cn&&Jn<.01&&vn>.06){ga.copy($n.position).project(zt);const nn=(ga.x*.5+.5)*Q.clientWidth,Hn=(-ga.y*.5+.5)*Q.clientHeight;wn.style.left=`${nn-(mt?86:132)}px`,wn.style.top=`${Hn-(mt?6:12)}px`,wn.style.opacity=`${an.clamp(vn*1.25,0,1)}`,wn.style.visibility="visible"}else wn.style.opacity="0",wn.style.visibility="hidden";const fi=an.clamp(jR+af,11.5,29),ia=Do.clone().add(new X(0,-.8,0)),Us=Do.clone().add(new X(Math.sin(ns)*fi,ZR+$i*9.5,Math.cos(ns)*fi));if(Ee>.01){Ca(Ee>.26),Lt.fog instanceof Ju&&(Lt.fog.near=an.lerp(38,9999,Ee),Lt.fog.far=an.lerp(230,1e4,Ee));const Ne=new ge(987671),nn=new ge(132106);Lt.background.copy(Ne).lerp(nn,Ee),ki.intensity=an.lerp(.05,.002,Ee),Qn.intensity=an.lerp(.08,.007,Ee),He.intensity=an.lerp(0,mt?4.6:8.6,Ee),Ai.intensity=an.lerp(0,mt?.02:.03,Ee),ee.toneMappingExposure=an.lerp(mt?.76:.72,mt?.75:.76,Ee),[Qa,Da].forEach(Hn=>{Hn.emissive.set(3359829),Hn.emissiveIntensity=0}),Qa.envMapIntensity=an.lerp(.74,.04,Ee),Da.envMapIntensity=an.lerp(.08,.01,Ee),zn.color.set(0).lerp(new ge(16777215),Ee),zn.toneMapped=Ee>.5,zn.fog=Ee>.5,zn.emissive.set(16777215),zn.emissiveIntensity=an.lerp(1,.02,Ee),zn.envMapIntensity=an.lerp(0,.03,Ee)}else Ca(!1),ki.intensity=.05,Qn.intensity=.08,He.intensity=0,Ai.intensity=0,ee.toneMappingExposure=mt?.76:.72,Lt.background.set(987671),[Qa,Da].forEach(Ne=>{Ne.emissive.set(0),Ne.emissiveIntensity=0}),Qa.envMapIntensity=.74,Da.envMapIntensity=.08,zn.color.set(0),zn.toneMapped=!1,zn.fog=!1,zn.emissive.set(16777215),zn.emissiveIntensity=1,zn.envMapIntensity=0;const Fo=We.clone().multiplyScalar(-R0*.2),Os=Pt.clone().add(Fo).add(On).add(fn),Fa=ae.clone().add(Fo).add(On.multiplyScalar(.22));if(Ee>.99){if(zt.position.copy(De),zt.lookAt(Se),Math.abs(ys)>1e-4){const Ne=Se.clone().sub(zt.position).normalize();ui.setFromAxisAngle(Ne,ys),zt.quaternion.multiply(ui)}}else if(Ee>.001){zt.position.lerpVectors(Os,De,Ee);const Ne=Fa.clone().lerp(Se,Ee);if(zt.lookAt(Ne),Math.abs(ys)>1e-4){const nn=Ne.clone().sub(zt.position).normalize();ui.setFromAxisAngle(nn,ys*Ee),zt.quaternion.multiply(ui)}}else zt.position.copy(Os),zt.lookAt(Fa);if(Cn&&we>.001){const Ne=zt.position.clone().lerp(Us,we),nn=Se.clone().lerp(ia,we);zt.position.copy(Ne),zt.lookAt(nn)}const Ba=.94+Math.sin(It*.23)*.06,_a=ae.clone().add(Fo);Ln.position.copy(zt.position).add(We.clone().multiplyScalar(2.9)).add(Ve.clone().multiplyScalar(2.1)).add(se.clone().multiplyScalar(-2.2)),ye.position.copy(_a).add(Ve.clone().multiplyScalar(2.5)).add(We.clone().multiplyScalar(-.9)),Ln.intensity=(mt?14:21)*Ba,li.position.copy(zt.position).add(We.clone().multiplyScalar(2)).add(Ve.clone().multiplyScalar(-2.4)).add(se.clone().multiplyScalar(-1.1)),oi.position.copy(_a).add(Ve.clone().multiplyScalar(-2)).add(We.clone().multiplyScalar(-1.4)),li.intensity=(mt?5:8)*Ba,je.position.copy(zt.position).add(We.clone().multiplyScalar(1.4)).add(se.clone().multiplyScalar(2.8)).add(Ve.clone().multiplyScalar(.6)),Ti.position.copy(_a).add(We.clone().multiplyScalar(-.8)),je.intensity=(mt?4:6.2)*Ba,Ja.forEach(Ne=>{const nn=Ne.userData;if(!nn||!nn.shading||!nn.material)return;const Hn=nn.shading,on=nn.material,wi=nn.video,me=nn;let Di=1;Hn.lighting?.flicker_sync&&wi&&wi.readyState>=3&&(Di=.88+Math.sin(It*22)*.1*Math.sin(It*6.7));let qi=1;if(Hn.movement_reaction?.type==="viewing_angle_fade"){jc.set(0,0,0),Ne.getWorldPosition(jc),Bi.set(0,0,1).applyQuaternion(Ne.quaternion),Dl.copy(zt.position).sub(jc).normalize();const ni=Bi,Gn=Dl,Ni=Math.max(0,ni.dot(Gn)),Br=Hn.movement_reaction.cone_angle_degrees===60?3:1.5;qi=Math.pow(Ni,Br)}const ei=nn.baseEmissive*Di*qi;if(on.emissiveIntensity=ei,me.bounceLights&&me.bounceLights.length>0){const ni=me.bounceSampleCtx,Gn=me.bounceSampleCanvas;if(wi&&ni&&Gn&&(me.bounceNextSampleAt??0)<=It){const Ga=AC(wi,Gn,ni);if(Ga){me.bounceTargetColor||(me.bounceTargetColor=Ga.color.clone());const zr=Ga.color.clone().lerp(new ge(1,.97,.93),.18);me.bounceTargetColor.copy(zr);const Is=an.clamp(.22+Ga.luminance*1.9,.22,2.25);me.bounceTargetIntensity=(me.bounceBaseIntensity??5)*Is*(.25+ei*1.25)}me.bounceNextSampleAt=It+1/(mt?2:4)}else wi||(me.bounceTargetIntensity=(me.bounceBaseIntensity??5)*(.22+ei*1.1));const Ni=me.bounceTargetIntensity??0,Br=me.bounceCurrentIntensity??0;me.bounceCurrentIntensity=an.lerp(Br,Ni,1-Math.exp(-6.2*at)),me.bounceCurrentColor||(me.bounceCurrentColor=(me.bounceTargetColor??new ge(1,1,1)).clone()),me.bounceTargetColor&&me.bounceCurrentColor.lerp(me.bounceTargetColor,1-Math.exp(-5.4*at)),me.bounceLights.forEach((Ga,zr)=>{const Is=Math.max(1,me.bounceLights.length-1),tr=1-zr/Is*.34;Ga.color.copy(me.bounceCurrentColor),Ga.intensity=(me.bounceCurrentIntensity??0)*tr})}}),Rr.forEach(({mesh:Ne,basePosition:nn,strength:Hn})=>{const on=Ne.parent;if(!on)return;const wi=on.worldToLocal(zt.position.clone()),me=an.clamp(wi.x*.008,-.18,.18)*Hn,Di=an.clamp(wi.y*.006,-.14,.14)*Hn;Ne.position.x=nn.x+me,Ne.position.y=nn.y+Di}),es.forEach((Ne,nn)=>{const{mesh:Hn,card:on}=Ne;Hn.lookAt(zt.position);const wi=nn*.7,me=Ne.baseY+Math.sin(It*bR+wi)*ER;Hn.position.y=me,Hn.rotateZ(TR*at);const Di=Hn.material;Di.emissiveIntensity=1+Math.sin(It*2+nn)*.4;const qi=!mt&&Ne.expanded?1:0,ei=1/CR;Ne.expandT<qi?Ne.expandT=Math.min(1,Ne.expandT+ei*at):Ne.expandT>qi&&(Ne.expandT=Math.max(0,Ne.expandT-ei*at));const ni=Ne.expandT,Gn=ni<.5?4*ni*ni*ni:1-Math.pow(-2*ni+2,3)/2;if(!mt&&Gn>.001){on.visible=!0,on.position.copy(Hn.position),on.position.y-=C0+.3,on.lookAt(zt.position),on.scale.setScalar(Gn);const Ni=on.children[0].material;Ni.opacity=Gn}else on.visible=!1;Di.opacity=mt?1:1-Gn*.4});const Nl=_l.y+Math.sin(It*.8)*.35;Zs.lookAt(zt.position),Zs.position.y=Nl,Zs.rotateZ(.15*at),As.emissiveIntensity=1.2+Math.sin(It*1.5)*.5,Ua.lookAt(zt.position),Ua.position.y=Nl;const $s=.72+Math.sin(It*2.35)*.28,za=an.smoothstep(Ee,.2,.95)*(1-we);Rs.visible=za>.001,Lr.visible=za>.001,Rs.scale.setScalar(.88+$s*.28),vl.emissiveIntensity=za*(.48+$s*.45),Ml.intensity=za*(mt?4.6:7.4)*$s,Lr.lookAt(zt.position),Lr.scale.setScalar(.95+$s*.18),Sl.opacity=za*(.2+$s*.32);const Bo=Cn;if(bs.visible=Bo,Bo){const Ne=zt.position.clone().sub(qn),nn=Ne.length();Ne.normalize(),bs.position.copy(qn).add(Ne.multiplyScalar(nn*.55)).add(new X(0,32,0)),bs.lookAt(zt.position),bs.rotation.z=It*.04;const Hn=Math.max(1,Math.floor(Dr*.05));for(let on=0;on<Dr;on+=1){const wi=on/Dr,me=on<Hn;let Di=0,qi=1;if(me){const ei=Math.acos(1-2*(on+.5)/Hn),ni=Math.PI*(1+Math.sqrt(5))*on,Gn=20+Math.sin(It*4+on*.1)*6,Ni=It*.8,Br=Gn*Math.cos(ni)*Math.sin(ei),Ga=Gn*Math.sin(ni)*Math.sin(ei),zr=Gn*Math.cos(ei),Is=.5+.5*Math.sin(It*6+on);js.x=Br*Math.cos(Ni)-zr*Math.sin(Ni),js.y=Ga,js.z=Br*Math.sin(Ni)+zr*Math.cos(Ni),Ts.setRGB(1,.78+Is*.22,.14),Ts.multiplyScalar(1.3+Is*.28),Di=It*.92+on*.018,qi=1.3+Is*.42}else{const ei=24+wi*(mt?80:140),ni=on*137.5+It*.16,Gn=Math.sin(ei*.04-It)*15;js.x=Math.cos(ni)*ei,js.y=Gn*(1-wi)+Math.sin(on*.7)*2.8,js.z=Math.sin(ni)*ei,Ts.setRGB(.12,.4,1),Ts.multiplyScalar(.82+(1-wi)*.26),Di=It*.14+on*.002,qi=1.04+(1-wi)*.16}Nr[on].lerp(js,ut?.025:mt?.052:.075),Ao.position.copy(Nr[on]),Ao.rotation.set(Di*.4,Di,Di*.24),Ao.scale.setScalar(qi),Ao.updateMatrix(),ea.setMatrixAt(on,Ao.matrix),ea.setColorAt(on,Ts)}ea.instanceMatrix.needsUpdate=!0,ea.instanceColor&&(ea.instanceColor.needsUpdate=!0)}let Ha=t.current[0]?.meta.id??(g.length>0?g[0].id:""),ti=Number.POSITIVE_INFINITY;t.current.forEach(Ne=>{let nn=Math.abs(Kt-Ne.progress);nn>.5&&(nn=1-nn),nn<ti&&(ti=nn,Ha=Ne.meta.id)}),Ha!==Zc&&(Zc=Ha,S(Ha)),ee.render(Lt,zt),requestAnimationFrame(Po)};Po(),dt=()=>{f.current=null,h.current=null,m.current=null,Xe(),ee.domElement.removeEventListener("pointerdown",Cl),ee.domElement.removeEventListener("pointermove",na),ee.domElement.removeEventListener("pointerleave",Uo),ee.domElement.removeEventListener("pointerup",Ci),ee.domElement.removeEventListener("pointercancel",Ci),ee.domElement.removeEventListener("contextmenu",Qs),ee.domElement.removeEventListener("wheel",wl),ee.domElement.removeEventListener("touchstart",Ls),ee.domElement.removeEventListener("touchmove",qc),window.removeEventListener("resize",Io),window.removeEventListener("keydown",Oo),Q.contains(ee.domElement)&&Q.removeChild(ee.domElement),Ja.forEach(at=>{const It=at.userData?.video;It&&(It.pause(),It.src="",It.load())}),pa.forEach(at=>{at.pause(),at.src="",at.load()}),So.forEach(at=>at()),Ar.forEach(at=>at.dispose?.()),vi.forEach(at=>at.dispose()),Oc.dispose(),bo.dispose(),Nn.albedo.dispose(),Nn.normal.dispose(),Nn.roughness.dispose(),Nn.ao.dispose(),bi.albedo.dispose(),bi.normal.dispose(),bi.roughness.dispose(),bi.ao.dispose(),fa.albedo.dispose(),fa.normal.dispose(),fa.roughness.dispose(),fa.ao.dispose(),Ri.forEach(at=>at.dispose()),vs.texture.dispose(),vs.dispose(),wa.dispose(),Qa.dispose(),Da.dispose(),xe.dispose(),zn.dispose(),Mo.dispose(),Nc.dispose(),nf.dispose(),da.dispose(),ha.dispose(),Na.dispose(),C.dispose(),Y.dispose(),ft.dispose(),et.dispose(),Ht.dispose(),ot.dispose(),ve.dispose(),Je.dispose(),ee.dispose()}})(),()=>{H=!0,f.current=null,h.current=null,m.current=null,dt()}},[g,pe,Xt,Xe]),Et.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Et.jsx("div",{ref:r,className:"absolute inset-0"}),Et.jsx(RC,{}),Et.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[Et.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[Et.jsx("button",{type:"button",onClick:()=>An("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${kt==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":kt==="nb",children:"NO"}),Et.jsx("button",{type:"button",onClick:()=>An("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${kt==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":kt==="en",children:"EN"})]}),Et.jsx("button",{type:"button",onClick:G?Tn:Rn,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":U,children:G?"get out":U?"get in":"get out"})]}),A||w?Et.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:A?de.loadingPanels:de.panelsFallback}):null,U?null:Et.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Et.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:de.siteName}),Et.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[de.activeInstallation,": ",Wt]})]}),Qt&&!U?Et.jsx("div",{className:"pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 md:hidden",children:Et.jsxs("section",{className:"pointer-events-auto w-full max-w-[30rem] rounded-2xl border border-[#7fd9ff]/28 bg-[#061324]/94 px-4 py-3 text-[#e6f4ff] shadow-[0_22px_56px_rgba(0,0,0,0.62)] backdrop-blur",children:[Et.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Et.jsx("h2",{className:"text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9edfff]",children:Qt.title}),Et.jsx("button",{type:"button",onClick:Xe,className:"pointer-events-auto rounded-full border border-[#7fd9ff]/35 px-3 py-[0.28rem] text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#d7f0ff] transition active:translate-y-[1px]",children:kt==="nb"?"Lukk":"Close"})]}),Et.jsx("p",{className:"mt-2 max-h-[52svh] overflow-y-auto whitespace-pre-line text-[0.83rem] leading-relaxed text-[#d9e7f4]",children:Qt.body})]})}):null,Mt?Et.jsx("div",{className:"absolute inset-0 z-[70] bg-[rgba(2,6,14,0.84)] backdrop-blur-[10px]",onClick:ke,children:Et.jsx("div",{className:"flex h-full w-full items-center justify-center px-4 py-20 md:px-8",children:Et.jsxs("section",{className:"relative w-full max-w-[72rem] overflow-hidden rounded-[1.35rem] border border-[#d4e4ff]/24 bg-black shadow-[0_32px_110px_rgba(0,0,0,0.62)]",onClick:Q=>Q.stopPropagation(),children:[Et.jsx("button",{type:"button",onClick:ke,className:"absolute right-3 top-3 z-10 rounded-full border border-white/16 bg-black/45 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-black/65",children:kt==="nb"?"Lukk":"Close"}),Et.jsxs("video",{ref:_,controls:!0,playsInline:!0,preload:"metadata",poster:jS,autoPlay:!0,className:"block aspect-video w-full bg-black",children:[Et.jsx("source",{src:Mg,type:"video/mp4"}),kt==="nb"?"Nettleseren din kan ikke spille av denne videoen.":"Your browser cannot play this video."]})]})})}):null,U&&!G?Et.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Et.jsx("style",{children:`
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
            `}),b==="menu"?Et.jsxs(Et.Fragment,{children:[Et.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:de.siteName}),b==="menu"?Et.jsx("button",{ref:p,type:"button",onClick:k,className:"pointer-events-auto absolute text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)",transform:"translate(-50%, -50%)",left:"-9999px",top:"-9999px",opacity:0,visibility:"hidden"},children:Et.jsx("span",{className:"relative inline-block",children:de.outsideVideos})}):null,b==="menu"?Et.jsx("button",{type:"button",onClick:()=>N("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Et.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:de.outsideSignatures})}):null]}):null,b!=="menu"?Et.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[Et.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[Et.jsx("button",{type:"button",onClick:()=>N("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:de.outsideBack}),b==="videos"?Et.jsx(Et.Fragment,{children:Et.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:de.outsideVideosTitle})}):null,b==="signatures"?Et.jsx(Et.Fragment,{children:Et.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:de.outsideSignaturesTitle})}):null,b==="news"?Et.jsxs(Et.Fragment,{children:[Et.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:de.outsideNewsTitle}),Et.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:de.outsideNewsBody})]}):null,b==="glyphwall"?Et.jsxs(Et.Fragment,{children:[Et.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:de.outsideGlyphWallTitle}),de.outsideGlyphWallBody?Et.jsx("p",{className:"mt-2 max-w-4xl text-sm leading-relaxed text-[#b8cbe6] md:text-base",children:de.outsideGlyphWallBody}):null]}):null]}),b==="signatures"?Et.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Et.jsxs("form",{onSubmit:le,className:"max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6",children:[Et.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[Et.jsxs("label",{className:"block",children:[Et.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:kt==="nb"?"Navn":"Name"}),Et.jsx("input",{type:"text",required:!0,autoComplete:"name",value:F,onChange:Q=>q(Q.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Et.jsxs("label",{className:"block",children:[Et.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:kt==="nb"?"E-post":"Email"}),Et.jsx("input",{type:"email",required:!0,autoComplete:"email",value:_t,onChange:Q=>Ot(Q.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]})]}),Et.jsxs("label",{className:"mt-3 block",children:[Et.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:kt==="nb"?"Melding":"Message"}),Et.jsx("textarea",{required:!0,rows:5,value:qt,onChange:Q=>it(Q.target.value),className:"mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Et.jsx("button",{type:"submit",className:"mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]",children:kt==="nb"?"Send melding":"Send message"})]})}):null,b==="news"?Et.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[Z?Et.jsx("p",{className:"text-sm text-[#b8cbe6]",children:de.outsideNewsLoading}):null,!Z&&B?Et.jsx("p",{className:"text-sm text-[#ffb6b6]",children:B}):null,!Z&&!B&&$.length===0?Et.jsx("p",{className:"text-sm text-[#b8cbe6]",children:de.outsideNewsEmpty}):null,!Z&&!B&&$.length>0?Et.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:$.map(Q=>{const H=Date.parse(Q.published_at),dt=Number.isFinite(H)?Zt.format(new Date(H)):Q.published_at;return Et.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[Et.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[Q.source,dt?` · ${dt}`:""]}),Et.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:Q.title}),Q.snippet?Et.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:Q.snippet}):null,Et.jsx("a",{href:Q.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:kt==="nb"?"Åpne sak":"Open story"})]},`${Q.url}-${Q.title}`)})}):null]}):null,b==="glyphwall"?Et.jsx("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Et.jsxs("section",{className:"relative h-full","data-rl-story-version":"rl-story-v1","data-rl-story-name":"replacement-anxiety-pattern",children:[Et.jsx("div",{className:"relative h-full overflow-auto",children:Et.jsx("div",{className:"grid grid-cols-3 gap-y-6 pb-6 sm:grid-cols-4 md:grid-cols-6 md:gap-y-7 lg:grid-cols-8 xl:grid-cols-10",children:Be.map(Q=>Et.jsxs("article",{className:"relative flex items-center justify-center","data-rl-story-index":Q.index+1,"data-rl-canonical":Q.canonical,"data-rl-id":Q.id,"data-rl-phase":Q.phase,children:[Et.jsx("div",{className:"relative h-[7rem] w-[7rem] overflow-hidden rounded-full border border-[#86b5eb]/34",style:{background:"radial-gradient(circle_at_42%_38%,rgba(122,213,255,0.26),rgba(13,27,52,0.94)_66%), radial-gradient(circle_at_75%_82%,rgba(43,163,255,0.16),rgba(0,0,0,0)_58%)",animation:Q.index%3===0?"glyffFloatA 7.8s ease-in-out infinite, glyffHoloPulse 6.6s ease-in-out infinite, glyffHoloTwinkle 4.9s ease-in-out infinite":Q.index%3===1?"glyffFloatB 9.2s ease-in-out infinite, glyffHoloPulse 7.4s ease-in-out infinite, glyffHoloTwinkle 5.3s ease-in-out infinite":"glyffFloatC 8.4s ease-in-out infinite, glyffHoloPulse 6.9s ease-in-out infinite, glyffHoloTwinkle 5.1s ease-in-out infinite",animationDelay:`${Q.index%11*.16}s, ${Q.index%7*.21}s, ${Q.index%5*.27}s`},children:Q.previewDataUrl?Et.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-full bg-[#11213c]",children:[Et.jsx("img",{src:Q.previewDataUrl,alt:`Glyff ${Q.index+1}`,className:"absolute inset-0 h-full w-full object-cover mix-blend-screen",style:{opacity:.88,filter:"saturate(1.48) hue-rotate(8deg) contrast(1.12)"},loading:"lazy"}),Et.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full",style:{background:"radial-gradient(circle_at_20%_18%,rgba(204,240,255,0.26),rgba(204,240,255,0)_42%), radial-gradient(circle_at_82%_79%,rgba(0,0,0,0.28),rgba(0,0,0,0)_56%)"}}),Et.jsx("div",{className:"pointer-events-none absolute rounded-full",style:{inset:"-34%",background:"conic-gradient(from 0deg, rgba(128,250,255,0) 0deg, rgba(128,250,255,0.36) 72deg, rgba(123,170,255,0.06) 148deg, rgba(128,250,255,0) 260deg)",mixBlendMode:"screen",animation:"glyffHoloSweep 7.1s linear infinite",animationDelay:`${Q.index%9*.31}s`}}),Et.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full",style:{background:"repeating-linear-gradient(180deg, rgba(151,228,255,0.16) 0px, rgba(151,228,255,0.16) 1px, rgba(10,18,34,0) 1px, rgba(10,18,34,0) 4px), linear-gradient(135deg, rgba(77,236,255,0.18) 0%, rgba(77,236,255,0) 54%)",mixBlendMode:"screen",opacity:.38,animation:"glyffHoloScan 2.7s linear infinite"}}),Et.jsx("div",{className:"pointer-events-none absolute rounded-full",style:{inset:"1px",border:"1px solid rgba(164,238,255,0.52)",boxShadow:"0 0 18px rgba(131,237,255,0.28), inset 0 0 12px rgba(110,221,255,0.22)"}})]}):Et.jsx("div",{className:"h-full w-full rounded-full bg-[#11213c]"})}),Et.jsx("span",{className:"sr-only",children:Q.canonical})]},Q.id))})}),Et.jsx("pre",{className:"sr-only","data-rl-story-payload":!0,children:be})]})}):null,b==="videos"?Et.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:Rt,onTouchStart:gt,onTouchEnd:re,children:Et.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[Et.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-black"}),Et.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_120px_rgba(0,0,0,0.92)]"}),Et.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#e5e7eb]",children:[pt+1," / ",xr.length]}),Et.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.35)]"}),Et.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${GR.toFixed(3)}rem) rotateY(${-pt*$R}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[Et.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/10",style:{width:`${zd.toFixed(3)}rem`,height:`${zd.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${Dy.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,1) 100%)",boxShadow:"none"}}),Et.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/8",style:{width:`${zd.toFixed(3)}rem`,height:`${zd.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${Dy.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 100%)"}}),xr.map((Q,H)=>Et.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/2 border border-[#c4e1ff]/80 bg-[#0d223f]/76",style:{width:`${VR.toFixed(3)}rem`,height:`${Ny.toFixed(3)}rem`,transform:`translate(-50%, -50%) rotateY(${H*60+XR}deg) translateZ(-${kR.toFixed(3)}rem)`,backfaceVisibility:"hidden",boxShadow:"0 0 0 1px rgba(211,235,255,0.75), 0 0 26px rgba(120,193,255,0.56), inset 0 0 44px rgba(110,186,255,0.32), 0 24px 46px rgba(0,0,0,0.62)",background:"linear-gradient(132deg, rgba(194,228,255,0.28) 0%, rgba(38,85,143,0.72) 36%, rgba(7,14,28,0.92) 100%)",opacity:.96}},`outer-wall-${Q.video}-${H}`)),xr.map((Q,H)=>Et.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/2 bg-[#d7ecff]/86",style:{width:`${YR.toFixed(3)}rem`,height:`${(Ny+1.6).toFixed(3)}rem`,transform:`translate(-50%, -50%) rotateY(${H*60+30}deg) translateZ(-${WR.toFixed(3)}rem)`,boxShadow:"0 0 30px rgba(172,220,255,0.98), 0 0 62px rgba(107,187,255,0.68)",opacity:.94}},`outer-corner-${Q.video}-${H}`)),xr.map((Q,H)=>Et.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_22px_44px_rgba(0,0,0,0.86)]",style:{width:`${(Eg+HR).toFixed(3)}rem`,height:`${dp}rem`,transform:`translate(-50%, -50%) rotateY(${H*60}deg) translateZ(-${hp.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:Et.jsx("video",{ref:dt=>{c.current[H]=dt},src:Q.video,poster:Q.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${Q.video}-${H}`))]})]})}):null]}):null]}):null]})}function wC(){return Et.jsx("div",{className:"min-h-screen bg-[#080604]",children:Et.jsx(CC,{})})}_E.createRoot(document.getElementById("root")).render(Et.jsx(Vt.StrictMode,{children:Et.jsx(wC,{})}));
