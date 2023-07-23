<!-- #Navbars by.gino -->
<script setup>
    import { ref } from "vue";
    // # 變數區
    const navs = ref([
        {
            name: "康健",
            router: "/",
        },
        {
            name: "大人社團",
            router: "/q1",
        },
        {
            name: "康健知識庫",
            router: "/q2",
        },
        {
            name: "康健線上學習",
            router: "/q2",
        },
        {
            name: "康健嚴選",
            router: "/q2",
        },
        {
            name: "康健出版",
            router: "/q2",
        },
        {
            name: "康健影音",
            router: "/q2",
        },
        {
            name: "書香花園",
            router: "/q2",
        }
    ]);
</script>
<template>
    <nav id="header" class="w-full z-30 py-1 bg-white shadow-sm hidden lg:block">
        <div class="w-full flex items-center justify-center mt-0 px-6 py-0" style="background-color: #B38E5B">
            <div
                class="hidden md:flex md:items-center justify-end order-3 md:order-1 border-red-900 w-[1200px]"
                id="menu"
            >
            <nav>
                <ul
                    class="md:flex items-center justify-end text-base text-white pt-4 md:pt-0"
                >
                    <li
                        v-for="(nav, index) in navs"
                        :key="index"
                    >
                        <a
                            class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                            href="#"
                        >
                            {{ nav.name }}
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    </nav>
</template>
