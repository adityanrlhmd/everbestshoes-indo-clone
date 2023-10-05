import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'Products',
      children: [
        {
          path: 'category/:category',
          component: () => import('../views/ProductsView/ProductsView.vue')
        },
        {
          path: ':slug',
          component: () => import('../views/ProductsView/DetailProductsView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/AuthView/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/AuthView/RegisterView.vue')
    },
    {
      path: '/resetPassword',
      name: 'Reset Password',
      component: () => import('../views/AuthView/ResetPasswordView.vue')
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: () => import('../views/WishlistView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
