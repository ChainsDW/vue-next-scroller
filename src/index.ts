import scroll from './scroll/scroll.vue'
import { App } from 'vue'

scroll.install = (app: App): void => { app.component(scroll.name, scroll) }

export default scroll
