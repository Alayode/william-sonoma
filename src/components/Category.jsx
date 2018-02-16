import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
	constructor() {
		super();
		this.state = {
			joel: ''
		};
	}
	render() {
		return (
			<div>Home <Link to="/">{this.state.joel}</Link><Link to="/page">Page</Link></div>
		);
	}
}

export default Category;
