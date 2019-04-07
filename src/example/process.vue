<template>
  <div class="progress-demo">
    <h1>进度条</h1>
    <h2>基本状态</h2>
    <MoProgress :value="value"/>
    <h2>可以拖拽</h2>
     <MoProgress :value="value" :canDrag="true"/>
  </div>
</template>
<style>
.progress-demo{
  min-width: 1280px;
}
</style>
<script>
export default {
  data () {
    return {
      value: 0
    }
  },
  created () {
  }
}
</script>
