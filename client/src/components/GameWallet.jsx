function GameWallet({
  cashBalance,
  coinBalance,
  onTopUp,
}) {
  return (
    <div className="game-wallet">

      <div className="wallet-header">
        <span>🎮 Game Wallet</span>
      </div>

      <div className="wallet-balances">

        <div className="wallet-balance">
          <span>💵 Cash Balance </span>
          <strong>KSh {cashBalance.toFixed(2)}</strong>
        </div>

        <div className="wallet-balance">
          <span>🪙 Icoins </span>
          <strong>{coinBalance.toLocaleString()} Coins</strong>
        </div>

      </div>

      <button
        className="top-up-button"
        onClick={onTopUp}
      >
        💰 Top Up Game Wallet
      </button>

    </div>
  );
}

export default GameWallet;