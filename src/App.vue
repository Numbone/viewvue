<script setup lang="ts">
import "./main.css";
import { ref, watchEffect } from 'vue';
interface TodoItem{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
const drawer=ref(false);
const commits = ref<TodoItem[]|null>(null);

defineProps({
  greeting:String
})

watchEffect(async()=>{
  commits.value=await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
})
</script>

<template>
  <div class="flex">
    123
  </div>
 
</template>

<style scoped>
</style>
