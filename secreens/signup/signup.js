import axios from 'axios';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { styles } from './style';
const signup=({navigation})=>{

    
    
    const [fullname, setName]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [Conform_password, setConfrompassword]=useState();

    const [data,setData]=useState();
    
     const signup=async()=>{
         try {
             const res=await axios.post(`http://192.168.100.40/BlinkVideoApi/api/BlinkVideo/AddNew`,{
                "U_Name":fullname,
            "U_Password":password,
            "U_Role":"User"
            });
             console.log('res',res?.data);
             setData(res?.data)
             

             alert('Signiup Sucessfully')
         } catch (error) {
         }
     };

    OnSingnUp =() =>{
        if(!fullname?.trim())
            alert('please enter name')
        else if(!email?.trim())
            alert('please enter email')
        else if(password?.length<4)
            alert('please enter password')
        else if(Conform_password!=password)
            alert('please enter conform password')
        else
            signup()
    }


return(
<View style={{flex:1,backgroundColor:'#ffffff'}}>
    <ScrollView contentContainerStyle={{paddingBottom:10}}>
<AntDesign name='arrowleft' color={'black'} size={30} onPress={() => navigation.navigate('loginback') } style={styles.arrow}/>
    <Image style={styles.appicon} source={require('../../src/assets/images/logo.png')}/>
    <Text style={styles.createaccount}>Create Account</Text>

    <View style={{...styles.name,flexDirection:'row',alignItems:'center'}}>
        <AntDesign name='user' size={20} color={'black'}/>
        <TextInput style={{color:'black'}} marginLeft={20} placeholderTextColor={"gray"} placeholder={"Full Name"} 
            onChangeText={fullname => setName(fullname)}
        />
    </View> 

    <View style={{...styles.email,flexDirection:'row',alignItems:"center"}}>
        <Fontisto name='email' size={20} color={'black'}  />
        <TextInput style={styles.useremail} marginLeft={20} placeholderTextColor={"gray"} placeholder='Email'
            onChangeText={email => setEmail(email)}
        />
    </View>
    
    <View style={{...styles.email,flexDirection:'row',alignItems:"center"}}>
        <AntDesign name='lock1' size={20} color={'black'} />
        <TextInput style={styles.useremail} marginLeft={20} placeholderTextColor={"gray"} placeholder='Password' 
            onChangeText={password => setPassword(password)}
        />
    </View>

    <View style={{...styles.email,flexDirection:'row',alignItems:'center'}}>
        <AntDesign name='lock1' size={20} color={'black'} />
        <TextInput style={styles.useremail} marginLeft={20} placeholderTextColor={"gray"} placeholder='Conform Password' 
            onChangeText={conformpassword =>setConfrompassword(conformpassword)}
        />
    </View>

    <TouchableOpacity 
    onPress={() => OnSingnUp()} style={{...styles.signupbtn, flexDirection:'row',alignItems:"center"}}>
        <Text style={styles.signuptxt}>SIGN UP {' '}
        <AntDesign name='arrowright' color={'white'} size={20}/>
        </Text>
    </TouchableOpacity>

    <Text style={styles.alreadyacount}>Already have a account? {' '}
        <Text onPress={() => navigation.navigate('login') } style={{color:'#5ba1f4', fontWeight:'bold'}}>Sign in</Text>
    </Text>
    </ScrollView>
</View>
 );
};
export default signup;