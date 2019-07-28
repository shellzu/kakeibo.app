<template>
<div id="app">
  <button v-on:click="emitParent">追加</button>
</div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    add: function () {
      alert('クリック')
    },
    emitParent: function () {
      this.$emit('add-list')
    }
  }
}
</script>
