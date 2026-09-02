export function applyGravity(board) {
  const newBoard = [...board];

  for (let col = 0; col < 8; col++) {
    const tiles = [];

    // Collect non-empty tiles
    for (let row = 0; row < 8; row++) {
      const index = row * 8 + col;

      if (newBoard[index].type !== null) {
        tiles.push({
          type: newBoard[index].type,
          special: newBoard[index].special ?? null,
        });
      }
    }

    // Fill from bottom upward
    let tileIndex = tiles.length - 1;

    for (let row = 7; row >= 0; row--) {
      const index = row * 8 + col;

      if (tileIndex >= 0) {
        // Keep this position's ID.
        // Move the actual tile properties into it.
        newBoard[index] = {
          ...newBoard[index],
          type: tiles[tileIndex].type,
          special: tiles[tileIndex].special,
          matched: false,
        };

        tileIndex--;
      } else {
        // Empty position
        newBoard[index] = {
          ...newBoard[index],
          type: null,
          special: null,
          matched: false,
        };
      }
    }
  }

  return newBoard;
}