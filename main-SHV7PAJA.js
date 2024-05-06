import{a as $3,b as Y3,c as X3,d as K3,e as Q3}from"./chunk-F5OPC5YL.js";import{$ as S,$a as M,B as S3,Bb as G2,Ea as _3,Eb as j3,Fa as a2,Ha as u,Ia as V,Ja as F3,K as J1,Ka as O3,L as y3,La as D3,Lb as n2,Ma as Q,Mb as b1,N as D2,Na as T3,Nb as x1,O as T2,Oa as E3,Ob as s2,P as E2,Pb as Z3,Q as s1,Qb as T,R as _1,Ra as L1,T as u1,Va as A,W as B2,Wa as I2,Xa as d,Ya as o1,Za as f,_ as c2,_a as l,a as $,aa as F1,ab as F,b as r1,ba as G,bb as O,ca as w3,cb as B3,db as R3,eb as x,f as K1,fb as D,ga as g1,gb as I3,ha as k3,hb as q3,ia as A3,ib as e2,ja as R2,jb as H,kb as i2,l as x3,lb as d1,m as O2,ma as R,mb as q2,na as t1,nb as y,ob as l1,pb as G3,q as n1,qb as U3,rb as r2,sa as P3,tb as W3,w as N3,x as Q1}from"./chunk-5A3BKUK4.js";var j6="@",Z6=(()=>{let c=class c{constructor(e,r,n,s,t){this.doc=e,this.delegate=r,this.zone=n,this.animationType=s,this.moduleImpl=t,this._rendererFactoryPromise=null,this.scheduler=B2(O3,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-HGV4ZYVM.js")).catch(r=>{throw new T2(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:n})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,r){let n=this.delegate.createRenderer(e,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new U2(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(t=>{let o=t.createRenderer(e,r);s.use(o)}).catch(t=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};c.\u0275fac=function(r){F3()},c.\u0275prov=s1({token:c,factory:c.\u0275fac});let a=c;return a})(),U2=class{constructor(c){this.delegate=c,this.replay=[],this.\u0275type=1}use(c){if(this.delegate=c,this.replay!==null){for(let i of this.replay)i(c);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(c,i){return this.delegate.createElement(c,i)}createComment(c){return this.delegate.createComment(c)}createText(c){return this.delegate.createText(c)}get destroyNode(){return this.delegate.destroyNode}appendChild(c,i){this.delegate.appendChild(c,i)}insertBefore(c,i,e,r){this.delegate.insertBefore(c,i,e,r)}removeChild(c,i,e){this.delegate.removeChild(c,i,e)}selectRootElement(c,i){return this.delegate.selectRootElement(c,i)}parentNode(c){return this.delegate.parentNode(c)}nextSibling(c){return this.delegate.nextSibling(c)}setAttribute(c,i,e,r){this.delegate.setAttribute(c,i,e,r)}removeAttribute(c,i,e){this.delegate.removeAttribute(c,i,e)}addClass(c,i){this.delegate.addClass(c,i)}removeClass(c,i){this.delegate.removeClass(c,i)}setStyle(c,i,e,r){this.delegate.setStyle(c,i,e,r)}removeStyle(c,i,e){this.delegate.removeStyle(c,i,e)}setProperty(c,i,e){this.shouldReplay(i)&&this.replay.push(r=>r.setProperty(c,i,e)),this.delegate.setProperty(c,i,e)}setValue(c,i){this.delegate.setValue(c,i)}listen(c,i,e){return this.shouldReplay(i)&&this.replay.push(r=>r.listen(c,i,e)),this.delegate.listen(c,i,e)}shouldReplay(c){return this.replay!==null&&c.startsWith(j6)}};function J3(a="animations"){return T3("NgAsyncAnimations"),w3([{provide:D3,useFactory:(c,i,e)=>new Z6(c,i,e,a),deps:[j3,$3,E3]},{provide:P3,useValue:a==="noop"?"NoopAnimations":"BrowserAnimations"}])}var c4=[{path:"",loadChildren:()=>import("./chunk-7JGWQMOD.js").then(a=>a.HomeModule)}];var a4={providers:[Q3(c4),J3()]};function e4(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function h(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?e4(Object(i),!0).forEach(function(e){w(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):e4(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function H2(a){"@babel/helpers - typeof";return H2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},H2(a)}function $6(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function i4(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function Y6(a,c,i){return c&&i4(a.prototype,c),i&&i4(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function w(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function s3(a,c){return K6(a)||J6(a,c)||y4(a,c)||a0()}function G1(a){return X6(a)||Q6(a)||y4(a)||c0()}function X6(a){if(Array.isArray(a))return Y2(a)}function K6(a){if(Array.isArray(a))return a}function Q6(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function J6(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,n=!1,s,t;try{for(i=i.call(a);!(r=(s=i.next()).done)&&(e.push(s.value),!(c&&e.length===c));r=!0);}catch(o){n=!0,t=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw t}}return e}}function y4(a,c){if(a){if(typeof a=="string")return Y2(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Y2(a,c)}}function Y2(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function c0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r4=function(){},t3={},w4={},k4=null,A4={mark:r4,measure:r4};try{typeof window<"u"&&(t3=window),typeof document<"u"&&(w4=document),typeof MutationObserver<"u"&&(k4=MutationObserver),typeof performance<"u"&&(A4=performance)}catch{}var e0=t3.navigator||{},n4=e0.userAgent,s4=n4===void 0?"":n4,m1=t3,b=w4,t4=k4,t2=A4,q5=!!m1.document,e1=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",P4=~s4.indexOf("MSIE")||~s4.indexOf("Trident/"),o2,l2,f2,m2,h2,J="___FONT_AWESOME___",X2=16,_4="fa",F4="svg-inline--fa",C1="data-fa-i2svg",K2="data-fa-pseudo-element",i0="data-fa-pseudo-element-pending",o3="data-prefix",l3="data-icon",o4="fontawesome-i2svg",r0="async",n0=["HTML","HEAD","STYLE","SCRIPT"],O4=function(){try{return!0}catch{return!1}}(),L="classic",N="sharp",f3=[L,N];function U1(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[L]}})}var E1=U1((o2={},w(o2,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),w(o2,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),o2)),B1=U1((l2={},w(l2,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(l2,N,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),l2)),R1=U1((f2={},w(f2,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(f2,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),f2)),s0=U1((m2={},w(m2,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(m2,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),m2)),t0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,D4="fa-layers-text",o0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,l0=U1((h2={},w(h2,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(h2,N,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),h2)),T4=[1,2,3,4,5,6,7,8,9,10],f0=T4.concat([11,12,13,14,15,16,17,18,19,20]),m0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},I1=new Set;Object.keys(B1[L]).map(I1.add.bind(I1));Object.keys(B1[N]).map(I1.add.bind(I1));var h0=[].concat(f3,G1(I1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H1.GROUP,H1.SWAP_OPACITY,H1.PRIMARY,H1.SECONDARY]).concat(T4.map(function(a){return"".concat(a,"x")})).concat(f0.map(function(a){return"w-".concat(a)})),D1=m1.FontAwesomeConfig||{};function v0(a){var c=b.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function z0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}b&&typeof b.querySelector=="function"&&(l4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],l4.forEach(function(a){var c=s3(a,2),i=c[0],e=c[1],r=z0(v0(i));r!=null&&(D1[e]=r)}));var l4,E4={styleDefault:"solid",familyDefault:"classic",cssPrefix:_4,replacementClass:F4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};D1.familyPrefix&&(D1.cssPrefix=D1.familyPrefix);var w1=h(h({},E4),D1);w1.autoReplaceSvg||(w1.observeMutations=!1);var z={};Object.keys(E4).forEach(function(a){Object.defineProperty(z,a,{enumerable:!0,set:function(i){w1[a]=i,T1.forEach(function(e){return e(z)})},get:function(){return w1[a]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){w1.cssPrefix=c,T1.forEach(function(i){return i(z)})},get:function(){return w1.cssPrefix}});m1.FontAwesomeConfig=z;var T1=[];function p0(a){return T1.push(a),function(){T1.splice(T1.indexOf(a),1)}}var f1=X2,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function u0(a){if(!(!a||!e1)){var c=b.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=b.head.childNodes,e=null,r=i.length-1;r>-1;r--){var n=i[r],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=n)}return b.head.insertBefore(c,e),a}}var d0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q1(){for(var a=12,c="";a-- >0;)c+=d0[Math.random()*62|0];return c}function k1(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function m3(a){return a.classList?k1(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function B4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H0(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(B4(a[i]),'" ')},"").trim()}function V2(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function h3(a){return a.size!==Y.size||a.x!==Y.x||a.y!==Y.y||a.rotate!==Y.rotate||a.flipX||a.flipY}function M0(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),s="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(t)},v={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:v}}function C0(a){var c=a.transform,i=a.width,e=i===void 0?X2:i,r=a.height,n=r===void 0?X2:r,s=a.startCentered,t=s===void 0?!1:s,o="";return t&&P4?o+="translate(".concat(c.x/f1-e/2,"em, ").concat(c.y/f1-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/f1,"em), calc(-50% + ").concat(c.y/f1,"em)) "):o+="translate(".concat(c.x/f1,"em, ").concat(c.y/f1,"em) "),o+="scale(".concat(c.size/f1*(c.flipX?-1:1),", ").concat(c.size/f1*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var V0=`:root, :host {
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
}`;function R4(){var a=_4,c=F4,i=z.cssPrefix,e=z.replacementClass,r=V0;if(i!==a||e!==c){var n=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(n,".".concat(i,"-")).replace(s,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var f4=!1;function W2(){z.autoAddCss&&!f4&&(u0(R4()),f4=!0)}var g0={mixout:function(){return{dom:{css:R4,insertCss:W2}}},hooks:function(){return{beforeDOMElementCreation:function(){W2()},beforeI2svg:function(){W2()}}}},c1=m1||{};c1[J]||(c1[J]={});c1[J].styles||(c1[J].styles={});c1[J].hooks||(c1[J].hooks={});c1[J].shims||(c1[J].shims=[]);var W=c1[J],I4=[],L0=function a(){b.removeEventListener("DOMContentLoaded",a),M2=1,I4.map(function(c){return c()})},M2=!1;e1&&(M2=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),M2||b.addEventListener("DOMContentLoaded",L0));function b0(a){e1&&(M2?setTimeout(a,0):I4.push(a))}function W1(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,n=r===void 0?[]:r;return typeof a=="string"?B4(a):"<".concat(c," ").concat(H0(e),">").concat(n.map(W1).join(""),"</").concat(c,">")}function m4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var x0=function(c,i){return function(e,r,n,s){return c.call(i,e,r,n,s)}},j2=function(c,i,e,r){var n=Object.keys(c),s=n.length,t=r!==void 0?x0(i,r):i,o,v,m;for(e===void 0?(o=1,m=c[n[0]]):(o=0,m=e);o<s;o++)v=n[o],m=t(m,c[v],v,c);return m};function N0(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var n=a.charCodeAt(i++);(n&64512)==56320?c.push(((r&1023)<<10)+(n&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function Q2(a){var c=N0(a);return c.length===1?c[0].toString(16):null}function S0(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function h4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function J2(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,n=h4(c);typeof W.hooks.addPack=="function"&&!r?W.hooks.addPack(a,h4(c)):W.styles[a]=h(h({},W.styles[a]||{}),n),a==="fas"&&J2("fa",c)}var v2,z2,p2,N1=W.styles,y0=W.shims,w0=(v2={},w(v2,L,Object.values(R1[L])),w(v2,N,Object.values(R1[N])),v2),v3=null,q4={},G4={},U4={},W4={},j4={},k0=(z2={},w(z2,L,Object.keys(E1[L])),w(z2,N,Object.keys(E1[N])),z2);function A0(a){return~h0.indexOf(a)}function P0(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!A0(r)?r:null}var Z4=function(){var c=function(n){return j2(N1,function(s,t,o){return s[o]=j2(t,n,{}),s},{})};q4=c(function(r,n,s){if(n[3]&&(r[n[3]]=s),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=s})}return r}),G4=c(function(r,n,s){if(r[s]=s,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=s})}return r}),j4=c(function(r,n,s){var t=n[2];return r[s]=s,t.forEach(function(o){r[o]=s}),r});var i="far"in N1||z.autoFetchSvg,e=j2(y0,function(r,n){var s=n[0],t=n[1],o=n[2];return t==="far"&&!i&&(t="fas"),typeof s=="string"&&(r.names[s]={prefix:t,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});U4=e.names,W4=e.unicodes,v3=g2(z.styleDefault,{family:z.familyDefault})};p0(function(a){v3=g2(a.styleDefault,{family:z.familyDefault})});Z4();function z3(a,c){return(q4[a]||{})[c]}function _0(a,c){return(G4[a]||{})[c]}function M1(a,c){return(j4[a]||{})[c]}function $4(a){return U4[a]||{prefix:null,iconName:null}}function F0(a){var c=W4[a],i=z3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function h1(){return v3}var p3=function(){return{prefix:null,iconName:null,rest:[]}};function g2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?L:i,r=E1[e][a],n=B1[e][a]||B1[e][r],s=a in W.styles?a:null;return n||s||null}var v4=(p2={},w(p2,L,Object.keys(R1[L])),w(p2,N,Object.keys(R1[N])),p2);function L2(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,n=(c={},w(c,L,"".concat(z.cssPrefix,"-").concat(L)),w(c,N,"".concat(z.cssPrefix,"-").concat(N)),c),s=null,t=L;(a.includes(n[L])||a.some(function(v){return v4[L].includes(v)}))&&(t=L),(a.includes(n[N])||a.some(function(v){return v4[N].includes(v)}))&&(t=N);var o=a.reduce(function(v,m){var p=P0(z.cssPrefix,m);if(N1[m]?(m=w0[t].includes(m)?s0[t][m]:m,s=m,v.prefix=m):k0[t].indexOf(m)>-1?(s=m,v.prefix=g2(m,{family:t})):p?v.iconName=p:m!==z.replacementClass&&m!==n[L]&&m!==n[N]&&v.rest.push(m),!r&&v.prefix&&v.iconName){var C=s==="fa"?$4(v.iconName):{},g=M1(v.prefix,v.iconName);C.prefix&&(s=null),v.iconName=C.iconName||g||v.iconName,v.prefix=C.prefix||v.prefix,v.prefix==="far"&&!N1.far&&N1.fas&&!z.autoFetchSvg&&(v.prefix="fas")}return v},p3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===N&&(N1.fass||z.autoFetchSvg)&&(o.prefix="fass",o.iconName=M1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=h1()||"fas"),o}var O0=function(){function a(){$6(this,a),this.definitions={}}return Y6(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(t){i.definitions[t]=h(h({},i.definitions[t]||{}),s[t]),J2(t,s[t]);var o=R1[L][t];o&&J2(o,s[t]),Z4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(n){var s=r[n],t=s.prefix,o=s.iconName,v=s.icon,m=v[2];i[t]||(i[t]={}),m.length>0&&m.forEach(function(p){typeof p=="string"&&(i[t][p]=v)}),i[t][o]=v}),i}}]),a}(),z4=[],S1={},y1={},D0=Object.keys(y1);function T0(a,c){var i=c.mixoutsTo;return z4=a,S1={},Object.keys(y1).forEach(function(e){D0.indexOf(e)===-1&&delete y1[e]}),z4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(i[s]=r[s]),H2(r[s])==="object"&&Object.keys(r[s]).forEach(function(t){i[s]||(i[s]={}),i[s][t]=r[s][t]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(s){S1[s]||(S1[s]=[]),S1[s].push(n[s])})}e.provides&&e.provides(y1)}),i}function c3(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var n=S1[a]||[];return n.forEach(function(s){c=s.apply(null,[c].concat(e))}),c}function V1(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=S1[a]||[];r.forEach(function(n){n.apply(null,i)})}function a1(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return y1[a]?y1[a].apply(null,c):void 0}function a3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||h1();if(c)return c=M1(i,c)||c,m4(Y4.definitions,i,c)||m4(W.styles,i,c)}var Y4=new O0,E0=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,V1("noAuto")},B0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e1?(V1("beforeI2svg",c),a1("pseudoElements2svg",c),a1("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,b0(function(){I0({autoReplaceSvgRoot:i}),V1("watch",c)})}},R0={icon:function(c){if(c===null)return null;if(H2(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:M1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=g2(c[0]);return{prefix:e,iconName:M1(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(t0))){var r=L2(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||h1(),iconName:M1(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var n=h1();return{prefix:n,iconName:M1(n,c)||c}}}},I={noAuto:E0,config:z,dom:B0,parse:R0,library:Y4,findIconDefinition:a3,toHtml:W1},I0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?b:i;(Object.keys(W.styles).length>0||z.autoFetchSvg)&&e1&&z.autoReplaceSvg&&I.dom.i2svg({node:e})};function b2(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return W1(e)})}}),Object.defineProperty(a,"node",{get:function(){if(e1){var e=b.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function q0(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,n=a.styles,s=a.transform;if(h3(s)&&i.found&&!e.found){var t=i.width,o=i.height,v={x:t/o/2,y:.5};r.style=V2(h(h({},n),{},{"transform-origin":"".concat(v.x+s.x/16,"em ").concat(v.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function G0(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,n=a.symbol,s=n===!0?"".concat(c,"-").concat(z.cssPrefix,"-").concat(i):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:s}),children:e}]}]}function u3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,n=a.iconName,s=a.transform,t=a.symbol,o=a.title,v=a.maskId,m=a.titleId,p=a.extra,C=a.watchable,g=C===void 0?!1:C,P=e.found?e:i,q=P.width,U=P.height,j=r==="fak",k=[z.replacementClass,n?"".concat(z.cssPrefix,"-").concat(n):""].filter(function(i1){return p.classes.indexOf(i1)===-1}).filter(function(i1){return i1!==""||!!i1}).concat(p.classes).join(" "),_={children:[],attributes:h(h({},p.attributes),{},{"data-prefix":r,"data-icon":n,class:k,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(q," ").concat(U)})},Z=j&&!~p.classes.indexOf("fa-fw")?{width:"".concat(q/U*16*.0625,"em")}:{};g&&(_.attributes[C1]=""),o&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(m||q1())},children:[o]}),delete _.attributes.title);var B=h(h({},_),{},{prefix:r,iconName:n,main:i,mask:e,maskId:v,transform:s,symbol:t,styles:h(h({},Z),p.styles)}),z1=e.found&&i.found?a1("generateAbstractMask",B)||{children:[],attributes:{}}:a1("generateAbstractIcon",B)||{children:[],attributes:{}},p1=z1.children,F2=z1.attributes;return B.children=p1,B.attributes=F2,t?G0(B):q0(B)}function p4(a){var c=a.content,i=a.width,e=a.height,r=a.transform,n=a.title,s=a.extra,t=a.watchable,o=t===void 0?!1:t,v=h(h(h({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(v[C1]="");var m=h({},s.styles);h3(r)&&(m.transform=C0({transform:r,startCentered:!0,width:i,height:e}),m["-webkit-transform"]=m.transform);var p=V2(m);p.length>0&&(v.style=p);var C=[];return C.push({tag:"span",attributes:v,children:[c]}),n&&C.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),C}function U0(a){var c=a.content,i=a.title,e=a.extra,r=h(h(h({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),n=V2(e.styles);n.length>0&&(r.style=n);var s=[];return s.push({tag:"span",attributes:r,children:[c]}),i&&s.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),s}var Z2=W.styles;function e3(a){var c=a[0],i=a[1],e=a.slice(4),r=s3(e,1),n=r[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(H1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(H1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(H1.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:i,icon:s}}var W0={found:!1,width:512,height:512};function j0(a,c){!O4&&!z.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function i3(a,c){var i=c;return c==="fa"&&z.styleDefault!==null&&(c=h1()),new Promise(function(e,r){var n={found:!1,width:512,height:512,icon:a1("missingIconAbstract")||{}};if(i==="fa"){var s=$4(a)||{};a=s.iconName||a,c=s.prefix||c}if(a&&c&&Z2[c]&&Z2[c][a]){var t=Z2[c][a];return e(e3(t))}j0(a,c),e(h(h({},W0),{},{icon:z.showMissingIcons&&a?a1("missingIconAbstract")||{}:{}}))})}var u4=function(){},r3=z.measurePerformance&&t2&&t2.mark&&t2.measure?t2:{mark:u4,measure:u4},O1='FA "6.5.2"',Z0=function(c){return r3.mark("".concat(O1," ").concat(c," begins")),function(){return X4(c)}},X4=function(c){r3.mark("".concat(O1," ").concat(c," ends")),r3.measure("".concat(O1," ").concat(c),"".concat(O1," ").concat(c," begins"),"".concat(O1," ").concat(c," ends"))},d3={begin:Z0,end:X4},u2=function(){};function d4(a){var c=a.getAttribute?a.getAttribute(C1):null;return typeof c=="string"}function $0(a){var c=a.getAttribute?a.getAttribute(o3):null,i=a.getAttribute?a.getAttribute(l3):null;return c&&i}function Y0(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(z.replacementClass)}function X0(){if(z.autoReplaceSvg===!0)return d2.replace;var a=d2[z.autoReplaceSvg];return a||d2.replace}function K0(a){return b.createElementNS("http://www.w3.org/2000/svg",a)}function Q0(a){return b.createElement(a)}function K4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?K0:Q0:i;if(typeof a=="string")return b.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(s){r.setAttribute(s,a.attributes[s])});var n=a.children||[];return n.forEach(function(s){r.appendChild(K4(s,{ceFn:e}))}),r}function J0(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var d2={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(K4(r),i)}),i.getAttribute(C1)===null&&z.keepOriginalSource){var e=b.createComment(J0(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~m3(i).indexOf(z.replacementClass))return d2.replace(c);var r=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(t,o){return o===z.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",n.toNode.join(" "))}var s=e.map(function(t){return W1(t)}).join(`
`);i.setAttribute(C1,""),i.innerHTML=s}};function H4(a){a()}function Q4(a,c){var i=typeof c=="function"?c:u2;if(a.length===0)i();else{var e=H4;z.mutateApproach===r0&&(e=m1.requestAnimationFrame||H4),e(function(){var r=X0(),n=d3.begin("mutate");a.map(r),n(),i()})}}var H3=!1;function J4(){H3=!0}function n3(){H3=!1}var C2=null;function M4(a){if(t4&&z.observeMutations){var c=a.treeCallback,i=c===void 0?u2:c,e=a.nodeCallback,r=e===void 0?u2:e,n=a.pseudoElementsCallback,s=n===void 0?u2:n,t=a.observeMutationsRoot,o=t===void 0?b:t;C2=new t4(function(v){if(!H3){var m=h1();k1(v).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!d4(p.addedNodes[0])&&(z.searchPseudoElements&&s(p.target),i(p.target)),p.type==="attributes"&&p.target.parentNode&&z.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&d4(p.target)&&~m0.indexOf(p.attributeName))if(p.attributeName==="class"&&$0(p.target)){var C=L2(m3(p.target)),g=C.prefix,P=C.iconName;p.target.setAttribute(o3,g||m),P&&p.target.setAttribute(l3,P)}else Y0(p.target)&&r(p.target)})}}),e1&&C2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function c8(){C2&&C2.disconnect()}function a8(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var n=r.split(":"),s=n[0],t=n.slice(1);return s&&t.length>0&&(e[s]=t.join(":").trim()),e},{})),i}function e8(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=L2(m3(a));return r.prefix||(r.prefix=h1()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=_0(r.prefix,a.innerText)||z3(r.prefix,Q2(a.innerText))),!r.iconName&&z.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function i8(a){var c=k1(a.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return z.autoA11y&&(i?c["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(e||q1()):(c["aria-hidden"]="true",c.focusable="false")),c}function r8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function C4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=e8(a),e=i.iconName,r=i.prefix,n=i.rest,s=i8(a),t=c3("parseNodeAttributes",{},a),o=c.styleParser?a8(a):[];return h({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},t)}var n8=W.styles;function c6(a){var c=z.autoReplaceSvg==="nest"?C4(a,{styleParser:!1}):C4(a);return~c.extra.classes.indexOf(D4)?a1("generateLayersText",a,c):a1("generateSvgReplacementMutation",a,c)}var v1=new Set;f3.map(function(a){v1.add("fa-".concat(a))});Object.keys(E1[L]).map(v1.add.bind(v1));Object.keys(E1[N]).map(v1.add.bind(v1));v1=G1(v1);function V4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!e1)return Promise.resolve();var i=b.documentElement.classList,e=function(p){return i.add("".concat(o4,"-").concat(p))},r=function(p){return i.remove("".concat(o4,"-").concat(p))},n=z.autoFetchSvg?v1:f3.map(function(m){return"fa-".concat(m)}).concat(Object.keys(n8));n.includes("fa")||n.push("fa");var s=[".".concat(D4,":not([").concat(C1,"])")].concat(n.map(function(m){return".".concat(m,":not([").concat(C1,"])")})).join(", ");if(s.length===0)return Promise.resolve();var t=[];try{t=k1(a.querySelectorAll(s))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var o=d3.begin("onTree"),v=t.reduce(function(m,p){try{var C=c6(p);C&&m.push(C)}catch(g){O4||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,p){Promise.all(v).then(function(C){Q4(C,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),m()})}).catch(function(C){o(),p(C)})})}function s8(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;c6(a).then(function(i){i&&Q4([i],c)})}function t8(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:a3(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:a3(r||{})),a(e,h(h({},i),{},{mask:r}))}}var o8=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?Y:e,n=i.symbol,s=n===void 0?!1:n,t=i.mask,o=t===void 0?null:t,v=i.maskId,m=v===void 0?null:v,p=i.title,C=p===void 0?null:p,g=i.titleId,P=g===void 0?null:g,q=i.classes,U=q===void 0?[]:q,j=i.attributes,k=j===void 0?{}:j,_=i.styles,Z=_===void 0?{}:_;if(c){var B=c.prefix,z1=c.iconName,p1=c.icon;return b2(h({type:"icon"},c),function(){return V1("beforeDOMElementCreation",{iconDefinition:c,params:i}),z.autoA11y&&(C?k["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(P||q1()):(k["aria-hidden"]="true",k.focusable="false")),u3({icons:{main:e3(p1),mask:o?e3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:z1,transform:h(h({},Y),r),symbol:s,title:C,maskId:m,titleId:P,extra:{attributes:k,styles:Z,classes:U}})})}},l8={mixout:function(){return{icon:t8(o8)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=V4,i.nodeCallback=s8,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?b:e,n=i.callback,s=n===void 0?function(){}:n;return V4(r,s)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,n=e.title,s=e.titleId,t=e.prefix,o=e.transform,v=e.symbol,m=e.mask,p=e.maskId,C=e.extra;return new Promise(function(g,P){Promise.all([i3(r,t),m.iconName?i3(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(q){var U=s3(q,2),j=U[0],k=U[1];g([i,u3({icons:{main:j,mask:k},prefix:t,iconName:r,transform:o,symbol:v,maskId:p,title:n,titleId:s,extra:C,watchable:!0})])}).catch(P)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,n=i.main,s=i.transform,t=i.styles,o=V2(t);o.length>0&&(r.style=o);var v;return h3(s)&&(v=a1("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),e.push(v||n.icon),{children:e,attributes:r}}}},f8={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,n=r===void 0?[]:r;return b2({type:"layer"},function(){V1("beforeDOMElementCreation",{assembler:i,params:e});var s=[];return i(function(t){Array.isArray(t)?t.map(function(o){s=s.concat(o.abstract)}):s=s.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(G1(n)).join(" ")},children:s}]})}}}},m8={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,n=r===void 0?null:r,s=e.classes,t=s===void 0?[]:s,o=e.attributes,v=o===void 0?{}:o,m=e.styles,p=m===void 0?{}:m;return b2({type:"counter",content:i},function(){return V1("beforeDOMElementCreation",{content:i,params:e}),U0({content:i.toString(),title:n,extra:{attributes:v,styles:p,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(G1(t))}})})}}}},h8={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?Y:r,s=e.title,t=s===void 0?null:s,o=e.classes,v=o===void 0?[]:o,m=e.attributes,p=m===void 0?{}:m,C=e.styles,g=C===void 0?{}:C;return b2({type:"text",content:i},function(){return V1("beforeDOMElementCreation",{content:i,params:e}),p4({content:i,transform:h(h({},Y),n),title:t,extra:{attributes:p,styles:g,classes:["".concat(z.cssPrefix,"-layers-text")].concat(G1(v))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,n=e.transform,s=e.extra,t=null,o=null;if(P4){var v=parseInt(getComputedStyle(i).fontSize,10),m=i.getBoundingClientRect();t=m.width/v,o=m.height/v}return z.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([i,p4({content:i.innerHTML,width:t,height:o,transform:n,title:r,extra:s,watchable:!0})])}}},v8=new RegExp('"',"ug"),g4=[1105920,1112319];function z8(a){var c=a.replace(v8,""),i=S0(c,0),e=i>=g4[0]&&i<=g4[1],r=c.length===2?c[0]===c[1]:!1;return{value:Q2(r?c[0]:c),isSecondary:e||r}}function L4(a,c){var i="".concat(i0).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var n=k1(a.children),s=n.filter(function(p1){return p1.getAttribute(K2)===c})[0],t=m1.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(o0),v=t.getPropertyValue("font-weight"),m=t.getPropertyValue("content");if(s&&!o)return a.removeChild(s),e();if(o&&m!=="none"&&m!==""){var p=t.getPropertyValue("content"),C=~["Sharp"].indexOf(o[2])?N:L,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?B1[C][o[2].toLowerCase()]:l0[C][v],P=z8(p),q=P.value,U=P.isSecondary,j=o[0].startsWith("FontAwesome"),k=z3(g,q),_=k;if(j){var Z=F0(q);Z.iconName&&Z.prefix&&(k=Z.iconName,g=Z.prefix)}if(k&&!U&&(!s||s.getAttribute(o3)!==g||s.getAttribute(l3)!==_)){a.setAttribute(i,_),s&&a.removeChild(s);var B=r8(),z1=B.extra;z1.attributes[K2]=c,i3(k,g).then(function(p1){var F2=u3(h(h({},B),{},{icons:{main:p1,mask:p3()},prefix:g,iconName:_,extra:z1,watchable:!0})),i1=b.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(i1,a.firstChild):a.appendChild(i1),i1.outerHTML=F2.map(function(W6){return W1(W6)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function p8(a){return Promise.all([L4(a,"::before"),L4(a,"::after")])}function u8(a){return a.parentNode!==document.head&&!~n0.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(K2)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function b4(a){if(e1)return new Promise(function(c,i){var e=k1(a.querySelectorAll("*")).filter(u8).map(p8),r=d3.begin("searchPseudoElements");J4(),Promise.all(e).then(function(){r(),n3(),c()}).catch(function(){r(),n3(),i()})})}var d8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=b4,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?b:e;z.searchPseudoElements&&b4(r)}}},x4=!1,H8={mixout:function(){return{dom:{unwatch:function(){J4(),x4=!0}}}},hooks:function(){return{bootstrap:function(){M4(c3("mutationObserverCallbacks",{}))},noAuto:function(){c8()},watch:function(i){var e=i.observeMutationsRoot;x4?n3():M4(c3("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},N4=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var n=r.toLowerCase().split("-"),s=n[0],t=n.slice(1).join("-");if(s&&t==="h")return e.flipX=!0,e;if(s&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(s){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},M8={mixout:function(){return{parse:{transform:function(i){return N4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=N4(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,n=i.containerWidth,s=i.iconWidth,t={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),v="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(o," ").concat(v," ").concat(m)},C={transform:"translate(".concat(s/2*-1," -256)")},g={outer:t,inner:p,path:C};return{tag:"g",attributes:h({},g.outer),children:[{tag:"g",attributes:h({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:h(h({},e.icon.attributes),g.path)}]}]}}}},$2={x:0,y:0,width:"100%",height:"100%"};function S4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function C8(a){return a.tag==="g"?a.children:[a]}var V8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),n=r?L2(r.split(" ").map(function(s){return s.trim()})):p3();return n.prefix||(n.prefix=h1()),i.mask=n,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,n=i.main,s=i.mask,t=i.maskId,o=i.transform,v=n.width,m=n.icon,p=s.width,C=s.icon,g=M0({transform:o,containerWidth:p,iconWidth:v}),P={tag:"rect",attributes:h(h({},$2),{},{fill:"white"})},q=m.children?{children:m.children.map(S4)}:{},U={tag:"g",attributes:h({},g.inner),children:[S4(h({tag:m.tag,attributes:h(h({},m.attributes),g.path)},q))]},j={tag:"g",attributes:h({},g.outer),children:[U]},k="mask-".concat(t||q1()),_="clip-".concat(t||q1()),Z={tag:"mask",attributes:h(h({},$2),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,j]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:C8(C)},Z]};return e.push(B,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(k,")")},$2)}),{children:e,attributes:r}}}},g8={provides:function(c){var i=!1;m1.matchMedia&&(i=m1.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},n),{},{attributeName:"opacity"}),t={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:h(h({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},L8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return i.symbol=n,i}}}},b8=[g0,l8,f8,m8,h8,d8,H8,M8,V8,g8,L8];T0(b8,{mixoutsTo:I});var G5=I.noAuto,U5=I.config,W5=I.library,j5=I.dom,a6=I.parse,Z5=I.findIconDefinition,$5=I.toHtml,e6=I.icon,Y5=I.layer,x8=I.text,N8=I.counter;var S8=["*"],y8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},w8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},k8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},A8=a=>a.prefix!==void 0&&a.iconName!==void 0,P8=(a,c)=>A8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},_8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=s1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),F8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let n of r.icon[2])typeof n=="string"&&(this.definitions[r.prefix][n]=r)}}addIconPacks(...e){for(let r of e){let n=Object.keys(r).map(s=>r[s]);this.addIcons(...n)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=s1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),O8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=G({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[g1]});let a=c;return a})(),D8=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(V(Q),V(R))},c.\u0275cmp=S({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[g1,y],ngContentSelectors:S8,decls:1,vars:0,template:function(r,n){r&1&&(I3(),q3(0))},encapsulation:2});let a=c;return a})(),X=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,n,s,t){this.sanitizer=e,this.config=r,this.iconLibrary=n,this.stackItem=s,this.classes=[],t!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){w8();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(r);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=P8(e,this.config.defaultPrefix);if("icon"in r)return r;let n=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return n??(y8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?a6.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...k8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let n=e6(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(V(X3),V(_8),V(F8),V(O8,8),V(D8,8))},c.\u0275cmp=S({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,n){r&2&&(R3("innerHTML",n.renderedIconHTML,_3),I2("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[g1,y],decls:0,vars:0,template:function(r,n){},encapsulation:2});let a=c;return a})();var K=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=F1({type:c}),c.\u0275inj=_1({});let a=c;return a})();var i6={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]};var r6={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]};var x2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var T8={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},N2=T8;var E8={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},A1=E8;var n6={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var S2={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var s6={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var y2=(()=>{let c=class c{constructor(e,r){this.elementRef=e,this.renderer=r}onWindowScroll(){let e=this.elementRef.nativeElement;window.scrollY>0?this.renderer.addClass(e,"translucent"):this.renderer.removeClass(e,"translucent")}};c.\u0275fac=function(r){return new(r||c)(V(R),V(Q))},c.\u0275dir=G({type:c,selectors:[["","directiveScrollOpacity",""]],hostBindings:function(r,n){r&1&&x("scroll",function(){return n.onWindowScroll()},!1,a2)},standalone:!0});let a=c;return a})();var t6=(()=>{let c=class c{constructor(e,r){this.elementRef=e,this.renderer=r}onMouseEnter(){this.renderer.addClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}onMouseLeave(){this.renderer.removeClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}};c.\u0275fac=function(r){return new(r||c)(V(R),V(Q))},c.\u0275dir=G({type:c,selectors:[["","directiveDropdownHover",""]],hostBindings:function(r,n){r&1&&x("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()})},standalone:!0});let a=c;return a})();var B8=a=>({"margin-bottom.px":a}),o6=(()=>{let c=class c{constructor(e){this.elementRef=e,this.faSearch=A1,this.faUser=i6,this.faShoppingCart=N2,this.faChevronRight=s6,this.faBars=x2,this.navbarHeight=0,Q1(window,"resize").pipe(J1(null),n1(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(n=>{n!=0&&(this.navbarHeight=n)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}};c.\u0275fac=function(r){return new(r||c)(V(R))},c.\u0275cmp=S({type:c,selectors:[["app-navbar"]],standalone:!0,features:[y],decls:175,vars:10,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-desktop"],[1,"wrapper-left"],[1,"top-links"],["href","",1,"link"],[1,"link-wrapper"],["directiveDropdownHover","",1,"dropdown","dropdown-w-icons"],["href","",1,"dropdown-link"],[1,"dropdown-link-wrapper"],[3,"icon"],[1,"dropdown","sub-dropdown"],["href","",1,"sub-dropdown-link"],[1,"sub-dropdown-link-wrapper"],["directiveDropdownHover","",1,"dropdown"],[1,"wrapper-center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"wrapper-right"]],template:function(r,n){r&1&&(f(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"ul")(5,"li")(6,"a",4)(7,"div",5)(8,"span"),H(9,"Shop"),l()(),f(10,"ul",6)(11,"li")(12,"a",7)(13,"div",8)(14,"span"),H(15,"Coffee "),l(),M(16,"fa-icon",9),l()(),f(17,"ul",10)(18,"li")(19,"a",11)(20,"div",12)(21,"span"),H(22,"Classic Coffees"),l()()()(),f(23,"li")(24,"a",11)(25,"div",12)(26,"span"),H(27,"Single Origins"),l()()()()()(),f(28,"li")(29,"a",7)(30,"div",8)(31,"span"),H(32,"Coffee Club"),l(),M(33,"fa-icon",9),l()(),f(34,"ul",10)(35,"li")(36,"a",11)(37,"div",12)(38,"span"),H(39,"Join The Club"),l()()()(),f(40,"li")(41,"a",11)(42,"div",12)(43,"span"),H(44,"Manage Your Subscription"),l()()()()()(),f(45,"li")(46,"a",7)(47,"div",8)(48,"span"),H(49,"Gifts "),l(),M(50,"fa-icon",9),l()(),f(51,"ul",10)(52,"li")(53,"a",11)(54,"div",12)(55,"span"),H(56,"Gift a Coffee Subscription"),l()()()(),f(57,"li")(58,"a",11)(59,"div",12)(60,"span"),H(61,"Gift a Gift Card"),l()()()()()(),f(62,"li")(63,"a",7)(64,"div",8)(65,"span"),H(66,"Goods "),l(),M(67,"fa-icon",9),l()(),f(68,"ul",10)(69,"li")(70,"a",11)(71,"div",12)(72,"span"),H(73,"Brewing Equipment"),l()()()(),f(74,"li")(75,"a",11)(76,"div",12)(77,"span"),H(78,"Merchandise"),l()()()()()(),f(79,"li")(80,"a",7)(81,"div",8)(82,"span"),H(83,"Shop All"),l()()()()()()(),f(84,"li")(85,"a",4)(86,"div",5)(87,"span"),H(88,"Learn"),l()(),f(89,"ul",13)(90,"li")(91,"a",7)(92,"div",8)(93,"span"),H(94,"Blog"),l()()()(),f(95,"li")(96,"a",7)(97,"div",8)(98,"span"),H(99,"Contact Us"),l()()()(),f(100,"li")(101,"a",7)(102,"div",8)(103,"span"),H(104,"FAQ"),l()()()()()()(),f(105,"li")(106,"a",4)(107,"div",5)(108,"span"),H(109,"Wholesale"),l()(),f(110,"ul",13)(111,"li")(112,"a",7)(113,"div",8)(114,"span"),H(115,"Login"),l()()()(),f(116,"li")(117,"a",7)(118,"div",8)(119,"span"),H(120,"Wholesale Inquiry"),l()()()()()()(),f(121,"li")(122,"a",4)(123,"div",5)(124,"span"),H(125,"Connect"),l()(),f(126,"ul",13)(127,"li")(128,"a",7)(129,"div",8)(130,"span"),H(131,"About Us"),l()()()(),f(132,"li")(133,"a",7)(134,"div",8)(135,"span"),H(136,"Cafe"),l()()()(),f(137,"li")(138,"a",7)(139,"div",8)(140,"span"),H(141,"Careers"),l()()()(),f(142,"li")(143,"a",7)(144,"div",8)(145,"span"),H(146,"Press"),l()()()()()()()()()(),f(147,"div",14)(148,"div",15)(149,"h1",16)(150,"a",17)(151,"div",18),M(152,"img",19),l()(),M(153,"a",20),l()()(),f(154,"div",21)(155,"div",3)(156,"ul")(157,"li")(158,"a",4)(159,"div",5),M(160,"fa-icon",9),f(161,"span"),H(162,"Search"),l()()()(),f(163,"li")(164,"a",4)(165,"div",5),M(166,"fa-icon",9),f(167,"span"),H(168,"Account"),l()()()(),f(169,"li")(170,"a",4)(171,"div",5),M(172,"fa-icon",9),f(173,"span"),H(174,"Cart"),l()()()()()()()()()),r&2&&(d("ngStyle",l1(8,B8,-n.navbarHeight)),u(16),d("icon",n.faChevronRight),u(17),d("icon",n.faChevronRight),u(17),d("icon",n.faChevronRight),u(17),d("icon",n.faChevronRight),u(93),d("icon",n.faSearch),u(6),d("icon",n.faUser),u(6),d("icon",n.faShoppingCart))},dependencies:[T,s2,K,X,y2,t6],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-desktop[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;position:relative;margin:0 15px;font-family:custom-font;font-size:14px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]{display:flex;flex:1 1 100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:inline-block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%]{visibility:visible;opacity:1}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{visibility:hidden;display:grid;opacity:0;margin-top:15px;position:absolute;grid-template-columns:1fr;padding:20px;min-width:150px;max-width:300px;background-color:var(--primary-bg-color);transition:opacity .3s,visibility .3s;cursor:default}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:7px 0;width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{transition:color .3s;position:relative}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-bottom:4px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]{flex-basis:100px;align-self:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2800px;max-height:2800px;width:100px;height:100px;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;justify-content:flex-end}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;transition:color .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:18px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-dropdown[_ngcontent-%COMP%]{opacity:1!important;visibility:visible!important}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:9px}.sub-dropdown[_ngcontent-%COMP%]{position:absolute;left:100%;top:-20px;margin-top:0!important;margin-left:20px!important;visibility:hidden!important;opacity:0!important;transition:opacity .3s,visibility .3s;cursor:default}.sub-dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color)!important}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:0%!important}']});let a=c;return a})();var l6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=S({type:c,selectors:[["app-footer"]],standalone:!0,features:[y],decls:2,vars:0,template:function(r,n){r&1&&(f(0,"p"),H(1,"footer works!"),l())}});let a=c;return a})();var f6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=S({type:c,selectors:[["app-top-announcement"]],standalone:!0,features:[y],decls:3,vars:0,consts:[[1,"announcement-wrapper"]],template:function(r,n){r&1&&(f(0,"div",0)(1,"span"),H(2,"Free shipping for all orders over $50"),l()())},styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.announcement-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--announcement-bg-color)}.announcement-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color);padding:10px 30px;font-size:16px;font-family:custom-font}']});let a=c;return a})();function R8(a,c){if(a&1){let i=B3();f(0,"div",3)(1,"button",4),x("click",function(){k3(i);let r=D().index,n=D();return A3(n.toggleListButton(n.elementNumber+r+1))}),M(2,"fa-icon",5),l()()}if(a&2){let i=D().index,e=D();u(2),o1("active",e.toggleListButtonArray[e.elementNumber+i+1]),d("icon",e.faChevronDown)}}function I8(a,c){if(a&1&&(F(0),f(1,"ul",11)(2,"li",12)(3,"div",9)(4,"a",2),H(5),l()()()(),O()),a&2){let i=c.$implicit,e=D().index,r=D();u(),o1("active",r.toggleListButtonArray[r.elementNumber+e+1]),u(4),d1("",i.subListTitle," ")}}function q8(a,c){if(a&1&&(F(0),f(1,"ul",7)(2,"li",8)(3,"div",9)(4,"a",2),H(5),l(),A(6,R8,3,3,"div",10),l()(),A(7,I8,6,3,"ng-container",6),l(),O()),a&2){let i=c.$implicit,e=D();u(),o1("active",e.toggleListButtonArray[e.elementNumber]),u(4),d1(" ",i.subTitle," "),u(),d("ngIf",i.subList),u(),d("ngForOf",i.subList)}}var m6=(()=>{let c=class c{constructor(){this.faChevronDown=n6,this.toggleListButtonArray=[]}toggleListButton(e){this.toggleListButtonArray[e]=!this.toggleListButtonArray[e]}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=S({type:c,selectors:[["app-list-item"]],inputs:{data:"data",elementNumber:"elementNumber"},standalone:!0,features:[y],decls:8,vars:5,consts:[[1,"side-menu-item-container"],[1,"side-menu-item","first"],["href",""],[1,"list-toggle"],[3,"click"],[3,"icon"],[4,"ngFor","ngForOf"],[1,"side-menu-sublist"],[1,"side-menu-sublist-item"],[1,"side-menu-item"],["class","list-toggle",4,"ngIf"],[1,"side-menu-sub-sublist"],[1,"side-menu-sub-sublist-item"]],template:function(r,n){r&1&&(f(0,"li",0)(1,"div",1)(2,"a",2),H(3),l(),f(4,"div",3)(5,"button",4),x("click",function(){return n.toggleListButton(n.elementNumber)}),M(6,"fa-icon",5),l()()(),A(7,q8,8,5,"ng-container",6),l()),r&2&&(u(3),d1(" ",n.data.title," "),u(3),o1("active",n.toggleListButtonArray[n.elementNumber]),d("icon",n.faChevronDown),u(),d("ngForOf",n.data.dropdownItemList))},dependencies:[T,b1,x1,K,X],styles:[".side-menu-item-container[_ngcontent-%COMP%]{padding:0 20px;height:auto;overflow:hidden}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;padding:15px 0;list-style:none}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--primary-bg-color);text-decoration:none;font-family:custom-font!important;font-size:18px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   .list-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;border:none;background-color:inherit}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item.first[_ngcontent-%COMP%]{position:relative;background-color:var(--primary-text-color);z-index:3;padding:20px 0;border-bottom:solid 1px rgba(166,151,143,.25);margin-bottom:1px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]{list-style:none;padding-left:10px;z-index:1}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]   .side-menu-sublist-item[_ngcontent-%COMP%]{margin:0}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]   .side-menu-sublist-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sub-sublist[_ngcontent-%COMP%]{overflow:hidden;list-style:none;z-index:99999;padding-left:20px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sub-sublist[_ngcontent-%COMP%]   .side-menu-sub-sublist-item[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}fa-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;transition:transform .5s;cursor:pointer}fa-icon.active[_ngcontent-%COMP%]{transform:rotate(180deg)}.side-menu-sublist[_ngcontent-%COMP%], .side-menu-sub-sublist[_ngcontent-%COMP%]{max-height:0;transition:max-height .3s ease-out}.side-menu-sublist.active[_ngcontent-%COMP%], .side-menu-sub-sublist.active[_ngcontent-%COMP%]{max-height:1000px;transition:max-height .5s ease-in}"]});let a=c;return a})();var h6={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var v6={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};var z6={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};var p6={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};var u6=(()=>{let c=class c{constructor(){}getItemList(){return[{title:"Shop",dropdownItemList:[{subTitle:"Coffee",subList:[{subListTitle:"Classic Coffees"},{subListTitle:"Single Origins"}]},{subTitle:"Coffee Clubs",subList:[{subListTitle:"Join the Club"},{subListTitle:"Manage Your Subscription"}]},{subTitle:"Gifts",subList:[{subListTitle:"Gift a Coffee Subscription"},{subListTitle:"Gift a Gift Card"}]},{subTitle:"Goods",subList:[{subListTitle:"Brewing Equipment"},{subListTitle:"Merchandise"}]},{subTitle:"Shop All"}]},{title:"Learn",dropdownItemList:[{subTitle:"Blog"},{subTitle:"Contact Us"},{subTitle:"FAQ"}]},{title:"Wholesale",dropdownItemList:[{subTitle:"Login"},{subTitle:"Wholesale Inquiry"},{subTitle:"FAQ"}]},{title:"Connect",dropdownItemList:[{subTitle:"About Us"},{subTitle:"Cafe"},{subTitle:"Carrers"},{subTitle:"Press"}]}]}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=s1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var U8=a=>({show:a});function W8(a,c){if(a&1&&(F(0),M(1,"app-list-item",9),O()),a&2){let i=c.$implicit,e=c.index;u(),d("data",i)("elementNumber",e)}}var d6=(()=>{let c=class c{constructor(e){this._itemService=e,this.toggleMenuRequest=new t1,this.showSideMenu=!1,this.faXmark=S2,this.faFacebook=v6,this.faTwitter=p6,this.faInstagram=h6,this.faYoutube=z6,this.toggleListButtonArray=[],this.itemList=[]}ngOnInit(){this.itemList=this._itemService.getItemList()}toggleMenu(){this.showSideMenu=!1,this.toggleMenuRequest.emit()}};c.\u0275fac=function(r){return new(r||c)(V(u6))},c.\u0275cmp=S({type:c,selectors:[["app-side-mobile-menu"]],inputs:{showSideMenu:"showSideMenu"},outputs:{toggleMenuRequest:"toggleMenuRequest"},standalone:!0,features:[y],decls:18,vars:9,consts:[[1,"side-menu",3,"ngClass"],[1,"side-menu-logo"],[3,"click"],[3,"icon"],[1,"side-menu-main-list"],[4,"ngFor","ngForOf"],[1,"side-menu-footer"],["href",""],[1,"icons-wrapper"],[3,"data","elementNumber"]],template:function(r,n){r&1&&(f(0,"div",0)(1,"div",1)(2,"button",2),x("click",function(){return n.toggleMenu()}),M(3,"fa-icon",3),l()(),f(4,"ul",4),A(5,W8,2,2,"ng-container",5),l(),f(6,"div",6)(7,"a",7),H(8," Log in "),l(),f(9,"div",8)(10,"a",7),M(11,"fa-icon",3),l(),f(12,"a",7),M(13,"fa-icon",3),l(),f(14,"a",7),M(15,"fa-icon",3),l(),f(16,"a",7),M(17,"fa-icon",3),l()()()()),r&2&&(d("ngClass",l1(7,U8,n.showSideMenu)),u(3),d("icon",n.faXmark),u(2),d("ngForOf",n.itemList),u(6),d("icon",n.faFacebook),u(2),d("icon",n.faTwitter),u(2),d("icon",n.faInstagram),u(2),d("icon",n.faYoutube))},dependencies:[T,n2,b1,m6,K,X],styles:[".side-menu[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:90%;background-color:var(--primary-text-color);z-index:9999;transition:transform .3s ease;transform:translate(-110%);overflow:auto}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;position:sticky;justify-content:flex-end;z-index:5;width:100%;background-color:transparent;height:6%;top:0}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;border:none;padding:0}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:0 15px;font-size:35px;cursor:pointer}.side-menu[_ngcontent-%COMP%]   .side-menu-main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;position:relative;width:100%;min-height:88%;list-style:none;padding:0;margin:0 0 auto}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]{z-index:5;width:100%;background-color:inherit;height:calc(6% - 2px);display:flex;align-items:center;flex-wrap:wrap;overflow:auto;position:sticky;bottom:0;border-top:solid 2px rgb(166,151,143)}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:custom-font;font-size:14px;padding-left:20px;cursor:pointer;color:var(--primary-bg-color);font-weight:700}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]{margin-left:auto;padding-right:20px;display:flex;align-items:center;flex-wrap:wrap}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 10px;display:flex;align-items:center;text-decoration:none;color:var(--primary-bg-color)}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}.show[_ngcontent-%COMP%]{transform:translate(0)}"]});let a=c;return a})();var b6=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(V(Q),V(R))},c.\u0275dir=G({type:c});let a=c;return a})(),j8=(()=>{let c=class c extends b6{};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=R2(c)))(n||c)}})(),c.\u0275dir=G({type:c,features:[L1]});let a=c;return a})(),x6=new u1("");var Z8={provide:x6,useExisting:E2(()=>P2),multi:!0};function $8(){let a=G2()?G2().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var Y8=new u1(""),P2=(()=>{let c=class c extends b6{constructor(e,r,n){super(e,r),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!$8())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(V(Q),V(R),V(Y8,8))},c.\u0275dir=G({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,n){r&1&&x("input",function(t){return n._handleInput(t.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(t){return n._compositionEnd(t.target.value)})},features:[q2([Z8]),L1]});let a=c;return a})();var X8=new u1(""),K8=new u1("");function N6(a){return a!=null}function S6(a){return W3(a)?x3(a):a}function y6(a){let c={};return a.forEach(i=>{c=i!=null?$($({},c),i):c}),Object.keys(c).length===0?null:c}function w6(a,c){return c.map(i=>i(a))}function Q8(a){return!a.validate}function k6(a){return a.map(c=>Q8(c)?c:i=>c.validate(i))}function J8(a){if(!a)return null;let c=a.filter(N6);return c.length==0?null:function(i){return y6(w6(i,c))}}function A6(a){return a!=null?J8(k6(a)):null}function c5(a){if(!a)return null;let c=a.filter(N6);return c.length==0?null:function(i){let e=w6(i,c).map(S6);return N3(e).pipe(n1(y6))}}function P6(a){return a!=null?c5(k6(a)):null}function H6(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function _6(a){return a._rawValidators}function F6(a){return a._rawAsyncValidators}function M3(a){return a?Array.isArray(a)?a:[a]:[]}function k2(a,c){return Array.isArray(a)?a.includes(c):a===c}function M6(a,c){let i=M3(c);return M3(a).forEach(r=>{k2(i,r)||i.push(r)}),i}function C6(a,c){return M3(c).filter(i=>!k2(a,i))}var C3=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=A6(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=P6(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}};var X1=class extends C3{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},V3=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},a5={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Z7=r1($({},a5),{"[class.ng-submitted]":"isSubmitted"}),O6=(()=>{let c=class c extends V3{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(V(X1,2))},c.\u0275dir=G({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,n){r&2&&o1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[L1]});let a=c;return a})();var $1="VALID",w2="INVALID",P1="PENDING",Y1="DISABLED";function e5(a){return(_2(a)?a.validators:a)||null}function i5(a){return Array.isArray(a)?A6(a):a||null}function r5(a,c){return(_2(c)?c.asyncValidators:a)||null}function n5(a){return Array.isArray(a)?P6(a):a||null}function _2(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}var g3=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===$1}get invalid(){return this.status===w2}get pending(){return this.status==P1}get disabled(){return this.status===Y1}get enabled(){return this.status!==Y1}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(M6(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(M6(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(C6(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(C6(c,this._rawAsyncValidators))}hasValidator(c){return k2(this._rawValidators,c)}hasAsyncValidator(c){return k2(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=P1,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=Y1,this.errors=null,this._forEachChild(e=>{e.disable(r1($({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(r1($({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=$1,this._forEachChild(e=>{e.enable(r1($({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(r1($({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===$1||this.status===P1)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Y1:$1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=P1,this._hasOwnPendingAsyncValidator=!0;let i=S6(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new t1,this.statusChanges=new t1}_calculateStatus(){return this._allControlsDisabled()?Y1:this.errors?w2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(P1)?P1:this._anyControlsHaveStatus(w2)?w2:$1}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){_2(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=i5(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=n5(this._rawAsyncValidators)}};var D6=new u1("CallSetDisabledState",{providedIn:"root",factory:()=>L3}),L3="always";function s5(a,c,i=L3){o5(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),f5(a,c),h5(a,c),m5(a,c),t5(a,c)}function V6(a,c,i=!0){let e=()=>{};c.valueAccessor&&(c.valueAccessor.registerOnChange(e),c.valueAccessor.registerOnTouched(e)),l5(a,c),a&&(c._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function A2(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function t5(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function o5(a,c){let i=_6(a);c.validator!==null?a.setValidators(H6(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=F6(a);c.asyncValidator!==null?a.setAsyncValidators(H6(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();A2(c._rawValidators,r),A2(c._rawAsyncValidators,r)}function l5(a,c){let i=!1;if(a!==null){if(c.validator!==null){let r=_6(a);if(Array.isArray(r)&&r.length>0){let n=r.filter(s=>s!==c.validator);n.length!==r.length&&(i=!0,a.setValidators(n))}}if(c.asyncValidator!==null){let r=F6(a);if(Array.isArray(r)&&r.length>0){let n=r.filter(s=>s!==c.asyncValidator);n.length!==r.length&&(i=!0,a.setAsyncValidators(n))}}}let e=()=>{};return A2(c._rawValidators,e),A2(c._rawAsyncValidators,e),i}function f5(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&T6(a,c)})}function m5(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&T6(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function T6(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function h5(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function v5(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function z5(a){return Object.getPrototypeOf(a.constructor)===j8}function p5(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(n=>{n.constructor===P2?i=n:z5(n)?e=n:r=n}),r||e||i||null}function g6(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function L6(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var E6=class extends g3{constructor(c=null,i,e){super(e5(i),r5(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),_2(i)&&(i.nonNullable||i.initialValueIsDefault)&&(L6(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){g6(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){g6(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){L6(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var B6=new u1(""),u5={provide:X1,useExisting:E2(()=>b3)},b3=(()=>{let c=class c extends X1{set isDisabled(e){}constructor(e,r,n,s,t){super(),this._ngModelWarningConfig=s,this.callSetDisabledState=t,this.update=new t1,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=p5(this,n)}ngOnChanges(e){if(this._isControlChanged(e)){let r=e.form.previousValue;r&&V6(r,this,!1),s5(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}v5(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&V6(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}};c._ngModelWarningSentOnce=!1,c.\u0275fac=function(r){return new(r||c)(V(X8,10),V(K8,10),V(x6,10),V(B6,8),V(D6,8))},c.\u0275dir=G({type:c,selectors:[["","formControl",""]],inputs:{form:[c2.None,"formControl","form"],isDisabled:[c2.None,"disabled","isDisabled"],model:[c2.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[q2([u5]),L1,g1]});let a=c;return a})();var d5=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=F1({type:c}),c.\u0275inj=_1({});let a=c;return a})();var R6=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:B6,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:D6,useValue:e.callSetDisabledState??L3}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=F1({type:c}),c.\u0275inj=_1({imports:[d5]});let a=c;return a})();var M5=a=>({show:a});function C5(a,c){if(a&1&&(F(0),f(1,"div",12),M(2,"fa-icon",4),l(),O()),a&2){let i=D();u(2),d("icon",i.faCircleNotch)}}function V5(a,c){a&1&&(F(0),H(1," No hay resultados para su busqueda "),O())}function g5(a,c){if(a&1&&(F(0),f(1,"div",16),H(2),l(),O()),a&2){let i=c.$implicit;u(2),d1(" ",i.itemName," ")}}function L5(a,c){if(a&1&&(F(0),f(1,"div",15)(2,"h2"),H(3),l()(),A(4,g5,3,1,"ng-container",11),O()),a&2){let i=D(2).$implicit;u(3),i2(i.name),u(),d("ngForOf",i.items)}}function b5(a,c){if(a&1&&(f(0,"span",22),H(1),l()),a&2){let i=D().$implicit;u(),d1("$",i==null?null:i.price,"")}}function x5(a,c){if(a&1&&(F(0),f(1,"div",16)(2,"div",17),M(3,"img",18),l(),f(4,"div",19)(5,"span",20),H(6),l(),A(7,b5,2,1,"span",21),l()(),O()),a&2){let i=c.$implicit;u(6),i2(i.itemName),u(),d("ngIf",i==null?null:i.price)}}function N5(a,c){if(a&1&&(f(0,"div",15)(1,"h2"),H(2),l()(),A(3,x5,8,2,"ng-container",11)),a&2){let i=D(2).$implicit;u(2),i2(i.name),u(),d("ngForOf",i.items)}}function S5(a,c){if(a&1&&(F(0),f(1,"div",13),A(2,L5,5,2,"ng-container",14),l(),A(3,N5,4,2,"ng-template",null,0,r2),O()),a&2){let i=e2(4),e=D().$implicit;u(2),d("ngIf",!e.hasImage)("ngIfElse",i)}}function y5(a,c){if(a&1&&(F(0),A(1,S5,5,2,"ng-container",10),O()),a&2){let i=c.$implicit;u(),d("ngIf",i.items.length>0)}}var I6=(()=>{let c=class c{constructor(){this.toggleSearchMenuRequest=new t1,this.showSideSearchMenu=!1,this.faXmark=S2,this.faSearch=A1,this.faCircleNotch=r6,this.searchControl=new E6(void 0),this.$originalPageInfo=new K1,this.$filteredPageInfo=new K1,this.$filter=new K1,this.isSearching=!1,this.nothingFound=!1,this.pageInfo=[{name:"SUGGESTIONS",hasImage:!1,items:[{itemName:"mexico"},{itemName:"Brasil"},{itemName:"Per\xFA"}]},{name:"COLLECTIONS",hasImage:!0,items:[{itemName:"gift a coffe",imgUrl:""},{itemName:"gift a coffe subcription",imgUrl:""},{itemName:"from atlanta with love",imgUrl:""}]},{name:"PAGES",hasImage:!1,items:[{itemName:"About us"},{itemName:"Susbcribe"},{itemName:"Shopp all"}]},{name:"PRODUCTS",hasImage:!0,items:[{itemName:"produto 1",price:"90",imgUrl:""},{itemName:"produto 2",price:"40",imgUrl:""},{itemName:"produto 3",price:"50",imgUrl:""}]}]}ngOnInit(){this.$originalPageInfo=this.getPageInfoForSearching(),this.$filter=this.searchControl.valueChanges,this.$filter.subscribe(e=>{e?.trim()===""||e===void 0?this.$filteredPageInfo=O2([]):this.isSearching=!0}),this.search().subscribe()}getPageInfoForSearching(){return O2(this.pageInfo)}toggleSearchMenu(){this.showSideSearchMenu=!1,this.toggleSearchMenuRequest.emit()}search(){return this.$filteredPageInfo=this.$filter.pipe(S3(500),y3(e=>this.$originalPageInfo.pipe(n1(r=>r.map(n=>r1($({},n),{items:n.items.filter(s=>s.itemName.toLowerCase().includes(e?.toLowerCase()))}))))),D2(()=>{this.isSearching=!1}),D2(e=>{if(this.searchControl.value!==void 0&&this.searchControl.value?.trim()!==""){let r=e.every(n=>n.items.length===0);this.nothingFound=r}else this.nothingFound=!1}))}clearSearch(){this.searchControl.setValue(void 0),this.search()}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=S({type:c,selectors:[["app-side-mobile-search"]],inputs:{showSideSearchMenu:"showSideSearchMenu"},outputs:{toggleSearchMenuRequest:"toggleSearchMenuRequest"},standalone:!0,features:[y],decls:15,vars:12,consts:[["ItemWithImage",""],[1,"side-menu-search",3,"ngClass"],[1,"side-menu-logo"],[3,"click"],[3,"icon"],[1,"side-search-wrapper"],[1,"search-drawer"],[1,"search",3,"icon"],["type","text",1,"search-input",3,"keypress","formControl"],[1,"delete",3,"click","icon"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"loading-items-wrapper"],[1,"items-wrapper"],[4,"ngIf","ngIfElse"],[1,"item-title"],[1,"sub-item"],[1,"image-wrapper"],["src","","alt",""],[1,"description"],[1,"name"],["class","price",4,"ngIf"],[1,"price"]],template:function(r,n){r&1&&(f(0,"div",1)(1,"div",2)(2,"span"),H(3,"Search"),l(),f(4,"button",3),x("click",function(){return n.toggleSearchMenu()}),M(5,"fa-icon",4),l()(),f(6,"div",5)(7,"div",6),M(8,"fa-icon",7),f(9,"input",8),x("keypress",function(){return n.search()}),l(),f(10,"fa-icon",9),x("click",function(){return n.clearSearch()}),l()(),A(11,C5,3,1,"ng-container",10)(12,V5,2,0,"ng-container",10)(13,y5,2,1,"ng-container",11),G3(14,"async"),l()()),r&2&&(d("ngClass",l1(10,M5,n.showSideSearchMenu)),u(5),d("icon",n.faXmark),u(3),d("icon",n.faSearch),u(),d("formControl",n.searchControl),u(),d("icon",n.faXmark),u(),d("ngIf",n.isSearching),u(),d("ngIf",n.nothingFound),u(),d("ngForOf",U3(14,8,n.$filteredPageInfo)))},dependencies:[T,n2,b1,x1,Z3,K,X,R6,P2,O6,b3],styles:['.side-menu-search[_ngcontent-%COMP%]{position:fixed;top:0;right:0;height:100%;width:90%;background-color:var(--primary-text-color);z-index:9999;transition:transform .3s ease;transform:translate(110%)}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;position:sticky;z-index:5;width:100%;background-color:transparent;height:6%;top:0}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;border:none;padding:0}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:0 15px;font-size:35px;cursor:pointer}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px;margin-right:auto;font-size:26px;font-family:custom-font;font-weight:700}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;position:relative;width:100%;min-height:88%;list-style:none;padding:0;margin:0 0 auto}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]{position:relative;padding:40px 33px;display:flex;align-items:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]:after{content:"";width:calc(100% - 60px);height:1px;background-color:var(--primary-bg-color);position:absolute;left:30px;top:70%;border-radius:10px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border:none;font-size:14px;background-color:inherit;outline:none}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon.search[_ngcontent-%COMP%]{padding-right:8px;font-size:20px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon.delete[_ngcontent-%COMP%]{padding-left:5px;font-size:15px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .loading-items-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .loading-items-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:24px;animation:_ngcontent-%COMP%_spin 1s linear infinite}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;position:relative;padding-left:30px;width:auto;font-family:custom-font}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]:after{content:"";width:calc(100% - 60px);height:1px;background-color:var(--primary-bg-color-lighten50);position:absolute;left:30px;bottom:1px;border-radius:10px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--primary-bg-color-lighten50);font-size:18px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:10px 0;color:var(--link-color);font-weight:700;font-size:16px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:green}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-left:10px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:400;margin-right:auto;color:var(--primary-bg-color)}.show[_ngcontent-%COMP%]{transform:translate(0)}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']});let a=c;return a})();var w5=a=>({"margin-bottom.px":a}),q6=(()=>{let c=class c{constructor(e){this.elementRef=e,this.faSearch=A1,this.faShoppingCart=N2,this.faBars=x2,this.navbarHeight=0,this.showSideMenu=!1,this.showSideSearchMenu=!0,Q1(window,"resize").pipe(J1(null),n1(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(n=>{n!=0&&(this.navbarHeight=n)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}toggleSideMenu(){this.showSideMenu=!this.showSideMenu}toggleSearchSideMenu(){this.showSideSearchMenu=!this.showSideSearchMenu}};c.\u0275fac=function(r){return new(r||c)(V(R))},c.\u0275cmp=S({type:c,selectors:[["app-navbar-mobile"]],standalone:!0,features:[y],decls:22,vars:8,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-mobile"],[1,"wrapper-padded"],[1,"table-grid-container"],[1,"grid-item-container","left"],[1,"grid-item"],[3,"click"],[3,"icon"],[1,"grid-item-container","center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"grid-item-container","right"],[3,"toggleMenuRequest","showSideMenu"],[3,"toggleSearchMenuRequest","showSideSearchMenu"]],template:function(r,n){r&1&&(f(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"button",6),x("click",function(){return n.toggleSideMenu()}),M(7,"fa-icon",7),l()()(),f(8,"div",8)(9,"div",9)(10,"h1",10)(11,"a",11)(12,"div",12),M(13,"img",13),l()(),M(14,"a",14),l()()(),f(15,"div",15)(16,"div",5)(17,"button",6),x("click",function(){return n.toggleSearchSideMenu()}),M(18,"fa-icon",7),l(),M(19,"fa-icon",7),l()()()()()(),f(20,"app-side-mobile-menu",16),x("toggleMenuRequest",function(){return n.toggleSideMenu()}),l(),f(21,"app-side-mobile-search",17),x("toggleSearchMenuRequest",function(){return n.toggleSearchSideMenu()}),l()),r&2&&(d("ngStyle",l1(6,w5,-n.navbarHeight)),u(7),d("icon",n.faBars),u(11),d("icon",n.faSearch),u(),d("icon",n.faShoppingCart),u(),d("showSideMenu",n.showSideMenu),u(),d("showSideSearchMenu",n.showSideSearchMenu))},dependencies:[T,s2,K,X,y2,d6,I6],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:fixed;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]{padding:0 30px;position:relative;margin:0 auto}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]{display:table;table-layout:fixed;width:100%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container[_ngcontent-%COMP%]{display:table-cell;float:none;vertical-align:middle;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]{width:50%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}@media screen and (max-width: 768px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}@media screen and (max-width: 425px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}']});let a=c;return a})();function k5(a,c){a&1&&(F(0),M(1,"app-navbar-mobile"),O())}function A5(a,c){a&1&&M(0,"app-navbar")}var G6=(()=>{let c=class c{constructor(){this.isMobile=!1,this.checkIfMobile()}onResize(){this.checkIfMobile()}checkIfMobile(){this.isMobile=window.innerWidth<=990}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=S({type:c,selectors:[["app-layout"]],hostBindings:function(r,n){r&1&&x("resize",function(t){return n.onResize(t)},!1,a2)},standalone:!0,features:[y],decls:8,vars:2,consts:[["desktopNavbar",""],[4,"ngIf","ngIfElse"]],template:function(r,n){if(r&1&&(f(0,"main"),M(1,"app-top-announcement"),A(2,k5,2,0,"ng-container",1)(3,A5,1,0,"ng-template",null,0,r2),f(5,"div"),M(6,"router-outlet"),l(),M(7,"app-footer"),l()),r&2){let s=e2(4);u(2),d("ngIf",n.isMobile)("ngIfElse",s)}},dependencies:[T,x1,o6,l6,K3,f6,q6],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5)}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1000;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}']});let a=c;return a})();var U6=(()=>{let c=class c{constructor(){this.title="coffee-shop"}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=S({type:c,selectors:[["app-root"]],standalone:!0,features:[y],decls:1,vars:0,template:function(r,n){r&1&&M(0,"app-layout")},dependencies:[T,G6]});let a=c;return a})();Y3(U6,a4).catch(a=>console.error(a));
