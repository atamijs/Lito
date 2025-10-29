import{LitElement as nt,css as at,html as lt}from"https://unpkg.com/lit@3.1.0/index.js?module";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();class G extends nt{static properties={text:{type:String},speed:{type:Number},color:{type:String},background:{type:String},size:{type:String},pauseOnHover:{type:Boolean},direction:{type:String}};static styles=at`
        :host {
            display: block;
            --led-color: #4CAF50;
            --led-background: #000;
            --led-speed: 10s;
            --led-font-size: 24px;
        }
        
        .marquee-container {
            overflow: hidden;
            position: relative;
            background: var(--led-background);
            border-radius: 4px;
            padding: 8px 0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        
        .marquee-content {
            display: inline-block;
            white-space: nowrap;
            animation: marquee var(--led-speed) linear infinite;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            color: var(--led-color);
            text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
            font-size: var(--led-font-size);
            letter-spacing: 1px;
        }
        
        .marquee-content.paused {
            animation-play-state: paused;
        }
        
        @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
    `;constructor(){super(),this.text="LED Marquee",this.speed=5,this.color="#4CAF50",this.background="#000",this.size="medium",this.pauseOnHover=!1,this.direction="left"}updated(t){if(t.has("speed")&&this.style.setProperty("--led-speed",`${20-this.speed}s`),t.has("color")&&this.style.setProperty("--led-color",this.color),t.has("background")&&this.style.setProperty("--led-background",this.background),t.has("size")){const e={small:"18px",medium:"24px",large:"32px"};this.style.setProperty("--led-font-size",e[this.size]||"24px")}t.has("direction")&&this.updateAnimation()}updateAnimation(){const t=this.shadowRoot.querySelector(".marquee-content");t&&(t.style.animationName=`marquee${this.direction==="right"?"-reverse":""}`)}handleMouseEnter(){if(this.pauseOnHover){const t=this.shadowRoot.querySelector(".marquee-content");t&&t.classList.add("paused")}}handleMouseLeave(){if(this.pauseOnHover){const t=this.shadowRoot.querySelector(".marquee-content");t&&t.classList.remove("paused")}}render(){return lt`
            <div 
                class="marquee-container"
                @mouseenter=${this.handleMouseEnter}
                @mouseleave=${this.handleMouseLeave}
            >
                <div class="marquee-content">${this.text}</div>
            </div>
        `}}customElements.define("led-marquee",G);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,L=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),D=new WeakMap;let Q=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(L&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=D.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&D.set(e,t))}return t}toString(){return this.cssText}};const ht=o=>new Q(typeof o=="string"?o:o+"",void 0,z),ct=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Q(e,o,z)},dt=(o,t)=>{if(L)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=O.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},j=L?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ht(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pt,defineProperty:ut,getOwnPropertyDescriptor:ft,getOwnPropertyNames:mt,getOwnPropertySymbols:$t,getPrototypeOf:yt}=Object,H=globalThis,B=H.trustedTypes,gt=B?B.emptyScript:"",_t=H.reactiveElementPolyfillSupport,E=(o,t)=>o,R={toAttribute(o,t){switch(t){case Boolean:o=o?gt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},tt=(o,t)=>!pt(o,t),W={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=ft(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const h=i?.call(this);r?.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??W}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,s=[...mt(e),...$t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(j(i))}else t!==void 0&&e.push(j(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:R;this._$Em=i;const h=n.fromAttribute(e,r.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??tt)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s){const{wrapped:n}=r,h=this[i];n!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,r,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[E("elementProperties")]=new Map,_[E("finalized")]=new Map,_t?.({ReactiveElement:_}),(H.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,U=q.trustedTypes,V=U?U.createPolicy("lit-html",{createHTML:o=>o}):void 0,et="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+m,At=`<${st}>`,g=document,w=()=>g.createComment(""),C=o=>o===null||typeof o!="object"&&typeof o!="function",I=Array.isArray,bt=o=>I(o)||typeof o?.[Symbol.iterator]=="function",k=`[ 	
\f\r]`,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,$=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,J=/"/g,it=/^(?:script|style|textarea|title)$/i,vt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),N=vt(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Z=new WeakMap,y=g.createTreeWalker(g,129);function rt(o,t){if(!I(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return V!==void 0?V.createHTML(t):t}const Et=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",n=v;for(let h=0;h<e;h++){const a=o[h];let c,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===v?p[1]==="!--"?n=X:p[1]!==void 0?n=Y:p[2]!==void 0?(it.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=$):p[3]!==void 0&&(n=$):n===$?p[0]===">"?(n=i??v,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?$:p[3]==='"'?J:K):n===J||n===K?n=$:n===X||n===Y?n=v:(n=$,i=void 0);const f=n===$&&o[h+1].startsWith("/>")?" ":"";r+=n===v?a+At:l>=0?(s.push(c),a.slice(0,l)+et+a.slice(l)+m+f):a+m+(l===-2?h:f)}return[rt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class x{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[c,p]=Et(t,e);if(this.el=x.createElement(c,s),y.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=y.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(et)){const u=p[n++],f=i.getAttribute(l).split(m),M=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:M[2],strings:f,ctor:M[1]==="."?wt:M[1]==="?"?Ct:M[1]==="@"?xt:T}),i.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:r}),i.removeAttribute(l));if(it.test(i.tagName)){const l=i.textContent.split(m),u=l.length-1;if(u>0){i.textContent=U?U.emptyScript:"";for(let f=0;f<u;f++)i.append(l[f],w()),y.nextNode(),a.push({type:2,index:++r});i.append(l[u],w())}}}else if(i.nodeType===8)if(i.data===st)a.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:r}),l+=m.length-1}r++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function b(o,t,e=o,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const r=C(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=b(o,i._$AS(o,t.values),i,s)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??g).importNode(e,!0);y.currentNode=i;let r=y.nextNode(),n=0,h=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new P(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Pt(r,this,t)),this._$AV.push(c),a=s[++h]}n!==a?.index&&(r=y.nextNode(),n++)}return y.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),C(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=x.createElement(rt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const r=new St(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=Z.get(t.strings);return e===void 0&&Z.set(t.strings,e=new x(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new P(this.O(w()),this.O(w()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=b(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const h=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=b(this,h[s+a],e,a),c===A&&(c=this._$AH[a]),n||=!C(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ct extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class xt extends T{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===A)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const Mt=q.litHtmlPolyfillSupport;Mt?.(x,P),(q.litHtmlVersions??=[]).push("3.3.1");const Ot=(o,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const r=e?.renderBefore??null;s._$litPart$=i=new P(t.insertBefore(w(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis;class S extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}S._$litElement$=!0,S.finalized=!0,F.litElementHydrateSupport?.({LitElement:S});const Ut=F.litElementPolyfillSupport;Ut?.({LitElement:S});(F.litElementVersions??=[]).push("4.2.1");class ot extends S{static styles=ct`
        :host {
            display: block;
            margin: 1rem 0;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border-left: 4px solid;
            max-width: 600px;
        }
        
        :host(:hover) {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
        }
        
        .alert-header {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            gap: 0.75rem;
        }
        
        .alert-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
        }
        
        .alert-content {
            margin: 0;
            color: rgba(0, 0, 0, 0.87);
            line-height: 1.5;
        }
        
        /* Type styles */
        :host([type="warning"]) {
            background-color: #FFF8E1;
            border-color: #FFC107;
        }
        
        :host([type="warning"]) .alert-title {
            color: #FF8F00;
        }
        
        :host([type="info"]) {
            background-color: #E3F2FD;
            border-color: #2196F3;
        }
        
        :host([type="info"]) .alert-title {
            color: #1976D2;
        }
        
        :host([type="tip"]) {
            background-color: #E8F5E9;
            border-color: #4CAF50;
        }
        
        :host([type="tip"]) .alert-title {
            color: #388E3C;
        }
        
        /* Custom color styles - increase priority */
        :host([customColor]) {
            --border-color: var(--computed-custom-color);
            --title-color: var(--computed-custom-color);
            --bg-color: var(--computed-bg-color);
            
            border-color: var(--border-color) !important;
            background-color: var(--bg-color) !important;
        }
        
        :host([customColor]) .alert-title {
            color: var(--title-color) !important;
        }
        
        /* Icon styles */
        .material-icon {
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
        
        /* Close button */
        .close-btn {
            background: none;
            border: none;
            cursor: pointer;
            color: rgba(0, 0, 0, 0.54);
            font-size: 1.5rem;
            padding: 0;
            margin-left: auto;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        }
        
        .close-btn:hover {
            opacity: 1;
        }
        
        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        :host {
            animation: fadeIn 0.3s ease-out forwards;
        }
    `;static properties={type:{type:String},title:{type:String},customColor:{type:String},closable:{type:Boolean}};constructor(){super(),this.type="info",this.title="",this.customColor="",this.closable=!1}updated(t){super.updated(t),(t.has("customColor")||t.has("type"))&&this.applyCustomColors()}applyCustomColors(){if(this.customColor){const t=this.lightenColor(this.customColor,.8);this.style.setProperty("--computed-custom-color",this.customColor),this.style.setProperty("--computed-bg-color",t)}}lightenColor(t,e){if(t.startsWith("#")){let s=t.replace("#","");s.length===3&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]);let i=parseInt(s.substring(0,2),16),r=parseInt(s.substring(2,4),16),n=parseInt(s.substring(4,6),16);return i=Math.min(255,i+(255-i)*e),r=Math.min(255,r+(255-r)*e),n=Math.min(255,n+(255-n)*e),`rgb(${Math.round(i)}, ${Math.round(r)}, ${Math.round(n)})`}return t}closeAlert(){this.style.opacity="0",this.style.transform="translateY(10px)",setTimeout(()=>{this.remove()},300)}getIcon(){return this.customColor?this.type?this.getIconForType(this.type):"comment":this.getIconForType(this.type)}getIconForType(t){switch(t){case"warning":return"warning";case"info":return"info";case"tip":return"lightbulb";default:return"comment"}}render(){return N`
            <div class="alert-header">
                <i class="material-icon">${this.getIcon()}</i>
                ${this.title?N`<h3 class="alert-title">${this.title}</h3>`:""}
                ${this.closable?N`
                    <button class="close-btn" @click=${this.closeAlert}>
                        <i class="material-icon">close</i>
                    </button>
                `:""}
            </div>
            <p class="alert-content"><slot></slot></p>
        `}}customElements.define("material-alert",ot);customElements.define("led-marquee",G);customElements.define("material-alert",ot);
