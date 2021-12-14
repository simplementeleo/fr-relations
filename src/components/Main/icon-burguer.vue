<template>
    <div>
        <div :class="['container', show ? 'cambiar' : '']">
            <div class="linea1"></div>
            <div class="linea2"></div>
            <div class="linea3"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'icon-burguer',
    props: ['show'],
    data: () => ({
        isActive: false
    })
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
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}

.cambiar {
    .linea1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
    background: #333;
    }
    .linea2 {opacity: 0; background: #333;}
    .linea3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
    background: #333;
    }
}


</style>