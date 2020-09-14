import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import './SuggestedFilters.css';

import { CORE_SPIRIT_VARIATION_MAP } from './constants';

const SuggestedFilters = ({ onSelect, selected, visibleRecipes }) => {
  const [availableSuggestions, setAvailableSuggestions] = useState([]);

  useEffect(() => {
    const coreSpiritsIncluded = {};
    const tagIncidence = visibleRecipes.reduce((result, recipe) => {
      recipe.ingredients.forEach(ingredient => {
        result[ingredient.tag] = result[ingredient.tag] ? result[ingredient.tag] + 1 : 1;

        // if this ingredient is a variation on a core spirit,
        // keep track of it so we can be sure not to suggest it if it's already selected
        const matchingCoreSpirit = CORE_SPIRIT_VARIATION_MAP[ingredient.tag];
        if (matchingCoreSpirit) {
          if (!coreSpiritsIncluded[matchingCoreSpirit]) {
            coreSpiritsIncluded[matchingCoreSpirit] = [];
          }
          coreSpiritsIncluded[matchingCoreSpirit].push(ingredient.tag);
        }
      });
      return result;
    }, {});

    selected.forEach(({ tag }) => {
      if (tagIncidence[tag]) {
        delete tagIncidence[tag];
      }
      if (coreSpiritsIncluded[tag]) {
        coreSpiritsIncluded[tag].forEach(ingredientTag => {
          delete tagIncidence[ingredientTag];
        });
      }
    });

    const suggestionsByOccurrence = Object.entries(tagIncidence).map(([tag, occurrences]) => ({ occurrences, tag })).sort((a, b) => {
      if (a.occurrences > b.occurrences) {
        return -1;
      } else if (a.occurrences < b.occurrences) {
        return 1;
      } else {
        return a.tag.localeCompare(b.tag);
      }
    });

    setAvailableSuggestions(suggestionsByOccurrence.slice(0, 5));
  }, [selected, visibleRecipes]);

  return (
    <>
      {availableSuggestions.map(({ occurrences, tag }) => {
        return (
          <li className="SuggestedFilters-listItem" key={tag}>
            
            <button
              className="SuggestedFilters-button SuggestedFilters-buttonInclude"
              onClick={() => onSelect(tag)}
            >
              <AddIcon />
              <span aria-hidden="true">
                {tag}
              </span>
              <span className="SuggestedFilters-buttonLabel">
                {`Promote recipes containing ${tag}`}
              </span>
            </button>
            <button
              className="SuggestedFilters-button SuggestedFilters-buttonExclude"
              onClick={() => onSelect(tag, false)}
            >
              <NotInterestedIcon />
              <span className="SuggestedFilters-buttonLabel">
                {`Exclude recipes containing ${tag}`}
              </span>
            </button>
          </li>
        );
      })}
    </>
  );
};

export default SuggestedFilters;
