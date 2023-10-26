import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

import LoginScreen from '../tabs/LoginTab';
import FeedTab from '../tabs/Feed'
import ProfileTab from '../tabs/ProfileTab'


const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={FeedTab} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileTab} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
