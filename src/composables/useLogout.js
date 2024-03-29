import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    await projectAuth.signOut();
    error.value = null;
  } catch (err) {
    error.value = err.message;
    console.log(err.message);
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
