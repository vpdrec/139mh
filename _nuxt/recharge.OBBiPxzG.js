import{_ as S}from"./Header.faxEmFlA.js";import{g as A,r as v,al as F,i as N,l as P,c,a as e,b as y,K as C,L as k,m as o,w as T,$ as I,_ as z,o as i,av as g,t as l,d as D,p as H,e as M}from"./entry.-w07o56L.js";import{$ as m}from"./func.ygmSOhXZ.js";import{_ as E}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./use-compitable.g-KEqmHk.js";import"./use-merged-state.N_CPLV7z.js";import"./moment.WSJ9un1t.js";const w=r=>(H("data-v-9e0ddbaf"),r=r(),M(),r),K={class:"container-full flex-col align-items-center header-mt-def"},U={class:"container border-box flex-col px-10 pb-10"},j=w(()=>e("div",{class:"bb fs-16 fw-600 px-10 py-5"},"VIP会员卡",-1)),q={class:"card-list mt-10"},G=["onClick"],J={class:"fs-16 fw-600"},O={class:"fs-18 fw-600 color-orange"},Q={class:"fs-14 line-through color-grey"},R=w(()=>e("div",{class:"bb fs-16 fw-600 px-10 py-5"},"支付方式",-1)),W={class:"card-list mt-10"},X=["onClick"],Y={class:"flex-col align-items-center mt-10"},Z=w(()=>e("div",{class:"fs-16 py-10"},"充值成功后，5分钟内会开通VIP。",-1)),ee={__name:"recharge",async setup(r){let b,x;const d=A(),$=v(null),u=v(null),L=F(),a=N({card:0,channel_code:0}),f=v(!1),V=async()=>{d.start();const s=await I.get("donate/index");s&&($.value=s.result.vip.times,u.value=s.result.channel_list,a.channel_code=u.value[0].channel_code),d.finish()},B=async()=>{const s=navigator.userAgent||navigator.vendor||window.opera,_=m.isMobile(s);d.start(),f.value=!0;const n=await I.post("donate/pay",a);if(n){const p=n.result.dash===""?n.result.url:n.result.dash;L.success({title:"支付",content:"点击确定跳转到支付页面",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{window.open(_?n.result.url:p)}})}d.finish(),f.value=!1};return[b,x]=P(()=>V()),await b,x(),(s,_)=>{const n=S,p=z;return i(),c("div",K,[e("div",U,[y(n,{act:"recharge"}),j,e("div",q,[(i(!0),c(C,null,k(o($),(t,h)=>(i(),c("div",{onClick:se=>o(a).card=h,class:g(["card-item",{act:h===o(a).card}])},[e("div",{class:g(["dis",{act:t.is_hot}])},l(t.dis),3),e("div",J,l(t.title),1),e("div",O,"¥"+l(("$func"in s?s.$func:o(m)).fenFmt(t.amount))+"元",1),e("div",Q,"¥"+l(("$func"in s?s.$func:o(m)).fenFmt(t.org))+"元",1)],10,G))),256))]),R,e("div",W,[(i(!0),c(C,null,k(o(u),t=>(i(),c("div",{class:g(["card-item",{act:t.channel_code===o(a).channel_code}]),onClick:h=>o(a).channel_code=t.channel_code},[e("div",null,l(t.title),1)],10,X))),256))]),e("div",Y,[Z,y(p,{loading:o(f),onClick:_[0]||(_[0]=t=>B()),size:"large",round:"",color:"#ffd100","text-color":"#000"},{default:T(()=>[D("充值")]),_:1},8,["loading"])])])])}}},re=E(ee,[["__scopeId","data-v-9e0ddbaf"]]);export{re as default};