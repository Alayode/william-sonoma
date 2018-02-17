import React from 'react';
import PropTypes from 'prop-types';

import SingleProductComponent from './SingleProduct';
import LatestProducts from './LatestProducts';
import HOC from './HOC';

const ContentComponent = (props) => {
	const productLists = props.products.map((product, i) => <SingleProductComponent key={i} {...product} />);

	return (
		<div id="product-category" className="container">
			<ul className="breadcrumb">
				<li><a href="#">Home</a></li>
				<span>/</span>
				<li>Product</li>
			</ul>
			<div className="clearfix"></div>
			<div className="row">
				<LatestProducts />
				<div id="content" className="col-md-9">

					<h2 className="page-title">Products</h2>
					<div className="row category_thumb">
						<div className="col-sm-2 category_img"><img src="/image/product-small-b.jpg" alt="{{ heading_title }}" title="{{ heading_title }}" className="img-responsive" /></div>
						<div className="col-sm-10 category_description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
						</div>
					</div>
					<h3 className="refine-search">Refine Search</h3>
					<div className="row">
						<div className="col-sm-12 category_list">
							<ul>
								<li><a href="#">PC (0)</a></li>
								<li><a href="#">Mac (1)</a></li>
							</ul>
						</div>
					</div>

					<div className="category_filter">
						<div className="col-md-4 btn-list-grid">
							<div className="btn-group">
								<button type="button" id="grid-view" className="btn btn-default grid" data-toggle="tooltip" title="{{ button_grid }}"></button>
								<button type="button" id="list-view" className="btn btn-default list" data-toggle="tooltip" title="{{ button_list }}"></button>

							</div>
						</div>
						<div className="compare-total"><a href="#" id="compare-total"> Product Compare (0)</a></div>
						<div className="pagination-right">
							<div className="sort-by-wrapper">
								<div className="col-md-2 text-right sort-by">
									<label className="control-label" htmlFor="input-sort"><strong>Sort By</strong></label>
								</div>
								<div className="col-md-3 text-right sort">
									<select id="input-sort" className="form-control">
										<option value="menu_order">Default sorting</option>
										<option value="popularity">Sort by popularity</option>
										<option value="rating">Sort by average rating</option>
										<option value="date">Sort by newness</option>
										<option value="price">Sort by price: low to high</option>
										<option value="price-desc">Sort by price: high to low</option>
									</select>
								</div>
							</div>
							<div className="show-wrapper">
								<div className="col-md-1 text-right show">
									<label className="control-label" htmlFor="input-limit"><strong>Show</strong></label>
								</div>
								<div className="col-md-2 text-right limit">
									<select id="input-limit" className="form-control">
										<option value="10">10</option>
										<option value="20">20</option>
										<option value="30">30</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						{productLists}
					</div>
					<div className="pagination-wrapper">
						<div className="col-sm-6 text-left page-link">Showing 1 to {props.products.length} of {props.products.length} (1 Pages)</div>
						<div className="col-sm-6 text-right page-result">{props.products.length} Results</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ContentComponent.propTypes = {
	products: PropTypes.array,
};


export default HOC(ContentComponent);
