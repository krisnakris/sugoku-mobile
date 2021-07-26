import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert, Button, View, TouchableOpacity } from 'react-native';
import Board from './Board';
import { useDispatch, useSelector } from 'react-redux';
import { getSudokuAsync, getSudokuStartAsync, solveSudokuAsync, validateSudokuAsync } from '../store/action';

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
    dispatch(getSudokuStartAsync(difficulty));
  }, [dispatch])

  useEffect(() => {
      if (status == 'broken' || status == 'unsolvable') {
       alert();
      } else if (status == 'solved') {
        navigation.replace('Finish', {
          username
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

      <Text style={ styles.status }> Status : { status } </Text>
        
        <View style={ styles.solve }>
          <TouchableOpacity style={ styles.button } onPress={ () => { solveGames() } }> 
            <Text style={{ color: 'white' }}>
              Solve 
            </Text> 
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button }  onPress={ () => { checkGames() } }> 
            <Text style={{ color: 'white' }}> 
              Check
            </Text> 
          </TouchableOpacity>
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
  },
  status: {
    marginTop: 20
  },
  button: {
    margin : 10,
    backgroundColor : '#2196f3',
    padding : 10,
  },
  solve: {
    marginTop: 20,
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  check: {
    marginTop: 20
  }
});