<!-- #by.gino -->
<script setup>
    import { ref, onMounted } from "vue";
    import { isMobile } from "../../composables/common.js"; // 手機板
    // # 變數區
    // *取自康健官網
    const cardsIndex = ref(0);
    const cards = ref([
        [
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fc%2Fb%2F4%2Fc8e2a7fc-bded-4435-97ac-66237c6e06e51689729239.jpg/?w=380",
                title: "數位游牧者該如何拿捏工作與生活的分際？",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F0%2F2%2F4%2F0dbad6ab-2af5-49c2-bfa7-7aacd50c258d1689676488.jpg/?w=380",
                title: "數位游牧最難跨出的第一步是什麼？你怎麼知道自己準備好了？",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fd%2F0%2F4%2Fd259bb55-0e73-4267-89e6-897c730b58031689666567.jpg/?w=380",
                title: "產後需要喬骨盆嗎？生完多久才能喬？中醫師來解惑",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F0%2F3%2F4%2F06de0573-3b38-4b4d-9db3-3bd679140fec1689232137.jpg/?w=380",
                title: "走在回家的路上──「缺席父親」如何突破困境，成為孩子的庇護者",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F9%2Fd%2F4%2F9ede15a1-d030-4ea7-8a3f-b823d43713681689672500.jpg/?w=380",
                title: "昏迷指數定義？如何判定腦死、植物人？計算量表一次看",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F2%2Fe%2F4%2F2c73fc3b-ede6-424b-8925-aef122d3f81a1689668806.jpg/?w=380",
                title: "我為什麼可以成功數位游牧？這一個心態絕對不能少！",
            },
        ],
        [
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F7%2F9%2F4%2F7343634a-98e7-441e-a032-d1c3b39ae9341687863768.jpg/?w=380",
                title: "大腸鏡即時AI輔助偵測 微小病灶也無所遁形",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F7%2Fb%2F4%2F706f523a-bf08-416e-85f3-854964684f0b1689587621.jpg/?w=380",
                title: "早上習慣喝1杯咖啡？提神醒腦關鍵竟不是「咖啡因」",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F2%2F3%2F4%2F284c3947-35ab-4792-989c-9fa9bfb7d58a1689587863.jpg/?w=380",
                title: "葡萄柚不能和8種藥一起吃！葡萄柚功效、禁忌一次看",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F2%2F6%2F4%2F208b72aa-61e8-43e1-b611-1440796c89ee1689581244.jpg/?w=380",
                title: "讓他做個被愛的失智者　醫：陪他一起冒險、探索世界",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2Fe%2Fb%2F4%2Feaeb51e8-bc99-4709-a75f-35fe1b7c59a81689581125.jpg/?w=380",
                title: "數位游牧：在國外遠距工作也可以擁有好收入？",
            },
            {
                type: "其他疾病",
                img: "https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fas.chdev.tw%2Fweb%2Farticle%2F9%2F6%2F4%2F9a491ade-67b5-4c0d-83a1-efcd518d75481689579444.jpg/?w=380",
                title: "破傷風傷口5特徵注意，破傷風症狀、疫苗注射效期詳解",
            },
        ],
    ]);

    // # 方法區
    // 輪播(最好還是有套件，這裡暫時快速手寫)

    // # 生命週期
    onMounted(() => {
        window.setInterval((() => {
            cards.value.length - 1 == cardsIndex.value ? cardsIndex.value = 0 : cardsIndex.value++
        }), 2000);
    });
    const carousel = () => {
        // window.setInterval(( () => console.log("Hello!") ), 2000);
    };
</script>
<template>
    <div class="w-full shadow-sm flex justify-center bg-white" v-if="!isMobile()">
        <div class="w-full flex justify-center bg-white">
            <section class="w-[1200px] flex items-center justify-between">
                <div class="container py-5 mx-auto">
                    <div class="flex flex-col">
                        <div
                            class="flex flex-wrap justify-between items-end sm:flex-row flex-col py-6 mb-6"
                        >
                            <h1 class="sm:w-2/5 text-gray-900 title-font text-3xl sm:mb-0 font-extrabold">
                                最新文章
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
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div
                            class="p-4 md:w-1/3 sm:mb-0 mb-6 transition-opacity ease-in-out delay-150 duration-75"
                            v-for="(card, index) in cards[cardsIndex]"
                            :key="index"
                        >
							<div class="rounded-lg h-64 overflow-hidden">
								<img
									alt="content"
									class="object-cover object-center h-full w-full"
									:src="card.img"
								/>
							</div>
							<h2
								class="text-xl font-bold title-font text-gray-900 mt-5"
							>
								{{ card.title }}
							</h2>
							<a
								href="#"
								class="inline-flex items-center text-blue-500"
							>
								查看更多
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									class="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div v-else>
        <div class="container px-4">
            <div class="flex flex-col">
                <div
                    class="flex justify-between items-end py-6 mb-6"
                >
                    <h1 class="sm:w-2/5 text-gray-900 title-font text-3xl sm:mb-0 font-extrabold">
                        最新文章
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
                <div
                    class="mb-6 transition-opacity ease-in-out delay-150 duration-75 flex"
                    v-for="(card, index) in cards[cardsIndex]"
                    :key="index"
                >
                    <div class="rounded-lg overflow-hidden w-[120px] h-[72px] flex-shrink-0 mr-3">
                        <img
                            alt="content"
                            class="object-cover object-center h-full w-full"
                            :src="card.img"
                        />
                    </div>
                    <div>
                        <h3 class="text-green-500 font-black before:content-['|'] before:bg-green-500 before:mr-1">
                            {{ card.type }}
                        </h3>
                        <h2
                            class="text-xl font-bold title-font text-gray-900 line-clamp-2"
                        >
                            {{ card.title }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
