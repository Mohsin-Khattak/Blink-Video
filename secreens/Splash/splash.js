import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { styles} from './style';
const splash=({navigation})=>{
return(
<View style={{flex:1,backgroundColor:'white'}}>
    <View style={styles.header}>
    <Text style={styles.title}>Blink Video Community with Ranking</Text>
    </View>
<Image style={styles.appicon} source={require('../../src/assets/images/logo.png')}/>


<TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.adduser}>
    <Text style={styles.txtuser}>LogIn User</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('admin')} style={styles.addadmin}>
    <Text style={styles.txtuser}>LogIn Admin</Text>
</TouchableOpacity>
<TouchableOpacity TouchableOpacity onPress={() => navigation.navigate('signup')} style={styles.addadmin}>
    <Text style={styles.txtuser}>Sign Up</Text>
</TouchableOpacity>
</View>
 );
};
export default splash;
