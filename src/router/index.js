import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: loginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
  ]
})

export default router
