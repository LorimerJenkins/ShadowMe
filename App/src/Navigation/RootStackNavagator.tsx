import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

import LoginScreen from '../tabs/LoginTab';
import FeedTab from '../tabs/Feed'
import ProfileTab from '../tabs/ProfileTab'
import InstitutionTab from '../tabs/Institution'
import SubjectTab from '../tabs/Subject'


const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={FeedTab} />
      <Stack.Screen name="Profile" component={ProfileTab} />
      <Stack.Screen name="Institution" component={InstitutionTab} />
      <Stack.Screen name="Subject" component={SubjectTab} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
