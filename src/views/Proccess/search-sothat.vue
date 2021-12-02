<template>
        <div :class="['grid', 'sm:grid-cols-' + sections.length, 'h-full']">
            <section-proccess-item
            v-for="(section, index) in sections"
            v-bind:key="index"
            :title="section.title"
            :image="section.image"
            :btnText="section.btnText"
            :path="section.path">
            </section-proccess-item>
        </div>
</template>
<script>
import SectionProccessItem from '../../components/Proccess/section-proccess-item'
export default {
    components: {
        SectionProccessItem
    },
    data: () => ({
        sections: [
            {
                title: 'Para casarme',
                btnText: 'Sí, y formar una familia',
                image: '/three-proccess/casarme',
                path: 'SearchWhere'
            },
             {
                title: 'Para una relación',
                btnText: 'Sí, sin compromisos',
                image: '/three-proccess/amigos',
                path: 'SearchWhere'
            },
             {
                title: 'Para una amistad',
                btnText: 'Sí, conocer personas',
                image: '/three-proccess/amigos',
                path: 'SearchWhere'
            }
        ]
    })
}
</script>