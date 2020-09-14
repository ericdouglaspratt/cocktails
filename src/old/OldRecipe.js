import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VerifiedBadge from './VerifiedBadge';
import './Recipe.css';

const tokenMatch = (needle, haystack) => {
  const tokens = needle.split(' ');
  return tokens.reduce((result, token) => {
    return result && haystack.indexOf(token) > -1;
  }, true);
};

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ecf0f1',
    height: 250,
  },
});

function Recipe({ image, ingredientMap, ingredients, instructions, name, numMatches, selected, verified }) {
  const [specificIngredients, setSpecificIngredients] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // find the preferred ingredient names to display
    setSpecificIngredients(ingredients.map(({ amount, preferred, tag }) => {
      let name = preferred || tag;
      if (preferred && verified && ingredientMap[tag]) {
        const preferredIngredient = ingredientMap[tag].find(ingredient => tokenMatch(preferred, ingredient.fullName.toLowerCase()));
        if (preferredIngredient) {
          name = preferredIngredient.name;
        }
      }
      return {
        label: `${amount} ${name}`,
        tag
      };
    }));
  }, [ingredients, ingredientMap, verified]);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {specificIngredients.map(ingredient => ingredient.tag).join(', ')}
          </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );

  return (
    <div className="Recipe">
      <header className="Recipe-header">
        <h3>{name}</h3>
        {verified && <VerifiedBadge />}
      </header>
      {numMatches && (
        <p className="Recipe-subtitle">
          {numMatches > 1 ? `${numMatches} matching ingredients` : '1 matching ingredient'}
        </p>
      )}
      <ul>
        {specificIngredients.map(ingredient => (
          <li
            className={
              selected.indexOf(ingredient.tag) > -1
                ? 'Recipe-ingredient Recipe-ingredient--selected'
                : 'Recipe-ingredient'
            }
            key={ingredient.label}
          >
            {ingredient.label}
          </li>
        ))}
      </ul>
      {!!instructions && (
        <p>{instructions}</p>
      )}
    </div>
  );
}

export default Recipe;
