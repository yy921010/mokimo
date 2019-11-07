<template>
  <button
    class="vik-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
  type?'mok-button--'+type:'',
  disable?'is-disable':''
   ]"
  >
<!--    <vi-icon-->
<!--      v-if="iconName !== ''"-->
<!--      :name="iconName"-->
<!--      :type="iconType"-->
<!--      :size="20"-->
<!--      class="mok-button&#45;&#45;icon"-->
<!--    ></vi-icon>-->
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
/**
     * 用于项目中的公共 button
     */
export default {
  name: 'MoButton',
  props: {
    type: {
      type: String,
      validator: value =>
        ['default', 'primary', 'info', 'ghost'].includes(value),
      default: 'default'
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
