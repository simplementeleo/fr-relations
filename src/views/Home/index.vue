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
            </div>
        </div>
    </div>
</template>
<style scoped>
    .btn-base {
        line-height: 35px;
    }
</style>
<script>
import { mapMutations, mapState } from 'vuex'
import Videobg from '../../components/Home/Videobg'
export default {
    components: {
        Videobg
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
