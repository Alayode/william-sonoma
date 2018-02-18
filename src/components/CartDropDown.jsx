import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SingleCartItem from './SingleCartItem';
import DropDown from './DropDown';

class CartDropDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			istoggle: false,
		};
		this.getCartTotal = this.getCartTotal.bind(this);
		this.renderCartItems = this.renderCartItems.bind(this);
		this.renderCartItems = this.renderCartItems.bind(this);
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	getCartTotal(cartItems) {
		return Object.keys(cartItems)
			.map(key => (cartItems[key].price * cartItems[key].quantity))
			.reduce((a, b) => a + b, 0);
	}

	renderCartItems(cartItems, props) {
		return Object.keys(cartItems).map((item, i) =>
			<SingleCartItem
				key={i} {...cartItems[item]}
				removeFromCart={props.removeFromCart}
				changeQuantity={props.changeQuantity}
			/>);
	}

	handleToggleClick() {
		this.setState({
			istoggle: !this.state.istoggle,
		});
	}

	render() {
		return (
			<div className="col-sm-3 cart">
				<div id="cart" className="btn-group btn-block">
					<button
						type="button"
						data-toggle="dropdown"
						data-loading-text="Loading"
						className="btn btn-inverse btn-block btn-lg dropdown-toggle"
						onClick={ this.handleToggleClick }
					>
						<span className="cartimage"></span>
						<span className="cart-price">
							<span className="text-shopping">Shopping Cart</span>
							<span id="cart-total">
								{ this.props.numCartItems } Items -
								${ this.getCartTotal(this.props.cartItems).toFixed(2) }
							</span>
						</span>
					</button>
					{
						this.state.istoggle
							? <DropDown
								{ ...this.props }
								getCartTotal={this.getCartTotal}
								renderCartItems={this.renderCartItems}
								handleToggleClick={this.handleToggleClick}
							/>
							: ''
					}
				</div>
				<div className="dropdown myaccount">
					<a href="#" title="title" className="dropdown-toggle" data-toggle="dropdown">
						<span className="accountimage"></span>
						<div className="account-content">
							<span className="hidden-xs hidden-sm hidden-md">My Account</span>
							<span className="option">Get All Option </span>
						</div>
					</a>
					<ul className="dropdown-menu dropdown-menu-right myaccount-menu">
						<li><a href="#">Account</a></li>
						<li><a href="#">Orders</a></li>
						<li><a href="#">Transactions</a></li>
						<li><a href="#">Downloads</a></li>
						<li><a href="#">Logout</a></li>
						<li><a href="#">Register</a></li>
						<li><a href="#">Login</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

CartDropDown.propTypes = {
	numCartItems: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.number
	]),
	cartItems: PropTypes.object,
	renderCartItems: PropTypes.func,
	getCartTotal: PropTypes.func,
};

export default CartDropDown;
