import{_ as ae}from"./nuxt-link.p76U6641.js";import{H as se,o,c as l,a as e,h as V,J as oe,f as A,s as I,r as R,i as le,a9 as re,k as _,l as ne,b as f,w as b,d as C,m as a,K as w,M as ce,t as d,av as u,a7 as M,a8 as ie,ag as ue,L as k,n as de,p as E,e as W,b9 as _e}from"./entry.gxCAEJoH.js";import{$ as pe}from"./emitter.cCWkAcws.js";import{_ as G}from"./_plugin-vue_export-helper.x3n3nnut.js";import{f as j}from"./find.1YnH3a20.js";import{N as fe}from"./Icon.OcMKhnvY.js";import{_ as me}from"./Affix.LWJEbGuv.js";import"./format-length.4l65r8M5.js";const ve={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ge=e("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",fill:"currentColor"},null,-1),he=[ge],be=se({name:"SearchOutlined",render:function(v,m){return o(),l("svg",ve,he)}}),q=n=>(E("data-v-af13b1e2"),n=n(),W(),n),xe={class:"container-full bg-dark flex-col align-items-center"},we={class:"container border-box px-10 flex-row justify-content-between align-items-center header-height"},ke=q(()=>e("a",{href:"https://api.mx212.com/index.html",target:"_blank",class:"color-white ml-10"},"APP下载",-1)),Ce={key:0,class:"container-full flex-col align-items-center bg-white"},$e={class:"container flex-col"},ye={class:"flex-row border-box pr-10 bb header-height justify-content-between align-items-center"},Se={class:"tag-item act"},Le=q(()=>e("span",{class:"ml-5"},"搜索",-1)),je={class:"header-cata"},Ae={class:"main flex-col align-items-center"},Ie={class:"container"},De={class:"flex-row flex-wrap border-box pr-10 bb mt-10"},Ne=["onClick"],Oe=["onClick"],Re=["onClick"],Pe={class:"flex-row flex-wrap border-box pr-10 bb mt-10"},Te=["onClick"],ze={class:"flex-row border-box flex-wrap pr-10 bb mt-10"},Be=["onClick"],Fe={__name:"HeaderDefault",props:{pageAct:{type:String,required:!0}},async setup(n){let v,m;const p=V(),$=oe(),x=A.cata(),y=A.glob(),P=A.user(),{list:D}=I(x),{info:Ke,isLogin:J}=I(P),{conf:N}=I(y),{public:T}=de(),z=n,B=R(null);let S=R(!1),t=le({page:1,area:"all",subject:"all",progress:"all",order:"hot"}),F=R([{label:"最热",val:"hot"},{label:"最新",val:"last"}]);re(()=>p.fullPath,()=>{t.page=p.params.page||1,t.area=p.params.area||"all",t.subject=p.params.subject||"all",t.progress=p.params.progress||"all",t.order=p.params.order||"hot"},{deep:!0,immediate:!0}),pe().on("FILTER_TOGGLE",()=>{O()});const K=_(()=>r=>N.value.area[r]?N.value.area[r].label:"地区"),X=_(()=>r=>D.value.length>0?j(D.value,{alias:r}).children:[]),Y=_(()=>r=>{const i=j(T.progress,{val:r});return i?i.label:"进度"}),Q=_(()=>(r,i)=>{const h=X.value(r),L=j(h,{alias:i});return L?L.title:"分类"}),U=_(()=>{let r=j(F.value,{val:t.order});return r?r.label:"最热"}),Z=_(()=>["default","search"].indexOf(z.pageAct)>-1),ee=_(()=>["default"].indexOf(z.pageAct)>-1),g=(r,i)=>{t.page=1,t[r]=i,S.value=!1,$.push({path:`/index-${t.area}-${t.subject}-${t.progress}-${t.order}-${t.page}`})},O=()=>{S.value=!S.value};return[v,m]=ne(()=>x.getList()),await v,m(),(r,i)=>{const h=ae,L=fe,te=me;return Z.value?(o(),l("div",{key:0,ref_key:"mainRef",ref:B},[f(te,{top:0,"trigger-top":0,"listen-to":()=>B.value,class:"container-full zi-2"},{default:b(()=>[e("div",xe,[e("div",we,[e("div",null,[f(h,{class:"logo",to:"/"},{default:b(()=>[C("漫画公社")]),_:1})]),e("div",null,[a(J)?(o(),l(w,{key:0},[f(h,{class:"color-white",to:"/user/fav"},{default:b(()=>[C("书架")]),_:1}),f(h,{class:"color-white ml-10",to:"/user/recharge"},{default:b(()=>[C("充值")]),_:1})],64)):(o(),ce(h,{key:1,class:"color-white",to:"/user/login"},{default:b(()=>[C("登录")]),_:1})),ke])])]),ee.value?(o(),l("div",Ce,[e("div",$e,[e("div",ye,[e("div",{class:"flex-row",onClick:O},[e("div",Se,[e("span",null,d(U.value),1)]),e("div",{class:u(["tag-item",{act:a(t).area!=="all"}])},[e("span",null,d(K.value(a(t).area)),1)],2),e("div",{class:u(["tag-item",{act:a(t).subject!=="all"}])},[e("span",null,d(Q.value("subject",a(t).subject)),1)],2),e("div",{class:u(["tag-item",{act:a(t).progress!=="all"}])},[e("span",null,d(Y.value(a(t).progress)),1)],2)]),f(h,{to:"/search",class:"search-link flex-row align-items-center"},{default:b(()=>[f(L,{size:"18px"},{default:b(()=>[f(a(be))]),_:1}),Le]),_:1})])])])):M("",!0)]),_:1},8,["listen-to"]),ie(e("div",je,[e("div",{class:"mask",onClick:O}),e("div",Ae,[e("div",Ie,[e("div",De,[e("div",{class:u(["cata-item",{act:a(t).area==="all"}]),onClick:i[0]||(i[0]=s=>g("area","all"))}," 全部 ",2),(o(!0),l(w,null,k(a(N).area,(s,c)=>(o(),l("div",{class:u(["cata-item",{act:a(t).area===c}]),onClick:H=>g("area",c),key:c},d(s.label),11,Ne))),128))]),(o(!0),l(w,null,k(a(D),s=>(o(),l("div",{key:s.alias,class:"flex-row flex-wrap border-box pr-10 bb mt-10"},[e("div",{class:u(["cata-item",{act:a(t)[s.alias]==="all"}]),onClick:c=>g(s.alias,"all")}," 全部 ",10,Oe),(o(!0),l(w,null,k(s.children,c=>(o(),l("div",{class:u(["cata-item",{act:a(t)[s.alias]===c.alias}]),onClick:H=>g(s.alias,c.alias),key:c.alias},d(c.title),11,Re))),128))]))),128)),e("div",Pe,[e("div",{class:u(["cata-item",{act:a(t).progress==="all"}]),onClick:i[1]||(i[1]=s=>g("progress","all"))}," 全部 ",2),(o(!0),l(w,null,k(a(T).progress,(s,c)=>(o(),l("div",{class:u(["cata-item",{act:a(t).progress===s.val}]),onClick:H=>g("progress",s.val),key:c},d(s.label),11,Te))),128))]),e("div",ze,[(o(!0),l(w,null,k(a(F),s=>(o(),l("div",{class:u(["cata-item",{act:a(t).order===s.val}]),onClick:c=>g("order",s.val),key:s.val},d(s.label),11,Be))),128))])])])],512),[[ue,a(S)]])],512)):M("",!0)}}},He=G(Fe,[["__scopeId","data-v-af13b1e2"]]),Me=n=>(E("data-v-bb02b248"),n=n(),W(),n),Ve={class:"footer container-full py-10 flex-col align-items-center color-grey"},Ee={class:"fs-12"},We={class:"fs-12"},Ge=Me(()=>e("div",null,[e("a",{href:"https://api.mx212.com/index.html",target:"_blank",class:"mr-5"},"APP下载"),C("| "),e("a",{href:"https://mhgs8.com",target:"_blank",class:"ml-5"},"永久发布页")],-1)),qe={__name:"FooterDefault",setup(n){const v=A.glob(),{conf:m}=I(v),$=new Date().getFullYear();_(()=>m.value.site_name);const x=_(()=>m.value.comic_count||0);return(y,P)=>(o(),l("div",Ve,[e("div",Ee," Copyright © 1999-"+d(a($)),1),e("div",We," WWW.MX212.COM 海量在线漫画平台 "+d(x.value),1),Ge]))}},Je=G(qe,[["__scopeId","data-v-bb02b248"]]),st={__name:"default",setup(n){const v=V(),m=_(()=>v.meta.index||"default");return(p,$)=>{const x=He,y=Je;return o(),l("div",null,[f(x,{pageAct:a(m)},null,8,["pageAct"]),_e(p.$slots,"default"),f(y)])}}};export{st as default};
