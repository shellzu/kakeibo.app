<template>
<div id="app">
  <button v-on:click="emitChildDelete">削除</button>
</div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    add: function () {
      alert('クリック')
    },
    emitChildDelete: function () {
      this.$emit('deleteList')
    }
  }
}
</script>
