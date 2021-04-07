import { StyleSheet, Text, TextInput, Picker, Alert, Button, View, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearBoard } from '../store/action';

export default function Home ({ navigation }) {
  const [difficulty, setDifficulty] = useState('easy')
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  
  function alert () {
  Alert.alert(
    "Please Input your username and difficulty",
    "Enter your name and level of difficulty",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  )};
  
  function startGame () {
    if (username !== '' && difficulty !== '') {
      dispatch(clearBoard());
      navigation.navigate('Game', {
        username, difficulty
      })
    } else {
      alert();
    }
  }

  return (
    <View style={ styles.container }>
      <View>
        <Text style = { styles.welcome }>Welcome to sugokuss!</Text>
      </View>
      <View>
        <SafeAreaView>
          <Text> Username : </Text>
          <TextInput
            style={ styles.input }
            value={ username }
            onChangeText = { setUsername } 
            placeholder="Username"
            maxLength= { 10 }
          />
        </SafeAreaView>
      </View>

      <View style={ styles.picker }>
        <Picker
          selectedValue = { difficulty }
          style = {{ height: 50, width: 100 }}
          onValueChange = { (itemValue, itemIndex) => setDifficulty(itemValue) }>
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
          <Picker.Item label="Random" value="random" />
        </Picker>
      </View>
     
      <View style = { styles.start }>
        <Button title= "Start" onPress={() => startGame() } />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems : 'center'
  },
  welcome:{
    marginTop : 100,
    fontSize: 30,
    marginBottom : 40
  },
  dropdown : {
    marginTop : 10
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomColor : 'black',
    borderBottomWidth : 2
  },
  start : {
    marginTop: 200
  },
  picker : {
    marginTop: 30
  }
});
