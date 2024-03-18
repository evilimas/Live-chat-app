<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
// imports
import NewChatForm from '../components/NewChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import getUser from '../composables/getUser';

const { user } = getUser();
const router = useRouter();
watchEffect(() => {
  if (!user.value) {
    router.push({ name: 'welcome' });
  }
});
</script>

<style></style>
