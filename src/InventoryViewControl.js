import React, { useRef, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './InventoryViewControl.css';

import { INVENTORY_VIEWS } from './constants';

const InventoryViewControl = ({
  activeInventoryView,
  inventoryCode,
  isInventoryLoaded,
  onChange,
  onInventoryClear,
  onInventoryLoadSuccess,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const codeInputEl = useRef(null);

  const handleChange = e => {
    onChange(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const code = codeInputEl.current.value;

    fetch(`${window.location.origin}/cocktails/data/inventory-builder.php?code=${code}`,)
        .then(response => response.json())
        .then(response => {
          if (response && response.data && response.data.reduce) {
            const inventory = response.data.reduce((result, item) => {
              result[item.tag] = item.inStock;
              return result;
            }, {});
            if (response.data.length > 0) {
              onInventoryLoadSuccess(code, inventory);
            } else {
              alert('empty or nonexistent inventory');
            }
          }
          setIsLoading(false);
        })
        .catch(e => {
          console.log('error retrieving inventory data', e);
          setIsLoading(false);
        });
  };

  return (
    <form className="InventoryViewControl" onSubmit={handleSubmit}>
      {!inventoryCode ? (
        <>
          <input
            className="InventoryViewControl-input"
            placeholder="Enter inventory code"
            ref={codeInputEl}
            type="text"
          />
          <button
            className="InventoryViewControl-button"
            type="submit"
          >
            Apply
          </button>
        </>
      ) : (
        <>
          <span className="InventoryViewControl-code">{inventoryCode}</span>
          <button
            className="InventoryViewControl-button"
            onClick={onInventoryClear}
            type="button"
          >
            Clear
          </button>
        </>
      )}
      {/*<FormControl component="fieldset">
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
      </FormControl>*/}
    </form>
  );
};

export default InventoryViewControl;
