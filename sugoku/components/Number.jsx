import { TextInput, Text, View, StyleSheet } from "react-native"
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSudoku } from '../store/action';

export default function Number (props) {
  
  const sudoku = useSelector(state => state.sudokuStore);
  const dispacth = useDispatch();
  const { angka, indexBaris, indexKolom } = props;

  function updateAngka (angka) {
    let newSudoku = JSON.parse(JSON.stringify(sudoku));
    newSudoku[indexBaris][indexKolom] = (+angka);
    dispacth(getSudoku(newSudoku));
  }
  
  function isEditable () {
    if (angka !== 0) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <View>
      <TextInput style = { styles.input } maxLength= { 1 } value = { angka !== 0 ? angka : '' } onChangeText = {(itemValue) => updateAngka(itemValue)} >
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