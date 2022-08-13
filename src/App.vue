<template>
  <div>
    <div class="mx-auto py-4 px-10 flex justify-between">
      <a class="text-3xl font-bold">Logo</a>
      <nav class="float-rigth">
        <ul class="px-2">
          <router-link :to="'/'" class="mx-2 text-xl text-indigo-600 hover:text-gray-500">Articles</router-link>
          <a class="mx-2 text-xl text-indigo-600 hover:text-gray-500">Categorie</a>
          <router-link v-if='!isLoggedIn' :to="'/login'" class="mx-2 text-xl text-indigo-600 hover:text-gray-500">Se connecter</router-link>
          <button v-if='isLoggedIn'  @click="logout" class="mx-2 text-xl text-indigo-600 hover:text-gray-500">Deconnexion</button>
        </ul>
      </nav>
    </div>
    <div class="text-center">
      <h1 class="text-6xl mt-20 text-extrabold">Article for everyone</h1>
      <p class="item-center text-semiblod text-xl">Nous vous proposons les meilleurs articles dans des domaines divers
        & en vogue
      </p>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const isLoggedIn = ref(false);

onMounted(() => {
  localStorage.getItem('token') ? isLoggedIn.value = true : isLoggedIn.value = false;
});

const logout = () => {
  localStorage.removeItem('token');
  isLoggedIn.value = false;
}
</script>


