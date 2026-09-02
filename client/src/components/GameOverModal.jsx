function GameOverModal({
  gameStatus,
  score,
  reward,
  objectives,
  specialTilesActivated,
  tilesCleared,
  onRestart,
  onNextLevel,
  onExit,
}) {
  if (gameStatus !== "won" && gameStatus !== "lost") {
    return null;
  }

  const playerWon = gameStatus === "won";

  function getObjectiveProgress(objective) {
    if (objective.type === "score") {
      return score;
    }

    if (objective.type === "special") {
      return specialTilesActivated;
    }

    if (objective.type === "clear") {
      return tilesCleared;
    }

    return 0;
  }

  return (
    <div className="game-over-overlay">
      <div className="game-over-modal">

        <div className="game-over-icon">
          {playerWon ? "🏆" : "😔"}
        </div>

        <h2>
          {playerWon
            ? "Level Complete!"
            : "Game Over"}
        </h2>

        <p className="game-over-message">
          {playerWon
            ? "Amazing! You completed all the objectives."
            : "You ran out of moves before completing all the objectives."}
        </p>

        {/* OBJECTIVES */}
        <div className="game-over-objectives">

          <h3>🎯 Objectives</h3>

          {objectives?.map((objective, index) => {
            const progress =
              getObjectiveProgress(objective);

            const completed =
              progress >= objective.target;

            return (
              <div
                className={`game-over-objective ${
                  completed ? "completed" : ""
                }`}
                key={`${objective.type}-${index}`}
              >
                <span className="objective-status">
                  {completed ? "✅" : "❌"}
                </span>

                <span className="objective-label">
                  {objective.label}
                </span>

                <strong>
                  {Math.min(
                    progress,
                    objective.target
                  )}
                  /
                  {objective.target}
                </strong>
              </div>
            );
          })}

        </div>

        {/* SCORE */}
        <div className="game-over-score">
          <span>⭐ Your Score</span>
          <strong>
            {score.toLocaleString()}
          </strong>
        </div>

        {/* REWARD */}
        {playerWon && reward > 0 && (
          <div className="game-reward">
            <span>🪙 Level Reward</span>
            <strong>
              +{reward.toLocaleString()} Coins
            </strong>
          </div>
        )}

        {/* ACTIONS */}
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