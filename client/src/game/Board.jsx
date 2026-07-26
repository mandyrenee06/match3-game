import Tile from "./Tile";

const icons = [
  "💵",
  "🪙",
  "💰",
  "💎",
  "⭐",
  "🏦"
];

function Board() {
  return (
    <div className="board">
      {icons.map((icon, index) => (
        <Tile
          key={index}
          icon={icon}
        />
      ))}
    </div>
  );
}

export default Board;