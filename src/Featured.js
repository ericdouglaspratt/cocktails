import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './Featured.css';

const Featured = ({ featuredRecipeIds, recipes }) => {
  return (
    <div className="Featured">
      {featuredRecipeIds && featuredRecipeIds.map(id => {
        const recipe = recipes.lookup[id];
        const dedeupedIngredients = Object.keys(recipe.ingredients.map(info => info.tag).reduce((result, tag) => {
          result[tag] = true;
          return result;
        }, {}));

        return (
          <Link className="Featured-card" key={id} to={`/recipes/${recipe.id}`}>
            <span className="Featured-image" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipe.image || 'images/default.jpg'}`})` }} />
            <span className="Featured-description">
              <span className="Featured-name">
                {recipe.name}
              </span>
              <span className="Featured-ingredients">
                {dedeupedIngredients.map((name, index) => {
                  return (
                    <Fragment key={name}>
                      <span className="Featured-ingredient">
                        {name}
                      </span>
                      {index < dedeupedIngredients.length - 1 && ' — '}
                    </Fragment>
                  );
                })}
              </span>
              <span className="Featured-cta">
                View Recipe
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Featured;
