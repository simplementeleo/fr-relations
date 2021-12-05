<template>
  <div id="app">
    <div class="absolute w-full h-full left-0 top-0 flex flex-col">
      <navigation v-if="nav"></navigation>
      <!-- <router-view/> -->
      <div class="btn-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eaque quod? Assumenda odit officiis, ducimus rem delectus non repellendus consequuntur voluptatibus veritatis! Quis nam pariatur in ullam maxime, obcaecati fugit.
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from './components/Main/Navigation.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Navigation
  },
  data: () => ({
     
  }),
  computed: {
    ...mapState({
      nav: state => state.nav.isActive
    })
  },
  created () {
    document.title = ". . .";
  }
}
</script>
<style>
/* .btn-base {
    @apply py-2 px-4 bg-base text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 duration-300 transform text-6xl;
} */
/* .btn-base {
    @apply py-2 px-4 bg-base text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 duration-300 transform;
}
.overlay {
    @apply absolute left-0 top-0 w-full h-full;
}
.absolute-full {
    @apply absolute left-0 top-0 w-full h-full;
}
.btn-red {
    @apply bg-redme py-2 px-4 text-white font-semibold rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 duration-300;
}
.bg-gray {
    background: #333;
}
.bg-base {
    @apply bg-base;
} */
</style>