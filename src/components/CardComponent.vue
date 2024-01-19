<template>
  <div
    class="relative m-10 border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img class="absolute top-8 left-8" :src="Liked" alt="liked" />
    <img :src="Sneakers" alt="sneakers" />
    <p class="pt-2">Nike Blazer Mid Suede</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <span>1222</span>
      </div>

      <img :src="Plus" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Liked from '@/assets/icons/like-1.svg'
import Like from '@/assets/icons/like-2.svg'
import Sneakers from '@/assets/images/sneakers-1.jpg'
import Plus from '@/assets/icons/plus.svg'
</script>

<style scoped></style>
