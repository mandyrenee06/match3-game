// ========================================
// NEHXIFY GAME TRANSACTION HISTORY
// ========================================

const TRANSACTION_STORAGE_KEY =
  "nehxifyGameTransactions";

// ========================================
// GET TRANSACTIONS
// ========================================

export function getTransactions() {
  const savedTransactions =
    localStorage.getItem(
      TRANSACTION_STORAGE_KEY
    );

  if (!savedTransactions) {
    return [];
  }

  try {
    return JSON.parse(savedTransactions);
  } catch (error) {
    console.error(
      "Failed to load transactions:",
      error
    );

    return [];
  }
}

// ========================================
// SAVE TRANSACTIONS
// ========================================

function saveTransactions(transactions) {
  localStorage.setItem(
    TRANSACTION_STORAGE_KEY,
    JSON.stringify(transactions)
  );
}

// ========================================
// ADD TRANSACTION
// ========================================

export function addTransaction({
  type,
  coins = 0,
  amount = 0,
  currency = null,
  status = "completed",
  description,
  metadata = {},
}) {
  const transactions =
    getTransactions();

  const transaction = {
    id: crypto.randomUUID(),

    type,

    coins,

    amount,

    currency,

    status,

    description,

    metadata,

    createdAt:
      new Date().toISOString(),
  };

  transactions.unshift(transaction);

  saveTransactions(transactions);

  return transaction;
}

// ========================================
// TRANSACTION TYPES
// ========================================

export const TRANSACTION_TYPES = {
  GAME_ENTRY: "game_entry",
  GAME_REWARD: "game_reward",
  DIRECT_DEPOSIT: "direct_deposit",
  ACCOUNT_TRANSFER: "account_transfer",
  WITHDRAWAL: "withdrawal",
};