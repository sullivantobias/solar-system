(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===u)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7775)}])},6922:function(e,t,n){"use strict";var r=n(5893),o=(n(7294),n(4184)),u=n.n(o),i=n(4037),c=n.n(i);t.Z=function(e){var t,n,o,i=e.title,a=e.tag,f=e.className,l=a?"h".concat(a):"h1";return(0,r.jsx)(l,{className:u()(c().Title,(t={},n=f,o=f,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t)),children:i})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var u,i=(u=n(7294))&&u.__esModule?u:{default:u},c=n(6273),a=n(387),f=n(7190);var l={};function s(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,r=a.useRouter(),u=i.default.useMemo((function(){var t=o(c.resolveHref(r,e.href,!0),2),n=t[0],u=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):u||n}}),[r,e.href,e.as]),p=u.href,d=u.as,y=e.children,v=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var g=(t=i.default.Children.only(y))&&"object"===typeof t&&t.ref,_=o(f.useIntersection({rootMargin:"200px"}),2),w=_[0],x=_[1],E=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=x&&n&&c.isLocalURL(p),t="undefined"!==typeof b?b:r&&r.locale,o=l[p+"%"+d+(t?"%"+t:"")];e&&!o&&s(r,p,d,{locale:t})}),[d,p,x,b,n,r]);var O={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:u,locale:a,scroll:i}))}(e,r,p,d,v,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&s(r,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var j="undefined"!==typeof b?b:r&&r.locale,S=r&&r.isLocaleDomain&&c.getDomainLocale(d,j,r&&r.locales,r&&r.domainLocales);O.href=S||c.addBasePath(c.addLocale(d,j,r&&r.defaultLocale))}return i.default.cloneElement(t,O)};t.default=p},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,l=u.useRef(),s=o(u.useState(!1),2),p=s[0],d=s[1],y=o(u.useState(t?t.current:null),2),v=y[0],h=y[1],m=u.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||p||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=a.get(r):(t=a.get(n),f.push(n));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(n,t={id:n,observer:u,elements:o}),t}(n),o=r.id,u=r.observer,i=r.elements;return i.set(e,t),u.observe(e),function(){if(i.delete(e),u.unobserve(e),0===i.size){u.disconnect(),a.delete(o);var t=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&f.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:n}))}),[r,v,n,p]);return u.useEffect((function(){if(!c&&!p){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),u.useEffect((function(){t&&h(t.current)}),[t]),[m,p]};var u=n(7294),i=n(9311),c="undefined"!==typeof IntersectionObserver;var a=new Map,f=[]},7775:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(5893),o=n(655),u=n(7294),i=n(4735),c=n(8868);function a(){var e=(0,u.useRef)(!1);return(0,c.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var f=n(240),l=n(6681),s=n(6316),p=function(e){var t=e.children,n=e.initial,r=e.isPresent,i=e.onExitComplete,c=e.custom,a=e.presenceAffectsLayout,p=(0,l.h)(d),y=(0,s.M)(),v=(0,u.useMemo)((function(){return{id:y,initial:n,isPresent:r,custom:c,onExitComplete:function(e){var t,n;p.set(e,!0);try{for(var r=(0,o.XA)(p.values()),u=r.next();!u.done;u=r.next()){if(!u.value)return}}catch(c){t={error:c}}finally{try{u&&!u.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}null===i||void 0===i||i()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),a?void 0:[r]);return(0,u.useMemo)((function(){p.forEach((function(e,t){return p.set(t,!1)}))}),[r]),u.useEffect((function(){!r&&!p.size&&(null===i||void 0===i||i())}),[r]),u.createElement(f.O.Provider,{value:v},t)};function d(){return new Map}var y=n(5364),v=n(5411),h=function(e){return e.key||""};var m=function(e){var t=e.children,n=e.custom,r=e.initial,f=void 0===r||r,l=e.onExitComplete,s=e.exitBeforeEnter,d=e.presenceAffectsLayout,m=void 0===d||d,b=(0,o.CR)(function(){var e=a(),t=(0,o.CR)((0,u.useState)(0),2),n=t[0],r=t[1],c=(0,u.useCallback)((function(){e.current&&r(n+1)}),[n]);return[(0,u.useCallback)((function(){return i.ZP.postRender(c)}),[c]),n]}(),1),g=b[0],_=(0,u.useContext)(y.p).forceRender;_&&(g=_);var w=a(),x=function(e){var t=[];return u.Children.forEach(e,(function(e){(0,u.isValidElement)(e)&&t.push(e)})),t}(t),E=x,O=new Set,j=(0,u.useRef)(E),S=(0,u.useRef)(new Map).current,M=(0,u.useRef)(!0);if((0,c.L)((function(){M.current=!1,function(e,t){e.forEach((function(e){var n=h(e);t.set(n,e)}))}(x,S),j.current=E})),(0,v.z)((function(){M.current=!0,S.clear(),O.clear()})),M.current)return u.createElement(u.Fragment,null,E.map((function(e){return u.createElement(p,{key:h(e),isPresent:!0,initial:!!f&&void 0,presenceAffectsLayout:m},e)})));E=(0,o.ev)([],(0,o.CR)(E),!1);for(var C=j.current.map(h),k=x.map(h),P=C.length,A=0;A<P;A++){var L=C[A];-1===k.indexOf(L)&&O.add(L)}return s&&O.size&&(E=[]),O.forEach((function(e){if(-1===k.indexOf(e)){var t=S.get(e);if(t){var r=C.indexOf(e);E.splice(r,0,u.createElement(p,{key:h(t),isPresent:!1,onExitComplete:function(){S.delete(e),O.delete(e);var t=j.current.findIndex((function(t){return t.key===e}));if(j.current.splice(t,1),!O.size){if(j.current=x,!1===w.current)return;g(),l&&l()}},custom:n,presenceAffectsLayout:m},t))}}})),E=E.map((function(e){var t=e.key;return O.has(t)?e:u.createElement(p,{key:h(e),isPresent:!0,presenceAffectsLayout:m},e)})),u.createElement(u.Fragment,null,O.size?E:E.map((function(e){return(0,u.cloneElement)(e)})))},b=n(8641),g=n(1664),_=n(6922),w=n(4032),x=n.n(w),E=function(e){var t=e.planets,n=e.isBackDisplayed;return(0,r.jsxs)("div",{className:x().Header,children:[n&&(0,r.jsx)(g.default,{href:"/solar-system",children:(0,r.jsx)("a",{className:x().Link,children:" Back "})}),t.map((function(e){var t=e.name;return(0,r.jsx)(_.Z,{tag:6,title:t})}))]})};n(4831);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}var S=function(e){var t=e.Component,n=e.pageProps,o=0!==Object.keys(n).length;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E,{planets:b.Z,isBackDisplayed:o}),(0,r.jsxs)(m,{exitBeforeEnter:!0,initial:!1,onExitComplete:function(){return window.scrollTo(0,0)},children:[(0,r.jsx)(t,j({},n)),";"]})]})}},8641:function(e,t,n){"use strict";var r=n(5893),o=n(9073),u=n.n(o),i=n(4510),c=n.n(i),a=n(1614),f=n.n(a),l=n(6983),s=n.n(l),p=n(7131),d=n.n(p),y=n(163),v=n.n(y),h=n(3180),m=n.n(h),b=n(6887),g=n.n(b),_=[{id:"mercury",name:"Mercury",style:u().Mercury},{id:"venus",name:"Venus",style:c().Venus},{id:"earth",name:"Earth",style:f().Earth},{id:"mars",name:"Mars",style:s().Mars},{id:"jupiter",name:"Jupiter",style:d().Jupiter},{id:"saturn",name:"Saturn",style:v().Saturn,children:(0,r.jsx)("div",{className:v().Ring})},{id:"uranus",name:"Uranus",style:m().Uranus},{id:"neptune",name:"Neptune",style:g().Neptune}];t.Z=_},4032:function(e){e.exports={Header:"header_Header__Dezsy",Link:"header_Link__n1h4E"}},4037:function(e){e.exports={Title:"title_Title__Z1rg_"}},1614:function(e){e.exports={Earth:"earth_Earth__4D25w"}},7131:function(e){e.exports={Jupiter:"jupiter_Jupiter__3595Y"}},6983:function(e){e.exports={Mars:"mars_Mars__xQCNj"}},9073:function(e){e.exports={Mercury:"mercury_Mercury__nivlr"}},6887:function(e){e.exports={Neptune:"neptune_Neptune__Pr4hS"}},163:function(e){e.exports={Saturn:"saturn_Saturn__8dgSk",Ring:"saturn_Ring__D_MS1"}},3180:function(e){e.exports={Uranus:"uranus_Uranus__PJVjM"}},4510:function(e){e.exports={Venus:"venus_Venus__6gJpv"}},4831:function(){},1664:function(e,t,n){e.exports=n(8418)},655:function(e,t,n){"use strict";n.d(t,{ZT:function(){return o},pi:function(){return u},_T:function(){return i},XA:function(){return c},CR:function(){return a},ev:function(){return f}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;function c(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,u=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return i}function f(e,t,n){if(n||2===arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create},5364:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var r=(0,n(7294).createContext)({})},240:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var r=(0,n(7294).createContext)(null)},1741:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});var r="undefined"!==typeof window},6681:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(7294);function o(e){var t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},6316:function(e,t,n){"use strict";n.d(t,{M:function(){return i}});var r=n(6681),o=0,u=function(){return o++},i=function(){return(0,r.h)(u)}},8868:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(7294),o=n(1741).j?r.useLayoutEffect:r.useEffect},5411:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(7294);function o(e){return(0,r.useEffect)((function(){return function(){return e()}}),[])}},4735:function(e,t,n){"use strict";n.d(t,{qY:function(){return d},ZP:function(){return g},iW:function(){return y},$B:function(){return b}});const r=1/60*1e3,o="undefined"!==typeof performance?()=>performance.now():()=>Date.now(),u="undefined"!==typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(o())),r);let i=!0,c=!1,a=!1;const f={delta:0,timestamp:0},l=["read","update","preRender","render","postRender"],s=l.reduce(((e,t)=>(e[t]=function(e){let t=[],n=[],r=0,o=!1,u=!1;const i=new WeakSet,c={schedule:(e,u=!1,c=!1)=>{const a=c&&o,f=a?t:n;return u&&i.add(e),-1===f.indexOf(e)&&(f.push(e),a&&o&&(r=t.length)),e},cancel:e=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1),i.delete(e)},process:a=>{if(o)u=!0;else{if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let n=0;n<r;n++){const r=t[n];r(a),i.has(r)&&(c.schedule(r),e())}o=!1,u&&(u=!1,c.process(a))}}};return c}((()=>c=!0)),e)),{}),p=l.reduce(((e,t)=>{const n=s[t];return e[t]=(e,t=!1,r=!1)=>(c||m(),n.schedule(e,t,r)),e}),{}),d=l.reduce(((e,t)=>(e[t]=s[t].cancel,e)),{}),y=l.reduce(((e,t)=>(e[t]=()=>s[t].process(f),e)),{}),v=e=>s[e].process(f),h=e=>{c=!1,f.delta=i?r:Math.max(Math.min(e-f.timestamp,40),1),f.timestamp=e,a=!0,l.forEach(v),a=!1,c&&(i=!1,u(h))},m=()=>{c=!0,i=!0,a||u(h)},b=()=>f;var g=p}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);