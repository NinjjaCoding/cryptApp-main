/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer, DefaulTheme, StackRouter } from '@react-navigation/native';

import { SignUp } from "./screens"

import Tabs from "./navigation/tabs"

const theme = {
  ...DefaulTheme,
  border: {
      ...DefaulTheme.colors,
      border: "transparent"  
  }

}

const  Stack = createStackNavigator() 

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        //initialize signUp screen on loading 
        initialRouteName={'SignUp'}
      >
        <Stack.Screen  name="SignUp" component={SignUp}/>

        {/** Tabs section on the bottom of the page */}
        <Stack.Screen name="Home" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;
