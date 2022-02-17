import React from 'react';
import Favorites from '../components/Favorites/Favorites';
import FavoritesHero from '../components/Hero/FavoritesHero';

function FavoritesPage(props) {
    return (
        <div>
            <FavoritesHero />
            <Favorites />
        </div>
    );
}

export default FavoritesPage;
