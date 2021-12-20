<template>
    <div class="px-3 py-1 text-white flex font-bold">
        <div class="icon-nav-right mr-4">
            <img class="icon-invert mr-1" src="../../assets/images/icons/favorite24.png">
            <span>Guardar Búsqueda</span>
        </div>
        <div class="icon-nav-right" @click="changeFilteringSearch">
            <img class="icon-invert mr-1" src="../../assets/images/icons/outline_tune_black_24dp-24.png">
            <span>Filtros de Búsqueda</span>
        </div>

        <filter-main :show="isActive"></filter-main>


    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import FilterMain from '../Filters/filter-main.vue'
export default {
    name: 'filtering-search',
    components: {
        FilterMain
    },
    data: () => ({
    }),
    methods: {
        ...mapMutations('nav',[
            'changeFilteringSearch'
        ])
    },
    computed: {
        ...mapState({
            isActive: state => state.nav.filteringSearch
        })
    }
}
</script>
