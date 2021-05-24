import React, { Fragment } from 'react';
import './CategoryPicker.css';

import categories from './data/categories';

// filters
// method: shaken, stirred, blended

function CategoryPicker({ onUpdateTags, selected }) {
  return (
    <div className="CategoryPicker">
      {categories.map(category => {
        const categoryTags = category.tags.map(item => item.tag);
        const isOtherSelected = categoryTags.reduce((result, tag) => {
          return result && !!selected.find(item => item.tag === tag && !item.include);
        }, true);
        const otherClassName = `CategoryPicker-toggle${isOtherSelected ? ' CategoryPicker-toggle--selected' : ''}`;

        return (
          <Fragment key={category.name}>
            <h4 className="CategoryPicker-title">
              {category.name}
            </h4>
            <ul className="CategoryPicker-list">
              {category.tags.map(({ image, tag }) => {
                const isTagSelected = selected && selected.find(item => item.tag === tag && item.include);
                const className = `CategoryPicker-toggle${isTagSelected ? ' CategoryPicker-toggle--selected' : ''}`;
                return (
                  <li className="CategoryPicker-listItem" key={tag}>
                    <button
                      className={className}
                      onClick={() => {
                        if (isTagSelected) {
                          onUpdateTags([], true, [tag]);
                        } else {
                          onUpdateTags([tag], true, categoryTags);
                        }
                      }}
                      style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${image || 'images/default.jpg'}`})` }}
                    >
                      <span className="CategoryPicker-toggleLabel">
                        {tag}
                      </span>
                    </button>
                  </li>
                );
              })}
              <li className="CategoryPicker-listItem">
                <button
                  className={otherClassName}
                  onClick={() => {
                    onUpdateTags(categoryTags, false, categoryTags);
                  }}
                  style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/default.jpg`})` }}
                >
                  <span className="CategoryPicker-toggleLabel">
                    other
                  </span>
                </button>
              </li>
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
}

export default CategoryPicker;
