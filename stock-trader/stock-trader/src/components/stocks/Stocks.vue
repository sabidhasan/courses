<template>
  <div class="stocks-container">
      <Stock v-for="stock in stocks" :stock="stock"/>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  export default {
    data() {
      return {
        stocks: [
          {id: 1, name: 'BMW', prices: [110, 100, 90] },
          {id: 2, name: 'CSI', prices: [60, 110, 50] },
          {id: 3, name: 'DSK', prices: [90, 90, 60] },
          {id: 4, name: 'EAC', prices: [120, 70, 80] }
        ]
      }
    },
    components: {
      Stock
    }
  }
</script>

<style scoped>
  .stocks-container {
    display: grid; grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
</style>
