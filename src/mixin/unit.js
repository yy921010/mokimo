/**
 * 处理单位
 */
export default {
  computed: {
    heightUnit () {
      if (!this.height) {
        return 0
      }
      return this.unit(this.height)
    },
    widthUnit () {
      if (!this.width) {
        return 0
      }
      return this.unit(this.width)
    }
  },
  methods: {
    unit (sizeNumber) {
      switch (this.$unitName) {
        case 'rem':
          return sizeNumber / this.$unitSize + this.$unitName
        case 'px':
          return sizeNumber + this.$unitName
      }
    }
  }
}
