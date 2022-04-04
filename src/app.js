import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './component/loginScreen';
import RegisScreen from './component/regisScreen';
import Home from './component/homeScreen';
import About from './component/aboutScreen';
import Tweet from './component/tweetScreen';
import { Provider } from "react-redux";
import store  from './redux/store';

console.disableYellowBox = true;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Regis" component={RegisScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Tweet" component={Tweet} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

