<template>
<div id="app">
  <button @click="emitEventOne">追加</button>
</div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    add: function () {
      alert('クリック')
    },
    emitEventOne () {
      this.$emit('add-list')
    }
  }
}
</script>
