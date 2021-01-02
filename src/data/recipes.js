import {SEASONS} from '../constants';

export default [
  {
    name: 'Winter in Rome',
    image: 'images/winter-in-rome.jpg',
    instructions: 'Put sphere of ice into stirring glass. Combine ingredients in stirring glass. Stir 50 times with barspoon. Transfer sphere of ice into rocks glass. Pour drink into rocks glass. Serve and enjoy!',
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
    instructions: 'Combine all ingredients over a sphere of ice in a mixing glass. Stir with a barspoon until chilled. Move the ice sphere into a rocks glass. Pour over the ice into the glass.',
    rating: 5,
    season: SEASONS.WINTER,
    dateVerified: '2019-09-27',
    verified: true,
    ingredients: [
      {
        amount: 0.75,
        preferred: 'old overholt',
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 0.75,
        preferred: 'dolin',
        tag: 'sweet vermouth',
        unit: 'oz'
      },
      {
        amount: 0.75,
        preferred: 'courvoisier',
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
    dateVerified: '2019-05-26',
    verified: true,
    ingredients: [
      {
        amount: 2,
        preferred: 'don julio',
        tag: 'blanco tequila',
        unit: 'oz'
      },
      {
        amount: 0.75,
        preferred: 'grand marnier',
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
    dateVerified: '2019-09-08',
    verified: true,
    ingredients: [
      {
        amount: 2,
        preferred: 'tito\'s',
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
    instructions: 'Warm up the sake on the stove. Combine all other ingredients in a heatproof glass, then pour in the sake. Garnish with lemon (optional) and ground cloves.',
    season: SEASONS.WINTER,
    inHoldingPen: true,
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
        preferred: 'yellow chartreuse',
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
    season: SEASONS.SUMMER,
    dateVerified: '2012-07-07',
    verified: true,
    ingredients: [
      {
        amount: 1,
        preferred: 'bacardi',
        tag: 'light rum',
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
    rating: 5,
    dateVerified: '2020-04-26',
    verified: true,
    ingredients: [
      {
        amount: 1.5,
        preferred: 'tito\'s',
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
        preferred: 'angostura bitters',
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Vodka Martini',
    image: 'images/vodka-martini.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lemon peel.',
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
    dateVerified: '2020-05-02',
    verified: true,
    ingredients: [
      {
        amount: 2,
        preferred: 'macchu pisco',
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
    season: SEASONS.WINTER,
    ingredients: [
      {
        amount: 1,
        tag: 'dark rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'light rum',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'lime juice',
        unit: 'oz'
      },
      {
        amount: 0.5,
        preferred: 'allspice dram',
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
        preferred: 'lillet blanc',
        tag: 'lillet blanc',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Tuxedo',
    image: 'images/tuxedo.jpg',
    instructions: 'Stir with ice and strain into a chilled, absinthe-rinsed coupe glass. Garnish with a lemon twist and a cherry.',
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
        preferred: 'luxardo',
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
        preferred: 'campari',
        tag: 'campari',
        unit: 'oz'
      },
      {
        amount: 1,
        preferred: 'angostura bitters',
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'Improved Whiskey Cocktail',
    image: 'images/improved-whiskey-cocktail.jpg',
    instructions: 'Stir with ice and strain over one large cube into a chilled, absinthe-rinsed rocks glass. Garnish with a lemon twist.',
    rating: 5,
    dateVerified: '2020-05-10',
    verified: true,
    ingredients: [
      {
        amount: 2,
        preferred: 'old overholt',
        tag: 'rye',
        unit: 'oz'
      },
      {
        amount: 0.25,
        preferred: 'luxardo',
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
        preferred: 'angostura bitters',
        tag: 'angostura bitters',
        unit: 'dash'
      }
    ]
  },
  {
    name: 'El Diablo',
    image: 'images/el-diablo.jpg',
    instructions: 'Shake with ice and strain into chilled rocks glass. Garnish with a lemon wheel.',
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
    rating: 5,
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
        preferred: 'combier',
        tag: 'triple sec',
        unit: 'oz'
      },
      {
        amount: 0.5,
        preferred: 'bully boy',
        tag: 'amaro',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'May Daisy', // less simple syrup, add club soda? needs less syrupy and more fizz
    image: 'images/may-daisy.jpg',
    instructions: 'Shake with ice and strain into a chilled wine glass filled with ice. Garnish with a mint sprig.',
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
  },
  {
    name: 'Mary Pickford',
    image: 'images/mary-pickford.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. No garnish.',
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
        tag: 'light rum',
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
    dateVerified: '2012-03-10',
    verified: true,
    ingredients: [
      {
        amount: 2.25,
        tag: 'light rum',
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
    instructions: 'Add to a chilled wine glass filled with ice. Stir and garnish with half an orange wheel.',
    season: SEASONS.SUMMER,
    rating: 5,
    dateVerified: '2020-06-24',
    verified: true,
    inHoldingPen: true,
    ingredients: [
      {
        amount: 2,
        tag: 'aperol',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'prosecco',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'club soda',
        unit: 'oz'
      },
      {
        amount: 0.5,
        tag: 'orange juice',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Bronx',
    image: 'images/bronx.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with an orange twist.',
    dateVerified: '2020-07-02',
    verified: true,
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
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
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'orange juice',
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
    ingredients: [
      {
        amount: 1,
        tag: 'bourbon',
        preferred: 'bulleit',
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
        preferred: 'scrappy\'s',
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
    ingredients: [
      {
        amount: 1.5,
        tag: 'gin',
        unit: 'oz'
      },
      {
        amount: 1.5,
        tag: 'cocchi americano',
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
  {
    name: 'Nor\'easter',
    image: 'images/noreaster.jpg',
    instructions: 'Shake with ice without ginger beer and strain into a chilled collins glass filled with ice. Top with ginger beer. Garnish with a sage leaf.',
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
  },
  {
    name: 'Apple Cinner',
    image: 'images/apple-cinner.jpg',
    instructions: 'Shake with ice and strain into a chilled coupe glass. Garnish with a cinnamon stick.',
    season: SEASONS.AUTUMN,
    ingredients: [
      {
        amount: 1,
        tag: 'apple brandy',
        unit: 'oz'
      },
      {
        amount: 1,
        tag: 'short path autumn amaro',
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
    name: 'Pimms Cup',
    instructions: 'Muddle cucumber and simple in shaker. Add remaining ingredients, shake with ice, and strain into a chilled Collins glass filled with ice. Garnish with a cucumber wheel.',
    inHoldingPen: true,
    ingredients: [
      {
        amount: 2,
        tag: 'pimms #1 cup',
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
        tag: 'cinnamon sticks',
        unit: ''
      }
    ]
  },
  {
    name: 'White Negroni',
    image: 'images/white-negroni.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lemon peel.',
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
    season: SEASONS.WINTER,
    ingredients: [
      {
        amount: 1.5,
        tag: 'whiskey',
        preferred: 'bulleit bourbon',
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
    name: 'Old Difford',
    image: 'images/old-difford.jpg',
    instructions: 'Stir with ice and strain into an ice-filled rocks glass. Garnish with an orange peel.',
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
        tag: 'cinnamon stick',
        unit: '',
        notPresentInFinalProduct: true,
      },
      {
        amount: 4,
        tag: 'sugar',
        unit: 'Tbsp'
      }
    ]
  },
  {
    name: 'Corn\'n\'Oil',
    instructions: 'Stir all except blackstrap rum with ice and strain into a chilled rocks glass filled with ice. Float blackstrap rum on top. Garnish with a lime wedge.',
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
  },
  {
    name: 'Falernum Manhattan',
    image: 'images/falernum-manhattan.jpg',
    instructions: 'Stir with ice and strain into a chilled coupe glass. Garnish with lime peel.',
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
    name: 'Quarantini',
    instructions: 'Shake with ice and strain into a chilled martini glass rimmed with Vitamin C powder. Garnish with a lemon twist.',
    ingredients: [
      {
        amount: 3,
        tag: 'vodka',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'lemon juice',
        unit: 'oz'
      },
      {
        amount: 2,
        tag: 'honey simple syrup',
        unit: 'oz'
      }
    ]
  },
  {
    name: 'Rattlesnake',
    image: 'images/rattlesnake.jpg',
    instructions: 'Dry shake, then shake with ice and strain into a chilled coupe glass. Express a lemon peel over top and garnish with two drops of bitters pulled through the foam to form a snake.',
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
  }

  // Pegu Club, Colleen Bawn, Mamie Taylor
  // French Pearl
  // Dark and Stormy
  // Cuarto Vides by John McCarthy, with Pisco Portón, Cappelletti, Carpano Bianco, Verjus and seltzer.
  // White Negroni (Day for Night at Paris, with cucumber garnish)
];
