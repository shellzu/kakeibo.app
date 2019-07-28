<template>
<div id="app">
  <button @click="$emit('echo', 'i was emitted from a grand-child.')">追加</button>
</div>
</template>
<script>
export default {
  name: 'app'
}
</script>
