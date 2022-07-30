<script>
import useArticle from '@/composables/article.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SaveComment from './SaveComment.vue';
export default {
    setup() {
        const { fetchArticle, article } = useArticle();
        const route = useRoute();
        onMounted(() => {
            fetchArticle(route.params.id);
        });
        return {
            article,
        };
    },
    components: { SaveComment }
}
</script>
<template>
  <div class="container mx-auto px-48 mt-20">
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        class="h-64 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style="background-image: url('https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80')"
        title="Woman holding a mug">
      </div>
      <div
        class="border-2 border-gray-400  bg-white rounded-lg mx-2 p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">{{ article.title }}</div>
          <p class="text-gray-700 text-base">{{ article.content }}</p>
        </div>
        <div class="flex items-center">
          <div class="text-sm flex">
            <p class="text-gray-600 float-rigth">{{ article.created_at }}</p>
          </div>
        </div>
      </div>
    </div>
    <SaveComment/>
  </div>
</template>

