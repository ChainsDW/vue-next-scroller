# A scrolling for vue3.js

## Install
```
npm install vue-scroller-next --save
or
yarn add vue-scroller-next
```

## Properties
#### data
- type: `Array`
- required: `true`  
the data of scrolling
#### height
- type: `number`
- required: `true`  
the height of one line. (unit: `px`)
#### ease
- type: `boolean`
- required: `false`
- default: `false`  
CSS animation, `false` means `liner`, `true` means `ease-in-out`
#### speed
- type: `number`
- required: `false`
- default: `1000`  
unit: `ms`, the time range for scrolling a line
#### holdUp
- type: `number`
- required: `false`
- default: `1000`  
unit: `ms`, Stay after scrolling
#### showLine
- type: `number`
- required: `false`
- default: `1`  
The number of rows displayed

## Example
[DEMO](https://chainsdw.github.io/vue-next-scroller/)
```vue
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

```