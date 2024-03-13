<template>
  <div class="root">
    <h1 class="heading">
      Hello <span class="span">{{ group }}</span> community
    </h1>
    <input v-model="group" type="text" class="input" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const group = ref<string>()
</script>

<style scoped>
.root { text-align: center; }
.heading { display: flex; padding: 10px; flex-direction: column; }
.span { background-color: #f7df1e; padding: 10px; border-radius: 10px 40px;}
.input { padding: 6px 10px; border: 1px solid black; }
</style>