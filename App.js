import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LogIn from './secreens/login/login';
//  import loginback from './secreens/login/login';
import SignUp from './secreens/signup/signup';
import Tab from './navigation/tab';
//  import home1 from './secreens/home1/home1';
import Viewvideo from './secreens/view/view';
// import home from './secreens/home/home';
import Admin from './secreens/admin login/admin';
import upload from './secreens/upload video/upload';
import Splash from './secreens/Splash/splash';
import Play from './secreens/play video/play';
import Search from './secreens/search/search';
import SPlashTime from './secreens/Splash Screen';
import CompoundClip from './secreens/comundclip';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SPlashTime" component={SPlashTime} />
        <Stack.Screen name="tab" component={Tab} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="view" component={Viewvideo} />
        <Stack.Screen name="admin" component={Admin} />
        <Stack.Screen name="upload" component={upload} />
        <Stack.Screen name="play" component={Play} />
        <Stack.Screen name="CompoundClip" component={CompoundClip} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
