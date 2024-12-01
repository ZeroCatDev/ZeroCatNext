import{i,m as s,b0 as Q,k as c,a as n,p as y,v as f,ac as U,ad as m,ae as x,S as A,M as P,Y as S,al as V,l as Y,f as z,n as G,bp as J,q as K,s as W,t as X,bi as Z,x as $,af as ee,aU as ae,y as te,B as ne,ag as de,ah as le,u as ie,C as se,bq as ce,D as re,E as ue,F as oe,bl as ve,a6 as h,aR as me,aV as ye,Q as be,br as ke,ak as ge,a7 as Ce}from"./index-BVR4auYL.js";const Ve=i()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return Q({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=y({opacity:[Number,String],...s(),...f()},"VCardSubtitle"),Ie=i()({name:"VCardSubtitle",props:fe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),pe=U("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=i()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),k=!!(r||t.append),g=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(P,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[g&&n(pe,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),C&&n(Ie,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),k&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(P,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...s(),...f()},"VCardText"),he=i()({name:"VCardText",props:Se(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Y(),...s(),...x(),...z(),...G(),...J(),...K(),...W(),...X(),...Z(),...f(),...$(),...ee({variant:"elevated"})},"VCard"),Be=i()({name:"VCard",directives:{Ripple:ae},props:xe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:b}=te(e),{borderClasses:r}=ne(e),{colorClasses:k,colorStyles:g,variantClasses:C}=de(e),{densityClasses:u}=le(e),{dimensionStyles:l}=ie(e),{elevationClasses:T}=se(e),{loaderClasses:B}=ce(e),{locationStyles:D}=re(e),{positionClasses:L}=ue(e),{roundedClasses:N}=oe(e),o=ve(e,t),_=h(()=>e.link!==!1&&o.isLink.value),v=h(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),M=F||E,q=!!(a.append||e.appendAvatar||e.appendIcon),O=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),w=M||O||q,H=!!(a.text||e.text!=null);return me(n(R,Ce({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},b.value,r.value,k.value,u.value,T.value,B.value,L.value,N.value,C.value,e.class],style:[g.value,l.value,D.value,e.style],onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var I;return[j&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(he,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ve,null,{default:a.actions}),ge(v.value,"v-card")]}}),[[ye("ripple"),v.value&&e.ripple]])}),{}}});export{Be as V,he as a,Ve as b,pe as c,Ie as d,Pe as e};
