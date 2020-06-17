import React from 'react';
import './Recipe.css';

import { useParams } from "react-router-dom";

import RecipeAmount from './RecipeAmount';

const UNITS = {
  DASH: 'dash',
  OUNCE: 'oz'
};

const Recipe = ({recipes}) => {
  let { id } = useParams();
  const recipe = recipes.lookup[id];

  return (
    <div className="Recipe">
      <div className="Recipe-content">
        <div className="Recipe-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/frame.png`}}>
          <div className="Recipe-imagePhoto" style={{backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipe.image || 'images/default.jpg'}`})`}} />
        </div>
        <div className="Recipe-text">
          <h1 className="Recipe-name">{recipe.name}</h1>
          <ol className="Recipe-ingredients">
            {recipe.ingredients.map(ingredient => {
              const unit = ingredient.unit === UNITS.DASH ? ingredient.amount === 1 ? 'dash' : 'dashes' : ingredient.unit;
              return (
                <li className="Recipe-ingredient" key={ingredient.tag}>
                  <RecipeAmount amount={ingredient.amount} />
                  {` ${unit} ${ingredient.tag}`}
                </li>
              );
            })}
          </ol>
          <p className="Recipe-instructions">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
