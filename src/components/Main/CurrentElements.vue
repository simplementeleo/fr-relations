<template>
     <div class="bg-base flex">
        <div class="menu flex justify-center font-bold items-center px-2 text-white">
            MENU
        </div>
        <div class="elements-currents h-full flex py-1">
            <div v-for="(el, index) in elements" v-bind:key="index" :class="[el.show ? 'block' : 'hidden', 'flex', 'slide']">
                
                <div class="flex flex-col ml-3">
                    <div class="flex justify-around items-center">
                        <h5 class="text-white font-bold text-md 2xl:text-xl">
                            {{ Object.values(el)[0] }} 
                            <span v-if="Object.values(el)[0] != 'Especifica dónde'" class="text-grey-500 text-sm font-normal">{{ el.cant }}</span>
                        </h5>
                        <span class="text-md text-white font-bold ml-3">
                            {{ el.arrow ? '>' : '' }}
                        </span>
                    </div>
                    <span class="text-black italic text-md 2xl:text-xl cursor-pointer" @click="$router.go(-1)" >
                        {{ el.span }}
                    </span>
                </div>
               

            </div>
        </div>



    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'current-elements',
    computed: {
        ...mapState({
            elements: state => state.nav.currentElements
        })
    },
    methods: {
      
    }
}
</script>