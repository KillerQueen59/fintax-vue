<template>
  <div>
    <nav class="bg-green-200 py-2">
      <div class="container mx-auto sm:px-6 lg:px-8">
        <div class="relative  flex items-center justify-center h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              @click=" active = ! active"
              class=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-100 "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="hidden sm:block sm:ml-6 ">
              <div class="flex flex-grow space-x-4 ">
                <router-link
                  to="/"
                  class="px-1 pt-1 border-b-2 border-transparent text-lg text-green-0 hover:text-white"
                  exact-active-class="border-dark-0 text-green-0 font-semibold"
                >
                  Home
                </router-link>
                <router-link
                  to="/about"
                  class="px-1 pt-1 border-b-2 border-transparent text-lg text-green-0 hover:text-white"
                  exact-active-class="border-dark-0 text-green-0 font-semibold"
                >
                  About
                </router-link>
                <router-link
                  to="/calculator"
                  class="px-1 pt-1 border-b-2 border-transparent text-lg text-green-0 hover:text-white"
                  exact-active-class="border-dark-0 text-green-0 font-semibold"
                >
                  Calculator
                </router-link>
                <router-link
                  to="/recruits"
                  class="px-1 pt-1 border-b-2 border-transparent text-lg text-green-0 hover:text-white"
                  exact-active-class="border-dark-0 text-green-0 font-semibold"
                >
                  Recruits
                </router-link>
                  <router-link
                  to="/navguard"
                  class="px-1 pt-1 border-b-2 border-transparent text-lg text-green-0 hover:text-white"
                  active-class="border-dark-0 text-green-0 font-semibold"
                >
                  NavGuard
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:hidden lg:hidden xl:hidden" :class="{'hidden': active}" id="mobile-menu">
        <div class=" px-2 pt-2 pb-3 space-y-1">
          <router-link
            to="/"
            class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            exact-active-class="border-dark-0 text-dark-0 font-semibold"
          >
            Home
          </router-link>

          <router-link
            to="/about"
            class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            exact-active-class="border-dark-0 text-dark-0 font-semibold"
          >
            About
          </router-link>

          <router-link
            to="/calculator"
            class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            exact-active-class="border-dark-0 text-dark-0 font-semibold"
          >
            Calculator
          </router-link>

          <router-link
            to="/recruits"
            class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            exact-active-class="border-dark-0 text-dark-0 font-semibold"
          >
            Recruits
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:'navbar',
  data: function(){
    return{
      active:true,
    }
  }
};
</script>

<style></style>
