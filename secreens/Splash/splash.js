import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
const Splash = ({navigation}) => {
  const clearAsyncStorage = async () => {
    await AsyncStorage.clear().then(() => {
      navigation.navigate('login');
    });
  };
  //   const [email, setEmail] = useState('mohsinkhattak053@gmail.com');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.title}>Blink Video Community with Ranking</Text>
      </View>
      <Image
        style={styles.appicon}
        source={require('../../src/assets/images/logo.png')}
      />

      <TouchableOpacity
        onPress={() => clearAsyncStorage()}
        style={styles.adduser}>
        <Text style={styles.txtuser}>Log Out</Text>
      </TouchableOpacity>
      {/* <Text>{email.split('@', 1)}</Text> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('admin')} style={styles.addadmin}>
    <Text style={styles.txtuser}>LogIn Admin</Text>
</TouchableOpacity> */}
      {/* <TouchableOpacity
        TouchableOpacity
        onPress={() => navigation.navigate('signup')}
        style={styles.addadmin}>
        <Text style={styles.txtuser}>Sign Up</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default Splash;
