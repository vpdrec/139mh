import{_ as ft}from"./nuxt-link._a9N7PSJ.js";import{_ as vt}from"./client-only.Bt5JNs3v.js";import{S as U,q as I,v as mt,x as ht,y as tt,z as pt,A as G,B as E,C as wt,D as gt,E as xt,F as $t,G as R,H as A,o as r,c as h,a as n,I as bt,r as k,g as yt,h as kt,J as Lt,f as q,s as J,j as Ct,k as F,l as zt,b as _,w as i,t as w,K as V,L as j,M as $,_ as Mt,d as g,m as b,p as At,e as Ht,N as Q,$ as W,n as Bt}from"./entry.Oww5E9ug.js";import{$ as St}from"./emitter.Fv6qbJ0I.js";import{$ as Ot}from"./func.-JA0-Hy7.js";import{_ as Ft}from"./_plugin-vue_export-helper.x3n3nnut.js";import{b as Vt,a as jt,f as Kt}from"./forEach.CzJ7eyWb.js";import{L as Tt}from"./LeftOutlined.nr-aIQ96.js";import{f as Dt}from"./find.5O1Tc77X.js";import{_ as Et}from"./Result.28K3lK1O.js";import{_ as Nt,a as Pt}from"./BreadcrumbItem.4WdAQrtI.js";import{N as Ut}from"./Icon.NsU-F02S.js";import"./moment.WSJ9un1t.js";import"./format-length.4l65r8M5.js";var X=U?U.isConcatSpreadable:void 0;function Gt(t){return I(t)||mt(t)||!!(X&&t&&t[X])}function et(t,e,a,c,s){var o=-1,u=t.length;for(a||(a=Gt),s||(s=[]);++o<u;){var f=t[o];e>0&&a(f)?e>1?et(f,e-1,a,c,s):ht(s,f):c||(s[s.length]=f)}return s}function Rt(t,e,a){var c;return a(t,function(s,o,u){if(e(s,o,u))return c=o,!1}),c}function Y(t,e){return Rt(t,tt(e),Vt)}function qt(t,e){var a=-1,c=pt(t)?Array(t.length):[];return jt(t,function(s,o,u){c[++a]=e(s,o,u)}),c}function Jt(t,e){var a=t.length;for(t.sort(e);a--;)t[a]=t[a].value;return t}function Qt(t,e){if(t!==e){var a=t!==void 0,c=t===null,s=t===t,o=G(t),u=e!==void 0,f=e===null,v=e===e,m=G(e);if(!f&&!m&&!o&&t>e||o&&u&&v&&!f&&!m||c&&u&&v||!a&&v||!s)return 1;if(!c&&!o&&!m&&t<e||m&&a&&s&&!c&&!o||f&&a&&s||!u&&s||!v)return-1}return 0}function Wt(t,e,a){for(var c=-1,s=t.criteria,o=e.criteria,u=s.length,f=a.length;++c<u;){var v=Qt(s[c],o[c]);if(v){if(c>=f)return v;var m=a[c];return v*(m=="desc"?-1:1)}}return t.index-e.index}function Xt(t,e,a){e.length?e=E(e,function(o){return I(o)?function(u){return gt(u,o.length===1?o[0]:o)}:o}):e=[wt];var c=-1;e=E(e,xt(tt));var s=qt(t,function(o,u,f){var v=E(e,function(m){return m(o)});return{criteria:v,index:++c,value:o}});return Jt(s,function(o,u){return Wt(o,u,a)})}var Yt=Array.prototype,Zt=Yt.reverse;function It(t){return t==null?t:Zt.call(t)}var Z=$t(function(t,e){if(t==null)return[];var a=e.length;return a>1&&R(t,e[0],e[1])?e=[]:a>2&&R(e[0],e[1],e[2])&&(e=[e[0]]),Xt(t,et(e,1),[])});const te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ee=n("path",{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z",fill:"currentColor"},null,-1),ne=[ee],se=A({name:"ArrowDownOutlined",render:function(e,a){return r(),h("svg",te,ne)}}),oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},le=n("path",{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z",fill:"currentColor"},null,-1),ae=[le],ce=A({name:"ArrowUpOutlined",render:function(e,a){return r(),h("svg",oe,ae)}}),re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ie=n("path",{d:"M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3l6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5l48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z",fill:"currentColor"},null,-1),ue=[ie],de=A({name:"ReadOutlined",render:function(e,a){return r(),h("svg",re,ue)}}),_e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},fe=n("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z",fill:"currentColor"},null,-1),ve=[fe],me=A({name:"StarFilled",render:function(e,a){return r(),h("svg",_e,ve)}}),he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},pe=n("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7l-152.8 148.9z",fill:"currentColor"},null,-1),we=[pe],ge=A({name:"StarOutlined",render:function(e,a){return r(),h("svg",he,we)}}),L=t=>(At("data-v-7515e976"),t=t(),Ht(),t),xe={class:"container-full flex-col align-items-center header-mt-def"},$e={key:0,class:"container"},be={class:"flex-row justify-content-between align-items-center mt-10"},ye={class:"detail-grid mt-10"},ke={class:"detail-cover-info-grid"},Le={class:"detail-cover"},Ce=["src"],ze=["src"],Me={class:"detail-info"},Ae={class:"fw-600 fs-16"},He={class:"tb-filed mt-10 w-100"},Be=L(()=>n("th",{width:"15%"},"作者：",-1)),Se={width:"35%"},Oe=L(()=>n("th",{width:"15%"},"地区：",-1)),Fe={width:"35%"},Ve={key:1},je=L(()=>n("th",null,"分类：",-1)),Ke={colspan:"3"},Te=L(()=>n("th",null,"进度：",-1)),De={colspan:"3"},Ee={class:"fav-read flex-row mt-10 justify-content-center"},Ne=["innerHTML"],Pe={class:"p-10"},Ue={class:"flex-row justify-content-between"},Ge=L(()=>n("div",{class:"fs-18 fw-600"},"章节列表",-1)),Re={class:"flex-row flex-wrap"},qe={class:"hot"},Je=L(()=>n("div",{class:"fs-18 fw-600"},"热门推荐",-1)),Qe={class:"mt-10 hot-list"},We={class:"cover"},Xe=["src"],Ye={class:"info"},Ze={class:"txt txt-sigle fw-600 fs-14"},Ie={class:"txt txt-sigle mt-10 fs-12"},tn={__name:"comic-[id]",async setup(t){let e,a;const c=bt(),s=k(null),o=k([]),u=k([]),f=k("asc"),v=k(!1),m=k(!1),H=yt(),nt=kt(),st=Lt(),B=parseInt(nt.params.id),ot=q.history(),lt=q.glob(),{list:K}=J(ot),{conf:C}=J(lt),{public:S}=Bt(),N=()=>{let l="";if(s.value){let p=Y(C.value.area,{val:s.value.area}),x=`${s.value.title},更新至${s.value.last_vol}`,O=C.value.area[p].label,z="";Kt(s.value.cata_list,y=>{z=`${z},${y.title}`}),l=`${x},${O}${z}`}return l};Ct({title:()=>{let l=N();return`${l?l+",":""}${S.metaTitle}`},keywords:()=>{let l=N();return`${l?l+",":""}${S.metaKeywords}`},description:()=>`${s.value?s.value.summary:""},${S.metaDescription}`});const T=F(()=>l=>`${C.value.cover_url}${l}`),D=F(()=>l=>Y(C.value.area,{val:l})),at=F(()=>l=>{const p=Dt(S.progress,{status:l});return p!==void 0?p.label:"连载中"}),ct=F(()=>Q(K.value,{comic_id:B})>-1?"继续阅读":"开始阅读"),rt=()=>{let l=0;const p=Q(K.value,{comic_id:B});p>-1?l=K.value[p].vol_id:l=o.value[0].id,st.push({path:`/comic/vol-${l}`})},P=async()=>{m.value=!0,H.start();const l=await W.post("fav/add",{id:B},{server:!1});l&&(c.success(`收藏${l.result?"添加":"取消"}完成`),v.value=l.result,St().emit("FAV_ADD")),H.finish(),m.value=!1},it=async()=>{H.start();const l=await W.get("comic/detail",{id:B});l&&(s.value=l.result.info,u.value=l.result.hot_list,o.value=l.result.vol_list,v.value=l.result.is_fav),H.finish()},ut=()=>{f.value==="asc"?(f.value="desc",o.value=It(Z(o.value,["vol_no"]))):(f.value="asc",o.value=Z(o.value,["vol_no"]))};return[e,a]=zt(()=>it()),await e,a(),(l,p)=>{const x=ft,O=Pt,z=Nt,y=Ut,M=Mt,dt=vt,_t=Et;return r(),h("div",xe,[s.value?(r(),h("div",$e,[n("div",be,[_(z,{class:"ml-5"},{default:i(()=>[_(O,null,{default:i(()=>[_(x,{to:"/"},{default:i(()=>[g("首页")]),_:1})]),_:1}),_(O,{class:"fs-14"},{default:i(()=>[g(w(("$func"in l?l.$func:b(Ot)).strCut(s.value.title,14)),1)]),_:1})]),_:1}),_(M,{round:"",size:"small",secondary:"",class:"mr-10",onClick:p[0]||(p[0]=d=>l.$router.back())},{default:i(()=>[_(y,null,{default:i(()=>[_(b(Tt))]),_:1}),g("返回")]),_:1})]),n("div",ye,[n("div",null,[n("div",ke,[n("div",null,[n("div",Le,[n("img",{src:T.value(s.value.cover),class:"bg"},null,8,Ce),n("img",{src:T.value(s.value.cover),class:"front"},null,8,ze)])]),n("div",null,[n("div",Me,[n("div",Ae,w(s.value.title),1),n("table",He,[n("tbody",null,[n("tr",null,[Be,n("td",Se,[(r(!0),h(V,null,j(s.value.auth,d=>(r(),$(x,{key:d.id,class:"mr-10",to:`/auth-${d.id}`},{default:i(()=>[g(w(d.auth_name),1)]),_:2},1032,["to"]))),128))]),Oe,n("td",Fe,[D.value(s.value.area)?(r(),$(x,{key:0,to:`/index-${D.value(s.value.area)}`},{default:i(()=>[g(w(b(C).area[D.value(s.value.area)].label),1)]),_:1},8,["to"])):(r(),h("span",Ve,"未知"))])]),n("tr",null,[je,n("td",Ke,[(r(!0),h(V,null,j(s.value.cata_list,d=>(r(),$(x,{key:d.id,class:"mr-10",to:`/index-all-${d.alias}`},{default:i(()=>[g(w(d.title),1)]),_:2},1032,["to"]))),128))])]),n("tr",null,[Te,n("td",De,w(at.value(s.value.progress)),1)])])]),_(dt,null,{default:i(()=>[n("div",Ee,[v.value?(r(),$(M,{key:1,disabled:m.value,round:"",size:"large",color:"#ffd100","text-color":"#000",onClick:P},{default:i(()=>[_(y,{size:"20px",class:"mr-5"},{default:i(()=>[_(b(me))]),_:1}),g("已收藏")]),_:1},8,["disabled"])):(r(),$(M,{key:0,disabled:m.value,round:"",color:"#ffd100",size:"large","text-color":"#000",onClick:P},{default:i(()=>[_(y,{size:"20px",class:"mr-5"},{default:i(()=>[_(b(ge))]),_:1}),g("收藏")]),_:1},8,["disabled"])),_(M,{round:"",class:"ml-20",color:"#222","text-color":"#fff200",size:"large",onClick:rt},{default:i(()=>[_(y,{size:"20px",class:"mr-5"},{default:i(()=>[_(b(de))]),_:1}),g(w(ct.value),1)]),_:1})])]),_:1}),n("div",{class:"mt-10 word-wrap",innerHTML:s.value.summary||"概要暂无..."},null,8,Ne)])])]),n("div",Pe,[n("div",Ue,[Ge,_(M,{round:"",onClick:p[1]||(p[1]=d=>ut())},{icon:i(()=>[_(y,null,{default:i(()=>[f.value==="asc"?(r(),$(b(ce),{key:0})):(r(),$(b(se),{key:1}))]),_:1})]),default:i(()=>[g(" "+w(f.value==="asc"?"升序":"降序"),1)]),_:1})]),n("div",Re,[(r(!0),h(V,null,j(o.value,d=>(r(),h("div",{class:"vol-item",key:d.id},[_(x,{class:"label",to:`/comic/vol-${d.id}`},{default:i(()=>[g(w(d.title),1)]),_:2},1032,["to"])]))),128))])])]),n("div",qe,[Je,n("div",Qe,[(r(!0),h(V,null,j(u.value,d=>(r(),$(x,{class:"hot-item",key:d.id,to:`/comic-${d.id}`},{default:i(()=>[n("div",We,[n("img",{src:T.value(d.cover)},null,8,Xe)]),n("div",Ye,[n("div",Ze,w(d.title),1),n("div",Ie,w(d.last_vol),1)])]),_:2},1032,["to"]))),128))])])])])):(r(),$(_t,{key:1,class:"mt-10",status:"404",title:"404 资源不存在",description:"生活总归带点荒谬"}))])}}},hn=Ft(tn,[["__scopeId","data-v-7515e976"]]);export{hn as default};