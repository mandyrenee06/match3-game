function GameHeader({
  score,
  movesLeft,
  currentLevel,
  targetScore,
}) {
  return (
    <div className="game-header">
      <div className="header-item">
        <span>⭐ Score</span>
        <strong>{score}</strong>
      </div>

      <div className="header-item">
        <span>🎯 Moves</span>
        <strong>{movesLeft}</strong>
      </div>

      <div className="header-item">
        <span>🏆 Level</span>
        <strong>{currentLevel}</strong>
      </div>

      <div className="header-item">
        <span>🎖 Target</span>
        <strong>{targetScore}</strong>
      </div>
    </div>
  );
}

export default GameHeader;