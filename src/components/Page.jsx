import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => (
	<div>Page <Link to="/">Home</Link> <Link to="/page">Page</Link></div>
);

export default Page;
