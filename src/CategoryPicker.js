import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import './CategoryPicker.css';

import categories from './data/categories';

function CategoryPicker({ onDeselect, onSelect, recipeTags, selected }) {
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
              return (
                <li className="CategoryPicker-listItem" key={tag}>
                  <Button
                    color={isTagSelected ? "primary" : "default"}
                    disabled={recipeTags.indexOf(tag) < 0}
                    size="small"
                    onClick={() => isTagSelected ? onDeselect(tag) : onSelect(tag)}
                    startIcon={isTagSelected ? <CloseIcon /> : <AddIcon />}
                    variant={isTagSelected ? "contained" : "outlined"}
                  >
                    {tag}
                  </Button>
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
