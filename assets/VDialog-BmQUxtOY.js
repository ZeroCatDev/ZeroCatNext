import{p as y,a2 as A,bK as D,i as L,a3 as w,a4 as B,I,bx as S,aC as F,aA as m,aB as R,k as T,W as g,a7 as d,a as E,al as W,a8 as C,bf as O}from"./index-BVR4auYL.js";const k=y({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...A({origin:"center center",scrollStrategy:"block",transition:{component:D},zIndex:2400})},"VDialog"),N=L()({name:"VDialog",props:k(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,h){let{emit:v,slots:i}=h;const u=w(e,"modelValue"),{scopeId:V}=B(),t=I();function f(a){var l,c;const o=a.relatedTarget,r=a.target;if(o!==r&&((l=t.value)!=null&&l.contentEl)&&((c=t.value)!=null&&c.globalTop)&&![document,t.value.contentEl].includes(r)&&!t.value.contentEl.contains(r)){const n=O(t.value.contentEl);if(!n.length)return;const s=n[0],x=n[n.length-1];o===s?x.focus():s.focus()}}S(()=>{document.removeEventListener("focusin",f)}),F&&m(()=>u.value&&e.retainFocus,a=>{a?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0});function P(){var a;v("afterEnter"),(a=t.value)!=null&&a.contentEl&&!t.value.contentEl.contains(document.activeElement)&&t.value.contentEl.focus({preventScroll:!0})}function b(){v("afterLeave")}return m(u,async a=>{var o;a||(await R(),(o=t.value.activatorEl)==null||o.focus({preventScroll:!0}))}),T(()=>{const a=g.filterProps(e),o=d({"aria-haspopup":"dialog"},e.activatorProps),r=d({tabindex:-1},e.contentProps);return E(g,d({ref:t,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:u.value,"onUpdate:modelValue":l=>u.value=l,"aria-modal":"true",activatorProps:o,contentProps:r,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:P,onAfterLeave:b},V),{activator:i.activator,default:function(){for(var l=arguments.length,c=new Array(l),n=0;n<l;n++)c[n]=arguments[n];return E(W,{root:"VDialog"},{default:()=>{var s;return[(s=i.default)==null?void 0:s.call(i,...c)]}})}})}),C({},t)}});export{N as V};
