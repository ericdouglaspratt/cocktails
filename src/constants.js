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
  'pineapple-infused dark rum': 'rum',
  'reposado tequila': 'tequila',
  'rye': 'whiskey',
  'scotch': 'whiskey',
  'single malt scotch': 'whiskey'
};

export const INVENTORY_VIEWS = {
  ALL: 'all',
  AVAILABLE: 'available',
  UNAVAILABLE: 'unavailable'
};

export const RECIPE_GROUP_TYPES = {
  HOLDING_PEN: 'holding pen',
  MAIN: 'main',
  SEASONAL: 'seasonal'
};

export const SEASONS = {
  AUTUMN: 'autumn',
  ELECTION: 'election',
  MANHATTAN: 'manhattan',
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
  'leaf': 0,
  'oz': 1,
  'pinch': 0,
  'slice': 0.0625, // 1/16,
  'sprig': 0,
  'stick': 0,
  'Tbsp': 0.5,
  'tsp': 0.166667,
  'wedge': 0.125, // 1/8,
  'wheel': 0.0625, // 1/16,
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
    SINGULAR: 'leaf',
    PLURAL: 'leaves'
  },
  {
    SINGULAR: 'slice',
    PLURAL: 'slices'
  },
  {
    SINGULAR: 'sprig',
    PLURAL: 'sprigs'
  },
  {
    SINGULAR: 'stick',
    PLURAL: 'sticks'
  },
  {
    SINGULAR: 'wedge',
    PLURAL: 'wedges'
  }
];

// ----------------

export const NONALCOHOLIC_INGREDIENTS = {
  'agave nectar': [TASTES.SWEET],
  'apple cider': true,
  'blackberry puree': [TASTES.SWEET],
  'brown sugar syrup': true,
  'cane sugar': [TASTES.SWEET],
  'cherry': true,
  'cinnamon': true,
  'cinnamon stick': true,
  'cinnamon sticks': true,
  'club soda': true,
  'cranberry juice': [TASTES.TART],
  'cream of coconut': true,
  'cucumber': true,
  'demerara syrup': [TASTES.SWEET],
  'egg white': true,
  'fresh oregano': true,
  'ginger': true,
  'ginger beer': true,
  'ginger root': true,
  'grapefruit juice': true,
  'grapefruit peel': true,
  'grenadine': true,
  'ground nutmeg': true,
  'heavy cream': true,
  'honey': true,
  'honey syrup': true,
  'ice': true,
  'lemon': true,
  'lemon juice': [TASTES.CITRUS],
  'lime': true,
  'lime juice': [TASTES.CITRUS],
  'maple syrup': true,
  'mint': true,
  'orange': true,
  'orange flower water': [TASTES.FLORAL],
  'orange juice': [TASTES.CITRUS, TASTES.SWEET],
  'orange peel': true,
  'pineapple juice': [TASTES.SWEET],
  'plum': true,
  'pumpkin puree': true,
  'raisins': true,
  'raspberry preserves': true,
  'rosemary': true,
  'simple syrup': [TASTES.SWEET],
  'sugar': true,
  'tonic water': true,
  'water': true,
  'whole blanched peeled almonds': true,
  'whole cardamoms': true,
  'whole cloves': true
};
