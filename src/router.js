import Vue from 'vue'
import Router from 'vue-router'
import CookieExplanation from './components/CookieExplanation.vue'
import ViewCookies from './components/ViewCookies.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: CookieExplanation
    },
    {
      path: '/stap2',
      component: ViewCookies
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
})
