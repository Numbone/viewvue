<template>
  <div class="grid grid-cols-4 gap-5">
    <CardItem 
      v-for="(item, index) in items"
      v-bind="item" 
      :key="index" 
      :onClickFavorite="()=>addFavorite &&addFavorite(item)" 
      
      />
  </div>
</template>

<script setup lang="ts">
import type { Card } from '@/types/Card';
import { inject } from 'vue';
import CardItem from './CardItem.vue';

const emit=defineEmits(['addFavoriteEmit']);

const addFavorite =inject<(item:Card)=>void>("addFavorite")
defineProps({
  items: Array<Card>
})
</script>

<style scoped></style>
