<template>
<div id="app">
  <button @click="emitParent">追加</button>
  <grand-child @parent-methods="emitParent"></grand-child>
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
