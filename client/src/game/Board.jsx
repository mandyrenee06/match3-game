import Tile from "./Tile";
import useBoard from "./hooks/useBoard";

function Board() {
  const {
    board,
    selectedIndex,
    handleTileClick,
  } = useBoard();

  return (
    <div className="board">
      {board.map((tile, index) => (
        <Tile
          key={tile.id}
          tile={tile}
          selected={selectedIndex === index}
          onClick={() => handleTileClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;