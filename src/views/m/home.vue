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

				<p class="center"><span class="a-s"><img class="avator" src="../../assets/IMG_0606.jpg" alt=""></span></p>
				<p class="center name">sichao.yuan（袁斯超）</p>
				<p class="center">火锅、代码、游戏、旅游</p>
				<p class="center ">重庆大学</p>
				<p class="center ">计算机科学与技术</p>
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
		          <div class="line" style="width: 55%"><span>HTML</span><div class="animate-line"></div></div>
		        </div>
		        <div class="skill">
		          <i class="icon icon-skill">&#xe6b7;</i>
		          <div class="line" style="width: 55%"><span>CSS</span><div class="animate-line"></div></div>
		        </div>
		        <div class="skill">
		          <i class="icon icon-skill">&#xe640;</i>
		          <div class="line" style="width: 65%"><span>VueJS</span><div class="animate-line"></div></div>
		        </div>
		        <div class="skill">
		          <i class="icon icon-skill">&#xe639;</i>
		          <div class="line" style="width: 45%"><span>JavaScript</span><div class="animate-line"></div></div>
		        </div>
		        <div class="skill">
		          <i class="icon icon-skill">&#xe655;</i>
		          <div class="line" style="width: 45%"><span>JQuery</span><div class="animate-line"></div></div>
		        </div>
			</div>
		</div>
		<div class="part part4" :style="{bottom:3*height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<i class="icon icon-go-top" v-show='currIndex == 3' @click='gotop(3)'>&#xe647;</i>
				<span @click='open(3)'>项目</span>
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
		</div>
	</div>
</template>
<script>
import Rem from '@/util/Rem';
new Rem();
	export default{
		data:function() {
			return {
				height:document.body.clientHeight,
				currIndex:9999,
			}
		},
		methods:{
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
			}
		},
		created(){
			
		}
	}
</script>
<style>
.mhome{
	width: 100%;
	height: 100%;
	position: relative;
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
</style>