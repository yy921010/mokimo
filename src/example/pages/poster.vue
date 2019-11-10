<template>
  <div class="posterDemo">
    <h1>海报</h1>
    <h2>默认</h2>
    <vi-poster
      :width="330"
      :height="186"
      :progress="pro"
      :src="'http://img5.mtime.c'"
    ></vi-poster>
    <h2>不带进度条</h2>
    <vi-poster
      :width="330"
      :height="186"
      :src="'http://img5.mtime.cn/mg/2019/04/12/164932.59885095_285X160X4.jpg'"
    >
    <div class="mask">dsadas</div>
    </vi-poster>
  </div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      pro: 10
    }
  },
  mounted () {
    setTimeout(() => {
      this.pro = 40
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.posterDemo {
  height: 900px;
}
  .mask{
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
  }
</style>
