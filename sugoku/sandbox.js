const axios = require('axios');

let array = null;

axios({
  url : 'https://sugoku.herokuapp.com/board?difficulty=easy',
  method : "GET",
})
  .then( ({data}) => {
    return data
  })
  .then ( data => {
    array = arrayTransform(data.board);
    console.log(array);
  })
  .catch(err => {
    console.log(err);
  })

function arrayTransform (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      array[i][j] = {
        value : array[i][j],
        x : j,
        y : i,
      }
    }
  }
  return array;
}
