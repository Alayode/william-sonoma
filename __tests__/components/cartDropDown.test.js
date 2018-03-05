import React from 'react';
import { mount } from 'enzyme';
import CartDropDown from '../../src/components/CartDropDown.jsx';
import DropDown from '../../src/components/DropDown.jsx';
import ProductList from '../../src/ProductList.json';

const props = {
	products: ProductList,
	numCartItems: 2,
	cartItems: {
		1: {
			id: 1,
			name: 'Lamicall Adjustable Phone Stand For Desk',
			price: '240.00',
			thumbnail: '/image/product-small-a.jpg',
			quantity: 1
		},
		2: {
			id: 2,
			name: 'JBL Everest Elite 700 Headphones',
			price: 129,
			thumbnail: '/image/product-small-b.jpg',
			quantity: 1
		}
	},
	addToCart: jest.fn(),
	removeFromCart: jest.fn(),
	changeQuantity: jest.fn(),
};

describe('CartDropDown', () => {
	const CartDropDownComponent = mount(<CartDropDown {...props} />);

	const shoppingCartButton = CartDropDownComponent.find('.btn.btn-inverse.btn-block.btn-lg.dropdown-toggle');

	it('should contain a div with a class of cart', () => {
		const cartDiv = CartDropDownComponent.find('div.col-sm-3.cart');
		expect(cartDiv.length).toBe(1);
	});
	it('should display the cart drop down when the shopping cart button is clicked', (done) => {
		shoppingCartButton.simulate('click');
		setImmediate(() => {
			expect(CartDropDownComponent.contains(DropDown)).toBeTruthy();
			shoppingCartButton.simulate('click');
			done();
		});
	});
	it('should toggle the value of isToggle in the state when the Shopping Cart button is clicked', (done) => {
		shoppingCartButton.simulate('click');
		setImmediate(() => {
			expect(CartDropDownComponent.state('isToggle')).toEqual(true);
			done();
		});
	});
});
