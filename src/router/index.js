import { createRouter, createWebHistory} from 'vue-router'
// 非動態載入
import Home from "../views/HomeView/HomeView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 首頁
        {
            path: "/",
            name: "home",
            component: Home,
        },
        // {
        //     path: "/q1",
        //     name: "q1",
        //     component: () => import("../views/Q1View.vue"),
        // },
        // 404 part輸入錯誤導入，放置最後
        {
            path: "/:domain(.*)*", // 斜線後面接冒號，後面接的路由隨意取名，亂輸入，盤到404
            name:  "notFound",
            component: () => import("../views/404.vue"),
        }
    ],
})

export default router