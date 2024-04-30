import{a as r4,b as i4,c as n4,d as s4,e as l4}from"./chunk-YGWQYQ3Q.js";import{$a as b,Aa as k,Ba as S,Ca as U1,Da as q1,Ea as I1,Fa as l2,Ga as W1,H as S2,Ha as G1,L as T1,M as H2,N as O1,Na as j1,Oa as X1,Pa as L,Qa as p,Ra as v,S as B1,Sa as u,Ta as Y1,Ua as $1,Va as K1,W as x,Wa as P,X as D1,Xa as Q1,Y as s2,Ya as J1,Z as R1,Za as Z1,_a as h,ab as $,ba as w2,bb as c4,fa as q,ga as k2,la as _1,ob as a4,p as b2,v as N2,vb as A2,wb as e4,xa as E1,xb as P2,ya as y2,yb as B}from"./chunk-JDI6MU6E.js";var b3="@",N3=(()=>{let a=class a{constructor(e,i,n,s,l){this.doc=e,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=B1(q1,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-SUBHQWS6.js")).catch(i=>{throw new T1(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,i){let n=this.delegate.createRenderer(e,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new n1(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let o=l.createRenderer(e,i);s.use(o)}).catch(l=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};a.\u0275fac=function(i){U1()},a.\u0275prov=H2({token:a,factory:a.\u0275fac});let c=a;return c})(),n1=class{constructor(a){this.delegate=a,this.replay=[],this.\u0275type=1}use(a){if(this.delegate=a,this.replay!==null){for(let r of this.replay)r(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,r){return this.delegate.createElement(a,r)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,r){this.delegate.appendChild(a,r)}insertBefore(a,r,e,i){this.delegate.insertBefore(a,r,e,i)}removeChild(a,r,e){this.delegate.removeChild(a,r,e)}selectRootElement(a,r){return this.delegate.selectRootElement(a,r)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,r,e,i){this.delegate.setAttribute(a,r,e,i)}removeAttribute(a,r,e){this.delegate.removeAttribute(a,r,e)}addClass(a,r){this.delegate.addClass(a,r)}removeClass(a,r){this.delegate.removeClass(a,r)}setStyle(a,r,e,i){this.delegate.setStyle(a,r,e,i)}removeStyle(a,r,e){this.delegate.removeStyle(a,r,e)}setProperty(a,r,e){this.shouldReplay(r)&&this.replay.push(i=>i.setProperty(a,r,e)),this.delegate.setProperty(a,r,e)}setValue(a,r){this.delegate.setValue(a,r)}listen(a,r,e){return this.shouldReplay(r)&&this.replay.push(i=>i.listen(a,r,e)),this.delegate.listen(a,r,e)}shouldReplay(a){return this.replay!==null&&a.startsWith(b3)}};function o4(c="animations"){return W1("NgAsyncAnimations"),R1([{provide:I1,useFactory:(a,r,e)=>new N3(a,r,e,c),deps:[a4,r4,G1]},{provide:_1,useValue:c==="noop"?"NoopAnimations":"BrowserAnimations"}])}var f4=[{path:"",loadChildren:()=>import("./chunk-G6LEEJ4Z.js").then(c=>c.HomeModule)}];var t4={providers:[l4(f4),o4()]};function m4(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),r.push.apply(r,e)}return r}function t(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?m4(Object(r),!0).forEach(function(e){N(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):m4(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function W2(c){"@babel/helpers - typeof";return W2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},W2(c)}function S3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function z4(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function w3(c,a,r){return a&&z4(c.prototype,a),r&&z4(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function N(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function u1(c,a){return y3(c)||P3(c,a)||D4(c,a)||T3()}function L2(c){return k3(c)||A3(c)||D4(c)||F3()}function k3(c){if(Array.isArray(c))return t1(c)}function y3(c){if(Array.isArray(c))return c}function A3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function P3(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],i=!0,n=!1,s,l;try{for(r=r.call(c);!(i=(s=r.next()).done)&&(e.push(s.value),!(a&&e.length===a));i=!0);}catch(o){n=!0,l=o}finally{try{!i&&r.return!=null&&r.return()}finally{if(n)throw l}}return e}}function D4(c,a){if(c){if(typeof c=="string")return t1(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t1(c,a)}}function t1(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function F3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var H4=function(){},L1={},R4={},_4=null,E4={mark:H4,measure:H4};try{typeof window<"u"&&(L1=window),typeof document<"u"&&(R4=document),typeof MutationObserver<"u"&&(_4=MutationObserver),typeof performance<"u"&&(E4=performance)}catch{}var O3=L1.navigator||{},v4=O3.userAgent,p4=v4===void 0?"":v4,Q=L1,d=R4,h4=_4,F2=E4,T0=!!Q.document,X=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",U4=~p4.indexOf("MSIE")||~p4.indexOf("Trident/"),T2,O2,B2,D2,R2,W="___FONT_AWESOME___",m1=16,q4="fa",I4="svg-inline--fa",i2="data-fa-i2svg",z1="data-fa-pseudo-element",B3="data-fa-pseudo-element-pending",g1="data-prefix",x1="data-icon",V4="fontawesome-i2svg",D3="async",R3=["HTML","HEAD","STYLE","SCRIPT"],W4=function(){try{return!0}catch{return!1}}(),C="classic",g="sharp",b1=[C,g];function g2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[C]}})}var V2=g2((T2={},N(T2,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),N(T2,g,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),T2)),M2=g2((O2={},N(O2,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(O2,g,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),O2)),C2=g2((B2={},N(B2,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(B2,g,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),B2)),_3=g2((D2={},N(D2,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(D2,g,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),D2)),E3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,G4="fa-layers-text",U3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,q3=g2((R2={},N(R2,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(R2,g,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),R2)),j4=[1,2,3,4,5,6,7,8,9,10],I3=j4.concat([11,12,13,14,15,16,17,18,19,20]),W3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],e2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d2=new Set;Object.keys(M2[C]).map(d2.add.bind(d2));Object.keys(M2[g]).map(d2.add.bind(d2));var G3=[].concat(b1,L2(d2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",e2.GROUP,e2.SWAP_OPACITY,e2.PRIMARY,e2.SECONDARY]).concat(j4.map(function(c){return"".concat(c,"x")})).concat(I3.map(function(c){return"w-".concat(c)})),p2=Q.FontAwesomeConfig||{};function j3(c){var a=d.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function X3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&(M4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],M4.forEach(function(c){var a=u1(c,2),r=a[0],e=a[1],i=X3(j3(r));i!=null&&(p2[e]=i)}));var M4,X4={styleDefault:"solid",familyDefault:"classic",cssPrefix:q4,replacementClass:I4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};p2.familyPrefix&&(p2.cssPrefix=p2.familyPrefix);var m2=t(t({},X4),p2);m2.autoReplaceSvg||(m2.observeMutations=!1);var z={};Object.keys(X4).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(r){m2[c]=r,h2.forEach(function(e){return e(z)})},get:function(){return m2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){m2.cssPrefix=a,h2.forEach(function(r){return r(z)})},get:function(){return m2.cssPrefix}});Q.FontAwesomeConfig=z;var h2=[];function Y3(c){return h2.push(c),function(){h2.splice(h2.indexOf(c),1)}}var K=m1,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $3(c){if(!(!c||!X)){var a=d.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=d.head.childNodes,e=null,i=r.length-1;i>-1;i--){var n=r[i],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=n)}return d.head.insertBefore(a,e),c}}var K3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function u2(){for(var c=12,a="";c-- >0;)a+=K3[Math.random()*62|0];return a}function z2(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function N1(c){return c.classList?z2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Y4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Q3(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(Y4(c[r]),'" ')},"").trim()}function X2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function S1(c){return c.size!==I.size||c.x!==I.x||c.y!==I.y||c.rotate!==I.rotate||c.flipX||c.flipY}function J3(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(r/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(l)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:o,path:m}}function Z3(c){var a=c.transform,r=c.width,e=r===void 0?m1:r,i=c.height,n=i===void 0?m1:i,s=c.startCentered,l=s===void 0?!1:s,o="";return l&&U4?o+="translate(".concat(a.x/K-e/2,"em, ").concat(a.y/K-n/2,"em) "):l?o+="translate(calc(-50% + ".concat(a.x/K,"em), calc(-50% + ").concat(a.y/K,"em)) "):o+="translate(".concat(a.x/K,"em, ").concat(a.y/K,"em) "),o+="scale(".concat(a.size/K*(a.flipX?-1:1),", ").concat(a.size/K*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var c6=`:root, :host {
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
}`;function $4(){var c=q4,a=I4,r=z.cssPrefix,e=z.replacementClass,i=c6;if(r!==c||e!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(n,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(l,".".concat(e))}return i}var C4=!1;function s1(){z.autoAddCss&&!C4&&($3($4()),C4=!0)}var a6={mixout:function(){return{dom:{css:$4,insertCss:s1}}},hooks:function(){return{beforeDOMElementCreation:function(){s1()},beforeI2svg:function(){s1()}}}},G=Q||{};G[W]||(G[W]={});G[W].styles||(G[W].styles={});G[W].hooks||(G[W].hooks={});G[W].shims||(G[W].shims=[]);var _=G[W],K4=[],e6=function c(){d.removeEventListener("DOMContentLoaded",c),G2=1,K4.map(function(a){return a()})},G2=!1;X&&(G2=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),G2||d.addEventListener("DOMContentLoaded",e6));function r6(c){X&&(G2?setTimeout(c,0):K4.push(c))}function x2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,i=c.children,n=i===void 0?[]:i;return typeof c=="string"?Y4(c):"<".concat(a," ").concat(Q3(e),">").concat(n.map(x2).join(""),"</").concat(a,">")}function d4(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var i6=function(a,r){return function(e,i,n,s){return a.call(r,e,i,n,s)}},l1=function(a,r,e,i){var n=Object.keys(a),s=n.length,l=i!==void 0?i6(r,i):r,o,m,f;for(e===void 0?(o=1,f=a[n[0]]):(o=0,f=e);o<s;o++)m=n[o],f=l(f,a[m],m,a);return f};function n6(c){for(var a=[],r=0,e=c.length;r<e;){var i=c.charCodeAt(r++);if(i>=55296&&i<=56319&&r<e){var n=c.charCodeAt(r++);(n&64512)==56320?a.push(((i&1023)<<10)+(n&1023)+65536):(a.push(i),r--)}else a.push(i)}return a}function H1(c){var a=n6(c);return a.length===1?a[0].toString(16):null}function s6(c,a){var r=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&r>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function u4(c){return Object.keys(c).reduce(function(a,r){var e=c[r],i=!!e.icon;return i?a[e.iconName]=e.icon:a[r]=e,a},{})}function v1(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,i=e===void 0?!1:e,n=u4(a);typeof _.hooks.addPack=="function"&&!i?_.hooks.addPack(c,u4(a)):_.styles[c]=t(t({},_.styles[c]||{}),n),c==="fas"&&v1("fa",a)}var _2,E2,U2,o2=_.styles,l6=_.shims,o6=(_2={},N(_2,C,Object.values(C2[C])),N(_2,g,Object.values(C2[g])),_2),w1=null,Q4={},J4={},Z4={},c3={},a3={},f6=(E2={},N(E2,C,Object.keys(V2[C])),N(E2,g,Object.keys(V2[g])),E2);function t6(c){return~G3.indexOf(c)}function m6(c,a){var r=a.split("-"),e=r[0],i=r.slice(1).join("-");return e===c&&i!==""&&!t6(i)?i:null}var e3=function(){var a=function(n){return l1(o2,function(s,l,o){return s[o]=l1(l,n,{}),s},{})};Q4=a(function(i,n,s){if(n[3]&&(i[n[3]]=s),n[2]){var l=n[2].filter(function(o){return typeof o=="number"});l.forEach(function(o){i[o.toString(16)]=s})}return i}),J4=a(function(i,n,s){if(i[s]=s,n[2]){var l=n[2].filter(function(o){return typeof o=="string"});l.forEach(function(o){i[o]=s})}return i}),a3=a(function(i,n,s){var l=n[2];return i[s]=s,l.forEach(function(o){i[o]=s}),i});var r="far"in o2||z.autoFetchSvg,e=l1(l6,function(i,n){var s=n[0],l=n[1],o=n[2];return l==="far"&&!r&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:o}),i},{names:{},unicodes:{}});Z4=e.names,c3=e.unicodes,w1=Y2(z.styleDefault,{family:z.familyDefault})};Y3(function(c){w1=Y2(c.styleDefault,{family:z.familyDefault})});e3();function k1(c,a){return(Q4[c]||{})[a]}function z6(c,a){return(J4[c]||{})[a]}function r2(c,a){return(a3[c]||{})[a]}function r3(c){return Z4[c]||{prefix:null,iconName:null}}function H6(c){var a=c3[c],r=k1("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function J(){return w1}var y1=function(){return{prefix:null,iconName:null,rest:[]}};function Y2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?C:r,i=V2[e][c],n=M2[e][c]||M2[e][i],s=c in _.styles?c:null;return n||s||null}var L4=(U2={},N(U2,C,Object.keys(C2[C])),N(U2,g,Object.keys(C2[g])),U2);function $2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,i=e===void 0?!1:e,n=(a={},N(a,C,"".concat(z.cssPrefix,"-").concat(C)),N(a,g,"".concat(z.cssPrefix,"-").concat(g)),a),s=null,l=C;(c.includes(n[C])||c.some(function(m){return L4[C].includes(m)}))&&(l=C),(c.includes(n[g])||c.some(function(m){return L4[g].includes(m)}))&&(l=g);var o=c.reduce(function(m,f){var H=m6(z.cssPrefix,f);if(o2[f]?(f=o6[l].includes(f)?_3[l][f]:f,s=f,m.prefix=f):f6[l].indexOf(f)>-1?(s=f,m.prefix=Y2(f,{family:l})):H?m.iconName=H:f!==z.replacementClass&&f!==n[C]&&f!==n[g]&&m.rest.push(f),!i&&m.prefix&&m.iconName){var V=s==="fa"?r3(m.iconName):{},M=r2(m.prefix,m.iconName);V.prefix&&(s=null),m.iconName=V.iconName||M||m.iconName,m.prefix=V.prefix||m.prefix,m.prefix==="far"&&!o2.far&&o2.fas&&!z.autoFetchSvg&&(m.prefix="fas")}return m},y1());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&l===g&&(o2.fass||z.autoFetchSvg)&&(o.prefix="fass",o.iconName=r2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=J()||"fas"),o}var v6=function(){function c(){S3(this,c),this.definitions={}}return w3(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){r.definitions[l]=t(t({},r.definitions[l]||{}),s[l]),v1(l,s[l]);var o=C2[C][l];o&&v1(o,s[l]),e3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(n){var s=i[n],l=s.prefix,o=s.iconName,m=s.icon,f=m[2];r[l]||(r[l]={}),f.length>0&&f.forEach(function(H){typeof H=="string"&&(r[l][H]=m)}),r[l][o]=m}),r}}]),c}(),g4=[],f2={},t2={},p6=Object.keys(t2);function h6(c,a){var r=a.mixoutsTo;return g4=c,f2={},Object.keys(t2).forEach(function(e){p6.indexOf(e)===-1&&delete t2[e]}),g4.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(r[s]=i[s]),W2(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){r[s]||(r[s]={}),r[s][l]=i[s][l]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(s){f2[s]||(f2[s]=[]),f2[s].push(n[s])})}e.provides&&e.provides(t2)}),r}function p1(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];var n=f2[c]||[];return n.forEach(function(s){a=s.apply(null,[a].concat(e))}),a}function n2(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var i=f2[c]||[];i.forEach(function(n){n.apply(null,r)})}function j(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return t2[c]?t2[c].apply(null,a):void 0}function h1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||J();if(a)return a=r2(r,a)||a,d4(i3.definitions,r,a)||d4(_.styles,r,a)}var i3=new v6,V6=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,n2("noAuto")},M6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(n2("beforeI2svg",a),j("pseudoElements2svg",a),j("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,r6(function(){d6({autoReplaceSvgRoot:r}),n2("watch",a)})}},C6={icon:function(a){if(a===null)return null;if(W2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:r2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=Y2(a[0]);return{prefix:e,iconName:r2(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(E3))){var i=$2(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||J(),iconName:r2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var n=J();return{prefix:n,iconName:r2(n,a)||a}}}},T={noAuto:V6,config:z,dom:M6,parse:C6,library:i3,findIconDefinition:h1,toHtml:x2},d6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?d:r;(Object.keys(_.styles).length>0||z.autoFetchSvg)&&X&&z.autoReplaceSvg&&T.dom.i2svg({node:e})};function K2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return x2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(X){var e=d.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function u6(c){var a=c.children,r=c.main,e=c.mask,i=c.attributes,n=c.styles,s=c.transform;if(S1(s)&&r.found&&!e.found){var l=r.width,o=r.height,m={x:l/o/2,y:.5};i.style=X2(t(t({},n),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function L6(c){var a=c.prefix,r=c.iconName,e=c.children,i=c.attributes,n=c.symbol,s=n===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(r):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},i),{},{id:s}),children:e}]}]}function A1(c){var a=c.icons,r=a.main,e=a.mask,i=c.prefix,n=c.iconName,s=c.transform,l=c.symbol,o=c.title,m=c.maskId,f=c.titleId,H=c.extra,V=c.watchable,M=V===void 0?!1:V,y=e.found?e:r,O=y.width,D=y.height,E=i==="fak",w=[z.replacementClass,n?"".concat(z.cssPrefix,"-").concat(n):""].filter(function(Y){return H.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(H.classes).join(" "),A={children:[],attributes:t(t({},H.attributes),{},{"data-prefix":i,"data-icon":n,class:w,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(D)})},U=E&&!~H.classes.indexOf("fa-fw")?{width:"".concat(O/D*16*.0625,"em")}:{};M&&(A.attributes[i2]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||u2())},children:[o]}),delete A.attributes.title);var F=t(t({},A),{},{prefix:i,iconName:n,main:r,mask:e,maskId:m,transform:s,symbol:l,styles:t(t({},U),H.styles)}),c2=e.found&&r.found?j("generateAbstractMask",F)||{children:[],attributes:{}}:j("generateAbstractIcon",F)||{children:[],attributes:{}},a2=c2.children,i1=c2.attributes;return F.children=a2,F.attributes=i1,l?L6(F):u6(F)}function x4(c){var a=c.content,r=c.width,e=c.height,i=c.transform,n=c.title,s=c.extra,l=c.watchable,o=l===void 0?!1:l,m=t(t(t({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(m[i2]="");var f=t({},s.styles);S1(i)&&(f.transform=Z3({transform:i,startCentered:!0,width:r,height:e}),f["-webkit-transform"]=f.transform);var H=X2(f);H.length>0&&(m.style=H);var V=[];return V.push({tag:"span",attributes:m,children:[a]}),n&&V.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),V}function g6(c){var a=c.content,r=c.title,e=c.extra,i=t(t(t({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),n=X2(e.styles);n.length>0&&(i.style=n);var s=[];return s.push({tag:"span",attributes:i,children:[a]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}var o1=_.styles;function V1(c){var a=c[0],r=c[1],e=c.slice(4),i=u1(e,1),n=i[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(e2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(e2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(e2.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:r,icon:s}}var x6={found:!1,width:512,height:512};function b6(c,a){!W4&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function M1(c,a){var r=a;return a==="fa"&&z.styleDefault!==null&&(a=J()),new Promise(function(e,i){var n={found:!1,width:512,height:512,icon:j("missingIconAbstract")||{}};if(r==="fa"){var s=r3(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&o1[a]&&o1[a][c]){var l=o1[a][c];return e(V1(l))}b6(c,a),e(t(t({},x6),{},{icon:z.showMissingIcons&&c?j("missingIconAbstract")||{}:{}}))})}var b4=function(){},C1=z.measurePerformance&&F2&&F2.mark&&F2.measure?F2:{mark:b4,measure:b4},v2='FA "6.5.2"',N6=function(a){return C1.mark("".concat(v2," ").concat(a," begins")),function(){return n3(a)}},n3=function(a){C1.mark("".concat(v2," ").concat(a," ends")),C1.measure("".concat(v2," ").concat(a),"".concat(v2," ").concat(a," begins"),"".concat(v2," ").concat(a," ends"))},P1={begin:N6,end:n3},q2=function(){};function N4(c){var a=c.getAttribute?c.getAttribute(i2):null;return typeof a=="string"}function S6(c){var a=c.getAttribute?c.getAttribute(g1):null,r=c.getAttribute?c.getAttribute(x1):null;return a&&r}function w6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function k6(){if(z.autoReplaceSvg===!0)return I2.replace;var c=I2[z.autoReplaceSvg];return c||I2.replace}function y6(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function A6(c){return d.createElement(c)}function s3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?y6:A6:r;if(typeof c=="string")return d.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(s){i.setAttribute(s,c.attributes[s])});var n=c.children||[];return n.forEach(function(s){i.appendChild(s3(s,{ceFn:e}))}),i}function P6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var I2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(i){r.parentNode.insertBefore(s3(i),r)}),r.getAttribute(i2)===null&&z.keepOriginalSource){var e=d.createComment(P6(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~N1(r).indexOf(z.replacementClass))return I2.replace(a);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(l,o){return o===z.replacementClass||o.match(i)?l.toSvg.push(o):l.toNode.push(o),l},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",n.toNode.join(" "))}var s=e.map(function(l){return x2(l)}).join(`
`);r.setAttribute(i2,""),r.innerHTML=s}};function S4(c){c()}function l3(c,a){var r=typeof a=="function"?a:q2;if(c.length===0)r();else{var e=S4;z.mutateApproach===D3&&(e=Q.requestAnimationFrame||S4),e(function(){var i=k6(),n=P1.begin("mutate");c.map(i),n(),r()})}}var F1=!1;function o3(){F1=!0}function d1(){F1=!1}var j2=null;function w4(c){if(h4&&z.observeMutations){var a=c.treeCallback,r=a===void 0?q2:a,e=c.nodeCallback,i=e===void 0?q2:e,n=c.pseudoElementsCallback,s=n===void 0?q2:n,l=c.observeMutationsRoot,o=l===void 0?d:l;j2=new h4(function(m){if(!F1){var f=J();z2(m).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!N4(H.addedNodes[0])&&(z.searchPseudoElements&&s(H.target),r(H.target)),H.type==="attributes"&&H.target.parentNode&&z.searchPseudoElements&&s(H.target.parentNode),H.type==="attributes"&&N4(H.target)&&~W3.indexOf(H.attributeName))if(H.attributeName==="class"&&S6(H.target)){var V=$2(N1(H.target)),M=V.prefix,y=V.iconName;H.target.setAttribute(g1,M||f),y&&H.target.setAttribute(x1,y)}else w6(H.target)&&i(H.target)})}}),X&&j2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function F6(){j2&&j2.disconnect()}function T6(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,i){var n=i.split(":"),s=n[0],l=n.slice(1);return s&&l.length>0&&(e[s]=l.join(":").trim()),e},{})),r}function O6(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=$2(N1(c));return i.prefix||(i.prefix=J()),a&&r&&(i.prefix=a,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=z6(i.prefix,c.innerText)||k1(i.prefix,H1(c.innerText))),!i.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function B6(c){var a=z2(c.attributes).reduce(function(i,n){return i.name!=="class"&&i.name!=="style"&&(i[n.name]=n.value),i},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return z.autoA11y&&(r?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(e||u2()):(a["aria-hidden"]="true",a.focusable="false")),a}function D6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=O6(c),e=r.iconName,i=r.prefix,n=r.rest,s=B6(c),l=p1("parseNodeAttributes",{},c),o=a.styleParser?T6(c):[];return t({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},l)}var R6=_.styles;function f3(c){var a=z.autoReplaceSvg==="nest"?k4(c,{styleParser:!1}):k4(c);return~a.extra.classes.indexOf(G4)?j("generateLayersText",c,a):j("generateSvgReplacementMutation",c,a)}var Z=new Set;b1.map(function(c){Z.add("fa-".concat(c))});Object.keys(V2[C]).map(Z.add.bind(Z));Object.keys(V2[g]).map(Z.add.bind(Z));Z=L2(Z);function y4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();var r=d.documentElement.classList,e=function(H){return r.add("".concat(V4,"-").concat(H))},i=function(H){return r.remove("".concat(V4,"-").concat(H))},n=z.autoFetchSvg?Z:b1.map(function(f){return"fa-".concat(f)}).concat(Object.keys(R6));n.includes("fa")||n.push("fa");var s=[".".concat(G4,":not([").concat(i2,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(i2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=z2(c.querySelectorAll(s))}catch{}if(l.length>0)e("pending"),i("complete");else return Promise.resolve();var o=P1.begin("onTree"),m=l.reduce(function(f,H){try{var V=f3(H);V&&f.push(V)}catch(M){W4||M.name==="MissingIcon"&&console.error(M)}return f},[]);return new Promise(function(f,H){Promise.all(m).then(function(V){l3(V,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),o(),f()})}).catch(function(V){o(),H(V)})})}function _6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;f3(c).then(function(r){r&&l3([r],a)})}function E6(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:h1(a||{}),i=r.mask;return i&&(i=(i||{}).icon?i:h1(i||{})),c(e,t(t({},r),{},{mask:i}))}}var U6=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,i=e===void 0?I:e,n=r.symbol,s=n===void 0?!1:n,l=r.mask,o=l===void 0?null:l,m=r.maskId,f=m===void 0?null:m,H=r.title,V=H===void 0?null:H,M=r.titleId,y=M===void 0?null:M,O=r.classes,D=O===void 0?[]:O,E=r.attributes,w=E===void 0?{}:E,A=r.styles,U=A===void 0?{}:A;if(a){var F=a.prefix,c2=a.iconName,a2=a.icon;return K2(t({type:"icon"},a),function(){return n2("beforeDOMElementCreation",{iconDefinition:a,params:r}),z.autoA11y&&(V?w["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(y||u2()):(w["aria-hidden"]="true",w.focusable="false")),A1({icons:{main:V1(a2),mask:o?V1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:c2,transform:t(t({},I),i),symbol:s,title:V,maskId:f,titleId:y,extra:{attributes:w,styles:U,classes:D}})})}},q6={mixout:function(){return{icon:E6(U6)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=y4,r.nodeCallback=_6,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,i=e===void 0?d:e,n=r.callback,s=n===void 0?function(){}:n;return y4(i,s)},a.generateSvgReplacementMutation=function(r,e){var i=e.iconName,n=e.title,s=e.titleId,l=e.prefix,o=e.transform,m=e.symbol,f=e.mask,H=e.maskId,V=e.extra;return new Promise(function(M,y){Promise.all([M1(i,l),f.iconName?M1(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var D=u1(O,2),E=D[0],w=D[1];M([r,A1({icons:{main:E,mask:w},prefix:l,iconName:i,transform:o,symbol:m,maskId:H,title:n,titleId:s,extra:V,watchable:!0})])}).catch(y)})},a.generateAbstractIcon=function(r){var e=r.children,i=r.attributes,n=r.main,s=r.transform,l=r.styles,o=X2(l);o.length>0&&(i.style=o);var m;return S1(s)&&(m=j("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),e.push(m||n.icon),{children:e,attributes:i}}}},I6={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,n=i===void 0?[]:i;return K2({type:"layer"},function(){n2("beforeDOMElementCreation",{assembler:r,params:e});var s=[];return r(function(l){Array.isArray(l)?l.map(function(o){s=s.concat(o.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(L2(n)).join(" ")},children:s}]})}}}},W6={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,n=i===void 0?null:i,s=e.classes,l=s===void 0?[]:s,o=e.attributes,m=o===void 0?{}:o,f=e.styles,H=f===void 0?{}:f;return K2({type:"counter",content:r},function(){return n2("beforeDOMElementCreation",{content:r,params:e}),g6({content:r.toString(),title:n,extra:{attributes:m,styles:H,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(L2(l))}})})}}}},G6={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,n=i===void 0?I:i,s=e.title,l=s===void 0?null:s,o=e.classes,m=o===void 0?[]:o,f=e.attributes,H=f===void 0?{}:f,V=e.styles,M=V===void 0?{}:V;return K2({type:"text",content:r},function(){return n2("beforeDOMElementCreation",{content:r,params:e}),x4({content:r,transform:t(t({},I),n),title:l,extra:{attributes:H,styles:M,classes:["".concat(z.cssPrefix,"-layers-text")].concat(L2(m))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var i=e.title,n=e.transform,s=e.extra,l=null,o=null;if(U4){var m=parseInt(getComputedStyle(r).fontSize,10),f=r.getBoundingClientRect();l=f.width/m,o=f.height/m}return z.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([r,x4({content:r.innerHTML,width:l,height:o,transform:n,title:i,extra:s,watchable:!0})])}}},j6=new RegExp('"',"ug"),A4=[1105920,1112319];function X6(c){var a=c.replace(j6,""),r=s6(a,0),e=r>=A4[0]&&r<=A4[1],i=a.length===2?a[0]===a[1]:!1;return{value:H1(i?a[0]:a),isSecondary:e||i}}function P4(c,a){var r="".concat(B3).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(r)!==null)return e();var n=z2(c.children),s=n.filter(function(a2){return a2.getAttribute(z1)===a})[0],l=Q.getComputedStyle(c,a),o=l.getPropertyValue("font-family").match(U3),m=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(s&&!o)return c.removeChild(s),e();if(o&&f!=="none"&&f!==""){var H=l.getPropertyValue("content"),V=~["Sharp"].indexOf(o[2])?g:C,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?M2[V][o[2].toLowerCase()]:q3[V][m],y=X6(H),O=y.value,D=y.isSecondary,E=o[0].startsWith("FontAwesome"),w=k1(M,O),A=w;if(E){var U=H6(O);U.iconName&&U.prefix&&(w=U.iconName,M=U.prefix)}if(w&&!D&&(!s||s.getAttribute(g1)!==M||s.getAttribute(x1)!==A)){c.setAttribute(r,A),s&&c.removeChild(s);var F=D6(),c2=F.extra;c2.attributes[z1]=a,M1(w,M).then(function(a2){var i1=A1(t(t({},F),{},{icons:{main:a2,mask:y1()},prefix:M,iconName:A,extra:c2,watchable:!0})),Y=d.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(Y,c.firstChild):c.appendChild(Y),Y.outerHTML=i1.map(function(x3){return x2(x3)}).join(`
`),c.removeAttribute(r),e()}).catch(i)}else e()}else e()})}function Y6(c){return Promise.all([P4(c,"::before"),P4(c,"::after")])}function $6(c){return c.parentNode!==document.head&&!~R3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(z1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function F4(c){if(X)return new Promise(function(a,r){var e=z2(c.querySelectorAll("*")).filter($6).map(Y6),i=P1.begin("searchPseudoElements");o3(),Promise.all(e).then(function(){i(),d1(),a()}).catch(function(){i(),d1(),r()})})}var K6={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=F4,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,i=e===void 0?d:e;z.searchPseudoElements&&F4(i)}}},T4=!1,Q6={mixout:function(){return{dom:{unwatch:function(){o3(),T4=!0}}}},hooks:function(){return{bootstrap:function(){w4(p1("mutationObserverCallbacks",{}))},noAuto:function(){F6()},watch:function(r){var e=r.observeMutationsRoot;T4?d1():w4(p1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},O4=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var n=i.toLowerCase().split("-"),s=n[0],l=n.slice(1).join("-");if(s&&l==="h")return e.flipX=!0,e;if(s&&l==="v")return e.flipY=!0,e;if(l=parseFloat(l),isNaN(l))return e;switch(s){case"grow":e.size=e.size+l;break;case"shrink":e.size=e.size-l;break;case"left":e.x=e.x-l;break;case"right":e.x=e.x+l;break;case"up":e.y=e.y-l;break;case"down":e.y=e.y+l;break;case"rotate":e.rotate=e.rotate+l;break}return e},r)},J6={mixout:function(){return{parse:{transform:function(r){return O4(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-transform");return i&&(r.transform=O4(i)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,i=r.transform,n=r.containerWidth,s=r.iconWidth,l={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),H={transform:"".concat(o," ").concat(m," ").concat(f)},V={transform:"translate(".concat(s/2*-1," -256)")},M={outer:l,inner:H,path:V};return{tag:"g",attributes:t({},M.outer),children:[{tag:"g",attributes:t({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:t(t({},e.icon.attributes),M.path)}]}]}}}},f1={x:0,y:0,width:"100%",height:"100%"};function B4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Z6(c){return c.tag==="g"?c.children:[c]}var c0={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-mask"),n=i?$2(i.split(" ").map(function(s){return s.trim()})):y1();return n.prefix||(n.prefix=J()),r.mask=n,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,i=r.attributes,n=r.main,s=r.mask,l=r.maskId,o=r.transform,m=n.width,f=n.icon,H=s.width,V=s.icon,M=J3({transform:o,containerWidth:H,iconWidth:m}),y={tag:"rect",attributes:t(t({},f1),{},{fill:"white"})},O=f.children?{children:f.children.map(B4)}:{},D={tag:"g",attributes:t({},M.inner),children:[B4(t({tag:f.tag,attributes:t(t({},f.attributes),M.path)},O))]},E={tag:"g",attributes:t({},M.outer),children:[D]},w="mask-".concat(l||u2()),A="clip-".concat(l||u2()),U={tag:"mask",attributes:t(t({},f1),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,E]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Z6(V)},U]};return e.push(F,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(w,")")},f1)}),{children:e,attributes:i}}}},a0={provides:function(a){var r=!1;Q.matchMedia&&(r=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:t(t({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=t(t({},n),{},{attributeName:"opacity"}),l={tag:"circle",attributes:t(t({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||l.children.push({tag:"animate",attributes:t(t({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(l),e.push({tag:"path",attributes:t(t({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:t(t({},s),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:t(t({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},e0={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-symbol"),n=i===null?!1:i===""?!0:i;return r.symbol=n,r}}}},r0=[a6,q6,I6,W6,G6,K6,Q6,J6,c0,a0,e0];h6(r0,{mixoutsTo:T});var O0=T.noAuto,B0=T.config,D0=T.library,R0=T.dom,t3=T.parse,_0=T.findIconDefinition,E0=T.toHtml,m3=T.icon,U0=T.layer,i0=T.text,n0=T.counter;var s0=["*"],l0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},o0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},f0=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},t0=c=>c.prefix!==void 0&&c.iconName!==void 0,m0=(c,a)=>t0(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},z0=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=H2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),H0=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let n of i.icon[2])typeof n=="string"&&(this.definitions[i.prefix][n]=i)}}addIconPacks(...e){for(let i of e){let n=Object.keys(i).map(s=>i[s]);this.addIcons(...n)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=H2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),v0=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=s2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[w2]});let c=a;return c})(),p0=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(S(l2),S(q))},a.\u0275cmp=x({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[w2,b],ngContentSelectors:s0,decls:1,vars:0,template:function(i,n){i&1&&(Q1(),J1(0))},encapsulation:2});let c=a;return c})(),Q2=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,n,s,l){this.sanitizer=e,this.config=i,this.iconLibrary=n,this.stackItem=s,this.classes=[],l!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){o0();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(i);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=m0(e,this.config.defaultPrefix);if("icon"in i)return i;let n=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return n??(l0(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?t3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...f0(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let n=m3(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(S(n4),S(z0),S(H0),S(v0,8),S(p0,8))},a.\u0275cmp=x({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,n){i&2&&(K1("innerHTML",n.renderedIconHTML,E1),X1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[w2,b],decls:0,vars:0,template:function(i,n){},encapsulation:2});let c=a;return c})();var J2=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=D1({type:a}),a.\u0275inj=O1({});let c=a;return c})();var H3={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]};var Z2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var h0={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},c1=h0;var V0={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},a1=V0;var v3={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var e1=(()=>{let a=class a{constructor(e,i){this.elementRef=e,this.renderer=i}onWindowScroll(){let e=this.elementRef.nativeElement;window.scrollY>0?this.renderer.addClass(e,"translucent"):this.renderer.removeClass(e,"translucent")}};a.\u0275fac=function(i){return new(i||a)(S(q),S(l2))},a.\u0275dir=s2({type:a,selectors:[["","directiveScrollOpacity",""]],hostBindings:function(i,n){i&1&&P("scroll",function(){return n.onWindowScroll()},!1,y2)},standalone:!0});let c=a;return c})();var p3=(()=>{let a=class a{constructor(e,i){this.elementRef=e,this.renderer=i}onMouseEnter(){this.renderer.addClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}onMouseLeave(){this.renderer.removeClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}};a.\u0275fac=function(i){return new(i||a)(S(q),S(l2))},a.\u0275dir=s2({type:a,selectors:[["","directiveDropdownHover",""]],hostBindings:function(i,n){i&1&&P("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()})},standalone:!0});let c=a;return c})();var M0=c=>({"margin-bottom.px":c}),h3=(()=>{let a=class a{constructor(e){this.elementRef=e,this.faSearch=a1,this.faUser=H3,this.faShoppingCart=c1,this.faChevronRight=v3,this.faBars=Z2,this.navbarHeight=0,N2(window,"resize").pipe(S2(null),b2(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(n=>{n!=0&&(this.navbarHeight=n)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}};a.\u0275fac=function(i){return new(i||a)(S(q))},a.\u0275cmp=x({type:a,selectors:[["app-navbar"]],standalone:!0,features:[b],decls:175,vars:10,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-desktop"],[1,"wrapper-left"],[1,"top-links"],["href","",1,"link"],[1,"link-wrapper"],["directiveDropdownHover","",1,"dropdown","dropdown-w-icons"],["href","",1,"dropdown-link"],[1,"dropdown-link-wrapper"],[3,"icon"],[1,"dropdown","sub-dropdown"],["href","",1,"sub-dropdown-link"],[1,"sub-dropdown-link-wrapper"],["directiveDropdownHover","",1,"dropdown"],[1,"wrapper-center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"wrapper-right"]],template:function(i,n){i&1&&(p(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"ul")(5,"li")(6,"a",4)(7,"div",5)(8,"span"),h(9,"Shop"),v()(),p(10,"ul",6)(11,"li")(12,"a",7)(13,"div",8)(14,"span"),h(15,"Coffee "),v(),u(16,"fa-icon",9),v()(),p(17,"ul",10)(18,"li")(19,"a",11)(20,"div",12)(21,"span"),h(22,"Classic Coffees"),v()()()(),p(23,"li")(24,"a",11)(25,"div",12)(26,"span"),h(27,"Single Origins"),v()()()()()(),p(28,"li")(29,"a",7)(30,"div",8)(31,"span"),h(32,"Coffee Club"),v(),u(33,"fa-icon",9),v()(),p(34,"ul",10)(35,"li")(36,"a",11)(37,"div",12)(38,"span"),h(39,"Join The Club"),v()()()(),p(40,"li")(41,"a",11)(42,"div",12)(43,"span"),h(44,"Manage Your Subscription"),v()()()()()(),p(45,"li")(46,"a",7)(47,"div",8)(48,"span"),h(49,"Gifts "),v(),u(50,"fa-icon",9),v()(),p(51,"ul",10)(52,"li")(53,"a",11)(54,"div",12)(55,"span"),h(56,"Gift a Coffee Subscription"),v()()()(),p(57,"li")(58,"a",11)(59,"div",12)(60,"span"),h(61,"Gift a Gift Card"),v()()()()()(),p(62,"li")(63,"a",7)(64,"div",8)(65,"span"),h(66,"Goods "),v(),u(67,"fa-icon",9),v()(),p(68,"ul",10)(69,"li")(70,"a",11)(71,"div",12)(72,"span"),h(73,"Brewing Equipment"),v()()()(),p(74,"li")(75,"a",11)(76,"div",12)(77,"span"),h(78,"Merchandise"),v()()()()()(),p(79,"li")(80,"a",7)(81,"div",8)(82,"span"),h(83,"Shop All"),v()()()()()()(),p(84,"li")(85,"a",4)(86,"div",5)(87,"span"),h(88,"Learn"),v()(),p(89,"ul",13)(90,"li")(91,"a",7)(92,"div",8)(93,"span"),h(94,"Blog"),v()()()(),p(95,"li")(96,"a",7)(97,"div",8)(98,"span"),h(99,"Contact Us"),v()()()(),p(100,"li")(101,"a",7)(102,"div",8)(103,"span"),h(104,"FAQ"),v()()()()()()(),p(105,"li")(106,"a",4)(107,"div",5)(108,"span"),h(109,"Wholesale"),v()(),p(110,"ul",13)(111,"li")(112,"a",7)(113,"div",8)(114,"span"),h(115,"Login"),v()()()(),p(116,"li")(117,"a",7)(118,"div",8)(119,"span"),h(120,"Wholesale Inquiry"),v()()()()()()(),p(121,"li")(122,"a",4)(123,"div",5)(124,"span"),h(125,"Connect"),v()(),p(126,"ul",13)(127,"li")(128,"a",7)(129,"div",8)(130,"span"),h(131,"About Us"),v()()()(),p(132,"li")(133,"a",7)(134,"div",8)(135,"span"),h(136,"Cafe"),v()()()(),p(137,"li")(138,"a",7)(139,"div",8)(140,"span"),h(141,"Careers"),v()()()(),p(142,"li")(143,"a",7)(144,"div",8)(145,"span"),h(146,"Press"),v()()()()()()()()()(),p(147,"div",14)(148,"div",15)(149,"h1",16)(150,"a",17)(151,"div",18),u(152,"img",19),v()(),u(153,"a",20),v()()(),p(154,"div",21)(155,"div",3)(156,"ul")(157,"li")(158,"a",4)(159,"div",5),u(160,"fa-icon",9),p(161,"span"),h(162,"Search"),v()()()(),p(163,"li")(164,"a",4)(165,"div",5),u(166,"fa-icon",9),p(167,"span"),h(168,"Account"),v()()()(),p(169,"li")(170,"a",4)(171,"div",5),u(172,"fa-icon",9),p(173,"span"),h(174,"Cart"),v()()()()()()()()()),i&2&&(L("ngStyle",$(8,M0,-n.navbarHeight)),k(16),L("icon",n.faChevronRight),k(17),L("icon",n.faChevronRight),k(17),L("icon",n.faChevronRight),k(17),L("icon",n.faChevronRight),k(93),L("icon",n.faSearch),k(6),L("icon",n.faUser),k(6),L("icon",n.faShoppingCart))},dependencies:[B,P2,J2,Q2,e1,p3],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-desktop[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;position:relative;margin:0 15px;font-family:custom-font;font-size:14px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]{display:flex;flex:1 1 100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:inline-block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%]{visibility:visible;opacity:1}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{visibility:hidden;display:grid;opacity:0;margin-top:15px;position:absolute;grid-template-columns:1fr;padding:20px;min-width:150px;max-width:300px;background-color:var(--primary-bg-color);transition:opacity .3s,visibility .3s;cursor:default}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:7px 0;width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{transition:color .3s;position:relative}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-bottom:4px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]{flex-basis:100px;align-self:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2800px;max-height:2800px;width:100px;height:100px;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;justify-content:flex-end}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;transition:color .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:18px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-dropdown[_ngcontent-%COMP%]{opacity:1!important;visibility:visible!important}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:9px}.sub-dropdown[_ngcontent-%COMP%]{position:absolute;left:100%;top:-20px;margin-top:0!important;margin-left:20px!important;visibility:hidden!important;opacity:0!important;transition:opacity .3s,visibility .3s;cursor:default}.sub-dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color)!important}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:0%!important}']});let c=a;return c})();var V3=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=x({type:a,selectors:[["app-footer"]],standalone:!0,features:[b],decls:2,vars:0,template:function(i,n){i&1&&(p(0,"p"),h(1,"footer works!"),v())}});let c=a;return c})();var M3=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=x({type:a,selectors:[["app-top-announcement"]],standalone:!0,features:[b],decls:3,vars:0,consts:[[1,"announcement-wrapper"]],template:function(i,n){i&1&&(p(0,"div",0)(1,"span"),h(2,"Free shipping for all orders over $50"),v()())},styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.announcement-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--announcement-bg-color)}.announcement-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color);padding:10px 30px;font-size:16px;font-family:custom-font}']});let c=a;return c})();var C0=c=>({show:c}),C3=(()=>{let a=class a{constructor(){this.toggleMenuRequest=new k2,this.showSideMenu=!1}toggleMenu(){this.showSideMenu=!1,this.toggleMenuRequest.emit()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=x({type:a,selectors:[["app-side-mobile-menu"]],inputs:{showSideMenu:"showSideMenu"},outputs:{toggleMenuRequest:"toggleMenuRequest"},standalone:!0,features:[b],decls:3,vars:3,consts:[[1,"side-menu",3,"ngClass"],[3,"click"]],template:function(i,n){i&1&&(p(0,"div",0)(1,"button",1),P("click",function(){return n.toggleMenu()}),h(2,"Cerrar men\xFA"),v()()),i&2&&L("ngClass",$(1,C0,n.showSideMenu))},dependencies:[B,A2],styles:[".side-menu[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:90%;background-color:#fff;z-index:9999;transition:transform .3s ease;transform:translate(-110%)}.show[_ngcontent-%COMP%]{transform:translate(0)}"]});let c=a;return c})();var d0=c=>({show:c}),d3=(()=>{let a=class a{constructor(){this.toggleSearchMenuRequest=new k2,this.showSideSearchMenu=!1}toggleSearchMenu(){this.showSideSearchMenu=!1,this.toggleSearchMenuRequest.emit()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=x({type:a,selectors:[["app-side-mobile-search"]],inputs:{showSideSearchMenu:"showSideSearchMenu"},outputs:{toggleSearchMenuRequest:"toggleSearchMenuRequest"},standalone:!0,features:[b],decls:3,vars:3,consts:[[1,"side-menu-search",3,"ngClass"],[3,"click"]],template:function(i,n){i&1&&(p(0,"div",0)(1,"button",1),P("click",function(){return n.toggleSearchMenu()}),h(2,"Cerrar men\xFA SEARCH"),v()()),i&2&&L("ngClass",$(1,d0,n.showSideSearchMenu))},dependencies:[B,A2],styles:[".side-menu-search[_ngcontent-%COMP%]{position:fixed;top:0;right:0;height:100%;width:90%;background-color:#fff;z-index:9999;transition:transform .3s ease;transform:translate(110%)}.show[_ngcontent-%COMP%]{transform:translate(0)}"]});let c=a;return c})();var u0=c=>({"margin-bottom.px":c}),u3=(()=>{let a=class a{constructor(e){this.elementRef=e,this.faSearch=a1,this.faShoppingCart=c1,this.faBars=Z2,this.navbarHeight=0,this.showSideMenu=!1,this.showSideSearchMenu=!1,N2(window,"resize").pipe(S2(null),b2(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(n=>{n!=0&&(this.navbarHeight=n)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}toggleSideMenu(){this.showSideMenu=!this.showSideMenu}toggleSearchSideMenu(){this.showSideSearchMenu=!this.showSideSearchMenu}};a.\u0275fac=function(i){return new(i||a)(S(q))},a.\u0275cmp=x({type:a,selectors:[["app-navbar-mobile"]],standalone:!0,features:[b],decls:22,vars:8,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-mobile"],[1,"wrapper-padded"],[1,"table-grid-container"],[1,"grid-item-container","left"],[1,"grid-item"],[3,"click"],[3,"icon"],[1,"grid-item-container","center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"grid-item-container","right"],[3,"toggleMenuRequest","showSideMenu"],[3,"toggleSearchMenuRequest","showSideSearchMenu"]],template:function(i,n){i&1&&(p(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"button",6),P("click",function(){return n.toggleSideMenu()}),u(7,"fa-icon",7),v()()(),p(8,"div",8)(9,"div",9)(10,"h1",10)(11,"a",11)(12,"div",12),u(13,"img",13),v()(),u(14,"a",14),v()()(),p(15,"div",15)(16,"div",5)(17,"button",6),P("click",function(){return n.toggleSearchSideMenu()}),u(18,"fa-icon",7),v(),u(19,"fa-icon",7),v()()()()()(),p(20,"app-side-mobile-menu",16),P("toggleMenuRequest",function(){return n.toggleSideMenu()}),v(),p(21,"app-side-mobile-search",17),P("toggleSearchMenuRequest",function(){return n.toggleSearchSideMenu()}),v()),i&2&&(L("ngStyle",$(6,u0,-n.navbarHeight)),k(7),L("icon",n.faBars),k(11),L("icon",n.faSearch),k(),L("icon",n.faShoppingCart),k(),L("showSideMenu",n.showSideMenu),k(),L("showSideSearchMenu",n.showSideSearchMenu))},dependencies:[B,P2,J2,Q2,e1,C3,d3],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]{padding:0 30px;position:relative;margin:0 auto}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]{display:table;table-layout:fixed;width:100%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container[_ngcontent-%COMP%]{display:table-cell;float:none;vertical-align:middle;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]{width:50%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}@media screen and (max-width: 768px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}@media screen and (max-width: 425px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}']});let c=a;return c})();function L0(c,a){c&1&&(Y1(0),u(1,"app-navbar-mobile"),$1())}function g0(c,a){c&1&&u(0,"app-navbar")}var L3=(()=>{let a=class a{constructor(){this.isMobile=!1,this.checkIfMobile()}onResize(){this.checkIfMobile()}checkIfMobile(){this.isMobile=window.innerWidth<=990}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=x({type:a,selectors:[["app-layout"]],hostBindings:function(i,n){i&1&&P("resize",function(l){return n.onResize(l)},!1,y2)},standalone:!0,features:[b],decls:8,vars:2,consts:[["desktopNavbar",""],[4,"ngIf","ngIfElse"]],template:function(i,n){if(i&1&&(p(0,"main"),u(1,"app-top-announcement"),j1(2,L0,2,0,"ng-container",1)(3,g0,1,0,"ng-template",null,0,c4),p(5,"div"),u(6,"router-outlet"),v(),u(7,"app-footer"),v()),i&2){let s=Z1(4);k(2),L("ngIf",n.isMobile)("ngIfElse",s)}},dependencies:[B,e4,h3,V3,s4,M3,u3],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1000;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}']});let c=a;return c})();var g3=(()=>{let a=class a{constructor(){this.title="coffee-shop"}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=x({type:a,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(i,n){i&1&&u(0,"app-layout")},dependencies:[B,L3]});let c=a;return c})();i4(g3,t4).catch(c=>console.error(c));
