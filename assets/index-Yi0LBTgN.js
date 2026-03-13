(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Im={exports:{}},Su={};var ux;function sE(){if(ux)return Su;ux=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Su.Fragment=t,Su.jsx=i,Su.jsxs=i,Su}var fx;function rE(){return fx||(fx=1,Im.exports=sE()),Im.exports}var St=rE(),Pm={exports:{}},Me={};var dx;function oE(){if(dx)return Me;dx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(I,j,gt){this.props=I,this.context=j,this.refs=M,this.updater=gt||E}S.prototype.isReactComponent={},S.prototype.setState=function(I,j){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,j,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=S.prototype;function L(I,j,gt){this.props=I,this.context=j,this.refs=M,this.updater=gt||E}var D=L.prototype=new C;D.constructor=L,w(D,S.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function F(){}var H={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(I,j,gt){var Lt=gt.ref;return{$$typeof:r,type:I,key:j,ref:Lt!==void 0?Lt:null,props:gt}}function ut(I,j){return N(I.type,j,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function J(I){var j={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(gt){return j[gt]})}var et=/\/+/g;function tt(I,j){return typeof I=="object"&&I!==null&&I.key!=null?J(""+I.key):j.toString(36)}function Q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(F,F):(I.status="pending",I.then(function(j){I.status==="pending"&&(I.status="fulfilled",I.value=j)},function(j){I.status==="pending"&&(I.status="rejected",I.reason=j)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function U(I,j,gt,Lt,jt){var it=typeof I;(it==="undefined"||it==="boolean")&&(I=null);var yt=!1;if(I===null)yt=!0;else switch(it){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(I.$$typeof){case r:case t:yt=!0;break;case _:return yt=I._init,U(yt(I._payload),j,gt,Lt,jt)}}if(yt)return jt=jt(I),yt=Lt===""?"."+tt(I,0):Lt,B(jt)?(gt="",yt!=null&&(gt=yt.replace(et,"$&/")+"/"),U(jt,j,gt,"",function(zt){return zt})):jt!=null&&(G(jt)&&(jt=ut(jt,gt+(jt.key==null||I&&I.key===jt.key?"":(""+jt.key).replace(et,"$&/")+"/")+yt)),j.push(jt)),1;yt=0;var Dt=Lt===""?".":Lt+":";if(B(I))for(var te=0;te<I.length;te++)Lt=I[te],it=Dt+tt(Lt,te),yt+=U(Lt,j,gt,it,jt);else if(te=x(I),typeof te=="function")for(I=te.call(I),te=0;!(Lt=I.next()).done;)Lt=Lt.value,it=Dt+tt(Lt,te++),yt+=U(Lt,j,gt,it,jt);else if(it==="object"){if(typeof I.then=="function")return U(Q(I),j,gt,Lt,jt);throw j=String(I),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return yt}function P(I,j,gt){if(I==null)return I;var Lt=[],jt=0;return U(I,Lt,"","",function(it){return j.call(gt,it,jt++)}),Lt}function ct(I){if(I._status===-1){var j=I._result;j=j(),j.then(function(gt){(I._status===0||I._status===-1)&&(I._status=1,I._result=gt)},function(gt){(I._status===0||I._status===-1)&&(I._status=2,I._result=gt)}),I._status===-1&&(I._status=0,I._result=j)}if(I._status===1)return I._result.default;throw I._result}var pt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},At={map:P,forEach:function(I,j,gt){P(I,function(){j.apply(this,arguments)},gt)},count:function(I){var j=0;return P(I,function(){j++}),j},toArray:function(I){return P(I,function(j){return j})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Me.Activity=v,Me.Children=At,Me.Component=S,Me.Fragment=i,Me.Profiler=l,Me.PureComponent=L,Me.StrictMode=s,Me.Suspense=m,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,Me.__COMPILER_RUNTIME={__proto__:null,c:function(I){return H.H.useMemoCache(I)}},Me.cache=function(I){return function(){return I.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(I,j,gt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Lt=w({},I.props),jt=I.key;if(j!=null)for(it in j.key!==void 0&&(jt=""+j.key),j)!T.call(j,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&j.ref===void 0||(Lt[it]=j[it]);var it=arguments.length-2;if(it===1)Lt.children=gt;else if(1<it){for(var yt=Array(it),Dt=0;Dt<it;Dt++)yt[Dt]=arguments[Dt+2];Lt.children=yt}return N(I.type,jt,Lt)},Me.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Me.createElement=function(I,j,gt){var Lt,jt={},it=null;if(j!=null)for(Lt in j.key!==void 0&&(it=""+j.key),j)T.call(j,Lt)&&Lt!=="key"&&Lt!=="__self"&&Lt!=="__source"&&(jt[Lt]=j[Lt]);var yt=arguments.length-2;if(yt===1)jt.children=gt;else if(1<yt){for(var Dt=Array(yt),te=0;te<yt;te++)Dt[te]=arguments[te+2];jt.children=Dt}if(I&&I.defaultProps)for(Lt in yt=I.defaultProps,yt)jt[Lt]===void 0&&(jt[Lt]=yt[Lt]);return N(I,it,jt)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(I){return{$$typeof:h,render:I}},Me.isValidElement=G,Me.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ct}},Me.memo=function(I,j){return{$$typeof:p,type:I,compare:j===void 0?null:j}},Me.startTransition=function(I){var j=H.T,gt={};H.T=gt;try{var Lt=I(),jt=H.S;jt!==null&&jt(gt,Lt),typeof Lt=="object"&&Lt!==null&&typeof Lt.then=="function"&&Lt.then(F,pt)}catch(it){pt(it)}finally{j!==null&&gt.types!==null&&(j.types=gt.types),H.T=j}},Me.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},Me.use=function(I){return H.H.use(I)},Me.useActionState=function(I,j,gt){return H.H.useActionState(I,j,gt)},Me.useCallback=function(I,j){return H.H.useCallback(I,j)},Me.useContext=function(I){return H.H.useContext(I)},Me.useDebugValue=function(){},Me.useDeferredValue=function(I,j){return H.H.useDeferredValue(I,j)},Me.useEffect=function(I,j){return H.H.useEffect(I,j)},Me.useEffectEvent=function(I){return H.H.useEffectEvent(I)},Me.useId=function(){return H.H.useId()},Me.useImperativeHandle=function(I,j,gt){return H.H.useImperativeHandle(I,j,gt)},Me.useInsertionEffect=function(I,j){return H.H.useInsertionEffect(I,j)},Me.useLayoutEffect=function(I,j){return H.H.useLayoutEffect(I,j)},Me.useMemo=function(I,j){return H.H.useMemo(I,j)},Me.useOptimistic=function(I,j){return H.H.useOptimistic(I,j)},Me.useReducer=function(I,j,gt){return H.H.useReducer(I,j,gt)},Me.useRef=function(I){return H.H.useRef(I)},Me.useState=function(I){return H.H.useState(I)},Me.useSyncExternalStore=function(I,j,gt){return H.H.useSyncExternalStore(I,j,gt)},Me.useTransition=function(){return H.H.useTransition()},Me.version="19.2.4",Me}var hx;function G0(){return hx||(hx=1,Pm.exports=oE()),Pm.exports}var Wt=G0(),Fm={exports:{}},Mu={},Bm={exports:{}},zm={};var px;function lE(){return px||(px=1,(function(r){function t(U,P){var ct=U.length;U.push(P);t:for(;0<ct;){var pt=ct-1>>>1,At=U[pt];if(0<l(At,P))U[pt]=P,U[ct]=At,ct=pt;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var P=U[0],ct=U.pop();if(ct!==P){U[0]=ct;t:for(var pt=0,At=U.length,I=At>>>1;pt<I;){var j=2*(pt+1)-1,gt=U[j],Lt=j+1,jt=U[Lt];if(0>l(gt,ct))Lt<At&&0>l(jt,gt)?(U[pt]=jt,U[Lt]=ct,pt=Lt):(U[pt]=gt,U[j]=ct,pt=j);else if(Lt<At&&0>l(jt,ct))U[pt]=jt,U[Lt]=ct,pt=Lt;else break t}}return P}function l(U,P){var ct=U.sortIndex-P.sortIndex;return ct!==0?ct:U.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,x=!1,E=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(U){for(var P=i(p);P!==null;){if(P.callback===null)s(p);else if(P.startTime<=U)s(p),P.sortIndex=P.expirationTime,t(m,P);else break;P=i(p)}}function B(U){if(w=!1,D(U),!E)if(i(m)!==null)E=!0,F||(F=!0,J());else{var P=i(p);P!==null&&Q(B,P.startTime-U)}}var F=!1,H=-1,T=5,N=-1;function ut(){return M?!0:!(r.unstable_now()-N<T)}function G(){if(M=!1,F){var U=r.unstable_now();N=U;var P=!0;try{t:{E=!1,w&&(w=!1,C(H),H=-1),x=!0;var ct=g;try{e:{for(D(U),v=i(m);v!==null&&!(v.expirationTime>U&&ut());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,g=v.priorityLevel;var At=pt(v.expirationTime<=U);if(U=r.unstable_now(),typeof At=="function"){v.callback=At,D(U),P=!0;break e}v===i(m)&&s(m),D(U)}else s(m);v=i(m)}if(v!==null)P=!0;else{var I=i(p);I!==null&&Q(B,I.startTime-U),P=!1}}break t}finally{v=null,g=ct,x=!1}P=void 0}}finally{P?J():F=!1}}}var J;if(typeof L=="function")J=function(){L(G)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,tt=et.port2;et.port1.onmessage=G,J=function(){tt.postMessage(null)}}else J=function(){S(G,0)};function Q(U,P){H=S(function(){U(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(U){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var ct=g;g=P;try{return U()}finally{g=ct}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(U,P){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ct=g;g=U;try{return P()}finally{g=ct}},r.unstable_scheduleCallback=function(U,P,ct){var pt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?pt+ct:pt):ct=pt,U){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=ct+At,U={id:_++,callback:P,priorityLevel:U,startTime:ct,expirationTime:At,sortIndex:-1},ct>pt?(U.sortIndex=ct,t(p,U),i(m)===null&&U===i(p)&&(w?(C(H),H=-1):w=!0,Q(B,ct-pt))):(U.sortIndex=At,t(m,U),E||x||(E=!0,F||(F=!0,J()))),U},r.unstable_shouldYield=ut,r.unstable_wrapCallback=function(U){var P=g;return function(){var ct=g;g=P;try{return U.apply(this,arguments)}finally{g=ct}}}})(zm)),zm}var mx;function cE(){return mx||(mx=1,Bm.exports=lE()),Bm.exports}var Hm={exports:{}},Fi={};var gx;function uE(){if(gx)return Fi;gx=1;var r=G0();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Fi.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Fi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Fi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Fi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Fi.requestFormReset=function(m){s.d.r(m)},Fi.unstable_batchedUpdates=function(m,p){return m(p)},Fi.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Fi.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fi.version="19.2.4",Fi}var _x;function fE(){if(_x)return Hm.exports;_x=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Hm.exports=uE(),Hm.exports}var vx;function dE(){if(vx)return Mu;vx=1;var r=cE(),t=G0(),i=fE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=d;break}if(A===o){y=!0,o=u,a=d;break}A=A.sibling}if(!y){for(A=d.child;A;){if(A===a){y=!0,a=d,o=u;break}if(A===o){y=!0,o=d,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case F:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var Q=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},pt=[],At=-1;function I(e){return{current:e}}function j(e){0>At||(e.current=pt[At],pt[At]=null,At--)}function gt(e,n){At++,pt[At]=e.current,e.current=n}var Lt=I(null),jt=I(null),it=I(null),yt=I(null);function Dt(e,n){switch(gt(it,n),gt(jt,e),gt(Lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Uv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Uv(n),e=Ov(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Lt),gt(Lt,e)}function te(){j(Lt),j(jt),j(it)}function zt(e){e.memoizedState!==null&&gt(yt,e);var n=Lt.current,a=Ov(n,e.type);n!==a&&(gt(jt,e),gt(Lt,a))}function fe(e){jt.current===e&&(j(Lt),j(jt)),yt.current===e&&(j(yt),_u._currentValue=ct)}var Ee,be;function xe(e){if(Ee===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ee=n&&n[1]||"",be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ee+e+be}var Je=!1;function ye(e,n){if(!e||Je)return"";Je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(dt){var lt=dt}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(dt){lt=dt}e.call(Tt.prototype)}}else{try{throw Error()}catch(dt){lt=dt}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(dt){if(dt&&lt&&typeof dt.stack=="string")return[dt.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],A=d[1];if(y&&A){var V=y.split(`
`),st=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===st.length)for(o=V.length-1,u=st.length-1;1<=o&&0<=u&&V[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==st[u]){var _t=`
`+V[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{Je=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xe(a):""}function Dn(e,n){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return e.child!==n&&n!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return xe("Activity");default:return""}}function X(e){try{var n="",a=null;do n+=Dn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var vn=Object.prototype.hasOwnProperty,we=r.unstable_scheduleCallback,tn=r.unstable_cancelCallback,ie=r.unstable_shouldYield,O=r.unstable_requestPaint,b=r.unstable_now,K=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Rt=r.unstable_UserBlockingPriority,mt=r.unstable_NormalPriority,ne=r.unstable_LowPriority,Pt=r.unstable_IdlePriority,le=r.log,de=r.unstable_setDisableYieldValue,Nt=null,wt=null;function Qt(e){if(typeof le=="function"&&de(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Nt,e)}catch{}}var Yt=Math.clz32?Math.clz32:z,k=Math.log,Ct=Math.LN2;function z(e){return e>>>=0,e===0?32:31-(k(e)/Ct|0)|0}var xt=256,ht=262144,Ut=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Z(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=bt(o):(y&=A,y!==0?u=bt(y):a||(a=A&~e,a!==0&&(u=bt(a))))):(A=o&~d,A!==0?u=bt(A):y!==0?u=bt(y):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Et(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xt(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function Gt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,o,u,d){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,st=e.hiddenUpdates;for(a=y&~a;0<a;){var _t=31-Yt(a),Tt=1<<_t;A[_t]=0,V[_t]=-1;var lt=st[_t];if(lt!==null)for(st[_t]=null,_t=0;_t<lt.length;_t++){var dt=lt[_t];dt!==null&&(dt.lane&=-536870913)}a&=~Tt}o!==0&&Ka(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~n))}function Ka(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Yt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ca(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Yt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function sa(e,n){var a=n&-n;return a=(a&42)!==0?1:ni(a),(a&(e.suspendedLanes|n))!==0?0:a}function ni(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function En(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:ix(e.type))}function ra(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var bn=Math.random().toString(36).slice(2),cn="__reactFiber$"+bn,qe="__reactProps$"+bn,Mi="__reactContainer$"+bn,Ri="__reactEvents$"+bn,Ja="__reactListeners$"+bn,wa="__reactHandles$"+bn,li="__reactResources$"+bn,Fs="__reactMarker$"+bn;function _s(e){delete e[cn],delete e[qe],delete e[Ri],delete e[Ja],delete e[wa]}function oa(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Mi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Gv(e);e!==null;){if(a=e[cn])return a;e=Gv(e)}return n}e=a,a=e.parentNode}return null}function la(e){if(e=e[cn]||e[Mi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Da(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[li];return n||(n=e[li]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Fs]=!0}var ft=new Set,rt={};function nt(e,n){Vt(e,n),Vt(e+"Capture",n)}function Vt(e,n){for(rt[e]=n,e=0;e<n.length;e++)ft.add(n[e])}var Zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},$t={};function re(e){return vn.call($t,e)?!0:vn.call(kt,e)?!1:Zt.test(e)?$t[e]=!0:(kt[e]=!0,!1)}function he(e,n,a){if(re(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function _e(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ee(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ge(e){if(!e._valueTracker){var n=dn(e)?"checked":"value";e._valueTracker=xn(e,n,""+e[n])}}function Bn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=dn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ci=/[\n"\\]/g;function ge(e){return e.replace(ci,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ui(e,n,a,o,u,d,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Se(n)):e.value!==""+Se(n)&&(e.value=""+Se(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Ci(e,y,Se(n)):a!=null?Ci(e,y,Se(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Se(A):e.removeAttribute("name")}function Tn(e,n,a,o,u,d,y,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ge(e);return}a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ge(e)}function Ci(e,n,a){n==="number"&&ae(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function je(e,n,a){if(n!=null&&(n=""+Se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Se(a):""}function On(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Se(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ge(e)}function Ze(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Na(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function La(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Na(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Na(e,d,n[d])}function Ui(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ua(e){return ca.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ua(){}var fa=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,Bs=null;function $u(e){var n=la(e);if(n&&(e=n.stateNode)){var a=e[qe]||null;t:switch(e=n.stateNode,n.type){case"input":if(ui(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[qe]||null;if(!u)throw Error(s(90));ui(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Bn(o)}break t;case"textarea":je(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fi(e,!!a.multiple,n,!1)}}}var pc=!1;function tf(e,n,a){if(pc)return e(n,a);pc=!0;try{var o=e(n);return o}finally{if(pc=!1,(Oi!==null||Bs!==null)&&(Ff(),Oi&&(n=Oi,e=Bs,Bs=Oi=null,$u(n),e)))for(n=0;n<e.length;n++)$u(e[n])}}function lo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[qe]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mc=!1;if($a)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){mc=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{mc=!1}var vs=null,xs=null,co=null;function gc(){if(co)return co;var e,n=xs,a=n.length,o,u="value"in vs?vs.value:vs.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return co=u.slice(e,1<o?1-o:void 0)}function In(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function Gn(){return!1}function yn(e){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ii:Gn,this.isPropagationStopped=Gn,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),n}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=yn(Zi),_r=v({},Zi,{view:0,detail:0}),ys=yn(_r),uo,fo,zs,di=v({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zs&&(zs&&e.type==="mousemove"?(uo=e.screenX-zs.screenX,fo=e.screenY-zs.screenY):fo=uo=0,zs=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),Oa=yn(di),Ss=v({},di,{dataTransfer:0}),Hs=yn(Ss),vr=v({},_r,{relatedTarget:0}),ts=yn(vr),Zo=v({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ko=yn(Zo),ha=v({},Zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ms=yn(ha),ef=v({},Zi,{data:0}),_c=yn(ef),xr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Es={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ia(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Es[e])?!!n[e]:!1}function Qo(){return Ia}var nf=v({},_r,{key:function(e){if(e.key){var n=xr[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qo,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jo=yn(nf),wi=v({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$o=yn(wi),ip=v({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qo}),af=yn(ip),xc=v({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),tl=yn(xc),ap=v({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yc=yn(ap),Sc=v({},Zi,{newState:0,oldState:0}),sf=yn(Sc),rf=[9,13,27,32],yr=$a&&"CompositionEvent"in window,Pa=null;$a&&"documentMode"in document&&(Pa=document.documentMode);var sp=$a&&"TextEvent"in window&&!Pa,of=$a&&(!yr||Pa&&8<Pa&&11>=Pa),Gs=" ",Mc=!1;function Ec(e,n){switch(e){case"keyup":return rf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function el(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bs=!1;function Sr(e,n){switch(e){case"compositionend":return el(n);case"keypress":return n.which!==32?null:(Mc=!0,Gs);case"textInput":return e=n.data,e===Gs&&Mc?null:e;default:return null}}function lf(e,n){if(bs)return e==="compositionend"||!yr&&Ec(e,n)?(e=gc(),co=xs=vs=null,bs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return of&&n.locale!=="ko"?null:n.data;default:return null}}var bc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bc[e.type]:n==="textarea"}function nl(e,n,a,o){Oi?Bs?Bs.push(o):Bs=[o]:Oi=o,n=Xf(n,"onChange"),0<n.length&&(a=new da("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var es=null,Pn=null;function Tc(e){Rv(e,0)}function ho(e){var n=Da(e);if(Bn(n))return e}function Ac(e,n){if(e==="change")return n}var Rc=!1;if($a){var il;if($a){var al="oninput"in document;if(!al){var Cc=document.createElement("div");Cc.setAttribute("oninput","return;"),al=typeof Cc.oninput=="function"}il=al}else il=!1;Rc=il&&(!document.documentMode||9<document.documentMode)}function wc(){es&&(es.detachEvent("onpropertychange",po),Pn=es=null)}function po(e){if(e.propertyName==="value"&&ho(Pn)){var n=[];nl(n,Pn,e,hc(e)),tf(Tc,n)}}function sl(e,n,a){e==="focusin"?(wc(),es=n,Pn=a,es.attachEvent("onpropertychange",po)):e==="focusout"&&wc()}function Dc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(Pn)}function Nc(e,n){if(e==="click")return ho(n)}function rl(e,n){if(e==="input"||e==="change")return ho(n)}function cf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Pi=typeof Object.is=="function"?Object.is:cf;function Ts(e,n){if(Pi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!vn.call(n,u)||!Pi(e[u],n[u]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ol(e,n){var a=Lc(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Lc(a)}}function Uc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Oc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ae(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ae(e.document)}return n}function Fa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ic=$a&&"documentMode"in document&&11>=document.documentMode,Vs=null,ll=null,pa=null,cl=!1;function Pc(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cl||Vs==null||Vs!==ae(o)||(o=Vs,"selectionStart"in o&&Fa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),pa&&Ts(pa,o)||(pa=o,o=Xf(ll,"onSelect"),0<o.length&&(n=new da("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Vs)))}function ns(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var As={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},ul={},Fc={};$a&&(Fc=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Rs(e){if(ul[e])return ul[e];if(!As[e])return e;var n=As[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fc)return ul[e]=n[a];return e}var mo=Rs("animationend"),Bc=Rs("animationiteration"),zc=Rs("animationstart"),uf=Rs("transitionrun"),Er=Rs("transitionstart"),br=Rs("transitioncancel"),Hc=Rs("transitionend"),Gc=new Map,fl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fl.push("scrollEnd");function Ki(e,n){Gc.set(e,n),nt(n,[e])}var Tr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vi=[],ks=0,go=0;function _o(){for(var e=ks,n=go=ks=0;n<e;){var a=Vi[n];Vi[n++]=null;var o=Vi[n];Vi[n++]=null;var u=Vi[n];Vi[n++]=null;var d=Vi[n];if(Vi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&Jt(a,u,d)}}function vo(e,n,a,o){Vi[ks++]=e,Vi[ks++]=n,Vi[ks++]=a,Vi[ks++]=o,go|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ot(e,n,a,o){return vo(e,n,a,o),Ht(e)}function It(e,n){return vo(e,null,null,n),Ht(e)}function Jt(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Yt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Ht(e){if(50<uu)throw uu=0,sm=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ot={};function ce(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(e,n,a,o){return new ce(e,n,a,o)}function We(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Te(e,n){var a=e.alternate;return a===null?(a=Kt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zn(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Kn(e,n,a,o,u,d){var y=0;if(o=e,typeof e=="function")We(e)&&(y=1);else if(typeof e=="string")y=qM(e,a,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Kt(31,a,n,u),e.elementType=N,e.lanes=d,e;case w:return Ye(a.children,u,d,n);case M:y=8,u|=24;break;case S:return e=Kt(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case B:return e=Kt(13,a,n,u),e.elementType=B,e.lanes=d,e;case F:return e=Kt(19,a,n,u),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case C:y=9;break t;case D:y=11;break t;case H:y=14;break t;case T:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Kt(y,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Ye(e,n,a,o){return e=Kt(7,e,o,n),e.lanes=a,e}function De(e,n,a){return e=Kt(6,e,null,n),e.lanes=a,e}function Be(e){var n=Kt(18,null,null,0);return n.stateNode=e,n}function Ve(e,n,a){return n=Kt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Qn=new WeakMap;function Vn(e,n){if(typeof e=="object"&&e!==null){var a=Qn.get(e);return a!==void 0?a:(n={value:e,source:n,stack:X(n)},Qn.set(e,n),n)}return{value:e,source:n,stack:X(n)}}var Jn=[],Ei=0,ma=null,Bt=0,rn=[],Rn=0,hi=null,Cn=1,pi="";function mi(e,n){Jn[Ei++]=Bt,Jn[Ei++]=ma,ma=e,Bt=n}function Ar(e,n,a){rn[Rn++]=Cn,rn[Rn++]=pi,rn[Rn++]=hi,hi=e;var o=Cn;e=pi;var u=32-Yt(o)-1;o&=~(1<<u),a+=1;var d=32-Yt(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Cn=1<<32-Yt(n)+u|a<<u|o,pi=d+e}else Cn=1<<d|a<<u|o,pi=e}function ga(e){e.return!==null&&(mi(e,1),Ar(e,1,0))}function kn(e){for(;e===ma;)ma=Jn[--Ei],Jn[Ei]=null,Bt=Jn[--Ei],Jn[Ei]=null;for(;e===hi;)hi=rn[--Rn],rn[Rn]=null,pi=rn[--Rn],rn[Rn]=null,Cn=rn[--Rn],rn[Rn]=null}function Qi(e,n){rn[Rn++]=Cn,rn[Rn++]=pi,rn[Rn++]=hi,Cn=n.id,pi=n.overflow,hi=e}var hn=null,on=null,Pe=!1,is=null,ki=!1,xo=Error(s(519));function Ba(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ue(Vn(n,e)),xo}function Vc(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[qe]=o,a){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(a=0;a<du.length;a++)He(du[a],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":He("invalid",n),Tn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":He("invalid",n);break;case"textarea":He("invalid",n),On(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Nv(n.textContent,a)?(o.popover!=null&&(He("beforetoggle",n),He("toggle",n)),o.onScroll!=null&&He("scroll",n),o.onScrollEnd!=null&&He("scrollend",n),o.onClick!=null&&(n.onclick=ua),n=!0):n=!1,n||Ba(e,!0)}function Rr(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:hn=hn.return}}function za(e){if(e!==hn)return!1;if(!Pe)return Rr(e),Pe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ym(e.type,e.memoizedProps)),a=!a),a&&on&&Ba(e),Rr(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=Hv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=Hv(e)}else n===27?(n=on,Gr(e.type)?(e=Tm,Tm=null,on=e):on=n):on=hn?Va(e.stateNode.nextSibling):null;return!0}function Ha(){on=hn=null,Pe=!1}function dl(){var e=is;return e!==null&&(ea===null?ea=e:ea.push.apply(ea,e),is=null),e}function Ue(e){is===null?is=[e]:is.push(e)}var en=I(null),Ln=null,Xn=null;function gi(e,n,a){gt(en,n._currentValue),n._currentValue=a}function Oe(e){e._currentValue=en.current,j(en)}function as(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Xs(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),as(d.return,a,e),o||(y=null);break t}d=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),as(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function _a(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;Pi(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===yt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(_u):e=[_u])}u=u.return}e!==null&&Xs(n,e,a,o),n.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!Pi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Di(e){Ln=e,Xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return Cs(Ln,e)}function Cr(e,n){return Ln===null&&Di(e),Cs(e,n)}function Cs(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xn===null){if(e===null)throw Error(s(308));Xn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xn=Xn.next=n;return a}var kc=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Xc=r.unstable_scheduleCallback,rp=r.unstable_NormalPriority,ii={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function op(){return{controller:new kc,data:new Map,refCount:0}}function Wc(e){e.refCount--,e.refCount===0&&Xc(rp,function(){e.controller.abort()})}var Yc=null,lp=0,hl=0,pl=null;function YS(e,n){if(Yc===null){var a=Yc=[];lp=0,hl=fm(),pl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return lp++,n.then(_g,_g),n}function _g(){if(--lp===0&&Yc!==null){pl!==null&&(pl.status="fulfilled");var e=Yc;Yc=null,hl=0,pl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function qS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var vg=U.S;U.S=function(e,n){ev=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&YS(e,n),vg!==null&&vg(e,n)};var yo=I(null);function cp(){var e=yo.current;return e!==null?e:Sn.pooledCache}function ff(e,n){n===null?gt(yo,yo.current):gt(yo,n.pool)}function xg(){var e=cp();return e===null?null:{parent:ii._currentValue,pool:e}}var ml=Error(s(460)),up=Error(s(474)),df=Error(s(542)),hf={then:function(){}};function yg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ua,ua),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Eg(e),e;default:if(typeof n.status=="string")n.then(ua,ua);else{if(e=Sn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Eg(e),e}throw Mo=n,ml}}function So(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mo=a,ml):a}}var Mo=null;function Mg(){if(Mo===null)throw Error(s(459));var e=Mo;return Mo=null,e}function Eg(e){if(e===ml||e===df)throw Error(s(483))}var gl=null,qc=0;function pf(e){var n=qc;return qc+=1,gl===null&&(gl=[]),Sg(gl,e,n)}function jc(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function mf(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bg(e){function n($,W){if(e){var at=$.deletions;at===null?($.deletions=[W],$.flags|=16):at.push(W)}}function a($,W){if(!e)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=Te($,W),$.index=0,$.sibling=null,$}function d($,W,at){return $.index=at,e?(at=$.alternate,at!==null?(at=at.index,at<W?($.flags|=67108866,W):at):($.flags|=67108866,W)):($.flags|=1048576,W)}function y($){return e&&$.alternate===null&&($.flags|=67108866),$}function A($,W,at,Mt){return W===null||W.tag!==6?(W=De(at,$.mode,Mt),W.return=$,W):(W=u(W,at),W.return=$,W)}function V($,W,at,Mt){var ue=at.type;return ue===w?_t($,W,at.props.children,Mt,at.key):W!==null&&(W.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&So(ue)===W.type)?(W=u(W,at.props),jc(W,at),W.return=$,W):(W=Kn(at.type,at.key,at.props,null,$.mode,Mt),jc(W,at),W.return=$,W)}function st($,W,at,Mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==at.containerInfo||W.stateNode.implementation!==at.implementation?(W=Ve(at,$.mode,Mt),W.return=$,W):(W=u(W,at.children||[]),W.return=$,W)}function _t($,W,at,Mt,ue){return W===null||W.tag!==7?(W=Ye(at,$.mode,Mt,ue),W.return=$,W):(W=u(W,at),W.return=$,W)}function Tt($,W,at){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=De(""+W,$.mode,at),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return at=Kn(W.type,W.key,W.props,null,$.mode,at),jc(at,W),at.return=$,at;case E:return W=Ve(W,$.mode,at),W.return=$,W;case T:return W=So(W),Tt($,W,at)}if(Q(W)||J(W))return W=Ye(W,$.mode,at,null),W.return=$,W;if(typeof W.then=="function")return Tt($,pf(W),at);if(W.$$typeof===L)return Tt($,Cr($,W),at);mf($,W)}return null}function lt($,W,at,Mt){var ue=W!==null?W.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return ue!==null?null:A($,W,""+at,Mt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case x:return at.key===ue?V($,W,at,Mt):null;case E:return at.key===ue?st($,W,at,Mt):null;case T:return at=So(at),lt($,W,at,Mt)}if(Q(at)||J(at))return ue!==null?null:_t($,W,at,Mt,null);if(typeof at.then=="function")return lt($,W,pf(at),Mt);if(at.$$typeof===L)return lt($,W,Cr($,at),Mt);mf($,at)}return null}function dt($,W,at,Mt,ue){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return $=$.get(at)||null,A(W,$,""+Mt,ue);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case x:return $=$.get(Mt.key===null?at:Mt.key)||null,V(W,$,Mt,ue);case E:return $=$.get(Mt.key===null?at:Mt.key)||null,st(W,$,Mt,ue);case T:return Mt=So(Mt),dt($,W,at,Mt,ue)}if(Q(Mt)||J(Mt))return $=$.get(at)||null,_t(W,$,Mt,ue,null);if(typeof Mt.then=="function")return dt($,W,at,pf(Mt),ue);if(Mt.$$typeof===L)return dt($,W,at,Cr(W,Mt),ue);mf(W,Mt)}return null}function se($,W,at,Mt){for(var ue=null,nn=null,oe=W,Ne=W=0,Xe=null;oe!==null&&Ne<at.length;Ne++){oe.index>Ne?(Xe=oe,oe=null):Xe=oe.sibling;var an=lt($,oe,at[Ne],Mt);if(an===null){oe===null&&(oe=Xe);break}e&&oe&&an.alternate===null&&n($,oe),W=d(an,W,Ne),nn===null?ue=an:nn.sibling=an,nn=an,oe=Xe}if(Ne===at.length)return a($,oe),Pe&&mi($,Ne),ue;if(oe===null){for(;Ne<at.length;Ne++)oe=Tt($,at[Ne],Mt),oe!==null&&(W=d(oe,W,Ne),nn===null?ue=oe:nn.sibling=oe,nn=oe);return Pe&&mi($,Ne),ue}for(oe=o(oe);Ne<at.length;Ne++)Xe=dt(oe,$,Ne,at[Ne],Mt),Xe!==null&&(e&&Xe.alternate!==null&&oe.delete(Xe.key===null?Ne:Xe.key),W=d(Xe,W,Ne),nn===null?ue=Xe:nn.sibling=Xe,nn=Xe);return e&&oe.forEach(function(Yr){return n($,Yr)}),Pe&&mi($,Ne),ue}function me($,W,at,Mt){if(at==null)throw Error(s(151));for(var ue=null,nn=null,oe=W,Ne=W=0,Xe=null,an=at.next();oe!==null&&!an.done;Ne++,an=at.next()){oe.index>Ne?(Xe=oe,oe=null):Xe=oe.sibling;var Yr=lt($,oe,an.value,Mt);if(Yr===null){oe===null&&(oe=Xe);break}e&&oe&&Yr.alternate===null&&n($,oe),W=d(Yr,W,Ne),nn===null?ue=Yr:nn.sibling=Yr,nn=Yr,oe=Xe}if(an.done)return a($,oe),Pe&&mi($,Ne),ue;if(oe===null){for(;!an.done;Ne++,an=at.next())an=Tt($,an.value,Mt),an!==null&&(W=d(an,W,Ne),nn===null?ue=an:nn.sibling=an,nn=an);return Pe&&mi($,Ne),ue}for(oe=o(oe);!an.done;Ne++,an=at.next())an=dt(oe,$,Ne,an.value,Mt),an!==null&&(e&&an.alternate!==null&&oe.delete(an.key===null?Ne:an.key),W=d(an,W,Ne),nn===null?ue=an:nn.sibling=an,nn=an);return e&&oe.forEach(function(aE){return n($,aE)}),Pe&&mi($,Ne),ue}function gn($,W,at,Mt){if(typeof at=="object"&&at!==null&&at.type===w&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case x:t:{for(var ue=at.key;W!==null;){if(W.key===ue){if(ue=at.type,ue===w){if(W.tag===7){a($,W.sibling),Mt=u(W,at.props.children),Mt.return=$,$=Mt;break t}}else if(W.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&So(ue)===W.type){a($,W.sibling),Mt=u(W,at.props),jc(Mt,at),Mt.return=$,$=Mt;break t}a($,W);break}else n($,W);W=W.sibling}at.type===w?(Mt=Ye(at.props.children,$.mode,Mt,at.key),Mt.return=$,$=Mt):(Mt=Kn(at.type,at.key,at.props,null,$.mode,Mt),jc(Mt,at),Mt.return=$,$=Mt)}return y($);case E:t:{for(ue=at.key;W!==null;){if(W.key===ue)if(W.tag===4&&W.stateNode.containerInfo===at.containerInfo&&W.stateNode.implementation===at.implementation){a($,W.sibling),Mt=u(W,at.children||[]),Mt.return=$,$=Mt;break t}else{a($,W);break}else n($,W);W=W.sibling}Mt=Ve(at,$.mode,Mt),Mt.return=$,$=Mt}return y($);case T:return at=So(at),gn($,W,at,Mt)}if(Q(at))return se($,W,at,Mt);if(J(at)){if(ue=J(at),typeof ue!="function")throw Error(s(150));return at=ue.call(at),me($,W,at,Mt)}if(typeof at.then=="function")return gn($,W,pf(at),Mt);if(at.$$typeof===L)return gn($,W,Cr($,at),Mt);mf($,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,W!==null&&W.tag===6?(a($,W.sibling),Mt=u(W,at),Mt.return=$,$=Mt):(a($,W),Mt=De(at,$.mode,Mt),Mt.return=$,$=Mt),y($)):a($,W)}return function($,W,at,Mt){try{qc=0;var ue=gn($,W,at,Mt);return gl=null,ue}catch(oe){if(oe===ml||oe===df)throw oe;var nn=Kt(29,oe,null,$.mode);return nn.lanes=Mt,nn.return=$,nn}}}var Eo=bg(!0),Tg=bg(!1),wr=!1;function fp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(sn&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ht(e),Jt(e,null,a),n}return vo(e,o,n,a),Ht(e)}function Zc(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ca(e,a)}}function hp(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var pp=!1;function Kc(){if(pp){var e=pl;if(e!==null)throw e}}function Qc(e,n,a,o){pp=!1;var u=e.updateQueue;wr=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,st=V.next;V.next=null,y===null?d=st:y.next=st,y=V;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,A=_t.lastBaseUpdate,A!==y&&(A===null?_t.firstBaseUpdate=st:A.next=st,_t.lastBaseUpdate=V))}if(d!==null){var Tt=u.baseState;y=0,_t=st=V=null,A=d;do{var lt=A.lane&-536870913,dt=lt!==A.lane;if(dt?(ke&lt)===lt:(o&lt)===lt){lt!==0&&lt===hl&&(pp=!0),_t!==null&&(_t=_t.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var se=e,me=A;lt=n;var gn=a;switch(me.tag){case 1:if(se=me.payload,typeof se=="function"){Tt=se.call(gn,Tt,lt);break t}Tt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=me.payload,lt=typeof se=="function"?se.call(gn,Tt,lt):se,lt==null)break t;Tt=v({},Tt,lt);break t;case 2:wr=!0}}lt=A.callback,lt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[lt]:dt.push(lt))}else dt={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_t===null?(st=_t=dt,V=Tt):_t=_t.next=dt,y|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;dt=A,A=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);_t===null&&(V=Tt),u.baseState=V,u.firstBaseUpdate=st,u.lastBaseUpdate=_t,d===null&&(u.shared.lanes=0),Pr|=y,e.lanes=y,e.memoizedState=Tt}}function Ag(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Rg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ag(a[e],n)}var _l=I(null),gf=I(0);function Cg(e,n){e=$s,gt(gf,e),gt(_l,n),$s=e|n.baseLanes}function mp(){gt(gf,$s),gt(_l,_l.current)}function gp(){$s=gf.current,j(_l),j(gf)}var va=I(null),Ga=null;function Lr(e){var n=e.alternate;gt($n,$n.current&1),gt(va,e),Ga===null&&(n===null||_l.current!==null||n.memoizedState!==null)&&(Ga=e)}function _p(e){gt($n,$n.current),gt(va,e),Ga===null&&(Ga=e)}function wg(e){e.tag===22?(gt($n,$n.current),gt(va,e),Ga===null&&(Ga=e)):Ur()}function Ur(){gt($n,$n.current),gt(va,va.current)}function xa(e){j(va),Ga===e&&(Ga=null),j($n)}var $n=I(0);function _f(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Em(a)||bm(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ws=0,Ae=null,pn=null,ai=null,vf=!1,vl=!1,bo=!1,xf=0,Jc=0,xl=null,jS=0;function Wn(){throw Error(s(321))}function vp(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Pi(e[a],n[a]))return!1;return!0}function xp(e,n,a,o,u,d){return Ws=d,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?d_:Op,bo=!1,d=a(o,u),bo=!1,vl&&(d=Ng(n,a,o,u)),Dg(e),d}function Dg(e){U.H=eu;var n=pn!==null&&pn.next!==null;if(Ws=0,ai=pn=Ae=null,vf=!1,Jc=0,xl=null,n)throw Error(s(300));e===null||si||(e=e.dependencies,e!==null&&Xi(e)&&(si=!0))}function Ng(e,n,a,o){Ae=e;var u=0;do{if(vl&&(xl=null),Jc=0,vl=!1,25<=u)throw Error(s(301));if(u+=1,ai=pn=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=h_,d=n(a,o)}while(vl);return d}function ZS(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?$c(n):n,e=e.useState()[0],(pn!==null?pn.memoizedState:null)!==e&&(Ae.flags|=1024),n}function yp(){var e=xf!==0;return xf=0,e}function Sp(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Mp(e){if(vf){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vf=!1}Ws=0,ai=pn=Ae=null,vl=!1,Jc=xf=0,xl=null}function Wi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ai===null?Ae.memoizedState=ai=e:ai=ai.next=e,ai}function ti(){if(pn===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=pn.next;var n=ai===null?Ae.memoizedState:ai.next;if(n!==null)ai=n,pn=e;else{if(e===null)throw Ae.alternate===null?Error(s(467)):Error(s(310));pn=e,e={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},ai===null?Ae.memoizedState=ai=e:ai=ai.next=e}return ai}function yf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $c(e){var n=Jc;return Jc+=1,xl===null&&(xl=[]),e=Sg(xl,e,n),n=Ae,(ai===null?n.memoizedState:ai.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?d_:Op),e}function Sf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $c(e);if(e.$$typeof===L)return zn(e)}throw Error(s(438,String(e)))}function Ep(e){var n=null,a=Ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ae.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yf(),Ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ut;return n.index++,a}function Ys(e,n){return typeof n=="function"?n(e):n}function Mf(e){var n=ti();return bp(n,pn,e)}function bp(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=y=null,V=null,st=n,_t=!1;do{var Tt=st.lane&-536870913;if(Tt!==st.lane?(ke&Tt)===Tt:(Ws&Tt)===Tt){var lt=st.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Tt===hl&&(_t=!0);else if((Ws&lt)===lt){st=st.next,lt===hl&&(_t=!0);continue}else Tt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(A=V=Tt,y=d):V=V.next=Tt,Ae.lanes|=lt,Pr|=lt;Tt=st.action,bo&&a(d,Tt),d=st.hasEagerState?st.eagerState:a(d,Tt)}else lt={lane:Tt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(A=V=lt,y=d):V=V.next=lt,Ae.lanes|=Tt,Pr|=Tt;st=st.next}while(st!==null&&st!==n);if(V===null?y=d:V.next=A,!Pi(d,e.memoizedState)&&(si=!0,_t&&(a=pl,a!==null)))throw a;e.memoizedState=d,e.baseState=y,e.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Tp(e){var n=ti(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);Pi(d,n.memoizedState)||(si=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Lg(e,n,a){var o=Ae,u=ti(),d=Pe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Pi((pn||u).memoizedState,a);if(y&&(u.memoizedState=a,si=!0),u=u.queue,Cp(Ig.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||ai!==null&&ai.memoizedState.tag&1){if(o.flags|=2048,yl(9,{destroy:void 0},Og.bind(null,o,u,a,n),null),Sn===null)throw Error(s(349));d||(Ws&127)!==0||Ug(o,n,a)}return a}function Ug(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ae.updateQueue,n===null?(n=yf(),Ae.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Og(e,n,a,o){n.value=a,n.getSnapshot=o,Pg(n)&&Fg(e)}function Ig(e,n,a){return a(function(){Pg(n)&&Fg(e)})}function Pg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Pi(e,a)}catch{return!0}}function Fg(e){var n=It(e,2);n!==null&&na(n,e,2)}function Ap(e){var n=Wi();if(typeof e=="function"){var a=e;if(e=a(),bo){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:e},n}function Bg(e,n,a,o){return e.baseState=a,bp(e,pn,typeof o=="function"?o:Ys)}function KS(e,n,a,o,u){if(Tf(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,zg(n,d)):(d.next=a.next,n.pending=a.next=d)}}function zg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=U.T,y={};U.T=y;try{var A=a(u,o),V=U.S;V!==null&&V(y,A),Hg(e,n,A)}catch(st){Rp(e,n,st)}finally{d!==null&&y.types!==null&&(d.types=y.types),U.T=d}}else try{d=a(u,o),Hg(e,n,d)}catch(st){Rp(e,n,st)}}function Hg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Gg(e,n,o)},function(o){return Rp(e,n,o)}):Gg(e,n,a)}function Gg(e,n,a){n.status="fulfilled",n.value=a,Vg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,zg(e,a)))}function Rp(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Vg(n),n=n.next;while(n!==o)}e.action=null}function Vg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kg(e,n){return n}function Xg(e,n){if(Pe){var a=Sn.formState;if(a!==null){t:{var o=Ae;if(Pe){if(on){e:{for(var u=on,d=ki;u.nodeType!==8;){if(!d){u=null;break e}if(u=Va(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){on=Va(u.nextSibling),o=u.data==="F!";break t}}Ba(o)}o=!1}o&&(n=a[0])}}return a=Wi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:n},a.queue=o,a=c_.bind(null,Ae,o),o.dispatch=a,o=Ap(!1),d=Up.bind(null,Ae,!1,o.queue),o=Wi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=KS.bind(null,Ae,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Wg(e){var n=ti();return Yg(n,pn,e)}function Yg(e,n,a){if(n=bp(e,n,kg)[0],e=Mf(Ys)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=$c(n)}catch(y){throw y===ml?df:y}else o=n;n=ti();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Ae.flags|=2048,yl(9,{destroy:void 0},QS.bind(null,u,a),null)),[o,d,e]}function QS(e,n){e.action=n}function qg(e){var n=ti(),a=pn;if(a!==null)return Yg(n,a,e);ti(),n=n.memoizedState,a=ti();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function yl(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ae.updateQueue,n===null&&(n=yf(),Ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function jg(){return ti().memoizedState}function Ef(e,n,a,o){var u=Wi();Ae.flags|=e,u.memoizedState=yl(1|n,{destroy:void 0},a,o===void 0?null:o)}function bf(e,n,a,o){var u=ti();o=o===void 0?null:o;var d=u.memoizedState.inst;pn!==null&&o!==null&&vp(o,pn.memoizedState.deps)?u.memoizedState=yl(n,d,a,o):(Ae.flags|=e,u.memoizedState=yl(1|n,d,a,o))}function Zg(e,n){Ef(8390656,8,e,n)}function Cp(e,n){bf(2048,8,e,n)}function JS(e){Ae.flags|=4;var n=Ae.updateQueue;if(n===null)n=yf(),Ae.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Kg(e){var n=ti().memoizedState;return JS({ref:n,nextImpl:e}),function(){if((sn&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Qg(e,n){return bf(4,2,e,n)}function Jg(e,n){return bf(4,4,e,n)}function $g(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function t_(e,n,a){a=a!=null?a.concat([e]):null,bf(4,4,$g.bind(null,n,e),a)}function wp(){}function e_(e,n){var a=ti();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&vp(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function n_(e,n){var a=ti();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&vp(n,o[1]))return o[0];if(o=e(),bo){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o}function Dp(e,n,a){return a===void 0||(Ws&1073741824)!==0&&(ke&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=iv(),Ae.lanes|=e,Pr|=e,a)}function i_(e,n,a,o){return Pi(a,n)?a:_l.current!==null?(e=Dp(e,a,o),Pi(e,n)||(si=!0),e):(Ws&42)===0||(Ws&1073741824)!==0&&(ke&261930)===0?(si=!0,e.memoizedState=a):(e=iv(),Ae.lanes|=e,Pr|=e,n)}function a_(e,n,a,o,u){var d=P.p;P.p=d!==0&&8>d?d:8;var y=U.T,A={};U.T=A,Up(e,!1,n,a);try{var V=u(),st=U.S;if(st!==null&&st(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _t=qS(V,o);tu(e,n,_t,Ma(e))}else tu(e,n,o,Ma(e))}catch(Tt){tu(e,n,{then:function(){},status:"rejected",reason:Tt},Ma())}finally{P.p=d,y!==null&&A.types!==null&&(y.types=A.types),U.T=y}}function $S(){}function Np(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=s_(e).queue;a_(e,u,n,ct,a===null?$S:function(){return r_(e),a(o)})}function s_(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function r_(e){var n=s_(e);n.next===null&&(n=e.alternate.memoizedState),tu(e,n.next.queue,{},Ma())}function Lp(){return zn(_u)}function o_(){return ti().memoizedState}function l_(){return ti().memoizedState}function tM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ma();e=Dr(a);var o=Nr(n,e,a);o!==null&&(na(o,n,a),Zc(o,n,a)),n={cache:op()},e.payload=n;return}n=n.return}}function eM(e,n,a){var o=Ma();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tf(e)?u_(n,a):(a=ot(e,n,a,o),a!==null&&(na(a,e,o),f_(a,n,o)))}function c_(e,n,a){var o=Ma();tu(e,n,a,o)}function tu(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tf(e))u_(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,A=d(y,a);if(u.hasEagerState=!0,u.eagerState=A,Pi(A,y))return vo(e,n,u,0),Sn===null&&_o(),!1}catch{}if(a=ot(e,n,u,o),a!==null)return na(a,e,o),f_(a,n,o),!0}return!1}function Up(e,n,a,o){if(o={lane:2,revertLane:fm(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Tf(e)){if(n)throw Error(s(479))}else n=ot(e,a,o,2),n!==null&&na(n,e,2)}function Tf(e){var n=e.alternate;return e===Ae||n!==null&&n===Ae}function u_(e,n){vl=vf=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function f_(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ca(e,a)}}var eu={readContext:zn,use:Sf,useCallback:Wn,useContext:Wn,useEffect:Wn,useImperativeHandle:Wn,useLayoutEffect:Wn,useInsertionEffect:Wn,useMemo:Wn,useReducer:Wn,useRef:Wn,useState:Wn,useDebugValue:Wn,useDeferredValue:Wn,useTransition:Wn,useSyncExternalStore:Wn,useId:Wn,useHostTransitionStatus:Wn,useFormState:Wn,useActionState:Wn,useOptimistic:Wn,useMemoCache:Wn,useCacheRefresh:Wn};eu.useEffectEvent=Wn;var d_={readContext:zn,use:Sf,useCallback:function(e,n){return Wi().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:Zg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ef(4194308,4,$g.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ef(4194308,4,e,n)},useInsertionEffect:function(e,n){Ef(4,2,e,n)},useMemo:function(e,n){var a=Wi();n=n===void 0?null:n;var o=e();if(bo){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Wi();if(a!==void 0){var u=a(n);if(bo){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=eM.bind(null,Ae,e),[o.memoizedState,e]},useRef:function(e){var n=Wi();return e={current:e},n.memoizedState=e},useState:function(e){e=Ap(e);var n=e.queue,a=c_.bind(null,Ae,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:wp,useDeferredValue:function(e,n){var a=Wi();return Dp(a,e,n)},useTransition:function(){var e=Ap(!1);return e=a_.bind(null,Ae,e.queue,!0,!1),Wi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ae,u=Wi();if(Pe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Sn===null)throw Error(s(349));(ke&127)!==0||Ug(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Zg(Ig.bind(null,o,d,e),[e]),o.flags|=2048,yl(9,{destroy:void 0},Og.bind(null,o,d,a,n),null),a},useId:function(){var e=Wi(),n=Sn.identifierPrefix;if(Pe){var a=pi,o=Cn;a=(o&~(1<<32-Yt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xf++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=jS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Lp,useFormState:Xg,useActionState:Xg,useOptimistic:function(e){var n=Wi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Up.bind(null,Ae,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ep,useCacheRefresh:function(){return Wi().memoizedState=tM.bind(null,Ae)},useEffectEvent:function(e){var n=Wi(),a={impl:e};return n.memoizedState=a,function(){if((sn&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Op={readContext:zn,use:Sf,useCallback:e_,useContext:zn,useEffect:Cp,useImperativeHandle:t_,useInsertionEffect:Qg,useLayoutEffect:Jg,useMemo:n_,useReducer:Mf,useRef:jg,useState:function(){return Mf(Ys)},useDebugValue:wp,useDeferredValue:function(e,n){var a=ti();return i_(a,pn.memoizedState,e,n)},useTransition:function(){var e=Mf(Ys)[0],n=ti().memoizedState;return[typeof e=="boolean"?e:$c(e),n]},useSyncExternalStore:Lg,useId:o_,useHostTransitionStatus:Lp,useFormState:Wg,useActionState:Wg,useOptimistic:function(e,n){var a=ti();return Bg(a,pn,e,n)},useMemoCache:Ep,useCacheRefresh:l_};Op.useEffectEvent=Kg;var h_={readContext:zn,use:Sf,useCallback:e_,useContext:zn,useEffect:Cp,useImperativeHandle:t_,useInsertionEffect:Qg,useLayoutEffect:Jg,useMemo:n_,useReducer:Tp,useRef:jg,useState:function(){return Tp(Ys)},useDebugValue:wp,useDeferredValue:function(e,n){var a=ti();return pn===null?Dp(a,e,n):i_(a,pn.memoizedState,e,n)},useTransition:function(){var e=Tp(Ys)[0],n=ti().memoizedState;return[typeof e=="boolean"?e:$c(e),n]},useSyncExternalStore:Lg,useId:o_,useHostTransitionStatus:Lp,useFormState:qg,useActionState:qg,useOptimistic:function(e,n){var a=ti();return pn!==null?Bg(a,pn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ep,useCacheRefresh:l_};h_.useEffectEvent=Kg;function Ip(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Pp={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Ma(),u=Dr(o);u.payload=n,a!=null&&(u.callback=a),n=Nr(e,u,o),n!==null&&(na(n,e,o),Zc(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Ma(),u=Dr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Nr(e,u,o),n!==null&&(na(n,e,o),Zc(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ma(),o=Dr(a);o.tag=2,n!=null&&(o.callback=n),n=Nr(e,o,a),n!==null&&(na(n,e,a),Zc(n,e,a))}};function p_(e,n,a,o,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!Ts(a,o)||!Ts(u,d):!0}function m_(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Pp.enqueueReplaceState(n,n.state,null)}function To(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function g_(e){Tr(e)}function __(e){console.error(e)}function v_(e){Tr(e)}function Af(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function x_(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Fp(e,n,a){return a=Dr(a),a.tag=3,a.payload={element:null},a.callback=function(){Af(e,n)},a}function y_(e){return e=Dr(e),e.tag=3,e}function S_(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){x_(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){x_(n,a,o),typeof u!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function nM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&_a(n,a,u,!0),a=va.current,a!==null){switch(a.tag){case 31:case 13:return Ga===null?Bf():a.alternate===null&&Yn===0&&(Yn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===hf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),lm(e,o,u)),!1;case 22:return a.flags|=65536,o===hf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),lm(e,o,u)),!1}throw Error(s(435,a.tag))}return lm(e,o,u),Bf(),!1}if(Pe)return n=va.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==xo&&(e=Error(s(422),{cause:o}),Ue(Vn(e,a)))):(o!==xo&&(n=Error(s(423),{cause:o}),Ue(Vn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Vn(o,a),u=Fp(e.stateNode,o,u),hp(e,u),Yn!==4&&(Yn=2)),!1;var d=Error(s(520),{cause:o});if(d=Vn(d,a),cu===null?cu=[d]:cu.push(d),Yn!==4&&(Yn=2),n===null)return!0;o=Vn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Fp(a.stateNode,o,e),hp(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Fr===null||!Fr.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=y_(u),S_(u,e,a,o),hp(a,u),!1}a=a.return}while(a!==null);return!1}var Bp=Error(s(461)),si=!1;function Ni(e,n,a,o){n.child=e===null?Tg(n,null,a,o):Eo(n,e.child,a,o)}function M_(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return Di(n),o=xp(e,n,a,y,d,u),A=yp(),e!==null&&!si?(Sp(e,n,u),qs(e,n,u)):(Pe&&A&&ga(n),n.flags|=1,Ni(e,n,o,u),n.child)}function E_(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!We(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,b_(e,n,d,o,u)):(e=Kn(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Yp(e,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ts,a(y,o)&&e.ref===n.ref)return qs(e,n,u)}return n.flags|=1,e=Te(d,o),e.ref=n.ref,e.return=n,n.child=e}function b_(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Ts(d,o)&&e.ref===n.ref)if(si=!1,n.pendingProps=o=d,Yp(e,u))(e.flags&131072)!==0&&(si=!0);else return n.lanes=e.lanes,qs(e,n,u)}return zp(e,n,a,o,u)}function T_(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return A_(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ff(n,d!==null?d.cachePool:null),d!==null?Cg(n,d):mp(),wg(n);else return o=n.lanes=536870912,A_(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(ff(n,d.cachePool),Cg(n,d),Ur(),n.memoizedState=null):(e!==null&&ff(n,null),mp(),Ur());return Ni(e,n,u,a),n.child}function nu(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function A_(e,n,a,o,u){var d=cp();return d=d===null?null:{parent:ii._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&ff(n,null),mp(),wg(n),e!==null&&_a(e,n,o,!0),n.childLanes=u,null}function Rf(e,n){return n=wf({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function R_(e,n,a){return Eo(n,e.child,null,a),e=Rf(n,n.pendingProps),e.flags|=2,xa(n),n.memoizedState=null,e}function iM(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Pe){if(o.mode==="hidden")return e=Rf(n,o),n.lanes=536870912,nu(null,e);if(_p(n),(e=on)?(e=zv(e,ki),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:hi!==null?{id:Cn,overflow:pi}:null,retryLane:536870912,hydrationErrors:null},a=Be(e),a.return=n,n.child=a,hn=n,on=null)):e=null,e===null)throw Ba(n);return n.lanes=536870912,null}return Rf(n,o)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(_p(n),u)if(n.flags&256)n.flags&=-257,n=R_(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(si||_a(e,n,a,!1),u=(a&e.childLanes)!==0,si||u){if(o=Sn,o!==null&&(y=sa(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,It(e,y),na(o,e,y),Bp;Bf(),n=R_(e,n,a)}else e=d.treeContext,on=Va(y.nextSibling),hn=n,Pe=!0,is=null,ki=!1,e!==null&&Qi(n,e),n=Rf(n,o),n.flags|=4096;return n}return e=Te(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cf(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function zp(e,n,a,o,u){return Di(n),a=xp(e,n,a,o,void 0,u),o=yp(),e!==null&&!si?(Sp(e,n,u),qs(e,n,u)):(Pe&&o&&ga(n),n.flags|=1,Ni(e,n,a,u),n.child)}function C_(e,n,a,o,u,d){return Di(n),n.updateQueue=null,a=Ng(n,o,a,u),Dg(e),o=yp(),e!==null&&!si?(Sp(e,n,d),qs(e,n,d)):(Pe&&o&&ga(n),n.flags|=1,Ni(e,n,a,d),n.child)}function w_(e,n,a,o,u){if(Di(n),n.stateNode===null){var d=Ot,y=a.contextType;typeof y=="object"&&y!==null&&(d=zn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Pp,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},fp(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?zn(y):Ot,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Ip(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Pp.enqueueReplaceState(d,d.state,null),Qc(n,o,d,u),Kc(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,V=To(a,A);d.props=V;var st=d.context,_t=a.contextType;y=Ot,typeof _t=="object"&&_t!==null&&(y=zn(_t));var Tt=a.getDerivedStateFromProps;_t=typeof Tt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_t||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||st!==y)&&m_(n,d,o,y),wr=!1;var lt=n.memoizedState;d.state=lt,Qc(n,o,d,u),Kc(),st=n.memoizedState,A||lt!==st||wr?(typeof Tt=="function"&&(Ip(n,a,Tt,o),st=n.memoizedState),(V=wr||p_(n,a,V,o,lt,st,y))?(_t||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=y,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,dp(e,n),y=n.memoizedProps,_t=To(a,y),d.props=_t,Tt=n.pendingProps,lt=d.context,st=a.contextType,V=Ot,typeof st=="object"&&st!==null&&(V=zn(st)),A=a.getDerivedStateFromProps,(st=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Tt||lt!==V)&&m_(n,d,o,V),wr=!1,lt=n.memoizedState,d.state=lt,Qc(n,o,d,u),Kc();var dt=n.memoizedState;y!==Tt||lt!==dt||wr||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof A=="function"&&(Ip(n,a,A,o),dt=n.memoizedState),(_t=wr||p_(n,a,_t,o,lt,dt,V)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(st||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,dt,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,dt,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),d.props=o,d.state=dt,d.context=V,o=_t):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Cf(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Eo(n,e.child,null,u),n.child=Eo(n,null,a,u)):Ni(e,n,a,u),n.memoizedState=d.state,e=n.child):e=qs(e,n,u),e}function D_(e,n,a,o){return Ha(),n.flags|=256,Ni(e,n,a,o),n.child}var Hp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gp(e){return{baseLanes:e,cachePool:xg()}}function Vp(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Sa),e}function N_(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:($n.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Pe){if(u?Lr(n):Ur(),(e=on)?(e=zv(e,ki),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:hi!==null?{id:Cn,overflow:pi}:null,retryLane:536870912,hydrationErrors:null},a=Be(e),a.return=n,n.child=a,hn=n,on=null)):e=null,e===null)throw Ba(n);return bm(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ur(),u=n.mode,A=wf({mode:"hidden",children:A},u),o=Ye(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Gp(a),o.childLanes=Vp(e,y,a),n.memoizedState=Hp,nu(null,o)):(Lr(n),kp(n,A))}var V=e.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(d)n.flags&256?(Lr(n),n.flags&=-257,n=Xp(e,n,a)):n.memoizedState!==null?(Ur(),n.child=e.child,n.flags|=128,n=null):(Ur(),A=o.fallback,u=n.mode,o=wf({mode:"visible",children:o.children},u),A=Ye(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Eo(n,e.child,null,a),o=n.child,o.memoizedState=Gp(a),o.childLanes=Vp(e,y,a),n.memoizedState=Hp,n=nu(null,o));else if(Lr(n),bm(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var st=y.dgst;y=st,o=Error(s(419)),o.stack="",o.digest=y,Ue({value:o,source:null,stack:null}),n=Xp(e,n,a)}else if(si||_a(e,n,a,!1),y=(a&e.childLanes)!==0,si||y){if(y=Sn,y!==null&&(o=sa(y,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,It(e,o),na(y,e,o),Bp;Em(A)||Bf(),n=Xp(e,n,a)}else Em(A)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,on=Va(A.nextSibling),hn=n,Pe=!0,is=null,ki=!1,e!==null&&Qi(n,e),n=kp(n,o.children),n.flags|=4096);return n}return u?(Ur(),A=o.fallback,u=n.mode,V=e.child,st=V.sibling,o=Te(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,st!==null?A=Te(st,A):(A=Ye(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,nu(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Gp(a):(u=A.cachePool,u!==null?(V=ii._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=xg(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Vp(e,y,a),n.memoizedState=Hp,nu(e.child,o)):(Lr(n),a=e.child,e=a.sibling,a=Te(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function kp(e,n){return n=wf({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wf(e,n){return e=Kt(22,e,null,n),e.lanes=0,e}function Xp(e,n,a){return Eo(n,e.child,null,a),e=kp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function L_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),as(e.return,n,a)}function Wp(e,n,a,o,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function U_(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=$n.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,gt($n,y),Ni(e,n,o,a),o=Pe?Bt:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&L_(e,a,n);else if(e.tag===19)L_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&_f(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Wp(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_f(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Wp(n,!0,a,null,d,o);break;case"together":Wp(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function qs(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(_a(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Te(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Te(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yp(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function aM(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),gi(n,ii,e.memoizedState.cache),Ha();break;case 27:case 5:zt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:gi(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_p(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Lr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?N_(e,n,a):(Lr(n),e=qs(e,n,a),e!==null?e.sibling:null);Lr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(_a(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return U_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt($n,$n.current),o)break;return null;case 22:return n.lanes=0,T_(e,n,a,n.pendingProps);case 24:gi(n,ii,e.memoizedState.cache)}return qs(e,n,a)}function O_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)si=!0;else{if(!Yp(e,a)&&(n.flags&128)===0)return si=!1,aM(e,n,a);si=(e.flags&131072)!==0}else si=!1,Pe&&(n.flags&1048576)!==0&&Ar(n,Bt,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=So(n.elementType),n.type=e,typeof e=="function")We(e)?(o=To(e,o),n.tag=1,n=w_(null,n,e,o,a)):(n.tag=0,n=zp(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=M_(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=E_(null,n,e,o,a);break t}}throw n=tt(e)||e,Error(s(306,n,""))}}return n;case 0:return zp(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=To(o,n.pendingProps),w_(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,dp(e,n),Qc(n,o,null,a);var y=n.memoizedState;if(o=y.cache,gi(n,ii,o),o!==d.cache&&Xs(n,[ii],a,!0),Kc(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=D_(e,n,o,a);break t}else if(o!==u){u=Vn(Error(s(424)),n),Ue(u),n=D_(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,on=Va(e.firstChild),hn=n,Pe=!0,is=null,ki=!0,a=Tg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ha(),o===u){n=qs(e,n,a);break t}Ni(e,n,o,a)}n=n.child}return n;case 26:return Cf(e,n),e===null?(a=Wv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pe||(a=n.type,e=n.pendingProps,o=Wf(it.current).createElement(a),o[cn]=n,o[qe]=e,Li(o,a,e),Y(o),n.stateNode=o):n.memoizedState=Wv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return zt(n),e===null&&Pe&&(o=n.stateNode=Vv(n.type,n.pendingProps,it.current),hn=n,ki=!0,u=on,Gr(n.type)?(Tm=u,on=Va(o.firstChild)):on=u),Ni(e,n,n.pendingProps.children,a),Cf(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Pe&&((u=o=on)&&(o=OM(o,n.type,n.pendingProps,ki),o!==null?(n.stateNode=o,hn=n,on=Va(o.firstChild),ki=!1,u=!0):u=!1),u||Ba(n)),zt(n),u=n.type,d=n.pendingProps,y=e!==null?e.memoizedProps:null,o=d.children,ym(u,d)?o=null:y!==null&&ym(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=xp(e,n,ZS,null,null,a),_u._currentValue=u),Cf(e,n),Ni(e,n,o,a),n.child;case 6:return e===null&&Pe&&((e=a=on)&&(a=IM(a,n.pendingProps,ki),a!==null?(n.stateNode=a,hn=n,on=null,e=!0):e=!1),e||Ba(n)),null;case 13:return N_(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Eo(n,null,o,a):Ni(e,n,o,a),n.child;case 11:return M_(e,n,n.type,n.pendingProps,a);case 7:return Ni(e,n,n.pendingProps,a),n.child;case 8:return Ni(e,n,n.pendingProps.children,a),n.child;case 12:return Ni(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,gi(n,n.type,o.value),Ni(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Di(n),u=zn(u),o=o(u),n.flags|=1,Ni(e,n,o,a),n.child;case 14:return E_(e,n,n.type,n.pendingProps,a);case 15:return b_(e,n,n.type,n.pendingProps,a);case 19:return U_(e,n,a);case 31:return iM(e,n,a);case 22:return T_(e,n,a,n.pendingProps);case 24:return Di(n),o=zn(ii),e===null?(u=cp(),u===null&&(u=Sn,d=op(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},fp(n),gi(n,ii,u)):((e.lanes&a)!==0&&(dp(e,n),Qc(n,null,null,a),Kc()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),gi(n,ii,o)):(o=d.cache,gi(n,ii,o),o!==u.cache&&Xs(n,[ii],a,!0))),Ni(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function js(e){e.flags|=4}function qp(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ov())e.flags|=8192;else throw Mo=hf,up}else e.flags&=-16777217}function I_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kv(n))if(ov())e.flags|=8192;else throw Mo=hf,up}function Df(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Xt():536870912,e.lanes|=n,bl|=n)}function iu(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Un(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function sM(e,n,a){var o=n.pendingProps;switch(kn(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(n),null;case 1:return Un(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Oe(ii),te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(za(n)?js(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dl())),Un(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(js(n),d!==null?(Un(n),I_(n,d)):(Un(n),qp(n,u,null,o,a))):d?d!==e.memoizedState?(js(n),Un(n),I_(n,d)):(Un(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&js(n),Un(n),qp(n,u,e,o,a)),null;case 27:if(fe(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&js(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Un(n),null}e=Lt.current,za(n)?Vc(n):(e=Vv(u,o,a),n.stateNode=e,js(n))}return Un(n),null;case 5:if(fe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&js(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Un(n),null}if(d=Lt.current,za(n))Vc(n);else{var y=Wf(it.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[cn]=n,d[qe]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;t:switch(Li(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&js(n)}}return Un(n),qp(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&js(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,za(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=hn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Nv(e.nodeValue,a)),e||Ba(n,!0)}else e=Wf(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Un(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=za(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else Ha(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Un(n),e=!1}else a=dl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(xa(n),n):(xa(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Un(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=za(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Ha(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Un(n),u=!1}else u=dl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(xa(n),n):(xa(n),null)}return xa(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Df(n,n.updateQueue),Un(n),null);case 4:return te(),e===null&&mm(n.stateNode.containerInfo),Un(n),null;case 10:return Oe(n.type),Un(n),null;case 19:if(j($n),o=n.memoizedState,o===null)return Un(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)iu(o,!1);else{if(Yn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=_f(e),d!==null){for(n.flags|=128,iu(o,!1),e=d.updateQueue,n.updateQueue=e,Df(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Zn(a,e),a=a.sibling;return gt($n,$n.current&1|2),Pe&&mi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>If&&(n.flags|=128,u=!0,iu(o,!1),n.lanes=4194304)}else{if(!u)if(e=_f(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Df(n,e),iu(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Pe)return Un(n),null}else 2*b()-o.renderingStartTime>If&&a!==536870912&&(n.flags|=128,u=!0,iu(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=$n.current,gt($n,u?a&1|2:a&1),Pe&&mi(n,o.treeForkCount),e):(Un(n),null);case 22:case 23:return xa(n),gp(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Un(n),n.subtreeFlags&6&&(n.flags|=8192)):Un(n),a=n.updateQueue,a!==null&&Df(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(yo),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oe(ii),Un(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function rM(e,n){switch(kn(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Oe(ii),te(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 31:if(n.memoizedState!==null){if(xa(n),n.alternate===null)throw Error(s(340));Ha()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(xa(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ha()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j($n),null;case 4:return te(),null;case 10:return Oe(n.type),null;case 22:case 23:return xa(n),gp(),e!==null&&j(yo),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Oe(ii),null;case 25:return null;default:return null}}function P_(e,n){switch(kn(n),n.tag){case 3:Oe(ii),te();break;case 26:case 27:case 5:fe(n);break;case 4:te();break;case 31:n.memoizedState!==null&&xa(n);break;case 13:xa(n);break;case 19:j($n);break;case 10:Oe(n.type);break;case 22:case 23:xa(n),gp(),e!==null&&j(yo);break;case 24:Oe(ii)}}function au(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){fn(n,n.return,A)}}function Or(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var V=a,st=A;try{st()}catch(_t){fn(u,V,_t)}}}o=o.next}while(o!==d)}}catch(_t){fn(n,n.return,_t)}}function F_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rg(n,a)}catch(o){fn(e,e.return,o)}}}function B_(e,n,a){a.props=To(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){fn(e,n,o)}}function su(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){fn(e,n,u)}}function ws(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){fn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){fn(e,n,u)}else a.current=null}function z_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){fn(e,e.return,u)}}function jp(e,n,a){try{var o=e.stateNode;CM(o,e.type,a,n),o[qe]=n}catch(u){fn(e,e.return,u)}}function H_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gr(e.type)||e.tag===4}function Zp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||H_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kp(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ua));else if(o!==4&&(o===27&&Gr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Kp(e,n,a),e=e.sibling;e!==null;)Kp(e,n,a),e=e.sibling}function Nf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Gr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nf(e,n,a),e=e.sibling;e!==null;)Nf(e,n,a),e=e.sibling}function G_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Li(n,o,a),n[cn]=e,n[qe]=a}catch(d){fn(e,e.return,d)}}var Zs=!1,ri=!1,Qp=!1,V_=typeof WeakSet=="function"?WeakSet:Set,bi=null;function oM(e,n){if(e=e.containerInfo,vm=Jf,e=Oc(e),Fa(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var y=0,A=-1,V=-1,st=0,_t=0,Tt=e,lt=null;e:for(;;){for(var dt;Tt!==a||u!==0&&Tt.nodeType!==3||(A=y+u),Tt!==d||o!==0&&Tt.nodeType!==3||(V=y+o),Tt.nodeType===3&&(y+=Tt.nodeValue.length),(dt=Tt.firstChild)!==null;)lt=Tt,Tt=dt;for(;;){if(Tt===e)break e;if(lt===a&&++st===u&&(A=y),lt===d&&++_t===o&&(V=y),(dt=Tt.nextSibling)!==null)break;Tt=lt,lt=Tt.parentNode}Tt=dt}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(xm={focusedElem:e,selectionRange:a},Jf=!1,bi=n;bi!==null;)if(n=bi,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bi=e;else for(;bi!==null;){switch(n=bi,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var se=To(a.type,u);e=o.getSnapshotBeforeUpdate(se,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(me){fn(a,a.return,me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Mm(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,bi=e;break}bi=n.return}}function k_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Qs(e,a),o&4&&au(5,a);break;case 1:if(Qs(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){fn(a,a.return,y)}else{var u=To(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){fn(a,a.return,y)}}o&64&&F_(a),o&512&&su(a,a.return);break;case 3:if(Qs(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rg(e,n)}catch(y){fn(a,a.return,y)}}break;case 27:n===null&&o&4&&G_(a);case 26:case 5:Qs(e,a),n===null&&o&4&&z_(a),o&512&&su(a,a.return);break;case 12:Qs(e,a);break;case 31:Qs(e,a),o&4&&Y_(e,a);break;case 13:Qs(e,a),o&4&&q_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gM.bind(null,a),PM(e,a))));break;case 22:if(o=a.memoizedState!==null||Zs,!o){n=n!==null&&n.memoizedState!==null||ri,u=Zs;var d=ri;Zs=o,(ri=n)&&!d?Js(e,a,(a.subtreeFlags&8772)!==0):Qs(e,a),Zs=u,ri=d}break;case 30:break;default:Qs(e,a)}}function X_(e){var n=e.alternate;n!==null&&(e.alternate=null,X_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&_s(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fn=null,Ji=!1;function Ks(e,n,a){for(a=a.child;a!==null;)W_(e,n,a),a=a.sibling}function W_(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Nt,a)}catch{}switch(a.tag){case 26:ri||ws(a,n),Ks(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ri||ws(a,n);var o=Fn,u=Ji;Gr(a.type)&&(Fn=a.stateNode,Ji=!1),Ks(e,n,a),pu(a.stateNode),Fn=o,Ji=u;break;case 5:ri||ws(a,n);case 6:if(o=Fn,u=Ji,Fn=null,Ks(e,n,a),Fn=o,Ji=u,Fn!==null)if(Ji)try{(Fn.nodeType===9?Fn.body:Fn.nodeName==="HTML"?Fn.ownerDocument.body:Fn).removeChild(a.stateNode)}catch(d){fn(a,n,d)}else try{Fn.removeChild(a.stateNode)}catch(d){fn(a,n,d)}break;case 18:Fn!==null&&(Ji?(e=Fn,Fv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ll(e)):Fv(Fn,a.stateNode));break;case 4:o=Fn,u=Ji,Fn=a.stateNode.containerInfo,Ji=!0,Ks(e,n,a),Fn=o,Ji=u;break;case 0:case 11:case 14:case 15:Or(2,a,n),ri||Or(4,a,n),Ks(e,n,a);break;case 1:ri||(ws(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&B_(a,n,o)),Ks(e,n,a);break;case 21:Ks(e,n,a);break;case 22:ri=(o=ri)||a.memoizedState!==null,Ks(e,n,a),ri=o;break;default:Ks(e,n,a)}}function Y_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ll(e)}catch(a){fn(n,n.return,a)}}}function q_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(a){fn(n,n.return,a)}}function lM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new V_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new V_),n;default:throw Error(s(435,e.tag))}}function Lf(e,n){var a=lM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=_M.bind(null,e,o);o.then(u,u)}})}function $i(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Gr(A.type)){Fn=A.stateNode,Ji=!1;break t}break;case 5:Fn=A.stateNode,Ji=!1;break t;case 3:case 4:Fn=A.stateNode.containerInfo,Ji=!0;break t}A=A.return}if(Fn===null)throw Error(s(160));W_(d,y,u),Fn=null,Ji=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)j_(n,e),n=n.sibling}var ss=null;function j_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$i(n,e),ta(e),o&4&&(Or(3,e,e.return),au(3,e),Or(5,e,e.return));break;case 1:$i(n,e),ta(e),o&512&&(ri||a===null||ws(a,a.return)),o&64&&Zs&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ss;if($i(n,e),ta(e),o&512&&(ri||a===null||ws(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Fs]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Li(d,o,a),d[cn]=e,Y(d),o=d;break t;case"link":var y=jv("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(d=y[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}d=u.createElement(o),Li(d,o,a),u.head.appendChild(d);break;case"meta":if(y=jv("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(d=y[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}d=u.createElement(o),Li(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=e,Y(d),o=d}e.stateNode=o}else Zv(u,e.type,e.stateNode);else e.stateNode=qv(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Zv(u,e.type,e.stateNode):qv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&jp(e,e.memoizedProps,a.memoizedProps)}break;case 27:$i(n,e),ta(e),o&512&&(ri||a===null||ws(a,a.return)),a!==null&&o&4&&jp(e,e.memoizedProps,a.memoizedProps);break;case 5:if($i(n,e),ta(e),o&512&&(ri||a===null||ws(a,a.return)),e.flags&32){u=e.stateNode;try{Ze(u,"")}catch(se){fn(e,e.return,se)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,jp(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Qp=!0);break;case 6:if($i(n,e),ta(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(se){fn(e,e.return,se)}}break;case 3:if(jf=null,u=ss,ss=Yf(n.containerInfo),$i(n,e),ss=u,ta(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ll(n.containerInfo)}catch(se){fn(e,e.return,se)}Qp&&(Qp=!1,Z_(e));break;case 4:o=ss,ss=Yf(e.stateNode.containerInfo),$i(n,e),ta(e),ss=o;break;case 12:$i(n,e),ta(e);break;case 31:$i(n,e),ta(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lf(e,o)));break;case 13:$i(n,e),ta(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Of=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lf(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,st=Zs,_t=ri;if(Zs=st||u,ri=_t||V,$i(n,e),ri=_t,Zs=st,ta(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Zs||ri||Ao(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=V.stateNode;var Tt=V.memoizedProps.style,lt=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(se){fn(V,V.return,se)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(se){fn(V,V.return,se)}}}else if(n.tag===18){if(a===null){V=n;try{var dt=V.stateNode;u?Bv(dt,!0):Bv(V.stateNode,!1)}catch(se){fn(V,V.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Lf(e,a))));break;case 19:$i(n,e),ta(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lf(e,o)));break;case 30:break;case 21:break;default:$i(n,e),ta(e)}}function ta(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(H_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Zp(e);Nf(e,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ze(y,""),a.flags&=-33);var A=Zp(e);Nf(e,A,y);break;case 3:case 4:var V=a.stateNode.containerInfo,st=Zp(e);Kp(e,st,V);break;default:throw Error(s(161))}}catch(_t){fn(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Z_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Z_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qs(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)k_(e,n.alternate,n),n=n.sibling}function Ao(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Or(4,n,n.return),Ao(n);break;case 1:ws(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&B_(n,n.return,a),Ao(n);break;case 27:pu(n.stateNode);case 26:case 5:ws(n,n.return),Ao(n);break;case 22:n.memoizedState===null&&Ao(n);break;case 30:Ao(n);break;default:Ao(n)}e=e.sibling}}function Js(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Js(u,d,a),au(4,d);break;case 1:if(Js(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){fn(o,o.return,st)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Ag(V[u],A)}catch(st){fn(o,o.return,st)}}a&&y&64&&F_(d),su(d,d.return);break;case 27:G_(d);case 26:case 5:Js(u,d,a),a&&o===null&&y&4&&z_(d),su(d,d.return);break;case 12:Js(u,d,a);break;case 31:Js(u,d,a),a&&y&4&&Y_(u,d);break;case 13:Js(u,d,a),a&&y&4&&q_(u,d);break;case 22:d.memoizedState===null&&Js(u,d,a),su(d,d.return);break;case 30:break;default:Js(u,d,a)}n=n.sibling}}function Jp(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wc(a))}function $p(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wc(e))}function rs(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)K_(e,n,a,o),n=n.sibling}function K_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:rs(e,n,a,o),u&2048&&au(9,n);break;case 1:rs(e,n,a,o);break;case 3:rs(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wc(e)));break;case 12:if(u&2048){rs(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,y=d.id,A=d.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){fn(n,n.return,V)}}else rs(e,n,a,o);break;case 31:rs(e,n,a,o);break;case 13:rs(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?rs(e,n,a,o):ru(e,n):d._visibility&2?rs(e,n,a,o):(d._visibility|=2,Sl(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Jp(y,n);break;case 24:rs(e,n,a,o),u&2048&&$p(n.alternate,n);break;default:rs(e,n,a,o)}}function Sl(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,y=n,A=a,V=o,st=y.flags;switch(y.tag){case 0:case 11:case 15:Sl(d,y,A,V,u),au(8,y);break;case 23:break;case 22:var _t=y.stateNode;y.memoizedState!==null?_t._visibility&2?Sl(d,y,A,V,u):ru(d,y):(_t._visibility|=2,Sl(d,y,A,V,u)),u&&st&2048&&Jp(y.alternate,y);break;case 24:Sl(d,y,A,V,u),u&&st&2048&&$p(y.alternate,y);break;default:Sl(d,y,A,V,u)}n=n.sibling}}function ru(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ru(a,o),u&2048&&Jp(o.alternate,o);break;case 24:ru(a,o),u&2048&&$p(o.alternate,o);break;default:ru(a,o)}n=n.sibling}}var ou=8192;function Ml(e,n,a){if(e.subtreeFlags&ou)for(e=e.child;e!==null;)Q_(e,n,a),e=e.sibling}function Q_(e,n,a){switch(e.tag){case 26:Ml(e,n,a),e.flags&ou&&e.memoizedState!==null&&jM(a,ss,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,n,a);break;case 3:case 4:var o=ss;ss=Yf(e.stateNode.containerInfo),Ml(e,n,a),ss=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ou,ou=16777216,Ml(e,n,a),ou=o):Ml(e,n,a));break;default:Ml(e,n,a)}}function J_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bi=o,tv(o,e)}J_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$_(e),e=e.sibling}function $_(e){switch(e.tag){case 0:case 11:case 15:lu(e),e.flags&2048&&Or(9,e,e.return);break;case 3:lu(e);break;case 12:lu(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Uf(e)):lu(e);break;default:lu(e)}}function Uf(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bi=o,tv(o,e)}J_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Or(8,n,n.return),Uf(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Uf(n));break;default:Uf(n)}e=e.sibling}}function tv(e,n){for(;bi!==null;){var a=bi;switch(a.tag){case 0:case 11:case 15:Or(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Wc(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bi=o;else t:for(a=e;bi!==null;){o=bi;var u=o.sibling,d=o.return;if(X_(o),o===a){bi=null;break t}if(u!==null){u.return=d,bi=u;break t}bi=d}}}var cM={getCacheForType:function(e){var n=zn(ii),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return zn(ii).controller.signal}},uM=typeof WeakMap=="function"?WeakMap:Map,sn=0,Sn=null,ze=null,ke=0,un=0,ya=null,Ir=!1,El=!1,tm=!1,$s=0,Yn=0,Pr=0,Ro=0,em=0,Sa=0,bl=0,cu=null,ea=null,nm=!1,Of=0,ev=0,If=1/0,Pf=null,Fr=null,_i=0,Br=null,Tl=null,tr=0,im=0,am=null,nv=null,uu=0,sm=null;function Ma(){return(sn&2)!==0&&ke!==0?ke&-ke:U.T!==null?fm():En()}function iv(){if(Sa===0)if((ke&536870912)===0||Pe){var e=ht;ht<<=1,(ht&3932160)===0&&(ht=262144),Sa=e}else Sa=536870912;return e=va.current,e!==null&&(e.flags|=32),Sa}function na(e,n,a){(e===Sn&&(un===2||un===9)||e.cancelPendingCommit!==null)&&(Al(e,0),zr(e,ke,Sa,!1)),Nn(e,a),((sn&2)===0||e!==Sn)&&(e===Sn&&((sn&2)===0&&(Ro|=a),Yn===4&&zr(e,ke,Sa,!1)),Ds(e))}function av(e,n,a){if((sn&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=o?hM(e,n):om(e,n,!0),d=o;do{if(u===0){El&&!o&&zr(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!fM(a)){u=om(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=cu;var V=A.current.memoizedState.isDehydrated;if(V&&(Al(A,y).flags|=256),y=om(A,y,!1),y!==2){if(tm&&!V){A.errorRecoveryDisabledLanes|=d,Ro|=d,u=4;break t}d=ea,ea=u,d!==null&&(ea===null?ea=d:ea.push.apply(ea,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Al(e,0),zr(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:zr(o,n,Sa,!Ir);break t;case 2:ea=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Of+300-b(),10<u)){if(zr(o,n,Sa,!Ir),Z(o,0,!0)!==0)break t;tr=n,o.timeoutHandle=Iv(sv.bind(null,o,a,ea,Pf,nm,n,Sa,Ro,bl,Ir,d,"Throttled",-0,0),u);break t}sv(o,a,ea,Pf,nm,n,Sa,Ro,bl,Ir,d,null,-0,0)}}break}while(!0);Ds(e)}function sv(e,n,a,o,u,d,y,A,V,st,_t,Tt,lt,dt){if(e.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},Q_(n,d,Tt);var se=(d&62914560)===d?Of-b():(d&4194048)===d?ev-b():0;if(se=ZM(Tt,se),se!==null){tr=d,e.cancelPendingCommit=se(hv.bind(null,e,n,d,a,o,u,y,A,V,_t,Tt,null,lt,dt)),zr(e,d,y,!st);return}}hv(e,n,d,a,o,u,y,A,V)}function fM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Pi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zr(e,n,a,o){n&=~em,n&=~Ro,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Yt(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&Ka(e,a,n)}function Ff(){return(sn&6)===0?(fu(0),!1):!0}function rm(){if(ze!==null){if(un===0)var e=ze.return;else e=ze,Xn=Ln=null,Mp(e),gl=null,qc=0,e=ze;for(;e!==null;)P_(e.alternate,e),e=e.return;ze=null}}function Al(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,NM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),tr=0,rm(),Sn=e,ze=a=Te(e.current,null),ke=n,un=0,ya=null,Ir=!1,El=Ft(e,n),tm=!1,bl=Sa=em=Ro=Pr=Yn=0,ea=cu=null,nm=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Yt(o),d=1<<u;n|=e[u],o&=~d}return $s=n,_o(),a}function rv(e,n){Ae=null,U.H=eu,n===ml||n===df?(n=Mg(),un=3):n===up?(n=Mg(),un=4):un=n===Bp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ya=n,ze===null&&(Yn=1,Af(e,Vn(n,e.current)))}function ov(){var e=va.current;return e===null?!0:(ke&4194048)===ke?Ga===null:(ke&62914560)===ke||(ke&536870912)!==0?e===Ga:!1}function lv(){var e=U.H;return U.H=eu,e===null?eu:e}function cv(){var e=U.A;return U.A=cM,e}function Bf(){Yn=4,Ir||(ke&4194048)!==ke&&va.current!==null||(El=!0),(Pr&134217727)===0&&(Ro&134217727)===0||Sn===null||zr(Sn,ke,Sa,!1)}function om(e,n,a){var o=sn;sn|=2;var u=lv(),d=cv();(Sn!==e||ke!==n)&&(Pf=null,Al(e,n)),n=!1;var y=Yn;t:do try{if(un!==0&&ze!==null){var A=ze,V=ya;switch(un){case 8:rm(),y=6;break t;case 3:case 2:case 9:case 6:va.current===null&&(n=!0);var st=un;if(un=0,ya=null,Rl(e,A,V,st),a&&El){y=0;break t}break;default:st=un,un=0,ya=null,Rl(e,A,V,st)}}dM(),y=Yn;break}catch(_t){rv(e,_t)}while(!0);return n&&e.shellSuspendCounter++,Xn=Ln=null,sn=o,U.H=u,U.A=d,ze===null&&(Sn=null,ke=0,_o()),y}function dM(){for(;ze!==null;)uv(ze)}function hM(e,n){var a=sn;sn|=2;var o=lv(),u=cv();Sn!==e||ke!==n?(Pf=null,If=b()+500,Al(e,n)):El=Ft(e,n);t:do try{if(un!==0&&ze!==null){n=ze;var d=ya;e:switch(un){case 1:un=0,ya=null,Rl(e,n,d,1);break;case 2:case 9:if(yg(d)){un=0,ya=null,fv(n);break}n=function(){un!==2&&un!==9||Sn!==e||(un=7),Ds(e)},d.then(n,n);break t;case 3:un=7;break t;case 4:un=5;break t;case 7:yg(d)?(un=0,ya=null,fv(n)):(un=0,ya=null,Rl(e,n,d,7));break;case 5:var y=null;switch(ze.tag){case 26:y=ze.memoizedState;case 5:case 27:var A=ze;if(y?Kv(y):A.stateNode.complete){un=0,ya=null;var V=A.sibling;if(V!==null)ze=V;else{var st=A.return;st!==null?(ze=st,zf(st)):ze=null}break e}}un=0,ya=null,Rl(e,n,d,5);break;case 6:un=0,ya=null,Rl(e,n,d,6);break;case 8:rm(),Yn=6;break t;default:throw Error(s(462))}}pM();break}catch(_t){rv(e,_t)}while(!0);return Xn=Ln=null,U.H=o,U.A=u,sn=a,ze!==null?0:(Sn=null,ke=0,_o(),Yn)}function pM(){for(;ze!==null&&!ie();)uv(ze)}function uv(e){var n=O_(e.alternate,e,$s);e.memoizedProps=e.pendingProps,n===null?zf(e):ze=n}function fv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=C_(a,n,n.pendingProps,n.type,void 0,ke);break;case 11:n=C_(a,n,n.pendingProps,n.type.render,n.ref,ke);break;case 5:Mp(n);default:P_(a,n),n=ze=Zn(n,$s),n=O_(a,n,$s)}e.memoizedProps=e.pendingProps,n===null?zf(e):ze=n}function Rl(e,n,a,o){Xn=Ln=null,Mp(n),gl=null,qc=0;var u=n.return;try{if(nM(e,u,n,a,ke)){Yn=1,Af(e,Vn(a,e.current)),ze=null;return}}catch(d){if(u!==null)throw ze=u,d;Yn=1,Af(e,Vn(a,e.current)),ze=null;return}n.flags&32768?(Pe||o===1?e=!0:El||(ke&536870912)!==0?e=!1:(Ir=e=!0,(o===2||o===9||o===3||o===6)&&(o=va.current,o!==null&&o.tag===13&&(o.flags|=16384))),dv(n,e)):zf(n)}function zf(e){var n=e;do{if((n.flags&32768)!==0){dv(n,Ir);return}e=n.return;var a=sM(n.alternate,n,$s);if(a!==null){ze=a;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);Yn===0&&(Yn=5)}function dv(e,n){do{var a=rM(e.alternate,e);if(a!==null){a.flags&=32767,ze=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ze=e;return}ze=e=a}while(e!==null);Yn=6,ze=null}function hv(e,n,a,o,u,d,y,A,V){e.cancelPendingCommit=null;do Hf();while(_i!==0);if((sn&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=go,Si(e,a,d,y,A,V),e===Sn&&(ze=Sn=null,ke=0),Tl=n,Br=e,tr=a,im=d,am=u,nv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vM(mt,function(){return vv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=P.p,P.p=2,y=sn,sn|=4;try{oM(e,n,a)}finally{sn=y,P.p=u,U.T=o}}_i=1,pv(),mv(),gv()}}function pv(){if(_i===1){_i=0;var e=Br,n=Tl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=P.p;P.p=2;var u=sn;sn|=4;try{j_(n,e);var d=xm,y=Oc(e.containerInfo),A=d.focusedElem,V=d.selectionRange;if(y!==A&&A&&A.ownerDocument&&Uc(A.ownerDocument.documentElement,A)){if(V!==null&&Fa(A)){var st=V.start,_t=V.end;if(_t===void 0&&(_t=st),"selectionStart"in A)A.selectionStart=st,A.selectionEnd=Math.min(_t,A.value.length);else{var Tt=A.ownerDocument||document,lt=Tt&&Tt.defaultView||window;if(lt.getSelection){var dt=lt.getSelection(),se=A.textContent.length,me=Math.min(V.start,se),gn=V.end===void 0?me:Math.min(V.end,se);!dt.extend&&me>gn&&(y=gn,gn=me,me=y);var $=ol(A,me),W=ol(A,gn);if($&&W&&(dt.rangeCount!==1||dt.anchorNode!==$.node||dt.anchorOffset!==$.offset||dt.focusNode!==W.node||dt.focusOffset!==W.offset)){var at=Tt.createRange();at.setStart($.node,$.offset),dt.removeAllRanges(),me>gn?(dt.addRange(at),dt.extend(W.node,W.offset)):(at.setEnd(W.node,W.offset),dt.addRange(at))}}}}for(Tt=[],dt=A;dt=dt.parentNode;)dt.nodeType===1&&Tt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Tt.length;A++){var Mt=Tt[A];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}Jf=!!vm,xm=vm=null}finally{sn=u,P.p=o,U.T=a}}e.current=n,_i=2}}function mv(){if(_i===2){_i=0;var e=Br,n=Tl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=P.p;P.p=2;var u=sn;sn|=4;try{k_(e,n.alternate,n)}finally{sn=u,P.p=o,U.T=a}}_i=3}}function gv(){if(_i===4||_i===3){_i=0,O();var e=Br,n=Tl,a=tr,o=nv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_i=5:(_i=0,Tl=Br=null,_v(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Fr=null),Qa(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Nt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=P.p,P.p=2,U.T=null;try{for(var d=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];d(A.value,{componentStack:A.stack})}}finally{U.T=n,P.p=u}}(tr&3)!==0&&Hf(),Ds(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===sm?uu++:(uu=0,sm=e):uu=0,fu(0)}}function _v(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wc(n)))}function Hf(){return pv(),mv(),gv(),vv()}function vv(){if(_i!==5)return!1;var e=Br,n=im;im=0;var a=Qa(tr),o=U.T,u=P.p;try{P.p=32>a?32:a,U.T=null,a=am,am=null;var d=Br,y=tr;if(_i=0,Tl=Br=null,tr=0,(sn&6)!==0)throw Error(s(331));var A=sn;if(sn|=4,$_(d.current),K_(d,d.current,y,a),sn=A,fu(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Nt,d)}catch{}return!0}finally{P.p=u,U.T=o,_v(e,n)}}function xv(e,n,a){n=Vn(a,n),n=Fp(e.stateNode,n,2),e=Nr(e,n,2),e!==null&&(Nn(e,2),Ds(e))}function fn(e,n,a){if(e.tag===3)xv(e,e,a);else for(;n!==null;){if(n.tag===3){xv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fr===null||!Fr.has(o))){e=Vn(a,e),a=y_(2),o=Nr(n,a,2),o!==null&&(S_(a,o,n,e),Nn(o,2),Ds(o));break}}n=n.return}}function lm(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new uM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(tm=!0,u.add(a),e=mM.bind(null,e,n,a),n.then(e,e))}function mM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Sn===e&&(ke&a)===a&&(Yn===4||Yn===3&&(ke&62914560)===ke&&300>b()-Of?(sn&2)===0&&Al(e,0):em|=a,bl===ke&&(bl=0)),Ds(e)}function yv(e,n){n===0&&(n=Xt()),e=It(e,n),e!==null&&(Nn(e,n),Ds(e))}function gM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),yv(e,a)}function _M(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),yv(e,a)}function vM(e,n){return we(e,n)}var Gf=null,Cl=null,cm=!1,Vf=!1,um=!1,Hr=0;function Ds(e){e!==Cl&&e.next===null&&(Cl===null?Gf=Cl=e:Cl=Cl.next=e),Vf=!0,cm||(cm=!0,yM())}function fu(e,n){if(!um&&Vf){um=!0;do for(var a=!1,o=Gf;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Yt(42|e)+1)-1,d&=u&~(y&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,bv(o,d))}else d=ke,d=Z(o,o===Sn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ft(o,d)||(a=!0,bv(o,d));o=o.next}while(a);um=!1}}function xM(){Sv()}function Sv(){Vf=cm=!1;var e=0;Hr!==0&&DM()&&(e=Hr);for(var n=b(),a=null,o=Gf;o!==null;){var u=o.next,d=Mv(o,n);d===0?(o.next=null,a===null?Gf=u:a.next=u,u===null&&(Cl=a)):(a=o,(e!==0||(d&3)!==0)&&(Vf=!0)),o=u}_i!==0&&_i!==5||fu(e),Hr!==0&&(Hr=0)}function Mv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Yt(d),A=1<<y,V=u[y];V===-1?((A&a)===0||(A&o)!==0)&&(u[y]=Et(A,n)):V<=n&&(e.expiredLanes|=A),d&=~A}if(n=Sn,a=ke,a=Z(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(un===2||un===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&tn(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&tn(o),Qa(a)){case 2:case 8:a=Rt;break;case 32:a=mt;break;case 268435456:a=Pt;break;default:a=mt}return o=Ev.bind(null,e),a=we(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&tn(o),e.callbackPriority=2,e.callbackNode=null,2}function Ev(e,n){if(_i!==0&&_i!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hf()&&e.callbackNode!==a)return null;var o=ke;return o=Z(e,e===Sn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(av(e,o,n),Mv(e,b()),e.callbackNode!=null&&e.callbackNode===a?Ev.bind(null,e):null)}function bv(e,n){if(Hf())return null;av(e,n,!0)}function yM(){LM(function(){(sn&6)!==0?we(vt,xM):Sv()})}function fm(){if(Hr===0){var e=hl;e===0&&(e=xt,xt<<=1,(xt&261888)===0&&(xt=256)),Hr=e}return Hr}function Tv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ua(""+e)}function Av(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function SM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Tv((u[qe]||null).action),y=o.submitter;y&&(n=(n=y[qe]||null)?Tv(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var A=new da("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Hr!==0){var V=y?Av(u,y):new FormData(u);Np(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(A.preventDefault(),V=y?Av(u,y):new FormData(u),Np(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var dm=0;dm<fl.length;dm++){var hm=fl[dm],MM=hm.toLowerCase(),EM=hm[0].toUpperCase()+hm.slice(1);Ki(MM,"on"+EM)}Ki(mo,"onAnimationEnd"),Ki(Bc,"onAnimationIteration"),Ki(zc,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(uf,"onTransitionRun"),Ki(Er,"onTransitionStart"),Ki(br,"onTransitionCancel"),Ki(Hc,"onTransitionEnd"),Vt("onMouseEnter",["mouseout","mouseover"]),Vt("onMouseLeave",["mouseout","mouseover"]),Vt("onPointerEnter",["pointerout","pointerover"]),Vt("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));function Rv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],V=A.instance,st=A.currentTarget;if(A=A.listener,V!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=st;try{d(u)}catch(_t){Tr(_t)}u.currentTarget=null,d=V}else for(y=0;y<o.length;y++){if(A=o[y],V=A.instance,st=A.currentTarget,A=A.listener,V!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=st;try{d(u)}catch(_t){Tr(_t)}u.currentTarget=null,d=V}}}}function He(e,n){var a=n[Ri];a===void 0&&(a=n[Ri]=new Set);var o=e+"__bubble";a.has(o)||(Cv(n,e,2,!1),a.add(o))}function pm(e,n,a){var o=0;n&&(o|=4),Cv(a,e,o,n)}var kf="_reactListening"+Math.random().toString(36).slice(2);function mm(e){if(!e[kf]){e[kf]=!0,ft.forEach(function(a){a!=="selectionchange"&&(bM.has(a)||pm(a,!1,e),pm(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kf]||(n[kf]=!0,pm("selectionchange",!1,n))}}function Cv(e,n,a,o){switch(ix(n)){case 2:var u=JM;break;case 8:u=$M;break;default:u=Dm}a=u.bind(null,n,a,e),u=void 0,!mc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function gm(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=oa(A),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=d=y;continue t}A=A.parentNode}}o=o.return}tf(function(){var st=d,_t=hc(a),Tt=[];t:{var lt=Gc.get(e);if(lt!==void 0){var dt=da,se=e;switch(e){case"keypress":if(In(a)===0)break t;case"keydown":case"keyup":dt=Jo;break;case"focusin":se="focus",dt=ts;break;case"focusout":se="blur",dt=ts;break;case"beforeblur":case"afterblur":dt=ts;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Hs;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=af;break;case mo:case Bc:case zc:dt=Ko;break;case Hc:dt=tl;break;case"scroll":case"scrollend":dt=ys;break;case"wheel":dt=yc;break;case"copy":case"cut":case"paste":dt=Ms;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=$o;break;case"toggle":case"beforetoggle":dt=sf}var me=(n&4)!==0,gn=!me&&(e==="scroll"||e==="scrollend"),$=me?lt!==null?lt+"Capture":null:lt;me=[];for(var W=st,at;W!==null;){var Mt=W;if(at=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||at===null||$===null||(Mt=lo(W,$),Mt!=null&&me.push(hu(W,Mt,at))),gn)break;W=W.return}0<me.length&&(lt=new dt(lt,se,null,a,_t),Tt.push({event:lt,listeners:me}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",lt&&a!==fa&&(se=a.relatedTarget||a.fromElement)&&(oa(se)||se[Mi]))break t;if((dt||lt)&&(lt=_t.window===_t?_t:(lt=_t.ownerDocument)?lt.defaultView||lt.parentWindow:window,dt?(se=a.relatedTarget||a.toElement,dt=st,se=se?oa(se):null,se!==null&&(gn=c(se),me=se.tag,se!==gn||me!==5&&me!==27&&me!==6)&&(se=null)):(dt=null,se=st),dt!==se)){if(me=Oa,Mt="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(me=$o,Mt="onPointerLeave",$="onPointerEnter",W="pointer"),gn=dt==null?lt:Da(dt),at=se==null?lt:Da(se),lt=new me(Mt,W+"leave",dt,a,_t),lt.target=gn,lt.relatedTarget=at,Mt=null,oa(_t)===st&&(me=new me($,W+"enter",se,a,_t),me.target=at,me.relatedTarget=gn,Mt=me),gn=Mt,dt&&se)e:{for(me=TM,$=dt,W=se,at=0,Mt=$;Mt;Mt=me(Mt))at++;Mt=0;for(var ue=W;ue;ue=me(ue))Mt++;for(;0<at-Mt;)$=me($),at--;for(;0<Mt-at;)W=me(W),Mt--;for(;at--;){if($===W||W!==null&&$===W.alternate){me=$;break e}$=me($),W=me(W)}me=null}else me=null;dt!==null&&wv(Tt,lt,dt,me,!1),se!==null&&gn!==null&&wv(Tt,gn,se,me,!0)}}t:{if(lt=st?Da(st):window,dt=lt.nodeName&&lt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&lt.type==="file")var nn=Ac;else if(Mr(lt))if(Rc)nn=rl;else{nn=Dc;var oe=sl}else dt=lt.nodeName,!dt||dt.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&Ui(st.elementType)&&(nn=Ac):nn=Nc;if(nn&&(nn=nn(e,st))){nl(Tt,nn,a,_t);break t}oe&&oe(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&Ci(lt,"number",lt.value)}switch(oe=st?Da(st):window,e){case"focusin":(Mr(oe)||oe.contentEditable==="true")&&(Vs=oe,ll=st,pa=null);break;case"focusout":pa=ll=Vs=null;break;case"mousedown":cl=!0;break;case"contextmenu":case"mouseup":case"dragend":cl=!1,Pc(Tt,a,_t);break;case"selectionchange":if(Ic)break;case"keydown":case"keyup":Pc(Tt,a,_t)}var Ne;if(yr)t:{switch(e){case"compositionstart":var Xe="onCompositionStart";break t;case"compositionend":Xe="onCompositionEnd";break t;case"compositionupdate":Xe="onCompositionUpdate";break t}Xe=void 0}else bs?Ec(e,a)&&(Xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Xe="onCompositionStart");Xe&&(of&&a.locale!=="ko"&&(bs||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&bs&&(Ne=gc()):(vs=_t,xs="value"in vs?vs.value:vs.textContent,bs=!0)),oe=Xf(st,Xe),0<oe.length&&(Xe=new _c(Xe,e,null,a,_t),Tt.push({event:Xe,listeners:oe}),Ne?Xe.data=Ne:(Ne=el(a),Ne!==null&&(Xe.data=Ne)))),(Ne=sp?Sr(e,a):lf(e,a))&&(Xe=Xf(st,"onBeforeInput"),0<Xe.length&&(oe=new _c("onBeforeInput","beforeinput",null,a,_t),Tt.push({event:oe,listeners:Xe}),oe.data=Ne)),SM(Tt,e,st,a,_t)}Rv(Tt,n)})}function hu(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xf(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=lo(e,a),u!=null&&o.unshift(hu(e,u,d)),u=lo(e,n),u!=null&&o.push(hu(e,u,d))),e.tag===3)return o;e=e.return}return[]}function TM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wv(e,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var A=a,V=A.alternate,st=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||st===null||(V=st,u?(st=lo(a,d),st!=null&&y.unshift(hu(a,st,V))):u||(st=lo(a,d),st!=null&&y.push(hu(a,st,V)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var AM=/\r\n?/g,RM=/\u0000|\uFFFD/g;function Dv(e){return(typeof e=="string"?e:""+e).replace(AM,`
`).replace(RM,"")}function Nv(e,n){return n=Dv(n),Dv(e)===n}function mn(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ze(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ze(e,""+o);break;case"className":_e(e,"class",o);break;case"tabIndex":_e(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(e,a,o);break;case"style":La(e,o,d);break;case"data":if(n!=="object"){_e(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ua(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&mn(e,n,"name",u.name,u,null),mn(e,n,"formEncType",u.formEncType,u,null),mn(e,n,"formMethod",u.formMethod,u,null),mn(e,n,"formTarget",u.formTarget,u,null)):(mn(e,n,"encType",u.encType,u,null),mn(e,n,"method",u.method,u,null),mn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ua(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ua);break;case"onScroll":o!=null&&He("scroll",e);break;case"onScrollEnd":o!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ua(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":He("beforetoggle",e),He("toggle",e),he(e,"popover",o);break;case"xlinkActuate":ee(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ee(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ee(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ee(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ee(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ee(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ee(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ee(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ee(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":he(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mr.get(a)||a,he(e,a,o))}}function _m(e,n,a,o,u,d){switch(a){case"style":La(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ze(e,o):(typeof o=="number"||typeof o=="bigint")&&Ze(e,""+o);break;case"onScroll":o!=null&&He("scroll",e);break;case"onScrollEnd":o!=null&&He("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[qe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):he(e,a,o)}}}function Li(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:mn(e,n,d,y,a,null)}}u&&mn(e,n,"srcSet",a.srcSet,a,null),o&&mn(e,n,"src",a.src,a,null);return;case"input":He("invalid",e);var A=d=y=u=null,V=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":y=_t;break;case"checked":V=_t;break;case"defaultChecked":st=_t;break;case"value":d=_t;break;case"defaultValue":A=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:mn(e,n,o,_t,a,null)}}Tn(e,d,A,V,st,y,u,!1);return;case"select":He("invalid",e),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:mn(e,n,u,A,a,null)}n=d,a=y,e.multiple=!!o,n!=null?fi(e,!!o,n,!1):a!=null&&fi(e,!!o,a,!0);return;case"textarea":He("invalid",e),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:mn(e,n,y,A,a,null)}On(e,o,u,d);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":mn(e,n,V,o,a,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(o=0;o<du.length;o++)He(du[o],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:mn(e,n,st,o,a,null)}return;default:if(Ui(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&_m(e,n,_t,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&mn(e,n,A,o,a,null))}function CM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,A=null,V=null,st=null,_t=null;for(dt in a){var Tt=a[dt];if(a.hasOwnProperty(dt)&&Tt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":V=Tt;default:o.hasOwnProperty(dt)||mn(e,n,dt,null,o,Tt)}}for(var lt in o){var dt=o[lt];if(Tt=a[lt],o.hasOwnProperty(lt)&&(dt!=null||Tt!=null))switch(lt){case"type":d=dt;break;case"name":u=dt;break;case"checked":st=dt;break;case"defaultChecked":_t=dt;break;case"value":y=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==Tt&&mn(e,n,lt,dt,o,Tt)}}ui(e,y,A,V,st,_t,d,u);return;case"select":dt=y=A=lt=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":dt=V;default:o.hasOwnProperty(d)||mn(e,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":lt=d;break;case"defaultValue":A=d;break;case"multiple":y=d;default:d!==V&&mn(e,n,u,d,o,V)}n=A,a=y,o=dt,lt!=null?fi(e,!!a,lt,!1):!!o!=!!a&&(n!=null?fi(e,!!a,n,!0):fi(e,!!a,a?[]:"",!1));return;case"textarea":dt=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:mn(e,n,A,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":lt=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&mn(e,n,y,u,o,d)}je(e,lt,dt);return;case"option":for(var se in a)lt=a[se],a.hasOwnProperty(se)&&lt!=null&&!o.hasOwnProperty(se)&&(se==="selected"?e.selected=!1:mn(e,n,se,null,o,lt));for(V in o)lt=o[V],dt=a[V],o.hasOwnProperty(V)&&lt!==dt&&(lt!=null||dt!=null)&&(V==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":mn(e,n,V,lt,o,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)lt=a[me],a.hasOwnProperty(me)&&lt!=null&&!o.hasOwnProperty(me)&&mn(e,n,me,null,o,lt);for(st in o)if(lt=o[st],dt=a[st],o.hasOwnProperty(st)&&lt!==dt&&(lt!=null||dt!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:mn(e,n,st,lt,o,dt)}return;default:if(Ui(n)){for(var gn in a)lt=a[gn],a.hasOwnProperty(gn)&&lt!==void 0&&!o.hasOwnProperty(gn)&&_m(e,n,gn,void 0,o,lt);for(_t in o)lt=o[_t],dt=a[_t],!o.hasOwnProperty(_t)||lt===dt||lt===void 0&&dt===void 0||_m(e,n,_t,lt,o,dt);return}}for(var $ in a)lt=a[$],a.hasOwnProperty($)&&lt!=null&&!o.hasOwnProperty($)&&mn(e,n,$,null,o,lt);for(Tt in o)lt=o[Tt],dt=a[Tt],!o.hasOwnProperty(Tt)||lt===dt||lt==null&&dt==null||mn(e,n,Tt,lt,o,dt)}function Lv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,A=u.duration;if(d&&A&&Lv(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],st=V.startTime;if(st>A)break;var _t=V.transferSize,Tt=V.initiatorType;_t&&Lv(Tt)&&(V=V.responseEnd,y+=_t*(V<A?1:(A-st)/(V-st)))}if(--o,n+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vm=null,xm=null;function Wf(e){return e.nodeType===9?e:e.ownerDocument}function Uv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ov(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ym(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sm=null;function DM(){var e=window.event;return e&&e.type==="popstate"?e===Sm?!1:(Sm=e,!0):(Sm=null,!1)}var Iv=typeof setTimeout=="function"?setTimeout:void 0,NM=typeof clearTimeout=="function"?clearTimeout:void 0,Pv=typeof Promise=="function"?Promise:void 0,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof Pv<"u"?function(e){return Pv.resolve(null).then(e).catch(UM)}:Iv;function UM(e){setTimeout(function(){throw e})}function Gr(e){return e==="head"}function Fv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Ll(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")pu(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pu(a);for(var d=a.firstChild;d;){var y=d.nextSibling,A=d.nodeName;d[Fs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&pu(e.ownerDocument.body);a=u}while(a);Ll(n)}function Bv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Mm(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mm(a),_s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function OM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Fs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Va(e.nextSibling),e===null)break}return null}function IM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Va(e.nextSibling),e===null))return null;return e}function zv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Va(e.nextSibling),e===null))return null;return e}function Em(e){return e.data==="$?"||e.data==="$~"}function bm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Va(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Tm=null;function Hv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Va(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Gv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Vv(e,n,a){switch(n=Wf(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pu(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);_s(e)}var ka=new Map,kv=new Set;function Yf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var er=P.d;P.d={f:FM,r:BM,D:zM,C:HM,L:GM,m:VM,X:XM,S:kM,M:WM};function FM(){var e=er.f(),n=Ff();return e||n}function BM(e){var n=la(e);n!==null&&n.tag===5&&n.type==="form"?r_(n):er.r(e)}var wl=typeof document>"u"?null:document;function Xv(e,n,a){var o=wl;if(o&&typeof n=="string"&&n){var u=ge(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),kv.has(u)||(kv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Li(n,"link",e),Y(n),o.head.appendChild(n)))}}function zM(e){er.D(e),Xv("dns-prefetch",e,null)}function HM(e,n){er.C(e,n),Xv("preconnect",e,n)}function GM(e,n,a){er.L(e,n,a);var o=wl;if(o&&e&&n){var u='link[rel="preload"][as="'+ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ge(a.imageSizes)+'"]')):u+='[href="'+ge(e)+'"]';var d=u;switch(n){case"style":d=Dl(e);break;case"script":d=Nl(e)}ka.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ka.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(mu(d))||n==="script"&&o.querySelector(gu(d))||(n=o.createElement("link"),Li(n,"link",e),Y(n),o.head.appendChild(n)))}}function VM(e,n){er.m(e,n);var a=wl;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ge(o)+'"][href="'+ge(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Nl(e)}if(!ka.has(d)&&(e=v({rel:"modulepreload",href:e},n),ka.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gu(d)))return}o=a.createElement("link"),Li(o,"link",e),Y(o),a.head.appendChild(o)}}}function kM(e,n,a){er.S(e,n,a);var o=wl;if(o&&e){var u=R(o).hoistableStyles,d=Dl(e);n=n||"default";var y=u.get(d);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(mu(d)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ka.get(d))&&Am(e,a);var V=y=o.createElement("link");Y(V),Li(V,"link",e),V._p=new Promise(function(st,_t){V.onload=st,V.onerror=_t}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,qf(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(d,y)}}}function XM(e,n){er.X(e,n);var a=wl;if(a&&e){var o=R(a).hoistableScripts,u=Nl(e),d=o.get(u);d||(d=a.querySelector(gu(u)),d||(e=v({src:e,async:!0},n),(n=ka.get(u))&&Rm(e,n),d=a.createElement("script"),Y(d),Li(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function WM(e,n){er.M(e,n);var a=wl;if(a&&e){var o=R(a).hoistableScripts,u=Nl(e),d=o.get(u);d||(d=a.querySelector(gu(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=ka.get(u))&&Rm(e,n),d=a.createElement("script"),Y(d),Li(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Wv(e,n,a,o){var u=(u=it.current)?Yf(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Dl(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Dl(a.href);var d=R(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(mu(e)))&&!d._p&&(y.instance=d,y.state.loading=5),ka.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ka.set(e,a),d||YM(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nl(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Dl(e){return'href="'+ge(e)+'"'}function mu(e){return'link[rel="stylesheet"]['+e+"]"}function Yv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function YM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Li(n,"link",a),Y(n),e.head.appendChild(n))}function Nl(e){return'[src="'+ge(e)+'"]'}function gu(e){return"script[async]"+e}function qv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ge(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),Li(o,"style",u),qf(o,a.precedence,e),n.instance=o;case"stylesheet":u=Dl(a.href);var d=e.querySelector(mu(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=Yv(a),(u=ka.get(u))&&Am(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var y=d;return y._p=new Promise(function(A,V){y.onload=A,y.onerror=V}),Li(d,"link",o),n.state.loading|=4,qf(d,a.precedence,e),n.instance=d;case"script":return d=Nl(a.src),(u=e.querySelector(gu(d)))?(n.instance=u,Y(u),u):(o=a,(u=ka.get(d))&&(o=v({},a),Rm(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),Li(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,qf(o,a.precedence,e));return n.instance}function qf(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Am(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Rm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jf=null;function jv(e,n,a){if(jf===null){var o=new Map,u=jf=new Map;u.set(a,o)}else u=jf,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Fs]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(d):o.set(y,[d])}}return o}function Zv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function qM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Kv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Dl(o.href),d=n.querySelector(mu(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zf.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=Yv(o),(u=ka.get(u))&&Am(o,u),d=d.createElement("link"),Y(d);var y=d;y._p=new Promise(function(A,V){y.onload=A,y.onerror=V}),Li(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zf.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Cm=0;function ZM(e,n){return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Cm===0&&(Cm=62500*wM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Cm?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Zf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kf=null;function Qf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kf=new Map,n.forEach(KM,e),Kf=null,Zf.call(e))}function KM(e,n){if(!(n.state.loading&4)){var a=Kf.get(e);if(a)var o=a.get(null);else{a=new Map,Kf.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=Zf.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var _u={$$typeof:L,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function QM(e,n,a,o,u,d,y,A,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.hiddenUpdates=Gt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Qv(e,n,a,o,u,d,y,A,V,st,_t,Tt){return e=new QM(e,n,a,y,V,st,_t,Tt,A),n=1,d===!0&&(n|=24),d=Kt(3,null,null,n),e.current=d,d.stateNode=e,n=op(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},fp(d),e}function Jv(e){return e?(e=Ot,e):Ot}function $v(e,n,a,o,u,d){u=Jv(u),o.context===null?o.context=u:o.pendingContext=u,o=Dr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Nr(e,o,n),a!==null&&(na(a,e,n),Zc(a,e,n))}function tx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function wm(e,n){tx(e,n),(e=e.alternate)&&tx(e,n)}function ex(e){if(e.tag===13||e.tag===31){var n=It(e,67108864);n!==null&&na(n,e,67108864),wm(e,67108864)}}function nx(e){if(e.tag===13||e.tag===31){var n=Ma();n=ni(n);var a=It(e,n);a!==null&&na(a,e,n),wm(e,n)}}var Jf=!0;function JM(e,n,a,o){var u=U.T;U.T=null;var d=P.p;try{P.p=2,Dm(e,n,a,o)}finally{P.p=d,U.T=u}}function $M(e,n,a,o){var u=U.T;U.T=null;var d=P.p;try{P.p=8,Dm(e,n,a,o)}finally{P.p=d,U.T=u}}function Dm(e,n,a,o){if(Jf){var u=Nm(o);if(u===null)gm(e,n,o,$f,a),ax(e,o);else if(eE(u,e,n,a,o))o.stopPropagation();else if(ax(e,o),n&4&&-1<tE.indexOf(e)){for(;u!==null;){var d=la(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=bt(d.pendingLanes);if(y!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var V=1<<31-Yt(y);A.entanglements[1]|=V,y&=~V}Ds(d),(sn&6)===0&&(If=b()+500,fu(0))}}break;case 31:case 13:A=It(d,2),A!==null&&na(A,d,2),Ff(),wm(d,2)}if(d=Nm(o),d===null&&gm(e,n,o,$f,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else gm(e,n,o,null,a)}}function Nm(e){return e=hc(e),Lm(e)}var $f=null;function Lm(e){if($f=null,e=oa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $f=e,null}function ix(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case vt:return 2;case Rt:return 8;case mt:case ne:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var Um=!1,Vr=null,kr=null,Xr=null,vu=new Map,xu=new Map,Wr=[],tE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ax(e,n){switch(e){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":vu.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xu.delete(n.pointerId)}}function yu(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=la(n),n!==null&&ex(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function eE(e,n,a,o,u){switch(n){case"focusin":return Vr=yu(Vr,e,n,a,o,u),!0;case"dragenter":return kr=yu(kr,e,n,a,o,u),!0;case"mouseover":return Xr=yu(Xr,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return vu.set(d,yu(vu.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,xu.set(d,yu(xu.get(d)||null,e,n,a,o,u)),!0}return!1}function sx(e){var n=oa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ra(e.priority,function(){nx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,ra(e.priority,function(){nx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function td(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Nm(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);fa=o,a.target.dispatchEvent(o),fa=null}else return n=la(a),n!==null&&ex(n),e.blockedOn=a,!1;n.shift()}return!0}function rx(e,n,a){td(e)&&a.delete(n)}function nE(){Um=!1,Vr!==null&&td(Vr)&&(Vr=null),kr!==null&&td(kr)&&(kr=null),Xr!==null&&td(Xr)&&(Xr=null),vu.forEach(rx),xu.forEach(rx)}function ed(e,n){e.blockedOn===n&&(e.blockedOn=null,Um||(Um=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,nE)))}var nd=null;function ox(e){nd!==e&&(nd=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){nd===e&&(nd=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Lm(o||a)===null)continue;break}var d=la(a);d!==null&&(e.splice(n,3),n-=3,Np(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ll(e){function n(V){return ed(V,e)}Vr!==null&&ed(Vr,e),kr!==null&&ed(kr,e),Xr!==null&&ed(Xr,e),vu.forEach(n),xu.forEach(n);for(var a=0;a<Wr.length;a++){var o=Wr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Wr.length&&(a=Wr[0],a.blockedOn===null);)sx(a),a.blockedOn===null&&Wr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[qe]||null;if(typeof d=="function")y||ox(a);else if(y){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[qe]||null)A=y.formAction;else if(Lm(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),ox(a)}}}function lx(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Om(e){this._internalRoot=e}id.prototype.render=Om.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Ma();$v(a,o,e,n,null,null)},id.prototype.unmount=Om.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$v(e.current,2,null,e,null,null),Ff(),n[Mi]=null}};function id(e){this._internalRoot=e}id.prototype.unstable_scheduleHydration=function(e){if(e){var n=En();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Wr.length&&n!==0&&n<Wr[a].priority;a++);Wr.splice(a,0,e),a===0&&sx(e)}};var cx=t.version;if(cx!=="19.2.4")throw Error(s(527,cx,"19.2.4"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var iE={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ad=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ad.isDisabled&&ad.supportsFiber)try{Nt=ad.inject(iE),wt=ad}catch{}}return Mu.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=g_,d=__,y=v_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Qv(e,1,!1,null,null,a,o,null,u,d,y,lx),e[Mi]=n.current,mm(e),new Om(n)},Mu.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=g_,y=__,A=v_,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Qv(e,1,!0,n,a??null,o,u,V,d,y,A,lx),n.context=Jv(null),a=n.current,o=Ma(),o=ni(o),u=Dr(o),u.callback=null,Nr(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Ds(n),e[Mi]=n.current,mm(e),new id(n)},Mu.version="19.2.4",Mu}var xx;function hE(){if(xx)return Fm.exports;xx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Fm.exports=dE(),Fm.exports}var pE=hE();const Lh="183",Cy=0,T0=1,wy=2,Dy=0,Go=1,Ny=2,$l=3,hr=0,Hi=1,qn=2,Os=0,Vo=1,A0=2,R0=3,C0=4,Ly=5,eo=100,Uy=101,Oy=102,Iy=103,Py=104,Fy=200,By=201,zy=202,Hy=203,kd=204,Xd=205,Gy=206,Vy=207,ky=208,Xy=209,Wy=210,Yy=211,qy=212,jy=213,Zy=214,Wd=0,Yd=1,qd=2,ko=3,jd=4,Zd=5,Kd=6,Qd=7,Uh=0,Ky=1,Qy=2,hs=0,V0=1,k0=2,X0=3,Oh=4,W0=5,Y0=6,q0=7,j0=300,so=301,Xo=302,Pd=303,Fd=304,Ju=306,nc=1e3,Us=1001,Jd=1002,Ai=1003,Jy=1004,Pu=1005,jn=1006,Bd=1007,fr=1008,aa=1009,Z0=1010,K0=1011,ic=1012,Ih=1013,ms=1014,qa=1015,Is=1016,Ph=1017,Fh=1018,ac=1020,Q0=35902,J0=35899,$0=1021,tg=1022,ja=1023,Ps=1026,io=1027,Bh=1028,zh=1029,Wo=1030,Hh=1031,Gh=1033,Hu=33776,Gu=33777,Vu=33778,ku=33779,$d=35840,th=35841,eh=35842,nh=35843,ih=36196,ah=37492,sh=37496,rh=37488,oh=37489,lh=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,_h=37815,vh=37816,xh=37817,yh=37818,Sh=37819,Mh=37820,Eh=37821,bh=36492,Th=36494,Ah=36495,Rh=36283,Ch=36284,wh=36285,Dh=36286,$y=3200,Vh=0,tS=1,ur="",ei="srgb",Yo="srgb-linear",Yu="linear",ln="srgb",Fo=7680,w0=519,eS=512,nS=513,iS=514,kh=515,aS=516,sS=517,Xh=518,rS=519,D0=35044,N0="300 es",ds=2e3,sc=2001;function mE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oS(){const r=qu("canvas");return r.style.display="block",r}const yx={};function L0(...r){const t="THREE."+r.shift();console.log(t,...r)}function lS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ve(...r){r=lS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ke(...r){r=lS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function ju(...r){const t=r.join(" ");t in yx||(yx[t]=!0,ve(...r))}function gE(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const _E={[Wd]:Yd,[qd]:Kd,[jd]:Qd,[ko]:Zd,[Yd]:Wd,[Kd]:qd,[Qd]:jd,[Zd]:ko};class qo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Bi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sx=1234567;const Xu=Math.PI/180,rc=180/Math.PI;function cc(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bi[r&255]+Bi[r>>8&255]+Bi[r>>16&255]+Bi[r>>24&255]+"-"+Bi[t&255]+Bi[t>>8&255]+"-"+Bi[t>>16&15|64]+Bi[t>>24&255]+"-"+Bi[i&63|128]+Bi[i>>8&255]+"-"+Bi[i>>16&255]+Bi[i>>24&255]+Bi[s&255]+Bi[s>>8&255]+Bi[s>>16&255]+Bi[s>>24&255]).toLowerCase()}function Fe(r,t,i){return Math.max(t,Math.min(i,r))}function eg(r,t){return(r%t+t)%t}function vE(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function xE(r,t,i){return r!==t?(i-r)/(t-r):0}function Wu(r,t,i){return(1-i)*r+i*t}function yE(r,t,i,s){return Wu(r,t,1-Math.exp(-i*s))}function SE(r,t=1){return t-Math.abs(eg(r,t*2)-t)}function ME(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function EE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function bE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function TE(r,t){return r+Math.random()*(t-r)}function AE(r){return r*(.5-Math.random())}function RE(r){r!==void 0&&(Sx=r);let t=Sx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function CE(r){return r*Xu}function wE(r){return r*rc}function DE(r){return(r&r-1)===0&&r!==0}function NE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function LE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function UE(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),x=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*_,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*E,m*x,h*p);break;case"YXY":r.set(m*x,h*_,m*E,h*p);break;case"ZYZ":r.set(m*E,m*x,h*_,h*p);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ql(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $e={DEG2RAD:Xu,RAD2DEG:rc,generateUUID:cc,clamp:Fe,euclideanModulo:eg,mapLinear:vE,inverseLerp:xE,lerp:Wu,damp:yE,pingpong:SE,smoothstep:ME,smootherstep:EE,randInt:bE,randFloat:TE,randFloatSpread:AE,seededRandom:RE,degToRad:CE,radToDeg:wE,isPowerOfTwo:DE,ceilPowerOfTwo:NE,floorPowerOfTwo:LE,setQuaternionFromProperEuler:UE,normalize:Yi,denormalize:Ql};class Ie{constructor(t=0,i=0){Ie.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],x=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==x||_!==E){let M=m*g+p*x+_*E+v*w;M<0&&(g=-g,x=-x,E=-E,w=-w,M=-M);let S=1-h;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);S=Math.sin(S*C)/L,h=Math.sin(h*C)/L,m=m*S+g*h,p=p*S+x*h,_=_*S+E*h,v=v*S+w*h}else{m=m*S+g*h,p=p*S+x*h,_=_*S+E*h,v=v*S+w*h;const C=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=C,p*=C,_*=C,v*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],x=c[f+2],E=c[f+3];return t[i]=h*E+_*v+m*x-p*g,t[i+1]=m*E+_*g+p*v-h*x,t[i+2]=p*E+_*x+h*g-m*v,t[i+3]=_*E-h*v-m*g-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(c/2),g=m(s/2),x=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v-g*x*E;break;case"YXZ":this._x=g*_*v+p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v+g*x*E;break;case"ZXY":this._x=g*_*v-p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v-g*x*E;break;case"ZYX":this._x=g*_*v-p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v+g*x*E;break;case"YZX":this._x=g*_*v+p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v-g*x*E;break;case"XZY":this._x=g*_*v-p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v+g*x*E;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-m)*x,this._y=(c-p)*x,this._z=(f-l)*x}else if(s>h&&s>v){const x=2*Math.sqrt(1+s-h-v);this._w=(_-m)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+p)/x}else if(h>v){const x=2*Math.sqrt(1+h-s-v);this._w=(c-p)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(m+_)/x}else{const x=2*Math.sqrt(1+v-s-h);this._w=(f-l)/x,this._x=(c+p)/x,this._y=(m+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Mx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Mx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),_=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*_,this.y=s+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Gm.copy(this).projectOnVector(t),this.sub(Gm)}reflect(t){return this.sub(Gm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gm=new q,Mx=new pr;class Ce{constructor(t,i,s,l,c,f,h,m,p){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],x=s[5],E=s[8],w=l[0],M=l[3],S=l[6],C=l[1],L=l[4],D=l[7],B=l[2],F=l[5],H=l[8];return c[0]=f*w+h*C+m*B,c[3]=f*M+h*L+m*F,c[6]=f*S+h*D+m*H,c[1]=p*w+_*C+v*B,c[4]=p*M+_*L+v*F,c[7]=p*S+_*D+v*H,c[2]=g*w+x*C+E*B,c[5]=g*M+x*L+E*F,c[8]=g*S+x*D+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*f-h*p,g=h*m-_*c,x=p*c-f*m,E=i*v+s*g+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(h*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-h*i)*w,t[6]=x*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Vm.makeScale(t,i)),this}rotate(t){return this.premultiply(Vm.makeRotation(-t)),this}translate(t,i){return this.premultiply(Vm.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vm=new Ce,Ex=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bx=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OE(){const r={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ln&&(l.r=dr(l.r),l.g=dr(l.g),l.b=dr(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ln&&(l.r=ec(l.r),l.g=ec(l.g),l.b=ec(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ur?Yu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ju("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ju("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yo]:{primaries:t,whitePoint:s,transfer:Yu,toXYZ:Ex,fromXYZ:bx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:s,transfer:ln,toXYZ:Ex,fromXYZ:bx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const Qe=OE();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ec(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ul;class cS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ul===void 0&&(Ul=qu("canvas")),Ul.width=t.width,Ul.height=t.height;const l=Ul.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ul}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=dr(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(dr(i[s]/255)*255):i[s]=dr(i[s]);return{data:i,width:t.width,height:t.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let IE=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=cc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(km(l[f].image)):c.push(km(l[f]))}else c=km(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function km(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}let PE=0;const Xm=new q;class vi extends qo{constructor(t=vi.DEFAULT_IMAGE,i=vi.DEFAULT_MAPPING,s=Us,l=Us,c=jn,f=fr,h=ja,m=aa,p=vi.DEFAULT_ANISOTROPY,_=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=cc(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xm).x}get height(){return this.source.getSize(Xm).y}get depth(){return this.source.getSize(Xm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ve(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ve(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==j0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nc:t.x=t.x-Math.floor(t.x);break;case Us:t.x=t.x<0?0:1;break;case Jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nc:t.y=t.y-Math.floor(t.y);break;case Us:t.y=t.y<0?0:1;break;case Jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=j0;vi.DEFAULT_ANISOTROPY=1;class Hn{constructor(t=0,i=0,s=0,l=1){Hn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],x=m[5],E=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(x+1)/2,B=(S+1)/2,F=(_+g)/4,H=(v+w)/4,T=(E+M)/4;return L>D&&L>B?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=F/s,c=H/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=T/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=H/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(v-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this.w=Fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this.w=Fe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uS extends qo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Hn(0,0,t,i),this.scissorTest=!1,this.viewport=new Hn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new vi(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends uS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ng extends vi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fS extends vi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t,i,s,l,c,f,h,m,p,_,v,g,x,E,w,M){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,_,v,g,x,E,w,M)}set(t,i,s,l,c,f,h,m,p,_,v,g,x,E,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=x,S[7]=E,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ol.setFromMatrixColumn(t,0).length(),c=1/Ol.setFromMatrixColumn(t,1).length(),f=1/Ol.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,x=f*v,E=h*_,w=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=x+E*p,i[5]=g-w*p,i[9]=-h*m,i[2]=w-g*p,i[6]=E+x*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,x=m*v,E=p*_,w=p*v;i[0]=g+w*h,i[4]=E*h-x,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=x*h-E,i[6]=w+g*h,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,x=m*v,E=p*_,w=p*v;i[0]=g-w*h,i[4]=-f*v,i[8]=E+x*h,i[1]=x+E*h,i[5]=f*_,i[9]=w-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,x=f*v,E=h*_,w=h*v;i[0]=m*_,i[4]=E*p-x,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=x*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,x=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=w-g*v,i[8]=E*v+x,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=x*v+E,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,x=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=x*v-E,i[2]=E*v-x,i[6]=h*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FE,t,BE)}lookAt(t,i,s){const l=this.elements;return Ea.subVectors(t,i),Ea.lengthSq()===0&&(Ea.z=1),Ea.normalize(),qr.crossVectors(s,Ea),qr.lengthSq()===0&&(Math.abs(s.z)===1?Ea.x+=1e-4:Ea.z+=1e-4,Ea.normalize(),qr.crossVectors(s,Ea)),qr.normalize(),sd.crossVectors(Ea,qr),l[0]=qr.x,l[4]=sd.x,l[8]=Ea.x,l[1]=qr.y,l[5]=sd.y,l[9]=Ea.y,l[2]=qr.z,l[6]=sd.z,l[10]=Ea.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],x=s[13],E=s[2],w=s[6],M=s[10],S=s[14],C=s[3],L=s[7],D=s[11],B=s[15],F=l[0],H=l[4],T=l[8],N=l[12],ut=l[1],G=l[5],J=l[9],et=l[13],tt=l[2],Q=l[6],U=l[10],P=l[14],ct=l[3],pt=l[7],At=l[11],I=l[15];return c[0]=f*F+h*ut+m*tt+p*ct,c[4]=f*H+h*G+m*Q+p*pt,c[8]=f*T+h*J+m*U+p*At,c[12]=f*N+h*et+m*P+p*I,c[1]=_*F+v*ut+g*tt+x*ct,c[5]=_*H+v*G+g*Q+x*pt,c[9]=_*T+v*J+g*U+x*At,c[13]=_*N+v*et+g*P+x*I,c[2]=E*F+w*ut+M*tt+S*ct,c[6]=E*H+w*G+M*Q+S*pt,c[10]=E*T+w*J+M*U+S*At,c[14]=E*N+w*et+M*P+S*I,c[3]=C*F+L*ut+D*tt+B*ct,c[7]=C*H+L*G+D*Q+B*pt,c[11]=C*T+L*J+D*U+B*At,c[15]=C*N+L*et+D*P+B*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],x=t[14],E=t[3],w=t[7],M=t[11],S=t[15],C=m*x-p*g,L=h*x-p*v,D=h*g-m*v,B=f*x-p*_,F=f*g-m*_,H=f*v-h*_;return i*(w*C-M*L+S*D)-s*(E*C-M*B+S*F)+l*(E*L-w*B+S*H)-c*(E*D-w*F+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],x=t[11],E=t[12],w=t[13],M=t[14],S=t[15],C=i*h-s*f,L=i*m-l*f,D=i*p-c*f,B=s*m-l*h,F=s*p-c*h,H=l*p-c*m,T=_*w-v*E,N=_*M-g*E,ut=_*S-x*E,G=v*M-g*w,J=v*S-x*w,et=g*S-x*M,tt=C*et-L*J+D*G+B*ut-F*N+H*T;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/tt;return t[0]=(h*et-m*J+p*G)*Q,t[1]=(l*J-s*et-c*G)*Q,t[2]=(w*H-M*F+S*B)*Q,t[3]=(g*F-v*H-x*B)*Q,t[4]=(m*ut-f*et-p*N)*Q,t[5]=(i*et-l*ut+c*N)*Q,t[6]=(M*D-E*H-S*L)*Q,t[7]=(_*H-g*D+x*L)*Q,t[8]=(f*J-h*ut+p*T)*Q,t[9]=(s*ut-i*J-c*T)*Q,t[10]=(E*F-w*D+S*C)*Q,t[11]=(v*D-_*F-x*C)*Q,t[12]=(h*N-f*G-m*T)*Q,t[13]=(i*G-s*N+l*T)*Q,t[14]=(w*L-E*B-M*C)*Q,t[15]=(_*B-v*L+g*C)*Q,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,x=c*_,E=c*v,w=f*_,M=f*v,S=h*v,C=m*p,L=m*_,D=m*v,B=s.x,F=s.y,H=s.z;return l[0]=(1-(w+S))*B,l[1]=(x+D)*B,l[2]=(E-L)*B,l[3]=0,l[4]=(x-D)*F,l[5]=(1-(g+S))*F,l[6]=(M+C)*F,l[7]=0,l[8]=(E+L)*H,l[9]=(M-C)*H,l[10]=(1-(g+w))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ol.set(l[0],l[1],l[2]).length();const h=Ol.set(l[4],l[5],l[6]).length(),m=Ol.set(l[8],l[9],l[10]).length();c<0&&(f=-f),os.copy(this);const p=1/f,_=1/h,v=1/m;return os.elements[0]*=p,os.elements[1]*=p,os.elements[2]*=p,os.elements[4]*=_,os.elements[5]*=_,os.elements[6]*=_,os.elements[8]*=v,os.elements[9]*=v,os.elements[10]*=v,i.setFromRotationMatrix(os),s.x=f,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,f,h=ds,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),x=(s+l)/(s-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(h===ds)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===sc)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=ds,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(h===ds)E=-2/(f-c),w=-(f+c)/(f-c);else if(h===sc)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ol=new q,os=new _n,FE=new q(0,0,0),BE=new q(1,1,1),qr=new q,sd=new q,Ea=new q,Tx=new _n,Ax=new pr;class Ra{constructor(t=0,i=0,s=0,l=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Fe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Tx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ax.setFromEuler(this),this.setFromQuaternion(Ax,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zE=0;const Rx=new q,Il=new pr,nr=new _n,rd=new q,Eu=new q,HE=new q,GE=new pr,Cx=new q(1,0,0),wx=new q(0,1,0),Dx=new q(0,0,1),Nx={type:"added"},VE={type:"removed"},Pl={type:"childadded",child:null},Wm={type:"childremoved",child:null};class wn extends qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=cc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new q,i=new Ra,s=new pr,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new _n},normalMatrix:{value:new Ce}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Il.setFromAxisAngle(t,i),this.quaternion.multiply(Il),this}rotateOnWorldAxis(t,i){return Il.setFromAxisAngle(t,i),this.quaternion.premultiply(Il),this}rotateX(t){return this.rotateOnAxis(Cx,t)}rotateY(t){return this.rotateOnAxis(wx,t)}rotateZ(t){return this.rotateOnAxis(Dx,t)}translateOnAxis(t,i){return Rx.copy(t).applyQuaternion(this.quaternion),this.position.add(Rx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Cx,t)}translateY(t){return this.translateOnAxis(wx,t)}translateZ(t){return this.translateOnAxis(Dx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?rd.copy(t):rd.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Eu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Eu,rd,this.up):nr.lookAt(rd,Eu,this.up),this.quaternion.setFromRotationMatrix(nr),l&&(nr.extractRotation(l.matrixWorld),Il.setFromRotationMatrix(nr),this.quaternion.premultiply(Il.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nx),Pl.child=t,this.dispatchEvent(Pl),Pl.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VE),Wm.child=t,this.dispatchEvent(Wm),Wm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nr.multiply(t.parent.matrixWorld)),t.applyMatrix4(nr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nx),Pl.child=t,this.dispatchEvent(Pl),Pl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eu,t,HE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eu,GE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),x=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ho extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,E=.005;p.inputState.pinching&&g>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ho;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const dS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},od={h:0,s:0,l:0};function Ym(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Qe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Qe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Qe.workingColorSpace){if(t=eg(t,1),i=Fe(i,0,1),s=Fe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Ym(f,c,t+1/3),this.g=Ym(f,c,t),this.b=Ym(f,c,t-1/3)}return Qe.colorSpaceToWorking(this,l),this}setStyle(t,i=ei){function s(c){c!==void 0&&parseFloat(c)<1&&ve("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ve("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ve("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const s=dS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ve("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}copyLinearToSRGB(t){return this.r=ec(t.r),this.g=ec(t.g),this.b=ec(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Qe.workingToColorSpace(zi.copy(this),t),Math.round(Fe(zi.r*255,0,255))*65536+Math.round(Fe(zi.g*255,0,255))*256+Math.round(Fe(zi.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Qe.workingColorSpace){Qe.workingToColorSpace(zi.copy(this),i);const s=zi.r,l=zi.g,c=zi.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Qe.workingColorSpace){return Qe.workingToColorSpace(zi.copy(this),i),t.r=zi.r,t.g=zi.g,t.b=zi.b,t}getStyle(t=ei){Qe.workingToColorSpace(zi.copy(this),t);const i=zi.r,s=zi.g,l=zi.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(jr),this.setHSL(jr.h+t,jr.s+i,jr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(jr),t.getHSL(od);const s=Wu(jr.h,od.h,i),l=Wu(jr.s,od.s,i),c=Wu(jr.l,od.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zi=new pe;pe.NAMES=dS;class Zu{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=i,this.far=s}clone(){return new Zu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ig extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ls=new q,ir=new q,qm=new q,ar=new q,Fl=new q,Bl=new q,Lx=new q,jm=new q,Zm=new q,Km=new q,Qm=new Hn,Jm=new Hn,$m=new Hn;class Ya{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ls.subVectors(t,i),l.cross(ls);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ls.subVectors(l,i),ir.subVectors(s,i),qm.subVectors(t,i);const f=ls.dot(ls),h=ls.dot(ir),m=ls.dot(qm),p=ir.dot(ir),_=ir.dot(qm),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,x=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,ar)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ar.x),m.addScaledVector(f,ar.y),m.addScaledVector(h,ar.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Qm.setScalar(0),Jm.setScalar(0),$m.setScalar(0),Qm.fromBufferAttribute(t,i),Jm.fromBufferAttribute(t,s),$m.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Qm,c.x),f.addScaledVector(Jm,c.y),f.addScaledVector($m,c.z),f}static isFrontFacing(t,i,s,l){return ls.subVectors(s,i),ir.subVectors(t,i),ls.cross(ir).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ls.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),ls.cross(ir).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ya.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ya.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ya.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ya.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ya.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Fl.subVectors(l,s),Bl.subVectors(c,s),jm.subVectors(t,s);const m=Fl.dot(jm),p=Bl.dot(jm);if(m<=0&&p<=0)return i.copy(s);Zm.subVectors(t,l);const _=Fl.dot(Zm),v=Bl.dot(Zm);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Fl,f);Km.subVectors(t,c);const x=Fl.dot(Km),E=Bl.dot(Km);if(E>=0&&x<=E)return i.copy(c);const w=x*p-m*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Bl,h);const M=_*E-x*v;if(M<=0&&v-_>=0&&x-E>=0)return Lx.subVectors(c,l),h=(v-_)/(v-_+(x-E)),i.copy(l).addScaledVector(Lx,h);const S=1/(M+w+g);return f=w*S,h=g*S,i.copy(s).addScaledVector(Fl,f).addScaledVector(Bl,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ro{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(cs.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(cs.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=cs.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,cs):cs.fromBufferAttribute(c,f),cs.applyMatrix4(t.matrixWorld),this.expandByPoint(cs);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ld.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ld.copy(s.boundingBox)),ld.applyMatrix4(t.matrixWorld),this.union(ld)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cs),cs.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bu),cd.subVectors(this.max,bu),zl.subVectors(t.a,bu),Hl.subVectors(t.b,bu),Gl.subVectors(t.c,bu),Zr.subVectors(Hl,zl),Kr.subVectors(Gl,Hl),Co.subVectors(zl,Gl);let i=[0,-Zr.z,Zr.y,0,-Kr.z,Kr.y,0,-Co.z,Co.y,Zr.z,0,-Zr.x,Kr.z,0,-Kr.x,Co.z,0,-Co.x,-Zr.y,Zr.x,0,-Kr.y,Kr.x,0,-Co.y,Co.x,0];return!t0(i,zl,Hl,Gl,cd)||(i=[1,0,0,0,1,0,0,0,1],!t0(i,zl,Hl,Gl,cd))?!1:(ud.crossVectors(Zr,Kr),i=[ud.x,ud.y,ud.z],t0(i,zl,Hl,Gl,cd))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cs).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cs).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sr=[new q,new q,new q,new q,new q,new q,new q,new q],cs=new q,ld=new ro,zl=new q,Hl=new q,Gl=new q,Zr=new q,Kr=new q,Co=new q,bu=new q,cd=new q,ud=new q,wo=new q;function t0(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){wo.fromArray(r,c);const h=l.x*Math.abs(wo.x)+l.y*Math.abs(wo.y)+l.z*Math.abs(wo.z),m=t.dot(wo),p=i.dot(wo),_=s.dot(wo);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const oi=new q,fd=new Ie;let XE=0;class Za{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=D0,this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fd.fromBufferAttribute(this,i),fd.applyMatrix3(t),this.setXY(i,fd.x,fd.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)oi.fromBufferAttribute(this,i),oi.applyMatrix3(t),this.setXYZ(i,oi.x,oi.y,oi.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)oi.fromBufferAttribute(this,i),oi.applyMatrix4(t),this.setXYZ(i,oi.x,oi.y,oi.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)oi.fromBufferAttribute(this,i),oi.applyNormalMatrix(t),this.setXYZ(i,oi.x,oi.y,oi.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)oi.fromBufferAttribute(this,i),oi.transformDirection(t),this.setXYZ(i,oi.x,oi.y,oi.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ql(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Yi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ql(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ql(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ql(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ql(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Yi(i,this.array),s=Yi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Yi(i,this.array),s=Yi(s,this.array),l=Yi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Yi(i,this.array),s=Yi(s,this.array),l=Yi(l,this.array),c=Yi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==D0&&(t.usage=this.usage),t}}class ag extends Za{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class sg extends Za{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Mn extends Za{constructor(t,i,s){super(new Float32Array(t),i,s)}}const WE=new ro,Tu=new q,e0=new q;class uc{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):WE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tu.subVectors(t,this.center);const i=Tu.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Tu,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(e0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tu.copy(t.center).add(e0)),this.expandByPoint(Tu.copy(t.center).sub(e0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let YE=0;const Xa=new _n,n0=new wn,Vl=new q,ba=new ro,Au=new ro,Ti=new q;class Gi extends qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=cc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mE(t)?sg:ag)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xa.makeRotationFromQuaternion(t),this.applyMatrix4(Xa),this}rotateX(t){return Xa.makeRotationX(t),this.applyMatrix4(Xa),this}rotateY(t){return Xa.makeRotationY(t),this.applyMatrix4(Xa),this}rotateZ(t){return Xa.makeRotationZ(t),this.applyMatrix4(Xa),this}translate(t,i,s){return Xa.makeTranslation(t,i,s),this.applyMatrix4(Xa),this}scale(t,i,s){return Xa.makeScale(t,i,s),this.applyMatrix4(Xa),this}lookAt(t){return n0.lookAt(t),n0.updateMatrix(),this.applyMatrix4(n0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vl).negate(),this.translate(Vl.x,Vl.y,Vl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Mn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ba.setFromBufferAttribute(c),this.morphTargetsRelative?(Ti.addVectors(this.boundingBox.min,ba.min),this.boundingBox.expandByPoint(Ti),Ti.addVectors(this.boundingBox.max,ba.max),this.boundingBox.expandByPoint(Ti)):(this.boundingBox.expandByPoint(ba.min),this.boundingBox.expandByPoint(ba.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(ba.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Au.setFromBufferAttribute(h),this.morphTargetsRelative?(Ti.addVectors(ba.min,Au.min),ba.expandByPoint(Ti),Ti.addVectors(ba.max,Au.max),ba.expandByPoint(Ti)):(ba.expandByPoint(Au.min),ba.expandByPoint(Au.max))}ba.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Ti.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Ti));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Ti.fromBufferAttribute(h,p),m&&(Vl.fromBufferAttribute(t,p),Ti.add(Vl)),l=Math.max(l,s.distanceToSquared(Ti))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Za(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new q,m[T]=new q;const p=new q,_=new q,v=new q,g=new Ie,x=new Ie,E=new Ie,w=new q,M=new q;function S(T,N,ut){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),v.fromBufferAttribute(s,ut),g.fromBufferAttribute(c,T),x.fromBufferAttribute(c,N),E.fromBufferAttribute(c,ut),_.sub(p),v.sub(p),x.sub(g),E.sub(g);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(G),M.copy(v).multiplyScalar(x.x).addScaledVector(_,-E.x).multiplyScalar(G),h[T].add(w),h[N].add(w),h[ut].add(w),m[T].add(M),m[N].add(M),m[ut].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,N=C.length;T<N;++T){const ut=C[T],G=ut.start,J=ut.count;for(let et=G,tt=G+J;et<tt;et+=3)S(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const L=new q,D=new q,B=new q,F=new q;function H(T){B.fromBufferAttribute(l,T),F.copy(B);const N=h[T];L.copy(N),L.sub(B.multiplyScalar(B.dot(N))).normalize(),D.crossVectors(F,N);const G=D.dot(m[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,G)}for(let T=0,N=C.length;T<N;++T){const ut=C[T],G=ut.start,J=ut.count;for(let et=G,tt=G+J;et<tt;et+=3)H(t.getX(et+0)),H(t.getX(et+1)),H(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Za(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,x=s.count;g<x;g++)s.setXYZ(g,0,0,0);const l=new q,c=new q,f=new q,h=new q,m=new q,p=new q,_=new q,v=new q;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,x=i.count;g<x;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Ti.fromBufferAttribute(t,i),Ti.normalize(),t.setXYZ(i,Ti.x,Ti.y,Ti.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let x=0,E=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*_;for(let S=0;S<_;S++)g[E++]=p[x++]}return new Za(g,_,v)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],x=t(g,s);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const x=p[v];_.push(x.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qE=0;class jo extends qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=cc(),this.name="",this.type="Material",this.blending=Vo,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ve(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ve(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Vo&&(s.blending=this.blending),this.side!==hr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Xd&&(s.blendDst=this.blendDst),this.blendEquation!==eo&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const rr=new q,i0=new q,dd=new q,Qr=new q,a0=new q,hd=new q,s0=new q;class rg{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rr)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=rr.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(rr.copy(this.origin).addScaledVector(this.direction,i),rr.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){i0.copy(t).add(i).multiplyScalar(.5),dd.copy(i).sub(t).normalize(),Qr.copy(this.origin).sub(i0);const c=t.distanceTo(i)*.5,f=-this.direction.dot(dd),h=Qr.dot(this.direction),m=-Qr.dot(dd),p=Qr.lengthSq(),_=Math.abs(1-f*f);let v,g,x,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,x=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),x=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),x=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),x=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),x=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(i0).addScaledVector(dd,g),x}intersectSphere(t,i){rr.subVectors(t.center,this.origin);const s=rr.dot(this.direction),l=rr.dot(rr)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,rr)!==null}intersectTriangle(t,i,s,l,c){a0.subVectors(i,t),hd.subVectors(s,t),s0.crossVectors(a0,hd);let f=this.direction.dot(s0),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Qr.subVectors(this.origin,t);const m=h*this.direction.dot(hd.crossVectors(Qr,hd));if(m<0)return null;const p=h*this.direction.dot(a0.cross(Qr));if(p<0||m+p>f)return null;const _=-h*Qr.dot(s0);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class no extends jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ux=new _n,Do=new rg,pd=new uc,Ox=new q,md=new q,gd=new q,_d=new q,r0=new q,vd=new q,Ix=new q,xd=new q;class Re extends wn{constructor(t=new Gi,i=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){vd.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(r0.fromBufferAttribute(v,t),f?vd.addScaledVector(r0,_):vd.addScaledVector(r0.sub(i),_))}i.add(vd)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pd.copy(s.boundingSphere),pd.applyMatrix4(c),Do.copy(t.ray).recast(t.near),!(pd.containsPoint(Do.origin)===!1&&(Do.intersectSphere(pd,Ox)===null||Do.origin.distanceToSquared(Ox)>(t.far-t.near)**2))&&(Ux.copy(c).invert(),Do.copy(t.ray).applyMatrix4(Ux),!(s.boundingBox!==null&&Do.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Do)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=f[M.materialIndex],C=Math.max(M.start,x.start),L=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let D=C,B=L;D<B;D+=3){const F=h.getX(D),H=h.getX(D+1),T=h.getX(D+2);l=yd(this,S,t,s,p,_,v,F,H,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let M=E,S=w;M<S;M+=3){const C=h.getX(M),L=h.getX(M+1),D=h.getX(M+2);l=yd(this,f,t,s,p,_,v,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=f[M.materialIndex],C=Math.max(M.start,x.start),L=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let D=C,B=L;D<B;D+=3){const F=D,H=D+1,T=D+2;l=yd(this,S,t,s,p,_,v,F,H,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let M=E,S=w;M<S;M+=3){const C=M,L=M+1,D=M+2;l=yd(this,f,t,s,p,_,v,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function jE(r,t,i,s,l,c,f,h){let m;if(t.side===Hi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===hr,h),m===null)return null;xd.copy(h),xd.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(xd);return p<i.near||p>i.far?null:{distance:p,point:xd.clone(),object:r}}function yd(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,md),r.getVertexPosition(m,gd),r.getVertexPosition(p,_d);const _=jE(r,t,i,s,md,gd,_d,Ix);if(_){const v=new q;Ya.getBarycoord(Ix,md,gd,_d,v),l&&(_.uv=Ya.getInterpolatedAttribute(l,h,m,p,v,new Ie)),c&&(_.uv1=Ya.getInterpolatedAttribute(c,h,m,p,v,new Ie)),f&&(_.normal=Ya.getInterpolatedAttribute(f,h,m,p,v,new q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new q,materialIndex:0};Ya.getNormal(md,gd,_d,g.normal),_.face=g,_.barycoord=v}return _}class og extends vi{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Ai,_=Ai,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U0 extends Za{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const kl=new _n,Px=new _n,Sd=[],Fx=new ro,ZE=new _n,Ru=new Re,Cu=new uc;class hS extends Re{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new U0(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,ZE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ro),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,kl),Fx.copy(t.boundingBox).applyMatrix4(kl),this.boundingBox.union(Fx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new uc),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,kl),Cu.copy(t.boundingSphere).applyMatrix4(kl),this.boundingSphere.union(Cu)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Ru.geometry=this.geometry,Ru.material=this.material,Ru.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cu.copy(this.boundingSphere),Cu.applyMatrix4(s),t.ray.intersectsSphere(Cu)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,kl),Px.multiplyMatrices(s,kl),Ru.matrixWorld=Px,Ru.raycast(t,Sd);for(let f=0,h=Sd.length;f<h;f++){const m=Sd[f];m.instanceId=c,m.object=this,i.push(m)}Sd.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new U0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new og(new Float32Array(l*this.count),l,this.count,Bh,qa));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const o0=new q,KE=new q,QE=new Ce;class $r{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=o0.subVectors(s,i).cross(KE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(o0),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||QE.getNormalMatrix(t),l=this.coplanarPoint(o0).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const No=new uc,JE=new Ie(.5,.5),Md=new q;class qh{constructor(t=new $r,i=new $r,s=new $r,l=new $r,c=new $r,f=new $r){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ds,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],x=c[7],E=c[8],w=c[9],M=c[10],S=c[11],C=c[12],L=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-f,x-_,S-E,B-C).normalize(),l[1].setComponents(p+f,x+_,S+E,B+C).normalize(),l[2].setComponents(p+h,x+v,S+w,B+L).normalize(),l[3].setComponents(p-h,x-v,S-w,B-L).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(p-m,x-g,S-M,B-D).normalize();else if(l[4].setComponents(p-m,x-g,S-M,B-D).normalize(),i===ds)l[5].setComponents(p+m,x+g,S+M,B+D).normalize();else if(i===sc)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),No.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(No)}intersectsSprite(t){No.center.set(0,0,0);const i=JE.distanceTo(t.center);return No.radius=.7071067811865476+i,No.applyMatrix4(t.matrixWorld),this.intersectsSphere(No)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Md.x=l.normal.x>0?t.max.x:t.min.x,Md.y=l.normal.y>0?t.max.y:t.min.y,Md.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Md)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pS extends vi{constructor(t,i,s,l,c=jn,f=jn,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const _=this;function v(){_.needsUpdate=!0,_._requestVideoFrameCallbackId=t.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(v))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class lg extends vi{constructor(t=[],i=so,s,l,c,f,h,m,p,_){super(t,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tc extends vi{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oc extends vi{constructor(t,i,s=ms,l,c,f,h=Ai,m=Ai,p,_=Ps,v=1){if(_!==Ps&&_!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class mS extends oc{constructor(t,i=ms,s=so,l,c,f=Ai,h=Ai,m,p=Ps){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cg extends vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oo extends Gi{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,x=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Mn(p,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(v,2));function E(w,M,S,C,L,D,B,F,H,T,N){const ut=D/H,G=B/T,J=D/2,et=B/2,tt=F/2,Q=H+1,U=T+1;let P=0,ct=0;const pt=new q;for(let At=0;At<U;At++){const I=At*G-et;for(let j=0;j<Q;j++){const gt=j*ut-J;pt[w]=gt*C,pt[M]=I*L,pt[S]=tt,p.push(pt.x,pt.y,pt.z),pt[w]=0,pt[M]=0,pt[S]=F>0?1:-1,_.push(pt.x,pt.y,pt.z),v.push(j/H),v.push(1-At/T),P+=1}}for(let At=0;At<T;At++)for(let I=0;I<H;I++){const j=g+I+Q*At,gt=g+I+Q*(At+1),Lt=g+(I+1)+Q*(At+1),jt=g+(I+1)+Q*At;m.push(j,gt,jt),m.push(gt,Lt,jt),ct+=6}h.addGroup(x,ct,N),x+=ct,g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ku extends Gi{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],h=[],m=[],p=new q,_=new Ie;f.push(0,0,0),h.push(0,0,1),m.push(.5,.5);for(let v=0,g=3;v<=i;v++,g+=3){const x=s+v/i*l;p.x=t*Math.cos(x),p.y=t*Math.sin(x),f.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(f[g]/t+1)/2,_.y=(f[g+1]/t+1)/2,m.push(_.x,_.y)}for(let v=1;v<=i;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new Mn(f,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qu extends Gi{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],x=[];let E=0;const w=[],M=s/2;let S=0;C(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Mn(v,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(x,2));function C(){const D=new q,B=new q;let F=0;const H=(i-t)/s;for(let T=0;T<=c;T++){const N=[],ut=T/c,G=ut*(i-t)+t;for(let J=0;J<=l;J++){const et=J/l,tt=et*m+h,Q=Math.sin(tt),U=Math.cos(tt);B.x=G*Q,B.y=-ut*s+M,B.z=G*U,v.push(B.x,B.y,B.z),D.set(Q,H,U).normalize(),g.push(D.x,D.y,D.z),x.push(et,1-ut),N.push(E++)}w.push(N)}for(let T=0;T<l;T++)for(let N=0;N<c;N++){const ut=w[N][T],G=w[N+1][T],J=w[N+1][T+1],et=w[N][T+1];(t>0||N!==0)&&(_.push(ut,G,et),F+=3),(i>0||N!==c-1)&&(_.push(G,J,et),F+=3)}p.addGroup(S,F,0),S+=F}function L(D){const B=E,F=new Ie,H=new q;let T=0;const N=D===!0?t:i,ut=D===!0?1:-1;for(let J=1;J<=l;J++)v.push(0,M*ut,0),g.push(0,ut,0),x.push(.5,.5),E++;const G=E;for(let J=0;J<=l;J++){const tt=J/l*m+h,Q=Math.cos(tt),U=Math.sin(tt);H.x=N*U,H.y=M*ut,H.z=N*Q,v.push(H.x,H.y,H.z),g.push(0,ut,0),F.x=Q*.5+.5,F.y=U*.5*ut+.5,x.push(F.x,F.y),E++}for(let J=0;J<l;J++){const et=B+J,tt=G+J;D===!0?_.push(tt,tt+1,et):_.push(tt+1,tt,et),T+=3}p.addGroup(S,T,D===!0?1:2),S+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,x=(f-_)/g;return(l+x)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new Ie:new q);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new q,l=[],c=[],f=[],h=new q,m=new _n;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new q)}c[0]=new q,f[0]=new q;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),h.crossVectors(l[x-1],l[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Fe(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}f[x].crossVectors(l[x],c[x])}if(i===!0){let x=Math.acos(Fe(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],x*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ug(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,_,v){let g=(f-c)/p-(h-c)/(p+_)+(h-f)/_,x=(h-f)/_-(m-f)/(_+v)+(m-h)/v;g*=_,x*=_,l(f,h,g,x)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const Ed=new q,l0=new ug,c0=new ug,u0=new ug;class _S extends gS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new q){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(Ed.subVectors(l[0],l[1]).add(l[0]),p=Ed);const v=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(Ed.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Ed),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),x),w=Math.pow(v.distanceToSquared(g),x),M=Math.pow(g.distanceToSquared(_),x);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),l0.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,w,M),c0.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,w,M),u0.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,w,M)}else this.curveType==="catmullrom"&&(l0.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),c0.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),u0.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(l0.calc(m),c0.calc(m),u0.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Aa extends Gi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=t/h,g=i/m,x=[],E=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-f;for(let L=0;L<p;L++){const D=L*v-c;E.push(D,-C,0),w.push(0,0,1),M.push(L/h),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<h;C++){const L=C+p*S,D=C+p*(S+1),B=C+1+p*(S+1),F=C+1+p*S;x.push(L,D,F),x.push(D,B,F)}this.setIndex(x),this.setAttribute("position",new Mn(E,3)),this.setAttribute("normal",new Mn(w,3)),this.setAttribute("uv",new Mn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.width,t.height,t.widthSegments,t.heightSegments)}}class jh extends Gi{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,x=new q,E=new Ie;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const S=c+M/s*f;x.x=v*Math.cos(S),x.y=v*Math.sin(S),m.push(x.x,x.y,x.z),p.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,_.push(E.x,E.y)}v+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let S=0;S<s;S++){const C=S+M,L=C,D=C+s+1,B=C+s+2,F=C+1;h.push(L,D,F),h.push(D,B,F)}}this.setIndex(h),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(p,3)),this.setAttribute("uv",new Mn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Zh extends Gi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const _=[],v=new q,g=new q,x=[],E=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],L=S/s;let D=0;S===0&&f===0?D=.5/i:S===s&&m===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const F=B/i;v.x=-t*Math.cos(l+F*c)*Math.sin(f+L*h),v.y=t*Math.cos(f+L*h),v.z=t*Math.sin(l+F*c)*Math.sin(f+L*h),E.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(F+D,1-L),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const L=_[S][C+1],D=_[S][C],B=_[S+1][C],F=_[S+1][C+1];(S!==0||f>0)&&x.push(L,D,F),(S!==s-1||m<Math.PI)&&x.push(D,B,F)}this.setIndex(x),this.setAttribute("position",new Mn(E,3)),this.setAttribute("normal",new Mn(w,3)),this.setAttribute("uv",new Mn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kh extends Gi{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:h},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],_=[],v=[],g=new q,x=new q,E=new q;for(let w=0;w<=s;w++){const M=f+w/s*h;for(let S=0;S<=l;S++){const C=S/l*c;x.x=(t+i*Math.cos(M))*Math.cos(C),x.y=(t+i*Math.cos(M))*Math.sin(C),x.z=i*Math.sin(M),p.push(x.x,x.y,x.z),g.x=t*Math.cos(C),g.y=t*Math.sin(C),E.subVectors(x,g).normalize(),_.push(E.x,E.y,E.z),v.push(S/l),v.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const S=(l+1)*w+M-1,C=(l+1)*(w-1)+M-1,L=(l+1)*(w-1)+M,D=(l+1)*w+M;m.push(S,C,D),m.push(C,L,D)}this.setIndex(m),this.setAttribute("position",new Mn(p,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function lc(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function qi(r){const t={};for(let i=0;i<r.length;i++){const s=lc(r[i]);for(const l in s)t[l]=s[l]}return t}function $E(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function vS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}const xS={clone:lc,merge:qi};var tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gs extends jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lc(t.uniforms),this.uniformsGroups=$E(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class yS extends gs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ta extends jo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bo extends Ta{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class SS extends jo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=Uh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class MS extends jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ES extends jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(Bx(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!Bx(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Bx(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class bS{constructor(t,i,s){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,h),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=p.length;v<g;v+=2){const x=p[v],E=p[v+1];if(x.global&&(x.lastIndex=0),x.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const TS=new bS;class Qh{constructor(t){this.manager=t!==void 0?t:TS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Qh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xl=new WeakMap;class AS extends Qh{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Hd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let v=Xl.get(f);v===void 0&&(v=[],Xl.set(f,v)),v.push({onLoad:i,onError:l})}return f}const h=qu("img");function m(){_(),i&&i(this);const v=Xl.get(this)||[];for(let g=0;g<v.length;g++){const x=v[g];x.onLoad&&x.onLoad(this)}Xl.delete(this),c.manager.itemEnd(t)}function p(v){_(),l&&l(v),Hd.remove(`image:${t}`);const g=Xl.get(this)||[];for(let x=0;x<g.length;x++){const E=g[x];E.onError&&E.onError(v)}Xl.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Hd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class RS extends Qh{constructor(t){super(t)}load(t,i,s,l){const c=new vi,f=new AS(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class fc extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class CS extends fc{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const f0=new _n,zx=new q,Hx=new q;class fg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=aa,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;zx.setFromMatrixPosition(t.matrixWorld),i.position.copy(zx),Hx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Hx),i.updateMatrixWorld(),f0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(f0,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===sc||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(f0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bd=new q,Td=new pr,Ns=new q;class dg extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=ds,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bd,Td,Ns),Ns.x===1&&Ns.y===1&&Ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bd,Td,Ns.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(bd,Td,Ns),Ns.x===1&&Ns.y===1&&Ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bd,Td,Ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new q,Gx=new Ie,Vx=new Ie;class ji extends dg{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jr.x,Jr.y).multiplyScalar(-t/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Jr.x,Jr.y).multiplyScalar(-t/Jr.z)}getViewSize(t,i){return this.getViewBounds(t,Gx,Vx),i.subVectors(Vx,Gx)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class nb extends fg{constructor(){super(new ji(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=rc*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Gd extends fc{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new nb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class ib extends fg{constructor(){super(new ji(90,1,.5,500)),this.isPointLightShadow=!0}}class to extends fc{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new ib}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Jh extends dg{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ab extends fg{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O0 extends fc{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new ab}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class wS extends fc{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Wl=-90,Yl=1;class DS extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ji(Wl,Yl,t,i);l.layers=this.layers,this.add(l);const c=new ji(Wl,Yl,t,i);c.layers=this.layers,this.add(c);const f=new ji(Wl,Yl,t,i);f.layers=this.layers,this.add(f);const h=new ji(Wl,Yl,t,i);h.layers=this.layers,this.add(h);const m=new ji(Wl,Yl,t,i);m.layers=this.layers,this.add(m);const p=new ji(Wl,Yl,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===ds)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===sc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class NS extends ji{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const kx=new _n;class LS{constructor(t,i,s=0,l=1/0){this.ray=new rg(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ke("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return kx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kx),this}intersectObject(t,i=!0,s=[]){return I0(t,this,s,i),s.sort(Xx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)I0(t[l],this,s,i);return s.sort(Xx),s}}function Xx(r,t){return r.distance-t.distance}function I0(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)I0(c[f],t,i,!0)}}class US{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ve("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Wx(r,t,i,s){const l=sb(s);switch(i){case $0:return r*t;case Bh:return r*t/l.components*l.byteLength;case zh:return r*t/l.components*l.byteLength;case Wo:return r*t*2/l.components*l.byteLength;case Hh:return r*t*2/l.components*l.byteLength;case tg:return r*t*3/l.components*l.byteLength;case ja:return r*t*4/l.components*l.byteLength;case Gh:return r*t*4/l.components*l.byteLength;case Hu:case Gu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vu:case ku:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case th:case nh:return Math.max(r,16)*Math.max(t,8)/4;case $d:case eh:return Math.max(r,8)*Math.max(t,8)/2;case ih:case ah:case rh:case oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case sh:case lh:case ch:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _h:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case vh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case bh:case Th:case Ah:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Rh:case Ch:return Math.ceil(r/4)*Math.ceil(t/4)*8;case wh:case Dh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sb(r){switch(r){case aa:case Z0:return{byteLength:1,components:1};case ic:case K0:case Is:return{byteLength:2,components:1};case Ph:case Fh:return{byteLength:2,components:4};case ms:case Ih:case qa:return{byteLength:4,components:1};case Q0:case J0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);function OS(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function rb(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<v.length;x++){const E=v[g],w=v[x];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let x=0,E=v.length;x<E;x++){const w=v[x];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
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
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
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
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
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
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Sb=`#ifdef USE_BUMPMAP
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Db=`#define PI 3.141592653589793
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
} // validated`,Nb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jb=`#ifdef USE_GRADIENTMAP
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
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
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
#endif`,s1=`uniform sampler2D dfgLUT;
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
}`,r1=`
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g1=`#if defined( USE_POINTS_UV )
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
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
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
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,D1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W1=`float getShadowMask() {
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
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,K1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tT=`#ifdef USE_TRANSMISSION
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
#endif`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
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
}`,hT=`#if DEPTH_PACKING == 3200
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
}`,pT=`#define DISTANCE
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
}`,mT=`#define DISTANCE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
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
}`,xT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ST=`uniform vec3 diffuse;
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
}`,MT=`#define LAMBERT
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
}`,ET=`#define LAMBERT
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
}`,bT=`#define MATCAP
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
}`,TT=`#define MATCAP
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
}`,AT=`#define NORMAL
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
}`,RT=`#define NORMAL
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
}`,CT=`#define PHONG
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
}`,wT=`#define PHONG
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
}`,DT=`#define STANDARD
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
}`,NT=`#define STANDARD
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
}`,LT=`#define TOON
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
}`,UT=`#define TOON
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
}`,OT=`uniform float size;
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
}`,IT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,FT=`uniform vec3 color;
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
}`,BT=`uniform float rotation;
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
}`,zT=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:ob,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:fb,alphatest_pars_fragment:db,aomap_fragment:hb,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:Eb,clipping_planes_pars_vertex:bb,clipping_planes_vertex:Tb,color_fragment:Ab,color_pars_fragment:Rb,color_pars_vertex:Cb,color_vertex:wb,common:Db,cube_uv_reflection_fragment:Nb,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Ub,displacementmap_vertex:Ob,emissivemap_fragment:Ib,emissivemap_pars_fragment:Pb,colorspace_fragment:Fb,colorspace_pars_fragment:Bb,envmap_fragment:zb,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Gb,envmap_pars_vertex:Vb,envmap_physical_pars_fragment:$b,envmap_vertex:kb,fog_vertex:Xb,fog_pars_vertex:Wb,fog_fragment:Yb,fog_pars_fragment:qb,gradientmap_pars_fragment:jb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Kb,lights_lambert_pars_fragment:Qb,lights_pars_begin:Jb,lights_toon_fragment:t1,lights_toon_pars_fragment:e1,lights_phong_fragment:n1,lights_phong_pars_fragment:i1,lights_physical_fragment:a1,lights_physical_pars_fragment:s1,lights_fragment_begin:r1,lights_fragment_maps:o1,lights_fragment_end:l1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:u1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:d1,map_fragment:h1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:v1,morphinstance_vertex:x1,morphcolor_vertex:y1,morphnormal_vertex:S1,morphtarget_pars_vertex:M1,morphtarget_vertex:E1,normal_fragment_begin:b1,normal_fragment_maps:T1,normal_pars_fragment:A1,normal_pars_vertex:R1,normal_vertex:C1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:D1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:U1,opaque_fragment:O1,packing:I1,premultiplied_alpha_fragment:P1,project_vertex:F1,dithering_fragment:B1,dithering_pars_fragment:z1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:k1,shadowmap_vertex:X1,shadowmask_pars_fragment:W1,skinbase_vertex:Y1,skinning_pars_vertex:q1,skinning_vertex:j1,skinnormal_vertex:Z1,specularmap_fragment:K1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:$1,transmission_fragment:tT,transmission_pars_fragment:eT,uv_pars_fragment:nT,uv_pars_vertex:iT,uv_vertex:aT,worldpos_vertex:sT,background_vert:rT,background_frag:oT,backgroundCube_vert:lT,backgroundCube_frag:cT,cube_vert:uT,cube_frag:fT,depth_vert:dT,depth_frag:hT,distance_vert:pT,distance_frag:mT,equirect_vert:gT,equirect_frag:_T,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:yT,meshbasic_frag:ST,meshlambert_vert:MT,meshlambert_frag:ET,meshmatcap_vert:bT,meshmatcap_frag:TT,meshnormal_vert:AT,meshnormal_frag:RT,meshphong_vert:CT,meshphong_frag:wT,meshphysical_vert:DT,meshphysical_frag:NT,meshtoon_vert:LT,meshtoon_frag:UT,points_vert:OT,points_frag:IT,shadow_vert:PT,shadow_frag:FT,sprite_vert:BT,sprite_frag:zT},qt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},fs={basic:{uniforms:qi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:qi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:qi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:qi([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:qi([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new pe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:qi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:qi([qt.points,qt.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:qi([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:qi([qt.common,qt.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:qi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:qi([qt.sprite,qt.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:qi([qt.common,qt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:qi([qt.lights,qt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};fs.physical={uniforms:qi([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Ad={r:0,b:0,g:0},Lo=new Ra,HT=new _n;function GT(r,t,i,s,l,c){const f=new pe(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function x(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const D=C.backgroundBlurriness>0;L=t.get(L,D)}return L}function E(C){let L=!1;const D=x(C);D===null?M(f,h):D&&D.isColor&&(M(D,1),L=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,L){const D=x(L);D&&(D.isCubeTexture||D.mapping===Ju)?(p===void 0&&(p=new Re(new oo(1,1,1),new gs({name:"BackgroundCubeMaterial",uniforms:lc(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Lo.copy(L.backgroundRotation),Lo.x*=-1,Lo.y*=-1,Lo.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Lo.y*=-1,Lo.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(Lo)),p.material.toneMapped=Qe.getTransfer(D.colorSpace)!==ln,(_!==D||v!==D.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Re(new Aa(2,2),new gs({name:"BackgroundMaterial",uniforms:lc(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Qe.getTransfer(D.colorSpace)!==ln,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,v=D.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(Ad,vS(r)),i.buffers.color.setClear(Ad.r,Ad.g,Ad.b,L,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,L=1){f.set(C),h=L,M(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,M(f,h)},render:E,addToRenderList:w,dispose:S}}function VT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(G,J,et,tt,Q){let U=!1;const P=v(G,tt,et,J);c!==P&&(c=P,p(c.object)),U=x(G,tt,et,Q),U&&E(G,tt,et,Q),Q!==null&&t.update(Q,r.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,D(G,J,et,tt),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,J,et,tt){const Q=tt.wireframe===!0;let U=s[J.id];U===void 0&&(U={},s[J.id]=U);const P=G.isInstancedMesh===!0?G.id:0;let ct=U[P];ct===void 0&&(ct={},U[P]=ct);let pt=ct[et.id];pt===void 0&&(pt={},ct[et.id]=pt);let At=pt[Q];return At===void 0&&(At=g(m()),pt[Q]=At),At}function g(G){const J=[],et=[],tt=[];for(let Q=0;Q<i;Q++)J[Q]=0,et[Q]=0,tt[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:et,attributeDivisors:tt,object:G,attributes:{},index:null}}function x(G,J,et,tt){const Q=c.attributes,U=J.attributes;let P=0;const ct=et.getAttributes();for(const pt in ct)if(ct[pt].location>=0){const I=Q[pt];let j=U[pt];if(j===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),I===void 0||I.attribute!==j||j&&I.data!==j.data)return!0;P++}return c.attributesNum!==P||c.index!==tt}function E(G,J,et,tt){const Q={},U=J.attributes;let P=0;const ct=et.getAttributes();for(const pt in ct)if(ct[pt].location>=0){let I=U[pt];I===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const j={};j.attribute=I,I&&I.data&&(j.data=I.data),Q[pt]=j,P++}c.attributes=Q,c.attributesNum=P,c.index=tt}function w(){const G=c.newAttributes;for(let J=0,et=G.length;J<et;J++)G[J]=0}function M(G){S(G,0)}function S(G,J){const et=c.newAttributes,tt=c.enabledAttributes,Q=c.attributeDivisors;et[G]=1,tt[G]===0&&(r.enableVertexAttribArray(G),tt[G]=1),Q[G]!==J&&(r.vertexAttribDivisor(G,J),Q[G]=J)}function C(){const G=c.newAttributes,J=c.enabledAttributes;for(let et=0,tt=J.length;et<tt;et++)J[et]!==G[et]&&(r.disableVertexAttribArray(et),J[et]=0)}function L(G,J,et,tt,Q,U,P){P===!0?r.vertexAttribIPointer(G,J,et,Q,U):r.vertexAttribPointer(G,J,et,tt,Q,U)}function D(G,J,et,tt){w();const Q=tt.attributes,U=et.getAttributes(),P=J.defaultAttributeValues;for(const ct in U){const pt=U[ct];if(pt.location>=0){let At=Q[ct];if(At===void 0&&(ct==="instanceMatrix"&&G.instanceMatrix&&(At=G.instanceMatrix),ct==="instanceColor"&&G.instanceColor&&(At=G.instanceColor)),At!==void 0){const I=At.normalized,j=At.itemSize,gt=t.get(At);if(gt===void 0)continue;const Lt=gt.buffer,jt=gt.type,it=gt.bytesPerElement,yt=jt===r.INT||jt===r.UNSIGNED_INT||At.gpuType===Ih;if(At.isInterleavedBufferAttribute){const Dt=At.data,te=Dt.stride,zt=At.offset;if(Dt.isInstancedInterleavedBuffer){for(let fe=0;fe<pt.locationSize;fe++)S(pt.location+fe,Dt.meshPerAttribute);G.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let fe=0;fe<pt.locationSize;fe++)M(pt.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let fe=0;fe<pt.locationSize;fe++)L(pt.location+fe,j/pt.locationSize,jt,I,te*it,(zt+j/pt.locationSize*fe)*it,yt)}else{if(At.isInstancedBufferAttribute){for(let Dt=0;Dt<pt.locationSize;Dt++)S(pt.location+Dt,At.meshPerAttribute);G.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Dt=0;Dt<pt.locationSize;Dt++)M(pt.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let Dt=0;Dt<pt.locationSize;Dt++)L(pt.location+Dt,j/pt.locationSize,jt,I,j*it,j/pt.locationSize*Dt*it,yt)}}else if(P!==void 0){const I=P[ct];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(pt.location,I);break;case 3:r.vertexAttrib3fv(pt.location,I);break;case 4:r.vertexAttrib4fv(pt.location,I);break;default:r.vertexAttrib1fv(pt.location,I)}}}}C()}function B(){N();for(const G in s){const J=s[G];for(const et in J){const tt=J[et];for(const Q in tt){const U=tt[Q];for(const P in U)_(U[P].object),delete U[P];delete tt[Q]}}delete s[G]}}function F(G){if(s[G.id]===void 0)return;const J=s[G.id];for(const et in J){const tt=J[et];for(const Q in tt){const U=tt[Q];for(const P in U)_(U[P].object),delete U[P];delete tt[Q]}}delete s[G.id]}function H(G){for(const J in s){const et=s[J];for(const tt in et){const Q=et[tt];if(Q[G.id]===void 0)continue;const U=Q[G.id];for(const P in U)_(U[P].object),delete U[P];delete Q[G.id]}}}function T(G){for(const J in s){const et=s[J],tt=G.isInstancedMesh===!0?G.id:0,Q=et[tt];if(Q!==void 0){for(const U in Q){const P=Q[U];for(const ct in P)_(P[ct].object),delete P[ct];delete Q[U]}delete et[tt],Object.keys(et).length===0&&delete s[J]}}}function N(){ut(),f=!0,c!==l&&(c=l,p(c.object))}function ut(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:ut,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function kT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let x=0;for(let E=0;E<v;E++)x+=_[E];i.update(x,s,1)}function m(p,_,v,g){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)f(p[E],_[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function XT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==ja&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const T=H===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==aa&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==qa&&!T)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ve("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:D,maxSamples:B,samples:F}}function WT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new $r,h=new Ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||s!==0||l;return l=g,s=v.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,x){const E=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,L=C*4;let D=S.clippingState||null;m.value=D,D=_(E,g,L,x);for(let B=0;B!==L;++B)D[B]=i[B];S.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,x,E){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const S=x+w*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,D=x;L!==w;++L,D+=4)f.copy(v[L]).applyMatrix4(C,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const ao=4,Yx=[.125,.215,.35,.446,.526,.582],zo=20,YT=256,wu=new Jh,qx=new pe;let d0=null,h0=0,p0=0,m0=!1;const qT=new q;class Nh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=qT}=c;d0=this._renderer.getRenderTarget(),h0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(d0,h0,p0),this._renderer.xr.enabled=m0,t.scissorTest=!1,ql(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===so||t.mapping===Xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),d0=this._renderer.getRenderTarget(),h0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Is,format:ja,colorSpace:Yo,depthBuffer:!1},l=jx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jT(c)),this._blurMaterial=KT(c,t,i),this._ggxMaterial=ZT(c,t,i)}return l}_compileMaterial(t){const i=new Re(new Gi,t);this._renderer.compile(i,wu)}_sceneToCubeUV(t,i,s,l,c){const m=new ji(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(qx),v.toneMapping=hs,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new oo,new no({name:"PMREM.Background",side:Hi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(qx),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const B=this._cubeSize;ql(l,D*B,L>2?B:0,B,B),v.setRenderTarget(l),S&&v.render(w,m),v.render(t,m)}v.toneMapping=x,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===so||t.mapping===Xo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;ql(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,wu)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,x=v*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-ao?s-E+ao:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=E-i,ql(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(h,wu),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,ql(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(h,wu)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,x=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*zo-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):zo;M>zo&&ve(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${zo}`);const S=[];let C=0;for(let H=0;H<zo;++H){const T=H/w,N=Math.exp(-T*T/2);S.push(N),H===0?C+=N:H<M&&(C+=2*N)}for(let H=0;H<S.length;H++)S[H]=S[H]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const D=this._sizeLods[l],B=3*D*(l>L-ao?l-L+ao:0),F=4*(this._cubeSize-D);ql(i,B,F,3*D,2*D),m.setRenderTarget(i),m.render(v,wu)}}function jT(r){const t=[],i=[],s=[];let l=r;const c=r-ao+1+Yx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-ao?m=Yx[f-r+ao-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,E=6,w=3,M=2,S=1,C=new Float32Array(w*E*x),L=new Float32Array(M*E*x),D=new Float32Array(S*E*x);for(let F=0;F<x;F++){const H=F%3*2/3-1,T=F>2?0:-1,N=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];C.set(N,w*E*F),L.set(g,M*E*F);const ut=[F,F,F,F,F,F];D.set(ut,S*E*F)}const B=new Gi;B.setAttribute("position",new Za(C,w)),B.setAttribute("uv",new Za(L,M)),B.setAttribute("faceIndex",new Za(D,S)),s.push(new Re(B,null)),l>ao&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function jx(r,t,i){const s=new ps(r,t,i);return s.texture.mapping=Ju,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ql(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function ZT(r,t,i){return new gs({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Os,depthTest:!1,depthWrite:!1})}function KT(r,t,i){const s=new Float32Array(zo),l=new q(0,1,0);return new gs({name:"SphericalGaussianBlur",defines:{n:zo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Os,depthTest:!1,depthWrite:!1})}function Zx(){return new gs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Os,depthTest:!1,depthWrite:!1})}function Kx(){return new gs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Os,depthTest:!1,depthWrite:!1})}function $h(){return`

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
	`}class hg extends ps{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new lg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new oo(5,5,5),c=new gs({name:"CubemapFromEquirect",uniforms:lc(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hi,blending:Os});c.uniforms.tEquirect.value=i;const f=new Re(l,c),h=i.minFilter;return i.minFilter===fr&&(i.minFilter=jn),new DS(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function QT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,x=!1){return g==null?null:x?f(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===Pd||x===Fd)if(t.has(g)){const E=t.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new hg(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const x=g.mapping,E=x===Pd||x===Fd,w=x===so||x===Xo;if(E||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Nh(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return E&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new Nh(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function h(g,x){return x===Pd?g.mapping=so:x===Fd&&(g.mapping=Xo),g}function m(g){let x=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&x++;return x===E}function p(g){const x=g.target;x.removeEventListener("dispose",p);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function JT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ju("WebGLRenderer: "+s+" extension not supported."),l}}}function $T(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const x=c.get(g);x&&(t.remove(x),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function p(v){const g=[],x=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(x!==null){const C=x.array;w=x.version;for(let L=0,D=C.length;L<D;L+=3){const B=C[L+0],F=C[L+1],H=C[L+2];g.push(B,F,F,H,H,B)}}else{const C=E.array;w=E.version;for(let L=0,D=C.length/3-1;L<D;L+=3){const B=L+0,F=L+1,H=L+2;g.push(B,F,F,H,H,B)}}const M=new(E.count>=65535?sg:ag)(g,1);M.version=w;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function tA(r,t,i){let s;function l(g){s=g}let c,f;function h(g){c=g.type,f=g.bytesPerElement}function m(g,x){r.drawElements(s,x,c,g*f),i.update(x,s,1)}function p(g,x,E){E!==0&&(r.drawElementsInstanced(s,x,c,g*f,E),i.update(x,s,E))}function _(g,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,g,0,E);let M=0;for(let S=0;S<E;S++)M+=x[S];i.update(M,s,1)}function v(g,x,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/f,x[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,c,g,0,w,0,E);let S=0;for(let C=0;C<E;C++)S+=x[C]*w[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function eA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ke("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nA(r,t,i){const s=new WeakMap,l=new Hn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let ut=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",ut)};var x=ut;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let B=h.attributes.position.count*D,F=1;B>t.maxTextureSize&&(F=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const H=new Float32Array(B*F*4*v),T=new ng(H,B,F,v);T.type=qa,T.needsUpdate=!0;const N=D*4;for(let G=0;G<v;G++){const J=S[G],et=C[G],tt=L[G],Q=B*F*4*G;for(let U=0;U<J.count;U++){const P=U*N;E===!0&&(l.fromBufferAttribute(J,U),H[Q+P+0]=l.x,H[Q+P+1]=l.y,H[Q+P+2]=l.z,H[Q+P+3]=0),w===!0&&(l.fromBufferAttribute(et,U),H[Q+P+4]=l.x,H[Q+P+5]=l.y,H[Q+P+6]=l.z,H[Q+P+7]=0),M===!0&&(l.fromBufferAttribute(tt,U),H[Q+P+8]=l.x,H[Q+P+9]=l.y,H[Q+P+10]=l.z,H[Q+P+11]=tt.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Ie(B,F)},s.set(h,g),h.addEventListener("dispose",ut)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function iA(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==_&&(x.update(),c.set(x,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const aA={[V0]:"LINEAR_TONE_MAPPING",[k0]:"REINHARD_TONE_MAPPING",[X0]:"CINEON_TONE_MAPPING",[Oh]:"ACES_FILMIC_TONE_MAPPING",[Y0]:"AGX_TONE_MAPPING",[q0]:"NEUTRAL_TONE_MAPPING",[W0]:"CUSTOM_TONE_MAPPING"};function sA(r,t,i,s,l){const c=new ps(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ps(t,i,{type:Is,depthBuffer:!1,stencilBuffer:!1}),h=new Gi;h.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const m=new yS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Re(h,m),_=new Jh(-1,1,1,-1,0,1);let v=null,g=null,x=!1,E,w=null,M=[],S=!1;this.setSize=function(C,L){c.setSize(C,L),f.setSize(C,L);for(let D=0;D<M.length;D++){const B=M[D];B.setSize&&B.setSize(C,L)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const L=c.width,D=c.height;for(let B=0;B<M.length;B++){const F=M[B];F.setSize&&F.setSize(L,D)}},this.begin=function(C,L){if(x||C.toneMapping===hs&&M.length===0)return!1;if(w=L,L!==null){const D=L.width,B=L.height;(c.width!==D||c.height!==B)&&this.setSize(D,B)}return S===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=hs,!0},this.hasRenderPass=function(){return S},this.end=function(C,L){C.toneMapping=E,x=!0;let D=c,B=f;for(let F=0;F<M.length;F++){const H=M[F];if(H.enabled!==!1&&(H.render(C,B,D,L),H.needsSwap!==!1)){const T=D;D=B,B=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},Qe.getTransfer(v)===ln&&(m.defines.SRGB_TRANSFER="");const F=aA[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(p,_),w=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const IS=new vi,P0=new oc(1,1),PS=new ng,FS=new fS,BS=new lg,Qx=[],Jx=[],$x=new Float32Array(16),ty=new Float32Array(9),ey=new Float32Array(4);function dc(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Qx[l];if(c===void 0&&(c=new Float32Array(l),Qx[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function xi(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yi(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function tp(r,t){let i=Jx[t];i===void 0&&(i=new Int32Array(t),Jx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function rA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function oA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xi(i,t))return;r.uniform2fv(this.addr,t),yi(i,t)}}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xi(i,t))return;r.uniform3fv(this.addr,t),yi(i,t)}}function cA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xi(i,t))return;r.uniform4fv(this.addr,t),yi(i,t)}}function uA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xi(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yi(i,t)}else{if(xi(i,s))return;ey.set(s),r.uniformMatrix2fv(this.addr,!1,ey),yi(i,s)}}function fA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xi(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yi(i,t)}else{if(xi(i,s))return;ty.set(s),r.uniformMatrix3fv(this.addr,!1,ty),yi(i,s)}}function dA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xi(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yi(i,t)}else{if(xi(i,s))return;$x.set(s),r.uniformMatrix4fv(this.addr,!1,$x),yi(i,s)}}function hA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function pA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xi(i,t))return;r.uniform2iv(this.addr,t),yi(i,t)}}function mA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xi(i,t))return;r.uniform3iv(this.addr,t),yi(i,t)}}function gA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xi(i,t))return;r.uniform4iv(this.addr,t),yi(i,t)}}function _A(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function vA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xi(i,t))return;r.uniform2uiv(this.addr,t),yi(i,t)}}function xA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xi(i,t))return;r.uniform3uiv(this.addr,t),yi(i,t)}}function yA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xi(i,t))return;r.uniform4uiv(this.addr,t),yi(i,t)}}function SA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(P0.compareFunction=i.isReversedDepthBuffer()?Xh:kh,c=P0):c=IS,i.setTexture2D(t||c,l)}function MA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||FS,l)}function EA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||BS,l)}function bA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||PS,l)}function TA(r){switch(r){case 5126:return rA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return xA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return bA}}function AA(r,t){r.uniform1fv(this.addr,t)}function RA(r,t){const i=dc(t,this.size,2);r.uniform2fv(this.addr,i)}function CA(r,t){const i=dc(t,this.size,3);r.uniform3fv(this.addr,i)}function wA(r,t){const i=dc(t,this.size,4);r.uniform4fv(this.addr,i)}function DA(r,t){const i=dc(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function NA(r,t){const i=dc(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function LA(r,t){const i=dc(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function UA(r,t){r.uniform1iv(this.addr,t)}function OA(r,t){r.uniform2iv(this.addr,t)}function IA(r,t){r.uniform3iv(this.addr,t)}function PA(r,t){r.uniform4iv(this.addr,t)}function FA(r,t){r.uniform1uiv(this.addr,t)}function BA(r,t){r.uniform2uiv(this.addr,t)}function zA(r,t){r.uniform3uiv(this.addr,t)}function HA(r,t){r.uniform4uiv(this.addr,t)}function GA(r,t,i){const s=this.cache,l=t.length,c=tp(i,l);xi(s,c)||(r.uniform1iv(this.addr,c),yi(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=P0:f=IS;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function VA(r,t,i){const s=this.cache,l=t.length,c=tp(i,l);xi(s,c)||(r.uniform1iv(this.addr,c),yi(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||FS,c[f])}function kA(r,t,i){const s=this.cache,l=t.length,c=tp(i,l);xi(s,c)||(r.uniform1iv(this.addr,c),yi(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||BS,c[f])}function XA(r,t,i){const s=this.cache,l=t.length,c=tp(i,l);xi(s,c)||(r.uniform1iv(this.addr,c),yi(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||PS,c[f])}function WA(r){switch(r){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return wA;case 35674:return DA;case 35675:return NA;case 35676:return LA;case 5124:case 35670:return UA;case 35667:case 35671:return OA;case 35668:case 35672:return IA;case 35669:case 35673:return PA;case 5125:return FA;case 36294:return BA;case 36295:return zA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return XA}}class YA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TA(i.type)}}class qA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WA(i.type)}}class jA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const g0=/(\w+)(\])?(\[|\.)?/g;function ny(r,t){r.seq.push(t),r.map[t.id]=t}function ZA(r,t,i){const s=r.name,l=s.length;for(g0.lastIndex=0;;){const c=g0.exec(s),f=g0.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){ny(i,p===void 0?new YA(h,r,t):new qA(h,r,t));break}else{let v=i.map[h];v===void 0&&(v=new jA(h),ny(i,v)),i=v}}}class Vd{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);ZA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function iy(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const KA=37297;let QA=0;function JA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const ay=new Ce;function $A(r){Qe._getMatrix(ay,Qe.workingColorSpace,r);const t=`mat3( ${ay.elements.map(i=>i.toFixed(4))} )`;switch(Qe.getTransfer(r)){case Yu:return[t,"LinearTransferOETF"];case ln:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sy(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+JA(r.getShaderSource(t),h)}else return c}function t2(r,t){const i=$A(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const e2={[V0]:"Linear",[k0]:"Reinhard",[X0]:"Cineon",[Oh]:"ACESFilmic",[Y0]:"AgX",[q0]:"Neutral",[W0]:"Custom"};function n2(r,t){const i=e2[t];return i===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rd=new q;function i2(){Qe.getLuminanceCoefficients(Rd);const r=Rd.x.toFixed(4),t=Rd.y.toFixed(4),i=Rd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fu).join(`
`)}function s2(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function r2(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Fu(r){return r!==""}function ry(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oy(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o2=/^[ \t]*#include +<([\w\d./]+)>/gm;function F0(r){return r.replace(o2,c2)}const l2=new Map;function c2(r,t){let i=Le[t];if(i===void 0){const s=l2.get(t);if(s!==void 0)i=Le[s],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return F0(i)}const u2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ly(r){return r.replace(u2,f2)}function f2(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function cy(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const d2={[Go]:"SHADOWMAP_TYPE_PCF",[$l]:"SHADOWMAP_TYPE_VSM"};function h2(r){return d2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p2={[so]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE",[Ju]:"ENVMAP_TYPE_CUBE_UV"};function m2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":p2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const g2={[Xo]:"ENVMAP_MODE_REFRACTION"};function _2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":g2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const v2={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[Ky]:"ENVMAP_BLENDING_MIX",[Qy]:"ENVMAP_BLENDING_ADD"};function x2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":v2[r.combine]||"ENVMAP_BLENDING_NONE"}function y2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function S2(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=h2(i),p=m2(i),_=_2(i),v=x2(i),g=y2(i),x=a2(i),E=s2(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fu).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fu).join(`
`),S.length>0&&(S+=`
`)):(M=[cy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fu).join(`
`),S=[cy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==hs?"#define TONE_MAPPING":"",i.toneMapping!==hs?Le.tonemapping_pars_fragment:"",i.toneMapping!==hs?n2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,t2("linearToOutputTexel",i.outputColorSpace),i2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fu).join(`
`)),f=F0(f),f=ry(f,i),f=oy(f,i),h=F0(h),h=ry(h,i),h=oy(h,i),f=ly(f),h=ly(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=C+M+f,D=C+S+h,B=iy(l,l.VERTEX_SHADER,L),F=iy(l,l.FRAGMENT_SHADER,D);l.attachShader(w,B),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function H(G){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",et=l.getShaderInfoLog(B)||"",tt=l.getShaderInfoLog(F)||"",Q=J.trim(),U=et.trim(),P=tt.trim();let ct=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,B,F);else{const At=sy(l,B,"vertex"),I=sy(l,F,"fragment");Ke("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+At+`
`+I)}else Q!==""?ve("WebGLProgram: Program Info Log:",Q):(U===""||P==="")&&(pt=!1);pt&&(G.diagnostics={runnable:ct,programLog:Q,vertexShader:{log:U,prefix:M},fragmentShader:{log:P,prefix:S}})}l.deleteShader(B),l.deleteShader(F),T=new Vd(l,w),N=r2(l,w)}let T;this.getUniforms=function(){return T===void 0&&H(this),T};let N;this.getAttributes=function(){return N===void 0&&H(this),N};let ut=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ut===!1&&(ut=l.getProgramParameter(w,KA)),ut},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=F,this}let M2=0;class E2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new b2(t),i.set(t,s)),s}}class b2{constructor(t){this.id=M2++,this.code=t,this.usedTimes=0}}function T2(r,t,i,s,l,c){const f=new Yh,h=new E2,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,ut,G,J){const et=G.fog,tt=J.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,U=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=t.get(T.envMap||Q,U),ct=P&&P.mapping===Ju?P.image.height:null,pt=x[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ve("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const At=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,I=At!==void 0?At.length:0;let j=0;tt.morphAttributes.position!==void 0&&(j=1),tt.morphAttributes.normal!==void 0&&(j=2),tt.morphAttributes.color!==void 0&&(j=3);let gt,Lt,jt,it;if(pt){const Gt=fs[pt];gt=Gt.vertexShader,Lt=Gt.fragmentShader}else gt=T.vertexShader,Lt=T.fragmentShader,h.update(T),jt=h.getVertexShaderID(T),it=h.getFragmentShaderID(T);const yt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),te=J.isInstancedMesh===!0,zt=J.isBatchedMesh===!0,fe=!!T.map,Ee=!!T.matcap,be=!!P,xe=!!T.aoMap,Je=!!T.lightMap,ye=!!T.bumpMap,Dn=!!T.normalMap,X=!!T.displacementMap,vn=!!T.emissiveMap,we=!!T.metalnessMap,tn=!!T.roughnessMap,ie=T.anisotropy>0,O=T.clearcoat>0,b=T.dispersion>0,K=T.iridescence>0,vt=T.sheen>0,Rt=T.transmission>0,mt=ie&&!!T.anisotropyMap,ne=O&&!!T.clearcoatMap,Pt=O&&!!T.clearcoatNormalMap,le=O&&!!T.clearcoatRoughnessMap,de=K&&!!T.iridescenceMap,Nt=K&&!!T.iridescenceThicknessMap,wt=vt&&!!T.sheenColorMap,Qt=vt&&!!T.sheenRoughnessMap,Yt=!!T.specularMap,k=!!T.specularColorMap,Ct=!!T.specularIntensityMap,z=Rt&&!!T.transmissionMap,xt=Rt&&!!T.thicknessMap,ht=!!T.gradientMap,Ut=!!T.alphaMap,bt=T.alphaTest>0,Z=!!T.alphaHash,Ft=!!T.extensions;let Et=hs;T.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Et=r.toneMapping);const Xt={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:Lt,defines:T.defines,customVertexShaderID:jt,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:zt,batchingColor:zt&&J._colorsTexture!==null,instancing:te,instancingColor:te&&J.instanceColor!==null,instancingMorph:te&&J.morphTexture!==null,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Yo,alphaToCoverage:!!T.alphaToCoverage,map:fe,matcap:Ee,envMap:be,envMapMode:be&&P.mapping,envMapCubeUVHeight:ct,aoMap:xe,lightMap:Je,bumpMap:ye,normalMap:Dn,displacementMap:X,emissiveMap:vn,normalMapObjectSpace:Dn&&T.normalMapType===tS,normalMapTangentSpace:Dn&&T.normalMapType===Vh,metalnessMap:we,roughnessMap:tn,anisotropy:ie,anisotropyMap:mt,clearcoat:O,clearcoatMap:ne,clearcoatNormalMap:Pt,clearcoatRoughnessMap:le,dispersion:b,iridescence:K,iridescenceMap:de,iridescenceThicknessMap:Nt,sheen:vt,sheenColorMap:wt,sheenRoughnessMap:Qt,specularMap:Yt,specularColorMap:k,specularIntensityMap:Ct,transmission:Rt,transmissionMap:z,thicknessMap:xt,gradientMap:ht,opaque:T.transparent===!1&&T.blending===Vo&&T.alphaToCoverage===!1,alphaMap:Ut,alphaTest:bt,alphaHash:Z,combine:T.combine,mapUv:fe&&E(T.map.channel),aoMapUv:xe&&E(T.aoMap.channel),lightMapUv:Je&&E(T.lightMap.channel),bumpMapUv:ye&&E(T.bumpMap.channel),normalMapUv:Dn&&E(T.normalMap.channel),displacementMapUv:X&&E(T.displacementMap.channel),emissiveMapUv:vn&&E(T.emissiveMap.channel),metalnessMapUv:we&&E(T.metalnessMap.channel),roughnessMapUv:tn&&E(T.roughnessMap.channel),anisotropyMapUv:mt&&E(T.anisotropyMap.channel),clearcoatMapUv:ne&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&E(T.sheenRoughnessMap.channel),specularMapUv:Yt&&E(T.specularMap.channel),specularColorMapUv:k&&E(T.specularColorMap.channel),specularIntensityMapUv:Ct&&E(T.specularIntensityMap.channel),transmissionMapUv:z&&E(T.transmissionMap.channel),thicknessMapUv:xt&&E(T.thicknessMap.channel),alphaMapUv:Ut&&E(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Dn||ie),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!tt.attributes.uv&&(fe||Ut),fog:!!et,useFog:T.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&Dn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:J.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:j,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ut.length>0,shadowMapType:r.shadowMap.type,toneMapping:Et,decodeVideoTexture:fe&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===ln,decodeVideoTextureEmissive:vn&&T.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(T.emissiveMap.colorSpace)===ln,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qn,flipSided:T.side===Hi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ft&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&T.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ut in T.defines)N.push(ut),N.push(T.defines[ut]);return T.isRawShaderMaterial===!1&&(S(N,T),C(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function C(T,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),T.push(f.mask)}function L(T){const N=x[T.type];let ut;if(N){const G=fs[N];ut=xS.clone(G.uniforms)}else ut=T.uniforms;return ut}function D(T,N){let ut=_.get(N);return ut!==void 0?++ut.usedTimes:(ut=new S2(r,N,T,l),p.push(ut),_.set(N,ut)),ut}function B(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function F(T){h.remove(T)}function H(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:D,releaseProgram:B,releaseShaderCache:F,programs:p,dispose:H}}function A2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function R2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function uy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fy(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function h(g,x,E,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:x,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=x,C.material=E,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,x,E,w,M,S){const C=h(g,x,E,w,M,S);E.transmission>0?s.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,x,E,w,M,S){const C=h(g,x,E,w,M,S);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,x){i.length>1&&i.sort(g||R2),s.length>1&&s.sort(x||uy),l.length>1&&l.sort(x||uy)}function v(){for(let g=t,x=r.length;g<x;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function C2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new fy,r.set(s,[f])):l>=c.length?(f=new fy,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function w2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new pe};break;case"SpotLight":i={position:new q,direction:new q,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":i={color:new pe,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function D2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let N2=0;function L2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function U2(r){const t=new w2,i=D2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new _n,f=new _n;function h(p){let _=0,v=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,E=0,w=0,M=0,S=0,C=0,L=0,D=0,B=0,F=0,H=0;p.sort(L2);for(let N=0,ut=p.length;N<ut;N++){const G=p[N],J=G.color,et=G.intensity,tt=G.distance;let Q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Wo?Q=G.shadow.map.texture:Q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=J.r*et,v+=J.g*et,g+=J.b*et;else if(G.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(G.sh.coefficients[U],et);H++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,ct=i.get(G);ct.shadowIntensity=P.intensity,ct.shadowBias=P.bias,ct.shadowNormalBias=P.normalBias,ct.shadowRadius=P.radius,ct.shadowMapSize=P.mapSize,s.directionalShadow[x]=ct,s.directionalShadowMap[x]=Q,s.directionalShadowMatrix[x]=G.shadow.matrix,C++}s.directional[x]=U,x++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(J).multiplyScalar(et),U.distance=tt,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,s.spot[w]=U;const P=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,P.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[w]=P.matrix,G.castShadow){const ct=i.get(G);ct.shadowIntensity=P.intensity,ct.shadowBias=P.bias,ct.shadowNormalBias=P.normalBias,ct.shadowRadius=P.radius,ct.shadowMapSize=P.mapSize,s.spotShadow[w]=ct,s.spotShadowMap[w]=Q,D++}w++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(J).multiplyScalar(et),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=U,M++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const P=G.shadow,ct=i.get(G);ct.shadowIntensity=P.intensity,ct.shadowBias=P.bias,ct.shadowNormalBias=P.normalBias,ct.shadowRadius=P.radius,ct.shadowMapSize=P.mapSize,ct.shadowCameraNear=P.camera.near,ct.shadowCameraFar=P.camera.far,s.pointShadow[E]=ct,s.pointShadowMap[E]=Q,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=U,E++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar(et),U.groundColor.copy(G.groundColor).multiplyScalar(et),s.hemi[S]=U,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qt.LTC_FLOAT_1,s.rectAreaLTC2=qt.LTC_FLOAT_2):(s.rectAreaLTC1=qt.LTC_HALF_1,s.rectAreaLTC2=qt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==D||T.numSpotMaps!==B||T.numLightProbes!==H)&&(s.directional.length=x,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+B-F,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=H,T.directionalLength=x,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=D,T.numSpotMaps=B,T.numLightProbes=H,s.version=N2++)}function m(p,_){let v=0,g=0,x=0,E=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const L=p[S];if(L.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(L.isSpotLight){const D=s.spot[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:h,setupView:m,state:s}}function dy(r){const t=new U2(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function O2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new dy(r),t.set(l,[h])):c>=f.length?(h=new dy(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const I2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
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
}`,F2=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],B2=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],hy=new _n,Du=new q,_0=new q;function z2(r,t,i){let s=new qh;const l=new Ie,c=new Ie,f=new Hn,h=new MS,m=new ES,p={},_=i.maxTextureSize,v={[hr]:Hi,[Hi]:hr,[qn]:qn},g=new gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:I2,fragmentShader:P2}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Gi;E.setAttribute("position",new Za(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Re(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let S=this.type;this.render=function(F,H,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;this.type===Ny&&(ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Go);const N=r.getRenderTarget(),ut=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Os),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const et=S!==this.type;et&&H.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(Q=>Q.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,Q=F.length;tt<Q;tt++){const U=F[tt],P=U.shadow;if(P===void 0){ve("WebGLShadowMap:",U,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const ct=P.getFrameExtents();l.multiply(ct),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ct.x),l.x=c.x*ct.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ct.y),l.y=c.y*ct.y,P.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=pt,P.map===null||et===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===$l){if(U.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new ps(l.x,l.y,{format:Wo,type:Is,minFilter:jn,magFilter:jn,generateMipmaps:!1}),P.map.texture.name=U.name+".shadowMap",P.map.depthTexture=new oc(l.x,l.y,qa),P.map.depthTexture.name=U.name+".shadowMapDepth",P.map.depthTexture.format=Ps,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Ai,P.map.depthTexture.magFilter=Ai}else U.isPointLight?(P.map=new hg(l.x),P.map.depthTexture=new mS(l.x,ms)):(P.map=new ps(l.x,l.y),P.map.depthTexture=new oc(l.x,l.y,ms)),P.map.depthTexture.name=U.name+".shadowMap",P.map.depthTexture.format=Ps,this.type===Go?(P.map.depthTexture.compareFunction=pt?Xh:kh,P.map.depthTexture.minFilter=jn,P.map.depthTexture.magFilter=jn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Ai,P.map.depthTexture.magFilter=Ai);P.camera.updateProjectionMatrix()}const At=P.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<At;I++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,I),r.clear();else{I===0&&(r.setRenderTarget(P.map),r.clear());const j=P.getViewport(I);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),J.viewport(f)}if(U.isPointLight){const j=P.camera,gt=P.matrix,Lt=U.distance||j.far;Lt!==j.far&&(j.far=Lt,j.updateProjectionMatrix()),Du.setFromMatrixPosition(U.matrixWorld),j.position.copy(Du),_0.copy(j.position),_0.add(F2[I]),j.up.copy(B2[I]),j.lookAt(_0),j.updateMatrixWorld(),gt.makeTranslation(-Du.x,-Du.y,-Du.z),hy.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),P._frustum.setFromProjectionMatrix(hy,j.coordinateSystem,j.reversedDepth)}else P.updateMatrices(U);s=P.getFrustum(),D(H,T,P.camera,U,this.type)}P.isPointLightShadow!==!0&&this.type===$l&&C(P,T),P.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(N,ut,G)};function C(F,H){const T=t.update(w);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ps(l.x,l.y,{format:Wo,type:Is})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(H,null,T,g,w,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(H,null,T,x,w,null)}function L(F,H,T,N){let ut=null;const G=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)ut=G;else if(ut=T.isPointLight===!0?m:h,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const J=ut.uuid,et=H.uuid;let tt=p[J];tt===void 0&&(tt={},p[J]=tt);let Q=tt[et];Q===void 0&&(Q=ut.clone(),tt[et]=Q,H.addEventListener("dispose",B)),ut=Q}if(ut.visible=H.visible,ut.wireframe=H.wireframe,N===$l?ut.side=H.shadowSide!==null?H.shadowSide:H.side:ut.side=H.shadowSide!==null?H.shadowSide:v[H.side],ut.alphaMap=H.alphaMap,ut.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,ut.map=H.map,ut.clipShadows=H.clipShadows,ut.clippingPlanes=H.clippingPlanes,ut.clipIntersection=H.clipIntersection,ut.displacementMap=H.displacementMap,ut.displacementScale=H.displacementScale,ut.displacementBias=H.displacementBias,ut.wireframeLinewidth=H.wireframeLinewidth,ut.linewidth=H.linewidth,T.isPointLight===!0&&ut.isMeshDistanceMaterial===!0){const J=r.properties.get(ut);J.light=T}return ut}function D(F,H,T,N,ut){if(F.visible===!1)return;if(F.layers.test(H.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ut===$l)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const et=t.update(F),tt=F.material;if(Array.isArray(tt)){const Q=et.groups;for(let U=0,P=Q.length;U<P;U++){const ct=Q[U],pt=tt[ct.materialIndex];if(pt&&pt.visible){const At=L(F,pt,N,ut);F.onBeforeShadow(r,F,H,T,et,At,ct),r.renderBufferDirect(T,null,et,At,F,ct),F.onAfterShadow(r,F,H,T,et,At,ct)}}}else if(tt.visible){const Q=L(F,tt,N,ut);F.onBeforeShadow(r,F,H,T,et,Q,null),r.renderBufferDirect(T,null,et,Q,F,null),F.onAfterShadow(r,F,H,T,et,Q,null)}}const J=F.children;for(let et=0,tt=J.length;et<tt;et++)D(J[et],H,T,N,ut)}function B(F){F.target.removeEventListener("dispose",B);for(const T in p){const N=p[T],ut=F.target.uuid;ut in N&&(N[ut].dispose(),delete N[ut])}}}function H2(r,t){function i(){let z=!1;const xt=new Hn;let ht=null;const Ut=new Hn(0,0,0,0);return{setMask:function(bt){ht!==bt&&!z&&(r.colorMask(bt,bt,bt,bt),ht=bt)},setLocked:function(bt){z=bt},setClear:function(bt,Z,Ft,Et,Xt){Xt===!0&&(bt*=Et,Z*=Et,Ft*=Et),xt.set(bt,Z,Ft,Et),Ut.equals(xt)===!1&&(r.clearColor(bt,Z,Ft,Et),Ut.copy(xt))},reset:function(){z=!1,ht=null,Ut.set(-1,0,0,0)}}}function s(){let z=!1,xt=!1,ht=null,Ut=null,bt=null;return{setReversed:function(Z){if(xt!==Z){const Ft=t.get("EXT_clip_control");Z?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=Z;const Et=bt;bt=null,this.setClear(Et)}},getReversed:function(){return xt},setTest:function(Z){Z?yt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(Z){ht!==Z&&!z&&(r.depthMask(Z),ht=Z)},setFunc:function(Z){if(xt&&(Z=_E[Z]),Ut!==Z){switch(Z){case Wd:r.depthFunc(r.NEVER);break;case Yd:r.depthFunc(r.ALWAYS);break;case qd:r.depthFunc(r.LESS);break;case ko:r.depthFunc(r.LEQUAL);break;case jd:r.depthFunc(r.EQUAL);break;case Zd:r.depthFunc(r.GEQUAL);break;case Kd:r.depthFunc(r.GREATER);break;case Qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ut=Z}},setLocked:function(Z){z=Z},setClear:function(Z){bt!==Z&&(bt=Z,xt&&(Z=1-Z),r.clearDepth(Z))},reset:function(){z=!1,ht=null,Ut=null,bt=null,xt=!1}}}function l(){let z=!1,xt=null,ht=null,Ut=null,bt=null,Z=null,Ft=null,Et=null,Xt=null;return{setTest:function(Gt){z||(Gt?yt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Gt){xt!==Gt&&!z&&(r.stencilMask(Gt),xt=Gt)},setFunc:function(Gt,Nn,Si){(ht!==Gt||Ut!==Nn||bt!==Si)&&(r.stencilFunc(Gt,Nn,Si),ht=Gt,Ut=Nn,bt=Si)},setOp:function(Gt,Nn,Si){(Z!==Gt||Ft!==Nn||Et!==Si)&&(r.stencilOp(Gt,Nn,Si),Z=Gt,Ft=Nn,Et=Si)},setLocked:function(Gt){z=Gt},setClear:function(Gt){Xt!==Gt&&(r.clearStencil(Gt),Xt=Gt)},reset:function(){z=!1,xt=null,ht=null,Ut=null,bt=null,Z=null,Ft=null,Et=null,Xt=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,x=[],E=null,w=!1,M=null,S=null,C=null,L=null,D=null,B=null,F=null,H=new pe(0,0,0),T=0,N=!1,ut=null,G=null,J=null,et=null,tt=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,P=0;const ct=r.getParameter(r.VERSION);ct.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(ct)[1]),U=P>=1):ct.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),U=P>=2);let pt=null,At={};const I=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),gt=new Hn().fromArray(I),Lt=new Hn().fromArray(j);function jt(z,xt,ht,Ut){const bt=new Uint8Array(4),Z=r.createTexture();r.bindTexture(z,Z),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<ht;Ft++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(xt+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return Z}const it={};it[r.TEXTURE_2D]=jt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=jt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=jt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=jt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),f.setFunc(ko),ye(!1),Dn(T0),yt(r.CULL_FACE),xe(Os);function yt(z){_[z]!==!0&&(r.enable(z),_[z]=!0)}function Dt(z){_[z]!==!1&&(r.disable(z),_[z]=!1)}function te(z,xt){return v[z]!==xt?(r.bindFramebuffer(z,xt),v[z]=xt,z===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=xt),z===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function zt(z,xt){let ht=x,Ut=!1;if(z){ht=g.get(xt),ht===void 0&&(ht=[],g.set(xt,ht));const bt=z.textures;if(ht.length!==bt.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Ft=bt.length;Z<Ft;Z++)ht[Z]=r.COLOR_ATTACHMENT0+Z;ht.length=bt.length,Ut=!0}}else ht[0]!==r.BACK&&(ht[0]=r.BACK,Ut=!0);Ut&&r.drawBuffers(ht)}function fe(z){return E!==z?(r.useProgram(z),E=z,!0):!1}const Ee={[eo]:r.FUNC_ADD,[Uy]:r.FUNC_SUBTRACT,[Oy]:r.FUNC_REVERSE_SUBTRACT};Ee[Iy]=r.MIN,Ee[Py]=r.MAX;const be={[Fy]:r.ZERO,[By]:r.ONE,[zy]:r.SRC_COLOR,[kd]:r.SRC_ALPHA,[Wy]:r.SRC_ALPHA_SATURATE,[ky]:r.DST_COLOR,[Gy]:r.DST_ALPHA,[Hy]:r.ONE_MINUS_SRC_COLOR,[Xd]:r.ONE_MINUS_SRC_ALPHA,[Xy]:r.ONE_MINUS_DST_COLOR,[Vy]:r.ONE_MINUS_DST_ALPHA,[Yy]:r.CONSTANT_COLOR,[qy]:r.ONE_MINUS_CONSTANT_COLOR,[jy]:r.CONSTANT_ALPHA,[Zy]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(z,xt,ht,Ut,bt,Z,Ft,Et,Xt,Gt){if(z===Os){w===!0&&(Dt(r.BLEND),w=!1);return}if(w===!1&&(yt(r.BLEND),w=!0),z!==Ly){if(z!==M||Gt!==N){if((S!==eo||D!==eo)&&(r.blendEquation(r.FUNC_ADD),S=eo,D=eo),Gt)switch(z){case Vo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A0:r.blendFunc(r.ONE,r.ONE);break;case R0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case C0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ke("WebGLState: Invalid blending: ",z);break}else switch(z){case Vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case R0:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",z);break}C=null,L=null,B=null,F=null,H.set(0,0,0),T=0,M=z,N=Gt}return}bt=bt||xt,Z=Z||ht,Ft=Ft||Ut,(xt!==S||bt!==D)&&(r.blendEquationSeparate(Ee[xt],Ee[bt]),S=xt,D=bt),(ht!==C||Ut!==L||Z!==B||Ft!==F)&&(r.blendFuncSeparate(be[ht],be[Ut],be[Z],be[Ft]),C=ht,L=Ut,B=Z,F=Ft),(Et.equals(H)===!1||Xt!==T)&&(r.blendColor(Et.r,Et.g,Et.b,Xt),H.copy(Et),T=Xt),M=z,N=!1}function Je(z,xt){z.side===qn?Dt(r.CULL_FACE):yt(r.CULL_FACE);let ht=z.side===Hi;xt&&(ht=!ht),ye(ht),z.blending===Vo&&z.transparent===!1?xe(Os):xe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),f.setFunc(z.depthFunc),f.setTest(z.depthTest),f.setMask(z.depthWrite),c.setMask(z.colorWrite);const Ut=z.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),vn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ye(z){ut!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),ut=z)}function Dn(z){z!==Cy?(yt(r.CULL_FACE),z!==G&&(z===T0?r.cullFace(r.BACK):z===wy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),G=z}function X(z){z!==J&&(U&&r.lineWidth(z),J=z)}function vn(z,xt,ht){z?(yt(r.POLYGON_OFFSET_FILL),(et!==xt||tt!==ht)&&(et=xt,tt=ht,f.getReversed()&&(xt=-xt),r.polygonOffset(xt,ht))):Dt(r.POLYGON_OFFSET_FILL)}function we(z){z?yt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function tn(z){z===void 0&&(z=r.TEXTURE0+Q-1),pt!==z&&(r.activeTexture(z),pt=z)}function ie(z,xt,ht){ht===void 0&&(pt===null?ht=r.TEXTURE0+Q-1:ht=pt);let Ut=At[ht];Ut===void 0&&(Ut={type:void 0,texture:void 0},At[ht]=Ut),(Ut.type!==z||Ut.texture!==xt)&&(pt!==ht&&(r.activeTexture(ht),pt=ht),r.bindTexture(z,xt||it[z]),Ut.type=z,Ut.texture=xt)}function O(){const z=At[pt];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function vt(){try{r.texSubImage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function Rt(){try{r.texSubImage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function ne(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function Pt(){try{r.texStorage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function le(){try{r.texStorage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function de(){try{r.texImage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function Nt(){try{r.texImage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function wt(z){gt.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),gt.copy(z))}function Qt(z){Lt.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Lt.copy(z))}function Yt(z,xt){let ht=p.get(xt);ht===void 0&&(ht=new WeakMap,p.set(xt,ht));let Ut=ht.get(z);Ut===void 0&&(Ut=r.getUniformBlockIndex(xt,z.name),ht.set(z,Ut))}function k(z,xt){const Ut=p.get(xt).get(z);m.get(xt)!==Ut&&(r.uniformBlockBinding(xt,Ut,z.__bindingPointIndex),m.set(xt,Ut))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},pt=null,At={},v={},g=new WeakMap,x=[],E=null,w=!1,M=null,S=null,C=null,L=null,D=null,B=null,F=null,H=new pe(0,0,0),T=0,N=!1,ut=null,G=null,J=null,et=null,tt=null,gt.set(0,0,r.canvas.width,r.canvas.height),Lt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:yt,disable:Dt,bindFramebuffer:te,drawBuffers:zt,useProgram:fe,setBlending:xe,setMaterial:Je,setFlipSided:ye,setCullFace:Dn,setLineWidth:X,setPolygonOffset:vn,setScissorTest:we,activeTexture:tn,bindTexture:ie,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:de,texImage3D:Nt,updateUBOMapping:Yt,uniformBlockBinding:k,texStorage2D:Pt,texStorage3D:le,texSubImage2D:vt,texSubImage3D:Rt,compressedTexSubImage2D:mt,compressedTexSubImage3D:ne,scissor:wt,viewport:Qt,reset:Ct}}function G2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ie,_=new WeakMap;let v;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return x?new OffscreenCanvas(O,b):qu("canvas")}function w(O,b,K){let vt=1;const Rt=ie(O);if((Rt.width>K||Rt.height>K)&&(vt=K/Math.max(Rt.width,Rt.height)),vt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const mt=Math.floor(vt*Rt.width),ne=Math.floor(vt*Rt.height);v===void 0&&(v=E(mt,ne));const Pt=b?E(mt,ne):v;return Pt.width=mt,Pt.height=ne,Pt.getContext("2d").drawImage(O,0,0,mt,ne),ve("WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+mt+"x"+ne+")."),Pt}else return"data"in O&&ve("WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),O;return O}function M(O){return O.generateMipmaps}function S(O){r.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,b,K,vt,Rt=!1){if(O!==null){if(r[O]!==void 0)return r[O];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let mt=b;if(b===r.RED&&(K===r.FLOAT&&(mt=r.R32F),K===r.HALF_FLOAT&&(mt=r.R16F),K===r.UNSIGNED_BYTE&&(mt=r.R8)),b===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(mt=r.R8UI),K===r.UNSIGNED_SHORT&&(mt=r.R16UI),K===r.UNSIGNED_INT&&(mt=r.R32UI),K===r.BYTE&&(mt=r.R8I),K===r.SHORT&&(mt=r.R16I),K===r.INT&&(mt=r.R32I)),b===r.RG&&(K===r.FLOAT&&(mt=r.RG32F),K===r.HALF_FLOAT&&(mt=r.RG16F),K===r.UNSIGNED_BYTE&&(mt=r.RG8)),b===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(mt=r.RG8UI),K===r.UNSIGNED_SHORT&&(mt=r.RG16UI),K===r.UNSIGNED_INT&&(mt=r.RG32UI),K===r.BYTE&&(mt=r.RG8I),K===r.SHORT&&(mt=r.RG16I),K===r.INT&&(mt=r.RG32I)),b===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(mt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(mt=r.RGB16UI),K===r.UNSIGNED_INT&&(mt=r.RGB32UI),K===r.BYTE&&(mt=r.RGB8I),K===r.SHORT&&(mt=r.RGB16I),K===r.INT&&(mt=r.RGB32I)),b===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(mt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(mt=r.RGBA16UI),K===r.UNSIGNED_INT&&(mt=r.RGBA32UI),K===r.BYTE&&(mt=r.RGBA8I),K===r.SHORT&&(mt=r.RGBA16I),K===r.INT&&(mt=r.RGBA32I)),b===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(mt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(mt=r.R11F_G11F_B10F)),b===r.RGBA){const ne=Rt?Yu:Qe.getTransfer(vt);K===r.FLOAT&&(mt=r.RGBA32F),K===r.HALF_FLOAT&&(mt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(mt=ne===ln?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(mt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(mt=r.RGB5_A1)}return(mt===r.R16F||mt===r.R32F||mt===r.RG16F||mt===r.RG32F||mt===r.RGBA16F||mt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function D(O,b){let K;return O?b===null||b===ms||b===ac?K=r.DEPTH24_STENCIL8:b===qa?K=r.DEPTH32F_STENCIL8:b===ic&&(K=r.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ms||b===ac?K=r.DEPTH_COMPONENT24:b===qa?K=r.DEPTH_COMPONENT32F:b===ic&&(K=r.DEPTH_COMPONENT16),K}function B(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ai&&O.minFilter!==jn?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function F(O){const b=O.target;b.removeEventListener("dispose",F),T(b),b.isVideoTexture&&_.delete(b)}function H(O){const b=O.target;b.removeEventListener("dispose",H),ut(b)}function T(O){const b=s.get(O);if(b.__webglInit===void 0)return;const K=O.source,vt=g.get(K);if(vt){const Rt=vt[b.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&N(O),Object.keys(vt).length===0&&g.delete(K)}s.remove(O)}function N(O){const b=s.get(O);r.deleteTexture(b.__webglTexture);const K=O.source,vt=g.get(K);delete vt[b.__cacheKey],f.memory.textures--}function ut(O){const b=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(b.__webglFramebuffer[vt]))for(let Rt=0;Rt<b.__webglFramebuffer[vt].length;Rt++)r.deleteFramebuffer(b.__webglFramebuffer[vt][Rt]);else r.deleteFramebuffer(b.__webglFramebuffer[vt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[vt])}else{if(Array.isArray(b.__webglFramebuffer))for(let vt=0;vt<b.__webglFramebuffer.length;vt++)r.deleteFramebuffer(b.__webglFramebuffer[vt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let vt=0;vt<b.__webglColorRenderbuffer.length;vt++)b.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[vt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=O.textures;for(let vt=0,Rt=K.length;vt<Rt;vt++){const mt=s.get(K[vt]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),f.memory.textures--),s.remove(K[vt])}s.remove(O)}let G=0;function J(){G=0}function et(){const O=G;return O>=l.maxTextures&&ve("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function tt(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function Q(O,b){const K=s.get(O);if(O.isVideoTexture&&we(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&K.__version!==O.version){const vt=O.image;if(vt===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{it(K,O,b);return}}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+b)}function U(O,b){const K=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){it(K,O,b);return}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+b)}function P(O,b){const K=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){it(K,O,b);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+b)}function ct(O,b){const K=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&K.__version!==O.version){yt(K,O,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+b)}const pt={[nc]:r.REPEAT,[Us]:r.CLAMP_TO_EDGE,[Jd]:r.MIRRORED_REPEAT},At={[Ai]:r.NEAREST,[Jy]:r.NEAREST_MIPMAP_NEAREST,[Pu]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[Bd]:r.LINEAR_MIPMAP_NEAREST,[fr]:r.LINEAR_MIPMAP_LINEAR},I={[eS]:r.NEVER,[rS]:r.ALWAYS,[nS]:r.LESS,[kh]:r.LEQUAL,[iS]:r.EQUAL,[Xh]:r.GEQUAL,[aS]:r.GREATER,[sS]:r.NOTEQUAL};function j(O,b){if(b.type===qa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===jn||b.magFilter===Bd||b.magFilter===Pu||b.magFilter===fr||b.minFilter===jn||b.minFilter===Bd||b.minFilter===Pu||b.minFilter===fr)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,pt[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,pt[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,pt[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,At[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ai||b.minFilter!==Pu&&b.minFilter!==fr||b.type===qa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function gt(O,b){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",F));const vt=b.source;let Rt=g.get(vt);Rt===void 0&&(Rt={},g.set(vt,Rt));const mt=tt(b);if(mt!==O.__cacheKey){Rt[mt]===void 0&&(Rt[mt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),Rt[mt].usedTimes++;const ne=Rt[O.__cacheKey];ne!==void 0&&(Rt[O.__cacheKey].usedTimes--,ne.usedTimes===0&&N(b)),O.__cacheKey=mt,O.__webglTexture=Rt[mt].texture}return K}function Lt(O,b,K){return Math.floor(Math.floor(O/K)/b)}function jt(O,b,K,vt){const mt=O.updateRanges;if(mt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,K,vt,b.data);else{mt.sort((Nt,wt)=>Nt.start-wt.start);let ne=0;for(let Nt=1;Nt<mt.length;Nt++){const wt=mt[ne],Qt=mt[Nt],Yt=wt.start+wt.count,k=Lt(Qt.start,b.width,4),Ct=Lt(wt.start,b.width,4);Qt.start<=Yt+1&&k===Ct&&Lt(Qt.start+Qt.count-1,b.width,4)===k?wt.count=Math.max(wt.count,Qt.start+Qt.count-wt.start):(++ne,mt[ne]=Qt)}mt.length=ne+1;const Pt=r.getParameter(r.UNPACK_ROW_LENGTH),le=r.getParameter(r.UNPACK_SKIP_PIXELS),de=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Nt=0,wt=mt.length;Nt<wt;Nt++){const Qt=mt[Nt],Yt=Math.floor(Qt.start/4),k=Math.ceil(Qt.count/4),Ct=Yt%b.width,z=Math.floor(Yt/b.width),xt=k,ht=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),i.texSubImage2D(r.TEXTURE_2D,0,Ct,z,xt,ht,K,vt,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Pt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function it(O,b,K){let vt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(vt=r.TEXTURE_3D);const Rt=gt(O,b),mt=b.source;i.bindTexture(vt,O.__webglTexture,r.TEXTURE0+K);const ne=s.get(mt);if(mt.version!==ne.__version||Rt===!0){i.activeTexture(r.TEXTURE0+K);const Pt=Qe.getPrimaries(Qe.workingColorSpace),le=b.colorSpace===ur?null:Qe.getPrimaries(b.colorSpace),de=b.colorSpace===ur||Pt===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Nt=w(b.image,!1,l.maxTextureSize);Nt=tn(b,Nt);const wt=c.convert(b.format,b.colorSpace),Qt=c.convert(b.type);let Yt=L(b.internalFormat,wt,Qt,b.colorSpace,b.isVideoTexture);j(vt,b);let k;const Ct=b.mipmaps,z=b.isVideoTexture!==!0,xt=ne.__version===void 0||Rt===!0,ht=mt.dataReady,Ut=B(b,Nt);if(b.isDepthTexture)Yt=D(b.format===io,b.type),xt&&(z?i.texStorage2D(r.TEXTURE_2D,1,Yt,Nt.width,Nt.height):i.texImage2D(r.TEXTURE_2D,0,Yt,Nt.width,Nt.height,0,wt,Qt,null));else if(b.isDataTexture)if(Ct.length>0){z&&xt&&i.texStorage2D(r.TEXTURE_2D,Ut,Yt,Ct[0].width,Ct[0].height);for(let bt=0,Z=Ct.length;bt<Z;bt++)k=Ct[bt],z?ht&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,k.width,k.height,wt,Qt,k.data):i.texImage2D(r.TEXTURE_2D,bt,Yt,k.width,k.height,0,wt,Qt,k.data);b.generateMipmaps=!1}else z?(xt&&i.texStorage2D(r.TEXTURE_2D,Ut,Yt,Nt.width,Nt.height),ht&&jt(b,Nt,wt,Qt)):i.texImage2D(r.TEXTURE_2D,0,Yt,Nt.width,Nt.height,0,wt,Qt,Nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&xt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Yt,Ct[0].width,Ct[0].height,Nt.depth);for(let bt=0,Z=Ct.length;bt<Z;bt++)if(k=Ct[bt],b.format!==ja)if(wt!==null)if(z){if(ht)if(b.layerUpdates.size>0){const Ft=Wx(k.width,k.height,b.format,b.type);for(const Et of b.layerUpdates){const Xt=k.data.subarray(Et*Ft/k.data.BYTES_PER_ELEMENT,(Et+1)*Ft/k.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,Et,k.width,k.height,1,wt,Xt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,k.width,k.height,Nt.depth,wt,k.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Yt,k.width,k.height,Nt.depth,0,k.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ht&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,k.width,k.height,Nt.depth,wt,Qt,k.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,Yt,k.width,k.height,Nt.depth,0,wt,Qt,k.data)}else{z&&xt&&i.texStorage2D(r.TEXTURE_2D,Ut,Yt,Ct[0].width,Ct[0].height);for(let bt=0,Z=Ct.length;bt<Z;bt++)k=Ct[bt],b.format!==ja?wt!==null?z?ht&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,k.width,k.height,wt,k.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,Yt,k.width,k.height,0,k.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ht&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,k.width,k.height,wt,Qt,k.data):i.texImage2D(r.TEXTURE_2D,bt,Yt,k.width,k.height,0,wt,Qt,k.data)}else if(b.isDataArrayTexture)if(z){if(xt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Yt,Nt.width,Nt.height,Nt.depth),ht)if(b.layerUpdates.size>0){const bt=Wx(Nt.width,Nt.height,b.format,b.type);for(const Z of b.layerUpdates){const Ft=Nt.data.subarray(Z*bt/Nt.data.BYTES_PER_ELEMENT,(Z+1)*bt/Nt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,Nt.width,Nt.height,1,wt,Qt,Ft)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Nt.width,Nt.height,Nt.depth,wt,Qt,Nt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Yt,Nt.width,Nt.height,Nt.depth,0,wt,Qt,Nt.data);else if(b.isData3DTexture)z?(xt&&i.texStorage3D(r.TEXTURE_3D,Ut,Yt,Nt.width,Nt.height,Nt.depth),ht&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Nt.width,Nt.height,Nt.depth,wt,Qt,Nt.data)):i.texImage3D(r.TEXTURE_3D,0,Yt,Nt.width,Nt.height,Nt.depth,0,wt,Qt,Nt.data);else if(b.isFramebufferTexture){if(xt)if(z)i.texStorage2D(r.TEXTURE_2D,Ut,Yt,Nt.width,Nt.height);else{let bt=Nt.width,Z=Nt.height;for(let Ft=0;Ft<Ut;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,Yt,bt,Z,0,wt,Qt,null),bt>>=1,Z>>=1}}else if(Ct.length>0){if(z&&xt){const bt=ie(Ct[0]);i.texStorage2D(r.TEXTURE_2D,Ut,Yt,bt.width,bt.height)}for(let bt=0,Z=Ct.length;bt<Z;bt++)k=Ct[bt],z?ht&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,wt,Qt,k):i.texImage2D(r.TEXTURE_2D,bt,Yt,wt,Qt,k);b.generateMipmaps=!1}else if(z){if(xt){const bt=ie(Nt);i.texStorage2D(r.TEXTURE_2D,Ut,Yt,bt.width,bt.height)}ht&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Qt,Nt)}else i.texImage2D(r.TEXTURE_2D,0,Yt,wt,Qt,Nt);M(b)&&S(vt),ne.__version=mt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function yt(O,b,K){if(b.image.length!==6)return;const vt=gt(O,b),Rt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+K);const mt=s.get(Rt);if(Rt.version!==mt.__version||vt===!0){i.activeTexture(r.TEXTURE0+K);const ne=Qe.getPrimaries(Qe.workingColorSpace),Pt=b.colorSpace===ur?null:Qe.getPrimaries(b.colorSpace),le=b.colorSpace===ur||ne===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const de=b.isCompressedTexture||b.image[0].isCompressedTexture,Nt=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let Z=0;Z<6;Z++)!de&&!Nt?wt[Z]=w(b.image[Z],!0,l.maxCubemapSize):wt[Z]=Nt?b.image[Z].image:b.image[Z],wt[Z]=tn(b,wt[Z]);const Qt=wt[0],Yt=c.convert(b.format,b.colorSpace),k=c.convert(b.type),Ct=L(b.internalFormat,Yt,k,b.colorSpace),z=b.isVideoTexture!==!0,xt=mt.__version===void 0||vt===!0,ht=Rt.dataReady;let Ut=B(b,Qt);j(r.TEXTURE_CUBE_MAP,b);let bt;if(de){z&&xt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,Ct,Qt.width,Qt.height);for(let Z=0;Z<6;Z++){bt=wt[Z].mipmaps;for(let Ft=0;Ft<bt.length;Ft++){const Et=bt[Ft];b.format!==ja?Yt!==null?z?ht&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft,0,0,Et.width,Et.height,Yt,Et.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft,Ct,Et.width,Et.height,0,Et.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft,0,0,Et.width,Et.height,Yt,k,Et.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft,Ct,Et.width,Et.height,0,Yt,k,Et.data)}}}else{if(bt=b.mipmaps,z&&xt){bt.length>0&&Ut++;const Z=ie(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,Ct,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Nt){z?ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt[Z].width,wt[Z].height,Yt,k,wt[Z].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ct,wt[Z].width,wt[Z].height,0,Yt,k,wt[Z].data);for(let Ft=0;Ft<bt.length;Ft++){const Xt=bt[Ft].image[Z].image;z?ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft+1,0,0,Xt.width,Xt.height,Yt,k,Xt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft+1,Ct,Xt.width,Xt.height,0,Yt,k,Xt.data)}}else{z?ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Yt,k,wt[Z]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ct,Yt,k,wt[Z]);for(let Ft=0;Ft<bt.length;Ft++){const Et=bt[Ft];z?ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft+1,0,0,Yt,k,Et.image[Z]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft+1,Ct,Yt,k,Et.image[Z])}}}M(b)&&S(r.TEXTURE_CUBE_MAP),mt.__version=Rt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Dt(O,b,K,vt,Rt,mt){const ne=c.convert(K.format,K.colorSpace),Pt=c.convert(K.type),le=L(K.internalFormat,ne,Pt,K.colorSpace),de=s.get(b),Nt=s.get(K);if(Nt.__renderTarget=b,!de.__hasExternalTextures){const wt=Math.max(1,b.width>>mt),Qt=Math.max(1,b.height>>mt);Rt===r.TEXTURE_3D||Rt===r.TEXTURE_2D_ARRAY?i.texImage3D(Rt,mt,le,wt,Qt,b.depth,0,ne,Pt,null):i.texImage2D(Rt,mt,le,wt,Qt,0,ne,Pt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),vn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Rt,Nt.__webglTexture,0,X(b)):(Rt===r.TEXTURE_2D||Rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Rt,Nt.__webglTexture,mt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function te(O,b,K){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const vt=b.depthTexture,Rt=vt&&vt.isDepthTexture?vt.type:null,mt=D(b.stencilBuffer,Rt),ne=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;vn(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(b),mt,b.width,b.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(b),mt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,mt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,O)}else{const vt=b.textures;for(let Rt=0;Rt<vt.length;Rt++){const mt=vt[Rt],ne=c.convert(mt.format,mt.colorSpace),Pt=c.convert(mt.type),le=L(mt.internalFormat,ne,Pt,mt.colorSpace);vn(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(b),le,b.width,b.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(b),le,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,le,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(O,b,K){const vt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Rt=s.get(b.depthTexture);if(Rt.__renderTarget=b,(!Rt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),vt){if(Rt.__webglInit===void 0&&(Rt.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),Rt.__webglTexture===void 0){Rt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Rt.__webglTexture),j(r.TEXTURE_CUBE_MAP,b.depthTexture);const de=c.convert(b.depthTexture.format),Nt=c.convert(b.depthTexture.type);let wt;b.depthTexture.format===Ps?wt=r.DEPTH_COMPONENT24:b.depthTexture.format===io&&(wt=r.DEPTH24_STENCIL8);for(let Qt=0;Qt<6;Qt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Qt,0,wt,b.width,b.height,0,de,Nt,null)}}else Q(b.depthTexture,0);const mt=Rt.__webglTexture,ne=X(b),Pt=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,le=b.depthTexture.format===io?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ps)vn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Pt,mt,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,le,Pt,mt,0);else if(b.depthTexture.format===io)vn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Pt,mt,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,le,Pt,mt,0);else throw new Error("Unknown depthTexture format")}function fe(O){const b=s.get(O),K=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const vt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),vt){const Rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,vt.removeEventListener("dispose",Rt)};vt.addEventListener("dispose",Rt),b.__depthDisposeCallback=Rt}b.__boundDepthTexture=vt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let vt=0;vt<6;vt++)zt(b.__webglFramebuffer[vt],O,vt);else{const vt=O.texture.mipmaps;vt&&vt.length>0?zt(b.__webglFramebuffer[0],O,0):zt(b.__webglFramebuffer,O,0)}else if(K){b.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[vt]),b.__webglDepthbuffer[vt]===void 0)b.__webglDepthbuffer[vt]=r.createRenderbuffer(),te(b.__webglDepthbuffer[vt],O,!1);else{const Rt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,mt)}}else{const vt=O.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),te(b.__webglDepthbuffer,O,!1);else{const Rt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,mt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(O,b,K){const vt=s.get(O);b!==void 0&&Dt(vt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&fe(O)}function be(O){const b=O.texture,K=s.get(O),vt=s.get(b);O.addEventListener("dispose",H);const Rt=O.textures,mt=O.isWebGLCubeRenderTarget===!0,ne=Rt.length>1;if(ne||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=b.version,f.memory.textures++),mt){K.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Pt]=[];for(let le=0;le<b.mipmaps.length;le++)K.__webglFramebuffer[Pt][le]=r.createFramebuffer()}else K.__webglFramebuffer[Pt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)K.__webglFramebuffer[Pt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(ne)for(let Pt=0,le=Rt.length;Pt<le;Pt++){const de=s.get(Rt[Pt]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&vn(O)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Pt=0;Pt<Rt.length;Pt++){const le=Rt[Pt];K.__webglColorRenderbuffer[Pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Pt]);const de=c.convert(le.format,le.colorSpace),Nt=c.convert(le.type),wt=L(le.internalFormat,de,Nt,le.colorSpace,O.isXRRenderTarget===!0),Qt=X(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,wt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,K.__webglColorRenderbuffer[Pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),te(K.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),j(r.TEXTURE_CUBE_MAP,b);for(let Pt=0;Pt<6;Pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)Dt(K.__webglFramebuffer[Pt][le],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,le);else Dt(K.__webglFramebuffer[Pt],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);M(b)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ne){for(let Pt=0,le=Rt.length;Pt<le;Pt++){const de=Rt[Pt],Nt=s.get(de);let wt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,Nt.__webglTexture),j(wt,de),Dt(K.__webglFramebuffer,O,de,r.COLOR_ATTACHMENT0+Pt,wt,0),M(de)&&S(wt)}i.unbindTexture()}else{let Pt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pt,vt.__webglTexture),j(Pt,b),b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)Dt(K.__webglFramebuffer[le],O,b,r.COLOR_ATTACHMENT0,Pt,le);else Dt(K.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,Pt,0);M(b)&&S(Pt),i.unbindTexture()}O.depthBuffer&&fe(O)}function xe(O){const b=O.textures;for(let K=0,vt=b.length;K<vt;K++){const Rt=b[K];if(M(Rt)){const mt=C(O),ne=s.get(Rt).__webglTexture;i.bindTexture(mt,ne),S(mt),i.unbindTexture()}}}const Je=[],ye=[];function Dn(O){if(O.samples>0){if(vn(O)===!1){const b=O.textures,K=O.width,vt=O.height;let Rt=r.COLOR_BUFFER_BIT;const mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=s.get(O),Pt=b.length>1;if(Pt)for(let de=0;de<b.length;de++)i.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer);const le=O.texture.mipmaps;le&&le.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let de=0;de<b.length;de++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Rt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Rt|=r.STENCIL_BUFFER_BIT)),Pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ne.__webglColorRenderbuffer[de]);const Nt=s.get(b[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Nt,0)}r.blitFramebuffer(0,0,K,vt,0,0,K,vt,Rt,r.NEAREST),m===!0&&(Je.length=0,ye.length=0,Je.push(r.COLOR_ATTACHMENT0+de),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Je.push(mt),ye.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Je))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pt)for(let de=0;de<b.length;de++){i.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ne.__webglColorRenderbuffer[de]);const Nt=s.get(b[de]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Nt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function X(O){return Math.min(l.maxSamples,O.samples)}function vn(O){const b=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(O){const b=f.render.frame;_.get(O)!==b&&(_.set(O,b),O.update())}function tn(O,b){const K=O.colorSpace,vt=O.format,Rt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||K!==Yo&&K!==ur&&(Qe.getTransfer(K)===ln?(vt!==ja||Rt!==aa)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",K)),b}function ie(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=J,this.setTexture2D=Q,this.setTexture2DArray=U,this.setTexture3D=P,this.setTextureCube=ct,this.rebindTextures=Ee,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=vn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function zS(r,t){function i(s,l=ur){let c;const f=Qe.getTransfer(l);if(s===aa)return r.UNSIGNED_BYTE;if(s===Ph)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Q0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===J0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Z0)return r.BYTE;if(s===K0)return r.SHORT;if(s===ic)return r.UNSIGNED_SHORT;if(s===Ih)return r.INT;if(s===ms)return r.UNSIGNED_INT;if(s===qa)return r.FLOAT;if(s===Is)return r.HALF_FLOAT;if(s===$0)return r.ALPHA;if(s===tg)return r.RGB;if(s===ja)return r.RGBA;if(s===Ps)return r.DEPTH_COMPONENT;if(s===io)return r.DEPTH_STENCIL;if(s===Bh)return r.RED;if(s===zh)return r.RED_INTEGER;if(s===Wo)return r.RG;if(s===Hh)return r.RG_INTEGER;if(s===Gh)return r.RGBA_INTEGER;if(s===Hu||s===Gu||s===Vu||s===ku)if(f===ln)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ku)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===th||s===eh||s===nh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ih||s===ah)return f===ln?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===sh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===rh)return c.COMPRESSED_R11_EAC;if(s===oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===lh)return c.COMPRESSED_RG11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===yh||s===Sh||s===Mh||s===Eh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===uh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ph)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_h)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eh)return f===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bh||s===Th||s===Ah)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===bh)return f===ln?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rh||s===Ch||s===wh||s===Dh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Rh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ac?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const V2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k2=`
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

}`;class X2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new cg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new gs({vertexShader:V2,fragmentShader:k2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Re(new Aa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W2 extends qo{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,x=null,E=null;const w=typeof XRWebGLBinding<"u",M=new X2,S={},C=i.getContextAttributes();let L=null,D=null;const B=[],F=[],H=new Ie;let T=null;const N=new ji;N.viewport=new Hn;const ut=new ji;ut.viewport=new Hn;const G=[N,ut],J=new NS;let et=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let yt=B[it];return yt===void 0&&(yt=new zd,B[it]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(it){let yt=B[it];return yt===void 0&&(yt=new zd,B[it]=yt),yt.getGripSpace()},this.getHand=function(it){let yt=B[it];return yt===void 0&&(yt=new zd,B[it]=yt),yt.getHandSpace()};function Q(it){const yt=F.indexOf(it.inputSource);if(yt===-1)return;const Dt=B[yt];Dt!==void 0&&(Dt.update(it.inputSource,it.frame,p||f),Dt.dispatchEvent({type:it.type,data:it.inputSource}))}function U(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",P);for(let it=0;it<B.length;it++){const yt=F[it];yt!==null&&(F[it]=null,B[it].disconnect(yt))}et=null,tt=null,M.reset();for(const it in S)delete S[it];t.setRenderTarget(L),x=null,g=null,v=null,l=null,D=null,jt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",U),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(H),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,te=null,zt=null;C.depth&&(zt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=C.stencil?io:Ps,te=C.stencil?ac:ms);const fe={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(fe),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new ps(g.textureWidth,g.textureHeight,{format:ja,type:aa,depthTexture:new oc(g.textureWidth,g.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Dt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ps(x.framebufferWidth,x.framebufferHeight,{format:ja,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),jt.setContext(l),jt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P(it){for(let yt=0;yt<it.removed.length;yt++){const Dt=it.removed[yt],te=F.indexOf(Dt);te>=0&&(F[te]=null,B[te].disconnect(Dt))}for(let yt=0;yt<it.added.length;yt++){const Dt=it.added[yt];let te=F.indexOf(Dt);if(te===-1){for(let fe=0;fe<B.length;fe++)if(fe>=F.length){F.push(Dt),te=fe;break}else if(F[fe]===null){F[fe]=Dt,te=fe;break}if(te===-1)break}const zt=B[te];zt&&zt.connect(Dt)}}const ct=new q,pt=new q;function At(it,yt,Dt){ct.setFromMatrixPosition(yt.matrixWorld),pt.setFromMatrixPosition(Dt.matrixWorld);const te=ct.distanceTo(pt),zt=yt.projectionMatrix.elements,fe=Dt.projectionMatrix.elements,Ee=zt[14]/(zt[10]-1),be=zt[14]/(zt[10]+1),xe=(zt[9]+1)/zt[5],Je=(zt[9]-1)/zt[5],ye=(zt[8]-1)/zt[0],Dn=(fe[8]+1)/fe[0],X=Ee*ye,vn=Ee*Dn,we=te/(-ye+Dn),tn=we*-ye;if(yt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(tn),it.translateZ(we),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),zt[10]===-1)it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const ie=Ee+we,O=be+we,b=X-tn,K=vn+(te-tn),vt=xe*be/O*ie,Rt=Je*be/O*ie;it.projectionMatrix.makePerspective(b,K,vt,Rt,ie,O),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function I(it,yt){yt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(yt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let yt=it.near,Dt=it.far;M.texture!==null&&(M.depthNear>0&&(yt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),J.near=ut.near=N.near=yt,J.far=ut.far=N.far=Dt,(et!==J.near||tt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),et=J.near,tt=J.far),J.layers.mask=it.layers.mask|6,N.layers.mask=J.layers.mask&-5,ut.layers.mask=J.layers.mask&-3;const te=it.parent,zt=J.cameras;I(J,te);for(let fe=0;fe<zt.length;fe++)I(zt[fe],te);zt.length===2?At(J,N,ut):J.projectionMatrix.copy(N.projectionMatrix),j(it,J,te)};function j(it,yt,Dt){Dt===null?it.matrix.copy(yt.matrixWorld):(it.matrix.copy(Dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(yt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=rc*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&x===null))return m},this.setFoveation=function(it){m=it,g!==null&&(g.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(it){return S[it]};let gt=null;function Lt(it,yt){if(_=yt.getViewerPose(p||f),E=yt,_!==null){const Dt=_.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let te=!1;Dt.length!==J.cameras.length&&(J.cameras.length=0,te=!0);for(let be=0;be<Dt.length;be++){const xe=Dt[be];let Je=null;if(x!==null)Je=x.getViewport(xe);else{const Dn=v.getViewSubImage(g,xe);Je=Dn.viewport,be===0&&(t.setRenderTargetTextures(D,Dn.colorTexture,Dn.depthStencilTexture),t.setRenderTarget(D))}let ye=G[be];ye===void 0&&(ye=new ji,ye.layers.enable(be),ye.viewport=new Hn,G[be]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(J.matrix.copy(ye.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),te===!0&&J.cameras.push(ye)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const be=v.getDepthInformation(Dt[0]);be&&be.isValid&&be.texture&&M.init(be,l.renderState)}if(zt&&zt.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let be=0;be<Dt.length;be++){const xe=Dt[be].camera;if(xe){let Je=S[xe];Je||(Je=new cg,S[xe]=Je);const ye=v.getCameraImage(xe);Je.sourceTexture=ye}}}}for(let Dt=0;Dt<B.length;Dt++){const te=F[Dt],zt=B[Dt];te!==null&&zt!==void 0&&zt.update(te,yt,p||f)}gt&&gt(it,yt),yt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:yt}),E=null}const jt=new OS;jt.setAnimationLoop(Lt),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const Uo=new Ra,Y2=new _n;function q2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,vS(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,L,D){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&x(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?m(M,S,C,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Hi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Hi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),L=C.envMap,D=C.envMapRotation;L&&(M.envMap.value=L,Uo.copy(D),Uo.x*=-1,Uo.y*=-1,Uo.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Uo.y*=-1,Uo.z*=-1),M.envMapRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(Uo)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Hi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function j2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const D=L.program;s.uniformBlockBinding(C,D)}function p(C,L){let D=l[C.id];D===void 0&&(E(C),D=_(C),l[C.id]=D,C.addEventListener("dispose",M));const B=L.program;s.updateUBOMapping(C,B);const F=t.render.frame;c[C.id]!==F&&(g(C),c[C.id]=F)}function _(C){const L=v();C.__bindingPointIndex=L;const D=r.createBuffer(),B=C.__size,F=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function v(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],D=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,H=D.length;F<H;F++){const T=Array.isArray(D[F])?D[F]:[D[F]];for(let N=0,ut=T.length;N<ut;N++){const G=T[N];if(x(G,F,N,B)===!0){const J=G.__offset,et=Array.isArray(G.value)?G.value:[G.value];let tt=0;for(let Q=0;Q<et.length;Q++){const U=et[Q],P=w(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,J+tt,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):(U.toArray(G.__data,tt),tt+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(C,L,D,B){const F=C.value,H=L+"_"+D;if(B[H]===void 0)return typeof F=="number"||typeof F=="boolean"?B[H]=F:B[H]=F.clone(),!0;{const T=B[H];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return B[H]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function E(C){const L=C.uniforms;let D=0;const B=16;for(let H=0,T=L.length;H<T;H++){const N=Array.isArray(L[H])?L[H]:[L[H]];for(let ut=0,G=N.length;ut<G;ut++){const J=N[ut],et=Array.isArray(J.value)?J.value:[J.value];for(let tt=0,Q=et.length;tt<Q;tt++){const U=et[tt],P=w(U),ct=D%B,pt=ct%P.boundary,At=ct+pt;D+=pt,At!==0&&B-At<P.storage&&(D+=B-At),J.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=P.storage}}}const F=D%B;return F>0&&(D+=B-F),C.__size=D,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ve("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const Z2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ls=null;function K2(){return Ls===null&&(Ls=new og(Z2,16,16,Wo,Is),Ls.name="DFG_LUT",Ls.minFilter=jn,Ls.magFilter=jn,Ls.wrapS=Us,Ls.wrapT=Us,Ls.generateMipmaps=!1,Ls.needsUpdate=!0),Ls}class HS{constructor(t={}){const{canvas:i=oS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=aa}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const w=x,M=new Set([Gh,Hh,zh]),S=new Set([aa,ms,ic,ac,Ph,Fh]),C=new Uint32Array(4),L=new Int32Array(4);let D=null,B=null;const F=[],H=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ut=!1;this._outputColorSpace=ei;let G=0,J=0,et=null,tt=-1,Q=null;const U=new Hn,P=new Hn;let ct=null;const pt=new pe(0);let At=0,I=i.width,j=i.height,gt=1,Lt=null,jt=null;const it=new Hn(0,0,I,j),yt=new Hn(0,0,I,j);let Dt=!1;const te=new qh;let zt=!1,fe=!1;const Ee=new _n,be=new q,xe=new Hn,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Dn(){return et===null?gt:1}let X=s;function vn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Lh}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",Et,!1),i.addEventListener("webglcontextcreationerror",Xt,!1),X===null){const Y="webgl2";if(X=vn(Y,R),X===null)throw vn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ke("WebGLRenderer: "+R.message),R}let we,tn,ie,O,b,K,vt,Rt,mt,ne,Pt,le,de,Nt,wt,Qt,Yt,k,Ct,z,xt,ht,Ut;function bt(){we=new JT(X),we.init(),xt=new zS(X,we),tn=new XT(X,we,t,xt),ie=new H2(X,we),tn.reversedDepthBuffer&&g&&ie.buffers.depth.setReversed(!0),O=new eA(X),b=new A2,K=new G2(X,we,ie,b,tn,xt,O),vt=new QT(N),Rt=new rb(X),ht=new VT(X,Rt),mt=new $T(X,Rt,O,ht),ne=new iA(X,mt,Rt,ht,O),k=new nA(X,tn,K),wt=new WT(b),Pt=new T2(N,vt,we,tn,ht,wt),le=new q2(N,b),de=new C2,Nt=new O2(we),Yt=new GT(N,vt,ie,ne,E,m),Qt=new z2(N,ne,tn),Ut=new j2(X,O,tn,ie),Ct=new kT(X,we,O),z=new tA(X,we,O),O.programs=Pt.programs,N.capabilities=tn,N.extensions=we,N.properties=b,N.renderLists=de,N.shadowMap=Qt,N.state=ie,N.info=O}bt(),w!==aa&&(T=new sA(w,i.width,i.height,l,c));const Z=new W2(N,X);this.xr=Z,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=we.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=we.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(I,j,!1))},this.getSize=function(R){return R.set(I,j)},this.setSize=function(R,Y,ft=!0){if(Z.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,j=Y,i.width=Math.floor(R*gt),i.height=Math.floor(Y*gt),ft===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(I*gt,j*gt).floor()},this.setDrawingBufferSize=function(R,Y,ft){I=R,j=Y,gt=ft,i.width=Math.floor(R*ft),i.height=Math.floor(Y*ft),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(w===aa){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,Y,ft,rt){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,Y,ft,rt),ie.viewport(U.copy(it).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,Y,ft,rt){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,ft,rt),ie.scissor(P.copy(yt).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){ie.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){Lt=R},this.setTransparentSort=function(R){jt=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ft=!0){let rt=0;if(R){let nt=!1;if(et!==null){const Vt=et.texture.format;nt=M.has(Vt)}if(nt){const Vt=et.texture.type,Zt=S.has(Vt),kt=Yt.getClearColor(),$t=Yt.getClearAlpha(),re=kt.r,he=kt.g,_e=kt.b;Zt?(C[0]=re,C[1]=he,C[2]=_e,C[3]=$t,X.clearBufferuiv(X.COLOR,0,C)):(L[0]=re,L[1]=he,L[2]=_e,L[3]=$t,X.clearBufferiv(X.COLOR,0,L))}else rt|=X.COLOR_BUFFER_BIT}Y&&(rt|=X.DEPTH_BUFFER_BIT),ft&&(rt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&X.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",Et,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),Yt.dispose(),de.dispose(),Nt.dispose(),b.dispose(),vt.dispose(),ne.dispose(),ht.dispose(),Ut.dispose(),Pt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ni),Z.removeEventListener("sessionend",Qa),En.stop()};function Ft(R){R.preventDefault(),L0("WebGLRenderer: Context Lost."),ut=!0}function Et(){L0("WebGLRenderer: Context Restored."),ut=!1;const R=O.autoReset,Y=Qt.enabled,ft=Qt.autoUpdate,rt=Qt.needsUpdate,nt=Qt.type;bt(),O.autoReset=R,Qt.enabled=Y,Qt.autoUpdate=ft,Qt.needsUpdate=rt,Qt.type=nt}function Xt(R){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Gt(R){const Y=R.target;Y.removeEventListener("dispose",Gt),Nn(Y)}function Nn(R){Si(R),b.remove(R)}function Si(R){const Y=b.get(R).programs;Y!==void 0&&(Y.forEach(function(ft){Pt.releaseProgram(ft)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ft,rt,nt,Vt){Y===null&&(Y=Je);const Zt=nt.isMesh&&nt.matrixWorld.determinant()<0,kt=li(R,Y,ft,rt,nt);ie.setMaterial(rt,Zt);let $t=ft.index,re=1;if(rt.wireframe===!0){if($t=mt.getWireframeAttribute(ft),$t===void 0)return;re=2}const he=ft.drawRange,_e=ft.attributes.position;let ee=he.start*re,Se=(he.start+he.count)*re;Vt!==null&&(ee=Math.max(ee,Vt.start*re),Se=Math.min(Se,(Vt.start+Vt.count)*re)),$t!==null?(ee=Math.max(ee,0),Se=Math.min(Se,$t.count)):_e!=null&&(ee=Math.max(ee,0),Se=Math.min(Se,_e.count));const dn=Se-ee;if(dn<0||dn===1/0)return;ht.setup(nt,rt,kt,ft,$t);let xn,Ge=Ct;if($t!==null&&(xn=Rt.get($t),Ge=z,Ge.setIndex(xn)),nt.isMesh)rt.wireframe===!0?(ie.setLineWidth(rt.wireframeLinewidth*Dn()),Ge.setMode(X.LINES)):Ge.setMode(X.TRIANGLES);else if(nt.isLine){let Bn=rt.linewidth;Bn===void 0&&(Bn=1),ie.setLineWidth(Bn*Dn()),nt.isLineSegments?Ge.setMode(X.LINES):nt.isLineLoop?Ge.setMode(X.LINE_LOOP):Ge.setMode(X.LINE_STRIP)}else nt.isPoints?Ge.setMode(X.POINTS):nt.isSprite&&Ge.setMode(X.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)ju("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ge.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Ge.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Bn=nt._multiDrawStarts,ae=nt._multiDrawCounts,ci=nt._multiDrawCount,ge=$t?Rt.get($t).bytesPerElement:1,ui=b.get(rt).currentProgram.getUniforms();for(let Tn=0;Tn<ci;Tn++)ui.setValue(X,"_gl_DrawID",Tn),Ge.render(Bn[Tn]/ge,ae[Tn])}else if(nt.isInstancedMesh)Ge.renderInstances(ee,dn,nt.count);else if(ft.isInstancedBufferGeometry){const Bn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,ae=Math.min(ft.instanceCount,Bn);Ge.renderInstances(ee,dn,ae)}else Ge.render(ee,dn)};function Ka(R,Y,ft){R.transparent===!0&&R.side===qn&&R.forceSinglePass===!1?(R.side=Hi,R.needsUpdate=!0,Ri(R,Y,ft),R.side=hr,R.needsUpdate=!0,Ri(R,Y,ft),R.side=qn):Ri(R,Y,ft)}this.compile=function(R,Y,ft=null){ft===null&&(ft=R),B=Nt.get(ft),B.init(Y),H.push(B),ft.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(B.pushLight(nt),nt.castShadow&&B.pushShadow(nt))}),R!==ft&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(B.pushLight(nt),nt.castShadow&&B.pushShadow(nt))}),B.setupLights();const rt=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Vt=nt.material;if(Vt)if(Array.isArray(Vt))for(let Zt=0;Zt<Vt.length;Zt++){const kt=Vt[Zt];Ka(kt,ft,nt),rt.add(kt)}else Ka(Vt,ft,nt),rt.add(Vt)}),B=H.pop(),rt},this.compileAsync=function(R,Y,ft=null){const rt=this.compile(R,Y,ft);return new Promise(nt=>{function Vt(){if(rt.forEach(function(Zt){b.get(Zt).currentProgram.isReady()&&rt.delete(Zt)}),rt.size===0){nt(R);return}setTimeout(Vt,10)}we.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let Ca=null;function sa(R){Ca&&Ca(R)}function ni(){En.stop()}function Qa(){En.start()}const En=new OS;En.setAnimationLoop(sa),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){Ca=R,Z.setAnimationLoop(R),R===null?En.stop():En.start()},Z.addEventListener("sessionstart",ni),Z.addEventListener("sessionend",Qa),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ut===!0)return;const ft=Z.enabled===!0&&Z.isPresenting===!0,rt=T!==null&&(et===null||ft)&&T.begin(N,et);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(Y),Y=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,Y,et),B=Nt.get(R,H.length),B.init(Y),H.push(B),Ee.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),te.setFromProjectionMatrix(Ee,ds,Y.reversedDepth),fe=this.localClippingEnabled,zt=wt.init(this.clippingPlanes,fe),D=de.get(R,F.length),D.init(),F.push(D),Z.enabled===!0&&Z.isPresenting===!0){const Zt=N.xr.getDepthSensingMesh();Zt!==null&&ra(Zt,Y,-1/0,N.sortObjects)}ra(R,Y,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(Lt,jt),ye=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ye&&Yt.addToRenderList(D,R),this.info.render.frame++,zt===!0&&wt.beginShadows();const nt=B.state.shadowsArray;if(Qt.render(nt,R,Y),zt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&T.hasRenderPass())===!1){const Zt=D.opaque,kt=D.transmissive;if(B.setupLights(),Y.isArrayCamera){const $t=Y.cameras;if(kt.length>0)for(let re=0,he=$t.length;re<he;re++){const _e=$t[re];cn(Zt,kt,R,_e)}ye&&Yt.render(R);for(let re=0,he=$t.length;re<he;re++){const _e=$t[re];bn(D,R,_e,_e.viewport)}}else kt.length>0&&cn(Zt,kt,R,Y),ye&&Yt.render(R),bn(D,R,Y)}et!==null&&J===0&&(K.updateMultisampleRenderTarget(et),K.updateRenderTargetMipmap(et)),rt&&T.end(N),R.isScene===!0&&R.onAfterRender(N,R,Y),ht.resetDefaultState(),tt=-1,Q=null,H.pop(),H.length>0?(B=H[H.length-1],zt===!0&&wt.setGlobalState(N.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function ra(R,Y,ft,rt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ft=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){rt&&xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const Zt=ne.update(R),kt=R.material;kt.visible&&D.push(R,Zt,kt,ft,xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const Zt=ne.update(R),kt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xe.copy(R.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),xe.copy(Zt.boundingSphere.center)),xe.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(kt)){const $t=Zt.groups;for(let re=0,he=$t.length;re<he;re++){const _e=$t[re],ee=kt[_e.materialIndex];ee&&ee.visible&&D.push(R,Zt,ee,ft,xe.z,_e)}}else kt.visible&&D.push(R,Zt,kt,ft,xe.z,null)}}const Vt=R.children;for(let Zt=0,kt=Vt.length;Zt<kt;Zt++)ra(Vt[Zt],Y,ft,rt)}function bn(R,Y,ft,rt){const{opaque:nt,transmissive:Vt,transparent:Zt}=R;B.setupLightsView(ft),zt===!0&&wt.setGlobalState(N.clippingPlanes,ft),rt&&ie.viewport(U.copy(rt)),nt.length>0&&qe(nt,Y,ft),Vt.length>0&&qe(Vt,Y,ft),Zt.length>0&&qe(Zt,Y,ft),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function cn(R,Y,ft,rt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[rt.id]===void 0){const ee=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[rt.id]=new ps(1,1,{generateMipmaps:!0,type:ee?Is:aa,minFilter:fr,samples:Math.max(4,tn.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const Vt=B.state.transmissionRenderTarget[rt.id],Zt=rt.viewport||U;Vt.setSize(Zt.z*N.transmissionResolutionScale,Zt.w*N.transmissionResolutionScale);const kt=N.getRenderTarget(),$t=N.getActiveCubeFace(),re=N.getActiveMipmapLevel();N.setRenderTarget(Vt),N.getClearColor(pt),At=N.getClearAlpha(),At<1&&N.setClearColor(16777215,.5),N.clear(),ye&&Yt.render(ft);const he=N.toneMapping;N.toneMapping=hs;const _e=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),B.setupLightsView(rt),zt===!0&&wt.setGlobalState(N.clippingPlanes,rt),qe(R,ft,rt),K.updateMultisampleRenderTarget(Vt),K.updateRenderTargetMipmap(Vt),we.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Se=0,dn=Y.length;Se<dn;Se++){const xn=Y[Se],{object:Ge,geometry:Bn,material:ae,group:ci}=xn;if(ae.side===qn&&Ge.layers.test(rt.layers)){const ge=ae.side;ae.side=Hi,ae.needsUpdate=!0,Mi(Ge,ft,rt,Bn,ae,ci),ae.side=ge,ae.needsUpdate=!0,ee=!0}}ee===!0&&(K.updateMultisampleRenderTarget(Vt),K.updateRenderTargetMipmap(Vt))}N.setRenderTarget(kt,$t,re),N.setClearColor(pt,At),_e!==void 0&&(rt.viewport=_e),N.toneMapping=he}function qe(R,Y,ft){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let nt=0,Vt=R.length;nt<Vt;nt++){const Zt=R[nt],{object:kt,geometry:$t,group:re}=Zt;let he=Zt.material;he.allowOverride===!0&&rt!==null&&(he=rt),kt.layers.test(ft.layers)&&Mi(kt,Y,ft,$t,he,re)}}function Mi(R,Y,ft,rt,nt,Vt){R.onBeforeRender(N,Y,ft,rt,nt,Vt),R.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(N,Y,ft,rt,R,Vt),nt.transparent===!0&&nt.side===qn&&nt.forceSinglePass===!1?(nt.side=Hi,nt.needsUpdate=!0,N.renderBufferDirect(ft,Y,rt,nt,R,Vt),nt.side=hr,nt.needsUpdate=!0,N.renderBufferDirect(ft,Y,rt,nt,R,Vt),nt.side=qn):N.renderBufferDirect(ft,Y,rt,nt,R,Vt),R.onAfterRender(N,Y,ft,rt,nt,Vt)}function Ri(R,Y,ft){Y.isScene!==!0&&(Y=Je);const rt=b.get(R),nt=B.state.lights,Vt=B.state.shadowsArray,Zt=nt.state.version,kt=Pt.getParameters(R,nt.state,Vt,Y,ft),$t=Pt.getProgramCacheKey(kt);let re=rt.programs;rt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,rt.fog=Y.fog;const he=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;rt.envMap=vt.get(R.envMap||rt.environment,he),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",Gt),re=new Map,rt.programs=re);let _e=re.get($t);if(_e!==void 0){if(rt.currentProgram===_e&&rt.lightsStateVersion===Zt)return wa(R,kt),_e}else kt.uniforms=Pt.getUniforms(R),R.onBeforeCompile(kt,N),_e=Pt.acquireProgram(kt,$t),re.set($t,_e),rt.uniforms=kt.uniforms;const ee=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ee.clippingPlanes=wt.uniform),wa(R,kt),rt.needsLights=_s(R),rt.lightsStateVersion=Zt,rt.needsLights&&(ee.ambientLightColor.value=nt.state.ambient,ee.lightProbe.value=nt.state.probe,ee.directionalLights.value=nt.state.directional,ee.directionalLightShadows.value=nt.state.directionalShadow,ee.spotLights.value=nt.state.spot,ee.spotLightShadows.value=nt.state.spotShadow,ee.rectAreaLights.value=nt.state.rectArea,ee.ltc_1.value=nt.state.rectAreaLTC1,ee.ltc_2.value=nt.state.rectAreaLTC2,ee.pointLights.value=nt.state.point,ee.pointLightShadows.value=nt.state.pointShadow,ee.hemisphereLights.value=nt.state.hemi,ee.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,ee.spotLightMatrix.value=nt.state.spotLightMatrix,ee.spotLightMap.value=nt.state.spotLightMap,ee.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=_e,rt.uniformsList=null,_e}function Ja(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Vd.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function wa(R,Y){const ft=b.get(R);ft.outputColorSpace=Y.outputColorSpace,ft.batching=Y.batching,ft.batchingColor=Y.batchingColor,ft.instancing=Y.instancing,ft.instancingColor=Y.instancingColor,ft.instancingMorph=Y.instancingMorph,ft.skinning=Y.skinning,ft.morphTargets=Y.morphTargets,ft.morphNormals=Y.morphNormals,ft.morphColors=Y.morphColors,ft.morphTargetsCount=Y.morphTargetsCount,ft.numClippingPlanes=Y.numClippingPlanes,ft.numIntersection=Y.numClipIntersection,ft.vertexAlphas=Y.vertexAlphas,ft.vertexTangents=Y.vertexTangents,ft.toneMapping=Y.toneMapping}function li(R,Y,ft,rt,nt){Y.isScene!==!0&&(Y=Je),K.resetTextureUnits();const Vt=Y.fog,Zt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Y.environment:null,kt=et===null?N.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Yo,$t=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,re=vt.get(rt.envMap||Zt,$t),he=rt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,_e=!!ft.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),ee=!!ft.morphAttributes.position,Se=!!ft.morphAttributes.normal,dn=!!ft.morphAttributes.color;let xn=hs;rt.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(xn=N.toneMapping);const Ge=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Bn=Ge!==void 0?Ge.length:0,ae=b.get(rt),ci=B.state.lights;if(zt===!0&&(fe===!0||R!==Q)){const An=R===Q&&rt.id===tt;wt.setState(rt,R,An)}let ge=!1;rt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==ci.state.version||ae.outputColorSpace!==kt||nt.isBatchedMesh&&ae.batching===!1||!nt.isBatchedMesh&&ae.batching===!0||nt.isBatchedMesh&&ae.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&ae.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&ae.instancing===!1||!nt.isInstancedMesh&&ae.instancing===!0||nt.isSkinnedMesh&&ae.skinning===!1||!nt.isSkinnedMesh&&ae.skinning===!0||nt.isInstancedMesh&&ae.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&ae.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&ae.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&ae.instancingMorph===!1&&nt.morphTexture!==null||ae.envMap!==re||rt.fog===!0&&ae.fog!==Vt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==wt.numPlanes||ae.numIntersection!==wt.numIntersection)||ae.vertexAlphas!==he||ae.vertexTangents!==_e||ae.morphTargets!==ee||ae.morphNormals!==Se||ae.morphColors!==dn||ae.toneMapping!==xn||ae.morphTargetsCount!==Bn)&&(ge=!0):(ge=!0,ae.__version=rt.version);let ui=ae.currentProgram;ge===!0&&(ui=Ri(rt,Y,nt));let Tn=!1,Ci=!1,fi=!1;const je=ui.getUniforms(),On=ae.uniforms;if(ie.useProgram(ui.program)&&(Tn=!0,Ci=!0,fi=!0),rt.id!==tt&&(tt=rt.id,Ci=!0),Tn||Q!==R){ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),je.setValue(X,"projectionMatrix",R.projectionMatrix),je.setValue(X,"viewMatrix",R.matrixWorldInverse);const Na=je.map.cameraPosition;Na!==void 0&&Na.setValue(X,be.setFromMatrixPosition(R.matrixWorld)),tn.logarithmicDepthBuffer&&je.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&je.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,Ci=!0,fi=!0)}if(ae.needsLights&&(ci.state.directionalShadowMap.length>0&&je.setValue(X,"directionalShadowMap",ci.state.directionalShadowMap,K),ci.state.spotShadowMap.length>0&&je.setValue(X,"spotShadowMap",ci.state.spotShadowMap,K),ci.state.pointShadowMap.length>0&&je.setValue(X,"pointShadowMap",ci.state.pointShadowMap,K)),nt.isSkinnedMesh){je.setOptional(X,nt,"bindMatrix"),je.setOptional(X,nt,"bindMatrixInverse");const An=nt.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),je.setValue(X,"boneTexture",An.boneTexture,K))}nt.isBatchedMesh&&(je.setOptional(X,nt,"batchingTexture"),je.setValue(X,"batchingTexture",nt._matricesTexture,K),je.setOptional(X,nt,"batchingIdTexture"),je.setValue(X,"batchingIdTexture",nt._indirectTexture,K),je.setOptional(X,nt,"batchingColorTexture"),nt._colorsTexture!==null&&je.setValue(X,"batchingColorTexture",nt._colorsTexture,K));const Ze=ft.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&k.update(nt,ft,ui),(Ci||ae.receiveShadow!==nt.receiveShadow)&&(ae.receiveShadow=nt.receiveShadow,je.setValue(X,"receiveShadow",nt.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Y.environment!==null&&(On.envMapIntensity.value=Y.environmentIntensity),On.dfgLUT!==void 0&&(On.dfgLUT.value=K2()),Ci&&(je.setValue(X,"toneMappingExposure",N.toneMappingExposure),ae.needsLights&&Fs(On,fi),Vt&&rt.fog===!0&&le.refreshFogUniforms(On,Vt),le.refreshMaterialUniforms(On,rt,gt,j,B.state.transmissionRenderTarget[R.id]),Vd.upload(X,Ja(ae),On,K)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Vd.upload(X,Ja(ae),On,K),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&je.setValue(X,"center",nt.center),je.setValue(X,"modelViewMatrix",nt.modelViewMatrix),je.setValue(X,"normalMatrix",nt.normalMatrix),je.setValue(X,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const An=rt.uniformsGroups;for(let Na=0,La=An.length;Na<La;Na++){const Ui=An[Na];Ut.update(Ui,ui),Ut.bind(Ui,ui)}}return ui}function Fs(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function _s(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(R,Y,ft){const rt=b.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Y,b.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ft,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ft=b.get(R);ft.__webglFramebuffer=Y,ft.__useDefaultFramebuffer=Y===void 0};const oa=X.createFramebuffer();this.setRenderTarget=function(R,Y=0,ft=0){et=R,G=Y,J=ft;let rt=null,nt=!1,Vt=!1;if(R){const kt=b.get(R);if(kt.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(X.FRAMEBUFFER,kt.__webglFramebuffer),U.copy(R.viewport),P.copy(R.scissor),ct=R.scissorTest,ie.viewport(U),ie.scissor(P),ie.setScissorTest(ct),tt=-1;return}else if(kt.__webglFramebuffer===void 0)K.setupRenderTarget(R);else if(kt.__hasExternalTextures)K.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const he=R.depthTexture;if(kt.__boundDepthTexture!==he){if(he!==null&&b.has(he)&&(R.width!==he.image.width||R.height!==he.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Vt=!0);const re=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[Y])?rt=re[Y][ft]:rt=re[Y],nt=!0):R.samples>0&&K.useMultisampledRTT(R)===!1?rt=b.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?rt=re[ft]:rt=re,U.copy(R.viewport),P.copy(R.scissor),ct=R.scissorTest}else U.copy(it).multiplyScalar(gt).floor(),P.copy(yt).multiplyScalar(gt).floor(),ct=Dt;if(ft!==0&&(rt=oa),ie.bindFramebuffer(X.FRAMEBUFFER,rt)&&ie.drawBuffers(R,rt),ie.viewport(U),ie.scissor(P),ie.setScissorTest(ct),nt){const kt=b.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kt.__webglTexture,ft)}else if(Vt){const kt=Y;for(let $t=0;$t<R.textures.length;$t++){const re=b.get(R.textures[$t]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+$t,re.__webglTexture,ft,kt)}}else if(R!==null&&ft!==0){const kt=b.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,kt.__webglTexture,ft)}tt=-1},this.readRenderTargetPixels=function(R,Y,ft,rt,nt,Vt,Zt,kt=0){if(!(R&&R.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Zt!==void 0&&($t=$t[Zt]),$t){ie.bindFramebuffer(X.FRAMEBUFFER,$t);try{const re=R.textures[kt],he=re.format,_e=re.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+kt),!tn.textureFormatReadable(he)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tn.textureTypeReadable(_e)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-rt&&ft>=0&&ft<=R.height-nt&&X.readPixels(Y,ft,rt,nt,xt.convert(he),xt.convert(_e),Vt)}finally{const re=et!==null?b.get(et).__webglFramebuffer:null;ie.bindFramebuffer(X.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ft,rt,nt,Vt,Zt,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Zt!==void 0&&($t=$t[Zt]),$t)if(Y>=0&&Y<=R.width-rt&&ft>=0&&ft<=R.height-nt){ie.bindFramebuffer(X.FRAMEBUFFER,$t);const re=R.textures[kt],he=re.format,_e=re.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+kt),!tn.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tn.textureTypeReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ee),X.bufferData(X.PIXEL_PACK_BUFFER,Vt.byteLength,X.STREAM_READ),X.readPixels(Y,ft,rt,nt,xt.convert(he),xt.convert(_e),0);const Se=et!==null?b.get(et).__webglFramebuffer:null;ie.bindFramebuffer(X.FRAMEBUFFER,Se);const dn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await gE(X,dn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ee),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Vt),X.deleteBuffer(ee),X.deleteSync(dn),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ft=0){const rt=Math.pow(2,-ft),nt=Math.floor(R.image.width*rt),Vt=Math.floor(R.image.height*rt),Zt=Y!==null?Y.x:0,kt=Y!==null?Y.y:0;K.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ft,0,0,Zt,kt,nt,Vt),ie.unbindTexture()};const la=X.createFramebuffer(),Da=X.createFramebuffer();this.copyTextureToTexture=function(R,Y,ft=null,rt=null,nt=0,Vt=0){let Zt,kt,$t,re,he,_e,ee,Se,dn;const xn=R.isCompressedTexture?R.mipmaps[Vt]:R.image;if(ft!==null)Zt=ft.max.x-ft.min.x,kt=ft.max.y-ft.min.y,$t=ft.isBox3?ft.max.z-ft.min.z:1,re=ft.min.x,he=ft.min.y,_e=ft.isBox3?ft.min.z:0;else{const On=Math.pow(2,-nt);Zt=Math.floor(xn.width*On),kt=Math.floor(xn.height*On),R.isDataArrayTexture?$t=xn.depth:R.isData3DTexture?$t=Math.floor(xn.depth*On):$t=1,re=0,he=0,_e=0}rt!==null?(ee=rt.x,Se=rt.y,dn=rt.z):(ee=0,Se=0,dn=0);const Ge=xt.convert(Y.format),Bn=xt.convert(Y.type);let ae;Y.isData3DTexture?(K.setTexture3D(Y,0),ae=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(K.setTexture2DArray(Y,0),ae=X.TEXTURE_2D_ARRAY):(K.setTexture2D(Y,0),ae=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const ci=X.getParameter(X.UNPACK_ROW_LENGTH),ge=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ui=X.getParameter(X.UNPACK_SKIP_PIXELS),Tn=X.getParameter(X.UNPACK_SKIP_ROWS),Ci=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,xn.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xn.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,re),X.pixelStorei(X.UNPACK_SKIP_ROWS,he),X.pixelStorei(X.UNPACK_SKIP_IMAGES,_e);const fi=R.isDataArrayTexture||R.isData3DTexture,je=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const On=b.get(R),Ze=b.get(Y),An=b.get(On.__renderTarget),Na=b.get(Ze.__renderTarget);ie.bindFramebuffer(X.READ_FRAMEBUFFER,An.__webglFramebuffer),ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let La=0;La<$t;La++)fi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(R).__webglTexture,nt,_e+La),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Vt,dn+La)),X.blitFramebuffer(re,he,Zt,kt,ee,Se,Zt,kt,X.DEPTH_BUFFER_BIT,X.NEAREST);ie.bindFramebuffer(X.READ_FRAMEBUFFER,null),ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||b.has(R)){const On=b.get(R),Ze=b.get(Y);ie.bindFramebuffer(X.READ_FRAMEBUFFER,la),ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,Da);for(let An=0;An<$t;An++)fi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,On.__webglTexture,nt,_e+An):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,On.__webglTexture,nt),je?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.__webglTexture,Vt,dn+An):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ze.__webglTexture,Vt),nt!==0?X.blitFramebuffer(re,he,Zt,kt,ee,Se,Zt,kt,X.COLOR_BUFFER_BIT,X.NEAREST):je?X.copyTexSubImage3D(ae,Vt,ee,Se,dn+An,re,he,Zt,kt):X.copyTexSubImage2D(ae,Vt,ee,Se,re,he,Zt,kt);ie.bindFramebuffer(X.READ_FRAMEBUFFER,null),ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else je?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(ae,Vt,ee,Se,dn,Zt,kt,$t,Ge,Bn,xn.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(ae,Vt,ee,Se,dn,Zt,kt,$t,Ge,xn.data):X.texSubImage3D(ae,Vt,ee,Se,dn,Zt,kt,$t,Ge,Bn,xn):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Vt,ee,Se,Zt,kt,Ge,Bn,xn.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Vt,ee,Se,xn.width,xn.height,Ge,xn.data):X.texSubImage2D(X.TEXTURE_2D,Vt,ee,Se,Zt,kt,Ge,Bn,xn);X.pixelStorei(X.UNPACK_ROW_LENGTH,ci),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ge),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ui),X.pixelStorei(X.UNPACK_SKIP_ROWS,Tn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ci),Vt===0&&Y.generateMipmaps&&X.generateMipmap(ae),ie.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&K.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?K.setTextureCube(R,0):R.isData3DTexture?K.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?K.setTexture2DArray(R,0):K.setTexture2D(R,0),ie.unbindTexture()},this.resetState=function(){G=0,J=0,et=null,ie.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ds}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Qe._getUnpackColorSpace()}}const Q2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Oh,AddEquation:eo,AddOperation:Qy,AdditiveBlending:A0,AgXToneMapping:Y0,AlphaFormat:$0,AlwaysCompare:rS,AlwaysDepth:Yd,AlwaysStencilFunc:w0,AmbientLight:wS,ArrayCamera:NS,BackSide:Hi,BasicDepthPacking:$y,BasicShadowMap:Dy,Box3:ro,BoxGeometry:oo,BufferAttribute:Za,BufferGeometry:Gi,ByteType:Z0,Cache:Hd,Camera:dg,CanvasTexture:tc,CatmullRomCurve3:_S,CineonToneMapping:X0,CircleGeometry:Ku,ClampToEdgeWrapping:Us,Clock:US,Color:pe,ColorManagement:Qe,ConstantAlphaFactor:jy,ConstantColorFactor:Yy,CubeCamera:DS,CubeDepthTexture:mS,CubeReflectionMapping:so,CubeRefractionMapping:Xo,CubeTexture:lg,CubeUVReflectionMapping:Ju,CullFaceBack:T0,CullFaceFront:wy,CullFaceNone:Cy,Curve:gS,CustomBlending:Ly,CustomToneMapping:W0,CylinderGeometry:Qu,Data3DTexture:fS,DataArrayTexture:ng,DataTexture:og,DefaultLoadingManager:TS,DepthFormat:Ps,DepthStencilFormat:io,DepthTexture:oc,DirectionalLight:O0,DoubleSide:qn,DstAlphaFactor:Gy,DstColorFactor:ky,EqualCompare:iS,EqualDepth:jd,EquirectangularReflectionMapping:Pd,EquirectangularRefractionMapping:Fd,Euler:Ra,EventDispatcher:qo,ExternalTexture:cg,Float32BufferAttribute:Mn,FloatType:qa,Fog:Zu,FrontSide:hr,Frustum:qh,GLSL3:N0,GreaterCompare:aS,GreaterDepth:Kd,GreaterEqualCompare:Xh,GreaterEqualDepth:Zd,Group:Ho,HalfFloatType:Is,HemisphereLight:CS,ImageLoader:AS,ImageUtils:cS,InstancedBufferAttribute:U0,InstancedMesh:hS,IntType:Ih,KeepStencilOp:Fo,Layers:Yh,LessCompare:nS,LessDepth:qd,LessEqualCompare:kh,LessEqualDepth:ko,Light:fc,LinearFilter:jn,LinearMipmapLinearFilter:fr,LinearMipmapNearestFilter:Bd,LinearSRGBColorSpace:Yo,LinearToneMapping:V0,LinearTransfer:Yu,Loader:Qh,LoadingManager:bS,Material:jo,MathUtils:$e,Matrix3:Ce,Matrix4:_n,MaxEquation:Py,Mesh:Re,MeshBasicMaterial:no,MeshDepthMaterial:MS,MeshDistanceMaterial:ES,MeshLambertMaterial:SS,MeshPhysicalMaterial:Bo,MeshStandardMaterial:Ta,MinEquation:Iy,MirroredRepeatWrapping:Jd,MixOperation:Ky,MultiplyBlending:C0,MultiplyOperation:Uh,NearestFilter:Ai,NearestMipmapLinearFilter:Pu,NearestMipmapNearestFilter:Jy,NeutralToneMapping:q0,NeverCompare:eS,NeverDepth:Wd,NoBlending:Os,NoColorSpace:ur,NoToneMapping:hs,NormalBlending:Vo,NotEqualCompare:sS,NotEqualDepth:Qd,Object3D:wn,ObjectSpaceNormalMap:tS,OneFactor:By,OneMinusConstantAlphaFactor:Zy,OneMinusConstantColorFactor:qy,OneMinusDstAlphaFactor:Vy,OneMinusDstColorFactor:Xy,OneMinusSrcAlphaFactor:Xd,OneMinusSrcColorFactor:Hy,OrthographicCamera:Jh,PCFShadowMap:Go,PCFSoftShadowMap:Ny,PMREMGenerator:Nh,PerspectiveCamera:ji,Plane:$r,PlaneGeometry:Aa,PointLight:to,Quaternion:pr,R11_EAC_Format:rh,RED_GREEN_RGTC2_Format:wh,RED_RGTC1_Format:Rh,REVISION:Lh,RG11_EAC_Format:lh,RGBAFormat:ja,RGBAIntegerFormat:Gh,RGBA_ASTC_10x10_Format:Sh,RGBA_ASTC_10x5_Format:vh,RGBA_ASTC_10x6_Format:xh,RGBA_ASTC_10x8_Format:yh,RGBA_ASTC_12x10_Format:Mh,RGBA_ASTC_12x12_Format:Eh,RGBA_ASTC_4x4_Format:uh,RGBA_ASTC_5x4_Format:fh,RGBA_ASTC_5x5_Format:dh,RGBA_ASTC_6x5_Format:hh,RGBA_ASTC_6x6_Format:ph,RGBA_ASTC_8x5_Format:mh,RGBA_ASTC_8x6_Format:gh,RGBA_ASTC_8x8_Format:_h,RGBA_BPTC_Format:bh,RGBA_ETC2_EAC_Format:sh,RGBA_PVRTC_2BPPV1_Format:nh,RGBA_PVRTC_4BPPV1_Format:eh,RGBA_S3TC_DXT1_Format:Gu,RGBA_S3TC_DXT3_Format:Vu,RGBA_S3TC_DXT5_Format:ku,RGBFormat:tg,RGB_BPTC_SIGNED_Format:Th,RGB_BPTC_UNSIGNED_Format:Ah,RGB_ETC1_Format:ih,RGB_ETC2_Format:ah,RGB_PVRTC_2BPPV1_Format:th,RGB_PVRTC_4BPPV1_Format:$d,RGB_S3TC_DXT1_Format:Hu,RGFormat:Wo,RGIntegerFormat:Hh,RawShaderMaterial:yS,Ray:rg,Raycaster:LS,RedFormat:Bh,RedIntegerFormat:zh,ReinhardToneMapping:k0,RenderTarget:uS,RepeatWrapping:nc,ReverseSubtractEquation:Oy,RingGeometry:jh,SIGNED_R11_EAC_Format:oh,SIGNED_RED_GREEN_RGTC2_Format:Dh,SIGNED_RED_RGTC1_Format:Ch,SIGNED_RG11_EAC_Format:ch,SRGBColorSpace:ei,SRGBTransfer:ln,Scene:ig,ShaderChunk:Le,ShaderLib:fs,ShaderMaterial:gs,ShortType:K0,Source:Wh,Sphere:uc,SphereGeometry:Zh,SpotLight:Gd,SrcAlphaFactor:kd,SrcAlphaSaturateFactor:Wy,SrcColorFactor:zy,StaticDrawUsage:D0,SubtractEquation:Uy,SubtractiveBlending:R0,TangentSpaceNormalMap:Vh,Texture:vi,TextureLoader:RS,TorusGeometry:Kh,Triangle:Ya,UVMapping:j0,Uint16BufferAttribute:ag,Uint32BufferAttribute:sg,UniformsLib:qt,UniformsUtils:xS,UnsignedByteType:aa,UnsignedInt101111Type:J0,UnsignedInt248Type:ac,UnsignedInt5999Type:Q0,UnsignedIntType:ms,UnsignedShort4444Type:Ph,UnsignedShort5551Type:Fh,UnsignedShortType:ic,VSMShadowMap:$l,Vector2:Ie,Vector3:q,Vector4:Hn,VideoTexture:pS,WebGLCoordinateSystem:ds,WebGLCubeRenderTarget:hg,WebGLRenderTarget:ps,WebGLRenderer:HS,WebGLUtils:zS,WebGPUCoordinateSystem:sc,WebXRController:zd,ZeroFactor:Fy,createCanvasElement:oS,error:Ke,log:L0,warn:ve,warnOnce:ju},Symbol.toStringTag,{value:"Module"}));class J2 extends ig{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new oo;t.deleteAttribute("uv");const i=new Ta({side:Hi}),s=new Ta,l=new to(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Re(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new hS(t,s,6),h=new wn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),f.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),f.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),f.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),f.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),f.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),f.setMatrixAt(5,h.matrix),this.add(f);const m=new Re(t,jl(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Re(t,jl(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Re(t,jl(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Re(t,jl(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Re(t,jl(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const x=new Re(t,jl(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function jl(r){return new SS({color:0,emissive:16777215,emissiveIntensity:r})}const $2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],tR=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],eR=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],nR=["LOW","MEDIUM","HIGH","EXTREME"],iR=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],aR=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],sR={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},rR={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},oR={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},lR={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},cR={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function GS(r){return(r-90)*Math.PI/180}function uR(r,t,i,s){const l=GS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function Zl(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function pg(r){Zl("subject",r.subject,$2),Zl("domain",r.domain,tR),Zl("verb",r.verb,eR),Zl("magnitude",r.magnitude,nR),Zl("time",r.time,iR),Zl("certainty",r.certainty,aR)}function VS(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=cR[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return pg(s),s}function Bu(r){return pg(r),[r.subject,r.domain,r.verb,r.magnitude,r.time,r.certainty].join(".")}function zu(r){return Bu(VS(r))}function fR(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),h=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(h,m):r.lineTo(h,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,h=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,h):r.lineTo(f,h)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Nu(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,h=Math.sqrt(c*c+f*f)||1,m=c/h,p=f/h,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},x={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(x.x,x.y),r.closePath(),r.fill(),r.restore()}function Lu(r,t,i,s,l,c){const f=lR[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let h=1;h<=f;h+=1){const m=h/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function dR(r,t,i){pg(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,h=l*.5,m=i?.backgroundColor??"rgba(6,14,24,0.74)",p=i?.lineColor??"rgba(102,221,255,0.96)",_=i?.gridColor??"rgba(102,221,255,0.58)";r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,h,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,h,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,h,c*.12,0,Math.PI*2),r.stroke();const v=sR[t.domain],g=rR[t.time]*c,x=oR[t.magnitude]*c,E=uR(f,h,g,v),w=GS(v),M=Math.cos(w),S=Math.sin(w),C=-S,L=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let D={x:E.x,y:E.y},B={x:E.x+M*x,y:E.y+S*x},F;if(t.verb==="EXISTS")D={x:E.x-C*(x*.48),y:E.y-L*(x*.48)},B={x:E.x+C*(x*.48),y:E.y+L*(x*.48)},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),Lu(r,t,D,B,p);else if(t.verb==="DECLINES")B={x:E.x-M*x,y:E.y-S*x},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),Nu(r,D,B,p,7),Lu(r,t,D,B,p);else if(t.verb==="TRANSFORMS")F={x:E.x+C*(x*.34)+M*(x*.34),y:E.y+L*(x*.34)+S*(x*.34)},r.beginPath(),r.moveTo(D.x,D.y),r.quadraticCurveTo(F.x,F.y,B.x,B.y),r.stroke(),Nu(r,F,B,p,7),Lu(r,t,D,B,p,F);else if(t.verb==="INFLUENCES"){const T={x:E.x+C*3.4,y:E.y+L*3.4},N={x:B.x+C*3.4,y:B.y+L*3.4},ut={x:E.x-C*3.4,y:E.y-L*3.4},G={x:B.x-C*3.4,y:B.y-L*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(N.x,N.y),r.moveTo(ut.x,ut.y),r.lineTo(G.x,G.y),r.stroke(),Nu(r,T,N,p,6.6),Nu(r,ut,G,p,6.6),Lu(r,t,T,N,p)}else r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),Nu(r,D,B,p,7),Lu(r,t,D,B,p);r.fillStyle=p,r.beginPath(),r.arc(f,h,5,0,Math.PI*2),r.fill(),fR(r,t.subject,E,p)}function py(r,t,i){const s=VS(t);dR(r,s,i)}const my="intelligenspartiet:language",hR={nb:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Film",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideGlyphWall:"Glyff",outsideBack:"Tilbake",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signaturer",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Film",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideGlyphWall:"Glyff",outsideBack:"Back",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signatures",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},pR=100,or=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],lr=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],Oo=["LOW","MEDIUM","HIGH","EXTREME"],Io=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],Uu=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],v0=[{phase:"signal-whisper",subjects:["IDEA","TECHNOLOGY","INSTITUTION"],domains:["MEDIA","CULTURE","TECHNOLOGY","EDUCATION","INDIVIDUALS"],verbs:["EXISTS","INFLUENCES","GROWS"],magnitudes:["LOW","MEDIUM"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"attention-displacement",subjects:["INDIVIDUAL","IDEA","SYSTEM"],domains:["INDIVIDUALS","MEDIA","ORGANIZATIONS","TECHNOLOGY"],verbs:["INFLUENCES","GROWS","DECLINES"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["PROBABLE","CONFIRMED"]},{phase:"output-surge",subjects:["SYSTEM","TECHNOLOGY","INSTITUTION"],domains:["TECHNOLOGY","ORGANIZATIONS","ECONOMY","INFRASTRUCTURE"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["HIGH","EXTREME"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"cognitive-strain",subjects:["INDIVIDUAL","SYSTEM","TECHNOLOGY"],domains:["INDIVIDUALS","ORGANIZATIONS","EDUCATION","SCIENCE"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["HIGH","EXTREME"],times:["NOW","LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"blame-cycle",subjects:["INSTITUTION","EVENT","SYSTEM"],domains:["POLITICS","SOCIETY","MEDIA","ECONOMY"],verbs:["INFLUENCES","TRANSFORMS","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"resistance-ritual",subjects:["INSTITUTION","INDIVIDUAL","EVENT"],domains:["CULTURE","POLITICS","ORGANIZATIONS","SOCIETY"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["MEDIUM","HIGH"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"reskilling-wave",subjects:["IDEA","INSTITUTION","SYSTEM"],domains:["EDUCATION","SCIENCE","ORGANIZATIONS","TECHNOLOGY"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["PROBABLE","CONFIRMED"]},{phase:"institutional-memory",subjects:["INSTITUTION","SYSTEM","BREAKTHROUGH"],domains:["INFRASTRUCTURE","ORGANIZATIONS","ECONOMY","SCIENCE"],verbs:["EXISTS","TRANSFORMS","GROWS"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["INDICATION","PROBABLE","CONFIRMED"]},{phase:"myth-afterimage",subjects:["EVENT","IDEA","INDIVIDUAL"],domains:["CULTURE","MEDIA","SOCIETY","EDUCATION"],verbs:["EXISTS","INFLUENCES","DECLINES"],magnitudes:["LOW","MEDIUM","HIGH"],times:["Y3_10","GT10Y"],certainties:["INDICATION","PROBABLE"]},{phase:"recurrence",subjects:["SYSTEM","INSTITUTION","INDIVIDUAL"],domains:["SOCIETY","POLITICS","ORGANIZATIONS","INDIVIDUALS"],verbs:["TRANSFORMS","INFLUENCES","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["GT10Y","NOW"],certainties:["PROBABLE","CONFIRMED"]}],Kl=(r,t,i=0)=>r[(t+i)%r.length],Ou=(r,t,i)=>{const s=r.indexOf(t),l=s>=0?s:0;return r[(l+i+r.length*32)%r.length]},mR=r=>{const t=[],i=new Set,s=Math.ceil(r/v0.length);for(let l=0;l<v0.length;l+=1){const c=v0[l];for(let f=0;f<s&&t.length<r;f+=1){let h={subject:Kl(c.subjects,f,l),domain:Kl(c.domains,f,l*2),verb:Kl(c.verbs,f,l+f%3),magnitude:Kl(c.magnitudes,f,Math.floor(f/2)),time:Kl(c.times,f,Math.floor(f/3)),certainty:Kl(c.certainties,f,f%2)},m=zu(Bu(h));if(i.has(m)){let p=!1;for(let _=1;_<=lr.length*Io.length;_+=1){const v={...h,subject:Ou(or,h.subject,Math.floor(_/7)),domain:Ou(lr,h.domain,_),magnitude:Ou(Oo,h.magnitude,Math.floor(_/4)),time:Ou(Io,h.time,Math.floor(_/2)),certainty:Ou(Uu,h.certainty,Math.floor(_/3))},g=zu(Bu(v));if(!i.has(g)){h=v,m=g,p=!0;break}}if(!p)for(const _ of or){for(const v of lr){for(const g of Oo){for(const x of Io){for(const E of Uu){const w=zu(Bu({subject:_,domain:v,verb:h.verb,magnitude:g,time:x,certainty:E}));if(!i.has(w)){h={subject:_,domain:v,verb:h.verb,magnitude:g,time:x,certainty:E},m=w,p=!0;break}}if(p)break}if(p)break}if(p)break}if(p)break}}if(i.has(m)){const p=or.length*lr.length*Oo.length*Io.length*Uu.length;for(let _=0;_<p;_+=1){const v=t.length+_,g=v%or.length,x=Math.floor(v/or.length)%lr.length,E=Math.floor(v/(or.length*lr.length))%Oo.length,w=Math.floor(v/(or.length*lr.length*Oo.length))%Io.length,M=Math.floor(v/(or.length*lr.length*Oo.length*Io.length))%Uu.length,S={subject:or[g],domain:lr[x],verb:h.verb,magnitude:Oo[E],time:Io[w],certainty:Uu[M]},C=zu(Bu(S));if(!i.has(C)){m=C;break}}}i.add(m),t.push({id:`ra-${String(t.length+1).padStart(3,"0")}`,canonical:m,phase:c.phase})}}return t},gR=mR(pR),_R={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},x0=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:_R}),Cd=[x0("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),x0("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),x0("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],vR=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),ia=r=>{let t=r%1;return t<0&&(t+=1),t},xR=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),ia(r+l*(1-Math.exp(-i*s)))},gy=12,y0=9,wd=.12,_y=-1,S0=2.4,yR=.3,SR=1.2,MR=.3,vy=6741503,ER=5,bR=3.2,TR=.35,AR=.25,M0=400,RR=2.5,xy=16755251,Dd=3,CR=new q(M0*-.04,M0*-.42,M0*1.02),yy=-.14,Sy=.2,My=0,Ey=-22,wR=7,DR=["v1-cognitive-overproduction"],NR=["halfwall-06"],LR=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],UR="/gullhaien/nominert.png",OR=1e3/593,by=8.4,mg="https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/Intelligenspartiet2027.mp4",kS="https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/Skjermbilde%202026-03-01%20kl.%2015.09.35.png",cr=[{video:mg,poster:kS},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],IR=mg,PR=Math.max(0,cr.findIndex(r=>r.video===IR)),ep=17.6,gg=ep*(16/9),np=gg*Math.sqrt(3)/2,FR=.56,BR=31.2,Nd=np*2.62,Ty=ep*.56,zR=gg+5.4,Ay=ep+4.4,HR=np+.22,GR=0,VR=np+.72,kR=.72,XR=1.35,us=18,B0=us*(16/9),Jl=B0*Math.sqrt(3)/2,Ld=Jl*1.06,WR=17,YR=2.8,qR=.00185,jR=.0062,ZR=.0036,KR=60,QR=40,JR=220,$R=360,tC=105,eC=.75,Ry=96,z0=[330,250,180,120],nC=[2,3.2,4.8,6.2],iC=[.12,.17,.22,.3],Ud={tailPath:"",taperPaths:z0.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},E0=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],h=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${h} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},aC=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),sC=(r,t,i,s,l,c)=>{XS(r,t,l).forEach((h,m)=>{r.fillText(h,i,s+m*c)})},XS=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const h=s[f];if(!h)continue;const m=`${c}${h} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${h} `):c=m}return c.trim()&&l.push(c.trim()),l},rC=/\(\s*bold\s*\)/gi,oC=/\(\s*new\s*line\s*\)/gi,lC=/\(\s*new\s*paragraph\s*\)/gi,cC=r=>{const i=r.replace(/\r\n?/g,`
`).replace(lC,`

`).replace(oC,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const h=/\(\s*bold\s*\)/i.test(c),m=c.replace(rC,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:h,paragraphBreak:s}),s=!1}),l},uC=(r,t,i,s,l,c,f,h,m=.6)=>{const p=cC(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?h:f,XS(r,v.text,l).forEach(E=>{r.fillText(E,i,_),_+=c})}),r.font=f},fC=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,WS=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),dC=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),hC=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],pC=new Map(hC.map(([r,t])=>[WS(r),t])),mC=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],gC=mC.map(([r,t])=>[new RegExp(dC(r),"gi"),t]),_C={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},vC=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),xC=r=>{let t=r;return gC.forEach(([i,s])=>{t=t.replace(i,s)}),t},yC=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=_C[t.toLowerCase()];return i?vC(t,i):t}),SC=r=>{const t=r.trim();return t?(pC.get(WS(t))??yC(xC(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},MC=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(fC,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>SC(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},Od=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},H0=Math.PI*2,Po=r=>Math.min(1,Math.max(0,r)),Iu=(r,t,i,s,l)=>{const c=H0*(r*i+s),f=H0*(t*i+l),h=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return h+m},Id=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new tc(s)},Wa=(r,t,i,s,l=!1)=>{r.wrapS=nc,r.wrapT=nc,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=fr,r.magFilter=jn,l&&(r.colorSpace=ei),r.needsUpdate=!0},b0=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:h,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:x,roughnessBase:E,roughnessRange:w,normalStrength:M,aoStrength:S}=r,C=t*i,L=new pe(l),D=new Float32Array(C);let B=Number.POSITIVE_INFINITY,F=Number.NEGATIVE_INFINITY;for(let tt=0;tt<i;tt+=1)for(let Q=0;Q<t;Q+=1){const U=tt*t+Q,P=Q/t,ct=tt/i,pt=Iu(P,ct,c,s*.11,s*.23),At=Iu(P,ct,f,s*.41+.18,s*.29+.07),I=Iu(P,ct,h,s*.71+.43,s*.53+.31),j=Math.sin(H0*((P+ct*.33)*m+s*.17));let gt=0;if(_!=="none"&&v>0){const it=(_==="x"?P:ct)*v%1,yt=Math.min(it,1-it);gt=Math.exp(-Math.pow(yt/Math.max(1e-4,x),2))}const Lt=pt*.6+At*.28+I*.12+j*p-gt*g;D[U]=Lt,Lt<B&&(B=Lt),Lt>F&&(F=Lt)}const H=new Float32Array(C),T=Math.max(1e-4,F-B),N=new Uint8ClampedArray(C*4),ut=new Uint8ClampedArray(C*4),G=new Uint8ClampedArray(C*4);for(let tt=0;tt<i;tt+=1)for(let Q=0;Q<t;Q+=1){const U=tt*t+Q,P=U*4,ct=Q/t,pt=tt/i,At=Po((D[U]-B)/T);H[U]=At;const I=Iu(ct,pt,f*.6,s*.19+.62,s*.73+.14)*.5+.5,j=Po(.78+(At-.5)*.24+(I-.5)*.12),gt=Iu(ct,pt,c*.5,s*.37+.89,s*.13+.44),Lt=1+gt*.017,jt=1+gt*.007,it=1-gt*.013,yt=Po(E+(1-At)*w+(I-.5)*.14),Dt=Po(.94-(1-At)*S);N[P]=Math.round(Po(L.r*j*Lt)*255),N[P+1]=Math.round(Po(L.g*j*jt)*255),N[P+2]=Math.round(Po(L.b*j*it)*255),N[P+3]=255;const te=Math.round(yt*255);ut[P]=te,ut[P+1]=te,ut[P+2]=te,ut[P+3]=255;const zt=Math.round(Dt*255);G[P]=zt,G[P+1]=zt,G[P+2]=zt,G[P+3]=255}const J=(tt,Q)=>{const U=(tt+t)%t,P=(Q+i)%i;return H[P*t+U]},et=new Uint8ClampedArray(C*4);for(let tt=0;tt<i;tt+=1)for(let Q=0;Q<t;Q+=1){const P=(tt*t+Q)*4,ct=J(Q+1,tt)-J(Q-1,tt),pt=J(Q,tt+1)-J(Q,tt-1),At=-ct*M,I=-pt*M,j=1,gt=1/Math.hypot(At,I,j);et[P]=Math.round((At*gt*.5+.5)*255),et[P+1]=Math.round((I*gt*.5+.5)*255),et[P+2]=Math.round((j*gt*.5+.5)*255),et[P+3]=255}return{albedo:Id(N,t,i),normal:Id(et,t,i),roughness:Id(ut,t,i),ao:Id(G,t,i)}},EC=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const h=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=h*255,c/=h*255,f/=h*255;const m=l*.2126+c*.7152+f*.0722;return{color:new pe(l,c,f),luminance:m}};function bC(){const r=Wt.useRef([]),t=Wt.useRef(null),[i,s]=Wt.useState(!1),[l,c]=Wt.useState({width:1,height:1}),[f,h]=Wt.useState(Ud);return Wt.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},x=()=>{v()},E=(C,L)=>typeof C.addEventListener=="function"?(C.addEventListener("change",L),()=>C.removeEventListener("change",L)):(C.addListener(L),()=>C.removeListener(L));v(),g();const w=E(m,x),M=E(p,x),S=E(_,x);return window.addEventListener("resize",g,{passive:!0}),()=>{w(),M(),S(),window.removeEventListener("resize",g)}},[]),Wt.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],h(Ud);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,x=g[g.length-1];if(x){const E=v.x-x.x,w=v.y-x.y;if(Math.hypot(E,w)<eC)return}g.push(v),g.length>Ry&&g.splice(0,g.length-Ry)},p=()=>{const _=performance.now(),v=_-$R,g=r.current;let x=0;for(;x<g.length&&g[x].t<v;)x+=1;if(x>0&&g.splice(0,x),g.length<2)h(E=>E.visible?Ud:E);else{const E=E0(g),w=z0.map(B=>{const F=_-B;let H=g.length-1;for(;H>0&&g[H-1].t>=F;)H-=1;const T=g.slice(H);return E0(T.length>=2?T:g.slice(-2))}),M=_-tC;let S=g.length-1;for(;S>0&&g[S-1].t>=M;)S-=1;let C=g.slice(S);C.length<2&&(C=g.slice(-2));const L=E0(C),D=C[C.length-1]??g[g.length-1];h(B=>B.visible&&B.tailPath===E&&B.taperPaths.every((F,H)=>F===w[H])&&B.headPath===L&&B.headX===D.x&&B.headY===D.y?B:{tailPath:E,taperPaths:w,headPath:L,headX:D.x,headY:D.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],h(Ud)}},[i]),i?St.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[St.jsxs("defs",{children:[St.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[St.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),St.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),St.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[St.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),St.jsxs("feMerge",{children:[St.jsx("feMergeNode",{in:"blur"}),St.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?St.jsxs(St.Fragment,{children:[St.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?St.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:iC[p],strokeWidth:nC[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${z0[p]}`):null),St.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),St.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function TC(){const r=Wt.useRef(null),t=Wt.useRef([]),i=Wt.useRef(wd),s=Wt.useRef(wd),l=Wt.useRef(!1),c=Wt.useRef([]),f=Wt.useRef(null),h=Wt.useRef(null),m=Wt.useRef(null),p=Wt.useRef(null),_=Wt.useRef(null),v=Wt.useRef(null);Wt.useEffect(()=>{const k=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=k,document.documentElement.style.overscrollBehavior=""}},[]);const[g,x]=Wt.useState(Cd),[E,w]=Wt.useState([]),[M,S]=Wt.useState(Cd[0].id),[C,L]=Wt.useState(!0),[D,B]=Wt.useState(!1),[F,H]=Wt.useState(!1),[T,N]=Wt.useState("menu"),[ut,G]=Wt.useState(!1),[J,et]=Wt.useState([]),[tt,Q]=Wt.useState(!1),[U,P]=Wt.useState(""),[ct,pt]=Wt.useState(()=>PR),[At,I]=Wt.useState(""),[j,gt]=Wt.useState(""),[Lt,jt]=Wt.useState(""),[it,yt]=Wt.useState(!1),[Dt,te]=Wt.useState(null),[zt,fe]=Wt.useState(()=>{if(typeof window>"u")return"nb";try{const k=window.localStorage.getItem(my);if(k==="nb"||k==="en")return k}catch{}return"nb"});Wt.useEffect(()=>{try{window.localStorage.setItem(my,zt)}catch{}},[zt]);const Ee=hR[zt],be=Wt.useMemo(()=>k=>zt==="nb"?MC(k):k,[zt]),xe=Wt.useMemo(()=>gR.map((k,Ct)=>{let z="";if(typeof document<"u"){const xt=document.createElement("canvas");xt.width=420,xt.height=420;const ht=xt.getContext("2d");if(ht)try{py(ht,k.canonical,{backgroundColor:"rgba(0,0,0,0)",lineColor:"rgba(46,39,33,0.94)",gridColor:"rgba(69,60,53,0.48)"}),z=xt.toDataURL("image/png")}catch{z=""}}return{...k,index:Ct,previewDataUrl:z}}),[]);Wt.useEffect(()=>{const k=new Set(xe.map(Ct=>Ct.canonical));k.size!==xe.length&&console.warn(`Glyff wall uniqueness violation: ${xe.length-k.size} duplicates detected.`)},[xe]);const Je=Wt.useMemo(()=>JSON.stringify({version:"rl-story-v1",name:"replacement-anxiety-pattern",protocol:"ra-sequence-v1",read_order:"left_to_right_top_to_bottom",count:xe.length,items:xe.map(k=>({order:k.index+1,id:k.id,phase:k.phase,canonical:k.canonical}))},null,2),[xe]),ye=Wt.useCallback(()=>{f.current?.()},[]),Dn=Wt.useCallback(()=>{h.current?.()},[]),X=Wt.useCallback(()=>{m.current?.()},[]),vn=Wt.useCallback(()=>{yt(!1)},[]),we=Wt.useCallback(()=>{v.current=null,te(null)},[]),tn=Wt.useCallback(k=>{k.preventDefault();const Ct=At.trim(),z=j.trim(),xt=Lt.trim();if(!Ct||!z||!xt)return;const ht=zt==="nb"?"Kontakt fra Signaturer":"Contact from Signatures",Ut=[`${zt==="nb"?"Navn":"Name"}: ${Ct}`,`${zt==="nb"?"E-post":"Email"}: ${z}`,"",`${zt==="nb"?"Melding":"Message"}:`,xt].join(`
`),bt=`mailto:lars@larscuzner.com?subject=${encodeURIComponent(ht)}&body=${encodeURIComponent(Ut)}`;window.location.href=bt},[zt,j,Lt,At]),ie=Wt.useRef(0),O=Wt.useRef(0),b=Wt.useRef(null),K=Wt.useCallback(k=>{const Ct=k>=0?1:-1;pt(z=>{const xt=cr.length;return(z+Ct+xt)%xt})},[]),vt=Wt.useCallback(k=>{k.preventDefault();const Ct=Math.abs(k.deltaX)>Math.abs(k.deltaY)?k.deltaX:k.deltaY;ie.current+=Ct;const z=performance.now();z-O.current<JR||Math.abs(ie.current)<QR||(K(ie.current>0?1:-1),ie.current=0,O.current=z)},[K]),Rt=Wt.useCallback(k=>{b.current=k.touches[0]?.clientX??null},[]),mt=Wt.useCallback(k=>{const Ct=b.current,z=k.changedTouches[0]?.clientX??null;if(b.current=null,Ct===null||z===null)return;const xt=z-Ct;Math.abs(xt)<28||K(xt<0?1:-1)},[K]);Wt.useEffect(()=>{F||N("menu")},[F]),Wt.useEffect(()=>{F||G(!1)},[F]),Wt.useEffect(()=>{ut||yt(!1)},[ut]),Wt.useEffect(()=>{if(!it)return;const k=_.current;if(!k)return;const Ct=k.play();Ct&&typeof Ct.catch=="function"&&Ct.catch(()=>{})},[it]),Wt.useEffect(()=>{if(!it)return;const k=Ct=>{Ct.key==="Escape"&&yt(!1)};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[it]),Wt.useEffect(()=>{T==="videos"&&(ie.current=0,O.current=0)},[T]),Wt.useEffect(()=>{if(!F||T!=="videos")return;let k=!1;const Ct=()=>{k||c.current.forEach(xt=>{if(!xt||!xt.paused&&xt.readyState>=2)return;const ht=xt.play();ht&&typeof ht.catch=="function"&&ht.catch(()=>{})})};Ct();const z=window.setInterval(Ct,900);return()=>{k=!0,window.clearInterval(z)}},[F,T]),Wt.useEffect(()=>{if(!F||T!=="news")return;let k=!1;const Ct=ht=>({title:String(ht?.title??"").trim(),source:String(ht?.source??"").trim(),url:String(ht?.url??"").trim(),snippet:String(ht?.snippet??"").trim(),published_at:String(ht?.published_at??"").trim(),published:ht?.published!==!1}),z=ht=>{const Ut=Date.parse(ht);return Number.isFinite(Ut)?Ut:0};return(async()=>{Q(!0),P("");for(const ht of LR)try{const Ut=await fetch(ht,{cache:"no-store"});if(!Ut.ok)continue;const bt=await Ut.json();if(!Array.isArray(bt?.items))continue;const Z=bt.items.map(Ct).filter(Ft=>Ft.published&&Ft.title&&Ft.url).sort((Ft,Et)=>z(Et.published_at)-z(Ft.published_at));if(k)return;et(Z),Q(!1);return}catch{}k||(et([]),P(Ee.outsideNewsError),Q(!1))})(),()=>{k=!0}},[F,T,Ee.outsideNewsError]),Wt.useEffect(()=>{let k=!1;return(async()=>{try{const z=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),xt=z.headers.get("content-type")??"";if(!z.ok)throw new Error(`HTTP ${z.status} while loading glyph language map`);if(!xt.toLowerCase().includes("application/json")){const Xt=await z.text();throw new Error(`Expected JSON but got '${xt||"unknown"}' (${Xt.slice(0,120)})`)}const ht=await z.json();if(!Array.isArray(ht?.items))throw new Error("Glyph language payload missing 'items' array");const Ut=ht.items.map((Xt,Gt)=>vR(Xt,Gt)).filter(Xt=>Xt.enabled!==!1),bt=new Map,Z=[],Ft=[],Et=[];if(Ut.forEach(Xt=>{if(!Xt.canonical){Ft.push(`${Xt.id} (empty canonical)`);return}let Gt="";try{Gt=zu(Xt.canonical)}catch{Ft.push(`${Xt.id} (${Xt.canonical})`);return}const Nn=bt.get(Gt);if(Nn&&Nn!==Xt.id){Et.push(`${Xt.id} duplicates ${Nn} (${Gt})`);return}bt.set(Gt,Xt.id),Z.push({...Xt,canonical:Gt})}),Ft.length>0&&console.warn("Glyph language map dropped invalid canonical rows:",Ft.join("; ")),Et.length>0&&console.warn("Glyph language map dropped duplicate canonical rows:",Et.join("; ")),k)return;w(Z)}catch(z){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",z),k)return;w([])}})(),()=>{k=!0}},[]),Wt.useEffect(()=>{if(l.current||g.length===0)return;let k=null;for(const xt of DR){const ht=E.find(Ut=>Ut.id===xt&&Ut.panel_id);if(ht?.panel_id){k=ht.panel_id;break}}k||(k=NR.find(xt=>g.some(ht=>ht.id===xt))??null);const Ct=(k?g.find(xt=>xt.id===k):void 0)??g[0],z=typeof Ct?.installation?.placement_t=="number"?ia(Ct.installation.placement_t):wd;i.current=z,s.current=z,Ct?.id&&S(Ct.id),l.current=!0},[E,g]);const ne=Wt.useMemo(()=>E.filter(k=>k.enabled!==!1&&typeof k.canonical=="string"&&k.canonical.trim().length>0),[E]),Pt=Wt.useMemo(()=>{const k=new Map;if(!g.length||!ne.length)return k;const Ct=ht=>{const Ut=ia(ht);return ia(wd-Ut)},z=[...g].sort((ht,Ut)=>{const bt=typeof ht.installation?.placement_t=="number"?ht.installation.placement_t:0,Z=typeof Ut.installation?.placement_t=="number"?Ut.installation.placement_t:0,Ft=Ct(bt),Et=Ct(Z);return Ft===Et?ht.id.localeCompare(Ut.id):Ft-Et}),xt=Math.min(z.length,ne.length);for(let ht=0;ht<xt;ht+=1)k.set(z[ht].id,ne[ht]);return k},[g,ne]),le=Wt.useMemo(()=>{const k=new Map;return Pt.forEach((Ct,z)=>{Ct.canonical&&k.set(z,Ct.canonical)}),k},[Pt]),de=Wt.useMemo(()=>{const k=new Map;return Pt.forEach((Ct,z)=>{k.set(z,{label:Ct.label||"",note:Ct.note||"",labelNb:Ct.label_nb||"",noteNb:Ct.note_nb||""})}),k},[Pt]);Wt.useEffect(()=>{let k=!1;return(async()=>{L(!0),B(!1);try{const z=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),xt=z.headers.get("content-type")??"";if(!z.ok)throw new Error(`HTTP ${z.status} while loading panel data`);if(!xt.toLowerCase().includes("application/json")){const Et=await z.text();throw new Error(`Expected JSON but got '${xt||"unknown"}' (${Et.slice(0,120)})`)}const ht=await z.json();if(!Array.isArray(ht?.panels))throw new Error("Panel payload missing 'panels' array");const Ut=typeof ht.media_root=="string"?ht.media_root.replace(/\/+$/,""):"",bt=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",Z=Et=>/^https?:\/\//i.test(Et)&&bt?`/proxy?url=${encodeURIComponent(Et)}`:Et,Ft=ht.panels.map(Et=>{const Xt=typeof Et?.source=="string"?Et.source.replace(/^\/+/,""):"",Gt=Xt?Ut?`${Ut}/${Xt}`:`/${Xt}`:void 0,Nn=Gt?Z(Gt):void 0,Si=typeof Et?.poster=="string"?Et.poster.replace(/^\/+/,""):"",Ka=Si?Ut?`${Ut}/${Si}`:`/${Si}`:void 0,Ca=Ka?Z(Ka):void 0,sa=Et?.type==="image"||Et?.type==="video"?Et.type:"text",ni=Et?.content??{},Qa=String(ni?.title??"Untitled").trim()||"Untitled",En=String(ni?.description??"").trim(),ra=String(ni?.title_nb??ni?.title_no??"").trim(),bn=String(ni?.description_nb??ni?.description_no??"").trim(),cn=String(ni?.title_en??"").trim(),qe=String(ni?.description_en??"").trim();return{...Et,kind:sa,type:sa,title:Qa,body:En,title_nb:ra||Qa,body_nb:bn||En,title_en:cn,body_en:qe,cta:ni?.cta,poster:Ca,image:sa==="image"?Nn:void 0,video:sa==="video"?Nn:void 0}});if(Ft.length===0)throw new Error("Panel payload contained 0 panels");if(k)return;x(Ft),S(Ft[0].id)}catch(z){if(console.error("Failed to load panels; using fallback data.",z),k)return;x(Cd),S(Cd[0].id),B(!0)}finally{k||L(!1)}})(),()=>{k=!0}},[]);const Nt=Wt.useMemo(()=>g.find(k=>k.id===M)??g[0]??{title:"",body:""},[M,g]),wt=Wt.useMemo(()=>k=>{const Ct=de.get(k.id);if(zt==="nb"){const ht=Od(Ct?.labelNb,k.title_nb,be(Ct?.label||""),be(k.title||"")),Ut=Od(Ct?.noteNb,k.body_nb,be(Ct?.note||""),be(k.body||""));return{title:ht||"Mangler norsk tittel",body:Ut||"Mangler norsk tekst."}}const z=Od(Ct?.label,k.title_en),xt=Od(Ct?.note,k.body_en);return{title:z||"Missing English title",body:xt||"Missing English text."}},[de,zt,be]),Qt=Wt.useMemo(()=>wt(Nt).title,[Nt,wt]),Yt=Wt.useMemo(()=>new Intl.DateTimeFormat(zt==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[zt]);return Wt.useEffect(()=>{if(g.length===0)return;const k=r.current;if(!k)return;f.current=null,h.current=null,m.current=null,H(!1),G(!1),we();let Ct=!1,z=()=>{};return(()=>{if(Ct||!k)return;t.current=[];const ht=window.matchMedia("(prefers-reduced-motion: reduce)"),Ut=window.matchMedia("(max-width: 767px)"),bt=ht.matches,Z=Ut.matches,Ft=ot=>{const It=wt(ot);v.current=ot.id,te({panelId:ot.id,title:It.title,body:It.body})},Et=new ig;Et.background=new pe(987671),Et.fog=new Zu(987671,38,230);const Xt=new ji(Z?72:64,k.clientWidth/k.clientHeight,.1,1200),Gt=new HS({antialias:!Z,alpha:!1,powerPreference:"high-performance"});Gt.setPixelRatio(Math.min(window.devicePixelRatio,Z?1:1.5)),Gt.setSize(k.clientWidth,k.clientHeight),Gt.outputColorSpace=ei,Gt.toneMapping=Oh,Gt.toneMappingExposure=Z?.76:.72,Gt.shadowMap.enabled=!Z,Gt.shadowMap.type=Go,k.appendChild(Gt.domElement);let Nn=!1;const Si=ot=>{Nn!==ot&&(Nn=ot,Gt.shadowMap.type=ot?Dy:Go,Gt.shadowMap.needsUpdate=!0)},Ka=new Nh(Gt),Ca=Ka.fromScene(new J2,.06);Et.environment=Ca.texture;const sa=new wS(16185599,.05);Et.add(sa);const ni=new CS(14739442,1777446,.08);Et.add(ni);const Qa=aC(Q2),En=new _S(Qa,!0,"catmullrom",.17),ra=Z?180:300,bn=Math.min(8,Gt.capabilities.getMaxAnisotropy()),cn=Z?256:512,qe=b0({width:cn,height:cn,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});Wa(qe.albedo,4.8,24,bn,!0),Wa(qe.normal,4.8,24,bn),Wa(qe.roughness,4.8,24,bn),Wa(qe.ao,4.8,24,bn);const Mi=b0({width:cn,height:cn,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});Wa(Mi.albedo,2.2,24,bn,!0),Wa(Mi.normal,2.2,24,bn),Wa(Mi.roughness,2.2,24,bn),Wa(Mi.ao,2.2,24,bn);const Ri=b0({width:cn,height:cn,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});Wa(Ri.albedo,3.4,24,bn,!0),Wa(Ri.normal,3.4,24,bn),Wa(Ri.roughness,3.4,24,bn),Wa(Ri.ao,3.4,24,bn);const Ja=new Bo({color:9607586,map:qe.albedo,normalMap:qe.normal,normalScale:new Ie(.32,.32),roughnessMap:qe.roughness,roughness:.38,metalness:0,aoMap:qe.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:qn}),wa=new Bo({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:qn}),li=new Bo({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new pe(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:qn}),Fs=()=>{const ot=[],It=new q(0,1,0);let Jt=new q(1,0,0);for(let Bt=0;Bt<=ra;Bt+=1){const rn=Bt/ra,Rn=En.getPointAt(rn),hi=rn===1?Rn.clone().sub(En.getPointAt(rn-.001)).normalize():En.getPointAt(rn+.001).sub(Rn).normalize();let Cn=new q().crossVectors(hi,It).normalize();Cn.lengthSq()<1e-4&&(Cn=Jt.clone()),Cn.dot(Jt)<0&&Cn.multiplyScalar(-1),Jt=Cn.clone();const pi=new q().crossVectors(Cn,hi).normalize();ot.push({pt:Rn,right:Cn,up:pi,t:rn})}const Ht=(Bt,rn,Rn=!1)=>{const hi=[],Cn=[],pi=[];for(let ga=0;ga<=ra;ga+=1){const kn=ot[ga],Qi=Bt(kn),hn=rn(kn);hi.push(Qi.x,Qi.y,Qi.z,hn.x,hn.y,hn.z),Cn.push(0,kn.t,1,kn.t)}for(let ga=0;ga<ra;ga+=1){const kn=ga*2,Qi=kn+1,hn=kn+2,on=kn+3;Rn?pi.push(kn,hn,Qi,hn,on,Qi):pi.push(kn,Qi,hn,hn,Qi,on)}const mi=new Gi;mi.setAttribute("position",new Mn(hi,3));const Ar=new Mn(Cn,2);return mi.setAttribute("uv",Ar),mi.setAttribute("uv2",Ar.clone()),mi.setIndex(pi),mi.computeVertexNormals(),mi},Ot=gy*.5,ce=y0*.5,Kt=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(-ce)).add(Bt.right.clone().multiplyScalar(-Ot)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(-ce)).add(Bt.right.clone().multiplyScalar(Ot))),We=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce)).add(Bt.right.clone().multiplyScalar(-Ot)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce)).add(Bt.right.clone().multiplyScalar(Ot)),!0),Te=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(-ce)).add(Bt.right.clone().multiplyScalar(-Ot)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce)).add(Bt.right.clone().multiplyScalar(-Ot)),!0),Zn=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(-ce)).add(Bt.right.clone().multiplyScalar(Ot)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce)).add(Bt.right.clone().multiplyScalar(Ot))),Kn=.08,Ye=.015,De=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce-Kn)).add(Bt.right.clone().multiplyScalar(-Ot+Ye)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce)).add(Bt.right.clone().multiplyScalar(-Ot+Ye)),!0),Be=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce-Kn)).add(Bt.right.clone().multiplyScalar(Ot-Ye)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce)).add(Bt.right.clone().multiplyScalar(Ot-Ye)),!1),Ve=.22,Qn=.018,Vn=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(-ce)).add(Bt.right.clone().multiplyScalar(-Ot+Qn)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(-ce+Ve)).add(Bt.right.clone().multiplyScalar(-Ot+Qn)),!0),Jn=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(-ce)).add(Bt.right.clone().multiplyScalar(Ot-Qn)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(-ce+Ve)).add(Bt.right.clone().multiplyScalar(Ot-Qn)),!1),Ei=.14,ma=Ht(Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce-.05)).add(Bt.right.clone().multiplyScalar(-Ei)),Bt=>Bt.pt.clone().add(Bt.up.clone().multiplyScalar(ce-.05)).add(Bt.right.clone().multiplyScalar(Ei)),!0);return{floorGeo:Kt,ceilGeo:We,leftGeo:Te,rightGeo:Zn,leftSkirtGeo:Vn,rightSkirtGeo:Jn,trackRailGeo:ma,leftCrownGeo:De,rightCrownGeo:Be}},{floorGeo:_s,ceilGeo:oa,leftGeo:la,rightGeo:Da,leftSkirtGeo:R,rightSkirtGeo:Y,trackRailGeo:ft,leftCrownGeo:rt,rightCrownGeo:nt}=Fs(),Vt=new Re(_s,Ja),Zt=new Re(oa,li),kt=new Re(la,wa),$t=new Re(Da,wa),re=new Bo({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),he=new Ta({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:qn}),_e=new Re(R,he),ee=new Re(Y,he);_e.receiveShadow=!0,ee.receiveShadow=!0;const Se=new Re(rt,he),dn=new Re(nt,he);Se.receiveShadow=!1,dn.receiveShadow=!1;const xn=new Bo({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:qn}),Ge=new Re(ft,xn);Ge.receiveShadow=!1,Vt.receiveShadow=!0,Vt.castShadow=!0,Zt.receiveShadow=!0,Zt.castShadow=!0,kt&&(kt.receiveShadow=!0,kt.castShadow=!0),$t&&($t.receiveShadow=!0,$t.castShadow=!0),Et.add(Vt),Et.add(Zt),kt&&Et.add(kt),$t&&Et.add($t),Et.add(_e),Et.add(ee),Et.add(Se),Et.add(dn),Et.add(Ge);const Bn=[Vt,Zt,_e,ee,Se,dn,Ge];kt&&Bn.push(kt),$t&&Bn.push($t);const ae=new q(0,1,0),ci=new wn,ge=new wn,ui=new wn;Et.add(ci),Et.add(ge),Et.add(ui);const Tn=new Gd(16773598,Z?16:24,34,Math.PI/8.4,.44,2);Tn.target=ci,Tn.castShadow=!Z,Tn.castShadow&&(Tn.shadow.mapSize.width=2048,Tn.shadow.mapSize.height=2048,Tn.shadow.bias=-35e-5,Tn.shadow.normalBias=.012,Tn.shadow.camera.near=.4,Tn.shadow.camera.far=34),Et.add(Tn);const Ci=new Gd(12571903,Z?6:9,34,Math.PI/6.5,.68,2);Ci.target=ge,Ci.castShadow=!1,Et.add(Ci);const fi=new Gd(14083583,Z?5:7,28,Math.PI/7.8,.6,2);fi.target=ui,fi.castShadow=!1,Et.add(fi);const je=new wn,On=new wn;Et.add(je),Et.add(On);const Ze=new O0(16774374,0);if(Ze.target=je,Ze.castShadow=!Z,Ze.castShadow){Ze.shadow.mapSize.width=4096,Ze.shadow.mapSize.height=4096,Ze.shadow.bias=-8e-5,Ze.shadow.normalBias=.0012,Ze.shadow.radius=0;const ot=Z?250:220;Ze.shadow.camera.left=-ot,Ze.shadow.camera.right=ot,Ze.shadow.camera.top=ot,Ze.shadow.camera.bottom=-ot,Ze.shadow.camera.near=25,Ze.shadow.camera.far=980}Et.add(Ze);const An=new O0(9090280,0);An.target=On,Et.add(An),_s.computeBoundingBox(),_s.computeBoundingSphere(),oa.computeBoundingBox(),oa.computeBoundingSphere(),la.computeBoundingBox(),la.computeBoundingSphere(),Da.computeBoundingBox(),Da.computeBoundingSphere();const La=g.some(ot=>ot.installation?.mount_type==="continuous_led_wall"||ot.installation?.mount_type==="jutting_half_wall")?g:Z?g.filter((ot,It)=>It%2===0):g,Ui=[],mr=[],ca=[],Ua=[],ua=[],fa=[],hc=[],Oi=ot=>{if(!ot.paused&&ot.currentTime>0)return;const It=ot.play();It&&typeof It.catch=="function"&&It.catch(()=>{})},Bs=setInterval(()=>{let ot=!0;fa.forEach(It=>{(It.paused||It.readyState<2)&&(ot=!1,Oi(It))}),ot&&fa.length>0&&clearInterval(Bs)},500);ua.push(()=>clearInterval(Bs));const $u=new oo(1,1,.2),pc=new Aa(.82,.82),tf=new Bo({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),lo=(ot,It)=>{const Ht=document.createElement("canvas");Ht.width=512,Ht.height=512;const Ot=Ht.getContext("2d");Ot.clearRect(0,0,512,512);const ce=le.get(It);if(ce)try{py(Ot,ce,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const Be=new tc(Ht);return Be.colorSpace=ei,Be}catch(Be){console.warn(`Invalid glyph canonical sentence for panel '${It}': '${ce}'. Falling back to procedural glyph.`,Be)}const Kt=512/2,We=512/2,Te=ot*137.508;Ot.fillStyle="rgba(6,14,24,0.7)",Ot.beginPath(),Ot.arc(Kt,We,512*.42,0,Math.PI*2),Ot.fill(),Ot.strokeStyle="rgba(102,221,255,0.95)",Ot.lineWidth=2.5,Ot.lineCap="round",Ot.beginPath(),Ot.arc(Kt,We,512*.38,0,Math.PI*2),Ot.stroke();const Zn=3+ot%4;for(let Be=0;Be<Zn;Be++){const Ve=Be/Zn*Math.PI*2+Te,Qn=512*.08,Vn=512*.32;Ot.beginPath(),Ot.moveTo(Kt+Math.cos(Ve)*Qn,We+Math.sin(Ve)*Qn),Ot.lineTo(Kt+Math.cos(Ve)*Vn,We+Math.sin(Ve)*Vn),Ot.stroke()}const Kn=2+ot%3;for(let Be=0;Be<Kn;Be++){const Ve=512*(.15+Be*.09),Qn=Te+Be*1.2;Ot.beginPath(),Ot.arc(Kt,We,Ve,Qn,Qn+Math.PI*(.4+ot%3*.2)),Ot.stroke()}Ot.fillStyle="rgba(102,221,255,0.85)";const Ye=3+ot%5;for(let Be=0;Be<Ye;Be++){const Ve=Te+Be/Ye*Math.PI*2,Qn=512*(.2+Be%3*.06);Ot.beginPath(),Ot.arc(Kt+Math.cos(Ve)*Qn,We+Math.sin(Ve)*Qn,4,0,Math.PI*2),Ot.fill()}Ot.strokeStyle="rgba(102,221,255,0.5)",Ot.lineWidth=1.5,Ot.beginPath(),Ot.arc(Kt,We,512*.12,0,Math.PI*2),Ot.stroke(),Ot.fillStyle="rgba(102,221,255,0.95)",Ot.beginPath(),Ot.arc(Kt,We,6,0,Math.PI*2),Ot.fill();const De=new tc(Ht);return De.colorSpace=ei,De},$a=(ot,It)=>{const Jt=document.createElement("canvas");Jt.width=1024,Jt.height=640;const Ht=Jt.getContext("2d");Ht.fillStyle="rgba(8,12,18,0.88)",Ht.beginPath(),Ht.roundRect(16,16,992,608,24),Ht.fill(),Ht.strokeStyle="rgba(102,221,255,0.25)",Ht.lineWidth=2,Ht.beginPath(),Ht.roundRect(16,16,992,608,24),Ht.stroke(),Ht.fillStyle="rgba(102,221,255,0.95)",Ht.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",sC(Ht,ot.toUpperCase(),60,100,900,58),Ht.strokeStyle="rgba(102,221,255,0.3)",Ht.lineWidth=2,Ht.beginPath(),Ht.moveTo(60,180),Ht.lineTo(960,180),Ht.stroke(),Ht.fillStyle="rgba(220,230,240,0.9)";const Ot="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",ce="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";Ht.font=Ot,uC(Ht,It,60,230,900,42,Ot,ce);const Kt=new tc(Jt);return Kt.colorSpace=ei,Kt},mc=()=>{const It=document.createElement("canvas");It.width=512,It.height=512;const Jt=It.getContext("2d"),Ht=512/2,Ot=512/2;Jt.beginPath(),Jt.arc(Ht,Ot,512*.42,0,Math.PI*2),Jt.fillStyle="rgba(6,14,24,0.7)",Jt.fill(),Jt.strokeStyle="rgba(255,170,51,0.9)",Jt.lineWidth=6,Jt.beginPath(),Jt.arc(Ht,Ot,512*.38,0,Math.PI*2),Jt.stroke();const ce=8;for(let We=0;We<ce;We++){const Te=We/ce*Math.PI*2-Math.PI/2;Jt.strokeStyle=`rgba(255,${170+Math.round(Math.sin(We)*40)},51,0.8)`,Jt.lineWidth=4,Jt.beginPath(),Jt.moveTo(Ht+Math.cos(Te)*512*.12,Ot+Math.sin(Te)*512*.12),Jt.lineTo(Ht+Math.cos(Te)*512*.34,Ot+Math.sin(Te)*512*.34),Jt.stroke();const Zn=Ht+Math.cos(Te)*512*.34,Kn=Ot+Math.sin(Te)*512*.34,Ye=512*.06;Jt.beginPath(),Jt.moveTo(Zn,Kn),Jt.lineTo(Zn-Ye*Math.cos(Te-.4),Kn-Ye*Math.sin(Te-.4)),Jt.moveTo(Zn,Kn),Jt.lineTo(Zn-Ye*Math.cos(Te+.4),Kn-Ye*Math.sin(Te+.4)),Jt.stroke()}Jt.beginPath(),Jt.arc(Ht,Ot,512*.06,0,Math.PI*2),Jt.fillStyle="rgba(255,200,80,0.95)",Jt.fill();const Kt=new tc(It);return Kt.colorSpace=ei,Kt},gr=ot=>{const It=ia(ot),Jt=En.getPointAt(It),Ot=En.getPointAt(ia(It+.002)).clone().sub(Jt).normalize();let ce=new q().crossVectors(Ot,ae).normalize();ce.lengthSq()<1e-4&&(ce=new q(1,0,0));const Kt=new q().crossVectors(ce,Ot).normalize();return{point:Jt,tangent:Ot,right:ce,up:Kt}},vs=ot=>{const It=ot.uv?.y;if(typeof It=="number"&&Number.isFinite(It))return ia(It);const Jt=Z?180:320;let Ht=0,Ot=Number.POSITIVE_INFINITY;for(let ce=0;ce<=Jt;ce+=1){const Kt=ce/Jt,Te=En.getPointAt(Kt).distanceToSquared(ot.point);Te<Ot&&(Ot=Te,Ht=Kt)}return ia(Ht)};En.getLength();const xs=[],co=new Aa(S0*2,S0*2),gc=new Aa(ER,bR);La.forEach((ot,It)=>{const Jt=ot.installation,Ht=ia(Jt?.placement_t??.05+It/La.length),{point:Ot,right:ce,up:Kt}=gr(Ht),We=Jt?.side==="left",Kn=(Jt?.side==="center"?0:We?-1:1)*gy*.12,Ye=Ot.clone().add(ce.clone().multiplyScalar(Kn)).add(Kt.clone().multiplyScalar(.5)),De=lo(It,ot.id);mr.push(De);const Be=new Ta({color:16777215,emissive:new pe(vy),emissiveIntensity:1.2,map:De,emissiveMap:De,transparent:!0,alphaTest:.05,side:qn,depthWrite:!1});ca.push(Be);const Ve=new Re(co,Be);Ve.position.copy(Ye),Ve.userData={panel:ot,isGlyph:!0},Ui.push(Ve),Et.add(Ve);const Qn=wt(ot),Vn=Qn.title,Jn=Qn.body,Ei=$a(Vn,Jn);mr.push(Ei);const ma=new Ta({color:16777215,emissive:new pe(1122867),emissiveIntensity:.3,map:Ei,transparent:!0,opacity:0,side:qn,depthWrite:!0});ca.push(ma);const Bt=new Re(gc,ma),rn=new Ho;rn.add(Bt),rn.position.copy(Ye),rn.scale.setScalar(.01),rn.visible=!1,Et.add(rn);const Rn=new to(vy,Z?6:12,20,1.5);Rn.position.copy(Ye),Et.add(Rn),xs.push({mesh:Ve,card:rn,panel:ot,progress:Ht,baseY:Ye.y,expanded:!1,expandT:0}),t.current.push({meta:ot,progress:Ht})});let In=!1,Ii=0,Gn=0,yn=0,Zi=0,da=.08,_r=0,ys=!1,uo=0,fo=0,zs=!1,di=0,Oa=0,Ss=0,Hs=0,vr=!1,ts=!1,Zo=0,Ko=0,ha=null,Ms=!1,ef=0,_c=0,xr=!1,vc=!1;const Es={x:0,y:0},Ia={x:0,y:0},Qo=new q,nf=new q,Jo=ot=>{zs!==ot&&(zs=ot,G(ot))},wi=new q,$o=32;for(let ot=0;ot<$o;ot++)wi.add(En.getPointAt(ot/$o));wi.divideScalar($o);const ip=()=>{Qo.copy(wi).add(CR),nf.copy(wi)},af=()=>{xs.forEach(ot=>{ot.expanded=!1})},xc=ot=>{In!==ot&&(In=ot,vr=!1,ts=!1,ys=!1,ha=null,Ms=!1,H(ot),ot?(Gn=0,yn=0,Zi=0,da=.08,_r=0,Jo(!1),xr=!1,vc=!0,di=yy,Oa=Sy,Ss=My,Hs=Ey,ip(),af(),we()):Jo(!1))},tl=()=>{xc(!In)};f.current=tl;const ap=new Aa(Dd*2,Dd*2),yc=mc();mr.push(yc);const Sc=new Ta({color:16777215,emissive:new pe(xy),emissiveIntensity:1.4,map:yc,emissiveMap:yc,transparent:!0,alphaTest:.05,side:qn,depthWrite:!1});ca.push(Sc);const{point:sf,up:rf}=gr(AR),yr=sf.clone().add(rf.clone().multiplyScalar(1)),Pa=new Re(ap,Sc);Pa.position.copy(yr),Pa.userData={isExitGlyph:!0},Et.add(Pa);const sp=new Aa(Dd*5,Dd*5),of=new no({visible:!1,side:qn}),Gs=new Re(sp,of);Gs.position.copy(yr),Gs.userData={isExitGlyph:!0},Ui.push(Gs),Et.add(Gs);const Mc=new to(xy,Z?6:12,20,1.5);Mc.position.copy(yr),Et.add(Mc);const Ec=new Zh(Z?1.25:1.6,26,26);Ua.push(Ec);const el=new Ta({color:16764788,emissive:new pe(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});ca.push(el);const bs=sf.clone().add(rf.clone().multiplyScalar(y0*.52+.32)),Sr=new Re(Ec,el);Sr.position.copy(bs),Sr.userData={isReentryDot:!0},Ui.push(Sr),Et.add(Sr);const lf=new jh(Z?1.75:2.2,Z?2.35:2.95,52);Ua.push(lf);const bc=new no({color:16761948,transparent:!0,opacity:0,side:qn,depthWrite:!1});ca.push(bc);const Mr=new Re(lf,bc);Mr.position.copy(bs),Et.add(Mr);const nl=new to(16761948,0,Z?34:44,2);nl.position.copy(bs),Et.add(nl);const es=wi.clone().add(new q(-178,42,118)),Pn=new Ho;Pn.position.copy(es),Pn.visible=!1,Et.add(Pn);const Tc=new Ta({color:3093563,roughness:.88,metalness:.06}),ho=new Ta({color:5923435,roughness:.54,metalness:.14}),Ac=new Ta({color:2040617,roughness:.92,metalness:.04});ca.push(Tc,ho,Ac);const Rc=new Aa(B0+2.6,us+2.4),il=new Aa(B0,us),al=new Ku(Ld,6),Cc=new Ku(Ld,6),wc=new Qu(.2,.2,us+2.8,10);Ua.push(Rc,il,al,Cc,wc);const po=new Re(al,Ac);po.rotation.x=-Math.PI*.5,po.position.y=-us*.52,po.receiveShadow=!0,Pn.add(po);const sl=new Re(Cc,Tc);sl.rotation.x=Math.PI*.5,sl.position.y=us*.52,sl.receiveShadow=!0,Pn.add(sl);const Dc=new to(15985630,0,96,2);Dc.position.set(0,us*.34,0),Pn.add(Dc);const Nc=new to(11123666,0,74,2);Nc.position.set(0,-us*.1,Jl*.3),Pn.add(Nc);const rl=new RS().load(UR);rl.colorSpace=ei,rl.anisotropy=Gt.capabilities.getMaxAnisotropy(),mr.push(rl);const cf=new Aa(by,by/OR);Ua.push(cf);const Pi=new no({map:rl,transparent:!0,alphaTest:.06,depthWrite:!1,toneMapped:!1});ca.push(Pi);const Ts=new Re(cf,Pi),Lc=us*.34,ol=cr[0]?.video??"";for(let ot=0;ot<6;ot+=1){const It=ot*Math.PI/3,Jt=Jl+1,Ht=Jl-.18,Ot=new Re(Rc,Tc);Ot.position.set(-Math.sin(It)*Jt,0,-Math.cos(It)*Jt),Ot.rotation.y=It,Ot.castShadow=!0,Ot.receiveShadow=!0,Pn.add(Ot);const ce=cr[ot%cr.length],Kt=document.createElement("video");Kt.src=ce.video,Kt.poster=ce.poster,Kt.autoplay=!0,Kt.loop=!0,Kt.muted=!0,Kt.playsInline=!0,Kt.preload="metadata",Kt.crossOrigin="anonymous",Kt.setAttribute("playsinline","true"),Kt.setAttribute("webkit-playsinline","true"),fa.push(Kt);let We=!1;const Te=()=>{We||!ol||Kt.src===ol||(We=!0,Kt.src=ol,Kt.load(),Oi(Kt))},Zn=()=>{Oi(Kt)},Kn=()=>{Te()};Kt.addEventListener("loadeddata",Zn),Kt.addEventListener("canplay",Zn),Kt.addEventListener("error",Kn),ua.push(()=>{Kt.removeEventListener("loadeddata",Zn),Kt.removeEventListener("canplay",Zn),Kt.removeEventListener("error",Kn)});const Ye=new pS(Kt);Ye.colorSpace=ei,Ye.minFilter=jn,Ye.magFilter=jn,Ye.generateMipmaps=!1,mr.push(Ye),Oi(Kt);const De=new no({color:16777215,map:Ye,side:qn,toneMapped:!1});ca.push(De);const Be=new Re(il,De);Be.position.set(-Math.sin(It)*Ht,0,-Math.cos(It)*Ht),Be.rotation.y=It,Be.castShadow=!1,Be.receiveShadow=!0,ot===0&&(Be.userData={isMainFilmWall:!0},Ui.push(Be),Ts.position.set(0,Lc,-Ht+.72),Ts.rotation.y=It,Pn.add(Ts)),Pn.add(Be)}for(let ot=0;ot<6;ot+=1){const It=ot*Math.PI/3+Math.PI/6,Jt=Jl+1.56,Ht=new Re(wc,ho);Ht.position.set(-Math.sin(It)*Jt,0,-Math.cos(It)*Jt),Ht.castShadow=!0,Ht.receiveShadow=!0,Pn.add(Ht)}const Uc=new Kh(2.15,.2,12,48);Ua.push(Uc);const Oc=new Ta({color:15129027,roughness:.46,metalness:.24});ca.push(Oc);const Fa=new Re(Uc,Oc);Fa.position.copy(es.clone().add(new q(0,-us*.22,Jl-4.4))),Fa.rotation.x=Math.PI*.5,Fa.userData={isFilmRoomExit:!0},Ui.push(Fa),Et.add(Fa);const Ic=new to(15914669,0,26,2);Ic.position.copy(Fa.position).add(new q(0,1.2,0)),Et.add(Ic);const Vs=new Qu(Ld*1.08,Ld*1.08,us*1.2,6);Ua.push(Vs);const ll=new no({visible:!1,side:qn});ca.push(ll);const pa=new Re(Vs,ll);pa.userData={isFilmRoomPortal:!0},Ui.push(pa),Et.add(pa);const cl=()=>{In&&(vr=!1,ts=!1,ha=null,Ms=!1,ys=!1,yn=1,N("menu"),Jo(!0),fa.forEach(Oi))},Pc=()=>{In&&(yn=0,ys=!1)};h.current=cl,m.current=Pc;const ns=new LS,As=new Ie,ul=ot=>{fa.forEach(Oi);const It=Gt.domElement.getBoundingClientRect();As.x=(ot.clientX-It.left)/It.width*2-1,As.y=-((ot.clientY-It.top)/It.height)*2+1,Zo=ot.clientX,Ko=ot.clientY,ns.setFromCamera(As,Xt);const Jt=ns.intersectObjects(Ui,!1);if(In){if(Jt.length>0){const Ht=Jt[0].object;if(Ht.userData.isFilmRoomPortal){cl();return}if(Ht.userData.isFilmRoomExit){Pc();return}if(Ht.userData.isMainFilmWall&&Gn>.12){ys=!1,yt(!0);return}if(Ht.userData.isReentryDot){xc(!1);return}if(Ht.userData.isExitGlyph){tl();return}}if(Gn>.12){ys=ot.button===0,uo=ot.clientX,fo=ot.clientY;return}if(vr=!0,ts=ot.shiftKey||ot.altKey||ot.button===2,ha=null,Ms=!1,ef=ot.clientX,_c=ot.clientY,!ts&&ot.button===0&&Gn<.08){const Ht=ns.intersectObjects(Bn,!1);Ht.length>0&&(ha=vs(Ht[0]))}return}if(Jt.length>0){const Ht=Jt[0].object;if(Ht.userData.isExitGlyph){tl();return}const Ot=Ht.userData.panel;if(Ot){if(Z){v.current===Ot.id?we():Ft(Ot),af();return}const ce=xs.find(Kt=>Kt.panel.id===Ot.id);ce&&(ce.expanded?ce.expanded=!1:(xs.forEach(Kt=>{Kt.expanded=!1}),ce.expanded=!0))}}else Z||xs.forEach(Ht=>{Ht.expanded=!1})};Gt.domElement.addEventListener("pointerdown",ul);const Fc=ot=>{const It=Gt.domElement.getBoundingClientRect(),Jt=(ot.clientX-It.left)/It.width,Ht=(ot.clientY-It.top)/It.height;if(Es.x=(Jt-.5)*2,Es.y=(Ht-.5)*2,In&&ys){const Ot=ot.clientX-uo,ce=ot.clientY-fo;uo=ot.clientX,fo=ot.clientY,Zi+=Ot*.0042,da=$e.clamp(da+ce*.0032,-.46,.42);return}if(In&&vr){if(ha!==null&&!Ms){if(Math.hypot(ot.clientX-ef,ot.clientY-_c)<=wR){Zo=ot.clientX,Ko=ot.clientY;return}Ms=!0,ha=null}const Ot=ot.clientX-Zo,ce=ot.clientY-Ko;Zo=ot.clientX,Ko=ot.clientY,xr=!0,ts?Ss=$e.clamp(Ss+Ot*.0038,-Math.PI*.48,Math.PI*.48):(di+=Ot*.0046,Oa=$e.clamp(Oa+ce*.0035,-.88,.88));return}},Rs=()=>{Es.x=0,Es.y=0,ys=!1,vr=!1,ts=!1,ha=null,Ms=!1},mo=()=>{In&&ha!==null&&!Ms&&(i.current=ha,s.current=ha,xc(!1)),ys=!1,vr=!1,ts=!1,ha=null,Ms=!1},Bc=ot=>{In&&ot.preventDefault()};Gt.domElement.addEventListener("pointermove",Fc,{passive:!0}),Gt.domElement.addEventListener("pointerleave",Rs,{passive:!0}),Gt.domElement.addEventListener("pointerup",mo,{passive:!0}),Gt.domElement.addEventListener("pointercancel",mo,{passive:!0}),Gt.domElement.addEventListener("contextmenu",Bc);const zc=ot=>{if(ot.preventDefault(),In){if(Gn>.12){const It=Math.abs(ot.deltaX)>Math.abs(ot.deltaY)?ot.deltaX:ot.deltaY;Zi+=It*qR,da=$e.clamp(da+ot.deltaY*65e-5,-.46,.42);return}xr=!0,di+=ot.deltaY*.0017,Hs=$e.clamp(Hs+ot.deltaY*.22,-165,230);return}fa.forEach(Oi),i.current=ia(i.current+_y*ot.deltaY*75e-6)};Gt.domElement.addEventListener("wheel",zc,{passive:!1});const uf=ot=>{(ot.key==="o"||ot.key==="O")&&tl()};window.addEventListener("keydown",uf);let Er=0,br=0;const Hc=ot=>{fa.forEach(Oi),Er=ot.touches[0]?.clientX??0,br=ot.touches[0]?.clientY??0},Gc=ot=>{ot.preventDefault();const It=ot.touches[0]?.clientX??Er,Jt=ot.touches[0]?.clientY??br,Ht=Er-It,Ot=br-Jt;if(In){if(Gn>.12){Zi+=Ht*jR,da=$e.clamp(da+Ot*ZR,-.46,.42),Er=It,br=Jt;return}xr=!0,di+=Ot*.0021,Hs=$e.clamp(Hs+Ot*.13,-165,230),Er=It,br=Jt;return}i.current=ia(i.current+_y*Ot*11e-5),Er=It,br=Jt};Gt.domElement.addEventListener("touchstart",Hc,{passive:!0}),Gt.domElement.addEventListener("touchmove",Gc,{passive:!1});const fl=()=>{k&&(Xt.aspect=k.clientWidth/k.clientHeight,Xt.updateProjectionMatrix(),Gt.setSize(k.clientWidth,k.clientHeight))};window.addEventListener("resize",fl);const Ki=new US,Tr=new q,Vi=new q,ks=new q,go=new q;let _o=g.length>0?g[0].id:"";const vo=()=>{if(Ct)return;const ot=Ki.getDelta(),It=Ki.getElapsedTime();s.current=xR(s.current,i.current,bt?2.8:4.8,ot),Ia.x+=(Es.x-Ia.x)*.07,Ia.y+=(Es.y-Ia.y)*.07,vc&&(Es.x=0,Es.y=0,Ia.x=0,Ia.y=0,vc=!1);const Jt=s.current,Ht=ia(Jt+(Z?.008:.01)),Ot=En.getPointAt(Jt),ce=En.getPointAt(Ht),Kt=En.getPointAt(ia(Jt+.002)).sub(En.getPointAt(ia(Jt-.002))).normalize();let We=new q().crossVectors(Kt,ae).normalize();We.lengthSq()<1e-4&&(We=new q(1,0,0));const Te=new q().crossVectors(We,Kt).normalize(),Zn=We.clone().multiplyScalar(Ia.x*(Z?0:.62)).add(Te.clone().multiplyScalar(Ia.y*(Z?0:.42))),Kn=bt?new q:Te.clone().multiplyScalar(Math.sin(It*.45)*.12),Ye=1/RR;In&&Ii<1?Ii=Math.min(1,Ii+Ye*ot):!In&&Ii>0&&(Ii=Math.max(0,Ii-Ye*ot));const De=Ii<.5?4*Ii*Ii*Ii:1-Math.pow(-2*Ii+2,3)/2,Be=1/XR;yn>Gn?Gn=Math.min(yn,Gn+Be*ot):yn<Gn&&(Gn=Math.max(yn,Gn-Be*ot));const Ve=Gn<.5?4*Gn*Gn*Gn:1-Math.pow(-2*Gn+2,3)/2;yn===0&&Gn<=.001&&zs&&Jo(!1),yn>.01&&Gn>.08&&fa.forEach(Oi),In&&!xr&&(di=yy,Oa=Sy,Ss=My,Hs=Ey);const Qn=$e.smoothstep(De,.18,1),Vn=xr?Qn:0,Jn=Ia.x*(Z?0:15.4)*Vn,Ei=Ia.y*(Z?0:9.2)*Vn;je.position.copy(wi).add(new q(Math.sin(di)*6.8+Jn*.2,Oa*2.4+Ei*.18,Math.cos(di)*3.6-Jn*.13)),On.position.copy(wi).add(new q(-Math.sin(di)*3.2,Oa*.9,Math.cos(di)*2.1)),Ze.position.set(wi.x+700+Jn*2.8+Math.sin(di)*52,wi.y+290+Ei*1.35+Oa*28,wi.z-130-Jn*1.3+Math.cos(di)*30),An.position.set(wi.x-470-Jn*.82-Math.sin(di)*16,wi.y+35+Ei*.22+Oa*10,wi.z+360+Jn*.6-Math.cos(di)*12);const ma=Qo.clone().sub(wi).applyQuaternion(new pr().setFromEuler(new Ra(Oa,di,0,"YXZ"))),Bt=$e.clamp(ma.length()+Hs,260,860);ma.setLength(Bt);const rn=wi.clone().add(ma).add(new q(Jn,Ei*.84,Jn*.58)),Rn=nf.clone().add(new q(Jn*.11,Ei*.095,Jn*.085)),hi=new pr,Cn=$e.smoothstep(De,.24,.96)*(1-Ve),pi=In&&(Cn>.001||Ve>.001||yn>.001),mi=$e.lerp(.22,1,Ve);Pn.visible=pi,Pn.scale.setScalar(mi),Pn.position.copy(es).add(new q(0,Math.sin(It*.72)*.9*(1-Ve),0)),Pn.rotation.y=It*.18*(1-Ve),Ts.position.y=Lc+Math.sin(It*1.18)*.22,Fa.visible=Ve>.08,Ic.intensity=$e.lerp(0,Z?1.8:2.9,Ve);const Ar=pi?1:0;Dc.intensity=$e.lerp(Z?.34:.58,Z?2.6:4.8,Ve)*Ar,Nc.intensity=$e.lerp(Z?.14:.24,Z?1.2:2.1,Ve)*Ar,Fa.rotation.z=It*.18;const ga=In&&yn<.01&&Cn>.08;pa.visible=ga,pa.position.copy(Pn.position),pa.rotation.copy(Pn.rotation),pa.scale.setScalar(mi);const kn=p.current;if(kn)if(In&&yn<.01&&Cn>.06){go.copy(Pn.position).project(Xt);const en=(go.x*.5+.5)*k.clientWidth,Ln=(-go.y*.5+.5)*k.clientHeight;kn.style.left=`${en-(Z?86:132)}px`,kn.style.top=`${Ln-(Z?6:12)}px`,kn.style.opacity=`${$e.clamp(Cn*1.25,0,1)}`,kn.style.visibility="visible"}else kn.style.opacity="0",kn.style.visibility="hidden";const Qi=$e.clamp(WR+_r,11.5,29),hn=es.clone().add(new q(0,-.8,0)),on=es.clone().add(new q(Math.sin(Zi)*Qi,YR+da*9.5,Math.cos(Zi)*Qi));if(De>.01){Si(De>.26),Et.fog instanceof Zu&&(Et.fog.near=$e.lerp(38,9999,De),Et.fog.far=$e.lerp(230,1e4,De));const Ue=new pe(987671),en=new pe(132106);Et.background.copy(Ue).lerp(en,De),sa.intensity=$e.lerp(.05,.002,De),ni.intensity=$e.lerp(.08,.007,De),Ze.intensity=$e.lerp(0,Z?4.6:8.6,De),An.intensity=$e.lerp(0,Z?.02:.03,De),Gt.toneMappingExposure=$e.lerp(Z?.76:.72,Z?.75:.76,De),[Ja,wa].forEach(Ln=>{Ln.emissive.set(3359829),Ln.emissiveIntensity=0}),Ja.envMapIntensity=$e.lerp(.74,.04,De),wa.envMapIntensity=$e.lerp(.08,.01,De),li.color.set(0).lerp(new pe(16777215),De),li.toneMapped=De>.5,li.fog=De>.5,li.emissive.set(16777215),li.emissiveIntensity=$e.lerp(1,.02,De),li.envMapIntensity=$e.lerp(0,.03,De)}else Si(!1),sa.intensity=.05,ni.intensity=.08,Ze.intensity=0,An.intensity=0,Gt.toneMappingExposure=Z?.76:.72,Et.background.set(987671),[Ja,wa].forEach(Ue=>{Ue.emissive.set(0),Ue.emissiveIntensity=0}),Ja.envMapIntensity=.74,wa.envMapIntensity=.08,li.color.set(0),li.toneMapped=!1,li.fog=!1,li.emissive.set(16777215),li.emissiveIntensity=1,li.envMapIntensity=0;const Pe=Te.clone().multiplyScalar(-y0*.2),is=Ot.clone().add(Pe).add(Zn).add(Kn),ki=ce.clone().add(Pe).add(Zn.multiplyScalar(.22));if(De>.99){if(Xt.position.copy(rn),Xt.lookAt(Rn),Math.abs(Ss)>1e-4){const Ue=Rn.clone().sub(Xt.position).normalize();hi.setFromAxisAngle(Ue,Ss),Xt.quaternion.multiply(hi)}}else if(De>.001){Xt.position.lerpVectors(is,rn,De);const Ue=ki.clone().lerp(Rn,De);if(Xt.lookAt(Ue),Math.abs(Ss)>1e-4){const en=Ue.clone().sub(Xt.position).normalize();hi.setFromAxisAngle(en,Ss*De),Xt.quaternion.multiply(hi)}}else Xt.position.copy(is),Xt.lookAt(ki);if(In&&Ve>.001){const Ue=Xt.position.clone().lerp(on,Ve),en=Rn.clone().lerp(hn,Ve);Xt.position.copy(Ue),Xt.lookAt(en)}const xo=.94+Math.sin(It*.23)*.06,Ba=ce.clone().add(Pe);Tn.position.copy(Xt.position).add(Te.clone().multiplyScalar(2.9)).add(We.clone().multiplyScalar(2.1)).add(Kt.clone().multiplyScalar(-2.2)),ci.position.copy(Ba).add(We.clone().multiplyScalar(2.5)).add(Te.clone().multiplyScalar(-.9)),Tn.intensity=(Z?14:21)*xo,Ci.position.copy(Xt.position).add(Te.clone().multiplyScalar(2)).add(We.clone().multiplyScalar(-2.4)).add(Kt.clone().multiplyScalar(-1.1)),ge.position.copy(Ba).add(We.clone().multiplyScalar(-2)).add(Te.clone().multiplyScalar(-1.4)),Ci.intensity=(Z?5:8)*xo,fi.position.copy(Xt.position).add(Te.clone().multiplyScalar(1.4)).add(Kt.clone().multiplyScalar(2.8)).add(We.clone().multiplyScalar(.6)),ui.position.copy(Ba).add(Te.clone().multiplyScalar(-.8)),fi.intensity=(Z?4:6.2)*xo,Ui.forEach(Ue=>{const en=Ue.userData;if(!en||!en.shading||!en.material)return;const Ln=en.shading,Xn=en.material,gi=en.video,Oe=en;let as=1;Ln.lighting?.flicker_sync&&gi&&gi.readyState>=3&&(as=.88+Math.sin(It*22)*.1*Math.sin(It*6.7));let Xs=1;if(Ln.movement_reaction?.type==="viewing_angle_fade"){Tr.set(0,0,0),Ue.getWorldPosition(Tr),Vi.set(0,0,1).applyQuaternion(Ue.quaternion),ks.copy(Xt.position).sub(Tr).normalize();const Xi=Vi,Di=ks,zn=Math.max(0,Xi.dot(Di)),Cr=Ln.movement_reaction.cone_angle_degrees===60?3:1.5;Xs=Math.pow(zn,Cr)}const _a=en.baseEmissive*as*Xs;if(Xn.emissiveIntensity=_a,Oe.bounceLights&&Oe.bounceLights.length>0){const Xi=Oe.bounceSampleCtx,Di=Oe.bounceSampleCanvas;if(gi&&Xi&&Di&&(Oe.bounceNextSampleAt??0)<=It){const Cs=EC(gi,Di,Xi);if(Cs){Oe.bounceTargetColor||(Oe.bounceTargetColor=Cs.color.clone());const kc=Cs.color.clone().lerp(new pe(1,.97,.93),.18);Oe.bounceTargetColor.copy(kc);const Xc=$e.clamp(.22+Cs.luminance*1.9,.22,2.25);Oe.bounceTargetIntensity=(Oe.bounceBaseIntensity??5)*Xc*(.25+_a*1.25)}Oe.bounceNextSampleAt=It+1/(Z?2:4)}else gi||(Oe.bounceTargetIntensity=(Oe.bounceBaseIntensity??5)*(.22+_a*1.1));const zn=Oe.bounceTargetIntensity??0,Cr=Oe.bounceCurrentIntensity??0;Oe.bounceCurrentIntensity=$e.lerp(Cr,zn,1-Math.exp(-6.2*ot)),Oe.bounceCurrentColor||(Oe.bounceCurrentColor=(Oe.bounceTargetColor??new pe(1,1,1)).clone()),Oe.bounceTargetColor&&Oe.bounceCurrentColor.lerp(Oe.bounceTargetColor,1-Math.exp(-5.4*ot)),Oe.bounceLights.forEach((Cs,kc)=>{const Xc=Math.max(1,Oe.bounceLights.length-1),rp=1-kc/Xc*.34;Cs.color.copy(Oe.bounceCurrentColor),Cs.intensity=(Oe.bounceCurrentIntensity??0)*rp})}}),hc.forEach(({mesh:Ue,basePosition:en,strength:Ln})=>{const Xn=Ue.parent;if(!Xn)return;const gi=Xn.worldToLocal(Xt.position.clone()),Oe=$e.clamp(gi.x*.008,-.18,.18)*Ln,as=$e.clamp(gi.y*.006,-.14,.14)*Ln;Ue.position.x=en.x+Oe,Ue.position.y=en.y+as}),xs.forEach((Ue,en)=>{const{mesh:Ln,card:Xn}=Ue;Ln.lookAt(Xt.position);const gi=en*.7,Oe=Ue.baseY+Math.sin(It*SR+gi)*yR;Ln.position.y=Oe,Ln.rotateZ(MR*ot);const as=Ln.material;as.emissiveIntensity=1+Math.sin(It*2+en)*.4;const Xs=!Z&&Ue.expanded?1:0,_a=1/TR;Ue.expandT<Xs?Ue.expandT=Math.min(1,Ue.expandT+_a*ot):Ue.expandT>Xs&&(Ue.expandT=Math.max(0,Ue.expandT-_a*ot));const Xi=Ue.expandT,Di=Xi<.5?4*Xi*Xi*Xi:1-Math.pow(-2*Xi+2,3)/2;if(!Z&&Di>.001){Xn.visible=!0,Xn.position.copy(Ln.position),Xn.position.y-=S0+.3,Xn.lookAt(Xt.position),Xn.scale.setScalar(Di);const zn=Xn.children[0].material;zn.opacity=Di}else Xn.visible=!1;as.opacity=Z?1:1-Di*.4});const Vc=yr.y+Math.sin(It*.8)*.35;Pa.lookAt(Xt.position),Pa.position.y=Vc,Pa.rotateZ(.15*ot),Sc.emissiveIntensity=1.2+Math.sin(It*1.5)*.5,Gs.lookAt(Xt.position),Gs.position.y=Vc;const Rr=.72+Math.sin(It*2.35)*.28,za=$e.smoothstep(De,.2,.95)*(1-Ve);Sr.visible=za>.001,Mr.visible=za>.001,Sr.scale.setScalar(.88+Rr*.28),el.emissiveIntensity=za*(.48+Rr*.45),nl.intensity=za*(Z?4.6:7.4)*Rr,Mr.lookAt(Xt.position),Mr.scale.setScalar(.95+Rr*.18),bc.opacity=za*(.2+Rr*.32);let Ha=t.current[0]?.meta.id??(g.length>0?g[0].id:""),dl=Number.POSITIVE_INFINITY;t.current.forEach(Ue=>{let en=Math.abs(Jt-Ue.progress);en>.5&&(en=1-en),en<dl&&(dl=en,Ha=Ue.meta.id)}),Ha!==_o&&(_o=Ha,S(Ha)),Gt.render(Et,Xt),requestAnimationFrame(vo)};vo(),z=()=>{f.current=null,h.current=null,m.current=null,we(),Gt.domElement.removeEventListener("pointerdown",ul),Gt.domElement.removeEventListener("pointermove",Fc),Gt.domElement.removeEventListener("pointerleave",Rs),Gt.domElement.removeEventListener("pointerup",mo),Gt.domElement.removeEventListener("pointercancel",mo),Gt.domElement.removeEventListener("contextmenu",Bc),Gt.domElement.removeEventListener("wheel",zc),Gt.domElement.removeEventListener("touchstart",Hc),Gt.domElement.removeEventListener("touchmove",Gc),window.removeEventListener("resize",fl),window.removeEventListener("keydown",uf),k.contains(Gt.domElement)&&k.removeChild(Gt.domElement),Ui.forEach(ot=>{const It=ot.userData?.video;It&&(It.pause(),It.src="",It.load())}),fa.forEach(ot=>{ot.pause(),ot.src="",ot.load()}),ua.forEach(ot=>ot()),mr.forEach(ot=>ot.dispose?.()),Ua.forEach(ot=>ot.dispose()),co.dispose(),gc.dispose(),qe.albedo.dispose(),qe.normal.dispose(),qe.roughness.dispose(),qe.ao.dispose(),Mi.albedo.dispose(),Mi.normal.dispose(),Mi.roughness.dispose(),Mi.ao.dispose(),Ri.albedo.dispose(),Ri.normal.dispose(),Ri.roughness.dispose(),Ri.ao.dispose(),ca.forEach(ot=>ot.dispose()),Ca.texture.dispose(),Ca.dispose(),Ka.dispose(),Ja.dispose(),wa.dispose(),re.dispose(),li.dispose(),tf.dispose(),$u.dispose(),pc.dispose(),_s.dispose(),oa.dispose(),la.dispose(),Da.dispose(),R.dispose(),Y.dispose(),rt.dispose(),nt.dispose(),ft.dispose(),he.dispose(),xn.dispose(),Gt.dispose()}})(),()=>{Ct=!0,f.current=null,h.current=null,m.current=null,z()}},[g,le,wt,we]),St.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[St.jsx("div",{ref:r,className:"absolute inset-0"}),St.jsx(bC,{}),St.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[St.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[St.jsx("button",{type:"button",onClick:()=>fe("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${zt==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":zt==="nb",children:"NO"}),St.jsx("button",{type:"button",onClick:()=>fe("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${zt==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":zt==="en",children:"EN"})]}),St.jsx("button",{type:"button",onClick:ut?X:ye,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":F,children:ut?"get out":F?"get in":"get out"})]}),C||D?St.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:C?Ee.loadingPanels:Ee.panelsFallback}):null,F?null:St.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[St.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:Ee.siteName}),St.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[Ee.activeInstallation,": ",Qt]})]}),Dt&&!F?St.jsx("div",{className:"pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 md:hidden",children:St.jsxs("section",{className:"pointer-events-auto w-full max-w-[30rem] rounded-2xl border border-[#7fd9ff]/28 bg-[#061324]/94 px-4 py-3 text-[#e6f4ff] shadow-[0_22px_56px_rgba(0,0,0,0.62)] backdrop-blur",children:[St.jsxs("div",{className:"flex items-start justify-between gap-3",children:[St.jsx("h2",{className:"text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9edfff]",children:Dt.title}),St.jsx("button",{type:"button",onClick:we,className:"pointer-events-auto rounded-full border border-[#7fd9ff]/35 px-3 py-[0.28rem] text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#d7f0ff] transition active:translate-y-[1px]",children:zt==="nb"?"Lukk":"Close"})]}),St.jsx("p",{className:"mt-2 max-h-[52svh] overflow-y-auto whitespace-pre-line text-[0.83rem] leading-relaxed text-[#d9e7f4]",children:Dt.body})]})}):null,it?St.jsx("div",{className:"absolute inset-0 z-[70] bg-[rgba(2,6,14,0.84)] backdrop-blur-[10px]",onClick:vn,children:St.jsx("div",{className:"flex h-full w-full items-center justify-center px-4 py-20 md:px-8",children:St.jsxs("section",{className:"relative w-full max-w-[72rem] overflow-hidden rounded-[1.35rem] border border-[#d4e4ff]/24 bg-black shadow-[0_32px_110px_rgba(0,0,0,0.62)]",onClick:k=>k.stopPropagation(),children:[St.jsx("button",{type:"button",onClick:vn,className:"absolute right-3 top-3 z-10 rounded-full border border-white/16 bg-black/45 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-black/65",children:zt==="nb"?"Lukk":"Close"}),St.jsxs("video",{ref:_,controls:!0,playsInline:!0,preload:"metadata",poster:kS,autoPlay:!0,className:"block aspect-video w-full bg-black",children:[St.jsx("source",{src:mg,type:"video/mp4"}),zt==="nb"?"Nettleseren din kan ikke spille av denne videoen.":"Your browser cannot play this video."]})]})})}):null,F&&!ut?St.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[St.jsx("style",{children:`
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
            `}),T==="menu"?St.jsxs(St.Fragment,{children:[St.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:Ee.siteName}),St.jsx("button",{ref:p,type:"button",onClick:Dn,className:"pointer-events-auto absolute text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)",transform:"translate(-50%, -50%)",left:"-9999px",top:"-9999px",opacity:0,visibility:"hidden"},children:St.jsx("span",{className:"relative inline-block",children:Ee.outsideVideos})}),St.jsx("button",{type:"button",onClick:()=>N("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:St.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:Ee.outsideSignatures})})]}):null,T!=="menu"?St.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[St.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[St.jsx("button",{type:"button",onClick:()=>N("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:Ee.outsideBack}),T==="videos"?St.jsx(St.Fragment,{children:St.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Ee.outsideVideosTitle})}):null,T==="signatures"?St.jsx(St.Fragment,{children:St.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Ee.outsideSignaturesTitle})}):null,T==="news"?St.jsxs(St.Fragment,{children:[St.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Ee.outsideNewsTitle}),St.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:Ee.outsideNewsBody})]}):null,T==="glyphwall"?St.jsxs(St.Fragment,{children:[St.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Ee.outsideGlyphWallTitle}),Ee.outsideGlyphWallBody?St.jsx("p",{className:"mt-2 max-w-4xl text-sm leading-relaxed text-[#b8cbe6] md:text-base",children:Ee.outsideGlyphWallBody}):null]}):null]}),T==="signatures"?St.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:St.jsxs("form",{onSubmit:tn,className:"max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6",children:[St.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[St.jsxs("label",{className:"block",children:[St.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:zt==="nb"?"Navn":"Name"}),St.jsx("input",{type:"text",required:!0,autoComplete:"name",value:At,onChange:k=>I(k.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),St.jsxs("label",{className:"block",children:[St.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:zt==="nb"?"E-post":"Email"}),St.jsx("input",{type:"email",required:!0,autoComplete:"email",value:j,onChange:k=>gt(k.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]})]}),St.jsxs("label",{className:"mt-3 block",children:[St.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:zt==="nb"?"Melding":"Message"}),St.jsx("textarea",{required:!0,rows:5,value:Lt,onChange:k=>jt(k.target.value),className:"mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),St.jsx("button",{type:"submit",className:"mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]",children:zt==="nb"?"Send melding":"Send message"})]})}):null,T==="news"?St.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[tt?St.jsx("p",{className:"text-sm text-[#b8cbe6]",children:Ee.outsideNewsLoading}):null,!tt&&U?St.jsx("p",{className:"text-sm text-[#ffb6b6]",children:U}):null,!tt&&!U&&J.length===0?St.jsx("p",{className:"text-sm text-[#b8cbe6]",children:Ee.outsideNewsEmpty}):null,!tt&&!U&&J.length>0?St.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:J.map(k=>{const Ct=Date.parse(k.published_at),z=Number.isFinite(Ct)?Yt.format(new Date(Ct)):k.published_at;return St.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[St.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[k.source,z?` · ${z}`:""]}),St.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:k.title}),k.snippet?St.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:k.snippet}):null,St.jsx("a",{href:k.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:zt==="nb"?"Åpne sak":"Open story"})]},`${k.url}-${k.title}`)})}):null]}):null,T==="glyphwall"?St.jsx("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:St.jsxs("section",{className:"relative h-full","data-rl-story-version":"rl-story-v1","data-rl-story-name":"replacement-anxiety-pattern",children:[St.jsx("div",{className:"relative h-full overflow-auto",children:St.jsx("div",{className:"grid grid-cols-3 gap-y-6 pb-6 sm:grid-cols-4 md:grid-cols-6 md:gap-y-7 lg:grid-cols-8 xl:grid-cols-10",children:xe.map(k=>St.jsxs("article",{className:"relative flex items-center justify-center","data-rl-story-index":k.index+1,"data-rl-canonical":k.canonical,"data-rl-id":k.id,"data-rl-phase":k.phase,children:[St.jsx("div",{className:"relative h-[7rem] w-[7rem] overflow-hidden rounded-full border border-[#86b5eb]/34",style:{background:"radial-gradient(circle_at_42%_38%,rgba(122,213,255,0.26),rgba(13,27,52,0.94)_66%), radial-gradient(circle_at_75%_82%,rgba(43,163,255,0.16),rgba(0,0,0,0)_58%)",animation:k.index%3===0?"glyffFloatA 7.8s ease-in-out infinite, glyffHoloPulse 6.6s ease-in-out infinite, glyffHoloTwinkle 4.9s ease-in-out infinite":k.index%3===1?"glyffFloatB 9.2s ease-in-out infinite, glyffHoloPulse 7.4s ease-in-out infinite, glyffHoloTwinkle 5.3s ease-in-out infinite":"glyffFloatC 8.4s ease-in-out infinite, glyffHoloPulse 6.9s ease-in-out infinite, glyffHoloTwinkle 5.1s ease-in-out infinite",animationDelay:`${k.index%11*.16}s, ${k.index%7*.21}s, ${k.index%5*.27}s`},children:k.previewDataUrl?St.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-full bg-[#11213c]",children:[St.jsx("img",{src:k.previewDataUrl,alt:`Glyff ${k.index+1}`,className:"absolute inset-0 h-full w-full object-cover mix-blend-screen",style:{opacity:.88,filter:"saturate(1.48) hue-rotate(8deg) contrast(1.12)"},loading:"lazy"}),St.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full",style:{background:"radial-gradient(circle_at_20%_18%,rgba(204,240,255,0.26),rgba(204,240,255,0)_42%), radial-gradient(circle_at_82%_79%,rgba(0,0,0,0.28),rgba(0,0,0,0)_56%)"}}),St.jsx("div",{className:"pointer-events-none absolute rounded-full",style:{inset:"-34%",background:"conic-gradient(from 0deg, rgba(128,250,255,0) 0deg, rgba(128,250,255,0.36) 72deg, rgba(123,170,255,0.06) 148deg, rgba(128,250,255,0) 260deg)",mixBlendMode:"screen",animation:"glyffHoloSweep 7.1s linear infinite",animationDelay:`${k.index%9*.31}s`}}),St.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full",style:{background:"repeating-linear-gradient(180deg, rgba(151,228,255,0.16) 0px, rgba(151,228,255,0.16) 1px, rgba(10,18,34,0) 1px, rgba(10,18,34,0) 4px), linear-gradient(135deg, rgba(77,236,255,0.18) 0%, rgba(77,236,255,0) 54%)",mixBlendMode:"screen",opacity:.38,animation:"glyffHoloScan 2.7s linear infinite"}}),St.jsx("div",{className:"pointer-events-none absolute rounded-full",style:{inset:"1px",border:"1px solid rgba(164,238,255,0.52)",boxShadow:"0 0 18px rgba(131,237,255,0.28), inset 0 0 12px rgba(110,221,255,0.22)"}})]}):St.jsx("div",{className:"h-full w-full rounded-full bg-[#11213c]"})}),St.jsx("span",{className:"sr-only",children:k.canonical})]},k.id))})}),St.jsx("pre",{className:"sr-only","data-rl-story-payload":!0,children:Je})]})}):null,T==="videos"?St.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:vt,onTouchStart:Rt,onTouchEnd:mt,children:St.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[St.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-black"}),St.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_120px_rgba(0,0,0,0.92)]"}),St.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#e5e7eb]",children:[ct+1," / ",cr.length]}),St.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.35)]"}),St.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${BR.toFixed(3)}rem) rotateY(${-ct*KR}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[St.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/10",style:{width:`${Nd.toFixed(3)}rem`,height:`${Nd.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${Ty.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,1) 100%)",boxShadow:"none"}}),St.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/8",style:{width:`${Nd.toFixed(3)}rem`,height:`${Nd.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${Ty.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 100%)"}}),cr.map((k,Ct)=>St.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/2 border border-[#c4e1ff]/80 bg-[#0d223f]/76",style:{width:`${zR.toFixed(3)}rem`,height:`${Ay.toFixed(3)}rem`,transform:`translate(-50%, -50%) rotateY(${Ct*60+GR}deg) translateZ(-${HR.toFixed(3)}rem)`,backfaceVisibility:"hidden",boxShadow:"0 0 0 1px rgba(211,235,255,0.75), 0 0 26px rgba(120,193,255,0.56), inset 0 0 44px rgba(110,186,255,0.32), 0 24px 46px rgba(0,0,0,0.62)",background:"linear-gradient(132deg, rgba(194,228,255,0.28) 0%, rgba(38,85,143,0.72) 36%, rgba(7,14,28,0.92) 100%)",opacity:.96}},`outer-wall-${k.video}-${Ct}`)),cr.map((k,Ct)=>St.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/2 bg-[#d7ecff]/86",style:{width:`${kR.toFixed(3)}rem`,height:`${(Ay+1.6).toFixed(3)}rem`,transform:`translate(-50%, -50%) rotateY(${Ct*60+30}deg) translateZ(-${VR.toFixed(3)}rem)`,boxShadow:"0 0 30px rgba(172,220,255,0.98), 0 0 62px rgba(107,187,255,0.68)",opacity:.94}},`outer-corner-${k.video}-${Ct}`)),cr.map((k,Ct)=>St.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_22px_44px_rgba(0,0,0,0.86)]",style:{width:`${(gg+FR).toFixed(3)}rem`,height:`${ep}rem`,transform:`translate(-50%, -50%) rotateY(${Ct*60}deg) translateZ(-${np.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:St.jsx("video",{ref:z=>{c.current[Ct]=z},src:k.video,poster:k.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${k.video}-${Ct}`))]})]})}):null]}):null]}):null]})}function AC(){return St.jsx("div",{className:"min-h-screen bg-[#080604]",children:St.jsx(TC,{})})}pE.createRoot(document.getElementById("root")).render(St.jsx(Wt.StrictMode,{children:St.jsx(AC,{})}));
