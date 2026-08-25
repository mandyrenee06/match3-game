function StartGameModal({
  coinBalance,
  onStart,
  onTopUp,
}) {
  return (
    <div className="start-game-overlay">
      <div className="start-game-modal">

        <div className="start-game-icon">
          🎮
        </div>

        <h2>Ready to Play?</h2>

        <p className="start-game-description">
          Each game costs <strong>100 coins</strong>.
        </p>

        <div className="start-game-balance">
          <span>🪙 Your Game Wallet</span>

          <strong>
            {coinBalance.toLocaleString()} Coins
          </strong>
        </div>

        {coinBalance >= 100 ? (
          <button
            className="start-game-button"
            onClick={onStart}
          >
            🎮 Start Game — 100 Coins
          </button>
        ) : (
          <div className="insufficient-coins">

            <p>
              ❌ You need at least 100 coins to play.
            </p>

            <button
              className="start-game-button top-up-game-button"
              onClick={onTopUp}
            >
              💰 Top Up Game Wallet
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default StartGameModal;