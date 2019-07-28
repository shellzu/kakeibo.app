<template>
  <div>
    <HeaderMenu></HeaderMenu>
    <p>{{ message }}</p>
    <div>
      <h2>新規作成</h2>
    </div>
    <form>
      <div class="msr_text_05">
        <label>貯金の目的</label>
        <input type="text" v-model="title" placeholder="目的を入力" />
      </div>
      <div class="msr_text_05">
        <label>金額</label>
        <input type="text" v-model="saving_money" placeholder="￥" />
      </div>
      <div class="msr_text_05_day">
        <label>いつまで</label>
        <br />
        <input type="text" v-model="due_year" placeholder="年" />
        <input type="text" v-model="due_month" placeholder="月" />
        <input type="text" v-model="due_day" placeholder="日" />
        <div>
          <button v-on:click="entrySaving(index)">追加</button>
        </div>
      </div>
    </form>
    <div>
      <h2>貯金一覧</h2>
    </div>

    <table align="center">
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <th class="saving_link">
            <router-link to="/saving" class="cp_link">{{item.title}}</router-link>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import HeaderMenu from './HeaderMenu'

export default {
  name: 'app',
  props: ['message'],
  components: {
    HeaderMenu
  },
  data: function () {
    return {
      items: [
        {
          title: '沖縄旅行',
          money: '100000',
          remaining: '100000',
          due_year: '2019',
          due_month: '7',
          due_day: '12'
        },
        {
          title: '新築頭金',
          money: '2000000',
          remaining: '2000000',
          due_year: '2020',
          due_month: '7',
          due_day: '12'
        }
      ],
      title: '',
      add_money: '',
      saving_money: '',
      due_year: '',
      due_month: '',
      due_day: ''
    }
  },
  methods: {
    entrySaving: function () {
      this.items.push({
        title: this.title,
        money: this.saving_money,
        remaining: this.saving_money,
        due_year: this.due_year,
        due_month: this.due_month,
        due_day: this.due_day
      })
    },
    deleteSaving: function (saving) {
      var index = this.savings.indexOf(saving)
      this.savings.splice(index, 1)
    },
    addMoney: function (item, addMoney) {
      var index = this.items.indexOf(item)
      var updateRemaining = Number(this.items[index].remaining) - this.addMoney
      alert(updateRemaining)
      this.items[index].remaining = updateRemaining
    }
  }
}
</script>

<style>
.savings li{
  background: whitesmoke;
  margin-bottom: 50px;
  height: 200px;
  border-radius: 20px;
}
.savings p{
  font-size: 1em;
  text-align: left;
  text-align: center;
}
</style>
