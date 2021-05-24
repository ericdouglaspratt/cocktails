import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

import { BREAKPOINTS } from './constants';
import { useBreakpoint } from './helpers';

import CarouselCard from './CarouselCard';

const Carousel = ({ recipes, title }) => {
  const breakpoint = useBreakpoint();
  const arrows = (breakpoint === BREAKPOINTS.MOBILE) ? false : true;
  const slidesToShow = (breakpoint === BREAKPOINTS.DESKTOP) ? 6 : (breakpoint === BREAKPOINTS.TABLET) ? 4 : 2;

  return (
    <>
      {title && (
        <h2 className="Carousel-header">
          {title}
        </h2>
      )}
      <Slider
        arrows={arrows}
        centerPadding="60px"
        className="Carousel-slider"
        infinite={false}
        slidesToScroll={2}
        slidesToShow={slidesToShow}
      >
        {recipes.map(recipe => (<CarouselCard key={recipe.id} recipe={recipe} />))}
      </Slider>
    </>
  );
};

export default Carousel;
