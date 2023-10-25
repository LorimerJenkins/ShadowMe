import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { logOut } from '../utils/OthentAuth';
import { AuthContext } from '../utils/AuthSession';


const ProfileTab: React.FC = () => {
  const { userDetails, setUserDetails } = useContext(AuthContext);
  
  const handleLogout = async () => {
    try {
      const result = await logOut();
      if (result.success) {
        setUserDetails(null);
      } else {
        Alert.alert('Error', 'Log out failed. Please try again!');
      }
    } catch (error: any) {
      Alert.alert('Error', error);
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => Alert.alert('Deleted', 'Account has been deleted'),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {userDetails && (
        <View style={styles.profileSection}>
          <Image style={styles.profileImage} source={{ uri: userDetails.picture }} />
          <Text style={styles.userName}>{userDetails.name}</Text>
          <Text style={styles.userDetail}>Member since September 2023</Text>
        </View>
      )}
      {userDetails && (
        <View style={styles.actionList}>
          {['Settings', 'Payments', 'About', 'Help', 'Terms of Service'].map((item, index) => (
            <TouchableOpacity style={styles.actionItem} key={index} onPress={() => Alert.alert(item, `${item} Screen`)}>
              <Text style={styles.actionText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.actionItem} onPress={handleLogout}>
            <Text style={styles.actionText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem} onPress={handleDeleteAccount}>
            <Text style={styles.deleteAccountText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  userDetail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  actionList: {
    width: '100%',
  },
  actionItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 18,
  },
  deleteAccountText: {
    color: 'red',
    fontSize: 18,
  },
});

export default ProfileTab;
