<script setup lang="ts">
import './main.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import CardList from '@/components/CardList.vue'
import DrawerModal from './components/DrawerModal.vue';
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl mt-14">
    <DrawerModal/>
    <HeaderComponent />
    <div class="p-10">
      <h2 class="text-3xl font mb-8">All Items</h2>
      <CardList/>
     
    </div>
  </div>
</template>

<style scoped></style>
