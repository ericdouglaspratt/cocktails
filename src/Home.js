import React from 'react';
import './Home.css';

import { BREAKPOINTS } from './constants';
import { useBreakpoint } from './helpers';

import BaseCards from './BaseCards';
import Carousel from './Carousel';
import Featured from './Featured';

const getRecipes = (ids, recipes) => ids.map(id => recipes.list.find(recipe => id === recipe.id));

const Home = ({ recipes, recipeTagMap }) => {
  const breakpoint = useBreakpoint();

  const featuredRecipeIds = [
    'sherry-herbst',
    'sherry-flip'
  ];

  const classics = recipes.list.filter(recipe => recipe.isCoreDrink);
  // const exclusives = getRecipes(['thunderball', 'the-andy-special'], recipes);
  // const fresh = getRecipes(['gin-smash', 'whiskey-smash'], recipes);
  const recentlyAdded = getRecipes(['court-royale', 'comte-de-sureau', 'barney-barnato', 'gin-smash', 'kangaroo', 'tequila-old-fashioned'], recipes);
  const seaportCollection = getRecipes(['laissez-faire', 'maximilian-affair', 'fort-point', 'casino-royale', 'mission-of-burma'], recipes);
  // const smooth = getRecipes(['diffords-old-fashioned'], recipes);

  return (
    <div className="App-focusedContent">
      <div className="Home">
        <Featured
          featuredRecipeIds={featuredRecipeIds}
          recipes={recipes}
        />
        <BaseCards
          recipeTagMap={recipeTagMap}
        />
        <Carousel
          recipes={recentlyAdded}
          title="Recently Added"
        />
        <Carousel
          recipes={classics}
          showPartialCard={breakpoint === BREAKPOINTS.MOBILE}
          title="Classics"
        />
        <Carousel
          recipes={seaportCollection}
          title="The Seaport Collection"
        />
      </div>
    </div>
  );
};

export default Home;
