<template>
  <div class="progress-demo">
    <h1>进度条</h1>
    <h2>基本状态</h2>
    <MoProgress :value="value"/>
  </div>
</template>
<style>
.progress-demo{
  height: 900px;;
}
</style>
<script>
export default {
  data () {
    return {
      value: 100
    }
  },
  created () {
  }
}
</script>
