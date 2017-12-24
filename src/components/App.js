import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import fishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'

class App extends React.Component {
	constructor(props) {
		super(props)
		//initial state
		this.state = {
			fishes: {},
			order: {}
		}
		this.addFish = this.addFish.bind(this)
		this.loadSamples = this.loadSamples.bind(this)
		this.addToOrder = this.addToOrder.bind(this)
		this.removeFromOrder = this.removeFromOrder.bind(this)
		this.updateFish = this.updateFish.bind(this)
		this.removeFish = this.removeFish.bind(this)
	}
	addFish(fish) {
		//copy old state
		const fishes = {...this.state.fishes}
		//update this copy
		const timestamp = Date.now()
		fishes['fish-'+timestamp] = fish
		//set state
		this.setState({'fishes': fishes}, () => console.log(this.state))
	}
	updateFish(key, newFish) {
		const fishes = {...this.state.fishes}
		fishes[key] = newFish
		this.setState({fishes: fishes})
	}
	removeFish(key) {
		const fishes = {...this.state.fishes}
		fishes[key] = null;
		this.setState({fishes: fishes})
	}
	loadSamples() {
		//fishes is defined in sample-fishes file
		this.setState({fishes: fishes})
	}
	addToOrder(fish) {
		//copy the state
		const order = {...this.state.order}
		// update or add new number of fush based on keys
		order[fish] = order[fish] + 1 || 1
		//update the state
		this.setState({order: order})
	}
	removeFromOrder(key) {
		const newOrder = {...this.state.order}
		delete newOrder[key]
		this.setState({order: newOrder})
	}
	componentWillMount() {
		//runs right before app is rendered
		this.ref = base.syncState(this.props.params.storeId+'/fishes', {
			context: this,
			state: 'fishes'
		});

		//check for order in local storeage
		const localStorageCopy = localStorage.getItem('order-' + this.props.params.storeId)
		if (localStorageCopy) {
			//update app state for order
			this.setState({
				order: JSON.parse(localStorageCopy)
			})
		}
	}
	componentWillUpdate(nextProp, nextState) {
		//params are set by RouterBrowser
		localStorage.setItem('order-' + this.props.params.storeId, JSON.stringify(nextState.order))
	}
	componentWillUnmount() {
		base.removeBinding(this.ref)
	}
	render() {
		return (
		<div className="catch-of-the-day">
			<div className="menu">
				<Header tagline="Fresh Seafood Market"/>
				<ul className="list-of-fishes">
					{Object
						.keys(this.state.fishes)
						.map((key) => <Fish key={key} index={key} details={this.state.fishes[key]} addOrder={this.addToOrder} />)
					}
				</ul>
			</div>

			<Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
			<Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} updateFish={this.updateFish} removeFish={this.removeFish} storeId={this.props.params.storeId}/>
	      </div>
    )
  }
}

App.propTypes = {
	params: React.PropTypes.object.isRequired
}
export default App
