<template>
    <div>
        <video-current></video-current>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-full">
            <person 
            v-for="(person, index) in 36" 
            v-bind:key="index" 
            :image="index" 
            name="Person "
            profession="Profession"
            :items="[{name: 'Edad', value: 22},{name: 'Alt', value: 170},{name: 'Peso', value: 58}]" 
            video="video">
            </person>
        </div>
    </div>
</template>
<script>
    import Person from '../../components/Proccess/person'
    import VideoCurrent from '../../components/People/video-current'
    import {
        mapState
    } from 'vuex'
    export default {
        components: {
            Person,
            VideoCurrent
        },
        data: () => ({

        }),
        computed: {
            ...mapState({
                persons: state => state.people.persons,
            })
        }
    }
</script>