<script setup>
import { RouterLink, RouterView } from "vue-router";
import Banner from "./layouts/Banner.vue"; // banner
import Navbars from "./layouts/Navbars.vue"; // navbars
import Header from "./layouts/Header.vue"; // header
import Footer from "./layouts/Footer.vue"; // header
</script>

<template>
    <Banner />
    <Navbars />
    <Header />
    <!-- #顯示頁面，預設home page -->
    <RouterView />
    <Footer />
</template>

<style scoped>
</style>
