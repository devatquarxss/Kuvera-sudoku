import Vue from 'vue'
import Router from 'vue-router'

const landing = () => import('@/pages/landing')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'landing', component: landing }
  ]
})
