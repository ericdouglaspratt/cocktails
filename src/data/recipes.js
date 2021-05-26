import {METHODS, SEASONS} from '../constants';

export default [
  {
    name: 'Winter in Rome',
    image: 'images/winter-in-rome.jpg',
    instructions: 'Put sphere of ice into stirring glass. Combine ingredients in stirring glass. Stir 50 times with barspoon. Transfer sphere of ice into rocks glass. Pour drink into rocks glass. Serve and enjoy!',
    method: METHODS.STIR,
    rating: 5,
    season: SEASONS.WINTER,
    dateVerified: '2019-12-31',
    verified: true,
    ingredients: [
      {
        amount: 1,
        preferred: 'short path winter gin',
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1,
        preferred: 'bully boy amaro',
        tag: 'amaro',
        unit: 'oz'
      },
      {
        amount: 1,
        preferred: 'foro originale amaro',
        tag: 'amaro',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Vieux Carré',
    image: 'images/vieux-carre.jpg',
    instructions: 'Stir with ice and strain into an ice-filled rocks glass. No garnish.',
    method: METHODS.STIR,
    rating: 5,
    season: SEASONS.MANHATTAN,
    dateVerified: '2019-09-27',
    verified: true,
    ingredients: [
      {
        amount: 0.75,
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'cognac',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'benedictine',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'angostura bitters',
        unit: 'dash'
      },
      {
        amount: 2,
        tag: 'peychaud\'s bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Margarita',
    image: 'images/margarita.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass rimmed with salt. Garnish with lime wheel.',
    method: METHODS.SHAKE,
    isCoreDrink: true,
    dateVerified: '2019-05-26',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'blanco tequila',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Lemon Drop',
    image: 'images/lemon-drop.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    dateVerified: '2019-09-08',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'vodka',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Japanese Courage',
    image: 'images/japanese-courage.jpg',
    instructions: 'Warm up the sake on the stove. Combine all other ingredients in a heatproof glass, then pour in the sake. Garnish with lemon (optional) and ground cloves.',
    method: METHODS.STIR,
    season: SEASONS.WINTER,
    dateVerified: '2020-03-21',
    verified: true,
    ingredients: [
      {
        amount: 6,
        tag: 'sake',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'yellow chartreuse',
        unit: 'oz'
      },
      {
        amount: 0.25,
        preferred: 'domaine de canton',
        tag: 'ginger liqueur',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  /*{
    name: 'Wysoosler',
    dateVerified: '2019-04-06',
    verified: true,
    ingredients: [
      {
        amount: 1,
        tag: 'sweet vermouth'
      },
      {
        amount: 0.75,
        tag: 'gin'
      },
      {
        amount: 0.75,
        tag: 'green chartreuse'
      },
      {
        amount: '2 dashes',
        tag: 'orange bitters'
      }
    ]
  },*/
  {
    name: 'The Andy Special',
    image: 'images/the-andy-special.jpg',
    instructions: 'Shake with ice and strain into a chilled Collins glass. No garnish.',
    method: METHODS.SHAKE,
    dateVerified: '2017-12-29',
    isExclusive: true,
    isVerified: true,
    ingredients: [
      {
        amount: 3,
        preferred: 'tito\'s',
        tag: 'vodka',
        unit: 'oz'
      },
      {
        amount: 3,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Blue Hawaiian',
    image: 'images/blue-hawaiian.jpg',
    instructions: 'Blend and pour into a chilled rocks glass. Garnish with pineapple wedge and a cherry.',
    method: METHODS.BLEND,
    season: SEASONS.SUMMER,
    dateVerified: '2012-07-07',
    verified: true,
    ingredients: [
      {
        amount: 1,
        preferred: 'bacardi',
        tag: 'white rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'blue curacao',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'pineapple juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'cream of coconut',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'ice',
        unit: 'cup'
      }
    ]
  },
  {
    name: 'Silver Lily',
    image: 'images/silver-lily.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    dateVerified: '2012-04-14',
    verified: true,
    ingredients: [
      {
        amount: 0.75,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        preferred: 'cointreau',
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'creme de violette',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'egg white',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Moscow Mule',
    image: 'images/moscow-mule.jpg',
    instructions: 'Shake with ice and strain into copper mug filled with crushed ice. Garnish with lime wheel and serve.',
    method: METHODS.SHAKE,
    rating: 5,
    dateVerified: '2020-04-26',
    verified: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'vodka',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'ginger beer',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Last Word',
    image: 'images/last-word.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    dateVerified: '2020-05-21',
    verified: true,
    ingredients: [
      {
        amount: 0.75,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'maraschino liqueur',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'green chartreuse',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Aviation',
    image: 'images/aviation.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    dateVerified: '2020-05-30',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'maraschino liqueur',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'creme de violette',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Prosecutor',
    image: 'images/prosecutor.jpg',
    instructions: 'Shake with ice and strain into a chilled rocks glass. No garnish.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 1.5,
        preferred: 'old overholt',
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'yellow chartreuse',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'elderflower liqueur',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Manhattan',
    image: 'images/manhattan.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with three cherries on a pick.',
    method: METHODS.STIR,
    isCoreDrink: true,
    season: SEASONS.MANHATTAN,
    dateVerified: '2020-05-30',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Vodka Martini',
    image: 'images/vodka-martini.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lemon peel.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 2.5,
        tag: 'vodka',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'dry vermouth',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Backyard Cocktail',
    image: 'images/backyard-cocktail.jpg',
    instructions: 'Muddle sauvignon blanc, elderflower liqueur, and cucumber in a shaker. Shake with ice, strain into a chilled Collins glass filled with ice, and top with club soda and prosecco. Garnish with cucumber slice.',
    method: METHODS.SHAKE,
    season: SEASONS.SUMMER,
    dateVerified: '2011-04-30',
    isExclusive: true,
    isVerified: true,
    ingredients: [
      {
        amount: 2,
        //preferred: 'new zealand sauvignon blanc',
        tag: 'sauvignon blanc',
        unit: 'oz'
      },
      {
        amount: 1.5,
        preferred: 'st germain',
        tag: 'elderflower liqueur',
        unit: 'oz'
      },
      {
        amount: 5,
        tag: 'cucumber',
        unit: 'slice'
      },
      {
        amount: 0.33,
        tag: 'club soda',
        unit: 'oz'
      },
      {
        amount: 0.33,
        tag: 'prosecco',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Periodista',
    image: 'images/periodista.jpg',
    instructions: 'Shake with ice and strain into chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 1.5,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 0.5,
        //preferred: 'rothman winter',
        tag: 'apricot brandy',
        unit: 'oz'
      },
      {
        amount: 0.5,
        preferred: 'combier',
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Ramos Gin Fizz',
    image: 'images/ramos-gin-fizz.jpg',
    instructions: 'Dry shake with whisk ball for 1min without club soda, then shake with ice for 2min. Pour club soda into chilled collins glass. Strain into glass and let sit for 1min. Tap glass a few times with knife to release bubbles into foam. Continue pouring or, if none left, funnel additional club soda into the center until foam rises above rim of glass. Place metal straw in the middle and garnish with orange twist.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'egg white',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'heavy cream',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 5,
        tag: 'orange flower water',
        unit: 'drop'
      },
      {
        amount: 2,
        tag: 'club soda',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Pisco Sour',
    image: 'images/pisco-sour.jpg',
    instructions: 'Dry shake, then shake with ice and strain into a chilled coupe glass. Garnish with four drops of Angostura swirled with a cocktail straw.',
    method: METHODS.SHAKE,
    dateVerified: '2020-05-02',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'pisco',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'egg white',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Cosmopolitan',
    image: 'images/cosmopolitan.jpg',
    instructions: 'Shake with ice and strain into a chilled martini glass. Garnish with an orange twist.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 2,
        tag: 'vodka',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'cranberry juice',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Conquistador',
    image: 'images/conquistador.jpg',
    instructions: 'Dry shake, then shake with ice and strain into a chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    dateVerified: '2020-05-24',
    verified: true,
    ingredients: [
      {
        amount: 1,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'blanco tequila',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'orange bitters',
        unit: 'dash'
      },
      {
        amount: 1,
        tag: 'egg white',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Coda',
    image: 'images/coda.jpg',
    instructions: 'Dry shake, then shake with ice and strain into a chilled fizz glass. Garnish with grated nutmeg.',
    method: METHODS.SHAKE,
    season: SEASONS.WINTER,
    ingredients: [
      {
        amount: 1,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'white rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'allspice dram',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'demerara syrup',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'egg white',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Water Lily',
    image: 'images/water-lily.jpg',
    instructions: 'Shake with ice and strain into chilled coupe glass. Garnish with an orange twist.',
    method: METHODS.SHAKE,
    dateVerified: '2020-06-09',
    verified: true,
    ingredients: [
      {
        amount: 0.75,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'creme de violette',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Vieux Mot',
    image: 'images/vieux-mot.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass.',
    method: METHODS.SHAKE,
    dateVerified: '2020-05-27',
    verified: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        preferred: 'st germain',
        tag: 'elderflower liqueur',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Vesper',
    image: 'images/vesper.jpg',
    instructions: 'Stir with ice and strain into a chilled martini glass. Garnish with a lemon twist.',
    method: METHODS.STIR,
    dateVerified: '2020-05-31',
    verified: true,
    ingredients: [
      {
        amount: 2.25,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'vodka',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lillet blanc',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Tuxedo',
    image: 'images/tuxedo.jpg',
    instructions: 'Stir with ice and strain into a chilled, absinthe-rinsed coupe glass. Garnish with a lemon twist and a cherry.',
    method: METHODS.STIR,
    dateVerified: '2020-05-28',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'dry vermouth',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'maraschino liqueur',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'orange bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Rosita',
    image: 'images/rosita.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with an orange twist.',
    method: METHODS.STIR,
    dateVerified: '2020-05-27',
    verified: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'reposado tequila',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'dry vermouth',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'campari',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Improved Whiskey Cocktail',
    image: 'images/improved-whiskey-cocktail.jpg',
    instructions: 'Stir with ice and strain over one large cube into a chilled, absinthe-rinsed rocks glass. Garnish with a lemon twist.',
    method: METHODS.STIR,
    rating: 5,
    dateVerified: '2020-05-10',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'maraschino liqueur',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'El Diablo',
    image: 'images/el-diablo.jpg',
    instructions: 'Shake with ice and strain into chilled rocks glass. Garnish with a lemon wheel.',
    method: METHODS.SHAKE,
    rating: 4,
    dateVerified: '2020-05-20',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'blanco tequila',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'ginger beer',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'creme de cassis',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Bijou',
    image: 'images/bijou.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with cherry and lemon twist.',
    method: METHODS.STIR,
    rating: 5,
    dateVerified: '2020-05-23',
    verified: true,
    ingredients: [
      {
        amount: 1,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'green chartreuse',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'orange bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Hanky Panky',
    image: 'images/hanky-panky.jpg',
    instructions: 'Stir with ice and strain into chilled coupe glass. Garnish with an orange twist.',
    method: METHODS.STIR,
    dateVerified: '2020-06-09',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'fernet',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Occidental',
    image: 'images/occidental.jpg',
    instructions: 'Stir with ice and strain into a chilled, Fernet-Branca-rinsed coupe glass. Garnish with an orange twist.',
    method: METHODS.STIR,
    source: 'The PDT Cocktail Book',
    dateVerified: '2019-05-17',
    verified: true,
    ingredients: [
      {
        amount: 2,
        preferred: 'krogstad',
        tag: 'aquavit',
        unit: 'oz'
      },
      {
        amount: 0.75,
        preferred: 'grand marnier',
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'amaro',
        unit: 'oz'
      }
    ]
  },
  /*{
    name: 'May Daisy', // less simple syrup, add club soda? needs less syrupy and more fizz
    image: 'images/may-daisy.jpg',
    instructions: 'Shake with ice and strain into a chilled wine glass filled with ice. Garnish with a mint sprig.',
    method: METHODS.SHAKE,
    inHoldingPen: true,
    ingredients: [
      {
        amount: 2,
        preferred: 'v.s.o.p',
        tag: 'cognac',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'green chartreuse',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },*/
  {
    name: 'Mary Pickford',
    image: 'images/mary-pickford.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    dateVerified: '2020-06-27',
    verified: true,
    season: SEASONS.SUMMER,
    ingredients: [
      {
        amount: 2,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'pineapple juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'maraschino liqueur',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'grenadine',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Martinez',
    image: 'images/martinez.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with an orange twist.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 1.5,
        preferred: 'old tom',
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'maraschino liqueur',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'bokers bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Martini',
    image: 'images/martini.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with a lemon twist.',
    method: METHODS.STIR,
    isCoreDrink: true,
    ingredients: [
      {
        amount: 3,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'dry vermouth',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Rum Punch',
    image: 'images/rum-punch.jpg',
    instructions: 'Shake with ice and strain into a chilled rocks glass. No garnish.',
    method: METHODS.SHAKE,
    season: SEASONS.SUMMER,
    dateVerified: '2012-02-25',
    verified: true,
    ingredients: [
      {
        amount: 1,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'white rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'pineapple juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'orange juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'grenadine',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'ground nutmeg',
        unit: 'pinch'
      }
    ]
  },
  {
    name: 'El Daiquiri Verde',
    image: 'images/el-daiquiri-verde.jpg',
    instructions: 'Shake with ice and strain into a chilled, absinthe-rinsed coupe glass. Garnish with a lime twist.',
    method: METHODS.SHAKE,
    dateVerified: '2012-03-10',
    verified: true,
    ingredients: [
      {
        amount: 2.25,
        tag: 'white rum',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'maraschino liqueur',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Little Italy',
    image: 'images/little-italy.jpg',
    instructions: 'Stir with ice and strain over a chilled coupe glass. Garnish with a flamed orange twist and a cherry.',
    method: METHODS.STIR,
    season: SEASONS.MANHATTAN,
    ingredients: [
      {
        amount: 1.75,
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'cynar',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Old Fashioned',
    image: 'images/old-fashioned.jpg',
    instructions: 'Stir water, simple syrup, and bitters in a chilled rocks glass. Add cherry and muddle. Add large ice, bourbon, and stir. Garnish with orange peel.',
    method: METHODS.STIR,
    isCoreDrink: true,
    dateVerified: '2019-05-27',
    verified: true,
    ingredients: [
      {
        amount: 1.25,
        preferred: 'bulleit',
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'water',
        unit: 'tsp'
      },
      {
        amount: 1,
        tag: 'simple syrup',
        unit: 'tsp'
      },
      {
        amount: 4,
        tag: 'angostura bitters',
        unit: 'dash'
      },
      {
        amount: 1,
        tag: 'cherry',
        unit: 'cherry'
      }
    ]
  },
  {
    name: 'Pearl Button',
    image: 'images/pearl-button.jpg',
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with ice. Top with 1.5 oz of San Pellegrino Limonata. Garnish with half a grapefruit wheel.',
    method: METHODS.SHAKE,
    season: SEASONS.SUMMER,
    ingredients: [
      {
        amount: 2,
        tag: 'cachaça',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lillet blanc',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Pearl of Puebla',
    image: 'images/pearl-of-puebla.jpg',
    instructions: 'Muddle the oregano and agave nectar. Add everything else, shake with ice, and strain into a chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 2,
        preferred: 'sombra',
        tag: 'mezcal',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'yellow chartreuse',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 4,
        tag: 'fresh oregano',
        unit: 'sprig'
      },
      {
        amount: 1,
        tag: 'pastis',
        unit: 'barspoon'
      },
      {
        amount: 1,
        tag: 'agave nectar',
        unit: 'barspoon'
      }
    ]
  },
  {
    name: 'Gin & Tonic',
    image: 'images/gin-and-tonic.jpg',
    instructions: 'Add to a chilled Collins glass filled with ice and stir briefly. Garnish with a lime wedge.',
    method: METHODS.STIR,
    isCoreDrink: true,
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 4,
        tag: 'tonic water',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Caprice',
    image: 'images/caprice.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with an orange twist.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'dry vermouth',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'benedictine',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'orange bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Bobby Burns',
    image: 'images/bobby-burns.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with a lemon twist.',
    method: METHODS.STIR,
    dateVerified: '2020-07-02',
    verified: true,
    ingredients: [
      {
        amount: 2,
        tag: 'single malt scotch',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'benedictine',
        unit: 'barspoon'
      }
    ]
  },
  {
    name: 'Aperol Spritz',
    image: 'images/aperol-spritz.jpg',
    instructions: 'Combine in a highball glass, add half an orange wheel, add ice, stir, add straw, and serve.',
    method: METHODS.STIR,
    season: SEASONS.SUMMER,
    ingredients: [
      {
        amount: 3,
        tag: 'prosecco',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'aperol',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'club soda',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Bronx',
    image: 'images/bronx.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with an orange twist.',
    method: METHODS.SHAKE,
    dateVerified: '2020-07-02',
    verified: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'orange juice',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'dry vermouth',
        preferred: 'noilly prat',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'orange bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Tom Collins',
    image: 'images/tom-collins.jpg',
    instructions: 'Shake with ice and strain into an ice-filled collins glass. Top with club soda. Garnish with half lemon wheel and cherry.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        preferred: 'old tom',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Casino Royale',
    image: 'images/casino-royale.jpg',
    instructions: 'Stir with large ice in a large rocks glass. Garnish with orange peel.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 1,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'benedictine',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'chocolate bitters',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'walnut bitters',
        unit: 'oz'
      },
      {
        amount: 4,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Corpse Reviver No. 2',
    image: 'images/corpse-reviver-no-2.jpg',
    instructions: 'Shake with ice and strain into an absinthe-rinsed coupe glass. No garnish.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 0.75,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'cocchi americano',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Eventide',
    image: 'images/eventide.jpg',
    instructions: 'Stir with ice and strain into chilled coupe glass. Garnish with lemon twist.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'dry vermouth',
        preferred: 'cocchi americano',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'orange bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Revolver',
    image: 'images/revolver.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with a flamed orange peel.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 2,
        tag: 'bourbon',
        preferred: 'bulleit',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'coffee liqueur',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'orange bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Thunderball',
    image: 'images/thunderball.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with two blackberries on a pick.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 1.5,
        tag: 'brandy',
        unit: 'oz',
      },
      {
        amount: 1,
        tag: 'blackberry puree',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'lemon juice',
        unit: 'oz'
      }
    ]
  },
  /*{
    name: 'Nor\'easter',
    image: 'images/noreaster.jpg',
    instructions: 'Shake with ice without ginger beer and strain into a chilled collins glass filled with ice. Top with ginger beer. Garnish with a sage leaf.',
    method: METHODS.SHAKE,
    season: SEASONS.AUTUMN,
    inHoldingPen: true,
    ingredients: [
      {
        amount: 2,
        tag: 'whiskey',
        preferred: 'short path',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'ginger beer',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'maple syrup',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },*/
  {
    name: 'Apple Cinner',
    image: 'images/apple-cinner.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with a cinnamon stick.',
    method: METHODS.SHAKE,
    season: SEASONS.AUTUMN,
    ingredients: [
      {
        amount: 1,
        tag: 'apple brandy',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'amaro',
        preferred: 'short path autumn amaro',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'maple syrup',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'cinnamon bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Spiced Pumpkin Punch',
    image: 'images/spiced-pumpkin-punch.jpg',
    instructions: 'Shake with ice and strain into a chilled rocks glass filled with ice. Garnish with sage leaves, cinnamon stick, and ground cinnamon.',
    method: METHODS.SHAKE,
    season: SEASONS.AUTUMN,
    ingredients: [
      {
        amount: 2,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 3,
        tag: 'ginger beer',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'pumpkin puree',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'honey',
        unit: 'oz',
      },
      {
        amount: 0.125,
        tag: 'ginger',
        unit: 'tsp'
      },
      {
        amount: 0.125,
        tag: 'cinnamon',
        unit: 'tsp'
      }
    ]
  },
  {
    name: 'Amaro Spritz',
    image: 'images/amaro-spritz.jpg',
    instructions: 'Stir with ice in a chilled rocks glass. Garnish with lime wheel.',
    method: METHODS.STIR,
    season: SEASONS.SUMMER,
    ingredients: [
      {
        amount: 2,
        tag: 'amaro',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'prosecco',
        unit: 'oz'
      },
      {
        amount: 3,
        tag: 'club soda',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Toronto',
    image: 'images/toronto.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with an orange peel.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 1.5,
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'fernet',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Boulevardier',
    image: 'images/boulevardier.jpg',
    instructions: 'Stir with ice and strain into a chilled, ice-filled rocks glass. Garnish with an orange twist.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 1.5,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'campari',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Clover Club',
    image: 'images/clover-club.jpg',
    instructions: 'Dry shake, then shake with ice and strain into a chilled coupe glass. No garnish.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'egg white',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'raspberry preserves',
        unit: 'barspoon'
      }
    ]
  },
  {
    name: 'Pimm\'s Cup',
    image: 'images/pimms-cup.jpg',
    instructions: 'Muddle cucumber and simple in shaker. Add remaining ingredients, shake with ice, and strain into a chilled Collins glass filled with ice. Garnish with a cucumber wheel.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 2,
        tag: 'pimm\'s no. 1',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'club soda',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'cucumber',
        unit: 'slice'
      }
    ]
  },
  {
    name: 'Fall From the Tree', // https://www.liquor.com/recipes/fall-from-the-tree/
    image: 'images/fall-from-the-tree.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with an apple slice.',
    method: METHODS.SHAKE,
    season: SEASONS.AUTUMN,
    ingredients: [
      {
        amount: 1.5,
        tag: 'apple brandy',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'apple cider',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'demerara syrup',
        unit: 'oz'
      },
      {
        amount: 4,
        tag: 'cinnamon bitters',
        unit: 'dash'
      },
      {
        amount: 1,
        tag: 'fee brothers bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Lights Out Punch', // https://www.liquor.com/recipes/lights-out-punch/
    image: 'images/lights-out-punch.jpg',
    instructions: 'Stir with ice and strain into a chilled rocks glass. Garnish with an apple slice, cinnamon, and nutmeg.',
    method: METHODS.STIR,
    season: SEASONS.AUTUMN,
    ingredients: [
      {
        amount: 1.5,
        tag: 'reposado tequila',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'club soda',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'apple cider',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'demerara syrup',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'angostura bitters',
        unit: 'dash'
      },
      {
        amount: 1,
        tag: 'fee brothers bitters',
        unit: 'dash'
      },
      {
        amount: 1,
        tag: 'cinnamon bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Isle of the Pines',
    image: 'images/isle-of-the-pines.jpg',
    instructions: 'Dice plum wedges and muddle with lime, rosemary, and brown sugar syrup. Add rum, stir with ice, and strain into coupe glass. Garnish with plum wedge.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 2,
        tag: 'pineapple-infused dark rum',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'brown sugar syrup',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'plum',
        unit: 'wedge'
      },
      {
        amount: 1,
        tag: 'lime',
        unit: 'wedge'
      },
      {
        amount: 1,
        tag: 'rosemary',
        unit: 'sprig'
      }
    ]
  },
  {
    name: 'Pineapple Sangaree',
    image: 'images/pineapple-sangaree.jpg',
    instructions: 'Infuse red wine with broken cinnamon sticks, diced plum, and orange wheel for 30 minutes in rocks glass. Add remaining ingredients and stir in glass with ice. Grate cinnamon stick onto drink and then drop in.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 2.5,
        tag: 'red wine',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'pineapple-infused dark rum',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'brown sugar syrup',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'apple cider',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'angostura bitters',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'plum',
        unit: 'wedge'
      },
      {
        amount: 1,
        tag: 'orange',
        unit: 'wheel'
      },
      {
        amount: 2,
        tag: 'cinnamon',
        unit: 'stick'
      }
    ]
  },
  {
    name: 'White Negroni',
    image: 'images/white-negroni.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lemon peel.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'suze',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'vermouth blanc',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Red Tide',
    image: 'images/red-tide.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with orange peel.',
    method: METHODS.STIR,
    season: SEASONS.ELECTION,
    ingredients: [
      {
        amount: 1.5,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'aperol',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'grenadine',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'club soda',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Blue Wave',
    image: 'images/blue-wave.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. No garnish.',
    method: METHODS.STIR,
    season: SEASONS.ELECTION,
    ingredients: [
      {
        amount: 1,
        tag: 'vodka',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'blue curacao',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'club soda',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Pepino Martini',
    instructions: 'Muddle cucumber slices with simple syrup in a shaker. Combine ingredients, shake with ice and strain into a chilled martini glass. Garnish with a cucumber wheel.',
    method: METHODS.SHAKE,
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'ginger liqueur',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'elderflower liqueur',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 3,
        tag: 'cucumber',
        unit: 'slice'
      }
    ]
  },
  {
    name: 'Hot Toddy',
    image: 'images/hot-toddy.jpg',
    instructions: 'Bring water to simmer on stovetop. Combine all in glass mug and stir. Garnish with lemon wheel and cinnamon stick.',
    method: METHODS.STIR,
    season: SEASONS.WINTER,
    ingredients: [
      {
        amount: 1.5,
        tag: 'whiskey',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'honey',
        unit: 'oz'
      },
      {
        amount: 6,
        tag: 'water',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Barbados',
    image: 'images/barbados.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with a lime wedge.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 1.5,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'velvet falernum',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Difford\'s Old Fashioned',
    image: 'images/diffords-old-fashioned.jpg',
    source: 'https://www.diffordsguide.com/cocktails/recipe/1427/old-fashioned-cocktail-diffords-recipe',
    instructions: 'Stir with ice and strain into an ice-filled rocks glass. Garnish with an orange peel.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 1.5,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 0.33,
        tag: 'demerara syrup',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'bokers bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Swedish Glogg',
    image: 'images/swedish-glogg.jpg',
    instructions: 'Combine all ingredients except sugar in an enamel slow-cooker. Let stand for 12 hours, tightly covered. Stir in sugar, heat rapidly to near-boil, and serve hot.',
    method: METHODS.STIR,
    season: SEASONS.WINTER,
    serves: 4,
    ingredients: [
      {
        amount: 16,
        tag: 'dry red wine',
        unit: 'oz'
      },
      {
        amount: 16,
        tag: 'moscatel wine',
        unit: 'oz'
      },
      {
        amount: 4,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 3,
        tag: 'aquavit',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'angostura bitters',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'raisins',
        unit: 'cup',
        notPresentInFinalProduct: true,
      },
      {
        amount: 0.5,
        tag: 'whole blanched peeled almonds',
        unit: 'cup',
        notPresentInFinalProduct: true,
      },
      {
        amount: 1,
        tag: 'orange peel',
        unit: '',
        notPresentInFinalProduct: true,
      },
      {
        amount: 3,
        tag: 'whole cardamoms',
        unit: '',
        notPresentInFinalProduct: true,
      },
      {
        amount: 3,
        tag: 'whole cloves',
        unit: '',
        notPresentInFinalProduct: true,
      },
      {
        amount: 0.5,
        tag: 'ginger root',
        unit: 'inch',
        notPresentInFinalProduct: true,
      },
      {
        amount: 1,
        tag: 'cinnamon',
        unit: 'stick',
        notPresentInFinalProduct: true,
      },
      {
        amount: 4,
        tag: 'sugar',
        unit: 'Tbsp'
      }
    ]
  },
  /*{
    name: 'Corn\'n\'Oil',
    instructions: 'Stir all except blackstrap rum with ice and strain into a chilled rocks glass filled with ice. Float blackstrap rum on top. Garnish with a lime wedge.',
    method: METHODS.STIR,
    inHoldingPen: true,
    ingredients: [
      {
        amount: 2,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'velvet falernum',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'blackstrap rum',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },*/
  {
    name: 'Falernum Manhattan',
    image: 'images/falernum-manhattan.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lime peel.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 2,
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'velvet falernum',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Rattlesnake',
    image: 'images/rattlesnake.jpg',
    instructions: 'Dry shake, then shake with ice and strain into a chilled coupe glass. Express a lemon peel over top and garnish with two drops of bitters pulled through the foam to form a snake.',
    method: METHODS.SHAKE,
    ingredients: [
      {
        amount: 1.75,
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'egg white',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'demerara syrup',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'pastis',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Brown Derby',
    instructions: 'Shake over ice and strain into a chilled cocktail glass. No garnish.',
    method: METHODS.SHAKE,
    source: 'https://www.boston.com/food/food/2021/02/11/how-to-make-a-brown-derby-cocktail-recipe',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'grapefruit juice',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'honey syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Whiskey Smash',
    image: 'images/whiskey-smash.jpg',
    instructions: 'Muddle mint, lemon, and simple syrup. Dry shake with whiskey and strain into a rocks glass filled with crushed ice. Garnish with mint sprig.',
    method: METHODS.SHAKE,
    source: 'The PDT Cocktail Book',
    ingredients: [
      {
        amount: 2,
        tag: 'rye',
        preferred: 'rittenhouse',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 6,
        tag: 'mint',
        unit: 'leaf'
      },
      {
        amount: 3,
        tag: 'lemon',
        unit: 'wedge'
      }
    ]
  },
  {
    name: 'Red Hook',
    image: 'images/red-hook.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with cherry.',
    method: METHODS.STIR,
    source: 'https://robbreport.com/food-drink/spirits/red-hook-cocktail-recipe-rye-whiskey-maraschino-1234596861/',
    season: SEASONS.MANHATTAN,
    ingredients: [
      {
        amount: 2,
        tag: 'rye',
        preferred: 'rittenhouse',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'sweet vermouth',
        preferred: 'punt e mes',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'maraschino liqueur',
        preferred: 'luxardo',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Fort Point',
    image: 'images/fort-point.jpg',
    instructions: 'Stir with ice and strain into a chilled cocktail glass. Garnish with a maraschino cherry.',
    method: METHODS.STIR,
    source: 'https://robbreport.com/food-drink/spirits/drink-boston-232071/',
    season: SEASONS.MANHATTAN,
    ingredients: [
      {
        amount: 2,
        tag: 'rye',
        preferred: 'old overholt',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'sweet vermouth',
        preferred: 'punt e mes',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'benedictine',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Maximilian Affair',
    image: 'images/maximilian-affair.jpg',
    instructions: 'Shake with ice and strain into a chilled vintage coupe glass. No garnish.',
    method: METHODS.SHAKE,
    source: 'https://robbreport.com/food-drink/spirits/drink-boston-232071/',
    ingredients: [
      {
        amount: 1,
        tag: 'mezcal',
        preferred: 'del maguey vida',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'elderflower liqueur',
        preferred: 'st germain',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'sweet vermouth',
        preferred: 'punt e mes',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Mission of Burma',
    image: 'images/mission-of-burma.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Express lime peel over glass. No garnish.',
    method: METHODS.SHAKE,
    source: 'https://robbreport.com/food-drink/spirits/drink-boston-232071/',
    ingredients: [
      {
        amount: 2.25,
        tag: 'triple sec',
        preferred: 'grand marnier',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'angostura bitters',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'gin',
        preferred: 'junipero',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Vodka Gimlet',
    image: 'images/vodka-gimlet.jpg',
    instructions: 'Shake with ice and strain into a chilled cocktail glass. Garnish with a lime wheel.',
    method: METHODS.SHAKE,
    source: 'https://vodkacocktailswithbrothercleve.splashthat.com/',
    ingredients: [
      {
        amount: 2,
        tag: 'vodka',
        preferred: 'hammer and sickle',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Kangaroo',
    image: 'images/kangaroo.jpg',
    instructions: 'Stir with ice and strain into a chilled cocktail glass. Express lemon peel over glass. Garnish with straight trimmed lemon peel.',
    method: METHODS.STIR,
    source: 'https://vodkacocktailswithbrothercleve.splashthat.com/',
    ingredients: [
      {
        amount: 2,
        tag: 'vodka',
        preferred: 'zyr',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'dry vermouth',
        preferred: 'noilly prat extra dry',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Barney Barnato',
    image: 'images/barney-barnato.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with a lemon twist.',
    method: METHODS.STIR,
    source: 'https://www.diffordsguide.com/cocktails/recipe/2274/barney-barnato-cocktail',
    ingredients: [
      {
        amount: 1.5,
        tag: 'cognac',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'kina aromatized wine',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lillet blanc',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'triple sec',
        unit: 'dash'
      },
      {
        amount: 1,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Fallen Leaves',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lemon twist.',
    method: METHODS.STIR,
    source: 'https://www.diffordsguide.com/cocktails/recipe/2652/fallen-leaves',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'apple brandy',
        preferred: 'avallen calvados',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'dry vermouth',
        preferred: 'noilly prat extra dry',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'cognac',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Gustings\' Grasshopper',
    instructions: 'Shake with ice and strain into a chilled cocktail glass. Garnish with mint sprig.',
    method: METHODS.SHAKE,
    source: 'https://www.diffordsguide.com/cocktails/recipe/6850/gustings-grasshopper',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 0.75,
        tag: 'cognac',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'creme de menthe',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'creme de cacao',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'half and half',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'White Lady',
    instructions: 'Shake with ice, then dry shake, and strain into chilled cocktail glass. Garnish with lemon twist.',
    method: METHODS.SHAKE,
    source: 'https://www.diffordsguide.com/cocktails/recipe/2091/white-lady-cocktail',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.33,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'egg white',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Ward Eight',
    image: 'images/ward-eight.jpg',
    instructions: 'Shake with ice and strain into a chilled cocktail glass. Garnish with cherry and orange wedge on a pick.',
    method: METHODS.SHAKE,
    source: 'https://www.diffordsguide.com/cocktails/recipe/2062/ward-eight',
    ingredients: [
      {
        amount: 2,
        tag: 'rye',
        preferred: 'rittenhouse',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'orange juice',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'grenadine',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Comte de Sureau',
    image: 'images/comte-de-sureau.jpg',
    instructions: 'Stir with ice and strain into a chilled rocks glass over ice. Garnish with orange and lemon twists.',
    method: METHODS.STIR,
    source: 'https://www.diffordsguide.com/cocktails/recipe/7257/comte-de-sureau',
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'elderflower liqueur',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'campari',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'McKinley\'s Delight',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lemon twist.',
    method: METHODS.STIR,
    source: 'https://www.diffordsguide.com/cocktails/recipe/7653/mckinleys-delight',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'rye',
        preferred: 'rittenhouse',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'cherry heering',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'absinthe',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Landing Gear',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lemon twist.',
    method: METHODS.STIR,
    source: 'https://www.diffordsguide.com/cocktails/recipe/4913/landing-gear',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1,
        tag: 'cognac',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'triple sec',
        preferred: 'grand marnier',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'dry vermouth',
        preferred: 'extra dry',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'cherry heering',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'maraschino liqueur',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'La Poire des Benedictines',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with pear wedge.',
    method: METHODS.STIR,
    source: 'https://www.diffordsguide.com/cocktails/recipe/3463/la-poire-des-benedictines',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 0.75,
        tag: 'pear vodka',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'benedictine',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'cognac',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'water',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Dartmouth Highball',
    image: 'images/dartmouth-highball.jpg',
    instructions: 'Muddle mint and simple in shaker, dry shake all except ginger beer, and strain into ice-filled collins glass. Top with ginger beer and garnish with mint sprig.',
    method: METHODS.SHAKE,
    source: 'https://pimmscocktails.splashthat.com/',
    ingredients: [
      {
        amount: 1.5,
        tag: 'pimm\'s no. 1',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 4,
        tag: 'mint',
        unit: 'leaf'
      },
      {
        amount: 2,
        tag: 'ginger beer',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Gold Rush',
    instructions: 'Shake all (including grapefruit peel) with ice and strain into an ice-filled rocks glass. Garnish with lemon peel.',
    method: METHODS.SHAKE,
    source: 'https://robbreport.com/food-drink/spirits/gold-rush-recipe-bourbon-whiskey-sour-cocktail-honey-1234590351/',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 2,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'honey syrup',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'grapefruit peel',
        notPresentInFinalProduct: true
      }
    ]
  },
  {
    name: 'Tequila Old Fashioned',
    image: 'images/tequila-old-fashioned.jpg',
    instructions: 'Stir with ice and strain into ice-filled rocks glass. Garnish with orange peel squeezed over drink.',
    method: METHODS.STIR,
    source: 'https://www.youtube.com/watch?v=Cpa66DWr6G4',
    ingredients: [
      {
        amount: 2,
        tag: 'reposado tequila',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'agave nectar',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Midnight Stinger',
    instructions: 'Shake with crushed ice and strain into a rocks glass filled with crushed ice. Garnish with mint sprig.',
    method: METHODS.SHAKE,
    source: 'https://robbreport.com/food-drink/spirits/midnight-stinger-recipe-whiskey-sour-bourbon-fernet-branca-1234601482/',
    ingredients: [
      {
        amount: 1,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'fernet branca',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Laissez Faire',
    image: 'images/laissez-faire.jpg',
    instructions: 'Stir with ice and strain into a chilled nick and nora glass. Optional garnish with cherry.',
    method: METHODS.STIR,
    source: 'Cocktails de Paris Seaport e-book',
    ingredients: [
      {
        amount: 1,
        tag: 'bully boy old fashioned',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'quinquina',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'pineau des charentes',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'benedictine',
        unit: 'oz'
      },
      {
        amount: 4,
        tag: 'peychaud\'s bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Gin Smash',
    image: 'images/gin-smash.jpg',
    instructions: 'Muddle basil, lemon, and simple syrup. Dry shake with gin and strain into a rocks glass filled with crushed ice. Garnish with basil sprig.',
    method: METHODS.SHAKE,
    source: 'Modified from Whiskey Smash recipe in The PDT Cocktail Book',
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'simple syrup',
        unit: 'oz'
      },
      {
        amount: 6,
        tag: 'basil',
        unit: 'leaf'
      },
      {
        amount: 3,
        tag: 'lemon',
        unit: 'wedge'
      }
    ]
  },
  {
    name: 'Ritual Gin & Tonic',
    image: 'images/ritual-gin-and-tonic.jpg',
    instructions: 'Combine in wine glass, add ice, and stir.',
    method: METHODS.STIR,
    ingredients: [
      {
        amount: 2,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 6,
        tag: 'elderflower tonic water',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'cucumber',
        unit: 'slice'
      },
      {
        amount: 1,
        tag: 'lemon',
        unit: 'half wheel'
      },
      {
        amount: 1,
        tag: 'orange',
        unit: 'half wheel'
      }
    ]
  },
  {
    name: 'Negroni',
    image: 'images/negroni.jpg',
    instructions: 'Pour ingredients into ice-filled rocks glass and stir. Garnish with orange twist.',
    method: METHODS.STIR,
    isCoreDrink: true,
    source: 'https://www.diffordsguide.com/cocktails/recipe/1392/negroni-cocktail',
    ingredients: [
      {
        amount: 1,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'campari',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'sweet vermouth',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Brooklyn\'s Finest',
    instructions: 'Stir with ice and strain into a chilled nick and nora glass. Garnish with a lemon zest twist.',
    method: METHODS.STIR,
    source: 'https://www.diffordsguide.com/cocktails/recipe/3875/brooklyns-finest',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1,
        tag: 'cognac',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'rye',
        preferred: 'rittenhouse',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'amaro',
        preferred: 'cardamaro',
        unit: 'oz'
      },
      {
        amount: 0.33,
        tag: 'velvet falernum',
        unit: 'oz'
      },
      {
        amount: 3,
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Caribbean Sazerac',
    instructions: 'Rinse a chilled rocks glass with overproof rum and discard. Shake other ingredients with ice and strain into glass. Rim with orange zest twist and discard.',
    method: METHODS.SHAKE,
    source: 'https://www.diffordsguide.com/cocktails/recipe/5599/caribbean-sazerac',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 0.25,
        tag: 'overproof rum',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'white rum',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'grenadine',
        unit: 'oz'
      },
      {
        amount: 0.25,
        tag: 'velvet falernum',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'orange bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Prestige',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with pineapple wedge and spiral lime peel.',
    method: METHODS.SHAKE,
    source: 'https://www.diffordsguide.com/cocktails/recipe/2550/prestige-cocktail',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'dark rum',
        preferred: 'bacardi 8 year',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'pineapple juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'dry vermouth',
        preferred: 'noilly prat extra dry',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'velvet falernum',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'lime juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Sherry Herbst',
    image: 'images/sherry-herbst.jpg',
    instructions: 'Stir with ice and strain into a chilled, ice-filled rocks glass. Garnish with an orange zest twist.',
    method: METHODS.STIR,
    source: 'https://www.diffordsguide.com/cocktails/recipe/4199/sherry-herbst',
    ingredients: [
      {
        amount: 0.67,
        tag: 'rye',
        preferred: 'rittenhouse',
        unit: 'oz'
      },
      {
        amount: 0.67,
        tag: 'bourbon',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'vermouth amaro',
        preferred: 'punt e mes',
        unit: 'oz'
      },
      {
        amount: 0.33,
        tag: 'velvet falernum',
        unit: 'oz'
      },
      {
        amount: 0.33,
        tag: 'sherry',
        preferred: 'oloroso',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Court Royale',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with lemon wheel and rosemary sprig.',
    method: METHODS.SHAKE,
    source: 'https://imbibemagazine.com/recipe/court-royale-gin-cocktail/',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lillet blanc',
        unit: 'oz'
      },
      {
        amount: 0.75,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'apple brandy',
        preferred: 'applejack',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Duplex',
    instructions: 'Stir with ice and strain into a chilled nick and nora glass. Garnish with lemon twist.',
    method: METHODS.STIR,
    source: 'https://kindredcocktails.com/cocktail/duplex-punt-e-mes-and-lillet',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 1.25,
        tag: 'sweet vermouth',
        preferred: 'punt e mes',
        unit: 'oz'
      },
      {
        amount: 1.25,
        tag: 'dry vermouth',
        preferred: 'lillet blanc', // maybe cocchi americano instead?
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'orange bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Sherry Flip',
    image: 'images/sherry-flip.jpg',
    instructions: 'Dry shake, then shake with ice and strain into a chilled nick and nora glass. Garnish with grated nutmeg.',
    methods: METHODS.SHAKE,
    source: 'Cocktail Codex book',
    ingredients: [
      {
        amount: 2,
        tag: 'sherry',
        preferred: 'oloroso',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'demerara syrup',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'whole egg'
      }
    ],
    
  }

  // SUPER X - tito's vodka, kina l'aero d'or, velvet falernum, lemon
  // source: Pabu cocktail menu

  // Pegu Club, Colleen Bawn, Mamie Taylor
  // French Pearl
  // Dark and Stormy
  // Cuarto Vides by John McCarthy, with Pisco Portón, Cappelletti, Carpano Bianco, Verjus and seltzer.
  // White Negroni (Day for Night at Paris, with cucumber garnish)
];
