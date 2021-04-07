import { TextInput, Text, View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { getSudoku } from '../store/action';
import React, { useEffect, useState } from 'react';


export default function Number (props) {
  
  const sudoku = useSelector(state => state.sudokuStore);
  const dispacth = useDispatch();
  const { angka, indexBaris, indexKolom } = props;
  const [initialArray, setInitialArray] = useState([]);
  const startSudokuStore = useSelector(state => state.startSudokuStore);

  function updateAngka (angka) {
    if (isNaN(+angka)) {
      
    } else {
      if (startSudokuStore[indexBaris][indexKolom] == 0) {
        let newSudoku = JSON.parse(JSON.stringify(sudoku));
        newSudoku[indexBaris][indexKolom] = (+angka);
        dispacth(getSudoku(newSudoku));
      }
    }
      
      // let newSudoku = JSON.parse(JSON.stringify(sudoku));
      // newSudoku[indexBaris][indexKolom] = (+angka);
      // dispacth(getSudoku(newSudoku));
  }
  
  // function showAngka () {
  //   if (+angka != 0) {
  //     return <Text style = { styles.input }> { angka } </Text>
  //   } else {
  //     return <TextInput style = { styles.input } maxLength= { 1 } value = '' onChangeText = { (itemValue) => updateAngka(itemValue) }> </TextInput>
  //   }
  // }

  // && angka != null && angka !== NaN 

  // <TextInput style = { styles.input } maxLength= { 1 } value = { angka !== 0 ? String(angka) : '' } onChangeText = {(itemValue) => updateAngka(itemValue)} >
  // </TextInput>

  return (
    <View>
      <TextInput style = { styles.input } maxLength= { 1 } value = { angka !== 0 ? String(angka) : '' } onChangeText = {(itemValue) => updateAngka(itemValue)} >
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