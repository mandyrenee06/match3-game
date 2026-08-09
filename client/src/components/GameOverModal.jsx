function GameOverModal({
  gameStatus,
  score,
  onRestart,
  onNextLevel,
  onExit,
}) {
  if (gameStatus === "playing") {
    return null;
  }

  if (gameStatus === "exit") {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h1>👋</h1>

        <h2>Thanks for Playing!</h2>

        <p>You've exited the game.</p>

        <button onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

  const isWinner = gameStatus === "won";

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h1>{isWinner ? "🎉🎉🎉" : "😢"}</h1>

        <h2>
          {isWinner ? "Congratulations!" : "Game Over"}
        </h2>

        <p>
          {isWinner
            ? "You completed the level!"
            : "You ran out of moves."}
        </p>

        <h3>Final Score: {score}</h3>

        <div className="modal-buttons">
          {isWinner ? (
            <button onClick={onNextLevel}>
              ➡️ Next Level
            </button>
          ) : (
            <button onClick={onRestart}>
              🔄 Try Again
            </button>
          )}

            <button onClick={onExit}>
             🚪 Exit
            </button>
          </div>
      </div>
    </div>
  );
}

export default GameOverModal;