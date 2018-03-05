import React from 'react';
import { mount } from 'enzyme';
import LatestProducts from '../../src/components/LatestProducts.jsx';

describe('LatestProducts Component', () => {
	const LatestProductsComponent = mount(<LatestProducts />);

	it('should display 3 Products', () => {
		const latestProducts = LatestProductsComponent.find('.product-block .product-thumb');
		expect(latestProducts.length).toBe(3);
	});
	it('should have an unordered list with a class of list-inline', () => {
		const firstProductInLatest = LatestProductsComponent.find('.caption a').first().text();
		expect(firstProductInLatest.trim()).toEqual('6W LED Bright Lamp');
	});
});
