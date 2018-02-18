import React from 'react';

export const starRating = (numberRating, maxRating) => {
	const rating = [];
	for (let i = 0; i < maxRating; i += 1) {
		rating.push((i < numberRating)
			? <span key={i} className="fa fa-stack">
				<i className="fa fa-star fa-stack-2x"></i>
				<i className="fa fa-star-o fa-stack-2x"></i>
			</span>
			: <span key={i} className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>);
	}
	return rating;
};

export const calculatePriceAfterDiscount = (discount, price) => parseFloat((price - ((discount / 100) * price))).toFixed(2);
