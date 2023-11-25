import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import NewsFeed from '../components/Banner/NewsFeed';

const Homepage = () => {
	return (
		<div>
			<Hero />
			<Features />
			<NewsFeed />
		</div>
	);
};
export default Homepage;
