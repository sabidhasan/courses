<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock"></Stock>
    <div v-if="stocks.length === 0">
      <h1>No Stocks</h1>
      <p>You have no stocks in your portfolio yet.
        Buy some from the <router-link to="/stocks">stocks</router-link> page!</p>
    </div>
    <DoughnutChart
      class="doughnut-chart"
      :chartData="chartData"
      :options="{}">
    </DoughnutChart>
  </div>
</template>

<script>
  import randomColor from 'randomcolor';
  import Stock from './Stock.vue';
  import { DoughnutChart } from '../charts.js';

  export default {
      computed: {
        stocks() {
          console.log(this.$store.getters.stockPortfolio);
          return this.$store.getters.stockPortfolio;
        },
        chartData() {
          return {
            datasets: [
              {
                data: this.$store.getters.stockPortfolio.map(stock => (
                  stock.quantity * stock.prices[stock.prices.length - 1]
                )),
                // backgroundColor: ['red', 'green', 'blue']
              }
            ],
            labels: this.$store.getters.stockPortfolio.map(stock => stock.name)
          }
        }
      },
      components: {
        Stock,
        DoughnutChart
      }
  }
</script>

<style>
  .doughnut-chart {
    width: 40%; height: 40%
  }
</style>
