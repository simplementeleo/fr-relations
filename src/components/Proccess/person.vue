<template>
<div>
    <div class="card-people show-slide card-people-responsive" v-bind:style="{ backgroundImage: 'url('+require('../../assets/images/people/' + (image + 1) + '-.jpg')+')', animationDelay: (image + 1) + '00ms' }">
        <div class="overlay duration-300"></div>
        <div class="menu menu-text-person" >
            <div :class="['duration-300', 'flex-grow', isActive ? 'w-0' : 'w-full']">
                <div class="menu-content slide" v-if="!isActive">
                    <div class="flex flex-col">
                        <h1 class="text-h1-menu-person"> {{ name }} {{ image }} </h1>
                        <span class="text-span-menu-person"> {{ profession }} </span>
                    </div>
                    <div class="flex">
                        <div v-for="(item, index) in items" v-bind:key="index" class="flex flex-col items-center mr-3">
                            <h1 class="text-h1-menu-person"> {{ item.value }} </h1>
                            <span class="text-span-menu-person"> {{ item.name }} </span>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="['duration-300', !isActive ? 'w-0' : 'w-full']">
                <div class="menu-elements-actions slide" v-if="isActive">
                    <div class="item-menu-el">
                        <img class="icon-invert"  src="../../assets/images/icons/assignment48.png" width="40">
                    </div>
                    <div class="item-menu-el">
                        <img class="icon-invert" src="../../assets/images/icons/question_answer48.png" width="40">
                    </div>
                    <div class="item-menu-el">
                        <img class="icon-invert" src="../../assets/images/icons/favorite48.png" width="40">
                    </div>
                    <div class="item-menu-el" @click="videoCurrent(image+' Video')">
                        <img class="icon-invert" src="../../assets/images/icons/video48.png" width="40">
                    </div>
                </div>
            </div>
            <div class="bg-grayme flex-center-all text-black cursor-pointer px-4" @click="isActive = !isActive">
                <img src="../../assets/images/icons/baseline_double_arrow_48.png" :class="['transform', isActive ? 'rotate-0' : 'rotate-180', 'icon-invert', 'duration-300', 'my-auto']">
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
            background: #0000009f;
            min-height: 60px;
        }
        .icon-invert {
            filter: invert(100%);
        }
    }
</style>