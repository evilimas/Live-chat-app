<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send...."
      v-model="message"
      @keypress.enter="handleSubmit"
    >
    </textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
// imports
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { timestamp } from '../firebase/config';
import { ref } from 'vue';

// refs
const message = ref('');

const { user } = getUser();
const { addDoc, error } = useCollection('messages');

// functions

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  };
  await addDoc(chat);
  if (!error.value) {
    message.value = '';
  }
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
