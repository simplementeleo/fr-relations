<template>
    <!-- <div> -->
        <!-- <div class="overlay z-20"></div> -->
        <!-- Detalles del responsive -->
        <video id="video-background" autoplay preload muted loop>
            <source src="../../assets/video/bg-video.mp4" type='video/mp4; codecs="avc1,mp4a"' />
            <source src="../../assets/video/bg-video.mp4" type='video/ogg; codecs="theora,vorbis"' />
            <source src="../../assets/video/bg-video.mp4" type='video/webm; codecs="vp8,vorbis"' />
        </video>
    <!-- </div> -->
</template>
<style lang="scss" scoped>
    .overlay {
        background: linear-gradient(45deg, #16161642, #0000);
    }
    #video-background {
        // width: 100%;
        // height: 150vh;
        position: fixed;
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        // z-index: -1;
    }
</style>
<script>
export default {
    name: 'videobg'
}
</script>
