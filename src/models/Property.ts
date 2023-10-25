type PropertyData = {
  id: string;
  title: string;
  city: string;
  description: string;
  price: number;
  imageURLs: string[];
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  homeType: string;
  purchaseType: string;
  datesAvailable: {
    start: string;
    end: string;
  };
  daysListed: number;
  status: 'For Sale' | 'For Rent' | 'Not Available';
  propertyAcres: number;
  yearBuilt: number;
  heating: 'Gas' | 'Electric' | 'Other';
  hasGarage: boolean;
  hasBasement: boolean;
  perTokenPrice: number;
  tokensAvailable: number;
  totalRooms: number;
};


const propertyData: PropertyData[] = [
  {
      id: '1',
      title: 'Salem, US',
      city: 'Salem',
      description: 'Unique and Secluded AirShip with Breathtaking Highland Views',
      price: 56.21,
      imageURLs: [
          'https://a0.muscache.com/im/pictures/b7c9264d-73c9-45c3-882e-6e9577d63d68.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/7f1b1c79-78ed-434d-9d05-896dc39c6620.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/a8e9f2b6-3cf9-4dd9-ae2d-c1629e395285.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/3f19c1cc-7f4f-4528-990d-4a3768452aee.jpg?im_w=720'
      ],
      address: 'Station Square, Cambridge',
      coordinates: { latitude: 52.1942, longitude: 0.1374 },
      squareFootage: 1200,
      bedrooms: 5,
      bathrooms: 5,
      homeType: 'House',
      purchaseType: 'Rent',
      datesAvailable: { start: '2023-02-01', end: '2023-12-01' },
      daysListed: 13,
      status: 'For Sale',
      totalRooms: 8,
      perTokenPrice: 1000,
      tokensAvailable: 10,
      propertyAcres: 2.5,
      yearBuilt: 2005,
      heating: 'Gas',
      hasGarage: true,
      hasBasement: false,
  },
  {
      id: '2',
      title: 'Cambridge, UK',
      city: 'Cambridge',
      description: 'UFO Futuro styled Flying Saucer!',
      price: 301.14,
      imageURLs: [
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-659121892384395302/original/7315d324-fd0b-4d4e-9149-2a734c843c40.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-659121892384395302/original/f9a4de5a-a200-493c-80f8-22141bdd0dc0.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-659121892384395302/original/68404025-1066-4949-a63c-1f6e7a1b7b3b.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-659121892384395302/original/0e105bc9-e172-404c-a608-36845554b3e1.jpeg?im_w=720'
      ],
      address: 'Station Square, Cambridge',
      coordinates: { latitude: 52.1942, longitude: 0.1374 },
      squareFootage: 850,
      bedrooms: 2,
      bathrooms: 2,
      homeType: 'Apartment',
      purchaseType: 'Rent',
      datesAvailable: { start: '2023-03-01', end: '2023-12-11' },
      daysListed: 21,
      status: 'For Sale',
      totalRooms: 8,
      perTokenPrice: 1000,
      tokensAvailable: 10,
      propertyAcres: 2.5,
      yearBuilt: 2005,
      heating: 'Gas',
      hasGarage: true,
      hasBasement: false,
  },
  {
      id: '3',
      title: 'Neverland, Netherlands',
      city: 'Netherlands',
      description: 'Luxury suite overlooking the Wadden Sea, Harlingen',
      price: 578.32,
      imageURLs: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-42448822/original/b9c8e23d-3e3a-492b-9807-837bc9953808.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-42448822/original/08b71aa9-5005-4a69-a795-e90f6f533dc5.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-42448822/original/3a141e2e-396b-4d57-8d21-8034046b344c.jpeg?im_w=320',
          'https://a0.muscache.com/im/pictures/7d1b8d08-3e45-4c9f-a1ac-4fa1b7568134.jpg?im_w=320'
      ],
      address: 'Station Square, Cambridge',
      coordinates: { latitude: 52.1942, longitude: 0.1374 },
      squareFootage: 750,
      bedrooms: 1,
      bathrooms: 1,
      homeType: 'House',
      purchaseType: 'Buy',
      datesAvailable: { start: '2023-04-01', end: '2023-12-21' },
      daysListed: 37,
      status: 'For Sale',
      totalRooms: 8,
      perTokenPrice: 1000,
      tokensAvailable: 10,
      propertyAcres: 2.5,
      yearBuilt: 2005,
      heating: 'Gas',
      hasGarage: true,
      hasBasement: false,
  },
  {
      id: '4',
      title: 'Hogsmead, London',
      city: 'London',
      description: 'Snow igloo',
      price: 235.50,
      imageURLs: [
          'https://a0.muscache.com/im/pictures/7f98ed5b-c2e3-4652-8a15-d8b41d19924d.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/1cda1818-d41b-40ae-b4a8-1585e336efd6.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/6bb0567a-8df6-4ce7-944d-ceaca0a7cb18.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/8c3c2eea-f98e-4a42-9832-3690d1c017aa.jpg?im_w=720'
      ],
      address: 'Station Square, Cambridge',
      coordinates: { latitude: 52.1942, longitude: 0.1374 },
      squareFootage: 500,
      bedrooms: 6,
      bathrooms: 6,
      homeType: 'Condo',
      purchaseType: 'Buy',
      datesAvailable: { start: '2023-05-01', end: '2023-12-31' },
      daysListed: 49,
      status: 'For Sale',
      totalRooms: 8,
      perTokenPrice: 1000,
      tokensAvailable: 10,
      propertyAcres: 2.5,
      yearBuilt: 2005,
      heating: 'Gas',
      hasGarage: true,
      hasBasement: false,

  },
];

export default propertyData.map(data => ({
  ...data,
  location: data.address,
}));




