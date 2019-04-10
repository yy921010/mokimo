<template>
  <div class="mok-progress" :style="{'height':heightUnit}">
    <div class="mok-progress--schedule" :style="{'width':percent}"></div>
    <div class="mok-progress--buffer" v-if="canDrag"></div>
    <div class="mok-progress--drag-button" v-if="canDrag" @mousedown="startDragable" v-mokdrag>
      <div class="mok-progress__drag-cricle"></div>
    </div>
  </div>
</template>

<script>
import { unit } from '@/utils/unit'
export default {
  name: 'MoProgress',
  data () {
    return {
      isDraggable: false
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    canDrag: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    percent () {
      return this.value + '%'
    },
    heightUnit () {
      return unit(this.canDrag ? 8 : 4)
    }
  },
  methods: {
    startDragable () {

    }
  }
}
</script>
