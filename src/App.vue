<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
