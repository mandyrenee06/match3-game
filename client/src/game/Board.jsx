import Tile from "./Tile";
import useBoard from "./hooks/useBoard";

function Board() {
  const {
    board,
    selectedTile,
    setSelectedTile,
  } = useBoard();

  function handleTileClick(tile) {
    setSelectedTile(tile);
  }

  return (
    <div className="board">
      {board.map((tile) => (
        <Tile
          key={tile.id}
          tile={tile}
          selected={selectedTile?.id === tile.id}
          onClick={() => handleTileClick(tile)}
        />
      ))}
    </div>
  );
}

export default Board;