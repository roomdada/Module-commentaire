<script setup>
 import { defineProps } from 'vue';
 const props = defineProps(['title', 'description'])
</script>
<template>
  <div class="text-center">
    <h1 class="text-6xl mt-20 text-extrabold">{{ props.title }}</h1>
    <p class="item-center text-semiblod text-xl">
      {{ props.description }}
    </p>
  </div>
</template>
