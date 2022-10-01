<template>
  <nav class="float-rigth">
    <ul class="px-2">
      <router-link :to="'/'" class="mx-2 text-xl text-indigo-600 hover:text-gray-500">Articles</router-link>
      <a class="mx-2 text-xl text-indigo-600 hover:text-gray-500">Categorie</a>
      <router-link v-if='!isLoggedIn' :to="'/login'" class="mx-2 text-xl text-indigo-600 hover:text-gray-500">Se
        connecter</router-link>
      <button v-if='isLoggedIn' @click="logout"
        class="mx-2 text-xl text-indigo-600 hover:text-gray-500">Deconnexion</button>
    </ul>
  </nav>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import store from '@/store/store.js';
const isLoggedIn = ref(false);

onMounted(() => {
    store.commit('initial');
    isLoggedIn.value = store.state.user.isLoggedIn;
});


const logout = () => {
  store.commit('logout');
  window.location.href = '/';
}


</script>
