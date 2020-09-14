import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './ActiveFilters.css';

import SuggestedFilters from './SuggestedFilters';

const ActiveFilters = ({ numResults, onDeselect, onSelect, selected, visibleRecipes }) => {
  return (
    <div className="ActiveFilters">
      <p className="ActiveFilters-numResults">
        {`${numResults} ${numResults === 1 ? 'result' : 'results'}`}
      </p>
      <ul className="ActiveFilters-list">
        {selected.map(({include, tag}) => {
          const buttonClassName = `ActiveFilters-button${include ? '' : ' ActiveFilters-buttonExclude'}`;
          return (
            <li className="ActiveFilters-listItem" key={tag}>
              <button
                className={buttonClassName}
                onClick={() => onDeselect(tag)}
              >
                <CloseIcon />
                {tag}
              </button>
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
