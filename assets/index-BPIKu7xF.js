import{_ as b}from"./NewProjectList-DAEczPkU.js";import{_ as w,J as m,o as p,c as x,w as l,a as e,Z as V,N as r,H as D,G as N,e as g,L as f,O as a,S as L,T as _,U as c}from"./index-BVR4auYL.js";import{a as P,b as C,V as k,e as E,c as S,d as T}from"./VCard-CEeaKvwH.js";import{V as O}from"./VSelect-CERFv6AE.js";import{V as U}from"./VSpacer-BNB299kH.js";import{V as q}from"./VContainer-Cw0M3m2b.js";import{V as j}from"./VDialog-BmQUxtOY.js";import{V as B}from"./VChip-BFX6m4Hc.js";import"./openEdit-DBNuVmNU.js";import"./VRow-CjHfTLSk.js";/* empty css              */import"./VCheckboxBtn-Cc7qxhc4.js";const F={data(){return{listStates:[{state:"私密",abbr:"private"},{state:"公开",abbr:"public"}],created:!1,newid:0,isVisible:!1,listInfo:{},newListInfo:{}}},props:{listid:{type:String,required:!0},callback:{type:Function,required:!1},close:{type:Function,required:!1}},methods:{show(){this.created=!1,this.newid=0,this.isVisible=!0},async getProjectList(n){await m.get("/projectlist/"+n).then(t=>{console.log(t),this.$toast.add({severity:"info",summary:"info",detail:t,life:3e3}),t.status=="1"&&(this.listInfo=Object.assign({},t.data),this.newListInfo=Object.assign({},t.data))}),this.callback()},async updateProjectList(n){await m.put("/projectlist/"+n,this.newListInfo).then(t=>{console.log(t),this.$toast.add({severity:"info",summary:"info",detail:t,life:3e3}),t.status=="1"&&(this.listInfo=Object.assign({},t.data),this.newListInfo=Object.assign({},t.data))}),this.callback()},async deleteProjectList(n){await m.delete("/projectlist/"+n).then(t=>{console.log(t),this.$toast.add({severity:"info",summary:"info",detail:t,life:3e3})}),this.callback()}},mounted(){this.getProjectList(this.listid)}};function H(n,t,d,v,i,u){return p(),x(k,{border:"",title:`${i.listInfo.title}(#${i.listInfo.id})`},{default:l(()=>[e(P,null,{default:l(()=>[e(V,{modelValue:i.newListInfo.title,"onUpdate:modelValue":t[0]||(t[0]=o=>i.newListInfo.title=o),label:"名称",required:""},null,8,["modelValue"]),e(V,{modelValue:i.newListInfo.description,"onUpdate:modelValue":t[1]||(t[1]=o=>i.newListInfo.description=o),label:"简介",required:""},null,8,["modelValue"]),e(O,{modelValue:i.newListInfo.state,"onUpdate:modelValue":t[2]||(t[2]=o=>i.newListInfo.state=o),items:i.listStates,"item-title":"state","item-value":"abbr",label:"项目状态"},null,8,["modelValue","items"])]),_:1}),e(C,null,{default:l(()=>[e(r,{text:"删除",variant:"plain",onClick:t[3]||(t[3]=o=>{u.deleteProjectList(d.listid),d.close()}),color:"red"}),e(U),e(r,{text:"回退",variant:"plain",onClick:t[4]||(t[4]=o=>i.newListInfo=Object.assign({},i.listInfo))}),e(r,{text:"关闭",variant:"plain",onClick:t[5]||(t[5]=o=>d.close())}),e(r,{color:"primary",text:"保存",variant:"tonal",onClick:t[6]||(t[6]=o=>u.updateProjectList(d.listid))})]),_:1})]),_:1},8,["title"])}const I=w(F,[["render",H]]),A={components:{NewProjectList:b,EditProjectListConfig:I},name:"projectlist",data(){return{localuser:D,editlistid:0,EditProjectListConfigDialog:!1,NewProjectListDialog:!1,lists:[]}},setup(){N({title:"列表"})},async created(){this.localuser.islogin==!1&&this.$router.push("/account/login")},methods:{async getProjectList(){this.lists=(await m({url:"/projectlist/user/"+this.localuser.user.userid,method:"get"})).data}},mounted(){this.getProjectList()}};function G(n,t,d,v,i,u){const o=I,y=b;return p(),g(L,null,[e(q,null,{default:l(()=>[t[7]||(t[7]=f("h1",null,"列表",-1)),e(r,{onClick:t[0]||(t[0]=s=>i.NewProjectListDialog=!0)},{default:l(()=>t[3]||(t[3]=[a("创建")])),_:1}),t[8]||(t[8]=f("br",null,null,-1)),t[9]||(t[9]=f("br",null,null,-1)),(p(!0),g(L,null,_(i.lists,s=>(p(),g("div",{key:s.id},[e(k,{border:""},{default:l(()=>[e(E,null,{default:l(()=>[e(S,null,{default:l(()=>[a(c(s.title),1),e(B,{color:s.state=="private"?"primary":"green"},{default:l(()=>[a(c(s.state=="private"?"私密":"公开"),1)]),_:2},1032,["color"])]),_:2},1024),e(T,null,{default:l(()=>[a(c(s.createTime+"创建，"+s.updateTime+"更新"),1)]),_:2},1024)]),_:2},1024),e(P,null,{default:l(()=>[a(c(s.description),1)]),_:2},1024),e(C,null,{default:l(()=>[e(r,{onClick:J=>{i.editlistid=s.id,i.EditProjectListConfigDialog=!0}},{default:l(()=>t[4]||(t[4]=[a("编辑")])),_:2},1032,["onClick"]),e(r,{to:`/projectlist/${s.id}`},{default:l(()=>t[5]||(t[5]=[a("打开")])),_:2},1032,["to"])]),_:2},1024)]),_:2},1024),t[6]||(t[6]=f("br",null,null,-1))]))),128))]),_:1}),e(j,{modelValue:i.EditProjectListConfigDialog,"onUpdate:modelValue":t[1]||(t[1]=s=>i.EditProjectListConfigDialog=s)},{default:l(()=>[e(o,{listid:i.editlistid,close:()=>i.EditProjectListConfigDialog=!1,callback:u.getProjectList},null,8,["listid","close","callback"])]),_:1},8,["modelValue"]),e(j,{modelValue:i.NewProjectListDialog,"onUpdate:modelValue":t[2]||(t[2]=s=>i.NewProjectListDialog=s)},{default:l(()=>[e(y,{listid:i.editlistid,close:()=>i.NewProjectListDialog=!1,callback:u.getProjectList},null,8,["listid","close","callback"])]),_:1},8,["modelValue"])],64)}const et=w(A,[["render",G]]);export{et as default};
