import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Game from './components/Game';
import { Provider } from 'react-redux';
import store from './store/index';

export default function App() {
  const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   axios({
  //     url : 'https://sugoku.herokuapp.com/board?difficulty=easy',
  //     method : "GET",
  //   })
  //     .then( ({data}) => {
  //       return data
  //     })
  //     .then ( data => {
  //       setData(arrayTransform(data.board));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [])

  const Stack = createStackNavigator();

  return (
    <Provider store = { store }>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = { Home }></Stack.Screen>
        <Stack.Screen name= "Game" component={ Game } />
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
