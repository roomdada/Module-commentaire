import axios from 'axios';
import { ref } from 'vue';

export default function useArticle() {
  const baseUrl = "https://api-regs.herokuapp.com/api/articles";
  const articles = ref([])
  const loading = ref(false)
  const article = ref({});

  const fetchArticles = async () => {
    await axios.get(baseUrl).then((response) => {
      loading.value = true;
      articles.value = response.data.data;
    }).catch((error) => {
      console.log(error);
    }).finally(() => loading.value = false);
  }

  const fetchArticle = async (id) => {
    await axios.get(`${baseUrl}/${id}`).then((response) => {
      article.value = response.data.data;
    }).catch((error) => {
      console.log(error);
    })
  }

  return { fetchArticles, fetchArticle, articles, article, loading }
}
