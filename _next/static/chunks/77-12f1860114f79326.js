(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77],{8030:function(e,t,n){"use strict";var r,o;n.r(t),n.d(t,{DataContext:function(){return R},DataCtxReader:function(){return L},DataProvider:function(){return A},PageParamsProvider:function(){return I},PlasmicCanvasContext:function(){return h},PlasmicCanvasHost:function(){return _},applySelector:function(){return O},mkMetaName:function(){return S},mkMetaValue:function(){return j},registerComponent:function(){return F},registerGlobalContext:function(){return N},registerTrait:function(){return K},repeatedElement:function(){return B},unstable_registerFetcher:function(){return D},useDataEnv:function(){return k},usePlasmicCanvasContext:function(){return b},useSelector:function(){return x},useSelectors:function(){return M}});var a=n(7294),u=n(3935);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=globalThis;null==f.__PlasmicHostVersion&&(f.__PlasmicHostVersion="2");var d=[],p=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,d.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function m(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var v=0;function y(e){v++,p.set(e)}var h=(0,a.createContext)(!1),b=function(){return(0,a.useContext)(h)};function g(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),o=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,i=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!o,l=function(){var e=(0,a.useState)(0)[1];return(0,a.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,a.useLayoutEffect)((function(){return d.push(l),function(){var e=d.indexOf(l);e>=0&&d.splice(e,1)}}),[l]),(0,a.useEffect)((function(){i&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=m();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[i,n]),(0,a.useEffect)((function(){if(!i&&!document.querySelector("#getlibs")&&o){var e=document.createElement("script");e.id="getlibs",e.src=m()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[i]),!n)return null;if(r||o){var c=document.querySelector("#plasmic-app.__wab_user-body");c||((c=document.createElement("div")).id="plasmic-app",c.classList.add("__wab_user-body"),document.body.appendChild(c));var s=new URLSearchParams(location.hash),f=!!r&&{componentName:s.get("componentName")};return(0,u.createPortal)((0,a.createElement)(w,{key:""+v},(0,a.createElement)(h.Provider,{value:f},p.get())),c,"plasmic-app")}return i&&window.parent===window?(0,a.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var _=function(e){var t=e.enableWebpackHmr,n=(0,a.useState)(null),r=n[0],o=n[1];return(0,a.useEffect)((function(){o((0,a.createElement)(g,null))}),[]),(0,a.createElement)(a.Fragment,null,!t&&(0,a.createElement)(P,null),r)},E=[];function C(e){return E.push(e),function(){var t=E.indexOf(e);t>=0&&E.splice(t,1)}}var w=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var o=r.prototype;return o.componentDidCatch=function(e){E.forEach((function(t){return t(e)}))},o.render=function(){return this.state.error?(0,a.createElement)("div",null,"Error: ",""+this.state.error.message):this.props.children},r}(a.Component);function P(){return null}var R=(0,a.createContext)(void 0);function S(e){return"__plasmic_meta_"+e}function j(e){return e}function O(e,t){if(t){for(var n,r=e,o=s(t.split("."));!(n=o()).done;){var a,u=n.value;r=null==(a=r)?void 0:a[u]}return r}}function x(e){return O(k(),e)}function M(e){void 0===e&&(e={});var t=k();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,O(t,r))})))}function k(){return(0,a.useContext)(R)}function A(e){var t,n,r=e.name,o=e.data,u=e.hidden,l=e.children,c=null!=(t=k())?t:{};return r?a.createElement(R.Provider,{value:i({},c,(n={},n[r]=o,n[S(r)]={hidden:u},n))},l):a.createElement(a.Fragment,null,l)}function I(e){var t=e.children,n=e.params,r=void 0===n?{}:n,o=e.query,u=void 0===o?{}:o;return a.createElement(A,{name:"params",data:r},a.createElement(A,{name:"query",data:u},t))}function L(e){return(0,e.children)(k())}var T=globalThis;function D(e,t){T.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})}T.__PlasmicFetcherRegistry=[];var U=globalThis;function F(e,t){U.__PlasmicComponentRegistry.push({component:e,meta:t})}null==U.__PlasmicComponentRegistry&&(U.__PlasmicComponentRegistry=[]);var H=globalThis;function N(e,t){H.__PlasmicContextRegistry.push({component:e,meta:t})}null==H.__PlasmicContextRegistry&&(H.__PlasmicContextRegistry=[]);var V,q,G=globalThis;function K(e,t){G.__PlasmicTraitRegistry.push({trait:e,meta:t})}function B(e,t){return $(e,t)}null==G.__PlasmicTraitRegistry&&(G.__PlasmicTraitRegistry=[]);var $=function(e,t){return e?t:Array.isArray(t)?t.map((function(t){return B(e,t)})):t&&(0,a.isValidElement)(t)&&"string"!==typeof t?(0,a.cloneElement)(t):t},z=globalThis,W=null!=(V=null==z||null==(q=z.__Sub)?void 0:q.setRepeatedElementFn)?V:function(e){$=e},J={__proto__:null,PlasmicCanvasContext:h,PlasmicCanvasHost:_,usePlasmicCanvasContext:b,unstable_registerFetcher:D,registerComponent:F,registerGlobalContext:N,registerTrait:K,repeatedElement:B,DataContext:R,mkMetaName:S,mkMetaValue:j,applySelector:O,useSelector:x,useSelectors:M,useDataEnv:k,DataProvider:A,PageParamsProvider:I,DataCtxReader:L},Q=globalThis;null==Q.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),Q.__Sub=i({React:r||(r=n.t(a,2)),ReactDOM:o||(o=n.t(u,2)),hostModule:J,hostVersion:"1.0.53",hostUtils:{setPlasmicRootNode:y,registerRenderErrorListener:C,setRepeatedElementFn:W},setPlasmicRootNode:y,registerRenderErrorListener:C,setRepeatedElementFn:W},J))},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1003),l=n(880),c=n(9246);function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function d(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var p=u.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,p=e.href,m=e.as,v=e.children,y=e.prefetch,h=e.passHref,b=e.replace,g=e.shallow,_=e.scroll,E=e.locale,C=e.onClick,w=e.onMouseEnter,P=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=v,a&&"string"===typeof n&&(n=u.default.createElement("a",null,n));var R,S=!1!==y,j=l.useRouter(),O=u.default.useMemo((function(){var e=o(i.resolveHref(j,p,!0),2),t=e[0],n=e[1];return{href:t,as:m?i.resolveHref(j,m):n||t}}),[j,p,m]),x=O.href,M=O.as,k=u.default.useRef(x),A=u.default.useRef(M);a&&(R=u.default.Children.only(n));var I=a?R&&"object"===typeof R&&R.ref:t,L=o(c.useIntersection({rootMargin:"200px"}),3),T=L[0],D=L[1],U=L[2],F=u.default.useCallback((function(e){A.current===M&&k.current===x||(U(),A.current=M,k.current=x),T(e),I&&("function"===typeof I?I(e):"object"===typeof I&&(I.current=e))}),[M,I,x,U,T]);u.default.useEffect((function(){var e=D&&S&&i.isLocalURL(x),t="undefined"!==typeof E?E:j&&j.locale,n=f[x+"%"+M+(t?"%"+t:"")];e&&!n&&d(j,x,M,{locale:t})}),[M,x,D,E,S,j]);var H={ref:F,onClick:function(e){a||"function"!==typeof C||C(e),a&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}))}(e,j,x,M,b,g,_,E)},onMouseEnter:function(e){a||"function"!==typeof w||w(e),a&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),i.isLocalURL(x)&&d(j,x,M,{priority:!0})}};if(!a||h||"a"===R.type&&!("href"in R.props)){var N="undefined"!==typeof E?E:j&&j.locale,V=j&&j.isLocaleDomain&&i.getDomainLocale(M,N,j&&j.locales,j&&j.domainLocales);H.href=V||i.addBasePath(i.addLocale(M,N,j&&j.defaultLocale))}return a?u.default.cloneElement(R,H):u.default.createElement("a",Object.assign({},P,H),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(t?t.current:null),2),v=m[0],y=m[1],h=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:n}))}),[r,v,n,d]),b=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!i&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[h,d,b]};var a=n(7294),u=n(4686),i="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8834:function(){},1664:function(e,t,n){e.exports=n(1551)}}]);