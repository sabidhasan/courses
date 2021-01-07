<template>
  <div class="portfolio">
    <div v-if="stocks.length === 0" class="header">
      <h1>No Stocks</h1>
      <p>You have no stocks in your portfolio yet.
        Buy some from the <router-link to="/stocks">stocks</router-link> page!</p>
    </div>
    <div class="portfolio__stocks">
      <Stock v-for="stock in stocks" :stock="stock"></Stock>
    </div>
    <DoughnutChart
      v-if="this.$store.getters.stockPortfolio.length"
      class="doughnut-chart"
      :chartData="chartData"
      :options="chartOptions">
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
          return this.$store.getters.stockPortfolio;
        },
        chartOptions() {
          return {
            responsive: true,
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  return `  $${(data.datasets[0].data[tooltipItem.index])} Value`;
                }
              }
            }
          }
        },
        chartData() {
          return {
            datasets: [
              {
                data: this.$store.getters.stockPortfolio.map(stock => (
                  stock.quantity * stock.prices[stock.prices.length - 1]
                )),
                backgroundColor: this.$store.getters.stockPortfolio.map(v => randomColor())
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
  .portfolio {
    display: grid; grid-gap: 20px; grid-template-columns: 2fr 1fr;
  }
  .header {
    grid-column: 1 / -1;
  }
  .portfolio__stocks {
    padding: 20px 10px;
  }
  .doughnut-chart {
    width: 100%; height: 100%
  }
  canvas {
    width:100% !important;
    height:100% !important;
  }


  @media screen and (max-width:700px) {
    .portfolio {
      grid-template-columns: 1fr;
    }
  }
</style>
