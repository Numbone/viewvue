<template>
  <div class="flex flex-col gap-4">
    <CartItem v-for="item in props.item" v-bind="item" :key="item.id" @onDelete="removeItemFromBasket" />
  </div>
</template>

<script setup lang="ts">
import type { Basket } from '@/types';
import { inject } from 'vue';
import CartItem from './CartItem.vue';
const props = defineProps({
  item: Array<Basket>
})
const removeItemFromBasket = inject<(id: number) => void>('removeItemFromBasket')
</script>

<style scoped></style>
