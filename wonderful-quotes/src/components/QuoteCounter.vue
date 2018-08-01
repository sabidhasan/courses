<template>
  <h1>Quote counter - {{ length }}</h1>
</template>

<script>
  export default {
    name: 'QuoteCounter',
    props: {
      'length': Number
    }
  }
</script>

<style>

</style>
