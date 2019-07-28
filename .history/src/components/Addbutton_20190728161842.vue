<template>
<div id="app">
  <button @click="emitChild">追加</button>
</div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    emitChild: function () {
      this.$emit('add-list')
    }
  }
}
</script>
