import{_ as L}from"./nuxt-link.PQyyWz6J.js";import{O as w,Q as g,P as u,aa as $,R as y,H as B,U as T,V as z,k as f,ab as R,ac as E,Y as N,r as V,ad as D,Z as d,ae as O,af as P,f as H,s as I,a6 as W,o as v,c as h,a as m,K as j,L as M,M as q,w as A,a8 as _,t as b,ag as K,b as Y,a7 as F,ah as Q,ai as U}from"./entry.kq51Fg3O.js";import{_ as X}from"./_plugin-vue_export-helper.x3n3nnut.js";import{u as Z}from"./use-compitable.Iu7xpuxN.js";const G=e=>{const{opacityDisabled:i,heightTiny:t,heightSmall:s,heightMedium:c,heightLarge:a,heightHuge:l,primaryColor:r,fontSize:n}=e;return{fontSize:n,textColor:r,sizeTiny:t,sizeSmall:s,sizeMedium:c,sizeLarge:a,sizeHuge:l,color:r,opacitySpinning:i}},J={name:"Spin",common:w,self:G},ee=J,te=g([g("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),u("spin-container",`
 position: relative;
 `,[u("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[$()])]),u("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),u("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[y("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),u("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),u("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[y("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),se={small:20,medium:18,large:16},ne=Object.assign(Object.assign({},z.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),ie=B({name:"Spin",props:ne,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=T(e),s=z("Spin","-spin",te,ee,e,i),c=f(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:o},self:p}=s.value,{opacitySpinning:x,color:S,textColor:C}=p,k=typeof n=="number"?R(n):p[E("size",n)];return{"--n-bezier":o,"--n-opacity-spinning":x,"--n-size":k,"--n-color":S,"--n-text-color":C}}),a=t?N("spin",f(()=>{const{size:n}=e;return typeof n=="number"?String(n):n[0]}),c,e):void 0,l=Z(e,["spinning","show"]),r=V(!1);return D(n=>{let o;if(l.value){const{delay:p}=e;if(p){o=window.setTimeout(()=>{r.value=!0},p),n(()=>{clearTimeout(o)});return}}r.value=l.value}),{mergedClsPrefix:i,active:r,mergedStrokeWidth:f(()=>{const{strokeWidth:n}=e;if(n!==void 0)return n;const{size:o}=e;return se[typeof o=="number"?"medium":o]}),cssVars:t?void 0:c,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e,i;const{$slots:t,mergedClsPrefix:s,description:c}=this,a=t.icon&&this.rotate,l=(c||t.description)&&d("div",{class:`${s}-spin-description`},c||((e=t.description)===null||e===void 0?void 0:e.call(t))),r=t.icon?d("div",{class:[`${s}-spin-body`,this.themeClass]},d("div",{class:[`${s}-spin`,a&&`${s}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),l):d("div",{class:[`${s}-spin-body`,this.themeClass]},d(O,{clsPrefix:s,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),l);return(i=this.onRender)===null||i===void 0||i.call(this),t.default?d("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},d("div",{class:[`${s}-spin-content`,this.active&&`${s}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),d(P,{name:"fade-in-transition"},{default:()=>this.active?r:null})):r}}),oe={class:"container flex-col align-items-center"},ae={class:"container flex-row flex-wrap py-20"},re={class:"cover"},ce={class:"txt fs-14 mt-10 fw-600"},le={class:"txt color-grey fs-12 mt-10"},de={class:"spin-bottom"},ue={key:0,class:"py-10 color-grey"},me={__name:"List",props:{comicList:{type:Array,required:!0},isLoading:{type:Boolean,required:!0},isEnd:{type:Boolean,required:!0}},setup(e){const i=H.glob(),{conf:t}=I(i),s=f(()=>c=>`${t.value.cover_url}${c}`);return(c,a)=>{const l=L,r=ie,n=W("lazy");return v(),h("div",oe,[m("div",ae,[(v(!0),h(j,null,M(e.comicList,o=>(v(),q(l,{class:"comic-item",to:`/comic-${o.id}`,key:o.id},{default:A(()=>[m("div",re,[_(m("img",null,null,512),[[n,s.value(o.cover)]])]),m("div",ce,b(o.title),1),m("div",le,b(o.last_vol),1)]),_:2},1032,["to"]))),128))]),m("div",de,[_(Y(r,{size:"small"},null,512),[[K,e.isLoading]])]),e.isEnd?(v(),h("div",ue,"下面没有了")):F("",!0)])}}},ge=X(me,[["__scopeId","data-v-0af7e9c0"]]),ye=(e,i,t)=>{Q(()=>{console.log("onActivated"),e.addEventListener(i,t)}),U(()=>{console.log("onDeactivated"),e.removeEventListener(i,t)})};export{ge as _,ye as u};
