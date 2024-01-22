<script setup lang="ts">
import './main.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import CardList from '@/components/CardList.vue'
import DrawerModal from './components/DrawerModal.vue'
import Search from './assets/icons/search.svg'
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl mt-14">
    <!-- <DrawerModal/> -->
    <HeaderComponent />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font mb-8">All Items</h2>
        <div class="flex gap-4">
          <select class="px-3 py-2 border rounded-md outline-none">
            <option>By name</option>
            <option>By price Asc</option>
            <option>by price desc</option>
          </select>

          <div class="relative">
            <img :src="Search" alt="search" class="absolute left-4 top-3" />
            <input
              type="search"
              placeholder="search.."
              class="border border-gray-200 rounded-xl py-2 pl-10 pr-4 outline-none focus:border-gray-400"
            />
          </div>
        </div>
      </div>

      <CardList />
    </div>
  </div>
</template>

<style scoped></style>
