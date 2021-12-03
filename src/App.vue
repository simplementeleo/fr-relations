<template>
  <div id="app">
    <div class="absolute w-full h-full left-0 top-0 flex flex-col">
      <navigation v-if="nav"></navigation>
      <router-view/>
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
