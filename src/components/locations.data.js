const LOCATIONS_DATA = [
  {
    id: 1,
    title: 'ATTRACTIONS',
    imageUrl: 'https://i.ibb.co/R0hksNn/zoo.jpg',
    cardImageUrl: 'https://i.ibb.co/R0hksNn/zoo.jpg',
    items: [
      {
        id: 11,
        name: 'SeaWorld',
        price: 'Avg Price $100',
        address: '500 SeaWorld Dr', 
        mapLink: 'http://maps.apple.com/?address=500,SeaWorld+Dr,San+Diego,California',
        linkUrl: 'https://seaworld.com/san-diego/',
        imageUrl: 'https://i.ibb.co/VM35ZZp/attractionpark.jpg',
        description: 'Seaworld is a marine mammal park where guests can watch live shows featuring sea lions, dolphins, and orca whales. There are also interactive exhibits for guests to have a personal experience with the animals. In addition to marine education, there are rides and rollercoasters for all ages. '
      },
      {
        id: 12,
        name: 'San Diego Zoo',
        price: 'Avg Price $67',
        address: '2920 Zoo Dr', 
        mapLink: 'http://maps.apple.com/?address=2920,Zoo+Dr,San+Diego,California',
        linkUrl: 'https://zoo.sandiegozoo.org/',
        imageUrl: 'https://i.ibb.co/xzwhytB/zoosd.jpg',
        description: 'At San Diego\'s world famous zoo you can see 650 species/subspecies of animals from all over the world. There is also a botanical garden for guests to explore. This attraction involves a lot of walking to see the park, however they do offer a Guided Bus Tour and a shuttle service.'
      },
      {
        id: 13,
        name: 'Zoo Safari Park',
        price: 'Avg Price $67',
        address: '15500 San Pasqual Valley Rd', 
        mapLink: 'http://maps.apple.com/?address=15500,San+Pasqual+Valley+Rd,San+Diego,California',
        linkUrl: 'https://sdzsafaripark.org/',
        imageUrl: 'https://i.ibb.co/b55GpYS/safaripark.jpg',
        description: 'An 1,800 acre zoo in the San Pasqual Valley, this is one of San Diego\'s largest tourist attractions. The safari park uniquely allows their animals to roam freely in a more natural habitat which is also featured in their interactive safari driving tour. Like the Zoo, the Safari Park involves a lot of walking.'
      },
      {
        id: 14,
        name: 'Legoland',
        price: 'Avg Price $90',
        address: '1 Legoland Dr',
        mapLink: 'http://maps.apple.com/?address=1,Legoland+Dr,San+Diego,California',
        linkUrl: 'https://www.legoland.com/california/',
        imageUrl: 'https://i.ibb.co/KK6ydXZ/legoland.jpg',
        description: 'This Lego toy theme park is located in Carlsbad, only 30 minutes from the airport. This attraction is a resort, theme park, and aquarium which opened in 1999. This is one of San Diego\'s most popular theme parks making it enjoyable for kids, but also adults. The park is filled with more than 60 rides.'
      },
      {
        id: 15,
        name: 'Belmont Park',
        price: 'Avg Price $30',
        address: '3146 Mission Blvd',
        mapLink: 'http://maps.apple.com/?address=3146,Mission+Blvd,San+Diego,California',
        linkUrl: 'https://www.belmontpark.com/',
        imageUrl: 'https://i.ibb.co/RDn9Shr/belmontpark.jpg',
        description: 'San Diego\'s premier beachfront amusement park, features the historic wooden Giant Dipper roller coaster, Plunge swimming pool, plus restaurants, shops & more! Each ride is individually paid or you can buy a wrist band for unlimited rides. Free to the public if you want to just stroll through.'
      },
      {
        id: 16,
        name: 'Birch Aquarium',
        price: 'Avg Price $25',
        address: '2300 Expedition Way Scripps Institution of Oceanography',
        mapLink: 'http://maps.apple.com/?q=Birch+Aquarium',
        linkUrl: 'https://aquarium.ucsd.edu/',
        imageUrl: 'https://i.ibb.co/JvnymWL/educational.jpg',
        description: 'The aquarium houses more than 60 habitats featuring fish and invertebrates from all over the world. The aquarium itself is located on UC San Diego\'s campus and overlooks the coastline, giving visitors beautiful scenic views.'
      },
      {
        id: 17,
        name: 'USS Midway Museum',
        price: 'Avg Price $26',
        address: '910 N Harbor Dr',
        mapLink: 'http://maps.apple.com/?address=910,N+Harbor+Dr,San+Diego,California',
        linkUrl: 'https://www.midway.org/',
        imageUrl: 'https://i.ibb.co/FWGGD8s/midway.jpg',
        description: 'Anchored in the harbor downtown, the Midway offers an interactive experience to learn about World War II and life aboard an aircraft carrier during the war. There are several staircases visitors must climb, however the museum has made 60% of the exhibits wheelchair accessible.'
      },
      {
        id: 18,
        name: 'Fleet Science Center',
        price: 'Avg Price $22',
        address: '1875 El Prado',
        mapLink: 'http://maps.apple.com/?address=1875,El+Prado,San+Diego,California',
        linkUrl: 'https://www.fleetscience.org/',
        imageUrl: 'https://i.ibb.co/xqqPwZR/science.jpg',
        description: 'An interactive space for all ages to learn about science with over 100 exhibits. There is also an IMAX dome theater that offers a variety of films showcasing the beauty of the planet and space.'
      },
      {
        id: 19,
        name: 'Natural History Museum',
        price: 'Avg Price $20',
        address: '1788 El Prado',
        mapLink: 'http://maps.apple.com/?address=1788,El+Prado,San+Diego,California',
        linkUrl: 'https://www.sdnhm.org/',
        imageUrl: 'https://i.ibb.co/PWbLw3W/history.jpg',
        description: 'One of Balboa Park\'s most iconic buildings, the museum offers four different floors to explore and learn about the history of the earth. There is a giant screen theater that offers five shows a day, between 11am-3pm.'
      },
      {
        id: 20,
        name: 'The New Children\'s Museum',
        price: 'Avg Price $15',
        address: '200 W Island Ave',
        mapLink: 'http://maps.apple.com/?address=200,W+Island+Ave,San+Diego,California',
        linkUrl: 'https://thinkplaycreate.org/',
        imageUrl: 'https://i.ibb.co/Qr663jw/childrenmuseum.jpg',
        description: 'A museum for kids to interact with art and let their creativity flourish. This hands-on approach gives children and their families an active space to explore, climb, and create.'
      },
      {
        id: 21,
        name: 'Museum of Us',
        price: 'Avg Price $20',
        address: '1350 El Prado',
        mapLink: 'http://maps.apple.com/?address=1350,El+Prado,San+Diego,California',
        linkUrl: 'https://museumofus.org/',
        imageUrl: 'https://i.ibb.co/0tXZLkN/museumofus.jpg',
        description: 'This anthropology museum is located within Balboa Park\'s entrance from 6th Ave and housed in the historic 1868 landmark buildings of the California Quadrangle. The museum hosts several rotating exhibits. The schedule can be found on their website linked below.'
      },
      {
        id: 22,
        name: 'Sesame Place',
        price: 'Avg Price $80',
        address: '2052 Entertainment Circle',
        mapLink: 'http://maps.apple.com/?address=2052,Entertainment+Circle,Chula+Vista,California',
        linkUrl: 'https://sesameplace.com/san-diego/',
        imageUrl: 'https://i.ibb.co/sbpLTSf/sesame.jpg',
        description: 'The first theme park of its kind on the west coast! Sesame Place has rollercoasters, water slides, shows, parades, interactive games, and dining & shopping.'
      }
    ]
  },
  {
    id: 2,
    title: 'BEACHES',
    imageUrl: 'https://i.ibb.co/JmMGSKD/beach.jpg',
    cardImageUrl: 'https://i.ibb.co/JC2tp62/mb.jpg',
    items: [
      {
        id: 11,
        name: 'Coronado',
        address: '838 Ocean Blvd', 
        mapLink: 'http://maps.apple.com/?address=838,Ocean+Blvd,Coronado,California',
        imageUrl: 'https://i.ibb.co/M22XLqv/coronado2.jpg',
        linkUrl: 'https://www.sandiego.org/explore/things-to-do/beaches-bays/coronado.aspx',
        description: 'Coronado Beach is one of San Diego\'s largest beaches and is a place to see dolphins and other wildlife. The famous Hotel Del, which some believe is haunted, sits on the boardwalk where you can enjoy dozens of shops and restaurants. This mile wide island also features a ferry landing market place on the east side.'
      },
      {
        id: 12,
        name: 'La Jolla',
        address: '850 Coast Blvd',
        mapLink: 'http://maps.apple.com/?address=850,Coast+Blvd,San+Diego,California',
        imageUrl: 'https://i.ibb.co/HVC9bnH/cove.jpg',
        linkUrl: 'https://www.sandiego.gov/lifeguards/beaches/cove',
        description: 'One of San Diego\'s must see beaches, La Jolla is a hilly seaside neighborhood featuring cliff side views not only from the beach, but from the luxurous hotels and surrounding restaurants. La Jolla is home to hundreds of seals, snorkling, kayaking, caves, one of a kind shopping boutiques and other entertainment. Walk the boardwalk and witness the most stunning sunsets.'
      },
      {
        id: 13,
        name: 'Mission Beach',
        address: '3100 Ocean Front Walk',
        mapLink: 'http://maps.apple.com/?address=3100,Ocean+Front+Walk,San+Diego,California',
        imageUrl: 'https://i.ibb.co/JC2tp62/mb.jpg',
        linkUrl: 'https://www.sandiego.org/explore/things-to-do/beaches-bays/mission-beach.aspx',
        description: 'Mission Beach is adjacent to Pacific Beach, a 25 minutes walk between the two. Enjoy the seaside amusement park, Belmont Park, and ride the famous wooden roller coaster & other rides. End your day with a delicious meal at one of the many restaurants.'
      },
      {
        id: 14,
        name: 'Ocean Beach',
        address: '1950 Abbott St', 
        mapLink: 'http://maps.apple.com/?address=1950,Abbott+St,San+Diego,California',
        imageUrl: 'https://i.ibb.co/jhd3wgt/ob.jpg',
        linkUrl: 'https://www.sandiego.org/explore/things-to-do/beaches-bays/ocean-beach.aspx',
        description: 'Just over the hill of Point Loma, Ocean beach is San Diego\'s chillest vibes. You can enjoy beach front bars, restaurants, shops & Wednesday farmers markets. The main street, Newport Ave, is filled with antique shops, beachwear, surf boutiques, food and more.  Ocean beach is widely known for its stunning sunset cliffs, which is accessible via a short hike along the ocean cliffs. Wrap up the day by witnessing the best sunset off the long fishing pier.'
      },
      {
        id: 15,
        name: 'Pacific Beach',
        address: '4500 Ocean Blvd', 
        mapLink: 'http://maps.apple.com/?address=4500,Ocean+Blvd,San+Diego,California',
        imageUrl: 'https://i.ibb.co/BKXr75h/pb.jpg',
        linkUrl: 'https://www.sandiego.org/explore/things-to-do/beaches-bays/pacific-beach.aspx',
        description: 'The relaxed Pacific Beach burrow is filled with surf shops, beach bars, cafes & nightclubs. A gathering place for a young bar hopping crowd. Walk in the sand, rent a board & surf the waves. Indulge in the Tuesday farmers markets & taco Tuesday! Inland, relax on the grassy slope of Kate Sessions park and enjoy the stunning views of San Diego.'
      }
    ]
  },
  {
    id: 3,
    title: 'BREWERIES',
    imageUrl: 'https://i.ibb.co/rZ2vgHK/breweries.jpg',
    cardImageUrl: 'https://i.ibb.co/rZ2vgHK/breweries.jpg',
    items: [
      {
        id: 11,
        name: 'Ballast Point',
        address: '9045 Carroll Way',
        mapLink: 'http://maps.apple.com/?address=9045,Carroll+Way,San+Diego,California',
        linkUrl: 'https://ballastpoint.com/',
        imageUrl: 'https://i.ibb.co/B67DZHd/beer5.png',
        description: 'Ballast Point has multiple tasting rooms across the city: Little Italy, Mirarmar, and Mission Valley. The Little Italy and Mirarmar tasting rooms offer a kitchen, patio, beer to go, kegs, wine, and merch!'
      },
      {
        id: 12,
        name: 'Stone Brewing',
        address: '2816 Historic Decatur Rd Ste 116',
        mapLink: 'http://maps.apple.com/?address=2816,Historic+Decatur+Rd+Ste+116,San+Diego,California',
        linkUrl: 'https://www.stonebrewing.com/',
        imageUrl: 'https://i.ibb.co/B67DZHd/beer5.png',
        description: 'Stone Brewing has multiple tasting rooms across the city: Downtown, Escondido, and Liberty Station. The Escondido and Liberty Station locations also include a world bistro & gardens. There is a full restaurant, bar, bocce ball court, and outdoor cinema space.'
      },
      {
        id: 13,
        name: 'AleSmith',
        address: '9990 AleSmith Ct',
        mapLink: 'http://maps.apple.com/?address=9990,AleSmith+Ct,San+Diego,California',
        linkUrl: 'https://alesmith.com/',
        imageUrl: 'https://i.ibb.co/B67DZHd/beer5.png',
        description: 'A kid and dog friendly brewery located in Mira Mesa, AleSmith has an indoor and outdoor seating area. Adjacent to the outdoor space, there are independent food trucks that offer food for AleSmith visitors.'
      },
      {
        id: 14,
        name: 'Coronado Brewing',
        address: '170 Orange Ave',
        mapLink: 'http://maps.apple.com/?address=170,Orange+Ave,Coronado,California',
        linkUrl: 'https://coronadobrewing.com/',
        imageUrl: 'https://i.ibb.co/B67DZHd/beer5.png',
        description: 'Coronado Brewing has multiple tasting rooms across the city: Coronado, Imperial Beach, and Mission Bay. The Coronado and Imperial Beach locations offer a full pub menu and the Mission Bay tasting room has a condensed pub menu. All three locations provide brand new beer releases and beer growlers to go.'
      },
      {
        id: 15,
        name: 'Saint Archer',
        address: '9550 Distribution Ave',
        mapLink: 'http://maps.apple.com/?address=9550,Distribution+Ave,San+Diego,California',
        linkUrl: 'https://www.saintarcherbrewery.com/',
        imageUrl: 'https://i.ibb.co/B67DZHd/beer5.png',
        description: 'Saint Archer Brewing has two tasting rooms: Miramar and Encinitas. The Miramar location offers an outdoor deck with adjacent food trucks and also allows visitors to bring food or have it delivered. In addition, the Miramar tasting room is pet-friendly'
      },
      {
        id: 16,
        name: 'Mike Hess Brewing',
        address: '4893 Voltaire St',
        mapLink: 'http://maps.apple.com/?address=4893+Voltaire+St,La+Jolla+Scenic+Dr,San+Diego,California',
        linkUrl: 'https://www.mikehessbrewing.com/',
        imageUrl: 'https://i.ibb.co/B67DZHd/beer5.png',
        description: 'Mike Hess Brewing has multiple tasting rooms across the city: Downtown, Imperial Beach, North Park, and Ocean Beach. All locations are pet and family friendly. The North Park location has food trucks out front, while the other locations offer a full kitchen.'
      },
      {
        id: 17,
        name: 'JuneShine Ranch',
        address: '10051 Old Grove Rd',
        mapLink: 'http://maps.apple.com/?address=10051,Old+Grove+Rd,San+Diego,California',
        linkUrl: 'https://juneshine.com/',
        imageUrl: 'https://i.ibb.co/B67DZHd/beer5.png',
        description: 'Hard Kombucha. A pet and family friendly tasting room with outdoor and indoor seating.'
      }
    ]
  },
  {
    id: 4,
    title: 'FOOD',
    imageUrl: 'https://i.ibb.co/GxXwH9J/restaurants.jpg',
    cardImageUrl: 'https://i.ibb.co/GxXwH9J/restaurants.jpg',
    items: [
      {
        id: 11,
        name: 'American', 
        imageUrl: 'https://i.ibb.co/Q9BTZWP/americanfood.jpg',
        linkUrl: 'https://www.yelp.com/search?find_desc=American+Food&find_loc=San+Diego%2C+CA&ns=1&sortby=rating',
        description: 'Breakfast Republic (Breakfast & Brunch) | Corvette Diner (1970\'s Themed Diner) | Draft (On the Boardwalk) | Dirty Birds (Chicken Wings & Sport\'s Bar) | Olive Cafe (Breakfast) | Pop Pie Co (Variety of Pot Pies)'
      },
      {
        id: 12,
        name: 'Asian', 
        imageUrl: 'https://i.ibb.co/7rTKYw8/asianfood.jpg',
        linkUrl: 'https://www.yelp.com/search?find_desc=asian+food&find_loc=San+Diego%2C+CA&sortby=rating',
        description: 'Ajisen (Ramen) | Benihana (Japanese) | Ichiban (Sushi) | Ka Prao (Thai) | OB Noodle House (Asian fusion, whisky bar) | Pho Duyen Mai (Vietnamese) | Saiko Sushi 356 Korean BBQ (Sport\'s bar) | ShabumI (Hot Pot, Korean BBQ)'
      },
      {
        id: 13,
        name: 'European', 
        imageUrl: 'https://i.ibb.co/HtHG5Mk/europeanfood.jpg',
        linkUrl: 'https://www.yelp.com/search?find_desc=Mediterranean+Food&find_loc=San+Diego%2C+CA&sortby=rating',
        description: 'Kaiserhof (German) | The Kebab Shop | Meze Greek Fusion | Old Venice Restaurant (Italian) | Piatti (Italian) | The Smoking Goat (French)'
      },
      {
        id: 14,
        name: 'Mexican', 
        imageUrl: 'https://i.ibb.co/RzDBKp3/mexicanfood.jpg',
        linkUrl: 'https://www.yelp.com/search?find_desc=mexican+food&find_loc=San+Diego%2C+CA&sortby=rating',
        description: 'El Chingon | Kono\'s (Breakfast) | La Puerta | Miguel\'s Cocina | Oscar\'s (Tacos) | Taco Surf '
      },
      {
        id: 15,
        name: 'Pizza', 
        imageUrl: 'https://i.ibb.co/9VPY5zS/pizza.jpg',
        linkUrl: 'https://www.yelp.com/search?find_desc=pizza&find_loc=San+Diego%2C+CA&sortby=rating',
        description: 'Bronx Pizza | Massachusettes Mike\'s Pizzeria | Piatti (Italian) | Chicago Bros Pizzeria'
      },
      {
        id: 16,
        name: 'Seafood', 
        imageUrl: 'https://i.ibb.co/Ks9yBXy/seafood.jpg',
        linkUrl: 'https://www.yelp.com/search?find_desc=seafood&find_loc=San+Diego%2C+CA&sortby=rating',
        description: 'Blue Water Seafood | Cannonball (On the Boardwalk) | Duke\'s (Seafood & American) | Herringbone | The Fishery | King\'s Fish House | Lobster West | Point Loma Seafoods | World Famous (Seafood & American)'
      }
    ]
  },
  {
    id: 5,
    title: 'HIKES',
    imageUrl: 'https://i.ibb.co/HzMTLBm/hikes.jpg',
    cardImageUrl: 'https://i.ibb.co/HzMTLBm/hikes.jpg',
    items: [
      {
        id: 11,
        name: 'Sunset Cliffs Park Trail',
        address: '4515 Ladera St',
        mapLink: 'http://maps.apple.com/?q=Sunset+Cliffs+Natural+Park',
        imageUrl: 'https://i.ibb.co/5k6cmrz/sunset-cliffs.jpg',
        linkUrl: 'https://www.alltrails.com/trail/us/california/sunset-cliffs-park-trail',
        description: 'Moderate: 1 Mile. A dog friendly trail, this is a popular spot to watch the sunset as the sun\'s rays reflect off the water and cliffs.'
      },
      {
        id: 12,
        name: 'Torrey Pines Beach Loop',
        address: '12184 N Torrey Pines Rd', 
        mapLink: 'http://maps.apple.com/?q=Torrey+Pines+Beach+Trail',
        imageUrl: 'https://i.ibb.co/nDSbB1H/torreypines.jpg',
        linkUrl: 'https://www.alltrails.com/trail/us/california/torrey-pines-beach-trail-loop?ref=result-card',
        description: 'Moderate: 2.3 Miles. The start of the hike takes you up the beachside cliffs and the return has you walking on the sand next to the sea. On average, people complete this hike in about an hour. This trail does not allow dogs.'
      },
      {
        id: 13,
        name: 'Blue Sky Ecological Reserve',
        address: '16275 Espola Rd',
        mapLink: 'http://maps.apple.com/?address=16275,Espola+Road,Poway,California',
        imageUrl: 'https://i.ibb.co/RT2dHGf/bluesky.jpg',
        linkUrl: 'https://poway.org/502/Trails-Hiking',
        description: 'Variety of Trails in Poway. There is the Creekside Trail which is 0.4 miles roundtrip. A longer hike at 4.8 miles is the trail to Lake Ramona and the Ramona Dam with several viewpoints of the surrounding area.'
      },
      {
        id: 14,
        name: 'Cowles Mountain',
        address: '7001 Golfcrest Dr',
        mapLink: 'http://maps.apple.com/?q=Cowles+Mountain+Trail',
        imageUrl: 'https://i.ibb.co/vjcCc2h/cowles.jpg',
        linkUrl: 'https://www.alltrails.com/trail/us/california/cowles-mountain-trail',
        description: 'Difficult: 3 Miles. This hike mostly contains switchbacks which give you plenty of amazing views as you climb higher up the mountain. It is recommended to go early in the day since this is a popular hiking spot and can get crowded.'
      },
      {
        id: 15,
        name: 'Iron Mountain',
        address: '14995-15065 Hwy 67',
        mapLink: 'http://maps.apple.com/?q=Iron+Mountain+Trail',
        imageUrl: 'https://i.ibb.co/Jt8PrNX/ironmountain.jpg',
        linkUrl: 'https://www.alltrails.com/trail/us/california/iron-mountain-trail--5',
        description: 'Difficult: 6 Miles. Bring lots of water on this hike as the elevation gain makes this a strenuous workout. Once at the top, enjoy the beautiful 360 degree view of the county and natural landscape nearby.'
      },
      {
        id: 16,
        name: 'Black Mountain',
        address: '12115A Black Mountain Rd',
        mapLink: 'http://maps.apple.com/?q=Black+Mountain+Open+Space+Park',
        imageUrl: 'https://i.ibb.co/GcVVJGZ/blackmountain.jpg',
        linkUrl: 'https://www.alltrails.com/trail/us/california/black-mountain-via-nighthawk-trail-and-miners-ridge-trail-loop',
        description: 'Difficult: 6.4 Miles. This is a popular trail for mountain biking, therefore hiker\'s should pay attention while on the main path. There are multiple routes however that hikers can take, each providing different views of the city.'
      },
      {
        id: 17,
        name: 'Potato Chip Rock (Mt.Woodson)',
        address: '14644 Lake Poway Rd',
        mapLink: 'http://maps.apple.com/?address=14644,Lake+Poway+Road,Poway,California',
        imageUrl: 'https://i.ibb.co/Pmjr1BJ/mtwoodson.jpg',
        linkUrl: 'https://www.alltrails.com/trail/us/california/potato-chip-rock-via-mt-woodson-trail',
        description: 'Difficult: 7.3 Miles. A very popular trail to get the iconic photo at the peak, it is recommended to go early in the morning since this trail can get crowded quickly. This hike has varying degrees of difficulty and will defintely provide you with a good workout.'
      }
    ]
  },
  {
    id: 6,
    title: 'NIGHT LIFE',
    imageUrl: 'https://i.ibb.co/2ZbJfKx/nightlife.jpg',
    cardImageUrl: 'https://i.ibb.co/2ZbJfKx/nightlife.jpg',
    items: [
      {
        id: 11,
        name: 'Parq Nightclub',
        address: '615 Broadway',
        mapLink: 'http://maps.apple.com/?address=615,Broadway,San+Diego,California',
        linkUrl: 'https://parqsd.com/',
        imageUrl: 'https://i.ibb.co/fMZzJnm/nightlifeicon.jpg',
        description: '25,000 square feet to party. Parq is a nightclub and restaurant with the largest LED HD screen in town. The atmosphere is similar to a Las Vegas nightclub.'
      },
      {
        id: 12,
        name: 'Onyx Room',
        address: '852 5th Ave ',
        mapLink: 'http://maps.apple.com/?address=852,Fifth+Ave,San+Diego,California',
        linkUrl: 'https://www.onyxroom.com/',
        imageUrl: 'https://i.ibb.co/fMZzJnm/nightlifeicon.jpg',
        description: 'If you are looking for a variety of music, Onyx is the place to go. There are three rooms that play different music making it suitable for everyone.'
      },
      {
        id: 13,
        name: 'Sevilla Nightclub',
        address: '353 5th Ave',
        mapLink: 'http://maps.apple.com/?address=353,Fifth+Ave,San+Diego,California',
        linkUrl: 'http://sandiego.sevillanightclub.com/',
        imageUrl: 'https://i.ibb.co/fMZzJnm/nightlifeicon.jpg',
        description: 'A nightclub that offers free salsa lessons during the week, Sevilla is the longest running nightclub in the Gaslamp district. Checkout this club for Latin and Spanish music.'
      },
      {
        id: 14,
        name: 'Double Deuce',
        address: '528 F St',
        mapLink: 'http://maps.apple.com/?address=528,F+St,San+Diego,California',
        linkUrl: 'https://doubledeucesd.com/',
        imageUrl: 'https://i.ibb.co/fMZzJnm/nightlifeicon.jpg',
        description: 'If a mechanical bull ride is on your to do list, Double Deuce is the place for you! The venue is a country bar with a mix of rock-n-roll vibes.'
      },
      {
        id: 15,
        name: 'Whiskey Girl',
        address: '702 5th Ave',
        mapLink: 'http://maps.apple.com/?address=702,Fifth+Ave,San+Diego,California',
        linkUrl: 'https://whiskeygirl.com/',
        imageUrl: 'https://i.ibb.co/fMZzJnm/nightlifeicon.jpg',
        description: 'Whiskey Girl is an American style restaurant and sports bar that transforms into a nightclub. They offer live acoustic music and then switch to the current top 40.'
      }
    ]
  },
  {
    id: 7,
    title: 'SHOPPING',
    imageUrl: 'https://i.ibb.co/nRqqyff/shopping.jpg',
    cardImageUrl: 'https://i.ibb.co/nRqqyff/shopping.jpg',
    items: [
      {
        id: 11,
        name: 'Carlsbad Premium Outlets',
        address: '5620 Paseo Del Norte',
        mapLink: 'http://maps.apple.com/?address=5620,Paseo+Del+Norte,Carlsbad,California',
        linkUrl: 'https://www.premiumoutlets.com/outlet/carlsbad',
        imageUrl: 'https://i.ibb.co/SQx7Fxf/shoppingbags.png',
        description: '85 designer and name-brand outlet stores. Featured Stores: Coach, Tory Burch, Vans, Michael Kors, Polo Ralph Lauren, Sunglass Hut, Marc Jacobs, Nike, and Kate Spade.'
      },
      {
        id: 12,
        name: 'Las Americas Premium Outlets',
        address: '4211 Camino de la Plaza',
        mapLink: 'http://maps.apple.com/?address=4211,Camino+de+la+Plaza,San+Diego,California',
        linkUrl: 'https://www.premiumoutlets.com/outlet/las-americas/about',
        imageUrl: 'https://i.ibb.co/SQx7Fxf/shoppingbags.png',
        description: '125 designer and name-brand outlet stores. Featured Stores: Adidas, New Balance, Kipling, Bath & Body Works, Forever 21, Hurley, Vans, and Armani.'
      },
      {
        id: 13,
        name: 'Fashion Valley',
        address: '7007 Friars Rd',
        mapLink: 'http://maps.apple.com/?address=7007,Friars+Rd,San+Diego,California',
        linkUrl: 'https://www.simon.com/mall/fashion-valley/about',
        imageUrl: 'https://i.ibb.co/SQx7Fxf/shoppingbags.png',
        description: '200 stores, featuring: Prada, Saint Laurent, Gucci, Cartier, Louis Vuitton, Tiffany & Co., Tommy Bahama, Versace, Lucky Brand, and Forever 21.'
      },
      {
        id: 14,
        name: 'Mission Valley',
        address: '1640 Camino Del Rio North',
        mapLink: 'http://maps.apple.com/?address=1640,Camino+Del+Rio+North,San+Diego,California',
        linkUrl: 'https://www.westfield.com/missionvalley/homepage',
        imageUrl: 'https://i.ibb.co/SQx7Fxf/shoppingbags.png',
        description: '79 stores, featuring: Bloomingdales, Express, Foot Locker, Kay Jewelers, Lane Bryant, Old Navy, Target, Tilly\'s, and Vans.'
      },
      {
        id: 15,
        name: 'UTC',
        address: '4545 La Jolla Village Dr',
        mapLink: 'http://maps.apple.com/?address=4545,La+Jolla+Village+Dr,San+Diego,California',
        linkUrl: 'https://www.westfield.com/utc',
        imageUrl: 'https://i.ibb.co/SQx7Fxf/shoppingbags.png',
        description: '164 stores, featuring: Abercrombie & Fitch, Aldo, Hermes, Kate Spade, J.Crew, Free People, and H&M. '
      },
      {
        id: 16,
        name: 'Parkway Plaza',
        address: '415 Fletcher Parkway',
        mapLink: 'http://maps.apple.com/?address=415,Fletcher+Parkway,El+Cajon,California',
        linkUrl: 'https://visitparkwayplaza.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB&utm_content=SW11_PARKWAY',
        imageUrl: 'https://i.ibb.co/SQx7Fxf/shoppingbags.png',
        description: '128 stores, featuring: Ulta, Vans, Hollister, Five Below, Express, Pink, The Children\'s Place, and Victoria\'s Secret.'
      }
    ]
  },
  {
    id: 8,
    title: 'EVENTS',
    imageUrl: 'https://i.ibb.co/9NnBW9v/events.jpg',
    cardImageUrl: 'https://i.ibb.co/9NnBW9v/events.jpg',
    items: [
      {
        id: 11,
        name: 'San Diego Padres',
        address: '100 Park Blvd',
        mapLink: 'http://maps.apple.com/?address=100,Park+Blvd,San+Diego,California',
        linkUrl: 'https://www.mlb.com/padres',
        imageUrl: 'https://i.ibb.co/cKBYnF7/baseball.jpg',
        description: 'San Diego\'s professional baseball team. Their stadium, Petco Park, is located in the middle of downtown.'
      },
      {
        id: 12,
        name: 'San Diego Gulls',
        address: '3500 Sports Arena Blvd',
        mapLink: 'http://maps.apple.com/?address=3500,Sports+Arena+Blvd,San+Diego,California',
        linkUrl: 'https://www.sandiegogulls.com/',
        imageUrl: 'https://i.ibb.co/0Bgh4VC/hockey.jpg',
        description: 'San Diego\'s professional ice hockey team. Their arena, the Pechanga Arena, is located just a few miles north from the airport.'
      },
      {
        id: 13,
        name: 'San Diego Seals',
        address: '3500 Sports Arena Blvd',
        mapLink: 'http://maps.apple.com/?address=3500,Sports+Arena+Blvd,San+Diego,California',
        linkUrl: 'https://sealslax.com/',
        imageUrl: 'https://i.ibb.co/L57VLFx/lacrosse.jpg',
        description: 'San Diego\'s professional lacrosse team. Their arena, the Pechanga Arena, is located just a few miles north from the airport.'
      },
      {
        id: 14,
        name: 'San Diego Loyal',
        address: '5998 Alcala Park',
        mapLink: 'http://maps.apple.com/?address=5998,Alcala+Park,San+Diego,California',
        linkUrl: 'https://www.sdloyal.com/',
        imageUrl: 'https://i.ibb.co/r5SV172/soccer.jpg',
        description: 'San Diego\'s professional soccer team. Their stadium, Torero Stadium, is located on the University of San Diego\'s campus, 15 minutes north from downtown. '
      },
      {
        id: 15,
        name: 'College Sports',
        address: '5500 Campanile Dr',
        mapLink: 'http://maps.apple.com/?address=5500,Campanile+Dr,San+Diego,California',
        linkUrl: 'https://goaztecs.com/',
        imageUrl: 'https://i.ibb.co/qdyBnJ2/sdsu.jpg',
        description: 'San Diego State University is now using the football stadium that was formerly used by the San Diego Chargers.'
      }
    ]
  }
];

export default LOCATIONS_DATA;