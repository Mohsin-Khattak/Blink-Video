import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserData = async () => {
  let userData = await AsyncStorage.getItem('user');

  if (userData) {
    return JSON.parse(userData);
  } else {
    return null;
  }
};
