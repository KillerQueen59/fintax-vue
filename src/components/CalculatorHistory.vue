<template>
  <div class="flex">
      <div class="w-full">
      <div class="grid grid-cols-4 bg-green-0  text-gree-200 text-center ">
            <div class="border-2 border-black p-4">{{data.first_number}}</div>
            <div class="border-2 border-black p-4">{{data.second_number}}</div>
            <div class="border-2 border-black p-4">{{data.operator}}</div>
            <div class="border-2 border-black p-4">{{data.result}}</div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
props: {
    data: Object,
  },
}
</script>

