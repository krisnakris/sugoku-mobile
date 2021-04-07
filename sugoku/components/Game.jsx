import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert, Button, View } from 'react-native';
import Board from './Board';
import { useDispatch, useSelector } from 'react-redux';
import { getSudokuAsync, solveSudokuAsync, validateSudokuAsync } from '../store/action';

export default function Game ({ route, navigation }) {
  const { username, difficulty } = route.params;
  const dataStore = useSelector(state => state.sudokuStore);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();
  
  const alert = () =>
  Alert.alert(
    "Please Check Your Input",
    "This sudoku cannot be solved",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  useEffect(() => {
    dispatch(getSudokuAsync(difficulty));
  }, [dispatch])

  useEffect(() => {
      if (status == 'broken' || status == 'unsolvable') {
       alert();
      } else if (status == 'solved') {
        navigation.navigate('Finish', {
        })
      }
  }, [status])

  function generateBoxRow() {
    return (
      dataStore.map((row, index) => {
        return (
          <Board row = { row } indexBaris = { index } key = { index }> </Board>
        )}
      )
    )
  }

  function  solveGames () {
    let board = { board : dataStore}
    
    dispatch(solveSudokuAsync(board))
  }

  function checkGames () {
    let board = { board : dataStore}
    
    dispatch(validateSudokuAsync(board))
  }

  return (
    <View style={ styles.container }>
      <Text style = { styles.welcome }> Let's play { username } ! </Text>
      <Text style = { styles.difficulty }> Level : { difficulty } </Text>
      
      { generateBoxRow() }

      <Text> Status { status } </Text>
      <View>
        <Button title="Solve" onPress={ () => { solveGames() } }/>
      </View>
      <View>
        <Button title="Check" onPress={ () => { checkGames() } }/>
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
  difficulty : {
    fontSize: 20,
    marginBottom : 20
  }
});