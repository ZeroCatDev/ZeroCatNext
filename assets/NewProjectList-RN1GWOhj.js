import{_ as d,az as c,I as u,o as f,c as p,w as s,a as e,a1 as m,P as V,Q as _,a2 as w,aA as x,a6 as I,a7 as b,M as n,T as h}from"./index-DGh90Ang.js";const j={data(){return{projectInfo:{title:"新建项目列表"},created:!1,newId:0,isVisibleDialog:!1,openEdit:c}},props:{callback:{type:Function,required:!1},close:{type:Function,required:!1}},methods:{show(){this.projectInfo={title:"新建项目列表"},this.created=!1,this.newId=0,this.isVisibleDialog=!0},async newProjectList(){await u.post("/projectlist/",this.projectInfo).then(a=>{console.log(a),this.$toast.add({severity:"info",summary:"info",detail:a,life:3e3}),a.status=="1"&&(this.newId=a.id)}),this.callback()}}};function C(a,t,i,k,l,r){return f(),p(h,{"prepend-icon":"mdi-xml",title:"新建列表",border:""},{default:s(()=>[e(m,null,{default:s(()=>[e(V,{dense:""},{default:s(()=>[e(_,{cols:"12",md:"12",sm:"12"},{default:s(()=>[e(w,{label:"标题",required:"",hint:"将便于查找",modelValue:l.projectInfo.title,"onUpdate:modelValue":t[0]||(t[0]=o=>l.projectInfo.title=o),disabled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(x),e(I,null,{default:s(()=>[e(b),e(n,{text:"关闭",variant:"plain",onClick:t[1]||(t[1]=o=>i.close())}),e(n,{color:"primary",text:"创建",variant:"tonal",onClick:t[2]||(t[2]=o=>{r.newProjectList(),i.close()}),disabled:l.created},null,8,["disabled"])]),_:1})]),_:1})}const y=d(j,[["render",C]]);export{y as _};
