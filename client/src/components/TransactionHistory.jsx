import { useEffect, useState } from "react";
import {
  getTransactions,
  TRANSACTION_TYPES,
} from "../config/transactionHistory";

function TransactionHistory({
  isOpen,
  onClose,
}) {
  const [transactions, setTransactions] =
    useState([]);

  useEffect(() => {
    if (isOpen) {
      setTransactions(getTransactions());
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  function formatDate(dateString) {
    return new Date(
      dateString
    ).toLocaleString();
  }

  function getTransactionIcon(type) {
    switch (type) {
      case TRANSACTION_TYPES.GAME_ENTRY:
        return "🎮";

      case TRANSACTION_TYPES.GAME_REWARD:
        return "🏆";

      case TRANSACTION_TYPES.DIRECT_DEPOSIT:
        return "💳";

      case TRANSACTION_TYPES.ACCOUNT_TRANSFER:
        return "💰";

      case TRANSACTION_TYPES.WITHDRAWAL:
        return "💸";

      default:
        return "🧾";
    }
  }

  function getCoinsClass(coins) {
    if (coins > 0) {
      return "transaction-positive";
    }

    if (coins < 0) {
      return "transaction-negative";
    }

    return "";
  }

  return (
    <div className="modal-overlay">

      <div className="top-up-modal transaction-history-modal">

        <button
          className="close-modal"
          onClick={onClose}
        >
          ×
        </button>

        <h2>
          🧾 Transaction History
        </h2>

        <p className="modal-description">
          View your recent game wallet
          transactions.
        </p>

        {transactions.length === 0 ? (
          <div className="empty-transactions">
            <div>🧾</div>

            <p>
              No transactions yet.
            </p>

            <small>
              Your game entries and rewards
              will appear here.
            </small>
          </div>
        ) : (
          <div className="transaction-list">

            {transactions.map(
              (transaction) => (
                <div
                  className="transaction-item"
                  key={transaction.id}
                >

                  <div className="transaction-icon">
                    {getTransactionIcon(
                      transaction.type
                    )}
                  </div>

                  <div className="transaction-details">

                    <strong>
                      {transaction.description}
                    </strong>

                    <small>
                      {formatDate(
                        transaction.createdAt
                      )}
                    </small>

                    {transaction.amount > 0 &&
                      transaction.currency && (
                        <small>
                          {transaction.currency}{" "}
                          {transaction.amount.toLocaleString()}
                        </small>
                      )}

                    <span
                      className={`transaction-status transaction-status-${transaction.status}`}
                    >
                      {transaction.status}
                    </span>

                  </div>

                  <div
                    className={`transaction-coins ${getCoinsClass(
                      transaction.coins
                    )}`}
                  >
                    {transaction.coins > 0
                      ? "+"
                      : ""}
                    {transaction.coins.toLocaleString()}{" "}
                    Coins
                  </div>

                </div>
              )
            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default TransactionHistory;