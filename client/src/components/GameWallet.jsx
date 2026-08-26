function GameWallet({
  cashBalance,
  coinBalance,
  onTopUp,
  onWithdraw,
  onTransactions,
}) {
  return (
    <div className="game-wallet">

      <div className="wallet-header">
        <span>🎮 Game Wallet</span>
      </div>

      <div className="wallet-balances">

        {/* =========================
            CASH BALANCE
        ========================= */}

        <div className="wallet-balance">

          <span>
            💵 Cash Balance
          </span>

          <strong>
            {Number(cashBalance || 0).toFixed(2)}
          </strong>

        </div>

        {/* =========================
            COIN BALANCE
        ========================= */}

        <div className="wallet-balance">

          <span>
            🪙 Icoins
          </span>

          <strong>
            {Number(coinBalance || 0).toLocaleString()} Coins
          </strong>

        </div>

      </div>

      {/* TOP UP */}

      <button
        className="top-up-button"
        onClick={onTopUp}
      >
        💰 Top Up Game Wallet
      </button>

      {/* WITHDRAW */}

      <button
        className="withdraw-button"
        onClick={onWithdraw}
      >
        💸 Withdraw
      </button>

      <button
        className="transaction-history-button"
        onClick={onTransactions}
      >
        🧾 Transactions
      </button>

    </div>
  );
}

export default GameWallet;