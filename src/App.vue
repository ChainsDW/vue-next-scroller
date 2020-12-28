<template>
  <scroll><scroll :height="25" :data="cols" :ease="false" :speed="500" :hold-up="1000" :show-line="2">
    <div style="height: 25px" v-for="item in cols" :key="item" @click="handleClick(item)">{{ item }}</div>
  </scroll></scroll>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import scroll from './components/scroll.vue'

export default defineComponent({
  name: 'App',
  components: {
    scroll
  },
  setup () {
    const cols = ref(['第一行', '第二行', '第三行', '第四行', '第五行'])

    const handleClick = () => {
      console.log('click')
    }

    return { cols, handleClick }
  }
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
