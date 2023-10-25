import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';


type SearchBarProps = {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  bedrooms: number;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
  bathrooms: number;
  setBathrooms: React.Dispatch<React.SetStateAction<number>>;
  homeType: string;
  setHomeType: React.Dispatch<React.SetStateAction<string>>;
  purchaseType: string;
  setPurchaseType: React.Dispatch<React.SetStateAction<string>>;
  datesAvailable: { start: Date; end: Date };
  setDatesAvailable: React.Dispatch<React.SetStateAction<{ start: Date; end: Date }>>;
  squareFootage: number[];
  setSquareFootage: React.Dispatch<React.SetStateAction<number[]>>;
  daysListed: number[];
  setDaysListed: React.Dispatch<React.SetStateAction<number[]>>;
};



const SearchBar: React.FC<SearchBarProps> = ({
  showFilters,
  setShowFilters,
  city,
  setCity,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  homeType,
  setHomeType,
  purchaseType,
  setPurchaseType,
  datesAvailable,
  setDatesAvailable,
  squareFootage,
  setSquareFootage,
  daysListed,
  setDaysListed,
}) => {
  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
  };

  return (
    <View style={styles.container}>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by city..."
          onChangeText={setCity}
          value={city}
        />
        <TouchableOpacity style={styles.iconButton} onPress={toggleFilters}>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {showFilters && (
        <ScrollView style={styles.filtersContainer}>
          <Text>Min Price</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10000}
            value={minPrice}
            onValueChange={setMinPrice}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            step={1}
          />
          <Text>Max Price</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10000}
            value={maxPrice}
            onValueChange={setMaxPrice}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            step={1}
          />

          <Text>Min Bedrooms</Text>
          <Picker selectedValue={bedrooms} onValueChange={(value) => setBedrooms(value)}>
            {[...Array(10).keys()].map((_, index) => (
              <Picker.Item label={index.toString()} value={index} key={index} />
            ))}
          </Picker>

          <Text>Min Bathrooms</Text>
          <Picker selectedValue={bathrooms} onValueChange={(value) => setBathrooms(value)}>
            {[...Array(10).keys()].map((_, index) => (
              <Picker.Item label={index.toString()} value={index} key={index} />
            ))}
          </Picker>

          <Text>Home Type</Text>
          <Picker selectedValue={homeType} onValueChange={(value) => setHomeType(value)}>
            {['Apartment', 'House', 'Condo'].map((type) => (
              <Picker.Item label={type} value={type} key={type} />
            ))}
          </Picker>

          <Text>Purchase Type</Text>
          <Picker selectedValue={purchaseType} onValueChange={(value) => setPurchaseType(value)}>
            {['Rent', 'Buy'].map((type) => (
              <Picker.Item label={type} value={type} key={type} />
            ))}
          </Picker>

          <Text>Dates Available</Text>
          <View style={styles.datePickerContainer}>
            <DateTimePicker
              value={datesAvailable.start}
              mode="date"
              display="default"
              onChange={(event, date) => {
                if(date) {
                  setDatesAvailable(prevState => ({ ...prevState, start: date }));
                }
              }}
            />
            <DateTimePicker
              value={datesAvailable.end}
              mode="date"
              display="default"
              onChange={(event, date) => {
                if(date) {
                  setDatesAvailable(prevState => ({ ...prevState, end: date }));
                }
              }}
            />
          </View>

          <Text>Square Footage</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10000}
            value={squareFootage[1]}
            onValueChange={(value) => setSquareFootage([squareFootage[0], value])}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            step={1}
          />

          <Text>Days Listed</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={365}
            value={daysListed[1]}
            onValueChange={(value) => setDaysListed([daysListed[0], value])}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            step={1}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  iconButton: {
    marginLeft: 10,
  },
  filterButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  filtersContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SearchBar;
