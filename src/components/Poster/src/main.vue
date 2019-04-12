<template>
  <div class="mok-poster" :style="{'width':widthUnit,'height':heightUnit}">
    <mo-icon class="mok-poster--default" :name="type" type="fill" :size="80"></mo-icon>
    <mo-progress class="mok-poster--progress" :value="progress" v-if="this.progress !==0"></mo-progress>
    <img class="mok-poster--image" :src="src" :alt="src">
  </div>
</template>
<script>
import unit from '@mixin/unit'
export default {
  name: 'MoPoster',
  mixins: [unit],
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'film'
    },
    src: {
      type: String,
      default: ''
    },
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>
