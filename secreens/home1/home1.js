import React from 'react';
import {View,Text,Image,FlatList,TouchableOpacity} from 'react-native';
import { styles } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
const home1=({navigation})=>{
    
    const data=[
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Intro and Overview",
           
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Review of Fundamentals of Procedural Programming",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Objects",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Data Abstraction",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Constructors, destructors, and object creation",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Methods Overloading",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Inheritance",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Polymorphism",
           
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Abstract Classes",
            time:"04 dec 2022 09:40 pm"
        },
        {
            img: require("../../src/assets/images/oop.png"),
            title:"Exception Handling",
            time:"04 dec 2022 09:40 pm"
        },
    ]
    const  renderItem=(item)=>{
        return(
            <TouchableOpacity onPress={() => navigation.navigate('view')} style={{...styles.flatlistItem,flexDirection:'row'}}>
            <Image 
            style={styles.flatlistImage}
             source={item.img}
            />
            <View style={styles.itemdetailsContainer}>

            <Text style={styles.title}> 
              {  item.title}
            </Text>
            </View>
            
            </TouchableOpacity>
        )
    }
  
return(
<View style={{flex:1}}>
    <View style={{...styles.header,flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.logo} source={require('../../src/assets/images/logo.png')} />
        <Text style={styles.projectname}>Blink Video</Text>
        <AntDesign name='search1' color={'#5ba1f4'} size={30} style={styles.search}/>
    </View>
    

    <FlatList
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item}) =>renderItem(item)}
    />


</View>
 );
};
export default home1;