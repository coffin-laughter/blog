(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{219:function(t,e,a){},220:function(t,e,a){},221:function(t,e,a){},222:function(t,e,a){},224:function(t,e,a){"use strict";function s(){const t=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"];return t[Math.floor(Math.random()*t.length)]}a.d(e,"a",(function(){return s}))},226:function(t,e,a){"use strict";var s=a(14),r={props:{pageInfo:{type:Object,default:()=>({})},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},data:()=>({numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}),filters:{formatDateValue(t){if(!t)return"";t=t.replace("T"," ").slice(0,t.lastIndexOf("."));const e=Number(t.substr(11,2)),a=Number(t.substr(14,2)),r=Number(t.substr(17,2));return e>0||a>0||r>0?Object(s.d)(t):Object(s.d)(t,"yyyy-MM-dd")}},methods:{goTags(t){this.$router.push({path:`/tags/${t}/`})}}},n=(a(228),a(2)),o=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?a("i",{staticClass:"iconfont reco-account"},[a("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?a("i",{staticClass:"iconfont reco-date"},[a("span",[t._v(t._s(t._f("formatDateValue")(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?a("i",{staticClass:"iconfont reco-eye"},[a("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?a("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,(function(e,s){return a("span",{key:s,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(a){return t.goTags(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,"484a899e",null);e.a=o.exports},228:function(t,e,a){"use strict";var s=a(219);a.n(s).a},229:function(t,e,a){"use strict";var s=a(220);a.n(s).a},230:function(t,e,a){"use strict";var s=a(221);a.n(s).a},231:function(t,e,a){"use strict";e.a={methods:{_getStoragePage(){const t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",{page:1,path:""}),1):parseInt(e.page)},_setStoragePage(t){const e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}},233:function(t,e,a){},234:function(t,e,a){},235:function(t,e,a){"use strict";var s={components:{PageInfo:a(226).a},props:["item","currentPage","currentTag"]},r=(a(229),a(2)),n={components:{NoteAbstractItem:Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-item"},[t.item.frontmatter.sticky?a("i",{staticClass:"iconfont reco-sticky"}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t.item.frontmatter.keys?a("i",{staticClass:"iconfont reco-lock"}):t._e(),t._v(" "),a("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),a("hr",{staticClass:"hr"}),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)}),[],!1,null,"28f76ce9",null).exports},props:["data","currentPage","currentTag"],computed:{currentPageData(){const t=10*this.currentPage-10,e=10*this.currentPage;return this.data.slice(t,e)}}},o=(a(230),Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-wrapper"},t._l(t.currentPageData,(function(e){return a("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),1)}),[],!1,null,"b014bc36",null));e.a=o.exports},236:function(t,e,a){"use strict";var s=a(222);a.n(s).a},238:function(t,e,a){"use strict";var s=a(224),r={props:{currentTag:{type:String,default:""}},computed:{tags(){return[{name:"全部",path:"/tag/"},...this.$tags.list]}},methods:{tagClick(t){this.$emit("getCurrentTag",t)},getOneColor:s.a}},n=(a(236),a(2)),o=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e,s){return a("span",{key:s,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(a){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"36b9f66a",null);e.a=o.exports},257:function(t,e,a){},258:function(t,e,a){},259:function(t,e,a){},260:function(t,e,a){},261:function(t,e,a){},262:function(t,e,a){"use strict";var s=a(233);a.n(s).a},263:function(t,e,a){"use strict";var s=a(234);a.n(s).a},296:function(t,e,a){"use strict";var s=a(257);a.n(s).a},297:function(t,e,a){t.exports=a.p+"assets/img/home-bg.7b267d7c.jpg"},298:function(t,e,a){"use strict";var s=a(258);a.n(s).a},299:function(t,e,a){"use strict";var s=a(259);a.n(s).a},300:function(t,e,a){"use strict";var s=a(260);a.n(s).a},301:function(t){t.exports=JSON.parse('{"a":"1.4.5"}')},302:function(t,e,a){"use strict";var s=a(261);a.n(s).a},309:function(t,e,a){"use strict";a.r(e);var s=a(269),r=a(225),n=a(223),o={mixins:[n.a],components:{NavLink:s.a,ModuleTransition:r.a},computed:{actionLink(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},i=(a(296),a(2)),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?a("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco"))]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,s){return a("div",{key:s,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,l=a(238),u=a(270),h=a.n(u),m=a(224),g={data:()=>({popupWindowStyle:{}}),computed:{dataAddColor(){let{friendLink:t}=this.$themeConfig;return t&&t.length>0?(t=t.map(t=>({...t,color:Object(m.a)()})),t):[]}},methods:{getMd5:t=>h()(t),showDetail(t){const e=t.target,a=e.querySelector(".popup-window-wrapper"),s=e.querySelector(".popup-window");a.style.display="block";const{clientWidth:r}=e,{clientWidth:n,clientHeight:o}=s;this.popupWindowStyle={left:(r-n)/2+"px",top:-o+"px"},this.$nextTick(()=>{this._adjustPosition(e.querySelector(".popup-window"))})},hideDetail(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},getImgUrl(t){const{logo:e,email:a}=t;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?this.$withBase(e):`//1.gravatar.com/avatar/${this.getMd5(a||"")}?s=50&amp;d=mm&amp;r=x`},_adjustPosition(t){const{offsetWidth:e}=document.body,{x:a,width:s}=t.getBoundingClientRect(),r=e-(a+s);if(r<0){const{offsetLeft:e}=t;this.popupWindowStyle={...this.popupWindowStyle,left:e+r+"px"}}}}},d=(a(298),Object(i.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(e,s){return a("div",{key:s,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[a("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"popup-window-wrapper"},[a("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.getImgUrl(e)}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?a("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"48a8cd70",null).exports),p=a(235),f=a(231),v=a(273),_={mixins:[f.a,n.a],components:{NoteAbstract:p.a,TagList:l.a,FriendLink:d,ModuleTransition:r.a,PersonalInfo:v.a},data:()=>({recoShow:!1,currentPage:1,tags:[]}),computed:{homeBlogCfg(){return this.$recoLocals.homeBlog},actionLink(){const{actionLink:t,actionText:e}=this.$frontmatter;return{link:t,text:e}},heroImageStyle(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}},bgImageStyle(){const t={height:"350px",textAlign:"center",overflow:"hidden"},{bgImageStyle:e}=this.$frontmatter;return e?{...t,...e}:t},heroHeight:()=>document.querySelector(".hero").clientHeight},mounted(){this.recoShow=!0,this._setPage(this._getStoragePage())},methods:{getCurrentPage(t){this._setPage(t),setTimeout(()=>{window.scrollTo(0,this.heroHeight)},100)},getPages(){let t=this.$site.pages;t=t.filter(t=>{const{home:e,date:a}=t.frontmatter;return!(1==e||void 0===a)}),this.pages=0==t.length?[]:t},getPagesByTags(t){this.$router.push({path:t.path})},_setPage(t){this.currentPage=t,this.$page.currentPage=t,this._setStoragePage(t)},getOneColor:m.a}},C=(a(299),Object(i.a)(_,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-blog"},[s("div",{staticClass:"hero",style:Object.assign({},t.bgImageStyle)},[s("div",{staticClass:"mask",style:{background:"url("+(t.$frontmatter.bgImage?t.$withBase(t.$frontmatter.bgImage):a(297))+") center/cover no-repeat"}}),t._v(" "),s("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?s("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),s("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?s("h1",[t._v("\n        "+t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco")+"\n      ")]):t._e()]),t._v(" "),s("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?s("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()])],1),t._v(" "),s("ModuleTransition",{attrs:{delay:"0.16"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[s("div",{staticClass:"blog-list"},[s("note-abstract",{attrs:{data:t.$recoPosts,currentPage:t.currentPage}}),t._v(" "),s("pagation",{staticClass:"pagation",attrs:{total:t.$recoPosts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),s("div",{staticClass:"info-wrapper"},[s("PersonalInfo"),t._v(" "),s("h4",[s("i",{staticClass:"iconfont reco-category"}),t._v(" "+t._s(t.homeBlogCfg.category))]),t._v(" "),s("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,a){return s("li",{key:a,staticClass:"category-item"},[s("router-link",{attrs:{to:e.path}},[s("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),s("hr"),t._v(" "),0!==t.$tags.list.length?s("h4",[s("i",{staticClass:"iconfont reco-tag"}),t._v(" "+t._s(t.homeBlogCfg.tag))]):t._e(),t._v(" "),s("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?s("h4",[s("i",{staticClass:"iconfont reco-friend"}),t._v(" "+t._s(t.homeBlogCfg.friendLink))]):t._e(),t._v(" "),s("FriendLink")],1)])]),t._v(" "),s("ModuleTransition",{attrs:{delay:"0.24"}},[s("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),$=a(226),w=a(14);function b(t,e,a){const s=[];!function t(e,a){for(let s=0,r=e.length;s<r;s++)"group"===e[s].type?t(e[s].children||[],a):a.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const r=s[e];if("page"===r.type&&r.path===decodeURIComponent(t.path))return s[e+a]}}var y={mixins:[n.a],components:{PageInfo:$.a,ModuleTransition:r.a},props:["sidebarItems"],data:()=>({isHasKey:!0}),computed:{shouldShowComments(){const{isShowComments:t}=this.$frontmatter,{showComment:e}=this.$themeConfig.valineConfig||{showComment:!0};return!1!==e&&!1!==t||!1===e&&!0===t},showAccessNumber(){return void 0!==this.$themeConfig.valineConfig},lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$frontmatter.prev;return!1===t?void 0:t?Object(w.m)(this.$site.pages,t,this.$route.path):(e=this.$page,a=this.sidebarItems,b(e,a,-1));var e,a},next(){const t=this.$frontmatter.next;return!1===t?void 0:t?Object(w.m)(this.$site.pages,t,this.$route.path):(e=this.$page,a=this.sidebarItems,b(e,a,1));var e,a},editLink(){if(!1===this.$frontmatter.editLink)return!1;const{repo:t,editLinks:e,docsDir:a="",docsBranch:s="master",docsRepo:r=t}=this.$themeConfig;return r&&e&&this.$page.relativePath?this.createEditLink(t,r,a,s,this.$page.relativePath):""},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,a,s,r){if(/bitbucket.org/.test(t)){return(w.k.test(e)?e:t).replace(w.b,"")+"/src"+`/${s}/`+(a?a.replace(w.b,"")+"/":"")+r+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}return(w.k.test(e)?e:"https://github.com/"+e).replace(w.b,"")+"/edit"+`/${s}/`+(a?a.replace(w.b,"")+"/":"")+r}}},k=(a(300),Object(i.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[a("ModuleTransition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule&&t.$page.title,expression:"recoShowModule && $page.title"}],staticClass:"page-title"},[a("h1",[t._v(t._s(t.$page.title))]),t._v(" "),a("hr"),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"theme-reco-content"})],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("footer",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&(t.prev||t.next)?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n          ←\n          "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v("\n          →\n        ")],1):t._e()])]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule?a("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1)],1)}),[],!1,null,null,null).exports),S=a(301),x={data:()=>({version:S.a})},T=(a(302),Object(i.a)(x,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("span",[a("i",{staticClass:"iconfont reco-theme"}),t._v(" "),a("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[t._v(t._s("vuepress-theme-reco@"+t.version))])]),t._v(" "),t.$themeConfig.record?a("span",[a("i",{staticClass:"iconfont reco-beian"}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),a("span",[a("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),a("a",[t.$themeConfig.author||t.$site.title?a("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear&&t.$themeConfig.startYear!=(new Date).getFullYear()?a("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.$themeConfig.valineConfig,expression:"$themeConfig.valineConfig !== undefined"}]},[a("i",{staticClass:"iconfont reco-eye"}),t._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?a("p",{staticClass:"cyber-security"},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e(),t._v(" "),a("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"ae2be87e",null).exports),P={components:{HomeBlog:C,Home:c,Page:k,Common:a(237).a,Footer:T},computed:{sidebarItems(){return Object(w.n)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom(){const{type:t}=this.$themeConfig;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"}}},M=(a(262),a(263),Object(i.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("Common",[this.$frontmatter.home?e(this.homeCom,{tag:"component"}):e("Page",{attrs:{"sidebar-items":this.sidebarItems}}),this._v(" "),this.$frontmatter.home?e("Footer",{staticClass:"footer"}):this._e()],1)}),[],!1,null,null,null));e.default=M.exports}}]);