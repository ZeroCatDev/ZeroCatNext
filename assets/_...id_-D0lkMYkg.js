import{_ as h}from"./Comment-Dvka7EwW.js";import{_ as x}from"./Projects-Cdn0l6Pg.js";import{_ as y,h as m,o as l,c,w as e,a as t,q as f,s as p,j as r,p as a,z as i,k as w,u as _,n as u,C as d,t as j,e as P,y as k,F as I,v as g,a2 as v,a0 as L,a1 as N}from"./index-CcwDYmYC.js";import{_ as T}from"./43-lazyload-CBkwrR6M.js";import{V as B}from"./VContainer-CUpOJ__b.js";import"./VForm-D6F5vVZr.js";import"./VTextarea-CKGA0GT0.js";import"./ProjectsCards-BYRTMl_3.js";import"./VPagination-Du4RnZkz.js";const $={components:{Projects:x,Comment:h},data(){return{UserCardLoading:!0,userid:this.$route.params.id,userinfo:{status:"ok",info:{user:{id:0,display_name:"加载中",motto:"加载中",images:"0ec4beb623e3bcdbe0f207c9804f0bc2",regTime:"0000-00-00T00:00:00.000Z",sex:0,username:"loading"},count:{pythoncount:0,scratchcount:0}}},projects:[],scratchcount:0,curPage:1,totalPage:1,limit:20,lists:[]}},async created(){await this.getuserinfo(),await this.getProjectList()},methods:{async getuserinfo(){Number(this.$route.params.id)&&Number(this.$route.params.id)!==0&&(this.userinfo=await m({url:"/api/getuserinfo?id="+this.$route.params.id,method:"get"}),this.$refs.Projects.onPageChange(1),this.UserCardLoading=!1,console.log(this.userinfo))},async getProjectList(){this.lists=(await m({url:`/projectlist/user/${this.userinfo.info.user.id}/public`,method:"get"})).data}}},z={class:"font-weight-bold text-sm-h2 text-h4 mt-2 d-inline-flex align-center username"},D={class:"mt-2 text-body-1 text-medium-emphasis"},F={class:"mt-2 text-medium-emphasis"};function R(b,s,S,U,o,Z){const V=x,C=h;return l(),c(B,null,{default:e(()=>[t(j,{class:"mt-12"},{default:e(()=>[t(f,{class:"d-flex align-center"},{default:e(()=>[t(p,null,{default:e(()=>[s[1]||(s[1]=r("p",{class:"font-weight-medium text-primary"},"ZeroCat 用户",-1)),r("p",z,[a(i(o.userinfo.info.user.display_name)+" ",1),t(w,{size:"52",class:"ma-2"},{default:e(()=>[t(_,{src:"https://s4-1.wuyuan.1r.ink/user/"+o.userinfo.info.user.images},null,8,["src"])]),_:1})]),r("p",D,i(o.userinfo.info.user.motto),1),r("p",F,[t(u,null,{default:e(()=>[t(d,{icon:"mdi-account-circle",start:""}),a(" ID:"+i(o.userinfo.info.user.id),1)]),_:1}),t(u,null,{default:e(()=>[t(d,{icon:"mdi-clock",start:""}),a(" "+i(o.userinfo.info.user.regTime)+"注册 ",1)]),_:1}),t(u,null,{default:e(()=>[t(d,{icon:"mdi-tag",start:""}),s[0]||(s[0]=a(" 创作者"))]),_:1})])]),_:1})]),_:1})]),_:1}),s[2]||(s[2]=r("br",null,null,-1)),t(V,{authorid:o.userid,ref:"Projects",showinfo:"true"},null,8,["authorid"]),t(f,null,{default:e(()=>[(l(!0),P(I,null,k(o.lists,n=>(l(),c(p,{cols:"12",xs:"12",sm:"6",md:"4",lg:"3",xl:"2",xxl:"2",key:n.id},{default:e(()=>[t(g,{rounded:"lg"},{default:e(()=>[t(g,{to:"/projectlist/"+n.id,style:{"aspect-ratio":"4/3"},rounded:"lg"},{default:e(()=>[t(_,{class:"align-end","lazy-src":T,height:"100%",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",cover:""},{default:e(()=>[t(v,null,{default:e(()=>[t(L,null,{default:e(()=>[a(i(n.title),1)]),_:2},1024),t(N,null,{default:e(()=>[a(i(n.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),s[3]||(s[3]=r("br",null,null,-1)),t(C,{url:"user-"+b.$route.params.id,name:"用户"},null,8,["url"])]),_:1})}const Q=y($,[["render",R],["__scopeId","data-v-0935932e"]]);export{Q as default};