import React from 'react'
import AddFishForm from './AddFishForm'
import base from '../base'


class Inventory extends React.Component {
	constructor() {
		super()
		this.state = {
			uid: null,
			owner: null
		}
		this.renderInventory = this.renderInventory.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.renderLogin = this.renderLogin.bind(this)
		this.authHandler = this.authHandler.bind(this)
		this.authenticate = this.authenticate.bind(this)
		this.logout = this.logout.bind(this)
	}
	componentDidMount() {
		//check to see if we have alreayd authenticated
		base.onAuth((user) => {
			//see if there is user
			if(user) {
				this.authHandler(null, {user});

			}
		})
	}
	handleChange(e, key) {
		const fish = this.props.fishes[key]
		//copy the fish
		const updatedFish = {...fish}//, [e.target.name]: e.target.value}
		updatedFish[e.target.name] = e.target.value
		//e.target.name
		//this.setState({fishes})
		this.props.updateFish(key, updatedFish)
		//event.target.value
	}
	renderLogin() {
		return (
			<nav className="login">
				<h2>Inventory</h2>
				<p>Sign in to manage the inventory</p>
				<button className="facebook" onClick={() => this.authenticate('facebook')}>Log In with Facebook</button>
			</nav>
		)
	}
	renderInventory(key) {
		const fish = this.props.fishes[key]

		return (
			<div className="fish-edit" key={key}>
				<input type="text" name="name" value={fish.name} placeholder="" onChange={(e) => this.handleChange(e, key)}></input>
				<input type="text" name="price"  value={fish.price}placeholder="" onChange={(e) => this.handleChange(e, key)}></input>
				<select name="status" value={fish.status} onChange={(e) => this.handleChange(e, key)}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea type="text" name="desc" placeholder="Fish Desc" value={fish.desc} onChange={(e) => this.handleChange(e, key)}></textarea>
				<input type="text" name="image" value={fish.image} onChange={(e) => this.handleChange(e, key)}></input>
				<button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
			</div>
		)
	}

	authenticate(provider) {
		//determine whether to log in
		base.authWithOAuthPopup(provider, this.authHandler)
	}
	logout() {
		base.unauth();
		this.setState({uid: null})
	}
	authHandler(err, authData) {
		//callback for login
		if (err) {
			console.error(err)
			return null;
		}
		//does the user own this store? If so, show edit. Otherwise, set them as the owner
		const storeRef = base.database().ref(this.props.storeId)
		storeRef.once('value', (snapshot) => {
			const data = snapshot.val() || {}
			// //claim it as owner if no already
			 if (!data.owner) {
				storeRef.set({
					owner: authData.user.uid
				});
			 }
			//set local state
			 this.setState({
			 	uid: authData.user.uid,
			 	owner: data.owner || authData.user.uid
			 })
		 })
	}

	render(props) {
		const logout = <button onClick={this.logout}>Logout</button>
		if (!this.state.uid) {
			// no one loigged in
			return (<div>{this.renderLogin()}</div>)
		}

		if (this.state.uid !== this.state.owner) {
			return (<div>Sorry, you are not the owner! {logout}</div>)
		}

		return (
			<div>
			   <h2>Inventory</h2>
			   {logout}
			   {Object
				   .keys(this.props.fishes)
				   .map(this.renderInventory)
			   }

			   <AddFishForm addFish={this.props.addFish}/>
			   <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
		   	</div>
		)
	}
}

Inventory.PropTypes = {
	fishes: React.PropTypes.object.isRequired,
	updateFish: React.PropTypes.func.isRequired,
	removeFish: React.PropTypes.func.isRequired,
	addFish: React.PropTypes.func.isRequired,
	loadSamples: React.PropTypes.func.isRequired,
	storeId: React.PropTypes.string.isRequired
}

export default Inventory
