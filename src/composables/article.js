import axiosHttpClient from '@/axios/index';
import { ref } from 'vue';

export default function useArticle() {
  const articles = ref([])
  const loading = ref(false)
  const article = ref({});

  const fetchArticles = async () => {
    await axiosHttpClient.get('articles').then((response) => {
      loading.value = true;
      articles.value = response.data.data;
    }).catch((error) => {
      console.log(error);
    }).finally(() => loading.value = false);
  }

  const fetchArticle = async (id) => {
    await axiosHttpClient.get(`${'articles'}/${id}`).then((response) => {
      article.value = response.data.data;
    }).catch((error) => {
      console.log(error);
    })
  }

  return { fetchArticles, fetchArticle, articles, article, loading }
}
