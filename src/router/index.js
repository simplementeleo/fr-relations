import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/'
import Signup from '../views/Signup/'
import SearchPeople from '../views/Proccess/search-people'
import SearchGender from '../views/Proccess/search-gender'
import SoThat from '../views/Proccess/search-sothat'
import SearchWhere from '../views/Proccess/search-where'
import People from '../views/Proccess/people'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/search-people',
    name: 'SearchPeople',
    component: SearchPeople,
  },
  {
    path: '/search-people/gender',
    name: 'SearchGender',
    component: SearchGender,
  },
  {
    path: '/search-people/gender/so-that',
    name: 'SoThat',
    component: SoThat,
  },
  {
    path: '/search-people/gender/so-that/where',
    name: 'SearchWhere',
    component: SearchWhere,
  },
  {
    path: '/search-people/gender/so-that/where/people',
    name: 'People',
    component: People,
  },

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
