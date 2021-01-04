import React from 'react'



class AddFishForm extends React.Component {
	constructor(props) {
		super(props)
		this.createFish = this.createFish.bind(this)
	}
	createFish(event) {
		event.preventDefault()
		const fish = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		}
		//update the state
		this.props.addFish(fish)
		//reset the fishForm
		this.fishForm.reset();
	}
	render(props) {
		return (
			////(event) => this.createFish(event)}>
			<form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={this.createFish}>
				<input  ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
				<input  ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
				<select ref={(input) => this.status = input}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea ref={(input) => this.desc = input} placeholder="Fish Desc"></textarea>
				<input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
				<button type="submit">+ Add Item</button>
			</form>
		)
	}
}

AddFishForm.propTypes = {
	addFish: React.PropTypes.func.isRequired
}

export default AddFishForm
