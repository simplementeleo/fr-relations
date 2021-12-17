<template>
     <div class="bg-basecolor flex justify-between">
        <div class="flex">
            <menu-gloobal8></menu-gloobal8>
            <div class="elements-currents h-full flex py-1">
                <div v-for="(el, index) in elements" v-bind:key="index" :class="[el.show ? 'block' : 'hidden', 'flex', 'slide']">
                    
                    <div class="flex flex-col ml-3">
                        <div class="flex justify-around items-center">
                            <h5 class="text-white font-bold text-md 2xl:text-xl">
                                {{ Object.values(el)[0] }} 
                                <span v-if="Object.values(el)[0] != 'Especifica dónde'" class="text-grey-500 text-sm font-normal">{{ el.cant }}</span>
                            </h5>
                            <span class="text-md text-white font-bold ml-3">
                                {{ el.arrow ? '>' : '' }}
                            </span>
                        </div>
                        <span class="text-black italic text-md 2xl:text-xl cursor-pointer" @click="$router.go(-1)" >
                            {{ el.span }}
                        </span>
                    </div>
                
                </div>
            </div>
        </div>
       <filtering-search></filtering-search>
    </div>
</template>
<script>
import FilteringSearch from './filtering-search.vue'
import MenuGloobal8 from './MenuGloobal8.vue'
import carousel from 'vue-owl-carousel'
import { mapState } from 'vuex'
export default {
    name: 'current-elements',
    data: () => ({
    }),
    computed: {
        ...mapState({
            elements: state => state.nav.currentElements
        }),
        keyUpdated() {
            return this.elements.filter(el => el.show).length
        }
    },
    methods: {
    },
    components: {
        carousel,
        MenuGloobal8,
        FilteringSearch
    },
    mounted() {
    }
}
</script>
<style scoped>

</style>