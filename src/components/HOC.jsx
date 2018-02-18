import React from 'react';
import { configureToasts, Toast } from 'toaster-js';

import ProductList from '../ProductList.json';
import ShoppingCart from '../ShoppingCart';

const HOC = Component => class HigherOrderComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			cartItems: {},
			numCartItems: 0,
		};

		this.total = 0;
		this.items = {};

		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.numberOfItemsInCart = this.numberOfItemsInCart.bind(this);
		this.changeQuantity = this.changeQuantity.bind(this);

		this.cart = new ShoppingCart();
	}

	componentDidMount() {
		this.setState({
			products: ProductList,
			cartItems: this.cart.items || {},
			numCartItems: this.numberOfItemsInCart(),
		});
	}

	addToCart(item, quantity, showNotification = true) {
		configureToasts({
			deleteDelay: 300
		});
		if (this.state.cartItems[item.id] && this.state.cartItems[item.id].quantity >= 6) {
			if (showNotification) {
				/* eslint-disable no-new */
				new Toast('You can\'t add more than 6 of the same element to the cart!', Toast.TYPE_ERROR, Toast.TIME_NORMAL);
			}
			return false;
		}

		const cartObject = this.cart.addItem(item, quantity);
		sessionStorage.setItem('sonoma', JSON.stringify(cartObject));

		this.setState({
			cartItems: cartObject,
			numCartItems: this.numberOfItemsInCart(),
		});

		if (showNotification) {
			/* eslint-disable no-new */
			new Toast('Successfully Added to cart!', Toast.TYPE_DONE, Toast.TIME_NORMAL);
		}
	}

	removeFromCart(item, quantity) {
		if (quantity === item.quantity) {
			delete this.state.cartItems[item.id];
		}
		this.cart.removeItem(item, quantity);
		sessionStorage.setItem('sonoma', JSON.stringify(this.state.cartItems));

		this.setState({
			numCartItems: this.numberOfItemsInCart(),
		});
	}

	numberOfItemsInCart() {
		return this.cart.numberOfItemsInCart();
	}

	changeQuantity(event, props) {
		const { target: { value } } = event;

		if (parseInt(value, 10) === 0) {
			return false;
		}

		if (value > props.quantity) {
			this.addToCart(props, value, false);
		} else if (value < props.quantity) {
			this.removeFromCart(props, value);
		} else {
			return false;
		}
	}

	render() {
		return (
			<Component
				{...this.state}
				{...this.props}
				addToCart={this.addToCart}
				removeFromCart={this.removeFromCart}
				changeQuantity={this.changeQuantity}
			/>
		);
	}
};

export default HOC;
