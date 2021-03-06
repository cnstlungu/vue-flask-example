import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Prices from '@/components/Prices'
import Contact from '@/components/Contact'
import About from '@/components/About'
import PrivacyPolicy from '@/components/PrivacyPolicy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/prices',
      name: 'Prices',
      component: Prices
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/privacy',
      name: 'Privacy Policy',
      component: PrivacyPolicy
    }
  ],
  mode: 'history'
})
