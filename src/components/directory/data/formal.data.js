const FORMAL_DATA = [
  {
    id: 1,
    title: 'Downtown',
    items: [
      {
        id: 51,
        name: 'Nobu',
        type: 'Asian Fusion, Sushi',
        address: '207 5th Ave',
        mapLink: 'http://maps.apple.com/?address=207,Fifth+Ave,San+Diego,California',
        linkUrl: 'https://www.noburestaurants.com/sandiego/home/'
      },
      {
        id: 52,
        name: 'Mister A\'s',
        type: 'American, Cocktail Bar',
        address: '2550 5th Ave Fl 12',
        mapLink: 'http://maps.apple.com/?address=2550,Fifth+Ave,San+Diego,California',
        linkUrl: 'https://www.asrestaurant.com/'
      },
      {
        id: 53,
        name: 'STK Steakhouse',
        type: 'American, Lounge',
        address: '600 F St',
        mapLink: 'http://maps.apple.com/?address=600,F+St,San+Diego,California',
        linkUrl: 'https://stksteakhouse.com/venues/san-diego/'
      },
      {
        id: 54,
        name: 'Juniper & Ivy',
        type: 'Tapas/Small Plates, Bar',
        address: '2228 Kettner Blvd',
        mapLink: 'http://maps.apple.com/?address=2228,Kettner+Blvd,San+Diego,California',
        linkUrl: 'https://www.juniperandivy.com/'
      }
    ]
  },
  {
    id: 2,
    title: 'North Park',
    items: [
      {
        id: 51,
        name: 'Soichi Sushi',
        type: 'Japanese, Seafood',
        address: '2121 Adams Ave',
        mapLink: 'http://maps.apple.com/?address=2121,Adams+Ave,San+Diego,California',
        linkUrl: 'https://www.soichisushi.com/'
      }
    ]
  },
  {
    id: 3,
    title: 'Coronado',
    items: [
      {
        id: 51,
        name: 'Stake Chophouse & Bar',
        type: 'Wine Bar, Seafood, Steakhouse',
        address: '1309 Orange Ave',
        mapLink: 'http://maps.apple.com/?address=1309,Orange+Ave,Coronado,California',
        linkUrl: 'https://stakechophousesd.com/y-reservations/?utm_source=paidad&utm_medium=cpc&utm_campaign=yelpad'
      },
      {
        id: 52,
        name: 'Peohe\'s',
        type: 'Seafood, Sushi Bar',
        address: '1201 1st St',
        mapLink: 'http://maps.apple.com/?address=1201,First+St,Coronado,California',
        linkUrl: 'https://www.peohes.com/'
      }
    ]
  },
  {
    id: 4,
    title: 'Point Loma',
    items: [
      {
        id: 51,
        name: 'Humphrey\'s',
        type: 'Seafood, American',
        address: '2241 Shelter Island Dr',
        mapLink: 'http://maps.apple.com/?address=2241,Shelter+Island+Dr,San+Diego,California',
        linkUrl: 'http://humphreysrestaurant.com/'
      },
      {
        id: 52,
        name: 'Tom Ham\'s Lighthouse',
        type: 'Seafood',
        address: '2150 Harbor Island Dr',
        mapLink: 'http://maps.apple.com/?address=2150,Harbor+Island+Dr,San+Diego,California',
        linkUrl: 'https://www.tomhamslighthouse.com/'
      }
    ]
  },
  {
    id:5,
    title: 'Mission Beach',
    items: [
      {
        id:51,
        name: 'Tidal',
        type: 'Seafood, Bar, Brunch',
        address: '1404 Vacation Rd',
        mapLink: 'http://maps.apple.com/?address=1404,Vacation+Rd,San+Diego,California',
        linkUrl: 'https://paradisepoint.com/san-diego-dining/mission-bay-restaurant/'
      }
    ]
  },
  {
    id: 6,
    title: 'Pacific Beach',
    items: [
      {
        id: 51,
        name: 'JRDN Restaurant',
        type: 'American, Brunch, Beer Bar',
        address: '723 Felspar St',
        mapLink: 'http://maps.apple.com/?address=723,Felspar+St,San+Diego,California',
        linkUrl: 'https://www.t23hotel.com/jrdn/'
      },
      {
        id: 52,
        name: 'Oceana Coastal Kitchen',
        type: 'Sushi, Seafood, American',
        address: '3999 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=3999,Mission+Blvd,San+Diego,California',
        linkUrl: 'https://www.oceanacoastalkitchen.com'
      }
    ]
  },
  {
    id: 7,
    title: 'La Jolla',
    items: [
      {
        id: 51,
        name: 'Cusp Dining & Drinks',
        type: 'Bar, Seafood, Italian',
        address: '7955 La Jolla Shores Dr',
        mapLink: 'http://maps.apple.com/?address=7955,La+Jolla+Shores+Dr,La+Jolla,California',
        linkUrl: 'http://www.cusprestaurant.com/'
      },
      {
        id: 52,
        name: 'The Marine Room',
        type: 'French, Seafood',
        address: '2000 Spindrift Dr',
        mapLink: 'http://maps.apple.com/?address=2000,Spindrift+Dr,La+Jolla,California',
        linkUrl: 'https://www.marineroom.com/'
      },
      {
        id: 53,
        name: 'Eddie V\'s Prime Seafood',
        type: 'Seafood, Steakhouse',
        address: '1270 Prospect St',
        mapLink: 'http://maps.apple.com/?address=1270,Prospect+St,La+Jolla,California',
        linkUrl: 'https://www.eddiev.com/locations/ca/la-jolla/la-jolla/8511?cmpid=br:ev_ag:ie_ch:dry_ca:EVYELP_sn:yelp_gt:la-jolla-ca-8511_pl:locurl_rd:1010'
      },
    ]
  },
  {
    id: 8,
    title: 'Mission Valley',
    items: [
      {
        id: 51,
        name: 'Benihana',
        type: 'Japanese',
        address: '477 Camino Del Rio S',
        mapLink: 'http://maps.apple.com/?address=477,Camino+Del+Rio+S,San+Diego,California',
        linkUrl: 'https://www.benihana.com/locations/sandiego-ca-sd/'
      },
      {
        id: 52,
        name: 'The Dinner Detective',
        type: 'Dinner Theater',
        address: '950 Hotel Cir N',
        mapLink: 'http://maps.apple.com/?address=950,Hotel+Cir+N,San+Diego,California',
        linkUrl: 'https://www.thedinnerdetective.com/'
      }
    ]
  },
  {
    id: 9,
    title: 'Kearney Mesa',
    items: [
      {
        id: 51,
        name: 'Matoi',
        type: 'Sushi Bar, Japanese',
        address: '4212 Convoy St',
        mapLink: 'http://maps.apple.com/?address=4212,Convoy+St,San+Diego,California',
        linkUrl: 'https://www.matoisandiego.com/'
      },
      {
        id: 52,
        name: 'Hidden Fish',
        type: 'Sushi Bar, Japanese',
        address: '4764 Convoy St',
        mapLink: 'http://maps.apple.com/?address=4764,Convoy+St,San+Diego,California',
        linkUrl: 'https://www.hiddenfishsushi.com/'
      },
      {
        id: 53,
        name: 'The Butcher Shop Steakhouse',
        address: '5255 Kearny Villa Rd',
        mapLink: 'http://maps.apple.com/?address=5255,Kearny+Villa+Rd,San+Diego,California',
        linkUrl: 'https://www.butchershopsandiego.com/'
      },
      {
        id: 54,
        name: 'SHABUMi',
        type: 'Hot Pot, Korean BBQ',
        address: '5667 Balboa Ave',
        mapLink: 'http://maps.apple.com/?address=5667,Balboa+Ave,San+Diego,California',
        linkUrl: 'https://www.yelp.com/biz/shabumi-san-diego-2?osq=Restaurants'
      }
    ]
  }
];

export default FORMAL_DATA;


