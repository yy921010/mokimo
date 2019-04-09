<template>
  <svg
    class="mok-icon"
    @click="handleClick"
    :style="[{'font-size':unit,'width':unit,'height':unit}]"
  >
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script>
import { unit, getIcon } from '@/utils/unit'
export default {
  name: 'MoIcon',
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
    unit () {
      return unit(this.size)
    },
    icon () {
      return getIcon(this.name, this.type)
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
