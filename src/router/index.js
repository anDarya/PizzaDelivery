import { createRouter, createWebHistory } from 'vue-router';
import CardPartner from '../components/CardPartner.vue';
import CardProduct from '../components/CardProduct';

const routes = [
  {
    path: '/:restaurant',
    component: CardPartner
  },
  {
    path: '/',
    component: CardProduct
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
