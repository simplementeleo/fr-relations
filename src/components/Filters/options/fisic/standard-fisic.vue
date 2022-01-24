<template>
    <div>
        <item-slide-menu name="Edad:" :min="18" :max="100">
            <Slider v-model="age" :classes="{
             base: 'w-full h-2 relative z-1 bg-gray-200 rounded',
             touchArea: 'h-5 w-6 bg-white rounded-md border border-gray-400 touchArea',
          }" class="slider-red" :min="18" :max="100" />
        </item-slide-menu>
        <item-slide-menu class="mt-3" name="Altura:" min="100*" max="230**">
            <Slider v-model="height" :classes="{
             base: 'w-full h-2 relative z-1 bg-gray-200 rounded',
             touchArea: 'h-5 w-6 bg-white rounded-md border border-gray-400 touchArea',
          }" class="slider-red" />
        </item-slide-menu>
    </div>
</template>
<script>
    import Slider from '@vueform/slider/dist/slider.vue2.js'
    import ItemSlideMenu from '../../../Helpers/item-slide-menu.vue'
    export default {
        name: 'standard-fisic',
        components: {
            Slider,
            ItemSlideMenu
        }
    }
</script>
<style src="@vueform/slider/themes/default.css"></style>
