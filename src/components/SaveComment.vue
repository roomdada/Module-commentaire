<script setup>
import { defineProps, ref, onMounted } from 'vue';
import store from '../store/store.js';
import axiosHttpClient from '@/axios';

const props = defineProps(['articleId']);
const isLoggedIn = ref(false);
const successMessage = ref('');

const content = ref('');

onMounted(() => {
  store.commit('initial');
  isLoggedIn.value = store.state.user.isLoggedIn;  
  console.log(isLoggedIn.value);
});


const storeComment = async () => {
  const comment = {
    content: content.value,
    article_id: props.articleId,
  };
  
  await axiosHttpClient.post('comments', comment).then((res) => {
    successMessage.value = res.data.message;
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    content.value = '';
  });

}

</script>
<template>
  <div class="container mt-2 mb-10">
    <div v-if="!isLoggedIn" class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      <svg aria-hidden="true" class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Vous devez vous connecter pour soumettre un commentaire</span>
      </div>
    </div>
    <div v-if="successMessage"
      class="flex p-4 mb-4 text-sm text-black bg-green-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      <svg aria-hidden="true" class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">{{ successMessage }}</span>
      </div>
    </div>
    <form>
      <textarea v-model="content" id="message" rows="4"
        class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Laisser un commentaire..."></textarea>
    </form>
    <button v-if="isLoggedIn" v-on:click.prevent='storeComment' type="button"
      class="text-white bg-green-700 mb-4 mt-4 hover:bg-green-900 uppercase float-rigth focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Soumettre</button>
  </div>
</template>
