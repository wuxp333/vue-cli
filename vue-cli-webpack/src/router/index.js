import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/pages/Test'
import Test2 from '@/pages/Test2'
import Test3 from '@/pages/Test3'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/Test3',
      name: 'Test3',
      component: Test3
    }
  ]
})
