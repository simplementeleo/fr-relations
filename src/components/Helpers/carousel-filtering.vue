<template>
     <carousel class="carousel" :nav="false" :dots="false" :autoWidth="true" :loop="false">
            <div v-for="(item, i) in items" 
            v-bind:key="i"
            @click="current(i)"
            :class="['flex-center-all', 'font-bold', 'px-4', 'item', currentItem == i ? [invert ? 'sub-active' : 'current'] : [invert ? 'current' : 'no-active']]">
                {{ item.name }}
            </div>

            <template slot="prev">
                <div class="absolute top-0 z-10 cursor-pointer flex-center-all prev">
                    <img src="../../assets/images/icons/baseline_arrow_back_ios_black_24dp-48.png" class="icon-invert">
                </div>
            </template>
            <template slot="next">
                <div class="absolute bg-basecolor right-0 top-0 z-10 cursor-pointer next flex-center-all">
                    <img src="../../assets/images/icons/baseline_arrow_forward_ios_black_24dp-48.png" class="icon-invert">
                </div>
            </template>

        </carousel>
</template>
<script>
import { mapMutations } from 'vuex'
import carousel from 'vue-owl-carousel'
export default {
    name: 'carousel-filtering',
    props: ['items', 'invert'],
    components: {
        carousel
    },
    data: () => ({
        currentItem: ''
    }),
    methods: {
        ...mapMutations('filters', [
            'CHANGE_ITEM_MAIN',
            'CHANGE_SUB_ITEM'
        ]),
        current(index) {
            this.currentItem = index
            if (this.invert) {
                this.CHANGE_SUB_ITEM(index)
            }else {
                this.CHANGE_ITEM_MAIN(index)
            }
        }
    },
    mounted() {
        let test = document.querySelector('.carousel span')
        test.style.display = 'block'
    }
}
</script>
<style lang="scss" scoped>
    $height-main: 61px;
    $redobs: #e60000;
    $gray: #f5f5f5;
    $base: #fa5655;
        .carousel {
            position: relative;
        }

        img {
            width: 30px;
        }

        .next {
            height: $height-main;
            border-bottom: 3px solid $redobs;
        }

        .prev {
            height: $height-main;
            right: 30px;
            background: linear-gradient(to right, #fa56554a, $base);
            border-bottom: 3px solid $redobs;
            padding-left: 10px;
        }

        .item {
            height: $height-main;
            transition: all .2s ease-in-out;
            cursor: pointer;
        }
        .no-active {
            background: $base;
            border-bottom: 3px solid $redobs;
            &:hover {
                background: #d44949;
            }
        }
        .current {
            background: $gray;
            color: $base;
            position: relative;
        }
        .sub-active {
            background: $gray;
            color: $base;
            border-bottom: 3px solid $redobs;
        }
</style>