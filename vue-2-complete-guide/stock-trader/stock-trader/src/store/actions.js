import Vue from 'vue';

export const loadData = (context) => {
  // Get data from firebase
  fetch('https://stock-trader-6d6b4.firebaseio.com/stocks.json')
  .then(d => d.json())
  .then(data => {
    if (data) {
      const { stocks, stockPortfolio, funds } = data

      const portfolio = {
        funds: funds,
        stocksOwned: stockPortfolio
      };

      console.log(data)
      context.commit('SET_PORTFOLIO', portfolio)
      context.commit('SET_STOCKS', stocks)
    }
  })
  .catch(e => {
    alert('Could not load data at this time. Try again later')
  })
}
