import React, { useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
  determineRecommendations,
  determineUnavailableRecipesFromInventory,
  generateIngredientTagMap,
  generatePreferredIngredientTagMap,
  generateRecipeTagMap,
  removeTagsFromArray,
  sortByName,
  useBreakpoint
} from './helpers';
import ingredients from './data/ingredients';
import RAW_RECIPES from './data/recipes';

import Explore from './Explore';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Recipe from './Recipe';

// initial data prep
const initialIngredientTagMap = generateIngredientTagMap(ingredients);
const initialRecipes = sortByName(RAW_RECIPES.map(recipe => determineRecipeStrength(recipe, initialIngredientTagMap)));
const initialRecipesPair = createRecipesPair(initialRecipes);
const initialRecipeTagMap = generateRecipeTagMap(initialRecipesPair.list);

const preferredIngredientTagMap = generatePreferredIngredientTagMap(initialRecipes, ingredients, initialIngredientTagMap);

const availableIngredients = determineAvailableIngredients(initialRecipesPair.list);
const availableIngredientsByFrequency = determineAvailableIngredientsByFrequency(initialRecipeTagMap);
const alcoholicByFrequency = determineAlcoholicByFrequency(availableIngredientsByFrequency);
const nonalcoholicByFrequency = determineNonalcoholicByFrequency(availableIngredientsByFrequency);

const recommendations = determineRecommendations(initialRecipesPair.list);
console.log('recommendations', recommendations);

// output of recommendation list
/*initialRecipesPair.list.forEach(recipe => {
  const connections = recommendations.filter(recommendation => recommendation.begin === recipe);
  if (connections.length > 0) {
    console.log(recipe.name);
    connections.forEach(connection => {
      console.log(`  ${connection.description} and it becomes ${(connection.begin === recipe ? connection.end : connection.begin).name}`)
    });
  }
});*/

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

// filters - sort by completeness of match vs. number of matching ingredients

function App() {
  // data from server
  const [inventory, setInventory] = useState(null);

  // UI state
  const [activeRecipeId, setActiveRecipeId] = useState(null);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);

  // cached calculations based on inventory
  const [availableRecipeData, setAvailableRecipeData] = useState(null);
  const [unavailableRecipeData, setUnavailableRecipeData] = useState(null);

  const breakpoint = useBreakpoint();

  useEffect(() => {
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

  const loadInventory = () => {
    fetch(`${window.location.origin}/cocktails/data/inventory.php`)
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

  //const activeRecipe = activeRecipeId ? recipes.lookup[activeRecipeId] : null;

  return (
    <Router basename="/cocktails">
      <div className="App-container">
        {/*<NavBar
          availableIngredients={availableIngredients}
          onSelectIngredient={handleSelectTag}
          onSelectRecipe={handleClickRecipe}
          recipes={recipes.list}
          selectedTags={selectedTags}
        />*/}
        <NavBar
          recipes={initialRecipesPair.list}
        />
        <div className="App">
          <Switch>
            <Route path={["/explore/:tags", "/explore"]}>
              <Explore
                alcoholicByFrequency={alcoholicByFrequency}
                availableIngredients={availableIngredients}
                availableRecipeData={availableRecipeData}
                initialRecipes={initialRecipesPair}
                initialRecipeTagMap={initialRecipeTagMap}
                inventory={inventory}
                nonalcoholicByFrequency={nonalcoholicByFrequency}
                unavailableRecipeData={unavailableRecipeData}
              />
              {/*breakpoint === BREAKPOINTS.MOBILE && (
                <Drawer
                  anchor="bottom"
                  open={isRecipeOpen}
                  onClose={handleClickCloseRecipe}
                >
                  {activeRecipe && (
                    <RecipeDrawer
                      onClose={handleClickCloseRecipe}
                      preferredIngredientTagMap={preferredIngredientTagMap}
                      recipe={activeRecipe}
                    />
                  )}
                </Drawer>
                  )*/}
              {/*breakpoint === BREAKPOINTS.DESKTOP && (
                <RecipeModal
                  id={activeRecipeId}
                  isOpen={isRecipeOpen}
                  preferredIngredientTagMap={preferredIngredientTagMap}
                  onClose={handleClickCloseRecipe}
                  recipe={activeRecipe}
                />
              )*/}
            </Route>
            <Route path="/recipes/:recipeId">
              <Recipe
                preferredIngredientTagMap={preferredIngredientTagMap}
                recipes={initialRecipesPair}
                recommendations={recommendations}
              />
            </Route>
            <Route path="/">
              <Home
                recipes={initialRecipesPair}
                recipeTagMap={initialRecipeTagMap}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
