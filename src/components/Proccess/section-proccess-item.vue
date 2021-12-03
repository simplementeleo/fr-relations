<template>
    <div class="h-full items-strech bg-image relative" v-bind:style="{ backgroundImage: 'url('+require('../../assets/images' + image + '.jpg')+')' }">
        <div class="overlay absolute left-0 top-0 w-full h-full z-10"></div>
       
       <div class="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center py-12 opacity-0 show-slide">
            <h1 class="text-white text-center text-2xl md:text-4xl font-bold">
                {{ title }}
            </h1>
            <router-link :to="{ name: path }">
                <button class="bg-redme py-2 px-4 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 duration-300 transform mt-5">
                    {{ btnText }}
                </button>
            </router-link>
       </div>

    </div>
</template>
<script>
export default {
    name: 'section-item',
    props: ['image', 'title', 'btnText', 'path'],
}
</script>
<style scoped lang="scss">
.bg-redme {
    background: red;
}
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