import React, { Fragment, useState, useEffect } from 'react';
import './RecipeList.css';

import {
  CORE_SPIRIT_VARIATION_MAP,
  INVENTORY_VIEWS,
  RECIPE_GROUP_TYPES
} from './constants';
import { determineCurrentSeason } from './helpers';

import Strength from './Strength';

const RecipeList = ({ activeInventoryView, inventory, onClickRecipe, recipes, selectedTags }) => {
  const [groups, setGroups] = useState([{ recipes }]);

  useEffect(() => {
    if (selectedTags.length > 0) {
      // filter results
      const groupMap = recipes.reduce((result, recipe) => {
        if (!result[recipe.numMatches]) {
          result[recipe.numMatches] = [];
        }
        result[recipe.numMatches].push(recipe);
        return result;
      }, {});
      setGroups(Object.keys(groupMap).map(numMatches => ({
        numMatches: parseInt(numMatches),
        recipes: groupMap[numMatches]
      })).sort((a, b) => {
        return a.numMatches > b.numMatches ? -1 : a.numMatches < b.numMatches ? 1 : 0;
      }));
    } else {
      // no active filters
      const groups = [];
      const currentSeason = determineCurrentSeason();
      const haveSeasonalRecipes = currentSeason && recipes.find(recipe => recipe.season === currentSeason);
      if (haveSeasonalRecipes) {
        groups.push({
          recipes: recipes.filter(recipe => recipe.season === currentSeason && !recipe.inHoldingPen),
          type: RECIPE_GROUP_TYPES.SEASONAL
        });
      }

      groups.push({
        recipes: recipes.filter(recipe => !recipe.inHoldingPen && (!haveSeasonalRecipes || recipe.season !== currentSeason)),
        type: RECIPE_GROUP_TYPES.MAIN
      });

      const haveHoldingPenRecipes = recipes.find(recipe => recipe.inHoldingPen);
      if (haveHoldingPenRecipes) {
        groups.push({
          recipes: recipes.filter(recipe => recipe.inHoldingPen),
          type: RECIPE_GROUP_TYPES.HOLDING_PEN
        });
      }

      setGroups(groups);
    }
  }, [recipes]);

  return (
    <>
      {groups.map(group => (
        <Fragment key={`${group.recipes.length}${group.numMatches}${group.type}`}>
          {groups.length > 1 && !!group.numMatches && (
            <h3 className="RecipeList-numMatches">
              {`${group.numMatches} matching ${group.numMatches === 1 ? 'ingredient' : 'ingredients'}`}
            </h3>
          )}
          {groups.length > 1 && !!group.type && (
            <h3 className="RecipeList-numMatches">
              {group.type === RECIPE_GROUP_TYPES.SEASONAL
                ? 'Featured for the Season'
                : group.type === RECIPE_GROUP_TYPES.HOLDING_PEN
                  ? 'Pending Evaluation / Refinement'
                  : 'Additional Libations'}
            </h3>
          )}
          <div className="RecipeList">
            {group.recipes.map(recipe => {
              const dedeupedIngredients = Object.keys(recipe.ingredients.map(info => info.tag).reduce((result, tag) => {
                result[tag] = true;
                return result;
              }, {}));

              return (
                <button
                  className="RecipeList-recipe"
                  key={recipe.name}
                  onClick={() => onClickRecipe(recipe.id)}
                >
                  <div className="RecipeList-image" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipe.image || 'images/default.jpg'}`})` }}>
                    {!!recipe.strength && (
                      <Strength strength={recipe.strength} totalVolume={recipe.totalVolume} />
                    )}
                  </div>
                  <div className="RecipeList-description">
                    <h6 className="RecipeList-header">
                      {recipe.name}
                    </h6>
                    <p className="RecipeList-ingredients">
                      {dedeupedIngredients.map((name, index) => {
                        const isSelected = selectedTags.find(item => item.tag === name) || selectedTags.find(item => item.tag === CORE_SPIRIT_VARIATION_MAP[name]);
                        const isUnavailable = activeInventoryView === INVENTORY_VIEWS.UNAVAILABLE && !inventory[name];
                        const className = `RecipeList-ingredient${isSelected ? ' RecipeList-ingredient--selected' : ''}${isUnavailable ? ' RecipeList-ingredient--unavailable' : ''}`;
                        return (
                          <Fragment key={name}>
                            <span className={className}>{name}</span>
                            {index < dedeupedIngredients.length - 1 && ', '}
                          </Fragment>
                        );
                      })}
                    </p>
                  </div>
                  {recipe.inHoldingPen && (
                    <span className="RecipeList-banner RecipeList-banner--holdingPen">
                      <span className="RecipeList-bannerInner">
                        Work In Progress
                      </span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Fragment>
      ))}

    </>
  );
};

export default RecipeList;
