export function activateLineTile(board, specialIndex) {
  const newBoard = [...board];
  const clearedIndexes = [];

  const row = Math.floor(specialIndex / 8);

  for (let col = 0; col < 8; col++) {
    const index = row * 8 + col;

    clearedIndexes.push(index);

    newBoard[index] = {
      ...newBoard[index],
      type: null,
      special: null,
    };
  }

  return {
    board: newBoard,
    clearedIndexes,
  };
}