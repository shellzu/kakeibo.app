<template>
<div id="app">
    <form>
      <div align="center">
      <div class="date_picker">
        <label>日付</label>
        <datepicker :format="DatePickerFormat" v-model="date" placeholder="日付を選択"></datepicker>
      </div>
      <div class="text_money">
        <label>金額</label>
        <input type="number" v-model.number="money" placeholder="￥" />
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
</div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'app',
  components: {
    Datepicker
  },
  data: function () {
    return {
      money: '',
      mode: '収入',
      date: '',
      memo: '',
      diff: 100000,
      DatePickerFormat: 'yyyy-MM-dd'
    }
  }
}
</script>

<style scoped>
@import './page.css';
</style>
