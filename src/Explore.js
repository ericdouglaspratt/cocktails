import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import './Explore.css';

import {
  CORE_SPIRITS,
  CORE_SPIRIT_VARIATION_MAP,
  INVENTORY_VIEWS
} from './constants';
import {
  addTagsAndSort,
  createRecipesPair,
  decodeUrlTags,
  determineAvailableRecipesFromInventory,
  determineNumInclusiveMatches,
  determineUnavailableRecipesFromInventory,
  encodeTagsForUrl,
  generateRecipeTagMap,
  removeTagsFromArray,
  sortByName
} from './helpers';

import ActiveFilters from './ActiveFilters';
import CategoryPicker from './CategoryPicker';
import IngredientFilterButtonList from './IngredientFilterButtonList';
import InventoryViewControl from './InventoryViewControl';
import RecipeList from './RecipeList';
import Search from './Search';

const determineVisibleRecipes = (selected, currentRecipeList, currentRecipeTagMap) => {
  if (selected && selected.length > 0) {
    const inclusionTags = selected.filter(item => item.include).map(item => item.tag);
    const exclusionTags = selected.filter(item => !item.include).map(item => item.tag);

    // find the recipes with matching inclusive tags and dedupe
    const uniqueInclusiveRecipes = inclusionTags.length > 0 ? Object.values(selected.reduce((result, { include, tag }) => {
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

    return recipesByNumMatches;
  } else {
    return currentRecipeList;
  }
};

const Explore = ({
  alcoholicByFrequency,
  availableIngredients,
  availableRecipeData,
  initialRecipes,
  initialRecipeTagMap,
  inventory,
  nonalcoholicByFrequency,
  unavailableRecipeData
}) => {
  const { tags } = useParams();
  const history = useHistory();

  // inventory filtering
  const [inventoryCode, setInventoryCode] = useState('');
  const [inventoryTags, setInventoryTags] = useState(null);
  //const [availableRecipeData, setAvailableRecipeData] = useState(null);
  //const [unavailableRecipeData, setUnavailableRecipeData] = useState(null);

  // UI state
  const [selectedTags, setSelectedTags] = useState(tags ? decodeUrlTags(tags) : []);
  const [activeInventoryView, setActiveInventoryView] = useState(INVENTORY_VIEWS.ALL);

  // data that flows from the source list of recipes
  const [sourceRecipes, setSourceRecipes] = useState(initialRecipes);
  const [sourceRecipeTagMap, setSourceRecipeTagMap] = useState(initialRecipeTagMap);
  const [visibleRecipes, setVisibleRecipes] = useState(tags ? determineVisibleRecipes(decodeUrlTags(tags), initialRecipes.list, initialRecipeTagMap) : initialRecipes.list);

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // switch recipe source list when inventory filter is changed
  useEffect(() => {
    if (activeInventoryView === INVENTORY_VIEWS.AVAILABLE) {
      setSourceRecipes(availableRecipeData.recipes);
      setSourceRecipeTagMap(availableRecipeData.recipeTagMap);
      setVisibleRecipes(determineVisibleRecipes(selectedTags, availableRecipeData.recipes.list, availableRecipeData.recipeTagMap));
    } else if (activeInventoryView === INVENTORY_VIEWS.UNAVAILABLE) {
      setSourceRecipes(unavailableRecipeData.recipes);
      setSourceRecipeTagMap(unavailableRecipeData.recipeTagMap);
      setVisibleRecipes(determineVisibleRecipes(selectedTags, unavailableRecipeData.recipes.list, unavailableRecipeData.recipeTagMap));
    } else {
      setSourceRecipes(initialRecipes);
      setSourceRecipeTagMap(initialRecipeTagMap);
      setVisibleRecipes(determineVisibleRecipes(selectedTags, initialRecipes.list, initialRecipeTagMap));
    }
  }, [activeInventoryView]);

  useEffect(() => {
    if (tags) {
      const newTags = decodeUrlTags(tags);
      setSelectedTags(newTags);
      setVisibleRecipes(determineVisibleRecipes(newTags, sourceRecipes.list, sourceRecipeTagMap));
    } else {
      setSelectedTags([]);
      setVisibleRecipes(determineVisibleRecipes([], sourceRecipes.list, sourceRecipeTagMap));
    }
  }, [tags]);

  const handleInventoryClear = () => {
    setInventoryCode('');
    setInventoryTags(null);
    setSourceRecipes(initialRecipes);
    setSourceRecipeTagMap(initialRecipeTagMap);
    setVisibleRecipes(determineVisibleRecipes(selectedTags, initialRecipes.list, initialRecipeTagMap));
  }

  const handleInventoryLoadSuccess = (code, inventory) => {
    setInventoryCode(code);
    setInventoryTags(inventory);

    const availableRecipes = sortByName(determineAvailableRecipesFromInventory(initialRecipes.list, inventory));
    const availableRecipeData = {
      recipes: createRecipesPair(availableRecipes),
      recipeTagMap: generateRecipeTagMap(availableRecipes)
    };
    setSourceRecipes(availableRecipeData.recipes);
    setSourceRecipeTagMap(availableRecipeData.recipeTagMap);
    setVisibleRecipes(determineVisibleRecipes(selectedTags, availableRecipeData.recipes.list, availableRecipeData.recipeTagMap));
    
    /*setAvailableRecipeData({
      recipes: createRecipesPair(availableRecipes),
      recipeTagMap: generateRecipeTagMap(availableRecipes)
    });

    const unavailableRecipes = sortByName(determineUnavailableRecipesFromInventory(initialRecipes.list, inventory));
    setUnavailableRecipeData({
      recipes: createRecipesPair(unavailableRecipes),
      recipeTagMap: generateRecipeTagMap(unavailableRecipes)
    });*/
  };

  const handleGlobalKeyDown = e => {
    // clear filters when escape key is hit
    if (e.keyCode === 27) {
      history.push(`/explore`);
    }
  };

  const handleUpdateTags = (addTags, addTagsInclude = true, removeTags = []) => {
    const newUrlTags = encodeTagsForUrl(
      addTagsAndSort(
        addTags.map(tag => ({ include: addTagsInclude, tag })),
        removeTagsFromArray(removeTags, selectedTags)
      )
    );
    history.push(`/explore/${newUrlTags}`);
  };

  return (
    <div className="Explore">
      <div className="FilterPane">
        <Search
          availableIngredients={availableIngredients}
          onUpdateTags={handleUpdateTags}
          recipes={sourceRecipes.list}
          selectedTags={selectedTags}
        />
        <InventoryViewControl
          activeInventoryView={activeInventoryView}
          inventoryCode={inventoryCode}
          isInventoryLoaded={!!inventory}
          onChange={setActiveInventoryView}
          onInventoryClear={handleInventoryClear}
          onInventoryLoadSuccess={handleInventoryLoadSuccess}
        />
        <CategoryPicker
          onUpdateTags={handleUpdateTags}
          selected={selectedTags}
        />
        <IngredientFilterButtonList
          onUpdateTags={handleUpdateTags}
          selectedTags={selectedTags}
          tags={alcoholicByFrequency.filter(tag => !CORE_SPIRITS.includes(tag) && !Object.keys(CORE_SPIRIT_VARIATION_MAP).includes(tag))}
          title="Common Liqueurs"
        />
        <IngredientFilterButtonList
          onUpdateTags={handleUpdateTags}
          selectedTags={selectedTags}
          tags={nonalcoholicByFrequency}
          title="Common Mixers"
        />
      </div>
      <div className="ResultsPane">
        {selectedTags && selectedTags.length > 0 && (
          <ActiveFilters
            numResults={visibleRecipes.length}
            onUpdateTags={handleUpdateTags}
            selected={selectedTags}
            visibleRecipes={visibleRecipes}
          />
        )}
        <RecipeList
          activeInventoryView={activeInventoryView}
          inventory={inventory}
          recipes={visibleRecipes}
          selectedTags={selectedTags}
        />
      </div>
    </div>
  );
};

export default Explore;
