import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NavigationGuards from '../views/NavigationGuards.vue'
import Forbidden from '../components/Forbidden.vue'
import NotFound from '../components/NotFound.vue'
import Recruit from '../views/Recruit.vue'
import RecruitFilter from '../views/RecruitFilter.vue'
import Calculator from '../views/Calculator.vue'
import SingleCard from '../views/SingleCard.vue'

Vue.use(VueRouter)

const guards = 3;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/recruits',
    name: 'Recruit',
    component: Recruit
  },
  {
    path: "/recruits/:id",
    name: "SingleCard",
    component: SingleCard
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/navguard/forbidden',
    name: 'Forbidden',
    component: Forbidden
  },
  {
    path: '/navguard/notfound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/recruitfilter',
    name: 'RecruitFilter',
    component: RecruitFilter
  },
  {
    path: "/navguard",
    name: "NavigationGuards",
    component: NavigationGuards,
    beforeEnter: (to, from, next) => {
      if (guards == 0) {
        next("/navguard/forbidden");
      } else if(guards == 1){
        next("/navguard/notfound");
      } else {
        next()
      }
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
