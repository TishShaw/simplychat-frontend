import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import NewsFeed from '../components/Banner/NewsFeed';
import ProductFeature from '../components/Features/ProductFeature';


function Homepage(props) {
    return (
        <div>
            <Hero />
            <Banner />
            <ProductFeature />
            <NewsFeed />
        </div>
    );
}
export default Homepage;