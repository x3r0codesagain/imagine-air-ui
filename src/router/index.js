
import { createRouter, createWebHistory } from 'vue-router' 
import HomeView from '../views/HomeView.vue'
import FlightsView from '@/views/FlightsView.vue'
import BookingView from '@/views/BookingView.vue'
import PayView from '@/views/PayView.vue'
import ConfirmationView from '@/views/ConfirmationView.vue'
import ManageBookingView from '@/views/ManageBookingView.vue'
import ManageMyBookingView from '@/views/ManageMyBookingView.vue'
import TravelInfoView from'@/views/TravelInfoView.vue'
import CorporateInfoView from '@/views/CorporateInfoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/flights',
    name: 'flight',
    component: FlightsView
  },
  {
    path: '/book',
    name: 'book',
    component: BookingView
  },
  {
    path: '/pay',
    name: 'pay',
    component: PayView
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: ConfirmationView,
  },
  {
    path: '/manage/booking',
    name: 'manage',
    component: ManageBookingView,
  },
  {
    path: '/manage/booking/find',
    name: 'mybooking',
    component: ManageMyBookingView,
  },
  {
    path: '/travel/Info',
    name: 'travelinfo',
    component: TravelInfoView,
  },
  {
    path: '/corporate/Info',
    name: 'corporateinfo',
    component: CorporateInfoView,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
