import React, { useState } from 'react';
import {View,Text,FlatList,Image, Dimensions,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
 import YoutubePlayer from 'react-native-youtube-iframe';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { styles } from './style';
import { urls } from '../../src/api/api-urls'


const view=({navigation})=>{
   const [data,setData]=React.useState([]);
   const ref=React.useRef();
   

React.useEffect(()=>{
  (async()=>{
      const res=await axios.get('http://192.168.100.40/BlinkVideoApi/api/'+urls.video.getVideo);
      console.log('res:',res?.data);
      setData(res?.data)
    })();
},[])


return(
<View style={{flex:1,backgroundColor:'white'}}>
    <View style={{...styles.header,flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.logo} source={require('../../src/assets/images/logo.png')} />
        <Text style={styles.projectname}>Blink Video</Text>
        <AntDesign name='search1' color={'#5ba1f4'} size={30} style={styles.search}/>
    </View>

    <FlatList data={data}
    keyExtractor={(item,index)=>index.toString()}
    renderItem={({item,index})=>{
        console.log('item',item);
        return(
           
               
            <View>
                <TouchableOpacity  onPress={() => navigation.navigate('play',{item:item})} style={styles.video}>
                <Image style={{height:200,width:'100%'}} source={{uri:`https://img.youtube.com/vi/${item.V_Url}/0.jpg`}}/>
                </TouchableOpacity>
                
                <View style={styles.title}>
                    <Text style={styles.name_1}>{item.V_Title}</Text>
                    <Entypo style={styles.Entypo} name='dots-three-vertical' size={20} color={'black'} />
                </View>
                
                <View style={styles.time}>
                    <Text style={styles.time1}>Time Duration: {item.time} </Text>
                </View>
</View>
        )
    }}
    /> 
    

</View>
 );
};
export default view;
