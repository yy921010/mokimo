<template>
  <div id="app">
    <h1>按钮</h1>
    <h2>基本状态</h2>
    <mo-button>default</mo-button>
    <mo-button type="primary">primary</mo-button>
    <mo-button type="large">large</mo-button>
    <mo-button type="small">small</mo-button>
    <mo-button type="mini">mini</mo-button>
    <mo-button type="ghost">ghost</mo-button>
    <br>
    <h2>禁用状态</h2>
    <mo-button disable>default</mo-button>
    <mo-button type="primary" disable>primary</mo-button>
    <mo-button type="large" disable>large</mo-button>
    <mo-button type="small" disable>small</mo-button>
    <mo-button type="mini" disable>mini</mo-button>
    <mo-button type="ghost" disable>ghost</mo-button>
    <h2>带有图标</h2>
    <mo-button iconName="search">default</mo-button>
    <mo-button iconName="library_books" type="primary" disable>primary</mo-button>
    <mo-button iconName="search" type="large">large</mo-button>
    <mo-button iconName="play_arrow" type="small">small</mo-button>
    <mo-button iconName="search" type="mini">mini</mo-button>
    <mo-button iconName="search" type="ghost">ghost</mo-button>
    <h1>输入框</h1>
    <h2>默认</h2>
    <mo-input placeholder="默认设置" v-model="input1"></mo-input>
    <br>
    <h2>搜索</h2>
    <mo-input type="search" :isError="false" placeholder="默认设置" v-model="input"></mo-input>
    <br>
    <h2>密码</h2>
    <mo-input :isError="false" placeholder="默认设置" v-model="input" nativeType="password"></mo-input>
    <h1>时间输入框</h1>
    <mo-time :date="new Date()"></mo-time>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
