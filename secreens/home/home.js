import React from 'react';
import {View,Text,Image,FlatList,TouchableOpacity} from 'react-native';
import { styles } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
const home=({navigation})=>{

    const data=[
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Object Oriented Programming ",
           
        },
        {
            img: require("../../src/assets/images/pf.jpg"),
            title:"Programming Fundamentals",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/cn.jpg"),
            title:"Computer Network",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/cc.jpg"),
            title:"Compiler Construction",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/ins.jpg"),
            title:"Information Security",
           
        },
    ]
    const  renderItem=(item)=>{
        return(
            <TouchableOpacity onPress={() => navigation.navigate('home1')} style={styles.flatlistItem}>
            <Image 
            style={styles.flatlistImage}
             source={item.img}
            />
            <View style={styles.itemdetailsContainer}>

            <Text style={{color:'black', fontWeight:'bold',fontSize:23,alignSelf:'center',marginTop:20}}> 
              {  item.title}
            </Text>
            </View>
            
            </TouchableOpacity>
        )
    }
    const renderCategory=(item)=>{
        return(
            <TouchableOpacity onPress={() => navigation.navigate('home1')} style={styles.horizontalflatlistitem}>
              
                <Text style={styles.subjecttxt} >
                    {item.title}
                </Text>
               
            </TouchableOpacity>
        )
    }
return(
<View style={{flex:1}}>
    <View style={{...styles.header,flexDirection:'row', alignItems:'center',borderBottomWidth:1,borderColor:'#CECECE'}}>
        <Image style={styles.logo} source={require('../../src/assets/images/logo.png')} />
        <Text style={styles.projectname}>Blink Video</Text>
        <AntDesign name='search1' color={'#5ba1f4'} size={20} style={styles.search}/>
    </View>
    
    <View style={{height:65,flexDirection:'row',backgroundColor:'white'}}>
    <View style={styles.course}>
    <Text style={styles.coursetxt}>Courses</Text>
    </View>
    <FlatList
        data={Array(6).fill(),data}
        horizontal={true}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item}) =>renderCategory(item)}
    />
    </View>

    <FlatList
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item}) =>renderItem(item)}
    />


</View>
 );
};
export default home;