import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import list from '@/page/list/list'
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
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
