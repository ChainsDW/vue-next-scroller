<template>
  <scroll :height="20" :data="cols" :ease="false" :speed="500" :hold-up="1000" :show-line="2">
    <div style="height: 20px" v-for="item in cols" :key="item" @click="handleSearch">{{ item }}</div>
  </scroll>
</template>

<script lang="ts">
import scroll from './components/scroll.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      cols: [
        '第一行第一行第一行第一行第一行',
        '第二行第二行第二行第二行第二行',
        '第三行第三行第三行第三行第三行',
        '第四行第四行第四行第四行第四行',
        '第五行第五行第五行第五行第五行',
        '第六行第六行第六行第六行第六行']
    }
  },
  components: {
    scroll
  }
})
</script>

<style scoped lang="stylus">

</style>
