<template>
    <div class="px-3 py-1 text-white flex font-bold">
        <div class="icon-nav-right mr-4">
            <img class="icon-invert mr-1" src="../../assets/images/icons/favorite24.png">
            <span>Guardar Búsqueda</span>
        </div>
        <div class="icon-nav-right" @click="isActive = true">
            <img class="icon-invert mr-1" src="../../assets/images/icons/outline_tune_black_24dp-24.png">
            <span>Filtros de Búsqueda</span>
        </div>

        <filter-main :show="isActive"></filter-main>


    </div>
</template>
<script>
import FilterMain from '../Filters/filter-main.vue'
export default {
    name: 'filtering-search',
    components: {
        FilterMain
    },
    data: () => ({
        isActive: false
    })
}
</script>
<style scoped>
    .icon-invert {
        filter: invert(100%);
    }
</style>