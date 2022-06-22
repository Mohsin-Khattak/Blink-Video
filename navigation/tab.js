import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import view from '../secreens/view/view';
import upload from '../secreens/upload video/upload';
import splash from '../secreens/Splash/splash';
import Search from '../secreens/search/search';

const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator
      // screenOptions={{tabBarShowLabel:false,headerShown:false}}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={view}
        options={{
          tabBarIcon: (focused, color, size) => (
            <AntDesign name="home" size={30} color="#5ba1f4" />
          ),
        }}
      />
      <Tab.Screen
        name="upload"
        component={upload}
        options={{
          tabBarIcon: (focused, color, size) => (
            <AntDesign name="pluscircleo" size={30} color="#5ba1f4" />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={splash}
        options={{
          tabBarIcon: (focused, color, size) => (
            <AntDesign name="adduser" size={30} color="#5ba1f4" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation;
