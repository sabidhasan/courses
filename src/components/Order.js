import React from 'react'
import { formatPrice } from '../helpers'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Order extends React.Component {
  constructor(props) {
	super(props)
	this.renderOrder = this.renderOrder.bind(this)
  }

  renderOrder(key) {
	  const fish = this.props.fishes[key]
	  const count = this.props.order[key]
	  const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

	  if (!fish || fish.status === "unavailable") {
			  return <li key={key}>Sorry, {fish ? fish.name : "fish"} is no longer available {removeButton}</li>
	  } else {
		  return (<li key={key}>
			  	<span>
					<CSSTransitionGroup
						component="span"
						className="count"
						transitionName="count"
						transitionEnterTimeout={250}
						transitionLeaveTimeout={250}>
						<span key={count}>{count}</span>
					</CSSTransitionGroup>
					lbs {fish.name}
				</span>
			  	<span className="price">{formatPrice(count * fish.price)}</span>
				{removeButton}
			  </li>)
	  }
  }
  render(props) {
	  const orderIds = Object.keys(this.props.order);
	  const total = orderIds.reduce((acc, val) => {
		const fish = this.props.fishes[val];
		const count = this.props.order[val];
		const isAvailable = fish && fish.status === 'available';
		if (isAvailable) {
			return acc + (count * fish.price || 0)
		}
		return acc
	}, 0);
    return (
	    <div className="order-wrap">
		    <h2>YOUR ORDER</h2>
		    <CSSTransitionGroup component="ul" className="order" transitionName="order" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
			    {orderIds.map(this.renderOrder) }
			    <li className="total">
				    <strong>Total</strong>
				    {formatPrice(total)}
			    </li>
		    </CSSTransitionGroup>
	    </div>
    )
  }
}

Order.propTypes = {
	fishes:React.PropTypes.object.isRequired ,
	order: React.PropTypes.object.isRequired,
	removeFromOrder: React.PropTypes.func.isRequired
}

export default Order
