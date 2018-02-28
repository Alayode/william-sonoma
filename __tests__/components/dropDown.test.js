import React from 'react';
import { shallow } from 'enzyme';
import DropDown from '../../src/components/DropDown.jsx';
import ProductList from '../../src/ProductList.json';

const props = {
	products: ProductList,
	cartItems: {
		1: {
			id: 1,
			name: 'Lamicall Adjustable Phone Stand For Desk',
			price: 240.00,
			thumbnail: '/image/product-small-a.jpg',
			quantity: 1
		}
	},
	numCartItems: 1,
	renderCartItems: jest.fn(),
	getCartTotal: () => (props.cartItems[1].quantity * props.cartItems[1].price),
};

const emptyCartProps = {
	products: ProductList,
	cartItems: {},
	numCartItems: 0,
	renderCartItems: jest.fn(),
};

describe('DropDown Component', () => {
	const DropDownComponent = shallow(<DropDown {...props} />);
	const DropDownComponentWithoutProps = shallow(<DropDown {...emptyCartProps} />);

	it('should contain a drop down with an unordered list with an id of dropdown-menu', () => {
		const dropDownMenu = DropDownComponent.find('ul.dropdown-menu.cart-menu');
		expect(dropDownMenu.length).toBe(1);
	});
	it('should display an "Empty Cart" when no product has been added', () => {
		const emptyCartText = DropDownComponentWithoutProps.find('ul.dropdown-menu.cart-menu li p').text();
		expect(emptyCartText).toBe('Empty Cart');
	});
	it('should display the products in cart by calling renderCartItems function', () => {
		expect(props.renderCartItems).toHaveBeenCalled();
	});
	it('should call the renderCartItems function with the right props', () => {
		expect(props.renderCartItems).toHaveBeenCalledWith(props.cartItems, props);
	});
	it('should display the correct cart total', () => {
		const cartTotal = DropDownComponent.find('td.text-right').last().text(0);
		expect(cartTotal).toEqual('$240.00');
	});
});
