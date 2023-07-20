<!-- #Navbars by.gino -->
<script setup>
import { ref } from "vue";
import { isMobile } from "../../composables/common.js"; // 手機板
import Carousel from '../../components/Carousel.vue'; // Carousel
// # 變數區
const hashtags = ref(["不分癌", "常見治療問題", "常見問題"]);

</script>
<template>
    <div class="w-full shadow-sm flex justify-center bg-gray-100 py-4" v-if="!isMobile()">
        <div class="w-full flex justify-center bg-gray-100 py-10">
            <section class="w-[1200px] flex items-center justify-between">
                <div class="w-4/12">
                    <div class="flex items-center mb-4">
                        <span
                            class="tracking-widest inline-flex items-center rounded-full bg-gray-500 px-2 py-0 mr-3 text-sm text-white ring-1 ring-inset"
                        >
                            ▸影音
                        </span>
                        <span
                            v-for="(hashtag, index) in hashtags"
                            :key="index"
                            class="mr-3"
                            style="color: #b38e5b"
                        >
                            #{{ hashtag }}
                        </span>
                    </div>
                    <h1 class="text-4xl font-bold tracking-wider leading-tight">
                        疫情期間，癌症化療病人尿不出來又怕掛急診染疫，怎麼辦?
                    </h1>
                    <div class="flex w-full align-center justify-center mt-20">
                        <button
                            type="button"
                            class="rounded-full bg-white px-8 py-2 font-bold text-orange-400 ring-1 ring-inset ring-orange-400 hover:bg-orange-400 hover:text-white sm:mt-0 sm:w-auto"
                        >
                            立即閱讀
                        </button>
                    </div>
                </div>
                <div class="w-8/12">
                    <!-- 使用pagination功能 -->
                    <Carousel />
                </div>
            </section>
        </div>
    </div>
    <div class="py-8 px-4" v-else>
        <Carousel />
        <div class="flex items-center my-4">
            <span
                class="tracking-widest inline-flex items-center rounded-full bg-gray-500 px-2 py-0 mr-3 text-sm text-white ring-1 ring-inset"
            >
                ▸影音
            </span>
            <span
                v-for="(hashtag, index) in hashtags"
                :key="index"
                class="mr-3"
                style="color: #b38e5b"
            >
                #{{ hashtag }}
            </span>
        </div>
        <h1 class="text-3xl font-extrabold tracking-wider leading-tight">
            疫情期間，癌症化療病人尿不出來又怕掛急診染疫，怎麼辦?
        </h1>
        <div class="flex w-full align-center justify-center mt-8">
            <button
                type="button"
                class="rounded-full bg-white px-8 py-2 font-bold text-orange-400 ring-1 ring-inset ring-orange-400 hover:bg-orange-400 hover:text-white sm:mt-0 sm:w-auto"
            >
                立即閱讀
            </button>
        </div>
    </div>
</template>
