import React from 'react';
import Favorites from '../Favorites/Favorites';
import FavoritesHero from '../Hero/FavoritesHero';

function FavoritesPage(props) {
    return (
        <div>
            <FavoritesHero />
            <Favorites />
        </div>
    );
}

export default FavoritesPage;
