import React, {Fragment, useState, useEffect} from 'react';
import './RecipeList.css';

import { CORE_SPIRIT_VARIATION_MAP } from './constants';
import { determineCurrentSeason } from './helpers';

import Strength from './Strength';

const RecipeList = ({ onClickRecipe, recipes, selectedTags }) => {
  const [groups, setGroups] = useState([{recipes}]);

  useEffect(() => {
    const currentSeason = determineCurrentSeason();

    if (recipes && recipes.length > 0 && recipes[0].numMatches) {
      // if we're displaying recipes that match a filter
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
    } else if (selectedTags.length === 0 && currentSeason && recipes.find(recipe => recipe.season === currentSeason)) {
      // if at least one recipe matches the current season
      const recipesBySeason = recipes.reduce((result, recipe) => {
        result[recipe.season === currentSeason ? currentSeason : 'other'].push(recipe);
        return result;
      }, {
        [currentSeason]: [],
        other: []
      });
      setGroups([
        {
          season: currentSeason,
          recipes: recipesBySeason[currentSeason]
        },
        {
          season: 'other',
          recipes: recipesBySeason['other']
        }
      ])
    } else {
      setGroups([{recipes}]);
    }
  }, [recipes]);

  return (
    <>
      {groups.map(group => (
        <Fragment key={`${group.recipes.length}${group.numMatches}`}>
          {groups.length > 1 && !!group.numMatches && (
            <h3 className="RecipeList-numMatches">
              {`${group.numMatches} matching ${group.numMatches === 1 ? 'ingredient' : 'ingredients'}`}
            </h3>
          )}
          {groups.length > 1 && !!group.season && (
            <h3 className="RecipeList-numMatches">
              {group.season === determineCurrentSeason() ? 'Featured for the Season' : 'Additional Libations'}
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
                        const className = `RecipeList-ingredient${isSelected ? ' RecipeList-ingredient--selected' : ''}`;
                        return (
                          <Fragment key={name}>
                            <span className={className}>{name}</span>
                            {index < dedeupedIngredients.length - 1 && ', '}
                          </Fragment>
                        );
                      })}
                    </p>
                  </div>
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
