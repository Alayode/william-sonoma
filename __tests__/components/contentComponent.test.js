import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ContentComponent from '../../src/components/ContentComponent.jsx';
import HeaderBottom from '../../src/components/HeaderBottom.jsx';
import LatestProducts from '../../src/components/LatestProducts.jsx';

const props = {
	products: [],
	numCartItems: 0,
	cartItems: {},
	addToCart: jest.fn(),
	removeFromCart: jest.fn(),
	changeQuantity: jest.fn(),
};

describe('ContentComponent', () => {
	const ContentComponentMount = mount(<MemoryRouter><ContentComponent {...props} /></MemoryRouter>);

	it('should contain a div with an id of product-category', () => {
		const mainContent = ContentComponentMount.find('div#product-category');
		expect(mainContent.length).toBe(1);
	});
	it('should contain the HeaderBottom Component', () => {
		expect(ContentComponentMount.contains(HeaderBottom)).toBeTruthy();
	});
	it('should contain the HeaderBottom Component', () => {
		expect(ContentComponentMount.contains(LatestProducts)).toBeTruthy();
	});
});
