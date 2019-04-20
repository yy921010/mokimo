<template>
  <div class="posterDemo">
    <h1>海报</h1>
    <h2>默认</h2>
    <mo-poster
      :width="330"
      :height="186"
      :progress="10"
      :src="'http://img5.mtime.cn/mg/2019/04/12/164436.67383263_285X160X4.jpg'"
    ></mo-poster>
    <h2>不带进度条</h2>
    <mo-poster
      :width="330"
      :height="186"
      :src="'http://img5.mtime.cn/mg/2019/04/12/164932.59885095_285X160X4.jpg'"
    ></mo-poster>
  </div>
</template>
<style lang="scss" scoped>
.posterDemo {
  height: 900px;
}
</style>
