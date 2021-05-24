import React from 'react';
import './ActiveFilters.css';

import IngredientFilterButton from './IngredientFilterButton';
import SuggestedFilters from './SuggestedFilters';

const ActiveFilters = ({ numResults, onUpdateTags, selected, visibleRecipes }) => {
  return (
    <div className="ActiveFilters">
      <p className="ActiveFilters-numResults">
        {`${numResults} ${numResults === 1 ? 'result' : 'results'}`}
      </p>
      <ul className="ActiveFilters-list">
        {selected.map(({include, tag}) => {
          return (
            <li className="ActiveFilters-listItem" key={tag}>
              <IngredientFilterButton
                isInclusive={include}
                isSelected
                onUpdateTags={onUpdateTags}
                tag={tag}
              />
            </li>
          );
        })}
        <SuggestedFilters
          onUpdateTags={onUpdateTags}
          selected={selected}
          visibleRecipes={visibleRecipes}
        />
      </ul>
    </div>
  );
};

export default ActiveFilters;
