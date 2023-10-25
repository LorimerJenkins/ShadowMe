import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

import LoginScreen from '../tabs/LoginTab';
import HeaderLogo from '../components/HeadlerLogo';
import BottomTabNavigator from './BottomTabNavigator';
import TradeProperty from '../screens/TradeProperty'


const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitle: () => <HeaderLogo /> }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="TradeProperty" component={TradeProperty} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
