function findHorizontalMatches(board) {
  const matches = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 6; col++) {
      const index = row * 8 + col;

      const first = board[index];
      const second = board[index + 1];
      const third = board[index + 2];

      if (
          first.type &&
          first.type === second.type &&
          second.type === third.type
      ) {

        matches.push(index, index + 1, index + 2);
      }
    }
  }

  return matches;
}

function findVerticalMatches(board) {
  const matches = [];

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 8; col++) {
      const index = row * 8 + col;

      const first = board[index];
      const second = board[index + 8];
      const third = board[index + 16];

      if (
          first.type &&
          first.type === second.type &&
          second.type === third.type
      ) {
        matches.push(index, index + 8, index + 16);
      }
    }
  }

  return matches;
}

export function findMatches(board) {
  const horizontal = findHorizontalMatches(board);
  const vertical = findVerticalMatches(board);

  return [...new Set([...horizontal, ...vertical])];
}