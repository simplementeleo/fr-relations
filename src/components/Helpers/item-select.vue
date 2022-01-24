<template>
    <div>
        <div class="select">
            Select
            <div class="options bg-basecolor">
                <div v-for="i in 4" v-bind:key="i" class="item"> item {{ i }} </div>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        name: 'item-select'
    }
</script>
<style lang="scss" scoped>
$border: 1px solid #ccc;
$shadow: 0px 0px 5px #00000026;
    .select {
        position: relative;
        width: 100%;
        border-radius: 3px;
        border: $border;
        background: #fff;
        cursor: pointer;
        padding: 4px 6px;
        box-shadow: $shadow;

        .options {
            position: absolute;
            box-shadow: $shadow;
            border: $border;
        }

    }
</style>