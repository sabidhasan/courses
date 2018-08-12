const state = {
    funds: 10000,
    stocksOwned: []
}

const getters = {
  stockPortfolio(state, getters) {
    return state.stocksOwned.map(stock => {
      const record = getters.stocks.find(elem => elem.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        prices: record.prices
      }
    });
  }
}

const mutations = {
  'BUY_STOCK'(state, order) {
    // check if already owned
    const oldStock = state.stocksOwned.find(elem => elem.id === order.stockID);
    if (oldStock) {
      // Update existing stock
      oldStock.quantity = parseInt(order.quantity) + parseInt(oldStock.quantity);
    } else {
      // new record
      state.stocksOwned.push({
        quantity: order.quantity,
        id: order.stockID
      })
    }
    // update funds
    state.funds -= order.stockPrice * order.quantity;
  },
  'SELL_STOCK' (state, order) {
    const oldStock = state.stocksOwned.find(elem => elem.id === order.stockID);
    if (oldStock.quantity > order.quantity) {
      oldStock.quantity = parseInt(oldStock.quantity) - parseInt(order.quantity);
    } else {
      const oldStockIndex = state.stocksOwned.indexOf(oldStock);
      state.stocksOwned.splice(oldStockIndex, 1)
    }
    // Update funds
    state.funds += parseInt(order.stockPrice) * parseInt(order.quantity);
  }
}

const actions = {
  sellStock: (context, order) => {
    context.commit('SELL_STOCK', order)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
