import{_ as d,o as k,c as p,w as o,a as l,B as f,l as n,h as s,v as r,J as g,K as m,j as c,s as V,x as b,I as u,z as i}from"./index-DR8AH6H4.js";import{V as x}from"./VContainer-cpvgTsgK.js";const h={data(){return{token:"",user:{},BASE_API:"https://zerocat-api.houlangs.com"}},mounted(){i.islogin.value==!0&&this.$router.push("/")},async created(){if(this.$route.query.token)try{await b({url:"/account/magiclink/validate?token="+this.$route.query.token,method:"get"}).then(e=>{this.$toast.add({severity:e.status,summary:e.status,detail:e.message,life:3e3}),e.token&&(this.token=e.token,this.user=u(this.token),localStorage.setItem("token",this.token),this.user=u(localStorage.getItem("token")),console.log(this.user),i.loaduser(),this.$router.push({path:"/"}))})}catch(e){this.user=e}else console.log("无token")}};function y(e,t,C,$,a,B){return k(),p(x,null,{default:o(()=>[l(V,{class:"mx-auto",rel:"noopener",target:"_blank",border:""},{title:o(()=>t[0]||(t[0]=[s("span",null,"您正在登录一个账户",-1)])),subtitle:o(()=>t[1]||(t[1]=[s("span",null,"其他页面传来了一个登录请求，正常情况下它会被自动处理",-1)])),default:o(()=>[l(f,{class:"bg-surface-light pt-4"},{default:o(()=>[t[2]||(t[2]=n("传入的token是：")),t[3]||(t[3]=s("br",null,null,-1)),n(" "+r(a.token)+" ",1),t[4]||(t[4]=s("br",null,null,-1)),t[5]||(t[5]=s("br",null,null,-1)),t[6]||(t[6]=n("处理后的数据是：")),t[7]||(t[7]=s("br",null,null,-1)),n(" "+r(a.user),1)]),_:1}),l(g,null,{default:o(()=>[l(m),l(c,{color:"primary",text:"返回登录",variant:"tonal",to:"/account/login",onClick:e.login},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const S=d(h,[["render",y]]);export{S as default};
