<template>
  <form>
    <h3>Quote</h3>
    <textarea v-model="inputQuote"></textarea>
    <button @click.prevent="addQuote(inputQuote)">Add quote</button>
  </form>
</template>

<script>
  export default {
    name: 'AddQuote',
    data() {
      return {
        inputQuote: 'Some text'
      }
    },
    props: {
      addQuote: Function
    }
  }
</script>

<style>

</style>
