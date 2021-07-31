<template>
<div class="flex flex-col md:flex-row  gap-2">
  <div class="group flex flex-row m-auto hover:bg-coco-100 bg-green-100 py-6 px-16 gap-8 rounded-lg border-2 border-green-200">
    <div class="my-auto">
      <div class="text-lg text-black group-hover:text-white">{{data.title}}</div>
      <div class="text-4xl text-black group-hover:text-white">{{data.value}}</div>
    </div>
    
  </div>
</div>

</template>

<script>
export default {
    props:{
        data: Object
    }
}
</script>

<style>

</style>