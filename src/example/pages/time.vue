<template>
  <div class="time-demo">
    <h1>时间输入框</h1>
    <mo-time v-model="date"></mo-time>
    {{date}}
  </div>
</template>
<style>
.time-demo {
  height: 900px;
}
</style>

<script>
export default {
  data () {
    return {
      date: new Date().toString()
    }
  }
}
</script>
