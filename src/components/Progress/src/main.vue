<template>
  <div class="mok-progress" :style="{'height':heightUnit}">
    <div class="mok-progress--schedule" :style="{'width':percent}"></div>
  </div>
</template>
<script>
import unit from '@mixin/unit'
export default {
  name: 'MoProgress',
  mixins: [unit],
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      height: 4
    }
  },
  computed: {
    percent () {
      return this.value + '%'
    }
  }
}
</script>
