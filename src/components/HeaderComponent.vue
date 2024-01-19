<script setup lang="ts">
import Logo from '@/assets/images/logo.png'
import Cart from '@/assets/icons/cart.svg'
import Heart from '@/assets/icons/heart.svg'
import Profile from '@/assets/icons/profile.svg'
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-8 py-8 items-center">
    <div class="flex items-center gap-4">
      <img :src="Logo" alt="logo" class="w-10" />
      <div class="">
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-400">Best sneakers shop</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li class="flex items-center gap-3 text-slate-400 hover:text-black cursor-pointer">
        <img :src="Cart" alt="cart" />
        <span>1205 tg</span>
      </li>
      <li class="flex items-center gap-3 text-slate-400 hover:text-black cursor-pointer">
        <img :src="Heart" alt="cart" />
        <span>Bookmarks</span>
      </li>
      <li class="flex items-center gap-3 text-slate-400 hover:text-black cursor-pointer">
        <img :src="Profile" alt="cart" />
        <span>Profile</span>
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
