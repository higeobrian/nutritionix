import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import FoodDetails from '@/components/FoodDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
    path: '/foodDetails/:id',
    name: 'FoodDetails',
    component: FoodDetails
    }
  ]
})
