
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

export default arrayTransform;