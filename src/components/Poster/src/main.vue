<template>
  <div class="vik-poster" :style="{'width':widthUnit,'height':heightUnit}" @click="handleClick">
    <vi-icon class="vik-poster--default" :name="icon" type="fill" :size="80"/>
    <vi-progress class="vik-poster--progress" :value="progress" v-if="progress !==0"/>
    <img class="vik-poster--image" :src="src" :alt="src" @error="isShow=false" v-show="isShow">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ViPoster',
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    icon: {
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
  data: () => ({
    isShow: true
  }),
  computed: {
    heightUnit () {
      if (!this.height) {
        return 0
      }
      return `${this.height}px`
    },
    widthUnit () {
      if (!this.width) {
        return 0
      }
      return `${this.width}px`
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
