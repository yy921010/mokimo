<template>
  <div id="app">
    <div class="theme-container demo-123456">
      <header-layout></header-layout>
      <main-layout></main-layout>
      <sidebar-layout></sidebar-layout>
    </div>
  </div>
</template>

<script>
import headerLayout from './example/layouts/header.vue'
import mainLayout from './example/layouts/main.vue'
import sidebarLayout from './example/layouts/sidebar.vue'
export default {
  name: 'app',
  components: {
    headerLayout,
    mainLayout,
    sidebarLayout
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
* {
  margin: 0;
  padding: 0;
}
article,
aside,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
.navbar a,
.navbar img,
.navbar span {
  display: inline-block;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
a {
  font-weight: 500;
  text-decoration: none;
}
a,
p a code {
  color: #3eaf7c;
}
ol,
p,
ul {
  line-height: 1.7;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  line-height: 1.25;
}
h1 {
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  padding-top: 4.6rem;
  font-size: 2.2rem;
}
h2 {
  font-size: 1.65rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid rgba(143, 143, 143, .1);
  margin-bottom: 16px;
}
.content:not(.custom) > h1,
.content:not(.custom) > h2,
.content:not(.custom) > h3,
.content:not(.custom) > h4,
.content:not(.custom) > h5,
.content:not(.custom) > h6 {
  margin-top: -3.1rem;
  padding-top: 4.6rem;
  margin-bottom: 0;
}

.content:not(.custom) > h1,
.content:not(.custom) > h2,
.content:not(.custom) > h3,
.content:not(.custom) > h4,
.content:not(.custom) > h5,
.content:not(.custom) > h6 {
  margin-top: -3.1rem;
  padding-top: 4.6rem;
  margin-bottom: 0;
}
h3 {
    font-size: 1.35rem;
}
ol,
p,
ul {
  line-height: 1.7;
  margin: 16px 0;
}

ol,
ul {
  padding-left: 1.2em;
}
#app {
  color: whitesmoke;
  background-color: rgb(20,20,20);
}
</style>
