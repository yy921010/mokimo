<template>
  <button
    class="mok-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
  type?'mok-button--'+type:'',
  disable?'is-disable':''
   ]"
  >
    <mo-icon v-if="iconName !== ''" :name="iconName" :size="20" class="mok-button--icon"></mo-icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'MoButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disable: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (evt) {
      if (this.disable) {
        return
      }
      this.$emit('click', evt)
    }
  }
}
</script>
