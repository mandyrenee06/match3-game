function GameOverModal({
  gameStatus,
  score,
  reward,
  onRestart,
  onNextLevel,
  onExit,
}) {
  // Don't show the modal while the game is still being played
  if (gameStatus !== "won" && gameStatus !== "lost") {
    return null;
  }

  const playerWon = gameStatus === "won";

  return (
    <div className="game-over-overlay">
      <div className="game-over-modal">

        <div className="game-over-icon">
          {playerWon ? "🏆" : "😔"}
        </div>

        <h2>
          {playerWon ? "Level Complete!" : "Game Over"}
        </h2>

        <p className="game-over-message">
          {playerWon
            ? "Amazing! You completed this level."
            : "You ran out of moves before reaching the target score."}
        </p>

        {playerWon && (
          <div className="game-reward">
            <span>🪙 Level Reward</span>
            <strong>+{reward.toLocaleString()} Coins</strong>
          </div>
        )}

        <div className="game-over-score">
          <span>⭐ Your Score</span>
          <strong>{score.toLocaleString()}</strong>
        </div>

        {playerWon ? (
          <button
            className="next-level-button"
            onClick={onNextLevel}
          >
            ➡️ Next Level
          </button>
        ) : (
          <button
            className="try-again-button"
            onClick={onRestart}
          >
            🔄 Try Again
          </button>
        )}

        <button
          className="exit-game-button"
          onClick={onExit}
        >
          🚪 Exit Game
        </button>

      </div>
    </div>
  );
}

export default GameOverModal;