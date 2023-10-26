import { Ionicons } from "@expo/vector-icons"
import { StackNavigationProp } from "@react-navigation/stack"
import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { RootStackParamList } from "../Navigation/types"

interface UserItem {
  picture: string;
  name: string;
  description: string;
  shadows: number;
  rating: number;
  school: string;
}

type UserNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

interface CourseProps {
  item: UserItem;
  navigation: UserNavigationProp;
}

const usersData: UserItem[] = [
  { name: "Dan", shadows: 453, rating: 3, picture: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.webp", description: "Lorem ipsum dolor sit amet consectetur. Imperdiet nec egestas nunc aenean amet. Tellus tincidunt bibendum nunc urna tortor leo enim tortor. Elit mattis egestas venenatis sed ultricies. Vestibulum fermentum in metus urna. In gravida sit ut vestibulum non nisl malesuada.", school: "" },
  { name: "Dan", shadows: 453, rating: 3, picture: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.webp", description: "Lorem ipsum dolor sit amet consectetur. Imperdiet nec egestas nunc aenean amet. Tellus tincidunt bibendum nunc urna tortor leo enim tortor. Elit mattis egestas venenatis sed ultricies. Vestibulum fermentum in metus urna. In gravida sit ut vestibulum non nisl malesuada.", school: "" },
  { name: "Dan", shadows: 453, rating: 3, picture: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.webp", description: "Lorem ipsum dolor sit amet consectetur. Imperdiet nec egestas nunc aenean amet. Tellus tincidunt bibendum nunc urna tortor leo enim tortor. Elit mattis egestas venenatis sed ultricies. Vestibulum fermentum in metus urna. In gravida sit ut vestibulum non nisl malesuada.", school: "" },
];

const User: React.FC<CourseProps> = ({ item, navigation }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.picture }} style={styles.profilePicture} />
    <Text style={styles.userName}>
      {item.name}
    </Text>
    <Text style={styles.userDescription}>
      {item.description}
    </Text>
    <View style={styles.userActions}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="md-add-outline" size={14} style={styles.forwardIcon} />
        Shadow
      </TouchableOpacity>
      <Text style={styles.userDescription}>
        {item.shadows}
        {" shadows"}
      </Text>
    </View>
  </View>
);

export default function SubjectTab({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.headNav}>
        <TouchableOpacity style={styles.back}>
          <Ionicons name="md-arrow-back-outline" size={20} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>
          Subject
        </Text>
      </View>
      <Text style={styles.subjectName}>
        C programming
      </Text>
      <FlatList
        data={usersData}
        renderItem={({ item }) => <User item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E5EEFF',
  },
  headNav: {
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    position: 'relative',
    backgroundColor: '#fff',
    width: 38,
    height: 38,
    borderRadius: 38
  },
  backIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  pageTitle: {
    display: 'flex',
    fontFamily: "Futura",
    fontSize: 16,
  },
  subjectName: {
    fontFamily: "Futura",
    fontSize: 50,
    marginVertical: 23,
    marginLeft: 5,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 15
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 15
  },
  userName: {
    fontFamily: "Futura",
    fontSize: 18,
  },
  userDescription: {
    fontFamily: "Futura",
    color: '#4D4D4D',
    fontSize: 13,
    marginVertical: 13,
    textAlign: 'justify'
  },
  button: {
    fontFamily: "Futura",
    color: '#fff',
    fontSize: 13,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 30,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    gap: 8
  },
  forwardIcon: {
    color: '#fff'
  },
  userActions: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center"
  }
});

interface Props {
  navigation: unknown;
}