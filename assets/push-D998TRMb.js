import{_ as d,G as c,I as a,o as h,c as j,w as o,K as r,O as s,Y as i,a as l,T as p,M as m}from"./index-DGh90Ang.js";import{V as x}from"./VContainer-1Loe4K8h.js";const f={data(){return{project:{},localuser:c,checkprotect:!0}},async created(){await this.getproject(),!this.localuser.user&&this.project.authorid!=this.localuser.user.id&&(this.$toast.add({severity:"error",summary:"错误",detail:"您不是项目所有者或您未登录",life:3e3}),this.$router.push("/"))},methods:{async getproject(){this.project=await a({url:"/project/"+this.$route.params.id,method:"get"}),console.log(this.project)},async pushproject(n){await a({url:"/project/"+n+"/push",method:"post"}).then(t=>{console.log(t),this.$toast.add({severity:"success",summary:"成功",detail:"推送成功",life:3e3}),t.status=="1"&&this.$router.push("/projects/"+this.project.id)}).catch(t=>{console.log(t),this.$toast.add({severity:"error",summary:"错误",detail:t,life:3e3})})}}},y={class:"d-flex justify-space-between"},b={class:"text-h4"},g=["textContent"],v=["textContent"];function w(n,t,C,V,e,u){return h(),j(x,{class:"pa-md-12"},{default:o(()=>[r("div",y,[r("h1",b,[t[1]||(t[1]=s("推送 ")),r("span",{textContent:i(e.project.title)},null,8,g)])]),t[6]||(t[6]=r("br",null,null,-1)),l(p,{hover:"",border:""},{title:o(()=>[s(i(e.project.title),1)]),subtitle:o(()=>[s(" 发布于："+i(e.project.time)+"，"+i(e.project.view_count)+"次浏览 ",1)]),text:o(()=>[s(i(e.project.description),1)]),_:1}),t[7]||(t[7]=r("br",null,null,-1)),l(p,{hover:"",border:""},{title:o(()=>t[2]||(t[2]=[s(" 你正在推送你的项目 ")])),subtitle:o(()=>t[3]||(t[3]=[s(" 等等，确认点事 ")])),text:o(()=>[t[4]||(t[4]=s(" 你正在推送 ")),r("span",{textContent:i(e.project.title)},null,8,v),t[5]||(t[5]=s(" ，这将会从项目开发分支代码复制到生产分支，并创建一份历史记录，您的用户将会看到新的作品。请确认项目中不含有个人隐私信息，违规的、不适宜分发的内容。建议您在推送前先进行测试，包含正在测试中的内容的版本可以新建项目用于发布，而不是发表在主项目中。 "))]),_:1}),t[8]||(t[8]=r("br",null,null,-1)),l(m,{class:"text-none",color:"primary",rounded:"xl",text:"Push",variant:"flat",size:"large",onClick:t[0]||(t[0]=k=>u.pushproject(e.project.id)),"append-icon":"mdi-arrow-right",disabled:!e.checkprotect},null,8,["disabled"])]),_:1})}const _=d(f,[["render",w]]);export{_ as default};
