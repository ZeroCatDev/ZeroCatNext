import{ap as D,J as L,aq as $,a0 as z,ar as R,a7 as w,ac as F,ad as j,ae as E,af as M,a1 as N,ag as O,as as q,M as J,N as Q,Q as o,ah as p,at as G,au as H,aa as K,al as U,am as W,an as X,ao as Y,av as Z,aj as ee,aw as ae,a as t,ax as te,C as le,ay as d,m as ne,R as se}from"./index-B4ttr3i5.js";const oe=D("v-alert-title"),re=["success","info","warning","error"],ie=L({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:$,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...z(),...R(),...w(),...F(),...j(),...E(),...M(),...N(),...O(),...q({variant:"flat"})},"VAlert"),ue=J()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=Q(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=p(e),{colorClasses:k,colorStyles:b,variantClasses:P}=G(y),{densityClasses:C}=H(e),{dimensionStyles:V}=K(e),{elevationClasses:g}=U(e),{locationStyles:x}=W(e),{positionClasses:S}=X(e),{roundedClasses:_}=Y(e),{textColorClasses:h,textColorStyles:B}=Z(ee(e,"borderColor")),{t:T}=ae(),i=o(()=>({"aria-label":T(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),A=!!(a.title||e.title),I=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,k.value,C.value,g.value,S.value,_.value,P.value,e.class],style:[b.value,V.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",h.value],style:B.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(le,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[A&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),I&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(ne,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{ue as V};
