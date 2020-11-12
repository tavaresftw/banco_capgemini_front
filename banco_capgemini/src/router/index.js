import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Contas from '../views/Contas.vue'
import Conta from '../views/Conta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/contas',
    name: 'Contas',
    component: Contas
  },
  {
    path: '/conta/:account_number',
    name: 'Conta',
    component: Conta
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
