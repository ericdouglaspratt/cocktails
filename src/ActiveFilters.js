import React from 'react';
import './ActiveFilters.css';

import IngredientFilterButton from './IngredientFilterButton';
import SuggestedFilters from './SuggestedFilters';

const ActiveFilters = ({ numResults, onDeselect, onSelect, selected, visibleRecipes }) => {
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
                onDeselect={onDeselect}
                onSelect={onSelect}
                tag={tag}
              />
            </li>
          );
        })}
        <SuggestedFilters
          onSelect={onSelect}
          selected={selected}
          visibleRecipes={visibleRecipes}
        />
      </ul>
    </div>
  );
};

export default ActiveFilters;
