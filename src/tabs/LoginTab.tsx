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
        <Text style={styles.largeText}>Shadow Me</Text>
        <Text style={styles.smallText}>(Only Fans for education)</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <View style={styles.buttonContent}>
          <Image source={require('../assets/images/google-logo.png')} style={styles.googleLogo} />
          <Text style={styles.buttonText}>Sign in with Google</Text>
      </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EEFF',
  },
  logo: {
    width: 247.5,
    height: 67.5,
    marginBottom: 50,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
  },
  largeText: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  smallText: {
      fontSize: 16,
      marginBottom: 50,
  },
  buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  googleLogo: {
      width: 24,
      height: 24,
      marginRight: 12,
  },

});

export default LoginScreen;
