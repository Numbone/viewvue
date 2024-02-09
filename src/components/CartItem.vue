<script setup lang="ts">
import type { Basket } from '@/types'
defineProps<Basket>()
import Close from '@/assets/icons/close.svg'
import { defineEmits } from 'vue'
const emits=defineEmits([
"onDelete"
])
</script>

<template>
  <div class="relative flex w-full border border-slate-100 rounded-xl p-4 gap-4">
    <img :src="`/src/assets/images` + imageUrl" class="w-16 h-16" alt="Sneaker" />
    <div class="flex flex-col w-full flex-1">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-5">
        <span class="font-bold">{{ price }} руб.</span>
        <img
          @click="emits('onDelete',id)"
          class="cursor-pointer opacity-30 hover:opacity-100 transition"
          :src="Close"
          alt="Close"
        />
      </div>
    </div>
  </div>
</template>
