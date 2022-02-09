<template>
    <div class="bg-white py-12">
        <h1 class="text-4xl text-center text-basecolor font-bold">Revue</h1>
        <div class="container mx-auto px-20 mt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                <div v-for="i in 3" v-bind:key="i" class="card p-5 rounded-lg bg-white pb-10">
                    <img src="../../assets/images/three-proccess/amigos.jpg" class="rounded-lg">
                    <div class="text-xl mt-4">
                        Title item
                    </div>
                    <div class="mt-2 text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, reiciendis autem? In?...
                    </div>

                    <button class="bg-red-500 text-white rounded-full px-4 py-3 cursor-pointer w-full mt-4">
                        Leer
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'review'
    }
</script>
<style lang="scss" scoped>
    .card {
        box-shadow: 0px 5px 14px #ef444421;
        transition: all .3s ease-in-out;
        &:hover {
            transform: translateY(-2px);
            box-shadow: none;
        }
    }
</style>