<template>
<div>
    <div class="card-people relative opacity-0 show-slide" v-bind:style="{ backgroundImage: 'url('+require('../../assets/images/people/' + (image + 1) + '-.jpg')+')', animationDelay: (image + 1) + '00ms' }">
        <div class="overlay duration-300"></div>
        <div class="menu duration-300 text-white absolute bottom-0 w-full flex justify-between" >
            <div :class="['duration-300', 'flex-grow', isActive ? 'w-0' : 'w-full']">
                <div class="flex px-1 justify-between slide" v-if="!isActive">
                    <div class="flex flex-col">
                        <h1 class="text-md text-white font-bold"> {{ name }} {{ image }} </h1>
                        <span class="italic text-sm"> {{ profession }} </span>
                    </div>
                    <div class="flex">
                        <div v-for="(item, index) in items" v-bind:key="index" class="flex flex-col mr-3">
                            <h1 class="text-md text-white font-bold"> {{ item.value }} </h1>
                            <span class="italic text-sm"> {{ item.name }} </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray text-black cursor-pointer" @click="isActive = !isActive">
                <img src="../../assets/images/icons/baseline_double_arrow_48.png" :class="['transform', isActive ? 'rotate-180' : 'rotate-0', 'icon-invert', 'duration-300']">
            </div>
            <div :class="['bg-base', 'duration-300', !isActive ? 'w-0' : 'w-full']">
                <div class="flex justify-around bg-base flex-grow slide" v-if="isActive">
                    <div class="cursor-pointer duration-300 hover:bg-red-600 flex-grow h-full flex justify-center items-center">
                        <img class="icon-invert"  src="../../assets/images/icons/assignment48.png" width="40">
                    </div>
                    <div class="cursor-pointer duration-300 hover:bg-red-600 flex-grow h-full flex justify-center items-center">
                        <img class="icon-invert" src="../../assets/images/icons/question_answer48.png" width="40">
                    </div>
                    <div class="cursor-pointer duration-300 hover:bg-red-600 flex-grow h-full flex justify-center items-center">
                        <img class="icon-invert" src="../../assets/images/icons/favorite48.png" width="40">
                    </div>
                    <div class="cursor-pointer duration-300 hover:bg-red-600 flex-grow h-full flex justify-center items-center" @click="videoCurrent(image+' Video')">
                        <img class="icon-invert" src="../../assets/images/icons/video48.png" width="40">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</div>
</template>
<script>
import { mapMutations } from 'vuex'
    export default {
        name: 'person',
        props: ['image', 'name', 'profession', 'items', 'video'],
        data: () => ({
            isActive: false,
        }),
        methods: {
            ...mapMutations('people', [
                'videoCurrent'
            ])
        }
    }
</script>
<style lang="scss" scoped>

   
    .card-people {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 200px;

        &:hover {
            .overlay {
                background: #0000;
            }

            .menu {
                opacity: 1;
            }
        }

        .overlay {
            background: #00000055;
        }

        .menu {
            opacity: 0;
            background: #0000008c;
        }
        .icon-invert {
            filter: invert(100%);
        }
    }
</style>