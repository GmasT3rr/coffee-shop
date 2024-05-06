import{a as e4,b as i4,c as n4,d as r4,e as t4}from"./chunk-VNB3OQBT.js";import{$ as g,$a as h,B as F3,Db as X2,Ea as R3,Fa as q3,Ga as s2,Gb as f2,Ia as m,Ja as M,K as r2,Ka as G3,L as D3,La as U3,Ma as W3,N as G2,Na as e1,Nb as w1,O as U2,Oa as j3,Ob as I,P as W2,Pa as Z3,Pb as R,Q as B,Qb as m2,R as E1,Rb as c4,Sa as S1,Sb as a4,T as V1,Tb as P,W as j2,Wa as L,Xa as $2,Ya as z,Za as v1,_ as t2,_a as d,a as Q,aa as B1,ab as H,b as f1,ba as J,bb as S,ca as T3,cb as w,db as $3,eb as Y3,f as i2,fb as k,ga as y1,gb as A,ha as E3,hb as X3,ia as B3,ib as K3,j as P3,ja as Z2,jb as o2,kb as x,l as _3,lb as g1,m as q2,ma as $,mb as i1,na as h1,nb as Y2,ob as b,pb as z1,q as m1,qb as Q3,rb as I1,sa as I3,sb as R1,tb as l2,vb as J3,w as O3,x as n2}from"./chunk-SBDOOR3A.js";var i0="@",n0=(()=>{let c=class c{constructor(i,n,r,t,s){this.doc=i,this.delegate=n,this.zone=r,this.animationType=t,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=j2(U3,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-3A4HB5UN.js")).catch(n=>{throw new U2(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let t=new r(this.delegate,this._engine,this.zone);return this.delegate=t,t})}createRenderer(i,n){let r=this.delegate.createRenderer(i,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let t=new K2(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let o=s.createRenderer(i,n);t.use(o)}).catch(s=>{t.use(r)}),t}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};c.\u0275fac=function(n){G3()},c.\u0275prov=B({token:c,factory:c.\u0275fac});let a=c;return a})(),K2=class{constructor(c){this.delegate=c,this.replay=[],this.\u0275type=1}use(c){if(this.delegate=c,this.replay!==null){for(let e of this.replay)e(c);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(c,e){return this.delegate.createElement(c,e)}createComment(c){return this.delegate.createComment(c)}createText(c){return this.delegate.createText(c)}get destroyNode(){return this.delegate.destroyNode}appendChild(c,e){this.delegate.appendChild(c,e)}insertBefore(c,e,i,n){this.delegate.insertBefore(c,e,i,n)}removeChild(c,e,i){this.delegate.removeChild(c,e,i)}selectRootElement(c,e){return this.delegate.selectRootElement(c,e)}parentNode(c){return this.delegate.parentNode(c)}nextSibling(c){return this.delegate.nextSibling(c)}setAttribute(c,e,i,n){this.delegate.setAttribute(c,e,i,n)}removeAttribute(c,e,i){this.delegate.removeAttribute(c,e,i)}addClass(c,e){this.delegate.addClass(c,e)}removeClass(c,e){this.delegate.removeClass(c,e)}setStyle(c,e,i,n){this.delegate.setStyle(c,e,i,n)}removeStyle(c,e,i){this.delegate.removeStyle(c,e,i)}setProperty(c,e,i){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(c,e,i)),this.delegate.setProperty(c,e,i)}setValue(c,e){this.delegate.setValue(c,e)}listen(c,e,i){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(c,e,i)),this.delegate.listen(c,e,i)}shouldReplay(c){return this.replay!==null&&c.startsWith(i0)}};function s4(a="animations"){return j3("NgAsyncAnimations"),T3([{provide:W3,useFactory:(c,e,i)=>new n0(c,e,i,a),deps:[f2,e4,Z3]},{provide:I3,useValue:a==="noop"?"NoopAnimations":"BrowserAnimations"}])}var o4=[{path:"",loadChildren:()=>import("./chunk-2MT5ANEC.js").then(a=>a.HomeModule)}];var l4={providers:[t4(o4),s4()]};function f4(a,c){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);c&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),e.push.apply(e,i)}return e}function f(a){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?f4(Object(e),!0).forEach(function(i){F(a,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):f4(Object(e)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(e,i))})}return a}function L2(a){"@babel/helpers - typeof";return L2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},L2(a)}function r0(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function m4(a,c){for(var e=0;e<c.length;e++){var i=c[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function t0(a,c,e){return c&&m4(a.prototype,c),e&&m4(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function F(a,c,e){return c in a?Object.defineProperty(a,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[c]=e,a}function v3(a,c){return o0(a)||f0(a,c)||D4(a,c)||h0()}function X1(a){return s0(a)||l0(a)||D4(a)||m0()}function s0(a){if(Array.isArray(a))return e3(a)}function o0(a){if(Array.isArray(a))return a}function l0(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function f0(a,c){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var i=[],n=!0,r=!1,t,s;try{for(e=e.call(a);!(n=(t=e.next()).done)&&(i.push(t.value),!(c&&i.length===c));n=!0);}catch(o){r=!0,s=o}finally{try{!n&&e.return!=null&&e.return()}finally{if(r)throw s}}return i}}function D4(a,c){if(a){if(typeof a=="string")return e3(a,c);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return e3(a,c)}}function e3(a,c){(c==null||c>a.length)&&(c=a.length);for(var e=0,i=new Array(c);e<c;e++)i[e]=a[e];return i}function m0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h4=function(){},z3={},T4={},E4=null,B4={mark:h4,measure:h4};try{typeof window<"u"&&(z3=window),typeof document<"u"&&(T4=document),typeof MutationObserver<"u"&&(E4=MutationObserver),typeof performance<"u"&&(B4=performance)}catch{}var v0=z3.navigator||{},v4=v0.userAgent,z4=v4===void 0?"":v4,d1=z3,y=T4,p4=E4,h2=B4,f7=!!d1.document,s1=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",I4=~z4.indexOf("MSIE")||~z4.indexOf("Trident/"),v2,z2,p2,d2,u2,n1="___FONT_AWESOME___",i3=16,R4="fa",q4="svg-inline--fa",x1="data-fa-i2svg",n3="data-fa-pseudo-element",z0="data-fa-pseudo-element-pending",p3="data-prefix",d3="data-icon",d4="fontawesome-i2svg",p0="async",d0=["HTML","HEAD","STYLE","SCRIPT"],G4=function(){try{return!0}catch{return!1}}(),N="classic",_="sharp",u3=[N,_];function K1(a){return new Proxy(a,{get:function(e,i){return i in e?e[i]:e[N]}})}var W1=K1((v2={},F(v2,N,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),F(v2,_,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),v2)),j1=K1((z2={},F(z2,N,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F(z2,_,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),z2)),Z1=K1((p2={},F(p2,N,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F(p2,_,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),p2)),u0=K1((d2={},F(d2,N,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F(d2,_,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),d2)),H0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,U4="fa-layers-text",M0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,C0=K1((u2={},F(u2,N,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F(u2,_,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),u2)),W4=[1,2,3,4,5,6,7,8,9,10],V0=W4.concat([11,12,13,14,15,16,17,18,19,20]),g0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],L1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$1=new Set;Object.keys(j1[N]).map($1.add.bind($1));Object.keys(j1[_]).map($1.add.bind($1));var L0=[].concat(u3,X1($1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",L1.GROUP,L1.SWAP_OPACITY,L1.PRIMARY,L1.SECONDARY]).concat(W4.map(function(a){return"".concat(a,"x")})).concat(V0.map(function(a){return"w-".concat(a)})),G1=d1.FontAwesomeConfig||{};function b0(a){var c=y.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function x0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}y&&typeof y.querySelector=="function"&&(u4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],u4.forEach(function(a){var c=v3(a,2),e=c[0],i=c[1],n=x0(b0(e));n!=null&&(G1[i]=n)}));var u4,j4={styleDefault:"solid",familyDefault:"classic",cssPrefix:R4,replacementClass:q4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};G1.familyPrefix&&(G1.cssPrefix=G1.familyPrefix);var _1=f(f({},j4),G1);_1.autoReplaceSvg||(_1.observeMutations=!1);var p={};Object.keys(j4).forEach(function(a){Object.defineProperty(p,a,{enumerable:!0,set:function(e){_1[a]=e,U1.forEach(function(i){return i(p)})},get:function(){return _1[a]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){_1.cssPrefix=c,U1.forEach(function(e){return e(p)})},get:function(){return _1.cssPrefix}});d1.FontAwesomeConfig=p;var U1=[];function N0(a){return U1.push(a),function(){U1.splice(U1.indexOf(a),1)}}var p1=i3,c1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function y0(a){if(!(!a||!s1)){var c=y.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var e=y.head.childNodes,i=null,n=e.length-1;n>-1;n--){var r=e[n],t=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(i=r)}return y.head.insertBefore(c,i),a}}var S0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Y1(){for(var a=12,c="";a-- >0;)c+=S0[Math.random()*62|0];return c}function O1(a){for(var c=[],e=(a||[]).length>>>0;e--;)c[e]=a[e];return c}function H3(a){return a.classList?O1(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function Z4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w0(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,'="').concat(Z4(a[e]),'" ')},"").trim()}function N2(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,": ").concat(a[e].trim(),";")},"")}function M3(a){return a.size!==c1.size||a.x!==c1.x||a.y!==c1.y||a.rotate!==c1.rotate||a.flipX||a.flipY}function k0(a){var c=a.transform,e=a.containerWidth,i=a.iconWidth,n={transform:"translate(".concat(e/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),t="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),s="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(r," ").concat(t," ").concat(s)},v={transform:"translate(".concat(i/2*-1," -256)")};return{outer:n,inner:o,path:v}}function A0(a){var c=a.transform,e=a.width,i=e===void 0?i3:e,n=a.height,r=n===void 0?i3:n,t=a.startCentered,s=t===void 0?!1:t,o="";return s&&I4?o+="translate(".concat(c.x/p1-i/2,"em, ").concat(c.y/p1-r/2,"em) "):s?o+="translate(calc(-50% + ".concat(c.x/p1,"em), calc(-50% + ").concat(c.y/p1,"em)) "):o+="translate(".concat(c.x/p1,"em, ").concat(c.y/p1,"em) "),o+="scale(".concat(c.size/p1*(c.flipX?-1:1),", ").concat(c.size/p1*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var P0=`:root, :host {
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
}`;function $4(){var a=R4,c=q4,e=p.cssPrefix,i=p.replacementClass,n=P0;if(e!==a||i!==c){var r=new RegExp("\\.".concat(a,"\\-"),"g"),t=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(c),"g");n=n.replace(r,".".concat(e,"-")).replace(t,"--".concat(e,"-")).replace(s,".".concat(i))}return n}var H4=!1;function Q2(){p.autoAddCss&&!H4&&(y0($4()),H4=!0)}var _0={mixout:function(){return{dom:{css:$4,insertCss:Q2}}},hooks:function(){return{beforeDOMElementCreation:function(){Q2()},beforeI2svg:function(){Q2()}}}},r1=d1||{};r1[n1]||(r1[n1]={});r1[n1].styles||(r1[n1].styles={});r1[n1].hooks||(r1[n1].hooks={});r1[n1].shims||(r1[n1].shims=[]);var Y=r1[n1],Y4=[],O0=function a(){y.removeEventListener("DOMContentLoaded",a),b2=1,Y4.map(function(c){return c()})},b2=!1;s1&&(b2=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),b2||y.addEventListener("DOMContentLoaded",O0));function F0(a){s1&&(b2?setTimeout(a,0):Y4.push(a))}function Q1(a){var c=a.tag,e=a.attributes,i=e===void 0?{}:e,n=a.children,r=n===void 0?[]:n;return typeof a=="string"?Z4(a):"<".concat(c," ").concat(w0(i),">").concat(r.map(Q1).join(""),"</").concat(c,">")}function M4(a,c,e){if(a&&a[c]&&a[c][e])return{prefix:c,iconName:e,icon:a[c][e]}}var D0=function(c,e){return function(i,n,r,t){return c.call(e,i,n,r,t)}},J2=function(c,e,i,n){var r=Object.keys(c),t=r.length,s=n!==void 0?D0(e,n):e,o,v,l;for(i===void 0?(o=1,l=c[r[0]]):(o=0,l=i);o<t;o++)v=r[o],l=s(l,c[v],v,c);return l};function T0(a){for(var c=[],e=0,i=a.length;e<i;){var n=a.charCodeAt(e++);if(n>=55296&&n<=56319&&e<i){var r=a.charCodeAt(e++);(r&64512)==56320?c.push(((n&1023)<<10)+(r&1023)+65536):(c.push(n),e--)}else c.push(n)}return c}function r3(a){var c=T0(a);return c.length===1?c[0].toString(16):null}function E0(a,c){var e=a.length,i=a.charCodeAt(c),n;return i>=55296&&i<=56319&&e>c+1&&(n=a.charCodeAt(c+1),n>=56320&&n<=57343)?(i-55296)*1024+n-56320+65536:i}function C4(a){return Object.keys(a).reduce(function(c,e){var i=a[e],n=!!i.icon;return n?c[i.iconName]=i.icon:c[e]=i,c},{})}function t3(a,c){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=e.skipHooks,n=i===void 0?!1:i,r=C4(c);typeof Y.hooks.addPack=="function"&&!n?Y.hooks.addPack(a,C4(c)):Y.styles[a]=f(f({},Y.styles[a]||{}),r),a==="fas"&&t3("fa",c)}var H2,M2,C2,k1=Y.styles,B0=Y.shims,I0=(H2={},F(H2,N,Object.values(Z1[N])),F(H2,_,Object.values(Z1[_])),H2),C3=null,X4={},K4={},Q4={},J4={},c6={},R0=(M2={},F(M2,N,Object.keys(W1[N])),F(M2,_,Object.keys(W1[_])),M2);function q0(a){return~L0.indexOf(a)}function G0(a,c){var e=c.split("-"),i=e[0],n=e.slice(1).join("-");return i===a&&n!==""&&!q0(n)?n:null}var a6=function(){var c=function(r){return J2(k1,function(t,s,o){return t[o]=J2(s,r,{}),t},{})};X4=c(function(n,r,t){if(r[3]&&(n[r[3]]=t),r[2]){var s=r[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){n[o.toString(16)]=t})}return n}),K4=c(function(n,r,t){if(n[t]=t,r[2]){var s=r[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){n[o]=t})}return n}),c6=c(function(n,r,t){var s=r[2];return n[t]=t,s.forEach(function(o){n[o]=t}),n});var e="far"in k1||p.autoFetchSvg,i=J2(B0,function(n,r){var t=r[0],s=r[1],o=r[2];return s==="far"&&!e&&(s="fas"),typeof t=="string"&&(n.names[t]={prefix:s,iconName:o}),typeof t=="number"&&(n.unicodes[t.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});Q4=i.names,J4=i.unicodes,C3=y2(p.styleDefault,{family:p.familyDefault})};N0(function(a){C3=y2(a.styleDefault,{family:p.familyDefault})});a6();function V3(a,c){return(X4[a]||{})[c]}function U0(a,c){return(K4[a]||{})[c]}function b1(a,c){return(c6[a]||{})[c]}function e6(a){return Q4[a]||{prefix:null,iconName:null}}function W0(a){var c=J4[a],e=V3("fas",a);return c||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function u1(){return C3}var g3=function(){return{prefix:null,iconName:null,rest:[]}};function y2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.family,i=e===void 0?N:e,n=W1[i][a],r=j1[i][a]||j1[i][n],t=a in Y.styles?a:null;return r||t||null}var V4=(C2={},F(C2,N,Object.keys(Z1[N])),F(C2,_,Object.keys(Z1[_])),C2);function S2(a){var c,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,n=i===void 0?!1:i,r=(c={},F(c,N,"".concat(p.cssPrefix,"-").concat(N)),F(c,_,"".concat(p.cssPrefix,"-").concat(_)),c),t=null,s=N;(a.includes(r[N])||a.some(function(v){return V4[N].includes(v)}))&&(s=N),(a.includes(r[_])||a.some(function(v){return V4[_].includes(v)}))&&(s=_);var o=a.reduce(function(v,l){var u=G0(p.cssPrefix,l);if(k1[l]?(l=I0[s].includes(l)?u0[s][l]:l,t=l,v.prefix=l):R0[s].indexOf(l)>-1?(t=l,v.prefix=y2(l,{family:s})):u?v.iconName=u:l!==p.replacementClass&&l!==r[N]&&l!==r[_]&&v.rest.push(l),!n&&v.prefix&&v.iconName){var C=t==="fa"?e6(v.iconName):{},V=b1(v.prefix,v.iconName);C.prefix&&(t=null),v.iconName=C.iconName||V||v.iconName,v.prefix=C.prefix||v.prefix,v.prefix==="far"&&!k1.far&&k1.fas&&!p.autoFetchSvg&&(v.prefix="fas")}return v},g3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===_&&(k1.fass||p.autoFetchSvg)&&(o.prefix="fass",o.iconName=b1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||t==="fa")&&(o.prefix=u1()||"fas"),o}var j0=function(){function a(){r0(this,a),this.definitions={}}return t0(a,[{key:"add",value:function(){for(var e=this,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];var t=n.reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(s){e.definitions[s]=f(f({},e.definitions[s]||{}),t[s]),t3(s,t[s]);var o=Z1[N][s];o&&t3(o,t[s]),a6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,i){var n=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(n).map(function(r){var t=n[r],s=t.prefix,o=t.iconName,v=t.icon,l=v[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(e[s][u]=v)}),e[s][o]=v}),e}}]),a}(),g4=[],A1={},P1={},Z0=Object.keys(P1);function $0(a,c){var e=c.mixoutsTo;return g4=a,A1={},Object.keys(P1).forEach(function(i){Z0.indexOf(i)===-1&&delete P1[i]}),g4.forEach(function(i){var n=i.mixout?i.mixout():{};if(Object.keys(n).forEach(function(t){typeof n[t]=="function"&&(e[t]=n[t]),L2(n[t])==="object"&&Object.keys(n[t]).forEach(function(s){e[t]||(e[t]={}),e[t][s]=n[t][s]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(t){A1[t]||(A1[t]=[]),A1[t].push(r[t])})}i.provides&&i.provides(P1)}),e}function s3(a,c){for(var e=arguments.length,i=new Array(e>2?e-2:0),n=2;n<e;n++)i[n-2]=arguments[n];var r=A1[a]||[];return r.forEach(function(t){c=t.apply(null,[c].concat(i))}),c}function N1(a){for(var c=arguments.length,e=new Array(c>1?c-1:0),i=1;i<c;i++)e[i-1]=arguments[i];var n=A1[a]||[];n.forEach(function(r){r.apply(null,e)})}function t1(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return P1[a]?P1[a].apply(null,c):void 0}function o3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,e=a.prefix||u1();if(c)return c=b1(e,c)||c,M4(i6.definitions,e,c)||M4(Y.styles,e,c)}var i6=new j0,Y0=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,N1("noAuto")},X0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s1?(N1("beforeI2svg",c),t1("pseudoElements2svg",c),t1("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,F0(function(){Q0({autoReplaceSvgRoot:e}),N1("watch",c)})}},K0={icon:function(c){if(c===null)return null;if(L2(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:b1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],i=y2(c[0]);return{prefix:i,iconName:b1(i,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(H0))){var n=S2(c.split(" "),{skipLookups:!0});return{prefix:n.prefix||u1(),iconName:b1(n.prefix,n.iconName)||n.iconName}}if(typeof c=="string"){var r=u1();return{prefix:r,iconName:b1(r,c)||c}}}},G={noAuto:Y0,config:p,dom:X0,parse:K0,library:i6,findIconDefinition:o3,toHtml:Q1},Q0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,i=e===void 0?y:e;(Object.keys(Y.styles).length>0||p.autoFetchSvg)&&s1&&p.autoReplaceSvg&&G.dom.i2svg({node:i})};function w2(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(i){return Q1(i)})}}),Object.defineProperty(a,"node",{get:function(){if(s1){var i=y.createElement("div");return i.innerHTML=a.html,i.children}}}),a}function J0(a){var c=a.children,e=a.main,i=a.mask,n=a.attributes,r=a.styles,t=a.transform;if(M3(t)&&e.found&&!i.found){var s=e.width,o=e.height,v={x:s/o/2,y:.5};n.style=N2(f(f({},r),{},{"transform-origin":"".concat(v.x+t.x/16,"em ").concat(v.y+t.y/16,"em")}))}return[{tag:"svg",attributes:n,children:c}]}function c8(a){var c=a.prefix,e=a.iconName,i=a.children,n=a.attributes,r=a.symbol,t=r===!0?"".concat(c,"-").concat(p.cssPrefix,"-").concat(e):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:t}),children:i}]}]}function L3(a){var c=a.icons,e=c.main,i=c.mask,n=a.prefix,r=a.iconName,t=a.transform,s=a.symbol,o=a.title,v=a.maskId,l=a.titleId,u=a.extra,C=a.watchable,V=C===void 0?!1:C,T=i.found?i:e,U=T.width,Z=T.height,X=n==="fak",D=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(function(l1){return u.classes.indexOf(l1)===-1}).filter(function(l1){return l1!==""||!!l1}).concat(u.classes).join(" "),E={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:D,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(U," ").concat(Z)})},K=X&&!~u.classes.indexOf("fa-fw")?{width:"".concat(U/Z*16*.0625,"em")}:{};V&&(E.attributes[x1]=""),o&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(l||Y1())},children:[o]}),delete E.attributes.title);var q=f(f({},E),{},{prefix:n,iconName:r,main:e,mask:i,maskId:v,transform:t,symbol:s,styles:f(f({},K),u.styles)}),M1=i.found&&e.found?t1("generateAbstractMask",q)||{children:[],attributes:{}}:t1("generateAbstractIcon",q)||{children:[],attributes:{}},C1=M1.children,R2=M1.attributes;return q.children=C1,q.attributes=R2,s?c8(q):J0(q)}function L4(a){var c=a.content,e=a.width,i=a.height,n=a.transform,r=a.title,t=a.extra,s=a.watchable,o=s===void 0?!1:s,v=f(f(f({},t.attributes),r?{title:r}:{}),{},{class:t.classes.join(" ")});o&&(v[x1]="");var l=f({},t.styles);M3(n)&&(l.transform=A0({transform:n,startCentered:!0,width:e,height:i}),l["-webkit-transform"]=l.transform);var u=N2(l);u.length>0&&(v.style=u);var C=[];return C.push({tag:"span",attributes:v,children:[c]}),r&&C.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),C}function a8(a){var c=a.content,e=a.title,i=a.extra,n=f(f(f({},i.attributes),e?{title:e}:{}),{},{class:i.classes.join(" ")}),r=N2(i.styles);r.length>0&&(n.style=r);var t=[];return t.push({tag:"span",attributes:n,children:[c]}),e&&t.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),t}var c3=Y.styles;function l3(a){var c=a[0],e=a[1],i=a.slice(4),n=v3(i,1),r=n[0],t=null;return Array.isArray(r)?t={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(L1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(L1.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(L1.PRIMARY),fill:"currentColor",d:r[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:c,height:e,icon:t}}var e8={found:!1,width:512,height:512};function i8(a,c){!G4&&!p.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function f3(a,c){var e=c;return c==="fa"&&p.styleDefault!==null&&(c=u1()),new Promise(function(i,n){var r={found:!1,width:512,height:512,icon:t1("missingIconAbstract")||{}};if(e==="fa"){var t=e6(a)||{};a=t.iconName||a,c=t.prefix||c}if(a&&c&&c3[c]&&c3[c][a]){var s=c3[c][a];return i(l3(s))}i8(a,c),i(f(f({},e8),{},{icon:p.showMissingIcons&&a?t1("missingIconAbstract")||{}:{}}))})}var b4=function(){},m3=p.measurePerformance&&h2&&h2.mark&&h2.measure?h2:{mark:b4,measure:b4},q1='FA "6.5.2"',n8=function(c){return m3.mark("".concat(q1," ").concat(c," begins")),function(){return n6(c)}},n6=function(c){m3.mark("".concat(q1," ").concat(c," ends")),m3.measure("".concat(q1," ").concat(c),"".concat(q1," ").concat(c," begins"),"".concat(q1," ").concat(c," ends"))},b3={begin:n8,end:n6},V2=function(){};function x4(a){var c=a.getAttribute?a.getAttribute(x1):null;return typeof c=="string"}function r8(a){var c=a.getAttribute?a.getAttribute(p3):null,e=a.getAttribute?a.getAttribute(d3):null;return c&&e}function t8(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(p.replacementClass)}function s8(){if(p.autoReplaceSvg===!0)return g2.replace;var a=g2[p.autoReplaceSvg];return a||g2.replace}function o8(a){return y.createElementNS("http://www.w3.org/2000/svg",a)}function l8(a){return y.createElement(a)}function r6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.ceFn,i=e===void 0?a.tag==="svg"?o8:l8:e;if(typeof a=="string")return y.createTextNode(a);var n=i(a.tag);Object.keys(a.attributes||[]).forEach(function(t){n.setAttribute(t,a.attributes[t])});var r=a.children||[];return r.forEach(function(t){n.appendChild(r6(t,{ceFn:i}))}),n}function f8(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var g2={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(n){e.parentNode.insertBefore(r6(n),e)}),e.getAttribute(x1)===null&&p.keepOriginalSource){var i=y.createComment(f8(e));e.parentNode.replaceChild(i,e)}else e.remove()},nest:function(c){var e=c[0],i=c[1];if(~H3(e).indexOf(p.replacementClass))return g2.replace(c);var n=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(s,o){return o===p.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var t=i.map(function(s){return Q1(s)}).join(`
`);e.setAttribute(x1,""),e.innerHTML=t}};function N4(a){a()}function t6(a,c){var e=typeof c=="function"?c:V2;if(a.length===0)e();else{var i=N4;p.mutateApproach===p0&&(i=d1.requestAnimationFrame||N4),i(function(){var n=s8(),r=b3.begin("mutate");a.map(n),r(),e()})}}var x3=!1;function s6(){x3=!0}function h3(){x3=!1}var x2=null;function y4(a){if(p4&&p.observeMutations){var c=a.treeCallback,e=c===void 0?V2:c,i=a.nodeCallback,n=i===void 0?V2:i,r=a.pseudoElementsCallback,t=r===void 0?V2:r,s=a.observeMutationsRoot,o=s===void 0?y:s;x2=new p4(function(v){if(!x3){var l=u1();O1(v).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!x4(u.addedNodes[0])&&(p.searchPseudoElements&&t(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&p.searchPseudoElements&&t(u.target.parentNode),u.type==="attributes"&&x4(u.target)&&~g0.indexOf(u.attributeName))if(u.attributeName==="class"&&r8(u.target)){var C=S2(H3(u.target)),V=C.prefix,T=C.iconName;u.target.setAttribute(p3,V||l),T&&u.target.setAttribute(d3,T)}else t8(u.target)&&n(u.target)})}}),s1&&x2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function m8(){x2&&x2.disconnect()}function h8(a){var c=a.getAttribute("style"),e=[];return c&&(e=c.split(";").reduce(function(i,n){var r=n.split(":"),t=r[0],s=r.slice(1);return t&&s.length>0&&(i[t]=s.join(":").trim()),i},{})),e}function v8(a){var c=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),i=a.innerText!==void 0?a.innerText.trim():"",n=S2(H3(a));return n.prefix||(n.prefix=u1()),c&&e&&(n.prefix=c,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&i.length>0&&(n.iconName=U0(n.prefix,a.innerText)||V3(n.prefix,r3(a.innerText))),!n.iconName&&p.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=a.firstChild.data)),n}function z8(a){var c=O1(a.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),e=a.getAttribute("title"),i=a.getAttribute("data-fa-title-id");return p.autoA11y&&(e?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(i||Y1()):(c["aria-hidden"]="true",c.focusable="false")),c}function p8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:c1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function S4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=v8(a),i=e.iconName,n=e.prefix,r=e.rest,t=z8(a),s=s3("parseNodeAttributes",{},a),o=c.styleParser?h8(a):[];return f({iconName:i,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:n,transform:c1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:t}},s)}var d8=Y.styles;function o6(a){var c=p.autoReplaceSvg==="nest"?S4(a,{styleParser:!1}):S4(a);return~c.extra.classes.indexOf(U4)?t1("generateLayersText",a,c):t1("generateSvgReplacementMutation",a,c)}var H1=new Set;u3.map(function(a){H1.add("fa-".concat(a))});Object.keys(W1[N]).map(H1.add.bind(H1));Object.keys(W1[_]).map(H1.add.bind(H1));H1=X1(H1);function w4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s1)return Promise.resolve();var e=y.documentElement.classList,i=function(u){return e.add("".concat(d4,"-").concat(u))},n=function(u){return e.remove("".concat(d4,"-").concat(u))},r=p.autoFetchSvg?H1:u3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(d8));r.includes("fa")||r.push("fa");var t=[".".concat(U4,":not([").concat(x1,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(x1,"])")})).join(", ");if(t.length===0)return Promise.resolve();var s=[];try{s=O1(a.querySelectorAll(t))}catch{}if(s.length>0)i("pending"),n("complete");else return Promise.resolve();var o=b3.begin("onTree"),v=s.reduce(function(l,u){try{var C=o6(u);C&&l.push(C)}catch(V){G4||V.name==="MissingIcon"&&console.error(V)}return l},[]);return new Promise(function(l,u){Promise.all(v).then(function(C){t6(C,function(){i("active"),i("complete"),n("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(C){o(),u(C)})})}function u8(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;o6(a).then(function(e){e&&t6([e],c)})}function H8(a){return function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(c||{}).icon?c:o3(c||{}),n=e.mask;return n&&(n=(n||{}).icon?n:o3(n||{})),a(i,f(f({},e),{},{mask:n}))}}var M8=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,n=i===void 0?c1:i,r=e.symbol,t=r===void 0?!1:r,s=e.mask,o=s===void 0?null:s,v=e.maskId,l=v===void 0?null:v,u=e.title,C=u===void 0?null:u,V=e.titleId,T=V===void 0?null:V,U=e.classes,Z=U===void 0?[]:U,X=e.attributes,D=X===void 0?{}:X,E=e.styles,K=E===void 0?{}:E;if(c){var q=c.prefix,M1=c.iconName,C1=c.icon;return w2(f({type:"icon"},c),function(){return N1("beforeDOMElementCreation",{iconDefinition:c,params:e}),p.autoA11y&&(C?D["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(T||Y1()):(D["aria-hidden"]="true",D.focusable="false")),L3({icons:{main:l3(C1),mask:o?l3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:M1,transform:f(f({},c1),n),symbol:t,title:C,maskId:l,titleId:T,extra:{attributes:D,styles:K,classes:Z}})})}},C8={mixout:function(){return{icon:H8(M8)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=w4,e.nodeCallback=u8,e}}},provides:function(c){c.i2svg=function(e){var i=e.node,n=i===void 0?y:i,r=e.callback,t=r===void 0?function(){}:r;return w4(n,t)},c.generateSvgReplacementMutation=function(e,i){var n=i.iconName,r=i.title,t=i.titleId,s=i.prefix,o=i.transform,v=i.symbol,l=i.mask,u=i.maskId,C=i.extra;return new Promise(function(V,T){Promise.all([f3(n,s),l.iconName?f3(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(U){var Z=v3(U,2),X=Z[0],D=Z[1];V([e,L3({icons:{main:X,mask:D},prefix:s,iconName:n,transform:o,symbol:v,maskId:u,title:r,titleId:t,extra:C,watchable:!0})])}).catch(T)})},c.generateAbstractIcon=function(e){var i=e.children,n=e.attributes,r=e.main,t=e.transform,s=e.styles,o=N2(s);o.length>0&&(n.style=o);var v;return M3(t)&&(v=t1("generateAbstractTransformGrouping",{main:r,transform:t,containerWidth:r.width,iconWidth:r.width})),i.push(v||r.icon),{children:i,attributes:n}}}},V8={mixout:function(){return{layer:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.classes,r=n===void 0?[]:n;return w2({type:"layer"},function(){N1("beforeDOMElementCreation",{assembler:e,params:i});var t=[];return e(function(s){Array.isArray(s)?s.map(function(o){t=t.concat(o.abstract)}):t=t.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(X1(r)).join(" ")},children:t}]})}}}},g8={mixout:function(){return{counter:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.title,r=n===void 0?null:n,t=i.classes,s=t===void 0?[]:t,o=i.attributes,v=o===void 0?{}:o,l=i.styles,u=l===void 0?{}:l;return w2({type:"counter",content:e},function(){return N1("beforeDOMElementCreation",{content:e,params:i}),a8({content:e.toString(),title:r,extra:{attributes:v,styles:u,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(X1(s))}})})}}}},L8={mixout:function(){return{text:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.transform,r=n===void 0?c1:n,t=i.title,s=t===void 0?null:t,o=i.classes,v=o===void 0?[]:o,l=i.attributes,u=l===void 0?{}:l,C=i.styles,V=C===void 0?{}:C;return w2({type:"text",content:e},function(){return N1("beforeDOMElementCreation",{content:e,params:i}),L4({content:e,transform:f(f({},c1),r),title:s,extra:{attributes:u,styles:V,classes:["".concat(p.cssPrefix,"-layers-text")].concat(X1(v))}})})}}},provides:function(c){c.generateLayersText=function(e,i){var n=i.title,r=i.transform,t=i.extra,s=null,o=null;if(I4){var v=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/v,o=l.height/v}return p.autoA11y&&!n&&(t.attributes["aria-hidden"]="true"),Promise.resolve([e,L4({content:e.innerHTML,width:s,height:o,transform:r,title:n,extra:t,watchable:!0})])}}},b8=new RegExp('"',"ug"),k4=[1105920,1112319];function x8(a){var c=a.replace(b8,""),e=E0(c,0),i=e>=k4[0]&&e<=k4[1],n=c.length===2?c[0]===c[1]:!1;return{value:r3(n?c[0]:c),isSecondary:i||n}}function A4(a,c){var e="".concat(z0).concat(c.replace(":","-"));return new Promise(function(i,n){if(a.getAttribute(e)!==null)return i();var r=O1(a.children),t=r.filter(function(C1){return C1.getAttribute(n3)===c})[0],s=d1.getComputedStyle(a,c),o=s.getPropertyValue("font-family").match(M0),v=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(t&&!o)return a.removeChild(t),i();if(o&&l!=="none"&&l!==""){var u=s.getPropertyValue("content"),C=~["Sharp"].indexOf(o[2])?_:N,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?j1[C][o[2].toLowerCase()]:C0[C][v],T=x8(u),U=T.value,Z=T.isSecondary,X=o[0].startsWith("FontAwesome"),D=V3(V,U),E=D;if(X){var K=W0(U);K.iconName&&K.prefix&&(D=K.iconName,V=K.prefix)}if(D&&!Z&&(!t||t.getAttribute(p3)!==V||t.getAttribute(d3)!==E)){a.setAttribute(e,E),t&&a.removeChild(t);var q=p8(),M1=q.extra;M1.attributes[n3]=c,f3(D,V).then(function(C1){var R2=L3(f(f({},q),{},{icons:{main:C1,mask:g3()},prefix:V,iconName:E,extra:M1,watchable:!0})),l1=y.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(l1,a.firstChild):a.appendChild(l1),l1.outerHTML=R2.map(function(e0){return Q1(e0)}).join(`
`),a.removeAttribute(e),i()}).catch(n)}else i()}else i()})}function N8(a){return Promise.all([A4(a,"::before"),A4(a,"::after")])}function y8(a){return a.parentNode!==document.head&&!~d0.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(n3)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function P4(a){if(s1)return new Promise(function(c,e){var i=O1(a.querySelectorAll("*")).filter(y8).map(N8),n=b3.begin("searchPseudoElements");s6(),Promise.all(i).then(function(){n(),h3(),c()}).catch(function(){n(),h3(),e()})})}var S8={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=P4,e}}},provides:function(c){c.pseudoElements2svg=function(e){var i=e.node,n=i===void 0?y:i;p.searchPseudoElements&&P4(n)}}},_4=!1,w8={mixout:function(){return{dom:{unwatch:function(){s6(),_4=!0}}}},hooks:function(){return{bootstrap:function(){y4(s3("mutationObserverCallbacks",{}))},noAuto:function(){m8()},watch:function(e){var i=e.observeMutationsRoot;_4?h3():y4(s3("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},O4=function(c){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(i,n){var r=n.toLowerCase().split("-"),t=r[0],s=r.slice(1).join("-");if(t&&s==="h")return i.flipX=!0,i;if(t&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(t){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},e)},k8={mixout:function(){return{parse:{transform:function(e){return O4(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,i){var n=i.getAttribute("data-fa-transform");return n&&(e.transform=O4(n)),e}}},provides:function(c){c.generateAbstractTransformGrouping=function(e){var i=e.main,n=e.transform,r=e.containerWidth,t=e.iconWidth,s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),v="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(o," ").concat(v," ").concat(l)},C={transform:"translate(".concat(t/2*-1," -256)")},V={outer:s,inner:u,path:C};return{tag:"g",attributes:f({},V.outer),children:[{tag:"g",attributes:f({},V.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:f(f({},i.icon.attributes),V.path)}]}]}}}},a3={x:0,y:0,width:"100%",height:"100%"};function F4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function A8(a){return a.tag==="g"?a.children:[a]}var P8={hooks:function(){return{parseNodeAttributes:function(e,i){var n=i.getAttribute("data-fa-mask"),r=n?S2(n.split(" ").map(function(t){return t.trim()})):g3();return r.prefix||(r.prefix=u1()),e.mask=r,e.maskId=i.getAttribute("data-fa-mask-id"),e}}},provides:function(c){c.generateAbstractMask=function(e){var i=e.children,n=e.attributes,r=e.main,t=e.mask,s=e.maskId,o=e.transform,v=r.width,l=r.icon,u=t.width,C=t.icon,V=k0({transform:o,containerWidth:u,iconWidth:v}),T={tag:"rect",attributes:f(f({},a3),{},{fill:"white"})},U=l.children?{children:l.children.map(F4)}:{},Z={tag:"g",attributes:f({},V.inner),children:[F4(f({tag:l.tag,attributes:f(f({},l.attributes),V.path)},U))]},X={tag:"g",attributes:f({},V.outer),children:[Z]},D="mask-".concat(s||Y1()),E="clip-".concat(s||Y1()),K={tag:"mask",attributes:f(f({},a3),{},{id:D,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,X]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:A8(C)},K]};return i.push(q,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(D,")")},a3)}),{children:i,attributes:n}}}},_8={provides:function(c){var e=!1;d1.matchMedia&&(e=d1.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var i=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var t=f(f({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},t),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},t),{},{values:"1;0;0;0;0;1;"})}]}),e||i.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},t),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},O8={hooks:function(){return{parseNodeAttributes:function(e,i){var n=i.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},F8=[_0,C8,V8,g8,L8,S8,w8,k8,P8,_8,O8];$0(F8,{mixoutsTo:G});var m7=G.noAuto,h7=G.config,v7=G.library,z7=G.dom,l6=G.parse,p7=G.findIconDefinition,d7=G.toHtml,f6=G.icon,u7=G.layer,D8=G.text,T8=G.counter;var E8=["*"],B8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},I8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},R8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(e=>c[e]?e:null).filter(e=>e)},q8=a=>a.prefix!==void 0&&a.iconName!==void 0,G8=(a,c)=>q8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},U8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),W8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...i){for(let n of i){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let r of n.icon[2])typeof r=="string"&&(this.definitions[n.prefix][r]=n)}}addIconPacks(...i){for(let n of i){let r=Object.keys(n).map(t=>n[t]);this.addIcons(...r)}}getIconDefinition(i,n){return i in this.definitions&&n in this.definitions[i]?this.definitions[i][n]:null}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),j8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(i){if("size"in i)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(n){return new(n||c)},c.\u0275dir=J({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[y1]});let a=c;return a})(),Z8=(()=>{let c=class c{constructor(i,n){this.renderer=i,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(i){"size"in i&&(i.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${i.size.currentValue}`),i.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${i.size.previousValue}`))}};c.\u0275fac=function(n){return new(n||c)(M(e1),M($))},c.\u0275cmp=g({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[y1,b],ngContentSelectors:E8,decls:1,vars:0,template:function(n,r){n&1&&(X3(),K3(0))},encapsulation:2});let a=c;return a})(),W=(()=>{let c=class c{set spin(i){this.animation=i?"spin":void 0}set pulse(i){this.animation=i?"spin-pulse":void 0}constructor(i,n,r,t,s){this.sanitizer=i,this.config=n,this.iconLibrary=r,this.stackItem=t,this.classes=[],s!=null&&t==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(i){if(this.icon==null&&this.config.fallbackIcon==null){I8();return}if(i){let n=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(n);if(r!=null){let t=this.buildParams();this.renderIcon(r,t)}}}render(){this.ngOnChanges({})}findIconDefinition(i){let n=G8(i,this.config.defaultPrefix);if("icon"in n)return n;let r=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return r??(B8(n),null)}buildParams(){let i={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?l6.transform(this.transform):this.transform;return{title:this.title,transform:n,classes:[...R8(i),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(i,n){let r=f6(i,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};c.\u0275fac=function(n){return new(n||c)(M(n4),M(U8),M(W8),M(j8,8),M(Z8,8))},c.\u0275cmp=g({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,r){n&2&&(Y3("innerHTML",r.renderedIconHTML,R3),$2("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[y1,b],decls:0,vars:0,template:function(n,r){},encapsulation:2});let a=c;return a})();var j=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=B1({type:c}),c.\u0275inj=E1({});let a=c;return a})();var m6={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]};var h6={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]};var k2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var $8={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},A2=$8;var Y8={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},D1=Y8;var v6={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var P2={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var _2={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var O2=(()=>{let c=class c{constructor(i,n){this.elementRef=i,this.renderer=n}onWindowScroll(){let i=this.elementRef.nativeElement;window.scrollY>0?this.renderer.addClass(i,"translucent"):this.renderer.removeClass(i,"translucent")}};c.\u0275fac=function(n){return new(n||c)(M($),M(e1))},c.\u0275dir=J({type:c,selectors:[["","directiveScrollOpacity",""]],hostBindings:function(n,r){n&1&&k("scroll",function(){return r.onWindowScroll()},!1,s2)},standalone:!0});let a=c;return a})();var C6=(()=>{let c=class c{constructor(i,n){this._renderer=i,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(i,n){this._renderer.setProperty(this._elementRef.nativeElement,i,n)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};c.\u0275fac=function(n){return new(n||c)(M(e1),M($))},c.\u0275dir=J({type:c});let a=c;return a})(),X8=(()=>{let c=class c extends C6{};c.\u0275fac=(()=>{let i;return function(r){return(i||(i=Z2(c)))(r||c)}})(),c.\u0275dir=J({type:c,features:[S1]});let a=c;return a})(),V6=new V1("");var K8={provide:V6,useExisting:W2(()=>E2),multi:!0};function Q8(){let a=X2()?X2().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var J8=new V1(""),E2=(()=>{let c=class c extends C6{constructor(i,n,r){super(i,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Q8())}writeValue(i){let n=i??"";this.setProperty("value",n)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};c.\u0275fac=function(n){return new(n||c)(M(e1),M($),M(J8,8))},c.\u0275dir=J({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&k("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[Y2([K8]),S1]});let a=c;return a})();var c5=new V1(""),a5=new V1("");function g6(a){return a!=null}function L6(a){return J3(a)?_3(a):a}function b6(a){let c={};return a.forEach(e=>{c=e!=null?Q(Q({},c),e):c}),Object.keys(c).length===0?null:c}function x6(a,c){return c.map(e=>e(a))}function e5(a){return!a.validate}function N6(a){return a.map(c=>e5(c)?c:e=>c.validate(e))}function i5(a){if(!a)return null;let c=a.filter(g6);return c.length==0?null:function(e){return b6(x6(e,c))}}function y6(a){return a!=null?i5(N6(a)):null}function n5(a){if(!a)return null;let c=a.filter(g6);return c.length==0?null:function(e){let i=x6(e,c).map(L6);return O3(i).pipe(m1(b6))}}function S6(a){return a!=null?n5(N6(a)):null}function z6(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function w6(a){return a._rawValidators}function k6(a){return a._rawAsyncValidators}function N3(a){return a?Array.isArray(a)?a:[a]:[]}function D2(a,c){return Array.isArray(a)?a.includes(c):a===c}function p6(a,c){let e=N3(c);return N3(a).forEach(n=>{D2(e,n)||e.push(n)}),e}function d6(a,c){return N3(c).filter(e=>!D2(a,e))}var y3=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=y6(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=S6(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,e){return this.control?this.control.hasError(c,e):!1}getError(c,e){return this.control?this.control.getError(c,e):null}};var a2=class extends y3{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},S3=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},r5={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},U7=f1(Q({},r5),{"[class.ng-submitted]":"isSubmitted"}),A6=(()=>{let c=class c extends S3{constructor(i){super(i)}};c.\u0275fac=function(n){return new(n||c)(M(a2,2))},c.\u0275dir=J({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&v1("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[S1]});let a=c;return a})();var J1="VALID",F2="INVALID",T1="PENDING",c2="DISABLED";function t5(a){return(B2(a)?a.validators:a)||null}function s5(a){return Array.isArray(a)?y6(a):a||null}function o5(a,c){return(B2(c)?c.asyncValidators:a)||null}function l5(a){return Array.isArray(a)?S6(a):a||null}function B2(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}var w3=class{constructor(c,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===J1}get invalid(){return this.status===F2}get pending(){return this.status==T1}get disabled(){return this.status===c2}get enabled(){return this.status!==c2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(p6(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(p6(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(d6(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(d6(c,this._rawAsyncValidators))}hasValidator(c){return D2(this._rawValidators,c)}hasAsyncValidator(c){return D2(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=T1,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let e=this._parentMarkedDirty(c.onlySelf);this.status=c2,this.errors=null,this._forEachChild(i=>{i.disable(f1(Q({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f1(Q({},c),{skipPristineCheck:e})),this._onDisabledChange.forEach(i=>i(!0))}enable(c={}){let e=this._parentMarkedDirty(c.onlySelf);this.status=J1,this._forEachChild(i=>{i.enable(f1(Q({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(f1(Q({},c),{skipPristineCheck:e})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===J1||this.status===T1)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?c2:J1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=T1,this._hasOwnPendingAsyncValidator=!0;let e=L6(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,e={}){this.errors=c,this._updateControlsErrors(e.emitEvent!==!1)}get(c){let e=c;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,n)=>i&&i._find(n),this)}getError(c,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[c]:null}hasError(c,e){return!!this.getError(c,e)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new h1,this.statusChanges=new h1}_calculateStatus(){return this._allControlsDisabled()?c2:this.errors?F2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(T1)?T1:this._anyControlsHaveStatus(F2)?F2:J1}_anyControlsHaveStatus(c){return this._anyControls(e=>e.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){B2(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let e=this._parent&&this._parent.dirty;return!c&&!!e&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=s5(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=l5(this._rawAsyncValidators)}};var P6=new V1("CallSetDisabledState",{providedIn:"root",factory:()=>k3}),k3="always";function f5(a,c,e=k3){h5(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||e==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),z5(a,c),d5(a,c),p5(a,c),m5(a,c)}function u6(a,c,e=!0){let i=()=>{};c.valueAccessor&&(c.valueAccessor.registerOnChange(i),c.valueAccessor.registerOnTouched(i)),v5(a,c),a&&(c._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function T2(a,c){a.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(c)})}function m5(a,c){if(c.valueAccessor.setDisabledState){let e=i=>{c.valueAccessor.setDisabledState(i)};a.registerOnDisabledChange(e),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(e)})}}function h5(a,c){let e=w6(a);c.validator!==null?a.setValidators(z6(e,c.validator)):typeof e=="function"&&a.setValidators([e]);let i=k6(a);c.asyncValidator!==null?a.setAsyncValidators(z6(i,c.asyncValidator)):typeof i=="function"&&a.setAsyncValidators([i]);let n=()=>a.updateValueAndValidity();T2(c._rawValidators,n),T2(c._rawAsyncValidators,n)}function v5(a,c){let e=!1;if(a!==null){if(c.validator!==null){let n=w6(a);if(Array.isArray(n)&&n.length>0){let r=n.filter(t=>t!==c.validator);r.length!==n.length&&(e=!0,a.setValidators(r))}}if(c.asyncValidator!==null){let n=k6(a);if(Array.isArray(n)&&n.length>0){let r=n.filter(t=>t!==c.asyncValidator);r.length!==n.length&&(e=!0,a.setAsyncValidators(r))}}}let i=()=>{};return T2(c._rawValidators,i),T2(c._rawAsyncValidators,i),e}function z5(a,c){c.valueAccessor.registerOnChange(e=>{a._pendingValue=e,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&_6(a,c)})}function p5(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&_6(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function _6(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function d5(a,c){let e=(i,n)=>{c.valueAccessor.writeValue(i),n&&c.viewToModelUpdate(i)};a.registerOnChange(e),c._registerOnDestroy(()=>{a._unregisterOnChange(e)})}function u5(a,c){if(!a.hasOwnProperty("model"))return!1;let e=a.model;return e.isFirstChange()?!0:!Object.is(c,e.currentValue)}function H5(a){return Object.getPrototypeOf(a.constructor)===X8}function M5(a,c){if(!c)return null;Array.isArray(c);let e,i,n;return c.forEach(r=>{r.constructor===E2?e=r:H5(r)?i=r:n=r}),n||i||e||null}function H6(a,c){let e=a.indexOf(c);e>-1&&a.splice(e,1)}function M6(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var O6=class extends w3{constructor(c=null,e,i){super(t5(e),o5(i,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B2(e)&&(e.nonNullable||e.initialValueIsDefault)&&(M6(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,e={}){this.value=this._pendingValue=c,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(c,e={}){this.setValue(c,e)}reset(c=this.defaultValue,e={}){this._applyFormState(c),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){H6(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){H6(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){M6(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var F6=new V1(""),C5={provide:a2,useExisting:W2(()=>A3)},A3=(()=>{let c=class c extends a2{set isDisabled(i){}constructor(i,n,r,t,s){super(),this._ngModelWarningConfig=t,this.callSetDisabledState=s,this.update=new h1,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(n),this.valueAccessor=M5(this,r)}ngOnChanges(i){if(this._isControlChanged(i)){let n=i.form.previousValue;n&&u6(n,this,!1),f5(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}u5(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&u6(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};c._ngModelWarningSentOnce=!1,c.\u0275fac=function(n){return new(n||c)(M(c5,10),M(a5,10),M(V6,10),M(F6,8),M(P6,8))},c.\u0275dir=J({type:c,selectors:[["","formControl",""]],inputs:{form:[t2.None,"formControl","form"],isDisabled:[t2.None,"disabled","isDisabled"],model:[t2.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[Y2([C5]),S1,y1]});let a=c;return a})();var V5=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=B1({type:c}),c.\u0275inj=E1({});let a=c;return a})();var D6=(()=>{let c=class c{static withConfig(i){return{ngModule:c,providers:[{provide:F6,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:P6,useValue:i.callSetDisabledState??k3}]}}};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=B1({type:c}),c.\u0275inj=E1({imports:[V5]});let a=c;return a})();function L5(a,c){if(a&1&&(S(0),d(1,"a",6),x(2),I1(3,"titlecase"),h(),w()),a&2){let e=c.$implicit;m(2),i1(" ",R1(3,1,e.itemName)," ")}}function b5(a,c){if(a&1&&(S(0),L(1,L5,4,3,"ng-container",5),w()),a&2){let e=A(2);m(),z("ngForOf",e.item.items)}}function x5(a,c){if(a&1&&(d(0,"span",12),x(1),h()),a&2){let e=A().$implicit;m(),i1("$",e==null?null:e.price,"")}}function N5(a,c){if(a&1&&(S(0),d(1,"a",6)(2,"div",7),H(3,"img",8),h(),d(4,"div",9)(5,"span",10),x(6),I1(7,"titlecase"),h(),L(8,x5,2,1,"span",11),h()(),w()),a&2){let e=c.$implicit;m(3),z("src","assets/images/"+e.imgUrl,q3),m(3),g1(R1(7,3,e.itemName)),m(2),z("ngIf",e==null?null:e.price)}}function y5(a,c){if(a&1&&L(0,N5,9,5,"ng-container",5),a&2){let e=A(2);z("ngForOf",e.item.items)}}function S5(a,c){if(a&1&&(S(0),d(1,"div",2)(2,"div",3)(3,"h2"),x(4),h()(),L(5,b5,2,1,"ng-container",4),h(),L(6,y5,1,1,"ng-template",null,0,l2),w()),a&2){let e=o2(7),i=A();m(4),g1(i.item.name),m(),z("ngIf",!i.item.hasImage)("ngIfElse",e)}}var T6=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=g({type:c,selectors:[["app-menu-item"]],inputs:{item:"item"},standalone:!0,features:[b],decls:1,vars:1,consts:[["ItemWithImage",""],[4,"ngIf"],[1,"items-wrapper"],[1,"item-title"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[1,"sub-item"],[1,"image-wrapper"],["alt","",3,"src"],[1,"description"],[1,"name"],["class","price",4,"ngIf"],[1,"price"]],template:function(n,r){n&1&&L(0,S5,8,3,"ng-container",1),n&2&&z("ngIf",r.item.items.length>0)},dependencies:[P,I,R,a4],styles:['.items-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;position:relative;padding-left:30px;width:auto;font-family:custom-font}.items-wrapper[_ngcontent-%COMP%]:after{content:"";width:calc(100% - 60px);height:1px;background-color:var(--primary-bg-color-lighten50);position:absolute;left:30px;bottom:1px;border-radius:10px}.items-wrapper[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--primary-bg-color-lighten50);font-size:18px}.items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:10px 0;color:var(--link-color);font-weight:700;font-size:16px;cursor:pointer}.items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:100px;object-fit:cover}.items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-left:10px}.items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px}.items-wrapper[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:400;margin-right:auto;color:var(--primary-bg-color)}']});let a=c;return a})();var a1=(()=>{let c=class c{constructor(){this.sideMenuState=new P3(!1)}setOpen(){this.sideMenuState.next(!0)}setClose(){this.sideMenuState.next(!1)}get State(){return this.sideMenuState}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var E6=(()=>{let c=class c{constructor(){}getItemList(){return[{name:"SUGGESTIONS",hasImage:!1,items:[{itemName:"mexico"},{itemName:"Brasil"},{itemName:"Per\xFA"}]},{name:"COLLECTIONS",hasImage:!0,items:[{itemName:"gift a coffe",imgUrl:"mugRocketLove.jpeg"},{itemName:"gift a coffe subcription",imgUrl:"mugRocketLove.jpeg"},{itemName:"from atlanta with love",imgUrl:"mugRocketLove.jpeg"}]},{name:"PAGES",hasImage:!1,items:[{itemName:"About us"},{itemName:"Susbcribe"},{itemName:"Shopp all"}]},{name:"PRODUCTS",hasImage:!0,items:[{itemName:"produto 1",price:"90",imgUrl:"mugRocketLove.jpeg"},{itemName:"produto 2",price:"40",imgUrl:"mugRocketLove.jpeg"},{itemName:"produto 3",price:"50",imgUrl:"mugRocketLove.jpeg"},{itemName:"produto 4",price:"90",imgUrl:"mugRocketLove.jpeg"},{itemName:"produto 5",price:"40",imgUrl:"mugRocketLove.jpeg"},{itemName:"produto 6",price:"50",imgUrl:"mugRocketLove.jpeg"}]}]}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var k5=(a,c)=>({show:a,mobile:c});function A5(a,c){if(a&1&&(S(0),d(1,"div",11),H(2,"fa-icon",3),h(),w()),a&2){let e=A();m(2),z("icon",e.faCircleNotch)}}function P5(a,c){a&1&&(S(0),x(1," No hay resultados para su busqueda "),w())}function _5(a,c){if(a&1&&(S(0),H(1,"app-menu-item",12),w()),a&2){let e=c.$implicit;m(),z("item",e)}}var I2=(()=>{let c=class c{constructor(i,n){this._sideMenuService=i,this._menuItem=n,this.toggleSearchMenuRequest=new h1,this.showSideSearchMenu=!1,this.isMobile=!1,this.faXmark=P2,this.faSearch=D1,this.faCircleNotch=h6,this.searchControl=new O6(void 0),this.$originalPageInfo=new i2,this.$filteredPageInfo=new i2,this.$filter=new i2,this.isSearching=!1,this.nothingFound=!1}ngOnInit(){this.$originalPageInfo=this.getPageInfoForSearching(),this.$filter=this.searchControl.valueChanges,this.$filter.subscribe(i=>{i?.trim()===""||i===void 0?this.$filteredPageInfo=q2([]):this.isSearching=!0}),this.search().subscribe()}setSideMenuState(){this._sideMenuService.setClose()}getPageInfoForSearching(){return q2(this._menuItem.getItemList())}toggleSearchMenu(){this.showSideSearchMenu=!1,this.toggleSearchMenuRequest.emit(),this.setSideMenuState()}search(){return this.$filteredPageInfo=this.$filter.pipe(F3(300),D3(i=>this.$originalPageInfo.pipe(m1(n=>n.map(r=>f1(Q({},r),{items:r.items.filter(t=>t.itemName.toLowerCase().includes(i?.toLowerCase()))}))))),G2(()=>{this.isSearching=!1}),G2(i=>{if(this.searchControl.value!==void 0&&this.searchControl.value?.trim()!==""){let n=i.every(r=>r.items.length===0);this.nothingFound=n}else this.nothingFound=!1}))}clearSearch(){this.searchControl.setValue(void 0),this.search()}};c.\u0275fac=function(n){return new(n||c)(M(a1),M(E6))},c.\u0275cmp=g({type:c,selectors:[["app-side-search-menu"]],inputs:{showSideSearchMenu:"showSideSearchMenu",isMobile:"isMobile"},outputs:{toggleSearchMenuRequest:"toggleSearchMenuRequest"},standalone:!0,features:[b],decls:15,vars:13,consts:[[1,"side-menu-search",3,"ngClass"],[1,"side-menu-logo"],[3,"click"],[3,"icon"],[1,"side-search-wrapper"],[1,"search-drawer"],[1,"search",3,"icon"],["placeholder","Search our store","type","text",1,"search-input",3,"keypress","formControl"],[1,"delete",3,"click","icon"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"loading-items-wrapper"],[3,"item"]],template:function(n,r){n&1&&(d(0,"div",0)(1,"div",1)(2,"span"),x(3,"Search"),h(),d(4,"button",2),k("click",function(){return r.toggleSearchMenu()}),H(5,"fa-icon",3),h()(),d(6,"div",4)(7,"div",5),H(8,"fa-icon",6),d(9,"input",7),k("keypress",function(){return r.search()}),h(),d(10,"fa-icon",8),k("click",function(){return r.clearSearch()}),h()(),L(11,A5,3,1,"ng-container",9)(12,P5,2,0,"ng-container",9)(13,_5,2,1,"ng-container",10),I1(14,"async"),h()()),n&2&&(z("ngClass",Q3(10,k5,r.showSideSearchMenu,r.isMobile)),m(5),z("icon",r.faXmark),m(3),z("icon",r.faSearch),m(),z("formControl",r.searchControl),m(),z("icon",r.faXmark),m(),z("ngIf",r.isSearching),m(),z("ngIf",r.nothingFound),m(),z("ngForOf",R1(14,8,r.$filteredPageInfo)))},dependencies:[P,w1,I,R,c4,D6,E2,A6,A3,j,W,T6],styles:['.side-menu-search[_ngcontent-%COMP%]{position:fixed;top:0;right:0;height:100%;width:40%;background-color:var(--primary-text-color);z-index:9999;transition:transform .3s ease;transform:translate(110%);opacity:1!important;overflow:auto}.side-menu-search.mobile[_ngcontent-%COMP%]{width:80%}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;position:sticky;z-index:5;width:100%;background-color:transparent;height:6%;top:0;padding:10px 0}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;border:none;padding:0}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:0 15px;font-size:35px;cursor:pointer}.side-menu-search[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px;margin-right:auto;font-size:26px;font-family:custom-font;font-weight:700}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;position:relative;width:100%;min-height:88%;list-style:none;padding:0;margin:0 0 auto}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]{position:relative;padding:40px 33px;display:flex;align-items:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]:after{content:"";width:calc(100% - 60px);height:1px;background-color:var(--primary-bg-color);position:absolute;left:30px;top:70%;border-radius:10px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border:none;font-size:14px;background-color:inherit;outline:none}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon.search[_ngcontent-%COMP%]{padding-right:8px;font-size:20px}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .search-drawer[_ngcontent-%COMP%]   fa-icon.delete[_ngcontent-%COMP%]{padding-left:5px;font-size:15px;cursor:pointer}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .loading-items-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.side-menu-search[_ngcontent-%COMP%]   .side-search-wrapper[_ngcontent-%COMP%]   .loading-items-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:24px;animation:_ngcontent-%COMP%_spin 1s linear infinite}.show[_ngcontent-%COMP%]{transform:translate(0)}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']});let a=c;return a})();function O5(a,c){if(a&1&&(d(0,"li")(1,"a",1)(2,"div",2)(3,"span"),x(4),h()()()()),a&2){let e=A();m(4),g1(e.link)}}var B6=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=g({type:c,selectors:[["app-nav-section-sub-dropdown"]],inputs:{link:"link"},standalone:!0,features:[b],decls:1,vars:1,consts:[[4,"ngIf"],["href","",1,"sub-dropdown-link"],[1,"sub-dropdown-link-wrapper"]],template:function(n,r){n&1&&L(0,O5,5,1,"li",0),n&2&&z("ngIf",r.link)},dependencies:[P,R],styles:['li[_ngcontent-%COMP%]{list-style:none;padding:7px 0;width:100%}li[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}li[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}li[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}li[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}li[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}li[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}']});let a=c;return a})();function F5(a,c){if(a&1&&(S(0),H(1,"fa-icon",3),w()),a&2){let e=A(2);m(),z("icon",e.faChevronRight)}}function D5(a,c){if(a&1&&(S(0),H(1,"app-nav-section-sub-dropdown",6),w()),a&2){let e=c.$implicit;m(),z("link",e)}}function T5(a,c){if(a&1&&(S(0),d(1,"ul",4),L(2,D5,2,1,"ng-container",5),h(),w()),a&2){let e=A(2);m(2),z("ngForOf",e.links.dropdown)}}function E5(a,c){if(a&1&&(d(0,"li")(1,"a",1)(2,"div",2)(3,"span"),x(4),h(),L(5,F5,2,1,"ng-container",0),h()(),L(6,T5,3,1,"ng-container",0),h()),a&2){let e=A();m(4),i1("",e.links.name," "),m(),z("ngIf",(e.links==null?null:e.links.dropdown)&&e.links.dropdown.length>0),m(),z("ngIf",(e.links==null?null:e.links.dropdown)&&e.links.dropdown.length>0)}}var I6=(()=>{let c=class c{constructor(){this.faChevronRight=_2}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=g({type:c,selectors:[["app-nav-section-sub-item"]],inputs:{links:"links"},standalone:!0,features:[b],decls:1,vars:1,consts:[[4,"ngIf"],["href","",1,"dropdown-link"],[1,"dropdown-link-wrapper"],[3,"icon"],[1,"dropdown","sub-dropdown"],[4,"ngFor","ngForOf"],[3,"link"]],template:function(n,r){n&1&&L(0,E5,7,3,"li",0),n&2&&z("ngIf",r.links)},dependencies:[P,I,R,j,W,B6],styles:['li[_ngcontent-%COMP%]{list-style:none;padding:7px 0;width:100%}li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}li[_ngcontent-%COMP%]{position:relative}li[_ngcontent-%COMP%]:hover   .sub-dropdown[_ngcontent-%COMP%]{opacity:1!important;visibility:visible!important}li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between}li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:9px}.dropdown[_ngcontent-%COMP%]{visibility:hidden;display:grid;opacity:0;margin-top:15px;position:absolute;grid-template-columns:1fr;padding:20px;min-width:150px;max-width:300px;background-color:var(--primary-bg-color);transition:opacity .3s,visibility .3s;cursor:default}.dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.sub-dropdown[_ngcontent-%COMP%]{position:absolute;left:100%;top:-20px;margin-top:0!important;margin-left:20px!important;visibility:hidden!important;opacity:0!important;transition:opacity .3s,visibility .3s;cursor:default}.sub-dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}']});let a=c;return a})();function B5(a,c){if(a&1&&(S(0),H(1,"app-nav-section-sub-item",5),w()),a&2){let e=c.$implicit;m(),z("links",e)}}function I5(a,c){if(a&1&&(d(0,"li")(1,"a",1)(2,"div",2)(3,"span"),x(4),h()(),d(5,"ul",3),L(6,B5,2,1,"ng-container",4),h()()()),a&2){let e=A();m(4),g1(e.section.name),m(2),z("ngForOf",e.section.links)}}var R6=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=g({type:c,selectors:[["app-nav-section-item"]],inputs:{section:"section"},standalone:!0,features:[b],decls:1,vars:1,consts:[[4,"ngIf"],["href","",1,"link"],[1,"link-wrapper"],["directiveDropdownHover","",1,"dropdown","dropdown-w-icons"],[4,"ngFor","ngForOf"],[3,"links"]],template:function(n,r){n&1&&L(0,I5,7,2,"li",0),n&2&&z("ngIf",r.section)},dependencies:[P,I,R,I6],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:inline-block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;cursor:pointer}.link[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%]{visibility:visible;opacity:1}.link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.link[_ngcontent-%COMP%]:hover   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:100%}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{visibility:hidden;display:grid;opacity:0;margin-top:15px;position:absolute;grid-template-columns:1fr;padding:20px;min-width:150px;max-width:300px;background-color:var(--primary-bg-color);transition:opacity .3s,visibility .3s;cursor:default}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:7px 0;width:100%}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.link[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{transition:color .3s;position:relative}.link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-bottom:4px}.link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.wrapper-center[_ngcontent-%COMP%]{flex-basis:100px;align-self:center}.wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2800px;max-height:2800px;width:100px;height:100px;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.wrapper-right[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;justify-content:flex-end}.wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;transition:color .3s;cursor:pointer}.wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--announcement-bg-color)}.wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:18px}.wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-dropdown[_ngcontent-%COMP%]{opacity:1!important;visibility:visible!important}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:9px}.sub-dropdown[_ngcontent-%COMP%]{position:absolute;left:100%;top:-20px;margin-top:0!important;margin-left:20px!important;visibility:hidden!important;opacity:0!important;transition:opacity .3s,visibility .3s;cursor:default}.sub-dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color)!important}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:0%!important}']});let a=c;return a})();var q6=(()=>{let c=class c{constructor(){}getNavbarSections(){return[{name:"Shop",links:[{name:"Coffee",dropdown:["Classic Coffees","Single Origins"]},{name:"Coffee Club",dropdown:["Join The Club","Manage Your Subscription"]},{name:"Gifts",dropdown:["Gift a Coffee Subscription","Gift a Gift Card"]},{name:"Goods",dropdown:["Brewing Equipment","Merchandise"]},{name:"Shop All"}]},{name:"Learn",links:[{name:"Blog",dropdown:[]},{name:"Contact Us",dropdown:[]},{name:"FAQ",dropdown:[]}]},{name:"Wholesale",links:[{name:"Login",dropdown:[]},{name:"Wholesale Inquiry",dropdown:[]}]},{name:"Connect",links:[{name:"About Us",dropdown:[]},{name:"Cafe",dropdown:[]},{name:"Careers",dropdown:[]},{name:"Press",dropdown:[]}]}]}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var q5=a=>({"margin-bottom.px":a});function G5(a,c){if(a&1&&(S(0),H(1,"app-nav-section-item",18),w()),a&2){let e=c.$implicit;m(),z("section",e)}}var G6=(()=>{let c=class c{constructor(i,n,r){this.elementRef=i,this._sideMenuService=n,this._navSectionItemService=r,this.faSearch=D1,this.faUser=m6,this.faShoppingCart=A2,this.faChevronRight=_2,this.faBars=k2,this.navbarHeight=0,this.showSideSearchMenu=!1,n2(window,"resize").pipe(r2(null),m1(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(s=>{s!=0&&(this.navbarHeight=s)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight,this.navbarSections=this._navSectionItemService.getNavbarSections()}toggleSearchSideMenu(){this._sideMenuService.setOpen(),this.showSideSearchMenu=!this.showSideSearchMenu}};c.\u0275fac=function(n){return new(n||c)(M($),M(a1),M(q6))},c.\u0275cmp=g({type:c,selectors:[["app-navbar"]],standalone:!0,features:[b],decls:35,vars:8,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-desktop"],[1,"wrapper-left"],[1,"top-links"],[4,"ngFor","ngForOf"],[1,"wrapper-center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"wrapper-right"],[1,"link",3,"click"],[1,"link-wrapper"],[3,"icon"],["href","",1,"link"],[3,"toggleSearchMenuRequest","showSideSearchMenu"],[3,"section"]],template:function(n,r){n&1&&(d(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"ul"),L(5,G5,2,1,"ng-container",4),h()()(),d(6,"div",5)(7,"div",6)(8,"h1",7)(9,"a",8)(10,"div",9),H(11,"img",10),h()(),H(12,"a",11),h()()(),d(13,"div",12)(14,"div",3)(15,"ul")(16,"li")(17,"a",13),k("click",function(){return r.toggleSearchSideMenu()}),d(18,"div",14),H(19,"fa-icon",15),d(20,"span"),x(21,"Search"),h()()()(),d(22,"li")(23,"a",16)(24,"div",14),H(25,"fa-icon",15),d(26,"span"),x(27,"Account"),h()()()(),d(28,"li")(29,"a",16)(30,"div",14),H(31,"fa-icon",15),d(32,"span"),x(33,"Cart"),h()()()()()()()()(),d(34,"app-side-search-menu",17),k("toggleSearchMenuRequest",function(){return r.toggleSearchSideMenu()}),h()),n&2&&(z("ngStyle",z1(6,q5,-r.navbarHeight)),m(5),z("ngForOf",r.navbarSections),m(14),z("icon",r.faSearch),m(6),z("icon",r.faUser),m(6),z("icon",r.faShoppingCart),m(3),z("showSideSearchMenu",r.showSideSearchMenu))},dependencies:[P,I,m2,j,W,O2,I2,R6],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-desktop[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;position:relative;margin:0 15px;font-family:custom-font;font-size:14px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]{display:flex;flex:1 1 100%}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]{flex-basis:100px;align-self:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2800px;max-height:2800px;width:100px;height:100px;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;justify-content:flex-end}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]{display:flex;align-items:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;list-style:none;text-decoration:none}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--primary-text-color);display:block;text-decoration:none;letter-spacing:.5px;position:relative;padding:15px;transition:color .3s;cursor:pointer}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--announcement-bg-color)}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:18px}.site-header-desktop[_ngcontent-%COMP%]   .wrapper-right[_ngcontent-%COMP%]   .top-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-dropdown[_ngcontent-%COMP%]{opacity:1!important;visibility:visible!important}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between}.dropdown-w-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-link-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:9px}.sub-dropdown[_ngcontent-%COMP%]{position:absolute;left:100%;top:-20px;margin-top:0!important;margin-left:20px!important;visibility:hidden!important;opacity:0!important;transition:opacity .3s,visibility .3s;cursor:default}.sub-dropdown[_ngcontent-%COMP%]:hover{visibility:visible;opacity:1}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]{color:var(--primary-text-color);text-decoration:none;letter-spacing:.5px}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]{transition:color .3s}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--announcement-bg-color)}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:before{width:100%}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.sub-dropdown[_ngcontent-%COMP%]   .sub-dropdown-link[_ngcontent-%COMP%]   .sub-dropdown-link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-3px;left:0;width:0;height:1px;background-color:var(--announcement-bg-color);transition:width .3s}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color)!important}.link-no-hover[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:0%!important}']});let a=c;return a})();var U6=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=g({type:c,selectors:[["app-footer"]],standalone:!0,features:[b],decls:2,vars:0,template:function(n,r){n&1&&(d(0,"p"),x(1,"footer works!"),h())}});let a=c;return a})();var W6=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=g({type:c,selectors:[["app-top-announcement"]],standalone:!0,features:[b],decls:3,vars:0,consts:[[1,"announcement-wrapper"]],template:function(n,r){n&1&&(d(0,"div",0)(1,"span"),x(2,"Free shipping for all orders over $50"),h()())},styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}.announcement-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--announcement-bg-color)}.announcement-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color);padding:10px 30px;font-size:16px;font-family:custom-font}']});let a=c;return a})();function U5(a,c){if(a&1){let e=$3();d(0,"div",3)(1,"button",4),k("click",function(){E3(e);let n=A().index,r=A();return B3(r.toggleListButton(r.elementNumber+n+1))}),H(2,"fa-icon",5),h()()}if(a&2){let e=A().index,i=A();m(2),v1("active",i.toggleListButtonArray[i.elementNumber+e+1]),z("icon",i.faChevronDown)}}function W5(a,c){if(a&1&&(S(0),d(1,"ul",11)(2,"li",12)(3,"div",9)(4,"a",2),x(5),h()()()(),w()),a&2){let e=c.$implicit,i=A().index,n=A();m(),v1("active",n.toggleListButtonArray[n.elementNumber+i+1]),m(4),i1("",e.subListTitle," ")}}function j5(a,c){if(a&1&&(S(0),d(1,"ul",7)(2,"li",8)(3,"div",9)(4,"a",2),x(5),h(),L(6,U5,3,3,"div",10),h()(),L(7,W5,6,3,"ng-container",6),h(),w()),a&2){let e=c.$implicit,i=A();m(),v1("active",i.toggleListButtonArray[i.elementNumber]),m(4),i1(" ",e.subTitle," "),m(),z("ngIf",e.subList),m(),z("ngForOf",e.subList)}}var j6=(()=>{let c=class c{constructor(){this.faChevronDown=v6,this.toggleListButtonArray=[]}toggleListButton(i){this.toggleListButtonArray[i]=!this.toggleListButtonArray[i]}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=g({type:c,selectors:[["app-list-item"]],inputs:{data:"data",elementNumber:"elementNumber"},standalone:!0,features:[b],decls:8,vars:5,consts:[[1,"side-menu-item-container"],[1,"side-menu-item","first"],["href",""],[1,"list-toggle"],[3,"click"],[3,"icon"],[4,"ngFor","ngForOf"],[1,"side-menu-sublist"],[1,"side-menu-sublist-item"],[1,"side-menu-item"],["class","list-toggle",4,"ngIf"],[1,"side-menu-sub-sublist"],[1,"side-menu-sub-sublist-item"]],template:function(n,r){n&1&&(d(0,"li",0)(1,"div",1)(2,"a",2),x(3),h(),d(4,"div",3)(5,"button",4),k("click",function(){return r.toggleListButton(r.elementNumber)}),H(6,"fa-icon",5),h()()(),L(7,j5,8,5,"ng-container",6),h()),n&2&&(m(3),i1(" ",r.data.title," "),m(3),v1("active",r.toggleListButtonArray[r.elementNumber]),z("icon",r.faChevronDown),m(),z("ngForOf",r.data.dropdownItemList))},dependencies:[P,I,R,j,W],styles:[".side-menu-item-container[_ngcontent-%COMP%]{padding:0 20px;height:auto;overflow:hidden}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;padding:15px 0;list-style:none}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--primary-bg-color);text-decoration:none;font-family:custom-font!important;font-size:18px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   .list-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;border:none;background-color:inherit}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-item.first[_ngcontent-%COMP%]{position:relative;background-color:var(--primary-text-color);z-index:3;padding:20px 0;border-bottom:solid 1px rgba(166,151,143,.25);margin-bottom:1px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]{list-style:none;padding-left:10px;z-index:1}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]   .side-menu-sublist-item[_ngcontent-%COMP%]{margin:0}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sublist[_ngcontent-%COMP%]   .side-menu-sublist-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sub-sublist[_ngcontent-%COMP%]{overflow:hidden;list-style:none;z-index:99999;padding-left:20px}.side-menu-item-container[_ngcontent-%COMP%]   .side-menu-sub-sublist[_ngcontent-%COMP%]   .side-menu-sub-sublist-item[_ngcontent-%COMP%]   .side-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}fa-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;transition:transform .5s;cursor:pointer}fa-icon.active[_ngcontent-%COMP%]{transform:rotate(180deg)}.side-menu-sublist[_ngcontent-%COMP%], .side-menu-sub-sublist[_ngcontent-%COMP%]{max-height:0;transition:max-height .3s ease-out}.side-menu-sublist.active[_ngcontent-%COMP%], .side-menu-sub-sublist.active[_ngcontent-%COMP%]{max-height:1000px;transition:max-height .5s ease-in}"]});let a=c;return a})();var Z6={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var $6={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};var Y6={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};var X6={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};var K6=(()=>{let c=class c{constructor(){}getItemList(){return[{title:"Shop",dropdownItemList:[{subTitle:"Coffee",subList:[{subListTitle:"Classic Coffees"},{subListTitle:"Single Origins"}]},{subTitle:"Coffee Clubs",subList:[{subListTitle:"Join the Club"},{subListTitle:"Manage Your Subscription"}]},{subTitle:"Gifts",subList:[{subListTitle:"Gift a Coffee Subscription"},{subListTitle:"Gift a Gift Card"}]},{subTitle:"Goods",subList:[{subListTitle:"Brewing Equipment"},{subListTitle:"Merchandise"}]},{subTitle:"Shop All"}]},{title:"Learn",dropdownItemList:[{subTitle:"Blog"},{subTitle:"Contact Us"},{subTitle:"FAQ"}]},{title:"Wholesale",dropdownItemList:[{subTitle:"Login"},{subTitle:"Wholesale Inquiry"},{subTitle:"FAQ"}]},{title:"Connect",dropdownItemList:[{subTitle:"About Us"},{subTitle:"Cafe"},{subTitle:"Carrers"},{subTitle:"Press"}]}]}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var $5=a=>({show:a});function Y5(a,c){if(a&1&&(S(0),H(1,"app-list-item",9),w()),a&2){let e=c.$implicit,i=c.index;m(),z("data",e)("elementNumber",i)}}var Q6=(()=>{let c=class c{constructor(i,n){this._itemService=i,this._sideMenuService=n,this.toggleMenuRequest=new h1,this.showSideMenu=!1,this.faXmark=P2,this.faFacebook=$6,this.faTwitter=X6,this.faInstagram=Z6,this.faYoutube=Y6,this.toggleListButtonArray=[],this.itemList=[]}ngOnInit(){this.itemList=this._itemService.getItemList()}toggleMenu(){this.showSideMenu=!1,this.toggleMenuRequest.emit(),this.setSideMenuState()}setSideMenuState(){this._sideMenuService.setClose()}};c.\u0275fac=function(n){return new(n||c)(M(K6),M(a1))},c.\u0275cmp=g({type:c,selectors:[["app-side-mobile-menu"]],inputs:{showSideMenu:"showSideMenu"},outputs:{toggleMenuRequest:"toggleMenuRequest"},standalone:!0,features:[b],decls:18,vars:9,consts:[[1,"side-menu",3,"ngClass"],[1,"side-menu-logo"],[3,"click"],[3,"icon"],[1,"side-menu-main-list"],[4,"ngFor","ngForOf"],[1,"side-menu-footer"],["href",""],[1,"icons-wrapper"],[3,"data","elementNumber"]],template:function(n,r){n&1&&(d(0,"div",0)(1,"div",1)(2,"button",2),k("click",function(){return r.toggleMenu()}),H(3,"fa-icon",3),h()(),d(4,"ul",4),L(5,Y5,2,2,"ng-container",5),h(),d(6,"div",6)(7,"a",7),x(8," Log in "),h(),d(9,"div",8)(10,"a",7),H(11,"fa-icon",3),h(),d(12,"a",7),H(13,"fa-icon",3),h(),d(14,"a",7),H(15,"fa-icon",3),h(),d(16,"a",7),H(17,"fa-icon",3),h()()()()),n&2&&(z("ngClass",z1(7,$5,r.showSideMenu)),m(3),z("icon",r.faXmark),m(2),z("ngForOf",r.itemList),m(6),z("icon",r.faFacebook),m(2),z("icon",r.faTwitter),m(2),z("icon",r.faInstagram),m(2),z("icon",r.faYoutube))},dependencies:[P,w1,I,j6,j,W],styles:[".side-menu[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:90%;background-color:var(--primary-text-color);z-index:9999;transition:transform .3s ease;transform:translate(-110%);overflow:auto}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;position:sticky;justify-content:flex-end;z-index:5;width:100%;background-color:transparent;height:6%;top:0}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;border:none;padding:0}.side-menu[_ngcontent-%COMP%]   .side-menu-logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:0 15px;font-size:35px;cursor:pointer}.side-menu[_ngcontent-%COMP%]   .side-menu-main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;position:relative;width:100%;min-height:88%;list-style:none;padding:0;margin:0 0 auto}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]{z-index:5;width:100%;background-color:inherit;height:calc(6% - 2px);display:flex;align-items:center;flex-wrap:wrap;overflow:auto;position:sticky;bottom:0;border-top:solid 2px rgb(166,151,143)}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:custom-font;font-size:14px;padding-left:20px;cursor:pointer;color:var(--primary-bg-color);font-weight:700}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]{margin-left:auto;padding-right:20px;display:flex;align-items:center;flex-wrap:wrap}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 10px;display:flex;align-items:center;text-decoration:none;color:var(--primary-bg-color)}.side-menu[_ngcontent-%COMP%]   .side-menu-footer[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}.show[_ngcontent-%COMP%]{transform:translate(0)}"]});let a=c;return a})();var X5=a=>({"margin-bottom.px":a}),J6=(()=>{let c=class c{constructor(i,n){this.elementRef=i,this._sideMenuService=n,this.faSearch=D1,this.faShoppingCart=A2,this.faBars=k2,this.navbarHeight=0,this.showSideMenu=!1,this.showSideSearchMenu=!1,n2(window,"resize").pipe(r2(null),m1(()=>this.elementRef.nativeElement.offsetHeight)).subscribe(t=>{t!=0&&(this.navbarHeight=t)})}ngOnInit(){this.navbarHeight=this.elementRef.nativeElement.offsetHeight}toggleSideMenu(){this._sideMenuService.setOpen(),this.showSideMenu=!this.showSideMenu}toggleSearchSideMenu(){this._sideMenuService.setOpen(),this.showSideSearchMenu=!this.showSideSearchMenu}};c.\u0275fac=function(n){return new(n||c)(M($),M(a1))},c.\u0275cmp=g({type:c,selectors:[["app-navbar-mobile"]],standalone:!0,features:[b],decls:22,vars:9,consts:[["directiveScrollOpacity","",3,"ngStyle"],[1,"site-header-mobile"],[1,"wrapper-padded"],[1,"table-grid-container"],[1,"grid-item-container","left"],[1,"grid-item"],[3,"click"],[3,"icon"],[1,"grid-item-container","center"],[1,"logo-wrapper"],[1,"site-title"],["href","/",1,"logo-image"],[1,"responsive-image-wrapper"],["loading","lazy","src","https://portrait.coffee/cdn/shop/files/Primary_Logo_-_Cream_-_Transparent_550x.png?v=1653656599","alt",""],["href","/",1,"logo-overlay-image"],[1,"grid-item-container","right"],[3,"toggleMenuRequest","showSideMenu"],[3,"toggleSearchMenuRequest","showSideSearchMenu","isMobile"]],template:function(n,r){n&1&&(d(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"button",6),k("click",function(){return r.toggleSideMenu()}),H(7,"fa-icon",7),h()()(),d(8,"div",8)(9,"div",9)(10,"h1",10)(11,"a",11)(12,"div",12),H(13,"img",13),h()(),H(14,"a",14),h()()(),d(15,"div",15)(16,"div",5)(17,"button",6),k("click",function(){return r.toggleSearchSideMenu()}),H(18,"fa-icon",7),h(),H(19,"fa-icon",7),h()()()()()(),d(20,"app-side-mobile-menu",16),k("toggleMenuRequest",function(){return r.toggleSideMenu()}),h(),d(21,"app-side-search-menu",17),k("toggleSearchMenuRequest",function(){return r.toggleSearchSideMenu()}),h()),n&2&&(z("ngStyle",z1(7,X5,-r.navbarHeight)),m(7),z("icon",r.faBars),m(11),z("icon",r.faSearch),m(),z("icon",r.faShoppingCart),m(),z("showSideMenu",r.showSideMenu),m(),z("showSideSearchMenu",r.showSideSearchMenu)("isMobile",!0))},dependencies:[P,m2,j,W,O2,Q6,I2],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}header[_ngcontent-%COMP%]{position:fixed;top:-1px;z-index:10;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]{padding:0 30px;position:relative;margin:0 auto}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]{display:table;table-layout:fixed;width:100%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container[_ngcontent-%COMP%]{display:table-cell;float:none;vertical-align:middle;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.left[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]{width:50%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]{text-align:center;margin:0 auto;max-width:100%;font-size:18px;padding:30px 0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{display:block}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.center[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   .responsive-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover;margin:0 auto;display:inline-block;vertical-align:top}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]{width:25%}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-style:none;outline-style:none;background-color:inherit;padding:0}.site-header-mobile[_ngcontent-%COMP%]   .wrapper-padded[_ngcontent-%COMP%]   .table-grid-container[_ngcontent-%COMP%]   .grid-item-container.right[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:20px 10px;width:min-content;font-size:18px;color:var(--primary-text-color);cursor:pointer}@media screen and (max-width: 768px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}@media screen and (max-width: 425px){.site-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.wrapper-padded[_ngcontent-%COMP%]{padding:0!important}}']});let a=c;return a})();var K5=a=>({sideMenuOpen:a});function Q5(a,c){a&1&&(S(0),H(1,"app-navbar-mobile"),w())}function J5(a,c){a&1&&H(0,"app-navbar")}var c0=(()=>{let c=class c{constructor(i,n,r){this.render=i,this._sideMenuService=n,this.document=r,this.isMobile=!1,this.sideMenuState=!1,this.checkIfMobile()}ngOnInit(){this._sideMenuService.State.subscribe(i=>{this.sideMenuState=i,i?this.render.addClass(this.document.body,"sideMenuOpen"):this.render.removeClass(this.document.body,"sideMenuOpen")})}onResize(){this.checkIfMobile()}checkIfMobile(){this.isMobile=window.innerWidth<=990}};c.\u0275fac=function(n){return new(n||c)(M(e1),M(a1),M(f2))},c.\u0275cmp=g({type:c,selectors:[["app-layout"]],hostBindings:function(n,r){n&1&&k("resize",function(s){return r.onResize(s)},!1,s2)},standalone:!0,features:[b],decls:8,vars:5,consts:[["desktopNavbar",""],[1,"sideMenuOpen",3,"ngClass"],[4,"ngIf","ngIfElse"]],template:function(n,r){if(n&1&&(d(0,"main",1),H(1,"app-top-announcement"),L(2,Q5,2,0,"ng-container",2)(3,J5,1,0,"ng-template",null,0,l2),d(5,"div"),H(6,"router-outlet"),h(),H(7,"app-footer"),h()),n&2){let t=o2(4);z("ngClass",z1(3,K5,r.sideMenuState)),m(2),z("ngIf",r.isMobile)("ngIfElse",t)}},dependencies:[P,w1,R,G6,U6,r4,W6,J6],styles:['@font-face{font-family:custom-font;src:url("./media/WorkSans-Medium-VIH3UCEV.ttf") format("truetype");font-weight:400;font-style:normal}[_ngcontent-%COMP%]:root{--primary-bg-color: #1e1a18;--primary-bg-color-translucent: rgba(255, 255, 255, 0);--primary-text-color: #ece4d9;--link-color: #77a4a5;--announcement-bg-color: #d1992a;--primary-bg-color-lighten50: #a6978f;--primary-bg-color-opacity50: rgba(30, 26, 24, .5);--overlay-color: #e6e6e6}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.sideMenuOpen[_ngcontent-%COMP%]{overflow:hidden}header[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1000;transition:background-color .5s,border-bottom .5s;background-color:var(--primary-bg-color-translucent);border-bottom:1px solid var(--primary-bg-color-translucent)}header.translucent[_ngcontent-%COMP%]{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}header[_ngcontent-%COMP%]:hover{background-color:var(--primary-bg-color);border-bottom:1px solid var(--primary-bg-color)}.sideMenuOpen[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(app-navbar):not(app-navbar-mobile){overflow:hidden;opacity:.5;transition:opacity .4s linear 0s;background-color:var(--overlay-color)}.sideMenuOpen[_ngcontent-%COMP%]   app-navbar[_ngcontent-%COMP%]  header{pointer-events:none!important}.sideMenuOpen[_ngcontent-%COMP%]   app-navbar-mobile[_ngcontent-%COMP%]  header{pointer-events:none!important}']});let a=c;return a})();var a0=(()=>{let c=class c{constructor(){this.title="coffee-shop"}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=g({type:c,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(n,r){n&1&&H(0,"app-layout")},dependencies:[P,c0]});let a=c;return a})();i4(a0,l4).catch(a=>console.error(a));
