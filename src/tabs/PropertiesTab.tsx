import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import sampleProperties from '../models/Property';
import SearchBar from '../components/SearchBar';
// import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';


type RootStackParamList = {
  PropertyDetail: { property: any };
};

type PropertyItemNavigationProp = StackNavigationProp<RootStackParamList, 'PropertyDetail'>;

type PropertyItemProps = {
  item: any;
  navigation: PropertyItemNavigationProp;
};

const PropertyItem: React.FC<PropertyItemProps> = ({ item, navigation }) => (
  <View style={styles.propertyItemContainer}>
    {/* <Swiper style={styles.swiperContainer} showsButtons={false} loop={false} height={200} activeDotColor='white' dotColor='grey' paginationStyle={{ bottom: 8 }}>
      {item.imageURLs.map((url: string, index: number) => (
        <View key={index} style={styles.imageContainer}>
          <Image style={styles.propertyImage} source={{ uri: url }} />
        </View>
      ))}
    </Swiper> */}
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('PropertyDetail', { property: item })}>
      <View style={styles.titlePriceContainer}>
        <Text style={styles.propertyTitle}>{item.title}</Text>
        <Text style={styles.propertyPrice}>${item.price}</Text>
      </View>
      <Text>{item.description}</Text>
      <View style={styles.propertyInfo}>
        <View style={styles.propertyInfoItem}>
          <Icon name="bed" size={16} color="grey" />
          <Text style={styles.propertyInfoText}>{item.bedrooms}</Text>
        </View>
        <View style={styles.propertyInfoItem}>
          <Icon name="bath" size={16} color="grey" />
          <Text style={styles.propertyInfoText}>{item.bathrooms}</Text>
        </View>
        <View style={styles.propertyInfoItem}>
          <Icon name="home" size={16} color="grey" />
          <Text style={styles.propertyInfoText}>{item.homeType}</Text>
        </View>
        <View style={styles.propertyInfoItem}>
          <Icon name="money" size={16} color="grey" />
          <Text style={styles.propertyInfoText}>{item.purchaseType}</Text>
        </View>
        <View style={styles.propertyInfoItem}>
          <Icon name="calendar" size={16} color="grey" />
          <Text style={styles.propertyInfoText}>{item.daysListed} days</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);


type PropertiesTabProps = {
  navigation: PropertyItemNavigationProp;
};

const PropertiesTab: React.FC<PropertiesTabProps> = ({ navigation }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(sampleProperties);


  const [city, setCity] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);



  const applyFilters = () => {

    const filtered = sampleProperties.filter((property) => {
      const cityMatch = property.city.toLowerCase().includes(city.toLowerCase());
      const priceMatch = property.price >= minPrice && property.price <= maxPrice;
      const bedroomsMatch = property.bedrooms >= bedrooms;
      const bathroomsMatch = property.bathrooms >= bathrooms;

      return cityMatch && priceMatch && bedroomsMatch && bathroomsMatch;
    });

    setFilteredProperties(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [city, minPrice, maxPrice, bedrooms, bathrooms]);

  return (
    <View style={styles.container}>
      <SearchBar
        showFilters={filterVisible}
        setShowFilters={setFilterVisible}
        city={city}
        setCity={setCity}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        bathrooms={bathrooms}
        setBathrooms={setBathrooms}
        homeType=""
        setHomeType={() => {}}
        purchaseType=""
        setPurchaseType={() => {}}
        datesAvailable={{ start: new Date(), end: new Date() }}
        setDatesAvailable={() => {}}
        squareFootage={[0, 10000]}
        setSquareFootage={() => {}}
        daysListed={[0, 365]}
        setDaysListed={() => {}}
      />

      <FlatList
        data={filteredProperties}
        renderItem={({ item }) => <PropertyItem item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  propertyItemContainer: {
    marginBottom: 15,
  },
  swiperContainer: {
    marginBottom: 10,
  },
  imageContainer: {
    height: 200,
  },
  propertyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titlePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propertyPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  propertyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  propertyInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  propertyInfoText: {
    marginLeft: 5,
    color: 'grey',
  },
});

export default PropertiesTab;
