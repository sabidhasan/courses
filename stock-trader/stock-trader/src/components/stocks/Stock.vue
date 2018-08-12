<template>
  <div>
    <div class="stock-header">
      <span class="title">{{ stock.name }}</span>
      <span>Price: {{ currentPrice }}</span>
    </div>
    <input type="number" v-model="quantity" placeholder="Quantity">
    <button
      v-on:click="buy"
      :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))"
    >
      Buy
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
      buy() {
        // What is the order
        const order = {
          stockID: this.stock.id,
          stockPrice: this.currentPrice,
          quantity: this.quantity
        };
        this.$store.dispatch('purchaseStock', order)
        this.quantity = 0;
      }
    },
    props: {
      stock: {type: Object, required: true}
    },
    computed: {
      currentPrice() {
        return this.stock.prices[this.stock.prices.length - 1]
      }
    }

  }
</script>

<style scoped>
  .stock-header {

  }
  .title {
    text-transform: capitalize;
  }
</style>
