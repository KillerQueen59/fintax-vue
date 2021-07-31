<template>
  <div class="bg-tosca-0">
    <div class="container mx-auto">
      <div class="flex flex-wrap ">
        <div class="mx-auto p-16">
          <img
            src="../assets/ojan.png"
            class="w-64 shadow rounded max-w-full h-auto align-middle border-none"
          />
        </div>
        <div class="w-full lg:pt-0 pt-10 pb-20 ">
          <h1 class="font-bold text-5xl text-center my-4">
            Muhammad Fauzan Ramadhan
          </h1>
          <p class="text-center my-4">
            Computer Science Student from IPB University
          </p>
          <AboutCard :data="data"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutCard from "../components/AboutCard.vue";

export default {
  components: {
    AboutCard,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: "Semester",
          value: 7,
        },
        {
          id: 2,
          title: "GPA",
          value: 3.74,
          image: "",
        },
        {
          id: 3,
          title: "Projects",
          value: 8,
          image: "",
        },
        {
          id: 4,
          title: "Frameworks",
          value: 3,
          image: "",
        },
      ],
    };
  },
};
</script>
