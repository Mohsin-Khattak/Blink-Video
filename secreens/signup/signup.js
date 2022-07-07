import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {urls} from '../../src/api/api-urls';
import {styles} from './style';

const SignUp = ({navigation}) => {
  const [select, setSelect] = useState('user');
  const [fullname, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [Conform_password, setConfrompassword] = useState();

  const [data, setData] = useState();
  const saveData = async user_info => {
    await AsyncStorage.setItem('user', JSON.stringify(user_info));
  };
  const signup = async () => {
    alert(select);
    try {
      const res = await axios.post(`${urls.base_url}BlinkVideo/AddNew`, {
        U_Name: fullname,
        U_Password: password,
        user_email: email,
        U_Role: select,
      });
      console.log('res', res?.data);
      setData(res?.data);
      await saveData(res?.data);
      alert('Signiup Sucessfully');
      navigation.navigate('tab');
    } catch (error) {}
  };

  const OnSingnUp = () => {
    if (!fullname?.trim()) alert('please enter name');
    else if (!email?.trim()) alert('please enter email');
    else if (password?.length < 3) alert('please enter password');
    else {
      signup();
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView contentContainerStyle={{paddingBottom: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <AntDesign
            name="arrowleft"
            color={'black'}
            size={30}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Image
          style={styles.appicon}
          source={require('../../src/assets/images/logo.png')}
        />
        <Text style={styles.createaccount}>Create Account</Text>

        <View
          style={{...styles.name, flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="user" size={20} color={'black'} />
          <TextInput
            style={{color: 'black'}}
            marginLeft={20}
            placeholderTextColor={'gray'}
            placeholder={'Full Name'}
            onChangeText={fullname => setName(fullname)}
            value={fullname}
          />
        </View>

        <View
          style={{...styles.email, flexDirection: 'row', alignItems: 'center'}}>
          <Fontisto name="email" size={20} color={'black'} />
          <TextInput
            style={styles.useremail}
            marginLeft={20}
            placeholderTextColor={'gray'}
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            value={email}
          />
        </View>

        <View
          style={{...styles.email, flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="lock1" size={20} color={'black'} />
          <TextInput
            style={styles.useremail}
            marginLeft={20}
            placeholderTextColor={'gray'}
            placeholder="Password"
            onChangeText={password => setPassword(password)}
            value={password}
          />
        </View>
        <View style={styles.roleview}>
          <Text style={styles.roletxt}>Select Role :</Text>
          <TouchableOpacity
            onPress={() => setSelect('user')}
            style={styles.radioButton}>
            <FontAwesome
              color={select == 'user' ? 'dodgerblue' : 'black'}
              name={select == 'user' ? 'circle' : 'circle-o'}
              size={20}
            />
            <Text style={styles.radioButtonText}>User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect('admin')}
            style={styles.radioButton}>
            <FontAwesome
              color={select == 'admin' ? 'dodgerblue' : 'black'}
              name={select == 'admin' ? 'circle' : 'circle-o'}
              size={20}
            />
            <Text style={styles.radioButtonText}>Admin</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => OnSingnUp()}
          style={{
            ...styles.signupbtn,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.signuptxt}>
            SIGN UP <AntDesign name="arrowright" color={'white'} size={20} />
          </Text>
        </TouchableOpacity>

        <Text style={styles.alreadyacount}>
          Already have a account?{' '}
          <Text
            onPress={() => navigation.navigate('login')}
            style={{color: '#5ba1f4', fontWeight: 'bold'}}>
            Sign in
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};
export default SignUp;
