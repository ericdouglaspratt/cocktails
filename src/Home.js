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
    'comte-de-sureau',
    //'tequila-old-fashioned'
  ];

  const classics = recipes.list.filter(recipe => recipe.isCoreDrink);
  const exclusives = getRecipes(['thunderball', 'the-andy-special'], recipes);
  const fresh = getRecipes(['gin-smash', 'whiskey-smash'], recipes);
  const seaportCollection = getRecipes(['laissez-faire', 'maximilian-affair', 'fort-point', 'casino-royale', 'mission-of-burma'], recipes);
  const smooth = getRecipes(['diffords-old-fashioned'], recipes);

  return (
    <div className="App-focusedContent">
      <div className="Home">
        <Featured
          featuredRecipeIds={featuredRecipeIds}
          recipes={recipes}
        />
        <BaseCards
          recipes={recipes}
          recipeTagMap={recipeTagMap}
        />
        <Carousel
          recipes={classics}
          showPartialCard={breakpoint === BREAKPOINTS.MOBILE}
          title="Classics"
        />
        {/*<Carousel
          recipes={smooth}
          title="Smooth"
        />
        <Carousel
          recipes={fresh}
          title="Fresh"
        />*/}
        <Carousel
          recipes={seaportCollection}
          title="The Seaport Collection"
        />
      </div>
    </div>
  );
};

export default Home;
