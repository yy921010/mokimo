<template>
  <div class="input-group">
    <h1>输入框</h1>
    <h2>默认</h2>
    <mo-input placeholder="默认设置" v-model="input"></mo-input>
    <br>
    <h2>搜索</h2>
    <mo-input type="search" :isError="false" placeholder="默认设置" v-model="input1"></mo-input>
    <br>
    <h2>密码</h2>
    <mo-input :isError="false" placeholder="默认设置" v-model="input2" nativeType="password"></mo-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      input1: '',
      input2: ''
    }
  }
}
</script>

<style>
.input-group{
  min-width: 1280px;
}
</style>
