(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9],{7885:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/planets/[id]",function(){return a(8167)}])},9477:function(e,n,a){"use strict";var t=a(5893),r=(a(7294),a(4184)),i=a.n(r),s=a(5765),l=a.n(s);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}n.Z=function(e){var n,a=e.children,r=e.planet,s=e.onMouseEnter,d=e.onMouseLeave,u=e.addStyle;return(0,t.jsx)("div",{onMouseLeave:d,onMouseEnter:s,className:i()(l().Planet,(n={},c(n,r.style,r),c(n,u,u),n)),children:a})}},8167:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSG:function(){return m},default:function(){return y}});var t=a(5893),r=a(8641),i=(a(7294),a(7592)),s=function(e){var n=e.children,a=e.delay,r=e.className,s=e.key;return(0,t.jsx)(i.E.div,{variants:{hidden:{scale:0},enter:{scale:1},exit:{scale:0}},initial:"hidden",animate:"enter",exit:"exit",transition:{type:"spring",stiffness:120,delay:a},className:r,children:n},s)},l=a(9477),c=a(6922),d=a(4184),u=a.n(d),o=a(2341),_=a.n(o);var f=function(e){var n,a,r,i=e.children,s=e.className;return(0,t.jsx)("p",{className:u()(_().Text,(n={},a=s,r=s,a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,n)),children:i})},v=a(9435),x=a.n(v),p=function(e){var n=e.info;return(0,t.jsxs)("div",{className:x().Card,children:[(0,t.jsx)("div",{className:x().Label,children:Object.keys(n)[0]}),(0,t.jsx)("div",{className:x().Value,children:Object.values(n)[0]})]})},h=a(3135),j=a.n(h),m=!0;function y(e){var n=e.planetData,a=r.Z.find((function(e){return e.id===n.id})),i=n.name,d=n.desc,u=n.rotation,o=n.radius,_=n.average_temperature,v=n.revolution,x=[{Revolution:"".concat(v," days")},{Rotation:"".concat(u," days")},{Radius:"".concat(o," km")},{"AVERAGE TEMP":"".concat(_," \xb0C")}];return(0,t.jsxs)("div",{className:j().PlanetLayout,children:[(0,t.jsx)(s,{children:(0,t.jsx)(l.Z,{addStyle:j().PlanetDetails,planet:a})}),(0,t.jsxs)("div",{className:j().Desc,children:[(0,t.jsx)(s,{delay:.1,children:(0,t.jsx)(c.Z,{title:i})},"title"),(0,t.jsx)(s,{delay:.2,children:(0,t.jsx)(f,{children:d})},"desc")]}),(0,t.jsx)("div",{className:j().Cards,children:x.map((function(e,n){return(0,t.jsx)(s,{delay:.3+n/10,children:(0,t.jsx)(p,{info:e})},n)}))})]})}},9435:function(e){e.exports={Card:"card_Card__cycP9",Label:"card_Label__StuP9",Value:"card_Value__EnUE0"}},5765:function(e){e.exports={Planet:"planet_Planet__UaqOV","move-planet":"planet_move-planet__ki10Z"}},2341:function(e){e.exports={Text:"text_Text__z3srN"}},3135:function(e){e.exports={PlanetLayout:"planet_PlanetLayout__7zKL5",Desc:"planet_Desc__bZq1o",Cards:"planet_Cards__uRIdo",PlanetDetails:"planet_PlanetDetails__KiADU"}}},function(e){e.O(0,[592,774,888,179],(function(){return n=7885,e(e.s=n);var n}));var n=e.O();_N_E=n}]);