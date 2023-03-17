import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/routes/HomeRoute.vue';
import Repos from '../src/routes/ReposRoute.vue';
import Profile from '../src/routes/ProfileRoutes.vue';
import WildcardRouter from '../src/routes/Wildcard.vue';
import ReposDetails from '../src/routes/ReposDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/repos',
      name: 'Repos',
      component: Repos,
    },
    {
      path: '/repos/:id',
      component: ReposDetails,
      props: true,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/:catchAll(.*)',
      name: 'WildcardRouter',
      component: WildcardRouter,
    },
  ],
});

createApp(App).use(router).mount('#app');
