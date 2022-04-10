import React from 'react';
import { styles} from './style';
import {View,Text, TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
const admin=({navigation})=>{
return(
<View style={{flex:1,backgroundColor:'#ffffff'}}>
<ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
    <Image style={styles.appicon} source={require('../../src/assets/images/logo.png')}/>
    <Text style={styles.login}>Admin Login</Text>
    <Text style={styles.continue}>Please login to continue.</Text>

        <View style={{...styles.email,flexDirection:'row',alignItems:"center"}}>
        <Fontisto name='email' size={20} color={'black'}  />
        <TextInput style={styles.useremail} marginLeft={20} placeholderTextColor={"gray"} placeholder='Admin Name' />
        </View>

        <View style={{...styles.password,flexDirection:'row',alignItems:'center'}}>
        <AntDesign name='lock1' size={20} color={'black'} />
        <TextInput style={styles.useremail} marginLeft={20} placeholderTextColor={"gray"} placeholder='Admin Password' />
        </View>
        
        <TouchableOpacity  onPress={() => navigation.navigate('upload')} style={{...styles.loginbtn,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
        <Text style={styles.logintxt}>LOG IN {' '}
        <AntDesign name='arrowright' color={'white'} size={20}/>
        </Text>
        </TouchableOpacity>
        
        {/* <Text style={styles.dontacount}>Don't have an account? {` `}
        <Text onPress={() => navigation.navigate('signup') } style={styles.signup}>Sign Up</Text>
        </Text> 
         */}
        {/* <Text style={styles.dontacount}>Login with {` `}
        <Text onPress={() => navigation.navigate('admin') } style={styles.signup}>Admin</Text>
        </Text>  */}
        </ScrollView>
</View>
 );
};
export default admin; 