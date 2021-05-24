import React from 'react';
import { Link } from "react-router-dom";
import CocktailIcon from '@material-ui/icons/LocalBar';
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
      <div className="NavBar-content">
        <Link className="NavBar-logo" to="/">
          <span className="NavBar-logoText">
            <span className="NavBar-logoName">Eric's Guide</span>
            <span className="NavBar-logoTagline">curated cocktails</span>
          </span>
        </Link>
        <ul className="NavBar-nav">
          <li>
            <Link className="NavBar-navLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="NavBar-navLink" to="/explore">
              Explore
            </Link>
          </li>
        </ul>
        {/*<Search
          availableIngredients={availableIngredients}
          onSelectIngredient={onSelectIngredient}
          onSelectRecipe={onSelectRecipe}
          recipes={recipes}
          selectedTags={selectedTags}
        />*/}
      </div>
    </div>
  );
};

export default NavBar;
