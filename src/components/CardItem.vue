<script setup lang="ts">
import type { Card } from '@/types/Card';
import Liked from '@/assets/icons/like-1.svg'
import Like from '@/assets/icons/like-2.svg'
import Sneakers from '@/assets/images/sneakers-1.jpg'
import Plus from '@/assets/icons/plus.svg'
import Checked from '@/assets/icons/checked.svg'
defineProps<Card>()
</script>

<template >
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img class="absolute top-8 left-8" :src="Liked" alt="liked" />
    <img :onclick="onClickFavorite" :src="`/src/assets/images`+imageUrl" alt="sneakers" />
    <p class="pt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <span>{{ price }}</span>
      </div>

      <img :on-click="onClickAdd" :src="!isAdded ? Plus : Checked" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
