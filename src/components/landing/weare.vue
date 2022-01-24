<template>
    <div class="bg-white">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
           <div v-for="(item, index) in items" v-bind:key="index" class="card mb-10 md:mb-0">
               <div class="flex-center-all mb-8">
                   <!-- icon -->
                   <div class="w-24 h-24 rounded-full bg-red-500"></div>
               </div>
               <div class="content text-center">
                   <h4 class="text-2xl font-bold"> {{ item.title }} </h4>
                   <p class="mt-3 text-base leading-loose"> {{ item.content }} </p>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'weare',
     data: () => ({
            items: [{
                icon: 'star.png',
                    title: 'Lorem ipsum dolor sit amet.',
                    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, provident. Quod voluptates error incidunt laboriosam. Ipsa facere possimus magni nobis non mollitia labore, rem harum, esse ullam recusandae doloribus vero!',
                },
                {
                icon: 'heart.png',
                    title: 'Lorem ipsum dolor sit amet.',
                    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, provident. Quod voluptates error incidunt laboriosam. Ipsa facere possimus magni nobis non mollitia labore, rem harum, esse ullam recusandae doloribus vero!'
                },
                {
                icon: 'insurance.png',
                    title: 'Lorem ipsum dolor sit amet.',
                    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, provident. Quod voluptates error incidunt laboriosam. Ipsa facere possimus magni nobis non mollitia labore, rem harum, esse ullam recusandae doloribus vero!'
                }
            ]
        })
}
</script>
<style lang="scss" scoped>
    .flex-center-all {
        .bg-basecolor {
            box-shadow: 0px 0px 10px #00000026;
        }
    }
</style>