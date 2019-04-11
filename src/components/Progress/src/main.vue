<template>
  <div class="mok-progress" :style="{'height':heightUnit}">
    <div class="mok-progress--schedule" :style="{'width':percent}"></div>
    <div class="mok-progress--buffer" v-if="canDrag"></div>
    <div
      class="mok-progress--drag-button"
      v-if="canDrag"
      @mousedown="startDrag"
      ref="dragId"
      :style="{'left':left+'px'}"
    >
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
      isDraggable: false,
      beginOffset: 0,
      left: 0
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
      return this.left + '%'
    },
    heightUnit () {
      return unit(this.canDrag ? 8 : 4)
    }
  },
  methods: {
    startDrag (evt) {
      this.beginOffset = evt.clientX - this.$refs.dragId.offsetLeft
      this.isDraggable = true
      document.addEventListener('mousemove', this.dragging)
      document.addEventListener('mouseup', this.endDrag)
      document.addEventListener('mouseleave', this.endDrag)
    },
    dragging (evt) {
      if (this.isDraggable) {
        this.left = evt.clientX - this.beginOffset
      }
    },
    endDrag () {
      this.isDraggable = false
      document.removeEventListener('mousemove', this.dragging)
      document.removeEventListener('mouseup', this.endDrag)
      document.removeEventListener('mouseleave', this.endDrag)
    }
  }
}
</script>
