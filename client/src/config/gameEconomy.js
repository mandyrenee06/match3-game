// src/config/gameEconomy.js

// ========================================
// GAME ENTRY
// ========================================

export const GAME_ENTRY_COST = 100;


// ========================================
// COIN VALUE
// ========================================
//
// 100 coins = $1
//

export const COINS_PER_USD = 100;


// ========================================
// CONVERSION FUNCTIONS
// ========================================

// Coins → USD

export function coinsToUsd(coins) {
  return Number(coins) / COINS_PER_USD;
}


// USD → Coins

export function usdToCoins(usd) {
  return Math.floor(
    Number(usd) * COINS_PER_USD
  );
}


// ========================================
// LOCAL CURRENCY → COINS
// ========================================

export function localCurrencyToCoins(
  amount,
  currencyToUsdRate
) {
  const usdAmount =
    Number(amount) / currencyToUsdRate;

  return usdToCoins(usdAmount);
}


// ========================================
// COINS → LOCAL CURRENCY
// ========================================
//
// Example:
//
// 100 coins → $1
//
// If $1 = KSh 129:
//
// 100 coins → KSh 129
//

export function coinsToLocalCurrency(
  coins,
  currencyToUsdRate
) {
  const usdAmount =
    coinsToUsd(coins);

  return usdAmount * currencyToUsdRate;
}