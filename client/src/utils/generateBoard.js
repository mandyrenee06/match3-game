const icons = ["💵", "🪙", "💰", "💎", "⭐", "🏦"];

function createsHorizontalMatch(board, index, icon) {
  const col = index % 8;

  if (col < 2) return false;

  return (
    board[index - 1]?.type === icon &&
    board[index - 2]?.type === icon
  );
}

function createsVerticalMatch(board, index, icon) {
  const row = Math.floor(index / 8);

  if (row < 2) return false;

  return (
    board[index - 8]?.type === icon &&
    board[index - 16]?.type === icon
  );
}

export function generateBoard() {
  const board = [];

  for (let i = 0; i < 64; i++) {

    let icon;

    do {
      icon = icons[Math.floor(Math.random() * icons.length)];
    } while (
      createsHorizontalMatch(board, i, icon) ||
      createsVerticalMatch(board, i, icon)
    );

    board.push({
      id: i,
      type: icon,
    });
  }

  return board;
}