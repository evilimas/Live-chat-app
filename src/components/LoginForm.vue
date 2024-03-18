<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';

//refs
const email = ref('');
const password = ref('');

const emit = defineEmits(['login']);

const { error, login } = useLogin();

// functions
const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    console.log('user logged in');
    emit('login');
  }
};
</script>
