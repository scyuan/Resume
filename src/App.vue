<template>
  <div id="app">
    <!--y页面加载loading-->
    <transition name="fade">
      <div class="loading" v-if="loading">
        <pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader>
        <p class="loading-text">加载中</p>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
  import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue';
export default {
  name: 'App',
  data:function () {
    return{
      color:'#fff',
      loading:true,
      size:'26px'
    }
  },
  components:{
    PacmanLoader
  },
  mounted:function () {
    var _this = this;
    window.onload = function () {
      _this.loading = false;
    }
  }
}
</script>

<style>
body,html,p,div,ul,li,h1,h2,h3,h4,h5,h6,div,*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}
body,#app{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: 'iconfont';  /* project id 601201 */
  src: url('//at.alicdn.com/t/font_601201_r385j77szy.eot');
  src: url('//at.alicdn.com/t/font_601201_r385j77szy.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_601201_r385j77szy.woff') format('woff'),
  url('//at.alicdn.com/t/font_601201_r385j77szy.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_601201_r385j77szy.svg#iconfont') format('svg');
}
.icon{
  font-family: 'iconfont';
  font-style: normal;
}
.loading{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background: #000;
  align-items: center;
  display: flex;
  justify-content: center;
}
.loading-text{
  color: #fff;
  padding-left: 100px;
  font-size: 20px;
  font-weight: bold;
}
.fade-enter-to,.fade-leave{
  opacity: 1;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-avtive,.fade-leave-active{
  transition: all 0.3s;
}
</style>
