import React, { Fragment, useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, TextField } from '@material-ui/core';
import './App.css';

import ingredients from './data/ingredients';
import recipes from './data/recipes';

import SelectedIngredients from './SelectedIngredients';
import Recipe from './Recipe';

function App() {
  const [ingredientMap, setIngredientMap] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState([]);
  const [recipeMap, setRecipeMap] = useState({});
  const [recipeTags, setRecipeTags] = useState([]);
  const [remainingTags, setRemainingTags] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState(recipes);

  useEffect(() => {
    setIngredientMap(ingredients.reduce((map, ingredient) => {
      if (ingredient && ingredient.tags && ingredient.tags.forEach) {
        ingredient.tags.forEach(tag => {
          if (!map[tag]) {
            map[tag] = [];
          }
          map[tag].push(ingredient);
        });
      }
      return map;
    }, {}));

    setRecipeMap(recipes.reduce((map, recipe) => {
      if (recipe && recipe.ingredients && recipe.ingredients.forEach) {
        recipe.ingredients.forEach(ingredient => {
          if (!map[ingredient.tag]) {
            map[ingredient.tag] = [];
          }
          map[ingredient.tag].push(recipe);
        });
      }
      return map;
    }, {}));

    setIsLoading(false);

    const tags = Object.keys(recipes.reduce((result, recipe) => {
      if (recipe && recipe.ingredients && recipe.ingredients.forEach) {
        recipe.ingredients.forEach(ingredient => {
          result[ingredient.tag] = true;
        });
      }
      return result;
    }, {}));
    tags.sort();
    setRecipeTags(tags);
    setRemainingTags(tags);
  }, []);

  const addItemAndSort = (item, arr) => {
    const newArr = [
      ...arr,
      item
    ];
    newArr.sort();
    return newArr;
  };

  const handleClearAll = () => {
    setSelectedTags([]);
    updateVisibleRecipes([]);
    setRemainingTags(recipeTags);
  };

  const handleDeselectTag = (tag) => (e) => {
    if (tag) {
      // deselect the tag and update the recipes accordingly
      const newSelectedTags = removeItemFromArray(tag, selectedTags);
      setSelectedTags(newSelectedTags);
      updateVisibleRecipes(newSelectedTags);

      // add it back to the dropdown
      setRemainingTags(addItemAndSort(tag, remainingTags));
    }
  };

  const handleSelectTag = (e, tag) => {
    if (tag) {
      // select the tag and update the recipes accordingly
      const newSelectedTags = addItemAndSort(tag, selectedTags);
      setSelectedTags(newSelectedTags);
      updateVisibleRecipes(newSelectedTags);

      // remove it from the dropdown
      setRemainingTags(removeItemFromArray(tag, remainingTags));
    }
  };

  const removeItemFromArray = (item, arr) => {
    const index = arr.indexOf(item);
    return arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
  };

  const updateVisibleRecipes = (selected) => {
    if (selected && selected.length > 0) {
      // find the recipes with matching tags and dedupe
      const uniqueMatchingRecipes = Object.values(selected.reduce((result, selectedTag) => {
        if (recipeMap[selectedTag] && recipeMap[selectedTag].forEach) {
          recipeMap[selectedTag].forEach(recipe => {
            result[recipe.name] = recipe;
          });
        }
        return result;
      }, {}));

      // compute the number of ingredient matches per matching recipe
      const recipesByNumMatches = uniqueMatchingRecipes.map(recipe => ({
        ...recipe,
        numMatches: recipe.ingredients.reduce((sum, ingredient) => {
          return sum + (selected.find(selectedTag => selectedTag === ingredient.tag) ? 1 : 0);
        }, 0)
      }));
      recipesByNumMatches.sort((a, b) => {
        if (a.numMatches > b.numMatches) {
          return -1;
        } else if (a.numMatches < b.numMatches) {
          return 1;
        } else {
          return 0;
        }
      });

      setVisibleRecipes(recipesByNumMatches);
    } else {
      setVisibleRecipes(recipes);
    }
  };

  return (
    <Fragment>
      <h1>Eric's Cocktail Recipes</h1>

      <div className="layout">
        <div className="interactive">
          <Autocomplete
            id="free-solo-demo"
            options={remainingTags}
            onChange={handleSelectTag}
            renderInput={(params) => (
              <TextField {...params} label="Search ingredients" margin="normal" variant="outlined" />
            )}
            value=""
          />
          <Button
            color="primary"
            disabled={!selectedTags || selectedTags.length < 1}
            onClick={handleClearAll}
            size="small"
            variant="outlined"
          >
            Clear All
          </Button>
          {/* <Button variant="contained" color="primary">Hello World</Button> */}
          {selectedTags && selectedTags.length > 0 && (
            <SelectedIngredients onRemove={handleDeselectTag} selected={selectedTags} />
          )}
        </div>
        <div className="recipes">
          {!isLoading && (
            <Fragment>
              {visibleRecipes.map(recipe => (
                <Recipe
                  key={recipe.name}
                  ingredientMap={ingredientMap}
                  selected={selectedTags}
                  {...recipe}
                />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
