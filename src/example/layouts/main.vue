<template>
  <main class="page">
    <div class="content">
        <router-view></router-view>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.page {
  padding-left: 20rem;
  padding-bottom: 2rem;
  display: block;
}
.content:not(.custom) {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
