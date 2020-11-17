import React from 'react';
import './BrowseCard.css';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ecf0f1',
    height: 250,
  },
});

const BrowseCard = ({id, image, ingredients, name}) => {
  const uniqueIngredients = ingredients.reduce((result, {tag}) => {
    if (result.indexOf(tag) < 0) {
      result.push(tag);
    }
    return result;
  }, []);
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea component="a" href={`/recipe/${id}`}>
        <CardMedia
          className={classes.media}
          image={image || 'images/default.jpg'}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {uniqueIngredients.map((ingredient, index) => (
              <span key={ingredient}>
                <span className="BrowseCard-ingredient">
                  {ingredient}
                </span>
                {index + 1 < uniqueIngredients.length && ', '}
              </span>
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BrowseCard;
