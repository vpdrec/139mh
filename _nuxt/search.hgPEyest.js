import{_ as se}from"./nuxt-link.PQyyWz6J.js";import{_ as oe}from"./client-only.XfvCy8nb.js";import{u as ne,_ as ce}from"./event.ewUuC4F8.js";import{H as ae,o as c,c as i,a as e,J as le,h as re,g as ie,f as B,s as I,r as g,i as ue,a9 as _e,j as de,k as C,l as T,b as a,m as n,w as r,_ as pe,d as L,K as w,L as R,M as z,t as y,a7 as M,$ as O,p as me,e as fe,n as he}from"./entry.kq51Fg3O.js";import{$ as V}from"./func.-JA0-Hy7.js";import{_ as ve}from"./_plugin-vue_export-helper.x3n3nnut.js";import{_ as ge}from"./Input.CTz0GiOB.js";import{f as we}from"./forEach.MICG6K-7.js";import{N as ye}from"./Icon.zMbbtivR.js";import"./use-compitable.Iu7xpuxN.js";import"./moment.WSJ9un1t.js";import"./use-merged-state.lIriCt8y.js";import"./format-length.4l65r8M5.js";const xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ke=e("path",{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z",fill:"currentColor"},null,-1),qe=[ke],Ce=ae({name:"DeleteOutlined",render:function(_,d){return c(),i("svg",xe,qe)}}),H=u=>(me("data-v-f1fd8e68"),u=u(),fe(),u),Le={class:"container-full flex-col align-items-center header-mt-search"},He={class:"container flex-col"},$e={class:"p-10 flex-row"},be={class:"flex-out"},Ee={class:"px-10 flex-row justify-content-between align-items-center"},Se=H(()=>e("div",{class:"fs-16 fw-600"},"历史搜索",-1)),Ne={class:"px-10 mt-10"},Be=H(()=>e("div",{class:"px-10 mt-10"},[e("div",{class:"fs-16 fw-600"},"热门搜索")],-1)),Ie={class:"hot-list"},Te={class:"cover"},Re=["src"],ze={class:"px-10"},Me={class:"fw-600"},Oe={class:"mt-5 color-grey"},Ve={class:"flex-row justify-content-end pr-10"},je=H(()=>e("span",{class:"fs-12 color-grey"},"热度",-1)),De={class:"fs-12 color-orange"},Fe={__name:"search",async setup(u){let _,d;const x=le(),p=re(),$=ie(),{public:j}=he(),k=B.history(),D=B.glob(),{conf:F}=I(D),{keywords:b}=I(k);let f=g([]),E=g([]),h=g(!1),m=g(!1),s=ue({page:p.query.page||1,q:p.query.q||""});_e(()=>p.fullPath,async()=>{s.q=p.query.q||"",s.page=p.query.page||1,s.q!==""&&(m.value=!1,await v())},{deep:!0}),de({title:()=>`${s.q?s.q+",":""}${j.metaTitle}`}),ne(window,"scroll",async()=>{let t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset,l=document.documentElement.clientHeight,q=document.documentElement.scrollHeight;t+l>=q-32&&await v()});const A=C(()=>t=>V.strCut(t,8)),K=C(()=>t=>`${F.value.cover_url}${t}`),J=C(()=>t=>V.numFmt(t)),P=()=>{s.q="",x.back()},v=async()=>{if(k.keywordsAdd(s.q),m.value||h.value)return!1;h.value=!0,$.start();const t=await O.get("comic/search",s);t&&(s.page===1&&f.value.splice(0),t.result.list.length>0?(we(t.result.list,l=>{f.value.push(l)}),s.page++):m.value=!0),$.finish(),h.value=!1},U=t=>{t.code==="Enter"&&v()},Y=()=>{k.keywordsClear()},G=()=>{m.value=!1,s.page=1,f.value.splice(0),x.replace({path:"/search"})},Q=()=>{x.replace({path:"/search",query:{q:s.q}})},W=async()=>{const t=await O.get("comic/search_hot");t&&(E.value=t.result)};return s.q!==""&&([_,d]=T(()=>v()),await _,d()),[_,d]=T(()=>W()),await _,d(),(t,l)=>{const q=ge,S=pe,X=ye,N=se,Z=oe,ee=ce;return c(),i("div",Le,[e("div",He,[e("div",$e,[e("div",be,[a(q,{clearable:"",round:"",placeholder:"搜索",value:n(s).q,"onUpdate:value":l[0]||(l[0]=o=>n(s).q=o),onKeydown:U,onClear:G},null,8,["value"])]),e("div",null,[a(S,{color:"#ffd100","text-color":"#000",round:"",class:"ml-5",onClick:Q},{default:r(()=>[L("搜索")]),_:1}),a(S,{round:"",class:"ml-5",onClick:P},{default:r(()=>[L("取消")]),_:1})])]),a(Z,null,{default:r(()=>[n(b).length>0?(c(),i(w,{key:0},[e("div",Ee,[Se,a(X,{size:"24px",class:"pointer",onClick:Y},{default:r(()=>[a(n(Ce))]),_:1})]),e("div",Ne,[(c(!0),i(w,null,R(n(b),(o,te)=>(c(),z(N,{to:`/search?q=${o}`,replace:"",key:te,class:"history-kw mr-10 mb-10"},{default:r(()=>[L(y(A.value(o)),1)]),_:2},1032,["to"]))),128))])],64)):M("",!0),n(s).q===""?(c(),i(w,{key:1},[Be,e("div",Ie,[(c(!0),i(w,null,R(n(E),o=>(c(),z(N,{to:`/comic-${o.id}`,class:"item",key:o.id},{default:r(()=>[e("div",Te,[e("img",{src:K.value(o.cover)},null,8,Re)]),e("div",ze,[e("div",Me,y(o.title),1),e("div",Oe,y(o.last_vol),1)]),e("div",Ve,[je,e("span",De,y(J.value(o.score_sum)),1)])]),_:2},1032,["to"]))),128))])],64)):M("",!0)]),_:1}),a(ee,{isEnd:n(m),isLoading:n(h),comicList:n(f)},null,8,["isEnd","isLoading","comicList"])])])}}},st=ve(Fe,[["__scopeId","data-v-f1fd8e68"]]);export{st as default};
