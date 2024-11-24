import{r as L,b as v,c as b,d as _,e as w,f as x,g as j,h as P,i as k,j as C,k as V,l as S,m as B,n as T,o as I,p as E,q as J,s as N,t as H,u as R,v as M,w as G,x as K,y as A,z as D,A as F,B as O,C as W,D as z,E as X,F as Y,G as Q,H as U,I as Z,J as $,K as ee,L as re,M as h}from"./Comment-BZPgdgqw.js";import{b1 as ae,H as te,aP as se,ad as g,b2 as d,_ as ie,I as ne,r as ge,o as u,e as f,c as m,w as i,K as l,T as ue,a4 as p,a as o,O as le,W as oe}from"./index-DGh90Ang.js";import{a as ce,b as he,c as pe,V as de}from"./VExpansionPanels-5RyDQRXZ.js";var e=re;e.registerLanguage("xml",L());e.registerLanguage("bash",v());e.registerLanguage("c",b());e.registerLanguage("cpp",_());e.registerLanguage("csharp",w());e.registerLanguage("css",x());e.registerLanguage("markdown",j());e.registerLanguage("diff",P());e.registerLanguage("ruby",k());e.registerLanguage("go",C());e.registerLanguage("graphql",V());e.registerLanguage("ini",S());e.registerLanguage("java",B());e.registerLanguage("javascript",T());e.registerLanguage("json",I());e.registerLanguage("kotlin",E());e.registerLanguage("less",J());e.registerLanguage("lua",N());e.registerLanguage("makefile",H());e.registerLanguage("perl",R());e.registerLanguage("objectivec",M());e.registerLanguage("php",G());e.registerLanguage("php-template",K());e.registerLanguage("plaintext",A());e.registerLanguage("python",D());e.registerLanguage("python-repl",F());e.registerLanguage("r",O());e.registerLanguage("rust",W());e.registerLanguage("scss",z());e.registerLanguage("shell",X());e.registerLanguage("sql",Y());e.registerLanguage("swift",Q());e.registerLanguage("yaml",U());e.registerLanguage("typescript",Z());e.registerLanguage("vbnet",$());e.registerLanguage("wasm",ee());e.HighlightJS=e;e.default=e;var y=ae({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(r){var a=te(r.language);se(function(){return r.language},function(t){a.value=t});var s=g(function(){return r.autodetect||!a.value}),c=g(function(){return!s.value&&!h.getLanguage(a.value)});return{className:g(function(){return c.value?"":"hljs "+a.value}),highlightedCode:g(function(){var t;if(c.value)return console.warn('The language "'+a.value+'" you specified could not be found.'),r.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(s.value){var n=h.highlightAuto(r.code);return a.value=(t=n.language)!==null&&t!==void 0?t:"",n.value}return(n=h.highlight(r.code,{language:a.value,ignoreIllegals:r.ignoreIllegals})).value})}},render:function(){return d("pre",{},[d("code",{class:this.className,innerHTML:this.highlightedCode})])}}),fe={install:function(r){r.component("highlightjs",y)},component:y};const me={components:{highlightjs:fe.component},data(){return{embedurl:"/",watchedtype:"",watchedid:"",pythonplayer:"",code:""}},props:{type:{type:String,default:"text"},id:{type:String,default:"1"}},watch:{type:async function(r,a){this.watchedtype=r,this.watchedid=r,this.code=await ne({url:"/project/"+this.id+"/source/",method:"get"}),console.log(this.code),this.type==="scratch"&&(this.embedurl="/scratch/embed.html#"+this.id),this.type==="python"&&(this.pythonplayer="/python/nextplay.html?id="+this.id)}}},ye=["src"],qe={key:1},Le={style:{width:"100%",height:"100%","aspect-ratio":"4 / 3"}},ve=["src"];function be(r,a,s,c,t,n){const q=ge("highlightjs");return u(),f(oe,null,[s.type==="scratch"?(u(),m(ue,{key:0,hover:"",border:"",style:{"aspect-ratio":"4 / 3"}},{default:i(()=>[l("iframe",{src:t.embedurl,scrolling:"no",frameborder:"0",style:{width:"100%",height:"100%"}},null,8,ye)]),_:1})):p("",!0),s.type==="python"?(u(),f("div",qe,[l("div",Le,[l("iframe",{src:t.pythonplayer,scrolling:"no",frameborder:"0",style:{width:"100%",height:"100%"}},null,8,ve)])])):p("",!0),a[1]||(a[1]=l("br",null,null,-1)),s.type!="scratch"?(u(),m(de,{key:2},{default:i(()=>[o(ce,null,{default:i(()=>[o(he,null,{default:i(()=>a[0]||(a[0]=[le("原始数据")])),_:1}),o(pe,null,{default:i(()=>[o(q,{autodetect:"",code:t.code},null,8,["code"])]),_:1})]),_:1})]),_:1})):p("",!0)],64)}const je=ie(me,[["render",be]]);export{je as P};
