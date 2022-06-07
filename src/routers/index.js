import { createRouter, createWebHistory } from 'vue-router'

import WrapperComponent from '../WrapperComponent.vue'
import FirstRoutedComponent from '../components/FirstRoutedComponent.vue'
import SecondRoutedComponent from '../components/SecondRoutedComponent.vue'
import CatchComponent from '../components/CatchComponent.vue'
import StudentDetailsComponent from '../components/StudentDetailsComponent.vue'

const routes = [
  { path: '/', component: WrapperComponent },
  { path: '/first', component: FirstRoutedComponent },
  { path: '/second', component: SecondRoutedComponent },
  { path: '/studentdetails/:id', component: StudentDetailsComponent },
  { path: '/:catchAll(.*)', component: CatchComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
