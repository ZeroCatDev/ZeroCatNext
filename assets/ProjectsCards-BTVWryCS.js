import{_ as x}from"./43-lazyload-CBkwrR6M.js";import{_,o as n,c,w as e,a,Q as C,O as d,U as l,e as u,S as m,T as p,N as j,$ as k}from"./index-PIA1IM-F.js";import{V as f,e as w,c as B,d as N,b as O}from"./VCard-Dlmo9MGH.js";import{a as v,V as A}from"./VRow-jYeD18H_.js";const S={data(){return{tags:[]}},props:{info:{type:Object,default:""},user:{type:Object,default:'{ "id": 1, "username": "yxhyh", "display_name": "已销号用户", "motto": "已销号用户", "images": "0ec4beb623e3bcdbe0f207c9804f0bc2" }'},actions:{type:Array,required:!1}},watch:{info:{immediate:!0,handler(s){s.tags?this.tags=s.tags.map(i=>i.name):this.tags=[]}}},methods:{callFunction(s){s(this.info.id,this.info)}}};function T(s,i,t,h,y,b){return n(),c(f,{rounded:"lg",border:""},{default:e(()=>[a(f,{to:"/projects/"+t.info.id,style:{"aspect-ratio":"4/3"},rounded:"lg"},{default:e(()=>[a(C,{src:"https://s4-1.wuyuan.1r.ink/scratch_slt/"+t.info.id,class:"align-end","lazy-src":x,height:"100%",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",cover:""},{default:e(()=>[a(w,null,{default:e(()=>[a(B,null,{default:e(()=>[d(l(t.info.title),1)]),_:1}),a(N,null,{default:e(()=>[d(l(t.info.description),1)]),_:1})]),_:1})]),_:1},8,["src"])]),_:1},8,["to"]),t.actions?(n(),c(O,{key:0},{default:e(()=>[(n(!0),u(m,null,p(t.actions,r=>(n(),u("div",{key:r.name},[a(j,{onClick:o=>r.function(t.info.id,t.info)},{default:e(()=>[d(l(r.name),1)]),_:2},1032,["onClick"])]))),128))]),_:1})):k("",!0)]),_:1})}const g=_(S,[["render",T]]),q={components:{ProjectCard:g},props:{projects:{type:Object,default:"text"},actions:{type:Array,required:!1}}};function F(s,i,t,h,y,b){const r=g;return n(),c(A,null,{default:e(()=>[(n(!0),u(m,null,p(t.projects.projects,o=>(n(),c(v,{cols:"12",xs:"12",sm:"6",md:"4",lg:"3",xl:"2",xxl:"2",key:o},{default:e(()=>[a(r,{info:o,user:t.projects.users.find(V=>V.id===o.authorid),actions:t.actions},null,8,["info","user","actions"])]),_:2},1024))),128))]),_:1})}const D=_(q,[["render",F]]);export{D as _};