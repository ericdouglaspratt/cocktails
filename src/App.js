import React, { useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import './App.css';

import {BREAKPOINTS, CORE_SPIRIT_VARIATION_MAP} from './constants';
import {
  addTagsAndSort,
  createRecipesPair,
  determineAlcoholicByFrequency,
  determineAvailableIngredients,
  determineAvailableIngredientsByFrequency,
  determineNonalcoholicByFrequency,
  determineNumInclusiveMatches,
  determineRecipeStrength,
  generateIngredientTagMap,
  generateRecipeTagMap,
  removeTagsFromArray,
  sortByName,
  useBreakpoint
} from './helpers';
import ingredients from './data/ingredients';
import RAW_RECIPES from './data/recipes';

import ActiveFilters from './ActiveFilters';
import CategoryPicker from './CategoryPicker';
import IngredientFilterButtonList from './IngredientFilterButtonList';
import IngredientSearch from './IngredientSearch';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import RecipeModal from './RecipeModal';

// initial data prep
const initialIngredientTagMap = generateIngredientTagMap(ingredients);
const recipesWithStrength = RAW_RECIPES.map(recipe => determineRecipeStrength(recipe, initialIngredientTagMap));
const recipes = createRecipesPair(recipesWithStrength);
const recipeTagMap = generateRecipeTagMap(recipes.list);
const availableIngredients = determineAvailableIngredients(recipes.list);
const availableIngredientsByFrequency = determineAvailableIngredientsByFrequency(recipeTagMap);
const alcoholicByFrequency = determineAlcoholicByFrequency(availableIngredientsByFrequency);
const nonalcoholicByFrequency = determineNonalcoholicByFrequency(availableIngredientsByFrequency);

// in modal under recipe, recommended
// --> more tart [recipe]
// --> more herbal [recipe]
// --> more citrus [recipe]
// citrus, sweet, herbal, bitter, tart, spicy

// out of stock / stock status
// keep a running tally of what i can make, use that to quickly find drinks for people when they come over
// php / mysql simple

// also use it for a random top featured recommendation?

// recipe history
// recommended ingredients for each, with tasting notes, which is better than another
// be able to store and actively write the drink journal on there

// a network graph of connected circles, visualizing how ingredients are commonly used together

// three tabs - Recipes, Ingredients, Insights
// insights can be content, it can be the above network graph of ingredients
// eventual graph of related recipes once i figure that out
// Ingredients tab not only lets you search, it lets you assemble a list of what's in stock that you can use to filter recipes, saves in localStorage?
// insights can power filters - e.g. a cluster graph of common abv can help me see categories for crafting a simple slider for filtering ingredients by strength

function App() {
  const [activeRecipeId, setActiveRecipeId] = useState(null);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState(sortByName(recipes.list));

  const breakpoint = useBreakpoint();

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleClickCloseRecipe = () => {
    setIsRecipeOpen(false);
    setTimeout(() => {
      setActiveRecipeId(null);
    }, 250);
  };

  const handleClickRecipe = id => {
    setActiveRecipeId(id);
    setIsRecipeOpen(true);
  };

  const handleDeselectTag = tag => {
    if (tag) {
      // deselect the tag and update the recipes accordingly
      setSelectedTags(prevState => {
        const newSelectedTags = removeTagsFromArray([tag], prevState);
        updateVisibleRecipes(newSelectedTags);
        return newSelectedTags;
      });
    }
  };

  const handleDeselectTags = tags => {
      // deselect the tags and update the recipes accordingly
      setSelectedTags(prevState => {
        const newSelectedTags = removeTagsFromArray(tags, prevState);
        updateVisibleRecipes(newSelectedTags);
        return newSelectedTags;
      });
  };

  const handleGlobalKeyDown = e => {
    // clear filters when escape key is hit
    if (e.keyCode === 27) {
      setSelectedTags(prevState => {
        if (prevState.length > 0) {
          updateVisibleRecipes([]);
          return [];
        } else {
          return prevState;
        }
      });
    }
  };

  const handleSelectTag = (tag, include = true) => {
    if (tag) {
      // select the tag and update the recipes accordingly
      setSelectedTags(prevState => {
        const newSelectedTags = addTagsAndSort([{
          include,
          tag
         }], prevState);
        updateVisibleRecipes(newSelectedTags);
        return newSelectedTags;
      });
    }
  };

  const handleSelectTags = (tags, include = true) => {
    // select the tags and update the recipes accordingly
    setSelectedTags(prevState => {
      const newSelectedTags = addTagsAndSort(tags.map(tag => ({include, tag})), prevState);
      updateVisibleRecipes(newSelectedTags);
      return newSelectedTags;
    });
  };

  const updateVisibleRecipes = selected => {
    if (selected && selected.length > 0) {
      const inclusionTags = selected.filter(item => item.include).map(item => item.tag);
      const exclusionTags = selected.filter(item => !item.include).map(item => item.tag);

      // find the recipes with matching inclusive tags and dedupe
      const uniqueInclusiveRecipes = inclusionTags.length > 0 ? Object.values(selected.reduce((result, {include, tag}) => {
        if (include && recipeTagMap[tag] && recipeTagMap[tag].forEach) {
          recipeTagMap[tag].forEach(recipe => {
            result[recipe.name] = recipe;
          });
        }
        return result;
      }, {})) : recipes.list;

      // remove the recipes that match the exclusion tags, if any
      const recipesAfterExclusion = exclusionTags.length > 0 ? uniqueInclusiveRecipes.filter(recipe => {
        return !recipe.ingredients.find(ingredient => {
          return exclusionTags.includes(ingredient.tag) || exclusionTags.includes(CORE_SPIRIT_VARIATION_MAP[ingredient.tag]);
        });
      }) : uniqueInclusiveRecipes;

      // compute the number of ingredient matches per matching recipe
      const recipesByNumMatches = recipesAfterExclusion.map(recipe => ({
        ...recipe,
        numMatches: determineNumInclusiveMatches(recipe, inclusionTags)
      }));

      // sort by number of ingredient matches
      recipesByNumMatches.sort((a, b) => {
        if (a.numMatches > b.numMatches) {
          return -1;
        } else if (a.numMatches < b.numMatches) {
          return 1;
        } else {
          return a.name.localeCompare(b.name);
        }
      });

      // also want to sort by recommended/featured/verified/good ones, or include that in the algorithm mix

      // possibly also sort by amount, if possible
      // but maybe only if it's not base ones, cause we don't always want to put the strong ones first
      // so i can say i want a vermouth-forward recipe and just search vermouth and it gives me the ones first with the most vermouth in it

      setVisibleRecipes(recipesByNumMatches);
    } else {
      setVisibleRecipes(sortByName(recipes.list));
    }
  };

  const activeRecipe = activeRecipeId ? recipes.lookup[activeRecipeId] : null;

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
            onDeselectMultiple={handleDeselectTags}
            onSelect={handleSelectTag}
            onSelectMultiple={handleSelectTags}
            selected={selectedTags}
          />
          <IngredientFilterButtonList
            onDeselect={handleDeselectTag}
            onSelect={handleSelectTag}
            selectedTags={selectedTags}
            tags={alcoholicByFrequency}
            title="Common Liqueurs"
          />
          <IngredientFilterButtonList
            onDeselect={handleDeselectTag}
            onSelect={handleSelectTag}
            selectedTags={selectedTags}
            tags={nonalcoholicByFrequency}
            title="Common Mixers"
          />
        </div>
        <div className="ResultsPane">
          {selectedTags && selectedTags.length > 0 && (
            <ActiveFilters
              numResults={visibleRecipes.length}
              onDeselect={handleDeselectTag}
              onSelect={handleSelectTag}
              selected={selectedTags}
              visibleRecipes={visibleRecipes}
            />
          )}
          <RecipeList
            onClickRecipe={handleClickRecipe}
            recipes={visibleRecipes}
            selectedTags={selectedTags}
          />
        </div>
      </div>
      {breakpoint === BREAKPOINTS.MOBILE && (
        <Drawer
          anchor="bottom"
          open={isRecipeOpen}
          onClose={handleClickCloseRecipe}
        >
          {activeRecipe && (
            <Recipe
              onClose={handleClickCloseRecipe}
              recipe={activeRecipe}
            />
          )}
        </Drawer>
      )}
      {breakpoint === BREAKPOINTS.DESKTOP && (
        <RecipeModal
          id={activeRecipeId}
          isOpen={isRecipeOpen}
          onClose={handleClickCloseRecipe}
          recipe={activeRecipe}
        />
      )}
    </>
  );
};

export default App;
