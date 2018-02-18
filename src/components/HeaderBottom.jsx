import React from 'react';
import { Link } from 'react-router-dom';

import CartDropDown from './CartDropDown';

const HeaderBottom = props => (
	<header>
		<div className="container">
			<div className="row">
				<div className="header-logo">
					<div id="logo">
						<Link to="/">
							<img
								width="100px"
								src="/image/logo.png"
								title="William Sonoma"
								alt="logo"
								className="img-responsive" />
						</Link>
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

				<CartDropDown {...props} />

			</div>
			<div className="content_headercms_bottom">

				<div className="container-menu">
					<div className="box-category">
						<span className="heading-img"></span>shop by category
					</div>
					<div className="header-search">
						<div id="search" className="input-group">
							<input
								type="text"
								name="search"
								placeholder="Search Products..."
								className="form-control input-lg"
							/>
							<span className="input-group-btn">
								<button
									type="button"
									className="btn btn-default btn-lg search-button"
								>
									Search
								</button>
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
);

export default HeaderBottom;
