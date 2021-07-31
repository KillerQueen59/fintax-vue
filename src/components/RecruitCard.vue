<template>
  <div>
  <div
    v-if="loading == false"
    class="m-4 mx-auto flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md"
  >
    <div class="flex flex-col md:flex-row gap-6 md:gap-8">
      <img
        class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto"
        :src="data.avatar"
        alt=""
      />
      <div class="flex flex-col text-center md:text-left">
        <div class="font-medium text-lg text-gray-800">
          {{ data.first_name }} {{ data.last_name }}
        </div>
        <div class="text-gray-500 mb-3 whitespace-nowrap">
          Senior Software Developer
        </div>
        <div
          class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0"
        >
          <a class="hover:cursor-pointer hover:text-blue-500"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a class="hover:cursor-pointer hover:text-blue-500"
            ><i class="fab fa-facebook-square"></i
          ></a>
          <a class="hover:cursor-pointer hover:text-blue-500"
            ><i class="fab fa-github-square"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <div v-if="loading == true">
      <SkeletonLoad/>
  </div>
  </div>
</template>

<script>

import SkeletonLoad from "../components/SkeletonLoad.vue";

export default {
  components:{
        SkeletonLoad,
  },
  props: {
    data: Object,
    loading: Boolean
  },
};
</script>

<style></style>
