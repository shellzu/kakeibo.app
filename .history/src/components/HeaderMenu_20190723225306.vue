<template>
  <div id="app">
    <h1>家計簿</h1>
    <nav>
      <ul>
        <li class="current">
          <router-link to="/">収支入力</router-link>
        </li>
        <li class="current">
          <router-link to="/savingsPage">貯金</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped>
@import './menu1.css';
</style>
