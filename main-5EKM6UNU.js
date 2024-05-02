import{a as m4,b as z4,c as H4,d as v4,e as p4}from"./chunk-CCIBJJ2A.js";import{$a as K,Aa as D2,Bb as E2,Ca as V,Cb as U2,Da as S,Db as q2,Ea as J1,Eb as I2,Fa as Z1,Fb as F,Ga as c4,H as O2,Ha as v2,Ia as a4,Ja as e4,L as I1,M as s2,N as W1,Pa as $,Qa as r4,Ra as C,S as G1,Sa as p2,Ta as v,Ua as m,Va as d,W as b,Wa as o2,X as j1,Xa as l2,Y as H2,Ya as i4,Z as X1,Za as n4,_a as w,ab as s4,ba as B2,bb as o4,ca as Y1,cb as l4,da as $1,db as h,eb as R2,fb as N,gb as Q,ha as q,hb as f4,ia as _2,na as K1,p as F2,ub as t4,v as T2,za as Q1}from"./chunk-5CKC4THW.js";var B3="@",_3=(()=>{let a=class a{constructor(e,i,n,s,o){this.doc=e,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=o,this._rendererFactoryPromise=null,this.scheduler=G1(Z1,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-7XJEO537.js")).catch(i=>{throw new I1(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,i){let n=this.delegate.createRenderer(e,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new v1(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let l=o.createRenderer(e,i);s.use(l)}).catch(o=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};a.\u0275fac=function(i){J1()},a.\u0275prov=s2({token:a,factory:a.\u0275fac});let c=a;return c})(),v1=class{constructor(a){this.delegate=a,this.replay=[],this.\u0275type=1}use(a){if(this.delegate=a,this.replay!==null){for(let r of this.replay)r(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,r){return this.delegate.createElement(a,r)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,r){this.delegate.appendChild(a,r)}insertBefore(a,r,e,i){this.delegate.insertBefore(a,r,e,i)}removeChild(a,r,e){this.delegate.removeChild(a,r,e)}selectRootElement(a,r){return this.delegate.selectRootElement(a,r)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,r,e,i){this.delegate.setAttribute(a,r,e,i)}removeAttribute(a,r,e){this.delegate.removeAttribute(a,r,e)}addClass(a,r){this.delegate.addClass(a,r)}removeClass(a,r){this.delegate.removeClass(a,r)}setStyle(a,r,e,i){this.delegate.setStyle(a,r,e,i)}removeStyle(a,r,e){this.delegate.removeStyle(a,r,e)}setProperty(a,r,e){this.shouldReplay(r)&&this.replay.push(i=>i.setProperty(a,r,e)),this.delegate.setProperty(a,r,e)}setValue(a,r){this.delegate.setValue(a,r)}listen(a,r,e){return this.shouldReplay(r)&&this.replay.push(i=>i.listen(a,r,e)),this.delegate.listen(a,r,e)}shouldReplay(a){return this.replay!==null&&a.startsWith(B3)}};function h4(c="animations"){return a4("NgAsyncAnimations"),X1([{provide:c4,useFactory:(a,r,e)=>new _3(a,r,e,c),deps:[t4,m4,e4]},{provide:K1,useValue:c==="noop"?"NoopAnimations":"BrowserAnimations"}])}var M4=[{path:"",loadChildren:()=>import("./chunk-4XTMOVOW.js").then(c=>c.HomeModule)}];var V4={providers:[p4(M4),h4()]};function C4(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),r.push.apply(r,e)}return r}function t(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?C4(Object(r),!0).forEach(function(e){k(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):C4(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function a1(c){"@babel/helpers - typeof";return a1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a1(c)}function D3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function d4(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function R3(c,a,r){return a&&d4(c.prototype,a),r&&d4(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function k(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function y1(c,a){return U3(c)||I3(c,a)||G4(c,a)||G3()}function k2(c){return E3(c)||q3(c)||G4(c)||W3()}function E3(c){if(Array.isArray(c))return C1(c)}function U3(c){if(Array.isArray(c))return c}function q3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function I3(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],i=!0,n=!1,s,o;try{for(r=r.call(c);!(i=(s=r.next()).done)&&(e.push(s.value),!(a&&e.length===a));i=!0);}catch(l){n=!0,o=l}finally{try{!i&&r.return!=null&&r.return()}finally{if(n)throw o}}return e}}function G4(c,a){if(c){if(typeof c=="string")return C1(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C1(c,a)}}function C1(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function W3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u4=function(){},A1={},j4={},X4=null,Y4={mark:u4,measure:u4};try{typeof window<"u"&&(A1=window),typeof document<"u"&&(j4=document),typeof MutationObserver<"u"&&(X4=MutationObserver),typeof performance<"u"&&(Y4=performance)}catch{}var j3=A1.navigator||{},g4=j3.userAgent,L4=g4===void 0?"":g4,Z=A1,L=j4,x4=X4,W2=Y4,K0=!!Z.document,X=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",$4=~L4.indexOf("MSIE")||~L4.indexOf("Trident/"),G2,j2,X2,Y2,$2,W="___FONT_AWESOME___",d1=16,K4="fa",Q4="svg-inline--fa",m2="data-fa-i2svg",u1="data-fa-pseudo-element",X3="data-fa-pseudo-element-pending",P1="data-prefix",F1="data-icon",b4="fontawesome-i2svg",Y3="async",$3=["HTML","HEAD","STYLE","SCRIPT"],J4=function(){try{return!0}catch{return!1}}(),g="classic",x="sharp",T1=[g,x];function y2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[g]}})}var x2=y2((G2={},k(G2,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),k(G2,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),G2)),b2=y2((j2={},k(j2,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(j2,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),j2)),N2=y2((X2={},k(X2,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(X2,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),X2)),K3=y2((Y2={},k(Y2,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(Y2,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Y2)),Q3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Z4="fa-layers-text",J3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Z3=y2(($2={},k($2,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k($2,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),$2)),c3=[1,2,3,4,5,6,7,8,9,10],c6=c3.concat([11,12,13,14,15,16,17,18,19,20]),a6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],f2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S2=new Set;Object.keys(b2[g]).map(S2.add.bind(S2));Object.keys(b2[x]).map(S2.add.bind(S2));var e6=[].concat(T1,k2(S2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",f2.GROUP,f2.SWAP_OPACITY,f2.PRIMARY,f2.SECONDARY]).concat(c3.map(function(c){return"".concat(c,"x")})).concat(c6.map(function(c){return"w-".concat(c)})),g2=Z.FontAwesomeConfig||{};function r6(c){var a=L.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function i6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(N4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],N4.forEach(function(c){var a=y1(c,2),r=a[0],e=a[1],i=i6(r6(r));i!=null&&(g2[e]=i)}));var N4,a3={styleDefault:"solid",familyDefault:"classic",cssPrefix:K4,replacementClass:Q4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};g2.familyPrefix&&(g2.cssPrefix=g2.familyPrefix);var C2=t(t({},a3),g2);C2.autoReplaceSvg||(C2.observeMutations=!1);var H={};Object.keys(a3).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(r){C2[c]=r,L2.forEach(function(e){return e(H)})},get:function(){return C2[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){C2.cssPrefix=a,L2.forEach(function(r){return r(H)})},get:function(){return C2.cssPrefix}});Z.FontAwesomeConfig=H;var L2=[];function n6(c){return L2.push(c),function(){L2.splice(L2.indexOf(c),1)}}var J=d1,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function s6(c){if(!(!c||!X)){var a=L.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=L.head.childNodes,e=null,i=r.length-1;i>-1;i--){var n=r[i],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=n)}return L.head.insertBefore(a,e),c}}var o6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function w2(){for(var c=12,a="";c-- >0;)a+=o6[Math.random()*62|0];return a}function d2(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function O1(c){return c.classList?d2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function e3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l6(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(e3(c[r]),'" ')},"").trim()}function i1(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function B1(c){return c.size!==I.size||c.x!==I.x||c.y!==I.y||c.rotate!==I.rotate||c.flipX||c.flipY}function f6(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(r/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(s," ").concat(o)},z={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:l,path:z}}function t6(c){var a=c.transform,r=c.width,e=r===void 0?d1:r,i=c.height,n=i===void 0?d1:i,s=c.startCentered,o=s===void 0?!1:s,l="";return o&&$4?l+="translate(".concat(a.x/J-e/2,"em, ").concat(a.y/J-n/2,"em) "):o?l+="translate(calc(-50% + ".concat(a.x/J,"em), calc(-50% + ").concat(a.y/J,"em)) "):l+="translate(".concat(a.x/J,"em, ").concat(a.y/J,"em) "),l+="scale(".concat(a.size/J*(a.flipX?-1:1),", ").concat(a.size/J*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var m6=`:root, :host {
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
}`;function r3(){var c=K4,a=Q4,r=H.cssPrefix,e=H.replacementClass,i=m6;if(r!==c||e!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");i=i.replace(n,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(o,".".concat(e))}return i}var S4=!1;function p1(){H.autoAddCss&&!S4&&(s6(r3()),S4=!0)}var z6={mixout:function(){return{dom:{css:r3,insertCss:p1}}},hooks:function(){return{beforeDOMElementCreation:function(){p1()},beforeI2svg:function(){p1()}}}},G=Z||{};G[W]||(G[W]={});G[W].styles||(G[W].styles={});G[W].hooks||(G[W].hooks={});G[W].shims||(G[W].shims=[]);var R=G[W],i3=[],H6=function c(){L.removeEventListener("DOMContentLoaded",c),e1=1,i3.map(function(a){return a()})},e1=!1;X&&(e1=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),e1||L.addEventListener("DOMContentLoaded",H6));function v6(c){X&&(e1?setTimeout(c,0):i3.push(c))}function A2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,i=c.children,n=i===void 0?[]:i;return typeof c=="string"?e3(c):"<".concat(a," ").concat(l6(e),">").concat(n.map(A2).join(""),"</").concat(a,">")}function w4(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var p6=function(a,r){return function(e,i,n,s){return a.call(r,e,i,n,s)}},h1=function(a,r,e,i){var n=Object.keys(a),s=n.length,o=i!==void 0?p6(r,i):r,l,z,f;for(e===void 0?(l=1,f=a[n[0]]):(l=0,f=e);l<s;l++)z=n[l],f=o(f,a[z],z,a);return f};function h6(c){for(var a=[],r=0,e=c.length;r<e;){var i=c.charCodeAt(r++);if(i>=55296&&i<=56319&&r<e){var n=c.charCodeAt(r++);(n&64512)==56320?a.push(((i&1023)<<10)+(n&1023)+65536):(a.push(i),r--)}else a.push(i)}return a}function g1(c){var a=h6(c);return a.length===1?a[0].toString(16):null}function M6(c,a){var r=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&r>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function k4(c){return Object.keys(c).reduce(function(a,r){var e=c[r],i=!!e.icon;return i?a[e.iconName]=e.icon:a[r]=e,a},{})}function L1(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,i=e===void 0?!1:e,n=k4(a);typeof R.hooks.addPack=="function"&&!i?R.hooks.addPack(c,k4(a)):R.styles[c]=t(t({},R.styles[c]||{}),n),c==="fas"&&L1("fa",a)}var K2,Q2,J2,h2=R.styles,V6=R.shims,C6=(K2={},k(K2,g,Object.values(N2[g])),k(K2,x,Object.values(N2[x])),K2),_1=null,n3={},s3={},o3={},l3={},f3={},d6=(Q2={},k(Q2,g,Object.keys(x2[g])),k(Q2,x,Object.keys(x2[x])),Q2);function u6(c){return~e6.indexOf(c)}function g6(c,a){var r=a.split("-"),e=r[0],i=r.slice(1).join("-");return e===c&&i!==""&&!u6(i)?i:null}var t3=function(){var a=function(n){return h1(h2,function(s,o,l){return s[l]=h1(o,n,{}),s},{})};n3=a(function(i,n,s){if(n[3]&&(i[n[3]]=s),n[2]){var o=n[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=s})}return i}),s3=a(function(i,n,s){if(i[s]=s,n[2]){var o=n[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=s})}return i}),f3=a(function(i,n,s){var o=n[2];return i[s]=s,o.forEach(function(l){i[l]=s}),i});var r="far"in h2||H.autoFetchSvg,e=h1(V6,function(i,n){var s=n[0],o=n[1],l=n[2];return o==="far"&&!r&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});o3=e.names,l3=e.unicodes,_1=n1(H.styleDefault,{family:H.familyDefault})};n6(function(c){_1=n1(c.styleDefault,{family:H.familyDefault})});t3();function D1(c,a){return(n3[c]||{})[a]}function L6(c,a){return(s3[c]||{})[a]}function t2(c,a){return(f3[c]||{})[a]}function m3(c){return o3[c]||{prefix:null,iconName:null}}function x6(c){var a=l3[c],r=D1("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function c2(){return _1}var R1=function(){return{prefix:null,iconName:null,rest:[]}};function n1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?g:r,i=x2[e][c],n=b2[e][c]||b2[e][i],s=c in R.styles?c:null;return n||s||null}var y4=(J2={},k(J2,g,Object.keys(N2[g])),k(J2,x,Object.keys(N2[x])),J2);function s1(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,i=e===void 0?!1:e,n=(a={},k(a,g,"".concat(H.cssPrefix,"-").concat(g)),k(a,x,"".concat(H.cssPrefix,"-").concat(x)),a),s=null,o=g;(c.includes(n[g])||c.some(function(z){return y4[g].includes(z)}))&&(o=g),(c.includes(n[x])||c.some(function(z){return y4[x].includes(z)}))&&(o=x);var l=c.reduce(function(z,f){var p=g6(H.cssPrefix,f);if(h2[f]?(f=C6[o].includes(f)?K3[o][f]:f,s=f,z.prefix=f):d6[o].indexOf(f)>-1?(s=f,z.prefix=n1(f,{family:o})):p?z.iconName=p:f!==H.replacementClass&&f!==n[g]&&f!==n[x]&&z.rest.push(f),!i&&z.prefix&&z.iconName){var M=s==="fa"?m3(z.iconName):{},u=t2(z.prefix,z.iconName);M.prefix&&(s=null),z.iconName=M.iconName||u||z.iconName,z.prefix=M.prefix||z.prefix,z.prefix==="far"&&!h2.far&&h2.fas&&!H.autoFetchSvg&&(z.prefix="fas")}return z},R1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===x&&(h2.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=t2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=c2()||"fas"),l}var b6=function(){function c(){D3(this,c),this.definitions={}}return R3(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){r.definitions[o]=t(t({},r.definitions[o]||{}),s[o]),L1(o,s[o]);var l=N2[g][o];l&&L1(l,s[o]),t3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(n){var s=i[n],o=s.prefix,l=s.iconName,z=s.icon,f=z[2];r[o]||(r[o]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(r[o][p]=z)}),r[o][l]=z}),r}}]),c}(),A4=[],M2={},V2={},N6=Object.keys(V2);function S6(c,a){var r=a.mixoutsTo;return A4=c,M2={},Object.keys(V2).forEach(function(e){N6.indexOf(e)===-1&&delete V2[e]}),A4.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(r[s]=i[s]),a1(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){r[s]||(r[s]={}),r[s][o]=i[s][o]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(s){M2[s]||(M2[s]=[]),M2[s].push(n[s])})}e.provides&&e.provides(V2)}),r}function x1(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];var n=M2[c]||[];return n.forEach(function(s){a=s.apply(null,[a].concat(e))}),a}function z2(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var i=M2[c]||[];i.forEach(function(n){n.apply(null,r)})}function j(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return V2[c]?V2[c].apply(null,a):void 0}function b1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||c2();if(a)return a=t2(r,a)||a,w4(z3.definitions,r,a)||w4(R.styles,r,a)}var z3=new b6,w6=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,z2("noAuto")},k6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(z2("beforeI2svg",a),j("pseudoElements2svg",a),j("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,v6(function(){A6({autoReplaceSvgRoot:r}),z2("watch",a)})}},y6={icon:function(a){if(a===null)return null;if(a1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:t2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=n1(a[0]);return{prefix:e,iconName:t2(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(Q3))){var i=s1(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||c2(),iconName:t2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var n=c2();return{prefix:n,iconName:t2(n,a)||a}}}},B={noAuto:w6,config:H,dom:k6,parse:y6,library:z3,findIconDefinition:b1,toHtml:A2},A6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?L:r;(Object.keys(R.styles).length>0||H.autoFetchSvg)&&X&&H.autoReplaceSvg&&B.dom.i2svg({node:e})};function o1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return A2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(X){var e=L.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function P6(c){var a=c.children,r=c.main,e=c.mask,i=c.attributes,n=c.styles,s=c.transform;if(B1(s)&&r.found&&!e.found){var o=r.width,l=r.height,z={x:o/l/2,y:.5};i.style=i1(t(t({},n),{},{"transform-origin":"".concat(z.x+s.x/16,"em ").concat(z.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function F6(c){var a=c.prefix,r=c.iconName,e=c.children,i=c.attributes,n=c.symbol,s=n===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(r):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},i),{},{id:s}),children:e}]}]}function E1(c){var a=c.icons,r=a.main,e=a.mask,i=c.prefix,n=c.iconName,s=c.transform,o=c.symbol,l=c.title,z=c.maskId,f=c.titleId,p=c.extra,M=c.watchable,u=M===void 0?!1:M,A=e.found?e:r,_=A.width,D=A.height,E=i==="fak",y=[H.replacementClass,n?"".concat(H.cssPrefix,"-").concat(n):""].filter(function(Y){return p.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(p.classes).join(" "),P={children:[],attributes:t(t({},p.attributes),{},{"data-prefix":i,"data-icon":n,class:y,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(D)})},U=E&&!~p.classes.indexOf("fa-fw")?{width:"".concat(_/D*16*.0625,"em")}:{};u&&(P.attributes[m2]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(f||w2())},children:[l]}),delete P.attributes.title);var T=t(t({},P),{},{prefix:i,iconName:n,main:r,mask:e,maskId:z,transform:s,symbol:o,styles:t(t({},U),p.styles)}),i2=e.found&&r.found?j("generateAbstractMask",T)||{children:[],attributes:{}}:j("generateAbstractIcon",T)||{children:[],attributes:{}},n2=i2.children,H1=i2.attributes;return T.children=n2,T.attributes=H1,o?F6(T):P6(T)}function P4(c){var a=c.content,r=c.width,e=c.height,i=c.transform,n=c.title,s=c.extra,o=c.watchable,l=o===void 0?!1:o,z=t(t(t({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});l&&(z[m2]="");var f=t({},s.styles);B1(i)&&(f.transform=t6({transform:i,startCentered:!0,width:r,height:e}),f["-webkit-transform"]=f.transform);var p=i1(f);p.length>0&&(z.style=p);var M=[];return M.push({tag:"span",attributes:z,children:[a]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function T6(c){var a=c.content,r=c.title,e=c.extra,i=t(t(t({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),n=i1(e.styles);n.length>0&&(i.style=n);var s=[];return s.push({tag:"span",attributes:i,children:[a]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}var M1=R.styles;function N1(c){var a=c[0],r=c[1],e=c.slice(4),i=y1(e,1),n=i[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(f2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(f2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(f2.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:r,icon:s}}var O6={found:!1,width:512,height:512};function B6(c,a){!J4&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function S1(c,a){var r=a;return a==="fa"&&H.styleDefault!==null&&(a=c2()),new Promise(function(e,i){var n={found:!1,width:512,height:512,icon:j("missingIconAbstract")||{}};if(r==="fa"){var s=m3(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&M1[a]&&M1[a][c]){var o=M1[a][c];return e(N1(o))}B6(c,a),e(t(t({},O6),{},{icon:H.showMissingIcons&&c?j("missingIconAbstract")||{}:{}}))})}var F4=function(){},w1=H.measurePerformance&&W2&&W2.mark&&W2.measure?W2:{mark:F4,measure:F4},u2='FA "6.5.2"',_6=function(a){return w1.mark("".concat(u2," ").concat(a," begins")),function(){return H3(a)}},H3=function(a){w1.mark("".concat(u2," ").concat(a," ends")),w1.measure("".concat(u2," ").concat(a),"".concat(u2," ").concat(a," begins"),"".concat(u2," ").concat(a," ends"))},U1={begin:_6,end:H3},Z2=function(){};function T4(c){var a=c.getAttribute?c.getAttribute(m2):null;return typeof a=="string"}function D6(c){var a=c.getAttribute?c.getAttribute(P1):null,r=c.getAttribute?c.getAttribute(F1):null;return a&&r}function R6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function E6(){if(H.autoReplaceSvg===!0)return c1.replace;var c=c1[H.autoReplaceSvg];return c||c1.replace}function U6(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function q6(c){return L.createElement(c)}function v3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?U6:q6:r;if(typeof c=="string")return L.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(s){i.setAttribute(s,c.attributes[s])});var n=c.children||[];return n.forEach(function(s){i.appendChild(v3(s,{ceFn:e}))}),i}function I6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var c1={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(i){r.parentNode.insertBefore(v3(i),r)}),r.getAttribute(m2)===null&&H.keepOriginalSource){var e=L.createComment(I6(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~O1(r).indexOf(H.replacementClass))return c1.replace(a);var i=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(o,l){return l===H.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",n.toNode.join(" "))}var s=e.map(function(o){return A2(o)}).join(`
`);r.setAttribute(m2,""),r.innerHTML=s}};function O4(c){c()}function p3(c,a){var r=typeof a=="function"?a:Z2;if(c.length===0)r();else{var e=O4;H.mutateApproach===Y3&&(e=Z.requestAnimationFrame||O4),e(function(){var i=E6(),n=U1.begin("mutate");c.map(i),n(),r()})}}var q1=!1;function h3(){q1=!0}function k1(){q1=!1}var r1=null;function B4(c){if(x4&&H.observeMutations){var a=c.treeCallback,r=a===void 0?Z2:a,e=c.nodeCallback,i=e===void 0?Z2:e,n=c.pseudoElementsCallback,s=n===void 0?Z2:n,o=c.observeMutationsRoot,l=o===void 0?L:o;r1=new x4(function(z){if(!q1){var f=c2();d2(z).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!T4(p.addedNodes[0])&&(H.searchPseudoElements&&s(p.target),r(p.target)),p.type==="attributes"&&p.target.parentNode&&H.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&T4(p.target)&&~a6.indexOf(p.attributeName))if(p.attributeName==="class"&&D6(p.target)){var M=s1(O1(p.target)),u=M.prefix,A=M.iconName;p.target.setAttribute(P1,u||f),A&&p.target.setAttribute(F1,A)}else R6(p.target)&&i(p.target)})}}),X&&r1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function W6(){r1&&r1.disconnect()}function G6(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,i){var n=i.split(":"),s=n[0],o=n.slice(1);return s&&o.length>0&&(e[s]=o.join(":").trim()),e},{})),r}function j6(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=s1(O1(c));return i.prefix||(i.prefix=c2()),a&&r&&(i.prefix=a,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=L6(i.prefix,c.innerText)||D1(i.prefix,g1(c.innerText))),!i.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function X6(c){var a=d2(c.attributes).reduce(function(i,n){return i.name!=="class"&&i.name!=="style"&&(i[n.name]=n.value),i},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return H.autoA11y&&(r?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(e||w2()):(a["aria-hidden"]="true",a.focusable="false")),a}function Y6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=j6(c),e=r.iconName,i=r.prefix,n=r.rest,s=X6(c),o=x1("parseNodeAttributes",{},c),l=a.styleParser?G6(c):[];return t({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:s}},o)}var $6=R.styles;function M3(c){var a=H.autoReplaceSvg==="nest"?_4(c,{styleParser:!1}):_4(c);return~a.extra.classes.indexOf(Z4)?j("generateLayersText",c,a):j("generateSvgReplacementMutation",c,a)}var a2=new Set;T1.map(function(c){a2.add("fa-".concat(c))});Object.keys(x2[g]).map(a2.add.bind(a2));Object.keys(x2[x]).map(a2.add.bind(a2));a2=k2(a2);function D4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();var r=L.documentElement.classList,e=function(p){return r.add("".concat(b4,"-").concat(p))},i=function(p){return r.remove("".concat(b4,"-").concat(p))},n=H.autoFetchSvg?a2:T1.map(function(f){return"fa-".concat(f)}).concat(Object.keys($6));n.includes("fa")||n.push("fa");var s=[".".concat(Z4,":not([").concat(m2,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(m2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=d2(c.querySelectorAll(s))}catch{}if(o.length>0)e("pending"),i("complete");else return Promise.resolve();var l=U1.begin("onTree"),z=o.reduce(function(f,p){try{var M=M3(p);M&&f.push(M)}catch(u){J4||u.name==="MissingIcon"&&console.error(u)}return f},[]);return new Promise(function(f,p){Promise.all(z).then(function(M){p3(M,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),l(),f()})}).catch(function(M){l(),p(M)})})}function K6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;M3(c).then(function(r){r&&p3([r],a)})}function Q6(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:b1(a||{}),i=r.mask;return i&&(i=(i||{}).icon?i:b1(i||{})),c(e,t(t({},r),{},{mask:i}))}}var J6=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,i=e===void 0?I:e,n=r.symbol,s=n===void 0?!1:n,o=r.mask,l=o===void 0?null:o,z=r.maskId,f=z===void 0?null:z,p=r.title,M=p===void 0?null:p,u=r.titleId,A=u===void 0?null:u,_=r.classes,D=_===void 0?[]:_,E=r.attributes,y=E===void 0?{}:E,P=r.styles,U=P===void 0?{}:P;if(a){var T=a.prefix,i2=a.iconName,n2=a.icon;return o1(t({type:"icon"},a),function(){return z2("beforeDOMElementCreation",{iconDefinition:a,params:r}),H.autoA11y&&(M?y["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(A||w2()):(y["aria-hidden"]="true",y.focusable="false")),E1({icons:{main:N1(n2),mask:l?N1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:i2,transform:t(t({},I),i),symbol:s,title:M,maskId:f,titleId:A,extra:{attributes:y,styles:U,classes:D}})})}},Z6={mixout:function(){return{icon:Q6(J6)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=D4,r.nodeCallback=K6,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,i=e===void 0?L:e,n=r.callback,s=n===void 0?function(){}:n;return D4(i,s)},a.generateSvgReplacementMutation=function(r,e){var i=e.iconName,n=e.title,s=e.titleId,o=e.prefix,l=e.transform,z=e.symbol,f=e.mask,p=e.maskId,M=e.extra;return new Promise(function(u,A){Promise.all([S1(i,o),f.iconName?S1(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var D=y1(_,2),E=D[0],y=D[1];u([r,E1({icons:{main:E,mask:y},prefix:o,iconName:i,transform:l,symbol:z,maskId:p,title:n,titleId:s,extra:M,watchable:!0})])}).catch(A)})},a.generateAbstractIcon=function(r){var e=r.children,i=r.attributes,n=r.main,s=r.transform,o=r.styles,l=i1(o);l.length>0&&(i.style=l);var z;return B1(s)&&(z=j("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),e.push(z||n.icon),{children:e,attributes:i}}}},c0={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,n=i===void 0?[]:i;return o1({type:"layer"},function(){z2("beforeDOMElementCreation",{assembler:r,params:e});var s=[];return r(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(k2(n)).join(" ")},children:s}]})}}}},a0={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,n=i===void 0?null:i,s=e.classes,o=s===void 0?[]:s,l=e.attributes,z=l===void 0?{}:l,f=e.styles,p=f===void 0?{}:f;return o1({type:"counter",content:r},function(){return z2("beforeDOMElementCreation",{content:r,params:e}),T6({content:r.toString(),title:n,extra:{attributes:z,styles:p,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(k2(o))}})})}}}},e0={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,n=i===void 0?I:i,s=e.title,o=s===void 0?null:s,l=e.classes,z=l===void 0?[]:l,f=e.attributes,p=f===void 0?{}:f,M=e.styles,u=M===void 0?{}:M;return o1({type:"text",content:r},function(){return z2("beforeDOMElementCreation",{content:r,params:e}),P4({content:r,transform:t(t({},I),n),title:o,extra:{attributes:p,styles:u,classes:["".concat(H.cssPrefix,"-layers-text")].concat(k2(z))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var i=e.title,n=e.transform,s=e.extra,o=null,l=null;if($4){var z=parseInt(getComputedStyle(r).fontSize,10),f=r.getBoundingClientRect();o=f.width/z,l=f.height/z}return H.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([r,P4({content:r.innerHTML,width:o,height:l,transform:n,title:i,extra:s,watchable:!0})])}}},r0=new RegExp('"',"ug"),R4=[1105920,1112319];function i0(c){var a=c.replace(r0,""),r=M6(a,0),e=r>=R4[0]&&r<=R4[1],i=a.length===2?a[0]===a[1]:!1;return{value:g1(i?a[0]:a),isSecondary:e||i}}function E4(c,a){var r="".concat(X3).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(r)!==null)return e();var n=d2(c.children),s=n.filter(function(n2){return n2.getAttribute(u1)===a})[0],o=Z.getComputedStyle(c,a),l=o.getPropertyValue("font-family").match(J3),z=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(s&&!l)return c.removeChild(s),e();if(l&&f!=="none"&&f!==""){var p=o.getPropertyValue("content"),M=~["Sharp"].indexOf(l[2])?x:g,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?b2[M][l[2].toLowerCase()]:Z3[M][z],A=i0(p),_=A.value,D=A.isSecondary,E=l[0].startsWith("FontAwesome"),y=D1(u,_),P=y;if(E){var U=x6(_);U.iconName&&U.prefix&&(y=U.iconName,u=U.prefix)}if(y&&!D&&(!s||s.getAttribute(P1)!==u||s.getAttribute(F1)!==P)){c.setAttribute(r,P),s&&c.removeChild(s);var T=Y6(),i2=T.extra;i2.attributes[u1]=a,S1(y,u).then(function(n2){var H1=E1(t(t({},T),{},{icons:{main:n2,mask:R1()},prefix:u,iconName:P,extra:i2,watchable:!0})),Y=L.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(Y,c.firstChild):c.appendChild(Y),Y.outerHTML=H1.map(function(O3){return A2(O3)}).join(`
`),c.removeAttribute(r),e()}).catch(i)}else e()}else e()})}function n0(c){return Promise.all([E4(c,"::before"),E4(c,"::after")])}function s0(c){return c.parentNode!==document.head&&!~$3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(u1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function U4(c){if(X)return new Promise(function(a,r){var e=d2(c.querySelectorAll("*")).filter(s0).map(n0),i=U1.begin("searchPseudoElements");h3(),Promise.all(e).then(function(){i(),k1(),a()}).catch(function(){i(),k1(),r()})})}var o0={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=U4,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,i=e===void 0?L:e;H.searchPseudoElements&&U4(i)}}},q4=!1,l0={mixout:function(){return{dom:{unwatch:function(){h3(),q4=!0}}}},hooks:function(){return{bootstrap:function(){B4(x1("mutationObserverCallbacks",{}))},noAuto:function(){W6()},watch:function(r){var e=r.observeMutationsRoot;q4?k1():B4(x1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},I4=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var n=i.toLowerCase().split("-"),s=n[0],o=n.slice(1).join("-");if(s&&o==="h")return e.flipX=!0,e;if(s&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(s){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},r)},f0={mixout:function(){return{parse:{transform:function(r){return I4(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-transform");return i&&(r.transform=I4(i)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,i=r.transform,n=r.containerWidth,s=r.iconWidth,o={transform:"translate(".concat(n/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),z="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(l," ").concat(z," ").concat(f)},M={transform:"translate(".concat(s/2*-1," -256)")},u={outer:o,inner:p,path:M};return{tag:"g",attributes:t({},u.outer),children:[{tag:"g",attributes:t({},u.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:t(t({},e.icon.attributes),u.path)}]}]}}}},V1={x:0,y:0,width:"100%",height:"100%"};function W4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function t0(c){return c.tag==="g"?c.children:[c]}var m0={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-mask"),n=i?s1(i.split(" ").map(function(s){return s.trim()})):R1();return n.prefix||(n.prefix=c2()),r.mask=n,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,i=r.attributes,n=r.main,s=r.mask,o=r.maskId,l=r.transform,z=n.width,f=n.icon,p=s.width,M=s.icon,u=f6({transform:l,containerWidth:p,iconWidth:z}),A={tag:"rect",attributes:t(t({},V1),{},{fill:"white"})},_=f.children?{children:f.children.map(W4)}:{},D={tag:"g",attributes:t({},u.inner),children:[W4(t({tag:f.tag,attributes:t(t({},f.attributes),u.path)},_))]},E={tag:"g",attributes:t({},u.outer),children:[D]},y="mask-".concat(o||w2()),P="clip-".concat(o||w2()),U={tag:"mask",attributes:t(t({},V1),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,E]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:t0(M)},U]};return e.push(T,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(y,")")},V1)}),{children:e,attributes:i}}}},z0={provides:function(a){var r=!1;Z.matchMedia&&(r=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:t(t({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=t(t({},n),{},{attributeName:"opacity"}),o={tag:"circle",attributes:t(t({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||o.children.push({tag:"animate",attributes:t(t({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:t(t({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:t(t({},s),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:t(t({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},H0={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-symbol"),n=i===null?!1:i===""?!0:i;return r.symbol=n,r}}}},v0=[z6,Z6,c0,a0,e0,o0,l0,f0,m0,z0,H0];S6(v0,{mixoutsTo:B});var Q0=B.noAuto,J0=B.config,Z0=B.library,c8=B.dom,V3=B.parse,a8=B.findIconDefinition,e8=B.toHtml,C3=B.icon,r8=B.layer,p0=B.text,h0=B.counter;var M0=["*"],V0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},C0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},d0=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},u0=c=>c.prefix!==void 0&&c.iconName!==void 0,g0=(c,a)=>u0(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},L0=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=s2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),x0=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let n of i.icon[2])typeof n=="string"&&(this.definitions[i.prefix][n]=i)}}addIconPacks(...e){for(let i of e){let n=Object.keys(i).map(s=>i[s]);this.addIcons(...n)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=s2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),b0=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=H2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[B2]});let c=a;return c})(),N0=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(S(v2),S(q))},a.\u0275cmp=b({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[B2,N],ngContentSelectors:M0,decls:1,vars:0,template:function(i,n){i&1&&(s4(),o4(0))},encapsulation:2});let c=a;return c})(),e2=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,n,s,o){this.sanitizer=e,this.config=i,this.iconLibrary=n,this.stackItem=s,this.classes=[],o!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){C0();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(i);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=g0(e,this.config.defaultPrefix);if("icon"in i)return i;let n=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return n??(V0(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?V3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...d0(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let n=C3(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(S(H4),S(L0),S(x0),S(b0,8),S(N0,8))},a.\u0275cmp=b({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,n){i&2&&(n4("innerHTML",n.renderedIconHTML,Q1),r4("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[B2,N],decls:0,vars:0,template:function(i,n){},encapsulation:2});let c=a;return c})();var r2=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=j1({type:a}),a.\u0275inj=W1({});let c=a;return c})();var d3={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]};var f1={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var S0={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},t1=S0;var w0={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},m1=w0;var u3={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var g3={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var L3={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var z1=(()=>{let a=class a{constructor(e,i){this.elementRef=e,this.renderer=i}onWindowScroll(){let e=this.elementRef.nativeElement;window.scrollY>0?this.renderer.addClass(e,"translucent"):this.renderer.removeClass(e,"translucent")}};a.\u0275fac=function(i){return new(i||a)(S(q),S(v2))},a.\u0275dir=H2({type:a,selectors:[["","directiveScrollOpacity",""]],hostBindings:function(i,n){i&1&&w("scroll",function(){return n.onWindowScroll()},!1,D2)},standalone:!0});let c=a;return c})();var x3=(()=>{let a=class a{constructor(e,i){this.elementRef=e,this.renderer=i}onMouseEnter(){this.renderer.addClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}onMouseLeave(){this.renderer.removeClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}};a.\u0275fac=function(i){return new(i||a)(S(q),S(v2))},a.\u0275dir=H2({type:a,selectors:[["","directiveDropdownHover",""]],hostBindings:function(i,n){i&1&&w("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()})},standalone:!0});let c=a;return c})();var k0=c=>({"margin-bottom.px":c}),b3=(()=>{let a=class a{constructor(e){this.elementRef=e,this.faSearch=m1,this.faUser=d3,this.faShoppingCart=t1,this.faChevronRight=L3,this.faBars=f1,this.navbarHeight=0,T2(window,"resize").pipe(O2(null),F2(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(n=>{n!=0&&(this.navbarHeight=n)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}};a.\u0275fac=function(i){return new(i||a)(S(q))},a.\u0275cmp=b({type:a,selectors:[["app-navbar"]],standalone:!0,features:[N],decls:175,vars:10,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-desktop"],[1,"wrapper-left"],[1,"top-links"],["href","",1,"link"],[1,"link-wrapper"],["directiveDropdownHover","",1,"dropdown","dropdown-w-icons"],["href","",1,"dropdown-link"],[1,"dropdown-link-wrapper"],[3,"icon"],[1,"dropdown","sub-dropdown"],["href","",1,"sub-dropdown-link"],[1,"sub-dropdown-link-wrapper"],["directiveDropdownHover","",1,"dropdown"],[1,"wrapper-center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"wrapper-right"]],template:function(i,n){i&1&&(v(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"ul")(5,"li")(6,"a",4)(7,"div",5)(8,"span"),h(9,"Shop"),m()(),v(10,"ul",6)(11,"li")(12,"a",7)(13,"div",8)(14,"span"),h(15,"Coffee "),m(),d(16,"fa-icon",9),m()(),v(17,"ul",10)(18,"li")(19,"a",11)(20,"div",12)(21,"span"),h(22,"Classic Coffees"),m()()()(),v(23,"li")(24,"a",11)(25,"div",12)(26,"span"),h(27,"Single Origins"),m()()()()()(),v(28,"li")(29,"a",7)(30,"div",8)(31,"span"),h(32,"Coffee Club"),m(),d(33,"fa-icon",9),m()(),v(34,"ul",10)(35,"li")(36,"a",11)(37,"div",12)(38,"span"),h(39,"Join The Club"),m()()()(),v(40,"li")(41,"a",11)(42,"div",12)(43,"span"),h(44,"Manage Your Subscription"),m()()()()()(),v(45,"li")(46,"a",7)(47,"div",8)(48,"span"),h(49,"Gifts "),m(),d(50,"fa-icon",9),m()(),v(51,"ul",10)(52,"li")(53,"a",11)(54,"div",12)(55,"span"),h(56,"Gift a Coffee Subscription"),m()()()(),v(57,"li")(58,"a",11)(59,"div",12)(60,"span"),h(61,"Gift a Gift Card"),m()()()()()(),v(62,"li")(63,"a",7)(64,"div",8)(65,"span"),h(66,"Goods "),m(),d(67,"fa-icon",9),m()(),v(68,"ul",10)(69,"li")(70,"a",11)(71,"div",12)(72,"span"),h(73,"Brewing Equipment"),m()()()(),v(74,"li")(75,"a",11)(76,"div",12)(77,"span"),h(78,"Merchandise"),m()()()()()(),v(79,"li")(80,"a",7)(81,"div",8)(82,"span"),h(83,"Shop All"),m()()()()()()(),v(84,"li")(85,"a",4)(86,"div",5)(87,"span"),h(88,"Learn"),m()(),v(89,"ul",13)(90,"li")(91,"a",7)(92,"div",8)(93,"span"),h(94,"Blog"),m()()()(),v(95,"li")(96,"a",7)(97,"div",8)(98,"span"),h(99,"Contact Us"),m()()()(),v(100,"li")(101,"a",7)(102,"div",8)(103,"span"),h(104,"FAQ"),m()()()()()()(),v(105,"li")(106,"a",4)(107,"div",5)(108,"span"),h(109,"Wholesale"),m()(),v(110,"ul",13)(111,"li")(112,"a",7)(113,"div",8)(114,"span"),h(115,"Login"),m()()()(),v(116,"li")(117,"a",7)(118,"div",8)(119,"span"),h(120,"Wholesale Inquiry"),m()()()()()()(),v(121,"li")(122,"a",4)(123,"div",5)(124,"span"),h(125,"Connect"),m()(),v(126,"ul",13)(127,"li")(128,"a",7)(129,"div",8)(130,"span"),h(131,"About Us"),m()()()(),v(132,"li")(133,"a",7)(134,"div",8)(135,"span"),h(136,"Cafe"),m()()()(),v(137,"li")(138,"a",7)(139,"div",8)(140,"span"),h(141,"Careers"),m()()()(),v(142,"li")(143,"a",7)(144,"div",8)(145,"span"),h(146,"Press"),m()()()()()()()()()(),v(147,"div",14)(148,"div",15)(149,"h1",16)(150,"a",17)(151,"div",18),d(152,"img",19),m()(),d(153,"a",20),m()()(),v(154,"div",21)(155,"div",3)(156,"ul")(157,"li")(158,"a",4)(159,"div",5),d(160,"fa-icon",9),v(161,"span"),h(162,"Search"),m()()()(),v(163,"li")(164,"a",4)(165,"div",5),d(166,"fa-icon",9),v(167,"span"),h(168,"Account"),m()()()(),v(169,"li")(170,"a",4)(171,"div",5),d(172,"fa-icon",9),v(173,"span"),h(174,"Cart"),m()()()()()()()()()),i&2&&(C("ngStyle",Q(8,k0,-n.navbarHeight)),V(16),C("icon",n.faChevronRight),V(17),C("icon",n.faChevronRight),V(17),C("icon",n.faChevronRight),V(17),C("icon",n.faChevronRight),V(93),C("icon",n.faSearch),V(6),C("icon",n.faUser),V(6),C("icon",n.faShoppingCart))},dependencies:[F,I2,r2,e2,z1,x3],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-desktop[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;position:relative;margin:0 15px;font-family:custom-font;font-size:14px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]{display:flex;flex:1 1 100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:inline-block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%]{visibility:visible;opacity:1}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{visibility:hidden;display:grid;opacity:0;margin-top:15px;position:absolute;grid-template-columns:1fr;padding:20px;min-width:150px;max-width:300px;background-color:var(--primary-bg-color);transition:opacity .3s,visibility .3s;cursor:default}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:7px 0;width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{transition:color .3s;position:relative}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-bottom:4px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]{flex-basis:100px;align-self:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2800px;max-height:2800px;width:100px;height:100px;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;justify-content:flex-end}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;transition:color .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:18px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-dropdown[_ngcontent-%COMP%]{opacity:1!important;visibility:visible!important}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:9px}.sub-dropdown[_ngcontent-%COMP%]{position:absolute;left:100%;top:-20px;margin-top:0!important;margin-left:20px!important;visibility:hidden!important;opacity:0!important;transition:opacity .3s,visibility .3s;cursor:default}.sub-dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color)!important}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:0%!important}']});let c=a;return c})();var N3=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-footer"]],standalone:!0,features:[N],decls:2,vars:0,template:function(i,n){i&1&&(v(0,"p"),h(1,"footer works!"),m())}});let c=a;return c})();var S3=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-top-announcement"]],standalone:!0,features:[N],decls:3,vars:0,consts:[[1,"announcement-wrapper"]],template:function(i,n){i&1&&(v(0,"div",0)(1,"span"),h(2,"Free shipping for all orders over $50"),m()())},styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.announcement-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--announcement-bg-color)}.announcement-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color);padding:10px 30px;font-size:16px;font-family:custom-font}']});let c=a;return c})();function y0(c,a){if(c&1){let r=i4();v(0,"div",3)(1,"button",4),w("click",function(){Y1(r);let i=K().index,n=K();return $1(n.toggleListButton(n.elementNumber+i+1))}),d(2,"fa-icon",5),m()()}if(c&2){let r=K().index,e=K();V(2),p2("active",e.toggleListButtonArray[e.elementNumber+r+1]),C("icon",e.faChevronDown)}}function A0(c,a){if(c&1&&(o2(0),v(1,"ul",11)(2,"li",12)(3,"div",9)(4,"a",2),h(5),m()()()(),l2()),c&2){let r=a.$implicit,e=K().index,i=K();V(),p2("active",i.toggleListButtonArray[i.elementNumber+e+1]),V(4),R2("",r.subListTitle," ")}}function P0(c,a){if(c&1&&(o2(0),v(1,"ul",7)(2,"li",8)(3,"div",9)(4,"a",2),h(5),m(),$(6,y0,3,3,"div",10),m()(),$(7,A0,6,3,"ng-container",6),m(),l2()),c&2){let r=a.$implicit,e=K();V(),p2("active",e.toggleListButtonArray[e.elementNumber]),V(4),R2(" ",r.subTitle," "),V(),C("ngIf",r.subList),V(),C("ngForOf",r.subList)}}var w3=(()=>{let a=class a{constructor(){this.faChevronDown=u3,this.toggleListButtonArray=[]}toggleListButton(e){this.toggleListButtonArray[e]=!this.toggleListButtonArray[e]}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-list-item"]],inputs:{data:"data",elementNumber:"elementNumber"},standalone:!0,features:[N],decls:8,vars:5,consts:[[1,"side-menu-item-container"],[1,"side-menu-item","first"],["href",""],[1,"list-toggle"],[3,"click"],[3,"icon"],[4,"ngFor","ngForOf"],[1,"side-menu-sublist"],[1,"side-menu-sublist-item"],[1,"side-menu-item"],["class","list-toggle",4,"ngIf"],[1,"side-menu-sub-sublist"],[1,"side-menu-sub-sublist-item"]],template:function(i,n){i&1&&(v(0,"li",0)(1,"div",1)(2,"a",2),h(3),m(),v(4,"div",3)(5,"button",4),w("click",function(){return n.toggleListButton(n.elementNumber)}),d(6,"fa-icon",5),m()()(),$(7,P0,8,5,"ng-container",6),m()),i&2&&(V(3),R2(" ",n.data.title," "),V(3),p2("active",n.toggleListButtonArray[n.elementNumber]),C("icon",n.faChevronDown),V(),C("ngForOf",n.data.dropdownItemList))},dependencies:[F,U2,q2,r2,e2],styles:[".side-menu-item-container[_ngcontent-%COMP%]{padding:0 20px;height:auto;overflow:hidden}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;padding:15px 0;list-style:none}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--primary-bg-color);text-decoration:none;font-family:custom-font!important;font-size:18px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   .list-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;border:none;background-color:inherit}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item.first[_ngcontent-%COMP%]{position:relative;background-color:var(--primary-text-color);z-index:3;padding:20px 0;border-bottom:solid 1px rgba(166,151,143,.25);margin-bottom:1px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]{list-style:none;padding-left:10px;z-index:1}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]   .side-menu-sublist-item[_ngcontent-%COMP%]{margin:0}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]   .side-menu-sublist-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sub-sublist[_ngcontent-%COMP%]{overflow:hidden;list-style:none;z-index:99999;padding-left:20px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sub-sublist[_ngcontent-%COMP%]   .side-menu-sub-sublist-item[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}fa-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;transition:transform .5s}fa-icon.active[_ngcontent-%COMP%]{transform:rotate(180deg)}.side-menu-sublist[_ngcontent-%COMP%], .side-menu-sub-sublist[_ngcontent-%COMP%]{max-height:0;transition:max-height .3s ease-out}.side-menu-sublist.active[_ngcontent-%COMP%], .side-menu-sub-sublist.active[_ngcontent-%COMP%]{max-height:1000px;transition:max-height .5s ease-in}"]});let c=a;return c})();var k3=(()=>{let a=class a{constructor(){}getItemList(){return[{title:"Shop",dropdownItemList:[{subTitle:"Coffee",subList:[{subListTitle:"Classic Coffees"},{subListTitle:"Single Origins"}]},{subTitle:"Coffee Clubs",subList:[{subListTitle:"Join the Club"},{subListTitle:"Manage Your Subscription"}]},{subTitle:"Gifts",subList:[{subListTitle:"Gift a Coffee Subscription"},{subListTitle:"Gift a Gift Card"}]},{subTitle:"Goods",subList:[{subListTitle:"Brewing Equipment"},{subListTitle:"Merchandise"}]},{subTitle:"Shop All"}]},{title:"Learn",dropdownItemList:[{subTitle:"Blog"},{subTitle:"Contact Us"},{subTitle:"FAQ"}]},{title:"Wholesale",dropdownItemList:[{subTitle:"Login"},{subTitle:"Wholesale Inquiry"},{subTitle:"FAQ"}]},{title:"Connect",dropdownItemList:[{subTitle:"About Us"},{subTitle:"Cafe"},{subTitle:"Carrers"},{subTitle:"Press"}]}]}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=s2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var T0=c=>({show:c});function O0(c,a){if(c&1&&(o2(0),d(1,"app-list-item",7),l2()),c&2){let r=a.$implicit,e=a.index;V(),C("data",r)("elementNumber",e)}}var y3=(()=>{let a=class a{constructor(e){this._itemService=e,this.toggleMenuRequest=new _2,this.showSideMenu=!1,this.fa=g3,this.toggleListButtonArray=[],this.itemList=[]}ngOnInit(){this.itemList=this._itemService.getItemList()}toggleMenu(){this.showSideMenu=!1,this.toggleMenuRequest.emit()}};a.\u0275fac=function(i){return new(i||a)(S(k3))},a.\u0275cmp=b({type:a,selectors:[["app-side-mobile-menu"]],inputs:{showSideMenu:"showSideMenu"},outputs:{toggleMenuRequest:"toggleMenuRequest"},standalone:!0,features:[N],decls:9,vars:5,consts:[[1,"side-menu",3,"ngClass"],[1,"side-menu-logo"],[3,"click"],[3,"icon"],[1,"side-menu-main-list"],[4,"ngFor","ngForOf"],[1,"side-menu-footer"],[3,"data","elementNumber"]],template:function(i,n){i&1&&(v(0,"div",0)(1,"div",1)(2,"button",2),w("click",function(){return n.toggleMenu()}),d(3,"fa-icon",3),m()(),v(4,"ul",4),$(5,O0,2,2,"ng-container",5),m(),v(6,"div",6)(7,"button",2),w("click",function(){return n.toggleMenu()}),h(8,"Cerrar men\xFA"),m()()()),i&2&&(C("ngClass",Q(3,T0,n.showSideMenu)),V(3),C("icon",n.fa),V(2),C("ngForOf",n.itemList))},dependencies:[F,E2,U2,w3,r2,e2],styles:[".side-menu[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:90%;background-color:var(--primary-text-color);z-index:9999;transition:transform .3s ease;transform:translate(-110%);overflow:auto}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;overflow:auto;position:sticky;justify-content:flex-end;z-index:5;width:100%;background-color:transparent;height:6%;top:0}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;border:none;padding:0}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:0 15px;font-size:35px}.side-menu[_ngcontent-%COMP%]   .side-menu-main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;position:relative;width:100%;min-height:88%;list-style:none;padding:0;margin:0 0 auto}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]{z-index:5;width:100%;background-color:inherit;height:calc(6% - 2px);display:flex;flex-wrap:wrap;overflow:auto;position:sticky;bottom:0;border-top:solid 2px rgb(166,151,143)}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;border:none;padding:0}.show[_ngcontent-%COMP%]{transform:translate(0)}"]});let c=a;return c})();var B0=c=>({show:c}),A3=(()=>{let a=class a{constructor(){this.toggleSearchMenuRequest=new _2,this.showSideSearchMenu=!1}toggleSearchMenu(){this.showSideSearchMenu=!1,this.toggleSearchMenuRequest.emit()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-side-mobile-search"]],inputs:{showSideSearchMenu:"showSideSearchMenu"},outputs:{toggleSearchMenuRequest:"toggleSearchMenuRequest"},standalone:!0,features:[N],decls:3,vars:3,consts:[[1,"side-menu-search",3,"ngClass"],[3,"click"]],template:function(i,n){i&1&&(v(0,"div",0)(1,"button",1),w("click",function(){return n.toggleSearchMenu()}),h(2,"Cerrar men\xFA SEARCH"),m()()),i&2&&C("ngClass",Q(1,B0,n.showSideSearchMenu))},dependencies:[F,E2],styles:[".side-menu-search[_ngcontent-%COMP%]{position:fixed;top:0;right:0;height:100%;width:90%;background-color:#fff;z-index:9999;transition:transform .3s ease;transform:translate(110%)}.show[_ngcontent-%COMP%]{transform:translate(0)}"]});let c=a;return c})();var _0=c=>({"margin-bottom.px":c}),P3=(()=>{let a=class a{constructor(e){this.elementRef=e,this.faSearch=m1,this.faShoppingCart=t1,this.faBars=f1,this.navbarHeight=0,this.showSideMenu=!0,this.showSideSearchMenu=!1,T2(window,"resize").pipe(O2(null),F2(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(n=>{n!=0&&(this.navbarHeight=n)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}toggleSideMenu(){this.showSideMenu=!this.showSideMenu}toggleSearchSideMenu(){this.showSideSearchMenu=!this.showSideSearchMenu}};a.\u0275fac=function(i){return new(i||a)(S(q))},a.\u0275cmp=b({type:a,selectors:[["app-navbar-mobile"]],standalone:!0,features:[N],decls:22,vars:8,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-mobile"],[1,"wrapper-padded"],[1,"table-grid-container"],[1,"grid-item-container","left"],[1,"grid-item"],[3,"click"],[3,"icon"],[1,"grid-item-container","center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"grid-item-container","right"],[3,"toggleMenuRequest","showSideMenu"],[3,"toggleSearchMenuRequest","showSideSearchMenu"]],template:function(i,n){i&1&&(v(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"button",6),w("click",function(){return n.toggleSideMenu()}),d(7,"fa-icon",7),m()()(),v(8,"div",8)(9,"div",9)(10,"h1",10)(11,"a",11)(12,"div",12),d(13,"img",13),m()(),d(14,"a",14),m()()(),v(15,"div",15)(16,"div",5)(17,"button",6),w("click",function(){return n.toggleSearchSideMenu()}),d(18,"fa-icon",7),m(),d(19,"fa-icon",7),m()()()()()(),v(20,"app-side-mobile-menu",16),w("toggleMenuRequest",function(){return n.toggleSideMenu()}),m(),v(21,"app-side-mobile-search",17),w("toggleSearchMenuRequest",function(){return n.toggleSearchSideMenu()}),m()),i&2&&(C("ngStyle",Q(6,_0,-n.navbarHeight)),V(7),C("icon",n.faBars),V(11),C("icon",n.faSearch),V(),C("icon",n.faShoppingCart),V(),C("showSideMenu",n.showSideMenu),V(),C("showSideSearchMenu",n.showSideSearchMenu))},dependencies:[F,I2,r2,e2,z1,y3,A3],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:fixed;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]{padding:0 30px;position:relative;margin:0 auto}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]{display:table;table-layout:fixed;width:100%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container[_ngcontent-%COMP%]{display:table-cell;float:none;vertical-align:middle;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]{width:50%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}@media screen and (max-width: 768px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}@media screen and (max-width: 425px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}']});let c=a;return c})();function D0(c,a){c&1&&(o2(0),d(1,"app-navbar-mobile"),l2())}function R0(c,a){c&1&&d(0,"app-navbar")}var F3=(()=>{let a=class a{constructor(){this.isMobile=!1,this.checkIfMobile()}onResize(){this.checkIfMobile()}checkIfMobile(){this.isMobile=window.innerWidth<=990}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-layout"]],hostBindings:function(i,n){i&1&&w("resize",function(o){return n.onResize(o)},!1,D2)},standalone:!0,features:[N],decls:8,vars:2,consts:[["desktopNavbar",""],[4,"ngIf","ngIfElse"]],template:function(i,n){if(i&1&&(v(0,"main"),d(1,"app-top-announcement"),$(2,D0,2,0,"ng-container",1)(3,R0,1,0,"ng-template",null,0,f4),v(5,"div"),d(6,"router-outlet"),m(),d(7,"app-footer"),m()),i&2){let s=l4(4);V(2),C("ngIf",n.isMobile)("ngIfElse",s)}},dependencies:[F,q2,b3,N3,v4,S3,P3],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1000;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}']});let c=a;return c})();var T3=(()=>{let a=class a{constructor(){this.title="coffee-shop"}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-root"]],standalone:!0,features:[N],decls:1,vars:0,template:function(i,n){i&1&&d(0,"app-layout")},dependencies:[F,F3]});let c=a;return c})();z4(T3,V4).catch(c=>console.error(c));
