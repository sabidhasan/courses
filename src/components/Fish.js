import React from 'react'
import { formatPrice } from '../helpers'

class Fish extends React.Component {
	render(props) {
		const d = this.props.details
		const isAvailable = d.status === 'available';
		const buttonText = isAvailable ? 'Add to Order' : 'Sold Out'
		return (
			<li className="menu-fish">
				<img src={d.image} alt={d.name} />
					<h3 className="fish-name">
						{d.name}
						<span className="price">{formatPrice(d.price)}</span>
					</h3>
					<p>{d.desc}</p>
					<button onClick={() => this.props.addOrder(this.props.index)} disabled={!isAvailable}>{buttonText}</button>
			</li>
		)
	}
}

Fish.propTypes = {
	details: React.PropTypes.object.isRequired,
	index:  React.PropTypes.string.isRequired,
	addOrder:  React.PropTypes.func.isRequired,
}

export default Fish

//onClick={this.props.addToOrder(d.key)}
// <li className="menu-fish">
// 	<img src={d.image} alt={d.name} />
// 	<h3 className="fish-name">
// 		{d.name}
// 		<span className="price">{formatPrice(d.price)}</span>
// 	</h3>
// 	<p>{d.desc}</p>
//
// </li>
