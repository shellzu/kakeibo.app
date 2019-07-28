<template>
<div id="app">
    <BudgetForm></BudgetForm>
    <AddButton v-on:addList="entry"></AddButton>
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
    emitParent () {
      this.$emit('add-list')
    }
  }
}
</script>
