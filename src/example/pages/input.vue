<template>
  <div class="input">
    <h1>输入框</h1>
    <h2>默认</h2>
    <vi-input placeholder="默认设置" v-model="input"></vi-input>
    <br>
    <h2>搜索</h2>
    <vi-input type="search" :isError="false" placeholder="默认设置" v-model="input1"></vi-input>
    <br>
    <h2>密码</h2>
    <vi-input :isError="false"  placeholder="默认设置" v-model="input2" nativeType="password"></vi-input>
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
.input{
  height: 900px;
}
.mok-input{
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
