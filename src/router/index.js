import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/login.vue'
// import word from '../components/word.html'
// import word from '../components/word.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/login',
    name: 'login',
    component: login
  }, 
  // {
  //   path: '/word',
  //   name: 'word',
  //   component: word
  // }, 
  // {
  //   path:  '/word',
  //   mode: history,
  //   name: 'word',
  //   component: { template: word }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
