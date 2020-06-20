export const ALCOHOL_PER_SHOT_IN_OZ = 0.4 * 1.5;

export const CORE_SPIRITS = ['gin', 'tequila', 'rum', 'vodka', 'whiskey'];

export const CORE_SPIRIT_VARIATION_MAP = {
  'añejo tequila': 'tequila',
  'blanco tequila': 'tequila',
  'bourbon': 'whiskey',
  'dark rum': 'rum',
  'light rum': 'rum',
  'reposado tequila': 'tequila',
  'rye': 'whiskey'
};

export const NONALCOHOLIC_INGREDIENT_LOOKUP = {
  'cane sugar': true,
  'cherry': true,
  'club soda': true,
  'cranberry juice': true,
  'cream of coconut': true,
  'cucumber': true,
  'demerara syrup': true,
  'egg white': true,
  'ginger beer': true,
  'grenadine': true,
  'ground nutmeg': true,
  'heavy cream': true,
  'ice': true,
  'lemon juice': true,
  'lime juice': true,
  'orange flower water': true,
  'orange juice': true,
  'pineapple juice': true,
  'simple syrup': true,
  'water': true
};

export const UNIT_CONVERSION_TO_OZ = {
  'dash': 0.03125, // 1/32
  'drop': 0.0016907,
  'oz': 1,
  'pinch': 0,
  'slice': 0,
  'Tbsp': 0.5,
  'tsp': 0.166667,
};

export const UNIT_DISPLAY = [
  {
    SINGULAR: 'cup',
    PLURAL: 'cups'
  },
  {
    SINGULAR: 'dash',
    PLURAL: 'dashes'
  },
  {
    SINGULAR: 'drop',
    PLURAL: 'drops'
  },
  {
    SINGULAR: 'slice',
    PLURAL: 'slices'
  }
];
