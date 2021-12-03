<template>
        <div :class="['grid', 'sm:grid-cols-2', 'h-full', 'bg-image', 'relative']">
           <div class="absolute left-0 top-0 w-full h-full z-10"></div>
           <div class="overlay absolute left-0 top-0 w-full h-full z-20 flex items-center justify-center">
               <router-link :to="{ name: 'People' }">
                   <button class="bg-redme py-2 px-4 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 duration-300 transform uppercase opacity-0 show-slide">
                       next 
                   </button>
               </router-link>
           </div>
        </div>
</template>
<script>
import SectionProccessItem from '../../components/Proccess/section-proccess-item'
export default {
    components: {
        SectionProccessItem
    },
    data: () => ({
    })
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
   