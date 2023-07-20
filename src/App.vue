<script setup>
    import Banner from "./layouts/Banner.vue"; // banner
    import Navbars from "./layouts/Navbars.vue"; // navbars
    import Header from "./layouts/Header.vue"; // header
    import Footer from "./layouts/Footer.vue"; // header
</script>

<template>
    <!-- # by.gino 我習慣compontent切分越詳細越好，命名看公司規則，這邊我都大概取 -->
    <Banner />
    <Navbars />
    <Header />
    <!-- #顯示頁面，預設home page -->
    <RouterView />
    <Footer />
</template>
