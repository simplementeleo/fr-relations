<template>
    <div class="bg-basecolor">
        <img :class="['img-banner', rotate ? 'rotate' : '']" src="../../assets/images/landing/border-section-banner.png">
    </div>
</template>
<script>
export default {
    name: 'banner-img',
    props: ['rotate']
}
</script>
<style lang="scss">
.bg-basecolor {
    position: relative;
    width: 100%;
    .img-banner {
        width: 100vw;
    }
    .rotate {
        transform: rotateZ(180deg);
    }
}
    
</style>