import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 创建并挂载根实例
const app = createApp(App)

//整个应用支持路由。
app.use(router)
app.mount('#app')
