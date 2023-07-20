<!-- #by.gino -->
<script setup>
    import { ref } from "vue";
    import { isMobile } from "../../composables/common.js"; // 手機板
    // # 變數區
    const themes = ref(["數位專題", "失智", "糖尿病", "高血壓", "運動"]);
    const dog = ref("0");
    const hotThemes = ref([
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F3%2Fc%2F4%2F3f2ab5a8-c185-40e5-bcc9-29558994ed171688614080.jpg/?w=300",
            type: "數位專題",
            title: "聽康健　打開耳朵，讓健康成為生活",
            des: "康健用聽的！每週一至週五提供最新、最好上手的身心靈健康知識和解方，幫助你輕鬆變健康。",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F9%2Fb%2F4%2F9956327e-bd54-46c9-87f5-124b52c30b0c1687918008.jpg/?w=300",
            type: "數位專題",
            title: "【營養師輕食】江欣樺營養師教你益生菌怎麼挑及保健食品全解析",
            des: "最專業的保健食品推薦指南！你知道益生菌有黑箱嗎？你買的魚油對身體有沒有害？魚油功效有哪些？孕婦綜合維他命吃多少？特邀業界...",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F9%2Fd%2F4%2F9c728bda-db3b-4c8c-8b22-92b4b24088201683175469.jpg/?w=300",
            type: "數位專題",
            title: "失眠對策　戰勝失眠、告別疲累，教你安睡到天亮",
            des: "成人建議睡眠時數是7～9小時，然而不只睡眠不足很困擾，失眠、睡不好還會影響白天活動，增加罹患身心疾病的風險。失眠怎麼辦？6...",
        },
    ]);
    const hotAuthors = ref([
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F0%2Fb%2F4%2F0cb33d87-b2f7-482a-9ad5-909c448e85161672121422.jpg/?w=150",
            type: "飲食新知",
            title: "【楊定一專欄】高營養、高熱量的天然飲食　吃好吃飽回到健康",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F3%2Fd%2F4%2F310ef330-d100-4388-9fef-30cbb16417861559896765.jpg/?w=150",
            type: "其他疾病",
            title: "好好健康的人，怎麼會猝死？",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcw1.tw%2FCH%2Fimages%2Fexpert_doctor%2F37c122d6-00ff-478c-b94d-f2b13f7327b3.jpg/?w=150",
            type: "生活保健",
            title: "養生醫師不藏私　10大紓緩頭痛妙招",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F3%2F4%2F4%2F38b97d6a-4084-4b8a-ace6-1be0fbdbf9bb1559806165.jpg/?w=150",
            type: "飲食新知",
            title: "長期全身痠痛，其實是你的飲食出了問題！",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcw1.tw%2FCH%2Fimages%2Fexpert_doctor%2F37c122d6-00ff-478c-b94d-f2b13f7327b3.jpg/?w=150",
            type: "其他疾病",
            title: "骨折後冬季調養》天冷又下雨，舊傷處開始痠痛，怎麼辦？",
        },
        {
            img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fc%2Fb%2F4%2Fcf2b1865-b30a-4fd8-8907-2961e834b62e1665135385.png/?w=150",
            type: "藥物知識",
            title: "中西藥間隔時間夠就沒問題了嗎？如何才能讓中西藥1+1>2？",
        },
    ]);
    const cardsIndex = ref(0);
    // # 方法區
</script>
<template>
    <div class="w-full shadow-sm flex justify-center bg-white" v-if="!isMobile()">
        <div class="w-full flex justify-center">
            <section class="w-[1200px] flex items-center justify-between">
                <div class="container py-5 mx-auto flex">
                    <!-- 熱門主題 -->
                    <div class="w-9/12 mr-2">
                        <div class="flex flex-col">
                            <div
                                class="flex flex-wrap items-end sm:flex-row flex-col py-6"
                            >
                                <h1
                                    class="sm:w-2/5 text-gray-900 title-font text-3xl sm:mb-0 font-black"
                                >
                                    熱門主題
                                </h1>
                            </div>
                        </div>
                        <div class="rounded-sm bg-gray-100 overflow-hidden">
                            <button
                                v-for="(theme, index) in themes"
                                @click="dog = index"
                                class="py-[10px] sm:py-2 my-1 px-[12px] sm:px-6 inline-flex items-center justify-center border-right-2 border-right-gray-100 text-center focus:bg-primary text-sm sm:text-base capitalize font-black"
                                :class="
                                    dog == index
                                        ? 'text-white border-green-500 bg-green-500'
                                        : ' border-gray-50 text-black'
                                "
                                :key="index"
                            >
                                {{ theme }}
                            </button>
                        </div>
                        <div class="bg-gray-100 p-2 mt-3">
                            <div
                                class="flex mb-6 border-b-slate-200 border-b-2 pb-6"
                                v-for="(hotTheme, index) in hotThemes"
                                :key="index"
                            >
                                <!-- 熱門照片 -->
                                <div
                                    class="w-[300px] h-[180px] shrink-0 rounded-md overflow-hidden mr-2"
                                >
                                    <img
                                        :src="hotTheme.img"
                                        :alt="hotTheme.title"
                                        class="object-cover"
                                    />
                                </div>
                                <!-- 熱門資訊 -->
                                <div class="p-2">
                                    <h3
                                        class="text-green-500 font-black before:content-['|'] before:bg-green-500 before:mr-1"
                                    >
                                        {{ hotTheme.type }}
                                    </h3>
                                    <h1 class="font-extrabold text-xl">
                                        {{ hotTheme.title }}
                                    </h1>
                                    <span class="mt-2 block text-base">
                                        {{ hotTheme.des }}</span
                                    >
                                </div>
                            </div>
                            <div class="flex justify-end cursor-pointer">
                                <div class="mr-2">更多數位專題文章</div>
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
                    <!-- 熱門名家專欄 -->
                    <div class="w-3/12 h-100 bg-white">
                        <div class="flex flex-col">
                            <div
                                class="flex flex-wrap items-end sm:flex-row flex-col py-6"
                            >
                                <h1
                                    class="text-gray-900 title-font text-3xl sm:mb-0 font-black"
                                >
                                    熱門名家專欄
                                </h1>
                            </div>
                        </div>
                        <div class="bg-gray-100 p-2">
                            <div
                                class="flex mb-4"
                                v-for="(hotAuthor, index) in hotAuthors"
                                :key="index"
                            >
                                <!-- 熱門照片 -->
                                <div
                                    class="w-[90px] h-[90px] shrink-0 rounded-full overflow-hidden mr-2"
                                >
                                    <img
                                        :src="hotAuthor.img"
                                        :alt="hotAuthor.title"
                                        class="object-cover"
                                    />
                                </div>
                                <!-- 熱門資訊 -->
                                <div class="p-2">
                                    <h3
                                        class="text-green-500 font-black before:content-['|'] before:bg-green-500 before:mr-1 text-xl"
                                    >
                                        {{ hotAuthor.type }}
                                    </h3>
                                    <h1 class="font-extrabold text-xl line-clamp-2">
                                        {{ hotAuthor.title }}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="container px-4" v-else>
        <div class="flex flex-col">
            <div class="flex justify-between items-center mb-6">
                <h1 class="title-font text-3xl sm:mb-0 font-extrabold">
                    熱門主題
                </h1>
                <div class="flex">
                    <div
                        class="w-[28px] h-[12px] bg-gray-200 mr-2 cursor-pointer"
                        :class="
                            cardsIndex == 0
                                ? 'bg-green-500'
                                : 'bg-gray-200'
                        "
                        @click="cardsIndex = 0"
                    ></div>
                    <div
                        class="w-[28px] h-[12px] bg-gray-200 cursor-pointer"
                        :class="
                            cardsIndex == 1
                                ? 'bg-green-500'
                                : 'bg-gray-200'
                        "
                        @click="cardsIndex = 1"
                    ></div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap">
            <div>
                <div class="rounded-sm bg-gray-100 overflow-hidden">
                    <button
                        v-for="(theme, index) in themes"
                        @click="dog = index"
                        class="py-[10px] sm:py-2 my-1 px-[12px] sm:px-6 inline-flex items-center justify-center border-right-2 border-right-gray-100 text-center focus:bg-primary text-sm sm:text-base capitalize font-black"
                        :class="
                            dog == index
                                ? 'text-white border-green-500 bg-green-500'
                                : ' border-gray-50 text-black'
                        "
                        :key="index"
                    >
                        {{ theme }}
                    </button>
                </div>
                <div class="bg-gray-100 p-2 mt-3">
                    <div
                        class="flex border-b-slate-200 border-b-2 py-2"
                        v-for="(hotTheme, index) in hotThemes"
                        :key="index"
                    >
                        <!-- 熱門照片 -->
                        <div
                            class="w-[120px] h-[72px] shrink-0 rounded-md overflow-hidden mr-3"
                        >
                            <img
                                :src="hotTheme.img"
                                :alt="hotTheme.title"
                                class="object-cover"
                            />
                        </div>
                        <!-- 熱門資訊 -->
                        <div>
                            <h3
                                class="text-green-500 font-black before:content-['|'] before:bg-green-500 before:mr-1"
                            >
                                {{ hotTheme.type }}
                            </h3>
                            <h1 class="font-extrabold text-lg line-clamp-2">
                                {{ hotTheme.title }}
                            </h1>
                        </div>
                    </div>
                    <div class="flex justify-end cursor-pointer mt-2">
                        <div class="mr-2">更多數位專題文章</div>
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
        </div>
        <div
            class="bg-white flex items-center justify-center my-4 border h-[72px]"
        >
            廣告AD區
        </div>
    </div>
</template>
