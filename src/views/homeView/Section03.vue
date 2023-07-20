<!-- #by.gino -->
<script setup>
import { ref } from "vue";
import { isMobile } from "../../composables/common.js"; // 手機板
// # 變數區
const bookDatas = ref([
    {
        // 書本資料
        book: {
            bookImg:
                "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F8%2F3%2F4%2F8d520b2a-35b7-4489-aa24-d950d3f00a2e1686557086.jpg/?w=175",
            bookTitle: "中醫養生",
            bookName: "扶正的力量",
            auther: "許中華",
        },
        // 文章資料
        articles: [
            {
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fc%2Fa%2F4%2Fcc15b6cf-ab55-48bf-a0af-c081ad28f8ea1686563284.jpg/?w=180",
                title: "為何有些人是「天選之人」，有些得到「無敵星星」仍會一再染疫？中醫師這麼說...",
            },
            {
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fb%2F3%2F4%2Fbc2e7d1a-37af-4e64-9702-c0deeb5fc6711686564131.jpg/?w=180",
                title: "找到扶正的力量，重建身心靈和諧，病邪才不會乘虛而入！",
            },
            {
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fa%2F4%2F4%2Fa6ebf665-4dd9-4e58-bd6a-88499f6e4be31686638401.jpg/?w=180",
                title: "中醫師探索醫學奇蹟的背後，喚醒自癒力、免疫力、生命力的要角，在於「這個」！",
            },
        ],
    },
    {
        // 書本資料
        book: {
            bookImg:
                "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fb%2F9%2F4%2Fb6020e7b-9072-4a5a-8051-0df6c2a17a811683792404.jpg/?w=175",
            bookTitle: "醫療保健",
            bookName: "劉博仁功能醫學癌症大調理",
            auther: "劉博仁",
        },
        // 文章資料
        articles: [
            {
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F9%2F4%2F4%2F9ca00113-4b41-4d89-a761-e5b72fef85ce1683858494.jpg/?w=180",
                title: "食療很重要：為什麼癌友必須隨時了解自己的身體變化？",
            },
            {
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F5%2F3%2F4%2F5ac52d57-301a-4864-b6fc-41431520f1601683862003.jpg/?w=180",
                title: "劉博仁：癌症不同，因此抗癌方式也有所不同",
            },
            {
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F0%2Fa%2F4%2F0c41a4f2-a412-4c19-86ec-78ef7570d5441683869888.jpg/?w=180",
                title: "劉博仁：運動永遠不嫌遲，鍛練身體如何降低癌症的復發率",
            },
        ],
    },
]);
const cardsIndex = ref(0);
// # 方法區
</script>
<template>
    <div class="w-full shadow-sm flex justify-center bg-white" v-if="!isMobile()">
        <div class="w-full flex justify-center">
            <section class="w-[1200px] flex items-center justify-between">
                <div class="container py-5 mx-auto">
                    <div class="flex flex-col">
                        <div
                            class="flex flex-wrap items-end sm:flex-row flex-col mb-6"
                        >
                            <h1
                                class="sm:w-2/5 text-gray-900 title-font text-3xl sm:mb-0 font-extrabold"
                            >
                                好書推薦區
                            </h1>
                        </div>
                    </div>
                    <div class="container mx-auto flex">
                        <!-- 好書推薦區 -->
                        <div class="w-9/12 bg-gray-100 p-4 flex mr-2">
                            <div
                                class="w-6/12 mx-2"
                                v-for="(bookData, index) in bookDatas"
                                :key="index"
                            >
                                <div
                                    class="triangle bg-white p-8 flex shadow-lg mb-10 rounded-lg"
                                >
                                    <!-- 書籍照片 -->
                                    <div
                                        class="w-[175px] h-[234px] shrink-0 border"
                                    >
                                        <img
                                            :src="bookData.book.bookImg"
                                            alt="放搜尋關鍵字"
                                            class="object-cover"
                                        />
                                    </div>
                                    <!-- 書籍資訊 -->
                                    <div class="p-2">
                                        <h3
                                            class="text-green-500 font-black before:content-['|'] before:bg-green-500 before:mr-1"
                                        >
                                            {{ bookData.book.bookTitle }}
                                        </h3>
                                        <h1 class="font-extrabold text-2xl">
                                            {{ bookData.book.bookName }}
                                        </h1>
                                        <span
                                            class="mt-2 block text-gray-400 text-base"
                                            >作者 /
                                            {{ bookData.book.auther }}</span
                                        >
                                    </div>
                                </div>
                                <!-- 文章區 -->
                                <div class="mt-4">
                                    <div
                                        class="flex my-3 py-3 border-b-2 border-b-stone-200"
                                        v-for="(
                                            article, index
                                        ) in bookData.articles"
                                        :key="index"
                                    >
                                        <div
                                            class="w-[120px] h-[72px] shrink-0 overflow-hidden rounded-lg"
                                        >
                                            <img
                                                :src="article.img"
                                                alt=""
                                                class="object-cover"
                                            />
                                        </div>
                                        <div class="font-black ml-3">
                                            {{ article.title }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 廣告區 -->
                        <div
                            class="w-3/12 h-100 bg-white flex items-center justify-center border"
                        >
                            廣告AD區
                        </div>
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
                    好書推薦區
                </h1>
                <div class="flex">
                    <div
                        v-for="index of bookDatas.length"
                        :key="index - 1"
                        class="w-[28px] h-[12px] bg-gray-200 mr-2 cursor-pointer"
                        :class="
                            cardsIndex == (index - 1)
                                ? 'bg-green-500'
                                : 'bg-gray-200'
                        "
                        @click="cardsIndex = (index - 1)"
                    ></div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap">
            <div class="triangle bg-white p-2 flex shadow-lg rounded-lg w-full">
                <!-- 書籍照片 -->
                <div
                    class="w-[175px] h-[234px] shrink-0 border"
                >
                    <img
                        :src="bookDatas[cardsIndex].book.bookImg"
                        alt="放搜尋關鍵字"
                        class="object-cover"
                    />
                </div>
                <!-- 書籍資訊 -->
                <div class="p-2">
                    <h3
                        class="text-lg text-green-500 font-black before:content-['|'] before:bg-green-500 before:mr-1"
                    >
                        {{ bookDatas[cardsIndex].book.bookTitle }}
                    </h3>
                    <h1 class="font-extrabold text-2xl">
                        {{ bookDatas[cardsIndex].book.bookName }}
                    </h1>
                    <span
                        class="mt-2 block text-gray-400 text-base"
                        >作者 /
                        {{ bookDatas[cardsIndex].book.auther }}</span
                    >
                </div>
            </div>
            <!-- 文章區 -->
            <div>
                <div
                    class="flex my-3 py-3 border-b-2 border-b-stone-200"
                    v-for="(article, index) in bookDatas[cardsIndex].articles"
                    :key="index"
                >
                    <div
                        class="w-[120px] h-[72px] shrink-0 overflow-hidden rounded-lg"
                    >
                        <img
                            :src="article.img"
                            alt=""
                            class="object-cover"
                        />
                    </div>
                    <div class="font-black ml-3 line-clamp-2">
                        {{ article.title }}
                    </div>
                </div>
                <div class="flex justify-end cursor-pointer">
                    <div class="mr-2">更多經典書籍</div>
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
</template>
