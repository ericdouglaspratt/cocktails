import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './SelectedIngredients.css';

function SelectedIngredients({onRemove, selected = []}) {
  return (
    <ul className="SelectedIngredients">
      {selected.map(item => (
        <li key={item}>
          <IconButton aria-label="delete" onClick={onRemove(item)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SelectedIngredients;
