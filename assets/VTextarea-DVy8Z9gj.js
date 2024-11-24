import{p,aB as ee,bC as te,i as ae,bD as ne,aa as le,aD as oe,ad as y,H as v,aK as ue,a_ as ie,bE as re,aP as x,bw as se,k as ce,aE as de,aF as D,bF as fe,a as l,bG as ve,ae as I,W as R,b6 as E,ba as xe,bH as me,bI as ge,af as he,aR as S,bJ as we,bq as Ve,bK as ye}from"./index-DGh90Ang.js";const be=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Ce=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:be(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,G){let{attrs:b,emit:H,slots:i}=G;const o=le(e,"modelValue"),{isFocused:f,focus:T,blur:U}=oe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),K=y(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const B=v(),m=v(),M=ue(""),g=v(),j=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||T()}function q(t){F(),H("click:control",t)}function J(t){H("mousedown:control",t)}function W(t){t.stopPropagation(),F(),S(()=>{o.value="",we(e["onClick:clear"],t)})}function L(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),C=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),P=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*w+a||1/0,s=ye(u??0,P,k);h.value=Math.floor((s-a)/w),M.value=Ve(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(b),{modelValue:w,...P}=D.filterProps(e),k=fe(e);return l(D,I({ref:B,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":C.value},e.class],style:e.style},a,P,{centerAffix:h.value===1&&!C.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:N,isDirty:_,isReadonly:Q,isValid:X}=s;return l(ve,I({ref:m,style:{"--v-textarea-control-height":M.value},onClick:q,onMousedown:J,"onClick:clear":W,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},k,{id:V.value,active:j.value||_.value,centerAffix:h.value===1&&!C.value,dirty:_.value||e.dirty,disabled:N.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:z,...A}}=Y;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),E(l("textarea",I({ref:g,class:z,value:o.value,onInput:L,autofocus:e.autofocus,readonly:Q.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},A,u),null),[[xe("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&E(l("textarea",{class:[z,"v-textarea__sizer"],id:`${A.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(R,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(R,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:K.value,disabled:e.disabled},i.counter)])])}:void 0})}),he({},B,m,g)}});export{Ce as V};
