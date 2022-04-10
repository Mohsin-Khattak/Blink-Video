import React from 'react';
import { styles} from './style';
import {View,Image,Text, TextInput,TouchableOpacity} from 'react-native';
const upload=({navigation})=>{
return(
<View style={{flex:1,backgroundColor:'#ffffff'}}>
    
    <Image style={styles.appicon} source={require('../../src/assets/images/logo.png')}/>

    <View style={styles.title}>
        <Text style={styles.txt}>Enter Title</Text>
        <TextInput style={styles.titleinput} placeholderTextColor={"gray"} placeholder='' />
    </View> 
    
    <View style={styles.description}>
        <Text style={styles.txt}>Enter Description</Text>
        <TextInput style={styles.titleinput} placeholderTextColor={"gray"} placeholder='' />
    </View>

    <View style={styles.description}>
        <Text style={styles.txt}>Enter Keyword</Text>
        <TextInput style={styles.titleinput} placeholderTextColor={'gray'} placeholder='' />
    </View>

    <View style={styles.description}>
        <Text style={styles.txt}>Enter Url</Text>
        <TextInput style={styles.titleinput} placeholderTextColor={'gray'} placeholder='' />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:40,marginTop:30}}>
    <TouchableOpacity  onPress={() => navigation.navigate('splash')} style={styles.savebtn}>
        <Text style={styles.txtbtn}>Save</Text>
    </TouchableOpacity>
    <View style={styles.canclebtn}>
        <Text style={styles.txtbtn}>Cancle</Text>
    </View>
    </View>
   
</View>
 );
};
export default upload;