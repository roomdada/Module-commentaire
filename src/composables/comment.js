import axios from 'axios';
import { ref } from 'vue';

export default function useComment() {
  const baseUrl = "https://api-regs.herokuapp.com/api/comments";
  const loading = ref(false);
  const saveComment = async (comment) => {
    loading.value = true;
    await axios.post(baseUrl, comment).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => loading.value = false);
  }
  return { saveComment, loading }
}
