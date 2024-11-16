import{y as L,P as C,aZ as H,a_ as be,aJ as q,a$ as Ce,T as re,L as xe,ar as Me,aH as N,M as G,aI as Ie,aq as Ae,aN as Pe,aO as pe,aM as Q,aL as te,aP as _e,R as Ke,E as ae,a as s,F as $,C as ue,aQ as Re,aR as De,Q as D,$ as Le,aS as Te,t as ne,aT as Ee,aE as Oe,i as Ne,aU as Ue,k as Be,at as je,l as ze,b0 as oe,S as He,aW as Qe,U as $e,aX as We,aY as Je}from"./index-BXM8jUhB.js";const Xe=(e,c,t)=>e==null||c==null?-1:e.toString().toLocaleLowerCase().indexOf(c.toString().toLocaleLowerCase()),Ye=re({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Ze(e,c,t){var I;const b=[],m=(t==null?void 0:t.default)??Xe,g=t!=null&&t.filterKeys?q(t.filterKeys):!1,y=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return b;e:for(let k=0;k<e.length;k++){const[w,A=w]=q(e[k]),r={},o={};let V=-1;if((c||y>0)&&!(t!=null&&t.noFilter)){if(typeof w=="object"){const T=g||Object.keys(A);for(const x of T){const U=Ce(A,x),E=(I=t==null?void 0:t.customKeyFilter)==null?void 0:I[x];if(V=E?E(U,c,w):m(U,c,w),V!==-1&&V!==!1)E?r[x]=V:o[x]=V;else if((t==null?void 0:t.filterMode)==="every")continue e}}else V=m(w,c,w),V!==-1&&V!==!1&&(o.title=V);const P=Object.keys(o).length,p=Object.keys(r).length;if(!P&&!p||(t==null?void 0:t.filterMode)==="union"&&p!==y&&!P||(t==null?void 0:t.filterMode)==="intersection"&&(p!==y||!P))continue}b.push({index:k,matches:{...o,...r}})}return b}function Ge(e,c,t,b){const m=L([]),g=L(new Map),y=C(()=>H(c));be(()=>{const k=typeof t=="function"?t():H(t),w=typeof k!="string"&&typeof k!="number"?"":String(k),A=Ze(y.value,w,{customKeyFilter:{...e.customKeyFilter,...H(b==null?void 0:b.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),r=H(c),o=[],V=new Map;A.forEach(P=>{let{index:p,matches:T}=P;const x=r[p];o.push(x),V.set(x.value,T)}),m.value=o,g.value=V});function I(k){return g.value.get(k.value)}return{filteredItems:m,filteredMatches:g,getMatches:I}}function qe(e,c,t){if(c==null)return e;if(Array.isArray(c))throw new Error("Multiple matches is not implemented");return typeof c=="number"&&~c?s($,null,[s("span",{class:"v-autocomplete__unmask"},[e.substr(0,c)]),s("span",{class:"v-autocomplete__mask"},[e.substr(c,t)]),s("span",{class:"v-autocomplete__unmask"},[e.substr(c+t)])]):e}const el=re({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Ye({filterKeys:["title"]}),...Je(),...$e(We({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Qe({transition:!1})},"VAutocomplete"),tl=xe()({name:"VAutocomplete",props:el(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:t}=c;const{t:b}=Me(),m=L(),g=N(!1),y=N(!0),I=N(!1),k=L(),w=L(),A=G(e,"menu"),r=C({get:()=>A.value,set:l=>{var a;A.value&&!l&&((a=k.value)!=null&&a.ΨopenChildren.size)||(A.value=l)}}),o=N(-1),V=C(()=>{var l;return(l=m.value)==null?void 0:l.color}),P=C(()=>r.value?e.closeText:e.openText),{items:p,transformIn:T,transformOut:x}=Ie(e),{textColorClasses:U,textColorStyles:E}=Ae(V),f=G(e,"search",""),n=G(e,"modelValue",[],l=>T(l===null?[null]:q(l)),l=>{const a=x(l);return e.multiple?a:a[0]??null}),se=C(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:n.value.length),R=Pe(),{filteredItems:W,getMatches:ie}=Ge(e,p,()=>y.value?"":f.value),M=C(()=>e.hideSelected?W.value.filter(l=>!n.value.some(a=>a.value===l.value)):W.value),B=C(()=>!!(e.chips||t.chip)),O=C(()=>B.value||!!t.selection),ce=C(()=>n.value.map(l=>l.props.value)),J=C(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&f.value===((a=M.value[0])==null?void 0:a.title))&&M.value.length>0&&!y.value&&!I.value}),X=C(()=>e.hideNoData&&!M.value.length||e.readonly||(R==null?void 0:R.isReadonly.value)),Y=L(),ve=pe(Y,m);function fe(l){e.openOnClear&&(r.value=!0),f.value=""}function de(){X.value||(r.value=!0)}function me(l){X.value||(g.value&&(l.preventDefault(),l.stopPropagation()),r.value=!r.value)}function he(l){var a;Te(l)&&((a=m.value)==null||a.focus())}function ge(l){var u,i,F;if(e.readonly||R!=null&&R.isReadonly.value)return;const a=m.value.selectionStart,v=n.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(r.value=!0),["Escape"].includes(l.key)&&(r.value=!1),J.value&&["Enter","Tab"].includes(l.key)&&!n.value.some(d=>{let{value:h}=d;return h===M.value[0].value})&&_(M.value[0]),l.key==="ArrowDown"&&J.value&&((u=Y.value)==null||u.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&O.value&&n.value.length>0&&!f.value)return _(n.value[0],!1);if(~o.value){const d=o.value;_(n.value[o.value],!1),o.value=d>=v-1?v-2:d}else l.key==="Backspace"&&!f.value&&(o.value=v-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(o.value<0&&a>0)return;const d=o.value>-1?o.value-1:v-1;n.value[d]?o.value=d:(o.value=-1,m.value.setSelectionRange((i=f.value)==null?void 0:i.length,(F=f.value)==null?void 0:F.length))}if(l.key==="ArrowRight"){if(o.value<0)return;const d=o.value+1;n.value[d]?o.value=d:(o.value=-1,m.value.setSelectionRange(0,0))}}}function ye(l){if(oe(m.value,":autofill")||oe(m.value,":-webkit-autofill")){const a=p.value.find(v=>v.title===l.target.value);a&&_(a)}}function Ve(){var l;e.eager&&((l=w.value)==null||l.calculateVisibleItems())}function ke(){var l;g.value&&(y.value=!0,(l=m.value)==null||l.focus())}function Fe(l){g.value=!0,setTimeout(()=>{I.value=!0})}function Se(l){I.value=!1}function we(l){(l==null||l===""&&!e.multiple&&!O.value)&&(n.value=[])}const Z=N(!1);function _(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const v=n.value.findIndex(i=>e.valueComparator(i.value,l.value)),u=a??!~v;if(~v){const i=u?[...n.value,l]:[...n.value];i.splice(v,1),n.value=i}else u&&(n.value=[...n.value,l]);e.clearOnSelect&&(f.value="")}else{const v=a!==!1;n.value=v?[l]:[],f.value=v&&!O.value?l.title:"",te(()=>{r.value=!1,y.value=!0})}}return Q(g,(l,a)=>{var v;l!==a&&(l?(Z.value=!0,f.value=e.multiple||O.value?"":String(((v=n.value.at(-1))==null?void 0:v.props.title)??""),y.value=!0,te(()=>Z.value=!1)):(!e.multiple&&f.value==null&&(n.value=[]),r.value=!1,n.value.some(u=>{let{title:i}=u;return i===f.value})||(f.value=""),o.value=-1))}),Q(f,l=>{!g.value||Z.value||(l&&(r.value=!0),y.value=!l)}),Q(r,()=>{if(!e.hideSelected&&r.value&&n.value.length){const l=M.value.findIndex(a=>n.value.some(v=>a.value===v.value));_e&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=w.value)==null||a.scrollToIndex(l))})}}),Q(()=>e.items,(l,a)=>{r.value||g.value&&!a.length&&l.length&&(r.value=!0)}),Ke(()=>{const l=!!(!e.hideNoData||M.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),a=n.value.length>0,v=ae.filterProps(e);return s(ae,D({ref:m},v,{modelValue:f.value,"onUpdate:modelValue":[u=>f.value=u,we],focused:g.value,"onUpdate:focused":u=>g.value=u,validationValue:n.externalValue,counterValue:se.value,dirty:a,onChange:ye,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":r.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!O.value,"v-autocomplete--selecting-index":o.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":fe,"onMousedown:control":de,onKeydown:ge}),{...t,default:()=>s($,null,[s(De,D({ref:k,modelValue:r.value,"onUpdate:modelValue":u=>r.value=u,activator:"parent",contentClass:"v-autocomplete__content",disabled:X.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:Ve,onAfterLeave:ke},e.menuProps),{default:()=>[l&&s(Le,D({ref:Y,selected:ce.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:he,onFocusin:Fe,onFocusout:Se,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},ve,e.listProps),{default:()=>{var u,i,F;return[(u=t["prepend-item"])==null?void 0:u.call(t),!M.value.length&&!e.hideNoData&&(((i=t["no-data"])==null?void 0:i.call(t))??s(ne,{title:b(e.noDataText)},null)),s(Ee,{ref:w,renderless:!0,items:M.value},{default:d=>{var le;let{item:h,index:K,itemRef:S}=d;const ee=D(h.props,{ref:S,key:K,active:J.value&&K===0?!0:void 0,onClick:()=>_(h,null)});return((le=t.item)==null?void 0:le.call(t,{item:h,index:K,props:ee}))??s(ne,D(ee,{role:"option"}),{prepend:j=>{let{isSelected:z}=j;return s($,null,[e.multiple&&!e.hideSelected?s(Oe,{key:h.value,modelValue:z,ripple:!1,tabindex:"-1"},null):void 0,h.props.prependAvatar&&s(Ne,{image:h.props.prependAvatar},null),h.props.prependIcon&&s(ue,{icon:h.props.prependIcon},null)])},title:()=>{var j,z;return y.value?h.title:qe(h.title,(j=ie(h))==null?void 0:j.title,((z=f.value)==null?void 0:z.length)??0)}})}}),(F=t["append-item"])==null?void 0:F.call(t)]}})]}),n.value.map((u,i)=>{function F(S){S.stopPropagation(),S.preventDefault(),_(u,!1)}const d={"onClick:close":F,onKeydown(S){S.key!=="Enter"&&S.key!==" "||(S.preventDefault(),S.stopPropagation(),F(S))},onMousedown(S){S.preventDefault(),S.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},h=B.value?!!t.chip:!!t.selection,K=h?Ue(B.value?t.chip({item:u,index:i,props:d}):t.selection({item:u,index:i})):void 0;if(!(h&&!K))return s("div",{key:u.value,class:["v-autocomplete__selection",i===o.value&&["v-autocomplete__selection--selected",U.value]],style:i===o.value?E.value:{}},[B.value?t.chip?s(je,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[K]}):s(Be,D({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},d),null):K??s("span",{class:"v-autocomplete__selection-text"},[u.title,e.multiple&&i<n.value.length-1&&s("span",{class:"v-autocomplete__selection-comma"},[ze(",")])])])})]),"append-inner":function(){var d;for(var u=arguments.length,i=new Array(u),F=0;F<u;F++)i[F]=arguments[F];return s($,null,[(d=t["append-inner"])==null?void 0:d.call(t,...i),e.menuIcon?s(ue,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:me,onClick:Re,"aria-label":b(P.value),title:b(P.value),tabindex:"-1"},null):void 0])}})}),He({isFocused:g,isPristine:y,menu:r,search:f,filteredItems:W,select:_},m)}});export{tl as V,Ye as m,Ge as u};