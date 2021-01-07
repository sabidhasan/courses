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
  },
  funds(state) {
    return state.funds;
  }
}

const mutations = {
  'BUY_STOCK'(state, order) {
    // Check for enough funds
    const oldStock = state.stocksOwned.find(elem => elem.id === order.stockID);
    const cost = order.stockPrice * order.quantity;

    // check if already owned
    if (oldStock) {
      // Update existing stock
      oldStock.quantity = parseInt(order.quantity) + parseInt(oldStock.quantity);
    } else {
      // new record
      state.stocksOwned.push({
        quantity: parseInt(order.quantity),
        id: order.stockID
      })
    }
    // update funds
    state.funds -= cost;
  },
  'SELL_STOCK' (state, order) {
    const oldStock = state.stocksOwned.find(elem => elem.id === order.stockID);
    if (parseInt(oldStock.quantity) > parseInt(order.quantity)) {
      oldStock.quantity = parseInt(oldStock.quantity) - parseInt(order.quantity);
    } else {
      const oldStockIndex = state.stocksOwned.indexOf(oldStock);
      state.stocksOwned.splice(oldStockIndex, 1)
    }
    // Update funds
    state.funds += parseInt(order.stockPrice) * parseInt(order.quantity);
  },
  'SET_PORTFOLIO' (state, data) {
    state.funds = data.funds;
    state.stocksOwned = data.stocksOwned ? data.stocksOwned : [];
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
