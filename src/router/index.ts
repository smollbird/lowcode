import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home/index.vue';
import Work from '../views/work/index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
