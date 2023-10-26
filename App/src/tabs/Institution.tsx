import { Ionicons } from "@expo/vector-icons"
import { StackNavigationProp } from "@react-navigation/stack"
import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { RootStackParamList } from "../Navigation/types"

interface CourseItem {
  picture: string;
  name: string;
  description: string;
}

type CourseNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

interface CourseProps {
  item: CourseItem;
  navigation: CourseNavigationProp;
}

const coursesData: CourseItem[] = [
  { name: "C programming", picture: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", description: "Lorem ipsum dolor sit amet consectetur. Imperdiet nec egestas nunc aenean amet. Tellus tincidunt bibendum nunc urna tortor leo enim tortor. Elit mattis egestas venenatis sed ultricies. Vestibulum fermentum in metus urna. In gravida sit ut vestibulum non nisl malesuada." },
  { name: "C programming", picture: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", description: "Lorem ipsum dolor sit amet consectetur. Imperdiet nec egestas nunc aenean amet. Tellus tincidunt bibendum nunc urna tortor leo enim tortor. Elit mattis egestas venenatis sed ultricies. Vestibulum fermentum in metus urna. In gravida sit ut vestibulum non nisl malesuada." },
  { name: "C programming", picture: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", description: "Lorem ipsum dolor sit amet consectetur. Imperdiet nec egestas nunc aenean amet. Tellus tincidunt bibendum nunc urna tortor leo enim tortor. Elit mattis egestas venenatis sed ultricies. Vestibulum fermentum in metus urna. In gravida sit ut vestibulum non nisl malesuada." }
];

const Course: React.FC<CourseProps> = ({ item, navigation }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.picture }} style={styles.courseImage} />
    <Text style={styles.courseTitle}>
      {item.name}
    </Text>
    <Text style={styles.courseDescription}>
      {item.description}
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Subject", { subject: item.name })}>
      View
      <Ionicons name="md-arrow-forward-outline" size={14} style={styles.forwardIcon} />
    </TouchableOpacity>
  </View>
);

export default function InstitutionTab({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.headNav}>
        <TouchableOpacity style={styles.back}>
          <Ionicons name="md-arrow-back-outline" size={20} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>
          Institution
        </Text>
      </View>
      <Text style={styles.schoolName}>
        Virginia Tech
      </Text>
      <FlatList
        data={coursesData}
        renderItem={({ item }) => <Course item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFEBF1',
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
  schoolName: {
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
  },
  courseImage: {
    width: '100%',
    height: 200,
  },
  courseTitle: {
    fontFamily: "Futura",
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 15
  },
  courseDescription: {
    fontFamily: "Futura",
    color: '#4D4D4D',
    fontSize: 13,
    marginVertical: 10,
    marginHorizontal: 15,
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
    marginLeft: 'auto',
    marginVertical: 10,
    marginHorizontal: 15,
    gap: 8
  },
  forwardIcon: {
    color: '#fff'
  }
});

interface Props {
  navigation: unknown;
}