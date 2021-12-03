<template>
    <div>
        <nav class="relative top-0 left-0 w-full h-full bg-gray pt-4">
            <div>
                <img src="../../assets/images/nav/house-gray.png" alt="Search People">
            </div>
            <div class="absolute left-0 top-0 w-full h-full flex items-center justify-between p-3">
                <div class="logo">
                    <img src="../../assets/images/nav/logo.png" width="60px">
                </div>
                <div class="items flex items-center">
                    <img src="../../assets/images/nav/search-icon.png" width="40px">
                    <button class="bg-red-500 p-3 rounded-sm text-white">
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </nav>
        <!-- <div class="p-3 bg-base text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci asperiores culpa nihil minima, eligendi, facilis cumque sapiente laudantium, aliquam ad in impedit inventore saepe tempore laborum alias maxime voluptatibus.
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'navigation'
}
</script>
<style scoped lang="scss">
.bg-gray{
    background: #333;
}
</style>