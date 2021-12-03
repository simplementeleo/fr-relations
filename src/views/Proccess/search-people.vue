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
                title: 'Soy un hombre',
                btnText: 'Empezar ahora',
                image: '/one-proccess/hombre',
                path: 'SearchGender'
            },
             {
                title: 'Soy una mujer',
                btnText: 'Empezar ahora',
                image: '/one-proccess/mujer',
                path: 'SearchGender'
            }
        ]
    })
}
</script>