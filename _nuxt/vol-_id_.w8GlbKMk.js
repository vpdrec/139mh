import{_ as A}from"./nuxt-link.Ns4ZEdjU.js";import{f as $,g as E,s as F,h as J,J as K,r as b,j as q,k as C,l as G,c as a,b as l,w as s,K as I,a as d,t as S,L as P,M as n,a6 as Q,o,m as N,d as r,a7 as m,a8 as W,p as X,e as Y,$ as Z,_ as tt,n as et}from"./entry.aZPP3nMD.js";import{h as ot}from"./moment.WSJ9un1t.js";import{_ as st}from"./_plugin-vue_export-helper.x3n3nnut.js";import{_ as lt}from"./Affix.6ot0jUjY.js";import{L as at}from"./LeftOutlined.fh_UkEvQ.js";import{U as nt}from"./UpOutlined.6N35Ii0i.js";import{N as it}from"./Icon.mIQ67zTj.js";import{_ as ct}from"./Result.z-85mGE4.js";import"./format-length.4l65r8M5.js";const rt=i=>(X("data-v-5175d6f5"),i=i(),Y(),i),ut={key:0,class:"header-mt container"},_t={class:"p-10 fs-16 fw-600 align-center"},mt={class:"flex-col align-items-center"},dt=rt(()=>d("div",{class:"p-10"},"到底了！",-1)),pt={__name:"vol-[id]",async setup(i){let p,f;const z=$.glob(),v=E(),{public:g}=et(),{conf:L}=F(z),R=J(),h=K(),T=$.history(),u=b(null),t=b(null),B=R.params.id;q({title:()=>{let e=g.metaTitle;return t.value?`${t.value.comic.title},${t.value.title},${g.metaTitle}`:e}});const V=C(()=>e=>`${L.value.img_url}${e}`);C(()=>e=>!1);const D=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},H=()=>{h.replace({path:`/comic/vol-${t.value.prev.id}`})},j=()=>{h.replace({path:`/comic/vol-${t.value.next.id}`})},M=async()=>{v.start();const e=await Z.get("vol/detail",{id:B});e&&(t.value=e.result,T.add({vol_id:e.result.id,vol_title:e.result.title,comic_id:e.result.comic_id,comic_title:e.result.comic.title,cover:e.result.comic.cover,created_at:ot().unix()})),v.finish()};return[p,f]=G(()=>M()),await p,f(),(e,k)=>{const x=it,c=tt,O=A,y=lt,w=ct,U=Q("lazy");return o(),a("div",{class:"container-full flex-col align-items-center",ref_key:"mainRef",ref:u},[l(y,{class:"header container flex-row align-items-center justify-content-between",top:0,"trigger-top":0,"listen-to":()=>u.value},{default:s(()=>[l(c,{round:"",size:"small",class:"ml-10",onClick:k[0]||(k[0]=_=>e.$router.back()),color:"#333"},{default:s(()=>[l(x,null,{default:s(()=>[l(N(at))]),_:1}),r("返回")]),_:1}),t.value?(o(),n(O,{key:0,class:"txt-sigle fs-16 color-white mr-10",to:`/comic-${t.value.comic_id}`},{default:s(()=>[r(S(t.value.comic.title),1)]),_:1},8,["to"])):m("",!0)]),_:1},8,["listen-to"]),t.value?(o(),a("div",ut,[t.value?(o(),a(I,{key:0},[d("div",_t,S(t.value.title),1),d("div",mt,[(o(!0),a(I,null,P(t.value.img_list,_=>W((o(),a("img",{key:_,class:"vol_img"})),[[U,V.value(_)]])),128)),dt])],64)):(o(),n(w,{key:1,class:"mt-10",status:"404",title:"404 资源不存在",description:"生活总归带点荒谬"})),l(y,{bottom:20,"trigger-bottom":20,"listen-to":()=>u.value,style:{right:"0"}},{default:s(()=>[t.value.prev?(o(),n(c,{key:0,round:"",size:"small",class:"mr-10",onClick:H,color:"#ffd100","text-color":"#000"},{default:s(()=>[r("上一话")]),_:1})):m("",!0),t.value.next?(o(),n(c,{key:1,round:"",size:"small",class:"mr-10",onClick:j,color:"#ffd100","text-color":"#000"},{default:s(()=>[r("下一话")]),_:1})):m("",!0),l(c,{round:"",size:"small",class:"mr-10",onClick:D,color:"#ffd100","text-color":"#000"},{default:s(()=>[l(x,null,{default:s(()=>[l(N(nt))]),_:1})]),_:1})]),_:1},8,["listen-to"])])):(o(),n(w,{key:1,class:"header-mt pt-10",status:"404",title:"404 资源不存在",description:"生活总归带点荒谬"}))],512)}}},Ct=st(pt,[["__scopeId","data-v-5175d6f5"]]);export{Ct as default};