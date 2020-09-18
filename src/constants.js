export const ALCOHOL_PER_SHOT_IN_OZ = 0.4 * 1.5;

export const BREAKPOINTS = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop'
};

export const CORE_SPIRITS = ['gin', 'tequila', 'rum', 'vodka', 'whiskey'];

export const CORE_SPIRIT_VARIATION_MAP = {
  'añejo tequila': 'tequila',
  'blanco tequila': 'tequila',
  'bourbon': 'whiskey',
  'dark rum': 'rum',
  'light rum': 'rum',
  'reposado tequila': 'tequila',
  'rye': 'whiskey',
  'scotch': 'whiskey',
  'single malt scotch': 'whiskey'
};

export const RECIPE_GROUP_TYPES = {
  HOLDING_PEN: 'holding pen',
  MAIN: 'main',
  SEASONAL: 'seasonal'
};

export const SEASONS = {
  AUTUMN: 'autumn',
  SPRING: 'spring',
  SUMMER: 'summer',
  WINTER: 'winter'
};

export const TASTES = {
  BITTER: 'bitter',
  CITRUS: 'citrus',
  FLORAL: 'floral',
  HERBAL: 'herbal',
  SWEET: 'sweet',
  TART: 'tart'
};

export const UNIT_CONVERSION_TO_OZ = {
  'barspoon': 0.166667, // 1/6
  'cherry': 0.125, // 1/8
  'cup': 8,
  'dash': 0.03125, // 1/32
  'drop': 0.0016907,
  'oz': 1,
  'pinch': 0,
  'slice': 0.0625, // 1/16,
  'sprig': 0,
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

// ----------------

export const NONALCOHOLIC_INGREDIENTS = {
  'agave nectar': [TASTES.SWEET],
  'blackberry puree': [TASTES.SWEET],
  'cane sugar': [TASTES.SWEET],
  'cherry': true,
  'cinnamon': true,
  'club soda': true,
  'cranberry juice': [TASTES.TART],
  'cream of coconut': true,
  'cucumber': true,
  'demerara syrup': [TASTES.SWEET],
  'egg white': true,
  'fresh oregano': true,
  'ginger': true,
  'ginger beer': true,
  'grenadine': true,
  'ground nutmeg': true,
  'heavy cream': true,
  'honey': true,
  'ice': true,
  'lemon juice': [TASTES.CITRUS],
  'lime juice': [TASTES.CITRUS],
  'maple syrup': true,
  'orange flower water': [TASTES.FLORAL],
  'orange juice': [TASTES.CITRUS, TASTES.SWEET],
  'pineapple juice': [TASTES.SWEET],
  'pumpkin puree': true,
  'simple syrup': [TASTES.SWEET],
  'tonic water': true,
  'water': true
};
