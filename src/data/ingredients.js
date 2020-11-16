import { TASTES } from '../constants';

export default [

  // ----------
  // SPIRITS
  // ----------

  // brandy
  {
    name: 'Germain-Robin Brandy',
    fullName: 'Germain-Robin Craft-Method Brandy',
    tags: ['brandy'],
    abv: 40,
    origin: 'Ukiah, CA, USA'
  },
  {
    name: 'Laird\'s Applejack',
    fullName: 'Laird\'s Applejack',
    tags: ['brandy', 'applejack', 'apple brandy'],
    abv: 40,
    origin: 'Scobeyville, NJ, USA'
  },
  {
    name: 'Eau de Vie Apricot Brandy',
    fullName: 'Eau de Vie Un-Aged Fruit Brandy Apricot',
    tags: ['brandy', 'apricot brandy'],
    abv: 40,
    origin: 'Petersham, MA, USA'
  },
  // cognac
  {
    name: 'Courvoisier Cognac',
    fullName: 'Courvoisier Cognac V.S.',
    tags: ['cognac'],
    abv: 40,
    origin: 'France'
  },
  // gin
  {
    name: 'Short Path Winter Gin',
    fullName: 'Short Path Distillery Winter Gin',
    tags: ['gin', 'winter gin'],
    abv: 43,
    origin: 'Everett, MA, USA'
  },
  {
    name: 'Short Path Gin',
    fullName: 'Short Path Distillery Gin',
    tags: ['gin'],
    abv: 43,
    origin: 'Everett, MA, USA'
  },
  {
    name: 'Bully Boy Estate Gin',
    fullName: 'Bully Boy Distillers Estate Gin',
    tags: ['gin'],
    abv: 47,
    origin: 'Boston, MA, USA'
  },
  // rum
  {
    name: 'El Dorado 15 Year Old Rum',
    fullName: 'El Dorado 15 Year Old Finest Demerara Rum',
    tags: ['rum', 'dark rum'],
    abv: 40,
    origin: 'Guyana'
  },
  {
    name: 'Bully Boy Boston Rum',
    fullName: 'Bully Boy Distillers Boston Rum',
    tags: ['rum', 'dark rum'],
    abv: 40,
    origin: 'Boston, MA, USA'
  },
  {
    name: 'Bully Boy Boston Rum, Pineapple-Infused',
    fullName: 'Bully Boy Distillers Boston Rum, Pineapple-Infused',
    tags: ['rum', 'pineapple-infused dark rum'],
    abv: 40,
    origin: 'Boston, MA, USA'
  },
  {
    name: 'Bacardi White Rum',
    fullName: 'Bacardi Superior White Rum',
    tags: ['rum', 'light rum'],
    abv: 40,
    origin: 'Puerto Rico, USA'
  },
  // tequila
  {
    name: 'Don Julio Añejo Tequila',
    fullName: 'Tequila Reservada de Don Julio, Añejo',
    tags: ['tequila', 'añejo tequila'],
    abv: 40,
    origin: 'Mexico'
  },
  {
    name: 'Cabo Wabo Tequila Reposado',
    fullName: 'Cabo Wabo Tequila Reposado',
    tags: ['tequila', 'reposado tequila'],
    abv: 40,
    origin: 'Mexico'
  },
  {
    name: 'Don Julio Blanco Tequila',
    fullName: 'Tequila Reservada de Don Julio, Blanco',
    tags: ['tequila', 'blanco tequila'],
    abv: 40,
    origin: 'Mexico'
  },
  // vodka
  {
    name: 'Tito\'s Vodka',
    fullName: 'Tito\'s Handmade Vodka',
    tags: ['vodka', 'titos'],
    abv: 40,
    origin: 'Austin, Texas'
  },
  // bourbon whiskey
  {
    name: 'Bulleit Bourbon',
    fullName: 'Bulleit Bourbon Frontier Whiskey',
    tags: ['whiskey', 'bourbon'],
    abv: 45,
    origin: 'Louisville, Kentucky, USA'
  },
  {
    name: 'Old Forester 1920 Bourbon',
    fullName: 'Old Forester 1920 Kentucky Straight Bourbon Whiskey',
    tags: ['whiskey', 'bourbon'],
    abv: 57.5,
    origin: 'Louisville, Kentucky, USA'
  },
  // rye whiskey
  {
    name: 'Old Overholt Rye',
    fullName: 'Old Overholt Straight Rye Whiskey',
    tags: ['whiskey', 'rye'],
    abv: 40,
    origin: 'Kentucky, USA'
  },
  // scotch whiskey
  {
    name: 'Aberlour Highland Single Malt Scotch Whisky, 16 Years Old',
    fullName: 'Aberlour Highland Single Malt Scotch Whisky, Double Cask Matured, 16 Years Old',
    tags: ['whiskey', 'scotch', 'single malt scotch'],
    abv: 43,
    origin: 'Speyside, Scotland'
  },
  {
    name: 'The Balvenie Single Malt Scotch Whisky, Aged 17 Years',
    fullName: 'Single Malt Scotch Whisky, Distilled at The Balvenie Distillery Banffshire, Scotland, Finished in Jamaican Rum Barrels, Aged 17 Years',
    tags: ['whiskey', 'scotch', 'single malt scotch'],
    abv: 43,
    origin: 'Banffshire, Scotland'
  },
  // mezcal
  {
    name: 'Casamigos Mezcal',
    fullName: 'Casamigos Mezcal',
    tags: ['mezcal'],
    abv: 40,
    origin: 'Oaxaca, Mexico'
  },
  // pisco
  {
    name: 'Macchu Pisco',
    fullName: 'Macchu Pisco',
    tags: ['pisco'],
    abv: 40,
    origin: 'Peru'
  },
  // sake
  {
    name: 'Seikyo Takehara Junmai Sake',
    fullName: 'Seikyo Takehara Junmai Sake',
    tags: ['sake', 'junmai sake'],
    abv: 15,
    origin: 'Hiroshima, Japan'
  },
  // anise
  {
    name: 'Festlig Aquavit Krogstad',
    fullName: 'Festlig Aquavit Krogstad',
    tags: ['aquavit'],
    abv: 40,
    origin: 'Portland, OR, USA'
  },
  {
    name: 'Ricard Pastis de Marseille',
    fullName: 'Ricard Pastis de Marseille',
    tags: ['pastis'],
    abv: 45,
    origin: 'Marseille, France'
  },
  // cachaça
  {
    name: 'Leblon Cachaça',
    fullName: 'Leblon Cachaça',
    tags: ['cachaça'],
    abv: 40,
    origin: 'Minas Gerais, Brazil'
  },
  {
    name: '51 Cachaça',
    fullName: '51 Cachaça',
    tags: ['cachaça'],
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
    abv: 29,
    origin: 'Boston, MA, USA'
  },
  {
    name: 'Foro Originale Amaro',
    fullName: 'Foro Originale Amaro Speciale Liqueur',
    tags: ['liqueur', 'herbal', 'amaro'],
    abv: 30,
    origin: 'Italy'
  },
  {
    name: 'Fernet-Branca',
    fullName: 'Fernet-Branca Liqueur',
    tags: ['liqueur', 'herbal', 'amaro', 'fernet', 'fernet branca'],
    abv: 39,
    origin: 'Italy'
  },
  {
    name: 'Short Path Autumn Amaro',
    fullName: 'Short Path Distillery Autumn Amaro Liqueur',
    tags: ['liqueur', 'short path autumn amaro'],
    abv: 20,
    origin: 'Everett, MA, USA'
  },
  // floral liqueurs
  {
    name: 'Tempus Fugit Liqueur de Violettes',
    fullName: 'Tempus Fugit Spirits Liqueur de Violettes',
    tags: ['liqueur', 'floral', 'creme de violette'],
    abv: 22,
    origin: 'Switzerland',
    tastes: [TASTES.FLORAL]
  },
  {
    name: 'St. Germain Elderflower Liqueur',
    fullName: 'St. Germain Liqueur Artisanale Elderflower Liqueur',
    tags: ['liqueur', 'floral', 'elderflower liqueur'],
    abv: 20,
    origin: 'France'
  },
  // fruit liqueurs
  {
    name: 'Luxardo Maraschino Liqueur',
    fullName: 'Luxardo Maraschino Originale Liqueur',
    tags: ['liqueur', 'maraschino', 'maraschino liqueur'],
    abv: 32,
    origin: 'Italy'
  },
  {
    name: 'Lejay Creme de Cassis',
    fullName: 'Lejay Creme de Cassis Blackcurrant Liqueur',
    tags: ['liqueur', 'blackcurrant liqueur', 'creme de cassis'],
    abv: 18,
    origin: 'France',
    tastes: [TASTES.TART]
  },
  // ginger liqueurs
  {
    name: 'Domaine de Canton Ginger Liqueur',
    fullName: 'Domaine de Canton French Ginger Liqueur',
    tags: ['liqueur', 'ginger liqueur'],
    abv: 28,
    origin: 'France'
  },
  // herbal liqueurs
  {
    name: 'Benedictine',
    fullName: 'D.O.M. Benedictine Liqueur',
    tags: ['liqueur', 'herbal', 'benedictine'],
    abv: 40,
    origin: 'France',
    tastes: [TASTES.HERBAL]
  },
  {
    name: 'Green Chartreuse',
    fullName: 'Chartreuse Liqueur Fabriquée par les pères Chartreux, Green',
    tags: ['liqueur', 'herbal', 'green chartreuse'],
    abv: 55,
    origin: 'France',
    tastes: [TASTES.HERBAL]
  },
  {
    name: 'Yellow Chartreuse',
    fullName: 'Chartreuse Liqueur Fabriquée par les pères Chartreux, Yellow',
    tags: ['liqueur', 'herbal', 'yellow chartreuse'],
    abv: 55,
    origin: 'France',
    tastes: [TASTES.HERBAL]
  },
  {
    name: 'Aperol',
    fullName: 'Aperol Aperitivo Liqueur',
    tags: ['liqueur', 'herbal', 'aperol'],
    abv: 11,
    origin: 'Italy',
    tastes: [TASTES.BITTER, TASTES.HERBAL]
  },
  {
    name: 'Campari',
    fullName: 'Campari',
    tags: ['liqueur', 'herbal', 'campari'],
    abv: 24,
    origin: 'Italy',
    tastes: [TASTES.BITTER, TASTES.HERBAL]
  },
  {
    name: 'St. Elizabeth Allspice Dram',
    fullName: 'St. Elizabeth Allspice Dram',
    tags: ['liqueur', 'herbal', 'allspice', 'allspice dram'],
    abv: 22.5,
    origin: 'Austria'
  },
  {
    name: 'Suze',
    fullName: 'Suze Bitter Élaboré a Partir de Gentianes Sauvages',
    tags: ['liqueur', 'herbal', 'suze'],
    abv: 20,
    origin: 'France'
  },
  // coffee
  {
    name: 'Boston Harbor Distillery Coffee Liqueur',
    fullName: 'Boston Harbor Distillery Coffee Liqueur',
    tags: ['coffee liqueur'],
    abv: 23,
    origin: 'Boston, MA, USA'
  },
  {
    name: 'Patrón XO Cafe',
    fullName: 'Patrón XO Cafe Dark Cocoa Chocolate Coffee Liqueur',
    tags: ['coffee liqueur'],
    abv: 30,
    origin: 'Mexico'
  },
  // triple secs
  {
    name: 'Grand Marnier',
    fullName: 'Grand Marnier',
    tags: ['triple sec', 'grand marnier'],
    abv: 40,
    origin: 'France'
  },
  {
    name: 'Combier',
    fullName: 'L\'Original Combier Liqueur D\'Orange',
    tags: ['triple sec', 'combier'],
    abv: 40,
    origin: 'Saumur, France'
  },
  {
    name: 'Short Path Triple Sec',
    fullName: 'Short Path Distillery Triple Sec',
    tags: ['triple sec'],
    abv: 20,
    origin: 'Everett, MA, USA'
  },
  {
    name: 'Hiram Walker Blue Curacao',
    fullName: 'Hiram Walker Blue Curacao Cocktail Mixers',
    tags: ['liqueur', 'blue curacao'],
    abv: 15,
    origin: 'Arkansas, USA'
  },
  // aromatised wine / vermouth
  {
    name: 'Dolin Sweet Vermouth',
    fullName: 'Dolin Vermouth de Chambéry, Rouge',
    tags: ['sweet vermouth'],
    abv: 16,
    origin: 'Chambéry, France'
  },
  {
    name: 'Dolin Dry Vermouth',
    fullName: 'Dolin Vermouth de Chambéry, Dry',
    tags: ['dry vermouth'],
    abv: 17.5,
    origin: 'Chambéry, France'
  },
  {
    name: 'Boissiere Sweet Vermouth',
    fullName: 'Boissiere Sweet Vermouth',
    tags: ['sweet vermouth'],
    abv: 18,
    origin: 'Italy'
  },
  {
    name: 'Martini & Rossi Extra Dry Vermouth',
    fullName: 'Martini & Rossi L\'Aperitivo Extra Dry Vermouth',
    tags: ['dry vermouth'],
    abv: 15,
    origin: 'Italy'
  },
  {
    name: 'Lillet Blanc',
    fullName: 'Lillet Blanc French Aperitif Wine',
    tags: ['lillet', 'lillet blanc'],
    abv: 17,
    origin: 'France'
  },
  {
    name: 'Cocchi Americano',
    fullName: 'Aperitivo Cocchi Americano',
    tags: ['cocchi americano'],
    abv: 16.5,
    origin: 'Italy'
  },
  {
    name: 'Vermouth de Chambéry',
    fullName: 'C. Comoz Vermouth de Chambéry Vermouth Blanc',
    tags: ['vermouth blanc', 'white vermouth'],
    abv: 16,
    origin: 'France'
  },

  // ----------
  // WINE
  // ----------

  // white wine
  {
    name: 'Twelfth Night Sauvignon Blanc',
    fullName: 'Twelfth Night Sauvignon Blanc',
    tags: ['white wine', 'sauvignon blanc', 'new zealand sauvignon blanc'],
    abv: 13.1,
    origin: 'Marlborough, New Zealand'
  },
  // sparkling wine
  {
    name: 'Era Prosecco',
    fullName: 'Era Prosecco',
    tags: ['prosecco', 'sparkling wine'],
    abv: 11,
    origin: 'Italy'
  },
  // red wine
  {
    name: 'Cannonau di Sardegna',
    fullName: 'Cannonau di Sardegna Riserva 2016',
    tags: ['red wine'],
    abv: 14,
    origin: 'Italy'
  },

  // ----------
  // BITTERS
  // ----------

  {
    name: 'Angostura Bitters',
    fullName: 'Angostura Aromatic Bitters',
    tags: ['bitters', 'angostura bitters'],
    abv: 44.7,
    origin: 'Trinidad & Tobago'
  },
  {
    name: 'Fee Brothers Bitters',
    fullName: 'Fee Brothers Old Fashion Aromatic Bitters',
    tags: ['bitters', 'fee brothers bitters'],
    abv: 17.5,
    origin: 'Rochester, NY, USA'
  },
  {
    name: 'Fee Brothers Orange Bitters',
    fullName: 'Fee Brothers West Indian Orange Bitters',
    tags: ['bitters', 'orange bitters', 'fee brothers orange bitters'],
    abv: 9,
    origin: 'Rochester, NY, USA'
  },
  {
    name: 'Fee Brothers Black Walnut Bitters',
    fullName: 'Fee Brothers Black Walnut Bitters',
    tags: ['bitters', 'walnut bitters', 'black walnut bitters'],
    abv: 6.4,
    origin: 'Rochester, NY, USA'
  },
  {
    name: 'Peychaud\'s Bitters',
    fullName: 'Peychaud\'s Aromatic Cocktail Bitters',
    tags: ['bitters', 'peychaud\'s bitters'],
    abv: 35,
    origin: 'New Orleans, LA, USA'
  },
  {
    name: 'Bokers Bitters',
    fullName: 'Dr. Adam Elmegirab\'s Bokers Bitters',
    tags: ['bitters', 'bokers bitters'],
    abv: 31.5,
    origin: 'Scotland'
  },
  {
    name: 'Scrappy\' Chocolate Bitters',
    fullName: 'Scrappy\'s Bitters Old Fashion Style Chocolate',
    tags: ['bitters', 'chocolate bitters'],
    abv: 47.6,
    origin: 'Seattle, WA, USA'
  },
  {
    name: 'Dashfire Cinnamon Bitters',
    fullName: 'Dashfire Bitters Cinnamon Bitters',
    tags: ['bitters', 'cinnamon bitters'],
    abv: 38,
    origin: 'Minnetonka, MN, USA'
  }

];
