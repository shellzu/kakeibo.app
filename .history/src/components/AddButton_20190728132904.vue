<template>
<div id="app">
  <button v-on:click="$emit('add-list')>追加</button>
</div>
</template>
<script>
export default {
  name: 'app'
}
</script>
