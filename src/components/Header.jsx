import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<div>
		<nav id="top">
			<div className="container">
				<div className="content_headercms_top pull-left"><i className="fa fa-tag" aria-hidden="true"></i> Biggest Indian Sale Flate ( Coupn Code : FREE 15 )</div>
				<div id="top-links" className="nav pull-right">
					<ul className="list-inline">
						<li className="pull-left">
							<form id="form-currency">
								<div className="btn-group">
									<button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
										<strong>$</strong>
										<span className="hidden-xs hidden-sm hidden-md">Currency</span>&nbsp;<i className="fa fa-caret-down"></i></button>
									<ul className="dropdown-menu currency-menu">
										<li>
											<button className="currency-select btn btn-link btn-block" type="button" name="dollar">$ US Dollar</button>
										</li>
										<li>
											<button className="currency-select btn btn-link btn-block" type="button" name="naira"># Naira</button>
										</li>
									</ul>
								</div>
								<input type="hidden" name="code" value="" />
								<input type="hidden" name="redirect" value="#" />
							</form>
						</li>

						<li><a href="/"><i className="fa fa-phone"></i></a> <span className="hidden-xs hidden-sm hidden-md">0807348785784</span></li>
						<li><a href="/" id="wishlist-total" title="wishlist"><i className="fa fa-heart"></i> <span className="hidden-xs hidden-sm hidden-md">Wishlist (0)</span></a></li>
						<li><a href="/" title="checkout"><i className="fa fa-share"></i> <span className="hidden-xs hidden-sm hidden-md">Checkout</span></a></li>
					</ul>
				</div>
			</div>
		</nav>
		<header>
			<div className="container">
				<div className="row">
					<div className="header-logo">
						<div id="logo">
							<Link to="/"><img width="100px" src="/image/logo.png" title="William Sonoma" alt="logo" className="img-responsive" /></Link>
						</div>
					</div>
					<div className="header-links">
						<ul className="static_links">
							<li className="head-links"><a href="#">Special</a></li>
							<li className="head-links"><a href="#">Affiliate</a></li>
							<li className="head-links"> <a href="#">Blog</a></li>
							<li className="head-links"><a href="#">Contact</a></li>
						</ul>
					</div>

					<div className="col-sm-3 cart">
						<div id="cart" className="btn-group btn-block">
							<button type="button" data-toggle="dropdown" data-loading-text="{{ text_loading }}" className="btn btn-inverse btn-block btn-lg dropdown-toggle">
								<span className="cartimage"></span><span className="cart-price"><span className="text-shopping">Shopping Cart</span><span id="cart-total">0 Items - $0.00</span>
								</span></button>
							<ul className="dropdown-menu pull-right cart-menu">
								<li>
									<table className="table table-striped">
										<tbody>
											<tr>
												<td className="text-center"><a href="#"><img src="image/product-small-d.jpg" alt="product name" title="product name" className="img-thumbnail" /></a></td>
												<td className="text-left"><a href="#">Product Name</a> Product Option
												<br />
															- <small>Option Name Option Value</small>
												<br />
															- <small>RecurringText RecurringProduct</small> </td>
												<td className="text-right">x3</td>
												<td className="text-right">$400.97</td>
												<td className="text-center"><button type="button" title="remove" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></button></td>
											</tr>
											{/* <tr>
														<td className="text-center"></td>
														<td className="text-left">Voucher Description</td>
														<td className="text-right">x&nbsp;1</td>
														<td className="text-right">Coucher Amount</td>
														<td className="text-center text-danger"><button type="button" title="button_remove" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></button></td>
													</tr> */}
										</tbody>
									</table>
								</li>
								<li>
									<div>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td className="text-right"><strong>Total</strong></td>
													<td className="text-right">$700</td>
												</tr>
											</tbody>
										</table>
										<p className="text-right button-container"><a href="#"><strong><i className="fa fa-shopping-cart"></i> View Cart</strong></a>&nbsp;&nbsp;&nbsp;<a href="#"><strong><i className="fa fa-share"></i> Checkout</strong></a></p>
									</div>
								</li>
								<li>
									<p className="text-center">Empty Cart</p>
								</li>
							</ul>
						</div>

						<div className="dropdown myaccount"><a href="{{ account }}" title="{{ text_account }}" className="dropdown-toggle" data-toggle="dropdown"><span className="accountimage">
						</span><div className="account-content"><span className="hidden-xs hidden-sm hidden-md">My Account</span> <span className="option">Get All Option </span></div>
						</a>
						<ul className="dropdown-menu dropdown-menu-right myaccount-menu">
							<li><a href="#">Account</a></li>
							<li><a href="#">Orders</a></li>
							<li><a href="#">Transactions</a></li>
							<li><a href="#">Downloads</a></li>
							<li><a href="#">Logout</a></li>

							<li><a href="#">Register</a></li>
							<li><a href="#">Login</a></li>
						</ul>
						</div>
					</div>
				</div>
				<div className="content_headercms_bottom">

					<div className="container-menu">
						<div className="box-category">
							<span className="heading-img"></span>shop by category
						</div>
						<div className="header-search">
							<div id="search" className="input-group">
								<input type="text" name="search" value="" placeholder="Search Products..." className="form-control input-lg" />
								<span className="input-group-btn">
									<button type="button" className="btn btn-default btn-lg search-button">Search</button>
								</span>
							</div>
						</div>
						<div className="offerbanner-outer">
							<div className="textwidget custom-html-widget">
								!!! Exclusive OFF on Home Appliance
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
);

export default Header;
