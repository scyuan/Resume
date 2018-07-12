<template>
	<div class="mhome">
		<div class="part part1" :style="{bottom:'0px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<i class="icon icon-go-top" v-show='currIndex == 0' @click='gotop(0)'>&#xe647;</i>
				<span @click='open(0)'>首页</span>
			</div>
			<div class="content" :style="{'bottom':height/5+'px'}">
				<p class="center">首页没什么东西啦，不过你能来到这个地方，那就是缘分😍</p>
       			<p class="center">目前是1.0版本，以后会慢慢改进</p>
        		<p class="center">v1.0</p>
			</div>
		</div>
		<div class="part part2" :style="{bottom:height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<i class="icon icon-go-top" v-show='currIndex == 1' @click='gotop(1)'>&#xe647;</i>
				<span @click='open(1)'>简介</span>
			</div>
			<div class="content" :style="{'bottom':height/5+'px'}">

        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <p class="center"><span class="a-s"><img class="avator" src="../../assets/IMG_0606.jpg" alt=""></span></p>
            <p class="center name">sichao.yuan（袁斯超）</p>
            <p class="center">火锅、代码、游戏、旅游</p>
            <p class="center">18321845414/sichao.yuan@foxmail.com</p>
            <p class="center ">重庆大学</p>
            <p class="center ">计算机科学与技术/全日制本科</p>
          </swiper-slide>
          <swiper-slide>
            <h3>基本情况</h3>
            <p class="center">2017年7月毕业于重庆大学。来到上海从事前端的工作，目前工作一年。</p>
            <ul class="aboutme">
              <li>能够语义化的编写文档；</li>
              <li>熟悉CSS，了解外边距折叠等特性；</li>
              <li>了解ES5/ES6，对原型、闭包、继承等有自己的理解；</li>
              <li>熟悉Vue，了解Vue组件的生命周期，有过基于Vue的产品开发经验；</li>
              <li><b>热爱前端</b>，喜欢去倒弄一些小东西，经常更新GitHub；</li>
              <li>喜欢开源，自己也朝着这方向努力；</li>
            </ul>
            <h3>工作职责</h3>
            <p class="center">参与项目用Vue重构</p>
            <p class="center">商城移动端开发和维护（Vue）</p>
            <p class="center">内部系统（移动OA，JQuery+HTML）</p>
            <p class="center">微信小程序（斐讯销售管理系统）</p>
            <p class="center">其他一些项目的维护（优化和bug修复）和开发任务</p>
          </swiper-slide>
          <swiper-slide>
            <h3>GitHub</h3>
            <p class="center">分享一些自己的小作品以及学习他人的优秀代码和开源项目</p>
            <h3>Dash</h3>
            <p class="center">一款MAC平台上的文档工具（文档官方、丰富）</p>
            <h3>Segmentfault</h3>
            <p class="center">搜索解决一些疑问 探索新奇</p>
            <h3>掘金</h3>
            <p class="center">搜索解决一些疑问 探索新奇</p>
            <h3>等待我去探索更多...</h3>
          </swiper-slide>
          <swiper-slide>
            <h3>运动</h3>
            <p class="center">5km跑、羽毛球...</p>
            <h3>音乐电影</h3>
            <p class="center">周杰伦、王力宏、各类喜剧电影</p>
            <h3>游戏</h3>
            <p class="center">英雄联盟、地下城与勇士、各类优质单机独立游戏、模拟类游戏</p>
            <h3>烹饪</h3>
            <p class="center">做菜算吗？😂，家常小菜还是hold住的</p>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>



			</div>
		</div>
		<div class="part part3" :style="{bottom:2*height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<i class="icon icon-go-top" v-show='currIndex == 2' @click='gotop(2)'>&#xe647;</i>
				<span @click='open(2)'>技能</span>
			</div>
			<div class="content" :style="{'bottom':height/5+'px'}">
				<div class="skill">
		          <i class="icon icon-skill">&#xe622;</i>
		          <div class="line" style="width: 70%"><span>HTML</span><div class="animate-line"></div><p>70%</p></div>
		        </div>
		        <div class="skill">
		          <i class="icon icon-skill">&#xe6b7;</i>
		          <div class="line" style="width: 70%"><span>CSS</span><div class="animate-line"></div><p>70%</p></div>
		        </div>
		        <div class="skill">
		          <i class="icon icon-skill">&#xe640;</i>
		          <div class="line" style="width: 65%"><span>VueJS</span><div class="animate-line"></div><p>65%</p></div>
		        </div>
		        <div class="skill">
		          <i class="icon icon-skill">&#xe639;</i>
		          <div class="line" style="width: 50%"><span>JavaScript</span><div class="animate-line"></div><p>50%</p></div>
		        </div>
		        <div class="skill">
		          <i class="icon icon-skill">&#xe655;</i>
		          <div class="line" style="width: 50%"><span>JQuery</span><div class="animate-line"></div><p>50%</p></div>
		        </div>
			</div>
		</div>
		<div class="part part4" :style="{bottom:3*height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<i class="icon icon-go-top" v-show='currIndex == 3' @click='gotop(3)'>&#xe647;</i>
				<span @click='open(3)'>项目</span>
			</div>
      <div class="content nopadding scroll" :style="{'bottom':height/5+'px'}">
        <div class="project-card odd" @click="project(0)">
          <p class="project-name" :style="">斐讯商城(H5)</p>
          <div class="project-content">
            <h3>项目介绍</h3>
            <p>本项目是一个移动端项目，基于Vue框架开发。斐讯官方商城H5版适用于微信端、浏览器、APP端。</p>
            <h3>岗位职责</h3>
            <p>主要负责详情、优购码、广告导流等页面的布局和数据渲染，完成与后端的接口对接，配合后端的对接联调，解决不同手机端页面布局错乱的问题。</p>
            <h3>技术要求</h3>
            <p>前端通过Vue和php模版引擎(部分)构建页面；</p>
            <p>通过flexible实现移动端适配；</p>
            <p>通过axios实现http请求；</p>
            <h3>遇到的一些问题</h3>
            <p>详情页加载缓慢：优化图片资源大小；较少http请求次数</p>
            <p>客服接口无法唤起：由于网络问题，客服接口需要等待，导致客服窗口无法唤起。将客服窗口唤起动作移动到客服接口初始化的回调里面</p>
            <p>Swiper轮播图无法轮播：由于使用了keep-alive导致swiper组件无法进行轮播动作。</p>
            <span @click.stop="go('https://www.phimall.com/m/')">demo</span>
            <span class="mb60" @click.stop="closeProject(0)">返回</span>
          </div>
        </div>
        <div class="project-card even" @click="project(1)">
          <p class="project-name">积分商城(H5)</p>
          <div class="project-content">
            <h3>项目介绍</h3>
            <p>本项目是一个移动端项目，基于Vue开发。积分商城也是适用于微信端、浏览器、APP端。主要功能为首页活动、商品详情、购买（纯积分+积分加价购）、积分管理。</p>
            <h3>岗位职责</h3>
            <p>负责我的积分、兑换记录、下单管理等页面的布局和数据渲染，完成与后端的接口对接，配合后端的对接联调以及后期的UI调整，解决不同手机端页面布局错乱的问题。</p>
            <h3>技术要求</h3>
            <p>前端通过Vue和php模版引擎(部分)构建页面；</p>
            <p>通过flexible实现移动端适配；</p>
            <p>通过axios实现http请求；</p>
            <p>使用Swiper实现首页banner的轮播切换，better-scroll实现上拉加载，下拉刷新；</p>
            <p>合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能；</p>
            <h3>遇到的一些问题</h3>
            <p>new Date()兼容性问题</p>
            <p>flex实现多行居中问题</p>
            <p>position:fixed失效问题</p>
            <p>结合better-scroll实现分页，上拉加载，下拉刷新的UI问题</p>
            <p>页面{{}}符号闪屏</p>
            <span @click.stop="go('https://www.phimall.com/m/integralstatic-integralHome.html')">demo</span>
            <span class="mb60" @click.stop="closeProject(1)">返回</span>
          </div>

        </div>

        <div class="project-card odd" @click="project(2)">
          <p class="project-name">微信小程序(销售)</p>
          <div class="project-content">
            <h3>项目介绍</h3>
            <p>方便销售员销售公司产品，主要满足销售员扫码销售以及对产品销售的统计功能。</p>
            <h3>岗位职责</h3>
            <p>负责所有页面的布局和数据渲染，完成与后端的接口对接</p>
            <span class="mb60" @click.stop="closeProject(2)">返回</span>
          </div>
        </div>
        <div class="project-card even" @click="project(3)">
          <p class="project-name">Vue仿网易云音乐</p>
          <div class="project-content">
            <h3>项目介绍</h3>
            <p>个人项目，热爱音乐，所以想用Vue写个WebApp，只适配移动端。音乐API为GitHub上开源项目。实现首页功能包括歌单推荐和歌曲推荐、歌单详情、歌曲播放、歌曲歌词播放和进度条、MV等功能</p>
            <h3>技术要求</h3>
            <p>使用Vue框架，以及Vue全家桶构建单页面应用；</p>
            <p>采用手机淘宝适配方案；</p>
            <p>使用阿里icon-font矢量图标库；</p>
            <p>使用Swiper实现首页banner的轮播切换，better-scroll是移动端滚动体验更好；</p>
            <p>合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能；</p>
            <h3>遇到的一些问题</h3>
            <p>打包后本地资源报404错误</p>
            <p>beforeEach的无限循环问题</p>
            <p>毛玻璃效果以及四周泛白</p>
            <p>弹出层禁止底部滑动</p>
            <p>首页图片加载过渡（优化体验）以及歌曲播放页的图片加载（加载图片缓慢）</p>
            <p>实现同步歌词</p>
            <span @click.stop="go('http://www.yuansichao.xin/vue-music/dist/#/')">demo</span>
            <span class="mb60" @click.stop="closeProject(3)">返回</span>
          </div>
        </div>
        <div class="project-card odd" @click="project(4)">
          <p class="project-name">Vue仿小米商城</p>
          <div class="project-content">
            <h3>项目介绍</h3>
            <p>整体布局仿照小米移动商城，通过rem+px实现移动端的适配，基于vue全家桶（vue+vuex+vue-router）完成首页、购物车、分类、产品详情等功能。</p>
            <h3>技术要求</h3>
            <p>使用Vue框架，以及Vue全家桶构建单页面应用；</p>
            <p>采用手机淘宝适配方案；</p>
            <p>使用阿里icon-font矢量图标库；</p>
            <p>vue-lazy实现图片懒加载；</p>
            <p>使用Swiper实现首页banner的轮播切换，better-scroll实现分类栏功能</p>
            <p>合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能；</p>
            <h3>遇到的一些问题</h3>
            <p>vue-router切换时两个页面位置错乱</p>
            <p>实现购物车添加动画</p>
            <p>组件设置了keep-alive之后，组件内的子组件如果有transition动画，在第二次切入时，没有过渡效果</p>
            <p>Swiper组件内的图片使用vue-lazyload图片不显示</p>
            <p>移动端点击闪屏：在html和body内添加-webkit-tap-highlight-color: rgba(0,0,0,0);</p>
            <p>animation动画在打包后的正式环境中没有动画效果：将将keyframes写到最后，（css的顺序的不同可能会有意想不到的的结果）</p>
            <span @click.stop="go('http://www.yuansichao.xin/dist/#/')">demo</span>
            <span class="mb60" @click.stop="closeProject(4)">返回</span>
          </div>
        </div>
        <div class="project-card even" @click="project(5)">
          <p class="project-name">微信办公-移动OA(H5)</p>
          <div class="project-content">
            <h3>项目介绍</h3>
            <p>该项目是一个微信端的H5项目，将公司的OA办公系统移植到移动端、主要用于内部员工查看和管理自己的办公流程。主要通过rem+px实现移动端的适配。</p>
            <h3>岗位职责</h3>
            <p>负责部分页面的布局（基本上都是表格）</p>
            <span class="mb60" @click.stop="closeProject(5)">返回</span>
          </div>
        </div>
        <div class="project-card odd" @click="project(6)">
          <p class="project-name">canvas时钟、象棋、象棋对战、贪吃蛇</p>
          <div class="project-content">
            <span @click.stop="go('https://github.com/scyuan/MyJavaScriptPractice')">GitHub</span>
            <span @click.stop="closeProject(6)">返回</span>
          </div>
        </div>
        <div class="project-box" @touchmove.prevent @scroll.prevent>
          <i class="icon icon-quit-project" @click="closeProject()">&#xe602;</i>
        </div>
      </div>
		</div>
		<div class="part part5" :style="{bottom:4*height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<i class="icon icon-go-top" v-show='currIndex == 4' @click='gotop(4)'>&#xe647;</i>
				<span @click='open(4)'>其他</span>
			</div>
			<div class="content center" :style="{'bottom':height/5+'px'}">
				<!-- github  email  blog  weibo-->
		        <div class="o-item" @click="go('https://github.com/scyuan')">
		          <i class="icon">&#xeaf6;</i><span>GitHub</span>
		        </div>
		        <div class="o-item" @click="go('http://www.yuansichao.com')">
		          <i class="icon">&#xe604;</i><span>一枚程序员</span>
		        </div>
		        <div class="o-item" @click="go('https://m.weibo.cn/u/5094904210')">
		          <i class="icon">&#xe65a;</i><span>程序袁袁袁袁</span>
		        </div>
		        <div class="o-item" @click="go('mailto:644397334@qq.com')">
		          <i class="icon">&#xe605;</i><span>QQ邮箱</span>
		        </div>
            <div class="o-item">
              <i class="icon">&#xe64c;</i><span>644397334</span>
            </div>
            <div class="o-item">
              <i class="icon">&#xe60a;</i><span>18321845414</span>
            </div>
			</div>
		</div>
    <div class="quare"></div>
	</div>
</template>
<script>
import Rem from '@/util/Rem';
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
new Rem();
	export default{
		data:function() {
			return {
				height:document.body.clientHeight,
				currIndex:9999,
        index:-1,
        swiperOption:{
          pagination:{
            el:'.swiper-pagination',
            clickable:true,
            bulletActiveClass: 'white-bullet-active',
          },
        }
			}
		},
    components:{
      swiper,swiperSlide
    },
		methods:{
      closeProject:function (index) {
        // var pos = document.getElementsByClassName('project-card')[this.index].getBoundingClientRect();
        //
        // $('.project-box').css({
        //   'top':pos.top+'px',
        //   'height':'100px',
        //   'transition':'all 0.5s'
        // })
        // setTimeout(function () {
        //   $('.project-box').css({
        //     'transition':'all 0s',
        //     'opacity':'0',
        //   })
        //   $('.project-box').css({
        //     'height':'0',
        //   })
        //   $('p').remove('.remove');
        // },500)
        $('.project-card').eq(index).animate({
          scrollTop:'-1000px'
        },1,function () {
          $('.project-card').eq(index).css({
            'height':'100px',
            'overflow-x': '',
            'overflow-y': '',
          })
        })

      },
      project:function (index) {

        $('.project-card').eq(index).css({
          'height':'100%',
          'overflow-x': 'hidden',
          'overflow-y': 'scroll',
        })
        $('.scroll').animate({
          scrollTop:document.getElementsByClassName('project-card')[index].offsetTop
        });
        // this.index = index;
        // var pos = document.getElementsByClassName('project-card')[index].getBoundingClientRect();
        // $('.project-box').css({
        //   'top':pos.top+'px',
        //   'opacity':'1',
        //   'background':$(document.getElementsByClassName('project-card')[index]).css('background-color'),
        // })
        //
        // $('.project-box').append('<p class="remove" style="text-align: center;\n' +
        //   '  font-size: 16px;\n' +
        //   '  position: absolute;\n' +
        //   '  left: 0;\n' +
        //   '  top: 0;\n' +
        //   '  width: 100%;\n' +
        //   '  height: 100px;\n' +
        //   '  line-height: 100px;">'+$('.project-card').eq(index).find('.project-name').eq(0).text()+'</p>');
        // setTimeout(function () {
        //   $('.project-box').css({
        //     'transition':'all 0.5s',
        //     'top':'0px',
        //     'height':'100%',
        //   })
        // },20)



      },
			reBack:function(){
				for(let i =0;i<$('.mhome').find('.part').length;i++){
		            $('.mhome').find('.part').eq(i).css({
		              	"bottom": i * this.height/5 + "px"
		            })
			    }
			},
			open:function(index){
				console.log(index);
				this.currIndex = index;
				$('.part-title').eq(index).addClass('part-title-1');
				for(let i =0;i<$('.mhome').find('.part').length;i++){
			          if(i == index){
			            $('.mhome').find('.part').eq(i).css({
			              "bottom":"0px"
			            })
			          }
			          if(i < index){
			            $('.mhome').find('.part').eq(i).css({
			              "bottom":"-100%"
			            })
			          }
			          if(i > index){
			            $('.mhome').find('.part').eq(i).css({
			              "bottom":"100%"
			            })
			          }
			    }

			    $('.icon-go-top').hide().eq(index).show();
			},
			gotop:function(index){
				this.currIndex = 9999;
				$('.part-title').removeClass('part-title-1');
				this.reBack();
			},
			go:function (path) {
		        window.location.href = path;
		      }
		},
		created(){

		}
	}
</script>
<style scoped>
  .mhome{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .part{
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #000;
    background: #fff;
  }
  .part1{
    z-index: 1;
    transition: all 0.5s;
  }
  .part2{
    z-index: 2;
    transition: all 0.45s;
  }
  .part3{
    z-index: 3;
    transition: all 0.4s;
  }
  .part4{
    z-index: 4;
    transition: all 0.35s;
  }
  .part5{
    z-index: 5;
    transition: all 0.3s;
  }
  .part-title{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.59rem;
    font-weight: bold;
  }
  .part-title-1{
    height: 1rem !important;
  }
  .icon-go-top{
    font-size: 0.32rem;
    float: left;
    position: absolute;
    left: 0.4rem;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 0.4rem;
    font-size: 0.37rem;
  }
  .center{
    text-align: center;
    margin: 10px 0;
  }
  .a-s{
    display: inline-block;
    width: 2.13rem;
    height: 2.13rem;
    border-radius: 1.07rem;
    overflow: hidden;
  }
  .avator{
    width: 100%;
    height: auto;
  }
  .name{
    font-size: 0.4rem;
    font-weight: bold;
  }
  .skill{
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 0.4rem;
  }
  .icon-skill{
    color: #000;
    font-size: 0.7rem;
  }
  .line{
    height: 0.53rem;
    background: linear-gradient(to right,rgba(0,0,0,0.1),rgba(0,0,0,0.6));
    margin-left: 0.53rem;
    position: relative;
  }
  .line>span{
    line-height: 0.53rem;
    color: #fff;
    font-size: 0.6rem;
    font-weight: bolder;
  }
  .animate-line{
    position: absolute;
    height: 100%;
    background: linear-gradient(to right,rgba(0,0,0,0.1),rgba(0,0,0,0.6));
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
  .o-item{
    display: inline-block;
    width: 60%;
    height: 1.33rem;
    background: #333;
    border-radius: 0.13rem;
    margin-top: 0.8rem;
    background-clip: padding-box;
    text-align: center;
    line-height: 1.33rem;
    cursor: pointer;
    color: #fff;
  }
  .o-item .icon{
    font-size: 0.69rem;
  }
  .o-item span{
    vertical-align: top;
    margin-left: 0.27rem;
  }
  .line p{
    font-size: 0.37rem;
    margin-top: 5px;
    font-weight: bold;
  }
  .swiper-container{
    height: 100%;
    width: 100%;
  }
  .swiper-slide h3{
    margin-top: 10px;
    text-align: center;
  }
  .project-card{
    width: 100%;
    height: 100px;
    position: relative;
    top: 0;
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.3s;
    padding-top:100px;
  }
  .odd{
    background: #f7f7f7;
    z-index: 1;
  }
  .even{
    background: #fff;
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.1);
    z-index: 2;
  }
  .nopadding{
    padding: 0;
  }
  .scroll {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .project-box{
    position: absolute;
    left:0px;
    height: 100px;
    opacity: 0;
    width:100%;
    z-index: 9999;
  }
  .project-name{
    text-align: center;
    font-size: 16px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

    height: 100px;
    line-height: 100px;
  }
  .icon-quit-project{
    position: absolute;
    left: 10px;
    bottom: 15px;
    font-size: 26px;
    font-weight: bolder;
  }
  .project-content{
    padding: 0 30px;
  }
  .project-content span {
    display: block;
    width: 120px;
    height: 30px;
    border-radius: 16px;
    border: 1px solid #000;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    font-size: 16px;
    margin-top: 10px;
  }
  .aboutme li{
    list-style: none;
  }
  .project-content h3{
    margin-top: 10px;
  }
  .project-content span.mb60{
    margin-bottom: 60px;
  }
</style>
