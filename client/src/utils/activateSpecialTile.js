export function activateSpecialTile(board, specialIndex) {
  const newBoard = [...board];
  const clearedIndexes = [];

  const row = Math.floor(specialIndex / 8);
  const col = specialIndex % 8;

  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      const targetRow = row + rowOffset;
      const targetCol = col + colOffset;

      if (
        targetRow >= 0 &&
        targetRow < 8 &&
        targetCol >= 0 &&
        targetCol < 8
      ) {
        const targetIndex = targetRow * 8 + targetCol;

        clearedIndexes.push(targetIndex);

        newBoard[targetIndex] = {
          ...newBoard[targetIndex],
          type: null,
          special: null,
        };
      }
    }
  }

  return {
    board: newBoard,
    clearedIndexes,
  };
}