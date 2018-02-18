import React from 'react';
import PropTypes from 'prop-types';

const DropDown = props => (
	props.numCartItems > 0
		? (
			<ul className="dropdown-menu pull-right cart-menu">
				<li>
					<table className="table table-striped">
						<tbody>
							{ props.renderCartItems(props.cartItems, props) }
						</tbody>
					</table>
				</li>
				<li>
					<div>
						<table className="table table-bordered">
							<tbody>
								<tr>
									<td className="text-right"><strong>Total</strong></td>
									<td className="text-right">
										${ props.getCartTotal(props.cartItems).toFixed(2) }
									</td>
								</tr>
							</tbody>
						</table>
						<p className="text-right button-container">
							<a href="#"><strong><i className="fa fa-shopping-cart">
							</i> View Cart</strong></a>&nbsp;&nbsp;&nbsp;
							<a href="#"><strong><i className="fa fa-share"></i> Checkout</strong>
							</a>
						</p>
					</div>
				</li>
			</ul>
		)
		: (
			<ul className="dropdown-menu pull-right cart-menu">
				<li>
					<p className="text-center">Empty Cart</p>
				</li>
			</ul>
		)
);

DropDown.propTypes = {
	numCartItems: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.number
	]),
	cartItems: PropTypes.object,
	renderCartItems: PropTypes.func,
	getCartTotal: PropTypes.func,
};

export default DropDown;
