const icons = ["💵", "🪙", "💰", "💎", "⭐", "🏦"];

export function generateBoard() {
  const board = [];

  for (let i = 0; i < 64; i++) {

    const randomIcon =
      icons[Math.floor(Math.random() * icons.length)];

    board.push({
      id: i,
      type: randomIcon,
    });

  }

  return board;
}