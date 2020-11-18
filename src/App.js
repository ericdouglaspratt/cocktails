import React, { useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import './App.css';

import {
  BREAKPOINTS,
  CORE_SPIRIT_VARIATION_MAP,
  INVENTORY_VIEWS
} from './constants';
import {
  addTagsAndSort,
  createRecipesPair,
  determineAlcoholicByFrequency,
  determineAvailableIngredients,
  determineAvailableIngredientsByFrequency,
  determineAvailableRecipesFromInventory,
  determineNonalcoholicByFrequency,
  determineNumInclusiveMatches,
  determineRecipeStrength,
  determineUnavailableRecipesFromInventory,
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
import InventoryViewControl from './InventoryViewControl';
import NavBar from './NavBar';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import RecipeModal from './RecipeModal';

// initial data prep
const initialIngredientTagMap = generateIngredientTagMap(ingredients);
const initialRecipes = sortByName(RAW_RECIPES.map(recipe => determineRecipeStrength(recipe, initialIngredientTagMap)));
const initialRecipesPair = createRecipesPair(initialRecipes);
const initialRecipeTagMap = generateRecipeTagMap(initialRecipesPair.list);

const availableIngredients = determineAvailableIngredients(initialRecipesPair.list);
const availableIngredientsByFrequency = determineAvailableIngredientsByFrequency(initialRecipeTagMap);
const alcoholicByFrequency = determineAlcoholicByFrequency(availableIngredientsByFrequency);
const nonalcoholicByFrequency = determineNonalcoholicByFrequency(availableIngredientsByFrequency);

// in modal under recipe, recommended
// --> more tart [recipe]
// --> more herbal [recipe]
// --> more citrus [recipe]
// citrus, sweet, herbal, bitter, tart, spicy

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

// randomizer - slightly herbal, maybe some 

function App() {
  // data from server
  const [inventory, setInventory] = useState(null);

  // UI state
  const [activeInventoryView, setActiveInventoryView] = useState(INVENTORY_VIEWS.ALL);
  const [activeRecipeId, setActiveRecipeId] = useState(null);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  // cached calculations based on inventory
  const [availableRecipeData, setAvailableRecipeData] = useState(null);
  const [unavailableRecipeData, setUnavailableRecipeData] = useState(null);

  // data that flows from the source list of recipes
  const [recipes, setRecipes] = useState(initialRecipesPair);
  const [recipeTagMap, setRecipeTagMap] = useState(initialRecipeTagMap);
  const [visibleRecipes, setVisibleRecipes] = useState(initialRecipesPair.list);

  const breakpoint = useBreakpoint();

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown);
    loadInventory();
  }, []);

  // determine and save in-stock/out-of-stock recipe data once the inventory is loaded
  useEffect(() => {
    if (inventory) {
      const availableRecipes = sortByName(determineAvailableRecipesFromInventory(initialRecipesPair.list, inventory));
      setAvailableRecipeData({
        recipes: createRecipesPair(availableRecipes),
        recipeTagMap: generateRecipeTagMap(availableRecipes)
      });

      const unavailableRecipes = sortByName(determineUnavailableRecipesFromInventory(initialRecipesPair.list, inventory));
      setUnavailableRecipeData({
        recipes: createRecipesPair(unavailableRecipes),
        recipeTagMap: generateRecipeTagMap(unavailableRecipes)
      });
    }
  }, [inventory]);

  // switch recipe source list when inventory filter is changed
  useEffect(() => {
    if (activeInventoryView === INVENTORY_VIEWS.AVAILABLE) {
      setRecipes(availableRecipeData.recipes);
      setRecipeTagMap(availableRecipeData.recipeTagMap);
      updateVisibleRecipes(selectedTags, availableRecipeData.recipes.list, availableRecipeData.recipeTagMap);
    } else if (activeInventoryView === INVENTORY_VIEWS.UNAVAILABLE) {
      setRecipes(unavailableRecipeData.recipes);
      setRecipeTagMap(unavailableRecipeData.recipeTagMap);
      updateVisibleRecipes(selectedTags, unavailableRecipeData.recipes.list, unavailableRecipeData.recipeTagMap);
    } else {
      setRecipes(initialRecipesPair);
      setRecipeTagMap(initialRecipeTagMap);
      updateVisibleRecipes(selectedTags, initialRecipesPair.list, initialRecipeTagMap);
    }
  }, [activeInventoryView]);

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
        updateVisibleRecipes(newSelectedTags, recipes.list, recipeTagMap);
        return newSelectedTags;
      });
    }
  };

  const handleDeselectTags = tags => {
      // deselect the tags and update the recipes accordingly
      setSelectedTags(prevState => {
        const newSelectedTags = removeTagsFromArray(tags, prevState);
        updateVisibleRecipes(newSelectedTags, recipes.list, recipeTagMap);
        return newSelectedTags;
      });
  };

  const handleGlobalKeyDown = e => {
    // clear filters when escape key is hit (if a recipe isn't open)
    if (e.keyCode === 27) {
      const recipeIsOpen = document.getElementsByClassName('RecipeModal').length > 0 || document.getElementsByClassName('Recipe').length > 0;
      if (!recipeIsOpen) {
        setSelectedTags(prevState => {
          if (prevState.length > 0) {
            updateVisibleRecipes([], recipes.list, recipeTagMap);
            return [];
          } else {
            return prevState;
          }
        });
      }
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
        updateVisibleRecipes(newSelectedTags, recipes.list, recipeTagMap);
        return newSelectedTags;
      });
    }
  };

  const handleSelectTags = (tags, include = true) => {
    // select the tags and update the recipes accordingly
    setSelectedTags(prevState => {
      const newSelectedTags = addTagsAndSort(tags.map(tag => ({include, tag})), prevState);
      updateVisibleRecipes(newSelectedTags, recipes.list, recipeTagMap);
      return newSelectedTags;
    });
  };

  const loadInventory = () => {
    fetch(`${window.location.origin}/cocktails/data/inventory`)
      .then(response => response.json())
      .then(data => {
        setInventory(data.data.reduce((result, item) => {
          result[item.tag] = item.inStock;
          return result;
        }, {}));
      })
      .catch(e => {
        console.log('error fetching inventory data', e);
      });
  }

  const updateVisibleRecipes = (selected, currentRecipeList, currentRecipeTagMap) => {
    if (selected && selected.length > 0) {
      const inclusionTags = selected.filter(item => item.include).map(item => item.tag);
      const exclusionTags = selected.filter(item => !item.include).map(item => item.tag);

      // find the recipes with matching inclusive tags and dedupe
      const uniqueInclusiveRecipes = inclusionTags.length > 0 ? Object.values(selected.reduce((result, {include, tag}) => {
        if (include && currentRecipeTagMap[tag] && currentRecipeTagMap[tag].forEach) {
          currentRecipeTagMap[tag].forEach(recipe => {
            result[recipe.name] = recipe;
          });
        }
        return result;
      }, {})) : currentRecipeList;

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
      setVisibleRecipes(currentRecipeList);
    }
  };

  const activeRecipe = activeRecipeId ? recipes.lookup[activeRecipeId] : null;

  return (
    <>
      <NavBar
        availableIngredients={availableIngredients}
        onSelectIngredient={handleSelectTag}
        onSelectRecipe={handleClickRecipe}
        recipes={recipes.list}
        selectedTags={selectedTags}
      />
      <div className="BrowseLayout">
        <div className="FilterPane">
          <InventoryViewControl
            activeInventoryView={activeInventoryView}
            isInventoryLoaded={!!inventory}
            onChange={setActiveInventoryView}
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
            activeInventoryView={activeInventoryView}
            inventory={inventory}
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
