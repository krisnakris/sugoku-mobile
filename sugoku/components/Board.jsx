import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Number from './Number';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Board (props) {
  const { row } = props;

  function textInput () {
    return (
      row.map((angka, index) => <Number angka = { angka } key = { index }> </Number>)
    )
  }

  return (
    <View style= { styles.container }>
      { textInput() }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection : "row",
  }

});

