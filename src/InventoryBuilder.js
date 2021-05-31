import React, { useEffect, useRef, useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import './InventoryBuilder.css';

const SORT_METHOD = {
  ALPHABETICAL: 'alphabetical',
  FREQUENTLY_USED: 'frequently-used'
};

const InventoryBuilder = ({
  alcoholicByFrequency,
  nonalcoholicByFrequency
}) => {
  const [code, setCode] = useState('');
  const [inventory, setInventory] = useState({});
  const [isLoadingInventory, setIsLoadingInventory] = useState(false);
  const [pristine, setPristine] = useState(false);
  const [sortMethod, setSortMethod] = useState(SORT_METHOD.FREQUENTLY_USED);

  const alphabeticAlcoholic = alcoholicByFrequency.slice().sort();
  const alphabeticNonalcoholic = nonalcoholicByFrequency.slice().sort();
  const alcoholicTags = (sortMethod === SORT_METHOD.FREQUENTLY_USED) ? alcoholicByFrequency : alphabeticAlcoholic;
  const nonalcoholicTags = (sortMethod === SORT_METHOD.FREQUENTLY_USED) ? nonalcoholicByFrequency : alphabeticNonalcoholic;

  const codeInputEl = useRef(null);

  useEffect(() => {
    if (code) {
      setIsLoadingInventory(true);
      fetch(`${window.location.origin}/cocktails/data/inventory-builder.php?code=${code}`,)
        .then(response => response.json())
        .then(response => {
          if (response && response.data && response.data.reduce) {
            setInventory(response.data.reduce((result, item) => {
              result[item.tag] = item.inStock;
              return result;
            }, {}));
          }
          setIsLoadingInventory(false);
        })
        .catch(e => {
          console.log('error retrieving inventory data', e);
          setIsLoadingInventory(false);
        });
    }
  }, [code]);

  const handleIngredientChange = (tag) => (e) => {
    const val = e.target.checked;
    setInventory(prevState => {
      if (val) {
        return {
          ...prevState,
          [tag]: val
        };
      } else {
        const newInventory = { ...prevState };
        delete newInventory[tag];
        return newInventory;
      }
    });
  };

  const handleSave = () => {
    fetch(
      `${window.location.origin}/cocktails/data/inventory-builder.php`,
      {
        method: 'POST',
        body: JSON.stringify({
          code,
          inventory
        })
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
      })
      .catch(e => {
        console.log('error saving inventory data', e);
      });
  };

  const handleSortMethodChange = e => {
    const val = e.target.value;
    setSortMethod(val);
  };

  const handleSubmitCode = (e) => {
    e.preventDefault();
    const val = codeInputEl.current.value;

    if (val) {
      fetch(
        `${window.location.origin}/cocktails/data/inventory-builder.php`,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ code: val })
        }
      )
        .then(response => response.json())
        .then(response => {
          if (response.success) {
            setCode(val);
          } else {
            alert(`An error occurred: ${response}`);
          }
        })
        .catch(e => {
          console.log('error saving inventory data', e);
        });
    }
  };

  return (
    <div className="App-focusedContent">
      <div className="InventoryBuilder">
        <div className="InventoryBuilder-codeSelector">
          {!!code ? (
            <h1>
              {`Inventory for '${code}'`}
            </h1>
          ) : (
            <form onSubmit={handleSubmitCode}>
              <input
                className="InventoryBuilder-codeInput"
                placeholder="Enter inventory code to create or retrieve"
                ref={codeInputEl}
                type="text"
              />
            </form>
          )}
        </div>
        {!!code && (
          <div className="InventoryBuilder-stock">
            <div className="InventoryBuilder-selectors">
              <div className="InventoryBuilder-selectorHeading">
                <h2>Select ingredients you have!</h2>
                <button
                  className="InventoryBuilder-saveButton"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
              <div className="InventoryBuilder-sortMethod">
                Sort by:
                <label>
                  <input
                    checked={sortMethod === SORT_METHOD.FREQUENTLY_USED}
                    name="sort-radio"
                    onChange={handleSortMethodChange}
                    type="radio"
                    value={SORT_METHOD.FREQUENTLY_USED}
                  />
                  Frequently used
                </label>
                <label>
                  <input
                    checked={sortMethod === SORT_METHOD.ALPHABETICAL}
                    name="sort-radio"
                    onChange={handleSortMethodChange}
                    type="radio"
                    value={SORT_METHOD.ALPHABETICAL}
                  />
                  Alphabetical
                </label>
              </div>
              <div className="InventoryBuilder-selectorCategories">
                <div className="InventoryBuilder-selectorCategory">
                  <h4>Nonalcoholic</h4>
                  <ul className="InventoryBuilder-list">
                    {nonalcoholicTags.map(tag => (
                      <li key={tag}>
                        <input
                          checked={inventory[tag] || false}
                          className="InventoryBuilder-checkboxInput"
                          id={`checkbox-${tag}`}
                          onChange={handleIngredientChange(tag)}
                          type="checkbox"
                        />
                        <label className="InventoryBuilder-checkboxLabel" htmlFor={`checkbox-${tag}`}>
                          <CheckIcon />
                          {tag}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="InventoryBuilder-selectorCategory">
                  <h4>Alcoholic</h4>
                  <ul className="InventoryBuilder-list">
                    {alcoholicTags.map(tag => (
                      <li key={tag}>
                        <input
                          checked={inventory[tag] || false}
                          className="InventoryBuilder-checkboxInput"
                          id={`checkbox-${tag}`}
                          onChange={handleIngredientChange(tag)}
                          type="checkbox"
                        />
                        <label className="InventoryBuilder-checkboxLabel" htmlFor={`checkbox-${tag}`}>
                          <CheckIcon />
                          {tag}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="InventoryBuilder-inStock">

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryBuilder;
