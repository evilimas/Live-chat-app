import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import { projectAuth } from '@/firebase/config';

//auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;

  if (!user) {
    next({ name: 'welcome' });
  } else {
    next();
  }
};

const reqioreNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: 'chatroom' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: () => import('../views/Chatroom.vue'),
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
