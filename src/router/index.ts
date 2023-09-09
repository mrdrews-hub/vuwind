import { createRouter, createWebHistory } from 'vue-router';
const Dashboard = () =>  import('../views/HomeView.vue')
const Product = () =>  import('../views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
      meta: {
        title: 'Dashboard'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        title: 'Product'
      }
    }
  ]
})

export default router
