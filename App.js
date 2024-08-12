import {  Text, View } from 'react-native'
import React from 'react'

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Slack = createNativeStackNavigator();
const App = () => {
  return (
   
     <NavigationContainer>
        <Slack.Navigator initialRouteName='Home'>
            <Slack.Screen name='Home' component={ Home } options={{ headerShown:false}} />
        </Slack.Navigator>
     </NavigationContainer>

  )
}

export default App
