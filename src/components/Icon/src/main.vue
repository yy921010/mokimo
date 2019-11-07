<template>
  <i class="vik-icon" @click="handleClick"
     :class="iconClass"
     :style="[{'font-size':size+'px','width':size+'px','height':size+'px'}]"
  ></i>
</template>

<script>
/**
     * 用于项目的图标处理，需要添加 cdn <link href="https://cdn.remixicon.com/releases/v2.1.0/remixicon.css" rel="stylesheet">
     */
export default {
  name: 'ViIcon',
  props: {
    name: String,
    size: {
      type: Number,
      default: 14
    },
    type: {
      type: String,
      default: 'line',
      validate: (val) => ['line', 'fill'].includes(val)
    }
  },
  computed: {
    iconClass () {
      return `ri-${this.name}-${this.type}`
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
