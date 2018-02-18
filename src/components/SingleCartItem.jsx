import React from 'react';
import PropTypes from 'prop-types';

const SingleCartItem = props => (
	<tr>
		<td className="text-center">
			<a href="#">
				<img
					src={props.thumbnail}
					alt="product name"
					title="product name"
					className="img-thumbnail"
				/>
			</a>
		</td>
		<td className="text-left"><a href="#">{ props.name }</a>
		</td>
		<td className="text-right">
			<input
				type="number"
				min="1" max="6"
				style={{ width: 30 }}
				onChange={event => props.changeQuantity(event, props) } value={ props.quantity }
			/>
		</td>
		<td className="text-right">${ (parseFloat(props.price) * props.quantity).toFixed(2)}</td>
		<td className="text-center">
			<button
				type="button"
				title="remove"
				onClick={() => props.removeFromCart(props, props.quantity)}
				className="btn btn-danger btn-xs"
			>
				<i className="fa fa-times"></i>
			</button>
		</td>
	</tr>
);

SingleCartItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	quantity: PropTypes.number,
	price: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	thumbnail: PropTypes.string,
	removeFromCart: PropTypes.func,
	changeQuantity: PropTypes.func,
};

export default SingleCartItem;
