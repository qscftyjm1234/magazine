<!-- #by.gino -->
<script setup>
import { ref } from "vue";
import { isMobile } from "../../composables/common.js"; // 手機板
// # 變數區
const magazine = ref({
    img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fb%2F7%2F4%2Fbb6feb34-75db-4d19-aa03-d61cf0d4acc21687921819.jpg/?w=233",
    title: "正念減痛",
    date: "康健 296 期 2023-07-01",
    sub: "心靈科學與醫學相遇，慢性疼痛治療最新國際趨勢",
    des: `全台十分之一的人受慢性疼痛所苦，熟齡族隨年齡增長更達45～80％以上，止痛藥與安眠藥因此成了許多人的好朋友。
        《康健》25週年〈真健康〉系列第4位世界級客座總編輯──「當代正念之父」喬．卡巴金，將正念減痛導入現代醫學現場，
        用全新視角讓心靈科學與醫學相遇，為數百萬患者帶離無盡迴旋的疼痛。如今全球已經有數百間正統醫療院所，追隨喬．卡巴
        金，將正念導入疼痛治療。 究竟慢性疼痛有沒有根本原因？為什麼正念減壓會對疼痛治療有效？本期從科學實證、歐美及台
        灣醫療臨床應用出發，介紹慢性疼痛治療最新國際趨勢。並整理「正念減痛的8種態度」，從日常中培養正念減壓習慣，能夠
        長期幫助與疼痛共處。`,
});
// 取自康健官網 by.gino
// # 方法區
</script>
<template>
    <div class="w-full shadow-sm flex justify-center bg-white" v-if="!isMobile()">
        <div class="w-full flex justify-center">
            <section class="w-[1200px] flex items-center justify-between">
                <div class="container py-5 mx-auto flex">
                    <!-- 當期雜誌 -->
                    <div class="w-9/12 mr-2">
                        <div class="flex flex-col">
                            <div
                                class="flex flex-wrap items-end sm:flex-row flex-col py-6"
                            >
                                <h1
                                    class="sm:w-2/5 text-gray-900 title-font text-3xl sm:mb-0 font-black"
                                >
                                    當期雜誌
                                </h1>
                            </div>
                        </div>
                        <div class="bg-gray-100 mb-3 flex p-4">
                            <div
                                class="h-full shrink-0"
                            >
                                <img
                                    :src="magazine.img"
                                    :alt="magazine.title"
                                    class="object-cover"
                                />
                            </div>
                            <div>
                                <!-- 當期雜誌內容 -->
                                <div class="px-8">
                                    <h1 class="font-black text-2xl">
                                        {{ magazine.title }}
                                    </h1>
                                    <div class="text-gray-600 my-2">{{ magazine.date }}</div>
                                    <h3 class="font-black text-lg line-clamp-2 leading-6 my-2">
                                        {{ magazine.sub }}
                                    </h3>
                                    <p class="leading-7">
                                        {{ magazine.des }}
                                    </p>
                                    <div class="flex mt-4">
                                        <button
                                            type="button"
                                            class="mr-4 rounded-full bg-green-400 px-8 py-2 font-bold text-white sm:mt-0 sm:w-auto"
                                        >
                                            查案目錄 >
                                        </button>
                                        <button
                                            type="button"
                                            class="mr-4 w-4/12 rounded-full bg-orange-400 px-8 py-2 font-bold text-white sm:mt-0 sm:w-auto"
                                        >
                                            購買本期 >
                                        </button>
                                        <button
                                            type="button"
                                            class="mr-4 rounded-full bg-orange-400 px-8 py-2 font-bold text-white sm:mt-0 sm:w-auto"
                                        >
                                            訂閱雜誌 >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 廣告AD -->
                    <div
                        class="w-3/12 bg-white flex items-center justify-center border"
                    >
                        廣告AD區
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
