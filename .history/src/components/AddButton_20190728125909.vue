<template>
<div id="app">
  <button @click="emitEventOne">Event 1</button>
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
