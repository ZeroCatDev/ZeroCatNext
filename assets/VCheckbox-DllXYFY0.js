import{m as A,V as t}from"./VCheckboxBtn-Cc7qxhc4.js";import{p as F,ap as I,a1 as B,i as U,a3 as R,aq as q,a5 as D,a6 as M,k as N,ar as $,as as l,a as u,a7 as r}from"./index-BVR4auYL.js";const j=F({...I(),...B(A(),["inline"])},"VCheckbox"),E=U()({name:"VCheckbox",inheritAttrs:!1,props:j(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:o}=d;const a=R(e,"modelValue"),{isFocused:n,focus:i,blur:m}=q(e),V=D(),p=M(()=>e.id||`checkbox-${V}`);return N(()=>{const[b,k]=$(c),v=l.filterProps(e),f=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},b,v,{modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,id:p.value,focused:n.value,style:e.style}),{...o,default:s=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=s;return u(t,r(f,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},k,{error:y.value===!1,modelValue:a.value,"onUpdate:modelValue":g=>a.value=g,onFocus:i,onBlur:m}),o)}})}),{}}});export{E as V};
