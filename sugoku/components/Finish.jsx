import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert, Button, View } from 'react-native';

export default function Finish ( {navigation, route} ) {
  const { username } = route.params;
  let showUser = username == '' ? 'Krisna' : username

  function backToHome () {
    navigation.navigate('Home')
  }

  return (
    <View style={ styles.container }>
      <View>
        <Text style= { styles.welcome }>Well done {showUser} </Text>
      </View>
      <View style= { styles.start }>
        <Button title="Home" onPress={() => backToHome() } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems : 'center'
  },
  welcome:{
    marginTop : 100,
    fontSize : 30,
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
  start : {
    marginTop: 200
  }
});