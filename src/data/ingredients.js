import {
  INGREDIENT_CATEGORIES,
  TASTES
} from '../constants';

export default [

  // ----------
  // SPIRITS
  // ----------

  // brandy
  {
    name: 'Germain-Robin Brandy',
    fullName: 'Germain-Robin Craft-Method Brandy',
    tags: ['brandy'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 40,
    origin: 'Ukiah, CA, USA'
  },
  {
    name: 'Laird\'s Applejack',
    fullName: 'Laird\'s Applejack',
    tags: ['brandy', 'applejack', 'apple brandy'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 40,
    origin: 'Scobeyville, NJ, USA'
  },
  {
    name: 'Eau de Vie Apricot Brandy',
    fullName: 'Eau de Vie Un-Aged Fruit Brandy Apricot',
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    tags: ['brandy', 'apricot brandy'],
    abv: 40,
    origin: 'Petersham, MA, USA'
  },
  // cognac
  {
    name: 'Courvoisier Cognac',
    fullName: 'Courvoisier Cognac V.S.',
    tags: ['cognac'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 40,
    origin: 'France'
  },
  // gin
  {
    name: 'Short Path Winter Gin',
    fullName: 'Short Path Distillery Winter Gin',
    tags: ['gin', 'winter gin'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 43,
    origin: 'Everett, MA, USA'
  },
  {
    name: 'Short Path Gin',
    fullName: 'Short Path Distillery Gin',
    tags: ['gin'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 43,
    origin: 'Everett, MA, USA'
  },
  {
    name: 'Bully Boy Estate Gin',
    fullName: 'Bully Boy Distillers Estate Gin',
    tags: ['gin'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 47,
    origin: 'Boston, MA, USA'
  },
  // rum
  {
    name: 'El Dorado 15 Year Old Rum',
    fullName: 'El Dorado 15 Year Old Finest Demerara Rum',
    tags: ['rum', 'dark rum'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Guyana'
  },
  {
    name: 'Bully Boy Boston Rum',
    fullName: 'Bully Boy Distillers Boston Rum',
    tags: ['rum', 'dark rum'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Boston, MA, USA'
  },
  {
    name: 'Bully Boy Boston Rum, Pineapple-Infused',
    fullName: 'Bully Boy Distillers Boston Rum, Pineapple-Infused',
    tags: ['rum', 'pineapple-infused dark rum'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 40,
    origin: 'Boston, MA, USA'
  },
  {
    name: 'Bacardi White Rum',
    fullName: 'Bacardi Superior White Rum',
    tags: ['rum', 'white rum'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Puerto Rico, USA'
  },
  // tequila
  {
    name: 'Don Julio Añejo Tequila',
    fullName: 'Tequila Reservada de Don Julio, Añejo',
    tags: ['tequila', 'añejo tequila'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Mexico'
  },
  {
    name: 'Cabo Wabo Tequila Reposado',
    fullName: 'Cabo Wabo Tequila Reposado',
    tags: ['tequila', 'reposado tequila'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Mexico'
  },
  {
    name: 'Don Julio Blanco Tequila',
    fullName: 'Tequila Reservada de Don Julio, Blanco',
    tags: ['tequila', 'blanco tequila'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Mexico'
  },
  // vodka
  {
    name: 'Tito\'s Vodka',
    fullName: 'Tito\'s Handmade Vodka',
    tags: ['vodka', 'titos'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Austin, Texas'
  },
  {
    name: 'Zyr Russian Vodka',
    fullName: 'Zyr Ultra Smooth Russian Vodka',
    tags: ['vodka'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Russia'
  },
  // bourbon whiskey
  {
    name: 'Bulleit Bourbon',
    fullName: 'Bulleit Bourbon Frontier Whiskey',
    tags: ['whiskey', 'bourbon'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 45,
    origin: 'Louisville, Kentucky, USA'
  },
  {
    name: 'Old Forester 1920 Bourbon',
    fullName: 'Old Forester 1920 Kentucky Straight Bourbon Whiskey',
    tags: ['whiskey', 'bourbon'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 57.5,
    origin: 'Louisville, Kentucky, USA'
  },
  {
    name: 'Mad River Bourbon',
    fullName: 'Mad River Distillers Bourbon Whiskey',
    tags: ['whiskey', 'bourbon'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 46,
    origin: 'Warren, Vermont, USA'
  },
  // rye whiskey
  {
    name: 'Old Overholt Rye',
    fullName: 'Old Overholt Straight Rye Whiskey',
    tags: ['whiskey', 'rye'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 40,
    origin: 'Kentucky, USA'
  },
  {
    name: 'Rittenhouse Rye',
    fullName: 'Rittenhouse 100 Proof Straight Rye Whiskey',
    tags: ['whiskey', 'rye'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 50,
    origin: 'Louisville, Kentucky, USA'
  },
  // scotch whiskey
  {
    name: 'Aberlour Highland Single Malt Scotch Whisky, 16 Years Old',
    fullName: 'Aberlour Highland Single Malt Scotch Whisky, Double Cask Matured, 16 Years Old',
    tags: ['whiskey', 'scotch', 'single malt scotch'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 43,
    origin: 'Speyside, Scotland'
  },
  {
    name: 'The Balvenie Single Malt Scotch Whisky, Aged 17 Years',
    fullName: 'Single Malt Scotch Whisky, Distilled at The Balvenie Distillery Banffshire, Scotland, Finished in Jamaican Rum Barrels, Aged 17 Years',
    tags: ['whiskey', 'scotch', 'single malt scotch'],
    category: INGREDIENT_CATEGORIES.SPIRIT_CORE,
    abv: 43,
    origin: 'Banffshire, Scotland'
  },
  // whiskey adjacent
  {
    name: 'Bully Boy Old Fashioned',
    fullName: 'The Old Fashioned Prepared Only By Bully Boy Distillers',
    tags: ['old fashioned', 'bully boy old fashioned'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 37,
    origin: 'Boston, MA, USA'
  },
  // mezcal
  {
    name: 'Casamigos Mezcal',
    fullName: 'Casamigos Mezcal',
    tags: ['mezcal'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 40,
    origin: 'Oaxaca, Mexico'
  },
  // pisco
  {
    name: 'Macchu Pisco',
    fullName: 'Macchu Pisco',
    tags: ['pisco'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 40,
    origin: 'Peru'
  },
  // sake
  {
    name: 'Seikyo Takehara Junmai Sake',
    fullName: 'Seikyo Takehara Junmai Sake',
    tags: ['sake', 'junmai sake'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 15,
    origin: 'Hiroshima, Japan'
  },
  // anise
  {
    name: 'Festlig Aquavit Krogstad',
    fullName: 'Festlig Aquavit Krogstad',
    tags: ['aquavit'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 40,
    origin: 'Portland, OR, USA'
  },
  {
    name: 'Linie Aquavit',
    fullName: 'Lysholm Authentic Linie Aquavit',
    tags: ['aquavit'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 41.5,
    origin: 'Norway'
  },
  {
    name: 'Ricard Pastis de Marseille',
    fullName: 'Ricard Pastis de Marseille',
    tags: ['pastis'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 45,
    origin: 'Marseille, France'
  },
  {
    name: 'Kübler Swiss Absinthe Superieure',
    fullName: 'Kübler Swiss Absinthe Superieure',
    tags: ['absinthe'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 53,
    origin: 'Switzerland'
  },
  // cachaça
  {
    name: 'Leblon Cachaça',
    fullName: 'Leblon Cachaça',
    tags: ['cachaça'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 40,
    origin: 'Minas Gerais, Brazil'
  },
  {
    name: '51 Cachaça',
    fullName: '51 Cachaça',
    tags: ['cachaça'],
    category: INGREDIENT_CATEGORIES.SPIRIT_ALTERNATE,
    abv: 39,
    origin: 'Brazil'
  },

  // ----------
  // LIQUEURS
  // ----------

  // amaros
  {
    name: 'Bully Boy Amaro',
    fullName: 'Bully Boy Distillery Amaro Liqueur',
    tags: ['liqueur', 'herbal', 'amaro'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AMARO,
    abv: 29,
    origin: 'Boston, MA, USA'
  },
  {
    name: 'Foro Originale Amaro',
    fullName: 'Foro Originale Amaro Speciale Liqueur',
    tags: ['liqueur', 'herbal', 'amaro'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AMARO,
    abv: 30,
    origin: 'Italy'
  },
  {
    name: 'Fernet-Branca',
    fullName: 'Fernet-Branca Liqueur',
    tags: ['liqueur', 'herbal', 'amaro', 'fernet', 'fernet branca'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AMARO,
    abv: 39,
    origin: 'Italy'
  },
  {
    name: 'Short Path Autumn Amaro',
    fullName: 'Short Path Distillery Autumn Amaro Liqueur',
    tags: ['liqueur', 'amaro', 'short path autumn amaro'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AMARO,
    abv: 20,
    origin: 'Everett, MA, USA'
  },
  {
    name: 'Cynar',
    fullName: 'Cynar Ricetta Originale Liqueur',
    tags: ['liqueur', 'cynar'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AMARO,
    abv: 16.5,
    origin: 'Italy'
  },
  // floral liqueurs
  {
    name: 'Tempus Fugit Liqueur de Violettes',
    fullName: 'Tempus Fugit Spirits Liqueur de Violettes',
    tags: ['liqueur', 'floral', 'creme de violette'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FLORAL,
    abv: 22,
    origin: 'Switzerland',
    tastes: [TASTES.FLORAL]
  },
  {
    name: 'St. Germain Elderflower Liqueur',
    fullName: 'St. Germain Liqueur Artisanale Elderflower Liqueur',
    tags: ['liqueur', 'floral', 'elderflower liqueur'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FLORAL,
    abv: 20,
    origin: 'France'
  },
  // fruit liqueurs
  {
    name: 'Luxardo Maraschino Liqueur',
    fullName: 'Luxardo Maraschino Originale Liqueur',
    tags: ['liqueur', 'maraschino', 'maraschino liqueur'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FRUIT,
    abv: 32,
    origin: 'Italy'
  },
  {
    name: 'Lejay Creme de Cassis',
    fullName: 'Lejay Creme de Cassis Blackcurrant Liqueur',
    tags: ['liqueur', 'blackcurrant liqueur', 'creme de cassis'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FRUIT,
    abv: 18,
    origin: 'France',
    tastes: [TASTES.TART]
  },
  {
    name: 'Pimm\'s No. 1',
    fullName: 'Pimm\'s The Original No. 1 Cup Liqueur',
    tags: ['liqueur', 'pimm\'s no. 1'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FRUIT,
    abv: 25,
    origin: 'Great Britain'
  },
  {
    name: 'Cherry Heering',
    fullName: 'Heering The Original Cherry Liqueur',
    tags: ['cherry heering'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FRUIT,
    abv: 24,
    origin: 'Copenhagen, The Netherlands'
  },
  // spice liqueurs
  {
    name: 'Domaine de Canton Ginger Liqueur',
    fullName: 'Domaine de Canton French Ginger Liqueur',
    tags: ['liqueur', 'ginger liqueur'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_SPICE,
    abv: 28,
    origin: 'France'
  },
  {
    name: 'St. Elizabeth Allspice Dram',
    fullName: 'St. Elizabeth Allspice Dram',
    tags: ['liqueur', 'herbal', 'allspice', 'allspice dram'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_SPICE,
    abv: 22.5,
    origin: 'Austria'
  },
  {
    name: 'Velvet Falernum',
    fullName: 'John D. Taylor\'s Velvet Falernum Liqueur',
    tags: ['velvet falernum', 'falernum'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_SPICE,
    abv: 11,
    origin: 'Barbados'
  },
  // nut liqueurs
  {
    name: 'Disaronno',
    fullName: 'Disaronno Originale Italian Liqueur',
    tags: ['amaretto'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_NUT,
    abv: 28,
    origin: 'Soronno, Italy'
  },
  // herbal liqueurs
  {
    name: 'Bénédictine',
    fullName: 'D.O.M. Bénédictine Liqueur',
    tags: ['liqueur', 'herbal', 'benedictine'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_HERBAL,
    abv: 40,
    origin: 'France',
    tastes: [TASTES.HERBAL]
  },
  {
    name: 'Green Chartreuse',
    fullName: 'Chartreuse Liqueur Fabriquée par les pères Chartreux, Green',
    tags: ['liqueur', 'herbal', 'green chartreuse'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_HERBAL,
    abv: 55,
    origin: 'France',
    tastes: [TASTES.HERBAL]
  },
  {
    name: 'Yellow Chartreuse',
    fullName: 'Chartreuse Liqueur Fabriquée par les pères Chartreux, Yellow',
    tags: ['liqueur', 'herbal', 'yellow chartreuse'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_HERBAL,
    abv: 55,
    origin: 'France',
    tastes: [TASTES.HERBAL]
  },
  {
    name: 'Aperol',
    fullName: 'Aperol Aperitivo Liqueur',
    tags: ['liqueur', 'herbal', 'aperol'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_HERBAL,
    abv: 11,
    origin: 'Italy',
    tastes: [TASTES.BITTER, TASTES.HERBAL]
  },
  {
    name: 'Campari',
    fullName: 'Campari',
    tags: ['liqueur', 'herbal', 'campari'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_HERBAL,
    abv: 24,
    origin: 'Italy',
    tastes: [TASTES.BITTER, TASTES.HERBAL]
  },
  {
    name: 'Suze',
    fullName: 'Suze Bitter Élaboré a Partir de Gentianes Sauvages',
    tags: ['liqueur', 'herbal', 'suze'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_HERBAL,
    abv: 20,
    origin: 'France'
  },
  // coffee
  {
    name: 'Boston Harbor Distillery Coffee Liqueur',
    fullName: 'Boston Harbor Distillery Coffee Liqueur',
    tags: ['coffee liqueur'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_COFFEE,
    abv: 23,
    origin: 'Boston, MA, USA'
  },
  {
    name: 'Patrón XO Cafe',
    fullName: 'Patrón XO Cafe Dark Cocoa Chocolate Coffee Liqueur',
    tags: ['coffee liqueur'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_COFFEE,
    abv: 30,
    origin: 'Mexico'
  },
  // triple secs
  {
    name: 'Grand Marnier',
    fullName: 'Grand Marnier',
    tags: ['triple sec', 'grand marnier'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FRUIT,
    abv: 40,
    origin: 'France'
  },
  {
    name: 'Combier',
    fullName: 'L\'Original Combier Liqueur D\'Orange',
    tags: ['triple sec', 'combier'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FRUIT,
    abv: 40,
    origin: 'Saumur, France'
  },
  {
    name: 'Short Path Triple Sec',
    fullName: 'Short Path Distillery Triple Sec',
    tags: ['triple sec'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FRUIT,
    abv: 20,
    origin: 'Everett, MA, USA'
  },
  {
    name: 'Hiram Walker Blue Curacao',
    fullName: 'Hiram Walker Blue Curacao Cocktail Mixers',
    tags: ['liqueur', 'blue curacao'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_FRUIT,
    abv: 15,
    origin: 'Arkansas, USA'
  },
  // aromatised wine / vermouth
  {
    name: 'Dolin Sweet Vermouth',
    fullName: 'Dolin Vermouth de Chambéry, Rouge',
    tags: ['sweet vermouth'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 16,
    origin: 'Chambéry, France'
  },
  {
    name: 'Dolin Dry Vermouth',
    fullName: 'Dolin Vermouth de Chambéry, Dry',
    tags: ['dry vermouth'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 17.5,
    origin: 'Chambéry, France'
  },
  {
    name: 'Boissiere Sweet Vermouth',
    fullName: 'Boissiere Sweet Vermouth',
    tags: ['sweet vermouth'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 18,
    origin: 'Italy'
  },
  {
    name: 'Martini & Rossi Extra Dry Vermouth',
    fullName: 'Martini & Rossi L\'Aperitivo Extra Dry Vermouth',
    tags: ['dry vermouth'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 15,
    origin: 'Italy'
  },
  {
    name: 'Lillet Blanc',
    fullName: 'Lillet Blanc French Aperitif Wine',
    tags: ['lillet', 'lillet blanc'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 17,
    origin: 'France'
  },
  {
    name: 'Cocchi Americano',
    fullName: 'Aperitivo Cocchi Americano',
    tags: ['dry vermouth', 'aperitif wine', 'cocchi americano'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 16.5,
    origin: 'Italy'
  },
  {
    name: 'Vermouth de Chambéry',
    fullName: 'C. Comoz Vermouth de Chambéry Vermouth Blanc',
    tags: ['vermouth blanc', 'white vermouth'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 16,
    origin: 'France'
  },
  {
    name: 'Punt e Mes',
    fullName: 'Punt e Mes Aperitivo Originale',
    tags: ['sweet vermouth', 'vermouth amaro', 'punt e mes'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 16,
    origin: 'Italy'
  },
  {
    name: 'Cardamaro',
    fullName: 'Cardamaro',
    tags: ['vermouth amaro', 'cardamaro'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 17,
    origin: 'Italy'
  },
  {
    name: 'Noilly Prat Extra Dry Vermouth',
    fullName: 'Noilly Prat Vermouth de France Extra Dry',
    tags: ['dry vermouth', 'extra dry vermouth'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 18,
    origin: 'France'
  },
  {
    name: 'Pineau des Charentes',
    fullName: 'Pineau des Charentes Domaine du Perat',
    tags: ['pineau des charentes'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 17.5,
    origin: 'France'
  },
  {
    name: 'Kina L\'Aéro d\'Or',
    fullName: 'Kina L\'Aéro d\'Or Vin Apéritif au Quinquina',
    tags: ['quinquina', 'aperitif wine', 'kina aromatized wine'],
    category: INGREDIENT_CATEGORIES.LIQUEUR_AROMATIZED_WINE,
    abv: 18,
    origin: 'Switzerland'
  },

  // ----------
  // WINE
  // ----------

  // white wine
  {
    name: 'Twelfth Night Sauvignon Blanc',
    fullName: 'Twelfth Night Sauvignon Blanc',
    tags: ['white wine', 'sauvignon blanc', 'new zealand sauvignon blanc'],
    category: INGREDIENT_CATEGORIES.WINE,
    abv: 13.1,
    origin: 'Marlborough, New Zealand'
  },
  {
    name: 'Muscadet Sèvre et Maine 2019',
    fullName: 'Selection des Cognettes 2019 Muscadet Sèvre et Maine Sur Lie',
    tags: ['white wine', 'moscatel', 'muscadet', 'moscatel wine', 'muscadet wine'],
    category: INGREDIENT_CATEGORIES.WINE,
    abv: 12.5,
    origin: 'France'
  },
  // sparkling wine
  {
    name: 'Era Prosecco',
    fullName: 'Era Prosecco',
    tags: ['prosecco', 'sparkling wine'],
    category: INGREDIENT_CATEGORIES.WINE,
    abv: 11,
    origin: 'Italy'
  },
  // red wine
  {
    name: 'Cannonau di Sardegna',
    fullName: 'Cannonau di Sardegna Riserva 2016',
    tags: ['red wine'],
    category: INGREDIENT_CATEGORIES.WINE,
    abv: 14,
    origin: 'Italy'
  },
  {
    name: 'Dark Horse Merlot 2017',
    fullName: 'The Original Dark Horse Merlot, 2017',
    tags: ['red wine', 'merlot', 'dry red wine'],
    category: INGREDIENT_CATEGORIES.WINE,
    abv: 14.5,
    origin: 'Modesto, CA, USA'
  },
  // sherry
  {
    name: 'Harvey\'s Solera Sherry',
    fullName: 'Harvey\'s The Bristol Cream Solera Sherry',
    tags: ['sherry'],
    category: INGREDIENT_CATEGORIES.WINE,
    abv: 17.5,
    origin: 'Spain'
  },

  // ----------
  // BITTERS
  // ----------

  {
    name: 'Angostura Bitters',
    fullName: 'Angostura Aromatic Bitters',
    tags: ['bitters', 'angostura bitters'],
    category: INGREDIENT_CATEGORIES.BITTERS,
    abv: 44.7,
    origin: 'Trinidad & Tobago'
  },
  {
    name: 'Fee Brothers Bitters',
    fullName: 'Fee Brothers Old Fashion Aromatic Bitters',
    tags: ['bitters', 'fee brothers bitters'],
    category: INGREDIENT_CATEGORIES.BITTERS,
    abv: 17.5,
    origin: 'Rochester, NY, USA'
  },
  {
    name: 'Fee Brothers Orange Bitters',
    fullName: 'Fee Brothers West Indian Orange Bitters',
    tags: ['bitters', 'orange bitters', 'fee brothers orange bitters'],
    category: INGREDIENT_CATEGORIES.BITTERS,
    abv: 9,
    origin: 'Rochester, NY, USA'
  },
  {
    name: 'Fee Brothers Black Walnut Bitters',
    fullName: 'Fee Brothers Black Walnut Bitters',
    tags: ['bitters', 'walnut bitters', 'black walnut bitters'],
    category: INGREDIENT_CATEGORIES.BITTERS,
    abv: 6.4,
    origin: 'Rochester, NY, USA'
  },
  {
    name: 'Peychaud\'s Bitters',
    fullName: 'Peychaud\'s Aromatic Cocktail Bitters',
    tags: ['bitters', 'peychaud\'s bitters'],
    category: INGREDIENT_CATEGORIES.BITTERS,
    abv: 35,
    origin: 'New Orleans, LA, USA'
  },
  {
    name: 'Bokers Bitters',
    fullName: 'Dr. Adam Elmegirab\'s Bokers Bitters',
    tags: ['bitters', 'bokers bitters'],
    category: INGREDIENT_CATEGORIES.BITTERS,
    abv: 31.5,
    origin: 'Scotland'
  },
  {
    name: 'Scrappy\'s Chocolate Bitters',
    fullName: 'Scrappy\'s Bitters Old Fashion Style Chocolate',
    tags: ['bitters', 'chocolate bitters'],
    category: INGREDIENT_CATEGORIES.BITTERS,
    abv: 47.6,
    origin: 'Seattle, WA, USA'
  },
  {
    name: 'Dashfire Cinnamon Bitters',
    fullName: 'Dashfire Bitters Cinnamon Bitters',
    tags: ['bitters', 'cinnamon bitters'],
    category: INGREDIENT_CATEGORIES.BITTERS,
    abv: 38,
    origin: 'Minnetonka, MN, USA'
  }

];
