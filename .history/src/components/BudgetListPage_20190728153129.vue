<template>
  <div id="app">
    <HeaderMenu></HeaderMenu>
      <h2>新規入力</h2>
    <BudgetForm></BudgetForm>
        <AddButton v-on:addList="entry"></AddButton>
    <div>
      <h2>収支一覧</h2>
    </div>
    <table align="center" class="table_passbook th.td">
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
        <tr v-for="(passbook, index) in passbooks" :key="index">
          <th>{{index}}</th>
          <td>{{passbook.mode}}</td>
          <td>{{passbook.money}}</td>
          <td>{{customformat(passbook.date)}}</td>
          <td>{{passbook.memo}}</td>
          <td>
            <BudgetDeleteButton v-on:deleteList="deletePassbook(passbook)"></BudgetDeleteButton>
          </td>
        </tr>
      </tbody>
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
import BudgetForm from './BudgetForm'

export default {
  name: 'app',
  components: {
    Datepicker,
    HeaderMenu,
    AddButton,
    BudgetDeleteButton,
    BudgetForm
  },
  data: function () {
    return {
      passbooks: [
        { id: 0, money: 100000, mode: '収入', date: '2019-06-27', memo: '給料' }
      ],
      money: '',
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
      this.passbooks.push({
        money: this.money,
        mode: this.mode,
        date: this.date,
        memo: this.memo
      })
      if (this.mode === '収入') {
        this.diff = this.diff + Number(this.money)
      } else {
        this.diff = this.diff - Number(this.money)
      }
    },
    deletePassbook: function (passbook) {
      var index = this.passbooks.indexOf(passbook)
      this.passbooks.splice(index, 1)
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
@import './page.css';
</style>
