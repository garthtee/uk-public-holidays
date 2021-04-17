(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4402:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(5893),i=t(7329),c=t(4699),s=t(7294),l=t(9249),o=t(682),a=t(4051),u=t(1555),d=t(6968),f=t(9008),h=function(){return(0,r.jsxs)(f.default,{children:[(0,r.jsx)("title",{children:"UK Public Holidays"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]},"app-meta")},j=t(2465),v=t(9163),p=t(1223),x=t(3754),m=t(7977);function y(){var e=(0,j.Z)(["\n  span {\n    &:nth-child(1) {\n      float: left;\n    }\n    &:nth-child(2) {\n      float: right;\n    }\n  }\n"]);return y=function(){return e},e}var b=(0,v.ZP)(p.Z.Item)(y()),Z=function(e){var n=e.holidays,t=e.showCount;return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsxs)(x.Z,{variant:"success",children:["Holidays ",(0,r.jsx)(m.Z,{variant:"dark",children:n.length}),(0,r.jsx)("span",{className:"sr-only",children:"Holiday count"})]}),(0,r.jsx)(p.Z,{className:"mt-2",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,r.jsxs)(b,{children:[(0,r.jsx)("span",{children:e.title}),(0,r.jsxs)("span",{children:["(",e.date,")"]})]},"hol-".concat(n))}))})]})},g=t(6156),O=t(2318),w=t(2151),k=function(e){return{label:e.split("-").map((function(e){return"and"===e?e:function(e){return e?"".concat(e.substring(0,1).toUpperCase()).concat(e.substring(1)):e}(e)})).join(" "),value:e}},P=function(e,n){return null===e||void 0===e?void 0:e.filter((function(e){return e.date.includes(n)}))};function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,g.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n=e.setSelected,t=e.selected,i=e.holidays,c=e.locations,l=e.setLocations,o=e.years,d=s.useCallback((function(e){var r=e.target.value;t||l(c.filter((function(e){return"-1"!=e.value}))),n(null!==t&&void 0!==t&&t.year?C(C({},t),{},{events:P(i[r].events,null===t||void 0===t?void 0:t.year)}):i[r])}),[t,i]),f=s.useCallback((function(e){var r,c=e.target.value;n(C(C({},t),{},{year:c,events:P(null===(r=i[t.division])||void 0===r?void 0:r.events,c)}))}),[t,i]);return(0,r.jsxs)(a.Z,{className:"justify-content-md-center text-center mt-3 mb-3",children:[(0,r.jsx)(u.Z,{md:6,lg:4,className:"mb-1",children:(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(O.Z.Prepend,{children:(0,r.jsx)(O.Z.Text,{id:"inputGroup-location",children:"Location"})}),(0,r.jsx)(w.Z.Control,{"aria-label":"Location","aria-describedby":"inputGroup-location",as:"select",custom:!0,onChange:d,children:null===c||void 0===c?void 0:c.map((function(e){var n=e.label,t=e.value;return(0,r.jsx)("option",{value:t,children:n},"location-".concat(t))}))})]})}),(0,r.jsx)(u.Z,{md:6,lg:4,children:(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(O.Z.Prepend,{children:(0,r.jsx)(O.Z.Text,{id:"inputGroup-year",children:"Year"})}),(0,r.jsx)(w.Z.Control,{"aria-label":"Year","aria-describedby":"inputGroup-year",as:"select",custom:!0,disabled:!o,onChange:f,children:null===o||void 0===o?void 0:o.map((function(e){return(0,r.jsx)("option",{value:e,children:e},"year-".concat(e))}))})]})})]})},E=function(){var e=s.useState(null),n=(0,c.Z)(e,2),t=n[0],f=n[1],j=s.useState(null),v=(0,c.Z)(j,2),p=v[0],x=v[1],m=s.useState(null),y=(0,c.Z)(m,2),b=y[0],g=y[1],O=s.useState(null),w=(0,c.Z)(O,2),P=w[0],N=w[1];return s.useEffect((function(){fetch("https://www.gov.uk/bank-holidays.json").then((function(e){return e.json()})).then((function(e){f(addDatePast(e));var n=Object.keys(e);x([{label:"Select a location",value:"-1"}].concat((0,i.Z)(n.map(k))))})).catch((function(){l.Am.error("Error fetching holidays.")}))}),[]),s.useEffect((function(){if(b){var e,n,r=(null===(e=t[b.division])||void 0===e||null===(n=e.events)||void 0===n?void 0:n.map((function(e){return e.date.substring(0,4)}))).reduce((function(e,n){return null!==e&&void 0!==e&&e.includes(n)?e:[].concat((0,i.Z)(e),[n])}),[]);N(P?r:["Select a year"].concat((0,i.Z)(r)))}}),[null===b||void 0===b?void 0:b.division]),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(h,{}),(0,r.jsxs)(o.Z,{fluid:!0,className:"mt-3",children:[(0,r.jsx)(a.Z,{className:"justify-content-md-center text-center",children:(0,r.jsx)(u.Z,{children:(0,r.jsx)("h3",{children:"UK Public Holidays \ud83c\udf34"})})}),t&&p?(0,r.jsx)(_,{setSelected:g,setLocations:x,selected:b,holidays:t,locations:p,years:P}):(0,r.jsx)(a.Z,{className:"justify-content-md-center text-center",children:(0,r.jsx)(u.Z,{children:(0,r.jsx)(d.Z,{animation:"border",role:"status",children:(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})})})}),(0,r.jsx)(a.Z,{className:"justify-content-md-center mb-3",children:(0,r.jsx)(u.Z,{md:12,lg:6,children:(0,r.jsx)(Z,{holidays:null===b||void 0===b?void 0:b.events,showCount:!!b&&!!b.year})})})]})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4402)}])}},function(e){e.O(0,[774,914,442],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);