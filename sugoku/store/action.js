import axios from 'axios';
import arrayTransform from '../helpers/arrayConvert';

export function getSudoku (payload) {
  return { type : 'sudoku/getSudoku', payload}
}

export function getSudokuAsync (difficulty) {
  return (dispacth) => {
    axios({
      url : 'https://sugoku.herokuapp.com/board?difficulty=' + difficulty,
      method : "GET",
    })
      .then( ({ data }) => {
        return data
      })
      .then ( data => {
        dispatch(getSudoku(arrayTransform(data.board)));
      })
      .catch(err => {
        console.log(err);
      })
  }
}