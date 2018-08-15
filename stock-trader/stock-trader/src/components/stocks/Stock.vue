<template>
  <div class="stock-holder">
    <div class="stock-header">
      <span class="title">{{ stock.name }}</span>
      <span class="price">Price: {{ currentPrice | currencyFormat }}</span>
    </div>
    <input type="number" v-model="quantity" placeholder="Quantity">
    <button
      v-on:click="buy"
      :disabled="quantity <= 0 || !Number.isInteger(Number(quantity)) || enoughFunds"
    >
      {{ enoughFunds ? 'Not enough funds' : 'Buy'}}
    </button>
    <h2>History for {{ stock.name }} Stock</h2>
    <LineChart :chartData="chartData" :options="chartOptions"></LineChart>
  </div>
</template>

<script>
  import { LineChart } from '../charts.js';

  export default {
    data() {
      return {
        quantity: 0
      }
    },
    components: {
      LineChart
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
      },
      enoughFunds() {
        return (this.quantity > 0 && this.$store.getters.funds < (this.currentPrice * this.quantity))
      },
      chartOptions() {
        return {
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {labelString: 'Days', display: true},
              }
            ],
            yAxes: [
              {
                scaleLabel: {labelString: 'Price ($)', display: true},
              }
            ]
          }
        }
      },
      chartData() {
        return {
          labels: this.stock.prices.map((v, i) => i + 1),
          datasets: [
            {
              label: `${this.stock.name} Stock Prices`,
              borderColor: '#f87979',
              fill: false,
              data: this.stock.prices
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .stock-holder {
    border: 1px solid crimson; border-radius: 5px; overflow: hidden;
  }
  .stock-header {
    background: salmon; padding: 10px; display: flex; font-size: 1.3rem; align-items: center;
  }
  .title {
    text-transform: capitalize; flex: 1; font-weight: bold; letter-spacing: 3px
  }
  .price {
    font-size: .85rem;
  }
  input {
    font-size: 1.4rem; padding: 2px 5px; border: 1px solid black; border-radius: 4px;
    margin: 8px 10px; height: 35px;
  }
  button {
    padding: 5px 10px; background: gray; color: black; font-weight: bold; font-size: 1.1rem;
    border-radius: 4px; margin: 8px 5px; height: 35px; float: right;
  }
  button:disabled {
    background: lightgray; opacity: .5
  }
  h2 {
    text-align: center; font-weight: 100; font-size: 1.3rem; padding-top: 10px;
    border-top: 1px solid salmon;
  }
</style>
