import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/Auth/LoginPage.vue'
import RegisterPage from '../views/Auth/RegisterPage.vue'
import DashboardPage from '../views/Dashboard/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage
    },
  ]
})
export default router