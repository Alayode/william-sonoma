import React from 'react';
import { mount } from 'enzyme';
import Header from '../../src/components/Header.jsx';

describe('Header Component', () => {
	const headerComponent = mount(<Header />);
	const unorderedList = headerComponent.find('ul.list-inline');

	it('should have a nav with id of top', () => {
		const nav = headerComponent.find('nav#top');
		expect(nav.length).toBe(1);
	});
	it('should have an unordered list with a class of list-inline', () => {
		expect(unorderedList.length).toBe(1);
	});
});
