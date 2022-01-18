const BARS_DATA = [
  {
    id: 1,
    title: 'Downtown',
    items: [
      {
        id: 51,
        name: 'Altitude',
        type: 'Rooftop Bar',
        address: '660 K Street',
        linkUrl: 'https://altitudeskylounge.com/sandiego/'
      },
      {
        id: 52,
        name: 'Werewolf',
        type: 'American Pub',
        address: '627 Fourth Ave',
        linkUrl: 'http://www.thewerewolf.net/'
      },
      {
        id: 53,
        name: 'False Idol',
        type: 'Tiki Bar',
        address: '675 W Beech St',
        linkUrl: 'https://falseidoltiki.com/'
      },
      {
        id: 54,
        name: 'Bar Moxy',
        type: 'Cocktail Bar',
        address: '831 6th Ave',
        linkUrl: 'https://www.yelp.com/biz/bar-moxy-san-diego'
      }
    ]
  },
  {
    id: 2,
    title: 'North Park',
    items: [
      {
        id: 51,
        name: 'One Door North',
        type: 'Bar & Eatery',
        address: '3422 30th St',
        linkUrl: 'http://www.onedoornorthsd.com/'
      },
      {
        id: 52,
        name: 'Park & Rec',
        type: 'Cocktail Bar, Lounge',
        address: '4612 Park Blvd',
        linkUrl: 'http://parkandrecsd.com/'
      },
      {
        id: 53,
        name: 'insideOUT',
        type: 'Cocktail Bar, Mediterranean',
        address: '1642 University Ave Ste 100',
        linkUrl: 'https://insideoutsd.com/'
      },
      {
        id: 54,
        name: 'Louisiana Purchase',
        type: 'Cocktail Bar, Cajun/Creole',
        address: '2305 University Ave',
        linkUrl: 'https://www.louisianapurchasesd.com/'
      }
    ]
  },
  {
    id: 3,
    title: 'Coronado',
    items: [
      {
        id: 51,
        name: 'McP\'s Irish Pub',
        address: '1107 Orange Ave',
        linkUrl: 'http://mcpspub.com/'
      },
      {
        id: 52,
        name: 'The Little Club',
        type: 'Dive Bar',
        address: '132 Orange Ave',
        linkUrl: 'https://www.yelp.com/biz/the-little-club-coronado'
      },
      {
        id: 53,
        name: 'Babcock & Story',
        type: 'Cocktail Bar',
        address: '1500 Orange Ave',
        linkUrl: 'https://hoteldel.com/dine/babcock-and-story-bar/'
      },
      {
        id: 54,
        name: 'Sun Deck',
        type: 'Cocktail Bar',
        address: '1500 Orange Ave',
        linkUrl: 'https://hoteldel.com/dine/sun-deck/'
      }
    ]
  },
  {
    id: 4,
    title: 'Point Loma',
    items: [
      {
        id: 51,
        name: 'Vessel',
        type: 'Bar, Seafood',
        address: '1551 Shelter Island Dr',
        linkUrl: 'https://www.resortkonakai.com/shelter-island-restaurant/'
      },
      {
        id: 52,
        name: 'Blue Wave',
        type: 'Bar & Grill',
        address: '2051 Shelter Island Dr',
        linkUrl: 'https://www.islandpalms.com/dining'
      },
      {
        id: 53,
        name: 'Eppig Brewing',
        type: 'Biergarten',
        address: '2817 Dickens St',
        linkUrl: 'http://www.eppigbrewing.com/'
      },
      {
        id: 54,
        name: 'Harbor Town',
        type: 'Pub',
        address: '1125 Rosecrans St',
        linkUrl: 'https://www.harbortownpub.com/'
      }
    ]
  },
  {
    id: 5,
    title: 'Ocean Beach',
    items: [
      {
        id: 51,
        name: 'OB Brewery',
        type: 'Gastropub',
        address: '5041 Newport Ave',
        linkUrl: 'https://www.obbrewingco.com/'
      },
      {
        id: 52,
        name: 'Pacific Shores',
        type: 'Dive Bar, Lounge',
        address: '4927 Newport Ave',
        linkUrl: 'https://www.yelp.com/biz/pacific-shores-san-diego-2'
      },
      {
        id: 53,
        name: 'Wonderland Ocean Pub',
        type: 'Sports Bar',
        address: '5083 Santa Monica Ave Ste 2C',
        linkUrl: 'https://wonderlandob.com/'
      },
      {
        id: 54,
        name: 'Kilowatt',
        type: 'Beer Bar',
        address: '1875 Cable St',
        linkUrl: 'https://kilowatt.beer/'
      }
    ]
  },
  {
    id: 6,
    title: 'Mission Beach',
    items: [
      {
        id: 51,
        name: 'Draft',
        type: 'Sports Bar, American',
        address: '3105 Ocean Front Walk',
        linkUrl: 'https://www.draftsandiego.com/'
      },
      {
        id: 52,
        name: 'Coaster Saloon',
        type: 'Sports Bar, BBQ',
        address: '744 Ventura Pl',
        linkUrl: 'https://www.cohnrestaurants.com/coastersaloon'
      },
      {
        id: 53,
        name: 'Beach House Grill',
        type: 'American, Music Venue',
        address: '3125 Ocean Front Walk',
        linkUrl: 'https://www.beachhousesd.com/'
      },
      {
        id: 54,
        name: 'Single Fin Surf Grill',
        type: 'American, Fish & Chips',
        address: '3844 Mission Blvd',
        linkUrl: 'https://www.singlefinfeeds.com/'
      }
    ]
  },
  {
    id: 7,
    title: 'Pacific Beach',
    items: [
      {
        id: 51,
        name: 'Waterbar',
        type: 'Cocktail Bar, Seafood',
        address: '4325 Ocean Blvd',
        linkUrl: 'https://www.waterbarsd.com/'
      },
      {
        id: 52,
        name: 'The Grass Skirt',
        type: 'Tiki Lounge',
        address: '910 Grand Ave',
        linkUrl: 'https://www.thegrassskirt.com/'
      },
      {
        id: 53,
        name: 'PB Shore Club',
        type: 'Bar, Seafood',
        address: '4343 Ocean Blvd',
        linkUrl: 'https://www.pbshoreclub.com/'
      },
      {
        id: 54,
        name: 'El Prez',
        type: 'Beach Bar & Cocina',
        address: '4190 Mission Blvd',
        linkUrl: 'https://www.elprezpb.com/'
      }
    ]
  },
  {
    id: 8,
    title: 'La Jolla',
    items: [
      {
        id: 51,
        name: 'Nautilus Tavern',
        type: 'Sports Bar',
        address: '6830 La Jolla Blvd',
        linkUrl: 'https://nautilus-tavern.com/'
      },
      {
        id: 52,
        name: 'The Spot',
        type: 'Sports Bar',
        address: '1005 Prospect St',
        linkUrl: 'https://thespotonline.com/'
      },
      {
        id: 53,
        name: 'Hennessey\'s Tavern',
        type: 'Irish',
        address: '7811 Herschel Ave',
        linkUrl: 'https://www.hennesseystavern.com/locations-la-jolla'
      },
      {
        id: 54,
        name: 'Shore Rider',
        type: 'Cocktail Bar, Seafood, Burgers',
        address: '2168 Avenida De La Playa',
        linkUrl: 'http://www.shoreridersd.com/'
      }
    ]
  },
  {
    id: 9,
    title: 'Mission Valley',
    items: [
      {
        id: 51,
        name: 'Yard House',
        type: 'Bar, Vegetarian',
        address: '1640 Camino Del Rio N Ste 157',
        linkUrl: 'https://www.yardhouse.com/locations/ca/san-diego/san-diego-mission-valley-mall/8363?cmpid=br:yh_ag:ie_ch:dryppc_ca:YHQ322YELPADCOREAON_dt:20211201_sn:yelp_pl:adclick_rd:1001'
      },
      {
        id: 52,
        name: 'TBS Tavern',
        type: 'Bar, Tacos',
        address: '8555 Station Village Way',
        linkUrl: 'https://tbstavern.com/'
      }
    ]
  },
  {
    id: 10,
    title: 'Kearney Mesa',
    items: [
      {
        id: 51,
        name: 'Ketch Brewing',
        type: 'Tasting Room',
        address: '7889 Ostrow St',
        linkUrl: 'https://www.yelp.com/biz/ketch-brewing-san-diego'
      },
      {
        id: 52,
        name: 'Common Theory',
        type: 'Gastropub',
        address: '4805 Convoy St',
        linkUrl: 'https://www.commontheorysd.com/'
      },
      {
        id: 53,
        name: 'Realm of the 52',
        type: 'Inside Common Theory',
        address: '4805 Convoy St',
        linkUrl: 'https://www.52remedies.com/'
      },
      {
        id: 54,
        name: 'Cross St',
        type: 'Beer Bar, Korean',
        address: '4403 Convoy St',
        linkUrl: 'https://crossstreetcnb.com/'
      }
    ]
  }
];


export default BARS_DATA;


