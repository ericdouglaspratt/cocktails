import { useEffect, useState } from 'react';

import {
  BREAKPOINTS,
  CORE_SPIRITS,
  CORE_SPIRIT_VARIATION_MAP,
  NONALCOHOLIC_INGREDIENTS,
  SEASONS,
  UNIT_CONVERSION_TO_OZ,
  UNIT_DISPLAY
} from './constants';

export const addTagsAndSort = (tags, arr) => {
  const newArr = [
    ...arr,
    ...tags
  ];
  newArr.sort((a, b) => a.tag.localeCompare(b.tag));
  return newArr;
};

export const createRecipesPair = rawRecipes => {
  const recipesWithIds = rawRecipes.map(recipe => ({
    ...recipe,
    id: createUrlSlug(recipe.name)
  }));
  return {
    list: recipesWithIds,
    lookup: recipesWithIds.reduce((result, recipe) => {
      result[recipe.id] = recipe;
      return result;
    }, {})
  };
};

export const createUrlSlug = name => name.toLowerCase().replace(/&/g, 'and').replace(/[\s]/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/\'/g, '');

export const decodeUrlTags = tags => addTagsAndSort(
  tags.split('+').map(rawTag => ({
    include: rawTag.substr(0, 1) !== '!',
    tag: decodeURIComponent(rawTag).replace(/_/g, ' ').replace(/!/g, '')
  })),
  []
);

export const determineAlcoholicByFrequency = availableIngredientsByFrequency => {
  return availableIngredientsByFrequency
    .filter(ingredient => !NONALCOHOLIC_INGREDIENTS[ingredient.tag])
    .map(ingredient => ingredient.tag);
};

export const determineAvailableIngredients = recipes => {
  const uniqueIngredients = recipes.reduce((result, recipe) => {
    if (recipe && recipe.ingredients && recipe.ingredients.forEach) {
      recipe.ingredients.forEach(ingredient => {
        result[ingredient.tag] = true;
      });
    }
    return result;
  }, {});
  CORE_SPIRITS.forEach(ingredient => {
    uniqueIngredients[ingredient] = true;
  });
  return Object.keys(uniqueIngredients).sort();
};

export const determineAvailableIngredientsByFrequency = recipeTagMap =>
  Object.keys(recipeTagMap).map(tag => {
    return {
      numRecipes: Object.keys(recipeTagMap[tag].reduce((result, recipe) => {
        result[recipe.name] = true;
        return result;
      }, {})).length,
      tag
    };
  }).sort((a, b) => {
    if (a.numRecipes > b.numRecipes) {
      return -1;
    } else if (a.numRecipes < b.numRecipes) {
      return 1;
    } else {
      return a.tag.localeCompare(b.tag);
    }
  });

export const determineCurrentSeason = () => {
  return null; // return SEASONS.MANHATTAN;
};

export const determineNonalcoholicByFrequency = availableIngredientsByFrequency => {
  return availableIngredientsByFrequency
    .filter(ingredient => NONALCOHOLIC_INGREDIENTS[ingredient.tag])
    .map(ingredient => ingredient.tag);
};

export const determineNumInclusiveMatches = (recipe, inclusiveTags) => {
  return recipe.ingredients.reduce((sum, ingredient) => {
    return sum + (inclusiveTags.find(tag =>
      tag === ingredient.tag ||
      tag === CORE_SPIRIT_VARIATION_MAP[ingredient.tag] ||
      ingredient.tag.split(' ').includes(tag)
    ) ? 1 : 0);
  }, 0);
};

export const determineAvailableRecipesFromInventory = (recipes, inventory) => {
  return recipes.filter(recipe => {
    return recipe.ingredients.every(ingredient => inventory[ingredient.tag]);
  });
};

export const determineUnavailableRecipesFromInventory = (recipes, inventory) => {
  return recipes.filter(recipe => {
    return recipe.ingredients.some(ingredient => !inventory[ingredient.tag]);
  });
};

export const determineRecipeConnection = (sourceRecipe, compareRecipe) => {
  if (sourceRecipe.isCoreDrink && compareRecipe.isCoreDrink) {
    return;
  }

  const sourceIngredients = sourceRecipe.ingredients.map(ingredient => ingredient.tag);
  const compareIngredients = compareRecipe.ingredients.map(ingredient => ingredient.tag);

  const subtract = sourceIngredients.filter(x => !compareIngredients.includes(x));
  const add = compareIngredients.filter(x => !sourceIngredients.includes(x));

  if (subtract.length + add.length < 3) {
    return {
      add,
      subtract
    };
  }

  /*const diff = a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)));

  if (diff.length > 0) {
    if ((diff.length < 3) && (Math.abs(a.length - b.length) === diff.length)) {
      // one or two additions
      return {
        begin: (a.length < b.length) ? sourceRecipe : compareRecipe,
        end: (a.length < b.length) ? compareRecipe : sourceRecipe,
        type: 'addition',
        description: `add ${diff[0]}${diff.length === 2 ? ` and ${diff[1]}` : ''}`,
        amount: diff.length
      };
    } else if (
        (diff.length === 2) && 
        (a.length === b.length) && 
        (
          (NONALCOHOLIC_INGREDIENTS[diff[0]] && NONALCOHOLIC_INGREDIENTS[diff[1]]) || 
          (!NONALCOHOLIC_INGREDIENTS[diff[0]] && !NONALCOHOLIC_INGREDIENTS[diff[1]])
        )
    ) {
      // one substitution
      return {
        begin: (compareRecipe.isCoreDrink ? compareRecipe : sourceRecipe),
        end: (compareRecipe.isCoreDrink ? sourceRecipe : compareRecipe),
        type: 'substitution',
        description: `substitute ${compareRecipe.isCoreDrink ? diff[0] : diff[1]} for ${compareRecipe.isCoreDrink ? diff[1] : diff[0]}`,
        amount: 1
      };
    } else if ((diff.length === 3) && (Math.abs(a.length - b.length) === 2)) {
      console.log(diff, a, b);
    }
  }*/
};

export const determineRecipeStrength = (recipe, ingredientTagMap) => {
  let strength = 0;
  let strengthAudit = [];
  let totalVolume = 0;

  const ingredientInfo = recipe.ingredients
    .filter(ingredient => !ingredient.notPresentInFinalProduct)
    .map(ingredient => {
      const possibleIngredients = ingredientTagMap[ingredient.tag];
      if (possibleIngredients) {
        return {
          ...ingredient,
          abv: possibleIngredients.map(ingredient => ingredient.abv).reduce((sum, abv) => sum + abv, 0) / possibleIngredients.length
        };
      } else if (NONALCOHOLIC_INGREDIENTS[ingredient.tag]) {
        return {
          ...ingredient,
          abv: 0
        };
      } else {
        console.warn('no match found for ', ingredient.tag);
        return null;
      }
    });

  if (!ingredientInfo.includes(null)) {
    const unconvertableUnits = ingredientInfo.filter(ingredient => ingredient.unit && !UNIT_CONVERSION_TO_OZ[ingredient.unit] && UNIT_CONVERSION_TO_OZ[ingredient.unit] !== 0);
    if (unconvertableUnits.length === 0) {

      totalVolume = ingredientInfo.reduce((sum, ingredient) => sum + (ingredient.amount * UNIT_CONVERSION_TO_OZ[ingredient.unit]), 0);
      strength = ingredientInfo.reduce((sum, ingredient) => {
        const amountInOz = ingredient.amount * UNIT_CONVERSION_TO_OZ[ingredient.unit];
        const percentOfTotalVolume = amountInOz / totalVolume;
        strengthAudit.push({
          ...ingredient,
          amountInOz,
          percentOfTotalVolume
        });
        return sum + (ingredient.abv * percentOfTotalVolume);
      }, 0);
    } else {
      unconvertableUnits.forEach(ingredient => {
        console.warn(`cannot convert '${ingredient.unit}' to ounces`);
      });
    }
  }

  if (recipe.serves) {
    strength = strength / recipe.serves;
    totalVolume = totalVolume / recipe.serves;
  }

  return {
    ...recipe,
    strength,
    strengthAudit,
    totalVolume
  };
};

export const determineRecipeTastes = (recipe, ingredients) => {
  // NONALCOHOLIC_INGREDIENTS
};

export const determineRecommendations = recipes => {
  const result = {};

  // loop through the recipes
  recipes.forEach((sourceRecipe, index) => {

    // compare the current recipe to all recipes after it in the list
    recipes.slice(index + 1).forEach(compareRecipe => {
      const connection = determineRecipeConnection(sourceRecipe, compareRecipe);

      // if a connection is found, record it both ways
      if (connection) {
        result[sourceRecipe.id] = result[sourceRecipe.id] || [];
        result[sourceRecipe.id].push({
          id: compareRecipe.id,
          add: connection.add,
          subtract: connection.subtract
        });

        result[compareRecipe.id] = result[compareRecipe.id] || [];
        result[compareRecipe.id].push({
          id: sourceRecipe.id,
          add: connection.subtract,
          subtract: connection.add
        });
      }
    });
  });

  return result;
};

export const determineUnitDisplay = (unit, amount) => {
  const unitDisplay = UNIT_DISPLAY.find(possibleUnit => possibleUnit.SINGULAR === unit);
  if (unitDisplay) {
    return amount === 1 ? unitDisplay.SINGULAR : unitDisplay.PLURAL;
  } else {
    return unit;
  }
};

export const encodeTagsForUrl = tags => tags.reduce((arr, tag) => {
  arr.push((tag.include ? '' : '!') + encodeURIComponent(tag.tag.replace(/\s/g, '_')));
  return arr;
}, []).join('+');

export const generateIngredientTagMap = ingredients => ingredients.reduce((result, ingredient) => {
  ingredient.tags.forEach(tag => {
    result[tag] = result[tag] || [];
    result[tag].push(ingredient);
  });
  return result;
}, {});

export const generatePreferredIngredientTagMap = (recipes, ingredients, ingredientTagMap) => {
  const preferredIngredientTagMap = {};

  // find and dedupe all preferred ingredients to locate
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      if (ingredient.preferred) {
        preferredIngredientTagMap[ingredient.tag] = preferredIngredientTagMap[ingredient.tag] || {};
        preferredIngredientTagMap[ingredient.tag][ingredient.preferred] = preferredIngredientTagMap[ingredient.tag][ingredient.preferred] || '';
      }
    });
  });

  // search the ingredients matching each tag for the preferred brand names
  Object.keys(preferredIngredientTagMap).forEach(tag => {
    Object.keys(preferredIngredientTagMap[tag]).forEach(searchTerm => {
      const searchSpace = ingredientTagMap[tag];
      const searchResult = searchSpace && searchSpace.find(ingredient => ingredient.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchTerm));
      if (searchResult) {
        preferredIngredientTagMap[tag][searchTerm] = searchResult.name;
      }
    });
  });

  return preferredIngredientTagMap;
};

export const generateRecipeTagMap = recipes =>
  recipes.reduce((result, recipe) => {
    recipe.ingredients.forEach(ingredient => {
      result[ingredient.tag] = result[ingredient.tag] || [];

      if (!result[ingredient.tag].includes(recipe)) {
        result[ingredient.tag].push(recipe);
      }

      if (CORE_SPIRIT_VARIATION_MAP[ingredient.tag]) {
        result[CORE_SPIRIT_VARIATION_MAP[ingredient.tag]] = result[CORE_SPIRIT_VARIATION_MAP[ingredient.tag]] || [];
        if (!result[CORE_SPIRIT_VARIATION_MAP[ingredient.tag]].includes(recipe)) {
          result[CORE_SPIRIT_VARIATION_MAP[ingredient.tag]].push(recipe);
        }
      }

      const coreSpiritTag = CORE_SPIRITS.find(tag => ingredient.tag.split(' ').includes(tag));
      if (coreSpiritTag && coreSpiritTag !== ingredient.tag) {
        result[coreSpiritTag] = result[coreSpiritTag] || [];
        if (!result[coreSpiritTag].includes(recipe)) {
          result[coreSpiritTag].push(recipe);
        }
      }
    });
    return result;
  }, {});

export const removeTagsFromArray = (tags, arr) => {
  return tags.reduce((result, tag) => {
    const index = result.findIndex(item => item.tag === tag);
    return (index < 0) ? result : result.slice(0, index).concat(result.slice(index + 1, result.length));
  }, arr);
};

export const sortByName = recipes => recipes.slice().sort((a, b) => a.name.localeCompare(b.name));

export const useBreakpoint = () => useMedia(
  ['(max-width: 479px)', '(max-width: 1024px)', '(min-width: 768px)'],
  [BREAKPOINTS.MOBILE, BREAKPOINTS.TABLET, BREAKPOINTS.DESKTOP],
  BREAKPOINTS.MOBILE
);

export const useMedia = (queries, values, defaultValue) => {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  // State and setter for matched value
  const [value, setValue] = useState(getValue);

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach(mql => mql.addListener(handler));
      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
};
