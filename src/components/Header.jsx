import React from 'react';
import PropTypes from 'prop-types';

const Header = () => (
	<div>
		<nav id="top">
			<div className="container">
				<div className="content_headercms_top pull-left">
					<i className="fa fa-tag" aria-hidden="true"></i>
					Biggest Indian Sale Flate ( Coupn Code : FREE 15 )
				</div>
				<div id="top-links" className="nav pull-right">
					<ul className="list-inline">
						<li className="pull-left">
							<form id="form-currency">
								<div className="btn-group">
									<button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
										<strong>$</strong>
										<span className="hidden-xs hidden-sm hidden-md">Currency</span>&nbsp;
										<i className="fa fa-caret-down"></i>
									</button>
									<ul className="dropdown-menu currency-menu">
										<li>
											<button
												className="currency-select btn btn-link btn-block"
												type="button"
												name="dollar">
												$ US Dollar
											</button>
										</li>
										<li>
											<button
												className="currency-select btn btn-link btn-block"
												type="button"
												name="naira">
												# Naira
											</button>
										</li>
									</ul>
								</div>
								<input type="hidden" name="code" value="" />
								<input type="hidden" name="redirect" value="#" />
							</form>
						</li>

						<li>
							<a href="#"><i className="fa fa-phone"></i></a>
							<span className="hidden-xs hidden-sm hidden-md">0807348785784</span>
						</li>
						<li>
							<a href="#" id="wishlist-total" title="wishlist">
								<i className="fa fa-heart"></i>
								<span className="hidden-xs hidden-sm hidden-md">Wishlist (0)</span>
							</a>
						</li>
						<li>
							<a href="#" title="checkout">
								<i className="fa fa-share"></i>
								<span className="hidden-xs hidden-sm hidden-md">Checkout</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
);

Header.propTypes = {
	numberOfItemsInCart: PropTypes.func,
	numCartItems: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.number
	]),
};


export default Header;
