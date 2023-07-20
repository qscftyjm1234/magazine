<script setup>
import { ref } from "vue";
</script>
<template>
    <!-- This is an example component -->
    <div class="max-w-2xl mx-auto">
        <div id="default-carousel" class="relative" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div
                class="overflow-hidden relative h-56 rounded-2xl sm:h-64 xl:h-80 2xl:h-96"
            >
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <span
                        class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800"
                    >
                        First Slide</span
                    >
                    <img
                        src="https://picsum.photos/id/237/400/246"
                        class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img
                        src="https://picsum.photos/id/236/400/246"
                        class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img
                        src="https://picsum.photos/id/235/400/246"
                        class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            </div>
            <!-- Slider indicators -->
            <div
                class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
            >
                <button
                    type="button"
                    class="w-10 h-1 rounded-md"
                    aria-current="false"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                ></button>
                <button
                    type="button"
                    class="w-10 h-1 rounded-md"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                ></button>
                <button
                    type="button"
                    class="w-10 h-1 rounded-md"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                ></button>
            </div>
            <!-- Slider controls -->
            <button
                type="button"
                class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <span
                    class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                    <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    <span class="hidden">Previous</span>
                </span>
            </button>
            <button
                type="button"
                class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <span
                    class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                    <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                    <span class="hidden">Next</span>
                </span>
            </button>
        </div>
    </div>
</template>
<style>
</style>