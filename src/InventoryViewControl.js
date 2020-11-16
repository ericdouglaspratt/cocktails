import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './InventoryViewControl.css';

import { INVENTORY_VIEWS } from './constants';

const InventoryViewControl = ({ activeInventoryView, isInventoryLoaded, onChange }) => {

  const handleChange = e => {
    onChange(e.target.value);
  }

  return (
    <div className="InventoryViewControl">
      <FormControl component="fieldset">
        <FormLabel component="legend">Filter by inventory status</FormLabel>
        <RadioGroup
          aria-label="position"
          onChange={handleChange}
          name="position"
          row
          value={activeInventoryView}
        >
          <FormControlLabel
            value={INVENTORY_VIEWS.ALL}
            control={<Radio color="primary" />}
            label="All"
          />
          <FormControlLabel
            disabled={!isInventoryLoaded}
            value={INVENTORY_VIEWS.AVAILABLE}
            control={<Radio color="primary" />}
            label="In Stock"
          />
          <FormControlLabel
            disabled={!isInventoryLoaded}
            value={INVENTORY_VIEWS.UNAVAILABLE}
            control={<Radio color="primary" />}
            label="Out of Stock"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default InventoryViewControl;
