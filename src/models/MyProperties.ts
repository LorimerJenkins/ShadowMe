type MyPropertiesData = {
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


const myPropertiesData: MyPropertiesData[] = [
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
];

export default myPropertiesData.map(data => ({
  ...data,
}));




