<template>
  <div id="app">
        <SideBar class="side-bar"/>
        <keep-alive :include='cashViews'>
            <router-view class="main-view"></router-view>   
        </keep-alive>
  </div>
</template>

<script>
import SideBar from './components/sideBar.vue'

export default {
  name: 'App',
  data() {
      return {
        cashViews: ['searchBill','sumType','sumCate']
      }
  },
  components: {
    SideBar
  }
}
</script>

<style>
html, body {
    margin:0;
    padding:0;
    width: 100%;
    height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative
}
.side-bar {
    position: absolute;
    width: 200px;
    height: 100%;
    top:0;
    left:0;
    background-color: #3d4a5a;
}
.main-view {
    position: absolute;
    top:0;
    left:200px;
    right: 0;
    bottom:0;
    padding: 0 20px;
}
</style>
