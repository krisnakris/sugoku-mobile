
const initialState = {
  sudokuStore : [],
  status : 'unsolved'
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'sudoku/getSudoku') {
    return { ...state, sudokuStore : payload }
  } else if (type === 'sudoku/setStatus') {
    return { ...state, status : payload }
  } else if ( type === 'sudoku/done') {
    return { ...state, sudokuStore : [], status : 'unsolved' }
  }

  return state;
}

export default reducer;