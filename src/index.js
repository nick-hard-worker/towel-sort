
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  if (matrix.length === 0) return [];

  const result = [];
  matrix.forEach((element, index) => {
    if (index % 2 === 0) result.push(...element)
    else {
      result.push(...element.reverse())
    }
  });

  return result;
}
