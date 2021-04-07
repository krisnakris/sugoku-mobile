import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Game from './components/Game';
import Finish from './components/Finish';
import { Provider } from 'react-redux';
import store from './store/index';

export default function App() {  
  const Stack = createStackNavigator();

  return (
    <Provider store = { store }>
      
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = { Home }></Stack.Screen>
        <Stack.Screen name= "Game" component= { Game } />
        <Stack.Screen name= "Finish" component= { Finish } />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

const styles = StyleSheet.create({
  container: {
    alignItems : 'center'
  },
  welcome:{
    marginTop : 100,
    fontSize: 30,
    marginBottom : 40
  }
});
