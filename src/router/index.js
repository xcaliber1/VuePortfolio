// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Sports from '@/components/Sports.vue';
import MoviesMusic from '@/components/MoviesMusic.vue';
import Languages from '@/components/Languages.vue';
import Contacts from '@/components/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/sports', component: Sports },
  { path: '/movies-music', component: MoviesMusic },
  { path: '/languages', component: Languages },
  { path: '/contacts', component: Contacts }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
