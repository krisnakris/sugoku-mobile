import axios from 'axios';

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

export function getSudoku (payload) {
  return { type : 'sudoku/getSudoku', payload }
}

export function getSudokuAsync (difficulty) {
  return (dispatch) => {
      axios({
        url : 'https://sugoku2.herokuapp.com/board?difficulty=' + difficulty,
        method : "GET",
      })
        .then( ({ data }) => {
          return data
        })
        .then ( data => {
          dispatch(getSudoku((data.board)))
          dispatch(validateSudoku('unsolved'))
        })
        .catch(err => {
          console.log(err);
        })
  }
}

export function solveSudokuAsync (board) {
  return (dispatch) => {
    fetch('https://sugoku2.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams(board),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
        .then(response => response.json())
        .then(response => {
          dispatch(getSudoku(response.solution))
          if (response.status !== 'solved') dispatch(validateSudoku(response.status))  
        })
        .catch(console.warn)
  }
}

export function validateSudoku (payload) {
  return { type : 'sudoku/setStatus', payload }
}

export function validateSudokuAsync (board) {
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/validate', {
      method: 'POST',
      body: encodeParams(board),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(response => {
        dispatch(validateSudoku(response.status));
      })
      .catch(console.warn)
  }
}
