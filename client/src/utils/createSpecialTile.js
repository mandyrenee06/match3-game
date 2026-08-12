export function createSpecialTile(board, matches) {
  if (matches.length < 4) {
    return board;
  }

  const specialIndex = matches[0];

  const newBoard = board.map((tile, index) => {
    if (index !== specialIndex) {
      return tile;
    }

    if (matches.length >= 5) {
      return {
        ...tile,
        special: "line",
      };
    }

    return {
      ...tile,
      special: "bomb",
    };
  });

  return newBoard;
}