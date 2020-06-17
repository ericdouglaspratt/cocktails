import React, { useEffect, useState } from 'react';
import './App.css';

import {
  addItemAndSort,
  createRecipesPair,
  determineAvailableIngredients,
  determineNumMatches,
  determineRecipeStrength,
  generateIngredientTagMap,
  generateRecipeTagMap,
  removeItemFromArray,
  useStateRef
} from './helpers';
import ingredients from './data/ingredients';
import RAW_RECIPES from './data/recipes';

import ActiveFilters from './ActiveFilters';
import CategoryPicker from './CategoryPicker';
import IngredientSearch from './IngredientSearch';
import RecipeList from './RecipeList';
import RecipeModal from './RecipeModal';
import StrengthSlider from './StrengthSlider';

// initial data prep
const initialIngredientTagMap = generateIngredientTagMap(ingredients);
const recipesWithStrength = RAW_RECIPES.map(recipe => determineRecipeStrength(recipe, initialIngredientTagMap));
const recipes = createRecipesPair(recipesWithStrength);
const recipeTagMap = generateRecipeTagMap(recipes.list);
const availableIngredients = determineAvailableIngredients(recipes.list);

// in modal under recipe, recommended
// --> more tart [recipe]
// --> more herbal [recipe]
// --> more citrus [recipe]

function App() {
  const [activeRecipeId, setActiveRecipeId] = useState(null);
  const [selectedTagsRef, setSelectedTags] = useStateRef([]);
  const [visibleRecipes, setVisibleRecipes] = useState(recipes.list.sort((a, b) => a.name.localeCompare(b.name)));

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleClickCloseRecipe = () => setActiveRecipeId(null);
  const handleClickRecipe = id => setActiveRecipeId(id);

  const handleDeselectTag = tag => {
    if (tag) {
      // deselect the tag and update the recipes accordingly
      const newSelectedTags = removeItemFromArray(tag, selectedTagsRef.current);
      setSelectedTags(newSelectedTags);
      updateVisibleRecipes(newSelectedTags);
    }
  };

  const handleGlobalKeyDown = e => {
    // clear filters when escape key is hit
    if (e.keyCode === 27 && selectedTagsRef.current.length > 0) {
      setSelectedTags([]);
      updateVisibleRecipes([]);
    }
  };

  const handleSelectTag = tag => {
    if (tag) {
      // select the tag and update the recipes accordingly
      const newSelectedTags = addItemAndSort(tag, selectedTagsRef.current);
      setSelectedTags(newSelectedTags);
      updateVisibleRecipes(newSelectedTags);
    }
  };

  const updateVisibleRecipes = selected => {
    if (selected && selected.length > 0) {
      // find the recipes with matching tags and dedupe
      const uniqueMatchingRecipes = Object.values(selected.reduce((result, selectedTag) => {
        if (recipeTagMap[selectedTag] && recipeTagMap[selectedTag].forEach) {
          recipeTagMap[selectedTag].forEach(recipe => {
            result[recipe.name] = recipe;
          });
        }
        return result;
      }, {}));

      // compute the number of ingredient matches per matching recipe
      const recipesByNumMatches = uniqueMatchingRecipes.map(recipe => ({
        ...recipe,
        numMatches: determineNumMatches(recipe, selected)
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
      setVisibleRecipes(recipes.list.slice().sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  return (
    <>
      <div className="BrowseLayout">
        <div className="FilterPane">
          <IngredientSearch
            availableIngredients={availableIngredients}
            onSelectIngredient={handleSelectTag}
          />
          <CategoryPicker
            onDeselect={handleDeselectTag}
            onSelect={handleSelectTag}
            selected={selectedTagsRef.current}
          />
          {/*<StrengthSlider />*/}
        </div>
        <div className="ResultsPane">
          {selectedTagsRef.current && selectedTagsRef.current.length > 0 && (
            <ActiveFilters
              numResults={visibleRecipes.length}
              onDeselect={handleDeselectTag}
              selectedTags={selectedTagsRef.current}
            />
          )}
          <RecipeList
            onClickRecipe={handleClickRecipe}
            recipes={visibleRecipes}
            selectedTags={selectedTagsRef.current}
          />
        </div>
      </div>
      <RecipeModal
        id={activeRecipeId}
        onClose={handleClickCloseRecipe}
        recipe={!!activeRecipeId && recipes.lookup[activeRecipeId]}
      />
    </>
  );
};

export default App;
