<template>
    <div class="section-item h-full items-strech bg-image relative" v-bind:style="{ backgroundImage: 'url('+require('../../assets/images' + image + '.jpg')+')' }">
        <div class="overlay z-10"></div>
       
       <div class="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center py-12 opacity-0 show-slide">
            <h2 class="text-white text-center text-2xl md:text-4xl font-bold">
                {{ title }}
            </h2>
            <router-link :to="{ name: path }">
                <button class="btn-red mt-5" @click="currentNav(param)">
                    {{ btnText }}
                </button>
            </router-link>
       </div>

    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'section-item',
    props: ['image', 'title', 'btnText', 'path', 'param'],
    methods: {
        ...mapMutations('nav', [
            'currentNav'
        ])
    }
}
</script>
<style scoped lang="scss">

    .bg-image {
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        transition: all 1s ease-in-out;
        overflow: hidden;
         &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: inherit;
            background-size: cover;
            transform-origin: center;
            transition: transform .4s ease-in-out;
         }
        &:hover {
            &::after {
                transform: scale(1.05);
            }
            .overlay {
                background: #00000013;
            }
        }
    }
    .overlay {
        background: #00000262;
        transition: all .3s ease-in-out;
    }
</style>