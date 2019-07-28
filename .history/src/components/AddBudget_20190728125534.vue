<template>
<div id="app">
    <BudgetForm></BudgetForm>
    <AddButton @add-list="emitParent"></AddButton>
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
