import{_ as u}from"./Comment-BMFOjUr0.js";import{_ as d}from"./ProjectsCards-DFWX5SYb.js";import{_ as h,H as c,G as p,J as g,o as j,c as V,w as e,a as t,L as l,U as o,X as C,Y as a,O as r}from"./index-BQz6CGtP.js";import{V as n}from"./VChip-bgzTftaJ.js";import{a as b,V as x}from"./VCard-Vl8Qdg4S.js";import{V as L}from"./VContainer-DWbEN9M0.js";import"./VForm-Bw1h9r-m.js";import"./VTextarea-D8QkYrkC.js";import"./VDialog-Bki-s5MR.js";import"./43-lazyload-CBkwrR6M.js";import"./VRow-D_lBre29.js";/* empty css              */const T={components:{ProjectsCards:d,Comment:u},data(){return{localuser:c,projectlist:{status:"1",message:"加载中",data:{id:7,authorid:1,title:"加载中",description:"加载中",state:"private",list:"",updateTime:null,createTime:"2000-00-01T00:00:00.000Z",data:{projects:[],users:[]}}},localuser:c,Loading:!0}},setup(){p({title:"ZeroCat - 列表"})},async created(){this.localuser.islogin==!1&&this.$router.push("/account/login")},methods:{async getprojectlist(){this.projectlist=await g({url:"/projectlist/"+this.$route.params.id,method:"get"}),this.projectlist.status=="1"?this.projectlist=this.projectlist.data:this.$router.push("/404"),p({title:""+this.projectlist.title}),console.log(this.projectlist)}},mounted(){this.Loading=!0,this.getprojectlist(),this.Loading=!1}},k={class:"font-weight-black"};function w(v,i,y,B,s,I){const m=d,_=u;return j(),V(L,null,{default:e(()=>[t(x,{class:"mx-auto",disabled:s.Loading,loading:s.Loading,border:""},{title:e(()=>[l("span",k,o(s.projectlist.title),1)]),loader:e(({isActive:f})=>[t(C,{active:f,height:"4",indeterminate:""},null,8,["active"])]),subtitle:e(()=>[t(n,null,{default:e(()=>[t(a,{icon:"mdi-account-circle",start:""}),r(" ID:"+o(s.projectlist.id),1)]),_:1}),t(n,null,{default:e(()=>[t(a,{icon:"mdi-account-circle",start:""}),r(" "+o(s.projectlist.state),1)]),_:1}),t(n,null,{default:e(()=>[t(a,{icon:"mdi-clock",start:""}),r(" "+o(s.projectlist.createTime)+"创建 ",1)]),_:1})]),default:e(()=>[t(b,{class:"bg-surface-light pt-4"},{default:e(()=>[r(o(s.projectlist.description),1)]),_:1})]),_:1},8,["disabled","loading"]),i[0]||(i[0]=l("br",null,null,-1)),t(m,{projects:s.projectlist.data},null,8,["projects"]),i[1]||(i[1]=l("br",null,null,-1)),t(_,{url:"projectlist-"+this.$route.params.id,name:"列表"},null,8,["url"])]),_:1})}const q=h(T,[["render",w]]);export{q as default};