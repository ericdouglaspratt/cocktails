import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Grow from '@material-ui/core/Grow';
import './RecipeModal.css';

import { determineUnitDisplay } from './helpers';

import RecipeAmount from './RecipeAmount';
import Strength from './Strength';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

const RecipeModal = ({ onClose, recipe }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!!recipe);
  }, [recipe])

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  return (
    <Dialog
      className="RecipeModal"
      fullWidth
      maxWidth="lg"
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      {recipe && (
        <div className="RecipeModal-content">
          <div className="RecipeModal-image" style={{ backgroundImage: `url(${`${process.env.PUBLIC_URL}/${recipe.image || 'images/default.jpg'}`})` }}>
            {!!recipe.strength && (
              <Strength strength={recipe.strength} totalVolume={recipe.totalVolume} />
            )}
          </div>
          <div className="RecipeModal-text">
            <h2 className="RecipeModal-header">{recipe.name}</h2>
            <button className="RecipeModal-closeButton" onClick={handleClose}>
              <span className="RecipeModal-accessibleText">Close</span>
              <CloseIcon />
            </button>
            <ol className="RecipeModal-ingredients">
              {recipe.ingredients.map(ingredient => (
                <li className="RecipeModal-ingredient" key={ingredient.tag}>
                  <RecipeAmount amount={ingredient.amount} />
                  {` ${determineUnitDisplay(ingredient.unit, ingredient.amount)} ${ingredient.tag}`}
                </li>
              ))}
            </ol>
            <p className="RecipeModal-instructions">
              {recipe.instructions}
            </p>
          </div>
        </div>
      )}
    </Dialog>

  );
};

export default RecipeModal;
