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
</style>
   