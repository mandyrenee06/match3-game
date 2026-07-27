export function removeMatches(board, matches) {
  const newBoard = [...board];

  matches.forEach((index) => {
    newBoard[index] = {
      ...newBoard[index],
      type: null,
    };
  });

  return newBoard;
}