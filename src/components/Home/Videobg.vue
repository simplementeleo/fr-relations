<template>
    <div>
        <div class="overlay absolute left-0 top-0 w-full h-full z-20"></div>
        <!-- Detalles del responsive -->
        <video id="video-background" class="fixed h-full md:h-auto w-auto md:w-full left-0 top-0 z-10" width="100%" height="315" autoplay preload muted>
            <source src="../../assets/video/bg-video.mp4" type='video/mp4; codecs="avc1,mp4a"' />
            <source src="../../assets/video/bg-video.mp4" type='video/ogg; codecs="theora,vorbis"' />
            <source src="../../assets/video/bg-video.mp4" type='video/webm; codecs="vp8,vorbis"' />
        </video>
    </div>
</template>
<style lang="scss" scoped>
    .overlay {
        background: linear-gradient(45deg, #16161642, #0000);
    }
    video {
        width: 100%;
    }
</style>
<script>
export default {
    name: 'videobg'
}
</script>
