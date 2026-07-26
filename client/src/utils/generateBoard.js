const icons = ["💵", "🪙", "💰", "💎", "⭐", "🏦"];

export function generateBoard() {
  const board = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const randomIcon =
        icons[Math.floor(Math.random() * icons.length)];

      board.push({
        id: row * 8 + col,
        type: randomIcon,
        row,
        col,
      });
    }
  }

  return board;
}