import{L as b,b3 as I,b4 as G,R as P,a as l,b5 as h,b6 as $,b7 as j,T as m,b8 as z,a7 as g,a9 as T,a4 as F,P as v,b9 as N,at as w,C as O,a6 as q,aw as k,ba as H,bb as J,ac as K,af as M,ah as A,ai as Q,bc as U,al as W,bd as X,be as Y,a8 as Z,bf as ee,aa as t,ag as ae,bg as ne,bh as le}from"./index-DR8AH6H4.js";const p=Symbol.for("vuetify:v-expansion-panel"),B=m({...g(),...z()},"VExpansionPanelText"),S=b()({name:"VExpansionPanelText",props:B(),setup(e,d){let{slots:n}=d;const a=I(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:u}=G(e,a.isSelected);return P(()=>l(j,{onAfterLeave:u},{default:()=>{var i;return[h(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&o.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(i=n.default)==null?void 0:i.call(n)])]),[[$,a.isSelected.value]])]}})),{}}}),_=m({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...g(),...q()},"VExpansionPanelTitle"),C=b()({name:"VExpansionPanelTitle",directives:{Ripple:H},props:_(),setup(e,d){let{slots:n}=d;const a=I(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:u}=T(e,"color"),{dimensionStyles:i}=F(e),r=v(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),y=v(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return P(()=>{var x;return h(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},o.value,e.class],style:[u.value,i.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(x=n.default)==null?void 0:x.call(n,r.value),!e.hideActions&&l(w,{defaults:{VIcon:{icon:y.value}}},{default:()=>{var f;return[l("span",{class:"v-expansion-panel-title__icon"},[((f=n.actions)==null?void 0:f.call(n,r.value))??l(O,null,null)])]}})]),[[N("ripple"),e.ripple]])}),{}}}),D=m({title:String,text:String,bgColor:String,...W(),...U(),...Q(),...A(),..._(),...B()},"VExpansionPanel"),ie=b()({name:"VExpansionPanel",props:D(),emits:{"group:selected":e=>!0},setup(e,d){let{slots:n}=d;const a=J(e,p),{backgroundColorClasses:o,backgroundColorStyles:u}=T(e,"bgColor"),{elevationClasses:i}=K(e),{roundedClasses:r}=M(e),y=v(()=>(a==null?void 0:a.disabled.value)||e.disabled),x=v(()=>a.group.items.value.reduce((c,s,V)=>(a.group.selected.value.includes(s.id)&&c.push(V),c),[])),f=v(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===1)}),R=v(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===-1)});return X(p,a),P(()=>{const c=!!(n.text||e.text),s=!!(n.title||e.title),V=C.filterProps(e),L=S.filterProps(e);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":f.value,"v-expansion-panel--after-active":R.value,"v-expansion-panel--disabled":y.value},r.value,o.value,e.class],style:[u.value,e.style]},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...i.value]},null),l(w,{defaults:{VExpansionPanelTitle:{...V},VExpansionPanelText:{...L}}},{default:()=>{var E;return[s&&l(C,{key:"title"},{default:()=>[n.title?n.title():e.title]}),c&&l(S,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(E=n.default)==null?void 0:E.call(n)]}})]})}),{groupItem:a}}}),te=["default","accordion","inset","popout"],se=m({flat:Boolean,...le(),...ne(D(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...ae(),...g(),...A(),variant:{type:String,default:"default",validator:e=>te.includes(e)}},"VExpansionPanels"),ce=b()({name:"VExpansionPanels",props:se(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:n}=d;const{next:a,prev:o}=Y(e,p),{themeClasses:u}=Z(e),i=v(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ee({VExpansionPanel:{bgColor:t(e,"bgColor"),collapseIcon:t(e,"collapseIcon"),color:t(e,"color"),eager:t(e,"eager"),elevation:t(e,"elevation"),expandIcon:t(e,"expandIcon"),focusable:t(e,"focusable"),hideActions:t(e,"hideActions"),readonly:t(e,"readonly"),ripple:t(e,"ripple"),rounded:t(e,"rounded"),static:t(e,"static")}}),P(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},u.value,i.value,e.class],style:e.style},{default:()=>{var r;return[(r=n.default)==null?void 0:r.call(n,{prev:o,next:a})]}})),{next:a,prev:o}}});export{ce as V,ie as a,C as b,S as c};
