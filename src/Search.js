import React, {useEffect, useRef, useState} from 'react';
import { useHistory } from "react-router-dom";
import './Search.css';

import IngredientIcon from '@material-ui/icons/FilterList';
import RecipeIcon from '@material-ui/icons/LocalBar';
import SearchIcon from '@material-ui/icons/Search';

const MATCH_TYPES = {
  INGREDIENT: 'ingredient',
  RECIPE: 'recipe'
};

const Search = ({
  availableIngredients,
  onUpdateTags,
  recipes,
  selectedTags
}) => {
  const history = useHistory();

  const [matchType, setMatchType] = useState(null);
  const [searchTerms, setSearchTerms] = useState([]);
  const [selection, setSelection] = useState(null);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const navigateToRecipeId = id => {
    history.push(`/recipes/${id}`);
  };

  // update available search terms whenever the ingredients, recipes, or selected tags change
  useEffect(() => {
    const unselectedIngredients = availableIngredients.filter(ingredient => !selectedTags.find(item => ingredient === item.tag));
    const ingredientTerms = unselectedIngredients.map(ingredient => ({
      term: ingredient,
      id: null
    }));
    const recipeTerms = recipes.map(recipe => ({
      term: recipe.name.toLowerCase(),
      id: recipe.id
    }));
    setSearchTerms(ingredientTerms.concat(recipeTerms).sort((a, b) => a.term.localeCompare(b.term)));
  }, [availableIngredients, recipes, selectedTags]);

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
      const firstMatch = searchTerms.find(item => item.term.startsWith(val));
      if (firstMatch) {
        newSelection = [val.length, firstMatch.term.length];
        val = firstMatch.term;

        const newMatchType = firstMatch.id ? MATCH_TYPES.RECIPE : MATCH_TYPES.INGREDIENT;
        if (matchType !== newMatchType) {
          setMatchType(newMatchType);
        }
      } else if (matchType) {
        setMatchType(null);
      }
    } else if (matchType) {
      setMatchType(null);
    }

    setValue(val);
    setSelection(newSelection);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = searchTerms.find(item => item.term === value);

    if (result) {
      if (result.id) {
        navigateToRecipeId(result.id);
      } else {
        onUpdateTags([value]);
      }

      setValue('');
      setSelection(null);
      setMatchType(null);
    }
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="Search-input"
        id="Search-input"
        placeholder="Find ingredient or recipe"
        onChange={handleChange}
        ref={inputRef}
        type="text"
        value={value}
      />
      <div className="Search-icon">
        {matchType === MATCH_TYPES.INGREDIENT
          ? <IngredientIcon />
          : matchType === MATCH_TYPES.RECIPE
            ? <RecipeIcon />
            : <SearchIcon />}
      </div>
    </form>
  );
};

export default Search;
