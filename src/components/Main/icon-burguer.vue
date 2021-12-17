<template>
    <div>
        <div :class="['container', show.animate, color]">
            <div class="linea1"></div>
            <div class="linea2"></div>
            <div class="linea3"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'icon-burguer',
    props: ['show', 'color'],
    data: () => ({
        isActive: false
    }),
    computed: {
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">

.container {
  display: inline-block;
  cursor: pointer;
}
.linea1, .linea2, .linea3 {
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
}
.white {
    .linea1, .linea2, .linea3 {
        background: #fff;
    }
}
.black {
    .linea1, .linea2, .linea3 {
        background: #333;
    }
}


.Out {
    .linea1 {
    // -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    // transform: rotate(-45deg) translate(-9px, 6px);
    // background: #333;
        animation: .2s slideOut forwards;

    }
    .linea2 {
        // opacity: 0;
        // background: #333;
        animation: .2s slideOut forwards;
        animation-delay: .1s;
    }
    .linea3 {
        // -webkit-transform: rotate(45deg) translate(-8px, -8px);
        // transform: rotate(45deg) translate(-8px, -8px);
        // background: #333;
        animation: .2s slideOut forwards;
        animation-delay: .2s;
    }
}
.Input {
    .linea1 {
    // -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    // transform: rotate(-45deg) translate(-9px, 6px);
    // background: #333;
        opacity: 0;
        animation: .2s slideInput forwards;
        animation-delay: .1s;

    }
    .linea2 {
        opacity: 0;
        // background: #333;
        animation: .2s slideInput forwards;
        animation-delay: .2s;
    }
    .linea3 {
        // -webkit-transform: rotate(45deg) translate(-8px, -8px);
        // transform: rotate(45deg) translate(-8px, -8px);
        // background: #333;
        opacity: 0;
        animation: .2s slideInput forwards;
        animation-delay: .3s;
    }
}

@keyframes slideOut {
    to {
        opacity: 0;
        transform: translateX(-5px);
    }
}
@keyframes slideInput {
    from {
        opacity: 0;
        transform: translateX(-5px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}


</style>