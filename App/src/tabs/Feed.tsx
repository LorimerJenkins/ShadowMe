import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext } from '../utils/AuthSession';
import { Ionicons } from '@expo/vector-icons'


type FeedItem = {
  user: string;
  profilePic: string;
  school: string;
  header: string;
  picture: string;
  content: string;
};

const FeedData: FeedItem[] = [
  { user: 'John', profilePic: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.webp', school: 'Virginia Tech', header: 'How to learn TS', picture: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg', content: 'The easiest way to learn Typescript is by making allot of projects in the start and then...' },
  { user: 'John', profilePic: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.webp', school: 'Virginia Tech', header: 'How to learn TS', picture: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg', content: 'The easiest way to learn Typescript is by making allot of projects in the start and then...' },
  { user: 'John', profilePic: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.webp', school: 'Virginia Tech', header: 'How to learn TS', picture: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg', content: 'The easiest way to learn Typescript is by making allot of projects in the start and then...' },

];

type RootStackParamList = {
  Detail: { item: FeedItem };
};

type FeedItemNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type FeedItemProps = {
  item: FeedItem;
  navigation: FeedItemNavigationProp;
};

const FeedItemComponent: React.FC<FeedItemProps> = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.feedItemContainer}
    onPress={() => navigation.navigate('Detail', { item })}
  >
    <View style={styles.userDetails}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <Text style={styles.normalText}>
        {item.user}
        {" at "}
        <Text style={styles.userSchool}>{item.school}</Text>
        {" posted a note"}
      </Text>
    </View>
    <View style={styles.card}>
      <Image source={{ uri: item.picture }} style={styles.feedImage} />
      <Text style={styles.feedHeader}>{item.header}</Text>
    </View>
  </TouchableOpacity>
);

type FeedProps = {
  navigation: FeedItemNavigationProp;
};

const FeedTab: React.FC<FeedProps> = ({ navigation }) => {

  const { userDetails } = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <View style={styles.userProfileSection}>
        <View style={styles.userInfo} onPress={() => navigation.replace('Profile')}>
          <Image source={{ uri: userDetails?.picture }} style={styles.smallProfilePic} />
          <Text style={styles.greetingText}>Hey, {userDetails?.given_name}!</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("123")}>
          <Text style={styles.commentIcon}>
            <Ionicons name="md-chatbubble-outline" size={24} />
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.feedTitle}>My Feed</Text>

      <FlatList
        data={FeedData}
        renderItem={({ item }) => <FeedItemComponent item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FCF6F1',
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    paddingBottom: 3,
  },
  feedItemContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9
  },
  profilePic: {
    width: 17,
    height: 17,
    borderRadius: 20,
    marginRight: 10,
  },
  normalText: {
    fontFamily: "Futura",
    fontSize: 14,
    color: '#4D4D4D'
  },
  userSchool: {
    fontFamily: "Futura",
    color: '#000',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  },
  feedHeader: {
    fontFamily: "Futura",
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 15
  },
  feedImage: {
    width: '100%',
    height: 200,
  },
  feedTitle: {
    fontFamily: "Futura",
    fontSize: 50,
    marginVertical: 23,
    marginLeft: 5,
  },
  userProfileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    fontFamily: "Futura",
    fontSize: 16,
  },
  smallProfilePic: {
    width: 30, // Reduced size
    height: 30, // Reduced size
    borderRadius: 15,
    marginRight: 10,
  },
  commentIcon: {
    padding: 10,
    fontSize: 20, // Increased font size to make the icon larger
  },

});

export default FeedTab;
