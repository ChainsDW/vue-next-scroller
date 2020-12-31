<template>
  <div
    ref="scrollBox"
    :style="trans"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, onMounted } from 'vue'

export default defineComponent({
  name: 'scrollChild',
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
    isFirst: {
      default: () => { return true },
      type: Boolean
    },
    isHover: {
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
    const yPos = ref(0)
    const _easeSpeed = 'ease-in-out'
    const _linerSpeed = 'cubic-bezier(0.44, 0.44, 0.61, 0.63)'
    let _timer: number
    let _top = props.data.length * props.height + props.showLine * props.height - props.showLine * props.height

    const trans = computed(() => {
      return {
        transform: `translate(0, ${yPos.value}px)`,
        transition: `transform ${props.speed}ms ${props.ease ? _easeSpeed : _linerSpeed} ${props.holdUp}ms`,
        overflow: 'hidden',
        position: 'relative',
        top: `-${_top}px`,
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end'
      }
    })

    const _move = () => {
      if (props.data.length <= props.showLine) {
        return
      }
      yPos.value += props.height
      if (!props.isHover) {
        _timer = setTimeout(_move, props.speed + props.holdUp)
      }
    }

    watch(yPos, () => {
      const diffHeight = props.isFirst ? _top : _top + props.data.length * props.height
      if (yPos.value > diffHeight) {
        _top = _top + props.data.length * props.height * 2
      }
    })

    onMounted(() => {
      _move()
      document.addEventListener('visibilitychange', function () {
        // 监听失去焦点时不处理动画
        if (document.visibilityState === 'hidden') {
          clearTimeout(_timer)
        } else if (document.visibilityState === 'visible') {
          _move()
        }
      })
    })

    watch(props, () => {
      if (!props.isHover) {
        _move()
      } else if (props.isHover) {
        clearTimeout(_timer)
      }
    })

    return { trans }
  }
})
</script>
