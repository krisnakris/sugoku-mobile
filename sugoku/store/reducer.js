
const initialState = {
  sudokuStore : [],
  status : 'unsolved'
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'sudoku/getSudoku') {
    return { ...state, sudokuStore : payload }
  } else if (type === 'sudoku/validateSudoku') {
    return { ...state, sudokuStore : payload }
  }

  return state;
}

export default reducer;