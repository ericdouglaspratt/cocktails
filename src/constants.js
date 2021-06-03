export const ALCOHOL_PER_SHOT_IN_OZ = 0.4 * 1.5;

export const BREAKPOINTS = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
};

export const CORE_SPIRITS = ['gin', 'tequila', 'rum', 'vodka', 'whiskey'];

export const CORE_SPIRIT_VARIATION_MAP = {
  'añejo tequila': 'tequila',
  'blackstrap rum': 'rum',
  'blanco tequila': 'tequila',
  'bourbon': 'whiskey',
  'dark rum': 'rum',
  'overproof rum': 'rum',
  'pear vodka': 'vodka',
  'pineapple-infused dark rum': 'rum',
  'reposado tequila': 'tequila',
  'rye': 'whiskey',
  'scotch': 'whiskey',
  'single malt scotch': 'whiskey',
  'white rum': 'rum'
};

export const INGREDIENT_CATEGORIES = {
  BITTERS: 'bitters',
  SPIRIT_ALTERNATE: 'spirit-alternate',
  SPIRIT_CORE: 'spirit-core',
  LIQUEUR_FRUIT: 'liqueur-fruit',
  LIQUEUR_AMARO: 'liqueur-amaro',
  LIQUEUR_AROMATIZED_WINE: 'liqueur-aromatized-wine',
  LIQUEUR_COFFEE: 'liqueur-coffee',
  LIQUEUR_HERBAL: 'liqueur-herbal',
  LIQUEUR_FLORAL: 'liqueur-floral',
  LIQUEUR_SPICE: 'liqueur-spice',
  LIQUEUR_NUT: 'liqueur-nut',
  PERISHABLE: 'perishable',
  SODA: 'soda',
  SWEETENER: 'sweetener',
  WINE: 'wine'
};

export const INVENTORY_VIEWS = {
  ALL: 'all',
  AVAILABLE: 'available',
  UNAVAILABLE: 'unavailable'
};

export const METHODS = {
  BLEND: 'blend',
  SHAKE: 'shake',
  STIR: 'stir'
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
  'half wheel': 0.03125, // 1/32
  'leaf': 0,
  'oz': 1,
  'pinch': 0,
  'slice': 0.0625, // 1/16,
  'sprig': 0,
  'stick': 0,
  'Tbsp': 0.5,
  'tsp': 0.166667, // 1/6
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
  'agave nectar': {
    category: INGREDIENT_CATEGORIES.SWEETENER,
    taste: TASTES.SWEET
  },
  'apple cider': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'basil': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'blackberry puree': [TASTES.SWEET],
  'brown sugar syrup': {
    category: INGREDIENT_CATEGORIES.SWEETENER,
    taste: TASTES.SWEET
  },
  'cane sugar': {
    category: INGREDIENT_CATEGORIES.SWEETENER,
    taste: TASTES.SWEET
  },
  'cherry': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'cinnamon': true,
  'cinnamon stick': true,
  'cinnamon sticks': true,
  'club soda': {
    category: INGREDIENT_CATEGORIES.SODA
  },
  'cranberry juice': [TASTES.TART],
  'cream of coconut': true,
  'cucumber': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'demerara syrup': {
    category: INGREDIENT_CATEGORIES.SWEETENER,
    taste: TASTES.SWEET
  },
  'egg white': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'elderflower tonic water': {
    category: INGREDIENT_CATEGORIES.SODA
  },
  'fresh oregano': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'ginger': true,
  'ginger beer': {
    category: INGREDIENT_CATEGORIES.SODA
  },
  'ginger root': true,
  'grapefruit juice': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'grapefruit peel': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'grenadine': {
    category: INGREDIENT_CATEGORIES.SWEETENER,
  },
  'ground nutmeg': true,
  'heavy cream': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'honey': true,
  'honey syrup': true,
  'ice': true,
  'lemon': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'lemon juice': {
    category: INGREDIENT_CATEGORIES.PERISHABLE,
    taste: TASTES.CITRUS
  },
  'lime': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'lime juice': {
    category: INGREDIENT_CATEGORIES.PERISHABLE,
    taste: TASTES.CITRUS
  },
  'maple syrup': {
    category: INGREDIENT_CATEGORIES.SWEETENER,
    taste: TASTES.SWEET
  },
  'mint': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'orange': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'orange flower water': [TASTES.FLORAL],
  'orange juice': {
    category: INGREDIENT_CATEGORIES.PERISHABLE,
    taste: TASTES.CITRUS
  },
  'orange peel': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'pineapple juice': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'plum': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'pumpkin puree': true,
  'raisins': true,
  'raspberry preserves': true,
  'rosemary': {
    category: INGREDIENT_CATEGORIES.PERISHABLE
  },
  'simple syrup': {
    category: INGREDIENT_CATEGORIES.SWEETENER,
    taste: TASTES.SWEET
  },
  'sugar': {
    category: INGREDIENT_CATEGORIES.SWEETENER,
    taste: TASTES.SWEET
  },
  'tonic water': {
    category: INGREDIENT_CATEGORIES.SODA
  },
  'water': true,
  'whole blanched peeled almonds': true,
  'whole cardamoms': true,
  'whole cloves': true
};
