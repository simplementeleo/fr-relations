<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fa5655" fill-opacity="1"
                d="M0,256L120,229.3C240,203,480,149,720,149.3C960,149,1200,203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
            </path>
        </svg>
        <section class="bg-basecolor relative">
            <div class="container mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 py-14">
                <article v-for="(item, index) in items" v-bind:key="index" class="text-center text-white mb-5">
                    <h3 class="uppercase text-xl font-bold mb-3"> {{ item.title }} </h3>
                    <p class="text-base"> {{ item.content }} </p>
                </article>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'section-banner',
        data: () => ({
            items: [{
                    title: 'Lorem ipsum dolor sit amet.',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam.'
                },
                {
                    title: 'Lorem ipsum dolor sit amet.',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam.'
                },
                {
                    title: 'Lorem ipsum dolor sit amet.',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam.'
                }
            ]
        })
    }
</script>