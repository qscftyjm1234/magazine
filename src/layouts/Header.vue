<!-- #Navbars by.gino -->
<script setup>
    import { ref, onMounted } from "vue";
    import { isMobile } from "../composables/common.js";
    // # 生命週期
    onMounted(() => {
        window.addEventListener(
            "scroll",
            function () {
                top.value = headerRef.value.getBoundingClientRect().top;
                if (top.value <= 0) {
                    isfixed.value = true;
                }
                if (document.documentElement.scrollTop == 0) {
                    isfixed.value = false;;
                }
            },
            true
        );
    });
    // # 變數區
    // # isToggle
    const isToggle = ref(false);
    const headerRef = ref("");
    // search搜尋bar
    const searchSalce = ref(false);
    // # 瀏覽器高度
    const top = ref(null);
    // # fixd stats
    const isfixed = ref(false);
    // # nav bar
    const navs = ref([
        {
            name: "健康焦點",
            router: "",
        },
        {
            name: "健康檢測",
            router: "",
        },
        {
            name: "論壇活動",
            router: "",
        },
        {
            name: "影音專區",
            router: "",
        },
        {
            name: "專案專欄",
            router: "",
        },
        {
            name: "健康書籍",
            router: "",
        },
        {
            name: "課程講座",
            router: "",
        },
        {
            name: "特色內容",
            router: "",
        },
    ])
    const searchBarSelect = ref([
        {
            name: "全部",
        },
        {
            name: "影音",
        },
        {
            name: "食譜",
        },
        {
            name: "課程",
        },
        {
            name: "特色內容",
        },
    ]);
    // # 方法區
</script>
<template>
    <!-- 非移動端 -->
    <nav
        v-if="!isMobile()"
        class="bg-white w-full shadow-sm flex justify-center z-50 py-2" 
        ref="headerRef"
        :class="isfixed ? 'fixed top-0' : 'relative'"
    >
        <div class="w-[1200px] flex items-center justify-between">
            <!-- menu icon -->
            <button
                data-collapse-toggle="navbar-hamburger"
                type="button"
                class="inline-flex items-center justify-center p-2 w-12 h-12 ml-3 text-sm text-gray-900 rounded-lghover:bg-gray-100 "
                aria-controls="navbar-hamburger"
                aria-expanded="false"
            >
                <svg 
                    class="h-8 w-8 text-gray-800 cursor-pointer"  
                    viewBox="0 0 24 24"  
                    fill="none"  
                    stroke="currentColor"  
                    stroke-width="2"  
                    stroke-linecap="round"  
                    stroke-linejoin="round"
                >  
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>
            <!-- logo -->
            <img
                class="h-[30px] lg:block hidden" 
                src="../assets/image/logo.jpg"
            >
            <!-- 依圖稿所放置 -->
            <img src="https://fakeimg.pl/327x30/?text=World&font=lobster" class="object-cover lg:block hidden">
            <!-- search bar -->
            <div class="flex bg-gray-0 px-4 w-120 space-x-4 rounded-full justify-between -200 border items-center">
                <select class="bg-white text-sm rounded-lg block border-0 focus:outline-none outline-none focus:ring-0">
                    <option v-for="(select, index) in searchBarSelect" :key="index">{{ select.name }}</option>
                </select>
                <input class="bg-gray-0 border-0 focus:outline-none outline-none focus:ring-0 w-[120px]" type="text" placeholder="請輸入關鍵字" />
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <!-- logoIn -->
            <div class="flex items-center">
                <label for="">會員限定</label>
                <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" class="h-[40px] inline-flex w-full justify-center items-center rounded-full bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto">加入會員</button>
                    <button type="button" class="h-[40px] inline-flex w-full justify-center items-center rounded-full bg-white px-3 py-2 text-sm font-semibold text-orange-400 shadow-sm ring-1 ring-inset ring-orange-400 hover:bg-gray-50 sm:mt-0 sm:w-auto">登入</button>
                </div>
            </div>
        </div>
        <div class="hidden w-full shadow-xl absolute top-[64px] z-40" id="navbar-hamburger">
            <ul
                class="flex flex-col font-medium bg-white"
            >
                <li
                    class="flex justify-between py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded border-t-2 border-gray-50 hover:bg-orange-400 hover:text-white"
                    v-for="(nav, index) in navs" 
                    :key="index"
                >
                    <a
                        href="#"
                    >
                        {{ nav.name }}
                    </a>
                    <div>
                        <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    <!-- 移動端 -->
    <nav
        class="w-screen bg-white flex items-center justify-between px-2 py-1 shadow-lg z-50"
        ref="headerRef"
        :class="isfixed ? 'fixed top-0' : 'relative'"
        v-else
    >   
        <div class="flex items-center w-full justify-between">
            <template v-if="isfixed">
                <div class="flex w-full justify-between py-2">
                    <!-- search bar -->
                    <div class="flex bg-gray-0 px-3 space-x-4 rounded-full justify-between border items-center text-sm w-full mr-2">
                        <div class="flex items-center">
                            <select class="bg-white text-sm rounded-lg block border-0 focus:outline-none outline-none focus:ring-0">
                                <option v-for="(select, index) in searchBarSelect" :key="index">{{ select.name }}</option>
                            </select>
                            <input 
                                class="bg-gray-0 border-0 focus:outline-none outline-none focus:ring-0 px-0 text-sm" 
                                type="text" 
                                placeholder="Search" 
                                :class="searchSalce ? 'grow-0' : 'w-[120px]'" 
                            />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30 cursor-pointer flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="searchSalce = true" v-if="!searchSalce">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <svg class="h-6 w-6 opacity-30 cursor-pointer flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="searchSalce = false" v-else>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                    <div class="bg-green-500 rounded-full text-white py-1 px-2 font-extrabold flex items-center justify-center text-sm flex-shrink-0 flex-grow-1" v-if="!searchSalce">
                        加入 LINE
                    </div>
                </div>
            </template>
            <div v-show="!isfixed" class="flex items-center w-full justify-between">
                <div class="flex items-center">
                    <button
                        data-collapse-toggle="navbar-hamburger"
                        type="button"
                        class="mr-2 inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-hamburger"
                        aria-expanded="false"
                    >
                        <!-- menu icon -->
                        <svg 
                            class="h-8 w-8 text-gray-800 cursor-pointer"  
                            viewBox="0 0 24 24"  
                            fill="none"  
                            stroke="currentColor"  
                            stroke-width="2"  
                            stroke-linecap="round"  
                            stroke-linejoin="round"
                        >  
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                    <!-- logo -->
                    <img
                        class="h-[24px]" 
                        src="../assets/image/logo.jpg"
                    >
                </div>
                <!-- logoIn -->
                <button type="button" class="inline-flex justify-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-orange-400 shadow-sm ring-1 ring-inset ring-orange-400 hover:bg-gray-50 sm:mt-0 sm:w-auto">登入</button>
                <div class="hidden w-full h-[180px] shadow-inherit absolute top-[48px] left-0 z-40" id="navbar-hamburger">
                    <div class="w-full p-2 flex items-center justify-center bg-white">
                        <img src="https://fakeimg.pl/350x60/?text=World&font=lobster" class="object-cover">
                    </div>
                    <ul class="flex flex-col font-medium bg-white h-screen">
                        <li
                            class="flex justify-between py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded border-t-2 border-gray-50 hover:bg-orange-400 hover:text-white"
                            v-for="(nav, index) in navs" 
                            :key="index"
                        >
                            <a
                                href="#"
                            >
                                {{ nav.name }}
                            </a>
                            <div>
                                <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
