import{H as N,n as $,r as y,a1 as q,aH as B,av as C,o as k,M as I,aP as S,aQ as U,I as j,f as R,J as T,g as H,i as x,c as K,a as u,b as o,w as r,d as h,$ as M,at as A,_ as L}from"./entry.97bRhgXt.js";import{_ as O}from"./nuxt-link.THywRkbX.js";import{m as D}from"./md5.V_qtkgdV.js";import{_ as E,a as J}from"./FormItem.uzMS6-TK.js";import{_ as P}from"./Input.MIfBTSOE.js";import"./format-length.4l65r8M5.js";import"./use-merged-state.pz2_tXAx.js";const Q=N({__name:"NuxtTurnstile",props:{modelValue:{type:String,required:!1},element:{type:String,default:"div"},siteKey:{type:String,required:!1},options:{type:Object,default:()=>({})},resetInterval:{type:Number,default:1e3*250}},emits:["update:modelValue"],setup(f,{expose:g,emit:c}){const i=f,v=c,d=$().public.turnstile,t=U(),p=y(),m=y(!1);let s,e;const n=()=>{s&&t.$turnstile.reset(s)},l=()=>{m.value=!0,clearInterval(e),s&&t.$turnstile.remove(s)};return q(async()=>{await B(),s=await t.$turnstile.render(p.value,{sitekey:i.siteKey||d.siteKey,...i.options,callback:_=>v("update:modelValue",_)}),e=setInterval(n,i.resetInterval),m.value&&l()}),C(l),g({reset:n}),(_,w)=>(k(),I(S(f.element),{ref_key:"el",ref:p},null,512))}}),z={class:"container-full flex-col align-items-center header-mt-def"},F={class:"container flex-col align-items-center py-20"},G={class:"login_form"},W=u("h2",null,"用户注册",-1),X={class:"flex-col align-items-center"},Y={class:"flex-row justify-content-end mt-10"},Z={class:"flex-row align-items-center justify-content-end mt-10"},le=Object.assign({name:"reg"},{__name:"reg",setup(f){const g=j(),c=y(null),i=R.user(),v=T(),d=H(),t=x({email:"",password:"",re_password:"",cf_token:""}),p=x({email:{key:"code",required:!0,trigger:["blur","input"],message:"请输入邮箱并确保格式正确",type:"email"},password:{required:!0,trigger:["blur","input"],message:"请输入密码，最少8位",validator:(s,e)=>e.length>=8},re_password:{required:!0,trigger:["blur","input"],message:"确认密码错误",validator:(s,e)=>e===t.password}}),m=()=>{var s;(s=c.value)==null||s.validate(async e=>{if(!e){d.start();const n=await M.post("user/reg",A({},t,{password:D(t.password)}),{server:!1});n&&(g.success("注册成功"),i.login(n.result),v.push({path:"/user"})),d.finish()}}).catch(()=>!1)};return(s,e)=>{const n=P,l=J,_=Q,w=L,b=O,V=E;return k(),K("div",z,[u("div",F,[u("div",G,[W,o(V,{ref_key:"formRef",ref:c,model:t,rules:p,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:r(()=>[o(l,{label:"邮箱",path:"email"},{default:r(()=>[o(n,{value:t.email,"onUpdate:value":e[0]||(e[0]=a=>t.email=a),placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),o(l,{label:"密码",path:"password"},{default:r(()=>[o(n,{type:"password","show-password-on":"click",maxlength:32,value:t.password,"onUpdate:value":e[1]||(e[1]=a=>t.password=a),placeholder:"请输入密码"},null,8,["value"])]),_:1}),o(l,{label:"确认密码",path:"re_password"},{default:r(()=>[o(n,{type:"password","show-password-on":"click",maxlength:32,value:t.re_password,"onUpdate:value":e[2]||(e[2]=a=>t.re_password=a),placeholder:"请输入确认密码"},null,8,["value"])]),_:1}),u("div",X,[o(_,{ref:"turnstile",modelValue:t.cf_token,"onUpdate:modelValue":e[3]||(e[3]=a=>t.cf_token=a)},null,8,["modelValue"])]),u("div",Y,[o(w,{round:"",onClick:e[4]||(e[4]=a=>s.$router.back())},{default:r(()=>[h(" 返回 ")]),_:1}),o(w,{class:"ml-10",round:"",color:"#ffd100","text-color":"#000",onClick:m},{default:r(()=>[h(" 注册 ")]),_:1})]),u("div",Z,[o(b,{to:"/user/login",class:"fs-16"},{default:r(()=>[h("登录")]),_:1})])]),_:1},8,["model","rules"])])])])}}});export{le as default};
