<template>
  <div id="app">
    <div class="absolute-full flex flex-col">
      <navigation v-if="true"></navigation>
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
<style src="@vueform/slider/themes/default.css"></style>
<style src="@vueform/multiselect/themes/default.css"></style>
