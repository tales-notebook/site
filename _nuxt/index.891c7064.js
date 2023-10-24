import{r as S,G as X,u as Y,H as le,I as ce,J as R,K as ue,L as I,M as de,N as Z,O as fe,P as U,Q as me,R as K,i as p,g as j,S as q,T as he,U as ge,V as pe,o as g,q as k,w as M,c as y,l as _e,b as v,v as ve,W as ee,k as x,s as H,X as we,C as te,Y as xe,Z as ye,n as be,$ as $e,a as f,F as A,z as N,d as L,t as W,a0 as C,_ as ne,j as Se,a1 as Me}from"./entry.1f09f52c.js";import je from"./ContentRenderer.f590be9a.js";import{u as ze}from"./asyncData.336e171a.js";import{q as Ee}from"./query.25bf096e.js";import"./ContentRendererMarkdown.vue.d88ab191.js";import"./index.a6ef77ff.js";import"./preview.e30d0562.js";function ke(e,t){const s=S({});return X(()=>{const n=le(e),{title:i,titleTemplate:r,...a}=n;s.value={title:i,titleTemplate:r,meta:ce(a)}}),Y(s,t)}async function Oe(e,t){return await Ie(t).catch(n=>(console.error("Failed to get image meta for "+t,n+""),{width:0,height:0,ratio:0}))}async function Ie(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const n=new Image;n.onload=()=>{const i={width:n.width,height:n.height,ratio:n.width/n.height};t(i)},n.onerror=i=>s(i),n.src=e})}function V(e){return t=>t?e[t]||t:e.missingValue}function Ae({formatter:e,keyMap:t,joinWith:s="/",valueMap:n}={}){e||(e=(r,a)=>`${r}=${a}`),t&&typeof t!="function"&&(t=V(t));const i=n||{};return Object.keys(i).forEach(r=>{typeof i[r]!="function"&&(i[r]=V(i[r]))}),(r={})=>Object.entries(r).filter(([o,l])=>typeof l<"u").map(([o,l])=>{const c=i[o];return typeof c=="function"&&(l=c(r[o])),o=typeof t=="function"?t(o):o,e(o,l)}).join(s)}function b(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Ne(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const n=parseInt(s.replace("x",""));n&&t.add(n)}return Array.from(t)}function We(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function qe(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(n=>n)){const n=s.split(":");n.length!==2?t["1px"]=n[0].trim():t[n[0].trim()]=n[1].trim()}else Object.assign(t,e);return t}function He(e){const t={options:e},s=(i,r={})=>se(t,i,r),n=(i,r={},a={})=>s(i,{...a,modifiers:Z(r,a.modifiers||{})}).url;for(const i in e.presets)n[i]=(r,a,o)=>n(r,a,{...e.presets[i],...o});return n.options=e,n.getImage=s,n.getMeta=(i,r)=>Le(t,i,r),n.getSizes=(i,r)=>Be(t,i,r),t.$img=n,n}async function Le(e,t,s){const n=se(e,t,{...s});return typeof n.getMeta=="function"?await n.getMeta():await Oe(e,n.url)}function se(e,t,s){var c,d;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:n,defaults:i}=Ce(e,s.provider||e.options.provider),r=Te(e,s.preset);if(t=R(t)?t:ue(t),!n.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=I(e.options.alias[m],t.substr(m.length)));if(n.validateDomains&&R(t)){const m=de(t).host;if(!e.options.domains.find(h=>h===m))return{url:t}}const a=Z(s,r,i);a.modifiers={...a.modifiers};const o=a.modifiers.format;(c=a.modifiers)!=null&&c.width&&(a.modifiers.width=b(a.modifiers.width)),(d=a.modifiers)!=null&&d.height&&(a.modifiers.height=b(a.modifiers.height));const l=n.getImage(t,a,e);return l.format=l.format||o||"",l}function Ce(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function Te(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Be(e,t,s){var _,B,P,F,D;const n=b((_=s.modifiers)==null?void 0:_.width),i=b((B=s.modifiers)==null?void 0:B.height),r=qe(s.sizes),a=(P=s.densities)!=null&&P.trim()?Ne(s.densities.trim()):e.options.densities;We(a);const o=n&&i?i/n:0,l=[],c=[];if(Object.keys(r).length>=1){for(const w in r){const $=G(w,String(r[w]),i,o,e);if($!==void 0){l.push({size:$.size,screenMaxWidth:$.screenMaxWidth,media:`(max-width: ${$.screenMaxWidth}px)`});for(const z of a)c.push({width:$._cWidth*z,src:Q(e,t,s,$,z)})}}Pe(l)}else for(const w of a){const $=Object.keys(r)[0];let z=G($,String(r[$]),i,o,e);z===void 0&&(z={size:"",screenMaxWidth:0,_cWidth:(F=s.modifiers)==null?void 0:F.width,_cHeight:(D=s.modifiers)==null?void 0:D.height}),c.push({width:w,src:Q(e,t,s,z,w)})}Fe(c);const d=c[c.length-1],m=l.length?l.map(w=>`${w.media?w.media+" ":""}${w.size}`).join(", "):void 0,h=m?"w":"x",u=c.map(w=>`${w.src} ${w.width}${h}`).join(", ");return{sizes:m,srcset:u,src:d==null?void 0:d.src}}function G(e,t,s,n,i){const r=i.options.screens&&i.options.screens[e]||parseInt(e),a=t.endsWith("vw");if(!a&&/^\d+$/.test(t)&&(t=t+"px"),!a&&!t.endsWith("px"))return;let o=parseInt(t);if(!r||!o)return;a&&(o=Math.round(o/100*r));const l=n?Math.round(o*n):s;return{size:t,screenMaxWidth:r,_cWidth:o,_cHeight:l}}function Q(e,t,s,n,i){return e.$img(t,{...s.modifiers,width:n._cWidth?n._cWidth*i:void 0,height:n._cHeight?n._cHeight*i:void 0},s)}function Pe(e){var s;e.sort((n,i)=>n.screenMaxWidth-i.screenMaxWidth);let t=null;for(let n=e.length-1;n>=0;n--){const i=e[n];i.media===t&&e.splice(n,1),t=i.media}for(let n=0;n<e.length;n++)e[n].media=((s=e[n+1])==null?void 0:s.media)||""}function Fe(e){e.sort((s,n)=>s.width-n.width);let t=null;for(let s=e.length-1;s>=0;s--){const n=e[s];n.width===t&&e.splice(s,1),t=n.width}}const De=Ae({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>U(e)+"_"+U(t)}),Re=(e,{modifiers:t={},baseURL:s}={},n)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const i=De(t)||"_";return s||(s=I(n.options.nuxt.baseURL,"/_ipx")),{url:I(s,i,fe(e))}},Ue=!0,Ve=!0,Ge=Object.freeze(Object.defineProperty({__proto__:null,getImage:Re,supportsAlias:Ve,validateDomains:Ue},Symbol.toStringTag,{value:"Module"})),ie={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};ie.providers={ipxStatic:{provider:Ge,defaults:void 0}};const re=()=>{const e=me(),t=K();return t.$img||t._img||(t._img=He({...ie,nuxt:{baseURL:e.app.baseURL}}))},Qe={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},Je=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),s=p(()=>({width:b(e.width),height:b(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),n=re(),i=p(()=>({...e.modifiers,width:b(e.width),height:b(e.height),format:e.format,quality:e.quality||n.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:i}},Xe={...Qe,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Ye=j({name:"NuxtImg",props:Xe,emits:["load","error"],setup:(e,t)=>{const s=re(),n=Je(e),i=S(!1),r=p(()=>s.getSizes(e.src,{...n.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...n.modifiers.value,width:b(e.width),height:b(e.height)}})),a=p(()=>{const u={...n.attrs.value,"data-nuxt-img":""};return(!e.placeholder||i.value)&&(u.sizes=r.value.sizes,u.srcset=r.value.srcset),u}),o=p(()=>{let u=e.placeholder;if(u===""&&(u=!0),!u||i.value)return!1;if(typeof u=="string")return u;const _=Array.isArray(u)?u:typeof u=="number"?[u,u]:[10,10];return s(e.src,{...n.modifiers.value,width:_[0],height:_[1],quality:_[2]||50,blur:_[3]||3},n.options.value)}),l=p(()=>e.sizes?r.value.src:s(e.src,n.modifiers.value,n.options.value)),c=p(()=>o.value?o.value:l.value);if(e.preload){const u=Object.values(r.value).every(_=>_);Y({link:[{rel:"preload",as:"image",...u?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:c.value}}]})}const d=S(),h=K().isHydrating;return q(()=>{if(o.value){const u=new Image;u.src=l.value,e.sizes&&(u.sizes=r.value.sizes||"",u.srcset=r.value.srcset),u.onload=_=>{i.value=!0,t.emit("load",_)};return}d.value&&(d.value.complete&&h&&(d.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),d.value.onload=u=>{t.emit("load",u)},d.value.onerror=u=>{t.emit("error",u)})}),()=>he("img",{ref:d,src:c.value,...a.value,...t.attrs})}}),Ze={key:0,class:"absolute animate-pulse inset-0 flex items-center justify-center bg-main-background"},Ke=j({__name:"TlImg",props:ge({src:{type:String,default:null},alt:{type:String,default:null},height:{type:[Number,String],default:null},width:{type:[Number,String],default:null},fit:{type:String,default:"fill"},format:{type:String,default:"webp"}},{loading:{type:Boolean,default:!1,local:!0}}),emits:["update:loading"],setup(e){const t=e,s=we(),n=pe(e,"loading",{local:!0});n.value=!!t.src;function i(){setTimeout(()=>{n.value=!1},1e3)}const r=p(()=>{const a={};return t.height&&(a.height=s.toMeasurement(t.height)),t.width&&(a.width=s.toMeasurement(t.width)),t.fit&&(a.objectFit=t.fit),a});return(a,o)=>{const l=Ye,c=te;return g(),k(c,{width:e.width,height:e.height,class:"relative",shadow:"none",rounded:"none",border:"none"},{default:M(()=>[n.value?(g(),y("div",Ze)):_e("",!0),v(l,{src:e.src,alt:e.alt,height:e.height,width:e.width,class:ve(n.value?"opacity-0":""),format:e.format,style:ee(x(r)),onLoad:i},null,8,["src","alt","height","width","class","format","style"]),H(a.$slots,"default")]),_:3},8,["width","height"])}}});function oe(e){return xe()?(ye(e),!0):!1}function T(e){return typeof e=="function"?e():x(e)}const et=typeof window<"u"&&typeof document<"u",tt=Object.prototype.toString,nt=e=>tt.call(e)==="[object Object]",st=()=>{};function it(e,t){var s;if(typeof e=="number")return e+t;const n=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",i=e.slice(n.length),r=Number.parseFloat(n)+t;return Number.isNaN(r)?e:r+i}function rt(e){var t;const s=T(e);return(t=s==null?void 0:s.$el)!=null?t:s}const O=et?window:void 0;function J(...e){let t,s,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,n,i]=e,t=O):[t,s,n,i]=e,!t)return st;Array.isArray(s)||(s=[s]),Array.isArray(n)||(n=[n]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},o=(d,m,h,u)=>(d.addEventListener(m,h,u),()=>d.removeEventListener(m,h,u)),l=be(()=>[rt(t),T(i)],([d,m])=>{if(a(),!d)return;const h=nt(m)?{...m}:m;r.push(...s.flatMap(u=>n.map(_=>o(d,u,_,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),a()};return oe(c),c}function ot(){const e=S(!1);return $e()&&q(()=>{e.value=!0}),e}function at(e){const t=ot();return p(()=>(t.value,!!e()))}function E(e,t={}){const{window:s=O}=t,n=at(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let i;const r=S(!1),a=c=>{r.value=c.matches},o=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",a):i.removeListener(a))},l=X(()=>{n.value&&(o(),i=s.matchMedia(T(e)),"addEventListener"in i?i.addEventListener("change",a):i.addListener(a),r.value=i.matches)});return oe(()=>{l(),o(),i=void 0}),r}const lt={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function ct(e,t={}){function s(o,l){let c=e[o];return l!=null&&(c=it(c,l)),typeof c=="number"&&(c=`${c}px`),c}const{window:n=O}=t;function i(o){return n?n.matchMedia(o).matches:!1}const r=o=>E(`(min-width: ${s(o)})`,t),a=Object.keys(e).reduce((o,l)=>(Object.defineProperty(o,l,{get:()=>r(l),enumerable:!0,configurable:!0}),o),{});return Object.assign(a,{greater(o){return E(`(min-width: ${s(o,.1)})`,t)},greaterOrEqual:r,smaller(o){return E(`(max-width: ${s(o,-.1)})`,t)},smallerOrEqual(o){return E(`(max-width: ${s(o)})`,t)},between(o,l){return E(`(min-width: ${s(o)}) and (max-width: ${s(l,-.1)})`,t)},isGreater(o){return i(`(min-width: ${s(o,.1)})`)},isGreaterOrEqual(o){return i(`(min-width: ${s(o)})`)},isSmaller(o){return i(`(max-width: ${s(o,-.1)})`)},isSmallerOrEqual(o){return i(`(max-width: ${s(o)})`)},isInBetween(o,l){return i(`(min-width: ${s(o)}) and (max-width: ${s(l,-.1)})`)},current(){const o=Object.keys(e).map(l=>[l,r(l)]);return p(()=>o.filter(([,l])=>l.value).map(([l])=>l))}})}function ut(e,t={}){const{delayEnter:s=0,delayLeave:n=0,window:i=O}=t,r=S(!1);let a;const o=l=>{const c=l?s:n;a&&(clearTimeout(a),a=void 0),c?a=setTimeout(()=>r.value=l,c):r.value=l};return i&&(J(e,"mouseenter",()=>o(!0),{passive:!0}),J(e,"mouseleave",()=>o(!1),{passive:!0})),r}const dt={class:"flex-1 flex overflow-hidden relative"},ft={class:"flex justify-center absolute bottom-0 w-full overflow-x-auto"},mt={class:"flex justify-center my-2 py-1 px-2 gap-x-2 bg-main-background rounded-full"},ht=j({__name:"TlCarrousel",props:{items:{type:Array,required:!0}},setup(e){const t=e,s=S(),n=S(0),i=ut(s);function r(){if(i.value)return;n.value<t.items.length-1?a():n.value=0}function a(){n.value=Math.min(n.value+1,t.items.length-1)}function o(){n.value=Math.max(n.value-1,0)}return q(()=>{setInterval(r,5e3)}),(l,c)=>{const d=C,m=te;return g(),k(m,{ref_key:"root",ref:s,class:"flex flex-col"},{default:M(()=>[f("div",dt,[(g(!0),y(A,null,N(e.items,(h,u)=>(g(),y("div",{key:h.id,class:"absolute top-0 h-full w-full transition-all duration-500",style:ee({transform:`translateX(${(u-x(n))*100}%)`})},[H(l.$slots,"item",{item:h},()=>[L(W(h),1)])],4))),128))]),f("div",ft,[f("div",mt,[v(d,{size:"xs",icon:"",variant:"text","icon-name":"mdi:chevron-left",disabled:x(n)===0,onClick:o},null,8,["disabled"]),(g(!0),y(A,null,N(e.items.length,h=>(g(),k(d,{size:"xs",icon:"",variant:"text",color:h-1===x(n)?"accent":"zinc","icon-name":"mdi:circle",onClick:u=>n.value=h-1},null,8,["color","onClick"]))),256)),v(d,{size:"xs",icon:"",variant:"text","icon-name":"mdi:chevron-right",disabled:x(n)===e.items.length-1,onClick:a},null,8,["disabled"])])])]),_:3},512)}}});function ae(){return ct(lt)}const gt=""+globalThis.__publicAssetsURL("images/home-hero-bg.jpg"),pt={class:"min-h-screen flex items-center justify-center relative"},_t=f("div",{class:"absolute inset-0 h-full"},[f("img",{src:gt,class:"h-full w-full object-cover"}),f("div",{class:"bg-gradient-to-b from-transparent to-black absolute inset-0"})],-1),vt={class:"relative z-10 w-full flex flex-wrap lg:flex-nowrap gap-y-4 justify-between max-w-[90%]"},wt={class:"px-4 flex flex-col justify-center text-white w-full text-center lg:text-left lg:w-auto"},xt=f("h1",{class:"font-bold text-4xl lg:text-6xl mb-4 animate-bounce"}," Tales Notebook ",-1),yt=f("div",{class:"mb-5 lg:text-xl pr-5"}," A new platform for publishing, translating, and reading mangas & comics ",-1),bt={class:"ml-auto mx-auto"},$t=j({__name:"HomeHero",setup(e){const t=ae(),s=t.smallerOrEqual("sm"),n=t.smallerOrEqual("md"),i=t.smallerOrEqual("lg"),r=p(()=>s.value?200:n.value?350:i.value?300:500),a=p(()=>s.value?280:n.value?600:i.value?500:800),o=[{src:"/images/home-hero-slide-1.png"},{src:"/images/home-hero-slide-2.png"},{src:"/images/home-hero-slide-3.png"},{src:"/images/home-hero-slide-4.png"},{src:"/images/home-hero-slide-5.png"},{src:"/images/home-hero-slide-6.png"},{src:"/images/home-hero-slide-7.png"}];return(l,c)=>{const d=C,m=Ke,h=ht;return g(),y("div",pt,[_t,f("div",vt,[f("div",wt,[xt,yt,v(d,{color:"accent",class:"w-full mx-auto lg:mx-0 max-w-[200px]",size:x(n)?"md":"lg",to:"#newsletter"},{default:M(()=>[L(" Know more ")]),_:1},8,["size"])]),f("div",bt,[v(h,{items:o,width:x(a),height:x(r)},{item:M(({item:u})=>[v(m,{src:u.src,height:x(r),class:"w-full"},null,8,["src","height"])]),_:1},8,["width","height"])])])])}}}),St={},Mt={class:"min-h-screen flex items-center justify-center"},jt=f("div",{class:"max-w-[800px] px-5"},[f("h2",{class:"text-4xl lg:text-6xl font-bold mb-5 lg:mb-10"},"Our mission"),f("div",{class:"w-full text-lg lg:text-lg flex flex-wrap space-y-5"},[f("p",null," Our goal is to make accessing stories from around the world as easy and comfortable as possible. "),f("p",null," We wanna provide a platform for creators to share their stories with the world. "),f("p",null," For Translators to help the stories to reach more people. "),f("p",null," And for readers to support the creators and translators they like and have a good time reading and sharing their thoughts about the stories. ")])],-1),zt=[jt];function Et(e,t){return g(),y("div",Mt,zt)}const kt=ne(St,[["render",Et]]),Ot={id:"newsletter",class:"min-h-screen flex items-center justify-center bg-secondary-background"},It={class:"px-5 text-center flex flex-col gap-y-10 items-center"},At=f("div",{class:"text-4xl lg:text-6xl font-bold"}," Sign our newsletter ",-1),Nt=f("div",{class:"w-full text-lg lg:text-lg flex flex-wrap max-w-[500px]"}," We will release the beta version platform in a near future, if you want to be notified when it's ready, sign our newsletter. ",-1),Wt=j({__name:"HomeNewsletter",setup(e){const s=ae().smallerOrEqual("md");return(n,i)=>{const r=C;return g(),y("div",Ot,[f("div",It,[At,Nt,v(r,{color:"accent",class:"w-full mx-auto lg:mx-0 max-w-[200px]",size:x(s)?"md":"lg",to:"http://eepurl.com/iBFgtw"},{default:M(()=>[L(" Sign up ")]),_:1},8,["size"])])])}}}),qt={},Ht={class:"w-full max-w-[1200px] px-5 mx-auto"};function Lt(e,t){return g(),y("div",Ht,[H(e.$slots,"default")])}const Ct=ne(qt,[["render",Lt]]),Tt={class:"min-h-screen flex items-center"},Bt=f("h2",{class:"text-4xl lg:text-6xl font-bold mb-10"},"FAQ",-1),Pt={class:"flex flex-col gap-y-4"},Ft={class:"font-bold text-xl mb-2"},Dt=j({__name:"HomeFaq",async setup(e){let t,s;const{data:n}=([t,s]=Se(()=>ze("faq",()=>Ee("/faq").find())),t=await t,s(),t),i=p(()=>n.value??[]);return(r,a)=>{const o=je,l=Ct;return g(),y("div",Tt,[v(l,null,{default:M(()=>[Bt,f("div",Pt,[(g(!0),y(A,null,N(x(i),(c,d)=>(g(),y("div",{key:c._path},[f("h3",Ft,W(d+1)+" - "+W(c.title),1),v(o,{value:c},null,8,["value"])]))),128))])]),_:1})])}}}),Rt=f("div",{class:"text-center py-4 text-sm"}," contact@tales-notebook.com ",-1),Zt=j({__name:"index",setup(e){return ke({title:"Tales notebook",description:"A new platform for publishing, translating, and reading mangas & comics",ogImage:"/images/og-image.jpg",ogTitle:"Tales notebook",ogDescription:"A new platform for publishing, translating, and reading mangas & comics",twitterCard:"summary_large_image"}),(t,s)=>{const n=$t,i=kt,r=Wt,a=Dt,o=Me;return g(),k(o,null,{default:M(()=>[v(n),v(i),v(r),v(a),Rt]),_:1})}}});export{Zt as default};
