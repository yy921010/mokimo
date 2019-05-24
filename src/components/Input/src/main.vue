<template>
  <div class="mok-input">
    <input
      :type="nativeType"
      :maxlength="maxlength"
      :tabindex="tabindex"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      @input="handleInput"
      @click="handleClick"
      :class="[isError?'is-error':'', type?'mok-input--'+type:'']"
    >
    <mo-icon class="mok-input--clear" name="close" v-if="showClear" @click="clearWord"/>
    <mo-icon class="mok-input--search-icon" name="search" v-if="showSearchIcon"/>
  </div>
</template>
<script>
export default {
  name: 'MoInput',
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
      validator: value => ['default', 'search'].indexOf(value) !== -1
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
    handleClick () {
      this.$emit('click', event)
    }
  }
}
</script>
