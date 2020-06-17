import React, { Fragment } from 'react';
import './CategoryPicker.css';

import categories from './data/categories';

// filters
// method: shaken, stirred, blended

function CategoryPicker({ onDeselect, onSelect, selected }) {
  return (
    <div className="CategoryPicker">
      {categories.map(category => (
        <Fragment key={category.name}>
          <h4 className="CategoryPicker-title">
            {category.name}
          </h4>
          <ul className="CategoryPicker-list">
            {category.tags.map(tag => {
              const isTagSelected = selected && selected.indexOf(tag) > -1;
              const className = `CategoryPicker-toggle${isTagSelected ? ' CategoryPicker-toggle--selected' : ''}`;
              return (
                <li className="CategoryPicker-listItem" key={tag}>
                  <button
                    className={className}
                    onClick={() => isTagSelected ? onDeselect(tag) : onSelect(tag)}
                  >
                    {tag}
                  </button>
                </li>
              );
            })}
          </ul>
        </Fragment>
      ))}
    </div>
  );
}

export default CategoryPicker;
