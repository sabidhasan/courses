import { Doughnut, mixins, Line } from 'vue-chartjs'

export const DoughnutChart = {
  extends: Doughnut,
  mixins: [ mixins.reactiveProp ],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}

export const LineChart = {
  extends: Line,
  mixins: [ mixins.reactiveProp ],
  props: ['chartData', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options)
  }
}
