import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from "react-router-dom";
import './RecipeSimilar.css';

const RecipeSimilar = ({ recipeLookup, similar }) => {
  return (
    <div className="RecipeSimilar">
      <h3 className="RecipeSimilar-heading">
        Similar Choices
      </h3>
      <ul className="RecipeSimilar-list">
        {similar.map(info => {
          const recipe = recipeLookup[info.id];
          return (
            <li key={info.id}>
              <Link className="RecipeSimilar-link" to={`/recipes/${recipe.id}`}>
                <span className="RecipeSimilar-image" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipe.image || 'images/default.jpg'}`})` }}  />
                <span className="RecipeSimilar-name">{recipe.name}</span>
                <span className="RecipeSimilar-ingredients">
                  {!!info.subtract && !!info.subtract.length && (
                    <span className="RecipeSimilar-ingredientList">
                      <RemoveIcon />
                      {info.subtract.join(', ')}
                    </span>
                  )}
                  {!!info.add && !!info.add.length && (
                    <span className="RecipeSimilar-ingredientList">
                      <AddIcon />
                      {info.add.join(', ')}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeSimilar;
