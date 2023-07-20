<!-- #banner by.gino -->
<script setup>
import { ref } from "vue";
import { isMobile } from "../composables/common.js"; // 手機板
// # 變數
const footerDatas = ref([
    {
        title: "康健網站",
        childrens: ["康健雜誌", "大人社團", "康健知識庫", "樂活島", "康健線上學習", "直營書店"]
    },
    {
        title: "客戶/雜誌訂閱服務",
        childrens: ["會員中心", "查詢訂戶編號", "讀者服務專線：886-2-2662-0332", "會員服務條款", "查詢訂閱到期日", "服務時間：週一至週五 9:00~17:30", "更改收件地址",]
    },
    {
        title: "追蹤康健",
        childrens: ["Facebook", "Youtube", "Line", "Instagram"]
    },
]);
// by.gino 應該要用物件包裹連結，節省時間先放純文字
const footerDatasA = ref(["關於康健", "廣告刊登", "內容授權", "著作權聲明", "使用者條款", "書籍投稿", "人才招募", "隱私權政策"])
</script>

<template>
    <footer class="bg-green-500 text-gray-600 body-font" v-if="!isMobile()">
        <div class="w-[1200px] container py-6 mx-auto">
            <div class="w-full md:text-left text-center order-first flex">
                <!-- lg:w-1/4 md:w-1/2  -->
                <div 
                    v-for="(footerData, footerDataIndex) in footerDatas"
                    :key="footerDataIndex"
                    :class="footerDataIndex == 1 ? 'flex-shrink-1' : 'flex-shrink-1'"
                >
                    <h2
                        class="title-font font-bold text-yellow-200 tracking-widest text-xl mb-2"
                    >
                        {{ footerData.title }}
                    </h2>
                    <nav class="list-none flex-wrap flex">
                        <li 
                            class="w-6/12 pb-2 break-keep"
                            v-for="(children, childrenIndex) in footerData.childrens"
                            :key="childrenIndex"
                        >
                            <a href class="text-white font-bold break-keep">{{ children }}</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div class="bg-gray-200">
            <div class="w-[1200px] container py-4 mx-auto flex items-center sm:flex-row flex-col justify-between">
                <p class="text-sm text-gray-950 sm:mt-0 mt-4 mx-0">
                    Copyright © 2023 康健雜誌（天下生活出版股份有限公司）. All rights reserved.
                </p>
                <div>
                    <span 
                        class="mx-1 text-sm text-gray-950"
                        v-for="(children, childrenIndex) in footerDatasA"
                        :key="childrenIndex"
                    >  
                        {{ children }}
                    </span>
                </div>
            </div>
        </div>
    </footer>
    <footer class="bg-green-500 text-gray-600 body-font" v-else>
        <div class="p-2">
            <div class="text-white flex items-center justify-center">
                <div class="mr-2">客戶 / 雜誌訂閱服務</div>
                <svg class="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
        </div>
        <div class="py-2 text-center bg-white">
            <div class="w-[350px] mx-auto border-b-2 my-2 mb-2 pb-2 border-gray-100">
                <span 
                    class="p-1 text-sm text-green-500 font-bold"
                    v-for="(children, childrenIndex) in footerDatasA"
                    :key="childrenIndex"
                >  
                    {{ children }}
                </span>
            </div>
            <p class="text-sm text-gray-950 mt-2 w-[350px] mx-auto">
                讀者服務專線：886-2-2662-0332
            </p>
            <p class="text-sm text-gray-950 mt-2 w-[350px] mx-auto">
                服務時間：週一至週五 9:00~17:30
            </p>
            <p class="text-sm text-gray-950 mt-2 w-[350px] mx-auto">
                Copyright © 2023 康健雜誌（天下生活出版股份有限公司）. All rights reserved.
            </p>
        </div>
    </footer>
</template>
