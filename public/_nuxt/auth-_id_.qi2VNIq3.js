import{_ as T}from"./nuxt-link.eYI-olIO.js";import{u as C,_ as N}from"./event.8YV5INbW.js";import{f as B,s as H,g as S,h as R,r as l,i as V,j,k as I,l as O,c as z,a as w,b as e,w as s,m,_ as A,o as D,d as _,t as M,$ as W,n as Y}from"./entry.QwuCFe1S.js";import{$ as q}from"./func.-JA0-Hy7.js";import{_ as F,a as G}from"./BreadcrumbItem.gSQSq1Sz.js";import{L as J}from"./LeftOutlined.dfGWQceV.js";import{f as K}from"./forEach.aU0Ny6yS.js";import{N as P}from"./Icon.js6MpYLr.js";import"./_plugin-vue_export-helper.x3n3nnut.js";import"./use-compitable.4o6mFdpa.js";import"./moment.WSJ9un1t.js";import"./format-length.4l65r8M5.js";const Q={class:"container-full flex-col align-items-center header-mt-def"},U={class:"container"},X={class:"flex-row justify-content-between align-items-center mt-10"},pt={__name:"auth-[id]",async setup(Z){let p,d;const b=B.glob();H(b);const f=S(),g=R(),{public:L}=Y(),n=l(null),i=l([]);let a=l(!1),r=l(!1),c=V({page:g.params.page||1,id:g.params.id||0});j({title:()=>`${n.value?n.value.auth_name:""},${L.metaTitle}`}),C(window,"scroll",async()=>{let t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset,o=document.documentElement.clientHeight,u=document.documentElement.scrollHeight;t+o>=u&&await h()});const k=I(()=>q.strCut(n.value.auth_name,14)),h=async()=>{if(r.value||a.value)return!1;a.value=!0,f.start();const t=await W.get("comic/auth_works",c);t&&(c.page===1&&i.value.splice(0),t.result.auth&&(n.value=t.result.auth),t.result.list.length>0?(K(t.result.list,o=>{i.value.push(o)}),c.page++):r.value=!0),f.finish(),a.value=!1};return[p,d]=O(()=>h()),await p,d(),(t,o)=>{const u=T,v=G,x=F,E=P,y=A,$=N;return D(),z("div",Q,[w("div",U,[w("div",X,[e(x,{class:"ml-5"},{default:s(()=>[e(v,null,{default:s(()=>[e(u,{to:"/"},{default:s(()=>[_("首页")]),_:1})]),_:1}),e(v,null,{default:s(()=>[_(M(k.value),1)]),_:1})]),_:1}),e(y,{round:"",size:"small",secondary:"",class:"mr-10",onClick:o[0]||(o[0]=tt=>t.$router.back())},{default:s(()=>[e(E,null,{default:s(()=>[e(m(J))]),_:1}),_("返回")]),_:1})])]),e($,{isEnd:m(r),isLoading:m(a),comicList:i.value},null,8,["isEnd","isLoading","comicList"])])}}};export{pt as default};