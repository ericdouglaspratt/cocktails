import React from 'react';
import './NavBar.css';

import Search from './Search';

const NavBar = ({
  availableIngredients,
  onSelectIngredient,
  onSelectRecipe,
  recipes,
  selectedTags
}) => {
  return (
    <div className="NavBar">
      <Search
        availableIngredients={availableIngredients}
        onSelectIngredient={onSelectIngredient}
        onSelectRecipe={onSelectRecipe}
        recipes={recipes}
        selectedTags={selectedTags}
      />
    </div>
  );
};

export default NavBar;
