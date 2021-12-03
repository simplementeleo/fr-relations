<template>
    <div v-if="video != ''" class="fixed top-0 h-full w-full bg-red-500 z-30">
        <h1 class="text-xl text-black w-full h-full">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eis6QZNIW3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="py-2 px-4 bg-red-500 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 duration-300 transform absolute top-0 left-0" @click="videoCurrent('')">
                cerrar {{video}}
            </button>
        </h1>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'video-current',
    data: () => ({
    }),
    computed: {
        ...mapState({
            video: state => state.people.videoCurrent
        })
    },
    methods: {
        ...mapMutations('people', [
            'videoCurrent'
        ])
    }
}
</script>