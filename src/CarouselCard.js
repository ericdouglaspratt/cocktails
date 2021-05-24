import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './CarouselCard.css';

const CarouselCard = ({recipe}) => {
  const dedeupedIngredients = Object.keys(recipe.ingredients.map(info => info.tag).reduce((result, tag) => {
    result[tag] = true;
    return result;
  }, {}));

  return (
    <Link
      className="CarouselCard"
      key={recipe.name}
      to={`/recipes/${recipe.id}`}
    >
      <div className="CarouselCard-image" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipe.image || 'images/default.jpg'}`})` }} />
      <div className="CarouselCard-description">
        <h6 className="CarouselCard-header">
          {recipe.name}
        </h6>
        {/*<p className="CarouselCard-ingredients">
          {dedeupedIngredients.map((name, index) => {
            return (
              <Fragment key={name}>
                <span className="CarouselCard-ingredient">
                  {name}
                </span>
                {index < dedeupedIngredients.length - 1 && ', '}
              </Fragment>
            );
          })}
        </p>*/}
      </div>
    </Link>
  );
};

export default CarouselCard;
