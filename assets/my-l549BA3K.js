import{_ as de}from"./Projects-CtQI4RGl.js";import{p as Fe,aH as Ue,a8 as Ee,aI as Re,aJ as Me,i as Oe,at as Ne,H,aK as B,aa as ne,ad as j,aL as Be,as as Le,aM as Ke,aN as ze,aO as L,aP as K,aQ as He,aR as se,aS as qe,k as We,a2 as R,a as l,W as J,aT as Ge,ae as F,ai as Qe,U as ue,aU as Ye,aG as Je,L as Xe,a0 as re,aV as Ze,N as ve,av as $e,O as E,aW as et,af as tt,aX as lt,aY as at,_ as ot,G as nt,I as S,az as st,r as ut,o as rt,c as it,w as i,Q as b,a3 as z,M as A,P as ie,K as Y,T as ct,a1 as dt,Y as ce,aA as vt,a6 as mt,a7 as ft,ag as ht}from"./index-DGh90Ang.js";import{m as pt,u as gt,V as bt}from"./VAutocomplete-PT-aixGe.js";import{V as Vt}from"./VTextarea-DVy8Z9gj.js";import{V as Pt,a as yt,b as jt,c as xt}from"./VExpansionPanels-5RyDQRXZ.js";import{V as Ct}from"./VContainer-1Loe4K8h.js";import"./ProjectsCards-rb1alRsC.js";import"./43-lazyload-CBkwrR6M.js";import"./VPagination-CISOfEuN.js";function kt(e,a,x){if(a==null)return e;if(Array.isArray(a))throw new Error("Multiple matches is not implemented");return typeof a=="number"&&~a?l(J,null,[l("span",{class:"v-combobox__unmask"},[e.substr(0,a)]),l("span",{class:"v-combobox__mask"},[e.substr(a,x)]),l("span",{class:"v-combobox__unmask"},[e.substr(a+x)])]):e}const It=Fe({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...pt({filterKeys:["title"]}),...Ue({hideNoData:!0,returnObject:!0}),...Ee(Re({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Me({transition:!1})},"VCombobox"),wt=Oe()({name:"VCombobox",props:It(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,a){var le;let{emit:x,slots:c}=a;const{t:o}=Ne(),m=H(),y=B(!1),C=B(!0),n=B(!1),M=H(),O=H(),N=ne(e,"menu"),f=j({get:()=>N.value,set:t=>{var s;N.value&&!t&&((s=M.value)!=null&&s.ΨopenChildren.size)||(N.value=t)}}),v=B(-1);let X=!1;const me=j(()=>{var t;return(t=m.value)==null?void 0:t.color}),te=j(()=>f.value?e.closeText:e.openText),{items:fe,transformIn:he,transformOut:pe}=Be(e),{textColorClasses:ge,textColorStyles:be}=Le(me),r=ne(e,"modelValue",[],t=>he(Ke(t)),t=>{const s=pe(t);return e.multiple?s:s[0]??null}),U=ze(),q=j(()=>!!(e.chips||c.chip)),I=j(()=>q.value||!!c.selection),w=B(!e.multiple&&!I.value?((le=r.value[0])==null?void 0:le.title)??"":""),p=j({get:()=>w.value,set:t=>{var s;if(w.value=t??"",!e.multiple&&!I.value&&(r.value=[L(e,t)]),t&&e.multiple&&((s=e.delimiters)!=null&&s.length)){const h=t.split(new RegExp(`(?:${e.delimiters.join("|")})+`));h.length>1&&(h.forEach(u=>{u=u.trim(),u&&k(L(e,u))}),w.value="")}t||(v.value=-1),C.value=!t}}),Ve=j(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?r.value.length:p.value.length);K(w,t=>{X?se(()=>X=!1):y.value&&!f.value&&(f.value=!0),x("update:search",t)}),K(r,t=>{var s;!e.multiple&&!I.value&&(w.value=((s=t[0])==null?void 0:s.title)??"")});const{filteredItems:W,getMatches:Pe}=gt(e,fe,()=>C.value?"":p.value),D=j(()=>e.hideSelected?W.value.filter(t=>!r.value.some(s=>s.value===t.value)):W.value),ye=j(()=>r.value.map(t=>t.value)),Z=j(()=>{var s;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((s=D.value[0])==null?void 0:s.title))&&D.value.length>0&&!C.value&&!n.value}),$=j(()=>e.hideNoData&&!D.value.length||e.readonly||(U==null?void 0:U.isReadonly.value)),ee=H(),je=He(ee,m);function xe(t){X=!0,e.openOnClear&&(f.value=!0)}function Ce(){$.value||(f.value=!0)}function ke(t){$.value||(y.value&&(t.preventDefault(),t.stopPropagation()),f.value=!f.value)}function Ie(t){var s;lt(t)&&((s=m.value)==null||s.focus())}function we(t){var u;if(at(t)||e.readonly||U!=null&&U.isReadonly.value)return;const s=m.value.selectionStart,h=r.value.length;if((v.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(f.value=!0),["Escape"].includes(t.key)&&(f.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(Z.value&&["Enter","Tab"].includes(t.key)&&!r.value.some(d=>{let{value:P}=d;return P===D.value[0].value})&&k(W.value[0]),C.value=!0),t.key==="ArrowDown"&&Z.value&&((u=ee.value)==null||u.focus("next")),t.key==="Enter"&&p.value&&(k(L(e,p.value)),I.value&&(w.value="")),["Backspace","Delete"].includes(t.key)){if(!e.multiple&&I.value&&r.value.length>0&&!p.value)return k(r.value[0],!1);if(~v.value){const d=v.value;k(r.value[v.value],!1),v.value=d>=h-1?h-2:d}else t.key==="Backspace"&&!p.value&&(v.value=h-1)}if(e.multiple){if(t.key==="ArrowLeft"){if(v.value<0&&s>0)return;const d=v.value>-1?v.value-1:h-1;r.value[d]?v.value=d:(v.value=-1,m.value.setSelectionRange(p.value.length,p.value.length))}if(t.key==="ArrowRight"){if(v.value<0)return;const d=v.value+1;r.value[d]?v.value=d:(v.value=-1,m.value.setSelectionRange(0,0))}}}function De(){var t;e.eager&&((t=O.value)==null||t.calculateVisibleItems())}function Se(){var t;y.value&&(C.value=!0,(t=m.value)==null||t.focus())}function k(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!t||t.props.disabled))if(e.multiple){const h=r.value.findIndex(d=>e.valueComparator(d.value,t.value)),u=s??!~h;if(~h){const d=u?[...r.value,t]:[...r.value];d.splice(h,1),r.value=d}else u&&(r.value=[...r.value,t]);e.clearOnSelect&&(p.value="")}else{const h=s!==!1;r.value=h?[t]:[],w.value=h&&!I.value?t.title:"",se(()=>{f.value=!1,C.value=!0})}}function Te(t){y.value=!0,setTimeout(()=>{n.value=!0})}function _e(t){n.value=!1}function Ae(t){(t==null||t===""&&!e.multiple&&!I.value)&&(r.value=[])}return K(y,(t,s)=>{if(!(t||t===s)&&(v.value=-1,f.value=!1,p.value)){if(e.multiple){k(L(e,p.value));return}if(!I.value)return;r.value.some(h=>{let{title:u}=h;return u===p.value})?w.value="":k(L(e,p.value))}}),K(f,()=>{if(!e.hideSelected&&f.value&&r.value.length){const t=D.value.findIndex(s=>r.value.some(h=>e.valueComparator(h.value,s.value)));qe&&window.requestAnimationFrame(()=>{var s;t>=0&&((s=O.value)==null||s.scrollToIndex(t))})}}),K(()=>e.items,(t,s)=>{f.value||y.value&&!s.length&&t.length&&(f.value=!0)}),We(()=>{const t=!!(!e.hideNoData||D.value.length||c["prepend-item"]||c["append-item"]||c["no-data"]),s=r.value.length>0,h=R.filterProps(e);return l(R,F({ref:m},h,{modelValue:p.value,"onUpdate:modelValue":[u=>p.value=u,Ae],focused:y.value,"onUpdate:focused":u=>y.value=u,validationValue:r.externalValue,counterValue:Ve.value,dirty:s,class:["v-combobox",{"v-combobox--active-menu":f.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!I.value,"v-combobox--selecting-index":v.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:s?void 0:e.placeholder,"onClick:clear":xe,"onMousedown:control":Ce,onKeydown:we}),{...c,default:()=>l(J,null,[l(Ge,F({ref:M,modelValue:f.value,"onUpdate:modelValue":u=>f.value=u,activator:"parent",contentClass:"v-combobox__content",disabled:$.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:De,onAfterLeave:Se},e.menuProps),{default:()=>[t&&l(Qe,F({ref:ee,selected:ye.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:Ie,onFocusin:Te,onFocusout:_e,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},je,e.listProps),{default:()=>{var u,d,P;return[(u=c["prepend-item"])==null?void 0:u.call(c),!D.value.length&&!e.hideNoData&&(((d=c["no-data"])==null?void 0:d.call(c))??l(ue,{title:o(e.noDataText)},null)),l(Ye,{ref:O,renderless:!0,items:D.value},{default:T=>{var oe;let{item:g,index:_,itemRef:V}=T;const ae=F(g.props,{ref:V,key:_,active:Z.value&&_===0?!0:void 0,onClick:()=>k(g,null)});return((oe=c.item)==null?void 0:oe.call(c,{item:g,index:_,props:ae}))??l(ue,F(ae,{role:"option"}),{prepend:G=>{let{isSelected:Q}=G;return l(J,null,[e.multiple&&!e.hideSelected?l(Je,{key:g.value,modelValue:Q,ripple:!1,tabindex:"-1"},null):void 0,g.props.prependAvatar&&l(Xe,{image:g.props.prependAvatar},null),g.props.prependIcon&&l(re,{icon:g.props.prependIcon},null)])},title:()=>{var G,Q;return C.value?g.title:kt(g.title,(G=Pe(g))==null?void 0:G.title,((Q=p.value)==null?void 0:Q.length)??0)}})}}),(P=c["append-item"])==null?void 0:P.call(c)]}})]}),r.value.map((u,d)=>{function P(V){V.stopPropagation(),V.preventDefault(),k(u,!1)}const T={"onClick:close":P,onKeydown(V){V.key!=="Enter"&&V.key!==" "||(V.preventDefault(),V.stopPropagation(),P(V))},onMousedown(V){V.preventDefault(),V.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},g=q.value?!!c.chip:!!c.selection,_=g?Ze(q.value?c.chip({item:u,index:d,props:T}):c.selection({item:u,index:d})):void 0;if(!(g&&!_))return l("div",{key:u.value,class:["v-combobox__selection",d===v.value&&["v-combobox__selection--selected",ge.value]],style:d===v.value?be.value:{}},[q.value?c.chip?l($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[_]}):l(ve,F({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},T),null):_??l("span",{class:"v-combobox__selection-text"},[u.title,e.multiple&&d<r.value.length-1&&l("span",{class:"v-combobox__selection-comma"},[E(",")])])])})]),"append-inner":function(){var T;for(var u=arguments.length,d=new Array(u),P=0;P<u;P++)d[P]=arguments[P];return l(J,null,[(T=c["append-inner"])==null?void 0:T.call(c,...d),(!e.hideNoData||e.items.length)&&e.menuIcon?l(re,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:ke,onClick:et,"aria-label":o(te.value),title:o(te.value),tabindex:"-1"},null):void 0])}})}),tt({isFocused:y,isPristine:C,menu:f,search:p,selectionIndex:v,filteredItems:W,select:k},m)}}),Dt={components:{Projects:de},data(){return{projectstates:[{state:"私密",abbr:"private"},{state:"开源",abbr:"public"}],projecthistory:[{state:"关闭",abbr:"0"},{state:"开启",abbr:"1"}],searchstates:[{state:"所有",abbr:""},{state:"私密",abbr:"private"},{state:"开源",abbr:"public"}],typeitems:[{name:"所有",type:""},{name:"Scratch",type:"scratch"},{name:"Python",type:"python"}],orderitems:[{name:"观看量升序",type:"view_up"},{name:"观看量降序",type:"view_down"},{name:"时间升序",type:"time_up"},{name:"时间降序",type:"time_down"},{name:"序号升序",type:"id_up"},{name:"序号降序",type:"id_down"}],currentProjectID:0,dialog:!1,currentProject:{},previousProject:{},search:{title:"",type:"",description:"",source:"",order:"view_up",authorid:"",type:"",state:"",tag:""},userInfo:nt.user,aboutTags:{items:["动画","故事","音乐","硬核","艺术","水"],chips:H([]),selected:[]}}},methods:{removetag(e){chips.value.splice(chips.value.indexOf(e),1)},projecttypeProps(e){return{title:e.name,subtitle:e.department}},onPageChange(){this.$refs.Projects.onPageChange(1)},addtoast(e){this.$toast.add({severity:"info",summary:"info",detail:e,life:3e3})},openinfo(e,a){this.currentProjectID=e,this.currentProject=a,this.previousProject={...a},this.aboutTags.chips=this.currentProject.tags.split(","),this.dialog=!0},openpushpage(e){this.$router.push("/projects/"+e+"/push")},pushproject(e,a){S({url:"/project/"+e+"/push",method:"post"}).then(x=>{console.log(x),this.addtoast(x.message),this.onPageChange()}).catch(x=>{console.log(x),this.addtoast("失败")})},openedit(e,a){this.$toast.add({severity:"info",summary:"info",detail:`尝试打开${a.type}编辑器并编辑${e}号作品`,life:3e3}),st(e,a.type)},deleteProject(){this.$toast.add({severity:"error",summary:"info",detail:`尝试删除${this.currentProjectID}号作品`,life:3e3}),S({url:"/project/"+this.currentProjectID,method:"delete"}).then(e=>{console.log(e),this.addtoast(e.message),this.onPageChange(),this.dialog=!1}).catch(e=>{console.log(e),this.addtoast("删除失败")})},SaveProjectsInfo(){this.currentProject.tags=this.aboutTags.chips.join(","),S({url:"/project/"+this.currentProjectID,method:"put",data:this.currentProject}).then(e=>{console.log(e),this.addtoast(e.message),this.dialog=!1,this.onPageChange()}).catch(e=>{console.log(e),this.addtoast("修改失败")})},SaveProjectsInfoOld(){console.log(this.currentProject),console.log(this.previousProject),this.currentProject.title!==this.previousProject.title&&(console.log("修改作品标题为"),console.log(this.currentProject.title),S({url:"/project/saveProjcetTitle",method:"post",data:{id:this.currentProjectID,title:this.currentProject.title}}).then(e=>{console.log(e),this.addtoast("修改成功"),this.dialog=!1,this.onPageChange()}).catch(e=>{console.log(e),this.addtoast("修改失败")})),this.currentProject.description!==this.previousProject.description&&(console.log("修改作品简介为"),console.log(this.currentProject.description),S({url:"/project/setDescription",method:"post",data:{id:this.currentProjectID,description:this.currentProject.description}}).then(e=>{console.log(e),this.addtoast("修改成功"),this.dialog=!1,this.onPageChange()}).catch(e=>{console.log(e),this.addtoast("修改失败")})),this.currentProject.type!==this.previousProject.type&&(console.log("修改作品简介为"),console.log(this.currentProject.type),S({url:"/project/setType",method:"post",data:{id:this.currentProjectID,type:this.currentProject.type}}).then(e=>{console.log(e),this.addtoast("修改成功"),this.dialog=!1,this.onPageChange()}).catch(e=>{console.log(e),this.addtoast("修改失败")})),this.currentProject.state!==this.previousProject.state&&(this.currentProject.state=="public"&&(console.log("修改作品状态为公开"),S({url:"/project/share",method:"post",data:{id:this.currentProjectID}}).then(e=>{console.log(e),this.addtoast("修改成功"),this.dialog=!1,this.onPageChange()}).catch(e=>{console.log(e),this.addtoast("修改失败")})),this.currentProject.state=="private"&&(console.log("修改作品状态为私密"),S({url:"/project/noshare",method:"post",data:{id:this.currentProjectID}}).then(e=>{console.log(e),this.addtoast("修改成功"),this.dialog=!1,this.onPageChange()}).catch(e=>{console.log(e),this.addtoast("修改失败")})))}}};function St(e,a,x,c,o,m){const y=ut("v-number-input"),C=de;return rt(),it(Ct,null,{default:i(()=>[l(ie,null,{default:i(()=>[l(b,{cols:"6"},{default:i(()=>[l(R,{label:"作品名 包含："+o.search.title,modelValue:o.search.title,"onUpdate:modelValue":a[0]||(a[0]=n=>o.search.title=n)},null,8,["label","modelValue"])]),_:1}),l(b,{cols:"6"},{default:i(()=>[l(R,{label:"作品描述 包含："+o.search.description,modelValue:o.search.description,"onUpdate:modelValue":a[1]||(a[1]=n=>o.search.description=n)},null,8,["label","modelValue"])]),_:1}),l(b,{cols:"6"},{default:i(()=>[l(R,{label:"作品内容 包含："+o.search.source,modelValue:o.search.source,"onUpdate:modelValue":a[2]||(a[2]=n=>o.search.source=n)},null,8,["label","modelValue"])]),_:1}),l(b,{cols:"6"},{default:i(()=>[l(y,{"control-variant":"用户ID",label:"用户ID 为："+o.search.authorid,modelValue:o.userInfo.userid,"onUpdate:modelValue":a[3]||(a[3]=n=>o.userInfo.userid=n),disabled:""},null,8,["label","modelValue"])]),_:1}),l(b,{cols:"3"},{default:i(()=>[l(z,{modelValue:o.search.order,"onUpdate:modelValue":a[4]||(a[4]=n=>o.search.order=n),items:o.orderitems,"item-title":"name","item-value":"type",label:"排序"},null,8,["modelValue","items"])]),_:1}),l(b,{cols:"3"},{default:i(()=>[l(z,{modelValue:o.search.type,"onUpdate:modelValue":a[5]||(a[5]=n=>o.search.type=n),items:o.typeitems,"item-title":"name","item-value":"type",label:"项目类型"},null,8,["modelValue","items"])]),_:1}),l(b,{cols:"3"},{default:i(()=>[l(z,{modelValue:o.search.state,"onUpdate:modelValue":a[6]||(a[6]=n=>o.search.state=n),items:o.searchstates,"item-title":"state","item-value":"abbr",label:"项目状态"},null,8,["modelValue","items"])]),_:1}),l(b,{cols:"3"},{default:i(()=>[l(bt,{label:"标签 为："+o.search.tag,items:["","动画","故事","音乐","硬核","艺术","水"],modelValue:o.search.tag,"onUpdate:modelValue":a[7]||(a[7]=n=>o.search.tag=n)},null,8,["label","modelValue"])]),_:1}),l(b,{cols:"3"},{default:i(()=>[l(A,{onClick:a[8]||(a[8]=n=>m.onPageChange())},{default:i(()=>a[18]||(a[18]=[E(" 搜索 ")])),_:1}),l(A,{onClick:a[9]||(a[9]=n=>{o.search.order="view_up",o.search.type="",o.search.authorid="",o.search.source="",o.search.description="",o.search.title="",o.search.state="",m.onPageChange()})},{default:i(()=>a[19]||(a[19]=[E("重置")])),_:1})]),_:1})]),_:1}),a[23]||(a[23]=Y("br",null,null,-1)),a[24]||(a[24]=Y("br",null,null,-1)),l(C,{authorid:o.userInfo.userid,title:o.search.title,description:o.search.description,source:o.search.source,order:o.search.order,type:o.search.type,ref:"Projects",showinfo:"true",state:o.search.state,tag:o.search.tag,actions:[{name:"信息",function:m.openinfo},{name:"编辑",function:m.openedit},{name:"推送页",function:m.openpushpage}]},null,8,["authorid","title","description","source","order","type","state","tag","actions"]),l(ht,{modelValue:o.dialog,"onUpdate:modelValue":a[17]||(a[17]=n=>o.dialog=n),"max-width":"70vw",persistent:"",origin:"center center"},{default:i(()=>[l(ct,{"prepend-icon":"mdi-xml",title:"作品信息"},{default:i(()=>[l(dt,null,{default:i(()=>[l(ie,{dense:""},{default:i(()=>[l(b,{cols:"12",md:"12",sm:"12"},{default:i(()=>[l(R,{label:"标题",required:"",modelValue:o.currentProject.title,"onUpdate:modelValue":a[10]||(a[10]=n=>o.currentProject.title=n),hint:"将会在首页展示"},null,8,["modelValue"])]),_:1}),l(b,{cols:"12",md:"12",sm:"12"},{default:i(()=>[l(Vt,{hint:"介绍作品类型，玩法，并向对这个作品有帮助的人致谢！",label:"简介",modelValue:o.currentProject.description,"onUpdate:modelValue":a[11]||(a[11]=n=>o.currentProject.description=n)},null,8,["modelValue"])]),_:1}),l(b,{cols:"12",sm:"6"},{default:i(()=>[l(z,{items:["scratch","python","text"],label:"类型",required:"",hint:"不建议你改",modelValue:o.currentProject.type,"onUpdate:modelValue":a[12]||(a[12]=n=>o.currentProject.type=n)},null,8,["modelValue"])]),_:1}),l(b,{cols:"12",sm:"6"},{default:i(()=>[l(z,{modelValue:o.currentProject.state,"onUpdate:modelValue":a[13]||(a[13]=n=>o.currentProject.state=n),items:o.projectstates,"item-title":"state","item-value":"abbr",label:"项目状态",hint:"我们鼓励开源"},null,8,["modelValue","items"])]),_:1}),l(b,{cols:"12"},{default:i(()=>[l(wt,{modelValue:o.aboutTags.chips,"onUpdate:modelValue":a[14]||(a[14]=n=>o.aboutTags.chips=n),items:o.aboutTags.items,label:"标签","prepend-icon":"mdi-tag",variant:"solo",chips:"",multiple:""},{selection:i(({attrs:n,item:M,select:O,selected:N})=>[l(ve,F(n,{"model-value":N,closable:"",onClick:O,"onClick:close":f=>m.removetag(M)}),{default:i(()=>[Y("strong",null,ce(M),1),a[20]||(a[20]=E("  ")),a[21]||(a[21]=Y("span",null,"(interest)",-1))]),_:2},1040,["model-value","onClick","onClick:close"])]),_:1},8,["modelValue","items"])]),_:1}),l(Pt,null,{default:i(()=>[l(yt,null,{default:i(()=>[l(jt,null,{default:i(()=>a[22]||(a[22]=[E("详细数据")])),_:1}),l(xt,null,{default:i(()=>[E(ce(o.currentProject),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(vt),l(mt,null,{default:i(()=>[l(A,{color:"error",text:"删除",variant:"tonal",onClick:m.deleteProject},null,8,["onClick"]),l(A,{color:"primary",text:"保存(旧版)",variant:"tonal",onClick:m.SaveProjectsInfoOld},null,8,["onClick"]),l(A,{color:"text",text:"一键推送",variant:"tonal",onClick:a[15]||(a[15]=n=>m.pushproject(o.currentProject.id))}),l(ft),l(A,{text:"取消",variant:"plain",onClick:a[16]||(a[16]=n=>o.dialog=!1)}),l(A,{color:"primary",text:"保存",variant:"tonal",onClick:m.SaveProjectsInfo},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const Nt=ot(Dt,[["render",St]]);export{Nt as default};
