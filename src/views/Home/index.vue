<template>
<div>
    <div class="h-screen">
        <videobg></videobg>
        <div class="absolute-full z-30 flex-center-all">
            <img src="../../assets/images/nav/logo.png" class="w-2/12">
            <div class="mt-16 flex">
                <router-link v-for="(btn, i) in buttons" v-bind:key="i" :to="btn.path">
                    <button v-on="i == 0 ? { click: changeActive } : {} " :class="['btn-base', 'uppercase', {'ml-4 md:ml-20': i}]">
                        {{ btn.text }}
                    </button>
                </router-link>
            </div>
              <div class="mt-12" >
                <a href="#o" class="text-white cursor-pointer text-4xl">
                    <arrow></arrow>
                </a>
            </div>
        </div>
        <div class="absolute top-0 w-full z-50 mt-screen" id="o">
           <section-banner></section-banner>
           <banner-img></banner-img>
           <weare></weare>
           <banner-img :rotate="true"></banner-img>
           <service-one></service-one>
           <parallax></parallax>
           <service-one></service-one>
           <banner-img></banner-img>
           <histories></histories>
           <service-one :three="true"></service-one>
           <service-one :white="true" :four="true"></service-one>
           <!-- <review></review> -->

        </div>
    </div>
    
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import Videobg from '../../components/Home/Videobg'
import SectionBanner from '../../components/landing/section-banner'
import BannerImg from '../../components/landing/banner-img'
import Weare from '../../components/landing/weare'
import ServiceOne from '../../components/landing/service-one'
import Parallax from '../../components/landing/parallax'
import ServiceTwo from '../../components/landing/service-two'
import Histories from '../../components/landing/histories'
import Review from '../../components/landing/review'
import Arrow from '../../components/Helpers/arrow'


export default {
    components: {
        Videobg,
        SectionBanner,
        BannerImg,
        Weare,
        ServiceOne,
        Parallax,
        ServiceTwo,
        Histories,
        Review,
        Arrow
    },
    data: () => ({
        buttons: [
            {
                text: 'cómo invitado',
                path: '/search-people'
            },
             {
                text: 'registrarme',
                path: '/signup'
            },
        ]
    }),
    methods: {
        ...mapMutations('nav',[
            'changeActive'
        ]),
    },
    computed: {
        ...mapState('nav', [
            'isActive'
        ])
    },
    mounted() {
        (this.$route.path == '/' && this.isActive == false) ? 'no puedes ver nav' : this.changeActive()
    }
}
</script>
