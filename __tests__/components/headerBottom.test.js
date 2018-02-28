import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import HeaderBottom from '../../src/components/HeaderBottom.jsx';
import CartDropDown from '../../src/components/CartDropDown.jsx';

const props = {
	products: [],
	numCartItems: 0,
	changeQuantity: jest.fn(),
	cartItems: {},
};

describe('HeaderBottom Component', () => {
	const HeaderBottomComponent = mount(
		<MemoryRouter>
			<HeaderBottom {...props} />
		</MemoryRouter>);

	it('should contain a drop down with an unordered list with an id of dropdown-menu', () => {
		const header = HeaderBottomComponent.find('header');
		expect(header.length).toBe(1);
	});
	it('should contain the CartDropDown Component', () => {
		expect(HeaderBottomComponent.contains(CartDropDown)).toBeTruthy();
	});
});
