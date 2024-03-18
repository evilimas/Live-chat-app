import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt');

  const unsub = collectionRef.onSnapshot(
    (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'Could not fetch the data';
    }
  );
  watchEffect((onCleanup) => {
    // unsub from prev collection when watcher is stoped (component unmounted)
    onCleanup(() => unsub());
  });
  return { documents, error };
};

export default getCollection;
