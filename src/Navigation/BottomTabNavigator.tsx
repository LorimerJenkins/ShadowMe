import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from '../utils/AuthSession';
import PropertiesTab from '../tabs/PropertiesTab';
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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Profile' && userDetails?.picture) {
            return <Image source={{ uri: userDetails.picture }} style={{ width: size, height: size, borderRadius: size / 2 }} />;
          }

          let iconName;
          switch (route.name) {
            case 'Properties':
              iconName = 'home';
              break;
            case 'Bookings':
              iconName = 'calendar';
              break;
            case 'Chat':
              iconName = 'email';
              break;
            case 'Profile':
              iconName = 'account';
              break;
            default:
              iconName = 'home';
              break;
          }

          return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        headerTitle: () => <HeaderLogo />
      })}
    >
      <BottomTab.Screen name="Properties" component={PropertiesTab} />
      <BottomTab.Screen name="Bookings" component={BookingsTab} />
      <BottomTab.Screen name="Chat" component={ChatTab} />
      <BottomTab.Screen name="Profile" component={ProfileTab} />
    </BottomTab.Navigator>
  );

};

export default BottomTabNavigator;
