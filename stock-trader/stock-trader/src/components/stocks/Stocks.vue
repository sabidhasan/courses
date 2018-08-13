<template>
  <div class="stocks-container">
      <Stock v-for="stock in stocks" :stock="stock"/>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  export default {
    components: {
      Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>

<style scoped>
  .stocks-container {
    display: grid; grid-gap: 45px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
</style>
