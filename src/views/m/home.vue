<template>
	<div class="mhome">
		<div class="part part1" :style="{bottom:'0px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<i class="icon">&#xe755;</i>
				<span @click='open(0)'>页面一</span>
			</div>
		</div>
		<div class="part part2" :style="{bottom:height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<span @click='open(1)'>页面二</span>
			</div>
		</div>
		<div class="part part3" :style="{bottom:2*height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<span @click='open(2)'>页面三</span>
			</div>
		</div>
		<div class="part part4" :style="{bottom:3*height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<span @click='open(3)'>页面四</span>
			</div>
		</div>
		<div class="part part5" :style="{bottom:4*height/5+'px'}">
			<div class="part-title" :style="{height:height/5+'px'}">
				<span @click='open(4)'>页面五</span>
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
				height:document.body.clientHeight
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
</style>