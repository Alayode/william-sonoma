import React from 'react';
import { shallow } from 'enzyme';
import SingleProduct from '../../src/components/SingleProduct.jsx';

const props = {
	id: 200,
	name: '35ltr Geepee Tank ',
	description: 'Suspendisse vitae lorem est. Pellentesque volutpat, magna ac tempor consectetur, lacus ante hendrerit elit, pretium ullamcorper metus tortor a turpis',
	price: 300,
	tax: 0,
	discount: 20,
	rating: 4,
	thumbnail: '/image/tank.jpg',
	image: '/image/tank-large.jpg',
	addToCart: jest.fn(),
};

const noDiscount = {
	discount: 0,
};

describe('SingleProduct Component', () => {
	const SingleProductComponent = shallow(<SingleProduct {...props} />);
	const SingleProductWithoutDiscount = shallow(<SingleProduct {...noDiscount} />);

	it('should contain a div container with a product-layout class', () => {
		const singleProductContainer = SingleProductComponent.find('div.product-layout');
		expect(singleProductContainer.length).toBe(1);
	});
	it('should display the correct product discount', () => {
		const discount = SingleProductComponent.find('.percentsaving').text();
		expect(discount).toBe('20% off');
	});
	it('should not display when there is no product discount', () => {
		const discount = SingleProductWithoutDiscount.find('.percentsaving').text();
		expect(discount).toBe('');
	});
	it('should display the correct product price and discounted price', () => {
		const discountedPrice = SingleProductComponent.find('.price .price-new').text();
		const oldPrice = SingleProductComponent.find('.price .price-old').text();
		expect(discountedPrice).toEqual('$240.00');
		expect(oldPrice).toEqual('$300');
	});
	it('should call the addtocart function when the add to cart button is clicked', () => {
		const addToCartButton = SingleProductComponent.find('button.addtocart');
		addToCartButton.simulate('click');
		expect(props.addToCart).toHaveBeenCalled();
	});
	it('should call the addtocart function with the right props', () => {
		expect(props.addToCart).toHaveBeenCalledWith(props, 1);
	});
});
