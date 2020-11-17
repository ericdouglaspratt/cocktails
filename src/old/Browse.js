import React from 'react';
import './Browse.css';

import BrowseCard from './BrowseCard';

const Browse = ({recipes}) => {
  return (
    <div>
      Browse
      <div className="Browse-cards">
        {recipes.list.map(recipe => <BrowseCard key={recipe.name} {...recipe} />)}
      </div>
    </div>
  );
};

export default Browse;
