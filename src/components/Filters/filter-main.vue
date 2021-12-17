<template>
    <div v-if="showHide" class="absolute-full bg-blue-900 slide main-base z-30">
        <div class="absolute-full overlay"></div>
        <div class="main-menu absolute top-0 left-0 z-40 bg-white">
            <div class="bg-grayme relative">
                <div class="absolute main-close cursor-pointer">
                    <div class="close bg-blue-700 p-2" @click="isActive = !isActive">
                        cerrar
                    </div>
                </div>
                <div class="nav py-3">
                     <div class="logo">
                        <img src="../../assets/images/nav/logo.png" width="60px">
                    </div>
                </div>
            </div>
            <div class="bg-basecolor p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['show'],
    name: 'filter-main',
    data: () => ({
        isActive: false
    }),
    computed: {
        showHide() {
            return !this.isActive && this.show ? true : false
        }
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
            max-width: 50vw;
            min-height: 100vh;
        
        .nav {
            background: url('../../assets/images/nav/house-gray.png');
            background-repeat: repeat-x;
            background-position: bottom;
        }
        .main-close {
            right: -20px;
            
        }
    }
   }
</style>