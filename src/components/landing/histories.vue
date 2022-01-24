<template>
   <div>
        <div class="bg-white">
        <h4 class="text-2xl md:text-4xl font-bold text-center text-basecolor">Histoires d'amour</h4>
        <section class="testimonials">
            <div class="container mx-auto">
                <div class="grid grid-cols-1">
                    <div id="customers-testimonials" class="owl-carousel">
                        <div v-for="i in 5" v-bind:key="i" class="item py-5">
                            <div class="shadow-effect">
                                <div class="w-24 h-24 rounded-full bg-gray-300 py-5 mx-auto"></div>
                                <p class="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat at aut id
                                    quisquam nam, voluptatum explicabo eum suscipit mollitia similique tenetur totam
                                    quam autem cum nobis molestias iure ut.</p>
                            </div>
                            <div class="testimonial-name">- Couple</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,208C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
   </div>
</template>
<script>
    export default {
        name: 'histories',
        mounted() {
            jQuery(document).ready(function ($) {
                "use strict";
                $('#customers-testimonials').owlCarousel({
                    loop: true,
                    center: true,
                    items: 3,
                    margin: 0,
                    autoplay: true,
                    dots: true,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1170: {
                            items: 3
                        }
                    }
                });
            });
        }
    }
</script>

<style scoped>
    .shadow-effect {
        background: #fff;
        padding: 20px;
        border-radius: 4px;
        text-align: center;
        border: 1px solid #ECECEC;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.10), 0 15px 12px rgba(0, 0, 0, 0.02);
    }

    #customers-testimonials .shadow-effect p {
        font-size: 17px;
        line-height: 1.5;
        font-weight: 300;
    }

    .testimonial-name {
        margin: -17px auto 0;
        display: table;
        width: auto;
        background: #3190E7;
        padding: 9px 35px;
        border-radius: 12px;
        text-align: center;
        color: #fff;
        box-shadow: 0 9px 18px rgba(0, 0, 0, 0.12), 0 5px 7px rgba(0, 0, 0, 0.05);
    }

    #customers-testimonials .item {
        text-align: center;
        padding: 50px;
        margin-bottom: 80px;
        opacity: .2;
        -webkit-transform: scale3d(0.8, 0.8, 1);
        transform: scale3d(0.8, 0.8, 1);
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    #customers-testimonials .owl-item.active.center .item {
        opacity: 1;
        -webkit-transform: scale3d(1.0, 1.0, 1);
        transform: scale3d(1.0, 1.0, 1);
    }

    .owl-carousel .owl-item img {
        transform-style: preserve-3d;
        max-width: 90px;
        margin: 0 auto 17px;
    }

    #customers-testimonials.owl-carousel .owl-dots .owl-dot.active span,
    #customers-testimonials.owl-carousel .owl-dots .owl-dot:hover span {
        background: #3190E7;
        transform: translate3d(0px, -50%, 0px) scale(0.7);
    }

    #customers-testimonials.owl-carousel .owl-dots {
        display: inline-block;
        width: 100%;
        text-align: center;
    }

    #customers-testimonials.owl-carousel .owl-dots .owl-dot {
        display: inline-block;
    }

    #customers-testimonials.owl-carousel .owl-dots .owl-dot span {
        background: #3190E7;
        display: inline-block;
        height: 20px;
        margin: 0 2px 5px;
        transform: translate3d(0px, -50%, 0px) scale(0.3);
        transform-origin: 50% 50% 0;
        transition: all 250ms ease-out 0s;
        width: 20px;
    }
</style>