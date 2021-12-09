<template>
  <div id="app">
    <div class="absolute-full flex flex-col">
      <!-- <navigation v-if="nav"></navigation> -->
      <!-- <router-view/> -->
      <carousel>
        <img src="./assets/images/nav/logo.png">
        <img src="./assets/images/nav/logo.png">
        <img src="./assets/images/nav/logo.png">
        <img src="./assets/images/nav/logo.png">
      </carousel>
    </div>
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
import Navigation from './components/Main/Navigation.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Navigation,
    carousel
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
