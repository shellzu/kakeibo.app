<template>
  <div>
    <HeaderMenu></HeaderMenu>
    <p>画面遷移できたね！</p>
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
.th.td {
  padding: 0.5em 3em 0.5em 3em;
}
.table_savings {
  padding: 10px 0;
  background-color: #eee;
  border: 1px solid white;
  width: 80%;
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
</style>
