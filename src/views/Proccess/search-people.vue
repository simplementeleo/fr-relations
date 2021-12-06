<template>
        <div :class="['grid', 'sm:grid-cols-' + sections.length, 'h-full']">
            <section-proccess-item
            v-for="(section, index) in sections"
            v-bind:key="index"
            :title="section.title"
            :image="section.image"
            :btnText="section.btnText"
            :path="section.path"
            :param="section.param"
            >
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
                title: 'Soy un hombre',
                btnText: 'Empezar ahora',
                image: '/one-proccess/hombre',
                path: 'SearchGender',
                param: {
                    index: 0,
                    value: 'Hombre',
                    show: true,
                }
            },
             {
                title: 'Soy una mujer',
                btnText: 'Empezar ahora',
                image: '/one-proccess/mujer',
                path: 'SearchGender',
                 param: {
                    index: 0,
                    value: 'Mujer',
                    show: true
                }
            }
        ]
    })
}
</script>