<template>
  <button
    class="vi-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
  type?'mok-button--'+type:'',
  disable?'is-disable':''
   ]"
  >
    <mo-icon
      v-if="iconName !== ''"
      :name="iconName"
      :type="iconType"
      :size="20"
      class="mok-button--icon"
    ></mo-icon>
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
      validator: value =>
        ['', 'primary', 'large', 'small', 'mini', 'ghost'].includes(value),
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: val => ['button', 'reset', 'submit'].includes(val)
    },
    disable: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: 'line'
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
