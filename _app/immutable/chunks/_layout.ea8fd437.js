import{u as Xe,W as bu,K as Hr,X as Pu,Y as ra,Z as Su,_ as bc,$ as Ip,s as hs,e as oe,i as it,y as Lt,d as L,v as On,G as Ap,D as Nn,E as Vi,f as J,g as $,h as nt,j as b,r as Y,T as Rp,J as To,F as Pc,q as Sc,a as Wt,c as Kt,H as Wr,I as Kr,V as Cc,l as Vn,m as Ln,L as kc,Q as Dc,n as Mn,x as bp,a0 as Pp,z as Sp,A as Cp,B as kp}from"./scheduler.8540741b.js";import{n as Dp,l as Op,k as Np,o as Vp,a as It,t as xt,S as ia,i as sa,g as Gn,c as Qn,f as Cu,p as Oc,h as ku,b as Li,d as wo,m as Mi,e as xi}from"./index.33cc823a.js";import{w as un,r as Lp}from"./index.73dbaed5.js";function Mp(e,t,n,r){if(!t)return Xe;const i=e.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return Xe;const{delay:s=0,duration:o=300,easing:a=bu,start:c=Dp()+s,end:l=c+o,tick:u=Xe,css:h}=n(e,{from:t,to:i},r);let d=!0,f=!1,m;function _(){h&&(m=Np(e,0,1,o,s,a,h)),s||(f=!0)}function p(){h&&Vp(e,m),d=!1}return Op(g=>{if(!f&&g>=c&&(f=!0),f&&g>=l&&(u(1,0),p()),!d)return!1;if(f){const y=g-c,T=0+1*a(y/o);u(T,1-T)}return!0}),_(),u(0,1),p}function xp(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:r}=t,i=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=r,Du(e,i)}}function Du(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const r=getComputedStyle(e),i=r.transform==="none"?"":r.transform;e.style.transform=`${i} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}function Nc(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Up(e,t){xt(e,1,1,()=>{t.delete(e.key)})}function Fp(e,t){e.f(),Up(e,t)}function Bp(e,t,n,r,i,s,o,a,c,l,u,h){let d=e.length,f=s.length,m=d;const _={};for(;m--;)_[e[m].key]=m;const p=[],g=new Map,y=new Map,T=[];for(m=f;m--;){const k=h(i,s,m),F=n(k);let D=o.get(F);D?r&&T.push(()=>D.p(k,t)):(D=l(F,k),D.c()),g.set(F,p[m]=D),F in _&&y.set(F,Math.abs(m-_[F]))}const R=new Set,A=new Set;function S(k){It(k,1),k.m(a,u),o.set(k.key,k),u=k.first,f--}for(;d&&f;){const k=p[f-1],F=e[d-1],D=k.key,z=F.key;k===F?(u=k.first,d--,f--):g.has(z)?!o.has(D)||R.has(D)?S(k):A.has(z)?d--:y.get(D)>y.get(z)?(A.add(D),S(k)):(R.add(z),d--):(c(F,o),d--)}for(;d--;){const k=e[d];g.has(k.key)||c(k,o)}for(;f;)S(p[f-1]);return Hr(T),p}function Io(e,t){const n={},r={},i={$$scope:1};let s=e.length;for(;s--;){const o=e[s],a=t[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Vc(e){return typeof e=="object"&&e!==null?e:{}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},jp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ou(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):jp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new qp;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zp=function(e){const t=Ou(e);return Nu.encodeByteArray(t,!0)},Ui=function(e){return zp(e).replace(/\./g,"")},Vu=function(e){try{return Nu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=()=>Hp().__FIREBASE_DEFAULTS__,Kp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Gp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Vu(e[1]);return t&&JSON.parse(t)},ds=()=>{try{return Wp()||Kp()||Gp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Lu=e=>{var t,n;return(n=(t=ds())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Mu=e=>{const t=Lu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},xu=()=>{var e;return(e=ds())===null||e===void 0?void 0:e.config},Uu=e=>{var t;return(t=ds())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ui(JSON.stringify(n)),Ui(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function Xp(){var e;const t=(e=ds())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zp(){const e=Ot();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function tm(){try{return typeof indexedDB=="object"}catch{return!1}}function em(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="FirebaseError";class ue extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=nm,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?rm(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ue(i,a,r)}}function rm(e,t){return e.replace(im,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const im=/\{\$([^}]+)}/g;function sm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Lc(s)&&Lc(o)){if(!Fi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ur(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function hr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function om(e,t){const n=new am(e,t);return n.subscribe.bind(n)}class am{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ys),i.error===void 0&&(i.error=Ys),i.complete===void 0&&(i.complete=Ys);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ys(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){return e&&e._delegate?e._delegate:e}class Ve{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Qp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hm(t))try{this.getOrInitializeService({instanceIdentifier:We})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=We){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=We){return this.instances.has(t)}getOptions(t=We){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:um(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=We){return this.component?this.component.multipleInstances?t:We:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function um(e){return e===We?void 0:e}function hm(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new lm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(q||(q={}));const fm={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},pm=q.INFO,mm={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},gm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=mm[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oa{constructor(t){this.name=t,this._logLevel=pm,this._logHandler=gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const _m=(e,t)=>t.some(n=>e instanceof n);let Mc,xc;function ym(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vm(){return xc||(xc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bu=new WeakMap,Ao=new WeakMap,ju=new WeakMap,Xs=new WeakMap,aa=new WeakMap;function Em(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(De(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bu.set(n,e)}).catch(()=>{}),aa.set(t,e),t}function Tm(e){if(Ao.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ao.set(e,t)}let Ro={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ao.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ju.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return De(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wm(e){Ro=e(Ro)}function Im(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Js(this),t,...n);return ju.set(r,t.sort?t.sort():[t]),De(r)}:vm().includes(e)?function(...t){return e.apply(Js(this),t),De(Bu.get(this))}:function(...t){return De(e.apply(Js(this),t))}}function Am(e){return typeof e=="function"?Im(e):(e instanceof IDBTransaction&&Tm(e),_m(e,ym())?new Proxy(e,Ro):e)}function De(e){if(e instanceof IDBRequest)return Em(e);if(Xs.has(e))return Xs.get(e);const t=Am(e);return t!==e&&(Xs.set(e,t),aa.set(t,e)),t}const Js=e=>aa.get(e);function Rm(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=De(o);return r&&o.addEventListener("upgradeneeded",c=>{r(De(o.result),c.oldVersion,c.newVersion,De(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const bm=["get","getKey","getAll","getAllKeys","count"],Pm=["put","add","delete","clear"],$s=new Map;function Uc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($s.get(t))return $s.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Pm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bm.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return $s.set(t,s),s}wm(e=>({...e,get:(t,n,r)=>Uc(t,n)||e.get(t,n,r),has:(t,n)=>!!Uc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const bo="@firebase/app",Fc="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new oa("@firebase/app"),km="@firebase/app-compat",Dm="@firebase/analytics-compat",Om="@firebase/analytics",Nm="@firebase/app-check-compat",Vm="@firebase/app-check",Lm="@firebase/auth",Mm="@firebase/auth-compat",xm="@firebase/database",Um="@firebase/database-compat",Fm="@firebase/functions",Bm="@firebase/functions-compat",jm="@firebase/installations",qm="@firebase/installations-compat",zm="@firebase/messaging",Hm="@firebase/messaging-compat",Wm="@firebase/performance",Km="@firebase/performance-compat",Gm="@firebase/remote-config",Qm="@firebase/remote-config-compat",Ym="@firebase/storage",Xm="@firebase/storage-compat",Jm="@firebase/firestore",$m="@firebase/firestore-compat",Zm="firebase",tg="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="[DEFAULT]",eg={[bo]:"fire-core",[km]:"fire-core-compat",[Om]:"fire-analytics",[Dm]:"fire-analytics-compat",[Vm]:"fire-app-check",[Nm]:"fire-app-check-compat",[Lm]:"fire-auth",[Mm]:"fire-auth-compat",[xm]:"fire-rtdb",[Um]:"fire-rtdb-compat",[Fm]:"fire-fn",[Bm]:"fire-fn-compat",[jm]:"fire-iid",[qm]:"fire-iid-compat",[zm]:"fire-fcm",[Hm]:"fire-fcm-compat",[Wm]:"fire-perf",[Km]:"fire-perf-compat",[Gm]:"fire-rc",[Qm]:"fire-rc-compat",[Ym]:"fire-gcs",[Xm]:"fire-gcs-compat",[Jm]:"fire-fst",[$m]:"fire-fst-compat","fire-js":"fire-js",[Zm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Map,So=new Map;function ng(e,t){try{e.container.addComponent(t)}catch(n){en.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function nn(e){const t=e.name;if(So.has(t))return en.debug(`There were multiple attempts to register component ${t}.`),!1;So.set(t,e);for(const n of Bi.values())ng(n,e);return!0}function fs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Oe=new Gr("app","Firebase",rg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=tg;function qu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Po,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Oe.create("bad-app-name",{appName:String(i)});if(n||(n=xu()),!n)throw Oe.create("no-options");const s=Bi.get(i);if(s){if(Fi(n,s.options)&&Fi(r,s.config))return s;throw Oe.create("duplicate-app",{appName:i})}const o=new dm(i);for(const c of So.values())o.addComponent(c);const a=new ig(n,r,o);return Bi.set(i,a),a}function ca(e=Po){const t=Bi.get(e);if(!t&&e===Po&&xu())return qu();if(!t)throw Oe.create("no-app",{appName:e});return t}function ee(e,t,n){var r;let i=(r=eg[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),en.warn(a.join(" "));return}nn(new Ve(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="firebase-heartbeat-database",og=1,Rr="firebase-heartbeat-store";let Zs=null;function zu(){return Zs||(Zs=Rm(sg,og,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Rr)}}}).catch(e=>{throw Oe.create("idb-open",{originalErrorMessage:e.message})})),Zs}async function ag(e){try{return await(await zu()).transaction(Rr).objectStore(Rr).get(Hu(e))}catch(t){if(t instanceof ue)en.warn(t.message);else{const n=Oe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});en.warn(n.message)}}}async function Bc(e,t){try{const r=(await zu()).transaction(Rr,"readwrite");await r.objectStore(Rr).put(t,Hu(e)),await r.done}catch(n){if(n instanceof ue)en.warn(n.message);else{const r=Oe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function Hu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1024,lg=30*24*60*60*1e3;class ug{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jc(),{heartbeatsToSend:n,unsentEntries:r}=hg(this._heartbeatsCache.heartbeats),i=Ui(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jc(){return new Date().toISOString().substring(0,10)}function hg(e,t=cg){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tm()?em().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ag(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qc(e){return Ui(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(e){nn(new Ve("platform-logger",t=>new Sm(t),"PRIVATE")),nn(new Ve("heartbeat",t=>new ug(t),"PRIVATE")),ee(bo,Fc,e),ee(bo,Fc,"esm2017"),ee("fire-js","")}fg("");function la(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function zc(e){return e!==void 0&&e.enterprise!==void 0}class pg{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Wu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mg=Wu,Ku=new Gr("auth","Firebase",Wu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new oa("@firebase/auth");function gg(e,...t){ji.logLevel<=q.WARN&&ji.warn(`Auth (${hn}): ${e}`,...t)}function bi(e,...t){ji.logLevel<=q.ERROR&&ji.error(`Auth (${hn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,...t){throw ua(e,...t)}function ne(e,...t){return ua(e,...t)}function Gu(e,t,n){const r=Object.assign(Object.assign({},mg()),{[t]:n});return new Gr("auth","Firebase",r).create(t,{appName:e.name})}function _g(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Gt(e,"argument-error"),Gu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ua(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ku.create(e,...t)}function V(e,t,...n){if(!e)throw ua(t,...n)}function fe(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bi(t),new Error(t)}function _e(e,t){e||fe(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function yg(){return Hc()==="http:"||Hc()==="https:"}function Hc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yg()||Jp()||"connection"in navigator)?navigator.onLine:!0}function Eg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,n){this.shortDelay=t,this.longDelay=n,_e(n>t,"Short delay should be less than long delay!"),this.isMobile=Yp()||$p()}get(){return vg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e,t){_e(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new Yr(3e4,6e4);function Yn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function dn(e,t,n,r,i={}){return Yu(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Qu.fetch()(Xu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Yu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tg),t);try{const i=new Ig(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pi(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pi(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw pi(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gu(e,u,l);Gt(e,u)}}catch(i){if(i instanceof ue)throw i;Gt(e,"network-request-failed",{message:String(i)})}}async function ps(e,t,n,r,i={}){const s=await dn(e,t,n,r,i);return"mfaPendingCredential"in s&&Gt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Xu(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ha(e.config,i):`${e.config.apiScheme}://${i}`}class Ig{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ne(this.auth,"network-request-failed")),wg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ne(e,t,r);return i.customData._tokenResponse=n,i}async function Ag(e,t){return dn(e,"GET","/v2/recaptchaConfig",Yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(e,t){return dn(e,"POST","/v1/accounts:delete",t)}async function bg(e,t){return dn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Pg(e,t=!1){const n=yt(e),r=await n.getIdToken(t),i=da(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_r(to(i.auth_time)),issuedAtTime:_r(to(i.iat)),expirationTime:_r(to(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function to(e){return Number(e)*1e3}function da(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vu(n);return i?JSON.parse(i):(bi("Failed to decode base64 JWT payload"),null)}catch(i){return bi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sg(e){const t=da(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ue&&Cg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Cg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await br(e,bg(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Ng(s.providerUserInfo):[],a=Og(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ju(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Dg(e){const t=yt(e);await qi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Og(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ng(e){return e.map(t=>{var{providerId:n}=t,r=la(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(e,t){const n=await Yu(e,{},async()=>{const r=Qr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Xu(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Sg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return V(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Vg(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pr;return r&&(V(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Je{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=la(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ju(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await br(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Pg(this,t)}reload(){return Dg(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Je(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await qi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await br(this,Rg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,g=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:R,isAnonymous:A,providerData:S,stsTokenManager:k}=n;V(T&&k,t,"internal-error");const F=Pr.fromJSON(this.name,k);V(typeof T=="string",t,"internal-error"),Re(h,t.name),Re(d,t.name),V(typeof R=="boolean",t,"internal-error"),V(typeof A=="boolean",t,"internal-error"),Re(f,t.name),Re(m,t.name),Re(_,t.name),Re(p,t.name),Re(g,t.name),Re(y,t.name);const D=new Je({uid:T,auth:t,email:d,emailVerified:R,displayName:h,isAnonymous:A,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:F,createdAt:g,lastLoginAt:y});return S&&Array.isArray(S)&&(D.providerData=S.map(z=>Object.assign({},z))),p&&(D._redirectEventId=p),D}static async _fromIdTokenResponse(t,n,r=!1){const i=new Pr;i.updateFromServerResponse(n);const s=new Je({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await qi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Map;function pe(e){_e(e instanceof Function,"Expected a class definition");let t=Wc.get(e);return t?(_e(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}$u.type="NONE";const Kc=$u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e,t,n){return`firebase:${e}:${t}:${n}`}class Rn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Je._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Rn(pe(Kc),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||pe(Kc);const o=Pi(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Je._fromJSON(t,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Rn(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Rn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rh(t))return"Blackberry";if(ih(t))return"Webos";if(fa(t))return"Safari";if((t.includes("chrome/")||th(t))&&!t.includes("edge/"))return"Chrome";if(nh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zu(e=Ot()){return/firefox\//i.test(e)}function fa(e=Ot()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function th(e=Ot()){return/crios\//i.test(e)}function eh(e=Ot()){return/iemobile/i.test(e)}function nh(e=Ot()){return/android/i.test(e)}function rh(e=Ot()){return/blackberry/i.test(e)}function ih(e=Ot()){return/webos/i.test(e)}function ms(e=Ot()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Lg(e=Ot()){var t;return ms(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Mg(){return Zp()&&document.documentMode===10}function sh(e=Ot()){return ms(e)||nh(e)||ih(e)||rh(e)||/windows phone/i.test(e)||eh(e)}function xg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e,t=[]){let n;switch(e){case"Browser":n=Gc(Ot());break;case"Worker":n=`${Gc(Ot())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(e,t={}){return dn(e,"GET","/v2/passwordPolicy",Yn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=6;class jg{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Bg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qc(this),this.idTokenSubscription=new Qc(this),this.beforeStateQueue=new Ug(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ku,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Eg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?yt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Fg(this),n=new jg(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Gr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pe(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[pe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&gg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fn(e){return yt(e)}class Qc{constructor(t){this.auth=t,this.observer=null,this.addObserver=om(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function ah(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ne("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",zg().appendChild(r)})}function Hg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Wg="https://www.google.com/recaptcha/enterprise.js?render=",Kg="recaptcha-enterprise",Gg="NO_RECAPTCHA";class Qg{constructor(t){this.type=Kg,this.auth=fn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ag(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new pg(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;zc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{o(l)}).catch(()=>{o(Gg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&zc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ah(Wg+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Yc(e,t,n,r=!1){const i=new Qg(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(e,t){const n=fs(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fi(s,t??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:t})}function Xg(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pe);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Jg(e,t,n){const r=fn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ch(t),{host:o,port:a}=$g(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Zg()}function ch(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $g(e){const t=ch(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xc(o)}}}function Xc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Zg(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return fe("not implemented")}_getIdTokenResponse(t){return fe("not implemented")}_linkToIdToken(t,n){return fe("not implemented")}_getReauthenticationResolver(t){return fe("not implemented")}}async function t_(e,t){return dn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e,t){return ps(e,"POST","/v1/accounts:signInWithPassword",Yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(e,t){return ps(e,"POST","/v1/accounts:signInWithEmailLink",Yn(e,t))}async function n_(e,t){return ps(e,"POST","/v1/accounts:signInWithEmailLink",Yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends pa{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Sr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Sr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Yc(t,r,"signInWithPassword");return eo(t,i)}else return eo(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Yc(t,r,"signInWithPassword");return eo(t,s)}else return Promise.reject(i)});case"emailLink":return e_(t,{email:this._email,oobCode:this._password});default:Gt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return t_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return n_(t,{idToken:n,email:this._email,oobCode:this._password});default:Gt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t){return ps(e,"POST","/v1/accounts:signInWithIdp",Yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="http://localhost";class rn extends pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=la(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,bn(t,n)}buildRequest(){const t={requestUri:r_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Qr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s_(e){const t=ur(hr(e)).link,n=t?ur(hr(t)).deep_link_id:null,r=ur(hr(e)).deep_link_id;return(r?ur(hr(r)).link:null)||r||n||t||e}class ma{constructor(t){var n,r,i,s,o,a;const c=ur(hr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=i_((i=c.mode)!==null&&i!==void 0?i:null);V(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=s_(t);try{return new ma(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(t,n){return Sr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=ma.parseLink(n);return V(r,"argument-error"),Sr._fromEmailAndCode(t,r.code,r.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends ga{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Xr{constructor(){super("facebook.com")}static credential(t){return rn._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return be.credentialFromTaggedObject(t)}static credentialFromError(t){return be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return be.credential(t.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Xr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rn._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return de.credentialFromTaggedObject(t)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return de.credential(n,r)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Xr{constructor(){super("github.com")}static credential(t){return rn._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pe.credentialFromTaggedObject(t)}static credentialFromError(t){return Pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pe.credential(t.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Xr{constructor(){super("twitter.com")}static credential(t,n){return rn._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Se.credential(n,r)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Je._fromIdTokenResponse(t,r,i),o=Jc(r);return new xn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Jc(r);return new xn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Jc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends ue{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new zi(t,n,r,i)}}function lh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(e,s,t,r):s})}async function o_(e,t,n=!1){const r=await br(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await br(e,lh(r,i,t,e),n);V(s.idToken,r,"internal-error");const o=da(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(e.uid===a,r,"user-mismatch"),xn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(e,t,n=!1){const r="signIn",i=await lh(e,r,t),s=await xn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function c_(e,t){return uh(fn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(e){const t=fn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function _A(e,t,n){return c_(yt(e),Xn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&l_(e),r})}function u_(e,t,n,r){return yt(e).onIdTokenChanged(t,n,r)}function h_(e,t,n){return yt(e).beforeAuthStateChanged(t,n)}function d_(e,t,n,r){return yt(e).onAuthStateChanged(t,n,r)}const Hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(){const e=Ot();return fa(e)||ms(e)}const p_=1e3,m_=10;class dh extends hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=f_()&&xg(),this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Mg()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,m_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},p_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}dh.type="LOCAL";const g_=dh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}fh.type="SESSION";const ph=fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new gs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await __(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=_a("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return window}function v_(e){re().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function E_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function w_(){return mh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="firebaseLocalStorageDb",I_=1,Wi="firebaseLocalStorage",_h="fbase_key";class Jr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _s(e,t){return e.transaction([Wi],t?"readwrite":"readonly").objectStore(Wi)}function A_(){const e=indexedDB.deleteDatabase(gh);return new Jr(e).toPromise()}function ko(){const e=indexedDB.open(gh,I_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wi,{keyPath:_h})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wi)?t(r):(r.close(),await A_(),t(await ko()))})})}async function $c(e,t,n){const r=_s(e,!0).put({[_h]:t,value:n});return new Jr(r).toPromise()}async function R_(e,t){const n=_s(e,!1).get(t),r=await new Jr(n).toPromise();return r===void 0?null:r.value}function Zc(e,t){const n=_s(e,!0).delete(t);return new Jr(n).toPromise()}const b_=800,P_=3;class yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ko(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>P_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gs._getInstance(w_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await E_(),!this.activeServiceWorker)return;this.sender=new y_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||T_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ko();return await $c(t,Hi,"1"),await Zc(t,Hi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$c(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>R_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=_s(i,!1).getAll();return new Jr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yh.type="LOCAL";const S_=yh;new Yr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(e,t){return t?pe(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends pa{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function C_(e){return uh(e.auth,new ya(e),e.bypassAuthState)}function k_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),a_(n,new ya(e),e.bypassAuthState)}async function D_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),o_(n,new ya(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return C_;case"linkViaPopup":case"linkViaRedirect":return D_;case"reauthViaPopup":case"reauthViaRedirect":return k_;default:Gt(this.auth,"internal-error")}}resolve(t){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new Yr(2e3,1e4);async function yA(e,t,n){const r=fn(e);_g(e,t,ga);const i=vh(r,n);return new Ke(r,"signInViaPopup",t,i).executeNotNull()}class Ke extends Eh{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){_e(this.filter.length===1,"Popup operations only handle one event");const t=_a();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,O_.get())};t()}}Ke.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="pendingRedirect",Si=new Map;class V_ extends Eh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Si.get(this.auth._key());if(!t){try{const r=await L_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Si.set(this.auth._key(),t)}return this.bypassAuthState||Si.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L_(e,t){const n=U_(t),r=x_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function M_(e,t){Si.set(e._key(),t)}function x_(e){return pe(e._redirectPersistence)}function U_(e){return Pi(N_,e.config.apiKey,e.name)}async function F_(e,t,n=!1){const r=fn(e),i=vh(r,t),o=await new V_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=10*60*1e3;class j_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!q_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Th(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ne(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=B_&&this.cachedEventUids.clear(),this.cachedEventUids.has(tl(t))}saveEventToCache(t){this.cachedEventUids.add(tl(t)),this.lastProcessedEventTime=Date.now()}}function tl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Th({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function q_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Th(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(e,t={}){return dn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W_=/^https?/;async function K_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await z_(e);for(const n of t)try{if(G_(n))return}catch{}Gt(e,"unauthorized-domain")}function G_(e){const t=Co(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!W_.test(n))return!1;if(H_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Yr(3e4,6e4);function el(){const e=re().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Y_(e){return new Promise((t,n)=>{var r,i,s;function o(){el(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{el(),n(ne(e,"network-request-failed"))},timeout:Q_.get()})}if(!((i=(r=re().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=re().gapi)===null||s===void 0)&&s.load)o();else{const a=Hg("iframefcb");return re()[a]=()=>{gapi.load?o():n(ne(e,"network-request-failed"))},ah(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Ci=null,t})}let Ci=null;function X_(e){return Ci=Ci||Y_(e),Ci}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Yr(5e3,15e3),$_="__/auth/iframe",Z_="emulator/auth/iframe",ty={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ey=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ny(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ha(t,Z_):`https://${e.config.authDomain}/${$_}`,r={apiKey:t.apiKey,appName:e.name,v:hn},i=ey.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qr(r).slice(1)}`}async function ry(e){const t=await X_(e),n=re().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:ny(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ty,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ne(e,"network-request-failed"),a=re().setTimeout(()=>{s(o)},J_.get());function c(){re().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sy=500,oy=600,ay="_blank",cy="http://localhost";class nl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ly(e,t,n,r=sy,i=oy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iy),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ot().toLowerCase();n&&(a=th(l)?ay:n),Zu(l)&&(t=t||cy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Lg(l)&&a!=="_self")return uy(t||"",a),new nl(null);const h=window.open(t||"",a,u);V(h,e,"popup-blocked");try{h.focus()}catch{}return new nl(h)}function uy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="__/auth/handler",dy="emulator/auth/handler",fy=encodeURIComponent("fac");async function rl(e,t,n,r,i,s){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hn,eventId:i};if(t instanceof ga){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",sm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(t instanceof Xr){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${fy}=${encodeURIComponent(c)}`:"";return`${py(e)}?${Qr(a).slice(1)}${l}`}function py({config:e}){return e.emulator?ha(e,dy):`https://${e.authDomain}/${hy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="webStorageSupport";class my{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ph,this._completeRedirectFn=F_,this._overrideRedirectResult=M_}async _openPopup(t,n,r,i){var s;_e((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rl(t,n,r,Co(),i);return ly(t,o,_a())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await rl(t,n,r,Co(),i);return v_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_e(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ry(t),r=new j_(t);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(no,{type:no},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[no];o!==void 0&&n(!!o),Gt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return sh()||fa()||ms()}}const gy=my;var il="@firebase/auth",sl="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vy(e){nn(new Ve("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oh(e)},l=new qg(r,i,s,c);return Xg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),nn(new Ve("auth-internal",t=>{const n=fn(t.getProvider("auth").getImmediate());return(r=>new _y(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ee(il,sl,yy(e)),ee(il,sl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=5*60,Ty=Uu("authIdTokenMaxAge")||Ey;let ol=null;const wy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ty)return;const i=n==null?void 0:n.token;ol!==i&&(ol=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Iy(e=ca()){const t=fs(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Yg(e,{popupRedirectResolver:gy,persistence:[S_,g_,ph]}),r=Uu("authTokenSyncURL");if(r){const s=wy(r);h_(n,s,()=>s(n.currentUser)),u_(n,o=>s(o))}const i=Lu("auth");return i&&Jg(n,`http://${i}`),n}vy("Browser");var Ay="firebase",Ry="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ee(Ay,Ry,"app");var by=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,va=va||{},x=by||self;function ys(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function $r(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Py(e){return Object.prototype.hasOwnProperty.call(e,ro)&&e[ro]||(e[ro]=++Sy)}var ro="closure_uid_"+(1e9*Math.random()>>>0),Sy=0;function Cy(e,t,n){return e.call.apply(e.bind,arguments)}function ky(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ct(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=Cy:Ct=ky,Ct.apply(null,arguments)}function mi(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Et(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function qe(){this.s=this.s,this.o=this.o}var Dy=0;qe.prototype.s=!1;qe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Dy!=0)&&Py(this)};qe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ea(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function al(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ys(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function kt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var Oy=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{x.addEventListener("test",()=>{},t),x.removeEventListener("test",()=>{},t)}catch{}return e}();function Cr(e){return/^[\s\xa0]*$/.test(e)}function vs(){var e=x.navigator;return e&&(e=e.userAgent)?e:""}function Jt(e){return vs().indexOf(e)!=-1}function Ta(e){return Ta[" "](e),e}Ta[" "]=function(){};function Ny(e,t){var n=Rv;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Vy=Jt("Opera"),Un=Jt("Trident")||Jt("MSIE"),Ih=Jt("Edge"),Do=Ih||Un,Ah=Jt("Gecko")&&!(vs().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),Ly=vs().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function Rh(){var e=x.document;return e?e.documentMode:void 0}var Oo;t:{var io="",so=function(){var e=vs();if(Ah)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ih)return/Edge\/([\d\.]+)/.exec(e);if(Un)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ly)return/WebKit\/(\S+)/.exec(e);if(Vy)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(so&&(io=so?so[1]:""),Un){var oo=Rh();if(oo!=null&&oo>parseFloat(io)){Oo=String(oo);break t}}Oo=io}var No;if(x.document&&Un){var cl=Rh();No=cl||parseInt(Oo,10)||void 0}else No=void 0;var My=No;function kr(e,t){if(kt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ah){t:{try{Ta(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:xy[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&kr.$.h.call(this)}}Et(kr,kt);var xy={2:"touch",3:"pen",4:"mouse"};kr.prototype.h=function(){kr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zr="closure_listenable_"+(1e6*Math.random()|0),Uy=0;function Fy(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Uy,this.fa=this.ia=!1}function Es(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function wa(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function By(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function bh(e){const t={};for(const n in e)t[n]=e[n];return t}const ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ph(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<ll.length;s++)n=ll[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ts(e){this.src=e,this.g={},this.h=0}Ts.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Lo(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Fy(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Vo(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=wh(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Es(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Lo(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ia="closure_lm_"+(1e6*Math.random()|0),ao={};function Sh(e,t,n,r,i){if(r&&r.once)return kh(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Sh(e,t[s],n,r,i);return null}return n=ba(n),e&&e[Zr]?e.O(t,n,$r(r)?!!r.capture:!!r,i):Ch(e,t,n,!1,r,i)}function Ch(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=$r(i)?!!i.capture:!!i,a=Ra(e);if(a||(e[Ia]=a=new Ts(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=jy(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Oy||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Oh(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jy(){function e(n){return t.call(e.src,e.listener,n)}const t=qy;return e}function kh(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)kh(e,t[s],n,r,i);return null}return n=ba(n),e&&e[Zr]?e.P(t,n,$r(r)?!!r.capture:!!r,i):Ch(e,t,n,!0,r,i)}function Dh(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Dh(e,t[s],n,r,i);else r=$r(r)?!!r.capture:!!r,n=ba(n),e&&e[Zr]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Lo(s,n,r,i),-1<n&&(Es(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ra(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Lo(t,n,r,i)),(n=-1<e?t[e]:null)&&Aa(n))}function Aa(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Zr])Vo(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Oh(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ra(t))?(Vo(n,e),n.h==0&&(n.src=null,t[Ia]=null)):Es(e)}}}function Oh(e){return e in ao?ao[e]:ao[e]="on"+e}function qy(e,t){if(e.fa)e=!0;else{t=new kr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Aa(e),e=n.call(r,t)}return e}function Ra(e){return e=e[Ia],e instanceof Ts?e:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function ba(e){return typeof e=="function"?e:(e[co]||(e[co]=function(t){return e.handleEvent(t)}),e[co])}function vt(){qe.call(this),this.i=new Ts(this),this.S=this,this.J=null}Et(vt,qe);vt.prototype[Zr]=!0;vt.prototype.removeEventListener=function(e,t,n,r){Dh(this,e,t,n,r)};function At(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new kt(t,e);else if(t instanceof kt)t.target=t.target||e;else{var i=t;t=new kt(r,e),Ph(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=gi(o,r,!0,t)&&i}if(o=t.g=e,i=gi(o,r,!0,t)&&i,i=gi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=gi(o,r,!1,t)&&i}vt.prototype.N=function(){if(vt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Es(n[r]);delete e.g[t],e.h--}}this.J=null};vt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};vt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function gi(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Vo(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Pa=x.JSON.stringify;class zy{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Hy(){var e=Sa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wy{constructor(){this.h=this.g=null}add(t,n){const r=Nh.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Nh=new zy(()=>new Ky,e=>e.reset());class Ky{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gy(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Qy(e){x.setTimeout(()=>{throw e},0)}let Dr,Or=!1,Sa=new Wy,Vh=()=>{const e=x.Promise.resolve(void 0);Dr=()=>{e.then(Yy)}};var Yy=()=>{for(var e;e=Hy();){try{e.h.call(e.g)}catch(n){Qy(n)}var t=Nh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Or=!1};function ws(e,t){vt.call(this),this.h=e||1,this.g=t||x,this.j=Ct(this.qb,this),this.l=Date.now()}Et(ws,vt);I=ws.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(Ca(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ca(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){ws.$.N.call(this),Ca(this),delete this.g};function ka(e,t,n){if(typeof e=="function")n&&(e=Ct(e,n));else if(e&&typeof e.handleEvent=="function")e=Ct(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(e,t||0)}function Lh(e){e.g=ka(()=>{e.g=null,e.i&&(e.i=!1,Lh(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Xy extends qe{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Lh(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nr(e){qe.call(this),this.h=e,this.g={}}Et(Nr,qe);var ul=[];function Mh(e,t,n,r){Array.isArray(n)||(n&&(ul[0]=n.toString()),n=ul);for(var i=0;i<n.length;i++){var s=Sh(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function xh(e){wa(e.g,function(t,n){this.g.hasOwnProperty(n)&&Aa(t)},e),e.g={}}Nr.prototype.N=function(){Nr.$.N.call(this),xh(this)};Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Is(){this.g=!0}Is.prototype.Ea=function(){this.g=!1};function Jy(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function $y(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function In(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+tv(e,n)+(r?" "+r:"")})}function Zy(e,t){e.info(function(){return"TIMEOUT: "+t})}Is.prototype.info=function(){};function tv(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pa(n)}catch{return t}}var pn={},hl=null;function As(){return hl=hl||new vt}pn.Ta="serverreachability";function Uh(e){kt.call(this,pn.Ta,e)}Et(Uh,kt);function Vr(e){const t=As();At(t,new Uh(t))}pn.STAT_EVENT="statevent";function Fh(e,t){kt.call(this,pn.STAT_EVENT,e),this.stat=t}Et(Fh,kt);function Mt(e){const t=As();At(t,new Fh(t,e))}pn.Ua="timingevent";function Bh(e,t){kt.call(this,pn.Ua,e),this.size=t}Et(Bh,kt);function ti(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){e()},t)}var Rs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Da(){}Da.prototype.h=null;function dl(e){return e.h||(e.h=e.i())}function qh(){}var ei={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Oa(){kt.call(this,"d")}Et(Oa,kt);function Na(){kt.call(this,"c")}Et(Na,kt);var Mo;function bs(){}Et(bs,Da);bs.prototype.g=function(){return new XMLHttpRequest};bs.prototype.i=function(){return{}};Mo=new bs;function ni(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Nr(this),this.P=ev,e=Do?125:void 0,this.V=new ws(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new zh}function zh(){this.i=null,this.g="",this.h=!1}var ev=45e3,xo={},Ki={};I=ni.prototype;I.setTimeout=function(e){this.P=e};function Uo(e,t,n){e.L=1,e.v=Ss(ye(t)),e.s=n,e.S=!0,Hh(e,null)}function Hh(e,t){e.G=Date.now(),ri(e),e.A=ye(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),$h(n.i,"t",r),e.C=0,n=e.l.J,e.h=new zh,e.g=vd(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Xy(Ct(e.Pa,e,e.g),e.O)),Mh(e.U,e.g,"readystatechange",e.nb),t=e.I?bh(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Vr(),Jy(e.j,e.u,e.A,e.m,e.W,e.s)}I.nb=function(e){e=e.target;const t=this.M;t&&$t(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)t:{const u=$t(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Do||this.g&&(this.h.h||this.g.ja()||gl(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Vr(3):Vr(2)),Ps(this);var n=this.g.da();this.ca=n;e:if(Wh(this)){var r=gl(this.g);e="";var i=r.length,s=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ge(this),yr(this);var o="";break e}this.h.i=new x.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,$y(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cr(a)){var l=a;break e}}l=null}if(n=l)In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,n);else{this.i=!1,this.o=3,Mt(12),Ge(this),yr(this);break t}}this.S?(Kh(this,u,o),Do&&this.i&&u==3&&(Mh(this.U,this.V,"tick",this.mb),this.V.start())):(In(this.j,this.m,o,null),Fo(this,o)),u==4&&Ge(this),this.i&&!this.J&&(u==4?md(this.l,this):(this.i=!1,ri(this)))}else wv(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Mt(12)):(this.o=0,Mt(13)),Ge(this),yr(this)}}}catch{}finally{}};function Wh(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Kh(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=nv(e,n),i==Ki){t==4&&(e.o=4,Mt(14),r=!1),In(e.j,e.m,null,"[Incomplete Response]");break}else if(i==xo){e.o=4,Mt(15),In(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else In(e.j,e.m,i,null),Fo(e,i);Wh(e)&&i!=Ki&&i!=xo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Mt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fa(t),t.M=!0,Mt(11))):(In(e.j,e.m,n,"[Invalid Chunked Response]"),Ge(e),yr(e))}I.mb=function(){if(this.g){var e=$t(this.g),t=this.g.ja();this.C<t.length&&(Ps(this),Kh(this,e,t),this.i&&e!=4&&ri(this))}};function nv(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Ki:(n=Number(t.substring(n,r)),isNaN(n)?xo:(r+=1,r+n>t.length?Ki:(t=t.slice(r,r+n),e.C=r+n,t)))}I.cancel=function(){this.J=!0,Ge(this)};function ri(e){e.Y=Date.now()+e.P,Gh(e,e.P)}function Gh(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ti(Ct(e.lb,e),t)}function Ps(e){e.B&&(x.clearTimeout(e.B),e.B=null)}I.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Zy(this.j,this.A),this.L!=2&&(Vr(),Mt(17)),Ge(this),this.o=2,yr(this)):Gh(this,this.Y-e)};function yr(e){e.l.H==0||e.J||md(e.l,e)}function Ge(e){Ps(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ca(e.V),xh(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Fo(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Bo(n.i,e))){if(!e.K&&Bo(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Yi(n),Os(n);else break t;Ua(n),Mt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ti(Ct(n.ib,n),6e3));if(1>=ed(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qe(n,11)}else if((e.K||n.g==e)&&Yi(n),!Cr(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Va(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,X(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=yd(r,r.J?r.pa:null,r.Y),o.K){nd(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ps(a),ri(a)),r.g=o}else fd(r);0<n.j.length&&Ns(n)}else l[0]!="stop"&&l[0]!="close"||Qe(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qe(n,7):xa(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Vr(4)}catch{}}function rv(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ys(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function iv(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ys(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Qh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ys(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=iv(e),r=rv(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sv(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $e(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $e){this.h=e.h,Gi(this,e.j),this.s=e.s,this.g=e.g,Qi(this,e.m),this.l=e.l;var t=e.i,n=new Lr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),fl(this,n),this.o=e.o}else e&&(t=String(e).match(Yh))?(this.h=!1,Gi(this,t[1]||"",!0),this.s=dr(t[2]||""),this.g=dr(t[3]||"",!0),Qi(this,t[4]),this.l=dr(t[5]||"",!0),fl(this,t[6]||"",!0),this.o=dr(t[7]||"")):(this.h=!1,this.i=new Lr(null,this.h))}$e.prototype.toString=function(){var e=[],t=this.j;t&&e.push(fr(t,pl,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(fr(t,pl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(fr(n,n.charAt(0)=="/"?cv:av,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",fr(n,uv)),e.join("")};function ye(e){return new $e(e)}function Gi(e,t,n){e.j=n?dr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Qi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function fl(e,t,n){t instanceof Lr?(e.i=t,hv(e.i,e.h)):(n||(t=fr(t,lv)),e.i=new Lr(t,e.h))}function X(e,t,n){e.i.set(t,n)}function Ss(e){return X(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function dr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function fr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ov),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ov(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var pl=/[#\/\?@]/g,av=/[#\?:]/g,cv=/[#\?]/g,lv=/[#\?@]/g,uv=/#/g;function Lr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ze(e){e.g||(e.g=new Map,e.h=0,e.i&&sv(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=Lr.prototype;I.add=function(e,t){ze(this),this.i=null,e=Jn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Xh(e,t){ze(e),t=Jn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Jh(e,t){return ze(e),t=Jn(e,t),e.g.has(t)}I.forEach=function(e,t){ze(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};I.ta=function(){ze(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};I.Z=function(e){ze(this);let t=[];if(typeof e=="string")Jh(this,e)&&(t=t.concat(this.g.get(Jn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return ze(this),this.i=null,e=Jn(this,e),Jh(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function $h(e,t,n){Xh(e,t),0<n.length&&(e.i=null,e.g.set(Jn(e,t),Ea(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Jn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hv(e,t){t&&!e.j&&(ze(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Xh(this,r),$h(this,i,n))},e)),e.j=t}var dv=class{constructor(e,t){this.g=e,this.map=t}};function Zh(e){this.l=e||fv,x.PerformanceNavigationTiming?(e=x.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fv=10;function td(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ed(e){return e.h?1:e.g?e.g.size:0}function Bo(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Va(e,t){e.g?e.g.add(t):e.h=t}function nd(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Zh.prototype.cancel=function(){if(this.i=rd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function rd(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ea(e.i)}var pv=class{stringify(e){return x.JSON.stringify(e,void 0)}parse(e){return x.JSON.parse(e,void 0)}};function mv(){this.g=new pv}function gv(e,t,n){const r=n||"";try{Qh(e,function(i,s){let o=i;$r(i)&&(o=Pa(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _v(e,t){const n=new Is;if(x.Image){const r=new Image;r.onload=mi(_i,n,r,"TestLoadImage: loaded",!0,t),r.onerror=mi(_i,n,r,"TestLoadImage: error",!1,t),r.onabort=mi(_i,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=mi(_i,n,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function _i(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Cs(e){this.l=e.ec||null,this.j=e.ob||!1}Et(Cs,Da);Cs.prototype.g=function(){return new ks(this.l,this.j)};Cs.prototype.i=function(e){return function(){return e}}({});function ks(e,t){vt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=La,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(ks,vt);var La=0;I=ks.prototype;I.open=function(e,t){if(this.readyState!=La)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Mr(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=La};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Mr(this)),this.g&&(this.readyState=3,Mr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;id(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function id(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ii(this):Mr(this),this.readyState==3&&id(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,ii(this))};I.Ya=function(e){this.g&&(this.response=e,ii(this))};I.ka=function(){this.g&&ii(this)};function ii(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Mr(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Mr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yv=x.JSON.parse;function st(e){vt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sd,this.L=this.M=!1}Et(st,vt);var sd="",vv=/^https?$/i,Ev=["POST","PUT"];I=st.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mo.g(),this.C=this.u?dl(this.u):dl(Mo),this.g.onreadystatechange=Ct(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){ml(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&e instanceof x.FormData,!(0<=wh(Ev,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cd(this),0<this.B&&((this.L=Tv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.ua,this)):this.A=ka(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ml(this,s)}};function Tv(e){return Un&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof va<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function ml(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,od(e),Ds(e)}function od(e){e.F||(e.F=!0,At(e,"complete"),At(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,At(this,"complete"),At(this,"abort"),Ds(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ds(this,!0)),st.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?ad(this):this.kb())};I.kb=function(){ad(this)};function ad(e){if(e.h&&typeof va<"u"&&(!e.C[1]||$t(e)!=4||e.da()!=2)){if(e.v&&$t(e)==4)ka(e.La,0,e);else if(At(e,"readystatechange"),$t(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Yh)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!vv.test(i?i.toLowerCase():"")}n=r}if(n)At(e,"complete"),At(e,"success");else{e.m=6;try{var s=2<$t(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",od(e)}}finally{Ds(e)}}}}function Ds(e,t){if(e.g){cd(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||At(e,"ready");try{n.onreadystatechange=r}catch{}}}function cd(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(x.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function $t(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),yv(t)}};function gl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case sd:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function wv(e){const t={};e=(e.g&&2<=$t(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Cr(e[r]))continue;var n=Gy(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}By(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ld(e){let t="";return wa(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ma(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ld(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):X(e,t,n))}function sr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ud(e){this.Ga=0,this.j=[],this.l=new Is,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=sr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=sr("baseRetryDelayMs",5e3,e),this.hb=sr("retryDelaySeedMs",1e4,e),this.eb=sr("forwardChannelMaxRetries",2,e),this.xa=sr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Zh(e&&e.concurrentRequestLimit),this.Ja=new mv,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=ud.prototype;I.ra=8;I.H=1;function xa(e){if(hd(e),e.H==3){var t=e.W++,n=ye(e.I);if(X(n,"SID",e.K),X(n,"RID",t),X(n,"TYPE","terminate"),si(e,n),t=new ni(e,e.l,t),t.L=2,t.v=Ss(ye(n)),n=!1,x.navigator&&x.navigator.sendBeacon)try{n=x.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&x.Image&&(new Image().src=t.v,n=!0),n||(t.g=vd(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ri(t)}_d(e)}function Os(e){e.g&&(Fa(e),e.g.cancel(),e.g=null)}function hd(e){Os(e),e.u&&(x.clearTimeout(e.u),e.u=null),Yi(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&x.clearTimeout(e.m),e.m=null)}function Ns(e){if(!td(e.i)&&!e.m){e.m=!0;var t=e.Na;Dr||Vh(),Or||(Dr(),Or=!0),Sa.add(t,e),e.C=0}}function Iv(e,t){return ed(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ti(Ct(e.Na,e,t),gd(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ni(this,this.l,e);let s=this.s;if(this.U&&(s?(s=bh(s),Ph(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=dd(this,i,t),n=ye(this.I),X(n,"RID",e),X(n,"CVER",22),this.F&&X(n,"X-HTTP-Session-Id",this.F),si(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ld(s)))+"&"+t:this.o&&Ma(n,this.o,s)),Va(this.i,i),this.bb&&X(n,"TYPE","init"),this.P?(X(n,"$req",t),X(n,"SID","null"),i.aa=!0,Uo(i,n,null)):Uo(i,n,t),this.H=2}}else this.H==3&&(e?_l(this,e):this.j.length==0||td(this.i)||_l(this))};function _l(e,t){var n;t?n=t.m:n=e.W++;const r=ye(e.I);X(r,"SID",e.K),X(r,"RID",n),X(r,"AID",e.V),si(e,r),e.o&&e.s&&Ma(r,e.o,e.s),n=new ni(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=dd(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Va(e.i,n),Uo(n,r,t)}function si(e,t){e.na&&wa(e.na,function(n,r){X(t,r,n)}),e.h&&Qh({},function(n,r){X(t,r,n)})}function dd(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ct(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{gv(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function fd(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Dr||Vh(),Or||(Dr(),Or=!0),Sa.add(t,e),e.A=0}}function Ua(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ti(Ct(e.Ma,e),gd(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,pd(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ti(Ct(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Mt(10),Os(this),pd(this))};function Fa(e){e.B!=null&&(x.clearTimeout(e.B),e.B=null)}function pd(e){e.g=new ni(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ye(e.wa);X(t,"RID","rpc"),X(t,"SID",e.K),X(t,"AID",e.V),X(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&X(t,"TO",e.qa),X(t,"TYPE","xmlhttp"),si(e,t),e.o&&e.s&&Ma(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ss(ye(t)),n.s=null,n.S=!0,Hh(n,e)}I.ib=function(){this.v!=null&&(this.v=null,Os(this),Ua(this),Mt(19))};function Yi(e){e.v!=null&&(x.clearTimeout(e.v),e.v=null)}function md(e,t){var n=null;if(e.g==t){Yi(e),Fa(e),e.g=null;var r=2}else if(Bo(e.i,t))n=t.F,nd(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=As(),At(r,new Bh(r,n)),Ns(e)}else fd(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Iv(e,t)||r==2&&Ua(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Qe(e,5);break;case 4:Qe(e,10);break;case 3:Qe(e,6);break;default:Qe(e,2)}}}function gd(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Qe(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ct(e.pb,e);n||(n=new $e("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||Gi(n,"https"),Ss(n)),_v(n.toString(),r)}else Mt(2);e.H=0,e.h&&e.h.za(t),_d(e),hd(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Mt(2)):(this.l.info("Failed to ping google.com"),Mt(1))};function _d(e){if(e.H=0,e.ma=[],e.h){const t=rd(e.i);(t.length!=0||e.j.length!=0)&&(al(e.ma,t),al(e.ma,e.j),e.i.i.length=0,Ea(e.j),e.j.length=0),e.h.ya()}}function yd(e,t,n){var r=n instanceof $e?ye(n):new $e(n);if(r.g!="")t&&(r.g=t+"."+r.g),Qi(r,r.m);else{var i=x.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new $e(null);r&&Gi(s,r),t&&(s.g=t),i&&Qi(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&X(r,n,t),X(r,"VER",e.ra),si(e,r),r}function vd(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new st(new Cs({ob:!0})):new st(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ed(){}I=Ed.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function Xi(){if(Un&&!(10<=Number(My)))throw Error("Environmental error: no available transport.")}Xi.prototype.g=function(e,t){return new qt(e,t)};function qt(e,t){vt.call(this),this.g=new ud(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Cr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Cr(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new $n(this)}Et(qt,vt);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Mt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=yd(e,null,e.Y),Ns(e)};qt.prototype.close=function(){xa(this.g)};qt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Pa(e),e=n);t.j.push(new dv(t.fb++,e)),t.H==3&&Ns(t)};qt.prototype.N=function(){this.g.h=null,delete this.j,xa(this.g),delete this.g,qt.$.N.call(this)};function Td(e){Oa.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Et(Td,Oa);function wd(){Na.call(this),this.status=1}Et(wd,Na);function $n(e){this.g=e}Et($n,Ed);$n.prototype.Ba=function(){At(this.g,"a")};$n.prototype.Aa=function(e){At(this.g,new Td(e))};$n.prototype.za=function(e){At(this.g,new wd)};$n.prototype.ya=function(){At(this.g,"b")};function Av(){this.blockSize=-1}function Xt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Et(Xt,Av);Xt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function lo(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Xt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)lo(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){lo(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){lo(this,r),i=0;break}}this.h=i,this.i+=t};Xt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function Q(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Rv={};function Ba(e){return-128<=e&&128>e?Ny(e,function(t){return new Q([t|0],0>t?-1:0)}):new Q([e|0],0>e?-1:0)}function Zt(e){if(isNaN(e)||!isFinite(e))return Pn;if(0>e)return wt(Zt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=jo;return new Q(t,0)}function Id(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return wt(Id(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(t,8)),r=Pn,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Zt(Math.pow(t,s)),r=r.R(s).add(Zt(o))):(r=r.R(n),r=r.add(Zt(o)))}return r}var jo=4294967296,Pn=Ba(0),qo=Ba(1),yl=Ba(16777216);I=Q.prototype;I.ea=function(){if(zt(this))return-wt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:jo+r)*t,t*=jo}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(me(this))return"0";if(zt(this))return"-"+wt(this).toString(e);for(var t=Zt(Math.pow(e,6)),n=this,r="";;){var i=$i(n,t).g;n=Ji(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,me(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function me(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function zt(e){return e.h==-1}I.X=function(e){return e=Ji(this,e),zt(e)?-1:me(e)?0:1};function wt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Q(n,~e.h).add(qo)}I.abs=function(){return zt(this)?wt(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Q(n,n[n.length-1]&-2147483648?-1:0)};function Ji(e,t){return e.add(wt(t))}I.R=function(e){if(me(this)||me(e))return Pn;if(zt(this))return zt(e)?wt(this).R(wt(e)):wt(wt(this).R(e));if(zt(e))return wt(this.R(wt(e)));if(0>this.X(yl)&&0>e.X(yl))return Zt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,yi(n,2*r+2*i),n[2*r+2*i+1]+=s*c,yi(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,yi(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,yi(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Q(n,0)};function yi(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function or(e,t){this.g=e,this.h=t}function $i(e,t){if(me(t))throw Error("division by zero");if(me(e))return new or(Pn,Pn);if(zt(e))return t=$i(wt(e),t),new or(wt(t.g),wt(t.h));if(zt(t))return t=$i(e,wt(t)),new or(wt(t.g),t.h);if(30<e.g.length){if(zt(e)||zt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=qo,r=t;0>=r.X(e);)n=vl(n),r=vl(r);var i=vn(n,1),s=vn(r,1);for(r=vn(r,2),n=vn(n,2);!me(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=vn(r,1),n=vn(n,1)}return t=Ji(e,i.R(t)),new or(i,t)}for(i=Pn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zt(n),o=s.R(t);zt(o)||0<o.X(e);)n-=r,s=Zt(n),o=s.R(t);me(s)&&(s=qo),i=i.add(s),e=Ji(e,o)}return new or(i,e)}I.gb=function(e){return $i(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Q(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Q(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Q(n,this.h^e.h)};function vl(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Q(n,e.h)}function vn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Q(i,e.h)}Xi.prototype.createWebChannel=Xi.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;Rs.NO_ERROR=0;Rs.TIMEOUT=8;Rs.HTTP_ERROR=6;jh.COMPLETE="complete";qh.EventType=ei;ei.OPEN="a";ei.CLOSE="b";ei.ERROR="c";ei.MESSAGE="d";vt.prototype.listen=vt.prototype.O;st.prototype.listenOnce=st.prototype.P;st.prototype.getLastError=st.prototype.Sa;st.prototype.getLastErrorCode=st.prototype.Ia;st.prototype.getStatus=st.prototype.da;st.prototype.getResponseJson=st.prototype.Wa;st.prototype.getResponseText=st.prototype.ja;st.prototype.send=st.prototype.ha;st.prototype.setWithCredentials=st.prototype.Oa;Xt.prototype.digest=Xt.prototype.l;Xt.prototype.reset=Xt.prototype.reset;Xt.prototype.update=Xt.prototype.j;Q.prototype.add=Q.prototype.add;Q.prototype.multiply=Q.prototype.R;Q.prototype.modulo=Q.prototype.gb;Q.prototype.compare=Q.prototype.X;Q.prototype.toNumber=Q.prototype.ea;Q.prototype.toString=Q.prototype.toString;Q.prototype.getBits=Q.prototype.D;Q.fromNumber=Zt;Q.fromString=Id;var bv=function(){return new Xi},Pv=function(){return As()},uo=Rs,Sv=jh,Cv=pn,El={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vi=qh,kv=st,Dv=Xt,Sn=Q;const Tl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new oa("@firebase/firestore");function ar(){return sn.logLevel}function C(e,...t){if(sn.logLevel<=q.DEBUG){const n=t.map(ja);sn.debug(`Firestore (${Zn}): ${e}`,...n)}}function ve(e,...t){if(sn.logLevel<=q.ERROR){const n=t.map(ja);sn.error(`Firestore (${Zn}): ${e}`,...n)}}function Fn(e,...t){if(sn.logLevel<=q.WARN){const n=t.map(ja);sn.warn(`Firestore (${Zn}): ${e}`,...n)}}function ja(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e="Unexpected state"){const t=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+e;throw ve(t),new Error(t)}function Z(e,t){e||M()}function B(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ue{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ov{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class Nv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vv{constructor(t){this.t=t,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ze,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ze)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new Ad(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string"),new bt(t)}}class Lv{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mv{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Lv(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uv{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Z(typeof n.token=="string"),this.R=n.token,new xv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Fv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function K(e,t){return e<t?-1:e>t?1:0}function Bn(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new O(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new O(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new mt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new mt(0,0))}static max(){return new U(new mt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,n,r){n===void 0?n=0:n>t.length&&M(),r===void 0?r=t.length-n:r>t.length-n&&M(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return xr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof xr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class tt extends xr{construct(t,n,r){return new tt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new tt(n)}static emptyPath(){return new tt([])}}const Bv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends xr{construct(t,n,r){return new St(t,n,r)}static isValidIdentifier(t){return Bv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new O(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new O(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(tt.fromString(t))}static fromName(t){return new N(tt.fromString(t).popFirst(5))}static empty(){return new N(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return tt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new tt(t.slice()))}}function jv(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new Le(i,N.empty(),t)}function qv(e){return new Le(e.readTime,e.key,-1)}class Le{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Le(U.min(),N.empty(),-1)}static max(){return new Le(U.max(),N.empty(),-1)}}function zv(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=N.comparator(e.documentKey,t.documentKey),n!==0?n:K(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==Hv)throw e;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new v((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):v.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):v.reject(n)}static resolve(t){return new v((n,r)=>{n(t)})}static reject(t){return new v((n,r)=>{r(t)})}static waitFor(t){return new v((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=v.resolve(!1);for(const r of t)n=n.next(i=>i?v.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new v((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new v((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function ai(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}qa.ae=-1;function Vs(e){return e==null}function Zi(e){return e===0&&1/e==-1/0}function Kv(e){return typeof e=="number"&&Number.isInteger(e)&&!Zi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function tr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function bd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n){this.comparator=t,this.root=n||Tt.EMPTY}insert(t,n){return new rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ei(this.root,t,this.comparator,!0)}}class Ei{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Tt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Tt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Tt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Il(this.data.getIterator())}getIteratorFrom(t){return new Il(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Dt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Dt(this.comparator);return n.data=t,n}}class Il{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.fields=t,t.sort(St.comparator)}static empty(){return new Yt([])}unionWith(t){let n=new Dt(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Yt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Bn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Pd("Invalid base64 string: "+s):s}}(t);return new Nt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Gv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Me(e){if(Z(!!e),typeof e=="string"){let t=0;const n=Gv.exec(e);if(Z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(e.seconds),nanos:ut(e.nanos)}}function ut(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function on(e){return typeof e=="string"?Nt.fromBase64String(e):Nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ha(e){const t=e.mapValue.fields.__previous_value__;return za(t)?Ha(t):t}function Ur(e){const t=Me(e.mapValue.fields.__local_write_time__.timestampValue);return new mt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(t,n,r,i,s,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Fr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Fr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function an(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?za(e)?4:Yv(e)?9007199254740991:10:M()}function ae(e,t){if(e===t)return!0;const n=an(e);if(n!==an(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ur(e).isEqual(Ur(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Me(i.timestampValue),a=Me(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return on(i.bytesValue).isEqual(on(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ut(i.doubleValue),a=ut(s.doubleValue);return o===a?Zi(o)===Zi(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Bn(e.arrayValue.values||[],t.arrayValue.values||[],ae);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(wl(o)!==wl(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ae(o[c],a[c])))return!1;return!0}(e,t);default:return M()}}function Br(e,t){return(e.values||[]).find(n=>ae(n,t))!==void 0}function jn(e,t){if(e===t)return 0;const n=an(e),r=an(t);if(n!==r)return K(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=ut(s.integerValue||s.doubleValue),c=ut(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Al(e.timestampValue,t.timestampValue);case 4:return Al(Ur(e),Ur(t));case 5:return K(e.stringValue,t.stringValue);case 6:return function(s,o){const a=on(s),c=on(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=K(a[l],c[l]);if(u!==0)return u}return K(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=K(ut(s.latitude),ut(o.latitude));return a!==0?a:K(ut(s.longitude),ut(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=jn(a[l],c[l]);if(u)return u}return K(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Ti.mapValue&&o===Ti.mapValue)return 0;if(s===Ti.mapValue)return 1;if(o===Ti.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=K(c[h],u[h]);if(d!==0)return d;const f=jn(a[c[h]],l[u[h]]);if(f!==0)return f}return K(c.length,u.length)}(e.mapValue,t.mapValue);default:throw M()}}function Al(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return K(e,t);const n=Me(e),r=Me(t),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function qn(e){return zo(e)}function zo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Me(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return on(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return N.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zo(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zo(n.fields[o])}`;return i+"}"}(e.mapValue):M()}function Ho(e){return!!e&&"integerValue"in e}function Wa(e){return!!e&&"arrayValue"in e}function Rl(e){return!!e&&"nullValue"in e}function bl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ki(e){return!!e&&"mapValue"in e}function vr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return tr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=vr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=vr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yv(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.value=t}static empty(){return new Ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ki(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=vr(n)}setAll(t){let n=St.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=vr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());ki(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ae(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];ki(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){tr(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ht(vr(this.value))}}function Sd(e){const t=[];return tr(e.fields,(n,r)=>{const i=new St([n]);if(ki(r)){const s=Sd(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Yt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Pt(t,0,U.min(),U.min(),U.min(),Ht.empty(),0)}static newFoundDocument(t,n,r,i){return new Pt(t,1,n,U.min(),r,i,0)}static newNoDocument(t,n){return new Pt(t,2,n,U.min(),U.min(),Ht.empty(),0)}static newUnknownDocument(t,n){return new Pt(t,3,n,U.min(),U.min(),Ht.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,n){this.position=t,this.inclusive=n}}function Pl(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=jn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sl(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ae(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,n="asc"){this.field=t,this.dir=n}}function Xv(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{}class pt extends Cd{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new $v(t,n,r):n==="array-contains"?new eE(t,r):n==="in"?new nE(t,r):n==="not-in"?new rE(t,r):n==="array-contains-any"?new iE(t,r):new pt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Zv(t,r):new tE(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jn(n,this.value)):n!==null&&an(this.value)===an(n)&&this.matchesComparison(jn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ce extends Cd{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new ce(t,n)}matches(t){return kd(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function kd(e){return e.op==="and"}function Dd(e){return Jv(e)&&kd(e)}function Jv(e){for(const t of e.filters)if(t instanceof ce)return!1;return!0}function Wo(e){if(e instanceof pt)return e.field.canonicalString()+e.op.toString()+qn(e.value);if(Dd(e))return e.filters.map(t=>Wo(t)).join(",");{const t=e.filters.map(n=>Wo(n)).join(",");return`${e.op}(${t})`}}function Od(e,t){return e instanceof pt?function(r,i){return i instanceof pt&&r.op===i.op&&r.field.isEqual(i.field)&&ae(r.value,i.value)}(e,t):e instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Od(o,i.filters[a]),!0):!1}(e,t):void M()}function Nd(e){return e instanceof pt?function(n){return`${n.field.canonicalString()} ${n.op} ${qn(n.value)}`}(e):e instanceof ce?function(n){return n.op.toString()+" {"+n.getFilters().map(Nd).join(" ,")+"}"}(e):"Filter"}class $v extends pt{constructor(t,n,r){super(t,n,r),this.key=N.fromName(r.referenceValue)}matches(t){const n=N.comparator(t.key,this.key);return this.matchesComparison(n)}}class Zv extends pt{constructor(t,n){super(t,"in",n),this.keys=Vd("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class tE extends pt{constructor(t,n){super(t,"not-in",n),this.keys=Vd("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Vd(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class eE extends pt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Wa(n)&&Br(n.arrayValue,this.value)}}class nE extends pt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Br(this.value.arrayValue,n)}}class rE extends pt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Br(this.value.arrayValue,n)}}class iE extends pt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Wa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Br(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Cl(e,t=null,n=[],r=[],i=null,s=null,o=null){return new sE(e,t,n,r,i,s,o)}function Ka(e){const t=B(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Wo(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>qn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>qn(r)).join(",")),t.he=n}return t.he}function Ga(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Xv(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Od(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Sl(e.startAt,t.startAt)&&Sl(e.endAt,t.endAt)}function Ko(e){return N.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function oE(e,t,n,r,i,s,o,a){return new Ls(e,t,n,r,i,s,o,a)}function Qa(e){return new Ls(e)}function kl(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function aE(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function cE(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function lE(e){return e.collectionGroup!==null}function Tr(e){const t=B(e);if(t.Pe===null){t.Pe=[];const n=cE(t),r=aE(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Er(n)),t.Pe.push(new Er(St.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Er(St.keyField(),s))}}}return t.Pe}function ie(e){const t=B(e);return t.Ie||(t.Ie=uE(t,Tr(e))),t.Ie}function uE(e,t){if(e.limitType==="F")return Cl(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Er(i.field,s)});const n=e.endAt?new ts(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ts(e.startAt.position,e.startAt.inclusive):null;return Cl(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Go(e,t,n){return new Ls(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ms(e,t){return Ga(ie(e),ie(t))&&e.limitType===t.limitType}function Ld(e){return`${Ka(ie(e))}|lt:${e.limitType}`}function En(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Nd(i)).join(", ")}]`),Vs(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qn(i)).join(",")),`Target(${r})`}(ie(e))}; limitType=${e.limitType})`}function xs(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Tr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=Pl(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Tr(r),i)||r.endAt&&!function(o,a,c){const l=Pl(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Tr(r),i))}(e,t)}function hE(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Md(e){return(t,n)=>{let r=!1;for(const i of Tr(e)){const s=dE(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dE(e,t,n){const r=e.field.isKeyField()?N.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?jn(c,l):M()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){tr(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return bd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=new rt(N.comparator);function Ee(){return fE}const xd=new rt(N.comparator);function pr(...e){let t=xd;for(const n of e)t=t.insert(n.key,n);return t}function Ud(e){let t=xd;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ye(){return wr()}function Fd(){return wr()}function wr(){return new er(e=>e.toString(),(e,t)=>e.isEqual(t))}const pE=new rt(N.comparator),mE=new Dt(N.comparator);function j(...e){let t=mE;for(const n of e)t=t.add(n);return t}const gE=new Dt(K);function _E(){return gE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zi(t)?"-0":t}}function jd(e){return{integerValue:""+e}}function yE(e,t){return Kv(t)?jd(t):Bd(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this._=void 0}}function vE(e,t,n){return e instanceof es?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&za(s)&&(s=Ha(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof jr?zd(e,t):e instanceof qr?Hd(e,t):function(i,s){const o=qd(i,s),a=Dl(o)+Dl(i.Te);return Ho(o)&&Ho(i.Te)?jd(a):Bd(i.serializer,a)}(e,t)}function EE(e,t,n){return e instanceof jr?zd(e,t):e instanceof qr?Hd(e,t):n}function qd(e,t){return e instanceof ns?function(r){return Ho(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class es extends Us{}class jr extends Us{constructor(t){super(),this.elements=t}}function zd(e,t){const n=Wd(t);for(const r of e.elements)n.some(i=>ae(i,r))||n.push(r);return{arrayValue:{values:n}}}class qr extends Us{constructor(t){super(),this.elements=t}}function Hd(e,t){let n=Wd(t);for(const r of e.elements)n=n.filter(i=>!ae(i,r));return{arrayValue:{values:n}}}class ns extends Us{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Dl(e){return ut(e.integerValue||e.doubleValue)}function Wd(e){return Wa(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function TE(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof jr&&i instanceof jr||r instanceof qr&&i instanceof qr?Bn(r.elements,i.elements,ae):r instanceof ns&&i instanceof ns?ae(r.Te,i.Te):r instanceof es&&i instanceof es}(e.transform,t.transform)}class wE{constructor(t,n){this.version=t,this.transformResults=n}}class ge{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ge}static exists(t){return new ge(void 0,t)}static updateTime(t){return new ge(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Di(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Fs{}function Kd(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Qd(e.key,ge.none()):new ci(e.key,e.data,ge.none());{const n=e.data,r=Ht.empty();let i=new Dt(St.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mn(e.key,r,new Yt(i.toArray()),ge.none())}}function IE(e,t,n){e instanceof ci?function(i,s,o){const a=i.value.clone(),c=Nl(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof mn?function(i,s,o){if(!Di(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Nl(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Gd(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ir(e,t,n,r){return e instanceof ci?function(s,o,a,c){if(!Di(s.precondition,o))return a;const l=s.value.clone(),u=Vl(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof mn?function(s,o,a,c){if(!Di(s.precondition,o))return a;const l=Vl(s.fieldTransforms,c,o),u=o.data;return u.setAll(Gd(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Di(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function AE(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=qd(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function Ol(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bn(r,i,(s,o)=>TE(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ci extends Fs{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mn extends Fs{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Gd(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Nl(e,t,n){const r=new Map;Z(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,EE(o,a,n[i]))}return r}function Vl(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vE(s,o,t))}return r}class Qd extends Fs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RE extends Fs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&IE(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ir(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ir(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Fd();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Kd(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),j())}isEqual(t){return this.batchId===t.batchId&&Bn(this.mutations,t.mutations,(n,r)=>Ol(n,r))&&Bn(this.baseMutations,t.baseMutations,(n,r)=>Ol(n,r))}}class Ya{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Z(t.mutations.length===r.length);let i=function(){return pE}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ya(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,H;function CE(e){switch(e){default:return M();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Yd(e){if(e===void 0)return ve("GRPC error has no .code"),E.UNKNOWN;switch(e){case lt.OK:return E.OK;case lt.CANCELLED:return E.CANCELLED;case lt.UNKNOWN:return E.UNKNOWN;case lt.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case lt.INTERNAL:return E.INTERNAL;case lt.UNAVAILABLE:return E.UNAVAILABLE;case lt.UNAUTHENTICATED:return E.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case lt.NOT_FOUND:return E.NOT_FOUND;case lt.ALREADY_EXISTS:return E.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return E.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case lt.ABORTED:return E.ABORTED;case lt.OUT_OF_RANGE:return E.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return E.UNIMPLEMENTED;case lt.DATA_LOSS:return E.DATA_LOSS;default:return M()}}(H=lt||(lt={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Sn([4294967295,4294967295],0);function Ll(e){const t=kE().encode(e),n=new Dv;return n.update(t),new Uint8Array(n.digest())}function Ml(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Sn([n,r],0),new Sn([i,s],0)]}class Xa{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mr(`Invalid padding: ${n}`);if(r<0)throw new mr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new mr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new mr(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=Sn.fromNumber(this.Ae)}Ve(t,n,r){let i=t.add(n.multiply(Sn.fromNumber(r)));return i.compare(DE)===1&&(i=new Sn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=Ll(t),[r,i]=Ml(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Xa(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=Ll(t),[r,i]=Ml(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,li.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Bs(U.min(),i,new rt(K),Ee(),j())}}class li{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new li(r,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,n,r,i){this.ge=t,this.removedTargetIds=n,this.key=r,this.pe=i}}class Xd{constructor(t,n){this.targetId=t,this.ye=n}}class Jd{constructor(t,n,r=Nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xl{constructor(){this.we=0,this.Se=Fl(),this.be=Nt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(t){t.approximateByteSize()>0&&(this.Ce=!0,this.be=t)}xe(){let t=j(),n=j(),r=j();return this.Se.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new li(this.be,this.De,t,n,r)}Oe(){this.Ce=!1,this.Se=Fl()}Ne(t,n){this.Ce=!0,this.Se=this.Se.insert(t,n)}Be(t){this.Ce=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class OE{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Ee(),this.Ue=Ul(),this.We=new rt(K)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const r=this.Je(n);switch(t.state){case 0:this.Ye(n)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(t.resumeToken));break;default:M()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(t){const n=t.targetId,r=t.ye.count,i=this.et(n);if(i){const s=i.target;if(Ko(s))if(r===0){const o=new N(s.path);this.je(n,o,Pt.newNoDocument(o,U.min()))}else Z(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(t),c=a?this.rt(a,t,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=on(r).toUint8Array()}catch(c){if(c instanceof Pd)return Fn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Xa(o,i,s)}catch(c){return Fn(c instanceof mr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(t,n,r){return n.ye.count===r-this.ot(t,n.targetId)?0:2}ot(t,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(t){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Ko(a.target)){const c=new N(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Pt.newNoDocument(c,t))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=j();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(t));const i=new Bs(t,n,this.We,this.$e,r);return this.$e=Ee(),this.Ue=Ul(),this.We=new rt(K),i}ze(t,n){if(!this.Ye(t))return;const r=this.ut(t,n.key)?2:0;this.Je(t).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}je(t,n,r){if(!this.Ye(t))return;const i=this.Je(t);this.ut(t,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new xl,this.Ke.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new Dt(K),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||C("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.ve?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new xl),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}ut(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function Ul(){return new rt(N.comparator)}function Fl(){return new rt(N.comparator)}const NE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LE=(()=>({and:"AND",or:"OR"}))();class ME{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Qo(e,t){return e.useProto3Json||Vs(t)?t:{value:t}}function rs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $d(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function xE(e,t){return rs(e,t.toTimestamp())}function se(e){return Z(!!e),U.fromTimestamp(function(n){const r=Me(n);return new mt(r.seconds,r.nanos)}(e))}function Ja(e,t){return function(r){return new tt(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Zd(e){const t=tt.fromString(e);return Z(rf(t)),t}function Yo(e,t){return Ja(e.databaseId,t.path)}function ho(e,t){const n=Zd(t);if(n.get(1)!==e.databaseId.projectId)throw new O(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new O(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new N(tf(n))}function Xo(e,t){return Ja(e.databaseId,t)}function UE(e){const t=Zd(e);return t.length===4?tt.emptyPath():tf(t)}function Jo(e){return new tt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tf(e){return Z(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Bl(e,t,n){return{name:Yo(e,t),fields:n.value.mapValue.fields}}function FE(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Z(u===void 0||typeof u=="string"),Nt.fromBase64String(u||"")):(Z(u===void 0||u instanceof Uint8Array),Nt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:Yd(l.code);return new O(u,l.message||"")}(o);n=new Jd(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ho(e,r.document.name),s=se(r.document.updateTime),o=r.document.createTime?se(r.document.createTime):U.min(),a=new Ht({mapValue:{fields:r.document.fields}}),c=Pt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Oi(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ho(e,r.document),s=r.readTime?se(r.readTime):U.min(),o=Pt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ho(e,r.document),s=r.removedTargetIds||[];n=new Oi([],s,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SE(i,s),a=r.targetId;n=new Xd(a,o)}}return n}function BE(e,t){let n;if(t instanceof ci)n={update:Bl(e,t.key,t.value)};else if(t instanceof Qd)n={delete:Yo(e,t.key)};else if(t instanceof mn)n={update:Bl(e,t.key,t.data),updateMask:YE(t.fieldMask)};else{if(!(t instanceof RE))return M();n={verify:Yo(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof es)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof jr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ns)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw M()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(e,t.precondition)),n}function jE(e,t){return e&&e.length>0?(Z(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?se(i.updateTime):se(s);return o.isEqual(U.min())&&(o=se(s)),new wE(o,i.transformResults||[])}(n,t))):[]}function qE(e,t){return{documents:[Xo(e,t.path)]}}function zE(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Xo(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xo(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return nf(ce.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Tn(h.field),direction:KE(h.dir)}}(l))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Qo(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function HE(e){let t=UE(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Z(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=ef(h);return d instanceof ce&&Dd(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Er(wn(m.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Vs(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new ts(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new ts(f,d)}(n.endAt)),oE(t,i,o,s,a,"F",c,l)}function WE(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ef(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wn(n.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wn(n.unaryFilter.field);return pt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wn(n.unaryFilter.field);return pt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wn(n.unaryFilter.field);return pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(e):e.fieldFilter!==void 0?function(n){return pt.create(wn(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ce.create(n.compositeFilter.filters.map(r=>ef(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(n.compositeFilter.op))}(e):M()}function KE(e){return NE[e]}function GE(e){return VE[e]}function QE(e){return LE[e]}function Tn(e){return{fieldPath:e.canonicalString()}}function wn(e){return St.fromServerFormat(e.fieldPath)}function nf(e){return e instanceof pt?function(n){if(n.op==="=="){if(bl(n.value))return{unaryFilter:{field:Tn(n.field),op:"IS_NAN"}};if(Rl(n.value))return{unaryFilter:{field:Tn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bl(n.value))return{unaryFilter:{field:Tn(n.field),op:"IS_NOT_NAN"}};if(Rl(n.value))return{unaryFilter:{field:Tn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(n.field),op:GE(n.op),value:n.value}}}(e):e instanceof ce?function(n){const r=n.getFilters().map(i=>nf(i));return r.length===1?r[0]:{compositeFilter:{op:QE(n.op),filters:r}}}(e):M()}function YE(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rf(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,n,r,i,s=U.min(),o=U.min(),a=Nt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new ke(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new ke(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t){this.ht=t}}function JE(e){const t=HE({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Go(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.an=new ZE}addToCollectionParentIndex(t,n){return this.an.add(n),v.resolve()}getCollectionParents(t,n){return v.resolve(this.an.getEntries(n))}addFieldIndex(t,n){return v.resolve()}deleteFieldIndex(t,n){return v.resolve()}deleteAllFieldIndexes(t){return v.resolve()}createTargetIndexes(t,n){return v.resolve()}getDocumentsMatchingTarget(t,n){return v.resolve(null)}getIndexType(t,n){return v.resolve(0)}getFieldIndexes(t,n){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,n){return v.resolve(Le.min())}getMinOffsetFromCollectionGroup(t,n){return v.resolve(Le.min())}updateCollectionGroup(t,n,r){return v.resolve()}updateIndexEntries(t,n){return v.resolve()}}class ZE{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Dt(tt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Dt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new zn(0)}static Ln(){return new zn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.changes=new er(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Pt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Ir(r.mutation,i,Yt.empty(),mt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,n,r=j()){const i=Ye();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=pr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ye();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,j()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Ee();const o=wr(),a=function(){return wr()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof mn)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ir(u.mutation,l,u.mutation.getFieldMask(),mt.now())):o.set(l.key,Yt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new eT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=wr();let i=new rt((o,a)=>o-a),s=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Yt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||j()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Fd();u.forEach(d=>{if(!s.has(d)){const f=Kd(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):lE(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):v.resolve(Ye());let a=-1,c=s;return o.next(l=>v.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?v.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,j())).next(u=>({batchId:a,changes:Ud(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new N(n)).next(r=>{let i=pr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=pr();return this.indexManager.getCollectionParents(t,s).next(a=>v.forEach(a,c=>{const l=function(h,d){return new Ls(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Pt.newInvalidDocument(u)))});let a=pr();return o.forEach((c,l)=>{const u=s.get(c);u!==void 0&&Ir(u.mutation,l,Yt.empty(),mt.now()),xs(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,n){return v.resolve(this.lr.get(n))}saveBundleMetadata(t,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:se(i.createTime)}}(n)),v.resolve()}getNamedQuery(t,n){return v.resolve(this.hr.get(n))}saveNamedQuery(t,n){return this.hr.set(n.name,function(i){return{name:i.name,query:JE(i.bundledQuery),readTime:se(i.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.overlays=new rt(N.comparator),this.Pr=new Map}getOverlay(t,n){return v.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ye();return v.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.It(t,n,s)}),v.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),v.resolve()}getOverlaysForCollection(t,n,r){const i=Ye(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return v.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new rt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=Ye(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ye(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return v.resolve(a)}It(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PE(n,r));let s=this.Pr.get(n);s===void 0&&(s=j(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.Ir=new Dt(_t.dr),this.Tr=new Dt(_t.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,n){const r=new _t(t,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Rr(new _t(t,n))}Vr(t,n){t.forEach(r=>this.removeReference(r,n))}mr(t){const n=new N(new tt([])),r=new _t(n,t),i=new _t(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const n=new N(new tt([])),r=new _t(n,t),i=new _t(n,t+1);let s=j();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new _t(t,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,n){this.key=t,this.yr=n}static dr(t,n){return N.comparator(t.key,n.key)||K(t.yr,n.yr)}static Er(t,n){return K(t.yr,n.yr)||N.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Dt(_t.dr)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bE(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(t,n){return v.resolve(this.br(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Dt(K);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),v.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new _t(new N(s),0);let a=new Dt(K);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.yr)),!0)},o),v.resolve(this.Cr(a))}Cr(t){const n=[];return t.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Z(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return v.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Sr=r})}xn(t){}containsKey(t,n){const r=new _t(n,0),i=this.Sr.firstAfterOrEqual(r);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}vr(t,n){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const n=this.Dr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(t){this.Fr=t,this.docs=function(){return new rt(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(t,n){let r=Ee();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),v.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Ee();const o=n.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||zv(qv(u),r)<=0||(i.has(u.key)||xs(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(t,n,r,i){M()}Mr(t,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new aT(this)}getSize(t){return v.resolve(this.size)}}class aT extends tT{constructor(t){super(),this.ur=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(t,i)):this.ur.removeEntry(r)}),v.waitFor(n)}getFromCache(t,n){return this.ur.getEntry(t,n)}getAllFromCache(t,n){return this.ur.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(t){this.persistence=t,this.Or=new er(n=>Ka(n),Ga),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Nr=0,this.Br=new $a,this.targetCount=0,this.Lr=zn.Bn()}forEachTarget(t,n){return this.Or.forEach((r,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),v.resolve()}Qn(t){this.Or.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new zn(n),this.highestTargetId=n),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,n){return this.Qn(n),this.targetCount+=1,v.resolve()}updateTargetData(t,n){return this.Qn(n),v.resolve()}removeTargetData(t,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,n){const r=this.Or.get(n)||null;return v.resolve(r)}addMatchingKeys(t,n,r){return this.Br.Ar(n,r),v.resolve()}removeMatchingKeys(t,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Br.mr(n),v.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Br.pr(n);return v.resolve(r)}containsKey(t,n){return v.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(t,n){this.kr={},this.overlays={},this.qr=new qa(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new cT(this),this.indexManager=new $E,this.remoteDocumentCache=function(i){return new oT(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new XE(n),this.Ur=new rT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new iT,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.kr[t.toKey()];return r||(r=new sT(n,this.referenceDelegate),this.kr[t.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,n,r){C("MemoryPersistence","Starting transaction:",t);const i=new uT(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(t,n){return v.or(Object.values(this.kr).map(r=>()=>r.containsKey(t,n)))}}class uT extends Wv{constructor(t){super(),this.currentSequenceNumber=t}}class Za{constructor(t){this.persistence=t,this.jr=new $a,this.Hr=null}static Jr(t){return new Za(t)}get Yr(){if(this.Hr)return this.Hr;throw M()}addReference(t,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),v.resolve()}removeReference(t,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(t,n){return this.Yr.add(n.toString()),v.resolve()}removeTarget(t,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Wr(){this.Hr=new Set}Gr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Yr,r=>{const i=N.fromPath(r);return this.Zr(t,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.Hr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Zr(t,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(t){return 0}Zr(t,n){return v.or([()=>v.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.zr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(t,n){let r=j(),i=j();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tc(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(t,n){this.ji=t,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.Hi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new hT;return this.Yi(t,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(t,n,o,a.size)})}).next(()=>s.result)}Zi(t,n,r,i){return r.documentReadCount<this.Gi?(ar()<=q.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",En(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),v.resolve()):(ar()<=q.DEBUG&&C("QueryEngine","Query:",En(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(ar()<=q.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",En(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ie(n))):v.resolve())}Hi(t,n){if(kl(n))return v.resolve(null);let r=ie(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Go(n,null,"F"),r=ie(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=j(...s);return this.ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(t,Go(n,null,"F")):this.ts(t,l,n,c)}))})))}Ji(t,n,r,i){return kl(n)||i.isEqual(U.min())?v.resolve(null):this.ji.getDocuments(t,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?v.resolve(null):(ar()<=q.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),En(n)),this.ts(t,o,n,jv(i,-1)).next(a=>a))})}Xi(t,n){let r=new Dt(Md(t));return n.forEach((i,s)=>{xs(t,s)&&(r=r.add(s))}),r}es(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(t,n,r){return ar()<=q.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",En(n)),this.ji.getDocumentsMatchingQuery(t,n,Le.min(),r)}ts(t,n,r,i){return this.ji.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(t,n,r,i){this.persistence=t,this.ns=n,this.serializer=i,this.rs=new rt(K),this.ss=new er(s=>Ka(s),Ga),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(r)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nT(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.rs))}}function pT(e,t,n,r){return new fT(e,t,n,r)}async function sf(e,t){const n=B(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=j();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function mT(e,t){const n=B(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=v.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(c,m)).next(_=>{const p=l.docVersions.get(m);Z(p!==null),_.version.compareTo(p)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=j();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function of(e){const t=B(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Kr.getLastRemoteSnapshotVersion(n))}function gT(e,t){const n=B(e),r=t.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];t.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Nt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(_,p,g){return _.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,u)&&a.push(n.Kr.updateTargetData(s,f))});let c=Ee(),l=j();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(_T(s,o,t.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(U.min())){const u=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.rs=i,s))}function _T(e,t,n){let r=j(),i=j();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Ee();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(U.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:i}})}function yT(e,t){const n=B(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function vT(e,t){const n=B(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,t).next(s=>s?(i=s,v.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new ke(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(t,r.targetId)),r})}async function $o(e,t,n){const r=B(e),i=r.rs.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ai(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.rs=r.rs.remove(t),r.ss.delete(i.target)}function jl(e,t,n){const r=B(e);let i=U.min(),s=j();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=B(c),d=h.ss.get(u);return d!==void 0?v.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,ie(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,t,n?i:U.min(),n?s:j())).next(a=>(ET(r,hE(t),a),{documents:a,Ps:s})))}function ET(e,t,n){let r=e.os.get(t)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.os.set(t,r)}class ql{constructor(){this.activeTargetIds=_E()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class TT{constructor(){this.ro=new ql,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,n,r){this.io[t]=n}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new ql,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{so(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi=null;function fo(){return wi===null?wi=function(){return 268435456+Math.round(2147483648*Math.random())}():wi++,"0x"+wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class RT extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=fo(),c=this.Do(n,r);C("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,s,o),this.vo(n,c,l,i).then(u=>(C("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Fn("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=IT[n];return`${this.po}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,i){const s=fo();return new Promise((o,a)=>{const c=new kv;c.setWithCredentials(!0),c.listenOnce(Sv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case uo.NO_ERROR:const u=c.getResponseJson();C(Rt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case uo.TIMEOUT:C(Rt,`RPC '${t}' ${s} timed out`),a(new O(E.DEADLINE_EXCEEDED,"Request time out"));break;case uo.HTTP_ERROR:const h=c.getStatus();if(C(Rt,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(g)>=0?g:E.UNKNOWN}(f.status);a(new O(m,f.message))}else a(new O(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new O(E.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{C(Rt,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);C(Rt,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}Mo(t,n,r){const i=fo(),s=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=bv(),a=Pv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");C(Rt,`Creating RPC '${t}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const m=new AT({ho:p=>{f?C(Rt,`Not sending because RPC '${t}' stream ${i} is closed:`,p):(d||(C(Rt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),C(Rt,`RPC '${t}' stream ${i} sending:`,p),h.send(p))},Po:()=>h.close()}),_=(p,g,y)=>{p.listen(g,T=>{try{y(T)}catch(R){setTimeout(()=>{throw R},0)}})};return _(h,vi.EventType.OPEN,()=>{f||C(Rt,`RPC '${t}' stream ${i} transport opened.`)}),_(h,vi.EventType.CLOSE,()=>{f||(f=!0,C(Rt,`RPC '${t}' stream ${i} transport closed`),m.mo())}),_(h,vi.EventType.ERROR,p=>{f||(f=!0,Fn(Rt,`RPC '${t}' stream ${i} transport errored:`,p),m.mo(new O(E.UNAVAILABLE,"The operation could not be completed")))}),_(h,vi.EventType.MESSAGE,p=>{var g;if(!f){const y=p.data[0];Z(!!y);const T=y,R=T.error||((g=T[0])===null||g===void 0?void 0:g.error);if(R){C(Rt,`RPC '${t}' stream ${i} received error:`,R);const A=R.status;let S=function(D){const z=lt[D];if(z!==void 0)return Yd(z)}(A),k=R.message;S===void 0&&(S=E.INTERNAL,k="Unknown error status: "+A+" with message "+R.message),f=!0,m.mo(new O(S,k)),h.close()}else C(Rt,`RPC '${t}' stream ${i} received:`,y),m.fo(y)}}),_(a,Cv.STAT_EVENT,p=>{p.stat===El.PROXY?C(Rt,`RPC '${t}' stream ${i} detected buffering proxy`):p.stat===El.NOPROXY&&C(Rt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Vo()},0),m}}function po(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(e){return new ME(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n,r=1e3,i=1.5,s=6e4){this._i=t,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,n,r,i,s,o,a,c){this._i=t,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new af(t,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,t!==4?this.Ho.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(ve(n.toString()),ve("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{t(()=>{const i=new O(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(t,n){const r=this.o_(this.Go);this.stream=this.u_(t,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}o_(t){return n=>{this._i.enqueueAndForget(()=>this.Go===t?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bT extends cf{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(t,n){return this.connection.Mo("Listen",t,n)}onMessage(t){this.Ho.reset();const n=FE(this.serializer,t),r=function(s){if(!("targetChange"in s))return U.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?se(o.readTime):U.min()}(t);return this.listener.c_(n,r)}l_(t){const n={};n.database=Jo(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Ko(c)?{documents:qE(s,c)}:{query:zE(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$d(s,o.resumeToken);const l=Qo(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=rs(s,o.snapshotVersion.toTimestamp());const l=Qo(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=WE(this.serializer,t);r&&(n.labels=r),this.n_(n)}h_(t){const n={};n.database=Jo(this.serializer),n.removeTarget=t,this.n_(n)}}class PT extends cf{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,n){return this.connection.Mo("Write",t,n)}onMessage(t){if(Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.P_){this.Ho.reset();const n=jE(t.writeResults,t.commitTime),r=se(t.commitTime);return this.listener.T_(r,n)}return Z(!t.writeResults||t.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const t={};t.database=Jo(this.serializer),this.n_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>BE(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new O(E.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(E.UNKNOWN,i.toString())})}Fo(t,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(E.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class CT{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(t){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline")))}set(t){this.D_(),this.f_=0,t==="Online"&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(ve(n),this.p_=!1):C("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{gn(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=B(c);l.F_.add(4),await ui(l),l.O_.set("Unknown"),l.F_.delete(4),await qs(l)}(this))})}),this.O_=new CT(r,i)}}async function qs(e){if(gn(e))for(const t of e.M_)await t(!0)}async function ui(e){for(const t of e.M_)await t(!1)}function lf(e,t){const n=B(e);n.v_.has(t.targetId)||(n.v_.set(t.targetId,t),rc(n)?nc(n):nr(n).Yo()&&ec(n,t))}function uf(e,t){const n=B(e),r=nr(n);n.v_.delete(t),r.Yo()&&hf(n,t),n.v_.size===0&&(r.Yo()?r.e_():gn(n)&&n.O_.set("Unknown"))}function ec(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}nr(e).l_(t)}function hf(e,t){e.N_.Le(t),nr(e).h_(t)}function nc(e){e.N_=new OE({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),nr(e).start(),e.O_.y_()}function rc(e){return gn(e)&&!nr(e).Jo()&&e.v_.size>0}function gn(e){return B(e).F_.size===0}function df(e){e.N_=void 0}async function DT(e){e.v_.forEach((t,n)=>{ec(e,t)})}async function OT(e,t){df(e),rc(e)?(e.O_.b_(t),nc(e)):e.O_.set("Unknown")}async function NT(e,t,n){if(e.O_.set("Online"),t instanceof Jd&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(e,t)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await is(e,r)}else if(t instanceof Oi?e.N_.Ge(t):t instanceof Xd?e.N_.Xe(t):e.N_.He(t),!n.isEqual(U.min()))try{const r=await of(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.v_.get(l);u&&s.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.v_.get(c);if(!u)return;s.v_.set(c,u.withResumeToken(Nt.EMPTY_BYTE_STRING,u.snapshotVersion)),hf(s,c);const h=new ke(u.target,c,l,u.sequenceNumber);ec(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await is(e,r)}}async function is(e,t,n){if(!ai(t))throw t;e.F_.add(1),await ui(e),e.O_.set("Offline"),n||(n=()=>of(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await qs(e)})}function ff(e,t){return t().catch(n=>is(e,n,t))}async function zs(e){const t=B(e),n=xe(t);let r=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;VT(t);)try{const i=await yT(t.localStore,r);if(i===null){t.C_.length===0&&n.e_();break}r=i.batchId,LT(t,i)}catch(i){await is(t,i)}pf(t)&&mf(t)}function VT(e){return gn(e)&&e.C_.length<10}function LT(e,t){e.C_.push(t);const n=xe(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function pf(e){return gn(e)&&!xe(e).Jo()&&e.C_.length>0}function mf(e){xe(e).start()}async function MT(e){xe(e).A_()}async function xT(e){const t=xe(e);for(const n of e.C_)t.d_(n.mutations)}async function UT(e,t,n){const r=e.C_.shift(),i=Ya.from(r,t,n);await ff(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await zs(e)}async function FT(e,t){t&&xe(e).I_&&await async function(r,i){if(function(o){return CE(o)&&o!==E.ABORTED}(i.code)){const s=r.C_.shift();xe(r).Xo(),await ff(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zs(r)}}(e,t),pf(e)&&mf(e)}async function Hl(e,t){const n=B(e);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=gn(n);n.F_.add(3),await ui(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.F_.delete(3),await qs(n)}async function BT(e,t){const n=B(e);t?(n.F_.delete(2),await qs(n)):t||(n.F_.add(2),await ui(n),n.O_.set("Unknown"))}function nr(e){return e.B_||(e.B_=function(n,r,i){const s=B(n);return s.V_(),new bT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Io:DT.bind(null,e),Eo:OT.bind(null,e),c_:NT.bind(null,e)}),e.M_.push(async t=>{t?(e.B_.Xo(),rc(e)?nc(e):e.O_.set("Unknown")):(await e.B_.stop(),df(e))})),e.B_}function xe(e){return e.L_||(e.L_=function(n,r,i){const s=B(n);return s.V_(),new PT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Io:MT.bind(null,e),Eo:FT.bind(null,e),E_:xT.bind(null,e),T_:UT.bind(null,e)}),e.M_.push(async t=>{t?(e.L_.Xo(),await zs(e)):(await e.L_.stop(),e.C_.length>0&&(C("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new ic(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sc(e,t){if(ve("AsyncQueue",`${t}: ${e}`),ai(e))return new O(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.comparator=t?(n,r)=>t(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=pr(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new Cn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Cn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Cn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.k_=new rt(N.comparator)}track(t){const n=t.doc.key,r=this.k_.get(n);r?t.type!==0&&r.type===3?this.k_=this.k_.insert(n,t):t.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.k_=this.k_.remove(n):t.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:t.doc}):M():this.k_=this.k_.insert(n,t)}q_(){const t=[];return this.k_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Hn{constructor(t,n,r,i,s,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hn(t,n,Cn.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.Q_=void 0,this.listeners=[]}}class qT{constructor(){this.queries=new er(t=>Ld(t),Ms),this.onlineState="Unknown",this.K_=new Set}}async function zT(e,t){const n=B(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jT),i)try{s.Q_=await n.onListen(r)}catch(o){const a=sc(o,`Initialization of query '${En(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.U_(n.onlineState),s.Q_&&t.W_(s.Q_)&&oc(n)}async function HT(e,t){const n=B(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function WT(e,t){const n=B(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&oc(n)}function KT(e,t,n){const r=B(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function oc(e){e.K_.forEach(t=>{t.next()})}class GT{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Hn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Hn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.key=t}}class _f{constructor(t){this.key=t}}class QT{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=j(),this.mutatedKeys=j(),this.ua=Md(t),this.ca=new Cn(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new Wl,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const d=i.get(u),f=xs(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let p=!1;d&&f?d.data.isEqual(f.data)?m!==_&&(r.track({type:3,doc:f}),p=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),p=!0,(c&&this.ua(f,c)>0||l&&this.ua(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),p=!0):d&&!f&&(r.track({type:1,doc:d}),p=!0,(c||l)&&(a=!0)),p&&(f?(o=o.add(f),s=_?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const s=t.Pa.q_();s.sort((l,u)=>function(d,f){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return m(d)-m(f)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,s.length!==0||c?{snapshot:new Hn(this.query,t.ca,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Wl,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}da(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ta(){if(!this.current)return[];const t=this.aa;this.aa=j(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new _f(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new gf(r))}),n}Ra(t){this.oa=t.Ps,this.aa=j();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Hn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class YT{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class XT{constructor(t){this.key=t,this.ma=!1}}class JT{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new er(a=>Ld(a),Ms),this.pa=new Map,this.ya=new Set,this.wa=new rt(N.comparator),this.Sa=new Map,this.ba=new $a,this.Da={},this.Ca=new Map,this.va=zn.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function $T(e,t){const n=cw(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await vT(n.localStore,ie(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ZT(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&lf(n.remoteStore,o)}return i}async function ZT(e,t,n,r,i){e.Ma=(h,d,f)=>async function(_,p,g,y){let T=p.view.ha(g);T.es&&(T=await jl(_.localStore,p.query,!1).then(({documents:S})=>p.view.ha(S,T)));const R=y&&y.targetChanges.get(p.targetId),A=p.view.applyChanges(T,_.isPrimaryClient,R);return Gl(_,p.targetId,A.Ea),A.snapshot}(e,h,d,f);const s=await jl(e.localStore,t,!0),o=new QT(t,s.Ps),a=o.ha(s.documents),c=li.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,c);Gl(e,n,l.Ea);const u=new YT(t,n,o);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),l.snapshot}async function tw(e,t){const n=B(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Ms(s,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $o(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),uf(n.remoteStore,r.targetId),Zo(n,r.targetId)}).catch(oi)):(Zo(n,r.targetId),await $o(n.localStore,r.targetId,!0))}async function ew(e,t,n){const r=lw(e);try{const i=await function(o,a){const c=B(o),l=mt.now(),u=a.reduce((f,m)=>f.add(m.key),j());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Ee(),_=j();return c._s.getEntries(f,u).next(p=>{m=p,m.forEach((g,y)=>{y.isValidDocument()||(_=_.add(g))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,m)).next(p=>{h=p;const g=[];for(const y of a){const T=AE(y,h.get(y.key).overlayedDocument);T!=null&&g.push(new mn(y.key,T,Sd(T.value.mapValue),ge.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,g,a)}).next(p=>{d=p;const g=p.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(f,p.batchId,g)})}).then(()=>({batchId:d.batchId,changes:Ud(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new rt(K)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,i.batchId,n),await hi(r,i.changes),await zs(r.remoteStore)}catch(i){const s=sc(i,"Failed to persist write");n.reject(s)}}async function yf(e,t){const n=B(e);try{const r=await gT(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?Z(o.ma):i.removedDocuments.size>0&&(Z(o.ma),o.ma=!1))}),await hi(n,r,t)}catch(r){await oi(r)}}function Kl(e,t,n){const r=B(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=B(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&oc(c)}(r.eventManager,t),i.length&&r.fa.c_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function nw(e,t,n){const r=B(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new rt(N.comparator);o=o.insert(s,Pt.newNoDocument(s,U.min()));const a=j().add(s),c=new Bs(U.min(),new Map,new rt(K),o,a);await yf(r,c),r.wa=r.wa.remove(s),r.Sa.delete(t),ac(r)}else await $o(r.localStore,t,!1).then(()=>Zo(r,t,n)).catch(oi)}async function rw(e,t){const n=B(e),r=t.batch.batchId;try{const i=await mT(n.localStore,t);Ef(n,r,null),vf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hi(n,i)}catch(i){await oi(i)}}async function iw(e,t,n){const r=B(e);try{const i=await function(o,a){const c=B(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Z(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);Ef(r,t,n),vf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await hi(r,i)}catch(i){await oi(i)}}function vf(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function Ef(e,t,n){const r=B(e);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function Zo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(r=>{e.ba.containsKey(r)||Tf(e,r)})}function Tf(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(uf(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),ac(e))}function Gl(e,t,n){for(const r of n)r instanceof gf?(e.ba.addReference(r.key,t),sw(e,r)):r instanceof _f?(C("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Tf(e,r.key)):M()}function sw(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(C("SyncEngine","New document in limbo: "+n),e.ya.add(r),ac(e))}function ac(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new N(tt.fromString(t)),r=e.va.next();e.Sa.set(r,new XT(n)),e.wa=e.wa.insert(n,r),lf(e.remoteStore,new ke(ie(Qa(n.path)),r,"TargetPurposeLimboResolution",qa.ae))}}async function hi(e,t,n){const r=B(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=tc.$i(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.fa.c_(i),await async function(c,l){const u=B(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(l,d=>v.forEach(d.Qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>v.forEach(d.Ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ai(h))throw h;C("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.rs.get(d),m=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(m);u.rs=u.rs.insert(d,_)}}}(r.localStore,s))}async function ow(e,t){const n=B(e);if(!n.currentUser.isEqual(t)){C("SyncEngine","User change. New user:",t.toKey());const r=await sf(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new O(E.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await hi(n,r.cs)}}function aw(e,t){const n=B(e),r=n.Sa.get(t);if(r&&r.ma)return j().add(r.key);{let i=j();const s=n.pa.get(t);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function cw(e){const t=B(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=yf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=aw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nw.bind(null,t),t.fa.c_=WT.bind(null,t.eventManager),t.fa.xa=KT.bind(null,t.eventManager),t}function lw(e){const t=B(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=iw.bind(null,t),t}class Ql{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=js(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return pT(this.persistence,new dT,t.initialUser,this.serializer)}createPersistence(t){return new lT(Za.Jr,this.serializer)}createSharedClientState(t){return new TT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uw{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ow.bind(null,this.syncEngine),await BT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new qT}()}createDatastore(t){const n=js(t.databaseInfo.databaseId),r=function(s){return new RT(s)}(t.databaseInfo);return function(s,o,a,c){return new ST(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new kT(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Kl(this.syncEngine,n,0),function(){return zl.C()?new zl:new wT}())}createSyncEngine(t,n){return function(i,s,o,a,c,l,u){const h=new JT(i,s,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=B(n);C("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await ui(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):ve("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=Rd.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=sc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function mo(e,t){e.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sf(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Yl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await pw(e);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Hl(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Hl(t.remoteStore,s)),e._onlineComponents=t}function fw(e){return e.name==="FirebaseError"?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function pw(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await mo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!fw(n))throw n;Fn("Error using user provided cache. Falling back to memory cache: "+n),await mo(e,new Ql)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await mo(e,new Ql);return e._offlineComponents}async function wf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Yl(e,e._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Yl(e,new uw))),e._onlineComponents}function mw(e){return wf(e).then(t=>t.syncEngine)}async function Xl(e){const t=await wf(e),n=t.eventManager;return n.onListen=$T.bind(null,t.syncEngine),n.onUnlisten=tw.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(e,t,n){if(!n)throw new O(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gw(e,t,n,r){if(t===!0&&r===!0)throw new O(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $l(e){if(!N.isDocumentKey(e))throw new O(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Zl(e){if(N.isDocumentKey(e))throw new O(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function cc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":M()}function kn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new O(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cc(e);throw new O(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=If((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hs{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ov;switch(r.type){case"firstParty":return new Mv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jl.get(n);r&&(C("ComponentProvider","Removing Datastore"),Jl.delete(n),r.terminate())}(this),Promise.resolve()}}function _w(e,t,n,r={}){var i;const s=(e=kn(e,Hs))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=bt.MOCK_USER;else{a=Fu(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new O(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new bt(l)}e._authCredentials=new Nv(new Ad(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ws(this.firestore,t,this._query)}}class Bt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class Ne extends Ws{constructor(t,n,r){super(t,n,Qa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new N(t))}withConverter(t){return new Ne(this.firestore,t,this._path)}}function yw(e,t,...n){if(e=yt(e),Af("collection","path",t),e instanceof Hs){const r=tt.fromString(t,...n);return Zl(r),new Ne(e,null,r)}{if(!(e instanceof Bt||e instanceof Ne))throw new O(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(tt.fromString(t,...n));return Zl(r),new Ne(e.firestore,null,r)}}function wA(e,t,...n){if(e=yt(e),arguments.length===1&&(t=Rd.V()),Af("doc","path",t),e instanceof Hs){const r=tt.fromString(t,...n);return $l(r),new Bt(e,null,new N(r))}{if(!(e instanceof Bt||e instanceof Ne))throw new O(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(tt.fromString(t,...n));return $l(r),new Bt(e.firestore,e instanceof Ne?e.converter:null,new N(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new af(this,"async_queue_retry"),this.ou=()=>{const n=po();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const t=po();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const n=po();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const n=new Ze;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!ai(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const n=this.Za.then(()=>(this.ru=!0,t().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ve("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(t,n,r){this._u(),this.su.indexOf(t)>-1&&(n=0);const i=ic.createAndSchedule(this,t,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&M()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const n of this.tu)if(n.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const n=this.tu.indexOf(t);this.tu.splice(n,1)}}function eu(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class ss extends Hs{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new vw}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bf(this),this._firestoreClient.terminate()}}function Ew(e,t){const n=typeof e=="object"?e:ca(),r=typeof e=="string"?e:t||"(default)",i=fs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Mu("firestore");s&&_w(i,...s)}return i}function Rf(e){return e._firestoreClient||bf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function bf(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,l,u){return new Qv(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,If(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new dw(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wn(Nt.fromBase64String(t))}catch(n){throw new O(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Wn(Nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new O(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new O(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new O(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=/^__.*__$/;class ww{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new mn(t,this.data,this.fieldMask,n,this.fieldTransforms):new ci(t,this.data,n,this.fieldTransforms)}}function Sf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class hc{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new hc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Eu({path:r,Ru:!1});return i.Vu(t),i}mu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(t){return this.Eu({path:void 0,Ru:!0})}gu(t){return os(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(t.length===0)throw this.gu("Document fields must not be empty");if(Sf(this.Tu)&&Tw.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}class Iw{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||js(t)}wu(t,n,r,i=!1){return new hc({Tu:t,methodName:n,yu:r,path:St.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Aw(e){const t=e._freezeSettings(),n=js(e._databaseId);return new Iw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Rw(e,t,n,r,i,s={}){const o=e.wu(s.merge||s.mergeFields?2:0,t,n,i);Of("Data must be an object, but it was:",o,r);const a=kf(r,o);let c,l;if(s.merge)c=new Yt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=bw(t,h,n);if(!o.contains(d))throw new O(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Sw(u,d)||u.push(d)}c=new Yt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ww(new Ht(a),c,l)}function Cf(e,t){if(Df(e=yt(e)))return Of("Unsupported field value:",t,e),kf(e,t);if(e instanceof Pf)return function(r,i){if(!Sf(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&t.Tu!==4)throw t.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Cf(a,i.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=mt.fromDate(r);return{timestampValue:rs(i.serializer,s)}}if(r instanceof mt){const s=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rs(i.serializer,s)}}if(r instanceof uc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:$d(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ja(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${cc(r)}`)}(e,t)}function kf(e,t){const n={};return bd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tr(e,(r,i)=>{const s=Cf(i,t.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Df(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof mt||e instanceof uc||e instanceof Wn||e instanceof Bt||e instanceof Pf)}function Of(e,t,n){if(!Df(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=cc(n);throw r==="an object"?t.gu(e+" a custom object"):t.gu(e+" "+r)}}function bw(e,t,n){if((t=yt(t))instanceof lc)return t._internalPath;if(typeof t=="string")return Nf(e,t);throw os("Field path arguments must be of type string or ",e,!1,void 0,n)}const Pw=new RegExp("[~\\*/\\[\\]]");function Nf(e,t,n){if(t.search(Pw)>=0)throw os(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new lc(...t.split("."))._internalPath}catch{throw os(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function os(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new O(E.INVALID_ARGUMENT,a+e+c)}function Sw(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Lf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cw extends Vf{data(){return super.data()}}function Lf(e,t){return typeof t=="string"?Nf(e,t):t instanceof lc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new O(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dw{convertValue(t,n="none"){switch(an(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(on(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw M()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return tr(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new uc(ut(t.latitude),ut(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ha(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ur(t));default:return null}}convertTimestamp(t){const n=Me(t);return new mt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=tt.fromString(t);Z(rf(r));const i=new Fr(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||ve(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Mf extends Vf{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ni(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Lf("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ni extends Mf{data(t={}){return super.data(t)}}class Nw{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new gr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ni(this._firestore,this._userDataWriter,r.key,r,new gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Ni(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Ni(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Vw(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Vw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class xf extends Dw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function IA(e,t,n){e=kn(e,Bt);const r=kn(e.firestore,ss),i=Ow(e.converter,t,n);return Mw(r,[Rw(Aw(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,ge.none())])}function Lw(e,...t){var n,r,i;e=yt(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||eu(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(eu(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(e instanceof Bt)l=kn(e.firestore,ss),u=Qa(e._key.path),c={next:h=>{t[o]&&t[o](xw(l,e,h))},error:t[o+1],complete:t[o+2]};else{const h=kn(e,Ws);l=kn(h.firestore,ss),u=h._query;const d=new xf(l);c={next:f=>{t[o]&&t[o](new Nw(l,d,h,f))},error:t[o+1],complete:t[o+2]},kw(e._query)}return function(d,f,m,_){const p=new hw(_),g=new GT(f,p,m);return d.asyncQueue.enqueueAndForget(async()=>zT(await Xl(d),g)),()=>{p.La(),d.asyncQueue.enqueueAndForget(async()=>HT(await Xl(d),g))}}(Rf(l),u,a,c)}function Mw(e,t){return function(r,i){const s=new Ze;return r.asyncQueue.enqueueAndForget(async()=>ew(await mw(r),i,s)),s.promise}(Rf(e),t)}function xw(e,t,n){const r=n.docs.get(t._key),i=new xf(e);return new Mf(e,i,t._key,r,new gr(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){Zn=i})(hn),nn(new Ve("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ss(new Vv(r.getProvider("auth-internal")),new Uv(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new O(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ee(Tl,"4.2.0",t),ee(Tl,"4.2.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="firebasestorage.googleapis.com",Ff="storageBucket",Uw=2*60*1e3,Fw=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends ue{constructor(t,n,r=0){super(go(t),`Firebase Storage: ${n} (${go(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return go(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function go(e){return"storage/"+e}function dc(){const e="An unknown error occurred, please check the error payload for server response.";return new at(ot.UNKNOWN,e)}function Bw(e){return new at(ot.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function jw(e){return new at(ot.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qw(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new at(ot.UNAUTHENTICATED,e)}function zw(){return new at(ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Hw(e){return new at(ot.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Ww(){return new at(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Kw(){return new at(ot.CANCELED,"User canceled the upload/download.")}function Gw(e){return new at(ot.INVALID_URL,"Invalid URL '"+e+"'.")}function Qw(e){return new at(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Yw(){return new at(ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ff+"' property when initializing the app?")}function Xw(){return new at(ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Jw(){return new at(ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $w(e){return new at(ot.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ta(e){return new at(ot.INVALID_ARGUMENT,e)}function Bf(){return new at(ot.APP_DELETED,"The Firebase app was deleted.")}function Zw(e){return new at(ot.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ar(e,t){return new at(ot.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function cr(e){throw new at(ot.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Ft.makeFromUrl(t,n)}catch{return new Ft(t,"")}if(r.path==="")return r;throw Qw(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===Uf?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${p}`,"i"),T=[{regex:a,indices:c,postModify:s},{regex:f,indices:m,postModify:l},{regex:g,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<T.length;R++){const A=T[R],S=A.regex.exec(t);if(S){const k=S[A.indices.bucket];let F=S[A.indices.path];F||(F=""),r=new Ft(k,F),A.postModify(r);break}}if(r==null)throw Gw(t);return r}}class tI{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...p){l||(l=!0,t.apply(null,p))}function h(p){i=setTimeout(()=>{i=null,e(f,c())},p)}function d(){s&&clearTimeout(s)}function f(p,...g){if(l){d();return}if(p){d(),u.call(null,p,...g);return}if(c()||o){d(),u.call(null,p,...g);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,h(T)}let m=!1;function _(p){m||(m=!0,d(),!l&&(i!==null?(p||(a=2),clearTimeout(i),h(0)):p||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function nI(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(e){return e!==void 0}function iI(e){return typeof e=="object"&&!Array.isArray(e)}function fc(e){return typeof e=="string"||e instanceof String}function nu(e){return pc()&&e instanceof Blob}function pc(){return typeof Blob<"u"&&!Xp()}function ru(e,t,n,r){if(r<t)throw ta(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw ta(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function jf(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(tn||(tn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(t,n,r,i,s,o,a,c,l,u,h,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Ii(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===tn.NO_ERROR,c=s.getStatus();if(!a||sI(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===tn.ABORT;r(!1,new Ii(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Ii(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());rI(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=dc();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Bf():Kw();o(c)}else{const c=Ww();o(c)}};this.canceled_?n(!1,new Ii(!1,null,!0)):this.backoffId_=eI(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&nI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ii{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function aI(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function cI(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function lI(e,t){t&&(e["X-Firebase-GMPID"]=t)}function uI(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function hI(e,t,n,r,i,s,o=!0){const a=jf(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return lI(l,t),aI(l,n),cI(l,s),uI(l,r),new oI(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fI(...e){const t=dI();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(pc())return new Blob(e);throw new at(ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pI(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(e){if(typeof atob>"u")throw $w("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _o{constructor(t,n){this.data=t,this.contentType=n||null}}function gI(e,t){switch(e){case te.RAW:return new _o(qf(t));case te.BASE64:case te.BASE64URL:return new _o(zf(e,t));case te.DATA_URL:return new _o(yI(t),vI(t))}throw dc()}function qf(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function _I(e){let t;try{t=decodeURIComponent(e)}catch{throw Ar(te.DATA_URL,"Malformed data URL.")}return qf(t)}function zf(e,t){switch(e){case te.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw Ar(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case te.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw Ar(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mI(t)}catch(i){throw i.message.includes("polyfill")?i:Ar(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Hf{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Ar(te.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=EI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function yI(e){const t=new Hf(e);return t.base64?zf(te.BASE64,t.rest):_I(t.rest)}function vI(e){return new Hf(e).contentType}function EI(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,n){let r=0,i="";nu(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(nu(this.data_)){const r=this.data_,i=pI(r,t,n);return i===null?null:new Ce(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Ce(r,!0)}}static getBlob(...t){if(pc()){const n=t.map(r=>r instanceof Ce?r.data_:r);return new Ce(fI.apply(null,n))}else{const n=t.map(o=>fc(o)?gI(te.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ce(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e){let t;try{t=JSON.parse(e)}catch{return null}return iI(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function wI(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Kf(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(e,t){return t}class Vt{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||II}}let Ai=null;function AI(e){return!fc(e)||e.length<2?e:Kf(e)}function Gf(){if(Ai)return Ai;const e=[];e.push(new Vt("bucket")),e.push(new Vt("generation")),e.push(new Vt("metageneration")),e.push(new Vt("name","fullPath",!0));function t(s,o){return AI(o)}const n=new Vt("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Vt("size");return i.xform=r,e.push(i),e.push(new Vt("timeCreated")),e.push(new Vt("updated")),e.push(new Vt("md5Hash",null,!0)),e.push(new Vt("cacheControl",null,!0)),e.push(new Vt("contentDisposition",null,!0)),e.push(new Vt("contentEncoding",null,!0)),e.push(new Vt("contentLanguage",null,!0)),e.push(new Vt("contentType",null,!0)),e.push(new Vt("metadata","customMetadata",!0)),Ai=e,Ai}function RI(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Ft(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function bI(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return RI(r,e),r}function Qf(e,t,n){const r=Wf(t);return r===null?null:bI(e,r,n)}function PI(e,t,n,r){const i=Wf(t);if(i===null||!fc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const u=e.bucket,h=e.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=mc(d,n,r),m=jf({alt:"media",token:l});return f+m})[0]}function SI(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class Yf{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(e){if(!e)throw dc()}function CI(e,t){function n(r,i){const s=Qf(e,i,t);return Xf(s!==null),s}return n}function kI(e,t){function n(r,i){const s=Qf(e,i,t);return Xf(s!==null),PI(s,i,e.host,e._protocol)}return n}function Jf(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=zw():i=qw():n.getStatus()===402?i=jw(e.bucket):n.getStatus()===403?i=Hw(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function DI(e){const t=Jf(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=Bw(e.path)),s.serverResponse=i.serverResponse,s}return n}function OI(e,t,n){const r=t.fullServerUrl(),i=mc(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Yf(i,s,kI(e,n),o);return a.errorHandler=DI(t),a}function NI(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function VI(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=NI(null,t)),r}function LI(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let R=0;R<2;R++)T=T+Math.random().toString().slice(2);return T}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=VI(t,r,i),u=SI(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Ce.getBlob(h,r,d);if(f===null)throw Xw();const m={name:l.fullPath},_=mc(s,e.host,e._protocol),p="POST",g=e.maxUploadRetryTime,y=new Yf(_,p,CI(e,n),g);return y.urlParams=m,y.headers=o,y.body=f.uploadData(),y.errorHandler=Jf(t),y}class MI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=tn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=tn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=tn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw cr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw cr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class xI extends MI{initXhr(){this.xhr_.responseType="text"}}function $f(){return new xI}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,n){this._service=t,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new cn(t,n)}get root(){const t=new Ft(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kf(this._location.path)}get storage(){return this._service}get parent(){const t=TI(this._location.path);if(t===null)return null;const n=new Ft(this._location.bucket,t);return new cn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Zw(t)}}function UI(e,t,n){e._throwIfRoot("uploadBytes");const r=LI(e.storage,e._location,Gf(),new Ce(t,!0),n);return e.storage.makeRequestWithTokens(r,$f).then(i=>({metadata:i,ref:e}))}function FI(e){e._throwIfRoot("getDownloadURL");const t=OI(e.storage,e._location,Gf());return e.storage.makeRequestWithTokens(t,$f).then(n=>{if(n===null)throw Jw();return n})}function BI(e,t){const n=wI(e._location.path,t),r=new Ft(e._location.bucket,n);return new cn(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(e){return/^[A-Za-z]+:\/\//.test(e)}function qI(e,t){return new cn(e,t)}function Zf(e,t){if(e instanceof gc){const n=e;if(n._bucket==null)throw Yw();const r=new cn(n,n._bucket);return t!=null?Zf(r,t):r}else return t!==void 0?BI(e,t):e}function zI(e,t){if(t&&jI(t)){if(e instanceof gc)return qI(e,t);throw ta("To use ref(service, url), the first argument must be a Storage instance.")}else return Zf(e,t)}function iu(e,t){const n=t==null?void 0:t[Ff];return n==null?null:Ft.makeFromBucketSpec(n,e)}function HI(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Fu(i,e.app.options.projectId))}class gc{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Uf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Uw,this._maxUploadRetryTime=Fw,this._requests=new Set,i!=null?this._bucket=Ft.makeFromBucketSpec(i,this._host):this._bucket=iu(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,t):this._bucket=iu(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ru("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ru("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new cn(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new tI(Bf());{const o=hI(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const su="@firebase/storage",ou="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="storage";function AA(e,t,n){return e=yt(e),UI(e,t,n)}function RA(e){return e=yt(e),FI(e)}function bA(e,t){return e=yt(e),zI(e,t)}function WI(e=ca(),t){e=yt(e);const r=fs(e,tp).getImmediate({identifier:t}),i=Mu("storage");return i&&KI(r,...i),r}function KI(e,t,n,r={}){HI(e,t,n,r)}function GI(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new gc(n,r,i,t,hn)}function QI(){nn(new Ve(tp,GI,"PUBLIC").setMultipleInstances(!0)),ee(su,ou,""),ee(su,ou,"esm2017")}QI();const YI={apiKey:"AIzaSyBToaieUDWOUkoGP989Mm2ND-jY0-3MSPw",authDomain:"recipe-archive-v2.firebaseapp.com",projectId:"recipe-archive-v2",storageBucket:"recipe-archive-v2.appspot.com",messagingSenderId:"86838221971",appId:"1:86838221971:web:8b532e5759898b9a904166",measurementId:"G-1B4TH0CQCS"},ep=qu(YI),yo=Iy(ep),PA=new de,XI=Ew(ep),SA=WI(),vo=un(),lr=un(),Ue=Math.min,Ut=Math.max,as=Math.round,Ri=Math.floor,Fe=e=>({x:e,y:e}),JI={left:"right",right:"left",bottom:"top",top:"bottom"},$I={start:"end",end:"start"};function ea(e,t,n){return Ut(e,Ue(t,n))}function rr(e,t){return typeof e=="function"?e(t):e}function Be(e){return e.split("-")[0]}function ir(e){return e.split("-")[1]}function np(e){return e==="x"?"y":"x"}function _c(e){return e==="y"?"height":"width"}function di(e){return["top","bottom"].includes(Be(e))?"y":"x"}function yc(e){return np(di(e))}function ZI(e,t,n){n===void 0&&(n=!1);const r=ir(e),i=yc(e),s=_c(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=cs(o)),[o,cs(o)]}function t0(e){const t=cs(e);return[na(e),t,na(t)]}function na(e){return e.replace(/start|end/g,t=>$I[t])}function e0(e,t,n){const r=["left","right"],i=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:r:t?r:i;case"left":case"right":return t?s:o;default:return[]}}function n0(e,t,n,r){const i=ir(e);let s=e0(Be(e),n==="start",r);return i&&(s=s.map(o=>o+"-"+i),t&&(s=s.concat(s.map(na)))),s}function cs(e){return e.replace(/left|right|bottom|top/g,t=>JI[t])}function r0(e){return{top:0,right:0,bottom:0,left:0,...e}}function rp(e){return typeof e!="number"?r0(e):{top:e,right:e,bottom:e,left:e}}function ls(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function au(e,t,n){let{reference:r,floating:i}=e;const s=di(t),o=yc(t),a=_c(o),c=Be(t),l=s==="y",u=r.x+r.width/2-i.width/2,h=r.y+r.height/2-i.height/2,d=r[a]/2-i[a]/2;let f;switch(c){case"top":f={x:u,y:r.y-i.height};break;case"bottom":f={x:u,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:h};break;case"left":f={x:r.x-i.width,y:h};break;default:f={x:r.x,y:r.y}}switch(ir(t)){case"start":f[o]-=d*(n&&l?-1:1);break;case"end":f[o]+=d*(n&&l?-1:1);break}return f}const i0=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t));let l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:h}=au(l,r,c),d=r,f={},m=0;for(let _=0;_<a.length;_++){const{name:p,fn:g}=a[_],{x:y,y:T,data:R,reset:A}=await g({x:u,y:h,initialPlacement:r,placement:d,strategy:i,middlewareData:f,rects:l,platform:o,elements:{reference:e,floating:t}});if(u=y??u,h=T??h,f={...f,[p]:{...f[p],...R}},A&&m<=50){m++,typeof A=="object"&&(A.placement&&(d=A.placement),A.rects&&(l=A.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):A.rects),{x:u,y:h}=au(l,d,c)),_=-1;continue}}return{x:u,y:h,placement:d,strategy:i,middlewareData:f}};async function vc(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:o,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:d=!1,padding:f=0}=rr(t,e),m=rp(f),p=a[d?h==="floating"?"reference":"floating":h],g=ls(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(p)))==null||n?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:l,rootBoundary:u,strategy:c})),y=h==="floating"?{...o.floating,x:r,y:i}:o.reference,T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),R=await(s.isElement==null?void 0:s.isElement(T))?await(s.getScale==null?void 0:s.getScale(T))||{x:1,y:1}:{x:1,y:1},A=ls(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:T,strategy:c}):y);return{top:(g.top-A.top+m.top)/R.y,bottom:(A.bottom-g.bottom+m.bottom)/R.y,left:(g.left-A.left+m.left)/R.x,right:(A.right-g.right+m.right)/R.x}}const s0=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:s,platform:o,elements:a,middlewareData:c}=t,{element:l,padding:u=0}=rr(e,t)||{};if(l==null)return{};const h=rp(u),d={x:n,y:r},f=yc(i),m=_c(f),_=await o.getDimensions(l),p=f==="y",g=p?"top":"left",y=p?"bottom":"right",T=p?"clientHeight":"clientWidth",R=s.reference[m]+s.reference[f]-d[f]-s.floating[m],A=d[f]-s.reference[f],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l));let k=S?S[T]:0;(!k||!await(o.isElement==null?void 0:o.isElement(S)))&&(k=a.floating[T]||s.floating[m]);const F=R/2-A/2,D=k/2-_[m]/2-1,z=Ue(h[g],D),ct=Ue(h[y],D),W=z,et=k-_[m]-ct,G=k/2-_[m]/2+F,ht=ea(W,G,et),dt=!c.arrow&&ir(i)!=null&&G!=ht&&s.reference[m]/2-(G<W?z:ct)-_[m]/2<0,gt=dt?G<W?G-W:G-et:0;return{[f]:d[f]+gt,data:{[f]:ht,centerOffset:G-ht-gt,...dt&&{alignmentOffset:gt}},reset:dt}}}),o0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:s,rects:o,initialPlacement:a,platform:c,elements:l}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:d,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:_=!0,...p}=rr(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const g=Be(i),y=Be(a)===a,T=await(c.isRTL==null?void 0:c.isRTL(l.floating)),R=d||(y||!_?[cs(a)]:t0(a));!d&&m!=="none"&&R.push(...n0(a,_,m,T));const A=[a,...R],S=await vc(t,p),k=[];let F=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&k.push(S[g]),h){const W=ZI(i,o,T);k.push(S[W[0]],S[W[1]])}if(F=[...F,{placement:i,overflows:k}],!k.every(W=>W<=0)){var D,z;const W=(((D=s.flip)==null?void 0:D.index)||0)+1,et=A[W];if(et)return{data:{index:W,overflows:F},reset:{placement:et}};let G=(z=F.filter(ht=>ht.overflows[0]<=0).sort((ht,dt)=>ht.overflows[1]-dt.overflows[1])[0])==null?void 0:z.placement;if(!G)switch(f){case"bestFit":{var ct;const ht=(ct=F.map(dt=>[dt.placement,dt.overflows.filter(gt=>gt>0).reduce((gt,Ie)=>gt+Ie,0)]).sort((dt,gt)=>dt[1]-gt[1])[0])==null?void 0:ct[0];ht&&(G=ht);break}case"initialPlacement":G=a;break}if(i!==G)return{reset:{placement:G}}}return{}}}};async function a0(e,t){const{placement:n,platform:r,elements:i}=e,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Be(n),a=ir(n),c=di(n)==="y",l=["left","top"].includes(o)?-1:1,u=s&&c?-1:1,h=rr(t,e);let{mainAxis:d,crossAxis:f,alignmentAxis:m}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return a&&typeof m=="number"&&(f=a==="end"?m*-1:m),c?{x:f*u,y:d*l}:{x:d*l,y:f*u}}const c0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await a0(t,e);return{x:n+i.x,y:r+i.y,data:i}}}},l0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:p=>{let{x:g,y}=p;return{x:g,y}}},...c}=rr(e,t),l={x:n,y:r},u=await vc(t,c),h=di(Be(i)),d=np(h);let f=l[d],m=l[h];if(s){const p=d==="y"?"top":"left",g=d==="y"?"bottom":"right",y=f+u[p],T=f-u[g];f=ea(y,f,T)}if(o){const p=h==="y"?"top":"left",g=h==="y"?"bottom":"right",y=m+u[p],T=m-u[g];m=ea(y,m,T)}const _=a.fn({...t,[d]:f,[h]:m});return{..._,data:{x:_.x-n,y:_.y-r}}}}},u0=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:i,elements:s}=t,{apply:o=()=>{},...a}=rr(e,t),c=await vc(t,a),l=Be(n),u=ir(n),h=di(n)==="y",{width:d,height:f}=r.floating;let m,_;l==="top"||l==="bottom"?(m=l,_=u===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(_=l,m=u==="end"?"top":"bottom");const p=f-c[m],g=d-c[_],y=!t.middlewareData.shift;let T=p,R=g;if(h){const S=d-c.left-c.right;R=u||y?Ue(g,S):S}else{const S=f-c.top-c.bottom;T=u||y?Ue(p,S):S}if(y&&!u){const S=Ut(c.left,0),k=Ut(c.right,0),F=Ut(c.top,0),D=Ut(c.bottom,0);h?R=d-2*(S!==0||k!==0?S+k:Ut(c.left,c.right)):T=f-2*(F!==0||D!==0?F+D:Ut(c.top,c.bottom))}await o({...t,availableWidth:R,availableHeight:T});const A=await i.getDimensions(s.floating);return d!==A.width||f!==A.height?{reset:{rects:!0}}:{}}}};function je(e){return ip(e)?(e.nodeName||"").toLowerCase():"#document"}function jt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function we(e){var t;return(t=(ip(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ip(e){return e instanceof Node||e instanceof jt(e).Node}function Te(e){return e instanceof Element||e instanceof jt(e).Element}function le(e){return e instanceof HTMLElement||e instanceof jt(e).HTMLElement}function cu(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof jt(e).ShadowRoot}function fi(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Qt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function h0(e){return["table","td","th"].includes(je(e))}function Ec(e){const t=Tc(),n=Qt(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function d0(e){let t=Kn(e);for(;le(t)&&!Ks(t);){if(Ec(t))return t;t=Kn(t)}return null}function Tc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ks(e){return["html","body","#document"].includes(je(e))}function Qt(e){return jt(e).getComputedStyle(e)}function Gs(e){return Te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Kn(e){if(je(e)==="html")return e;const t=e.assignedSlot||e.parentNode||cu(e)&&e.host||we(e);return cu(t)?t.host:t}function sp(e){const t=Kn(e);return Ks(t)?e.ownerDocument?e.ownerDocument.body:e.body:le(t)&&fi(t)?t:sp(t)}function zr(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=sp(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),o=jt(i);return s?t.concat(o,o.visualViewport||[],fi(i)?i:[],o.frameElement&&n?zr(o.frameElement):[]):t.concat(i,zr(i,[],n))}function op(e){const t=Qt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=le(e),s=i?e.offsetWidth:n,o=i?e.offsetHeight:r,a=as(n)!==s||as(r)!==o;return a&&(n=s,r=o),{width:n,height:r,$:a}}function wc(e){return Te(e)?e:e.contextElement}function Dn(e){const t=wc(e);if(!le(t))return Fe(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:s}=op(t);let o=(s?as(n.width):n.width)/r,a=(s?as(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const f0=Fe(0);function ap(e){const t=jt(e);return!Tc()||!t.visualViewport?f0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function p0(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==jt(e)?!1:t}function ln(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=wc(e);let o=Fe(1);t&&(r?Te(r)&&(o=Dn(r)):o=Dn(e));const a=p0(s,n,r)?ap(s):Fe(0);let c=(i.left+a.x)/o.x,l=(i.top+a.y)/o.y,u=i.width/o.x,h=i.height/o.y;if(s){const d=jt(s),f=r&&Te(r)?jt(r):r;let m=d.frameElement;for(;m&&r&&f!==d;){const _=Dn(m),p=m.getBoundingClientRect(),g=Qt(m),y=p.left+(m.clientLeft+parseFloat(g.paddingLeft))*_.x,T=p.top+(m.clientTop+parseFloat(g.paddingTop))*_.y;c*=_.x,l*=_.y,u*=_.x,h*=_.y,c+=y,l+=T,m=jt(m).frameElement}}return ls({width:u,height:h,x:c,y:l})}function m0(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=le(n),s=we(n);if(n===s)return t;let o={scrollLeft:0,scrollTop:0},a=Fe(1);const c=Fe(0);if((i||!i&&r!=="fixed")&&((je(n)!=="body"||fi(s))&&(o=Gs(n)),le(n))){const l=ln(n);a=Dn(n),c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-o.scrollLeft*a.x+c.x,y:t.y*a.y-o.scrollTop*a.y+c.y}}function g0(e){return Array.from(e.getClientRects())}function cp(e){return ln(we(e)).left+Gs(e).scrollLeft}function _0(e){const t=we(e),n=Gs(e),r=e.ownerDocument.body,i=Ut(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Ut(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+cp(e);const a=-n.scrollTop;return Qt(r).direction==="rtl"&&(o+=Ut(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:a}}function y0(e,t){const n=jt(e),r=we(e),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;const l=Tc();(!l||l&&t==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a,y:c}}function v0(e,t){const n=ln(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,s=le(e)?Dn(e):Fe(1),o=e.clientWidth*s.x,a=e.clientHeight*s.y,c=i*s.x,l=r*s.y;return{width:o,height:a,x:c,y:l}}function lu(e,t,n){let r;if(t==="viewport")r=y0(e,n);else if(t==="document")r=_0(we(e));else if(Te(t))r=v0(t,n);else{const i=ap(e);r={...t,x:t.x-i.x,y:t.y-i.y}}return ls(r)}function lp(e,t){const n=Kn(e);return n===t||!Te(n)||Ks(n)?!1:Qt(n).position==="fixed"||lp(n,t)}function E0(e,t){const n=t.get(e);if(n)return n;let r=zr(e,[],!1).filter(a=>Te(a)&&je(a)!=="body"),i=null;const s=Qt(e).position==="fixed";let o=s?Kn(e):e;for(;Te(o)&&!Ks(o);){const a=Qt(o),c=Ec(o);!c&&a.position==="fixed"&&(i=null),(s?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||fi(o)&&!c&&lp(e,o))?r=r.filter(u=>u!==o):i=a,o=Kn(o)}return t.set(e,r),r}function T0(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?E0(t,this._c):[].concat(n),r],a=o[0],c=o.reduce((l,u)=>{const h=lu(t,u,i);return l.top=Ut(h.top,l.top),l.right=Ue(h.right,l.right),l.bottom=Ue(h.bottom,l.bottom),l.left=Ut(h.left,l.left),l},lu(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function w0(e){return op(e)}function I0(e,t,n){const r=le(t),i=we(t),s=n==="fixed",o=ln(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const c=Fe(0);if(r||!r&&!s)if((je(t)!=="body"||fi(i))&&(a=Gs(t)),r){const l=ln(t,!0,s,t);c.x=l.x+t.clientLeft,c.y=l.y+t.clientTop}else i&&(c.x=cp(i));return{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function uu(e,t){return!le(e)||Qt(e).position==="fixed"?null:t?t(e):e.offsetParent}function up(e,t){const n=jt(e);if(!le(e))return n;let r=uu(e,t);for(;r&&h0(r)&&Qt(r).position==="static";)r=uu(r,t);return r&&(je(r)==="html"||je(r)==="body"&&Qt(r).position==="static"&&!Ec(r))?n:r||d0(e)||n}const A0=async function(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||up,s=this.getDimensions;return{reference:I0(t,await i(n),r),floating:{x:0,y:0,...await s(n)}}};function R0(e){return Qt(e).direction==="rtl"}const b0={convertOffsetParentRelativeRectToViewportRelativeRect:m0,getDocumentElement:we,getClippingRect:T0,getOffsetParent:up,getElementRects:A0,getClientRects:g0,getDimensions:w0,getScale:Dn,isElement:Te,isRTL:R0};function P0(e,t){let n=null,r;const i=we(e);function s(){clearTimeout(r),n&&n.disconnect(),n=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const{left:l,top:u,width:h,height:d}=e.getBoundingClientRect();if(a||t(),!h||!d)return;const f=Ri(u),m=Ri(i.clientWidth-(l+h)),_=Ri(i.clientHeight-(u+d)),p=Ri(l),y={rootMargin:-f+"px "+-m+"px "+-_+"px "+-p+"px",threshold:Ut(0,Ue(1,c))||1};let T=!0;function R(A){const S=A[0].intersectionRatio;if(S!==c){if(!T)return o();S?o(!1,S):r=setTimeout(()=>{o(!1,1e-7)},100)}T=!1}try{n=new IntersectionObserver(R,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,y)}n.observe(e)}return o(!0),s}function S0(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,l=wc(e),u=i||s?[...l?zr(l):[],...zr(t)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const h=l&&a?P0(l,n):null;let d=-1,f=null;o&&(f=new ResizeObserver(g=>{let[y]=g;y&&y.target===l&&f&&(f.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{f&&f.observe(t)})),n()}),l&&!c&&f.observe(l),f.observe(t));let m,_=c?ln(e):null;c&&p();function p(){const g=ln(e);_&&(g.x!==_.x||g.y!==_.y||g.width!==_.width||g.height!==_.height)&&n(),_=g,m=requestAnimationFrame(p)}return n(),()=>{u.forEach(g=>{i&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),h&&h(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(m)}}const C0=(e,t,n)=>{const r=new Map,i={platform:b0,...n},s={...i.platform,_c:r};return i0(e,t,{...i,platform:s})},hp=un(void 0);function CA(e,t){const{computePosition:n,autoUpdate:r,offset:i,shift:s,flip:o,arrow:a,size:c,autoPlacement:l,hide:u,inline:h}=Pu(hp),d={open:!1,autoUpdateCleanup:()=>{}},f=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let m;const _="https://www.skeleton.dev/utilities/popups";let p,g;function y(){p=document.querySelector(`[data-popup="${t.target}"]`)??document.createElement("div"),g=p.querySelector(".arrow")??document.createElement("div")}y();function T(){var z,ct,W,et,G,ht,dt,gt;if(!p)throw new Error(`The data-popup="${t.target}" element was not found. ${_}`);if(!n)throw new Error(`Floating UI 'computePosition' not found for data-popup="${t.target}". ${_}`);if(!i)throw new Error(`Floating UI 'offset' not found for data-popup="${t.target}". ${_}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${t.target}". ${_}`);if(!o)throw new Error(`Floating UI 'flip' not found for data-popup="${t.target}". ${_}`);if(!a)throw new Error(`Floating UI 'arrow' not found for data-popup="${t.target}". ${_}`);const D=[];c&&D.push(c((z=t.middleware)==null?void 0:z.size)),l&&D.push(l((ct=t.middleware)==null?void 0:ct.autoPlacement)),u&&D.push(u((W=t.middleware)==null?void 0:W.hide)),h&&D.push(h((et=t.middleware)==null?void 0:et.inline)),n(e,p,{placement:t.placement??"bottom",middleware:[i(((G=t.middleware)==null?void 0:G.offset)??8),s(((ht=t.middleware)==null?void 0:ht.shift)??{padding:8}),o((dt=t.middleware)==null?void 0:dt.flip),a(((gt=t.middleware)==null?void 0:gt.arrow)??{element:g||null}),...D]}).then(({x:Ie,y:he,placement:He,middlewareData:_n})=>{if(Object.assign(p.style,{left:`${Ie}px`,top:`${he}px`}),g){const{x:P,y:ft}=_n.arrow,yn={top:"bottom",right:"left",bottom:"top",left:"right"}[He.split("-")[0]];Object.assign(g.style,{left:P!=null?`${P}px`:"",top:ft!=null?`${ft}px`:"",right:"",bottom:"",[yn]:"-4px"})}})}function R(){p&&(d.open=!0,t.state&&t.state({state:d.open}),T(),p.style.display="block",p.style.opacity="1",p.style.pointerEvents="auto",p.removeAttribute("inert"),d.autoUpdateCleanup=r(e,p,T),m=Array.from(p==null?void 0:p.querySelectorAll(f)))}function A(D){if(!p)return;const z=parseFloat(window.getComputedStyle(p).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{d.open=!1,t.state&&t.state({state:d.open}),p.style.opacity="0",p.setAttribute("inert",""),d.autoUpdateCleanup&&d.autoUpdateCleanup(),D&&D()},z)}function S(){d.open===!1?R():A()}function k(D){if(d.open===!1||e.contains(D.target))return;if(p&&p.contains(D.target)===!1){A();return}const z=t.closeQuery===void 0?"a[href], button":t.closeQuery,ct=p==null?void 0:p.querySelectorAll(z);ct==null||ct.forEach(W=>{W.contains(D.target)&&A()})}const F=D=>{if(d.open===!1)return;const z=D.key;if(z==="Escape"){D.preventDefault(),e.focus(),A();return}m=Array.from(p==null?void 0:p.querySelectorAll(f)),d.open&&document.activeElement===e&&(z==="ArrowDown"||z==="Tab")&&f.length>0&&m.length>0&&(D.preventDefault(),m[0].focus())};switch(t.event){case"click":e.addEventListener("click",S,!0),window.addEventListener("click",k,!0);break;case"hover":e.addEventListener("mouseover",R,!0),e.addEventListener("mouseleave",()=>A(),!0);break;case"focus-blur":e.addEventListener("focus",S,!0),e.addEventListener("blur",()=>A(),!0);break;case"focus-click":e.addEventListener("focus",R,!0),window.addEventListener("click",k,!0);break;default:throw new Error(`Event value of '${t.event}' is not supported. ${_}`)}return window.addEventListener("keydown",F,!0),T(),{update(D){A(()=>{t=D,T(),y()})},destroy(){e.removeEventListener("click",S,!0),e.removeEventListener("mouseover",R,!0),e.removeEventListener("mouseleave",()=>A(),!0),e.removeEventListener("focus",S,!0),e.removeEventListener("focus",R,!0),e.removeEventListener("blur",()=>A(),!0),window.removeEventListener("click",k,!0),window.removeEventListener("keydown",F,!0)}}}const k0="drawerStore";function D0(){const e=O0();return ra(k0,e)}function O0(){const{subscribe:e,set:t,update:n}=un({});return{subscribe:e,set:t,update:n,open:r=>n(()=>({open:!0,...r})),close:()=>n(r=>(r.open=!1,r))}}const dp="modalStore";function N0(){const e=Su(dp);if(!e)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return e}function V0(){const e=L0();return ra(dp,e)}function L0(){const{subscribe:e,set:t,update:n}=un([]);return{subscribe:e,set:t,update:n,trigger:r=>n(i=>(i.push(r),i)),close:()=>n(r=>(r.length>0&&r.shift(),r)),clear:()=>t([])}}const M0={message:"Missing Toast Message",autohide:!0,timeout:5e3},fp="toastStore";function x0(){const e=Su(fp);if(!e)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return e}function U0(){const e=B0();return ra(fp,e)}function F0(){const e=Math.random();return Number(e).toString(32)}function B0(){const{subscribe:e,set:t,update:n}=un([]),r=s=>n(o=>{if(o.length>0){const a=o.findIndex(l=>l.id===s),c=o[a];c&&(c.callback&&c.callback({id:s,status:"closed"}),c.timeoutId&&clearTimeout(c.timeoutId),o.splice(a,1))}return o});function i(s){if(s.autohide===!0)return setTimeout(()=>{r(s.id)},s.timeout)}return{subscribe:e,close:r,trigger:s=>{const o=F0();return n(a=>{s&&s.callback&&s.callback({id:o,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const c={...M0,...s,id:o};return c.timeoutId=i(c),a.push(c),a}),o},freeze:s=>n(o=>(o.length>0&&clearTimeout(o[s].timeoutId),o)),unfreeze:s=>n(o=>(o.length>0&&(o[s].timeoutId=i(o[s])),o)),clear:()=>t([])}}function j0(){V0(),U0(),D0()}const Eo={};function hu(e){return e==="local"?localStorage:sessionStorage}function Ic(e,t,n){const r=(n==null?void 0:n.serializer)??JSON,i=(n==null?void 0:n.storage)??"local";function s(o,a){hu(i).setItem(o,r.stringify(a))}if(!Eo[e]){const o=un(t,l=>{const u=hu(i).getItem(e);u&&l(r.parse(u));{const h=d=>{d.key===e&&l(d.newValue?r.parse(d.newValue):null)};return window.addEventListener("storage",h),()=>window.removeEventListener("storage",h)}}),{subscribe:a,set:c}=o;Eo[e]={set(l){s(e,l),c(l)},update(l){const u=l(Pu(o));s(e,u),c(u)},subscribe:a}}return Eo[e]}Ic("modeOsPrefers",!1);Ic("modeUserPrefers",void 0);Ic("modeCurrent",!1);const pp="(prefers-reduced-motion: reduce)";function q0(){return window.matchMedia(pp).matches}const mp=Lp(q0(),e=>{{const t=r=>{e(r.matches)},n=window.matchMedia(pp);return n.addEventListener("change",t),()=>{n.removeEventListener("change",t)}}});function z0(e,t){const n='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let r,i;function s(h){h.shiftKey&&h.code==="Tab"&&(h.preventDefault(),i.focus())}function o(h){!h.shiftKey&&h.code==="Tab"&&(h.preventDefault(),r.focus())}const a=h=>{if(t===!1)return;const d=Array.from(e.querySelectorAll(n));d.length&&(r=d[0],i=d[d.length-1],h||r.focus(),r.addEventListener("keydown",s),i.addEventListener("keydown",o))};a(!1);function c(){r&&r.removeEventListener("keydown",s),i&&i.removeEventListener("keydown",o)}const l=(h,d)=>(h.length&&(c(),a(!0)),d),u=new MutationObserver(l);return u.observe(e,{childList:!0,subtree:!0}),{update(h){t=h,h?a(!1):c()},destroy(){c(),u.disconnect()}}}function Ac(e){const t=e-1;return t*t*t+1}function du(e,{delay:t=0,duration:n=400,easing:r=bu}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:s=>`opacity: ${s*i}`}}function us(e,{delay:t=0,duration:n=400,easing:r=Ac,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,l=a.transform==="none"?"":a.transform,u=c*(1-o),[h,d]=bc(i),[f,m]=bc(s);return{delay:t,duration:n,easing:r,css:(_,p)=>`
			transform: ${l} translate(${(1-_)*h}${d}, ${(1-_)*f}${m});
			opacity: ${c-u*p}`}}function kA(e,{delay:t=0,duration:n=400,easing:r=Ac,axis:i="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a=i==="y"?"height":"width",c=parseFloat(s[a]),l=i==="y"?["top","bottom"]:["left","right"],u=l.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),h=parseFloat(s[`padding${u[0]}`]),d=parseFloat(s[`padding${u[1]}`]),f=parseFloat(s[`margin${u[0]}`]),m=parseFloat(s[`margin${u[1]}`]),_=parseFloat(s[`border${u[0]}Width`]),p=parseFloat(s[`border${u[1]}Width`]);return{delay:t,duration:n,easing:r,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*o};${a}: ${g*c}px;padding-${l[0]}: ${g*h}px;padding-${l[1]}: ${g*d}px;margin-${l[0]}: ${g*f}px;margin-${l[1]}: ${g*m}px;border-${l[0]}-width: ${g*_}px;border-${l[1]}-width: ${g*p}px;`}}function An(e,t){const{transition:n,params:r,enabled:i}=t;return i?n(e,r):"duration"in r?n(e,{duration:0}):{duration:0}}function H0(e,{from:t,to:n},r={}){const i=getComputedStyle(e),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),l=t.top+t.height*a/n.height-(n.top+a),{delay:u=0,duration:h=f=>Math.sqrt(f)*120,easing:d=Ac}=r;return{delay:u,duration:Ip(h)?h(Math.sqrt(c*c+l*l)):h,easing:d,css:(f,m)=>{const _=m*c,p=m*l,g=f+m*t.width/n.width,y=f+m*t.height/n.height;return`transform: ${s} translate(${_}px, ${p}px) scale(${g}, ${y});`}}}function fu(e){let t=e[13],n,r,i=yu(e);return{c(){i.c(),n=oe()},l(s){i.l(s),n=oe()},m(s,o){i.m(s,o),it(s,n,o),r=!0},p(s,o){o[0]&8192&&hs(t,t=s[13])?(Gn(),xt(i,1,1,Xe),Qn(),i=yu(s),i.c(),It(i,1),i.m(n.parentNode,n)):i.p(s,o)},i(s){r||(It(i),r=!0)},o(s){xt(i),r=!1},d(s){s&&L(n),i.d(s)}}}function W0(e){var l,u;let t,n,r,i,s;const o=[(l=e[15])==null?void 0:l.props,{parent:e[16]}];var a=(u=e[15])==null?void 0:u.ref;function c(h,d){var m;let f={$$slots:{default:[G0]},$$scope:{ctx:h}};if(d!==void 0&&d[0]&98304)f=Io(o,[d[0]&32768&&Vc((m=h[15])==null?void 0:m.props),d[0]&65536&&{parent:h[16]}]);else for(let _=0;_<o.length;_+=1)f=Nn(f,o[_]);return{props:f}}return a&&(n=Sc(a,c(e))),{c(){t=J("div"),n&&Li(n.$$.fragment),this.h()},l(h){t=$(h,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var d=nt(t);n&&wo(n.$$.fragment,d),d.forEach(L),this.h()},h(){var h;b(t,"class",r="modal contents "+(((h=e[13][0])==null?void 0:h.modalClasses)??"")),b(t,"data-testid","modal-component"),b(t,"role","dialog"),b(t,"aria-modal","true"),b(t,"aria-label",i=e[13][0].title??"")},m(h,d){it(h,t,d),n&&Mi(n,t,null),s=!0},p(h,d){var f,m,_;if(d[0]&32768&&a!==(a=(f=h[15])==null?void 0:f.ref)){if(n){Gn();const p=n;xt(p.$$.fragment,1,0,()=>{xi(p,1)}),Qn()}a?(n=Sc(a,c(h,d)),Li(n.$$.fragment),It(n.$$.fragment,1),Mi(n,t,null)):n=null}else if(a){const p=d[0]&98304?Io(o,[d[0]&32768&&Vc((m=h[15])==null?void 0:m.props),d[0]&65536&&{parent:h[16]}]):{};d[0]&32768|d[1]&65536&&(p.$$scope={dirty:d,ctx:h}),n.$set(p)}(!s||d[0]&8192&&r!==(r="modal contents "+(((_=h[13][0])==null?void 0:_.modalClasses)??"")))&&b(t,"class",r),(!s||d[0]&8192&&i!==(i=h[13][0].title??""))&&b(t,"aria-label",i)},i(h){s||(n&&It(n.$$.fragment,h),s=!0)},o(h){n&&xt(n.$$.fragment,h),s=!1},d(h){h&&L(t),n&&xi(n)}}}function K0(e){var f,m,_,p;let t,n,r,i,s,o,a=((f=e[13][0])==null?void 0:f.title)&&mu(e),c=((m=e[13][0])==null?void 0:m.body)&&gu(e),l=((_=e[13][0])==null?void 0:_.image)&&typeof((p=e[13][0])==null?void 0:p.image)=="string"&&_u(e);function u(g,y){if(g[13][0].type==="alert")return X0;if(g[13][0].type==="confirm")return Y0;if(g[13][0].type==="prompt")return Q0}let h=u(e),d=h&&h(e);return{c(){t=J("div"),a&&a.c(),n=Wt(),c&&c.c(),r=Wt(),l&&l.c(),i=Wt(),d&&d.c(),this.h()},l(g){t=$(g,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var y=nt(t);a&&a.l(y),n=Kt(y),c&&c.l(y),r=Kt(y),l&&l.l(y),i=Kt(y),d&&d.l(y),y.forEach(L),this.h()},h(){b(t,"class",s="modal "+e[17]),b(t,"data-testid","modal"),b(t,"role","dialog"),b(t,"aria-modal","true"),b(t,"aria-label",o=e[13][0].title??"")},m(g,y){it(g,t,y),a&&a.m(t,null),Y(t,n),c&&c.m(t,null),Y(t,r),l&&l.m(t,null),Y(t,i),d&&d.m(t,null)},p(g,y){var T,R,A,S;(T=g[13][0])!=null&&T.title?a?a.p(g,y):(a=mu(g),a.c(),a.m(t,n)):a&&(a.d(1),a=null),(R=g[13][0])!=null&&R.body?c?c.p(g,y):(c=gu(g),c.c(),c.m(t,r)):c&&(c.d(1),c=null),(A=g[13][0])!=null&&A.image&&typeof((S=g[13][0])==null?void 0:S.image)=="string"?l?l.p(g,y):(l=_u(g),l.c(),l.m(t,i)):l&&(l.d(1),l=null),h===(h=u(g))&&d?d.p(g,y):(d&&d.d(1),d=h&&h(g),d&&(d.c(),d.m(t,null))),y[0]&131072&&s!==(s="modal "+g[17])&&b(t,"class",s),y[0]&8192&&o!==(o=g[13][0].title??"")&&b(t,"aria-label",o)},i:Xe,o:Xe,d(g){g&&L(t),a&&a.d(),c&&c.d(),l&&l.d(),d&&d.d()}}}function pu(e){var i;let t,n=((i=e[15])==null?void 0:i.slot)+"",r;return{c(){t=new Wr(!1),r=oe(),this.h()},l(s){t=Kr(s,!1),r=oe(),this.h()},h(){t.a=r},m(s,o){t.m(n,s,o),it(s,r,o)},p(s,o){var a;o[0]&32768&&n!==(n=((a=s[15])==null?void 0:a.slot)+"")&&t.p(n)},d(s){s&&(L(r),t.d())}}}function G0(e){var r;let t,n=((r=e[15])==null?void 0:r.slot)&&pu(e);return{c(){n&&n.c(),t=oe()},l(i){n&&n.l(i),t=oe()},m(i,s){n&&n.m(i,s),it(i,t,s)},p(i,s){var o;(o=i[15])!=null&&o.slot?n?n.p(i,s):(n=pu(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(i){i&&L(t),n&&n.d(i)}}}function mu(e){let t,n,r=e[13][0].title+"",i;return{c(){t=J("header"),n=new Wr(!1),this.h()},l(s){t=$(s,"HEADER",{class:!0});var o=nt(t);n=Kr(o,!1),o.forEach(L),this.h()},h(){n.a=null,b(t,"class",i="modal-header "+e[5])},m(s,o){it(s,t,o),n.m(r,t)},p(s,o){o[0]&8192&&r!==(r=s[13][0].title+"")&&n.p(r),o[0]&32&&i!==(i="modal-header "+s[5])&&b(t,"class",i)},d(s){s&&L(t)}}}function gu(e){let t,n,r=e[13][0].body+"",i;return{c(){t=J("article"),n=new Wr(!1),this.h()},l(s){t=$(s,"ARTICLE",{class:!0});var o=nt(t);n=Kr(o,!1),o.forEach(L),this.h()},h(){n.a=null,b(t,"class",i="modal-body "+e[6])},m(s,o){it(s,t,o),n.m(r,t)},p(s,o){o[0]&8192&&r!==(r=s[13][0].body+"")&&n.p(r),o[0]&64&&i!==(i="modal-body "+s[6])&&b(t,"class",i)},d(s){s&&L(t)}}}function _u(e){let t,n;return{c(){t=J("img"),this.h()},l(r){t=$(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var r;b(t,"class","modal-image "+eA),Cc(t.src,n=(r=e[13][0])==null?void 0:r.image)||b(t,"src",n),b(t,"alt","Modal")},m(r,i){it(r,t,i)},p(r,i){var s;i[0]&8192&&!Cc(t.src,n=(s=r[13][0])==null?void 0:s.image)&&b(t,"src",n)},d(r){r&&L(t)}}}function Q0(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,m,_=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},e[13][0].valueAttr],p={};for(let g=0;g<_.length;g+=1)p=Nn(p,_[g]);return{c(){t=J("form"),n=J("input"),r=Wt(),i=J("footer"),s=J("button"),o=Vn(e[0]),c=Wt(),l=J("button"),u=Vn(e[2]),this.h()},l(g){t=$(g,"FORM",{class:!0});var y=nt(t);n=$(y,"INPUT",{class:!0,name:!0,type:!0}),r=Kt(y),i=$(y,"FOOTER",{class:!0});var T=nt(i);s=$(T,"BUTTON",{type:!0,class:!0});var R=nt(s);o=Ln(R,e[0]),R.forEach(L),c=Kt(T),l=$(T,"BUTTON",{type:!0,class:!0});var A=nt(l);u=Ln(A,e[2]),A.forEach(L),T.forEach(L),y.forEach(L),this.h()},h(){kc(n,p),b(s,"type","button"),b(s,"class",a="btn "+e[3]),b(l,"type","submit"),b(l,"class",h="btn "+e[4]),b(i,"class",d="modal-footer "+e[7]),b(t,"class","space-y-4")},m(g,y){it(g,t,y),Y(t,n),n.autofocus&&n.focus(),Dc(n,e[14]),Y(t,r),Y(t,i),Y(i,s),Y(s,o),Y(i,c),Y(i,l),Y(l,u),f||(m=[Lt(n,"input",e[41]),Lt(s,"click",e[23]),Lt(t,"submit",e[25])],f=!0)},p(g,y){kc(n,p=Io(_,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},y[0]&8192&&g[13][0].valueAttr])),y[0]&16384&&n.value!==g[14]&&Dc(n,g[14]),y[0]&1&&Mn(o,g[0]),y[0]&8&&a!==(a="btn "+g[3])&&b(s,"class",a),y[0]&4&&Mn(u,g[2]),y[0]&16&&h!==(h="btn "+g[4])&&b(l,"class",h),y[0]&128&&d!==(d="modal-footer "+g[7])&&b(i,"class",d)},d(g){g&&L(t),f=!1,Hr(m)}}}function Y0(e){let t,n,r,i,s,o,a,c,l,u,h;return{c(){t=J("footer"),n=J("button"),r=Vn(e[0]),s=Wt(),o=J("button"),a=Vn(e[1]),this.h()},l(d){t=$(d,"FOOTER",{class:!0});var f=nt(t);n=$(f,"BUTTON",{type:!0,class:!0});var m=nt(n);r=Ln(m,e[0]),m.forEach(L),s=Kt(f),o=$(f,"BUTTON",{type:!0,class:!0});var _=nt(o);a=Ln(_,e[1]),_.forEach(L),f.forEach(L),this.h()},h(){b(n,"type","button"),b(n,"class",i="btn "+e[3]),b(o,"type","button"),b(o,"class",c="btn "+e[4]),b(t,"class",l="modal-footer "+e[7])},m(d,f){it(d,t,f),Y(t,n),Y(n,r),Y(t,s),Y(t,o),Y(o,a),u||(h=[Lt(n,"click",e[23]),Lt(o,"click",e[24])],u=!0)},p(d,f){f[0]&1&&Mn(r,d[0]),f[0]&8&&i!==(i="btn "+d[3])&&b(n,"class",i),f[0]&2&&Mn(a,d[1]),f[0]&16&&c!==(c="btn "+d[4])&&b(o,"class",c),f[0]&128&&l!==(l="modal-footer "+d[7])&&b(t,"class",l)},d(d){d&&L(t),u=!1,Hr(h)}}}function X0(e){let t,n,r,i,s,o,a;return{c(){t=J("footer"),n=J("button"),r=Vn(e[0]),this.h()},l(c){t=$(c,"FOOTER",{class:!0});var l=nt(t);n=$(l,"BUTTON",{type:!0,class:!0});var u=nt(n);r=Ln(u,e[0]),u.forEach(L),l.forEach(L),this.h()},h(){b(n,"type","button"),b(n,"class",i="btn "+e[3]),b(t,"class",s="modal-footer "+e[7])},m(c,l){it(c,t,l),Y(t,n),Y(n,r),o||(a=Lt(n,"click",e[23]),o=!0)},p(c,l){l[0]&1&&Mn(r,c[0]),l[0]&8&&i!==(i="btn "+c[3])&&b(n,"class",i),l[0]&128&&s!==(s="modal-footer "+c[7])&&b(t,"class",s)},d(c){c&&L(t),o=!1,a()}}}function yu(e){let t,n,r,i,s,o,a,c,l,u,h,d;const f=[K0,W0],m=[];function _(p,g){return p[13][0].type!=="component"?0:1}return r=_(e),i=m[r]=f[r](e),{c(){t=J("div"),n=J("div"),i.c(),this.h()},l(p){t=$(p,"DIV",{class:!0,"data-testid":!0});var g=nt(t);n=$(g,"DIV",{class:!0});var y=nt(n);i.l(y),y.forEach(L),g.forEach(L),this.h()},h(){b(n,"class",s="modal-transition "+e[18]),b(t,"class",c="modal-backdrop "+e[19]),b(t,"data-testid","modal-backdrop")},m(p,g){it(p,t,g),Y(t,n),m[r].m(n,null),u=!0,h||(d=[Lt(t,"mousedown",e[21]),Lt(t,"mouseup",e[22]),Lt(t,"touchstart",e[39],{passive:!0}),Lt(t,"touchend",e[40],{passive:!0}),Rp(z0.call(null,t,!0))],h=!0)},p(p,g){e=p;let y=r;r=_(e),r===y?m[r].p(e,g):(Gn(),xt(m[y],1,1,()=>{m[y]=null}),Qn(),i=m[r],i?i.p(e,g):(i=m[r]=f[r](e),i.c()),It(i,1),i.m(n,null)),(!u||g[0]&262144&&s!==(s="modal-transition "+e[18]))&&b(n,"class",s),(!u||g[0]&524288&&c!==(c="modal-backdrop "+e[19]))&&b(t,"class",c)},i(p){u||(It(i),To(()=>{u&&(a&&a.end(1),o=Cu(n,An,{transition:e[9],params:e[10],enabled:e[8]}),o.start())}),To(()=>{u&&(l||(l=Oc(t,An,{transition:du,params:{duration:150},enabled:e[8]},!0)),l.run(1))}),u=!0)},o(p){xt(i),o&&o.invalidate(),a=ku(n,An,{transition:e[11],params:e[12],enabled:e[8]}),l||(l=Oc(t,An,{transition:du,params:{duration:150},enabled:e[8]},!1)),l.run(0),u=!1},d(p){p&&L(t),m[r].d(),p&&a&&a.end(),p&&l&&l.end(),h=!1,Hr(d)}}}function J0(e){let t,n,r,i,s=e[13].length>0&&fu(e);return{c(){s&&s.c(),t=oe()},l(o){s&&s.l(o),t=oe()},m(o,a){s&&s.m(o,a),it(o,t,a),n=!0,r||(i=Lt(window,"keydown",e[26]),r=!0)},p(o,a){o[13].length>0?s?(s.p(o,a),a[0]&8192&&It(s,1)):(s=fu(o),s.c(),It(s,1),s.m(t.parentNode,t)):s&&(Gn(),xt(s,1,1,()=>{s=null}),Qn())},i(o){n||(It(s),n=!0)},o(o){xt(s),n=!1},d(o){o&&L(t),s&&s.d(o),r=!1,i()}}}const $0="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto",Z0="w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center",tA="block overflow-y-auto",eA="w-full h-auto";function nA(e,t,n){let r,i,s,o,a,c,l;On(e,mp,w=>n(43,l=w));const u=Ap();let{position:h="items-center"}=t,{components:d={}}=t,{background:f="bg-surface-100-800-token"}=t,{width:m="w-modal"}=t,{height:_="h-auto"}=t,{padding:p="p-4"}=t,{spacing:g="space-y-4"}=t,{rounded:y="rounded-container-token"}=t,{shadow:T="shadow-xl"}=t,{zIndex:R="z-[999]"}=t,{buttonNeutral:A="variant-ghost-surface"}=t,{buttonPositive:S="variant-filled"}=t,{buttonTextCancel:k="Cancel"}=t,{buttonTextConfirm:F="Confirm"}=t,{buttonTextSubmit:D="Submit"}=t,{regionBackdrop:z="bg-surface-backdrop-token"}=t,{regionHeader:ct="text-2xl font-bold"}=t,{regionBody:W="max-h-[200px] overflow-hidden"}=t,{regionFooter:et="flex justify-end space-x-2"}=t,{transitions:G=!l}=t,{transitionIn:ht=us}=t,{transitionInParams:dt={duration:150,opacity:0,x:0,y:100}}=t,{transitionOut:gt=us}=t,{transitionOutParams:Ie={duration:150,opacity:0,x:0,y:100}}=t,he;const He={buttonTextCancel:k,buttonTextConfirm:F,buttonTextSubmit:D};let _n,P=!1;const ft=N0();On(e,ft,w=>n(13,c=w)),ft.subscribe(w=>{w.length&&(w[0].type==="prompt"&&n(14,he=w[0].value),n(0,k=w[0].buttonTextCancel||He.buttonTextCancel),n(1,F=w[0].buttonTextConfirm||He.buttonTextConfirm),n(2,D=w[0].buttonTextSubmit||He.buttonTextSubmit),n(15,_n=typeof w[0].component=="string"?d[w[0].component]:w[0].component))});function yn(w){if(!(w.target instanceof Element))return;const Ae=w.target.classList;(Ae.contains("modal-backdrop")||Ae.contains("modal-transition"))&&(P=!0)}function gp(w){if(!(w.target instanceof Element))return;const Ae=w.target.classList;(Ae.contains("modal-backdrop")||Ae.contains("modal-transition"))&&P&&(c[0].response&&c[0].response(void 0),ft.close(),u("backdrop",w)),P=!1}function Qs(){c[0].response&&c[0].response(!1),ft.close()}function _p(){c[0].response&&c[0].response(!0),ft.close()}function yp(w){w.preventDefault(),c[0].response&&c[0].response(he),ft.close()}function vp(w){c.length&&w.code==="Escape"&&Qs()}function Ep(w){Pc.call(this,e,w)}function Tp(w){Pc.call(this,e,w)}function wp(){he=this.value,n(14,he)}return e.$$set=w=>{n(46,t=Nn(Nn({},t),Vi(w))),"position"in w&&n(27,h=w.position),"components"in w&&n(28,d=w.components),"background"in w&&n(29,f=w.background),"width"in w&&n(30,m=w.width),"height"in w&&n(31,_=w.height),"padding"in w&&n(32,p=w.padding),"spacing"in w&&n(33,g=w.spacing),"rounded"in w&&n(34,y=w.rounded),"shadow"in w&&n(35,T=w.shadow),"zIndex"in w&&n(36,R=w.zIndex),"buttonNeutral"in w&&n(3,A=w.buttonNeutral),"buttonPositive"in w&&n(4,S=w.buttonPositive),"buttonTextCancel"in w&&n(0,k=w.buttonTextCancel),"buttonTextConfirm"in w&&n(1,F=w.buttonTextConfirm),"buttonTextSubmit"in w&&n(2,D=w.buttonTextSubmit),"regionBackdrop"in w&&n(37,z=w.regionBackdrop),"regionHeader"in w&&n(5,ct=w.regionHeader),"regionBody"in w&&n(6,W=w.regionBody),"regionFooter"in w&&n(7,et=w.regionFooter),"transitions"in w&&n(8,G=w.transitions),"transitionIn"in w&&n(9,ht=w.transitionIn),"transitionInParams"in w&&n(10,dt=w.transitionInParams),"transitionOut"in w&&n(11,gt=w.transitionOut),"transitionOutParams"in w&&n(12,Ie=w.transitionOutParams)},e.$$.update=()=>{var w,Ae,Rc;e.$$.dirty[0]&134225920&&n(38,r=((w=c[0])==null?void 0:w.position)??h),n(19,i=`${$0} ${z} ${R} ${t.class??""} ${((Ae=c[0])==null?void 0:Ae.backdropClasses)??""}`),e.$$.dirty[1]&128&&n(18,s=`${Z0} ${r??""}`),e.$$.dirty[0]&1610620928|e.$$.dirty[1]&31&&n(17,o=`${tA} ${f} ${m} ${_} ${p} ${g} ${y} ${T} ${((Rc=c[0])==null?void 0:Rc.modalClasses)??""}`),e.$$.dirty[0]&1744830719|e.$$.dirty[1]&95&&n(16,a={position:h,background:f,width:m,height:_,padding:p,spacing:g,rounded:y,shadow:T,buttonNeutral:A,buttonPositive:S,buttonTextCancel:k,buttonTextConfirm:F,buttonTextSubmit:D,regionBackdrop:z,regionHeader:ct,regionBody:W,regionFooter:et,onClose:Qs})},t=Vi(t),[k,F,D,A,S,ct,W,et,G,ht,dt,gt,Ie,c,he,_n,a,o,s,i,ft,yn,gp,Qs,_p,yp,vp,h,d,f,m,_,p,g,y,T,R,z,r,Ep,Tp,wp]}class rA extends ia{constructor(t){super(),sa(this,t,nA,J0,hs,{position:27,components:28,background:29,width:30,height:31,padding:32,spacing:33,rounded:34,shadow:35,zIndex:36,buttonNeutral:3,buttonPositive:4,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:37,regionHeader:5,regionBody:6,regionFooter:7,transitions:8,transitionIn:9,transitionInParams:10,transitionOut:11,transitionOutParams:12},null,[-1,-1])}}function vu(e,t,n){const r=e.slice();return r[36]=t[n],r[38]=n,r}function Eu(e){let t,n,r=[],i=new Map,s,o,a,c=Nc(e[11]);const l=u=>u[36];for(let u=0;u<c.length;u+=1){let h=vu(e,c,u),d=l(h);i.set(d,r[u]=Au(d,h))}return{c(){t=J("div"),n=J("div");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){t=$(u,"DIV",{class:!0,"data-testid":!0});var h=nt(t);n=$(h,"DIV",{class:!0});var d=nt(n);for(let f=0;f<r.length;f+=1)r[f].l(d);d.forEach(L),h.forEach(L),this.h()},h(){b(n,"class",s="snackbar "+e[13]),b(t,"class",o="snackbar-wrapper "+e[14]),b(t,"data-testid","snackbar-wrapper")},m(u,h){it(u,t,h),Y(t,n);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(n,null);a=!0},p(u,h){if(h[0]&499103){c=Nc(u[11]),Gn();for(let d=0;d<r.length;d+=1)r[d].r();r=Bp(r,h,l,1,u,c,i,n,Fp,Au,null,vu);for(let d=0;d<r.length;d+=1)r[d].a();Qn()}(!a||h[0]&8192&&s!==(s="snackbar "+u[13]))&&b(n,"class",s),(!a||h[0]&16384&&o!==(o="snackbar-wrapper "+u[14]))&&b(t,"class",o)},i(u){if(!a){for(let h=0;h<c.length;h+=1)It(r[h]);a=!0}},o(u){for(let h=0;h<r.length;h+=1)xt(r[h]);a=!1},d(u){u&&L(t);for(let h=0;h<r.length;h+=1)r[h].d()}}}function Tu(e){let t,n,r=e[36].action&&wu(e),i=!e[36].hideDismiss&&Iu(e);return{c(){t=J("div"),r&&r.c(),n=Wt(),i&&i.c(),this.h()},l(s){t=$(s,"DIV",{class:!0});var o=nt(t);r&&r.l(o),n=Kt(o),i&&i.l(o),o.forEach(L),this.h()},h(){b(t,"class","toast-actions "+cA)},m(s,o){it(s,t,o),r&&r.m(t,null),Y(t,n),i&&i.m(t,null)},p(s,o){s[36].action?r?r.p(s,o):(r=wu(s),r.c(),r.m(t,n)):r&&(r.d(1),r=null),s[36].hideDismiss?i&&(i.d(1),i=null):i?i.p(s,o):(i=Iu(s),i.c(),i.m(t,null))},d(s){s&&L(t),r&&r.d(),i&&i.d()}}}function wu(e){let t,n,r=e[36].action.label+"",i,s;function o(){return e[30](e[38])}return{c(){t=J("button"),n=new Wr(!1),this.h()},l(a){t=$(a,"BUTTON",{class:!0});var c=nt(t);n=Kr(c,!1),c.forEach(L),this.h()},h(){n.a=null,b(t,"class",e[1])},m(a,c){it(a,t,c),n.m(r,t),i||(s=Lt(t,"click",o),i=!0)},p(a,c){e=a,c[0]&2048&&r!==(r=e[36].action.label+"")&&n.p(r),c[0]&2&&b(t,"class",e[1])},d(a){a&&L(t),i=!1,s()}}}function Iu(e){let t,n,r,i;function s(){return e[31](e[36])}return{c(){t=J("button"),n=Vn(e[3]),this.h()},l(o){t=$(o,"BUTTON",{class:!0,"aria-label":!0});var a=nt(t);n=Ln(a,e[3]),a.forEach(L),this.h()},h(){b(t,"class",e[2]),b(t,"aria-label","Dismiss toast")},m(o,a){it(o,t,a),Y(t,n),r||(i=Lt(t,"click",s),r=!0)},p(o,a){e=o,a[0]&8&&Mn(n,e[3]),a[0]&4&&b(t,"class",e[2])},d(o){o&&L(t),r=!1,i()}}}function Au(e,t){let n,r,i,s,o=t[36].message+"",a,c,l,u,h,d,f,m=Xe,_,p,g,y=(t[36].action||!t[36].hideDismiss)&&Tu(t);function T(){return t[32](t[38])}function R(){return t[33](t[38])}return{key:e,first:null,c(){n=J("div"),r=J("div"),i=J("div"),s=new Wr(!1),a=Wt(),y&&y.c(),l=Wt(),this.h()},l(A){n=$(A,"DIV",{role:!0,"aria-live":!0});var S=nt(n);r=$(S,"DIV",{class:!0,"data-testid":!0});var k=nt(r);i=$(k,"DIV",{class:!0});var F=nt(i);s=Kr(F,!1),F.forEach(L),a=Kt(k),y&&y.l(k),k.forEach(L),l=Kt(S),S.forEach(L),this.h()},h(){s.a=null,b(i,"class","text-base"),b(r,"class",c="toast "+t[12]+" "+(t[36].background??t[0])+" "+(t[36].classes??"")),b(r,"data-testid","toast"),b(n,"role",u=t[36].hideDismiss?"alert":"alertdialog"),b(n,"aria-live","polite"),this.first=n},m(A,S){it(A,n,S),Y(n,r),Y(r,i),s.m(o,i),Y(r,a),y&&y.m(r,null),Y(n,l),_=!0,p||(g=[Lt(n,"mouseenter",T),Lt(n,"mouseleave",R)],p=!0)},p(A,S){t=A,(!_||S[0]&2048)&&o!==(o=t[36].message+"")&&s.p(o),t[36].action||!t[36].hideDismiss?y?y.p(t,S):(y=Tu(t),y.c(),y.m(r,null)):y&&(y.d(1),y=null),(!_||S[0]&6145&&c!==(c="toast "+t[12]+" "+(t[36].background??t[0])+" "+(t[36].classes??"")))&&b(r,"class",c),(!_||S[0]&2048&&u!==(u=t[36].hideDismiss?"alert":"alertdialog"))&&b(n,"role",u)},r(){f=n.getBoundingClientRect()},f(){xp(n),m(),Du(n,f)},a(){m(),m=Mp(n,f,H0,{duration:t[4]?250:0})},i(A){_||(To(()=>{_&&(d&&d.end(1),h=Cu(n,An,{transition:t[5],params:{x:t[10].x,y:t[10].y,...t[6]},enabled:t[4]}),h.start())}),_=!0)},o(A){h&&h.invalidate(),d=ku(n,An,{transition:t[7],params:{x:t[10].x,y:t[10].y,...t[8]},enabled:t[4]}),_=!1},d(A){A&&L(n),y&&y.d(),A&&d&&d.end(),p=!1,Hr(g)}}}function iA(e){let t,n,r=e[9].length&&Eu(e);return{c(){r&&r.c(),t=oe()},l(i){r&&r.l(i),t=oe()},m(i,s){r&&r.m(i,s),it(i,t,s),n=!0},p(i,s){i[9].length?r?(r.p(i,s),s[0]&512&&It(r,1)):(r=Eu(i),r.c(),It(r,1),r.m(t.parentNode,t)):r&&(Gn(),xt(r,1,1,()=>{r=null}),Qn())},i(i){n||(It(r),n=!0)},o(i){xt(r),n=!1},d(i){i&&L(t),r&&r.d(i)}}}const sA="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",oA="flex flex-col gap-y-2",aA="flex justify-between items-center pointer-events-auto",cA="flex items-center space-x-2";function lA(e,t,n){let r,i,s,o,a,c;On(e,mp,P=>n(34,c=P));const l=x0();On(e,l,P=>n(9,a=P));let{position:u="b"}=t,{max:h=3}=t,{background:d="variant-filled-secondary"}=t,{width:f="max-w-[640px]"}=t,{color:m=""}=t,{padding:_="p-4"}=t,{spacing:p="space-x-4"}=t,{rounded:g="rounded-container-token"}=t,{shadow:y="shadow-lg"}=t,{zIndex:T="z-[888]"}=t,{buttonAction:R="btn variant-filled"}=t,{buttonDismiss:A="btn-icon btn-icon-sm variant-filled"}=t,{buttonDismissLabel:S="✕"}=t,{transitions:k=!c}=t,{transitionIn:F=us}=t,{transitionInParams:D={duration:250}}=t,{transitionOut:z=us}=t,{transitionOutParams:ct={duration:250}}=t,W,et,G={x:0,y:0};switch(u){case"t":W="justify-center items-start",et="items-center",G={x:0,y:-100};break;case"b":W="justify-center items-end",et="items-center",G={x:0,y:100};break;case"l":W="justify-start items-center",et="items-start",G={x:-100,y:0};break;case"r":W="justify-end items-center",et="items-end",G={x:100,y:0};break;case"tl":W="justify-start items-start",et="items-start",G={x:-100,y:0};break;case"tr":W="justify-end items-start",et="items-end",G={x:100,y:0};break;case"bl":W="justify-start items-end",et="items-start",G={x:-100,y:0};break;case"br":W="justify-end items-end",et="items-end",G={x:100,y:0};break}function ht(P){var ft,yn;(yn=(ft=a[P])==null?void 0:ft.action)==null||yn.response(),l.close(a[P].id)}function dt(P){var ft;(ft=a[P])!=null&&ft.hoverable&&(l.freeze(P),n(13,i+=" scale-[105%]"))}function gt(P){var ft;(ft=a[P])!=null&&ft.hoverable&&(l.unfreeze(P),n(13,i=i.replace(" scale-[105%]","")))}const Ie=P=>ht(P),he=P=>l.close(P.id),He=P=>dt(P),_n=P=>gt(P);return e.$$set=P=>{n(35,t=Nn(Nn({},t),Vi(P))),"position"in P&&n(19,u=P.position),"max"in P&&n(20,h=P.max),"background"in P&&n(0,d=P.background),"width"in P&&n(21,f=P.width),"color"in P&&n(22,m=P.color),"padding"in P&&n(23,_=P.padding),"spacing"in P&&n(24,p=P.spacing),"rounded"in P&&n(25,g=P.rounded),"shadow"in P&&n(26,y=P.shadow),"zIndex"in P&&n(27,T=P.zIndex),"buttonAction"in P&&n(1,R=P.buttonAction),"buttonDismiss"in P&&n(2,A=P.buttonDismiss),"buttonDismissLabel"in P&&n(3,S=P.buttonDismissLabel),"transitions"in P&&n(4,k=P.transitions),"transitionIn"in P&&n(5,F=P.transitionIn),"transitionInParams"in P&&n(6,D=P.transitionInParams),"transitionOut"in P&&n(7,z=P.transitionOut),"transitionOutParams"in P&&n(8,ct=P.transitionOutParams)},e.$$.update=()=>{n(14,r=`${sA} ${W} ${T} ${t.class||""}`),e.$$.dirty[0]&545259520&&n(13,i=`${oA} ${et} ${_}`),e.$$.dirty[0]&132120576&&n(12,s=`${aA} ${f} ${m} ${_} ${p} ${g} ${y}`),e.$$.dirty[0]&1049088&&n(11,o=Array.from(a).slice(0,h))},t=Vi(t),[d,R,A,S,k,F,D,z,ct,a,G,o,s,i,r,l,ht,dt,gt,u,h,f,m,_,p,g,y,T,W,et,Ie,he,He,_n]}class uA extends ia{constructor(t){super(),sa(this,t,lA,iA,hs,{position:19,max:20,background:0,width:21,color:22,padding:23,spacing:24,rounded:25,shadow:26,zIndex:27,buttonAction:1,buttonDismiss:2,buttonDismissLabel:3,transitions:4,transitionIn:5,transitionInParams:6,transitionOut:7,transitionOutParams:8},null,[-1,-1])}}const hA=e=>({user:e&4,loading:e&1}),Ru=e=>({user:e[2],loading:e[0]});function dA(e){let t,n,r,i,s,o,a;document.title=t=e[1]?e[1].name:"Recipe Box",r=new rA({}),s=new uA({});const c=e[6].default,l=bp(c,e,e[5],Ru);return{c(){n=Wt(),Li(r.$$.fragment),i=Wt(),Li(s.$$.fragment),o=Wt(),l&&l.c()},l(u){Pp("svelte-e6xlnx",document.head).forEach(L),n=Kt(u),wo(r.$$.fragment,u),i=Kt(u),wo(s.$$.fragment,u),o=Kt(u),l&&l.l(u)},m(u,h){it(u,n,h),Mi(r,u,h),it(u,i,h),Mi(s,u,h),it(u,o,h),l&&l.m(u,h),a=!0},p(u,[h]){(!a||h&2)&&t!==(t=u[1]?u[1].name:"Recipe Box")&&(document.title=t),l&&l.p&&(!a||h&37)&&Sp(l,c,u,u[5],a?kp(c,u[5],h,hA):Cp(u[5]),Ru)},i(u){a||(It(r.$$.fragment,u),It(s.$$.fragment,u),It(l,u),a=!0)},o(u){xt(r.$$.fragment,u),xt(s.$$.fragment,u),xt(l,u),a=!1},d(u){u&&(L(n),L(i),L(o)),xi(r,u),xi(s,u),l&&l.d(u)}}}function fA(e,t,n){let r,i,s;On(e,vo,d=>n(4,i=d)),On(e,lr,d=>n(2,s=d));let{$$slots:o={},$$scope:a}=t,{data:c}=t;j0(),hp.set({computePosition:C0,autoUpdate:S0,offset:c0,shift:l0,flip:o0,arrow:s0,size:u0});let l,u,h=!1;return yo.authStateReady().then(()=>{n(0,h=!1),lr.set(yo.currentUser)}),d_(yo,async d=>{d?lr.set(d):lr.set(null)}),u==null||u(),u=lr.subscribe(async d=>{if(!d){vo.set([]);return}l==null||l(),l=Lw(yw(XI,`users/${d.uid}/recipes`),f=>{console.log("recived updates");const m=f.docs.map(_=>_.data());vo.set(m)})}),e.$$set=d=>{"data"in d&&n(3,c=d.data),"$$scope"in d&&n(5,a=d.$$scope)},e.$$.update=()=>{e.$$.dirty&24&&n(1,r=i==null?void 0:i.find(d=>d.id===c.recipeId))},[h,r,s,c,i,a,o]}class DA extends ia{constructor(t){super(),sa(this,t,fA,dA,hs,{data:3})}}export{DA as L,_A as a,yA as b,yo as c,An as d,Nc as e,PA as f,Io as g,CA as h,N0 as i,RA as j,bA as k,SA as l,lr as m,x0 as n,Up as o,mp as p,IA as q,vo as r,kA as s,wA as t,Bp as u,XI as v,AA as w};
