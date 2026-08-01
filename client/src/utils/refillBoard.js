const icons = ["💵", "🪙", "💰", "💎", "⭐", "🏦"];

export function refillBoard(board) {
  const newBoard = [...board];

  for (let i = 0; i < newBoard.length; i++) {
    if (newBoard[i].type === null) {
      const randomIcon =
        icons[Math.floor(Math.random() * icons.length)];

      newBoard[i] = {
        ...newBoard[i],
        type: randomIcon,
      };
    }
  }

  return newBoard;
}