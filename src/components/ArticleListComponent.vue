<script setup>
import useArticle from '@/composables/article.js';
import { onMounted } from 'vue';
import HeaderComponent from '@/components/Partials/HeaderComponent.vue';
import store from '@/store/store.js';
const { fetchArticles, articles, loading } = useArticle();

onMounted(() => {
  fetchArticles();
  console.log(store.state);
});

</script>
<template>
  <header-component title="Article for everyone" description="Nous vous proposons les meilleurs articles dans des domaines divers
      & en vogue" />
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-6xl mx-auto">
      <div v-if="!loading" class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden" v-for="article in articles"
          v-bind:key="article.id">
          <div class="flex-shrink-0">
            <img class="h-30 w-full object-cover" :src="article.image" alt="">
          </div>
          <div class="flex-1 bg-white p-4 flex flex-col justify-between">
            <div class="flex-1">
              <div class="flex justify-between mb-8">
                <span class="text-xs text-gray-900 px-2 py-2 bg-green-100  border-2 border-green-900 rounded-full">
                  {{ article.category.title }}
                </span>
                <span class="text-gray-500"> {{ article.comments_count }} commentaire(s) </span>
              </div>
              <p class="text-sl font-semibold text-gray-900 text-center">
                {{ article.title }}
              </p>
            </div>

          </div>
          <div class="mb-2 px-2 mb-2 w-full">
            <router-link :to="'/articles/' + article.id"
              class="text-indigo-600 py-4 block w-full text-sm text-center rounded-lg bg-indigo-100 uppercase font-bold hover:bg-gray-500 hover:text-white">
              Lire l'article
            </router-link>
          </div>
        </div>
      </div>
      <div class="mt-12 mx-auto lg:max-w-none mx-auto container text-center" v-if="loading">
        <p class="text-2xl text-gray-900 text-extrabold text-center">
          <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
          Chargement des données...
        </p>
      </div>
    </div>
    <!--loading -->

  </div>
</template>

