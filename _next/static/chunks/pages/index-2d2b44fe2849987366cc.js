(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var i=n(3038),r=n(862);t.default=void 0;var o=r(n(7294)),a=n(1689),s=n(2441),l=n(5749),d={};function p(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;d[t+"%"+n+(r?"%"+r:"")]=!0}}var c=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.asPath||"/",c=o.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=i(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,a.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),f=c.href,m=c.as,u=e.children,x=e.replace,h=e.shallow,g=e.scroll,y=e.locale;"string"===typeof u&&(u=o.default.createElement("a",null,u));var b=o.Children.only(u),j=b&&"object"===typeof b&&b.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),k=i(w,2),C=k[0],_=k[1],v=o.default.useCallback((function(e){C(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,C]);(0,o.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(f),i="undefined"!==typeof y?y:n&&n.locale,r=d[f+"%"+m+(i?"%"+i:"")];e&&!r&&p(n,f,m,{locale:i})}),[m,f,_,y,t,n]);var z={ref:v,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:o,locale:l,scroll:s}))}(e,n,f,m,x,h,g,y)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),p(n,f,m,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var I="undefined"!==typeof y?y:n&&n.locale,S=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(m,I,n&&n.locales,n&&n.domainLocales);z.href=S||(0,a.addBasePath)((0,a.addLocale)(m,I,n&&n.defaultLocale))}return o.default.cloneElement(b,z)};t.default=c},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=(0,r.useRef)(),d=(0,r.useState)(!1),p=i(d,2),c=p[0],f=p[1],m=(0,r.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||c||e&&e.tagName&&(l.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,c]);return(0,r.useEffect)((function(){if(!a&&!c){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[c]),[m,c]};var r=n(7294),o=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},8420:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var i=n(5893),r=(n(7294),function(){return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{opacity:"0.15",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),(0,i.jsx)("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),(0,i.jsx)("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),(0,i.jsx)("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_1"})})}),(0,i.jsx)("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_1"})})}),(0,i.jsx)("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7",children:(0,i.jsx)("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)",children:(0,i.jsx)("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]})]})]})})}),o=n(2821),a=n(9163),s=a.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-6qzy6y-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),l=a.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-6qzy6y-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#f5d7e3 18.77%,#f4a5ae 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),d=a.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-6qzy6y-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:#ffffff;@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),p=a.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-6qzy6y-3"})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:",";margin-bottom:15px;margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F4A5AE 0%, #A8577E 100%)":"linear-gradient(270deg, #3B429F 0%, #A8577E 100%)"}),(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),c=(a.default.p.withConfig({displayName:"GlobalComponents__SectionSubText",componentId:"sc-6qzy6y-4"})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ","{max-width:672px;font-size:16px;line-height:25px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),a.default.button.withConfig({displayName:"GlobalComponents__SecondaryBtn",componentId:"sc-6qzy6y-5"})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ","{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),a.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-6qzy6y-6"})(["width:",";height:",";border-radius:50px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#fff;background:",";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"150px":"262px"}),(function(e){return e.alt?"52px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var t=e.alt,n=e.form;return t||n?"0":"0 0 80px"}),(function(e){return e.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"}))),f=a.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-6qzy6y-7"})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:",";opacity:",";transition:0.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),m=(a.default.div.withConfig({displayName:"GlobalComponents__LinkContainer",componentId:"sc-6qzy6y-8"})(["margin-left:",";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ","{margin-left:",";}@media ","{margin-left:",";}"],(function(e){return e.large?"24px":"16px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.large?"16px":"8px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"0":"8px"})),a.default.div.withConfig({displayName:"GlobalComponents__LinkIconImg",componentId:"sc-6qzy6y-9"})(["display:flex;height:",";@media ","{height:",";}@media ","{height:",";}"],(function(e){return e.large?"32px":"24px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.nav?"16px":"24px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"32px":"16px"})),function(e){return(0,i.jsxs)(c,{alt:e.alt,form:e.form,disabled:e.disabled,children:[e.children,(0,i.jsx)(f,{alt:e.alt,onClick:e.onClick,disabled:e.disabled,children:e.children})]})}),u=a.default.div.withConfig({displayName:"HeroStyles__LeftSection",componentId:"pbjia3-0"})(["width:100%;@media ","{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ","{width:100%;display:flex;flex-direction:column;margin:0 auto;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),x=function(){return(0,i.jsx)(s,{row:!0,nopadding:!0,children:(0,i.jsxs)(u,{children:[(0,i.jsxs)(l,{main:!0,center:!0,children:["Hi there, ",(0,i.jsx)("br",{})," I am Sayantani"]}),(0,i.jsx)(d,{children:"Welcome to my personal portfolio website!\ud83d\udcbb This website is created by me, also designed by me. I hope that you will like\ud83d\udc4d\ud83d\ude00 this website. Please scroll down below to see more contents. Thank You\ud83d\udc95\ud83d\ude0a!"}),(0,i.jsxs)(m,{onclick:function(){return window.open="https://mail.google.com/"},children:["Contact Me ",(0,i.jsx)("br",{}),(0,i.jsx)(o.mGl,{})]})]})})},h=n(859),g=(a.default.div.withConfig({displayName:"TechnologiesStyles__ImageContainer",componentId:"sc-1ehw0pq-0"})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ","{background-image:none;padding:0;margin-top:40px;}@media ","{background-image:none;padding:0;margin-top:16px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md})),a.default.img.withConfig({displayName:"TechnologiesStyles__MainImage",componentId:"sc-1ehw0pq-1"})(["width:100%;"]),a.default.ul.withConfig({displayName:"TechnologiesStyles__List",componentId:"sc-1ehw0pq-2"})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ","{margin:64px 0;}@media ","{margin:64px 0;gap:24px}@media ","{display:flex;flex-direction:column;margin:32px 0;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),y=a.default.div.withConfig({displayName:"TechnologiesStyles__ListContainer",componentId:"sc-1ehw0pq-3"})(["display:flex;flex-direction:column;@media ","{display:flex;margin-left:18px;}"],(function(e){return e.theme.breakpoints.sm})),b=a.default.h4.withConfig({displayName:"TechnologiesStyles__ListTitle",componentId:"sc-1ehw0pq-4"})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:24px;line-height:28px;}@media ","{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),j=a.default.p.withConfig({displayName:"TechnologiesStyles__ListParagraph",componentId:"sc-1ehw0pq-5"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),w=a.default.li.withConfig({displayName:"TechnologiesStyles__ListItem",componentId:"sc-1ehw0pq-6"})(["max-width:320px;display:flex;flex-direction:column;@media ","{max-width:203px;}@media ","{margin-bottom:14px;max-width:320px;flex-direction:row;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),k=(a.default.img.withConfig({displayName:"TechnologiesStyles__ListIcon",componentId:"sc-1ehw0pq-7"})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ","{width:40px;height:40px;margin-bottom:8px;}@media ","{width:32px;height:32px;margin-bottom:0px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),function(){return(0,i.jsxs)(s,{id:"tech",children:[(0,i.jsx)(p,{}),(0,i.jsx)("br",{}),(0,i.jsx)(l,{children:"Technologies"}),(0,i.jsx)(d,{children:"I have 1 year experience with these Technologies. The Technologies which I use are listed below."}),(0,i.jsxs)(g,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(h.GR$,{size:"3rem"}),(0,i.jsxs)(y,{children:[(0,i.jsx)(b,{children:"Front-End"}),(0,i.jsxs)(j,{children:["Experience with ",(0,i.jsx)("br",{})," HTML, SCSS, JS"]})]})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(h.BwW,{size:"3rem"}),(0,i.jsxs)(y,{children:[(0,i.jsx)(b,{children:"Back-End"}),(0,i.jsxs)(j,{children:["Experience with ",(0,i.jsx)("br",{}),"Firebase Database"]})]})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(h.MSM,{size:"3rem"}),(0,i.jsxs)(y,{children:[(0,i.jsx)(b,{children:"UI/UX"}),(0,i.jsxs)(j,{children:["Experience with ",(0,i.jsx)("br",{})," tools like Figma and Adobe XD"]})]})]})]})]})}),C=function(){return(0,i.jsxs)(s,{id:"about",children:[(0,i.jsx)(l,{children:"About Me"}),(0,i.jsxs)(d,{children:["Hi, my name is Sayantani Patra, (born on 07/03/2009) I am 12+ years old. I study in class VII, I read in Narayana Group Of Schools Kolkata, My hobbies are painting, reading, watching and last but not least and my most favourite hobby ",(0,i.jsx)("b",{children:"coding"}),"!!!"]}),(0,i.jsx)(m,{children:"Read more about me"}),(0,i.jsx)(p,{})]})},_=n(1649),v=a.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-9w0vkp-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),z=a.default.span.withConfig({displayName:"HeaderStyles__Span",componentId:"sc-9w0vkp-1"})(["font-size:2rem;"]),I=a.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-9w0vkp-2"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),S=a.default.div.withConfig({displayName:"HeaderStyles__Div2",componentId:"sc-9w0vkp-3"})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ","{grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),L=a.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-9w0vkp-4"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),N=a.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-9w0vkp-5"})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),F=(a.default.button.withConfig({displayName:"HeaderStyles__ContactDropDown",componentId:"sc-9w0vkp-6"})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ","{padding:0.4rem 0;}@media ","{padding:0;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),(0,a.default)(_.U0j).withConfig({displayName:"HeaderStyles__NavProductsIcon",componentId:"sc-9w0vkp-7"})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:",";transform:",";&:hover{opacity:1;}@media ","{margin:2px 0 0 2px;width:15px;}"],(function(e){return e.isOpen?"1":".75"}),(function(e){return e.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(e){return e.theme.breakpoints.sm})),a.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-9w0vkp-8"})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"])),O=a.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"sc-1ifsifd-0"})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ","{padding:0 16px 48px;width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),D=a.default.a.withConfig({displayName:"FooterStyles__LinkItem",componentId:"sc-1ifsifd-1"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ","{font-size:16px;line-height:28px;display:flex;}@media ","{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),M=a.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"sc-1ifsifd-2"})(["max-width:1040px;display:flex;justify-content:space-between;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),H=a.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"sc-1ifsifd-3"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),U=a.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"sc-1ifsifd-4"})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),E=a.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"sc-1ifsifd-5"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md})),T=a.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"sc-1ifsifd-6"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),G=a.default.div.withConfig({displayName:"FooterStyles__LinkColumn",componentId:"sc-1ifsifd-7"})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]),B=a.default.h4.withConfig({displayName:"FooterStyles__LinkTitle",componentId:"sc-1ifsifd-8"})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ","{font-size:10px;line-height:12px;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),q=function(){return(0,i.jsxs)(O,{children:[(0,i.jsx)(T,{children:(0,i.jsxs)(G,{children:[(0,i.jsx)(B,{children:"Email"}),(0,i.jsx)(D,{href:"mailto:sayantanipatra089@outlook.com",children:"sayantanipatra089@outlook.com"})]})}),(0,i.jsxs)(M,{children:[(0,i.jsx)(H,{children:(0,i.jsx)(U,{children:"Thank you for visiting my website. Hope you liked it. (more contents will be added soon)."})}),(0,i.jsxs)(E,{children:[(0,i.jsx)(F,{href:"https://github.com",children:(0,i.jsx)(o.RrF,{size:"3rem"})}),(0,i.jsx)(F,{href:"https://linkedin.com",children:(0,i.jsx)(o._iD,{size:"3rem"})}),(0,i.jsx)(F,{href:"https://instagram.com",children:(0,i.jsx)(o.t0C,{size:"3rem"})}),(0,i.jsx)(F,{href:"https://twitter.com",children:(0,i.jsx)(o.wod,{size:"3rem"})})]})]})]})},A=n(1664),P=function(){return(0,i.jsxs)(v,{children:[(0,i.jsx)(I,{children:(0,i.jsx)(A.default,{href:"/",children:(0,i.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white",marginBottom:"20px"},children:[(0,i.jsx)(h.JAz,{size:"3rem"}),(0,i.jsx)(z,{children:"Portfolio"})]})})}),(0,i.jsxs)(S,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(A.default,{href:"#tech",children:(0,i.jsx)(N,{children:"Technologies"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(A.default,{href:"#about",children:(0,i.jsx)(N,{children:"About"})})})]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(F,{href:"https://github.com",children:(0,i.jsx)(o.RrF,{size:"3rem"})}),(0,i.jsx)(F,{href:"https://linkedin.com",children:(0,i.jsx)(o._iD,{size:"3rem"})}),(0,i.jsx)(F,{href:"https://instagram.com",children:(0,i.jsx)(o.t0C,{size:"3rem"})}),(0,i.jsx)(F,{href:"https://twitter.com",children:(0,i.jsx)(o.wod,{size:"3rem"})})]})]})},R=a.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"mzu455-0"})(["max-width:1280px;width:100%;margin:auto;"]),K=function(e){var t=e.children;return(0,i.jsxs)(R,{children:[(0,i.jsx)(P,{}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(q,{})]})},W=function(){return(0,i.jsxs)(K,{children:[(0,i.jsxs)(s,{grid:!0,children:[(0,i.jsx)(x,{}),(0,i.jsx)(r,{})]}),(0,i.jsx)(k,{}),(0,i.jsx)(C,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8420)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return d}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function l(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function d(e){return function(t){return i.createElement(p,a({attr:a({},e.attr)},t),l(e.child))}}function p(e){var t=function(t){var n,r=e.attr,o=e.size,l=e.title,d=s(e,["attr","size","title"]),p=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}}},function(e){e.O(0,[866,921,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);