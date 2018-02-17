import React from 'react';
import PropTypes from 'prop-types';

const starRating = (numberRating, maxRating) => {
	const rating = [];
	for (let i = 0; i < maxRating; i += 1) {
		rating.push((i < numberRating)
			? <span key={i} className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
			: <span key={i} className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>);
	}
	return rating;
};

const calculatePriceAfterDiscount = (discount, price) => price - ((discount / 100) * price);

const SingleProductComponent = props => (
	<div className="product-layout product-grid col-md-3 col-xs-12">
		<div className="product-block product-thumb">
			<div className="product-block-inner">
				<h4><a href="/">{props.name}</a></h4>
				<div className="image">
					<a href="/">
						<img src={props.thumbnail} title={props.name} alt={props.name} className="img-responsive reg-image"/>
						<img className="img-responsive hover-image" src="/image/product-large-a.jpg" title="product name" alt="product name"/>
					</a>
					{/* <a href="/">
						<img src="/image/product-small-b.jpg" title="/image/product-large-b.jpg" alt="product name" className="img-responsive"/>
					</a> */}
					<div className="saleback">
						<div className="percentsaving">{ props.discount ? `${props.discount}% off` : '' }</div>
					</div>
					<div className="rating">
						{ props.rating ? starRating(props.rating, 5) : '' }
					</div>
				</div>
				<div className="product-details">
					<div className="caption">
						<h4><a href="/">Product Name</a></h4>
						<div className="price">
							{
								props.discount
									? (<div><span className="price-new">${calculatePriceAfterDiscount(props.discount, props.price)}</span> <span className="price-old">${props.price}</span></div>)
									: `$${props.price}`
							}
							<span className="price-tax">{ props.tax ? `Tax: ${props.tax}` : '' }</span>
						</div>
						<p className="desc">{props.description}</p>
					</div>
				</div>
				<div className="product-block-hover">
					<div className="button-group">
						<button type="button" className="addtocart">Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);

SingleProductComponent.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	tax: PropTypes.number,
	discount: PropTypes.number,
	rating: PropTypes.number,
	thumbnail: PropTypes.string,
	image: PropTypes.string
};

export default SingleProductComponent;
