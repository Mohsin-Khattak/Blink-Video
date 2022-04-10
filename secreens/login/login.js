 import React from 'react';
import { styles} from './style';
import { useState } from 'react';
import {View,Text, TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { urls } from '../../src/api/api-urls';
import axios from 'axios';

const login=({navigation})=>{

const [name, setName] = useState();
const [password, setPassword] = useState();

const [data,setData]=React.useState([]);
const ref=React.useState();

const lol=async()=>{
  try {   
    const res=await axios.get(`http://192.168.100.40/BlinkVideoApi/api/BlinkVideo/Login?name=${name}&password=${password}`);
    console.log('res',res?.data);
    setData(res?.data)
    navigation.navigate('home')
  } catch (error) {
    alert('Invalid credentials')
  }
};

OnSignIn =()=>{
    if(!name?.trim())
        alert('please enter name')
    else if(!password?.trim())
        alert('please enter password')
    else if(password?.length<4)
        alert('please enter 6 digit password')
    else 
        lol()
}


return(
<View style={{flex:1,backgroundColor:'#ffffff'}}>
<ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
    <Image style={styles.appicon} source={require('../../src/assets/images/logo.png')}/>
    <Text style={styles.login}>Login</Text>
    <Text style={styles.continue}>Please login to continue.</Text>

        <View style={{...styles.email,flexDirection:'row',alignItems:"center"}}>
        <Fontisto name='email' size={20} color={'black'}  />
        <TextInput style={styles.useremail} marginLeft={20} placeholderTextColor={"gray"} placeholder='User Name' 
            onChangeText={name =>setName(name)}
        />
        </View>

        <View style={{...styles.password,flexDirection:'row',alignItems:'center'}}>
        <AntDesign name='lock1' size={20} color={'black'} />
        <TextInput style={styles.useremail} marginLeft={20} placeholderTextColor={"gray"} placeholder='Password'
            onChangeText={password =>setPassword(password)}
        />
        </View>
        
        <TouchableOpacity
            
         onPress={() => OnSignIn()} style={{...styles.loginbtn,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
        <Text style={styles.logintxt}>LOG IN {' '}
        <AntDesign name='arrowright' color={'white'} size={20}/>
        </Text>
        </TouchableOpacity>
        
        <Text style={styles.dontacount}>Don't have an account? {` `}
        <Text onPress={() => navigation.navigate('signup') } style={styles.signup}>Sign Up</Text>
        </Text> 
        
        {/* <Text style={styles.dontacount}>Login {` `}
        <Text onPress={() => navigation.navigate('admin') } style={styles.signup}>Admin</Text>
        </Text>  */}
        </ScrollView>
</View>
 );
};
export default login; 