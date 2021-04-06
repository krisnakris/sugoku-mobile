import axios from 'axios';

export function getSudoku (payload) {
  console.log(1);
  return { type : 'sudoku/getSudoku', payload }
}

export function getSudokuAsync (difficulty) {
  return (dispatch) => {
    axios({
      url : 'https://sugoku.herokuapp.com/board?difficulty=' + difficulty,
      method : "GET",
    })
      .then( ({ data }) => {
        return data
      })
      .then ( data => {
        dispatch(getSudoku((data.board)));
      })
      .catch(err => {
        console.log(err);
      })
  }
}