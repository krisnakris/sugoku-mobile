const initialState = {
  sudokuStore : [],
  status : 'unsolved',
  startSudokuStore : []
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'sudoku/getSudoku') {
    return { ...state, sudokuStore : payload }
  } else if (type === 'sudoku/setStatus') {
    return { ...state, status : payload }
  } else if ( type === 'sudoku/done') {
    return { ...state, sudokuStore : [], status : 'unsolved' }
  } else if (type === 'sudoku/startSudoku') {
    return { ...state, sudokuStore : payload, startSudokuStore : payload }
  }

  return state;
}

export default reducer;