import React from 'react';

const LatestProducts = () => (
	<div className="col-md-3 left-col">
		<div className="box latest_product">
			<div className="box-heading">Latest</div>
			<div className="box-content">
				<div className="product-items">
					<div className="product-block product-thumb">
						<div className="product-block-inner">
							<div className="image">
								<a href="/"><img src="/image/product-small-a.jpg" alt="Product name" title="product name" className="img-responsive" /></a>
								<div className="percentsaving">30% off</div>
							</div>
							<div className="product-details">
								<div className="caption">
									<a href="/"> product name </a>
									<div className="rating">
										<span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
										<span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
									</div>
									<p className="price">
										{/* $800 */}
										<span className="price-new">780</span> <span className="price-old">800</span>
										<span className="price-tax">Tax: $10</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="product-block product-thumb">
						<div className="product-block-inner">
							<div className="image">
								<a href="/"><img src="/image/product-small-a.jpg" alt="Product name" title="product name" className="img-responsive" /></a>
								<div className="percentsaving">30% off</div>
							</div>
							<div className="product-details">
								<div className="caption">
									<a href="/"> product name </a>
									<div className="rating">
										<span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
										<span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
									</div>
									<p className="price">
										{/* $800 */}
										<span className="price-new">780</span> <span className="price-old">800</span>
										<span className="price-tax">Tax: $10</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="product-block product-thumb">
						<div className="product-block-inner">
							<div className="image">
								<a href="/"><img src="/image/product-small-a.jpg" alt="Product name" title="product name" className="img-responsive" /></a>
								<div className="percentsaving">30% off</div>
							</div>
							<div className="product-details">
								<div className="caption">
									<a href="/"> product name </a>
									<div className="rating">
										<span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
										<span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
									</div>
									<p className="price">
										<span className="price-new">780</span> <span className="price-old">800</span>
										<span className="price-tax">Tax: $10</span>
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<span className="latest_default_width" style={{ display: 'none', visibility: 'hidden' }}></span>
	</div>
);

export default LatestProducts;
