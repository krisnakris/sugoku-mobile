import { TextInput, Text, View, StyleSheet } from "react-native"
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { validateSudokuAsync } from '../store/action';
import encodeBoards from '../helpers/encodeParam';

export default function Number (props) {
  const { angka, indexBaris, indexKolom } = props;

  const sudoku = useSelector(state => state.sudokuStore);
  const dispacth = useDispatch();

  function updateAngka (angka) {
    let newSudoku = sudoku;
    newSudoku[indexBaris][indexKolom] = Number(angka);
    let data = { board : newSudoku };

  }
  
  // onChangeText = { (itemValue) => updateAngka(itemValue) 

  function isEditable () {
    if (angka !== 0) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <View>
      <TextInput style = { styles.input } keyboardType = 'numeric' maxLength= { 1 } >
        { angka !== 0 ? angka : '' }
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