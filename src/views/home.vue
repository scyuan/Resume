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

      <canvas id="canvas" :width="home_width" :height="home_height"></canvas>
      <div class="content" :style='{left:part_width+"px"}'>
        <p>首页目前没什么东西啦，不过你能来到这个地方，那就是缘分☺️</p>
      </div>

			<i class="icon icon-back" @click.stop='back($event)'>&#xe62c;</i>
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

      <div class="content" :style='{left:part_width+"px"}'>



      </div>
			<i class="icon icon-back" @click.stop='back($event)'>&#xe62c;</i>
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
			<i class="icon icon-back" @click.stop='back($event)'>&#xe62c;</i>
		</div>
		<div class="part part4" :style='{left:part_width*3+"px"}'>
      <div class="mengban"></div>
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
      <div class="mengban"></div>
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
			  home_height:0,
				home_width:0,
				part_width:0,
        canvas_width:0,

			}
		},
    breforeRouteEnter(to, from, next){
		  console.log('aaa');
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
			var height = document.body.clientHeight;
			this.home_height = height;
			this.canvas_width = width - width/5;
			this.home_width = width;
			this.part_width = width/5;
		},

		mounted:function(){
			// 绑定事件
			var _this = this;
			this.initHome();

      var balls = [];

      var zero = [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,1,1],
        [1,0,1,0,1],
        [1,1,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]]

      var one = [
        [0,0,1,0,0],
        [0,1,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,1,1,1,0]]

      var two = [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [0,0,0,0,1],
        [0,0,0,1,0],
        [0,0,1,0,0],
        [0,1,0,0,0],
        [1,1,1,1,1]]

      var three = [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [0,0,0,0,1],
        [0,0,1,1,0],
        [0,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]]

      var four = [
        [0,0,0,1,0],
        [0,0,1,1,0],
        [0,1,0,1,0],
        [1,0,0,1,0],
        [1,1,1,1,1],
        [0,0,0,1,0],
        [0,0,0,1,0]]

      var five = [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [0,0,0,0,1],
        [0,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]]

      var six = [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]]

      var seven = [
        [1,1,1,1,1],
        [0,0,0,0,1],
        [0,0,0,1,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,1,0,0,0],
        [1,0,0,0,0]]

      var eight = [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]]

      var nine = [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,1],
        [0,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]]

      var dott = [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0]]

      var color = ['rgb(255,127,36)','rgb(238,118,33)','rgb(205,102,29)','rgb(139,69,19)',
        'rgb(255,48,48)','rgb(238,44,44)','rgb(205,38,38)','rgb(139,26,26)']

      var canvas1 = document.getElementById('canvas');

      var ctx = canvas1.getContext('2d');

      var u = 0.85;

      var temp = [];

      setInterval(function(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        var date = new Date();

        var hours = formatter(date.getHours());

        var minutes = formatter(date.getMinutes());

        var seconds = formatter(date.getSeconds()+1);

        var arr = [];

        // 将时间生成一个数组，数组的元素是一个二维数组，代表一个数字，用来绘制数字或者符号
        arr = create(hours,minutes,seconds);

        // 绘制每个cavas的图形，绘制数字
        for(var k = 0;k<arr.length;k++){
          draw_number(arr[k],k);
        }

        // 每次生成的时间数字数组，将与上一生成的数组进行对比，不同的（变化的）保存一个数组里面，单独渲染，来生成一个彩色球跳动动画
        addBall(arr);

        // 保存当前数组
        temp = arr;

      },10)

      function addBall(arr){
        // 第一次没有上一次保存的时间数组，则返回。
        if(temp.length == 0)
          return;

        // temp和arr是两个长度相等的数组，循环比较数组每项
        for(let i = 0;i<arr.length;i++){

          if(temp[i].toString() != arr[i].toString()){
            // 不相等 变化
            var curr_arr = arr[i];
            for(var ii = 0 ; ii < curr_arr.length; ii++){
              for(var j = 0 ; j < curr_arr[ii].length; j++){

                if(curr_arr[ii][j] == 1){

                  var ball = {
                    offsetX:(j+1+i*3)*11+i*25+_this.home_width/2-200,                                  // 小球x轴偏移量
                    offsetY:(ii+1)*10+_this.home_height/2,                                          // 小球y轴偏移量
                    r:5,                                                       // 小球半径
                    g:0.06+Math.random()*0.06,                                  // 类似于引力，小球初始向上运动，并速度回慢慢减小，减小到0时，方向向下运动。该参数很重要，可以产生一个boom的效果，并且小球触底之后需要一个弹上弹下的效果。
                    fillStyle:color[Math.floor(Math.random()*8)],               // 绘制小球的颜色
                    vx:Math.pow(-1, Math.ceil(Math.random()*10))*Math.random(), // 随机初始x轴的速度，负数向左，正数向右
                    vy:-1,                                                      // 初始y轴的速度
                    vyy:-5                                                      // 触底后，初始的y轴的速度
                  }
                  balls.push(ball);


                }

              }
            }

          }
        }

        renderBall();
        updateBall();

      }

      function renderBall(){

        for(let i = 0;i<balls.length;i++){
          ctx.beginPath();
          ctx.fillStyle = balls[i].fillStyle;
          ctx.arc(balls[i].offsetX,balls[i].offsetY,balls[i].r,0,360,false);
          ctx.fill();
        }
      }

      function updateBall(){

        var remove_index = [];

        var l = balls.length

        for(let i = 0 ;i<balls.length;i++){

          balls[i].offsetX = balls[i].offsetX + balls[i].vx;
          balls[i].offsetY = balls[i].offsetY + balls[i].vy;
          balls[i].vy = balls[i].vy + balls[i].g;

          // 判断是否小球已经运动出界，出界则需要移除，将需要移除的下标暂时存起来
          if(balls[i].offsetX < - balls[i].r || balls[i].offsetX > canvas.width+balls[i].r){
            // 需要移除该彩色球

            if(!remove_index.includes(i)){
              remove_index.push(i);
            }

          }

          // 判断小球是否触底
          if(balls[i].offsetY + balls[i].r >=  canvas.height){

            // 每触底一次，则加速当前小球的x轴方向速度
            if(balls[i].vx<0)
              balls[i].vx = balls[i].vx - 0.1;
            else
              balls[i].vx = balls[i].vx + 0.1;

            // 将小球的y轴距离设置为底部
            balls[i].offsetY = canvas.height - balls[i].r

            // 每次触底后，需要重新设置小球一个向上的速度，u是一个损耗系数，即每触底一次，速度都会减小，导致小球每弹一次到达的最高高度减小。
            // 小球弹弹弹的效果看起来像是抛物线之类，本来是向通过函数来实现，但是感觉好像有点麻烦（求不出这个函数），所以使用vx,vy,vyy,u,g这个参数来实现。
            balls[i].vyy = balls[i].vyy * u;
            balls[i].vy = balls[i].vyy;
          }
        }

        // 移除小球的动作，这部很关键
        var sort = remove_index.map(function(x1,x2){
          return x1-x2;
        })
        if(sort.length!=0)

          for(var k = 0; k < sort.length; k++){
            balls.splice(sort[k]-k,1);
          }

      }

      function checkChangeAndRefreshCanvas(arr){

        if(temp.length == 0){
          for(let i =0 ;i<ctxs.length;i++){
            // 清空画布
            ctxs[i].clearRect(0,0,canvas[i].width,canvas[i].height);
          }
          return ;
        }

        for(let i = 0;i<temp.length;i++){


          if(temp[i].toString() != arr[i].toString()){
            // 不相等 则需要刷新相应的canvas块
            ctxs[i].clearRect(0,0,canvas[i].width,canvas[i].height);
            for(let j = 0 ; j < arr[i].length;j++){
              draw_number(arr[i][j],i,j);
            }
          }
        }
      }

      function create(){
        // console.log(arguments);
        var arr = [];

        for(var i = 0;i<arguments.length;i++){
          var numbers = arguments[i].split('');

          if(i!=0){
            arr.push(dott);
          }

          for(var j = 0;j<numbers.length;j++){

            switch(numbers[j]){
              case '0':
                arr.push(zero);
                break;
              case '1':
                arr.push(one);
                break;
              case '2':
                arr.push(two);
                break;
              case '3':
                arr.push(three);
                break;
              case '4':
                arr.push(four);
                break;
              case '5':
                arr.push(five);
                break;
              case '6':
                arr.push(six);
                break;
              case '7':
                arr.push(seven);
                break;
              case '8':
                arr.push(eight);
                break;
              case '9':
                arr.push(nine);
                break;
            }
          }
        }

        return arr;

      }

      function formatter(i){
        if(i > 9)
          return ''+i;
        else
          return ''+0+i;
      }

      // 绘制单个数字或字符
      function draw_number(arr,k) {
        // body...

        for(var i = 0 ; i < arr.length; i++){
          for(var j = 0 ; j < arr[i].length; j++){
            if(arr[i][j] === 1){
              // 绘制实心圆
              ctx.beginPath();
              ctx.fillStyle = '#fff';
              ctx.arc((j+1+k*3)*11+25*k+_this.home_width/2-200,(i+1)*10+_this.home_height/2,5,0,360,false);
              ctx.fill();
              // 绘制结束

            }


          }
        }
      }
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
  background: rgba(0,0,0,0.8);
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
  top: 50%;
  transform: translateY(-50%);
}
.content{
  height: 100%;
  color: #fff;
  position: relative;
  z-index: 10;
  padding-top: 15%;
  box-sizing: border-box;
}
</style>
