<template>
  <div class="grid grid-cols-4 gap-5">
    <CardItem v-for="(item,index) in items" v-bind="item" :key="index"  />
  </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue'
import type { Card } from '@/types/Card'
defineProps({
  items: Array<Card>
})
</script>

<style scoped></style>
