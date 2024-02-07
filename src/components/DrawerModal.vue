<script lang="ts" setup>
import CartItem from "./CartItem.vue"
import NextIcon from '@/assets/icons/arrow-next.svg'
import DrawerHead from './DrawerHead.vue'
import type CartListVue from "./CartList.vue";
import { defineProps } from 'vue';

</script>

<template>
  <div  class= 'left-0 top-0 fixed z-10 h-full w-full bg-black opacity-70'></div>
  <div
    class="flex flex-col justify-between fixed z-10 top-0 h-full right-0 w-96 bg-white px-10 py-7"
  >
    <DrawerHead />
    <div class="flex flex-col flex-1 justify-between">
      <CartListVue/>

      <div>
        <div class="flex flex-col gap-5">
          <div class="flex items-end gap-2">
            <span>Итого:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <span class="font-bold">1000 руб.</span>
          </div>

          <div class="flex items-end gap-2">
            <span>Налог 5%:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <span class="font-bold">50 руб.</span>
          </div>
        </div>

        <button
          class="flex justify-center items-center gap-3 w-full py-3 mt-10 bg-lime-500 text-white rounded-xl transition active:bg-lime-700 hover:bg-lime-600"
        >
          Оформить заказ
          <img :src="NextIcon" alt="Arrow" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
