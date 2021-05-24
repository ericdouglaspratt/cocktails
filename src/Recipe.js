import React from 'react';
import { useParams } from "react-router-dom";
import './Recipe.css';

import { determineUnitDisplay } from './helpers';

import RecipeAmount from './RecipeAmount';
import Strength from './Strength';

const Recipe = ({ preferredIngredientTagMap, recipes }) => {
  let { recipeId } = useParams();
  const recipe = recipes.lookup[recipeId];

  return (
    <div className="App-focusedContent">
      <div className="Recipe">
        <div className="Recipe-image" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipe.image || 'images/default.jpg'}`})` }}>
          {false && !!recipe.strength && (
            <Strength strength={recipe.strength} totalVolume={recipe.totalVolume} />
          )}
        </div>
        <div className="Recipe-text">
          <h2 className="Recipe-header">{recipe.name}</h2>
          <ol className="Recipe-ingredients">
            {recipe.ingredients.map(({ amount, preferred, tag, unit }) => {
              const displayName = preferred && preferredIngredientTagMap[tag][preferred] ? preferredIngredientTagMap[tag][preferred] : '';
              const displayUnit = determineUnitDisplay(unit, amount);
              return (
                <li className="Recipe-ingredient" key={tag}>
                  <RecipeAmount amount={amount} />
                  {displayUnit && ` ${displayUnit}`}
                  {` ${tag}`}
                  {displayName && <span className="Recipe-preferred">{` (${displayName})`}</span>}
                </li>
              );
            })}
          </ol>
          <p className="Recipe-instructions">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
