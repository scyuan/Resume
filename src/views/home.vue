<template>
	<div id="home" :style='{width:home_width+"px"}'>

		<div @hover='hover()' class="part part1" :style='{left:0+"px"}'>
			<!-- 预览部分 标题-->
			<div class="part-title" :style='{width:part_width+"px"}'>
				<p class="title-p">
					<span>首</span>
					<span>页</span>
				</p>
				
			</div>
			<i class="icon icon-back" @click.stop='back($event)'>&#xe62c;</i>
		</div>
		<div class="part part2" :style='{left:part_width*1+"px"}'>
			<!-- 预览部分 标题-->
			<div class="part-title" :style='{width:part_width+"px"}'>
				<p class="title-p">
					<span>简</span>
					<span>介</span>
				</p>
				
			</div>
			<i class="icon icon-back" @click.stop='back($event)'>&#xe62c;</i>
		</div>
		<div class="part part3" :style='{left:part_width*2+"px"}'>
			<!-- 预览部分 标题-->
			<div class="part-title" :style='{width:part_width+"px"}'>
				<p class="title-p">
					<span>技</span>
					<span>能</span>
				</p>
				
			</div>
			<i class="icon icon-back" @click.stop='back($event)'>&#xe62c;</i>
		</div>
		<div class="part part4" :style='{left:part_width*3+"px"}'>
			<!-- 预览部分 标题-->
			<div class="part-title" :style='{width:part_width+"px"}'>
				<p class="title-p">
					<span>项</span>
					<span>目</span>
					<span>经</span>
					<span>验</span>
				</p>
				
			</div>
			<i class="icon icon-back" @click.stop='back($event)'>&#xe62c;</i>
		</div>
		<div class="part part5" :style='{left:part_width*4+"px"}'>
			<!-- 预览部分 标题-->
			<div class="part-title" :style='{width:part_width+"px"}'>
				<p class="title-p">
					<span>其</span>
					<span>他</span>
				</p>
				
			</div>
			<i class="icon icon-back" @click.stop='back($event)'>&#xe62c;</i>
		</div>
	</div>
</template>
<script>
import $ from 'jquery';
	export default{
		name:'home',
		data:function(){
			return{
				home_width:0,
				part_width:0,
			}
		},
		methods:{
			hover(){
				console.log('aaa');
			},
			back:function(e){
				this.initHome();
			},
			bindClick:function(e){
				console.log('点击');
				var _this = this;
				$('.part').off('click',_this.bindHover);
				// console.log($(e.target).index());
				var index = $('.part').index(e.currentTarget);
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
			}
		},
		created:function(){
			var width = document.body.clientWidth;
			this.home_width = width;
			this.part_width = width/5;
		},

		mounted:function(){
			// 绑定事件
			var _this = this;
			this.initHome();
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
.part1{
	background: #111;
	z-index: 1;
	transition: all 0.5s;
}
.part2{
	background: #333;
	z-index: 2;
	transition: all 0.45s;
}
.part3{
	background: #555;
	z-index: 3;
	transition: all 0.4s;
}
.part4{
	background: #777;
	z-index: 4;
	transition: all 0.35s;
}
.part5{
	background: #999;
	z-index: 5;
	transition: all 0.3s;
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
}
</style>