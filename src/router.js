import Vue from 'vue'
import Router from 'vue-router'
import CookieExplanation from './components/CookieExplanation.vue'
import ViewCookies from './components/ViewCookies.vue'
import Intro from './components/Intro.vue'
import Tracking from './components/Tracking.vue'
import Knowledge from './components/Knowledge.vue'
import Banners from './components/Banners.vue'
import Fight from './components/Fight.vue'
import End from './components/End.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Intro
    },
    {
      path: '/stap1',
      component: CookieExplanation
    },
    {
      path: '/stap2',
      component: ViewCookies
    },
    {
      path: '/stap3',
      component: Tracking
    },
    {
      path: '/stap4',
      component: Knowledge
    },
    {
      path: '/stap5',
      component: Banners
    },
    {
      path: '/stap6',
      component: Fight
    },
    {
      path: '/einde',
      component: End
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})
