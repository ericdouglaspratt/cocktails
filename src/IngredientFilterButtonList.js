import React from 'react';
import './IngredientFilterButtonList.css';

import IngredientFilterButton from './IngredientFilterButton';

const IngredientFilterButtonList = ({
  onUpdateTags,
  selectedTags,
  tags,
  title
}) => {
  return (
    <div className="IngredientFilterButtonList">
      <h4 className="IngredientFilterButtonList-title">
        {title}
      </h4>
      <div className="IngredientFilterButtonList-list">
        {tags.map(tag => {
          const selectionRecord = selectedTags && selectedTags.find(item => item.tag === tag);
          return (
            <div className="IngredientFilterButtonList-listItem" key={tag}>
              <IngredientFilterButton
                isInclusive={selectionRecord && selectionRecord.include}
                isSelected={!!selectionRecord}
                onUpdateTags={onUpdateTags}
                tag={tag}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IngredientFilterButtonList;
