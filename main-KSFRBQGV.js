import{A as w1,B as k1,C as y1,D as A1,a as I2,b as p1,c as k,d as C1,e as r2,f as d2,g as W,h as u1,i as d1,j as G,k as x,l as i2,m as L1,n as R,o as V,p as v,q as N,r as g1,s as L2,t as x1,u as N1,v as h,w as y,x as b1,y as S1,z as g2}from"./chunk-WB5FF3MQ.js";var P1=[{path:"",loadChildren:()=>import("./chunk-JHWTMPAP.js").then(c=>c.HomeModule)}];var F1={providers:[A1(P1)]};function T1(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),r.push.apply(r,e)}return r}function t(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?T1(Object(r),!0).forEach(function(e){L(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):T1(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function B2(c){"@babel/helpers - typeof";return B2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},B2(c)}function $4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function B1(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function K4(c,a,r){return a&&B1(c.prototype,a),r&&B1(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function L(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function s1(c,a){return J4(c)||c3(c,a)||n4(c,a)||e3()}function p2(c){return Q4(c)||Z4(c)||n4(c)||a3()}function Q4(c){if(Array.isArray(c))return Y2(c)}function J4(c){if(Array.isArray(c))return c}function Z4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function c3(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],i=!0,s=!1,n,f;try{for(r=r.call(c);!(i=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));i=!0);}catch(l){s=!0,f=l}finally{try{!i&&r.return!=null&&r.return()}finally{if(s)throw f}}return e}}function n4(c,a){if(c){if(typeof c=="string")return Y2(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y2(c,a)}}function Y2(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function a3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O1=function(){},n1={},f4={},l4=null,o4={mark:O1,measure:O1};try{typeof window<"u"&&(n1=window),typeof document<"u"&&(f4=document),typeof MutationObserver<"u"&&(l4=MutationObserver),typeof performance<"u"&&(o4=performance)}catch{}var r3=n1.navigator||{},D1=r3.userAgent,R1=D1===void 0?"":D1,X=n1,u=f4,E1=l4,x2=o4,j6=!!X.document,q=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",t4=~R1.indexOf("MSIE")||~R1.indexOf("Trident/"),N2,b2,S2,w2,k2,E="___FONT_AWESOME___",$2=16,m4="fa",z4="svg-inline--fa",c2="data-fa-i2svg",K2="data-fa-pseudo-element",i3="data-fa-pseudo-element-pending",f1="data-prefix",l1="data-icon",_1="fontawesome-i2svg",s3="async",n3=["HTML","HEAD","STYLE","SCRIPT"],H4=function(){try{return!0}catch{return!1}}(),C="classic",d="sharp",o1=[C,d];function C2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[C]}})}var H2=C2((N2={},L(N2,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),L(N2,d,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),N2)),v2=C2((b2={},L(b2,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),L(b2,d,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),b2)),V2=C2((S2={},L(S2,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),L(S2,d,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),S2)),f3=C2((w2={},L(w2,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),L(w2,d,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),w2)),l3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,v4="fa-layers-text",o3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,t3=C2((k2={},L(k2,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),L(k2,d,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),k2)),V4=[1,2,3,4,5,6,7,8,9,10],m3=V4.concat([11,12,13,14,15,16,17,18,19,20]),z3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},M2=new Set;Object.keys(v2[C]).map(M2.add.bind(M2));Object.keys(v2[d]).map(M2.add.bind(M2));var H3=[].concat(o1,p2(M2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(V4.map(function(c){return"".concat(c,"x")})).concat(m3.map(function(c){return"w-".concat(c)})),m2=X.FontAwesomeConfig||{};function v3(c){var a=u.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function V3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}u&&typeof u.querySelector=="function"&&(U1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],U1.forEach(function(c){var a=s1(c,2),r=a[0],e=a[1],i=V3(v3(r));i!=null&&(m2[e]=i)}));var U1,M4={styleDefault:"solid",familyDefault:"classic",cssPrefix:m4,replacementClass:z4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m2.familyPrefix&&(m2.cssPrefix=m2.familyPrefix);var l2=t(t({},M4),m2);l2.autoReplaceSvg||(l2.observeMutations=!1);var z={};Object.keys(M4).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(r){l2[c]=r,z2.forEach(function(e){return e(z)})},get:function(){return l2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){l2.cssPrefix=a,z2.forEach(function(r){return r(z)})},get:function(){return l2.cssPrefix}});X.FontAwesomeConfig=z;var z2=[];function M3(c){return z2.push(c),function(){z2.splice(z2.indexOf(c),1)}}var j=$2,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function h3(c){if(!(!c||!q)){var a=u.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=u.head.childNodes,e=null,i=r.length-1;i>-1;i--){var s=r[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return u.head.insertBefore(a,e),c}}var p3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function h2(){for(var c=12,a="";c-- >0;)a+=p3[Math.random()*62|0];return a}function o2(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function t1(c){return c.classList?o2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function h4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C3(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(h4(c[r]),'" ')},"").trim()}function R2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function m1(c){return c.size!==D.size||c.x!==D.x||c.y!==D.y||c.rotate!==D.rotate||c.flipX||c.flipY}function u3(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:l,path:m}}function d3(c){var a=c.transform,r=c.width,e=r===void 0?$2:r,i=c.height,s=i===void 0?$2:i,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&t4?l+="translate(".concat(a.x/j-e/2,"em, ").concat(a.y/j-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/j,"em), calc(-50% + ").concat(a.y/j,"em)) "):l+="translate(".concat(a.x/j,"em, ").concat(a.y/j,"em) "),l+="scale(".concat(a.size/j*(a.flipX?-1:1),", ").concat(a.size/j*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var L3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function p4(){var c=m4,a=z4,r=z.cssPrefix,e=z.replacementClass,i=L3;if(r!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(f,".".concat(e))}return i}var q1=!1;function W2(){z.autoAddCss&&!q1&&(h3(p4()),q1=!0)}var g3={mixout:function(){return{dom:{css:p4,insertCss:W2}}},hooks:function(){return{beforeDOMElementCreation:function(){W2()},beforeI2svg:function(){W2()}}}},_=X||{};_[E]||(_[E]={});_[E].styles||(_[E].styles={});_[E].hooks||(_[E].hooks={});_[E].shims||(_[E].shims=[]);var T=_[E],C4=[],x3=function c(){u.removeEventListener("DOMContentLoaded",c),O2=1,C4.map(function(a){return a()})},O2=!1;q&&(O2=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),O2||u.addEventListener("DOMContentLoaded",x3));function N3(c){q&&(O2?setTimeout(c,0):C4.push(c))}function u2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?h4(c):"<".concat(a," ").concat(C3(e),">").concat(s.map(u2).join(""),"</").concat(a,">")}function I1(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var b3=function(a,r){return function(e,i,s,n){return a.call(r,e,i,s,n)}},G2=function(a,r,e,i){var s=Object.keys(a),n=s.length,f=i!==void 0?b3(r,i):r,l,m,o;for(e===void 0?(l=1,o=a[s[0]]):(l=0,o=e);l<n;l++)m=s[l],o=f(o,a[m],m,a);return o};function S3(c){for(var a=[],r=0,e=c.length;r<e;){var i=c.charCodeAt(r++);if(i>=55296&&i<=56319&&r<e){var s=c.charCodeAt(r++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),r--)}else a.push(i)}return a}function Q2(c){var a=S3(c);return a.length===1?a[0].toString(16):null}function w3(c,a){var r=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&r>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function W1(c){return Object.keys(c).reduce(function(a,r){var e=c[r],i=!!e.icon;return i?a[e.iconName]=e.icon:a[r]=e,a},{})}function J2(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,i=e===void 0?!1:e,s=W1(a);typeof T.hooks.addPack=="function"&&!i?T.hooks.addPack(c,W1(a)):T.styles[c]=t(t({},T.styles[c]||{}),s),c==="fas"&&J2("fa",a)}var y2,A2,P2,s2=T.styles,k3=T.shims,y3=(y2={},L(y2,C,Object.values(V2[C])),L(y2,d,Object.values(V2[d])),y2),z1=null,u4={},d4={},L4={},g4={},x4={},A3=(A2={},L(A2,C,Object.keys(H2[C])),L(A2,d,Object.keys(H2[d])),A2);function P3(c){return~H3.indexOf(c)}function F3(c,a){var r=a.split("-"),e=r[0],i=r.slice(1).join("-");return e===c&&i!==""&&!P3(i)?i:null}var N4=function(){var a=function(s){return G2(s2,function(n,f,l){return n[l]=G2(f,s,{}),n},{})};u4=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=n})}return i}),d4=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=n})}return i}),x4=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(l){i[l]=n}),i});var r="far"in s2||z.autoFetchSvg,e=G2(k3,function(i,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!r&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});L4=e.names,g4=e.unicodes,z1=E2(z.styleDefault,{family:z.familyDefault})};M3(function(c){z1=E2(c.styleDefault,{family:z.familyDefault})});N4();function H1(c,a){return(u4[c]||{})[a]}function T3(c,a){return(d4[c]||{})[a]}function Z(c,a){return(x4[c]||{})[a]}function b4(c){return L4[c]||{prefix:null,iconName:null}}function B3(c){var a=g4[c],r=H1("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Y(){return z1}var v1=function(){return{prefix:null,iconName:null,rest:[]}};function E2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?C:r,i=H2[e][c],s=v2[e][c]||v2[e][i],n=c in T.styles?c:null;return s||n||null}var G1=(P2={},L(P2,C,Object.keys(V2[C])),L(P2,d,Object.keys(V2[d])),P2);function _2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,i=e===void 0?!1:e,s=(a={},L(a,C,"".concat(z.cssPrefix,"-").concat(C)),L(a,d,"".concat(z.cssPrefix,"-").concat(d)),a),n=null,f=C;(c.includes(s[C])||c.some(function(m){return G1[C].includes(m)}))&&(f=C),(c.includes(s[d])||c.some(function(m){return G1[d].includes(m)}))&&(f=d);var l=c.reduce(function(m,o){var H=F3(z.cssPrefix,o);if(s2[o]?(o=y3[f].includes(o)?f3[f][o]:o,n=o,m.prefix=o):A3[f].indexOf(o)>-1?(n=o,m.prefix=E2(o,{family:f})):H?m.iconName=H:o!==z.replacementClass&&o!==s[C]&&o!==s[d]&&m.rest.push(o),!i&&m.prefix&&m.iconName){var M=n==="fa"?b4(m.iconName):{},p=Z(m.prefix,m.iconName);M.prefix&&(n=null),m.iconName=M.iconName||p||m.iconName,m.prefix=M.prefix||m.prefix,m.prefix==="far"&&!s2.far&&s2.fas&&!z.autoFetchSvg&&(m.prefix="fas")}return m},v1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===d&&(s2.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=Z(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=Y()||"fas"),l}var O3=function(){function c(){$4(this,c),this.definitions={}}return K4(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){r.definitions[f]=t(t({},r.definitions[f]||{}),n[f]),J2(f,n[f]);var l=V2[C][f];l&&J2(l,n[f]),N4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];r[f]||(r[f]={}),o.length>0&&o.forEach(function(H){typeof H=="string"&&(r[f][H]=m)}),r[f][l]=m}),r}}]),c}(),j1=[],n2={},f2={},D3=Object.keys(f2);function R3(c,a){var r=a.mixoutsTo;return j1=c,n2={},Object.keys(f2).forEach(function(e){D3.indexOf(e)===-1&&delete f2[e]}),j1.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(r[n]=i[n]),B2(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){r[n]||(r[n]={}),r[n][f]=i[n][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){n2[n]||(n2[n]=[]),n2[n].push(s[n])})}e.provides&&e.provides(f2)}),r}function Z2(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];var s=n2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function a2(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var i=n2[c]||[];i.forEach(function(s){s.apply(null,r)})}function U(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return f2[c]?f2[c].apply(null,a):void 0}function c1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||Y();if(a)return a=Z(r,a)||a,I1(S4.definitions,r,a)||I1(T.styles,r,a)}var S4=new O3,E3=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,a2("noAuto")},_3={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(a2("beforeI2svg",a),U("pseudoElements2svg",a),U("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,N3(function(){q3({autoReplaceSvgRoot:r}),a2("watch",a)})}},U3={icon:function(a){if(a===null)return null;if(B2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=E2(a[0]);return{prefix:e,iconName:Z(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(l3))){var i=_2(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||Y(),iconName:Z(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=Y();return{prefix:s,iconName:Z(s,a)||a}}}},A={noAuto:E3,config:z,dom:_3,parse:U3,library:S4,findIconDefinition:c1,toHtml:u2},q3=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?u:r;(Object.keys(T.styles).length>0||z.autoFetchSvg)&&q&&z.autoReplaceSvg&&A.dom.i2svg({node:e})};function U2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return u2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(q){var e=u.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function I3(c){var a=c.children,r=c.main,e=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(m1(n)&&r.found&&!e.found){var f=r.width,l=r.height,m={x:f/l/2,y:.5};i.style=R2(t(t({},s),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function W3(c){var a=c.prefix,r=c.iconName,e=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(r):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},i),{},{id:n}),children:e}]}]}function V1(c){var a=c.icons,r=a.main,e=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,H=c.extra,M=c.watchable,p=M===void 0?!1:M,b=e.found?e:r,P=b.width,F=b.height,B=i==="fak",g=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(I){return H.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(H.classes).join(" "),S={children:[],attributes:t(t({},H.attributes),{},{"data-prefix":i,"data-icon":s,class:g,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(F)})},O=B&&!~H.classes.indexOf("fa-fw")?{width:"".concat(P/F*16*.0625,"em")}:{};p&&(S.attributes[c2]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(o||h2())},children:[l]}),delete S.attributes.title);var w=t(t({},S),{},{prefix:i,iconName:s,main:r,mask:e,maskId:m,transform:n,symbol:f,styles:t(t({},O),H.styles)}),K=e.found&&r.found?U("generateAbstractMask",w)||{children:[],attributes:{}}:U("generateAbstractIcon",w)||{children:[],attributes:{}},Q=K.children,q2=K.attributes;return w.children=Q,w.attributes=q2,f?W3(w):I3(w)}function X1(c){var a=c.content,r=c.width,e=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(m[c2]="");var o=t({},n.styles);m1(i)&&(o.transform=d3({transform:i,startCentered:!0,width:r,height:e}),o["-webkit-transform"]=o.transform);var H=R2(o);H.length>0&&(m.style=H);var M=[];return M.push({tag:"span",attributes:m,children:[a]}),s&&M.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),M}function G3(c){var a=c.content,r=c.title,e=c.extra,i=t(t(t({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),s=R2(e.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var j2=T.styles;function a1(c){var a=c[0],r=c[1],e=c.slice(4),i=s1(e,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:r,icon:n}}var j3={found:!1,width:512,height:512};function X3(c,a){!H4&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function e1(c,a){var r=a;return a==="fa"&&z.styleDefault!==null&&(a=Y()),new Promise(function(e,i){var s={found:!1,width:512,height:512,icon:U("missingIconAbstract")||{}};if(r==="fa"){var n=b4(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&j2[a]&&j2[a][c]){var f=j2[a][c];return e(a1(f))}X3(c,a),e(t(t({},j3),{},{icon:z.showMissingIcons&&c?U("missingIconAbstract")||{}:{}}))})}var Y1=function(){},r1=z.measurePerformance&&x2&&x2.mark&&x2.measure?x2:{mark:Y1,measure:Y1},t2='FA "6.5.2"',Y3=function(a){return r1.mark("".concat(t2," ").concat(a," begins")),function(){return w4(a)}},w4=function(a){r1.mark("".concat(t2," ").concat(a," ends")),r1.measure("".concat(t2," ").concat(a),"".concat(t2," ").concat(a," begins"),"".concat(t2," ").concat(a," ends"))},M1={begin:Y3,end:w4},F2=function(){};function $1(c){var a=c.getAttribute?c.getAttribute(c2):null;return typeof a=="string"}function $3(c){var a=c.getAttribute?c.getAttribute(f1):null,r=c.getAttribute?c.getAttribute(l1):null;return a&&r}function K3(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function Q3(){if(z.autoReplaceSvg===!0)return T2.replace;var c=T2[z.autoReplaceSvg];return c||T2.replace}function J3(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}function Z3(c){return u.createElement(c)}function k4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?J3:Z3:r;if(typeof c=="string")return u.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(k4(n,{ceFn:e}))}),i}function c6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var T2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(i){r.parentNode.insertBefore(k4(i),r)}),r.getAttribute(c2)===null&&z.keepOriginalSource){var e=u.createComment(c6(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~t1(r).indexOf(z.replacementClass))return T2.replace(a);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,l){return l===z.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(f){return u2(f)}).join(`
`);r.setAttribute(c2,""),r.innerHTML=n}};function K1(c){c()}function y4(c,a){var r=typeof a=="function"?a:F2;if(c.length===0)r();else{var e=K1;z.mutateApproach===s3&&(e=X.requestAnimationFrame||K1),e(function(){var i=Q3(),s=M1.begin("mutate");c.map(i),s(),r()})}}var h1=!1;function A4(){h1=!0}function i1(){h1=!1}var D2=null;function Q1(c){if(E1&&z.observeMutations){var a=c.treeCallback,r=a===void 0?F2:a,e=c.nodeCallback,i=e===void 0?F2:e,s=c.pseudoElementsCallback,n=s===void 0?F2:s,f=c.observeMutationsRoot,l=f===void 0?u:f;D2=new E1(function(m){if(!h1){var o=Y();o2(m).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!$1(H.addedNodes[0])&&(z.searchPseudoElements&&n(H.target),r(H.target)),H.type==="attributes"&&H.target.parentNode&&z.searchPseudoElements&&n(H.target.parentNode),H.type==="attributes"&&$1(H.target)&&~z3.indexOf(H.attributeName))if(H.attributeName==="class"&&$3(H.target)){var M=_2(t1(H.target)),p=M.prefix,b=M.iconName;H.target.setAttribute(f1,p||o),b&&H.target.setAttribute(l1,b)}else K3(H.target)&&i(H.target)})}}),q&&D2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function a6(){D2&&D2.disconnect()}function e6(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),r}function r6(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=_2(t1(c));return i.prefix||(i.prefix=Y()),a&&r&&(i.prefix=a,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=T3(i.prefix,c.innerText)||H1(i.prefix,Q2(c.innerText))),!i.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function i6(c){var a=o2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return z.autoA11y&&(r?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(e||h2()):(a["aria-hidden"]="true",a.focusable="false")),a}function s6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function J1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=r6(c),e=r.iconName,i=r.prefix,s=r.rest,n=i6(c),f=Z2("parseNodeAttributes",{},c),l=a.styleParser?e6(c):[];return t({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var n6=T.styles;function P4(c){var a=z.autoReplaceSvg==="nest"?J1(c,{styleParser:!1}):J1(c);return~a.extra.classes.indexOf(v4)?U("generateLayersText",c,a):U("generateSvgReplacementMutation",c,a)}var $=new Set;o1.map(function(c){$.add("fa-".concat(c))});Object.keys(H2[C]).map($.add.bind($));Object.keys(H2[d]).map($.add.bind($));$=p2($);function Z1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();var r=u.documentElement.classList,e=function(H){return r.add("".concat(_1,"-").concat(H))},i=function(H){return r.remove("".concat(_1,"-").concat(H))},s=z.autoFetchSvg?$:o1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(n6));s.includes("fa")||s.push("fa");var n=[".".concat(v4,":not([").concat(c2,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(c2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=o2(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),i("complete");else return Promise.resolve();var l=M1.begin("onTree"),m=f.reduce(function(o,H){try{var M=P4(H);M&&o.push(M)}catch(p){H4||p.name==="MissingIcon"&&console.error(p)}return o},[]);return new Promise(function(o,H){Promise.all(m).then(function(M){y4(M,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(M){l(),H(M)})})}function f6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P4(c).then(function(r){r&&y4([r],a)})}function l6(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:c1(a||{}),i=r.mask;return i&&(i=(i||{}).icon?i:c1(i||{})),c(e,t(t({},r),{},{mask:i}))}}var o6=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,i=e===void 0?D:e,s=r.symbol,n=s===void 0?!1:s,f=r.mask,l=f===void 0?null:f,m=r.maskId,o=m===void 0?null:m,H=r.title,M=H===void 0?null:H,p=r.titleId,b=p===void 0?null:p,P=r.classes,F=P===void 0?[]:P,B=r.attributes,g=B===void 0?{}:B,S=r.styles,O=S===void 0?{}:S;if(a){var w=a.prefix,K=a.iconName,Q=a.icon;return U2(t({type:"icon"},a),function(){return a2("beforeDOMElementCreation",{iconDefinition:a,params:r}),z.autoA11y&&(M?g["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(b||h2()):(g["aria-hidden"]="true",g.focusable="false")),V1({icons:{main:a1(Q),mask:l?a1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:K,transform:t(t({},D),i),symbol:n,title:M,maskId:o,titleId:b,extra:{attributes:g,styles:O,classes:F}})})}},t6={mixout:function(){return{icon:l6(o6)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=Z1,r.nodeCallback=f6,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,i=e===void 0?u:e,s=r.callback,n=s===void 0?function(){}:s;return Z1(i,n)},a.generateSvgReplacementMutation=function(r,e){var i=e.iconName,s=e.title,n=e.titleId,f=e.prefix,l=e.transform,m=e.symbol,o=e.mask,H=e.maskId,M=e.extra;return new Promise(function(p,b){Promise.all([e1(i,f),o.iconName?e1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var F=s1(P,2),B=F[0],g=F[1];p([r,V1({icons:{main:B,mask:g},prefix:f,iconName:i,transform:l,symbol:m,maskId:H,title:s,titleId:n,extra:M,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.transform,f=r.styles,l=R2(f);l.length>0&&(i.style=l);var m;return m1(n)&&(m=U("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(m||s.icon),{children:e,attributes:i}}}},m6={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,s=i===void 0?[]:i;return U2({type:"layer"},function(){a2("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(p2(s)).join(" ")},children:n}]})}}}},z6={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,s=i===void 0?null:i,n=e.classes,f=n===void 0?[]:n,l=e.attributes,m=l===void 0?{}:l,o=e.styles,H=o===void 0?{}:o;return U2({type:"counter",content:r},function(){return a2("beforeDOMElementCreation",{content:r,params:e}),G3({content:r.toString(),title:s,extra:{attributes:m,styles:H,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(p2(f))}})})}}}},H6={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,s=i===void 0?D:i,n=e.title,f=n===void 0?null:n,l=e.classes,m=l===void 0?[]:l,o=e.attributes,H=o===void 0?{}:o,M=e.styles,p=M===void 0?{}:M;return U2({type:"text",content:r},function(){return a2("beforeDOMElementCreation",{content:r,params:e}),X1({content:r,transform:t(t({},D),s),title:f,extra:{attributes:H,styles:p,classes:["".concat(z.cssPrefix,"-layers-text")].concat(p2(m))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var i=e.title,s=e.transform,n=e.extra,f=null,l=null;if(t4){var m=parseInt(getComputedStyle(r).fontSize,10),o=r.getBoundingClientRect();f=o.width/m,l=o.height/m}return z.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,X1({content:r.innerHTML,width:f,height:l,transform:s,title:i,extra:n,watchable:!0})])}}},v6=new RegExp('"',"ug"),c4=[1105920,1112319];function V6(c){var a=c.replace(v6,""),r=w3(a,0),e=r>=c4[0]&&r<=c4[1],i=a.length===2?a[0]===a[1]:!1;return{value:Q2(i?a[0]:a),isSecondary:e||i}}function a4(c,a){var r="".concat(i3).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(r)!==null)return e();var s=o2(c.children),n=s.filter(function(Q){return Q.getAttribute(K2)===a})[0],f=X.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(o3),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),e();if(l&&o!=="none"&&o!==""){var H=f.getPropertyValue("content"),M=~["Sharp"].indexOf(l[2])?d:C,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?v2[M][l[2].toLowerCase()]:t3[M][m],b=V6(H),P=b.value,F=b.isSecondary,B=l[0].startsWith("FontAwesome"),g=H1(p,P),S=g;if(B){var O=B3(P);O.iconName&&O.prefix&&(g=O.iconName,p=O.prefix)}if(g&&!F&&(!n||n.getAttribute(f1)!==p||n.getAttribute(l1)!==S)){c.setAttribute(r,S),n&&c.removeChild(n);var w=s6(),K=w.extra;K.attributes[K2]=a,e1(g,p).then(function(Q){var q2=V1(t(t({},w),{},{icons:{main:Q,mask:v1()},prefix:p,iconName:S,extra:K,watchable:!0})),I=u.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(I,c.firstChild):c.appendChild(I),I.outerHTML=q2.map(function(Y4){return u2(Y4)}).join(`
`),c.removeAttribute(r),e()}).catch(i)}else e()}else e()})}function M6(c){return Promise.all([a4(c,"::before"),a4(c,"::after")])}function h6(c){return c.parentNode!==document.head&&!~n3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(K2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function e4(c){if(q)return new Promise(function(a,r){var e=o2(c.querySelectorAll("*")).filter(h6).map(M6),i=M1.begin("searchPseudoElements");A4(),Promise.all(e).then(function(){i(),i1(),a()}).catch(function(){i(),i1(),r()})})}var p6={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=e4,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,i=e===void 0?u:e;z.searchPseudoElements&&e4(i)}}},r4=!1,C6={mixout:function(){return{dom:{unwatch:function(){A4(),r4=!0}}}},hooks:function(){return{bootstrap:function(){Q1(Z2("mutationObserverCallbacks",{}))},noAuto:function(){a6()},watch:function(r){var e=r.observeMutationsRoot;r4?i1():Q1(Z2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},i4=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var s=i.toLowerCase().split("-"),n=s[0],f=s.slice(1).join("-");if(n&&f==="h")return e.flipX=!0,e;if(n&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(n){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},r)},u6={mixout:function(){return{parse:{transform:function(r){return i4(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-transform");return i&&(r.transform=i4(i)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,i=r.transform,s=r.containerWidth,n=r.iconWidth,f={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),o="rotate(".concat(i.rotate," 0 0)"),H={transform:"".concat(l," ").concat(m," ").concat(o)},M={transform:"translate(".concat(n/2*-1," -256)")},p={outer:f,inner:H,path:M};return{tag:"g",attributes:t({},p.outer),children:[{tag:"g",attributes:t({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:t(t({},e.icon.attributes),p.path)}]}]}}}},X2={x:0,y:0,width:"100%",height:"100%"};function s4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function d6(c){return c.tag==="g"?c.children:[c]}var L6={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-mask"),s=i?_2(i.split(" ").map(function(n){return n.trim()})):v1();return s.prefix||(s.prefix=Y()),r.mask=s,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.mask,f=r.maskId,l=r.transform,m=s.width,o=s.icon,H=n.width,M=n.icon,p=u3({transform:l,containerWidth:H,iconWidth:m}),b={tag:"rect",attributes:t(t({},X2),{},{fill:"white"})},P=o.children?{children:o.children.map(s4)}:{},F={tag:"g",attributes:t({},p.inner),children:[s4(t({tag:o.tag,attributes:t(t({},o.attributes),p.path)},P))]},B={tag:"g",attributes:t({},p.outer),children:[F]},g="mask-".concat(f||h2()),S="clip-".concat(f||h2()),O={tag:"mask",attributes:t(t({},X2),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,B]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:d6(M)},O]};return e.push(w,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(g,")")},X2)}),{children:e,attributes:i}}}},g6={provides:function(a){var r=!1;X.matchMedia&&(r=X.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:t(t({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||f.children.push({tag:"animate",attributes:t(t({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:t(t({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:t(t({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},x6={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return r.symbol=s,r}}}},N6=[g3,t6,m6,z6,H6,p6,C6,u6,L6,g6,x6];R3(N6,{mixoutsTo:A});var X6=A.noAuto,Y6=A.config,$6=A.library,K6=A.dom,F4=A.parse,Q6=A.findIconDefinition,J6=A.toHtml,T4=A.icon,Z6=A.layer,b6=A.text,S6=A.counter;var w6=["*"],k6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},y6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},A6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},P6=c=>c.prefix!==void 0&&c.iconName!==void 0,F6=(c,a)=>P6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},T6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=I2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),B6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let s of i.icon[2])typeof s=="string"&&(this.definitions[i.prefix][s]=i)}}addIconPacks(...e){for(let i of e){let s=Object.keys(i).map(n=>i[n]);this.addIcons(...s)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=I2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),O6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=r2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[d2]});let c=a;return c})(),D6=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(x(i2),x(W))},a.\u0275cmp=k({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[d2,y],ngContentSelectors:w6,decls:1,vars:0,template:function(i,s){i&1&&(x1(),N1(0))},encapsulation:2});let c=a;return c})(),B4=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,s,n,f){this.sanitizer=e,this.config=i,this.iconLibrary=s,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){y6();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(i);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=F6(e,this.config.defaultPrefix);if("icon"in i)return i;let s=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return s??(k6(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?F4.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...A6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let s=T4(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(x(k1),x(T6),x(B6),x(O6,8),x(D6,8))},a.\u0275cmp=k({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,s){i&2&&(g1("innerHTML",s.renderedIconHTML,u1),L1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[d2,y],decls:0,vars:0,template:function(i,s){},encapsulation:2});let c=a;return c})();var O4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=C1({type:a}),a.\u0275inj=p1({});let c=a;return c})();var D4={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]};var E6={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},R4=E6;var _6={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},E4=_6;var _4={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var U4=(()=>{let a=class a{constructor(e,i){this.elementRef=e,this.renderer=i}onWindowScroll(){let e=this.elementRef.nativeElement;window.scrollY>0?this.renderer.addClass(e,"translucent"):this.renderer.removeClass(e,"translucent")}};a.\u0275fac=function(i){return new(i||a)(x(W),x(i2))},a.\u0275dir=r2({type:a,selectors:[["","directiveScrollOpacity",""]],hostBindings:function(i,s){i&1&&L2("scroll",function(){return s.onWindowScroll()},!1,d1)},standalone:!0});let c=a;return c})();var q4=(()=>{let a=class a{constructor(e,i){this.elementRef=e,this.renderer=i}onMouseEnter(){this.renderer.addClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}onMouseLeave(){this.renderer.removeClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}};a.\u0275fac=function(i){return new(i||a)(x(W),x(i2))},a.\u0275dir=r2({type:a,selectors:[["","directiveDropdownHover",""]],hostBindings:function(i,s){i&1&&L2("mouseenter",function(){return s.onMouseEnter()})("mouseleave",function(){return s.onMouseLeave()})},standalone:!0});let c=a;return c})();var U6=c=>({"margin-bottom.px":c}),I4=(()=>{let a=class a{constructor(e){this.elementRef=e,this.faSearch=E4,this.faUser=D4,this.faShoppingCart=R4,this.faChevronRight=_4,this.navbarHeight=0}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}};a.\u0275fac=function(i){return new(i||a)(x(W))},a.\u0275cmp=k({type:a,selectors:[["app-navbar"]],standalone:!0,features:[y],decls:175,vars:10,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header"],[1,"wrapper-left"],[1,"top-links"],["href","",1,"link"],[1,"link-wrapper"],["directiveDropdownHover","",1,"dropdown","dropdown-w-icons"],["href","",1,"dropdown-link"],[1,"dropdown-link-wrapper"],[3,"icon"],[1,"dropdown","sub-dropdown"],["href","",1,"sub-dropdown-link"],[1,"sub-dropdown-link-wrapper"],["directiveDropdownHover","",1,"dropdown"],[1,"wrapper-center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"wrapper-right"]],template:function(i,s){i&1&&(V(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ul")(5,"li")(6,"a",4)(7,"div",5)(8,"span"),h(9,"Shop"),v()(),V(10,"ul",6)(11,"li")(12,"a",7)(13,"div",8)(14,"span"),h(15,"Coffee "),v(),N(16,"fa-icon",9),v()(),V(17,"ul",10)(18,"li")(19,"a",11)(20,"div",12)(21,"span"),h(22,"Classic Coffees"),v()()()(),V(23,"li")(24,"a",11)(25,"div",12)(26,"span"),h(27,"Single Origins"),v()()()()()(),V(28,"li")(29,"a",7)(30,"div",8)(31,"span"),h(32,"Coffee Club"),v(),N(33,"fa-icon",9),v()(),V(34,"ul",10)(35,"li")(36,"a",11)(37,"div",12)(38,"span"),h(39,"Join The Club"),v()()()(),V(40,"li")(41,"a",11)(42,"div",12)(43,"span"),h(44,"Manage Your Subscription"),v()()()()()(),V(45,"li")(46,"a",7)(47,"div",8)(48,"span"),h(49,"Gifts "),v(),N(50,"fa-icon",9),v()(),V(51,"ul",10)(52,"li")(53,"a",11)(54,"div",12)(55,"span"),h(56,"Gift a Coffee Subscription"),v()()()(),V(57,"li")(58,"a",11)(59,"div",12)(60,"span"),h(61,"Gift a Gift Card"),v()()()()()(),V(62,"li")(63,"a",7)(64,"div",8)(65,"span"),h(66,"Goods "),v(),N(67,"fa-icon",9),v()(),V(68,"ul",10)(69,"li")(70,"a",11)(71,"div",12)(72,"span"),h(73,"Brewing Equipment"),v()()()(),V(74,"li")(75,"a",11)(76,"div",12)(77,"span"),h(78,"Merchandise"),v()()()()()(),V(79,"li")(80,"a",7)(81,"div",8)(82,"span"),h(83,"Shop All"),v()()()()()()(),V(84,"li")(85,"a",4)(86,"div",5)(87,"span"),h(88,"Learn"),v()(),V(89,"ul",13)(90,"li")(91,"a",7)(92,"div",8)(93,"span"),h(94,"Blog"),v()()()(),V(95,"li")(96,"a",7)(97,"div",8)(98,"span"),h(99,"Contact Us"),v()()()(),V(100,"li")(101,"a",7)(102,"div",8)(103,"span"),h(104,"FAQ"),v()()()()()()(),V(105,"li")(106,"a",4)(107,"div",5)(108,"span"),h(109,"Wholesale"),v()(),V(110,"ul",13)(111,"li")(112,"a",7)(113,"div",8)(114,"span"),h(115,"Login"),v()()()(),V(116,"li")(117,"a",7)(118,"div",8)(119,"span"),h(120,"Wholesale Inquiry"),v()()()()()()(),V(121,"li")(122,"a",4)(123,"div",5)(124,"span"),h(125,"Connect"),v()(),V(126,"ul",13)(127,"li")(128,"a",7)(129,"div",8)(130,"span"),h(131,"About Us"),v()()()(),V(132,"li")(133,"a",7)(134,"div",8)(135,"span"),h(136,"Cafe"),v()()()(),V(137,"li")(138,"a",7)(139,"div",8)(140,"span"),h(141,"Careers"),v()()()(),V(142,"li")(143,"a",7)(144,"div",8)(145,"span"),h(146,"Press"),v()()()()()()()()()(),V(147,"div",14)(148,"div",15)(149,"h1",16)(150,"a",17)(151,"div",18),N(152,"img",19),v()(),N(153,"a",20),v()()(),V(154,"div",21)(155,"div",3)(156,"ul")(157,"li")(158,"a",4)(159,"div",5),N(160,"fa-icon",9),V(161,"span"),h(162,"Search"),v()()()(),V(163,"li")(164,"a",4)(165,"div",5),N(166,"fa-icon",9),V(167,"span"),h(168,"Account"),v()()()(),V(169,"li")(170,"a",4)(171,"div",5),N(172,"fa-icon",9),V(173,"span"),h(174,"Cart"),v()()()()()()()()()),i&2&&(R("ngStyle",b1(8,U6,-s.navbarHeight)),G(16),R("icon",s.faChevronRight),G(17),R("icon",s.faChevronRight),G(17),R("icon",s.faChevronRight),G(17),R("icon",s.faChevronRight),G(93),R("icon",s.faSearch),G(6),R("icon",s.faUser),G(6),R("icon",s.faShoppingCart))},dependencies:[g2,S1,O4,B4,U4,q4],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1000;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;position:relative;margin:0 15px;font-family:custom-font;font-size:14px}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]{display:flex;flex:1 1 100%}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:inline-block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%]{visibility:visible;opacity:1}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:100%}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{visibility:hidden;display:grid;opacity:0;margin-top:15px;position:absolute;grid-template-columns:1fr;padding:20px;min-width:150px;max-width:300px;background-color:var(--primary-bg-color);transition:opacity .3s,visibility .3s;cursor:default}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:7px 0;width:100%}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{transition:color .3s;position:relative}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-bottom:4px}.site-header[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]{flex-basis:100px;align-self:center}.site-header[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.site-header[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2800px;max-height:2800px;width:100px;height:100px;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;justify-content:flex-end}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;transition:color .3s}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--announcement-bg-color)}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:18px}.site-header[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-dropdown[_ngcontent-%COMP%]{opacity:1!important;visibility:visible!important}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:9px}.sub-dropdown[_ngcontent-%COMP%]{position:absolute;left:100%;top:-20px;margin-top:0!important;margin-left:20px!important;visibility:hidden!important;opacity:0!important;transition:opacity .3s,visibility .3s;cursor:default}.sub-dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color)!important}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:0%!important}']});let c=a;return c})();var W4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=k({type:a,selectors:[["app-footer"]],standalone:!0,features:[y],decls:2,vars:0,template:function(i,s){i&1&&(V(0,"p"),h(1,"footer works!"),v())}});let c=a;return c})();var G4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=k({type:a,selectors:[["app-top-announcement"]],standalone:!0,features:[y],decls:3,vars:0,consts:[[1,"announcement-wrapper"]],template:function(i,s){i&1&&(V(0,"div",0)(1,"span"),h(2,"Free shipping for all orders over $50"),v()())},styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.announcement-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:var(--announcement-bg-color)}.announcement-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color);padding:10px 30px;font-size:16px;font-family:custom-font}']});let c=a;return c})();var j4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=k({type:a,selectors:[["app-layout"]],standalone:!0,features:[y],decls:6,vars:0,template:function(i,s){i&1&&(V(0,"main"),N(1,"app-top-announcement")(2,"app-navbar"),V(3,"div"),N(4,"router-outlet"),v(),N(5,"app-footer"),v())},dependencies:[I4,W4,y1,G4]});let c=a;return c})();var X4=(()=>{let a=class a{constructor(){this.title="coffee-shop"}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=k({type:a,selectors:[["app-root"]],standalone:!0,features:[y],decls:1,vars:0,template:function(i,s){i&1&&N(0,"app-layout")},dependencies:[g2,j4]});let c=a;return c})();w1(X4,F1).catch(c=>console.error(c));
