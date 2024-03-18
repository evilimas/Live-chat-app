import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (data) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(data);
    } catch (err) {
      console.log(err.message);
      error.value = 'Could not send the message';
    }
  };
  return { error, addDoc };
};

export default useCollection;
