<template>
        <div :class="['grid', 'sm:grid-cols-2', 'h-full', 'bg-image', 'relative']">
           <div class="absolute left-0 top-0 w-full h-full z-10"></div>
           <div class="overlay z-20 flex-center-all">
               <router-link :to="{ name: 'People' }">
                   <button class="btn-red opacity-0 show-slide text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl" @click="currentNav({index: 3, value: 'París', show: false})">
                       next 
                   </button>
               </router-link>
           </div>
        </div>
</template>
<script>
import { mapMutations } from 'vuex'
import SectionProccessItem from '../../components/Proccess/section-proccess-item'
export default {
    components: {
        SectionProccessItem
    },
    methods: {
        ...mapMutations('nav', [
            'currentNav'
        ])
    },
    mounted() {
        // console.log(this.$route.name)
    //    console.log(this.$router.currentRoute.path)
    }
}
</script>
<style lang="scss" scoped>
    .bg-image {
        background: url('../../assets/images/four-proccess/tour-eiffel.jpg') no-repeat;
        background-position: left;
        background-size: cover;
        .overlay {
            background: linear-gradient(90deg, #00000078, #000);
        }
    }
    .bg-redme {
        background: red;
    }
    /*Color BG Animation*/

 

.wsfanimatedcolors {

                background: linear-gradient(180deg, #fb5f65, #f7c66d, #6fce6f, #49a5ea, #9b6de3);

                background-size: 1000% 1000%;

                -webkit-animation: wsgdrcolors 10s ease infinite;

                -moz-animation: wsgdrcolors 10s ease infinite;

                animation: wsgdrcolors 10s ease infinite;

}

 

@-webkit-keyframes wsgdrcolors {

                0% {

                               background-position: 0% 90%

                }

 

                50% {

                               background-position: 100% 11%

                }

 

                100% {

                               background-position: 0% 90%

                }

}

 

@-moz-keyframes wsgdrcolors {

                0% {

                               background-position: 0% 90%

                }

 

                50% {

                               background-position: 100% 11%

                }

 

                100% {

                               background-position: 0% 90%

                }

}

 

@keyframes wsgdrcolors {

                0% {

                               background-position: 0% 90%

                }

 

                50% {

                               background-position: 100% 11%

                }

 

                100% {

                               background-position: 0% 90%


                }}
</style>
   