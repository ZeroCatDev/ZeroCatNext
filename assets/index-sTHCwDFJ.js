import{_ as j,I as C,o,c as i,w as e,a as r,M as y,O as s,a1 as b,K as l,T as c,$ as P,a0 as S,Y as n,N as k,e as m,X as _,W as g,P as w,Q as v,S as L,aw as h,ak as f,al as x,a4 as V}from"./index-DGh90Ang.js";import{u as B}from"./vue.8fc199ce-Cv1XXqEr.js";import{_ as I}from"./43-lazyload-CBkwrR6M.js";import{V as N}from"./VContainer-1Loe4K8h.js";const T={setup(){B({title:"ZeroCat - Proxy",meta:[{name:"description",content:"Explore and access Scratch content through ZeroCat Proxy."},{name:"keywords",content:"ZeroCat, Scratch, proxy, explore, access"}]})},data(){return{orderitems:[{name:"热门的",type:"trending"},{name:"最受欢迎的",type:"popular"},{name:"新建的",type:"recent"}],tagitems:[{name:"全部",type:"*"},{name:"动画",type:"animations"},{name:"艺术",type:"art"},{name:"游戏",type:"games"},{name:"音乐",type:"music"},{name:"故事",type:"stories"},{name:"教程",type:"tutorials"}],search:{order:"trending",tag:"*",limit:18},usetime:0,ProjectsLoading:!1,projects:{},projectscount:0,curPage:1,scratch_proxy:"https://scratch.192325.xyz",translate:{community_newest_projects:"最新创建",community_most_remixed_projects:"大家在改编的作品",scratch_design_studio:"Scratch设计室",curator_top_projects:"被特殊用户挑选的作品",community_featured_studios:"特色工作室",community_most_loved_projects:"大家在点赞的作品",community_featured_projects:"社区特殊作品"}}},async created(){await this.getprojects()},methods:{async getprojects(){this.onPageChange(1)},async onPageChange(){this.usetime=Date.now(),this.ProjectsLoading=!0,this.projects=await C({url:this.scratch_proxy+"/proxy/featured",method:"get"}),this.ProjectsLoading=!1,this.usetime=Date.now()-this.usetime}}},D={class:"mb-2"};function M(Z,t,z,E,u,$){return o(),i(N,null,{default:e(()=>[r(c,{subtitle:"这是Scratch上的内容",title:"ScratchMirror"},{actions:e(()=>[r(y,{href:"https://scratch.mit.edu/explore/projects/all"},{default:e(()=>t[1]||(t[1]=[s("Scratch上的发现页")])),_:1}),r(y,{href:"https://scratch.mit.edu/terms_of_use",target:"_blank"},{default:e(()=>t[2]||(t[2]=[s("Scratch使用条款")])),_:1})]),default:e(()=>[r(b,{class:"bg-surface-light pt-4"},{default:e(()=>t[0]||(t[0]=[s(" 我们使用这种方式促进Scratch及其社区的发展，这些内容是按照"),l("a",null,"署名-相同方式共享 2.0 通用",-1),s("协议传播的，您可以在"),l("a",null,"https://creativecommons.org/licenses/by-sa/2.0/",-1),s("查看协议全文。 ")])),_:1})]),_:1}),t[8]||(t[8]=l("br",null,null,-1)),r(P,{active:u.ProjectsLoading,height:"4",indeterminate:""},null,8,["active"]),l("div",D,[r(k,null,{default:e(()=>[r(S,{icon:"mdi-clock",start:""}),s("本页加载用时"+n(Math.abs(u.usetime/1e3))+"秒 ",1)]),_:1})]),(o(!0),m(g,null,_(u.projects,(d,p)=>(o(),m("div",{key:d},[l("h1",null,n(u.translate[p]||p),1),t[3]||(t[3]=l("br",null,null,-1)),r(w,null,{default:e(()=>[(o(!0),m(g,null,_(d,a=>(o(),i(v,{cols:"4",md:"2",key:a},{default:e(()=>[a.type=="project"?(o(),i(c,{key:0,to:"/proxy/"+a.id},{default:e(()=>[r(L,{src:`${u.scratch_proxy}/thumbnails/${a.id}`,cover:"","lazy-src":I},null,8,["src"]),r(h,null,{default:e(()=>[r(f,null,{default:e(()=>[s(n(a.title),1)]),_:2},1024),r(x,null,{default:e(()=>[s(n(a.creator),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])):V("",!0),a.type=="gallery"?(o(),i(c,{key:1,to:"/proxy/studios/"+a.id},{default:e(()=>[r(h,null,{default:e(()=>[r(f,null,{default:e(()=>[s(n(a.title),1)]),_:2},1024),r(x,null,{default:e(()=>[s(n(a.id),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])):V("",!0)]),_:2},1024))),128))]),_:2},1024),t[4]||(t[4]=l("br",null,null,-1)),t[5]||(t[5]=l("br",null,null,-1)),t[6]||(t[6]=l("br",null,null,-1)),t[7]||(t[7]=l("br",null,null,-1))]))),128))]),_:1})}const Q=j(T,[["render",M]]);export{Q as default};
