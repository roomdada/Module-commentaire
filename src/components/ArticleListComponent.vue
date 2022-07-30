<script>
import useArticle from '@/composables/article.js';
import { onMounted } from 'vue';
export default {
  setup() {
    const { fetchArticles, articles, loading } = useArticle();
    onMounted(() => {
      fetchArticles();
    });

    return {
      articles,
      loading
    };
  }
}
</script>
<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-6xl mx-auto">
      <div v-if="!loading" class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden" v-for="article in articles"
          v-bind:key="article.id">
          <div class="flex-shrink-0">
            <img class="h-30 w-full object-cover"
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt="">
          </div>
          <div class="flex-1 bg-white p-4 flex flex-col justify-between">
            <div class="flex-1">
              <div class="flex justify-between mb-4">
                <span href="#" class="ext-xs text-gray-900 px-3 mx-4 bg-green-300 rounded-full"> {{
                    article.category.title
                }} </span>
                <span href="#" class="text-gray-500"> {{ article.comments_count }} commentaire(s) </span>
              </div>
              <p class="text-sl font-semibold text-gray-900 text-center">
                {{ article.title }}
              </p>
            </div>

          </div>
          <div class="mb-2 mx-2 mb-2 w-full">
            <router-link :to="'/articles/' + article.id"
              class="text-indigo-600 px-2 py-2 rounded-lg bg-gray-300 hover:text-gray-500">
              Lire l'article
            </router-link>
          </div>
        </div>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none" v-if="loading">
        <p class="text-xl text-gray-900 text-extrabold">Chargement des données...</p>
      </div>
    </div>
    <!--loading -->

  </div>
</template>

