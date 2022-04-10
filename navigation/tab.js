import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../secreens/home/home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import add from '../secreens/add/add';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
function tab() {
  return (
    <Tab.Navigator
    
    // screenOptions={{tabBarShowLabel:false,headerShown:false}}
    screenOptions={{headerShown:false}}
    >
     <Tab.Screen name="home" component={home} options={{
        tabBarIcon:(focused,color,size)=>(
          <AntDesign name="home" size={30} color="#5ba1f4" />
      )
     }}/>
     <Tab.Screen name='add' component={add} options={{
       tabBarIcon:(focused,color,size)=>(
          < Ionicons name='md-add-circle-outline' size={30} color="#5ba1f4"/>
       )
     }}
      /> 
     
    </Tab.Navigator>
  );
}
export default tab;