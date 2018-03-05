import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import HOC from '../../src/components/HOC.jsx';
import ContentComponent from '../../src/components/ContentComponent.jsx';

const event = { target: { value: 3 } };

const props = {
	products: [],
	numCartItems: 0,
	cartItems: {},
	addToCart: jest.fn(),
	removeFromCart: jest.fn(),
	changeQuantity: jest.fn(),
};

describe('HOC Component', () => {
	const SampleHoc = HOC(ContentComponent);
	const componentDidMountSpy = jest.spyOn(SampleHoc.prototype, 'componentDidMount');

	const sampleComponent = mount(<MemoryRouter><SampleHoc {...props} /></MemoryRouter>);

	it('should mount without crashing', () => {
		expect(sampleComponent.find(ContentComponent).length).toEqual(1);
	});

	it('should call componentDidMount', () => {
		expect(componentDidMountSpy).toHaveBeenCalled();
	});
});
