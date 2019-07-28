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
.th.td {
  padding: 0.5em 3em 0.5em 3em;
}
button {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #03A9F4;
  border: solid 1px #0f9ada;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
  text-shadow: 0 1px 0 rgba(0,0,0,0.2);
}
button:active {
  border: solid 1px #03A9F4;
  box-shadow: none;
  text-shadow: none;
}
.saving_link {
  font-size: 1.5em;
}
.cp_link {
  display: inline-block;
  padding: 0.1em 0.3em;
  transition: all .3s;
  color: gray;
  text-decoration: none;
  font-size: 1.5em;
}
.cp_link:visited {
  color: #777777;
  text-decoration: none;
}
.cp_link:hover {
  color: #fff;
  background-color: #00BCD4;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.text_amount {
  padding-bottom: 20px;
  width: 180px;
}
.text_amount label {
  display: block;
  font-size: 14px;
  padding-bottom: 5px;
}
.text_amount input[type=number] {
  border: 1px solid #1B73BA;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #333;
  font-size: 13px;
  padding: 10px;
  height: 30px;
  width: 180px;
}
.radio_select {
  padding-bottom: 20px;
}
.radio_select p {
  font-size: 14px;
  padding-bottom: 5px;
}
.radio_select input[type=radio] {
  display: none;
  margin: 0;
}
.radio_select input[type=radio] + label {
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  line-height: 1.5px;
  margin-right: 12px;
  padding: 0 0 3px 24px;
  position: relative;
}
.radio_select input[type=radio] + label::before {
  border: 1px solid #1B73BA;
  border-radius: 50%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  content: "";
  display: block;
  margin-top: -9px;
  position: absolute;
  left: 0;
  top: 50%;
  height: 13px;
  width: 13px;
}
.radio_select input[type=radio]:checked + label::after {
  background: #1B73BA;
  border-radius: 50%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  content: "";
  display: block;
  margin-top: -4px;
  position: absolute;
  left: 3px;
  top: 0px;
  height: 7px;
  width: 7px;
}
.textarea_memo {
  padding-bottom: 10px;
  width: 200px;
}
.textarea_memo label {
  display: block;
  font-size: 14px;
  padding-bottom: 5px;
}
.textarea_memo textarea {
  border: 1px solid #1B73BA;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #333;
  font-size: 13px;
  padding: 10px;
  height: 80px;
  width: 200px;
}
.date_picker {
  padding-bottom: 10px;
}
li {
  list-style: none;
}
.table_badget {
  padding: 10px 10px 10px 10px;
  border-left: 6px solid #00b0f0;
  background-color: #eee;
  width: 80%;
}
.text_money {
  padding-bottom: 20px;
  width: 180px;
}
.text_money label {
  display: block;
  font-size: 14px;
  padding-bottom: 5px;
}
.text_money input[type=number] {
  border: 1px solid #1B73BA;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #333;
  font-size: 13px;
  padding: 10px;
  height: 30px;
  width: 180px;
}
.radio_select {
  padding-bottom: 20px;
}
.radio_select p {
  font-size: 14px;
  padding-bottom: 5px;
}
.radio_select input[type=radio] {
  display: none;
  margin: 0;
}
.radio_select input[type=radio] + label {
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  line-height: 1.5px;
  margin-right: 12px;
  padding: 0 0 3px 24px;
  position: relative;
}
.radio_select input[type=radio] + label::before {
  border: 1px solid #1B73BA;
  border-radius: 50%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  content: "";
  display: block;
  margin-top: -9px;
  position: absolute;
  left: 0;
  top: 50%;
  height: 13px;
  width: 13px;
}
.radio_select input[type=radio]:checked + label::after {
  background: #1B73BA;
  border-radius: 50%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  content: "";
  display: block;
  margin-top: -4px;
  position: absolute;
  left: 3px;
  top: 0px;
  height: 7px;
  width: 7px;
}
.textarea_memo {
  padding-bottom: 10px;
  width: 200px;
}
.textarea_memo label {
  display: block;
  font-size: 14px;
  padding-bottom: 5px;
}
.textarea_memo textarea {
  border: 1px solid #1B73BA;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #333;
  font-size: 13px;
  padding: 10px;
  height: 80px;
  width: 200px;
}
.date_picker {
  padding-bottom: 10px;
}
li {
  list-style: none;
}
h3 {
  left: 30%;
}
</style>
