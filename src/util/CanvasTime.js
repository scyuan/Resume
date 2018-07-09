function CanvasTime(options) {
  this._init(options);

}
$.extend(CanvasTime.prototype,{
  balls:[],
  timer:null,
  canvas:null,
  ctx:null,
  u:0.9,
  last:[],
  width:null,
  height:null,
  zero:[
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,1,1],
    [1,0,1,0,1],
    [1,1,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]],
  one:[
    [0,0,1,0,0],
    [0,1,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,1,1,1,0]],
  two:[
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [1,1,1,1,1]],
  three:[
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [0,0,1,1,0],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]],
  four:[
    [0,0,0,1,0],
    [0,0,1,1,0],
    [0,1,0,1,0],
    [1,0,0,1,0],
    [1,1,1,1,1],
    [0,0,0,1,0],
    [0,0,0,1,0]],
  five:[
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]],
  six:[
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]],
  seven:[
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,0]],
  eight:[
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]],
  nine:[
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,1],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]],
  dott:[
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0]],
  _init:function (options) {
    var _this = this;
    this.options = {
      el:options.el,
      width:options.width,
      height:options.height
    }
    $.extend(true,_this.options,options||{});

    // 初始化数据
    this.canvas = document.querySelector(_this.options.el);
    this.ctx = this.canvas.getContext('2d');
    this.width = options.width;
    this.height = options.height;

    // this.start();

    return this;
  },
  start:function () {
    var _this = this;
    this.timer = setInterval(function () {
      _this.ctx.clearRect(0,0,_this.canvas.width,_this.canvas.height);

      var date = new Date();

      var hours = _this._formatter(date.getHours());

      var minutes = _this._formatter(date.getMinutes());

      var seconds = _this._formatter(date.getSeconds()+1);

      // 将时间生成一个数组，数组的元素是一个二维数组，代表一个数字，用来绘制数字或者符号
      var arr = _this._create(hours,minutes,seconds);

      // 绘制每个cavas的图形，绘制数字

      for(var k = 0;k<arr.length;k++){
        _this._draw_number(arr[k],k);
      }

      // 每次生成的时间数字数组，将与上一生成的数组进行对比，不同的（变化的）保存一个数组里面，单独渲染，来生成一个彩色球跳动动画
      _this._addBall(arr);

      // 保存当前数组
      _this.last = arr;
    },10)
  },
  stop:function () {
    clearInterval(this.timer);
  },
  _formatter:function (i) {
    if(i > 9)
      return ''+i;
    else
      return ''+0+i;
  },
  _create:function () {
    var arr = [];

    for(var i = 0;i<arguments.length;i++){
      var numbers = arguments[i].split('');

      if(i!=0){
        arr.push(this.dott);
      }

      for(var j = 0;j<numbers.length;j++){

        switch(numbers[j]){
          case '0':
            arr.push(this.zero);
            break;
          case '1':
            arr.push(this.one);
            break;
          case '2':
            arr.push(this.two);
            break;
          case '3':
            arr.push(this.three);
            break;
          case '4':
            arr.push(this.four);
            break;
          case '5':
            arr.push(this.five);
            break;
          case '6':
            arr.push(this.six);
            break;
          case '7':
            arr.push(this.seven);
            break;
          case '8':
            arr.push(this.eight);
            break;
          case '9':
            arr.push(this.nine);
            break;
        }
      }
    }
    return arr;
  },
  _draw_number:function(arr,k) {
    var _this = this;
    for(var i = 0 ; i < arr.length; i++){
      for(var j = 0 ; j < arr[i].length; j++){
        if(arr[i][j] === 1){
          // 绘制实心圆
          this.ctx.beginPath();
          this.ctx.fillStyle = '#fff';
          this.ctx.arc((j+1+k*3)*11+25*k+_this.width/2-233,(i+1)*10,5,0,360,false);
          this.ctx.fill();
          // 绘制结束
        }


      }
    }
  },
  _addBall:function (arr) {
    // 第一次没有上一次保存的时间数组，则返回。
    if(this.last.length == 0)
      return;

    // temp和arr是两个长度相等的数组，循环比较数组每项
    for(let i = 0;i<arr.length;i++){

      if(this.last[i].toString() != arr[i].toString()){
        // 不相等 变化
        var curr_arr = arr[i];
        for(var ii = 0 ; ii < curr_arr.length; ii++){
          for(var j = 0 ; j < curr_arr[ii].length; j++){

            if(curr_arr[ii][j] == 1){

              var ball = {
                offsetX:(j+1+i*3)*11+i*25+this.width/2-233,                                  // 小球x轴偏移量
                offsetY:(ii+1)*10,                                          // 小球y轴偏移量
                r:5,                                                       // 小球半径
                g:0.06+Math.random()*0.06,                                  // 类似于引力，小球初始向上运动，并速度回慢慢减小，减小到0时，方向向下运动。该参数很重要，可以产生一个boom的效果，并且小球触底之后需要一个弹上弹下的效果。
                fillStyle:"rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")",               // 绘制小球的颜色
                vx:Math.pow(-1, Math.ceil(Math.random()*10))*Math.random(), // 随机初始x轴的速度，负数向左，正数向右
                vy:-1,                                                      // 初始y轴的速度
                vyy:-5                                                      // 触底后，初始的y轴的速度
              }
              this.balls.push(ball);


            }

          }
        }

      }
    }

    this._renderBall();
    this._updateBall();
  },
  _renderBall:function () {
    for(let i = 0;i<this.balls.length;i++){
      this.ctx.beginPath();
      this.ctx.fillStyle = this.balls[i].fillStyle;
      this.ctx.arc(this.balls[i].offsetX,this.balls[i].offsetY,this.balls[i].r,0,360,false);
      this.ctx.fill();
    }
  },
  _updateBall:function () {
    var remove_index = [];

    var l = this.balls.length

    for(let i = 0 ;i<this.balls.length;i++){

      this.balls[i].offsetX = this.balls[i].offsetX + this.balls[i].vx;
      this.balls[i].offsetY = this.balls[i].offsetY + this.balls[i].vy;
      this.balls[i].vy = this.balls[i].vy + this.balls[i].g;

      // 判断是否小球已经运动出界，出界则需要移除，将需要移除的下标暂时存起来
      if(this.balls[i].offsetX < - this.balls[i].r || this.balls[i].offsetX > this.canvas.width+this.balls[i].r){
        // 需要移除该彩色球

        if(!remove_index.includes(i)){
          remove_index.push(i);
        }

      }

      // 判断小球是否触底
      if(this.balls[i].offsetY + this.balls[i].r >=  this.canvas.height){

        // 每触底一次，则加速当前小球的x轴方向速度
        if(this.balls[i].vx<0)
          this.balls[i].vx = this.balls[i].vx - 0.1;
        else
          this.balls[i].vx = this.balls[i].vx + 0.1;

        // 将小球的y轴距离设置为底部
        this.balls[i].offsetY = this.canvas.height - this.balls[i].r

        // 每次触底后，需要重新设置小球一个向上的速度，u是一个损耗系数，即每触底一次，速度都会减小，导致小球每弹一次到达的最高高度减小。
        // 小球弹弹弹的效果看起来像是抛物线之类，本来是向通过函数来实现，但是感觉好像有点麻烦（求不出这个函数），所以使用vx,vy,vyy,u,g这个参数来实现。
        this.balls[i].vyy = this.balls[i].vyy * this.u;
        this.balls[i].vy = this.balls[i].vyy;
      }
    }

    // 移除小球的动作，这部很关键
    var sort = remove_index.map(function(x1,x2){
      return x1-x2;
    })
    if(sort.length!=0)

      for(var k = 0; k < sort.length; k++){
        this.balls.splice(sort[k]-k,1);
      }

  }
})

export default CanvasTime;
