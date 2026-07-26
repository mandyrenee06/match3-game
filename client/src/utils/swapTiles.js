export function swapTiles(board, firstIndex, secondIndex) {

  const newBoard = [...board];

  [newBoard[firstIndex], newBoard[secondIndex]] =
    [newBoard[secondIndex], newBoard[firstIndex]];

  return newBoard;
}