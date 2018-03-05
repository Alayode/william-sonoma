import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../src/components/Footer.jsx';

describe('Footer Component', () => {
	const footerComponent = mount(<Footer />);

	it('should contain a footer tag', () => {
		const footerTag = footerComponent.find('footer');
		expect(footerTag.length).toBe(1);
	});
	it('should have four divs in the div with id of footer', () => {
		const footerDiv = footerComponent.find('div#footer > .row > div');
		expect(footerDiv.length).toBe(5);
	});
});
