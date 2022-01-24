<template>
    <div>
        <carousel-filtering :items="items" ></carousel-filtering>
        <!-- Filtering options separated -->
        <filter-basic v-if="itemMain == 0" ></filter-basic>
        <filter-fisico v-if="itemMain == 1" ></filter-fisico>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import CarouselFiltering from '../Helpers/carousel-filtering.vue'
    import FilterBasic from './options/filter-basic.vue'
    import FilterFisico from './options/filter-fisico.vue'
    export default {
        name: 'filtering-options',
        components: {
            FilterBasic,
            FilterFisico,
            CarouselFiltering
        },
        data: () => ({
        }),
        computed: {
            ...mapState({
                items: state => state.filters.carouselItemsMain,
                itemMain: state => state.filters.itemMain
            })
        }
       
    }
</script>