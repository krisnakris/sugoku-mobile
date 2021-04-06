const axios = require('axios');

// let array = null;

// axios({
//   url : 'https://sugoku.herokuapp.com/board?difficulty=easy',
//   method : "GET",
// })
//   .then( ({data}) => {
//     return data
//   })
//   .then ( data => {
//     array = arrayTransform(data.board);
//     console.log(array);
//   })
//   .catch(err => {
//     console.log(err);
//   })

// function arrayTransform (array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       array[i][j] = {
//         value : array[i][j],
//         x : j,
//         y : i,
//       }
//     }
//   }
//   return array;
// }

let array = 
[
  [
    { value: 0, x: 0, y: 0 },
    { value: 1, x: 1, y: 0 },
    { value: 0, x: 2, y: 0 },
    { value: 9, x: 3, y: 0 },
    { value: 0, x: 4, y: 0 },
    { value: 7, x: 5, y: 0 },
    { value: 0, x: 6, y: 0 },
    { value: 6, x: 7, y: 0 },
    { value: 0, x: 8, y: 0 }
  ],
  [
    { value: 0, x: 0, y: 1 },
    { value: 0, x: 1, y: 1 },
    { value: 0, x: 2, y: 1 },
    { value: 0, x: 3, y: 1 },
    { value: 0, x: 4, y: 1 },
    { value: 6, x: 5, y: 1 },
    { value: 0, x: 6, y: 1 },
    { value: 0, x: 7, y: 1 },
    { value: 9, x: 8, y: 1 }
  ],
  [
    { value: 0, x: 0, y: 2 },
    { value: 0, x: 1, y: 2 },
    { value: 0, x: 2, y: 2 },
    { value: 0, x: 3, y: 2 },
    { value: 0, x: 4, y: 2 },
    { value: 0, x: 5, y: 2 },
    { value: 1, x: 6, y: 2 },
    { value: 0, x: 7, y: 2 },
    { value: 3, x: 8, y: 2 }
  ],
  [
    { value: 1, x: 0, y: 3 },
    { value: 0, x: 1, y: 3 },
    { value: 0, x: 2, y: 3 },
    { value: 0, x: 3, y: 3 },
    { value: 4, x: 4, y: 3 },
    { value: 9, x: 5, y: 3 },
    { value: 0, x: 6, y: 3 },
    { value: 0, x: 7, y: 3 },
    { value: 0, x: 8, y: 3 }
  ],
  [
    { value: 0, x: 0, y: 4 },
    { value: 5, x: 1, y: 4 },
    { value: 0, x: 2, y: 4 },
    { value: 7, x: 3, y: 4 },
    { value: 0, x: 4, y: 4 },
    { value: 0, x: 5, y: 4 },
    { value: 0, x: 6, y: 4 },
    { value: 9, x: 7, y: 4 },
    { value: 0, x: 8, y: 4 }
  ],
  [
    { value: 7, x: 0, y: 5 },
    { value: 0, x: 1, y: 5 },
    { value: 8, x: 2, y: 5 },
    { value: 2, x: 3, y: 5 },
    { value: 6, x: 4, y: 5 },
    { value: 3, x: 5, y: 5 },
    { value: 0, x: 6, y: 5 },
    { value: 1, x: 7, y: 5 },
    { value: 4, x: 8, y: 5 }
  ],
  [
    { value: 2, x: 0, y: 6 },
    { value: 3, x: 1, y: 6 },
    { value: 1, x: 2, y: 6 },
    { value: 6, x: 3, y: 6 },
    { value: 9, x: 4, y: 6 },
    { value: 4, x: 5, y: 6 },
    { value: 0, x: 6, y: 6 },
    { value: 5, x: 7, y: 6 },
    { value: 0, x: 8, y: 6 }
  ],
  [
    { value: 0, x: 0, y: 7 },
    { value: 6, x: 1, y: 7 },
    { value: 0, x: 2, y: 7 },
    { value: 8, x: 3, y: 7 },
    { value: 7, x: 4, y: 7 },
    { value: 0, x: 5, y: 7 },
    { value: 9, x: 6, y: 7 },
    { value: 0, x: 7, y: 7 },
    { value: 1, x: 8, y: 7 }
  ],
  [
    { value: 9, x: 0, y: 8 },
    { value: 0, x: 1, y: 8 },
    { value: 0, x: 2, y: 8 },
    { value: 3, x: 3, y: 8 },
    { value: 0, x: 4, y: 8 },
    { value: 0, x: 5, y: 8 },
    { value: 2, x: 6, y: 8 },
    { value: 0, x: 7, y: 8 },
    { value: 6, x: 8, y: 8 }
  ]
]

