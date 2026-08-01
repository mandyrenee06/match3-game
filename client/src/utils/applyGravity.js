export function applyGravity(board) {
  const newBoard = [...board];

  for (let col = 0; col < 8; col++) {
    // Collect all non-empty tiles in this column
    const tiles = [];

    for (let row = 0; row < 8; row++) {
      const index = row * 8 + col;

      if (newBoard[index].type !== null) {
        tiles.push(newBoard[index]);
      }
    }

    // Fill the column from the bottom upward
    let tileIndex = tiles.length - 1;

    for (let row = 7; row >= 0; row--) {
      const index = row * 8 + col;

      if (tileIndex >= 0) {
        newBoard[index] = {
          ...newBoard[index],
          type: tiles[tileIndex].type,
        };
        tileIndex--;
      } else {
        newBoard[index] = {
          ...newBoard[index],
          type: null,
        };
      }
    }
  }

  return newBoard;
}