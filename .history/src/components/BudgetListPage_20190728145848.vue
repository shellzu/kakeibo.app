<template>
  <div id="app">
    <HeaderMenu></HeaderMenu>
     <br>
      <h2>新規入力</h2>
    <form>
      <div align="center">
      <div class="date_picker">
        <label>日付</label>
        <datepicker :format="DatePickerFormat" v-model="date" placeholder="日付を選択"></datepicker>
      </div>
      <div class="text_amount">
        <label>金額</label>
        <input type="number" v-model.number="amount" placeholder="￥" />
      </div>
      <div class="radio_select">
        <p>収支選択</p>
        <input type="radio" id="income" value="収入" v-model="mode" />
        <label for="income">収入</label>
        <input type="radio" id="expense" value="支出" v-model="mode" />
        <label for="expense">支出</label>
      </div>
      <div class="textarea_memo">
        <label>概要</label>
        <textarea v-model="memo" placeholder="給料..食費..."></textarea>
      </div>
      </div>
    </form>
        <AddButton v-on:add-list='entry'></AddButton>
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
      <body>
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
      </body>
    </table>
    <h3>お財布</h3>
      <h3>{{diff}}</h3>
    <div>
    My name is <input v-model="wallet">
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import HeaderMenu from './HeaderMenu'
import AddButton from './AddButton'
import BudgetDeleteButton from './BudgetDeleteButton'

export default {
  name: 'app',
  components: {
    Datepicker,
    HeaderMenu,
    AddButton,
    BudgetDeleteButton
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
<style scoped>

</style>
