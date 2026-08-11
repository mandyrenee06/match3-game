export function removeMatches(board, matches) {
  const newBoard = [...board];

  // If 4 or more tiles matched, keep the first one
  // and turn it into a bomb.
  const specialIndex = matches.length >= 4 ? matches[0] : null;

  matches.forEach((index) => {
    if (index === specialIndex) {
      newBoard[index] = {
        ...newBoard[index],
        special: "bomb",
      };
    } else {
      newBoard[index] = {
        ...newBoard[index],
        type: null,
      };
    }
  });

  return newBoard;
}