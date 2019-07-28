<template>
  <div>
    <HeaderMenu></HeaderMenu>
    <p>画面遷移できたね！</p>
    
  </div>
</template>
<script>
import HeaderMenu from './HeaderMenu'

export default {
  name: 'app',
  props: ['message'],
  components: {
    HeaderMenu
  }
}
</script>

<style scoped>
@import './page.css';
</style>
