import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  constructor(props) {
    super(props)
    this.goToStore = this.goToStore.bind(this)
  }
  goToStore(event) {
    //sto the form from submitting
    event.preventDefault();
    //get text from box
    const storeId = this.StoreInput.value
    // console.log(storeId);
    //re route the app from '/' to '/id/'
    this.context.router.transitionTo('/store/' + storeId)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.StoreInput = input}}/>
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker
