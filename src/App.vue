<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'cpnts/header/header'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style>
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
