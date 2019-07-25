import Vue from 'vue'
import Router from 'vue-router'

import BudgetListPage from '@/components/BudgetListPage'
import SavingsPage from '@/components/SavingsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BudgetListPage
    },
    {
      path: '/savingsPage',
      component: SavingsPage
    }
  ]
})
