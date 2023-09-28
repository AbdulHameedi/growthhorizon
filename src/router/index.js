import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import ProcessView from '../views/ProcessView.vue'
import TestimonialPage from '../components/TestimonialPage.vue'
import DashboardView from '../views/DashboardView.vue'
import Overview from '../components/Overview.vue'
import Settings from '../components/Settings.vue'
import Withdrawal from '../components/Withdrawal.vue'
import Notification from '../components/Notification.vue'
import SignInView from '../views/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: '/https://growthhorizon.vercel.app/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SignInView
    },
    {
      path: '/process',
      name: 'Process',
      component: ProcessView
    },
    {
      path: '/testimonial',
      name: 'Testimonial',
      component: TestimonialPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      beforeEnter: (to, from, next) => {
        const user = localStorage.getItem("user-info");
        if (!user) {
          next('/signin'); 
        } else {
          next(); 
        }
      },
      children: [
        {
          path: '',
          name: 'Overview',
          component: Overview
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: 'withdrawal',
          name: 'Withdrawal',
          component: Withdrawal
        },
        {
          path: 'notification',
          name: 'Notification',
          component: Notification
        }
      ]
    }
  ]
})

export default router
