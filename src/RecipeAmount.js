import React from 'react';
import './RecipeAmount.css';

const RecipeAmount = ({amount}) => {
  const fraction = amount % 1;
  const wholeNumber = amount - fraction;

  let formattedFraction = '';
  if (fraction === 0.25) {
    formattedFraction = <span className="RecipeAmount-fraction">¼</span>;
  } else if (fraction === 0.5) {
    formattedFraction = <span className="RecipeAmount-fraction">½</span>;
  } else if (fraction === 0.75) {
    formattedFraction = <span className="RecipeAmount-fraction">¾</span>;
  } else if (fraction === 0.33) {
    formattedFraction = <span className="RecipeAmount-fraction">⅓</span>;
  } else if (fraction === 0.67) {
    formattedFraction = <span className="RecipeAmount-fraction">⅔</span>;
  } else if (fraction === 0.125) {
    formattedFraction = <span className="RecipeAmount-fraction">⅛</span>;
  }
  return (
    <span className="RecipeAmount">
      {!!wholeNumber && `${wholeNumber} `}
      {formattedFraction}
    </span>
  );
};

export default RecipeAmount;
