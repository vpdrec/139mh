import{_ as k}from"./nuxt-link.Z8JjbOGd.js";import{I as y,r as i,f as B,g as N,J as $,i as p,c as j,a,b as s,w as o,o as q,d as u,$ as C,at as R,_ as V}from"./entry.6zLELcB1.js";import{m as I}from"./md5.V_qtkgdV.js";import{_ as L,a as S}from"./FormItem.yxg8Bq2X.js";import{_ as U}from"./Input.xsDAu9lE.js";import"./format-length.4l65r8M5.js";import"./use-merged-state.1oFZTRhw.js";const E={class:"container-full flex-col align-items-center header-mt-def"},H={class:"container flex-col align-items-center py-20"},J={class:"login_form"},M=a("h2",null,"用户登录",-1),O={class:"flex-row justify-content-end"},T={class:"flex-row align-items-center justify-content-end mt-10"},W=Object.assign({name:"login"},{__name:"login",setup(z){const f=y(),c=i(null),g=B.user(),_=N(),h=$();i(),i("");const t=p({email:"",password:""}),v=p({email:{required:!0,trigger:["blur","input"],message:"请输入邮箱并确保格式正确",type:"email"},password:{required:!0,trigger:["blur","input"],message:"请输入密码"}}),w=()=>{var r;(r=c.value)==null||r.validate(async e=>{if(!e){_.start();const n=await C.post("user/login",R({},t,{password:I(t.password)}),{server:!1});n&&(f.success("登录成功"),g.login(n.result),h.push({path:"/user"})),_.finish()}}).catch(()=>!1)};return(r,e)=>{const n=U,m=S,d=V,x=k,b=L;return q(),j("div",E,[a("div",H,[a("div",J,[M,s(b,{ref_key:"formRef",ref:c,model:t,rules:v,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:o(()=>[s(m,{label:"邮箱",path:"email"},{default:o(()=>[s(n,{value:t.email,"onUpdate:value":e[0]||(e[0]=l=>t.email=l),placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),s(m,{label:"密码",path:"password"},{default:o(()=>[s(n,{type:"password","show-password-on":"click",maxlength:32,value:t.password,"onUpdate:value":e[1]||(e[1]=l=>t.password=l),placeholder:"请输入密码"},null,8,["value"])]),_:1}),a("div",O,[s(d,{round:"",onClick:e[2]||(e[2]=l=>r.$router.back())},{default:o(()=>[u(" 返回 ")]),_:1}),s(d,{class:"ml-10",round:"",color:"#ffd100","text-color":"#000",onClick:w},{default:o(()=>[u(" 登录 ")]),_:1})]),a("div",T,[s(x,{to:"/user/reg",class:"fs-16"},{default:o(()=>[u("注册新用户！")]),_:1})])]),_:1},8,["model","rules"])])])])}}});export{W as default};
