<template>
  <div>
    <div class="stock-header">
      <span class="title">{{ stock.name }}</span>
      <span>Price: {{ currentPrice }}</span>
    </div>
    <input type="number" v-model="quantity" placeholder="Quantity">
    <button
      v-on:click="buy"
      :disabled="quantity <= 0 || !Number.isInteger(Number(quantity)) || enoughFunds"
    >
      {{ enoughFunds ? 'Not enough funds' : 'Buy'}}
    </button>
    <Chart :chartData="chartData" :options="chartOptions"></Chart>
  </div>
</template>

<script>
  import Chart from '../Chart.js'

  export default {
    data() {
      return {
        quantity: 0
      }
    },
    components: {
      Chart
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
  .stock-header {

  }
  .title {
    text-transform: capitalize;
  }
</style>
