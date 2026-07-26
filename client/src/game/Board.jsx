import Tile from "./Tile";

const icons = [
  "💵",
  "🪙",
  "💰",
  "💎",
  "⭐",
  "🏦",
];

function Board() {
  // Create an empty array to hold the board
  const board = [];

  // Generate 64 random tiles
  for (let i = 0; i < 64; i++) {
    const randomIcon =
      icons[Math.floor(Math.random() * icons.length)];

    board.push(randomIcon);
  }

  return (
    <div className="board">
      {board.map((icon, index) => (
        <Tile
          key={index}
          icon={icon}
        />
      ))}
    </div>
  );
}

export default Board;