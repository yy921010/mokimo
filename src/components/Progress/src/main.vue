<template>
  <div class="vik-progress" :style="{'height':heightUnit}">
    <div class="vik-progress--schedule" :style="{'width':percent}"></div>
  </div>
</template>
<script>
export default {
  name: 'ViProgress',
  props: {
    value: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 4
    }
  },
  computed: {
    percent () {
      let finalResult = 0
      if (this.value >= 100) {
        finalResult = 100
      }
      if (this.value <= 0) {
        finalResult = 0
      }
      return finalResult + '%'
    },
    heightUnit () {
      if (!this.height) {
        return 0
      }
      return `${this.height}px`
    }
  }

}
</script>
