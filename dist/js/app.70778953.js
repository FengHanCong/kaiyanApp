(function(t){function a(a){for(var i,r,o=a[0],l=a[1],c=a[2],d=0,v=[];d<o.length;d++)r=o[d],n[r]&&v.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(a);while(v.length)v.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],i=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(i=!1)}i&&(s.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},n={app:0},s=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0290":function(t,a,e){},"034f":function(t,a,e){"use strict";var i=e("64a9"),n=e.n(i);n.a},"21f5":function(t,a,e){},"25c0":function(t,a,e){},"4c75":function(t,a,e){"use strict";var i=e("5e5a"),n=e.n(i);n.a},5150:function(t,a,e){},"53b4":function(t,a,e){"use strict";var i=e("e734"),n=e.n(i);n.a},"555c":function(t,a,e){"use strict";var i=e("21f5"),n=e.n(i);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var i=e("2b0e"),n=e("bc3a"),s=e.n(n),r={},o=s.a.create(r);o.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),o.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,a){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},i["default"].use(Plugin);Plugin;var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},c=[],u={components:{}},d=u,v=(e("034f"),e("2877")),p=Object(v["a"])(d,l,c,!1,null,null,null);p.options.__file="App.vue";var f=p.exports,h=e("8c4f"),_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("Header"),e("div",{staticClass:"content"},[e("router-view")],1)],1)},m=[],C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("router-link",{staticClass:"el-icon-menu menu",attrs:{to:"/menu"}}),e("router-link",{staticClass:"el-icon-search search",attrs:{to:"/search"}}),e("div",{staticClass:"nav"},[e("router-link",{attrs:{to:"/daily"}},[t._v("日报")]),t._l(t.list,function(a,i){return e("router-link",{key:i,attrs:{to:/index/+a.data.id}},[t._v(t._s(t.parseTitle(a.data.title)))])})],2)],1)},g=[],y=(e("a481"),{data:function(){return{list:{}}},methods:{parseTitle:function(t){return t.replace("#","")}},created:function(){var t=this;this.axios.get("https://api.apiopen.top/videoCategory").then(function(a){t.list=a.data.result.itemList})}}),b=y,x=(e("e761"),Object(v["a"])(b,C,g,!1,null,"473bdd2a",null));x.options.__file="Header.vue";var k=x.exports,w={components:{Header:k}},j=w,O=(e("555c"),Object(v["a"])(j,_,m,!1,null,"cc625fde",null));O.options.__file="Index.vue";var $=O.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"menu-all"},[e("div",{staticClass:"top"},[e("h4",[t._v("置顶分类排序")]),e("span",{staticClass:"el-icon-arrow-left",on:{click:function(a){t.$router.go(-1)}}})]),e("div",{staticClass:"all"},t._l(t.list,function(a,i){return e("div",{key:i,staticClass:"item"},[e("router-link",{attrs:{to:/page/+a.data.id}},[e("img",{attrs:{src:a.data.icon}}),e("span",{staticClass:"el-icon-more"}),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v(t._s(a.data.title))]),e("div",{staticClass:"context"},[t._v(t._s(a.data.description))])])])],1)}))])},E=[],D={data:function(){return{list:""}},created:function(){var t=this;this.axios.get("https://api.apiopen.top/videoCategory").then(function(a){t.list=a.data.result.itemList})}},T=D,I=(e("9548"),Object(v["a"])(T,P,E,!1,null,"a04e32f2",null));I.options.__file="Menu.vue";var M=I.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"xxx"},[e("h2",[t._v("最近更新")]),t._l(t.lately,function(a){return e("div",{key:a.id,staticClass:"recently"},[e("router-link",{attrs:{to:/video/+a.id}},[e("img",{attrs:{src:a.data.content.data.cover.detail}})]),e("div",{staticClass:"writer"},[e("div",{staticClass:"authro"},[e("img",{attrs:{src:a.data.header.icon}}),e("router-link",{attrs:{to:/author/+a.id}},[e("div",{staticClass:"authro-name"},[e("h3",[t._v(t._s(a.data.header.title))]),e("span",[t._v(t._s(a.data.header.description))])])])],1),e("router-link",{staticClass:"el-icon-share",attrs:{to:"./sss"}})],1),e("hr")],1)})],2)},q=[],L={data:function(){return{lately:""}},beforeRouteUpdate:function(t,a,e){e(),this.setData()},methods:{setData:function(){var t=this;this.axios.get("https://api.apiopen.top/videoCategoryDetails",{params:{id:this.$route.params.id}}).then(function(a){t.lately=a.data.result})}},created:function(){var t=this;this.axios.get("https://api.apiopen.top/videoCategoryDetails",{params:{id:this.$route.params.id}}).then(function(a){t.lately=a.data.result})}},H=L,R=(e("53b4"),Object(v["a"])(H,S,q,!1,null,"5aeeecb0",null));R.options.__file="Content.vue";var U=R.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"header"},[e("span",{staticClass:"exit",on:{click:function(a){t.$router.go(-1)}}},[t._v("取消")]),e("div",{staticClass:"ss"},[e("el-input",{attrs:{placeholder:"搜索视频、作者、用户及标签",clearable:""},nativeOn:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.go(a):null}},model:{value:t.id,callback:function(a){t.id=a},expression:"id"}})],1)]),t._m(0),t._m(1)])},J=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"list"},[e("div",{staticClass:"list-c"},[e("a",[t._v("删除")]),e("h4",[t._v("搜索历史")])]),e("div",{staticClass:"ls"},[e("span",[t._v("qqq")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"list"},[e("div",{staticClass:"list-c"},[e("h4",[t._v("热搜关键词")])]),e("div",{staticClass:"ls"},[e("span",[t._v("没事")]),e("span",[t._v("旅行")]),e("span",[t._v("生活小技巧")]),e("span",[t._v("健身")]),e("span",[t._v("汽车")]),e("span",[t._v("广告")]),e("span",[t._v("动画")])])])}],V={data:function(){return{id:null}},methods:{go:function(){window.location.href="author/"+this.id}}},B=V,F=(e("66fd"),Object(v["a"])(B,A,J,!1,null,"2f2e887f",null));F.options.__file="Search.vue";var z=F.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"module"},[e("div",{staticClass:"header"},[e("div",{staticClass:"headPortrait"},[e("img",{staticClass:"headerImage",attrs:{src:t.headerImage}}),e("i",{staticClass:"el-icon-arrow-left exit",on:{click:function(a){t.$router.go(-1)}}}),e("img",{staticClass:"author",attrs:{src:t.author.icon}})]),e("el-row",[e("h3",[t._v(t._s(t.author.name))]),e("el-button",{staticClass:"btn-right",attrs:{icon:"el-icon-plus"}},[t._v("关注")])],1),e("p",{staticClass:"description"},[t._v(t._s(t.author.description))])],1),e("hr"),e("h3",{staticClass:"t"},[t._v("相关作品")]),t._l(t.x,function(a,i){return e("div",{key:i,staticClass:"list"},["textCard"!==a.type?e("li",[e("div",{staticClass:"intro"},[e("img",{staticClass:"author",attrs:{src:a.data.author.icon}}),e("p",[e("strong",{staticClass:"authorname"},[t._v(t._s(a.data.author.name))]),e("br"),e("span",{staticClass:"biaoti"},[t._v("标题:")]),e("strong",{staticClass:"videoname"},[t._v(t._s(a.data.title))])])]),e("p",{staticClass:"contentIntro"},[t._v(t._s(a.data.description))]),e("router-link",{attrs:{to:/video/+a.data.id}},[a.data.cover.feed?e("img",{attrs:{src:a.data.cover.feed}}):t._e(),e("span",[t._v(t._s(t.getTime(a.data.duration)))])]),e("el-row",[e("el-button",{staticClass:"btn-left",attrs:{icon:"el-icon-star-off"},on:{click:function(t){a.data.consumption.collectionCount++}}},[e("span",[t._v(t._s(a.data.consumption.collectionCount))])]),e("el-button",{staticClass:"btn-left",attrs:{icon:"el-icon-edit-outline"},on:{click:function(t){a.data.consumption.replyCount++}}},[e("span",[t._v(t._s(a.data.consumption.replyCount))])]),e("el-button",{staticClass:"btn-right",attrs:{icon:"el-icon-share"}})],1),e("hr")],1):t._e()])})],2)},K=[],N={data:function(){return{x:"",author:"",headerImage:""}},created:function(){var t=this;this.axios.get("https://api.apiopen.top/videoRecommend",{params:{id:this.$route.params.id}}).then(function(a){t.x=a.data.result,t.author=a.data.result[1].data.author,t.headerImage=a.data.result[1].data.tags[0].headerImage})},methods:{getTime:function(t){var a;return a=Math.floor(t/60),t%=60,a+="",t+="",a=1==a.length?"0"+a:a,t=1==t.length?"0"+t:t,a+":"+t}}},Q=N,W=(e("f7a7"),Object(v["a"])(Q,G,K,!1,null,"0460a73c",null));W.options.__file="Author.vue";var X=W.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",style:"backgroundImage:url("+t.lately1.coverBlurred+")"},[e("div",{staticClass:"container-head"},[e("div",{staticClass:"player"},[e("video",{attrs:{"webkit-playsinline":"",playsinline:"true",src:t.lately1.playUrl,controls:""}})])]),e("div",{staticClass:"video-info"},[e("div",{staticClass:"video-positioner"},[e("div",{staticClass:"video-meta"},[e("h2",[t._v(t._s(t.lately1.title))]),e("div",{staticClass:"divider-short"}),e("p",[t._v(t._s(t.lately1.category)+" / "+t._s(t.getTime(t.lately1.duration)))]),e("p",{staticClass:"description"},[t._v(t._s(t.lately1.description))])])]),e("div",{staticClass:"divider"})]),e("div",{staticClass:"divider"}),e("div",{staticClass:"list-positioner"},[e("div",{staticClass:"list"},t._l(t.lately,function(a,i){return e("div",{key:i,staticClass:"relata"},[e("router-link",{attrs:{to:/video/+a.id}},[e("div",{staticClass:"cove"},[e("img",{attrs:{src:a.coverForDetail}})]),e("div",{staticClass:"meta"},[e("div",{staticClass:"title"},[t._v(t._s(a.title))]),e("div",{staticClass:"tategory"},[t._v(" #"+t._s(a.category)+" / #"+t._s(a.author.name))])])])],1)}))])])},Z=[],tt={data:function(){return{lately:"",lately1:"",id:this.$route.params.id}},beforeRouteUpdate:function(t,a,e){this.id=t.params.id,this.setData(),e()},methods:{setData:function(){var t=this;this.axios.get("http://baobab.wandoujia.com/api/v1/video/related/"+this.id,{params:{num:5}}).then(function(a){t.lately=a.data.videoList}),this.axios.get("http://baobab.wandoujia.com/api/v1/video/"+this.id).then(function(a){t.lately1=a.data})},getTime:function(t){var a;return a=Math.floor(t/60),t%=60,a+="",t+="",a=1==a.length?"0"+a:a,t=1==t.length?"0"+t:t,a+":"+t}},created:function(){var t=this;this.axios.get("http://baobab.wandoujia.com/api/v1/video/related/"+this.id,{params:{num:5}}).then(function(a){t.lately=a.data.videoList}),this.axios.get("http://baobab.wandoujia.com/api/v1/video/"+this.id).then(function(a){t.lately1=a.data})}},at=tt,et=(e("80f0"),Object(v["a"])(at,Y,Z,!1,null,"65fab0d2",null));et.options.__file="Video.vue";var it=et.exports,nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},t._l(t.dailt,function(a,i){return e("div",{key:i,staticClass:"recently"},[0!=i?e("div",["textCard"===a.type?e("h2",[t._v(t._s(a.data.text))]):t._e(),"followCard"===a.type?e("div",[e("router-link",{attrs:{to:/video/+a.data.header.id}},[e("img",{attrs:{src:a.data.content.data.cover.detail}})]),e("router-link",{staticClass:"writer",attrs:{to:/author/+a.data.content.data.author.id}},[e("div",{staticClass:"authro"},[e("img",{attrs:{src:a.data.header.icon}}),e("div",{staticClass:"authro-name"},[e("h3",[t._v(t._s(a.data.header.title))]),e("span",[t._v(t._s(a.data.header.description))])])])])],1):t._e(),"followCard"===a.type?e("hr"):t._e()]):t._e()])}))},st=[],rt={data:function(){return{dailt:"",ande:"",type:"textCard"}},computed:{},created:function(){var t=this;this.axios.get("https://api.apiopen.top/todayVideo").then(function(a){t.dailt=a.data.result})}},ot=rt,lt=(e("4c75"),Object(v["a"])(ot,nt,st,!1,null,"1cd3a5a4",null));lt.options.__file="Daily.vue";var ct=lt.exports;i["default"].use(h["a"]);var ut=new h["a"]({routes:[{path:"/",component:$,redirect:"/Daily",children:[{path:"/index/:id",component:U},{path:"/daily",component:ct}]},{path:"/menu",component:M},{path:"/search",component:z},{path:"/author/:id",component:X},{path:"/video/:id",component:it}]}),dt=e("5c96"),vt=e.n(dt);e("0fae");i["default"].use(vt.a),i["default"].config.productionTip=!1,new i["default"]({router:ut,render:function(t){return t(f)}}).$mount("#app")},"5e5a":function(t,a,e){},"64a9":function(t,a,e){},"66fd":function(t,a,e){"use strict";var i=e("d67d"),n=e.n(i);n.a},"80f0":function(t,a,e){"use strict";var i=e("25c0"),n=e.n(i);n.a},9548:function(t,a,e){"use strict";var i=e("0290"),n=e.n(i);n.a},d67d:function(t,a,e){},e734:function(t,a,e){},e761:function(t,a,e){"use strict";var i=e("5150"),n=e.n(i);n.a},f7a7:function(t,a,e){"use strict";var i=e("fd99"),n=e.n(i);n.a},fd99:function(t,a,e){}});
//# sourceMappingURL=app.70778953.js.map