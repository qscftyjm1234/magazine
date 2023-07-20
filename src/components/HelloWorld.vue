<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 to-pink-400 flex justify-center items-center">
    <div class="bg-white rounded-lg">
      <div class="w-96 border-t-8 border-pink-600 rounded-lg flex">
        <div class="w-1/3 pt-6 flex justify-center">
        </div>
        <div class="w-full pt-9 pr-4">
          <h3 class="font-bold text-pink-700">Delete Feelings?</h3>
          <p class="py-4 text-sm text-gray-400">Are you sure you want to delete all feelings? If you delete your feelings, you will permantly loose everything.</p>
        </div>
      </div>

      <div class="p-4 flex space-x-4">
        <a href="#" class="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
        <a href="#" class="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Feelings</a>
      </div>
    </div>
  </div>
  <!-- <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
