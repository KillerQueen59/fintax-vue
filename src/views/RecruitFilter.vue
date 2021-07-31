<template>
  <div class="container mx-auto mt-4">

    <div class="grid grid-cols-2 gap-4 mx-auto pt-10">
      <div v-for="recruit in recruits" :key="recruit.id">
        <div v-if="loading == false">
          <RecruitCard :data="recruit" />
        </div>

        <div v-if="loading == true">
          <SkeletonLoad />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RecruitCard from "../components/RecruitCard.vue";
import SkeletonLoad from "../components/SkeletonLoad.vue";

export default {
  components: {
    RecruitCard,
    SkeletonLoad,
  },
  data() {
    return {
      loading: true,
      recruits: [],
      total: 1,
      currentPage: 1,
    };
  },
  methods: {
    setProducts(data) {
      this.recruits = data;
    },
  
  },
  mounted() {
    axios
      .get(`https://reqres.in/api/users?per_page=${this.$route.query.perPage}`)
      .then((response) => {
        this.setProducts(response.data.data);
        console.log(this.recruits);

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      })
      .catch((error) => console.log(error));
  },

};
</script>

<style></style>
