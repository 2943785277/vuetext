import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import ind from '@/components/ind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/ind',
      name: 'ind',
      component: ind
    }
  ]
})
