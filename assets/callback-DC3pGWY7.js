import{_ as i,a5 as n,G as p,o as d,c as k,w as s,a,K as e,a1 as f,O as o,Y as u,T as g}from"./index-DGh90Ang.js";import{V as b}from"./VContainer-1Loe4K8h.js";const m={data(){return{token:this.$route.query.token||"无",user:{},BASE_API:"https://zerocat-api.houlangs.com"}},async created(){if(this.$route.query.token)try{this.user=n(this.token),localStorage.setItem("token",this.token),this.user=n(localStorage.getItem("token")),console.log(this.user),p.loaduser(),this.$router.push({path:"/"})}catch(r){this.user=r}else console.log("无token")}};function x(r,t,V,y,l,$){return d(),k(b,null,{default:s(()=>[a(g,{class:"mx-auto",rel:"noopener",target:"_blank",border:""},{title:s(()=>t[0]||(t[0]=[e("span",null,"您正在登录一个账户",-1)])),subtitle:s(()=>t[1]||(t[1]=[e("span",null,"其他页面传来了一个登录请求，正常情况下它会被自动处理",-1)])),default:s(()=>[a(f,{class:"bg-surface-light pt-4"},{default:s(()=>[t[2]||(t[2]=o("传入的token是：")),t[3]||(t[3]=e("br",null,null,-1)),o(" "+u(l.token)+" ",1),t[4]||(t[4]=e("br",null,null,-1)),t[5]||(t[5]=e("br",null,null,-1)),t[6]||(t[6]=o("处理后的数据是：")),t[7]||(t[7]=e("br",null,null,-1)),o(" "+u(l.user),1)]),_:1})]),_:1})]),_:1})}const S=i(m,[["render",x]]);export{S as default};
