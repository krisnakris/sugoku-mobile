
const initialState = {
  sudokuStore : []
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'sudoku/getSudoku') {
    console.log(2);
    return { ...state, sudokuStore : payload }
  } 

  return state;
}

export default reducer;