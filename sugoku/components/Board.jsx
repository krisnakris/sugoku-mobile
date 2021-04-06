import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Number from './Number';

export default function Board (props) {
  const { row, indexBaris } = props;

  function textInput () {
    return (
      row.map((angka, index) => {
        return(
         <Number angka = { angka } indexBaris = {indexBaris} indexKolom = { index } key = { index }> </Number>
        )
      })
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

