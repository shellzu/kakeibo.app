<template>
  <div id="app">
    <HeaderMenu></HeaderMenu>
      <h2>新規入力</h2>
    <BudgetForm></BudgetForm>
        <AddButton v-on:add-list=''></AddButton>
    <div>
      <h2>収支一覧</h2>
    </div>
    <table align="center" class="budget_list th.td">
      <thead>
        <tr>
          <th>ID</th>
          <th>収支</th>
          <th>金額</th>
          <th>日付</th>
          <th>概要</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(budget, index) in budgets" :key="index">
          <th>{{index}}</th>
          <td>{{budget.mode}}</td>
          <td>{{budget.amount}}</td>
          <td>{{customformat(budget.date)}}</td>
          <td>{{budget.memo}}</td>
          <td>
            <BudgetDeleteButton v-on:deleteList="deletePassbook(budget)"></BudgetDeleteButton>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>お財布</h3>
      <h3>{{diff}}</h3>
    <div>
    My name is <input v-model="wallet">
    </div>
    <AddBudget></AddBudget>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import HeaderMenu from './HeaderMenu'
import AddButton from './AddButton'
import BudgetDeleteButton from './BudgetDeleteButton'
import BudgetForm from './BudgetForm'
import AddBudget from './AddBudget'

export default {
  name: 'app',
  components: {
    Datepicker,
    HeaderMenu,
    AddButton,
    BudgetDeleteButton,
    BudgetForm,
    AddBudget
  },
  data: function () {
    return {
      budgets: [
        { id: 0, amount: 100000, mode: '収入', date: '2019-06-27', memo: '給料' }
      ],
      amount: '',
      mode: '収入',
      date: '',
      memo: '',
      diff: 100000,
      DatePickerFormat: 'yyyy-MM-dd',
      wallet: ''
    }
  },
  methods: {
    entry: function () {
      this.budgets.push({
        amount: this.amount,
        mode: this.mode,
        date: this.date,
        memo: this.memo
      })
      if (this.mode === '収入') {
        this.diff = this.diff + Number(this.amount)
      } else {
        this.diff = this.diff - Number(this.amount)
      }
    },
    deletePassbook: function (budget) {
      var index = this.budgets.indexOf(budget)
      this.budgets.splice(index, 1)
    },
    customformat: function (value) {
      return moment(value).format('YYYY-MM-DD')
    }
  },
  mounted () {
    if (localStorage.wallet) this.wallet = localStorage.wallet
  },
  watch: {
    wallet (newWallet) {
      localStorage.wallet = newWallet
    }
  }
}
</script>

<style>
.budget_list {
  padding: 10px 10px 10px 10px;
   border-left: 6px solid #00b0f0;
   background-color: #eee;
   width: 80%;
}
.budget_list th.td {
  padding: 0.5em 3em 0.5em 3em;
}
</style>
