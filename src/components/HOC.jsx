import React from 'react';
import ProductList from '../ProductList.json';

const HOC = Component => class HigherOrderComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		this.setState({
			products: ProductList,
		});
	}

	render() {
		return (
			<Component
				{...this.state}
				{...this.props}
			/>
		);
	}
};

export default HOC;
