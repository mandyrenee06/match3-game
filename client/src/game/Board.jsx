import Tile from "./Tile";
import useBoard from "./hooks/useBoard";
import GameOverModal from "../components/GameOverModal";
import GameHeader from "../components/GameHeader";

function Board() {
  const {
    board,
    selectedIndex,
    score,
    movesLeft,
    currentLevel,
    targetScore,
    gameStatus,
    handleTileClick,
    resetGame,
    nextLevel,
    exitGame,
  } = useBoard();

  return (
  <div className="game">
    <GameHeader
      score={score}
      movesLeft={movesLeft}
      currentLevel={currentLevel}
      targetScore={targetScore}
    />

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

    <GameOverModal
      gameStatus={gameStatus}
      score={score}
      onRestart={resetGame}
      onNextLevel={nextLevel}
      onExit={exitGame}
    />
  </div>
);
}

export default Board;