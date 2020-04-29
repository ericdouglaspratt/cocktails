import React from 'react';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './SelectedIngredients.css';

function SelectedIngredients({onRemove, selected = []}) {
  return (
    <ul className="SelectedIngredients">
      {selected.map(item => (
        <li className="SelectedIngredients-item" key={item}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => onRemove(item)}
            startIcon={<CloseIcon />}
          >
            {item}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default SelectedIngredients;
