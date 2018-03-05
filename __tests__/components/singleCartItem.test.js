import React from 'react';
import { shallow } from 'enzyme';
import SingleCartItem from '../../src/components/SingleCartItem.jsx';

const props = {
	id: 2,
	name: 'JBL Everest Elite 700 Headphones',
	price: 129,
	thumbnail: '/image/product-small-b.jpg',
	quantity: 2,
	removeFromCart: jest.fn(),
	changeQuantity: jest.fn(),
};

const event = { target: { value: 3 } };

describe('SingleCartItem Component', () => {
	const singleCartItem = shallow(<SingleCartItem {...props} />);

	it('should contain a table row', () => {
		const tableRow = singleCartItem.find('tr');
		expect(tableRow.length).toBe(1);
	});
	it('should contain 5 standard table cells', () => {
		const tableCell = singleCartItem.find('td');
		expect(tableCell.length).toBe(5);
	});
	it('should display the correct product total price', () => {
		const price = singleCartItem.find('.text-right').last().text();
		expect(price).toBe('$258.00');
	});
	it('should call changeQuantity function when the product quantity is changed', () => {
		const quantityInput = singleCartItem.find('input');
		quantityInput.simulate('change', { target: { value: 3 } });
		expect(props.changeQuantity).toHaveBeenCalled();
	});
	it('should call changeQuantity with the right props', () => {
		expect(props.changeQuantity).toHaveBeenCalledWith(event, props);
	});
	it('should call removeFromCart function when the remove button is clicked', () => {
		const removeButton = singleCartItem.find('button.btn.btn-danger.btn-xs');
		removeButton.simulate('click');
		expect(props.removeFromCart).toHaveBeenCalled();
	});
	it('should call removeFromCart with the right props', () => {
		expect(props.removeFromCart).toHaveBeenCalledWith(props, props.quantity);
	});
});
