<template>
  <div class="mok-mask" :class="'is-'+name"></div>
</template>
<script>
export default {
  name: 'MoMask',
  props: {
    name: {
      type: String,
      default: 'M1'
    }
  }
}
</script>
