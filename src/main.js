

import { createApp } from 'vue'
import "tailwindcss/tailwind.css" // 使用css的套件 ****ps.這套件我比較少用，但最近看起來蠻主流的，拿來試試
import './style.css'
import App from './App.vue' // 掛載vue實體
import router from './router' // 路由 by.gino 原本想多做幾個頁面，但周五要出遊到下周三，就沒使用到太多router東西

const app = createApp(App);
app.use(router);
app.mount('#app');

