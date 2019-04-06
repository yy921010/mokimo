<template>
  <div class="mok-time">
    <input
      class="mok-time--hours"
      @click.stop="chosen('hours')"
      :class="{'is-chosen':chosenName === 'hours'}"
      :value="hours"
      @input="handleInput"
      readonly
    >
    <span class="mok-time--split">
      <div class="mok-time__dots">
        <i class="mok-time__dot"></i>
        <i class="mok-time__dot"></i>
      </div>
    </span>
    <input
      class="mok-time--minute"
      @click.stop="chosen('minutes')"
      :class="{'is-chosen':chosenName === 'minutes'}"
      :value="minutes"
      @input="handleInput"
      readonly
    >
    <div class="mok-time--suffix">
      <span class="mok-time__up" @click.stop="changeMinute(TIME_DIREC.UP)">
        <mo-icon name="arrow-up-s"></mo-icon>
      </span>
      <span class="mok-time__down" @click.stop="changeMinute(TIME_DIREC.DOWN)">
        <mo-icon name="arrow-down-s"></mo-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoTime',
  data () {
    return {
      chosenName: '',
      TIME_DIREC: {
        DOWN: '1',
        UP: '2'
      }
    }
  },
  props: {
    value: {
      type: Date,
      default: new Date()
    }
  },
  created () {
    document.onclick = () => {
      this.chosenName = ''
    }
  },
  computed: {
    hours () {
      return this.getTimeStr(this.value.getHours())
    },
    minutes () {
      return this.getTimeStr(this.value.getMinutes())
    }
  },
  methods: {
    changeMinute (timeDirection) {
      switch (timeDirection) {
        case this.TIME_DIREC.UP:
          this.changeTime(true)
          break
        case this.TIME_DIREC.DOWN:
          this.changeTime(false)
          break
      }
    },

    changeTime (isUp) {
      switch (this.chosenName) {
        case 'hours':
          let curHousrs = this.value.getHours()
          this.value.setHours(isUp ? curHousrs - 1 : curHousrs + 1)
          break
        case 'minutes':
          let curMinutes = this.value.getMinutes()
          this.value.setMinutes(isUp ? curMinutes - 1 : curMinutes + 1)
          break
      }
      console.log(this.value)
      this.$emit('input', this.value)
    },
    getTimeStr (timeNumber) {
      return ('' + timeNumber).padStart(2, '0')
    },
    chosen (chosenName) {
      this.chosenName = chosenName
    },
    handleInput (event) {
      console.log(event)
      // this.$emit('input', this.value)
    }
  }
}
</script>
