const PB_DATA = [
  {
    id: 1,
    title: 'Beaches',
    items: [
      {
        id: 51,
        name: 'Law St',
        type: 'Surf, Sunset, Yoga',
        address: '4800 Ocean Blvd',
        mapLink: 'http://maps.apple.com/?address=4800,Ocean+Blvd,San+Diego,California',
        linkUrl: 'https://www.yelp.com/biz/law-street-san-diego?osq=law+st+beach'
      },
      {
        id: 52,
        name: 'Crystal Pier',
        type: 'Free, Great Views, Fishing',
        address: '4500 Ocean Blvd',
        mapLink: 'http://maps.apple.com/?address=4500,Ocean+Blvd,San+Diego,California',
        linkUrl: 'https://www.yelp.com/biz/crystal-pier-san-diego?osq=crystal+pier'
      },
      {
        id: 53,
        name: 'Diamond St',
        type: 'Sand, Swim, Boardwalk access',
        address: '610 Diamond St',
        mapLink: 'http://maps.apple.com/?address=610,Diamond+St,San+Diego,California',
        linkUrl: 'https://www.tripadvisor.com/ShowTopic-g60750-i41-k2664139-Diamond_Street_Pacific_Beach-San_Diego_California.html'
      },
      {
        id: 54,
        name: 'Grand Ave',
        type: 'Sand, Surf, Swim, Boardwalk access',
        address: '700 Grand Ave',
        mapLink: 'http://maps.apple.com/?address=700,Grand+Ave,San+Diego,California',
        linkUrl: 'https://pacificbeach.org'
      }
    ]
  },
  {
    id: 2,
    title: 'Rentals',
    items: [
      {
        id: 51,
        name: 'Ray\'s Rentals',
        type: 'Bikes, Boards, Blades, Water Gear',
        address: '4655 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=4655,Mission+Blvd,San+Diego,California',
        linkUrl: 'http://www.rays-rentals.com'
      },
      {
        id: 52,
        name: 'PB Surf Shop',
        type: 'Rentals & Gear, Lessons',
        address: '4208 Oliver Ct',
        mapLink: 'http://maps.apple.com/?address=4208,Oliver+Ct,San+Diego,California',
        linkUrl: 'http://www.pbsurfshop.com'
      }
    ]
  },
  {
    id: 3,
    title: 'Breweries',
    items: [
      {
        id: 51,
        name: 'PB Ale House',
        type: 'Craft Beers & Full Menu',
        address: '721 Grand Ave',
        mapLink: 'http://maps.apple.com/?address=721,Grand+Ave,San+Diego,California',
        linkUrl: 'https://pbalehouse.com/'
      },
      {
        id: 52,
        name: 'Tap Room',
        type: 'Craft Beer, Cider, Kombucha',
        address: '1269 Garnet Ave',
        mapLink: 'http://maps.apple.com/?address=1269,Garnet+Ave,San+Diego,California',
        linkUrl: 'https://sdtaproom.com/'
      },
      {
        id: 53,
        name: 'Iron Pig Alehouse',
        type: 'Craft Beer & Texas BBQ',
        address: '1520 Garnet Ave',
        mapLink: 'http://maps.apple.com/?address=1520,Garnet+Ave,San+Diego,California',
        linkUrl: 'http://ironpigalehouse.com/'
      },
      {
        id: 54,
        name: 'Amplified Ale Works',
        type: 'Brewpub & Mediterranean',
        address: '4150 Mission Blvd Ste 208',
        mapLink: 'http://maps.apple.com/?address=4150,Mission+Blvd+Ste+208,San+Diego,California',
        linkUrl: 'https://amplifiedales.com/'
      }
    ]
  },
  {
    id: 4,
    title: 'Restaurants',
    items: [
      {
        id: 51,
        name: 'Kono\'s',
        price: '$ Casual',
        type: 'Breakfast Burrito\'s',
        address: '704 Garnet Ave',
        mapLink: 'http://maps.apple.com/?address=704,Garnet+Ave,San+Diego,California',
        linkUrl: 'http://www.konoscafe.com'
      },
      {
        id: 52,
        name: 'Bare Back Grill',
        price: '$$ Casual',
        type: 'Bar, New Zealand',
        address: '4640 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=4640,Mission+Blvd,San+Diego,California',
        linkUrl: 'https://barebackgrill.com/'
      },
      {
        id: 53,
        name: 'Dirty Birds',
        price: '$$ Casual',
        type: 'Bar, Chicken Wings',
        address: '4656 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=4656,Mission+Blvd,San+Diego,California',
        linkUrl: 'https://www.dirtybirdsbarandgrill.com/'
      },
      {
        id: 54,
        name: 'Taco Surf',
        price: '$ Casual',
        type: 'Mexican',
        address: '4657 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=4657,Mission+Blvd,San+Diego,California',
        linkUrl: 'https://www.tacosurftacoshop.com/'
      },
      {
        id: 55,
        name: 'Oscar\'s',
        price: '$ Casual',
        type: 'Mexican Taco\'s',
        address: '746 Emerald St',
        mapLink: 'http://maps.apple.com/?address=746,Emerald+St,San+Diego,California',
        linkUrl: 'http://www.oscarsmexicanseafood.com/emerald/'
      },
      {
        id: 56,
        name: 'Breakfast Republic',
        price: '$$ Casual',
        type: 'Breakfast & Brunch',
        address: '4465 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=4465,Mission+Blvd,San+Diego,California',
        linkUrl: 'https://www.breakfastrepublic.com/'
      },
      {
        id: 57,
        name: 'El Prez',
        price: '$$ Casual',
        type: 'Bar, Mexican',
        address: '4190 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=4190,Mission+Blvd,San+Diego,California',
        linkUrl: 'https://www.elprezpb.com/'
      },
      {
        id: 58,
        name: 'Baked Bear',
        price: '$$ Casual',
        type: 'Ice Cream, Desserts',
        address: '4516 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=4516,Mission+Blvd,San+Diego,California',
        linkUrl: 'https://www.thebakedbear.com/pacificbeach/'
      },
      {
        id: 59,
        name: 'The Fishery',
        price: '$$ Casual',
        type: 'Seafood',
        address: '5040 Cass St',
        mapLink: 'http://maps.apple.com/?address=5040,Cass+St,San+Diego,California',
        linkUrl: 'https://www.thefishery.com/'
      },
      {
        id: 60,
        name: 'Ichiban PB',
        price: '$ Casual',
        type: 'Sushi, Japanese',
        address: '1441 Garnet Ave',
        mapLink: 'http://maps.apple.com/?address=1441,Garnet+Ave,San+Diego,California',
        linkUrl: 'https://www.yelp.com/biz/ichiban-pb-san-diego?osq=ichi+ban'
      },
      {
        id: 61,
        name: 'The Grass Skirt',
        price: '$$ Casual',
        type: 'Tiki Bar, Poke',
        address: '910 Grand Ave',
        mapLink: 'http://maps.apple.com/?address=910,Grand+Ave,San+Diego,California',
        linkUrl: 'https://www.thegrassskirt.com/'
      }
    ]
  }
];


export default PB_DATA;


