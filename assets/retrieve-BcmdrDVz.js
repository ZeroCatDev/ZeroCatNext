import{_ as f}from"./LoadingDialog-DCvjNWmR.js";import{_ as x,l as d,h as _,r as v,o as y,e as w,j as l,a as e,w as t,q as c,s as r,E as V,m as i,p as C,v as k,F as R}from"./index-Dnyw85MB.js";import"https://static.geetest.com/v4/gt4.js";import{i as m,g as p,r as b}from"./useRecaptcha-D4VPpSaq.js";import{V as B}from"./VForm-Bb3DhNI5.js";const z={components:{LoadingDialog:f},data(){return{BASE_API:"https://zerocat-api.houlangs.com",email:"",tryinguser:{},loading:!1,initRecaptcha:m,getResponse:p,resetCaptcha:b,emailRules:[s=>s?!0:"必须填写邮箱",s=>/.+@.+\..+/.test(s)?!0:"不符合格式"],usernameRules:[s=>s?!0:"必须填写用户名"]}},created(){d.islogin.value==!0&&this.$router.push("/")},setup(){m("recaptcha-div","float")},methods:{async login(){if(this.loading=!0,this.tryinguser=await _({url:"/account/repw",method:"post",data:{captcha:p(),un:this.email}}),this.tryinguser.message!="OK"){this.loading=!1,this.$toast.add({severity:"info",summary:"info",detail:this.tryinguser.msg||this.tryinguser.message,life:3e3});return}this.loading=!1,d.setuser(this.tryinguser.token),console.log(this.tryinguser),(this.tryinguser.msg||this.tryinguser.message=="OK")&&this.$router.push("/")},addtoast(s){this.$toast.add({severity:"info",summary:"info",detail:s,life:3e3})}}},F={class:"auth-wrapper d-flex align-center justify-center pa-4"};function N(s,a,E,$,o,g){const n=v("v-cardtext"),h=f;return y(),w(R,null,[l("div",F,[e(k,{class:"auth-card pa-4 pt-7","max-width":"448",border:""},{default:t(()=>[e(c,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(n,null,{default:t(()=>a[2]||(a[2]=[l("h5",{class:"text-h5 font-weight-semibold mb-1"}," 欢迎来到ZeroCatNext！ 👋🏻 ",-1),l("p",{class:"mb-0"},"找回密码",-1)])),_:1})]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(B,null,{default:t(()=>[e(c,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(V,{label:"邮箱",type:"text",modelValue:o.email,"onUpdate:modelValue":a[0]||(a[0]=u=>o.email=u),variant:"outlined",rules:o.emailRules},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"9"},{default:t(()=>a[3]||(a[3]=[l("div",{id:"recaptcha-div"},null,-1)])),_:1}),e(r,{cols:"3"},{default:t(()=>[e(i,{onClick:a[1]||(a[1]=u=>o.resetCaptcha()),variant:"text"},{default:t(()=>a[4]||(a[4]=[C("刷新")])),_:1})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(i,{class:"text-none",color:"primary",rounded:"xl",text:"找回密码",variant:"flat",size:"large",onClick:g.login,"append-icon":"mdi-arrow-right"},null,8,["onClick"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(i,{class:"text-none",color:"white",rounded:"xl",text:"登录",variant:"text",size:"large","append-icon":"mdi-arrow-right",to:"/account/login"}),e(i,{class:"text-none",color:"white",rounded:"xl",text:"注册",variant:"text",size:"large","append-icon":"mdi-arrow-right",to:"/account/register"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),e(h,{show:o.loading,text:"正在发送邮件"},null,8,["show"])],64)}const L=x(z,[["render",N]]);export{L as default};