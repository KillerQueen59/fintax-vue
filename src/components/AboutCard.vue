<template>
  <div class="container mx-auto mt-16">
    <div class="grid grid-cols-4 ">
      <div v-for="d in data" :key="d.id">
        <SkillCard :data="d"/>
      </div>
    </div>
  </div>
</template>

<script>

import SkillCard from './SkillCard.vue'
export default {
  components:{
    SkillCard
  },
  props:{
    data:Object
  }
}
</script>

<style>

</style>