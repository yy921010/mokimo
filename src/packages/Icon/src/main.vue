<template>
  <i class="mok-icon"  :class="'remixicon-'+name+'-'+type" @click="handleClick" :style="[{'font-size':unit,'width':unit,'height':unit}]"></i>
</template>

<script>
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
      return this.size / 16 + 'rem'
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
