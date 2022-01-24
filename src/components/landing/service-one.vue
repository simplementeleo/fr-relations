<template>
    <div>
        <svg v-if="three" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5655" fill-opacity="1" d="M0,288L120,245.3C240,203,480,117,720,112C960,107,1200,181,1320,218.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <svg v-if="four" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L120,80C240,64,480,32,720,32C960,32,1200,64,1320,80L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div :class="[white ? 'bg-white' : 'bg-basecolor']">
            <div :class="['container', 'mx-auto', !white ? 'text-white' : 'text-red-500']">
                <div class="flex-center-all">
                    <div :class="['h-32', 'w-32', !white ? 'bg-white' : 'bg-red-500', 'rounded-full']"></div>
                </div>
                <h4 class="text-2xl md:text-4xl text-center font-bold my-10"> Lorem ipsum dolor sit amet. </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 mt-5 pb-10">
                    <p class="p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias tenetur
                        odio labore sapiente, maxime laudantium rerum voluptas ut, in dignissimos, aliquid modi? Harum,
                        doloremque praesentium eveniet laborum pariatur saepe.</p>
                    <p class="border-l-0 md:border-l p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae molestias tenetur odio labore sapiente, maxime laudantium rerum voluptas ut, in
                        dignissimos, aliquid modi? Harum, doloremque praesentium eveniet laborum pariatur saepe.</p>
                </div>
            </div>
        </div>
        <svg v-if="three" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5655" fill-opacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </div>
</template>
<script>
    export default {
        name: 'service-one',
        props: ['white', 'three', 'four']
    }
</script>