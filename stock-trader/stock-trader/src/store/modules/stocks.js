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
