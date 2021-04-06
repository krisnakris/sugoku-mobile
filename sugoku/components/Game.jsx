import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import Board from './Board';
import { useDispatch, useSelector } from 'react-redux';
import { getSudokuAsync } from '../store/action';

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

  return (
    <View style={ styles.container }>
      <Text style = { styles.welcome }> Let's play { username } ! </Text>
      <Text style = { styles.difficulty }> Level : { difficulty } </Text>
      { generateBoxRow() }
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