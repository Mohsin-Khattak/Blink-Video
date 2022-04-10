 import * as React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { NavigationContainer } from '@react-navigation/native';
 import login from './secreens/login/login';
 import loginback from './secreens/login/login';
 import signup from './secreens/signup/signup';
//  import tab from './navigation/tab';
 import home1 from './secreens/home1/home1';
 import view from './secreens/view/view';
import home from './secreens/home/home';
import admin from './secreens/admin login/admin';
import upload from './secreens/upload video/upload';
import splash from './secreens/Splash/splash';
import play from './secreens/play video/play';
import Clip from './secreens/clip/clip';


 const Stack = createNativeStackNavigator();


 const App = () => {
   return (
     <NavigationContainer>
      
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='splash' component={splash}/>
    <Stack.Screen name="login" component={login}/>
    <Stack.Screen name={"loginback"} component={loginback}/>
     <Stack.Screen name="signup" component={signup} />
     <Stack.Screen name='home' component={home}/>
     <Stack.Screen name='home1' component={home1} />
     <Stack.Screen name='view' component={view} />
     <Stack.Screen name='admin' component={admin}/>
     <Stack.Screen name='upload' component={upload}/>
     <Stack.Screen name='play' component={play}/>
     <Stack.Screen name='Clip' component={Clip}/>
   </Stack.Navigator>
      
 </NavigationContainer>
  );
 };
 export default App;
