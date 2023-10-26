import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './utils/AuthSession';
import RootStackNavigator from './Navigation/RootStackNavagator';

export function App() {

  return (
    <NavigationContainer>
        <AuthProvider>
            <RootStackNavigator />
        </AuthProvider>
    </NavigationContainer>
  );
};