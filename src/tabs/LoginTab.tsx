import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { logIn } from '../utils/OthentAuth';
import { AuthContext } from '../utils/AuthSession';


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  PropertyDetail: {
    property: {
      imageURLs: string[];
      title: string;
      description: string;
      price: number;
    };
  };
};

interface UserDetails {
  at_hash: string;
  aud: string;
  contract_id: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  locale: string;
  name: string;
  nickname: string;
  nonce: string;
  picture: string;
  sid: string;
  sub: string;
  updated_at: string;
}

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { setUserDetails } = useContext(AuthContext);

  const handleLogin = async () => {
    const { success, userDetails, error } = await logIn();
    if (success) {
      setUserDetails(userDetails as UserDetails);
      navigation.replace('Home');
    } else {
      Alert.alert('Login Error', (error as any).toString());
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/app/header-icon.png')} style={styles.logo} />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 247.5,
    height: 67.5,
    marginBottom: 50,
  },
  loginButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
