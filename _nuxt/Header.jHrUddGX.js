import{a1 as _e,av as gt,aw as ht,ax as xt,H as ae,r as W,ay as mt,Z as c,az as yt,aA as Ce,aB as $e,O as Ct,a0 as St,a4 as wt,k as ee,aC as Tt,K as Rt,an as Pt,aD as zt,aE as Lt,aF as _t,P as r,R as s,Q as w,T as A,am as $t,U as Bt,V as Be,aG as oe,a9 as ie,aH as le,W as Wt,X as E,ad as At,ac as M,aI as J,Y as kt,aJ as Se,aK as we,aL as Q,aM as Et,a8 as Mt,ag as Vt,aN as jt,aO as Ht,J as It,o as Ft,M as Gt,w as Z,b as se,d as de}from"./entry.UFj30woN.js";import{_ as Ot}from"./_plugin-vue_export-helper.x3n3nnut.js";import{u as Te}from"./use-compitable.DJW_dfQ1.js";import{u as Dt}from"./use-merged-state.F12XvNx3.js";let G,D;const Nt=()=>{var e,n;G=ht?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,D=!1,G!==void 0?G.then(()=>{D=!0}):D=!0};Nt();function Ut(e){if(D)return;let n=!1;_e(()=>{D||G==null||G.then(()=>{n||e()})}),gt(()=>{n=!0})}const{c:Re}=xt(),Xt="vueuc-style",Kt=Re(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Re("&::-webkit-scrollbar",{width:0,height:0})]),Yt=ae({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=W(null);function n(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const i=mt();return Kt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Xt,ssr:i}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...d){var g;(g=e.value)===null||g===void 0||g.scrollTo(...d)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ce=function(){return yt.Date.now()},qt="Expected a function",Jt=Math.max,Qt=Math.min;function Zt(e,n,i){var b,d,g,u,p,y,x=0,m=!1,L=!1,R=!0;if(typeof e!="function")throw new TypeError(qt);n=Ce(n)||0,$e(i)&&(m=!!i.leading,L="maxWait"in i,g=L?Jt(Ce(i.maxWait)||0,n):g,R="trailing"in i?!!i.trailing:R);function h(f){var z=b,I=d;return b=d=void 0,x=f,u=e.apply(I,z),u}function T(f){return x=f,p=setTimeout($,n),m?h(f):u}function C(f){var z=f-y,I=f-x,N=n-z;return L?Qt(N,g-I):N}function P(f){var z=f-y,I=f-x;return y===void 0||z>=n||z<0||L&&I>=g}function $(){var f=ce();if(P(f))return _(f);p=setTimeout($,C(f))}function _(f){return p=void 0,R&&b?h(f):(b=d=void 0,u)}function H(){p!==void 0&&clearTimeout(p),x=0,b=y=d=p=void 0}function B(){return p===void 0?u:_(ce())}function v(){var f=ce(),z=P(f);if(b=arguments,d=this,y=f,z){if(p===void 0)return T(y);if(L)return clearTimeout(p),p=setTimeout($,n),h(y)}return p===void 0&&(p=setTimeout($,n)),u}return v.cancel=H,v.flush=B,v}var ea="Expected a function";function be(e,n,i){var b=!0,d=!0;if(typeof e!="function")throw new TypeError(ea);return $e(i)&&(b="leading"in i?!!i.leading:b,d="trailing"in i?!!i.trailing:d),Zt(e,n,{leading:b,maxWait:n,trailing:d})}const ta=ae({name:"Add",render(){return c("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),aa={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},ra=e=>{const{textColor2:n,primaryColor:i,textColorDisabled:b,closeIconColor:d,closeIconColorHover:g,closeIconColorPressed:u,closeColorHover:p,closeColorPressed:y,tabColor:x,baseColor:m,dividerColor:L,fontWeight:R,textColor1:h,borderRadius:T,fontSize:C,fontWeightStrong:P}=e;return Object.assign(Object.assign({},aa),{colorSegment:x,tabFontSizeCard:C,tabTextColorLine:h,tabTextColorActiveLine:i,tabTextColorHoverLine:i,tabTextColorDisabledLine:b,tabTextColorSegment:h,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:b,tabTextColorBar:h,tabTextColorActiveBar:i,tabTextColorHoverBar:i,tabTextColorDisabledBar:b,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:i,tabTextColorDisabledCard:b,barColor:i,closeIconColor:d,closeIconColorHover:g,closeIconColorPressed:u,closeColorHover:p,closeColorPressed:y,closeBorderRadius:T,tabColor:x,tabColorSegment:m,tabBorderColor:L,tabFontWeightActive:R,tabFontWeight:R,tabBorderRadius:T,paneTextColor:n,fontWeightStrong:P})},na={name:"Tabs",common:Ct,self:ra},oa=na,We=St("n-tabs"),ia={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},la=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},_t(ia,["displayDirective"])),te=ae({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:la,setup(e){const{mergedClsPrefixRef:n,valueRef:i,typeRef:b,closableRef:d,tabStyleRef:g,addTabStyleRef:u,tabClassRef:p,addTabClassRef:y,tabChangeIdRef:x,onBeforeLeaveRef:m,triggerRef:L,handleAdd:R,activateTab:h,handleClose:T}=wt(We);return{trigger:L,mergedClosable:ee(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?d.value:C}),style:g,addStyle:u,tabClass:p,addTabClass:y,clsPrefix:n,value:i,type:b,handleClose(C){C.stopPropagation(),!e.disabled&&T(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){R();return}const{name:C}=e,P=++x.id;if(C!==i.value){const{value:$}=m;$?Promise.resolve($(e.name,i.value)).then(_=>{_&&x.id===P&&h(C)}):h(C)}}}},render(){const{internalAddable:e,clsPrefix:n,name:i,disabled:b,label:d,tab:g,value:u,mergedClosable:p,trigger:y,$slots:{default:x}}=this,m=d??g;return c("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${n}-tabs-tab-pad`}):null,c("div",Object.assign({key:i,"data-name":i,"data-disabled":b?!0:void 0},Tt({class:[`${n}-tabs-tab`,u===i&&`${n}-tabs-tab--active`,b&&`${n}-tabs-tab--disabled`,p&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:y==="click"?this.activateTab:void 0,onMouseenter:y==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${n}-tabs-tab__label`},e?c(Rt,null,c("div",{class:`${n}-tabs-tab__height-placeholder`}," "),c(Pt,{clsPrefix:n},{default:()=>c(ta,null)})):x?x():typeof m=="object"?m:zt(m??i)),p&&this.type==="card"?c(Lt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:b}):null))}}),sa=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[s("segment-type",[r("tabs-rail",[w("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),s("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),s("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),s("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),s("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),s("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: 0.3s;
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[s("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),s("flex",[r("tabs-nav",{width:"100%"},[r("tabs-wrapper",{width:"100%"},[r("tabs-tab",{marginRight:0})])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),s("top, bottom",[r("tabs-nav-scroll-wrapper",[w("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),w("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),s("shadow-start",[w("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[w("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),s("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[w("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),w("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),s("shadow-start",[w("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[w("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[w("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),w("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("&.transition-disabled",`
 transition: none;
 `),s("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),w("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),w("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),w("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),s("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),s("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),s("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[s("line-type",[s("top",[A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),s("left",[A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),s("right",[A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),s("bottom",[A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),s("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[s("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),$t("disabled",[w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),s("closable","padding-right: 8px;"),s("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),s("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),s("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),s("top",[s("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),s("left",[s("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),s("right",[s("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),s("bottom",[s("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),da=Object.assign(Object.assign({},Be.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ca=ae({name:"Tabs",props:da,setup(e,{slots:n}){var i,b,d,g;const{mergedClsPrefixRef:u,inlineThemeDisabled:p}=Bt(e),y=Be("Tabs","-tabs",sa,oa,e,u),x=W(null),m=W(null),L=W(null),R=W(null),h=W(null),T=W(null),C=W(!0),P=W(!0),$=Te(e,["labelSize","size"]),_=Te(e,["activeName","value"]),H=W((b=(i=_.value)!==null&&i!==void 0?i:e.defaultValue)!==null&&b!==void 0?b:n.default?(g=(d=oe(n.default())[0])===null||d===void 0?void 0:d.props)===null||g===void 0?void 0:g.name:null),B=Dt(_,H),v={id:0},f=ee(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ie(B,()=>{v.id=0,U(),ue()});function z(){var a;const{value:t}=B;return t===null?null:(a=x.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${t}"]`)}function I(a){if(e.type==="card")return;const{value:t}=m;if(!t)return;const o=t.style.opacity==="0";if(a){const l=`${u.value}-tabs-bar--disabled`,{barWidth:S,placement:V}=e;if(a.dataset.disabled==="true"?t.classList.add(l):t.classList.remove(l),["top","bottom"].includes(V)){if(pe(["top","maxHeight","height"]),typeof S=="number"&&a.offsetWidth>=S){const k=Math.floor((a.offsetWidth-S)/2)+a.offsetLeft;t.style.left=`${k}px`,t.style.maxWidth=`${S}px`}else t.style.left=`${a.offsetLeft}px`,t.style.maxWidth=`${a.offsetWidth}px`;t.style.width="8192px",o&&(t.style.transition="none"),t.offsetWidth,o&&(t.style.transition="",t.style.opacity="1")}else{if(pe(["left","maxWidth","width"]),typeof S=="number"&&a.offsetHeight>=S){const k=Math.floor((a.offsetHeight-S)/2)+a.offsetTop;t.style.top=`${k}px`,t.style.maxHeight=`${S}px`}else t.style.top=`${a.offsetTop}px`,t.style.maxHeight=`${a.offsetHeight}px`;t.style.height="8192px",o&&(t.style.transition="none"),t.offsetHeight,o&&(t.style.transition="",t.style.opacity="1")}}}function N(){if(e.type==="card")return;const{value:a}=m;a&&(a.style.opacity="0")}function pe(a){const{value:t}=m;if(t)for(const o of a)t.style[o]=""}function U(){if(e.type==="card")return;const a=z();a?I(a):N()}function ue(a){var t;const o=(t=h.value)===null||t===void 0?void 0:t.$el;if(!o)return;const l=z();if(!l)return;const{scrollLeft:S,offsetWidth:V}=o,{offsetLeft:k,offsetWidth:Y}=l;S>k?o.scrollTo({top:0,left:k,behavior:"smooth"}):k+Y>S+V&&o.scrollTo({top:0,left:k+Y-V,behavior:"smooth"})}const X=W(null);let re=0,j=null;function Ae(a){const t=X.value;if(t){re=a.getBoundingClientRect().height;const o=`${re}px`,l=()=>{t.style.height=o,t.style.maxHeight=o};j?(l(),j(),j=null):j=l}}function ke(a){const t=X.value;if(t){const o=a.getBoundingClientRect().height,l=()=>{document.body.offsetHeight,t.style.maxHeight=`${o}px`,t.style.height=`${Math.max(re,o)}px`};j?(j(),j=null,l()):j=l}}function Ee(){const a=X.value;if(a){a.style.maxHeight="",a.style.height="";const{paneWrapperStyle:t}=e;if(typeof t=="string")a.style.cssText=t;else if(t){const{maxHeight:o,height:l}=t;o!==void 0&&(a.style.maxHeight=o),l!==void 0&&(a.style.height=l)}}}const ve={value:[]},ge=W("next");function Me(a){const t=B.value;let o="next";for(const l of ve.value){if(l===t)break;if(l===a){o="prev";break}}ge.value=o,Ve(a)}function Ve(a){const{onActiveNameChange:t,onUpdateValue:o,"onUpdate:value":l}=e;t&&Q(t,a),o&&Q(o,a),l&&Q(l,a),H.value=a}function je(a){const{onClose:t}=e;t&&Q(t,a)}function he(){const{value:a}=m;if(!a)return;const t="transition-disabled";a.classList.add(t),U(),a.classList.remove(t)}const O=W(null);function xe({disabledTransition:a}){const t=x.value;if(!t)return;a&&t.classList.add("transition-disabled");const o=z();if(o&&O.value){const l=o.getBoundingClientRect();O.value.style.width=`${l.width}px`,O.value.style.height=`${l.height}px`,O.value.style.transform=`translateX(${l.left-t.getBoundingClientRect().left-Et(getComputedStyle(t).paddingLeft)}px)`}a&&t.classList.remove("transition-disabled")}ie([B],()=>{e.type==="segment"&&le(()=>{xe({disabledTransition:!1})})}),_e(()=>{e.type==="segment"&&xe({disabledTransition:!0})});let me=0;function He(a){var t;if(a.contentRect.width===0&&a.contentRect.height===0||me===a.contentRect.width)return;me=a.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&he(),o!=="segment"){const{placement:l}=e;ne((l==="top"||l==="bottom"?(t=h.value)===null||t===void 0?void 0:t.$el:T.value)||null)}}const Ie=be(He,64);ie([()=>e.justifyContent,()=>e.size],()=>{le(()=>{const{type:a}=e;(a==="line"||a==="bar")&&he()})});const K=W(!1);function Fe(a){var t;const{target:o,contentRect:{width:l}}=a,S=o.parentElement.offsetWidth;if(!K.value)S<l&&(K.value=!0);else{const{value:V}=R;if(!V)return;S-l>V.$el.offsetWidth&&(K.value=!1)}ne(((t=h.value)===null||t===void 0?void 0:t.$el)||null)}const Ge=be(Fe,64);function Oe(){const{onAdd:a}=e;a&&a(),le(()=>{const t=z(),{value:o}=h;!t||!o||o.scrollTo({left:t.offsetLeft,top:0,behavior:"smooth"})})}function ne(a){if(!a)return;const{placement:t}=e;if(t==="top"||t==="bottom"){const{scrollLeft:o,scrollWidth:l,offsetWidth:S}=a;C.value=o<=0,P.value=o+S>=l}else{const{scrollTop:o,scrollHeight:l,offsetHeight:S}=a;C.value=o<=0,P.value=o+S>=l}}const De=be(a=>{ne(a.target)},64);Wt(We,{triggerRef:E(e,"trigger"),tabStyleRef:E(e,"tabStyle"),tabClassRef:E(e,"tabClass"),addTabStyleRef:E(e,"addTabStyle"),addTabClassRef:E(e,"addTabClass"),paneClassRef:E(e,"paneClass"),paneStyleRef:E(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:E(e,"type"),closableRef:E(e,"closable"),valueRef:B,tabChangeIdRef:v,onBeforeLeaveRef:E(e,"onBeforeLeave"),activateTab:Me,handleClose:je,handleAdd:Oe}),Ut(()=>{U(),ue()}),At(()=>{const{value:a}=L;if(!a)return;const{value:t}=u,o=`${t}-tabs-nav-scroll-wrapper--shadow-start`,l=`${t}-tabs-nav-scroll-wrapper--shadow-end`;C.value?a.classList.remove(o):a.classList.add(o),P.value?a.classList.remove(l):a.classList.add(l)});const Ne={syncBarPosition:()=>{U()}},ye=ee(()=>{const{value:a}=$,{type:t}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[t],l=`${a}${o}`,{self:{barColor:S,closeIconColor:V,closeIconColorHover:k,closeIconColorPressed:Y,tabColor:Ue,tabBorderColor:Xe,paneTextColor:Ke,tabFontWeight:Ye,tabBorderRadius:qe,tabFontWeightActive:Je,colorSegment:Qe,fontWeightStrong:Ze,tabColorSegment:et,closeSize:tt,closeIconSize:at,closeColorHover:rt,closeColorPressed:nt,closeBorderRadius:ot,[M("panePadding",a)]:q,[M("tabPadding",l)]:it,[M("tabPaddingVertical",l)]:lt,[M("tabGap",l)]:st,[M("tabGap",`${l}Vertical`)]:dt,[M("tabTextColor",t)]:ct,[M("tabTextColorActive",t)]:bt,[M("tabTextColorHover",t)]:ft,[M("tabTextColorDisabled",t)]:pt,[M("tabFontSize",a)]:ut},common:{cubicBezierEaseInOut:vt}}=y.value;return{"--n-bezier":vt,"--n-color-segment":Qe,"--n-bar-color":S,"--n-tab-font-size":ut,"--n-tab-text-color":ct,"--n-tab-text-color-active":bt,"--n-tab-text-color-disabled":pt,"--n-tab-text-color-hover":ft,"--n-pane-text-color":Ke,"--n-tab-border-color":Xe,"--n-tab-border-radius":qe,"--n-close-size":tt,"--n-close-icon-size":at,"--n-close-color-hover":rt,"--n-close-color-pressed":nt,"--n-close-border-radius":ot,"--n-close-icon-color":V,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":Y,"--n-tab-color":Ue,"--n-tab-font-weight":Ye,"--n-tab-font-weight-active":Je,"--n-tab-padding":it,"--n-tab-padding-vertical":lt,"--n-tab-gap":st,"--n-tab-gap-vertical":dt,"--n-pane-padding-left":J(q,"left"),"--n-pane-padding-right":J(q,"right"),"--n-pane-padding-top":J(q,"top"),"--n-pane-padding-bottom":J(q,"bottom"),"--n-font-weight-strong":Ze,"--n-tab-color-segment":et}}),F=p?kt("tabs",ee(()=>`${$.value[0]}${e.type[0]}`),ye,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:B,renderedNames:new Set,segmentCapsuleElRef:O,tabsPaneWrapperRef:X,tabsElRef:x,barElRef:m,addTabInstRef:R,xScrollInstRef:h,scrollWrapperElRef:L,addTabFixed:K,tabWrapperStyle:f,handleNavResize:Ie,mergedSize:$,handleScroll:De,handleTabsResize:Ge,cssVars:p?void 0:ye,themeClass:F==null?void 0:F.themeClass,animationDirection:ge,renderNameListRef:ve,yScrollElRef:T,onAnimationBeforeLeave:Ae,onAnimationEnter:ke,onAnimationAfterEnter:Ee,onRender:F==null?void 0:F.onRender},Ne)},render(){const{mergedClsPrefix:e,type:n,placement:i,addTabFixed:b,addable:d,mergedSize:g,renderNameListRef:u,onRender:p,paneWrapperClass:y,paneWrapperStyle:x,$slots:{default:m,prefix:L,suffix:R}}=this;p==null||p();const h=m?oe(m()).filter(v=>v.type.__TAB_PANE__===!0):[],T=m?oe(m()).filter(v=>v.type.__TAB__===!0):[],C=!T.length,P=n==="card",$=n==="segment",_=!P&&!$&&this.justifyContent;u.value=[];const H=()=>{const v=c("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},_?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),C?h.map((f,z)=>(u.value.push(f.props.name),fe(c(te,Object.assign({},f.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0&&(!_||_==="center"||_==="start"||_==="end")}),f.children?{default:f.children.tab}:void 0)))):T.map((f,z)=>(u.value.push(f.props.name),fe(z!==0&&!_?Le(f):f))),!b&&d&&P?ze(d,(C?h.length:T.length)!==0):null,_?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&d?c(we,{onResize:this.handleTabsResize},{default:()=>v}):v,P?c("div",{class:`${e}-tabs-pad`}):null,P?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},B=$?"top":i;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${g}-size`,_&&`${e}-tabs--flex`,`${e}-tabs--${B}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${B}`,`${e}-tabs-nav`]},Se(L,v=>v&&c("div",{class:`${e}-tabs-nav__prefix`},v)),$?c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),C?h.map((v,f)=>(u.value.push(v.props.name),c(te,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:f!==0}),v.children?{default:v.children.tab}:void 0))):T.map((v,f)=>(u.value.push(v.props.name),f===0?v:Le(v)))):c(we,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(B)?c(Yt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),b&&d&&P?ze(d,!0):null,Se(R,v=>v&&c("div",{class:`${e}-tabs-nav__suffix`},v))),C&&(this.animated&&(B==="top"||B==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,y]},Pe(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Pe(h,this.mergedValue,this.renderedNames)))}});function Pe(e,n,i,b,d,g,u){const p=[];return e.forEach(y=>{const{name:x,displayDirective:m,"display-directive":L}=y.props,R=T=>m===T||L===T,h=n===x;if(y.key!==void 0&&(y.key=x),h||R("show")||R("show:lazy")&&i.has(x)){i.has(x)||i.add(x);const T=!R("if");p.push(T?Mt(y,[[Vt,h]]):y)}}),u?c(jt,{name:`${u}-transition`,onBeforeLeave:b,onEnter:d,onAfterEnter:g},{default:()=>p}):p}function ze(e,n){return c(te,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Le(e){const n=Ht(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function fe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const ba={__name:"Header",props:{act:{type:String,required:!0}},setup(e){const n=It(),i=b=>{b==="info"?n.push({path:"/user"}):n.push({path:`/user/${b}`})};return(b,d)=>{const g=te,u=ca;return Ft(),Gt(u,{"tab-class":"user-tabs",type:"line",value:e.act,animated:!1,size:"large","onUpdate:value":i},{default:Z(()=>[se(g,{name:"fav"},{default:Z(()=>[de("书架")]),_:1}),se(g,{name:"history"},{default:Z(()=>[de("历史")]),_:1}),se(g,{name:"info"},{default:Z(()=>[de("账号")]),_:1})]),_:1},8,["value"])}}},ga=Ot(ba,[["__scopeId","data-v-3c467f10"]]);export{ga as _};
