import React, {useEffect, useRef, useState} from 'react';
import './IngredientSearch.css';

const IngredientSearch = ({availableIngredients, onSelectIngredient}) => {
  const [selection, setSelection] = useState(null);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (selection && inputRef && inputRef.current) {
      const [start, end] = selection;
      inputRef.current.focus();
      inputRef.current.setSelectionRange(start, end);
    }
  }, [selection]);

  const handleChange = e => {
    let val = e.target.value.toLowerCase().replace(/[^a-z\s]/g, '');
    let newSelection = null;

    const prevVal = selection ? value.substr(0, selection[0]) : value;
    const hasTypedMore = val.length > prevVal.length;

    if (val && hasTypedMore) {
      const firstMatch = availableIngredients.find(ingredient => ingredient.startsWith(val));
      if (firstMatch) {
        newSelection = [val.length, firstMatch.length];
        val = firstMatch;
      }
    }

    setValue(val);
    setSelection(newSelection);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (availableIngredients.includes(value)) {
      onSelectIngredient(value);
      setValue('');
      setSelection(null);
    }
  };

  return (
    <form className="IngredientSearch" onSubmit={handleSubmit}>
      <label className="IngredientSearch-label" htmlFor="IngredientSearch-input">
        Filter by ingredients
      </label>
      <input
        autoComplete="off"
        className="IngredientSearch-input"
        id="IngredientSearch-input"
        onChange={handleChange}
        ref={inputRef}
        type="text"
        value={value}
      />
    </form>
  );
};

export default IngredientSearch;
