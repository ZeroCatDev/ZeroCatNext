import{_ as i,o as c,c as g,w as o,a as l,B as u,h as n,v as d,s as p,z as m}from"./index-BXM8jUhB.js";import{V as h}from"./VContainer-CGCYZyVo.js";const S={data(){return{titlemessage:"正在退出账户",logs:""}},async created(){this.log("正在退出账户");try{this.log("正在清除localStorage中的账户数据"),localStorage.removeItem("token"),localStorage.getItem("token")===null&&this.log("成功清除localStorage中的账户数据"),this.log("已成功退出您的账户，请关闭此标签页并刷新其他标签页"),m.loaduser()}catch(t){this.log(t)}},methods:{currentTime(){const t=new Date,e=t.getHours().toString().padStart(2,"0"),s=t.getMinutes().toString().padStart(2,"0"),r=t.getSeconds().toString().padStart(2,"0");return`${e}:${s}:${r}`},log(t){this.logs=this.logs+`[${this.currentTime()}] ${t}<br/>`}}};function f(t,e,s,r,a,_){return c(),g(h,null,{default:o(()=>[l(p,{class:"mx-auto",rel:"noopener",target:"_blank",border:""},{title:o(()=>[n("span",null,d(a.titlemessage),1)]),subtitle:o(()=>e[0]||(e[0]=[n("span",null,"正在退出您的ZeroCat账户",-1)])),default:o(()=>[l(u,{class:"bg-surface-light pt-4",innerHTML:a.logs},null,8,["innerHTML"])]),_:1})]),_:1})}const V=i(S,[["render",f]]);export{V as default};