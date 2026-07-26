export function isAdjacent(firstIndex, secondIndex) {

  const firstRow = Math.floor(firstIndex / 8);
  const firstCol = firstIndex % 8;

  const secondRow = Math.floor(secondIndex / 8);
  const secondCol = secondIndex % 8;

  const rowDifference =
    Math.abs(firstRow - secondRow);

  const colDifference =
    Math.abs(firstCol - secondCol);

  return rowDifference + colDifference === 1;
}