<template>
  <div class="container mx-auto mt-4">
    <div class="flex">
      <div class="absolute py-2 px-4 text-white rounded-md bg-green-100">
        <t-dropdown :text="dropdown">
          <div class="py-1 rounded-md bg-green-100 shadow-xs">
            <a
              href="#"
              class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              role="menuitem"
              @click="setDropdown('Ascending')"
            >
              Ascending
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              role="menuitem"
              @click="setDropdown('Descending')"
            >
              Descending
            </a>
          </div>
        </t-dropdown>
      </div>
      <div class="flex-grow xl:block lg:block hidden"></div>
      <div>
        <div class="absolute py-2 px-4 text-white rounded-md bg-green-100 mx-44 lg:mx-0 xl:mx-0">
          <t-dropdown :text="textPage">
            <div class="py-1 rounded-md bg-green-100 shadow-xs">
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
                @click="showPerPage(3)"
              >
                Show 3
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
                @click="showPerPage(5)"
              >
                Show 5
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
                @click="showPerPage(10)"
              >
                Show 10
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
                @click="showPerPage(12)"
              >
                Show All
              </a>
            </div>
          </t-dropdown>
        </div>
      </div>
    </div>
    <div v-if="dropdown == 'Filter'">
      <div class="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto pt-10 ">
        <div v-for="recruit in recruits" :key="recruit.id">
           <div >
            <RecruitCard :data="recruit" :loading="loading" />
          </div>  
        </div>
      </div>
    </div>
    <div v-if="dropdown == 'Ascending'">
      <div class="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto pt-10">
        <div v-for="recruit in ascend" :key="recruit.id">
           <div >
            <RecruitCard :data="recruit" :loading="loading" />
          </div>  
        </div>
      </div>
    </div>
    <div v-if="dropdown == 'Descending'">
      <div class="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto pt-10">
        <div v-for="recruit in descend" :key="recruit.id">
          <div >
            <RecruitCard :data="recruit" :loading="loading" />
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RecruitCard from "../components/RecruitCard.vue";
import Vue from "vue";
import VueTailwind from "vue-tailwind";
import { TDropdown } from "vue-tailwind/dist/components";

const settings = {
  "t-dropdown": {
    component: TDropdown,
    props: {
      classes: "border-2 block w-full rounded text-gray-800",
    },
  },
};

Vue.use(VueTailwind, settings);

export default {
  components: {
    RecruitCard,
  },
  data() {
    return {
      loading: true,
      dropdown: "Filter",
      recruits: [],
      perPage: 12,
      textPage: "Show",
      total: 1,
      currentPage: 1,
    };
  },
  methods: {
    setProducts(data) {
      this.recruits = data;
    },
    showPerPage(number) {
      this.$router.push({ name: "RecruitFilter", query: { perPage: number } });
      console.log(this.perPage);
      if (number == 12) {
        this.textPage = "Show All";
      } else {
        this.textPage = "Show " + number;
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    setDropdown(dropdown) {
      this.dropdown = dropdown;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    axios
      .get(`https://reqres.in/api/users?per_page=${this.perPage}`)
      .then((response) => {
        this.setProducts(response.data.data);
        console.log(this.recruits);

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      })
      .catch((error) => console.log(error));
  },
  computed: {
    ascend: function() {
      return this.recruits.slice().sort(function(a, b) {
        return a.first_name > b.first_name ? 1 : -1;
      });
    },
    descend: function() {
      return this.recruits.slice().sort(function(a, b) {
        return a.first_name < b.first_name ? 1 : -1;
      });
    },
  },
};
</script>
