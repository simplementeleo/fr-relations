<template>
        <div :class="['grid', 'sm:grid-cols-' + sections.length, 'h-full']">
            <section-proccess-item
            v-for="(section, index) in sections"
            v-bind:key="index"
            :title="section.title"
            :image="section.image"
            :btnText="section.btnText"
            :path="section.path"
            :param="section.param">
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
                path: 'SearchWhere',
                 param: {
                    index: 2,
                    value: 'Casarme',
                    show: true
                }
            },
             {
                title: 'Para una relación',
                btnText: 'Sí, sin compromisos',
                image: '/three-proccess/amigos',
                path: 'SearchWhere',
                 param: {
                    index: 2,
                    value: 'Relación',
                    show: true
                }
            },
             {
                title: 'Para una amistad',
                btnText: 'Sí, conocer personas',
                image: '/three-proccess/amigos',
                path: 'SearchWhere',
                 param: {
                    index: 2,
                    value: 'Amistad',
                    show: true
                }
            }
        ]
    })
}
</script>