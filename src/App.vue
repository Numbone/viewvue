

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref,watchEffect } from 'vue'
interface TodoItem{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
const drawer=ref(false);
const commits = ref<TodoItem[]|null>(null);

watchEffect(async()=>{
  commits.value=await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
})
console.log(commits)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>

          <v-btn icon="mdi-magnify"></v-btn>

          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-list>
        <v-list-item
        v-for="n in commits"
        :key="n.id"
        :title="n.title"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        >
        </v-list-item>
      </v-list>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
