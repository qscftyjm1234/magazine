<!-- #by.gino -->
<script setup>
    import { ref } from "vue";
    import { isMobile } from "../../composables/common.js"; // 手機板
    // # 變數區
    const news = ref([
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fe%2Fe%2F4%2Fe764d33f-e7d7-404d-9a68-8ba4201bf0571689072143.jpg/?w=610",
            type: "特別企劃",
            title: "2023呼吸覺醒綠肺論壇》你吸進去的每一口空氣，會讓你生病嗎？",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F2%2Fb%2F4%2F29b5ab75-b2f7-4b23-8029-3ea842056d951688720873.png/?w=610",
            type: "特別企劃",
            title: "濕疹、汗皰疹、異位性&脂漏性皮膚炎　台灣人最嚴重的皮膚問題",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F3%2Fc%2F4%2F3f2ab5a8-c185-40e5-bcc9-29558994ed171688614080.jpg/?w=610",
            type: "特別企劃",
            title: "聽康健　打開耳朵，讓健康成為生活",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F0%2F2%2F4%2F0f8f33fc-26ba-489a-9862-dff153335b6e1688528886.jpg/?w=610",
            type: "特別企劃",
            title: "露營車旅行指南　豪華露營車、舊車改造、新手露營一次看",
        },
    ]);
    const hoverKey = ref(0);
    // # 方法區
</script>
<template>
    <div class="w-full shadow-sm flex justify-center bg-white" v-if="!isMobile()">
        <div class="w-full flex justify-center">
            <section class="w-[1200px] flex items-center justify-between">
                <div class="container py-5 mx-auto flex">
                    <!-- 最新特色內容 -->
                    <div class="w-9/12 mr-2">
                        <div class="flex flex-col">
                            <div
                                class="flex flex-wrap items-end sm:flex-row flex-col py-6"
                            >
                                <h1
                                    class="sm:w-2/5 text-gray-900 title-font text-3xl sm:mb-0 font-black"
                                >
                                    最新特色內容
                                </h1>
                            </div>
                        </div>
                        <div class="bg-white mb-3 flex">
                            <div
                                class="h-full shrink-0"
                            >
                                <img
                                    :src="news[hoverKey].img"
                                    :alt="news[hoverKey].title"
                                    class="object-cover"
                                />
                            </div>
                            <div>
                                <div
                                    class="bg-gray-100 border-b-slate-200 border-b-2 px-2 cursor-pointer"
                                    v-for="(newItem, index) in news"
                                    @mouseenter="hoverKey = index"
                                    :class="hoverKey == index ? 'bg-green-500 text-white' : 'bg-gray-100'"
                                    :key="index"
                                >
                                    <!-- 最新特色內容 -->
                                    <div class="p-2">
                                        <h3
                                            class="text-orange-400 font-black before:content-['|'] before:bg-orange-400 before:mr-1"
                                        >
                                            {{ newItem.type }}
                                        </h3>
                                        <h1 class="font-black text-lg line-clamp-2 leading-6">
                                            {{ newItem.title }}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end cursor-pointer">
                            <div class="mr-2">更多最心特色內容</div>
                            <svg
                                class="h-6 w-6 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <!-- 廣告AD -->
                    <div
                        class="w-3/12 h-100 bg-white flex items-center justify-center border"
                    >
                        廣告AD區
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="container px-4" v-else>
        <div class="flex flex-col">
            <div
                class="flex justify-between items-center mb-6"
            >
                <h1 class="title-font text-3xl sm:mb-0 font-extrabold">
                    最新特色內容
                </h1>
            </div>
        </div>
        <div class="bg-white">
            <div
                class="flex border-b-slate-200 border-b-2 py-2"
                v-for="(newItem, index) in news"
                :key="index"
            >
                <!-- 熱門照片 -->
                <div
                    class="w-[120px] h-[72px] shrink-0 rounded-md overflow-hidden mr-3"
                >
                    <img
                        :src="newItem.img"
                        :alt="newItem.title"
                        class="object-cover"
                    />
                </div>
                <!-- 熱門資訊 -->
                <div>
                    <h3
                        class="text-green-500 font-black before:content-['|'] before:bg-green-500 before:mr-1"
                    >
                        {{ newItem.type }}
                    </h3>
                    <h1 class="font-extrabold text-lg line-clamp-2">
                        {{ newItem.title }}
                    </h1>
                </div>
            </div>
            <div class="flex justify-end cursor-pointer my-2">
                <div class="mr-2">更多最新內容</div>
                <svg
                    class="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>
