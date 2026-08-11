function findHorizontalMatches(board) {
  const matches = [];

  for (let row = 0; row < 8; row++) {
    let col = 0;

    while (col < 8) {
      const index = row * 8 + col;
      const type = board[index]?.type;

      if (!type) {
        col++;
        continue;
      }

      let runLength = 1;

      while (
        col + runLength < 8 &&
        board[index + runLength]?.type === type
      ) {
        runLength++;
      }

      if (runLength >= 3) {
        for (let i = 0; i < runLength; i++) {
          matches.push(index + i);
        }
      }

      col += runLength;
    }
  }

  return matches;
}

function findVerticalMatches(board) {
  const matches = [];

  for (let col = 0; col < 8; col++) {
    let row = 0;

    while (row < 8) {
      const index = row * 8 + col;
      const type = board[index]?.type;

      if (!type) {
        row++;
        continue;
      }

      let runLength = 1;

      while (
        row + runLength < 8 &&
        board[index + runLength * 8]?.type === type
      ) {
        runLength++;
      }

      if (runLength >= 3) {
        for (let i = 0; i < runLength; i++) {
          matches.push(index + i * 8);
        }
      }

      row += runLength;
    }
  }

  return matches;
}

export function findMatches(board) {
  const horizontal = findHorizontalMatches(board);
  const vertical = findVerticalMatches(board);

  return [...new Set([...horizontal, ...vertical])];
}