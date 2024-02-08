<script setup lang="ts">
import CardList from '@/components/CardList.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import axios from 'axios'
import { onMounted, provide, reactive, ref, watch } from 'vue'
import Search from './assets/icons/search.svg'
import './main.css'
import type { Basket, Card, Params } from './types'
import DrawerModal from './components/DrawerModal.vue'
import type { InjectionKey } from 'vue'
const items = ref<Card[]>([]);
const onDrawerOpen=ref(false);
const basket=ref<Basket[]>([])

const onChangeModal=()=>{
  onDrawerOpen.value=!onDrawerOpen.value
}

// const cardActions =Symbol() as InjectionKey<()=>void>
provide("cardActions",onChangeModal)

const filter = reactive({
  sortBy: '',
  searchQuery: ''
})
const addFavorite = async (item: Card) => {
  const obj = {
    parentId: item.id
  }
  try {
    if (!item.isFavorite) {
      const { data } = await axios.post('https://604781a0efa572c1.mokky.dev/favorites', {
        obj
      })
      console.log(data)
      item.isFavorite = true
      item.favoriteId = data.id
    }else{
      await axios.delete('https://604781a0efa572c1.mokky.dev/favorites/'+item.favoriteId);
      item.isFavorite=false
    }
  } catch (error) {
    console.log(error)
  }
  item.isFavorite = !item.isFavorite
}

const addToCart=(item:Card)=>{

  const itemIndex=basket.value.findIndex(obj=>obj.id===item.id)
  console.log(item)
  if (itemIndex===-1){
    console.log("here")
    basket.value.push(item);
    
  }else{
   basket.value.splice(itemIndex,1)
  }
  console.log(basket.value)
}

const addFavoriteEmit = async (item: Card) => {
  item.isFavorite = !item.isFavorite
}
provide('addToCart',addToCart)
provide('addFavorite', addFavorite)
const fetchItems = async () => {
  try {
    const params: Params = {
      sortBy: filter.sortBy
    }

    if (filter.searchQuery) {
      params.title = `*${filter.searchQuery}`
    }
    const { data } = await axios.get<Card[]>('https://604781a0efa572c1.mokky.dev/items', {
      params
    })
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: true,
      isAdded: false,
      favoriteId:undefined
    }))
  } catch (error) {
    console.log(error)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get<Card[]>(
      'https://604781a0efa572c1.mokky.dev/favorites'
    )

    items.value = items.value.map((obj) => {
      const favorite = favorites.find((item) => item.parentId === obj.id)
      if (!favorite) {
        return obj
      }
      return {
        ...obj,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})
watch(() => filter.sortBy, fetchItems)
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl mt-14">
     <DrawerModal :basket="basket"  @onOpen="onChangeModal" v-if="onDrawerOpen"/>
    <HeaderComponent @onOpen="onChangeModal" />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font mb-8">All Items</h2>
        <div class="flex gap-4">
          <select v-model="filter.sortBy" class="px-3 py-2 border rounded-md outline-none">
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

      <CardList :items="items" @addFavoriteEmit="addFavoriteEmit" @addToCart="addToCart" />
    </div>
  </div>
</template>

<style scoped></style>
