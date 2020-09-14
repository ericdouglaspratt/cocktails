import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './Recipe.css';

import { determineUnitDisplay } from './helpers';

import RecipeAmount from './RecipeAmount';
import Strength from './Strength';

const Recipe = ({onClose, recipe}) => {
  return (
    <div className="Recipe">
      <div className="Recipe-image" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipe.image || 'images/default.jpg'}`})` }}>
        {!!recipe.strength && (
          <Strength strength={recipe.strength} totalVolume={recipe.totalVolume} />
        )}
      </div>
      <div className="Recipe-content">
        <h2 className="Recipe-header">{recipe.name}</h2>
        <button className="Recipe-closeButton" onClick={onClose}>
          <span className="Recipe-accessibleText">Close</span>
          <CloseIcon />
        </button>
        <ol className="Recipe-ingredients">
          {recipe.ingredients.map(ingredient => (
            <li className="Recipe-ingredient" key={ingredient.tag}>
              <RecipeAmount amount={ingredient.amount} />
              {` ${determineUnitDisplay(ingredient.unit, ingredient.amount)} ${ingredient.tag}`}
            </li>
          ))}
        </ol>
        <p className="Recipe-instructions">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
