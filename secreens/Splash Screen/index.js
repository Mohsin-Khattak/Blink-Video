import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SPlashTime = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);
  const getData = async () => {
    let id = await AsyncStorage.getItem('user');
    if (id) {
      navigation.navigate('tab');
    } else {
      navigation.navigate('login');
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Image
        style={{width: 200, height: 200, alignSelf: 'center', marginTop: 250}}
        source={require('../../src/assets/images/logo.png')}
      />
      <Text
        style={{
          fontSize: 28,
          color: 'black',
          paddingHorizontal: 20,
          textAlign: 'center',
        }}>
        Blink Video Community With Ranking
      </Text>
    </View>
  );
};
export default SPlashTime;
