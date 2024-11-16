import{c as L,r as v,b,d as _,e as x,f as w,g as j,h as P,i as k,j as C,k as V,l as S,m as B,n as T,o as E,p as I,q as J,s as N,t as H,u as M,v as R,w as F,x as G,y as A,z as D,A as K,B as z,C as O,D as W,E as X,F as Y,G as Q,H as U,I as Z,J as $,K as ee,L as re,M as h}from"./Comment-DsQnXNBG.js";import{b1 as ae,b2 as d,y as te,aM as se,P as g,_ as ie,o as u,e as f,c as y,w as i,h as l,s as ne,H as p,a as o,l as ge,r as ue,F as le,x as oe}from"./index-BXM8jUhB.js";import{b as ce,c as he,a as pe,V as de}from"./VExpansionPanels-CD48KzEN.js";var e=L;e.registerLanguage("xml",v());e.registerLanguage("bash",b());e.registerLanguage("c",_());e.registerLanguage("cpp",x());e.registerLanguage("csharp",w());e.registerLanguage("css",j());e.registerLanguage("markdown",P());e.registerLanguage("diff",k());e.registerLanguage("ruby",C());e.registerLanguage("go",V());e.registerLanguage("graphql",S());e.registerLanguage("ini",B());e.registerLanguage("java",T());e.registerLanguage("javascript",E());e.registerLanguage("json",I());e.registerLanguage("kotlin",J());e.registerLanguage("less",N());e.registerLanguage("lua",H());e.registerLanguage("makefile",M());e.registerLanguage("perl",R());e.registerLanguage("objectivec",F());e.registerLanguage("php",G());e.registerLanguage("php-template",A());e.registerLanguage("plaintext",D());e.registerLanguage("python",K());e.registerLanguage("python-repl",z());e.registerLanguage("r",O());e.registerLanguage("rust",W());e.registerLanguage("scss",X());e.registerLanguage("shell",Y());e.registerLanguage("sql",Q());e.registerLanguage("swift",U());e.registerLanguage("yaml",Z());e.registerLanguage("typescript",$());e.registerLanguage("vbnet",ee());e.registerLanguage("wasm",re());e.HighlightJS=e;e.default=e;var m=ae({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(r){var a=te(r.language);se(function(){return r.language},function(t){a.value=t});var s=g(function(){return r.autodetect||!a.value}),c=g(function(){return!s.value&&!h.getLanguage(a.value)});return{className:g(function(){return c.value?"":"hljs "+a.value}),highlightedCode:g(function(){var t;if(c.value)return console.warn('The language "'+a.value+'" you specified could not be found.'),r.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(s.value){var n=h.highlightAuto(r.code);return a.value=(t=n.language)!==null&&t!==void 0?t:"",n.value}return(n=h.highlight(r.code,{language:a.value,ignoreIllegals:r.ignoreIllegals})).value})}},render:function(){return d("pre",{},[d("code",{class:this.className,innerHTML:this.highlightedCode})])}}),fe={install:function(r){r.component("highlightjs",m)},component:m};const ye={components:{highlightjs:fe.component},data(){return{embedurl:"/",watchedtype:"",watchedid:"",pythonplayer:"",code:""}},props:{type:{type:String,default:"text"},id:{type:String,default:"1"}},watch:{type:async function(r,a){this.watchedtype=r,this.watchedid=r,this.code=await oe({url:"/project/"+this.id+"/source/",method:"get"}),console.log(this.code),this.type==="scratch"&&(this.embedurl="/scratch/embed.html#"+this.id),this.type==="python"&&(this.pythonplayer="/python/nextplay.html?id="+this.id)}}},me=["src"],qe={key:1},Le={style:{width:"100%",height:"100%","aspect-ratio":"4 / 3"}},ve=["src"];function be(r,a,s,c,t,n){const q=ue("highlightjs");return u(),f(le,null,[s.type==="scratch"?(u(),y(ne,{key:0,hover:"",border:"",style:{"aspect-ratio":"4 / 3"}},{default:i(()=>[l("iframe",{src:t.embedurl,scrolling:"no",frameborder:"0",style:{width:"100%",height:"100%"}},null,8,me)]),_:1})):p("",!0),s.type==="python"?(u(),f("div",qe,[l("div",Le,[l("iframe",{src:t.pythonplayer,scrolling:"no",frameborder:"0",style:{width:"100%",height:"100%"}},null,8,ve)])])):p("",!0),a[1]||(a[1]=l("br",null,null,-1)),s.type!="scratch"?(u(),y(de,{key:2},{default:i(()=>[o(pe,null,{default:i(()=>[o(ce,null,{default:i(()=>a[0]||(a[0]=[ge("原始数据")])),_:1}),o(he,null,{default:i(()=>[o(q,{autodetect:"",code:t.code},null,8,["code"])]),_:1})]),_:1})]),_:1})):p("",!0)],64)}const je=ie(ye,[["render",be]]);export{je as P};