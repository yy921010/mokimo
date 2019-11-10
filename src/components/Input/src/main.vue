<template>
  <div class="vik-input">
    <input
      :type="nativeType"
      :maxlength="maxlength"
      :tabindex="tabindex"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      @input="handleInput"
      @click="handleClick"
      :class="[isError?'is-error':'', type?'vik-input__'+type:'']"
    >
    <vi-icon class="vik-input--clear" name="close" v-if="showClear" @click="clearWord"/>
    <vi-icon class="vik-input--search-icon" name="search" v-if="showSearchIcon"/>
  </div>
</template>
<script>
export default {
  name: 'ViInput',
  props: {
    nativeType: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    tabindex: String,
    maxlength: Number,
    isError: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'search'].includes(value)
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showClear () {
      return !this.readonly && this.value !== ''
    },
    showSearchIcon () {
      return !this.readonly && this.type === 'search' && this.value === ''
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    clearWord () {
      this.$emit('input', '')
    },
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
