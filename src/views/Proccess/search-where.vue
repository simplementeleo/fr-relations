<template>
        <div :class="['grid', 'sm:grid-cols-2', 'h-full', 'bg-image', 'relative']">
           <div class="overlay z-10"></div>
           <div class="absolute-full z-20 flex items-center justify-center">
               <router-link :to="{ name: 'People' }">
                   <button class="btn-red uppercase opacity-0 show-slide">
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
</style>
   