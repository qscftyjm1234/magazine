

import { createApp } from 'vue'
import "tailwindcss/tailwind.css" // 使用css的套件
import './style.css'
import App from './App.vue' // 掛載vue實體
import router from './router' // 路由

const app = createApp(App);
app.use(router);
app.mount('#app');

