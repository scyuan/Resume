webpackJsonp([1],{"4gIL":function(t,s,i){t.exports=i.p+"static/img/04d878d02e20733674f477ae6e7d9c4d.c69ba99.jpg"},"9TPr":function(t,s){},IIvi:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("MVMM"),e={name:"PacmanLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"25px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerDelay2:{animationDelay:"0.25s"},spinnerDelay3:{animationDelay:"0.50s"},spinnerDelay4:{animationDelay:"0.75s"},spinnerDelay5:{animationDelay:"1s"}}},computed:{spinnerStyle:function(){return{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius}},border1:function(){return this.size+" solid transparent"},border2:function(){return this.size+" solid "+this.color},spinnerStyle1:function(){return{width:0,height:0,borderTop:this.border2,borderRight:this.border1,borderBottom:this.border2,borderLeft:this.border2,borderRadius:this.size}},animationStyle:function(){return{width:"10px",height:"10px",transform:"translate(0, "+-parseFloat(this.size)/4+"px)",position:"absolute",top:"25px",left:"100px",animationName:"v-pacmanStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationFillMode:"both"}}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner",style:{position:"relative",fontSize:0}},[i("div",{staticClass:"v-pacman v-pacman1",style:t.spinnerStyle1}),i("div",{staticClass:"v-pacman v-pacman2",style:[t.spinnerStyle,t.animationStyle,t.spinnerDelay2]}),i("div",{staticClass:"v-pacman v-pacman3",style:[t.spinnerStyle,t.animationStyle,t.spinnerDelay3]}),i("div",{staticClass:"v-pacman v-pacman4",style:[t.spinnerStyle,t.animationStyle,t.spinnerDelay4]}),i("div",{staticClass:"v-pacman v-pacman5",style:[t.spinnerStyle,t.animationStyle,t.spinnerDelay5]})])},staticRenderFns:[]};var c={name:"App",data:function(){return{color:"#fff",loading:!0,size:"26px"}},components:{PacmanLoader:i("vSla")(e,n,!1,function(t){i("9TPr")},null,null).exports},mounted:function(){var t=this;window.onload=function(){t.loading=!1}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"fade"}},[t.loading?i("div",{staticClass:"loading"},[i("pacman-loader",{attrs:{loading:t.loading,color:t.color,size:t.size}}),t._v(" "),i("p",{staticClass:"loading-text"},[t._v("加载中")])],1):t._e()]),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var v=i("vSla")(c,o,!1,function(t){i("y9SF")},null,null).exports,l=i("zO6J"),r=i("L7Pj"),_=i.n(r),p=i("eiRC"),h={name:"home",data:function(){return{home_height:0,home_width:0,part_width:0,canvas_width:0,canvas_heigth:0,time:null}},methods:{hover:function(){console.log("aaa")},back:function(t){this.initHome(),0==t&&this.time.stop()},bindClick:function(t){console.log("点击");_()(".part").off("click",this.bindHover);var s=_()(".part").index(t.currentTarget);0==s&&this.time.start(),console.log(s);for(var i=0;i<_()("#home").find(".part").length;i++)i==s&&_()("#home").find(".part").eq(i).css({left:"0px"}),i<s&&_()("#home").find(".part").eq(i).css({left:"-100%"}),i>s&&_()("#home").find(".part").eq(i).css({left:"100%"})},initHome:function(){for(var t=0;t<_()("#home").find(".part").length;t++)_()("#home").find(".part").eq(t).css({left:this.part_width*t+"px"});_()(".part").on("click",this,this.bindClick)},go:function(t){window.location.href=t}},created:function(){var t=document.body.clientWidth,s=document.body.clientHeight;this.home_height=s,this.canvas_width=t-t/5,this.home_width=t,this.part_width=t/5,this.canvas_heigth=s/3},mounted:function(){this.initHome(),this.time=new p.a({el:"#canvas",width:this.home_width,height:this.home_height})}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{style:{width:t.home_width+"px"},attrs:{id:"home"}},[a("div",{staticClass:"part part1",style:{left:"0px"},on:{hover:function(s){t.hover()}}},[a("div",{staticClass:"mengban"}),t._v(" "),a("div",{staticClass:"part-title",style:{width:t.part_width+"px"}},[t._m(0)]),t._v(" "),a("p",{staticClass:"moto"},[t._v("时光易逝")]),t._v(" "),a("canvas",{attrs:{id:"canvas",width:t.home_width,height:t.canvas_heigth}}),t._v(" "),t._m(1),t._v(" "),a("i",{staticClass:"icon icon-back",on:{click:function(s){s.stopPropagation(),t.back(0)}}},[t._v("")])]),t._v(" "),a("div",{staticClass:"part part2",style:{left:1*t.part_width+"px"}},[a("div",{staticClass:"mengban"}),t._v(" "),a("div",{staticClass:"part-title",style:{width:t.part_width+"px"}},[t._m(2)]),t._v(" "),t._m(3),t._v(" "),a("i",{staticClass:"icon icon-back",on:{click:function(s){s.stopPropagation(),t.back(1)}}},[t._v("")])]),t._v(" "),a("div",{staticClass:"part part3",style:{left:2*t.part_width+"px"}},[a("div",{staticClass:"mengban"}),t._v(" "),a("div",{staticClass:"part-title",style:{width:t.part_width+"px"}},[t._m(4)]),t._v(" "),t._m(5),t._v(" "),a("i",{staticClass:"icon icon-back",on:{click:function(s){s.stopPropagation(),t.back(2)}}},[t._v("")])]),t._v(" "),a("div",{staticClass:"part part4",style:{left:3*t.part_width+"px"}},[a("div",{staticClass:"mengban"}),t._v(" "),a("div",{staticClass:"part-title",style:{width:t.part_width+"px"}},[t._m(6)]),t._v(" "),a("div",{staticClass:"content1 content2"},[a("div",{staticClass:"project-box",on:{click:function(s){t.go("https://www.phimall.com/m/")}}},[a("img",{attrs:{src:i("4gIL"),alt:""}}),t._v(" "),a("div",{staticClass:"pro-mengban"}),t._v(" "),a("span",{staticClass:"border border-t"}),t._v(" "),a("span",{staticClass:"border border-r"}),t._v(" "),a("span",{staticClass:"border border-b"}),t._v(" "),a("span",{staticClass:"border border-l"}),t._v(" "),t._m(7)]),t._v(" "),a("div",{staticClass:"project-box",on:{click:function(s){t.go("https://www.phimall.com/m/integralstatic-integralHome.html")}}},[a("img",{attrs:{src:i("4gIL"),alt:""}}),t._v(" "),a("div",{staticClass:"pro-mengban"}),t._v(" "),a("span",{staticClass:"border border-t"}),t._v(" "),a("span",{staticClass:"border border-r"}),t._v(" "),a("span",{staticClass:"border border-b"}),t._v(" "),a("span",{staticClass:"border border-l"}),t._v(" "),t._m(8)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("div",{staticClass:"project-box",on:{click:function(s){t.go("http://www.yuansichao.xin/vue-music/dist/#/")}}},[a("img",{attrs:{src:i("4gIL"),alt:""}}),t._v(" "),a("div",{staticClass:"pro-mengban"}),t._v(" "),a("span",{staticClass:"border border-t"}),t._v(" "),a("span",{staticClass:"border border-r"}),t._v(" "),a("span",{staticClass:"border border-b"}),t._v(" "),a("span",{staticClass:"border border-l"}),t._v(" "),t._m(11)]),t._v(" "),a("div",{staticClass:"project-box",on:{click:function(s){t.go("http://www.yuansichao.xin/dist/#/")}}},[a("img",{attrs:{src:i("4gIL"),alt:""}}),t._v(" "),a("div",{staticClass:"pro-mengban"}),t._v(" "),a("span",{staticClass:"border border-t"}),t._v(" "),a("span",{staticClass:"border border-r"}),t._v(" "),a("span",{staticClass:"border border-b"}),t._v(" "),a("span",{staticClass:"border border-l"}),t._v(" "),t._m(12)])]),t._v(" "),a("i",{staticClass:"icon icon-back",on:{click:function(s){s.stopPropagation(),t.back(3)}}},[t._v("")])]),t._v(" "),a("div",{staticClass:"part part5",style:{left:4*t.part_width+"px"}},[a("div",{staticClass:"mengban"}),t._v(" "),a("div",{staticClass:"part-title",style:{width:t.part_width+"px"}},[t._m(13)]),t._v(" "),a("div",{staticClass:"content1"},[a("div",{staticClass:"o-item",on:{click:function(s){t.go("https://github.com/scyuan")}}},[a("i",{staticClass:"icon"},[t._v("")]),a("span",[t._v("github")])]),t._v(" "),a("div",{staticClass:"o-item",on:{click:function(s){t.go("http://www.yuansichao.com")}}},[a("i",{staticClass:"icon"},[t._v("")]),a("span",[t._v("一枚程序员")])]),t._v(" "),a("div",{staticClass:"o-item",on:{click:function(s){t.go("https://weibo.com/YscLidost/profile?rightmod=1&wvr=6&mod=personinfo")}}},[a("i",{staticClass:"icon"},[t._v("")]),a("span",[t._v("程序袁袁袁袁")])]),t._v(" "),a("div",{staticClass:"o-item",on:{click:function(s){t.go("mailto:644397334@qq.com")}}},[a("i",{staticClass:"icon"},[t._v("")]),a("span",[t._v("QQ邮箱")])]),t._v(" "),t._m(14),t._v(" "),t._m(15)]),t._v(" "),a("i",{staticClass:"icon icon-back",on:{click:function(s){s.stopPropagation(),t.back(4)}}},[t._v("")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"title-p"},[s("span",[this._v("首")]),this._v(" "),s("span",[this._v("页")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content1"},[i("div",{staticClass:"left"},[i("div",{staticClass:"avator"},[i("div",{staticClass:"avator_img"}),t._v(" "),i("p",[t._v("风的尽头是孤独")])])]),t._v(" "),i("div",{staticClass:"right"},[i("p",{staticClass:"center"},[t._v("首页没什么东西啦，不过你能来到这个地方，那就是缘分😍")]),t._v(" "),i("p",{staticClass:"center"},[t._v("目前是1.0版本，以后会慢慢改进")]),t._v(" "),i("p",{staticClass:"center"},[t._v("v1.0")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"title-p"},[s("span",[this._v("简")]),this._v(" "),s("span",[this._v("介")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content1"},[i("div",{staticClass:"base-info clearfix"},[i("p",[i("span",[t._v("袁斯超")]),i("span",[t._v("男")]),i("span",[t._v("95年老腊肉")]),i("span",[t._v("毕业于：重庆大学/全日制本科/计算机科学技术")])])]),t._v(" "),i("div",{staticClass:"card-box clearfix"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-info"},[i("h2",[t._v("基本情况")]),t._v(" "),i("p",[t._v("介绍一些个人基本情况")]),t._v(" "),i("div",{staticClass:"card-info-wenzi"},[i("h3",[t._v("基本情况")]),t._v(" "),i("p",[t._v("2017年7月毕业于重庆大学。来到上海从事前端的工作，目前工作一年。")]),t._v(" "),i("ul",{staticClass:"aboutme"},[i("li",[t._v("能够语义化的编写文档；")]),t._v(" "),i("li",[t._v("熟悉CSS，了解外边距折叠等特性；")]),t._v(" "),i("li",[t._v("了解ES5/ES6，对原型、闭包、继承等有自己的理解；")]),t._v(" "),i("li",[t._v("熟悉Vue，了解Vue组件的生命周期，有过基于Vue的产品开发经验；")]),t._v(" "),i("li",[i("b",[t._v("热爱前端")]),t._v("，喜欢去倒弄一些小东西，经常更新GitHub；")]),t._v(" "),i("li",[t._v("喜欢开源，自己也朝着这方向努力；")])]),t._v(" "),i("h3",[t._v("工作职责")]),t._v(" "),i("p",[t._v("参与项目用vue重构")]),t._v(" "),i("p",[t._v("商城开发和维护")]),t._v(" "),i("p",[t._v("内部系统（移动OA，JQuery+HTML）")]),t._v(" "),i("p",[t._v("微信小程序（斐讯销售管理系统）")]),t._v(" "),i("p",[t._v("其他一些项目的维护（优化和bug修复）和开发任务")])])])]),t._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-info"},[i("h2",[t._v("常逛")]),t._v(" "),i("p",[t._v("经常逛的一些网站")]),t._v(" "),i("div",{staticClass:"card-info-wenzi"},[i("h3",[t._v("GitHub")]),t._v(" "),i("p",[t._v("分享一些自己的小作品以及学习他人的优秀代码和开源项目")]),t._v(" "),i("h3",[t._v("Dash")]),t._v(" "),i("p",[t._v("一款MAC平台上的文档工具（文档官方、丰富）")]),t._v(" "),i("h3",[t._v("Segmentfault")]),t._v(" "),i("p",[t._v("搜索解决一些疑问 探索新奇")]),t._v(" "),i("h3",[t._v("掘金")]),t._v(" "),i("p",[t._v("搜索解决一些疑问 探索新奇")]),t._v(" "),i("h3",[t._v("等待我去探索更多...")])])])]),t._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-info"},[i("h2",[t._v("爱好")]),t._v(" "),i("p",[t._v("业余的一些爱好")]),t._v(" "),i("div",{staticClass:"card-info-wenzi"},[i("h3",[t._v("运动")]),t._v(" "),i("p",[t._v("5km跑、羽毛球...")]),t._v(" "),i("h3",[t._v("音乐电影")]),t._v(" "),i("p",[t._v("周杰伦、王力宏、各类喜剧电影")]),t._v(" "),i("h3",[t._v("游戏")]),t._v(" "),i("p",[t._v("英雄联盟、地下城与勇士、各类优质单机独立游戏、模拟类游戏")]),t._v(" "),i("h3",[t._v("烹饪")]),t._v(" "),i("p",[t._v("做菜算吗？😂，家常小菜还是hold住的")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"title-p"},[s("span",[this._v("技")]),this._v(" "),s("span",[this._v("能")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content1"},[i("div",{staticClass:"skill"},[i("i",{staticClass:"icon icon-skill"},[t._v("")]),t._v(" "),i("div",{staticClass:"line",staticStyle:{width:"70%"}},[i("span",[t._v("HTML 70%")]),i("div",{staticClass:"animate-line"})])]),t._v(" "),i("div",{staticClass:"skill"},[i("i",{staticClass:"icon icon-skill"},[t._v("")]),t._v(" "),i("div",{staticClass:"line",staticStyle:{width:"70%"}},[i("span",[t._v("CSS 70%")]),i("div",{staticClass:"animate-line"})])]),t._v(" "),i("div",{staticClass:"skill"},[i("i",{staticClass:"icon icon-skill"},[t._v("")]),t._v(" "),i("div",{staticClass:"line",staticStyle:{width:"65%"}},[i("span",[t._v("VueJS 65%")]),i("div",{staticClass:"animate-line"})])]),t._v(" "),i("div",{staticClass:"skill"},[i("i",{staticClass:"icon icon-skill"},[t._v("")]),t._v(" "),i("div",{staticClass:"line",staticStyle:{width:"50%"}},[i("span",[t._v("JavaScript 45%")]),i("div",{staticClass:"animate-line"})])]),t._v(" "),i("div",{staticClass:"skill"},[i("i",{staticClass:"icon icon-skill"},[t._v("")]),t._v(" "),i("div",{staticClass:"line",staticStyle:{width:"50%"}},[i("span",[t._v("JQuery 45%")]),i("div",{staticClass:"animate-line"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"title-p"},[s("span",[this._v("项")]),this._v(" "),s("span",[this._v("目")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pro-wenzi"},[s("h1",[this._v("斐讯商城(H5)")]),this._v(" "),s("p",[this._v("基于Vue开发。斐讯官方商城H5版适用于微信端、浏览器、APP端。主要满足用户对斐讯产品的购买。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pro-wenzi"},[s("h1",[this._v("积分商城(H5)")]),this._v(" "),s("p",[this._v("基于Vue开发。积分商城也是适用于微信端、浏览器、APP端。主要功能为首页活动、商品详情、购买（纯积分+积分加价购）、积分管理。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"project-box"},[a("img",{attrs:{src:i("4gIL"),alt:""}}),t._v(" "),a("div",{staticClass:"pro-mengban"}),t._v(" "),a("span",{staticClass:"border border-t"}),t._v(" "),a("span",{staticClass:"border border-r"}),t._v(" "),a("span",{staticClass:"border border-b"}),t._v(" "),a("span",{staticClass:"border border-l"}),t._v(" "),a("div",{staticClass:"pro-wenzi"},[a("h1",[t._v("微信办公-移动OA(H5)")]),t._v(" "),a("p",[t._v("为方便经常在外办公员工，将PC端常用功能移植到微信web端，基于JQuery开发。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"project-box"},[a("img",{attrs:{src:i("4gIL"),alt:""}}),t._v(" "),a("div",{staticClass:"pro-mengban"}),t._v(" "),a("span",{staticClass:"border border-t"}),t._v(" "),a("span",{staticClass:"border border-r"}),t._v(" "),a("span",{staticClass:"border border-b"}),t._v(" "),a("span",{staticClass:"border border-l"}),t._v(" "),a("div",{staticClass:"pro-wenzi"},[a("h1",[t._v("微信小程序(销售)")]),t._v(" "),a("p",[t._v("方便销售员销售公司产品，主要满足销售员扫码销售以及对产品销售的统计功能。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pro-wenzi"},[s("h1",[this._v("Vue仿网易云音乐")]),this._v(" "),s("p",[this._v("个人项目，热爱音乐，所以想用Vue写个WebApp，只适配移动端。实现首页功能包括歌单推荐和歌曲推荐、歌单详情、歌曲播放、歌曲歌词播放和进度条、MV等功能")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pro-wenzi"},[s("h1",[this._v("Vue仿小米商城")]),this._v(" "),s("p",[this._v("整体布局仿照小米移动商城，通过rem+px实现移动端的适配，基于vue全家桶（vue+vuex+vue-router）完成首页、购物车、分类、产品详情等功能。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"title-p"},[s("span",[this._v("其")]),this._v(" "),s("span",[this._v("他")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"o-item"},[s("i",{staticClass:"icon"},[this._v("")]),s("span",[this._v("644397334")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"o-item"},[s("i",{staticClass:"icon"},[this._v("")]),s("span",[this._v("18321845414")])])}]};var u=i("vSla")(h,d,!1,function(t){i("iaac")},"data-v-05db71e0",null).exports,m=i("uaG5"),f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mhome"},[a("div",{staticClass:"part part1",style:{bottom:"0px"}},[a("div",{staticClass:"part-title",style:{height:t.height/5+"px"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:0==t.currIndex,expression:"currIndex == 0"}],staticClass:"icon icon-go-top",on:{click:function(s){t.gotop(0)}}},[t._v("")]),t._v(" "),a("span",{on:{click:function(s){t.open(0)}}},[t._v("首页")])]),t._v(" "),a("div",{staticClass:"content",style:{bottom:t.height/5+"px"}},[a("p",{staticClass:"center"},[t._v("首页没什么东西啦，不过你能来到这个地方，那就是缘分😍")]),t._v(" "),a("p",{staticClass:"center"},[t._v("目前是1.0版本，以后会慢慢改进")]),t._v(" "),a("p",{staticClass:"center"},[t._v("v1.0")])])]),t._v(" "),a("div",{staticClass:"part part2",style:{bottom:t.height/5+"px"}},[a("div",{staticClass:"part-title",style:{height:t.height/5+"px"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:1==t.currIndex,expression:"currIndex == 1"}],staticClass:"icon icon-go-top",on:{click:function(s){t.gotop(1)}}},[t._v("")]),t._v(" "),a("span",{on:{click:function(s){t.open(1)}}},[t._v("简介")])]),t._v(" "),a("div",{staticClass:"content",style:{bottom:t.height/5+"px"}},[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[a("swiper-slide",[a("p",{staticClass:"center"},[a("span",{staticClass:"a-s"},[a("img",{staticClass:"avator",attrs:{src:i("OR3N"),alt:""}})])]),t._v(" "),a("p",{staticClass:"center name"},[t._v("sichao.yuan（袁斯超）")]),t._v(" "),a("p",{staticClass:"center"},[t._v("火锅、代码、游戏、旅游")]),t._v(" "),a("p",{staticClass:"center"},[t._v("18321845414/sichao.yuan@foxmail.com")]),t._v(" "),a("p",{staticClass:"center "},[t._v("重庆大学")]),t._v(" "),a("p",{staticClass:"center "},[t._v("计算机科学与技术/全日制本科")])]),t._v(" "),a("swiper-slide",[a("h3",[t._v("基本情况")]),t._v(" "),a("p",{staticClass:"center"},[t._v("2017年7月毕业于重庆大学。来到上海从事前端的工作，目前工作一年。")]),t._v(" "),a("ul",{staticClass:"aboutme"},[a("li",[t._v("能够语义化的编写文档；")]),t._v(" "),a("li",[t._v("熟悉CSS，了解外边距折叠等特性；")]),t._v(" "),a("li",[t._v("了解ES5/ES6，对原型、闭包、继承等有自己的理解；")]),t._v(" "),a("li",[t._v("熟悉Vue，了解Vue组件的生命周期，有过基于Vue的产品开发经验；")]),t._v(" "),a("li",[a("b",[t._v("热爱前端")]),t._v("，喜欢去倒弄一些小东西，经常更新GitHub；")]),t._v(" "),a("li",[t._v("喜欢开源，自己也朝着这方向努力；")])]),t._v(" "),a("h3",[t._v("工作职责")]),t._v(" "),a("p",{staticClass:"center"},[t._v("参与项目用Vue重构")]),t._v(" "),a("p",{staticClass:"center"},[t._v("商城移动端开发和维护（Vue）")]),t._v(" "),a("p",{staticClass:"center"},[t._v("内部系统（移动OA，JQuery+HTML）")]),t._v(" "),a("p",{staticClass:"center"},[t._v("微信小程序（斐讯销售管理系统）")]),t._v(" "),a("p",{staticClass:"center"},[t._v("其他一些项目的维护（优化和bug修复）和开发任务")])]),t._v(" "),a("swiper-slide",[a("h3",[t._v("GitHub")]),t._v(" "),a("p",{staticClass:"center"},[t._v("分享一些自己的小作品以及学习他人的优秀代码和开源项目")]),t._v(" "),a("h3",[t._v("Dash")]),t._v(" "),a("p",{staticClass:"center"},[t._v("一款MAC平台上的文档工具（文档官方、丰富）")]),t._v(" "),a("h3",[t._v("Segmentfault")]),t._v(" "),a("p",{staticClass:"center"},[t._v("搜索解决一些疑问 探索新奇")]),t._v(" "),a("h3",[t._v("掘金")]),t._v(" "),a("p",{staticClass:"center"},[t._v("搜索解决一些疑问 探索新奇")]),t._v(" "),a("h3",[t._v("等待我去探索更多...")])]),t._v(" "),a("swiper-slide",[a("h3",[t._v("运动")]),t._v(" "),a("p",{staticClass:"center"},[t._v("5km跑、羽毛球...")]),t._v(" "),a("h3",[t._v("音乐电影")]),t._v(" "),a("p",{staticClass:"center"},[t._v("周杰伦、王力宏、各类喜剧电影")]),t._v(" "),a("h3",[t._v("游戏")]),t._v(" "),a("p",{staticClass:"center"},[t._v("英雄联盟、地下城与勇士、各类优质单机独立游戏、模拟类游戏")]),t._v(" "),a("h3",[t._v("烹饪")]),t._v(" "),a("p",{staticClass:"center"},[t._v("做菜算吗？😂，家常小菜还是hold住的")])]),t._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)]),t._v(" "),a("div",{staticClass:"part part3",style:{bottom:2*t.height/5+"px"}},[a("div",{staticClass:"part-title",style:{height:t.height/5+"px"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:2==t.currIndex,expression:"currIndex == 2"}],staticClass:"icon icon-go-top",on:{click:function(s){t.gotop(2)}}},[t._v("")]),t._v(" "),a("span",{on:{click:function(s){t.open(2)}}},[t._v("技能")])]),t._v(" "),a("div",{staticClass:"content",style:{bottom:t.height/5+"px"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])]),t._v(" "),a("div",{staticClass:"part part4",style:{bottom:3*t.height/5+"px"}},[a("div",{staticClass:"part-title",style:{height:t.height/5+"px"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:3==t.currIndex,expression:"currIndex == 3"}],staticClass:"icon icon-go-top",on:{click:function(s){t.gotop(3)}}},[t._v("")]),t._v(" "),a("span",{on:{click:function(s){t.open(3)}}},[t._v("项目")])]),t._v(" "),a("div",{staticClass:"content nopadding scroll",style:{bottom:t.height/5+"px"}},[a("div",{staticClass:"project-card odd",on:{click:function(s){t.project(0)}}},[a("p",{staticClass:"project-name"},[t._v("斐讯商城(H5)")]),t._v(" "),a("div",{staticClass:"project-content"},[a("h3",[t._v("项目介绍")]),t._v(" "),a("p",[t._v("本项目是一个移动端项目，基于Vue框架开发。斐讯官方商城H5版适用于微信端、浏览器、APP端。")]),t._v(" "),a("h3",[t._v("岗位职责")]),t._v(" "),a("p",[t._v("主要负责详情、优购码、广告导流等页面的布局和数据渲染，完成与后端的接口对接，配合后端的对接联调，解决不同手机端页面布局错乱的问题。")]),t._v(" "),a("h3",[t._v("技术要求")]),t._v(" "),a("p",[t._v("前端通过Vue和php模版引擎(部分)构建页面；")]),t._v(" "),a("p",[t._v("通过flexible实现移动端适配；")]),t._v(" "),a("p",[t._v("通过axios实现http请求；")]),t._v(" "),a("h3",[t._v("遇到的一些问题")]),t._v(" "),a("p",[t._v("详情页加载缓慢：优化图片资源大小；较少http请求次数")]),t._v(" "),a("p",[t._v("客服接口无法唤起：由于网络问题，客服接口需要等待，导致客服窗口无法唤起。将客服窗口唤起动作移动到客服接口初始化的回调里面")]),t._v(" "),a("p",[t._v("Swiper轮播图无法轮播：由于使用了keep-alive导致swiper组件无法进行轮播动作。")]),t._v(" "),a("span",{on:{click:function(s){s.stopPropagation(),t.go("https://www.phimall.com/m/")}}},[t._v("demo")]),t._v(" "),a("span",{staticClass:"mb60",on:{click:function(s){s.stopPropagation(),t.closeProject(0)}}},[t._v("返回")])])]),t._v(" "),a("div",{staticClass:"project-card even",on:{click:function(s){t.project(1)}}},[a("p",{staticClass:"project-name"},[t._v("积分商城(H5)")]),t._v(" "),a("div",{staticClass:"project-content"},[a("h3",[t._v("项目介绍")]),t._v(" "),a("p",[t._v("本项目是一个移动端项目，基于Vue开发。积分商城也是适用于微信端、浏览器、APP端。主要功能为首页活动、商品详情、购买（纯积分+积分加价购）、积分管理。")]),t._v(" "),a("h3",[t._v("岗位职责")]),t._v(" "),a("p",[t._v("负责我的积分、兑换记录、下单管理等页面的布局和数据渲染，完成与后端的接口对接，配合后端的对接联调以及后期的UI调整，解决不同手机端页面布局错乱的问题。")]),t._v(" "),a("h3",[t._v("技术要求")]),t._v(" "),a("p",[t._v("前端通过Vue和php模版引擎(部分)构建页面；")]),t._v(" "),a("p",[t._v("通过flexible实现移动端适配；")]),t._v(" "),a("p",[t._v("通过axios实现http请求；")]),t._v(" "),a("p",[t._v("使用Swiper实现首页banner的轮播切换，better-scroll实现上拉加载，下拉刷新；")]),t._v(" "),a("p",[t._v("合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能；")]),t._v(" "),a("h3",[t._v("遇到的一些问题")]),t._v(" "),a("p",[t._v("new Date()兼容性问题")]),t._v(" "),a("p",[t._v("flex实现多行居中问题")]),t._v(" "),a("p",[t._v("position:fixed失效问题")]),t._v(" "),a("p",[t._v("结合better-scroll实现分页，上拉加载，下拉刷新的UI问题")]),t._v(" "),a("p",[t._v("页面{{}}符号闪屏")]),t._v(" "),a("span",{on:{click:function(s){s.stopPropagation(),t.go("https://www.phimall.com/m/integralstatic-integralHome.html")}}},[t._v("demo")]),t._v(" "),a("span",{staticClass:"mb60",on:{click:function(s){s.stopPropagation(),t.closeProject(1)}}},[t._v("返回")])])]),t._v(" "),a("div",{staticClass:"project-card odd",on:{click:function(s){t.project(2)}}},[a("p",{staticClass:"project-name"},[t._v("微信小程序(销售)")]),t._v(" "),a("div",{staticClass:"project-content"},[a("h3",[t._v("项目介绍")]),t._v(" "),a("p",[t._v("方便销售员销售公司产品，主要满足销售员扫码销售以及对产品销售的统计功能。")]),t._v(" "),a("h3",[t._v("岗位职责")]),t._v(" "),a("p",[t._v("负责所有页面的布局和数据渲染，完成与后端的接口对接")]),t._v(" "),a("span",{staticClass:"mb60",on:{click:function(s){s.stopPropagation(),t.closeProject(2)}}},[t._v("返回")])])]),t._v(" "),a("div",{staticClass:"project-card even",on:{click:function(s){t.project(3)}}},[a("p",{staticClass:"project-name"},[t._v("Vue仿网易云音乐")]),t._v(" "),a("div",{staticClass:"project-content"},[a("h3",[t._v("项目介绍")]),t._v(" "),a("p",[t._v("个人项目，热爱音乐，所以想用Vue写个WebApp，只适配移动端。音乐API为GitHub上开源项目。实现首页功能包括歌单推荐和歌曲推荐、歌单详情、歌曲播放、歌曲歌词播放和进度条、MV等功能")]),t._v(" "),a("h3",[t._v("技术要求")]),t._v(" "),a("p",[t._v("使用Vue框架，以及Vue全家桶构建单页面应用；")]),t._v(" "),a("p",[t._v("采用手机淘宝适配方案；")]),t._v(" "),a("p",[t._v("使用阿里icon-font矢量图标库；")]),t._v(" "),a("p",[t._v("使用Swiper实现首页banner的轮播切换，better-scroll是移动端滚动体验更好；")]),t._v(" "),a("p",[t._v("合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能；")]),t._v(" "),a("h3",[t._v("遇到的一些问题")]),t._v(" "),a("p",[t._v("打包后本地资源报404错误")]),t._v(" "),a("p",[t._v("beforeEach的无限循环问题")]),t._v(" "),a("p",[t._v("毛玻璃效果以及四周泛白")]),t._v(" "),a("p",[t._v("弹出层禁止底部滑动")]),t._v(" "),a("p",[t._v("首页图片加载过渡（优化体验）以及歌曲播放页的图片加载（加载图片缓慢）")]),t._v(" "),a("p",[t._v("实现同步歌词")]),t._v(" "),a("span",{on:{click:function(s){s.stopPropagation(),t.go("http://www.yuansichao.xin/vue-music/dist/#/")}}},[t._v("demo")]),t._v(" "),a("span",{staticClass:"mb60",on:{click:function(s){s.stopPropagation(),t.closeProject(3)}}},[t._v("返回")])])]),t._v(" "),a("div",{staticClass:"project-card odd",on:{click:function(s){t.project(4)}}},[a("p",{staticClass:"project-name"},[t._v("Vue仿小米商城")]),t._v(" "),a("div",{staticClass:"project-content"},[a("h3",[t._v("项目介绍")]),t._v(" "),a("p",[t._v("整体布局仿照小米移动商城，通过rem+px实现移动端的适配，基于vue全家桶（vue+vuex+vue-router）完成首页、购物车、分类、产品详情等功能。")]),t._v(" "),a("h3",[t._v("技术要求")]),t._v(" "),a("p",[t._v("使用Vue框架，以及Vue全家桶构建单页面应用；")]),t._v(" "),a("p",[t._v("采用手机淘宝适配方案；")]),t._v(" "),a("p",[t._v("使用阿里icon-font矢量图标库；")]),t._v(" "),a("p",[t._v("vue-lazy实现图片懒加载；")]),t._v(" "),a("p",[t._v("使用Swiper实现首页banner的轮播切换，better-scroll实现分类栏功能")]),t._v(" "),a("p",[t._v("合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能；")]),t._v(" "),a("h3",[t._v("遇到的一些问题")]),t._v(" "),a("p",[t._v("vue-router切换时两个页面位置错乱")]),t._v(" "),a("p",[t._v("实现购物车添加动画")]),t._v(" "),a("p",[t._v("组件设置了keep-alive之后，组件内的子组件如果有transition动画，在第二次切入时，没有过渡效果")]),t._v(" "),a("p",[t._v("Swiper组件内的图片使用vue-lazyload图片不显示")]),t._v(" "),a("p",[t._v("移动端点击闪屏：在html和body内添加-webkit-tap-highlight-color: rgba(0,0,0,0);")]),t._v(" "),a("p",[t._v("animation动画在打包后的正式环境中没有动画效果：将将keyframes写到最后，（css的顺序的不同可能会有意想不到的的结果）")]),t._v(" "),a("span",{on:{click:function(s){s.stopPropagation(),t.go("http://www.yuansichao.xin/dist/#/")}}},[t._v("demo")]),t._v(" "),a("span",{staticClass:"mb60",on:{click:function(s){s.stopPropagation(),t.closeProject(4)}}},[t._v("返回")])])]),t._v(" "),a("div",{staticClass:"project-card even",on:{click:function(s){t.project(5)}}},[a("p",{staticClass:"project-name"},[t._v("微信办公-移动OA(H5)")]),t._v(" "),a("div",{staticClass:"project-content"},[a("h3",[t._v("项目介绍")]),t._v(" "),a("p",[t._v("该项目是一个微信端的H5项目，将公司的OA办公系统移植到移动端、主要用于内部员工查看和管理自己的办公流程。主要通过rem+px实现移动端的适配。")]),t._v(" "),a("h3",[t._v("岗位职责")]),t._v(" "),a("p",[t._v("负责部分页面的布局（基本上都是表格）")]),t._v(" "),a("span",{staticClass:"mb60",on:{click:function(s){s.stopPropagation(),t.closeProject(5)}}},[t._v("返回")])])]),t._v(" "),a("div",{staticClass:"project-card odd",on:{click:function(s){t.project(6)}}},[a("p",{staticClass:"project-name"},[t._v("canvas时钟、象棋、象棋对战、贪吃蛇")]),t._v(" "),a("div",{staticClass:"project-content"},[a("span",{on:{click:function(s){s.stopPropagation(),t.go("https://github.com/scyuan/MyJavaScriptPractice")}}},[t._v("GitHub")]),t._v(" "),a("span",{on:{click:function(s){s.stopPropagation(),t.closeProject(6)}}},[t._v("返回")])])]),t._v(" "),a("div",{staticClass:"project-box",on:{touchmove:function(t){t.preventDefault()},scroll:function(t){t.preventDefault()}}},[a("i",{staticClass:"icon icon-quit-project",on:{click:function(s){t.closeProject()}}},[t._v("")])])])]),t._v(" "),a("div",{staticClass:"part part5",style:{bottom:4*t.height/5+"px"}},[a("div",{staticClass:"part-title",style:{height:t.height/5+"px"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:4==t.currIndex,expression:"currIndex == 4"}],staticClass:"icon icon-go-top",on:{click:function(s){t.gotop(4)}}},[t._v("")]),t._v(" "),a("span",{on:{click:function(s){t.open(4)}}},[t._v("其他")])]),t._v(" "),a("div",{staticClass:"content center",style:{bottom:t.height/5+"px"}},[a("div",{staticClass:"o-item",on:{click:function(s){t.go("https://github.com/scyuan")}}},[a("i",{staticClass:"icon"},[t._v("")]),a("span",[t._v("GitHub")])]),t._v(" "),a("div",{staticClass:"o-item",on:{click:function(s){t.go("http://www.yuansichao.com")}}},[a("i",{staticClass:"icon"},[t._v("")]),a("span",[t._v("一枚程序员")])]),t._v(" "),a("div",{staticClass:"o-item",on:{click:function(s){t.go("https://m.weibo.cn/u/5094904210")}}},[a("i",{staticClass:"icon"},[t._v("")]),a("span",[t._v("程序袁袁袁袁")])]),t._v(" "),a("div",{staticClass:"o-item",on:{click:function(s){t.go("mailto:644397334@qq.com")}}},[a("i",{staticClass:"icon"},[t._v("")]),a("span",[t._v("QQ邮箱")])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),a("div",{staticClass:"quare"})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"skill"},[s("i",{staticClass:"icon icon-skill"},[this._v("")]),this._v(" "),s("div",{staticClass:"line",staticStyle:{width:"70%"}},[s("span",[this._v("HTML")]),s("div",{staticClass:"animate-line"}),s("p",[this._v("70%")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"skill"},[s("i",{staticClass:"icon icon-skill"},[this._v("")]),this._v(" "),s("div",{staticClass:"line",staticStyle:{width:"70%"}},[s("span",[this._v("CSS")]),s("div",{staticClass:"animate-line"}),s("p",[this._v("70%")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"skill"},[s("i",{staticClass:"icon icon-skill"},[this._v("")]),this._v(" "),s("div",{staticClass:"line",staticStyle:{width:"65%"}},[s("span",[this._v("VueJS")]),s("div",{staticClass:"animate-line"}),s("p",[this._v("65%")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"skill"},[s("i",{staticClass:"icon icon-skill"},[this._v("")]),this._v(" "),s("div",{staticClass:"line",staticStyle:{width:"50%"}},[s("span",[this._v("JavaScript")]),s("div",{staticClass:"animate-line"}),s("p",[this._v("50%")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"skill"},[s("i",{staticClass:"icon icon-skill"},[this._v("")]),this._v(" "),s("div",{staticClass:"line",staticStyle:{width:"50%"}},[s("span",[this._v("JQuery")]),s("div",{staticClass:"animate-line"}),s("p",[this._v("50%")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"o-item"},[s("i",{staticClass:"icon"},[this._v("")]),s("span",[this._v("644397334")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"o-item"},[s("i",{staticClass:"icon"},[this._v("")]),s("span",[this._v("18321845414")])])}]};var C=function(t){i("dqYR")},b=i("vSla")(m.a,f,!1,C,"data-v-5bcec6f8",null).exports;a.a.use(l.a);var g=new l.a({routes:[{path:"/",name:"home",component:u},{path:"/m/",name:"mhome",component:b}]});g.afterEach(function(t,s){!!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?g.push("/m/"):g.push("/")});var w=g;a.a.config.productionTip=!1,new a.a({el:"#app",router:w,components:{App:v},template:"<App/>",created:function(){!!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.$router.push("/m/"):this.$router.push("/")}})},OR3N:function(t,s,i){t.exports=i.p+"static/img/IMG_0606.ce9a590.jpg"},QNhy:function(t,s,i){"use strict";var a=i("AA3o"),e=i.n(a),n=i("xSur"),c=i.n(n),o=function(){function t(){e()(this,t),this.render()}return c()(t,[{key:"render",value:function(){var t="orientationchange"in window?"orientationchange":"resize",s=10;window.addEventListener(t,function t(){var i=document.documentElement,a=i.clientWidth;return i.clientWidth>720?a=720:i.clientWidth<320&&(a=320),i.style.fontSize=a/s+"px",t}()),document.addEventListener("touchstart",function(t){t.touches.length>1&&t.preventDefault()});var i=0;document.addEventListener("touchend",function(t){var s=(new Date).getTime();s-i<=300&&t.preventDefault(),i=s},!1)}}]),t}();s.a=o},dqYR:function(t,s){},eiRC:function(t,s,i){"use strict";(function(t){function i(t){this._init(t)}t.extend(i.prototype,{balls:[],timer:null,canvas:null,ctx:null,u:.9,last:[],width:null,height:null,zero:[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,1,1],[1,0,1,0,1],[1,1,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],one:[[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0]],two:[[0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1]],three:[[0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],[0,0,1,1,0],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],four:[[0,0,0,1,0],[0,0,1,1,0],[0,1,0,1,0],[1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0],[0,0,0,1,0]],five:[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],six:[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],seven:[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]],eight:[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],nine:[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],dott:[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],_init:function(s){return this.options={el:s.el,width:s.width,height:s.height},t.extend(!0,this.options,s||{}),this.canvas=document.querySelector(this.options.el),this.ctx=this.canvas.getContext("2d"),this.width=s.width,this.height=s.height,this},start:function(){var t=this;this.timer=setInterval(function(){t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height);for(var s=new Date,i=t._formatter(s.getHours()),a=t._formatter(s.getMinutes()),e=t._formatter(s.getSeconds()+1),n=t._create(i,a,e),c=0;c<n.length;c++)t._draw_number(n[c],c);t._addBall(n),t.last=n},10)},stop:function(){clearInterval(this.timer)},_formatter:function(t){return t>9?""+t:"0"+t},_create:function(){for(var t=[],s=0;s<arguments.length;s++){var i=arguments[s].split("");0!=s&&t.push(this.dott);for(var a=0;a<i.length;a++)switch(i[a]){case"0":t.push(this.zero);break;case"1":t.push(this.one);break;case"2":t.push(this.two);break;case"3":t.push(this.three);break;case"4":t.push(this.four);break;case"5":t.push(this.five);break;case"6":t.push(this.six);break;case"7":t.push(this.seven);break;case"8":t.push(this.eight);break;case"9":t.push(this.nine)}}return t},_draw_number:function(t,s){for(var i=0;i<t.length;i++)for(var a=0;a<t[i].length;a++)1===t[i][a]&&(this.ctx.beginPath(),this.ctx.fillStyle="#fff",this.ctx.arc(11*(a+1+3*s)+25*s+this.width/2-233,10*(i+1),5,0,360,!1),this.ctx.fill())},_addBall:function(t){if(0!=this.last.length){for(var s=0;s<t.length;s++)if(this.last[s].toString()!=t[s].toString())for(var i=t[s],a=0;a<i.length;a++)for(var e=0;e<i[a].length;e++)if(1==i[a][e]){var n={offsetX:11*(e+1+3*s)+25*s+this.width/2-233,offsetY:10*(a+1),r:5,g:.06+.06*Math.random(),fillStyle:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")",vx:Math.pow(-1,Math.ceil(10*Math.random()))*Math.random(),vy:-1,vyy:-5};this.balls.push(n)}this._renderBall(),this._updateBall()}},_renderBall:function(){for(var t=0;t<this.balls.length;t++)this.ctx.beginPath(),this.ctx.fillStyle=this.balls[t].fillStyle,this.ctx.arc(this.balls[t].offsetX,this.balls[t].offsetY,this.balls[t].r,0,360,!1),this.ctx.fill()},_updateBall:function(){for(var t=[],s=(this.balls.length,0);s<this.balls.length;s++)this.balls[s].offsetX=this.balls[s].offsetX+this.balls[s].vx,this.balls[s].offsetY=this.balls[s].offsetY+this.balls[s].vy,this.balls[s].vy=this.balls[s].vy+this.balls[s].g,(this.balls[s].offsetX<-this.balls[s].r||this.balls[s].offsetX>this.canvas.width+this.balls[s].r)&&(t.includes(s)||t.push(s)),this.balls[s].offsetY+this.balls[s].r>=this.canvas.height&&(this.balls[s].vx<0?this.balls[s].vx=this.balls[s].vx-.1:this.balls[s].vx=this.balls[s].vx+.1,this.balls[s].offsetY=this.canvas.height-this.balls[s].r,this.balls[s].vyy=this.balls[s].vyy*this.u,this.balls[s].vy=this.balls[s].vyy);var i=t.map(function(t,s){return t-s});if(0!=i.length)for(var a=0;a<i.length;a++)this.balls.splice(i[a]-a,1)}}),s.a=i}).call(s,i("L7Pj"))},iaac:function(t,s){},uaG5:function(t,s,i){"use strict";(function(t){var a=i("QNhy"),e=i("DMPO"),n=(i.n(e),i("IIvi"));i.n(n);new a.a,s.a={data:function(){return{height:document.body.clientHeight,currIndex:9999,index:-1,swiperOption:{pagination:{el:".swiper-pagination",clickable:!0,bulletActiveClass:"white-bullet-active"}}}},components:{swiper:e.swiper,swiperSlide:e.swiperSlide},methods:{closeProject:function(s){t(".project-card").eq(s).animate({scrollTop:"-1000px"},1,function(){t(".project-card").eq(s).css({height:"100px","overflow-x":"","overflow-y":""})})},project:function(s){t(".project-card").eq(s).css({height:"100%","overflow-x":"hidden","overflow-y":"scroll"}),t(".scroll").animate({scrollTop:document.getElementsByClassName("project-card")[s].offsetTop})},reBack:function(){for(var s=0;s<t(".mhome").find(".part").length;s++)t(".mhome").find(".part").eq(s).css({bottom:s*this.height/5+"px"})},open:function(s){console.log(s),this.currIndex=s,t(".part-title").eq(s).addClass("part-title-1");for(var i=0;i<t(".mhome").find(".part").length;i++)i==s&&t(".mhome").find(".part").eq(i).css({bottom:"0px"}),i<s&&t(".mhome").find(".part").eq(i).css({bottom:"-100%"}),i>s&&t(".mhome").find(".part").eq(i).css({bottom:"100%"});t(".icon-go-top").hide().eq(s).show()},gotop:function(s){this.currIndex=9999,t(".part-title").removeClass("part-title-1"),this.reBack()},go:function(t){window.location.href=t}},created:function(){}}}).call(s,i("L7Pj"))},y9SF:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.2a383f81eb2d5d8f9f6b.js.map