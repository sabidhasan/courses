import stocks from '../../data/data'

const state = {
  stocks: []
}

const getters = {
  stocks: (state) => {
    return state.stocks
  }
}

const mutations = {
  // One for setting stocks, one for randomizing prices
  'SET_STOCKS' (state, stock) {
    state.stocks = stock;
  },
  'RANDOM_STOCKS' (state) {
    // Loop through stocks, and mutate prices
    state.stocks.forEach((stock, index) => {
      const currStock = state.stocks[index].prices
      const oldPrice = currStock[currStock.length - 1]
      const newPrice = Math.floor(Math.random() * 10) - 4 + 100;
      currStock.push(Math.max(0, Math.floor(oldPrice * newPrice / 100)));
    })
  }
}

const actions = {
  purchaseStock: (context, payload) => {
    context.commit('BUY_STOCK', payload, { root: true })
  },
  initializeStocks: (context) => {
    context.commit('SET_STOCKS', stocks)
  },
  randomizeStocks: (context) => {
    context.commit('RANDOM_STOCKS')
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}
