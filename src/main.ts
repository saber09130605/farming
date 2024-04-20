import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
const pinia = createPinia();
app.use(ElementPlus)
app.use(pinia);
app.use(router)
app.mount('#app')
