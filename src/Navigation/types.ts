export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    PropertyDetail: {
      property: {
        imageURLs: string[];
        title: string;
        city: string;
        description: string;
        price: number;
        address: string;
        coordinates: { latitude: number; longitude: number };
        status: string;
        bedrooms: number;
        bathrooms: number;
        totalRooms: number;
        perTokenPrice: number;
        tokensAvailable: number;
        squareFootage: number;
        propertyAcres: number;
        yearBuilt: number;
        heating: string;
        hasGarage: boolean;
        hasBasement: boolean;
      }
    };
    TradeProperty: undefined;
  };