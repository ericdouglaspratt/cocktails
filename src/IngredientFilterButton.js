import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import './IngredientFilterButton.css';

const IngredientFilterButton = ({
  isInclusive = false,
  isSelected = false,
  onUpdateTags,
  tag
}) => {
  if (isSelected) {
    const buttonClassName = `IngredientFilterButton ${isInclusive ? ' IngredientFilterButton--selected' : ' IngredientFilterButton--excluded'}`;
    return (
      <button
        className={buttonClassName}
        onClick={() => onUpdateTags([], true, [tag])}
      >
        <CloseIcon />
        {tag}
      </button>
    );
  } else {
    return (
      <div className="IngredientFilterButton-group" key={tag}>
        <button
          className="IngredientFilterButton IngredientFilterButton-include"
          onClick={() => onUpdateTags([tag])}
        >
          <AddIcon />
          <span aria-hidden="true">
            {tag}
          </span>
          <span className="IngredientFilterButton-ariaLabel">
            {`Include recipes containing ${tag}`}
          </span>
        </button>
        <button
          className="IngredientFilterButton IngredientFilterButton-exclude"
          onClick={() => onUpdateTags([tag], false)}
        >
          <NotInterestedIcon />
          <span className="IngredientFilterButton-ariaLabel">
            {`Exclude recipes containing ${tag}`}
          </span>
        </button>
      </div>
    );
  }
};

export default IngredientFilterButton;
