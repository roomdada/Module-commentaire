<script>
import useArticle from '@/composables/article.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SaveComment from './SaveComment.vue';
import useComment from '@/composables/comment.js';
import moment from 'moment';
export default {
  setup() {

    const { fetchArticle, article, loading } = useArticle();
    const { getComments, comments  } = useComment();
    const route = useRoute();
    // change moment locale
    moment.locale('fr');

    // refresh component when comment is added

    

    onMounted(async () => {
      await fetchArticle(route.params.id);
      await getComments(route.params.id);
    });

    return {
      article,
      loading,
      comments,
      moment
    };
  },
  components: { SaveComment }
}
</script>
<template>
  <div class="container mx-auto px-48 mt-20">
    <div v-if="loading" role="status" class="flex items-center justify-center">
      <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
    <div v-if="!loading" class="max-w-sm w-full lg:max-w-full lg:flex">
      <img class="h-30 w-1/3 object-cover" :src="article.image" alt="">
      <div class="border-2 border-gray-400  bg-white rounded-lg mx-2 p-4 flex flex-col justify-between leading-normal">
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
    <!-- list all coommens -->
    <div class="container mb-4 border-2 mt-4 border-gray-100">
      <div class="mx-4 m-4">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Commentaires</h2>
        <div class="flow-root">
          <ul role="list" class="-mb-8">
            <li v-for="comment in comments" v-bind:key="comment.id">
              <div class="relative pb-8">
                <div class="relative flex items-start space-x-3">
                  <div class="relative">
                    <img class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                      src="https://ui-avatars.com/api/?name=J+Auteur"
                      alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <div>
                      <div class="text-sm">
                        <a href="#" class="font-medium text-gray-900">Auteur</a>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">{{ moment(comment.created_at).format("LL") }}</p>
                    </div>
                    <div class="mt-2 text-sm text-gray-700">
                      <p>{{ comment.content }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
    <SaveComment :article-id='article.id' />

  </div>
</template>

