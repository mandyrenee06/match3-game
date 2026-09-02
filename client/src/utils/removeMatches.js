export function removeMatches(board, matches) {
  const newBoard = [...board];

  const specialIndex =
    matches.length >= 4
      ? matches[0]
      : null;

  matches.forEach((index) => {
    if (index === specialIndex) {
      newBoard[index] = {
        ...newBoard[index],
        special:
          matches.length >= 5
            ? "line"
            : "bomb",
        matched: false,
      };
    } else {
      newBoard[index] = {
        ...newBoard[index],
        type: null,
        special: null,
        matched: false,
      };
    }
  });

  return newBoard;
}