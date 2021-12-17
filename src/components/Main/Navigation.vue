<template>
        <nav class="bg-grayme">
            <div class="relative navigation">
               <div class="flex items-center justify-between p-3">
                    <div class="logo">
                        <img src="../../assets/images/nav/logo.png" width="60px">
                    </div>
                    <div class="items flex items-center">
                        <img src="../../assets/images/nav/search-icon.png" width="40px" class="mr-3">
                        <button class="bg-basecolor p-3 rounded-sm text-white">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
           <current-elements></current-elements>
           
        </nav>
      
</template>
<script>
import CurrentElements from './CurrentElements.vue'
export default {
    name: 'navigation',
    components: {
        CurrentElements
    }
}
</script>
<style scoped lang="scss">
.bg-gray{
    background: #333;
}

.navigation {
    background: url('../../assets/images/nav/house-gray.png');
    background-repeat: repeat-x;
    background-position: bottom;
}
</style>