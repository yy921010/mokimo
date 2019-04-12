<template>
  <svg
    class="mok-icon"
    @click="handleClick"
    :style="[{'font-size':unit(this.size),'width':unit(this.size),'height':unit(this.size)}]"
  >
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script>
import iconSymbol from 'remixicon/fonts/remixicon.symbol.svg'
import unit from '@mixin/unit'
export default {
  name: 'MoIcon',
  mixins: [unit],
  props: {
    name: String,
    size: {
      type: Number,
      default: 14
    },
    type: {
      type: String,
      default: 'line'
    }
  },
  computed: {
    icon () {
      return `${iconSymbol}#remixicon-${this.name}-${this.type}`
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
