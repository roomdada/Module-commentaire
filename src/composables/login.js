import { ref } from 'vue';
import axios from 'axios';


export default function useLogin() {
  const baseUrl = "https://api-regs.herokuapp.com/api/auth/login"; //admin@email.com
  const loading = ref(false);

  const login = async (data) => {
    loading.value = true;
    await axios.post(baseUrl, data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => loading.value = false);
  }

  return { login }

}
