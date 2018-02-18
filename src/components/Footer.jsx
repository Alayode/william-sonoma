import React from 'react';

const Footer = () => (
	<footer>
		<div className="content_footer_top">
			<div className="footer-top-cms-wrapper">

			</div>
		</div>
		<div id="footer" className="container">

			<div className="row">
				<div className="col-sm-3 column">
					<h5>Information</h5>
					<ul className="list-unstyled">
						<li><a href="#">About Us</a></li>
						<li><a href="#">Privacy Policy</a></li>
					</ul>
				</div>

				<div className="col-sm-3 column">
					<h5>Customer Service</h5>
					<ul className="list-unstyled">
						<li><a href="#">Contact Us</a></li>
						<li><a href="#">Returns</a></li>
						<li><a href="#">Site Map</a></li>

					</ul>
				</div>
				<div className="col-sm-3 column">
					<h5>Extras</h5>
					<ul className="list-unstyled">
						<li><a href="#">Brands</a></li>
						<li><a href="#">Gift Certificates</a></li>
						<li><a href="#">Affiliates</a></li>
						<li><a href="#">Specials</a></li>
					</ul>
				</div>
				<div className="col-sm-3 column">
					<h5>My Account</h5>
					<ul className="list-unstyled">
						<li><a href="#">My Account</a></li>
						<li><a href="#">Order History</a></li>
						<li><a href="#">Wish list</a></li>
						<li><a href="#">Newsletter</a></li>
					</ul>
				</div>
				<div className="content_footer_right">
					<h5>Contact Us</h5>
					<ul className="list-unstyled">
						<li>
							<div className="address">
								<div className="address_content">
									<div className="contact_address">
																60 29th Street San Francisco, CA 94110
													United States of America
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="content_footer_bottom">
			<div className="container">
				<div className="pull-left">
					<ul className="toggle-block">
						<li>
							<a href="#" title="Facebook" className="facebook icon">
								<i className="fa fa-facebook"></i>
							</a>
							<a href="#" title="Twitter" className="twitter icon">
								<i className="fa fa-twitter"></i>
							</a>

							<a href="#" title="Linkedin" className="linkedin icon">
								<i className="fa fa-linkedin"></i>
							</a>
							<a href="#" title="RSS" className="rss icon">
								<i className="fa fa-rss"></i></a>
							<a href="#" title="Youtube" className="youtube icon">
								<i className="fa fa-youtube"></i>
							</a>

							<a href="#" title="Pinterest" className="pinterest icon">
								<i className="fa fa-pinterest"></i>
							</a>
							<a href="#" title="Google Plus " className="google-plus icon">
								<i className="fa fa-google-plus"></i>
							</a>
							<a href="#" title="Skype" className="skype icon">
								<i className="fa fa-skype"></i>
							</a>
							<a href="#" title="Instagram" className="instagram icon">
								<i className="fa fa-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
				<div className="pull-right">
					<div id="powered">&copy; 2018</div>
				</div>
			</div>
		</div>

	</footer>
);

export default Footer;
