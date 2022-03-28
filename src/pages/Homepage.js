import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import NewsFeed from '../components/Banner/NewsFeed';

function Homepage(props) {
    return (
        <div>
            <Hero />
            <Banner />
            <NewsFeed />
        </div>
    );
}
export default Homepage;