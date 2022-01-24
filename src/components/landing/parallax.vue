<template>
    <div class="relative">
        <svg class="top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path :fill="white ? '#ffffff' : '#fa5655'" fill-opacity="1" d="M0,224L120,197.3C240,171,480,117,720,112C960,107,1200,149,1320,170.7L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <svg class="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path :fill="white ? '#ffffff' : '#fa5655'" fill-opacity="1" d="M0,224L120,197.3C240,171,480,117,720,112C960,107,1200,149,1320,170.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div class="parallax"></div>
    </div>
</template>
<script>
export default {
    name: 'parallax',
    props: ['white']
}
</script>
<style lang="scss" scoped>
.relative {
    height: 100vh;
}
    .top-svg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
     .bottom-svg {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
    }
    .parallax {
        position: absolute;
        top: 0;
        left: 0;
        background: url('../../assets/images/four-proccess/tour-eiffel.jpg') no-repeat;
        height: 100vh;
        width: 100%;
        background-attachment: fixed;
    }
</style>