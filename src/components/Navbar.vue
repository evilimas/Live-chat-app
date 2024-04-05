<template>
  <nav v-if="user">
    <div>
      <p>
        Hey there <span class="display-name">{{ user?.displayName }}</span>
      </p>
      <p class="email">Currently logged in as {{ user?.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script setup>
// imports
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';

const { logout, error } = useLogout();
const { user } = getUser();

// functions
const handleClick = async () => {
  await logout();
  if (!error.value) {
    console.log('user loged out');
  }
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
.display-name {
  font-weight: bold;
}
</style>
