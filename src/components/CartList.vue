<template>
  <div class="flex flex-col gap-4">
    <CartItem v-for="item in props.item" v-bind="item" :key="item.id" />
  </div>
</template>

<script setup lang="ts">
import type { Basket } from '@/types'
import CartItem from './CartItem.vue'
const props = defineProps({
  item: Array<Basket>
})
</script>

<style scoped></style>
