const state = {
    funds: 10000,
    stocksOwned: []
}

const getters = {

}

const mutations = {
  'BUY_STOCK'(state, order) {
    // check if already owned
    console.log(order)
    return;
    const oldStock = state.stocksOwned.find(elem => elem.id === order.stockID);
    if (oldStock) {
      // Update existing stock
      oldStock.quantity += order.quantity
    } else {
      // new record
      state.stocksOwned.push({
        quantity: order.quantity,
        id: order.stockID
      })
    }
    // update funds
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK' (state, order) {
    const oldStock = state.stocksOwned.find(elem => elem.id === order.stockID);
    if (record.quantity > order.quantity) {
      record.quantity -= order.quantity;
    } else {
      oldStockIndex = state.stocks.indexOf(record);
      state.stocks.splice(oldStockIndex, 1)
    }
    // Update funds
    state.funds += stockPrice * quantity;
  }
}


export default {
  state,
  getters,
  mutations,
  // actions
}
