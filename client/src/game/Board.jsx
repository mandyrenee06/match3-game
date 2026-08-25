import { useState } from "react";
import Tile from "./Tile";
import useBoard from "./hooks/useBoard";
import GameOverModal from "../components/GameOverModal";
import GameHeader from "../components/GameHeader";
import GameWallet from "../components/GameWallet";
import TopUpGameWallet from "../components/TopUpGameWallet";
import StartGameModal from "../components/StartGameModal";

function Board() {
  const {
    board,
    selectedIndex,
    score,
    movesLeft,
    currentLevel,
    targetScore,
    reward,
    gameStatus,
    cashBalance,
    coinBalance,
    handleTopUp,
    handleTileClick,
    resetGame,
    startGame,
    nextLevel,
    exitGame,
  } = useBoard();
  const [showTopUp, setShowTopUp] = useState(false);

  return (
  <div className="game-container">
    <GameHeader
      score={score}
      movesLeft={movesLeft}
      currentLevel={currentLevel}
      targetScore={targetScore}
    />

    <GameWallet
      cashBalance={cashBalance}
      coinBalance={coinBalance}
      onTopUp={() => setShowTopUp(true)}
    />

    <TopUpGameWallet
      isOpen={showTopUp}
      onClose={() => setShowTopUp(false)}
    />

    {gameStatus === "start" && !showTopUp && (
      <StartGameModal
        coinBalance={coinBalance}
        onStart={startGame}
        onTopUp={() => setShowTopUp(true)}
      />
    )}

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
      reward={reward}
      onRestart={resetGame}
      onNextLevel={nextLevel}
      onExit={exitGame}
    />
  </div>
);
}

export default Board;