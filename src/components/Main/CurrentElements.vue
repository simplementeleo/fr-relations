<template>
     <div class="bg-basecolor flex">
        <menu-gloobal8></menu-gloobal8>
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



<!-- 
            <carousel
            v-bind:key="keyUpdated" 
            :autoWidth="true"
            :dots="false"
            :items="2"
            :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}"
            >

                <div v-for="(el, index) in elements" v-bind:key="index" :class="[el.show ? 'block' : 'hidden', 'flex', 'slide']">
                    
                    <div class="flex flex-col ml-3">
                        <div class="flex justify-around items-center">
                            <h5 class="text-white font-bold text-md 2xl:text-xl">
                                {{ Object.values(el)[0] }} fdsa
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
            </carousel> -->

            <!-- <div class=" bg-blue-500" style="max-width: 300px !important">
                 <carousel
                    :items="1"
                    :loop="false"
                    :margin="10"
                    :nav="false"
                    :dots="false"
                    :autoWidth="false"
                    :responsive="{
                            0: {
                            items: 1.2
                            },
                            768: {
                            items: 2.2
                            }
                        }"
                    class="max-w-xl "
                    v-bind:key="keyUpdated">

                 
                <div v-for="(el, index) in elements" v-bind:key="index" :class="[el.show ? 'block' : 'block', 'flex', 'slide']">
                    
                    <div class="flex flex-col ml-3">
                        <div class="flex justify-around items-center">
                            <h5 class="text-white font-bold text-md 2xl:text-xl">
                                {{ Object.values(el)[0] }} fdsa
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
            </carousel>
            </div> -->


           <!-- <div class="main-gloobal8" >
                <div class="owl-carousel menu-carousel" >
                     

                        <div>
                            {{ elements[0].show ? 'hola' : ' ' }}
                        </div>
                        <div>
                            <div>
                                {{ elements[1].show ? 'hola1' : 'v' }}
                            </div>
                        </div>
                        <div>
                            <div>
                                {{ elements[2].show ? 'hola2' : 'v' }}
                            </div>
                        </div>
                        <div>
                            <div>
                                {{ elements[3].show ? 'hola3' : 'v' }}
                            </div>
                        </div>
                        


                </div>
           </div> -->





           <!-- {{ keyUpdated }} -->









        </div>



    </div>
</template>
<script>
import MenuGloobal8 from './MenuGloobal8.vue'
import carousel from 'vue-owl-carousel'
import { mapState } from 'vuex'
export default {
    name: 'current-elements',
    data: () => ({
    }),
    computed: {
        ...mapState({
            elements: state => state.nav.currentElements
        }),
        keyUpdated() {
            return this.elements.filter(el => el.show).length
        }
    },
    methods: {
    },
    components: {
        carousel,
        MenuGloobal8
    },
    mounted() {

        //  $('.owl-carousel').owlCarousel({
        //         loop: false,
        //         autoWidth: true,
        //         autoHeight: false,
        //         dots: false,
        //         nav: true,
        //         items: 2,
        //         // navText: ['<div class="prev-gloobal8"> < </div>',
        //         //     '<div class="next-gloobal8"> > </div>'
        //         // ],
        //         responsiveClass: true,
        //         responsive: {
        //             0: {
        //                 items: 1,
        //             },
        //             400: {
        //                 items: 2,
        //             },
        //             700: {
        //                 items: 3,
        //             }
        //         }
        //     });
           
    }
}
</script>
<style scoped>

/* .owl-stage-outer {
    width: 30px !important; 
} */

/* clearfix */

/* .owl-carousel .owl-wrapper:after {
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  content: ".";
  line-height: 0;
} */


/* display none until init */

/* 
:root {
    --orange: #ff0000; 
    --text-color: #212529;
    --grey: #efefef;
}

.main-gloobal8 {
    max-width: 500px;
    background: blue;
}
.main-menu {
    position: relative;
    background: blue;
    padding: 1em 3em 1em 0em;
}
.menu-carousel {
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-gloobal8 {
    color: var(--text-color);
    padding: 5px 0px;
    font-weight: bold;
    cursor: pointer;
}
.owl-nav {
    position: absolute;
    top: 0;
    height: 100%;
    right: -57px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.next-gloobal8, .prev-gloobal8 {
    transition: all .2s ease-in-out;
    height: 100%;
    padding: 5px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.next-gloobal8:hover, .prev-gloobal8:hover {
    background: var(--orange);
    color: white;
}
.select-all-gloobal8 {
    width: 100%;
    background: var(--grey);
    color: white;
    position: absolute;
    top: 63px;
    left: 0;
}
.main-input-gloobal8 {
    position: relative;
}
.main-search {
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
}
.search-input-gloobal8 {
    outline: none;
    padding: 20px 93px 20px 60px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    font-size: 19px;
    border-radius: 5px;
}
.search-input-gloobal8:active, .search-input-gloobal8:focus {
    outline: none;
}
.logotipo-menu-gloobal8 {
    position: absolute;
    left: 13px;
    top: 16px;
    width: 35px;
}
.search-icon-input {
    position: absolute;
    right: 10px;
    top: 14px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    padding: 7px 13px;
    border-left: 1px solid var(--grey);
    font-size: 23px;
}
.times-icon-input {
    position: absolute;
    right: 62px;
    top: 16px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    padding: 7px 13px;
    color: #8c8a8a;
    font-size: 21px;
}
.search-gloobal8 {
    position: relative;
}
.search-gloobal8::before{
    content: "";
    position: absolute;
    bottom: 0;
    display: inline-block;
    width: 68px;
    height: 2px;
    background: var(--orange);
}

.select-item-gloobal8 {
    padding: 12px 26px;
    transition: all .2s ease-in-out;
}
.select-item-gloobal8:hover {
    transform: scale(1.1);
    background: #fff;
}
.fa-search {
    color: var(--orange);
}
.show-gloobal8 {
    display: block;
}
.hidden-gloobal8 {
    display: none;
}
.color-gloobal8 {
    color: var(--orange);
}
.flex-gloobal8 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-gloobal8 h4:nth-child(2) {
    margin-top: 8px;
}
.color-black-goobal8{
    color: var(--text-color);
}
.fa-angle-down {
    font-size: .6em;
}
.block-white {
    background: #fff;
    height: 1em;
}
.slide {
    animation: .2s slide ease-in-out;
}
@keyframes slide {
    from {
        transform: translateY(-3px);
        opacity: 0;
    }
}
.zoomIn-gloobal8 {
    animation: .2s zoomIn ease-in-out;
}
@keyframes zoomIn {
    from {
        transform: scale(0);
    }
}
@media (max-width: 520px) {
    .owl-nav {
        top: 14px;
        right: 0;
        width: 100%;
        height: 0;
    }
    .next-gloobal8, .prev-gloobal8 {
        top: -13px;
        position: absolute;
        padding: 15px 6px;
    }
    .next-gloobal8 {
        right: 0;
    }
    .prev-gloobal8 {
        left: 0;
    }
    .main-menu {
        padding: 1em;
    }
    .item-gloobal8 { 
        padding: 5px 23px;
    }
    .item-menu-gloobal8 {
        text-align: center;
    }
} */
</style>