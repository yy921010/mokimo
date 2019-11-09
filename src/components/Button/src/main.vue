<template>
  <button
    class="vik-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
  buttonClass,
  disable?'is-disable':'',
  size !==''? 'vik-button--'+size:''
   ]"
  >
    <vi-icon
      v-if="icon !== ''"
      :name="icon"
      :type="iconType"
      :size="20"
      class="vik-button--icon"
    ></vi-icon>
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
  name: 'ViButton',
  props: {
    type: {
      type: String,
      validator: value =>
        ['default', 'primary', 'info', 'link'].includes(value),
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: val => ['button', 'reset', 'submit'].includes(val)
    },
    size: {
      type: String,
      default: '',
      validator: val => ['', 'large', 'medium', 'small', 'mini'].includes(val)
    },
    disable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: 'line'
    }
  },
  computed: {
    buttonClass () {
      return `vik-button__${this.type}`
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
