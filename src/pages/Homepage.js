import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Banner from '../components/Banner/Banner';
import NewsFeed from '../components/Banner/NewsFeed';
import ProductFeature from '../components/Features/ProductFeature';
import Modal from '../components/Modal/Modal';

function Homepage(props) {
    return (
        <div>
            <Hero />
            <Banner />
            <Features />
            <ProductFeature />
            <NewsFeed />
        </div>
    );
}
export default Homepage;