import { StyleSheet, Text, TextInput, Picker, Button, View, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Home ({ navigation }) {
  const [difficulty, setDifficulty] = useState('')
  const [username, setUsername] = useState('');

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

      <View>
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
     
      <View>
        <Button title="Start" onPress={ () => navigation.navigate('Game', {
          username, difficulty
        }) } />
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
    borderWidth: 1,
  },
});
