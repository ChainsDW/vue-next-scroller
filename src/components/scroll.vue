<template>
  <div
    class="outer"
    :style="outerHeight"
    @mouseenter="handleMouEn"
    @mouseleave="handleMouOut"
  >
<!--  为了无缝衔接，这边做一个复制  -->
    <scrollChild
      :height="height"
      :data="data"
      :ease="ease"
      :isFirst="false"
      :isHover="isHover"
      :speed="speed"
      :hold-up="holdUp"
      :show-line="showLine"
    >
      <slot></slot>
    </scrollChild>
    <scrollChild
      :height="height"
      :data="data"
      :ease="ease"
      :isFirst="true"
      :isHover="isHover"
      :speed="speed"
      :hold-up="holdUp"
      :show-line="showLine"
    >
      <slot></slot>
    </scrollChild>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import scrollChild from '@/components/scrollChild.vue'

export default defineComponent({
  name: 'Scroll',
  components: {
    scrollChild
  },
  props: {
    height: {
      default: () => { return 18 },
      type: Number
    },
    data: {
      default: () => { return [] },
      type: Array
    },
    ease: {
      default: () => { return false },
      type: Boolean
    },
    speed: {
      default: () => { return 1000 },
      type: Number
    },
    holdUp: {
      default: () => { return 1000 },
      type: Number
    },
    showLine: {
      default: () => { return 1 },
      type: Number
    }
  },
  setup (props) {
    const isHover = ref(false)

    const outerHeight = computed(() => {
      return { height: `${props.showLine * props.height}px` }
    })

    const handleMouEn = () => {
      isHover.value = true
    }

    const handleMouOut = () => {
      isHover.value = false
    }

    return { isHover, handleMouEn, handleMouOut, outerHeight }
  }
})
</script>

<style scoped lang="stylus">
.outer
  overflow hidden
</style>
