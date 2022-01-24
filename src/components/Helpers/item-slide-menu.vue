<template>
     <div :class="normal ? 'item-normal-menu' : 'item-slide-menu'">
        <span class="font-bold text-gray-800 span-name mb-4 md:mb-0">
          {{ name }}
        </span>
        <div :class="normal ? ['label-normal'] : 'label-min-max-slide'">
         <slot></slot>
         <div class="flex justify-between text-sm mt-1" v-if="!normal">
          <span>
            {{ min }}
          </span>
           <span>
             {{ max }}
          </span>
         </div>
        </div>
      </div>
</template>
<script>
export default {
    name: 'item-slide-menu',
    props: ['min', 'max', 'name', 'normal']
}
</script>
<style lang="scss" scoped>
  .span-name {
    width: 200px;
  }
</style>