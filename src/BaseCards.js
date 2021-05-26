import React from 'react';
import { Link } from "react-router-dom";
import './BaseCards.css';

const BaseCards = ({ recipeTagMap }) => {
  return (
    <div className="BaseCards">
      <Link className="BaseCards-card" to="/explore/gin">
        <span className="BaseCards-sampleImage" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipeTagMap['gin'][0].image || 'images/default.jpg'}`})` }} />
        <span className="BaseCards-spiritName">
          gin
        </span>
        <span className="BaseCards-cta">
          Explore {recipeTagMap['gin'].length} Recipes
        </span>
      </Link>
      <Link className="BaseCards-card" to="/explore/tequila">
        <span className="BaseCards-sampleImage" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipeTagMap['tequila'][0].image || 'images/default.jpg'}`})` }} />
        <span className="BaseCards-spiritName">
          tequila
        </span>
        <span className="BaseCards-cta">
          Explore {recipeTagMap['tequila'].length} Recipes
        </span>
      </Link>
      <Link className="BaseCards-card" to="/explore/rum">
        <span className="BaseCards-sampleImage" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipeTagMap['rum'][0].image || 'images/default.jpg'}`})` }} />
        <span className="BaseCards-spiritName">
          rum
        </span>
        <span className="BaseCards-cta">
          Explore {recipeTagMap['rum'].length} Recipes
        </span>
      </Link>
      <Link className="BaseCards-card" to="/explore/vodka">
        <span className="BaseCards-sampleImage" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipeTagMap['vodka'][0].image || 'images/default.jpg'}`})` }} />
        <span className="BaseCards-spiritName">
          vodka
        </span>
        <span className="BaseCards-cta">
          Explore {recipeTagMap['vodka'].length} Recipes
        </span>
      </Link>
      <Link className="BaseCards-card" to="/explore/whiskey">
        <span className="BaseCards-sampleImage" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipeTagMap['whiskey'][0].image || 'images/default.jpg'}`})` }} />
        <span className="BaseCards-spiritName">
          whiskey
        </span>
        <span className="BaseCards-cta">
          Explore {recipeTagMap['whiskey'].length} Recipes
        </span>
      </Link>
    </div>
  );
};

export default BaseCards;
