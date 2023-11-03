<template>
<v-btn variant="outlined"  @click="increment">
    +
</v-btn>
    <div>
        {{ count }}
    </div>
</template>

<script setup  lang="ts">
import {ref } from 'vue'
        const count=ref(0);

        function increment(){
            count.value++
        }
</script>

<style scoped>

</style>