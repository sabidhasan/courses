<template>
  <div>
    <h1>Stock Trader</h1>
    <h2>This is a small stock trader app:</h2>
      <ul>
        <li>Buy (fake) stocks</li>
        <li>Manage your portfolio / sell (fake) stocks</li>
        <li>Click End Day to update (fake) stock prices</li>
        <li>Save/Load if needed</li>
      </ul>
    <h2>You currently have <span class="funds">{{ funds | currencyFormat }}</span> in your portfolio.</h2>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>

<style scoped>
  div {
    margin: 25px 10px;
  }
  h1, h2 {
    margin: 20px 0;
  }
  h2 {
    font-weight: normal; font-size: 1.2rem;
  }
  .funds {
    font-weight: bold; color: green;
  }
  ul li {
    list-style-type: decimal; padding: 5px 0 5px 20px; font-size: 1.1rem;
  }
  ul {
    margin: 0 0 50px 0;
  }
</style>
