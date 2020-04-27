import React, { useEffect, useState } from 'react';
import VerifiedBadge from './VerifiedBadge';
import './Recipe.css';

const tokenMatch = (needle, haystack) => {
  const tokens = needle.split(' ');
  return tokens.reduce((result, token) => {
    return result && haystack.indexOf(token) > -1;
  }, true);
};

function Recipe({ ingredientMap, ingredients, instructions, name, numMatches, selected, verified }) {
  const [specificIngredients, setSpecificIngredients] = useState([]);

  useEffect(() => {
    // find the preferred ingredient names to display
    setSpecificIngredients(ingredients.map(({ amount, preferred, tag }) => {
      let name = tag;
      if (preferred && ingredientMap[tag]) {
        const preferredIngredient = ingredientMap[tag].find(ingredient => tokenMatch(preferred, ingredient.fullName.toLowerCase()));
        if (preferredIngredient) {
          name = preferredIngredient.name;
        }
      }
      return {
        label: `${amount} ${name}`,
        tag
      };
    }));
  }, [ingredients, ingredientMap]);

  return (
    <div className="Recipe">
      <header className="Recipe-header">
        <h3>{name}</h3>
        {verified && <VerifiedBadge />}
      </header>
      {numMatches && (
        <p className="Recipe-subtitle">
          {numMatches > 1 ? `${numMatches} matching ingredients` : '1 matching ingredient'}
        </p>
      )}
      <ul>
        {specificIngredients.map(ingredient => (
          <li
            className={
              selected.indexOf(ingredient.tag) > -1
              ? 'Recipe-ingredient Recipe-ingredient--selected'
              : 'Recipe-ingredient'
            }
            key={ingredient.label}
          >
            {ingredient.label}
          </li>
        ))}
      </ul>
      {!!instructions && (
        <p>{instructions}</p>
      )}
    </div>
  );
}

export default Recipe;
