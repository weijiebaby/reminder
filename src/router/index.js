import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/test'
import Login from '../pages/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
