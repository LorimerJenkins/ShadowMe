import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from '../utils/AuthSession';
import Feed from '../tabs/Feed';
import BookingsTab from '../tabs/BookingsTab';
import ChatTab from '../tabs/ChatTab';
import ProfileTab from '../tabs/ProfileTab';
import HeaderLogo from '../components/HeadlerLogo';
import { Image } from 'react-native';


const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const { userDetails } = useContext(AuthContext);

  return (
    <BottomTab.Navigator 
    >
      <BottomTab.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
      <BottomTab.Screen name="Bookings" component={BookingsTab} />
      <BottomTab.Screen name="Friends" component={ChatTab} />
      <BottomTab.Screen name="Profile" component={ProfileTab} />
    </BottomTab.Navigator>
  );

};

export default BottomTabNavigator;
