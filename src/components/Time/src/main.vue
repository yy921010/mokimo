<template>
  <div class="vik-time">
    <span
      class="vik-time--hours"
      @click.stop="chosen('hours')"
      :class="{'is-chosen':chosenName === 'hours'}"
    >{{hours}}</span>
    <span class="vik-time--split">
      <div class="vik-time__dots">
        <i class="vik-time__dot"></i>
        <i class="vik-time__dot"></i>
      </div>
    </span>
    <span
      class="vik-time--minute"
      @click.stop="chosen('minutes')"
      :class="{'is-chosen':chosenName === 'minutes'}"
    >{{minutes}}</span>
    <div class="vik-time--suffix">
      <span class="vik-time__up" @click.stop="changeMinute(TIME_DIREC.UP)">
        <vi-icon name="arrow-up-s"/>
      </span>
      <span class="vik-time__down" @click.stop="changeMinute(TIME_DIREC.DOWN)">
        <vi-icon name="arrow-down-s"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViTime',
  data () {
    return {
      chosenName: '',
      TIME_DIREC: {
        DOWN: '1',
        UP: '2'
      },
      date: ''
    }
  },
  props: {
    option: {
      type: String,
      default: ''
    }
  },
  model: {
    prop: 'option',
    event: 'change'
  },
  computed: {
    hours () {
      const hours = this.parseToDate(this.option).getHours()
      return this.getTimeStr(hours)
    },
    minutes () {
      const minutes = this.parseToDate(this.option).getMinutes()
      return this.getTimeStr(minutes)
    }
  },
  created () {
    this.date = this.parseToDate(this.option)
    document.onclick = () => {
      this.chosenName = ''
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
          let curHousrs = this.date.getHours()
          this.date.setHours(isUp ? curHousrs - 1 : curHousrs + 1)
          this.$emit('change', this.date.toString())
          break
        case 'minutes':
          let curMinutes = this.date.getMinutes()
          this.date.setMinutes(isUp ? curMinutes - 1 : curMinutes + 1)
          this.$emit('change', this.date.toString())
          break
      }
    },

    getTimeStr (timeNumber) {
      return ('' + timeNumber).padStart(2, '0')
    },

    parseToDate (dateStr) {
      return new Date(dateStr)
    },

    chosen (chosenName) {
      this.chosenName = chosenName
    }
  }
}
</script>
