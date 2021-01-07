<template>
  <div class="stock">
    <div class="stock-header">
      <span class="title">{{ stock.name }}</span>
      <span class="price">Price: {{ currentPrice | currencyFormat }} | Quantity: {{ stock.quantity }}</span>
    </div>
    <input type="number" v-model="quantity" placeholder="Quantity">
    <button
      @click="sell"
      :disabled="quantity <= 0 || !Number.isInteger(Number(quantity)) || !allowedToSell"
    >
      {{ allowedToSell ? 'Sell' : 'Insufficient Amount' }}
    </button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      sell() {
        const order = {
          stockID: this.stock.id,
          stockPrice: this.currentPrice,
          quantity: this.quantity
        };
        this.$store.dispatch('sellStock', order);
        this.quantity = 0;
      }
    },
    props: {
      stock: {type: Object, required: true}
    },
    computed: {
      currentPrice() {
        return this.stock.prices[this.stock.prices.length - 1]
      },
      allowedToSell() {
        return (this.quantity <= this.stock.quantity)
      }
    }
  }
</script>

<style scoped>
  .stock {
    margin: 15px 5px; background: lightgreen; padding: 10px 5px;
    border-radius: 5px; font-size: 1.25rem; border: 1px solid darkgreen;
  }
  .stock-header {
    display: flex; justify-content: space-between; align-items: center;
  }
  .title {
    text-transform: capitalize; font-weight: bold;
  }
  .price {
    font-size: 0.85rem;
  }
</style>
