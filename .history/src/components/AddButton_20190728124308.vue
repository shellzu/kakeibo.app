<template>
<div id="app">
  <button v-on:click="emitParent">追加</button>
  <grand-child @parent-methods="">
</div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    add: function () {
      alert('クリック')
    },
    emitParent () {
      this.$emit('add-list')
    }
  }
}
</script>
