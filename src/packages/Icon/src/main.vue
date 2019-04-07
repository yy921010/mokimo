<template>
  <i
    class="mok-icon"
    :class="'remixicon-'+name+'-'+type"
    @click="handleClick"
    :style="[{'font-size':unit,'width':unit,'height':unit}]"
  ></i>
</template>

<script>
import { unit } from '@/utils/unit'
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
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
