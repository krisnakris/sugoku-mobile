
function encodeParam (board, params) {
  const encodeBoard = board => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

  let encodeParams = Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

  return encodeParams;
}   

export default encodeParam;