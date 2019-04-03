<template>
  <i class="mok-icon" @click="handleClick" :style="[{'font-size':fontUnit,'width':unit,'height':unit}]">{{name}}</i>
</template>

<script>
export default {
  name: 'MoIcon',
  props: {
    name: String,
    size: {
      type: Number,
      default: 14
    }
  },
  computed: {
    unit () {
      return this.size / 16 + 'rem'
    },
    fontUnit () {
      return (this.size + 1) / 16 + 'rem'
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
