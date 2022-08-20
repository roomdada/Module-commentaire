<template>
  <div>
    <div class="mx-auto py-4 px-10 flex justify-between">
      <a class="text-3xl font-bold">Logo</a>
      <navbar-component/>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import store from '@/store/store.js';
import NavbarComponent from './components/Partials/NavbarComponent.vue';

onMounted(() => {
  store.commit('initial');
});

</script>


