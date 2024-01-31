<script setup lang="ts">
import './main.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import CardList from '@/components/CardList.vue'
import DrawerModal from './components/DrawerModal.vue'
import Search from './assets/icons/search.svg'
import { onMounted } from 'vue'
import axios from 'axios'
import { ref, watch, reactive } from 'vue'
import type { Card } from './types/Card'

const filter = reactive({
  sortBy: '',
  searchQuery: ''
})

const items = ref<Card[]>([]);
onMounted(async () => {
  try {
    const { data } = await axios.get<Card[]>('https://604781a0efa572c1.mokky.dev/items')
    items.value = data
  } catch (error) {
    console.log(error)
  }
})
watch(()=>filter.sortBy, async () => {
  try {
    console.log(filter.sortBy)
    const { data } = await axios.get<Card[]>(
     
      'https://604781a0efa572c1.mokky.dev/items?sortBy=' + filter.sortBy
    )
    console.log(data)
    items.value = data
  } catch (error) {
    console.log(error)
  }
})
console.log(filter.sortBy, 'items')
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl mt-14">
    <!-- <DrawerModal/> -->
    <HeaderComponent />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font mb-8">All Items</h2>
        <div class="flex gap-4">
          <select  v-model="filter.sortBy" class="px-3 py-2 border rounded-md outline-none">
            <option value="name">By name</option>
            <option value="price">By price Asc</option>
            <option value="-price">by price desc</option>
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

      <CardList :items="items" />
    </div>
  </div>
</template>

<style scoped></style>
