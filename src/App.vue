<template>
  <div class="flex flex-col h-screen w-screen">
    <Navbar/>
    <main class="p-4 flex-grow bg-white">
      <router-view />
    </main>
    <footer class="p-4 bg-green-0">
          <div class=" py-2 text-gray-500 text-sm mt-2 text-xs mx-auto text-center">Made by <a class="hover:underline text-gray-600 text-lg font-bold" href="https://www.linkedin.com/in/fauzan-ramadhan-34185b185/">Fauzan</a> with <a class="hover:underline text-gray-600 text-lg font-bold" href="https://vuejs.org/">Vue Js</a></div>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
