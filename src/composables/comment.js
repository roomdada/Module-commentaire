import { ref } from 'vue';
import axiosHttpClient from '@/axios';

export default function useComment() {
  const loading = ref(false);
  const comments = ref([])


  const saveComment = async (comment) => {
    loading.value = true;
    await axiosHttpClient.post('comments', comment).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => loading.value = false);
  }

  const getComments = async (id) => {
    loading.value = true;
    await axiosHttpClient.get(`${'articles'}/${id}/${'comments'}`).then((response) => {
      comments.value = response.data.data;
    }).catch((error) => {
      console.log(error);
    }).finally(() => loading.value = false);
  }
  return { saveComment, getComments, loading, comments }
}
