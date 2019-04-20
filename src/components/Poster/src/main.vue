<template>
  <div class="mok-poster" :style="{'width':widthUnit,'height':heightUnit}" @click="handleClick">
    <mo-icon class="mok-poster--default" :name="type" type="fill" :size="80"></mo-icon>
    <mo-progress class="mok-poster--progress" :value="progress" v-if="this.progress !==0"></mo-progress>
    <img class="mok-poster--image" :src="src" :alt="src">
    <slot></slot>
  </div>
</template>
<script>
// 海报通过添加slot 来控制海报遮罩内容
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
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
