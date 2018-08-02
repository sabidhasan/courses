<template>
  <!-- <h1>Quote counter - {{ length }}</h1> -->
  <div class='container'>
    <span v-if="length > 0" :style='{width: (length * 10) + "%"}'>{{ length }}/10</span>
  </div>
</template>

<script>
  export default {
    name: 'QuoteCounter',
    props: {
      'length': Number
    }
  }
</script>

<style scoped>
  div {
    width: 100%; height: 3.5rem; background: red; border-radius: 5px; margin: 0;
    padding: 0; overflow: hidden;
  }
  div span {
    display: flex; background: orange; height: 100%; transition: width 0.5s;
    align-items: center; justify-content: center; font-weight: bold; font-size: 1.7rem;
  }
</style>
