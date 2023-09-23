import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import ProcessView from '../views/ProcessView.vue'
import TestimonialPage from '../components/TestimonialPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: 'https://growthhorizon.vercel.app/',
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
      path: '/process',
      name: 'Process',
      component: ProcessView
    },
    {
      path: '/testimonial',
      name: '/Testimonial',
      component: TestimonialPage
    }
  ]
})

export default router
