<template>
  <div class="mok-time">
    <span
      class="mok-time--hours"
      @click.stop="chosen('hours')"
      :class="{'is-chosen':chosenName === 'hours'}"
    >{{hours}}</span>
    <span class="mok-time--split">
      <div class="mok-time__dots">
        <i class="mok-time__dot"></i>
        <i class="mok-time__dot"></i>
      </div>
    </span>
    <span
      class="mok-time--minute"
      @click.stop="chosen('minutes')"
      :class="{'is-chosen':chosenName === 'minutes'}"
    >{{minutes}}</span>
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
      hours: '',
      minutes: '',
      chosenName: '',
      TIME_DIREC: {
        DOWN: '1',
        UP: '2'
      }
    }
  },
  props: {
    date: {
      type: Date,
      default: new Date()
    }
  },
  created () {
    this.hours = this.date.getHours()
    this.minutes = this.date.getMinutes()
    document.onclick = () => {
      this.chosenName = ''
    }
  },
  methods: {
    changeMinute (timeDirection) {
      switch (timeDirection) {
        case this.TIME_DIREC.UP :
          this.changeTime(true)
          break
        case this.TIME_DIREC.DOWN :
          this.changeTime(false)
          break
      }
    },

    changeTime (isUp) {
      switch (this.chosenName) {
        case 'hours' :
          let curHousrs = this.date.getHours()
          this.date.setHours(isUp ? curHousrs - 1 : curHousrs + 1)
          this.hours = this.date.getHours()
          break
        case 'minutes' :
          let curMinutes = this.date.getMinutes()
          this.date.setMinutes(isUp ? curMinutes - 1 : curMinutes + 1)
          this.minutes = this.date.getMinutes()
          break
      }
    },
    chosen (chosenName) {
      this.chosenName = chosenName
    }
  }
}
</script>
