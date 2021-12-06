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
                title: 'Busco un hombre',
                btnText: 'Sí, un hombre',
                image: '/two-proccess/hombre',
                path: 'SoThat',
                 param: {
                    index: 1,
                    value: 'Hombre',
                    show: true
                }
            },
             {
                title: 'Busco una mujer',
                btnText: 'Sí, una mujer',
                image: '/two-proccess/mujer',
                path: 'SoThat',
                 param: {
                    index: 1,
                    value: 'Mujer',
                    show: true
                }
            }
        ]
    })
}
</script>