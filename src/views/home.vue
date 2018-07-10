<template>
  <div id="home" :style='{width:home_width+"px"}'>

    <div @hover='hover()' class="part part1" :style='{left:0+"px"}'>
      <div class="mengban"></div>
      <!-- 预览部分 标题-->
      <div class="part-title" :style='{width:part_width+"px"}'>
        <p class="title-p">
          <span>首</span>
          <span>页</span>
        </p>
      </div>
      <p class="moto">时光易逝</p>
      <canvas id="canvas" :width="home_width" :height="canvas_heigth"></canvas>
      <div class="content1">
        <div class="left">
          <div class="avator">
            <div class="avator_img"></div>
            <p>风的尽头是孤独</p>
          </div>
        </div>
        <div class="right">
          <p class="center">首页没什么东西啦，不过你能来到这个地方，那就是缘分😍</p>
          <p class="center">目前是1.0版本，以后会慢慢改进</p>
          <p class="center">v1.0</p>
        </div>
      </div>

      <i class="icon icon-back" @click.stop='back(0)'>&#xe62c;</i>
    </div>
    <div class="part part2" :style='{left:part_width*1+"px"}'>
      <div class="mengban"></div>
      <!-- 预览部分 标题-->
      <div class="part-title" :style='{width:part_width+"px"}'>
        <p class="title-p">
          <span>简</span>
          <span>介</span>
        </p>

      </div>

      <div class="content1">
        <div class="base-info clearfix">

          <p><span>袁斯超</span><span>男</span><span>95年老腊肉</span><span>毕业于：重庆大学/全日制本科/计算机科学技术</span></p>
        </div>
        <div class="card-box clearfix">
          <div class="card">
            <div class="card-info">

              <h2>基本情况</h2>
              <p>介绍一些个人基本情况</p>
              <div class="card-info-wenzi">
                <h3>基本情况</h3>
                <p>2017年7月毕业于重庆大学。来到上海从事前端的工作，目前工作一年。熟悉页面开发html、css、JavaScript等前端基础。喜欢开源，自己也朝着这方向努力，熟悉vue，有过基于vue的产品开发经验。<b>热爱前端</b>，喜欢去倒弄一些小东西，经常更新github。</p>
                <h3>工作职责</h3>
                <p>参与项目用vue重构</p>
                <p>商城开发和维护</p>
                <p>内部系统（移动OA，JQuery+HTML）</p>
                <p>微信小程序（斐讯销售管理系统）</p>
                <p>其他一些项目的维护（优化和bug修复）和开发任务</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-info">
              <h2>常逛</h2>
              <p>经常逛的一些网站</p>
              <div class="card-info-wenzi">
                <h3>GitHub</h3>
                <p>分享一些自己的小作品以及学习他人的优秀代码和开源项目</p>
                <h3>Dash</h3>
                <p>一款MAC平台上的文档工具（文档官方、丰富）</p>
                <h3>Segmentfault</h3>
                <p>搜索解决一些疑问 探索新奇</p>
                <h3>掘金</h3>
                <p>搜索解决一些疑问 探索新奇</p>
                <h3>等待我去探索更多...</h3>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-info">
              <h2>爱好</h2>
              <p>业余的一些爱好</p>
              <div class="card-info-wenzi">
                <h3>运动</h3>
                <p>5km跑、羽毛球...</p>
                <h3>音乐电影</h3>
                <p>周杰伦、王力宏、各类喜剧电影</p>
                <h3>游戏</h3>
                <p>英雄联盟、地下城与勇士、各类优质单机独立游戏、模拟类游戏</p>
                <h3>烹饪</h3>
                <p>做菜算吗？😂，家常小菜还是hold住的</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <i class="icon icon-back" @click.stop='back(1)'>&#xe62c;</i>
    </div>
    <div class="part part3" :style='{left:part_width*2+"px"}'>
      <div class="mengban"></div>
      <!-- 预览部分 标题-->
      <div class="part-title" :style='{width:part_width+"px"}'>
        <p class="title-p">
          <span>技</span>
          <span>能</span>
        </p>

      </div>
      <div class="content1">
        <div class="skill">
          <i class="icon icon-skill">&#xe622;</i>
          <div class="line" style="width: 75%"><span>HTML 75%</span><div class="animate-line"></div></div>
        </div>
        <div class="skill">
          <i class="icon icon-skill">&#xe6b7;</i>
          <div class="line" style="width: 75%"><span>CSS 75%</span><div class="animate-line"></div></div>

        </div>
        <div class="skill">
          <i class="icon icon-skill">&#xe640;</i>
          <div class="line" style="width: 65%"><span>VueJS 65%</span><div class="animate-line"></div></div>
        </div>
        <div class="skill">
          <i class="icon icon-skill">&#xe639;</i>
          <div class="line" style="width: 45%"><span>JavaScript 45%</span><div class="animate-line"></div></div>
        </div>
        <div class="skill">
          <i class="icon icon-skill">&#xe655;</i>
          <div class="line" style="width: 45%"><span>JQuery 45%</span><div class="animate-line"></div></div>
        </div>
      </div>
      <i class="icon icon-back" @click.stop='back(2)'>&#xe62c;</i>
    </div>
    <div class="part part4" :style='{left:part_width*3+"px"}'>
      <div class="mengban"></div>
      <!-- 预览部分 标题-->
      <div class="part-title" :style='{width:part_width+"px"}'>
        <p class="title-p">
          <span>项</span>
          <span>目</span>
        </p>

      </div>
      <div class="content1 content2">
        <div class="project-box" @click="go('https://www.phimall.com/m/')"><img src="../assets/04d878d02e20733674f477ae6e7d9c4d.jpg" alt="">
          <div class="pro-mengban"></div>
          <span class="border border-t"></span>
          <span class="border border-r"></span>
          <span class="border border-b"></span>
          <span class="border border-l"></span>
          <div class="pro-wenzi">
            <h1>斐讯商城(H5)</h1>
            <p>基于Vue开发。斐讯官方商城H5版适用于微信端、浏览器、APP端。主要满足用户对斐讯产品的购买。</p>
          </div>
        </div>
        <div class="project-box" @click="go('https://www.phimall.com/m/integralstatic-integralHome.html')"><img src="../assets/04d878d02e20733674f477ae6e7d9c4d.jpg" alt="">
          <div class="pro-mengban"></div>
          <span class="border border-t"></span>
          <span class="border border-r"></span>
          <span class="border border-b"></span>
          <span class="border border-l"></span>
          <div class="pro-wenzi">
            <h1>积分商城(H5)</h1>
            <p>基于Vue开发。积分商城也是适用于微信端、浏览器、APP端。主要功能为首页活动、商品详情、购买（纯积分+积分加价购）、积分管理。</p>
          </div>
        </div>
        <div class="project-box"><img src="../assets/04d878d02e20733674f477ae6e7d9c4d.jpg" alt="">
          <div class="pro-mengban"></div>
          <span class="border border-t"></span>
          <span class="border border-r"></span>
          <span class="border border-b"></span>
          <span class="border border-l"></span>
          <div class="pro-wenzi">
            <h1>微信办公-移动OA(H5)</h1>
            <p>为方便经常在外办公员工，将PC端常用功能移植到微信web端，基于JQuery开发。</p>
          </div>
        </div>
        <div class="project-box"><img src="../assets/04d878d02e20733674f477ae6e7d9c4d.jpg" alt="">
          <div class="pro-mengban"></div>
          <span class="border border-t"></span>
          <span class="border border-r"></span>
          <span class="border border-b"></span>
          <span class="border border-l"></span>
          <div class="pro-wenzi">
            <h1>微信小程序(销售)</h1>
            <p>方便销售员销售公司产品，主要满足销售员扫码销售以及对产品销售的统计功能。</p>
          </div>
        </div>
        <div class="project-box" @click="go('http://www.yuansichao.xin/vue-music/dist/#/')"><img src="../assets/04d878d02e20733674f477ae6e7d9c4d.jpg" alt="">
          <div class="pro-mengban"></div>
          <span class="border border-t"></span>
          <span class="border border-r"></span>
          <span class="border border-b"></span>
          <span class="border border-l"></span>
          <div class="pro-wenzi">
            <h1>Vue仿网易云音乐</h1>
            <p>个人项目，热爱音乐，所以想用Vue写个WebApp，只适配移动端。实现首页功能包括歌单推荐和歌曲推荐、歌单详情、歌曲播放、歌曲歌词播放和进度条、MV等功能</p>
          </div>
        </div>
        <div class="project-box" @click="go('http://www.yuansichao.xin/dist/#/')"><img src="../assets/04d878d02e20733674f477ae6e7d9c4d.jpg" alt="">
          <div class="pro-mengban"></div>
          <span class="border border-t"></span>
          <span class="border border-r"></span>
          <span class="border border-b"></span>
          <span class="border border-l"></span>
          <div class="pro-wenzi">
            <h1>Vue仿小米商城</h1>
            <p>整体布局仿照小米移动商城，通过rem+px实现移动端的适配，基于vue全家桶（vue+vuex+vue-router）完成首页、购物车、分类、产品详情等功能。</p>
          </div>
        </div>
      </div>
      <i class="icon icon-back" @click.stop='back(3)'>&#xe62c;</i>
    </div>
    <div class="part part5" :style='{left:part_width*4+"px"}'>
      <div class="mengban"></div>
      <!-- 预览部分 标题-->
      <div class="part-title" :style='{width:part_width+"px"}'>
        <p class="title-p">
          <span>其</span>
          <span>他</span>
        </p>

      </div>
      <div class="content1">
        <!-- github  email  blog  weibo-->
        <div class="o-item" @click="go('https://github.com/scyuan')">
          <i class="icon">&#xeaf6;</i><span>github</span>
        </div>
        <div class="o-item" @click="go('http://www.yuansichao.com')">
          <i class="icon">&#xe604;</i><span>一枚程序员</span>
        </div>
        <div class="o-item" @click="go('https://weibo.com/YscLidost/profile?rightmod=1&wvr=6&mod=personinfo')">
          <i class="icon">&#xe65a;</i><span>程序袁袁袁袁</span>
        </div>
        <div class="o-item" @click="go('mailto:644397334@qq.com')">
          <i class="icon">&#xe605;</i><span>QQ邮箱</span>
        </div>

      </div>
      <i class="icon icon-back" @click.stop='back(4)'>&#xe62c;</i>
    </div>
  </div>
</template>
<script>

import $ from 'jquery';
import CanvasTime from '@/util/CanvasTime';
  export default{
    name:'home',
    data:function(){
      return{
        home_height:0,
        home_width:0,
        part_width:0,
        canvas_width:0,
        canvas_heigth:0,
        time:null
      }
    },
    methods:{
      hover(){
        console.log('aaa');
      },
      back:function(index){
        this.initHome();
        if(index == 0){
          this.time.stop();
        }
      },
      bindClick:function(e){
        console.log('点击');
        var _this = this;
        $('.part').off('click',_this.bindHover);
        // console.log($(e.target).index());
        var index = $('.part').index(e.currentTarget);
        if(index == 0){
          this.time.start();
        }
        console.log(index);
        for(let i =0;i<$('#home').find('.part').length;i++){
          if(i == index){
            $('#home').find('.part').eq(i).css({
              "left":"0px"
            })
          }
          if(i < index){
            $('#home').find('.part').eq(i).css({
              "left":"-100%"
            })
          }
          if(i > index){
            $('#home').find('.part').eq(i).css({
              "left":"100%"
            })
          }
        }
      },
      initHome:function(){
        var _this = this;
        for(let i =0;i<$('#home').find('.part').length;i++){

          $('#home').find('.part').eq(i).css({
            "left":_this.part_width * i + 'px'
          })
        }
        $('.part').on('click',this,_this.bindClick);
      },
      go:function (path) {
        window.location.href = path;
      }
    },
    created:function(){
      var width = document.body.clientWidth;
      var height = document.body.clientHeight;
      this.home_height = height;
      this.canvas_width = width - width/5;
      this.home_width = width;
      this.part_width = width/5;
      this.canvas_heigth = height/3;
    },

    mounted:function(){
      // 绑定事件
      var _this = this;
      this.initHome();

      this.time = new CanvasTime({
        el:'#canvas',
        width:_this.home_width,
        height:_this.home_height
      });

    }
  }
</script>
<style scoped>
#home{
  background: #ccc;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.part{
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;

}
.mengban{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
}
.part1{
  background: #111;
  z-index: 1;
  transition: all 0.5s;
  background: url("../assets/IMG_0007.jpg") no-repeat;
  background-size: 100% auto;
}
.part2{
  background: #333;
  z-index: 2;
  transition: all 0.45s;
  background: url("../assets/IMG_0006.jpg") no-repeat;
  background-size: 100% auto;
}
.part3{
  background: #555;
  z-index: 3;
  transition: all 0.4s;
  background: url("../assets/IMG_0008.jpg") no-repeat;
  background-size: 100% auto;
}
.part4{
  background: #777;
  z-index: 4;
  transition: all 0.35s;
  background: url("../assets/9ac3e08c2ee27ad2db304cb979b83724.jpg") no-repeat;
  background-size: 100% auto;
}
.part5{
  background: #999;
  z-index: 5;
  transition: all 0.3s;
  background: url("../assets/04d878d02e20733674f477ae6e7d9c4d.jpg") no-repeat;
  background-size: 100% auto;
}
.part-title{
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 100px;
  color: #fff;
  text-align: center;
}
.title-p{
  position: absolute;
  left: 0;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.title-p:hover{
  background: linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0.3));
  -webkit-background-clip: text;
  color: transparent;
}
.title-p:hover:after{
  background: linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0.3));
}
.title-p:after{
  content: '';
  display: block;
  position: absolute;
  width: 5px;
  height: 100%;
  top: 0;
  right: 30%;
  background: #fff;
}
.title-p span{
  display: block;
}
.icon-back{
  font-size: 100px;
  position: absolute;
  right: 80px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  z-index: 101;
}
#canvas{
  position: fixed;
  z-index: 100;
  width: 100%;
  left: 0;
  bottom: 0;
}
.content{
  height: 100%;
  color: #fff;
  position: relative;
  z-index: 10;
  padding-top: 10%;
  box-sizing: border-box;
}
.infobox{
  width: 500px;
  height: 300px;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid #fff;
  color: #fff;
}
.left,.right{
  float: left;
  height: 100%;
  padding-top: 5%;
}
.left{
  width: 30%;
  position: relative;
}
.left::after{
  content: '';
  display: block;
  width: 2px;
  height: 40%;
  background: #fff;
  top: 5%;
  position: absolute;
  right: 0;
}
.right{
  width: 70%;
}
.avator{
  width: 180px;
  height: 180px;
  display: inline-block;
  text-align: center;
}
.avator p{
  font-size: 18px;
  color: #fff;
}
.avator_img{
  width: 140px;
  height: 140px;
  display: inline-block;
  border-radius: 70px;
  background: url("../assets/IMG_0606.jpg") no-repeat;
  background-size: 100% auto;
}
.base-info{
  height: 20%;
}
.base-info p{
  display: inline-block;
  float: left;
  line-height: 84px;
  padding-left: 15px;
  font-size: 20px;
  color: #fff;
}
.base-info p>span{
  margin-right: 30px;
}
.card-box{
  height: 70%;
}
.card-box > div{
  width: 33.3333%;
  float: left;
  height: 100%;
  box-sizing: border-box;
  padding: 0 2px;
  transform: translateZ(0) !important;
}
.card-info{
  border: 1px solid #fff;
  height: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  padding-top: 45%;
  padding-left: 20%;
}
.card-info>h2{
  font-size: 28px;
  color: #fff;
  position: relative;
}
.card-info>h2:before{
  content: '';
  height: 50%;
  display: block;
  width: 3px;
  position: absolute;
  left: -10px;
  top: 7px;
  background: #fff;
}
.card-info>p{
  font-size: 16px;
  color: #f1f1f1;
}
.card-info-white-card{
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #fff;
  position: absolute;
  top: -60px;
  right: -60px;
  transition: all 0.3s;
}
.card-info:hover .card-info-white-card{
  transform: scale(20) translateZ(0);
}
.center{
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.card-info:hover .card-info-wenzi{
  top: 0;
}
.card-info-wenzi{
  position: absolute;
  overflow: auto;
  width: 100%;
  left: 0;
  padding: 10px;
  box-sizing: border-box;
  z-index: 10;
  height: 100%;
  background: #fff;
  top: 164%;
  transition: all 0.3s;
}
.card-info-wenzi::-webkit-scrollbar {display:none}

.card-info-wenzi>p{
  color: #333;

}
.card-info-wenzi>h3{
  font-size: 18px;
  margin-top: 10px;
}
.content1{
  width: 60%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.skill{
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
}
.icon-skill{
  color: #fff;
  font-size: 40px;
}
.line{
  height: 30px ;
  background: linear-gradient(to right,rgba(255,255,255,0.1),rgba(255,255,255,0.8));
  margin-left: 30px;
  position: relative;
}
.line>span{
  line-height: 30px;
  color: #fff;
  font-size: 32px;
  font-weight: bolder;
  display: inherit;
}
.animate-line{
  position: absolute;
  height: 100%;
  background: linear-gradient(to right,rgba(255,255,255,0.1),rgba(255,255,255,0.8));
  animation: grow 2s infinite;
  top: 0;
  left: 0;
}
@keyframes grow {
  from{
    width: 0;
  }
  to{
    width: 100%;
  }
}
.content2{
  overflow: hidden;
}
.content2 .project-box{
  width: 33.33%;
  height: 50%;
  position: relative;
  float: left;
  /*透明边框*/
  border: 5px solid hsla(0,0%,90%,0);
  background-clip: padding-box;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
}
.content2 .project-box:hover img{
  height: 140%;
}
.content2 .project-box img{
  position: absolute;
  width: auto;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  transition: all 0.3s;
}
.pro-mengban{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1;
}
.border{
  position: absolute;
  z-index: 2;
  background: #fff;
  transition-property: all;
  transition-duration:0.15s;
}
.border-t{
  height: 2px;
  width: 0%;
  top: 0;
  left: 0;
}
.border-r{
  height: 0%;
  width: 2px;
  top: 0;
  right: 0;
  transition-delay: 0.15s;
}
.border-b{
  height: 2px;
  width: 100%;
  bottom: 0;
  left: 100%;
  transition-delay: 0.3s;
}
.border-l{
  height: 100%;
  width: 2px;
  top: 100%;
  left: 0;
  transition-delay: 0.45s;
}
.content2 .project-box:hover .border{
  display: block;
}
.content2 .project-box:hover .border-t{
  width: 100%;
}
.content2 .project-box:hover .border-r{
  height: 100%;
}
.content2 .project-box:hover .border-b{
  left: 0;
}
.content2 .project-box:hover .border-l{
  top: 0;
}
.pro-wenzi{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
}
.pro-wenzi h1{
  font-size: 20px;
}
.pro-wenzi p{
  font-size: 16px;
}
.card-info-wenzi p{
  font-size: 16px;
}
.o-item{
  width: 25%;
  height: 60px;
  background: #fff;
  float: left;
  border: 5px solid hsla(0,0%,0%,0);
  box-sizing: border-box;
  margin-top: 30px;
  background-clip: padding-box;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
.o-item .icon{
  font-size: 30px;
  vertical-align: top;
}
.o-item span{
  vertical-align: top;
  margin-left: 10px;
  font-size: 16px;
}
.moto{
  width: 100%;
  position: fixed;
  z-index:2;
  color: #fff;
  font-size: 20px;
  left: 0;
  bottom: 33.33%;
  text-align: center;
}
</style>
