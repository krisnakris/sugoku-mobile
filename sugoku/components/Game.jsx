import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import Board from './Board';
import { useDispatch, useSelector } from 'react-redux';
import { getSudokuAsync } from '../store/action';
import encodeParam from '../helpers/encodeParam';

export default function Game ({ route }) {
  const { username, difficulty } = route.params;

  const dataStore = useSelector(state => state.sudokuStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!difficulty) difficulty == 'easy';
    dispatch(getSudokuAsync(difficulty));
  }, [dispatch])

  function generateBoxRow() {
    return (
      dataStore.map((row, index) => {
        return (
          <Board row = { row } indexBaris = { index } key = { index }> </Board>
        )
      }
    )
    )
  }

  function solveGames () {
    // let board = { board : dataStore}
    console.log('masuk');
    // const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

    // const encodeParams = (params) => 
    //   Object.keys(params)
    //   .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    //   .join('&');
    
    // const data = {board:[[0,0,0,0,0,0,8,0,0],[0,0,4,0,0,8,0,0,9],[0,7,0,0,0,0,0,0,5],[0,1,0,0,7,5,0,0,8],[0,5,6,0,9,1,3,0,0],[7,8,0,0,0,0,0,0,0],[0,2,0,0,0,0,0,0,0],[0,0,0,9,3,0,0,1,0],[0,0,5,7,0,0,4,0,3]]}

    // fetch('https://sugoku.herokuapp.com/solve', {
    //   method: 'POST',
    //   body: encodeParams(data),
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //   })
    //     .then(response => console.log(response.json()))
    //     .then(response => console.log('berhasil'))
    //     .catch(console.warn)
  }

  return (
    <View style={ styles.container }>
      <Text style = { styles.welcome }> Let's play { username } ! </Text>
      <Text style = { styles.difficulty }> Level : { difficulty } </Text>
      
      { generateBoxRow() }

      <Text>Status</Text>
 
    </View>
  );
}

{/* <View>
<Button title="Solves" onPress={ () => { solveGames() } }/>
</View> */}

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