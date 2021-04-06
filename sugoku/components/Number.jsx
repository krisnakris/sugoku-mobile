import { TextInput, Text, View, StyleSheet } from "react-native"
import React, { useState } from 'react';

export default function Number (props) {
  const { angka } = props;

  return (
    <View>
      <TextInput style = { styles.input } maxLength= { 1 }>
        { angka.value !== 0 ? angka.value : '' }
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  input : {
    height : 40,
    width : 40,
    borderWidth : 1,
    textAlign: 'center'

  }
});