<template>
    <div v-if="isActive" class="absolute-full slide main-base z-30">
        <div class="absolute-full overlay"></div>
        <div class="main-menu absolute top-0 left-0 z-40 bg-white">
            <div class="bg-grayme relative">
                <div class="absolute main-close cursor-pointer">
                    <div class="close bg-white my-auto" @click="changeFilteringSearch">
                        <img src="../../assets/images/icons/baseline_close_black_24dp-24.png" width="35px">
                    </div>
                </div>

                <div class="nav p-3 flex justify-between items-center">

                    <div class="logo">
                        <img src="../../assets/images/nav/logo.png" width="60px">
                    </div>

                    <div class="icon-nav-right">
                        <img class="icon-invert mr-1" src="../../assets/images/icons/outline_tune_black_24dp-24.png">
                        <span>Filtros de Búsqueda</span>
                    </div>

                </div>
            </div>
            <filtering-options></filtering-options>
        </div>
    </div>
</template>
<script>
    import FilteringOptions from './filtering-options.vue'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        components: {
            FilteringOptions
        },
        props: ['show'],
        name: 'filter-main',
        data: () => ({}),
        methods: {
            ...mapMutations('nav', [
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
<style scoped lang="scss">
    .overlay {
        background: #0000008e;
        height: 100vh;
    }

    .main-base {

        .main-menu {
            width: 50vw;
            min-width: 300px;
            max-width: 50vw;
            min-height: 100vh;

            .nav {
                background: url('../../assets/images/nav/house-gray.png');
                background-repeat: repeat-x;
                background-position: bottom;
            }

            .main-close {
                right: -35px;

            }
        }
    }
</style>