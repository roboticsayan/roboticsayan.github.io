(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[12,22,23,26,31],{100:function(e,t,n){"use strict";var a=n(79),r=n(0),i={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),o=n[0],c=n[1];return Object(r.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(c(!0),n.unobserve(e.current))}))}),i).observe(e.current)}),[e]),o}},101:function(e,t,n){"use strict";var a=n(79),r=n(99),i=n(0),o=n.n(i),c=n(82);t.a=function(e){var t=e.data,n=e.children,l=Object(i.useState)(!1),s=Object(a.a)(l,2),u=s[0],d=s[1],f=Object(c.f)(u,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}}),m=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return o.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1),onClick:m.bind(void 0)},n,f.map((function(e){var n=e.item,a=e.key,r=e.props;return n?o.a.createElement(c.a.div,{key:a,style:r},o.a.createElement("div",{className:"message"},o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):o.a.createElement(c.a.div,{key:a})})))}},106:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),o=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="GitHub";var u=s;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,c=f(e,["color","size"]);return r.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),r.a.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),r.a.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}))}));m.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},m.displayName="Database";var v=m,p=n(111);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,c=h(e,["color","size"]);return r.a.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),r.a.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),r.a.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))}));O.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},O.displayName="Instagram";var g=O;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,c=j(e,["color","size"]);return r.a.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));E.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},E.displayName="Mail";var w=E,k=n(249);t.default=r.a.memo((function(){var e=Object(k.a)().t;return r.a.createElement("footer",null,r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://covid.bloggingmetrics.com",target:"_blank",rel:"noopener noreferrer"},"covid19india")),r.a.createElement("h5",null,e("We stand with everyone fighting on the frontlines")),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"https://github.com/roboticsayan",className:"github",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u,null)),r.a.createElement("a",{className:"api",href:"https://api.covid19india.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v,null)),r.a.createElement("a",{href:"https://t.me/bloggingmetrics",className:"telegram",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.a,null)),r.a.createElement("a",{href:"https://www.instagram.com/iam.sayandey/",target:"_blank",rel:"noopener noreferrer",className:"twitter"},r.a.createElement(g,null)),r.a.createElement("a",{href:"mailto:sayan@bloggingmetrics.com",className:"mail",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(w,null))))}))},108:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var a=Array.prototype.slice,r=function(e){return e};function i(e){return"translate("+(e+.5)+",0)"}function o(e){return"translate(0,"+(e+.5)+")"}function c(e){return function(t){return+e(t)}}function l(e){var t=Math.max(0,e.bandwidth()-1)/2;return e.round()&&(t=Math.round(t)),function(n){return+e(n)+t}}function s(){return!this.__axis}function u(e,t){var n=[],u=null,d=null,f=6,m=6,v=3,p=1===e||4===e?-1:1,b=4===e||2===e?"x":"y",h=1===e||3===e?i:o;function O(a){var i=null==u?t.ticks?t.ticks.apply(t,n):t.domain():u,o=null==d?t.tickFormat?t.tickFormat.apply(t,n):r:d,O=Math.max(f,0)+v,g=t.range(),y=+g[0]+.5,j=+g[g.length-1]+.5,E=(t.bandwidth?l:c)(t.copy()),w=a.selection?a.selection():a,k=w.selectAll(".domain").data([null]),x=w.selectAll(".tick").data(i,t).order(),M=x.exit(),N=x.enter().append("g").attr("class","tick"),C=x.select("line"),S=x.select("text");k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(N),C=C.merge(N.append("line").attr("stroke","currentColor").attr(b+"2",p*f)),S=S.merge(N.append("text").attr("fill","currentColor").attr(b,p*O).attr("dy",1===e?"0em":3===e?"0.71em":"0.32em")),a!==w&&(k=k.transition(a),x=x.transition(a),C=C.transition(a),S=S.transition(a),M=M.transition(a).attr("opacity",1e-6).attr("transform",(function(e){return isFinite(e=E(e))?h(e):this.getAttribute("transform")})),N.attr("opacity",1e-6).attr("transform",(function(e){var t=this.parentNode.__axis;return h(t&&isFinite(t=t(e))?t:E(e))}))),M.remove(),k.attr("d",4===e||2==e?m?"M"+p*m+","+y+"H0.5V"+j+"H"+p*m:"M0.5,"+y+"V"+j:m?"M"+y+","+p*m+"V0.5H"+j+"V"+p*m:"M"+y+",0.5H"+j),x.attr("opacity",1).attr("transform",(function(e){return h(E(e))})),C.attr(b+"2",p*f),S.attr(b,p*O).text(o),w.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===e?"start":4===e?"end":"middle"),w.each((function(){this.__axis=E}))}return O.scale=function(e){return arguments.length?(t=e,O):t},O.ticks=function(){return n=a.call(arguments),O},O.tickArguments=function(e){return arguments.length?(n=null==e?[]:a.call(e),O):n.slice()},O.tickValues=function(e){return arguments.length?(u=null==e?null:a.call(e),O):u&&u.slice()},O.tickFormat=function(e){return arguments.length?(d=e,O):d},O.tickSize=function(e){return arguments.length?(f=m=+e,O):f},O.tickSizeInner=function(e){return arguments.length?(f=+e,O):f},O.tickSizeOuter=function(e){return arguments.length?(m=+e,O):m},O.tickPadding=function(e){return arguments.length?(v=+e,O):v},O}function d(e){return u(2,e)}function f(e){return u(3,e)}},111:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(20),o=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),r.a.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="Send",t.a=s},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(92),r=n(88),i=Symbol("implicit");function o(){var e=new Map,t=[],n=[],c=i;function l(a){var r=a+"",o=e.get(r);if(!o){if(c!==i)return c;e.set(r,o=t.push(a))}return n[(o-1)%n.length]}return l.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;var r,i=Object(a.a)(n);try{for(i.s();!(r=i.n()).done;){var o=r.value,c=o+"";e.has(c)||e.set(c,t.push(o))}}catch(s){i.e(s)}finally{i.f()}return l},l.range=function(e){return arguments.length?(n=Array.from(e),l):n.slice()},l.unknown=function(e){return arguments.length?(c=e,l):c},l.copy=function(){return o(t,n).unknown(c)},r.b.apply(l,arguments),l}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(92);function r(e,t){var n;if(void 0===t){var r,i=Object(a.a)(e);try{for(i.s();!(r=i.n()).done;){var o=r.value;null!=o&&(n>o||void 0===n&&o>=o)&&(n=o)}}catch(d){i.e(d)}finally{i.f()}}else{var c,l=-1,s=Object(a.a)(e);try{for(s.s();!(c=s.n()).done;){var u=c.value;null!=(u=t(u,++l,e))&&(n>u||void 0===n&&u>=u)&&(n=u)}}catch(d){s.e(d)}finally{s.f()}}return n}},133:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(31),i=n(86),o=n(80),c=n.n(o),l=n(83),s=n.n(l),u=n(0),d=n.n(u),f=n(249),m=n(82);var v=d.a.memo((function(e){var t=e.statistic,n=e.total,o=e.delta,c=Object(f.a)().t,l=Object(m.c)({total:n,delta:o,config:a.p}),s=a.t[t];return d.a.createElement(d.a.Fragment,null,d.a.createElement("h5",null,c(Object(r.a)(s.displayName))),d.a.createElement(m.a.h4,null,"active"!==t?o>0?l.delta.interpolate((function(e){return"+".concat(Object(r.e)(e,s.format,t))})):d.a.createElement(i.i,{size:9,verticalAlign:2}):"\xa0"),d.a.createElement(m.a.h1,null,l.total.interpolate((function(e){return Object(r.e)(e,s.format,t)}))))}));t.default=d.a.memo((function(e){var t=e.data,n=Object(u.useMemo)((function(){var e=[];return a.o.map((function(t,n){return e.push({animationDelay:"".concat(750+250*n,"ms")}),null})),e}),[]);return d.a.createElement("div",{className:"Level"},a.o.map((function(e,a){return d.a.createElement(m.a.div,{key:a,className:c()("level-item","is-".concat(e),"fadeInUp"),style:n[a]},d.a.createElement(v,Object.assign({statistic:e},{total:Object(r.h)(t,"total",e),delta:Object(r.h)(t,"delta",e)})))})))}),(function(e,t){return!!s()(Object(r.h)(e.data,"total","active"),Object(r.h)(t.data,"total","active"))}))},134:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(79),i=n(7),o=n(80),c=n.n(o),l=n(0),s=n.n(l),u=n(45),d=n.n(u),f=n(82),m=n(144);t.default=s.a.memo((function(e){var t=e.mapStatistic,n=e.setMapStatistic,o=Object(m.a)(),u=Object(r.a)(o,2),v=u[0],p=u[1].width,b=Object(l.useState)(!1),h=Object(r.a)(b,2),O=h[0],g=h[1],y=Object(l.useState)(0),j=Object(r.a)(y,2),E=j[0],w=j[1],k=Object(f.c)((function(){return{opacity:0,background:"".concat(i.t[t].color,"20"),transform:"translateX(".concat(p*i.o.indexOf(t)*.25,"px)"),config:f.b.gentle}})),x=Object(r.a)(k,2),M=x[0],N=x[1];Object(l.useEffect)((function(){p>0&&d.a.unstable_batchedUpdates((function(){N({transform:"translateX(".concat(p*i.o.indexOf(t)*.25,"px)"),opacity:1,background:"".concat(i.t[t].color,"20"),delay:0===E?1500:0,onStart:g.bind(void 0,!0),onRest:g.bind(void 0,!1)})}))}),[E,t,N,p]);var C=Object(l.useCallback)((function(e){w((function(e){return e+1})),n(e)}),[n]);return s.a.createElement("div",{className:"MapSwitcher",ref:v},s.a.createElement(f.a.div,{className:"highlight",style:M}),i.o.map((function(e,t){return s.a.createElement("div",{key:t,className:c()("clickable",Object(a.a)({},"is-".concat(e),!O)),onClick:C.bind(void 0,e)})})))}),(function(e,t){return e.mapStatistic===t.mapStatistic}))},135:function(e,t,n){"use strict";var a=n(0),r=n(87),i=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=i);var o=Object(a.useRef)(t);Object(a.useEffect)((function(){o.current=t}),[t]),Object(a.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&o.current(t)},a=0,i=n;a<i.length;a++){var c=i[a];Object(r.c)(document,c,t)}return function(){for(var e=0,a=n;e<a.length;e++){var i=a[e];Object(r.b)(document,i,t)}}}),[n,e])}},143:function(e,t,n){"use strict";n.r(t);var a=n(79),r=n(7),i=n(0),o=n.n(i),c=n(249),l=n(5),s=n(82),u=n(135),d=function(e){var t=e.stateCode,n=e.trail,d=Object(i.useState)(!1),f=Object(a.a)(d,2),m=f[0],v=f[1],p=Object(i.useRef)(),b=Object(l.g)(),h=Object(c.a)().t;Object(u.a)(p,(function(){v(!1)}));var O=Object(s.f)(m,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),g=Object(i.useCallback)((function(e){v(!1),b.push("/state/".concat(e))}),[b]);return o.a.createElement("div",{className:"StateDropdown",ref:p},o.a.createElement(s.a.h1,{className:"state-name fadeInUp",style:n,onClick:v.bind(void 0,!m)},h(r.s[t])),O.map((function(e){var n=e.item,a=e.key,i=e.props;return n?o.a.createElement(s.a.div,{className:"dropdown",style:i,key:a},Object.keys(r.h).filter((function(e){return"TT"!==e&&e!==t})).sort((function(e,t){return r.s[e].localeCompare(r.s[t])})).map((function(e){return o.a.createElement("h1",{key:e,className:"item",onClick:g.bind(void 0,e)},h(r.s[e]))}))):o.a.createElement(s.a.div,{key:t,style:i})})),m&&o.a.createElement("div",{className:"backdrop"}))},f=n(31);t.default=o.a.memo((function(e){var t,n,a,l,u,m=e.data,v=e.stateCode,p=Object(c.a)().t,b=Object(i.useMemo)((function(){var e=[];return[0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),h=Object(s.c)({total:Object(f.h)(m,"total","tested"),config:r.p});return o.a.createElement("div",{className:"StateHeader"},o.a.createElement("div",{className:"header-left"},o.a.createElement(d,Object.assign({stateCode:v},{hyperlink:!1,trail:b[0]})),(null===m||void 0===m||null===(t=m.meta)||void 0===t?void 0:t.last_updated)&&o.a.createElement("h5",{className:"fadeInUp",style:b[1]},"Last Updated on ".concat(Object(f.c)(m.meta.last_updated,"dd MMM, p")," IST"))),o.a.createElement("div",{className:"header-right fadeInUp",style:b[2]},o.a.createElement("h5",null,p("Tested")),o.a.createElement(s.a.h2,null,h.total.interpolate((function(e){return Object(f.e)(Math.floor(e))}))),(null===m||void 0===m||null===(n=m.meta)||void 0===n||null===(a=n.tested)||void 0===a?void 0:a.last_updated)&&o.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(f.c)(m.meta.tested.last_updated,"dd MMMM"))),(null===m||void 0===m||null===(l=m.meta)||void 0===l||null===(u=l.tested)||void 0===u?void 0:u.source)&&o.a.createElement("h5",null,"per ",o.a.createElement("a",{href:m.meta.tested.source,target:"_noblank"},"source"))))}))},144:function(e,t,n){"use strict";var a=n(0),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,i=n(87),o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};t.a=i.a&&window.ResizeObserver?function(){var e=Object(a.useState)(null),t=e[0],n=e[1],i=Object(a.useState)(o),c=i[0],l=i[1],s=Object(a.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,n=t.x,a=t.y,r=t.width,i=t.height,o=t.top,c=t.left,s=t.bottom,u=t.right;l({x:n,y:a,width:r,height:i,top:o,left:c,bottom:s,right:u})}}))}),[]);return r((function(){if(t)return s.observe(t),function(){s.disconnect()}}),[t]),[n,c]}:function(){return[function(){},o]}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(79),r=n(167),i=n(88),o=n(113);function c(){var e,t,n=Object(o.a)().unknown(void 0),l=n.domain,s=n.range,u=0,d=1,f=!1,m=0,v=0,p=.5;function b(){var n=l().length,a=d<u,i=a?d:u,o=a?u:d;e=(o-i)/Math.max(1,n-m+2*v),f&&(e=Math.floor(e)),i+=(o-i-e*(n-m))*p,t=e*(1-m),f&&(i=Math.round(i),t=Math.round(t));var c=Object(r.a)(n).map((function(t){return i+e*t}));return s(a?c.reverse():c)}return delete n.unknown,n.domain=function(e){return arguments.length?(l(e),b()):l()},n.range=function(e){var t,n;return arguments.length?(t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,b()):[u,d]},n.rangeRound=function(e){var t,n;return t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,f=!0,b()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(f=!!e,b()):f},n.padding=function(e){return arguments.length?(m=Math.min(1,v=+e),b()):m},n.paddingInner=function(e){return arguments.length?(m=Math.min(1,e),b()):m},n.paddingOuter=function(e){return arguments.length?(v=+e,b()):v},n.align=function(e){return arguments.length?(p=Math.max(0,Math.min(1,e)),b()):p},n.copy=function(){return c(l(),[u,d]).round(f).paddingInner(m).paddingOuter(v).align(p)},i.b.apply(b(),arguments)}},167:function(e,t,n){"use strict";t.a=function(e,t,n){e=+e,t=+t,n=(r=arguments.length)<2?(t=e,e=0,1):r<3?1:+n;for(var a=-1,r=0|Math.max(0,Math.ceil((t-e)/n)),i=new Array(r);++a<r;)i[a]=e+a*n;return i}},234:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n(79),i=n(7),o=n(31),c=n(132),l=n(170),s=n(108),u=n(166),d=n(119),f=n(213),m=(n(103),n(83)),v=n.n(m),p=n(0),b=n.n(p),h=n(144),O=function(e,t){return Object(o.h)(e,"delta",t)},g=50,y=0,j=50,E=0;var w=b.a.memo((function(e){var t=e.timeseries,n=e.statistic,a=e.lookback,m=Object(p.useRef)(),v=Object(h.a)(),w=Object(r.a)(v,2),x=w[0],M=w[1],N=M.width,C=M.height,S=Object.keys(t||{}).filter((function(e){return e<=Object(o.g)()})).slice(-a);return Object(p.useEffect)((function(){if(N){var e=Object(f.a)(m.current),a=N-y,r=C-j,v=Object(u.a)().domain(S).range([E,a]).paddingInner(N/1e3),p=Object(d.a)().domain([Math.min(0,Object(c.a)(S,(function(e){return O(null===t||void 0===t?void 0:t[e],n)}))),Math.max(1,Object(l.a)(S,(function(e){return O(null===t||void 0===t?void 0:t[e],n)})))]).range([r,g]),b=Object(s.a)(v).tickSize(0).tickFormat((function(e){return Object(o.c)(e,"dd MMM")})),h=e.transition().duration(i.b);e.select(".x-axis").transition(h).style("transform","translateY(".concat(p(0),"px)")).call(b).on("start",(function(){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(e,a){return O(null===t||void 0===t?void 0:t[e],n)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",i.t[n].color),e.selectAll(".bar").data(S).join((function(e){return e.append("path").attr("class","bar").attr("d",(function(e){return k(v(e),p(0),v.bandwidth(),0,5)}))})).transition(h).attr("d",(function(e){return k(v(e),p(0),v.bandwidth(),p(0)-p(O(null===t||void 0===t?void 0:t[e],n)),5)})).attr("fill",(function(e,t){return t<S.length-1?i.t[n].color+"90":i.t[n].color}));var w=e.selectAll(".label").data(S).join("text").attr("class","label").attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e){return Object(o.e)(O(null===t||void 0===t?void 0:t[e],n))}));w.transition(h).attr("fill",i.t[n].color).attr("y",(function(e){var a=O(null===t||void 0===t?void 0:t[e],n);return p(a)+(a<0?15:-6)})),w.append("tspan").attr("dy",(function(e){return"".concat(O(null===t||void 0===t?void 0:t[e],n)<0?1.2:-1.2,"em")})).attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e,a){if(0===a)return"";var r=O(null===t||void 0===t?void 0:t[S[a-1]],n);if(!r)return"";var i=O(null===t||void 0===t?void 0:t[e],n)-r;return"".concat(i>0?"+":"").concat(Object(o.e)(100*i/Math.abs(r)),"%")})).transition(h).attr("fill",i.t[n].color+"90")}}),[S,C,n,t,N]),b.a.createElement("div",{className:"DeltaBarGraph",ref:x},b.a.createElement("svg",{ref:m,width:N,height:250,viewBox:"0 0 ".concat(N," ").concat(C),preserveAspectRatio:"xMidYMid meet"},b.a.createElement("g",{className:"x-axis"}),b.a.createElement("g",{className:"y-axis"})))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!v()(e.stateCode,t.stateCode)&&(!!v()(e.lookback,t.lookback)&&!!v()(e.statistic,t.statistic))))}));function k(e,t,n,a,r){return r=Math.sign(a)*Math.min(Math.abs(a),r),["M ".concat(e," ").concat(t),"v ".concat(-a+r),"q 0 ".concat(-r," ").concat(Math.abs(r)," ").concat(-r),"h ".concat(n-2*Math.abs(r)),"q ".concat(Math.abs(r)," 0 ").concat(Math.abs(r)," ").concat(r),"v ".concat(a-r),"Z"].join(" ")}var x=n(106),M=n(133),N=n(134),C=n(143),S=n(101),z=n(86);var I=function(e){var t=e.title,n=e.statistic,a=e.total,r=e.formula,i=e.date,o=e.description,c=e.className;return b.a.createElement("div",{className:"meta-item ".concat(c)},b.a.createElement("div",{className:"meta-item-top"},b.a.createElement("h3",null,t),b.a.createElement(S.a,{data:r},b.a.createElement(z.j,{size:16}))),b.a.createElement("h1",null,n),b.a.createElement("h5",null,i),a&&b.a.createElement("h5",null,"India has ".concat(a," CPM")),b.a.createElement("p",null,o))},P=n(73),R=n(20),T=n.n(R);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=Object(p.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,o=A(e,["color","size"]);return b.a.createElement("svg",_({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),b.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),b.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));L.propTypes={color:T.a.string,size:T.a.oneOfType([T.a.string,T.a.number])},L.displayName="Compass";var F=L;var U=b.a.memo((function(e){var t,n,a,r,c,l=e.stateCode,s=e.data,u=e.timeseries,d=Object.keys(u||{}).filter((function(e){return e<=Object(o.g)()})),f=d[d.length-1],m=Object(o.h)(null===u||void 0===u?void 0:u[f],"total","confirmed"),v=d.reverse().find((function(e){return Object(P.a)(Object(o.k)(f),Object(o.k)(e))>=7})),p=Object(o.h)(null===u||void 0===u?void 0:u[v],"total","confirmed"),h=Object(P.a)(Object(o.k)(f),Object(o.k)(v)),O=Object(o.h)(s[l],"total","confirmed",!0),g=Object(o.h)(s[l],"total","tested",!0),y=Object(o.h)(s.TT,"total","confirmed",!0),j=Object(o.h)(s[l],"total","activeRatio"),E=Object(o.h)(s[l],"total","recoveryRatio"),w=Object(o.h)(s[l],"total","cfr"),k=100*(Math.pow(m/p,1/h)-1);return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"StateMeta population"},b.a.createElement("div",{className:"meta-item population"},b.a.createElement("h3",null,"Population"),b.a.createElement("h1",null,Object(o.e)(null===(t=s[l])||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.population))),b.a.createElement("div",{className:"alert"},b.a.createElement(F,null),b.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",b.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),b.a.createElement("div",{className:"StateMeta"},b.a.createElement(I,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(o.e)(O),total:Object(o.e)(y),formula:"(confirmed / state population) * 1 Million",description:"\n            ~".concat(Object(o.e)(Math.round(O))," out of every 10 lakh people in ").concat(i.s[l]," have tested positive for the virus.\n            ")}),b.a.createElement(I,{className:"active",title:"Active Ratio",statistic:"".concat(Object(o.e)(j,"%")),formula:"(active / confirmed) * 100",description:j>0?"For every 100 confirmed cases, ~".concat(Object(o.e)(Math.round(j))," are currently infected."):"Currently, there are no active cases in this state."}),b.a.createElement(I,{className:"recovery",title:"Recovery Ratio",statistic:"".concat(Object(o.e)(E,"%")),formula:"(recovered / confirmed) * 100",description:E>0?"For every 100 confirmed cases, ~".concat(Object(o.e)(Math.round(E))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),b.a.createElement(I,{className:"mortality",title:"Case Fatality Ratio",statistic:"".concat(Object(o.e)(w,"%")),formula:"(deceased / confirmed) * 100",description:w>0?"For every 100 confirmed cases, ~".concat(Object(o.e)(Math.round(w))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),b.a.createElement(I,{className:"gr",title:"Avg. Growth Rate",statistic:k>0?"".concat(Object(o.e)(k,"%")):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(o.c)(v,"dd MMM")," - ").concat(Object(o.c)(f,"dd MMM")),description:k>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(o.e)(k,"%"),"\n              every day."):"There has been no growth in the number of infections in last one week."}),b.a.createElement(I,{className:"tpm",title:"Tests Per Million",statistic:"".concat(Object(o.e)(g)),formula:"(total tests in state / total population of state) * 1 Million",date:g?"As of ".concat(Object(o.d)(null===(a=s[l])||void 0===a||null===(r=a.meta)||void 0===r||null===(c=r.tested)||void 0===c?void 0:c.last_updated)," ago"):"",description:g>0?"For every 10 lakh people in ".concat(i.s[l],",\n                ~").concat(Object(o.e)(Math.round(g))," samples were tested."):"No tests have been conducted in this state yet."})))}),(function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode})),B=n(100),D=n(80),H=n.n(D);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var G=Object(p.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,o=W(e,["color","size"]);return b.a.createElement("svg",V({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),b.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),b.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),b.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),b.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));G.propTypes={color:T.a.string,size:T.a.oneOfType([T.a.string,T.a.number])},G.displayName="Smile";var q=G,J=n(110),X=n(249),Y=n(5),Z=n(211),K=n(105),Q=Object(p.lazy)((function(){return n.e(20).then(n.bind(null,195))})),$=Object(p.lazy)((function(){return Promise.all([n.e(6),n.e(37)]).then(n.bind(null,244))})),ee=Object(p.lazy)((function(){return Promise.all([n.e(2),n.e(32)]).then(n.bind(null,173))}));t.default=b.a.memo((function(){var e,t,n,c,l,s,u=Object(X.a)().t,d=Object(Y.i)().stateCode.toUpperCase(),f=Object(Z.a)("mapStatistic","active"),m=Object(r.a)(f,2),v=m[0],h=m[1],O=Object(p.useState)(!1),g=Object(r.a)(O,2),y=g[0],j=g[1],E=Object(p.useState)({stateCode:d,districtName:null}),k=Object(r.a)(E,2),S=k[0],z=k[1];Object(p.useEffect)((function(){S.stateCode!==d&&(z({stateCode:d,districtName:null}),j(!1))}),[S.stateCode,d]);var I=Object(K.a)("".concat(i.a,"/timeseries-").concat(d,".min.json"),o.b,{revalidateOnMount:!0,refreshInterval:1e5}),P=I.data,R=I.error,T=Object(K.a)("".concat(i.a,"/data.min.json"),o.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,_=Object(p.useMemo)((function(){var e;if(T){var t=window.innerWidth>=540?3:2,n=(null===(e=T[d])||void 0===e?void 0:e.districts)?Object.keys(T[d].districts).filter((function(e){return"Unknown"!==e})).length:0;return Math.ceil(n/t)}}),[T,d]),A=Object(p.useRef)(),L=Object(B.a)(A,{once:!0}),F=Object(p.useMemo)((function(){var e=[];return[0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),D=y?window.innerWidth>=540?10:8:6;return b.a.createElement(b.a.Fragment,null,b.a.createElement(J.a,null,b.a.createElement("title",null,"Coronavirus Outbreak in ",i.s[d]," - COVID Tracker"),b.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(i.s[d],": Latest Map and Case Count")})),b.a.createElement("div",{className:"State"},b.a.createElement("div",{className:"state-left"},b.a.createElement(C.default,{data:null===T||void 0===T?void 0:T[d],stateCode:d}),b.a.createElement("div",{style:{position:"relative"}},b.a.createElement(N.default,{mapStatistic:v,setMapStatistic:h}),b.a.createElement(M.default,{data:null===T||void 0===T?void 0:T[d]}),b.a.createElement(ee,Object.assign({timeseries:null===P||void 0===P||null===(e=P[d])||void 0===e?void 0:e.dates},{stateCode:d},{forceRender:!!R}))),T&&b.a.createElement(p.Suspense,{fallback:b.a.createElement("div",{style:{minHeight:"50rem"}})},b.a.createElement($,{stateCode:d,data:T,regionHighlighted:S,setRegionHighlighted:z,mapStatistic:v,setMapStatistic:h})),b.a.createElement("span",{ref:A}),T&&L&&b.a.createElement(U,Object.assign({stateCode:d,data:T},{timeseries:null===P||void 0===P||null===(t=P[d])||void 0===t?void 0:t.dates}))),b.a.createElement("div",{className:"state-right"},b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"district-bar",style:y?{}:{display:"flex"}},b.a.createElement("div",{className:"district-bar-top"},b.a.createElement("div",{className:"district-bar-left"},b.a.createElement("h2",{className:H()(v,"fadeInUp"),style:F[0]},"Top districts"),b.a.createElement("div",{className:"districts fadeInUp ".concat(y?"is-grid":""),style:y?Object(a.a)({gridTemplateRows:"repeat(".concat(_,", 2rem)")},F[1]):F[1]},Object.keys((null===T||void 0===T||null===(n=T[d])||void 0===n?void 0:n.districts)||{}).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var n=T[d].districts[e],a=T[d].districts[t];return Object(o.h)(a,"total",v)-Object(o.h)(n,"total",v)}(e,t)})).slice(0,y?void 0:5).map((function(e){var t=Object(o.h)(T[d].districts[e],"total",v),n=Object(o.h)(T[d].districts[e],"delta",v);return b.a.createElement("div",{key:e,className:"district"},b.a.createElement("h2",null,Object(o.e)(t)),b.a.createElement("h5",null,u(e)),"active"!==v&&b.a.createElement("div",{className:"delta"},b.a.createElement("h6",{className:v},n>0?"\u2191"+Object(o.e)(n):"")))})))),b.a.createElement("div",{className:"district-bar-right fadeInUp",style:F[2]},P&&("confirmed"===v||"deceased"===v)&&b.a.createElement("div",{className:"happy-sign"},Object.keys((null===(c=P[d])||void 0===c?void 0:c.dates)||{}).slice(-D).every((function(e){return 0===Object(o.h)(P[d].dates[e],"delta",v)}))&&b.a.createElement("div",{className:"alert ".concat("confirmed"===v?"is-green":"")},b.a.createElement(q,null),b.a.createElement("div",{className:"alert-right"},"No new ",v," cases in the past five days"))),b.a.createElement(w,Object.assign({timeseries:null===P||void 0===P||null===(l=P[d])||void 0===l?void 0:l.dates,statistic:v},{stateCode:d,lookback:D},{forceRender:!!R})))),b.a.createElement("div",{className:"district-bar-bottom"},Object.keys((null===T||void 0===T||null===(s=T[d])||void 0===s?void 0:s.districts)||{}).length>5?b.a.createElement("button",{className:"button fadeInUp",onClick:function(){j(!y)},style:F[3]},b.a.createElement("span",null,y?"View less":"View all")):b.a.createElement("div",{style:{height:"3.75rem",flexBasis:"15%"}}))),b.a.createElement(p.Suspense,{fallback:b.a.createElement("div",null)},b.a.createElement(Q,Object.assign({stateCode:d,timeseries:P,regionHighlighted:S,setRegionHighlighted:z},{forceRender:!!R})))))),b.a.createElement(x.default,null))}))}}]);
//# sourceMappingURL=12.ec8d9522.chunk.js.map