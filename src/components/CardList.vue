<template>
  <div class="grid grid-cols-4 gap-5">
    <CardItem 
      v-for="(item, index) in items"
      v-bind="item" 
      :key="index" 
      :onClickFavorite="()=>addFavorite &&addFavorite(item)" 
      :onClickAdd="()=>emit('addToCart',item)"
      />
  </div>
</template>

<script setup lang="ts">
import type { Card } from '@/types/Card';
import { inject } from 'vue';
import CardItem from './CardItem.vue';

const emit=defineEmits(
  ['addFavoriteEmit','addToCart'],
  );

const addFavorite =inject<(item:Card)=>void>("addFavorite")
const addToCart =inject<(item:Card)=>void>("addToCart")
defineProps({
  items: Array<Card>
})
</script>

<style scoped></style>
