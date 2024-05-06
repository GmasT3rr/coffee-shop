import{a as J3,b as c4,c as a4,d as e4,e as i4}from"./chunk-3VD2MY37.js";import{$ as S,$a as C,B as P3,Cb as Z2,Ea as E3,Fa as n2,Fb as o2,Ha as u,Ia as M,Ja as B3,K as e2,Ka as R3,L as _3,La as I3,Ma as W,Mb as x1,N as R2,Na as q3,Nb as N1,O as I2,Oa as G3,Ob as S1,P as q2,Pb as l2,Q as X,Qb as Q3,R as O1,Ra as b1,Rb as E,T as d1,Va as A,W as G2,Wa as W2,Xa as d,Ya as l1,Za as f,_ as i2,_a as l,a as Y,aa as D1,ab as F,b as s1,ba as G,bb as O,ca as F3,cb as U3,db as W3,eb as L,f as c2,fb as T,ga as L1,gb as j3,ha as O3,hb as Z3,ia as D3,ib as r2,j as w3,ja as U2,jb as H,kb as s2,l as k3,lb as H1,m as B2,ma as R,mb as j2,na as o1,nb as y,ob as f1,pb as $3,q as t1,qb as Y3,rb as X3,sa as T3,sb as t2,ub as K3,w as A3,x as a2}from"./chunk-2UQSBKPK.js";var X6="@",K6=(()=>{let c=class c{constructor(e,n,r,s,t){this.doc=e,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=t,this._rendererFactoryPromise=null,this.scheduler=G2(R3,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-XNNUGMZ7.js")).catch(n=>{throw new I2(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let s=new r(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new $2(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(t=>{let o=t.createRenderer(e,n);s.use(o)}).catch(t=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};c.\u0275fac=function(n){B3()},c.\u0275prov=X({token:c,factory:c.\u0275fac});let a=c;return a})(),$2=class{constructor(c){this.delegate=c,this.replay=[],this.\u0275type=1}use(c){if(this.delegate=c,this.replay!==null){for(let i of this.replay)i(c);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(c,i){return this.delegate.createElement(c,i)}createComment(c){return this.delegate.createComment(c)}createText(c){return this.delegate.createText(c)}get destroyNode(){return this.delegate.destroyNode}appendChild(c,i){this.delegate.appendChild(c,i)}insertBefore(c,i,e,n){this.delegate.insertBefore(c,i,e,n)}removeChild(c,i,e){this.delegate.removeChild(c,i,e)}selectRootElement(c,i){return this.delegate.selectRootElement(c,i)}parentNode(c){return this.delegate.parentNode(c)}nextSibling(c){return this.delegate.nextSibling(c)}setAttribute(c,i,e,n){this.delegate.setAttribute(c,i,e,n)}removeAttribute(c,i,e){this.delegate.removeAttribute(c,i,e)}addClass(c,i){this.delegate.addClass(c,i)}removeClass(c,i){this.delegate.removeClass(c,i)}setStyle(c,i,e,n){this.delegate.setStyle(c,i,e,n)}removeStyle(c,i,e){this.delegate.removeStyle(c,i,e)}setProperty(c,i,e){this.shouldReplay(i)&&this.replay.push(n=>n.setProperty(c,i,e)),this.delegate.setProperty(c,i,e)}setValue(c,i){this.delegate.setValue(c,i)}listen(c,i,e){return this.shouldReplay(i)&&this.replay.push(n=>n.listen(c,i,e)),this.delegate.listen(c,i,e)}shouldReplay(c){return this.replay!==null&&c.startsWith(X6)}};function n4(a="animations"){return q3("NgAsyncAnimations"),F3([{provide:I3,useFactory:(c,i,e)=>new K6(c,i,e,a),deps:[o2,J3,G3]},{provide:T3,useValue:a==="noop"?"NoopAnimations":"BrowserAnimations"}])}var r4=[{path:"",loadChildren:()=>import("./chunk-4SV6BTS7.js").then(a=>a.HomeModule)}];var s4={providers:[i4(r4),n4()]};function t4(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),i.push.apply(i,e)}return i}function h(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?t4(Object(i),!0).forEach(function(e){w(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):t4(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function V2(a){"@babel/helpers - typeof";return V2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},V2(a)}function Q6(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function o4(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function J6(a,c,i){return c&&o4(a.prototype,c),i&&o4(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function w(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function f3(a,c){return a0(a)||i0(a,c)||_4(a,c)||r0()}function W1(a){return c0(a)||e0(a)||_4(a)||n0()}function c0(a){if(Array.isArray(a))return J2(a)}function a0(a){if(Array.isArray(a))return a}function e0(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function i0(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],n=!0,r=!1,s,t;try{for(i=i.call(a);!(n=(s=i.next()).done)&&(e.push(s.value),!(c&&e.length===c));n=!0);}catch(o){r=!0,t=o}finally{try{!n&&i.return!=null&&i.return()}finally{if(r)throw t}}return e}}function _4(a,c){if(a){if(typeof a=="string")return J2(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return J2(a,c)}}function J2(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function n0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l4=function(){},m3={},F4={},O4=null,D4={mark:l4,measure:l4};try{typeof window<"u"&&(m3=window),typeof document<"u"&&(F4=document),typeof MutationObserver<"u"&&(O4=MutationObserver),typeof performance<"u"&&(D4=performance)}catch{}var s0=m3.navigator||{},f4=s0.userAgent,m4=f4===void 0?"":f4,h1=m3,x=F4,h4=O4,f2=D4,Z5=!!h1.document,n1=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",T4=~m4.indexOf("MSIE")||~m4.indexOf("Trident/"),m2,h2,v2,z2,p2,a1="___FONT_AWESOME___",c3=16,E4="fa",B4="svg-inline--fa",V1="data-fa-i2svg",a3="data-fa-pseudo-element",t0="data-fa-pseudo-element-pending",h3="data-prefix",v3="data-icon",v4="fontawesome-i2svg",o0="async",l0=["HTML","HEAD","STYLE","SCRIPT"],R4=function(){try{return!0}catch{return!1}}(),b="classic",N="sharp",z3=[b,N];function j1(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[b]}})}var R1=j1((m2={},w(m2,b,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),w(m2,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),m2)),I1=j1((h2={},w(h2,b,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(h2,N,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),h2)),q1=j1((v2={},w(v2,b,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(v2,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),v2)),f0=j1((z2={},w(z2,b,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(z2,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),z2)),m0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,I4="fa-layers-text",h0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,v0=j1((p2={},w(p2,b,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(p2,N,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),p2)),q4=[1,2,3,4,5,6,7,8,9,10],z0=q4.concat([11,12,13,14,15,16,17,18,19,20]),p0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],M1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G1=new Set;Object.keys(I1[b]).map(G1.add.bind(G1));Object.keys(I1[N]).map(G1.add.bind(G1));var u0=[].concat(z3,W1(G1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M1.GROUP,M1.SWAP_OPACITY,M1.PRIMARY,M1.SECONDARY]).concat(q4.map(function(a){return"".concat(a,"x")})).concat(z0.map(function(a){return"w-".concat(a)})),E1=h1.FontAwesomeConfig||{};function d0(a){var c=x.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function H0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}x&&typeof x.querySelector=="function"&&(z4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],z4.forEach(function(a){var c=f3(a,2),i=c[0],e=c[1],n=H0(d0(i));n!=null&&(E1[e]=n)}));var z4,G4={styleDefault:"solid",familyDefault:"classic",cssPrefix:E4,replacementClass:B4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};E1.familyPrefix&&(E1.cssPrefix=E1.familyPrefix);var A1=h(h({},G4),E1);A1.autoReplaceSvg||(A1.observeMutations=!1);var z={};Object.keys(G4).forEach(function(a){Object.defineProperty(z,a,{enumerable:!0,set:function(i){A1[a]=i,B1.forEach(function(e){return e(z)})},get:function(){return A1[a]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){A1.cssPrefix=c,B1.forEach(function(i){return i(z)})},get:function(){return A1.cssPrefix}});h1.FontAwesomeConfig=z;var B1=[];function M0(a){return B1.push(a),function(){B1.splice(B1.indexOf(a),1)}}var m1=c3,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function C0(a){if(!(!a||!n1)){var c=x.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=x.head.childNodes,e=null,n=i.length-1;n>-1;n--){var r=i[n],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=r)}return x.head.insertBefore(c,e),a}}var V0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U1(){for(var a=12,c="";a-- >0;)c+=V0[Math.random()*62|0];return c}function P1(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function p3(a){return a.classList?P1(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function U4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g0(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(U4(a[i]),'" ')},"").trim()}function b2(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function u3(a){return a.size!==K.size||a.x!==K.x||a.y!==K.y||a.rotate!==K.rotate||a.flipX||a.flipY}function L0(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,n={transform:"translate(".concat(i/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),s="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(r," ").concat(s," ").concat(t)},v={transform:"translate(".concat(e/2*-1," -256)")};return{outer:n,inner:o,path:v}}function b0(a){var c=a.transform,i=a.width,e=i===void 0?c3:i,n=a.height,r=n===void 0?c3:n,s=a.startCentered,t=s===void 0?!1:s,o="";return t&&T4?o+="translate(".concat(c.x/m1-e/2,"em, ").concat(c.y/m1-r/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/m1,"em), calc(-50% + ").concat(c.y/m1,"em)) "):o+="translate(".concat(c.x/m1,"em, ").concat(c.y/m1,"em) "),o+="scale(".concat(c.size/m1*(c.flipX?-1:1),", ").concat(c.size/m1*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var x0=`:root, :host {
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
}`;function W4(){var a=E4,c=B4,i=z.cssPrefix,e=z.replacementClass,n=x0;if(i!==a||e!==c){var r=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");n=n.replace(r,".".concat(i,"-")).replace(s,"--".concat(i,"-")).replace(t,".".concat(e))}return n}var p4=!1;function Y2(){z.autoAddCss&&!p4&&(C0(W4()),p4=!0)}var N0={mixout:function(){return{dom:{css:W4,insertCss:Y2}}},hooks:function(){return{beforeDOMElementCreation:function(){Y2()},beforeI2svg:function(){Y2()}}}},e1=h1||{};e1[a1]||(e1[a1]={});e1[a1].styles||(e1[a1].styles={});e1[a1].hooks||(e1[a1].hooks={});e1[a1].shims||(e1[a1].shims=[]);var j=e1[a1],j4=[],S0=function a(){x.removeEventListener("DOMContentLoaded",a),g2=1,j4.map(function(c){return c()})},g2=!1;n1&&(g2=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),g2||x.addEventListener("DOMContentLoaded",S0));function y0(a){n1&&(g2?setTimeout(a,0):j4.push(a))}function Z1(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,n=a.children,r=n===void 0?[]:n;return typeof a=="string"?U4(a):"<".concat(c," ").concat(g0(e),">").concat(r.map(Z1).join(""),"</").concat(c,">")}function u4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var w0=function(c,i){return function(e,n,r,s){return c.call(i,e,n,r,s)}},X2=function(c,i,e,n){var r=Object.keys(c),s=r.length,t=n!==void 0?w0(i,n):i,o,v,m;for(e===void 0?(o=1,m=c[r[0]]):(o=0,m=e);o<s;o++)v=r[o],m=t(m,c[v],v,c);return m};function k0(a){for(var c=[],i=0,e=a.length;i<e;){var n=a.charCodeAt(i++);if(n>=55296&&n<=56319&&i<e){var r=a.charCodeAt(i++);(r&64512)==56320?c.push(((n&1023)<<10)+(r&1023)+65536):(c.push(n),i--)}else c.push(n)}return c}function e3(a){var c=k0(a);return c.length===1?c[0].toString(16):null}function A0(a,c){var i=a.length,e=a.charCodeAt(c),n;return e>=55296&&e<=56319&&i>c+1&&(n=a.charCodeAt(c+1),n>=56320&&n<=57343)?(e-55296)*1024+n-56320+65536:e}function d4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],n=!!e.icon;return n?c[e.iconName]=e.icon:c[i]=e,c},{})}function i3(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,n=e===void 0?!1:e,r=d4(c);typeof j.hooks.addPack=="function"&&!n?j.hooks.addPack(a,d4(c)):j.styles[a]=h(h({},j.styles[a]||{}),r),a==="fas"&&i3("fa",c)}var u2,d2,H2,y1=j.styles,P0=j.shims,_0=(u2={},w(u2,b,Object.values(q1[b])),w(u2,N,Object.values(q1[N])),u2),d3=null,Z4={},$4={},Y4={},X4={},K4={},F0=(d2={},w(d2,b,Object.keys(R1[b])),w(d2,N,Object.keys(R1[N])),d2);function O0(a){return~u0.indexOf(a)}function D0(a,c){var i=c.split("-"),e=i[0],n=i.slice(1).join("-");return e===a&&n!==""&&!O0(n)?n:null}var Q4=function(){var c=function(r){return X2(y1,function(s,t,o){return s[o]=X2(t,r,{}),s},{})};Z4=c(function(n,r,s){if(r[3]&&(n[r[3]]=s),r[2]){var t=r[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){n[o.toString(16)]=s})}return n}),$4=c(function(n,r,s){if(n[s]=s,r[2]){var t=r[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){n[o]=s})}return n}),K4=c(function(n,r,s){var t=r[2];return n[s]=s,t.forEach(function(o){n[o]=s}),n});var i="far"in y1||z.autoFetchSvg,e=X2(P0,function(n,r){var s=r[0],t=r[1],o=r[2];return t==="far"&&!i&&(t="fas"),typeof s=="string"&&(n.names[s]={prefix:t,iconName:o}),typeof s=="number"&&(n.unicodes[s.toString(16)]={prefix:t,iconName:o}),n},{names:{},unicodes:{}});Y4=e.names,X4=e.unicodes,d3=x2(z.styleDefault,{family:z.familyDefault})};M0(function(a){d3=x2(a.styleDefault,{family:z.familyDefault})});Q4();function H3(a,c){return(Z4[a]||{})[c]}function T0(a,c){return($4[a]||{})[c]}function C1(a,c){return(K4[a]||{})[c]}function J4(a){return Y4[a]||{prefix:null,iconName:null}}function E0(a){var c=X4[a],i=H3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function v1(){return d3}var M3=function(){return{prefix:null,iconName:null,rest:[]}};function x2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?b:i,n=R1[e][a],r=I1[e][a]||I1[e][n],s=a in j.styles?a:null;return r||s||null}var H4=(H2={},w(H2,b,Object.keys(q1[b])),w(H2,N,Object.keys(q1[N])),H2);function N2(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,n=e===void 0?!1:e,r=(c={},w(c,b,"".concat(z.cssPrefix,"-").concat(b)),w(c,N,"".concat(z.cssPrefix,"-").concat(N)),c),s=null,t=b;(a.includes(r[b])||a.some(function(v){return H4[b].includes(v)}))&&(t=b),(a.includes(r[N])||a.some(function(v){return H4[N].includes(v)}))&&(t=N);var o=a.reduce(function(v,m){var p=D0(z.cssPrefix,m);if(y1[m]?(m=_0[t].includes(m)?f0[t][m]:m,s=m,v.prefix=m):F0[t].indexOf(m)>-1?(s=m,v.prefix=x2(m,{family:t})):p?v.iconName=p:m!==z.replacementClass&&m!==r[b]&&m!==r[N]&&v.rest.push(m),!n&&v.prefix&&v.iconName){var V=s==="fa"?J4(v.iconName):{},g=C1(v.prefix,v.iconName);V.prefix&&(s=null),v.iconName=V.iconName||g||v.iconName,v.prefix=V.prefix||v.prefix,v.prefix==="far"&&!y1.far&&y1.fas&&!z.autoFetchSvg&&(v.prefix="fas")}return v},M3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===N&&(y1.fass||z.autoFetchSvg)&&(o.prefix="fass",o.iconName=C1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=v1()||"fas"),o}var B0=function(){function a(){Q6(this,a),this.definitions={}}return J6(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(t){i.definitions[t]=h(h({},i.definitions[t]||{}),s[t]),i3(t,s[t]);var o=q1[b][t];o&&i3(o,s[t]),Q4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(r){var s=n[r],t=s.prefix,o=s.iconName,v=s.icon,m=v[2];i[t]||(i[t]={}),m.length>0&&m.forEach(function(p){typeof p=="string"&&(i[t][p]=v)}),i[t][o]=v}),i}}]),a}(),M4=[],w1={},k1={},R0=Object.keys(k1);function I0(a,c){var i=c.mixoutsTo;return M4=a,w1={},Object.keys(k1).forEach(function(e){R0.indexOf(e)===-1&&delete k1[e]}),M4.forEach(function(e){var n=e.mixout?e.mixout():{};if(Object.keys(n).forEach(function(s){typeof n[s]=="function"&&(i[s]=n[s]),V2(n[s])==="object"&&Object.keys(n[s]).forEach(function(t){i[s]||(i[s]={}),i[s][t]=n[s][t]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(s){w1[s]||(w1[s]=[]),w1[s].push(r[s])})}e.provides&&e.provides(k1)}),i}function n3(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),n=2;n<i;n++)e[n-2]=arguments[n];var r=w1[a]||[];return r.forEach(function(s){c=s.apply(null,[c].concat(e))}),c}function g1(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var n=w1[a]||[];n.forEach(function(r){r.apply(null,i)})}function i1(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return k1[a]?k1[a].apply(null,c):void 0}function r3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||v1();if(c)return c=C1(i,c)||c,u4(c6.definitions,i,c)||u4(j.styles,i,c)}var c6=new B0,q0=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,g1("noAuto")},G0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n1?(g1("beforeI2svg",c),i1("pseudoElements2svg",c),i1("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,y0(function(){W0({autoReplaceSvgRoot:i}),g1("watch",c)})}},U0={icon:function(c){if(c===null)return null;if(V2(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:C1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=x2(c[0]);return{prefix:e,iconName:C1(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(m0))){var n=N2(c.split(" "),{skipLookups:!0});return{prefix:n.prefix||v1(),iconName:C1(n.prefix,n.iconName)||n.iconName}}if(typeof c=="string"){var r=v1();return{prefix:r,iconName:C1(r,c)||c}}}},I={noAuto:q0,config:z,dom:G0,parse:U0,library:c6,findIconDefinition:r3,toHtml:Z1},W0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?x:i;(Object.keys(j.styles).length>0||z.autoFetchSvg)&&n1&&z.autoReplaceSvg&&I.dom.i2svg({node:e})};function S2(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return Z1(e)})}}),Object.defineProperty(a,"node",{get:function(){if(n1){var e=x.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function j0(a){var c=a.children,i=a.main,e=a.mask,n=a.attributes,r=a.styles,s=a.transform;if(u3(s)&&i.found&&!e.found){var t=i.width,o=i.height,v={x:t/o/2,y:.5};n.style=b2(h(h({},r),{},{"transform-origin":"".concat(v.x+s.x/16,"em ").concat(v.y+s.y/16,"em")}))}return[{tag:"svg",attributes:n,children:c}]}function Z0(a){var c=a.prefix,i=a.iconName,e=a.children,n=a.attributes,r=a.symbol,s=r===!0?"".concat(c,"-").concat(z.cssPrefix,"-").concat(i):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},n),{},{id:s}),children:e}]}]}function C3(a){var c=a.icons,i=c.main,e=c.mask,n=a.prefix,r=a.iconName,s=a.transform,t=a.symbol,o=a.title,v=a.maskId,m=a.titleId,p=a.extra,V=a.watchable,g=V===void 0?!1:V,P=e.found?e:i,q=P.width,U=P.height,Z=n==="fak",k=[z.replacementClass,r?"".concat(z.cssPrefix,"-").concat(r):""].filter(function(r1){return p.classes.indexOf(r1)===-1}).filter(function(r1){return r1!==""||!!r1}).concat(p.classes).join(" "),_={children:[],attributes:h(h({},p.attributes),{},{"data-prefix":n,"data-icon":r,class:k,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(q," ").concat(U)})},$=Z&&!~p.classes.indexOf("fa-fw")?{width:"".concat(q/U*16*.0625,"em")}:{};g&&(_.attributes[V1]=""),o&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(m||U1())},children:[o]}),delete _.attributes.title);var B=h(h({},_),{},{prefix:n,iconName:r,main:i,mask:e,maskId:v,transform:s,symbol:t,styles:h(h({},$),p.styles)}),p1=e.found&&i.found?i1("generateAbstractMask",B)||{children:[],attributes:{}}:i1("generateAbstractIcon",B)||{children:[],attributes:{}},u1=p1.children,E2=p1.attributes;return B.children=u1,B.attributes=E2,t?Z0(B):j0(B)}function C4(a){var c=a.content,i=a.width,e=a.height,n=a.transform,r=a.title,s=a.extra,t=a.watchable,o=t===void 0?!1:t,v=h(h(h({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});o&&(v[V1]="");var m=h({},s.styles);u3(n)&&(m.transform=b0({transform:n,startCentered:!0,width:i,height:e}),m["-webkit-transform"]=m.transform);var p=b2(m);p.length>0&&(v.style=p);var V=[];return V.push({tag:"span",attributes:v,children:[c]}),r&&V.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),V}function $0(a){var c=a.content,i=a.title,e=a.extra,n=h(h(h({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),r=b2(e.styles);r.length>0&&(n.style=r);var s=[];return s.push({tag:"span",attributes:n,children:[c]}),i&&s.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),s}var K2=j.styles;function s3(a){var c=a[0],i=a[1],e=a.slice(4),n=f3(e,1),r=n[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(M1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(M1.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(M1.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:c,height:i,icon:s}}var Y0={found:!1,width:512,height:512};function X0(a,c){!R4&&!z.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function t3(a,c){var i=c;return c==="fa"&&z.styleDefault!==null&&(c=v1()),new Promise(function(e,n){var r={found:!1,width:512,height:512,icon:i1("missingIconAbstract")||{}};if(i==="fa"){var s=J4(a)||{};a=s.iconName||a,c=s.prefix||c}if(a&&c&&K2[c]&&K2[c][a]){var t=K2[c][a];return e(s3(t))}X0(a,c),e(h(h({},Y0),{},{icon:z.showMissingIcons&&a?i1("missingIconAbstract")||{}:{}}))})}var V4=function(){},o3=z.measurePerformance&&f2&&f2.mark&&f2.measure?f2:{mark:V4,measure:V4},T1='FA "6.5.2"',K0=function(c){return o3.mark("".concat(T1," ").concat(c," begins")),function(){return a6(c)}},a6=function(c){o3.mark("".concat(T1," ").concat(c," ends")),o3.measure("".concat(T1," ").concat(c),"".concat(T1," ").concat(c," begins"),"".concat(T1," ").concat(c," ends"))},V3={begin:K0,end:a6},M2=function(){};function g4(a){var c=a.getAttribute?a.getAttribute(V1):null;return typeof c=="string"}function Q0(a){var c=a.getAttribute?a.getAttribute(h3):null,i=a.getAttribute?a.getAttribute(v3):null;return c&&i}function J0(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(z.replacementClass)}function c8(){if(z.autoReplaceSvg===!0)return C2.replace;var a=C2[z.autoReplaceSvg];return a||C2.replace}function a8(a){return x.createElementNS("http://www.w3.org/2000/svg",a)}function e8(a){return x.createElement(a)}function e6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?a8:e8:i;if(typeof a=="string")return x.createTextNode(a);var n=e(a.tag);Object.keys(a.attributes||[]).forEach(function(s){n.setAttribute(s,a.attributes[s])});var r=a.children||[];return r.forEach(function(s){n.appendChild(e6(s,{ceFn:e}))}),n}function i8(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var C2={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(n){i.parentNode.insertBefore(e6(n),i)}),i.getAttribute(V1)===null&&z.keepOriginalSource){var e=x.createComment(i8(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~p3(i).indexOf(z.replacementClass))return C2.replace(c);var n=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var r=e[0].attributes.class.split(" ").reduce(function(t,o){return o===z.replacementClass||o.match(n)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",r.toNode.join(" "))}var s=e.map(function(t){return Z1(t)}).join(`
`);i.setAttribute(V1,""),i.innerHTML=s}};function L4(a){a()}function i6(a,c){var i=typeof c=="function"?c:M2;if(a.length===0)i();else{var e=L4;z.mutateApproach===o0&&(e=h1.requestAnimationFrame||L4),e(function(){var n=c8(),r=V3.begin("mutate");a.map(n),r(),i()})}}var g3=!1;function n6(){g3=!0}function l3(){g3=!1}var L2=null;function b4(a){if(h4&&z.observeMutations){var c=a.treeCallback,i=c===void 0?M2:c,e=a.nodeCallback,n=e===void 0?M2:e,r=a.pseudoElementsCallback,s=r===void 0?M2:r,t=a.observeMutationsRoot,o=t===void 0?x:t;L2=new h4(function(v){if(!g3){var m=v1();P1(v).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!g4(p.addedNodes[0])&&(z.searchPseudoElements&&s(p.target),i(p.target)),p.type==="attributes"&&p.target.parentNode&&z.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&g4(p.target)&&~p0.indexOf(p.attributeName))if(p.attributeName==="class"&&Q0(p.target)){var V=N2(p3(p.target)),g=V.prefix,P=V.iconName;p.target.setAttribute(h3,g||m),P&&p.target.setAttribute(v3,P)}else J0(p.target)&&n(p.target)})}}),n1&&L2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function n8(){L2&&L2.disconnect()}function r8(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,n){var r=n.split(":"),s=r[0],t=r.slice(1);return s&&t.length>0&&(e[s]=t.join(":").trim()),e},{})),i}function s8(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",n=N2(p3(a));return n.prefix||(n.prefix=v1()),c&&i&&(n.prefix=c,n.iconName=i),n.iconName&&n.prefix||(n.prefix&&e.length>0&&(n.iconName=T0(n.prefix,a.innerText)||H3(n.prefix,e3(a.innerText))),!n.iconName&&z.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=a.firstChild.data)),n}function t8(a){var c=P1(a.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return z.autoA11y&&(i?c["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(e||U1()):(c["aria-hidden"]="true",c.focusable="false")),c}function o8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=s8(a),e=i.iconName,n=i.prefix,r=i.rest,s=t8(a),t=n3("parseNodeAttributes",{},a),o=c.styleParser?r8(a):[];return h({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:n,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},t)}var l8=j.styles;function r6(a){var c=z.autoReplaceSvg==="nest"?x4(a,{styleParser:!1}):x4(a);return~c.extra.classes.indexOf(I4)?i1("generateLayersText",a,c):i1("generateSvgReplacementMutation",a,c)}var z1=new Set;z3.map(function(a){z1.add("fa-".concat(a))});Object.keys(R1[b]).map(z1.add.bind(z1));Object.keys(R1[N]).map(z1.add.bind(z1));z1=W1(z1);function N4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n1)return Promise.resolve();var i=x.documentElement.classList,e=function(p){return i.add("".concat(v4,"-").concat(p))},n=function(p){return i.remove("".concat(v4,"-").concat(p))},r=z.autoFetchSvg?z1:z3.map(function(m){return"fa-".concat(m)}).concat(Object.keys(l8));r.includes("fa")||r.push("fa");var s=[".".concat(I4,":not([").concat(V1,"])")].concat(r.map(function(m){return".".concat(m,":not([").concat(V1,"])")})).join(", ");if(s.length===0)return Promise.resolve();var t=[];try{t=P1(a.querySelectorAll(s))}catch{}if(t.length>0)e("pending"),n("complete");else return Promise.resolve();var o=V3.begin("onTree"),v=t.reduce(function(m,p){try{var V=r6(p);V&&m.push(V)}catch(g){R4||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,p){Promise.all(v).then(function(V){i6(V,function(){e("active"),e("complete"),n("pending"),typeof c=="function"&&c(),o(),m()})}).catch(function(V){o(),p(V)})})}function f8(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;r6(a).then(function(i){i&&i6([i],c)})}function m8(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:r3(c||{}),n=i.mask;return n&&(n=(n||{}).icon?n:r3(n||{})),a(e,h(h({},i),{},{mask:n}))}}var h8=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,n=e===void 0?K:e,r=i.symbol,s=r===void 0?!1:r,t=i.mask,o=t===void 0?null:t,v=i.maskId,m=v===void 0?null:v,p=i.title,V=p===void 0?null:p,g=i.titleId,P=g===void 0?null:g,q=i.classes,U=q===void 0?[]:q,Z=i.attributes,k=Z===void 0?{}:Z,_=i.styles,$=_===void 0?{}:_;if(c){var B=c.prefix,p1=c.iconName,u1=c.icon;return S2(h({type:"icon"},c),function(){return g1("beforeDOMElementCreation",{iconDefinition:c,params:i}),z.autoA11y&&(V?k["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(P||U1()):(k["aria-hidden"]="true",k.focusable="false")),C3({icons:{main:s3(u1),mask:o?s3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:p1,transform:h(h({},K),n),symbol:s,title:V,maskId:m,titleId:P,extra:{attributes:k,styles:$,classes:U}})})}},v8={mixout:function(){return{icon:m8(h8)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=N4,i.nodeCallback=f8,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,n=e===void 0?x:e,r=i.callback,s=r===void 0?function(){}:r;return N4(n,s)},c.generateSvgReplacementMutation=function(i,e){var n=e.iconName,r=e.title,s=e.titleId,t=e.prefix,o=e.transform,v=e.symbol,m=e.mask,p=e.maskId,V=e.extra;return new Promise(function(g,P){Promise.all([t3(n,t),m.iconName?t3(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(q){var U=f3(q,2),Z=U[0],k=U[1];g([i,C3({icons:{main:Z,mask:k},prefix:t,iconName:n,transform:o,symbol:v,maskId:p,title:r,titleId:s,extra:V,watchable:!0})])}).catch(P)})},c.generateAbstractIcon=function(i){var e=i.children,n=i.attributes,r=i.main,s=i.transform,t=i.styles,o=b2(t);o.length>0&&(n.style=o);var v;return u3(s)&&(v=i1("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),e.push(v||r.icon),{children:e,attributes:n}}}},z8={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n;return S2({type:"layer"},function(){g1("beforeDOMElementCreation",{assembler:i,params:e});var s=[];return i(function(t){Array.isArray(t)?t.map(function(o){s=s.concat(o.abstract)}):s=s.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(W1(r)).join(" ")},children:s}]})}}}},p8={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.title,r=n===void 0?null:n,s=e.classes,t=s===void 0?[]:s,o=e.attributes,v=o===void 0?{}:o,m=e.styles,p=m===void 0?{}:m;return S2({type:"counter",content:i},function(){return g1("beforeDOMElementCreation",{content:i,params:e}),$0({content:i.toString(),title:r,extra:{attributes:v,styles:p,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(W1(t))}})})}}}},u8={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?K:n,s=e.title,t=s===void 0?null:s,o=e.classes,v=o===void 0?[]:o,m=e.attributes,p=m===void 0?{}:m,V=e.styles,g=V===void 0?{}:V;return S2({type:"text",content:i},function(){return g1("beforeDOMElementCreation",{content:i,params:e}),C4({content:i,transform:h(h({},K),r),title:t,extra:{attributes:p,styles:g,classes:["".concat(z.cssPrefix,"-layers-text")].concat(W1(v))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var n=e.title,r=e.transform,s=e.extra,t=null,o=null;if(T4){var v=parseInt(getComputedStyle(i).fontSize,10),m=i.getBoundingClientRect();t=m.width/v,o=m.height/v}return z.autoA11y&&!n&&(s.attributes["aria-hidden"]="true"),Promise.resolve([i,C4({content:i.innerHTML,width:t,height:o,transform:r,title:n,extra:s,watchable:!0})])}}},d8=new RegExp('"',"ug"),S4=[1105920,1112319];function H8(a){var c=a.replace(d8,""),i=A0(c,0),e=i>=S4[0]&&i<=S4[1],n=c.length===2?c[0]===c[1]:!1;return{value:e3(n?c[0]:c),isSecondary:e||n}}function y4(a,c){var i="".concat(t0).concat(c.replace(":","-"));return new Promise(function(e,n){if(a.getAttribute(i)!==null)return e();var r=P1(a.children),s=r.filter(function(u1){return u1.getAttribute(a3)===c})[0],t=h1.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(h0),v=t.getPropertyValue("font-weight"),m=t.getPropertyValue("content");if(s&&!o)return a.removeChild(s),e();if(o&&m!=="none"&&m!==""){var p=t.getPropertyValue("content"),V=~["Sharp"].indexOf(o[2])?N:b,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?I1[V][o[2].toLowerCase()]:v0[V][v],P=H8(p),q=P.value,U=P.isSecondary,Z=o[0].startsWith("FontAwesome"),k=H3(g,q),_=k;if(Z){var $=E0(q);$.iconName&&$.prefix&&(k=$.iconName,g=$.prefix)}if(k&&!U&&(!s||s.getAttribute(h3)!==g||s.getAttribute(v3)!==_)){a.setAttribute(i,_),s&&a.removeChild(s);var B=o8(),p1=B.extra;p1.attributes[a3]=c,t3(k,g).then(function(u1){var E2=C3(h(h({},B),{},{icons:{main:u1,mask:M3()},prefix:g,iconName:_,extra:p1,watchable:!0})),r1=x.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(r1,a.firstChild):a.appendChild(r1),r1.outerHTML=E2.map(function(Y6){return Z1(Y6)}).join(`
`),a.removeAttribute(i),e()}).catch(n)}else e()}else e()})}function M8(a){return Promise.all([y4(a,"::before"),y4(a,"::after")])}function C8(a){return a.parentNode!==document.head&&!~l0.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(a3)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function w4(a){if(n1)return new Promise(function(c,i){var e=P1(a.querySelectorAll("*")).filter(C8).map(M8),n=V3.begin("searchPseudoElements");n6(),Promise.all(e).then(function(){n(),l3(),c()}).catch(function(){n(),l3(),i()})})}var V8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=w4,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,n=e===void 0?x:e;z.searchPseudoElements&&w4(n)}}},k4=!1,g8={mixout:function(){return{dom:{unwatch:function(){n6(),k4=!0}}}},hooks:function(){return{bootstrap:function(){b4(n3("mutationObserverCallbacks",{}))},noAuto:function(){n8()},watch:function(i){var e=i.observeMutationsRoot;k4?l3():b4(n3("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},A4=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,n){var r=n.toLowerCase().split("-"),s=r[0],t=r.slice(1).join("-");if(s&&t==="h")return e.flipX=!0,e;if(s&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(s){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},L8={mixout:function(){return{parse:{transform:function(i){return A4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var n=e.getAttribute("data-fa-transform");return n&&(i.transform=A4(n)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,n=i.transform,r=i.containerWidth,s=i.iconWidth,t={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),v="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),m="rotate(".concat(n.rotate," 0 0)"),p={transform:"".concat(o," ").concat(v," ").concat(m)},V={transform:"translate(".concat(s/2*-1," -256)")},g={outer:t,inner:p,path:V};return{tag:"g",attributes:h({},g.outer),children:[{tag:"g",attributes:h({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:h(h({},e.icon.attributes),g.path)}]}]}}}},Q2={x:0,y:0,width:"100%",height:"100%"};function P4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function b8(a){return a.tag==="g"?a.children:[a]}var x8={hooks:function(){return{parseNodeAttributes:function(i,e){var n=e.getAttribute("data-fa-mask"),r=n?N2(n.split(" ").map(function(s){return s.trim()})):M3();return r.prefix||(r.prefix=v1()),i.mask=r,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,n=i.attributes,r=i.main,s=i.mask,t=i.maskId,o=i.transform,v=r.width,m=r.icon,p=s.width,V=s.icon,g=L0({transform:o,containerWidth:p,iconWidth:v}),P={tag:"rect",attributes:h(h({},Q2),{},{fill:"white"})},q=m.children?{children:m.children.map(P4)}:{},U={tag:"g",attributes:h({},g.inner),children:[P4(h({tag:m.tag,attributes:h(h({},m.attributes),g.path)},q))]},Z={tag:"g",attributes:h({},g.outer),children:[U]},k="mask-".concat(t||U1()),_="clip-".concat(t||U1()),$={tag:"mask",attributes:h(h({},Q2),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,Z]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:b8(V)},$]};return e.push(B,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(k,")")},Q2)}),{children:e,attributes:n}}}},N8={provides:function(c){var i=!1;h1.matchMedia&&(i=h1.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:h(h({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},r),{},{attributeName:"opacity"}),t={tag:"circle",attributes:h(h({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:h(h({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:h(h({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:h(h({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},S8={hooks:function(){return{parseNodeAttributes:function(i,e){var n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return i.symbol=r,i}}}},y8=[N0,v8,z8,p8,u8,V8,g8,L8,x8,N8,S8];I0(y8,{mixoutsTo:I});var $5=I.noAuto,Y5=I.config,X5=I.library,K5=I.dom,s6=I.parse,Q5=I.findIconDefinition,J5=I.toHtml,t6=I.icon,c7=I.layer,w8=I.text,k8=I.counter;var A8=["*"],P8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},_8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},F8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},O8=a=>a.prefix!==void 0&&a.iconName!==void 0,D8=(a,c)=>O8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},T8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=X({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),E8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let n of e){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let r of n.icon[2])typeof r=="string"&&(this.definitions[n.prefix][r]=n)}}addIconPacks(...e){for(let n of e){let r=Object.keys(n).map(s=>n[s]);this.addIcons(...r)}}getIconDefinition(e,n){return e in this.definitions&&n in this.definitions[e]?this.definitions[e][n]:null}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=X({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),B8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(n){return new(n||c)},c.\u0275dir=G({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[L1]});let a=c;return a})(),R8=(()=>{let c=class c{constructor(e,n){this.renderer=e,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(n){return new(n||c)(M(W),M(R))},c.\u0275cmp=S({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[L1,y],ngContentSelectors:A8,decls:1,vars:0,template:function(n,r){n&1&&(j3(),Z3(0))},encapsulation:2});let a=c;return a})(),Q=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,n,r,s,t){this.sanitizer=e,this.config=n,this.iconLibrary=r,this.stackItem=s,this.classes=[],t!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){_8();return}if(e){let n=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(n);if(r!=null){let s=this.buildParams();this.renderIcon(r,s)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let n=D8(e,this.config.defaultPrefix);if("icon"in n)return n;let r=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return r??(P8(n),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?s6.transform(this.transform):this.transform;return{title:this.title,transform:n,classes:[...F8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,n){let r=t6(e,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};c.\u0275fac=function(n){return new(n||c)(M(a4),M(T8),M(E8),M(B8,8),M(R8,8))},c.\u0275cmp=S({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,r){n&2&&(W3("innerHTML",r.renderedIconHTML,E3),W2("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[L1,y],decls:0,vars:0,template:function(n,r){},encapsulation:2});let a=c;return a})();var J=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=D1({type:c}),c.\u0275inj=O1({});let a=c;return a})();var o6={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]};var l6={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]};var y2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var I8={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},w2=I8;var q8={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},_1=q8;var f6={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var k2={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var m6={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var A2=(()=>{let c=class c{constructor(e,n){this.elementRef=e,this.renderer=n}onWindowScroll(){let e=this.elementRef.nativeElement;window.scrollY>0?this.renderer.addClass(e,"translucent"):this.renderer.removeClass(e,"translucent")}};c.\u0275fac=function(n){return new(n||c)(M(R),M(W))},c.\u0275dir=G({type:c,selectors:[["","directiveScrollOpacity",""]],hostBindings:function(n,r){n&1&&L("scroll",function(){return r.onWindowScroll()},!1,n2)},standalone:!0});let a=c;return a})();var h6=(()=>{let c=class c{constructor(e,n){this.elementRef=e,this.renderer=n}onMouseEnter(){this.renderer.addClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}onMouseLeave(){this.renderer.removeClass(this.elementRef.nativeElement.parentElement,"link-no-hover")}};c.\u0275fac=function(n){return new(n||c)(M(R),M(W))},c.\u0275dir=G({type:c,selectors:[["","directiveDropdownHover",""]],hostBindings:function(n,r){n&1&&L("mouseenter",function(){return r.onMouseEnter()})("mouseleave",function(){return r.onMouseLeave()})},standalone:!0});let a=c;return a})();var M6=(()=>{let c=class c{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(n){return new(n||c)(M(W),M(R))},c.\u0275dir=G({type:c});let a=c;return a})(),G8=(()=>{let c=class c extends M6{};c.\u0275fac=(()=>{let e;return function(r){return(e||(e=U2(c)))(r||c)}})(),c.\u0275dir=G({type:c,features:[b1]});let a=c;return a})(),C6=new d1("");var U8={provide:C6,useExisting:q2(()=>O2),multi:!0};function W8(){let a=Z2()?Z2().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var j8=new d1(""),O2=(()=>{let c=class c extends M6{constructor(e,n,r){super(e,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!W8())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(n){return new(n||c)(M(W),M(R),M(j8,8))},c.\u0275dir=G({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&L("input",function(t){return r._handleInput(t.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(t){return r._compositionEnd(t.target.value)})},features:[j2([U8]),b1]});let a=c;return a})();var Z8=new d1(""),$8=new d1("");function V6(a){return a!=null}function g6(a){return K3(a)?k3(a):a}function L6(a){let c={};return a.forEach(i=>{c=i!=null?Y(Y({},c),i):c}),Object.keys(c).length===0?null:c}function b6(a,c){return c.map(i=>i(a))}function Y8(a){return!a.validate}function x6(a){return a.map(c=>Y8(c)?c:i=>c.validate(i))}function X8(a){if(!a)return null;let c=a.filter(V6);return c.length==0?null:function(i){return L6(b6(i,c))}}function N6(a){return a!=null?X8(x6(a)):null}function K8(a){if(!a)return null;let c=a.filter(V6);return c.length==0?null:function(i){let e=b6(i,c).map(g6);return A3(e).pipe(t1(L6))}}function S6(a){return a!=null?K8(x6(a)):null}function v6(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function y6(a){return a._rawValidators}function w6(a){return a._rawAsyncValidators}function L3(a){return a?Array.isArray(a)?a:[a]:[]}function _2(a,c){return Array.isArray(a)?a.includes(c):a===c}function z6(a,c){let i=L3(c);return L3(a).forEach(n=>{_2(i,n)||i.push(n)}),i}function p6(a,c){return L3(c).filter(i=>!_2(a,i))}var b3=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=N6(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=S6(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}};var K1=class extends b3{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},x3=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Q8={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},S7=s1(Y({},Q8),{"[class.ng-submitted]":"isSubmitted"}),k6=(()=>{let c=class c extends x3{constructor(e){super(e)}};c.\u0275fac=function(n){return new(n||c)(M(K1,2))},c.\u0275dir=G({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&l1("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[b1]});let a=c;return a})();var Y1="VALID",P2="INVALID",F1="PENDING",X1="DISABLED";function J8(a){return(D2(a)?a.validators:a)||null}function c5(a){return Array.isArray(a)?N6(a):a||null}function a5(a,c){return(D2(c)?c.asyncValidators:a)||null}function e5(a){return Array.isArray(a)?S6(a):a||null}function D2(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}var N3=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===Y1}get invalid(){return this.status===P2}get pending(){return this.status==F1}get disabled(){return this.status===X1}get enabled(){return this.status!==X1}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(z6(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(z6(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(p6(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(p6(c,this._rawAsyncValidators))}hasValidator(c){return _2(this._rawValidators,c)}hasAsyncValidator(c){return _2(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=F1,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=X1,this.errors=null,this._forEachChild(e=>{e.disable(s1(Y({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(s1(Y({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=Y1,this._forEachChild(e=>{e.enable(s1(Y({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(s1(Y({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Y1||this.status===F1)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?X1:Y1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=F1,this._hasOwnPendingAsyncValidator=!0;let i=g6(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,n)=>e&&e._find(n),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new o1,this.statusChanges=new o1}_calculateStatus(){return this._allControlsDisabled()?X1:this.errors?P2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F1)?F1:this._anyControlsHaveStatus(P2)?P2:Y1}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){D2(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=c5(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=e5(this._rawAsyncValidators)}};var A6=new d1("CallSetDisabledState",{providedIn:"root",factory:()=>S3}),S3="always";function i5(a,c,i=S3){r5(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),t5(a,c),l5(a,c),o5(a,c),n5(a,c)}function u6(a,c,i=!0){let e=()=>{};c.valueAccessor&&(c.valueAccessor.registerOnChange(e),c.valueAccessor.registerOnTouched(e)),s5(a,c),a&&(c._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function F2(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function n5(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function r5(a,c){let i=y6(a);c.validator!==null?a.setValidators(v6(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=w6(a);c.asyncValidator!==null?a.setAsyncValidators(v6(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let n=()=>a.updateValueAndValidity();F2(c._rawValidators,n),F2(c._rawAsyncValidators,n)}function s5(a,c){let i=!1;if(a!==null){if(c.validator!==null){let n=y6(a);if(Array.isArray(n)&&n.length>0){let r=n.filter(s=>s!==c.validator);r.length!==n.length&&(i=!0,a.setValidators(r))}}if(c.asyncValidator!==null){let n=w6(a);if(Array.isArray(n)&&n.length>0){let r=n.filter(s=>s!==c.asyncValidator);r.length!==n.length&&(i=!0,a.setAsyncValidators(r))}}}let e=()=>{};return F2(c._rawValidators,e),F2(c._rawAsyncValidators,e),i}function t5(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&P6(a,c)})}function o5(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&P6(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function P6(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function l5(a,c){let i=(e,n)=>{c.valueAccessor.writeValue(e),n&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function f5(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function m5(a){return Object.getPrototypeOf(a.constructor)===G8}function h5(a,c){if(!c)return null;Array.isArray(c);let i,e,n;return c.forEach(r=>{r.constructor===O2?i=r:m5(r)?e=r:n=r}),n||e||i||null}function d6(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function H6(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var _6=class extends N3{constructor(c=null,i,e){super(J8(i),a5(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),D2(i)&&(i.nonNullable||i.initialValueIsDefault)&&(H6(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){d6(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){d6(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){H6(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var F6=new d1(""),v5={provide:K1,useExisting:q2(()=>y3)},y3=(()=>{let c=class c extends K1{set isDisabled(e){}constructor(e,n,r,s,t){super(),this._ngModelWarningConfig=s,this.callSetDisabledState=t,this.update=new o1,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=h5(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let n=e.form.previousValue;n&&u6(n,this,!1),i5(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}f5(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&u6(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}};c._ngModelWarningSentOnce=!1,c.\u0275fac=function(n){return new(n||c)(M(Z8,10),M($8,10),M(C6,10),M(F6,8),M(A6,8))},c.\u0275dir=G({type:c,selectors:[["","formControl",""]],inputs:{form:[i2.None,"formControl","form"],isDisabled:[i2.None,"disabled","isDisabled"],model:[i2.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[j2([v5]),b1,L1]});let a=c;return a})();var z5=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=D1({type:c}),c.\u0275inj=O1({});let a=c;return a})();var O6=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:F6,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:A6,useValue:e.callSetDisabledState??S3}]}}};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=D1({type:c}),c.\u0275inj=O1({imports:[z5]});let a=c;return a})();var c1=(()=>{let c=class c{constructor(){this.sideMenuState=new w3(!1)}setOpen(){this.sideMenuState.next(!0)}setClose(){this.sideMenuState.next(!1)}get State(){return this.sideMenuState}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=X({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var u5=(a,c)=>({show:a,mobile:c});function d5(a,c){if(a&1&&(F(0),f(1,"div",12),C(2,"fa-icon",4),l(),O()),a&2){let i=T();u(2),d("icon",i.faCircleNotch)}}function H5(a,c){a&1&&(F(0),H(1," No hay resultados para su busqueda "),O())}function M5(a,c){if(a&1&&(F(0),f(1,"div",16),H(2),l(),O()),a&2){let i=c.$implicit;u(2),H1(" ",i.itemName," ")}}function C5(a,c){if(a&1&&(F(0),f(1,"div",15)(2,"h2"),H(3),l()(),A(4,M5,3,1,"ng-container",11),O()),a&2){let i=T(2).$implicit;u(3),s2(i.name),u(),d("ngForOf",i.items)}}function V5(a,c){if(a&1&&(f(0,"span",22),H(1),l()),a&2){let i=T().$implicit;u(),H1("$",i==null?null:i.price,"")}}function g5(a,c){if(a&1&&(F(0),f(1,"div",16)(2,"div",17),C(3,"img",18),l(),f(4,"div",19)(5,"span",20),H(6),l(),A(7,V5,2,1,"span",21),l()(),O()),a&2){let i=c.$implicit;u(6),s2(i.itemName),u(),d("ngIf",i==null?null:i.price)}}function L5(a,c){if(a&1&&(f(0,"div",15)(1,"h2"),H(2),l()(),A(3,g5,8,2,"ng-container",11)),a&2){let i=T(2).$implicit;u(2),s2(i.name),u(),d("ngForOf",i.items)}}function b5(a,c){if(a&1&&(F(0),f(1,"div",13),A(2,C5,5,2,"ng-container",14),l(),A(3,L5,4,2,"ng-template",null,0,t2),O()),a&2){let i=r2(4),e=T().$implicit;u(2),d("ngIf",!e.hasImage)("ngIfElse",i)}}function x5(a,c){if(a&1&&(F(0),A(1,b5,5,2,"ng-container",10),O()),a&2){let i=c.$implicit;u(),d("ngIf",i.items.length>0)}}var T2=(()=>{let c=class c{constructor(e){this._sideMenuService=e,this.toggleSearchMenuRequest=new o1,this.showSideSearchMenu=!1,this.isMobile=!1,this.faXmark=k2,this.faSearch=_1,this.faCircleNotch=l6,this.searchControl=new _6(void 0),this.$originalPageInfo=new c2,this.$filteredPageInfo=new c2,this.$filter=new c2,this.isSearching=!1,this.nothingFound=!1,this.pageInfo=[{name:"SUGGESTIONS",hasImage:!1,items:[{itemName:"mexico"},{itemName:"Brasil"},{itemName:"Per\xFA"}]},{name:"COLLECTIONS",hasImage:!0,items:[{itemName:"gift a coffe",imgUrl:""},{itemName:"gift a coffe subcription",imgUrl:""},{itemName:"from atlanta with love",imgUrl:""}]},{name:"PAGES",hasImage:!1,items:[{itemName:"About us"},{itemName:"Susbcribe"},{itemName:"Shopp all"}]},{name:"PRODUCTS",hasImage:!0,items:[{itemName:"produto 1",price:"90",imgUrl:""},{itemName:"produto 2",price:"40",imgUrl:""},{itemName:"produto 3",price:"50",imgUrl:""}]}]}ngOnInit(){this.$originalPageInfo=this.getPageInfoForSearching(),this.$filter=this.searchControl.valueChanges,this.$filter.subscribe(e=>{e?.trim()===""||e===void 0?this.$filteredPageInfo=B2([]):this.isSearching=!0}),this.search().subscribe()}setSideMenuState(){this._sideMenuService.setClose()}getPageInfoForSearching(){return B2(this.pageInfo)}toggleSearchMenu(){this.showSideSearchMenu=!1,this.toggleSearchMenuRequest.emit(),this.setSideMenuState()}search(){return this.$filteredPageInfo=this.$filter.pipe(P3(300),_3(e=>this.$originalPageInfo.pipe(t1(n=>n.map(r=>s1(Y({},r),{items:r.items.filter(s=>s.itemName.toLowerCase().includes(e?.toLowerCase()))}))))),R2(()=>{this.isSearching=!1}),R2(e=>{if(this.searchControl.value!==void 0&&this.searchControl.value?.trim()!==""){let n=e.every(r=>r.items.length===0);this.nothingFound=n}else this.nothingFound=!1}))}clearSearch(){this.searchControl.setValue(void 0),this.search()}};c.\u0275fac=function(n){return new(n||c)(M(c1))},c.\u0275cmp=S({type:c,selectors:[["app-side-search-menu"]],inputs:{showSideSearchMenu:"showSideSearchMenu",isMobile:"isMobile"},outputs:{toggleSearchMenuRequest:"toggleSearchMenuRequest"},standalone:!0,features:[y],decls:15,vars:13,consts:[["ItemWithImage",""],[1,"side-menu-search",3,"ngClass"],[1,"side-menu-logo"],[3,"click"],[3,"icon"],[1,"side-search-wrapper"],[1,"search-drawer"],[1,"search",3,"icon"],["placeholder","Search our store","type","text",1,"search-input",3,"keypress","formControl"],[1,"delete",3,"click","icon"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"loading-items-wrapper"],[1,"items-wrapper"],[4,"ngIf","ngIfElse"],[1,"item-title"],[1,"sub-item"],[1,"image-wrapper"],["src","","alt",""],[1,"description"],[1,"name"],["class","price",4,"ngIf"],[1,"price"]],template:function(n,r){n&1&&(f(0,"div",1)(1,"div",2)(2,"span"),H(3,"Search"),l(),f(4,"button",3),L("click",function(){return r.toggleSearchMenu()}),C(5,"fa-icon",4),l()(),f(6,"div",5)(7,"div",6),C(8,"fa-icon",7),f(9,"input",8),L("keypress",function(){return r.search()}),l(),f(10,"fa-icon",9),L("click",function(){return r.clearSearch()}),l()(),A(11,d5,3,1,"ng-container",10)(12,H5,2,0,"ng-container",10)(13,x5,2,1,"ng-container",11),Y3(14,"async"),l()()),n&2&&(d("ngClass",$3(10,u5,r.showSideSearchMenu,r.isMobile)),u(5),d("icon",r.faXmark),u(3),d("icon",r.faSearch),u(),d("formControl",r.searchControl),u(),d("icon",r.faXmark),u(),d("ngIf",r.isSearching),u(),d("ngIf",r.nothingFound),u(),d("ngForOf",X3(14,8,r.$filteredPageInfo)))},dependencies:[E,x1,N1,S1,Q3,O6,O2,k6,y3,J,Q],styles:['.side-menu-search[_ngcontent-%COMP%]{position:fixed;top:0;right:0;height:100%;width:40%;background-color:var(--primary-text-color);z-index:9999;transition:transform .3s ease;transform:translate(110%);opacity:1!important}.side-menu-search.mobile[_ngcontent-%COMP%]{width:80%}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;position:sticky;z-index:5;width:100%;background-color:transparent;height:6%;top:0;padding:10px 0}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;border:none;padding:0}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:0 15px;font-size:35px;cursor:pointer}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px;margin-right:auto;font-size:26px;font-family:custom-font;font-weight:700}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;position:relative;width:100%;min-height:88%;list-style:none;padding:0;margin:0 0 auto}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]{position:relative;padding:40px 33px;display:flex;align-items:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]:after{content:"";width:calc(100% - 60px);height:1px;background-color:var(--primary-bg-color);position:absolute;left:30px;top:70%;border-radius:10px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border:none;font-size:14px;background-color:inherit;outline:none}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon.search[_ngcontent-%COMP%]{padding-right:8px;font-size:20px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon.delete[_ngcontent-%COMP%]{padding-left:5px;font-size:15px;cursor:pointer}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .loading-items-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .loading-items-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:24px;animation:_ngcontent-%COMP%_spin 1s linear infinite}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;position:relative;padding-left:30px;width:auto;font-family:custom-font}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]:after{content:"";width:calc(100% - 60px);height:1px;background-color:var(--primary-bg-color-lighten50);position:absolute;left:30px;bottom:1px;border-radius:10px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--primary-bg-color-lighten50);font-size:18px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:10px 0;color:var(--link-color);font-weight:700;font-size:16px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:green}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-left:10px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:400;margin-right:auto;color:var(--primary-bg-color)}.show[_ngcontent-%COMP%]{transform:translate(0)}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']});let a=c;return a})();var N5=a=>({"margin-bottom.px":a}),D6=(()=>{let c=class c{constructor(e,n){this.elementRef=e,this._sideMenuService=n,this.faSearch=_1,this.faUser=o6,this.faShoppingCart=w2,this.faChevronRight=m6,this.faBars=y2,this.navbarHeight=0,this.showSideSearchMenu=!1,a2(window,"resize").pipe(e2(null),t1(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(s=>{s!=0&&(this.navbarHeight=s)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}toggleSearchSideMenu(){this._sideMenuService.setOpen(),this.showSideSearchMenu=!this.showSideSearchMenu}};c.\u0275fac=function(n){return new(n||c)(M(R),M(c1))},c.\u0275cmp=S({type:c,selectors:[["app-navbar"]],standalone:!0,features:[y],decls:176,vars:11,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-desktop"],[1,"wrapper-left"],[1,"top-links"],["href","",1,"link"],[1,"link-wrapper"],["directiveDropdownHover","",1,"dropdown","dropdown-w-icons"],["href","",1,"dropdown-link"],[1,"dropdown-link-wrapper"],[3,"icon"],[1,"dropdown","sub-dropdown"],["href","",1,"sub-dropdown-link"],[1,"sub-dropdown-link-wrapper"],["directiveDropdownHover","",1,"dropdown"],[1,"wrapper-center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"wrapper-right"],[1,"link",3,"click"],[3,"toggleSearchMenuRequest","showSideSearchMenu"]],template:function(n,r){n&1&&(f(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"ul")(5,"li")(6,"a",4)(7,"div",5)(8,"span"),H(9,"Shop"),l()(),f(10,"ul",6)(11,"li")(12,"a",7)(13,"div",8)(14,"span"),H(15,"Coffee "),l(),C(16,"fa-icon",9),l()(),f(17,"ul",10)(18,"li")(19,"a",11)(20,"div",12)(21,"span"),H(22,"Classic Coffees"),l()()()(),f(23,"li")(24,"a",11)(25,"div",12)(26,"span"),H(27,"Single Origins"),l()()()()()(),f(28,"li")(29,"a",7)(30,"div",8)(31,"span"),H(32,"Coffee Club"),l(),C(33,"fa-icon",9),l()(),f(34,"ul",10)(35,"li")(36,"a",11)(37,"div",12)(38,"span"),H(39,"Join The Club"),l()()()(),f(40,"li")(41,"a",11)(42,"div",12)(43,"span"),H(44,"Manage Your Subscription"),l()()()()()(),f(45,"li")(46,"a",7)(47,"div",8)(48,"span"),H(49,"Gifts "),l(),C(50,"fa-icon",9),l()(),f(51,"ul",10)(52,"li")(53,"a",11)(54,"div",12)(55,"span"),H(56,"Gift a Coffee Subscription"),l()()()(),f(57,"li")(58,"a",11)(59,"div",12)(60,"span"),H(61,"Gift a Gift Card"),l()()()()()(),f(62,"li")(63,"a",7)(64,"div",8)(65,"span"),H(66,"Goods "),l(),C(67,"fa-icon",9),l()(),f(68,"ul",10)(69,"li")(70,"a",11)(71,"div",12)(72,"span"),H(73,"Brewing Equipment"),l()()()(),f(74,"li")(75,"a",11)(76,"div",12)(77,"span"),H(78,"Merchandise"),l()()()()()(),f(79,"li")(80,"a",7)(81,"div",8)(82,"span"),H(83,"Shop All"),l()()()()()()(),f(84,"li")(85,"a",4)(86,"div",5)(87,"span"),H(88,"Learn"),l()(),f(89,"ul",13)(90,"li")(91,"a",7)(92,"div",8)(93,"span"),H(94,"Blog"),l()()()(),f(95,"li")(96,"a",7)(97,"div",8)(98,"span"),H(99,"Contact Us"),l()()()(),f(100,"li")(101,"a",7)(102,"div",8)(103,"span"),H(104,"FAQ"),l()()()()()()(),f(105,"li")(106,"a",4)(107,"div",5)(108,"span"),H(109,"Wholesale"),l()(),f(110,"ul",13)(111,"li")(112,"a",7)(113,"div",8)(114,"span"),H(115,"Login"),l()()()(),f(116,"li")(117,"a",7)(118,"div",8)(119,"span"),H(120,"Wholesale Inquiry"),l()()()()()()(),f(121,"li")(122,"a",4)(123,"div",5)(124,"span"),H(125,"Connect"),l()(),f(126,"ul",13)(127,"li")(128,"a",7)(129,"div",8)(130,"span"),H(131,"About Us"),l()()()(),f(132,"li")(133,"a",7)(134,"div",8)(135,"span"),H(136,"Cafe"),l()()()(),f(137,"li")(138,"a",7)(139,"div",8)(140,"span"),H(141,"Careers"),l()()()(),f(142,"li")(143,"a",7)(144,"div",8)(145,"span"),H(146,"Press"),l()()()()()()()()()(),f(147,"div",14)(148,"div",15)(149,"h1",16)(150,"a",17)(151,"div",18),C(152,"img",19),l()(),C(153,"a",20),l()()(),f(154,"div",21)(155,"div",3)(156,"ul")(157,"li")(158,"a",22),L("click",function(){return r.toggleSearchSideMenu()}),f(159,"div",5),C(160,"fa-icon",9),f(161,"span"),H(162,"Search"),l()()()(),f(163,"li")(164,"a",4)(165,"div",5),C(166,"fa-icon",9),f(167,"span"),H(168,"Account"),l()()()(),f(169,"li")(170,"a",4)(171,"div",5),C(172,"fa-icon",9),f(173,"span"),H(174,"Cart"),l()()()()()()()()(),f(175,"app-side-search-menu",23),L("toggleSearchMenuRequest",function(){return r.toggleSearchSideMenu()}),l()),n&2&&(d("ngStyle",f1(9,N5,-r.navbarHeight)),u(16),d("icon",r.faChevronRight),u(17),d("icon",r.faChevronRight),u(17),d("icon",r.faChevronRight),u(17),d("icon",r.faChevronRight),u(93),d("icon",r.faSearch),u(6),d("icon",r.faUser),u(6),d("icon",r.faShoppingCart),u(3),d("showSideSearchMenu",r.showSideSearchMenu))},dependencies:[E,l2,J,Q,A2,h6,T2],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-desktop[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;position:relative;margin:0 15px;font-family:custom-font;font-size:14px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]{display:flex;flex:1 1 100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:inline-block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;cursor:pointer}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%]{visibility:visible;opacity:1}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{visibility:hidden;display:grid;opacity:0;margin-top:15px;position:absolute;grid-template-columns:1fr;padding:20px;min-width:150px;max-width:300px;background-color:var(--primary-bg-color);transition:opacity .3s,visibility .3s;cursor:default}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:7px 0;width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{transition:color .3s;position:relative}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-bottom:4px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]{flex-basis:100px;align-self:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2800px;max-height:2800px;width:100px;height:100px;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;justify-content:flex-end}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;transition:color .3s;cursor:pointer}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:18px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-dropdown[_ngcontent-%COMP%]{opacity:1!important;visibility:visible!important}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:9px}.sub-dropdown[_ngcontent-%COMP%]{position:absolute;left:100%;top:-20px;margin-top:0!important;margin-left:20px!important;visibility:hidden!important;opacity:0!important;transition:opacity .3s,visibility .3s;cursor:default}.sub-dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color)!important}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:0%!important}']});let a=c;return a})();var T6=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=S({type:c,selectors:[["app-footer"]],standalone:!0,features:[y],decls:2,vars:0,template:function(n,r){n&1&&(f(0,"p"),H(1,"footer works!"),l())}});let a=c;return a})();var E6=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=S({type:c,selectors:[["app-top-announcement"]],standalone:!0,features:[y],decls:3,vars:0,consts:[[1,"announcement-wrapper"]],template:function(n,r){n&1&&(f(0,"div",0)(1,"span"),H(2,"Free shipping for all orders over $50"),l()())},styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}.announcement-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--announcement-bg-color)}.announcement-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color);padding:10px 30px;font-size:16px;font-family:custom-font}']});let a=c;return a})();function S5(a,c){if(a&1){let i=U3();f(0,"div",3)(1,"button",4),L("click",function(){O3(i);let n=T().index,r=T();return D3(r.toggleListButton(r.elementNumber+n+1))}),C(2,"fa-icon",5),l()()}if(a&2){let i=T().index,e=T();u(2),l1("active",e.toggleListButtonArray[e.elementNumber+i+1]),d("icon",e.faChevronDown)}}function y5(a,c){if(a&1&&(F(0),f(1,"ul",11)(2,"li",12)(3,"div",9)(4,"a",2),H(5),l()()()(),O()),a&2){let i=c.$implicit,e=T().index,n=T();u(),l1("active",n.toggleListButtonArray[n.elementNumber+e+1]),u(4),H1("",i.subListTitle," ")}}function w5(a,c){if(a&1&&(F(0),f(1,"ul",7)(2,"li",8)(3,"div",9)(4,"a",2),H(5),l(),A(6,S5,3,3,"div",10),l()(),A(7,y5,6,3,"ng-container",6),l(),O()),a&2){let i=c.$implicit,e=T();u(),l1("active",e.toggleListButtonArray[e.elementNumber]),u(4),H1(" ",i.subTitle," "),u(),d("ngIf",i.subList),u(),d("ngForOf",i.subList)}}var B6=(()=>{let c=class c{constructor(){this.faChevronDown=f6,this.toggleListButtonArray=[]}toggleListButton(e){this.toggleListButtonArray[e]=!this.toggleListButtonArray[e]}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=S({type:c,selectors:[["app-list-item"]],inputs:{data:"data",elementNumber:"elementNumber"},standalone:!0,features:[y],decls:8,vars:5,consts:[[1,"side-menu-item-container"],[1,"side-menu-item","first"],["href",""],[1,"list-toggle"],[3,"click"],[3,"icon"],[4,"ngFor","ngForOf"],[1,"side-menu-sublist"],[1,"side-menu-sublist-item"],[1,"side-menu-item"],["class","list-toggle",4,"ngIf"],[1,"side-menu-sub-sublist"],[1,"side-menu-sub-sublist-item"]],template:function(n,r){n&1&&(f(0,"li",0)(1,"div",1)(2,"a",2),H(3),l(),f(4,"div",3)(5,"button",4),L("click",function(){return r.toggleListButton(r.elementNumber)}),C(6,"fa-icon",5),l()()(),A(7,w5,8,5,"ng-container",6),l()),n&2&&(u(3),H1(" ",r.data.title," "),u(3),l1("active",r.toggleListButtonArray[r.elementNumber]),d("icon",r.faChevronDown),u(),d("ngForOf",r.data.dropdownItemList))},dependencies:[E,N1,S1,J,Q],styles:[".side-menu-item-container[_ngcontent-%COMP%]{padding:0 20px;height:auto;overflow:hidden}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;padding:15px 0;list-style:none}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--primary-bg-color);text-decoration:none;font-family:custom-font!important;font-size:18px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   .list-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;border:none;background-color:inherit}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item.first[_ngcontent-%COMP%]{position:relative;background-color:var(--primary-text-color);z-index:3;padding:20px 0;border-bottom:solid 1px rgba(166,151,143,.25);margin-bottom:1px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]{list-style:none;padding-left:10px;z-index:1}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]   .side-menu-sublist-item[_ngcontent-%COMP%]{margin:0}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]   .side-menu-sublist-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sub-sublist[_ngcontent-%COMP%]{overflow:hidden;list-style:none;z-index:99999;padding-left:20px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sub-sublist[_ngcontent-%COMP%]   .side-menu-sub-sublist-item[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}fa-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;transition:transform .5s;cursor:pointer}fa-icon.active[_ngcontent-%COMP%]{transform:rotate(180deg)}.side-menu-sublist[_ngcontent-%COMP%], .side-menu-sub-sublist[_ngcontent-%COMP%]{max-height:0;transition:max-height .3s ease-out}.side-menu-sublist.active[_ngcontent-%COMP%], .side-menu-sub-sublist.active[_ngcontent-%COMP%]{max-height:1000px;transition:max-height .5s ease-in}"]});let a=c;return a})();var R6={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var I6={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};var q6={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};var G6={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};var U6=(()=>{let c=class c{constructor(){}getItemList(){return[{title:"Shop",dropdownItemList:[{subTitle:"Coffee",subList:[{subListTitle:"Classic Coffees"},{subListTitle:"Single Origins"}]},{subTitle:"Coffee Clubs",subList:[{subListTitle:"Join the Club"},{subListTitle:"Manage Your Subscription"}]},{subTitle:"Gifts",subList:[{subListTitle:"Gift a Coffee Subscription"},{subListTitle:"Gift a Gift Card"}]},{subTitle:"Goods",subList:[{subListTitle:"Brewing Equipment"},{subListTitle:"Merchandise"}]},{subTitle:"Shop All"}]},{title:"Learn",dropdownItemList:[{subTitle:"Blog"},{subTitle:"Contact Us"},{subTitle:"FAQ"}]},{title:"Wholesale",dropdownItemList:[{subTitle:"Login"},{subTitle:"Wholesale Inquiry"},{subTitle:"FAQ"}]},{title:"Connect",dropdownItemList:[{subTitle:"About Us"},{subTitle:"Cafe"},{subTitle:"Carrers"},{subTitle:"Press"}]}]}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=X({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var A5=a=>({show:a});function P5(a,c){if(a&1&&(F(0),C(1,"app-list-item",9),O()),a&2){let i=c.$implicit,e=c.index;u(),d("data",i)("elementNumber",e)}}var W6=(()=>{let c=class c{constructor(e,n){this._itemService=e,this._sideMenuService=n,this.toggleMenuRequest=new o1,this.showSideMenu=!1,this.faXmark=k2,this.faFacebook=I6,this.faTwitter=G6,this.faInstagram=R6,this.faYoutube=q6,this.toggleListButtonArray=[],this.itemList=[]}ngOnInit(){this.itemList=this._itemService.getItemList()}toggleMenu(){this.showSideMenu=!1,this.toggleMenuRequest.emit(),this.setSideMenuState()}setSideMenuState(){this._sideMenuService.setClose()}};c.\u0275fac=function(n){return new(n||c)(M(U6),M(c1))},c.\u0275cmp=S({type:c,selectors:[["app-side-mobile-menu"]],inputs:{showSideMenu:"showSideMenu"},outputs:{toggleMenuRequest:"toggleMenuRequest"},standalone:!0,features:[y],decls:18,vars:9,consts:[[1,"side-menu",3,"ngClass"],[1,"side-menu-logo"],[3,"click"],[3,"icon"],[1,"side-menu-main-list"],[4,"ngFor","ngForOf"],[1,"side-menu-footer"],["href",""],[1,"icons-wrapper"],[3,"data","elementNumber"]],template:function(n,r){n&1&&(f(0,"div",0)(1,"div",1)(2,"button",2),L("click",function(){return r.toggleMenu()}),C(3,"fa-icon",3),l()(),f(4,"ul",4),A(5,P5,2,2,"ng-container",5),l(),f(6,"div",6)(7,"a",7),H(8," Log in "),l(),f(9,"div",8)(10,"a",7),C(11,"fa-icon",3),l(),f(12,"a",7),C(13,"fa-icon",3),l(),f(14,"a",7),C(15,"fa-icon",3),l(),f(16,"a",7),C(17,"fa-icon",3),l()()()()),n&2&&(d("ngClass",f1(7,A5,r.showSideMenu)),u(3),d("icon",r.faXmark),u(2),d("ngForOf",r.itemList),u(6),d("icon",r.faFacebook),u(2),d("icon",r.faTwitter),u(2),d("icon",r.faInstagram),u(2),d("icon",r.faYoutube))},dependencies:[E,x1,N1,B6,J,Q],styles:[".side-menu[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:90%;background-color:var(--primary-text-color);z-index:9999;transition:transform .3s ease;transform:translate(-110%);overflow:auto}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;position:sticky;justify-content:flex-end;z-index:5;width:100%;background-color:transparent;height:6%;top:0}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;border:none;padding:0}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:0 15px;font-size:35px;cursor:pointer}.side-menu[_ngcontent-%COMP%]   .side-menu-main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;position:relative;width:100%;min-height:88%;list-style:none;padding:0;margin:0 0 auto}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]{z-index:5;width:100%;background-color:inherit;height:calc(6% - 2px);display:flex;align-items:center;flex-wrap:wrap;overflow:auto;position:sticky;bottom:0;border-top:solid 2px rgb(166,151,143)}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:custom-font;font-size:14px;padding-left:20px;cursor:pointer;color:var(--primary-bg-color);font-weight:700}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]{margin-left:auto;padding-right:20px;display:flex;align-items:center;flex-wrap:wrap}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 10px;display:flex;align-items:center;text-decoration:none;color:var(--primary-bg-color)}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}.show[_ngcontent-%COMP%]{transform:translate(0)}"]});let a=c;return a})();var _5=a=>({"margin-bottom.px":a}),j6=(()=>{let c=class c{constructor(e,n){this.elementRef=e,this._sideMenuService=n,this.faSearch=_1,this.faShoppingCart=w2,this.faBars=y2,this.navbarHeight=0,this.showSideMenu=!1,this.showSideSearchMenu=!1,a2(window,"resize").pipe(e2(null),t1(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(s=>{s!=0&&(this.navbarHeight=s)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}toggleSideMenu(){this._sideMenuService.setOpen(),this.showSideMenu=!this.showSideMenu}toggleSearchSideMenu(){this._sideMenuService.setOpen(),this.showSideSearchMenu=!this.showSideSearchMenu}};c.\u0275fac=function(n){return new(n||c)(M(R),M(c1))},c.\u0275cmp=S({type:c,selectors:[["app-navbar-mobile"]],standalone:!0,features:[y],decls:22,vars:9,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-mobile"],[1,"wrapper-padded"],[1,"table-grid-container"],[1,"grid-item-container","left"],[1,"grid-item"],[3,"click"],[3,"icon"],[1,"grid-item-container","center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"grid-item-container","right"],[3,"toggleMenuRequest","showSideMenu"],[3,"toggleSearchMenuRequest","showSideSearchMenu","isMobile"]],template:function(n,r){n&1&&(f(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"button",6),L("click",function(){return r.toggleSideMenu()}),C(7,"fa-icon",7),l()()(),f(8,"div",8)(9,"div",9)(10,"h1",10)(11,"a",11)(12,"div",12),C(13,"img",13),l()(),C(14,"a",14),l()()(),f(15,"div",15)(16,"div",5)(17,"button",6),L("click",function(){return r.toggleSearchSideMenu()}),C(18,"fa-icon",7),l(),C(19,"fa-icon",7),l()()()()()(),f(20,"app-side-mobile-menu",16),L("toggleMenuRequest",function(){return r.toggleSideMenu()}),l(),f(21,"app-side-search-menu",17),L("toggleSearchMenuRequest",function(){return r.toggleSearchSideMenu()}),l()),n&2&&(d("ngStyle",f1(7,_5,-r.navbarHeight)),u(7),d("icon",r.faBars),u(11),d("icon",r.faSearch),u(),d("icon",r.faShoppingCart),u(),d("showSideMenu",r.showSideMenu),u(),d("showSideSearchMenu",r.showSideSearchMenu)("isMobile",!0))},dependencies:[E,l2,J,Q,A2,W6,T2],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}header[_ngcontent-%COMP%]{position:fixed;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]{padding:0 30px;position:relative;margin:0 auto}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]{display:table;table-layout:fixed;width:100%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container[_ngcontent-%COMP%]{display:table-cell;float:none;vertical-align:middle;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]{width:50%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}@media screen and (max-width: 768px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}@media screen and (max-width: 425px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}']});let a=c;return a})();var F5=a=>({sideMenuOpen:a});function O5(a,c){a&1&&(F(0),C(1,"app-navbar-mobile"),O())}function D5(a,c){a&1&&C(0,"app-navbar")}var Z6=(()=>{let c=class c{constructor(e,n,r){this.render=e,this._sideMenuService=n,this.document=r,this.isMobile=!1,this.sideMenuState=!1,this.checkIfMobile()}ngOnInit(){this._sideMenuService.State.subscribe(e=>{console.log(e),this.sideMenuState=e,e?(this.render.addClass(this.document.body,"sideMenuOpen"),console.log(this.document.body)):this.render.removeClass(this.document.body,"sideMenuOpen")})}onResize(){this.checkIfMobile()}checkIfMobile(){this.isMobile=window.innerWidth<=990}};c.\u0275fac=function(n){return new(n||c)(M(W),M(c1),M(o2))},c.\u0275cmp=S({type:c,selectors:[["app-layout"]],hostBindings:function(n,r){n&1&&L("resize",function(t){return r.onResize(t)},!1,n2)},standalone:!0,features:[y],decls:8,vars:5,consts:[["desktopNavbar",""],[1,"sideMenuOpen",3,"ngClass"],[4,"ngIf","ngIfElse"]],template:function(n,r){if(n&1&&(f(0,"main",1),C(1,"app-top-announcement"),A(2,O5,2,0,"ng-container",2)(3,D5,1,0,"ng-template",null,0,t2),f(5,"div"),C(6,"router-outlet"),l(),C(7,"app-footer"),l()),n&2){let s=r2(4);d("ngClass",f1(3,F5,r.sideMenuState)),u(2),d("ngIf",r.isMobile)("ngIfElse",s)}},dependencies:[E,x1,S1,D6,T6,e4,E6,j6],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1000;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.sideMenuOpen[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(app-navbar):not(app-navbar-mobile){overflow:hidden;opacity:.5;transition:opacity .4s linear 0s;background-color:var(--overlay-color)}.sideMenuOpen[_ngcontent-%COMP%]   app-navbar[_ngcontent-%COMP%]  header{pointer-events:none!important}.sideMenuOpen[_ngcontent-%COMP%]   app-navbar-mobile[_ngcontent-%COMP%]  header{pointer-events:none!important}']});let a=c;return a})();var $6=(()=>{let c=class c{constructor(){this.title="coffee-shop"}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=S({type:c,selectors:[["app-root"]],standalone:!0,features:[y],decls:1,vars:0,template:function(n,r){n&1&&C(0,"app-layout")},dependencies:[E,Z6]});let a=c;return a})();c4($6,s4).catch(a=>console.error(a));
