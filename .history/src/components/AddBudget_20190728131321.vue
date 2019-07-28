<template>
<div id="app">
    <BudgetForm></BudgetForm>
    <button @click="childEcho"></button>
    <AddButton @click="emitEventOne"></AddButton>
</div>
</template>
<script>
import BudgetForm from './BudgetForm'
import AddButton from './AddButton'
export default {
  name: 'app',
  conponents: {
    BudgetForm,
    AddButton
  },
  methods: {
    emitEventOne () {
      this.$emit('add-list')
    }
  }
}
</script>
