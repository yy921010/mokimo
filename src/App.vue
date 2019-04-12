<template>
  <div id="app">
    <buttonDemo/>
    <inputDemo/>
    <timeDemo/>
    <processDemo/>
    <mo-poster :width="330" :height="186" :progress="10" :src="'http://img5.mtime.cn/mg/2019/04/12/164436.67383263_285X160X4.jpg'"></mo-poster>
    <mo-poster :width="330" :height="186" :src="'http://img5.mtime.cn/mg/2019/04/12/164932.59885095_285X160X4.jpg'"></mo-poster>
  </div>
</template>

<script>
import buttonDemo from './example/button.vue'
import inputDemo from './example/input.vue'
import timeDemo from './example/time.vue'
import processDemo from './example/process.vue'
export default {
  name: 'app',
  components: {
    buttonDemo,
    inputDemo,
    timeDemo,
    processDemo
  },
  data () {
    return {
      input: '',
      input1: ''
    }
  }
}
</script>

<style lang="scss">
#app {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(20, 20, 20);
  height: 1000vh;
  .app-main {
    width: 1280px;
  }
  h1 {
    margin-bottom: 50px;
    margin-top: 50px;
  }
  h2 {
    margin-bottom: 25px;
    margin-top: 25px;
  }
}
</style>
