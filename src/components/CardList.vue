<template>
  <div class="grid grid-cols-4 gap-5">
    <CardItem v-for="item in items"  :key="item.title"/>
  </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue'
import type { Card } from '@/types/Card';
const items=defineProps<Card[]>()
</script>

<style scoped></style>
