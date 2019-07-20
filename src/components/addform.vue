<template>
<div id="app">
    <form1></form1>
    <addbutton v-on:addList="entry"></addbutton>
</div>
</template>
<script>
import form1 from './form1'
import addbutton from './addbutton'
export default {
  name: 'app',
  conponents: {
    form1,
    addbutton
  }
}
</script>
