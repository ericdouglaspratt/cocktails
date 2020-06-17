import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './ActiveFilters.css';

const ActiveFilters = ({ numResults, onDeselect, selectedTags }) => {
  return (
    <div className="ActiveFilters">
      <p className="ActiveFilters-numResults">
        {`${numResults} ${numResults === 1 ? 'result' : 'results'}`}
      </p>
      <ul className="ActiveFilters-list">
        {selectedTags.map(tag => {
          return (
            <li className="ActiveFilters-listItem" key={tag}>
              <button
                className="ActiveFilters-button"
                onClick={() => onDeselect(tag)}
              >
                <CloseIcon />
                {tag}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActiveFilters;
