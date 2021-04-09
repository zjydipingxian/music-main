import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 移动端适配
import 'lib-flexible/flexible.js'
// 引入全局样式文件
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).mount('#app')
