<template>
  <div class="header navbar">
    <a href="/" class="home-link">
      <span class="site-name">Mokimo UI Components</span>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.navbar {
  z-index: 20;
  right: 0;
  height: 3.6rem;
  background-color: rgb(20,20,20);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(143, 143, 143, .1);
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  .site-name {
    font-size: 1.3rem;
    line-height: 1.3rem;
    font-weight: 600;
    color: rgba(134, 134, 134, 1);
    position: relative;
  }
}
</style>
