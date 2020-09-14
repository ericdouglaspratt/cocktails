import React, { Fragment, useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, ButtonGroup, TextField, } from '@material-ui/core';
import './App.css';

import ingredients from './data/ingredients';
import recipes from './data/recipes';

import CategoryPicker from './CategoryPicker';
import SelectedIngredients from './SelectedIngredients';
import Recipe from './OldRecipe';
import RecipeModal from './RecipeModal';

const DISPLAYS = {
  RECIPES: 'recipes',
  INGREDIENTS: 'ingredients'
};

// recipe view

// ingredient view

function App() {
  const [activeDisplay, setActiveDisplay] = useState(DISPLAYS.RECIPES);
  const [activeRecipe, setActiveRecipe] = useState(null);
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

  const handleCloseModal = () => {
    setActiveRecipe(null);
  };

  const handleDeselectTag = tag => {
    if (tag) {
      // deselect the tag and update the recipes accordingly
      const newSelectedTags = removeItemFromArray(tag, selectedTags);
      setSelectedTags(newSelectedTags);
      updateVisibleRecipes(newSelectedTags);

      // add it back to the dropdown
      setRemainingTags(addItemAndSort(tag, remainingTags));
    }
  };

  const handleSelectTag = tag => {
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
    return (index < 0) ? arr : arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
  };

  const sortRecipes = (a, b) => {
    if (a.verified && !b.verified) {
      return -1;
    } else if (!a.verified && b.verified) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  }

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

      // sort by number of ingredient matches
      recipesByNumMatches.sort((a, b) => {
        if (a.numMatches > b.numMatches) {
          return -1;
        } else if (a.numMatches < b.numMatches) {
          return 1;
        } else {
          return 0;
        }
      });

      // also want to sort by recommended/featured/verified/good ones, or include that in the algorithm mix

      // possibly also sort by amount, if possible
      // but maybe only if it's not base ones, cause we don't always want to put the strong ones first
      // so i can say i want a vermouth-forward recipe and just search vermouth and it gives me the ones first with the most vermouth in it

      setVisibleRecipes(recipesByNumMatches);
    } else {
      setVisibleRecipes(recipes);
    }
  };

  // ingredient builder (a la cocktailbuilder.com)
  // "from what i have, show me what i can make"
  // name ingredients, show recipes containing those ingredients

  // mood builder (a la Drink)
  // "from what i want, show me what there is"
  //  - this could narrow down and/or just sort, prioritizing certain ones first
  //  - filtering vs. tailoring an algorithm w/sliders
  //  - once there's a lot, show maybe the top 50 from the algorithm
  //  - maybe need a way of visualizing on the card what the highlight attributes of the cocktail are that match your selections
  // flavor profile: herbal, citrus, sweet (high simple or non-citrus juice), tart (high citrus, cassis), bitter (campari)
  //  - herbal can be dark (whisky/rye, amaro, benedictine) or light (gin, chartreuse)
  // color: red, green, yellow, brown (maybe images here vs. words)
  // mouthfeel: thick (egg white), crisp/clear?
  // complexity (number of ingredients): two ingredients, etc.
  // forward: spirit-forward, perfectly balanced, citrus-forward
  // strength: normal, light (cordial-like ones), strong (vodka martini, vesper, manhattan)
  //  - can be calculated specifically by abv from the ingredients

  // make more useful for andy
  // low complexity, more recipes with flavored vodkas and things
  // gin and tonic, vodka soda, moscow mule

  // you may also like (a la Drink ordering LIKE the Silver Lily but not that)
  // "show me ones like this one"
  // given moscow mule, what else is similar along the attributes it's strong in
  // use above mood builder algorithm

  // once above, would be fantastic to show a graph of all the connections and navigate that to browse / for inspiration
  // there could also be degrees of separation and you might show both first degree and second degree connections on cocktail page
  // "further out" could be similar ones that spike in another, different category vs. being as identical as possible
  // data science!

  return (
    <Fragment>
      <h1>Eric's Cocktail Recipes</h1>

      <div className="layout">
        <div className="interactive">
          <ButtonGroup size="large" aria-label="small outlined button group">
            <Button variant={activeDisplay === DISPLAYS.RECIPES ? 'contained' : null} color="secondary">Recipes</Button>
            <Button variant={activeDisplay === DISPLAYS.INGREDIENTS ? 'contained' : null}>Ingredients</Button>
          </ButtonGroup>

          <Autocomplete
            id="free-solo-demo"
            options={remainingTags}
            onChange={(e, tag) => handleSelectTag(tag)}
            renderInput={(params) => (
              <TextField {...params} label="Search ingredients" margin="normal" variant="outlined" />
            )}
            value=""
          />
          <Button
            disabled={!selectedTags || selectedTags.length < 1}
            onClick={handleClearAll}
            size="small"
            variant="outlined"
          >
            Clear All
          </Button>
          <CategoryPicker
            onDeselect={handleDeselectTag}
            onSelect={handleSelectTag}
            recipeTags={recipeTags}
            selected={selectedTags}
          />
        </div>
        <div className="display">
          {selectedTags && selectedTags.length > 0 && (
            <SelectedIngredients onRemove={handleDeselectTag} selected={selectedTags} />
          )}
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
      </div>

      {activeRecipe && (
        <RecipeModal onClose={handleCloseModal} recipe={activeRecipe} />
      )}
    </Fragment>
  );
}

export default App;
