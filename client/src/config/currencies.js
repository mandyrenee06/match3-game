// =========================
// NEHXIFY CURRENCY SYSTEM
// =========================

// 100 coins = $1
export const COINS_PER_USD = 100;
// ========================================
// SUPPORTED CURRENCIES
// ========================================

export const currencies = {
  USD: {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    flag: "🇺🇸",
  },

  KES: {
    code: "KES",
    name: "Kenyan Shilling",
    symbol: "KSh",
    flag: "🇰🇪",
  },

  UGX: {
    code: "UGX",
    name: "Ugandan Shilling",
    symbol: "USh",
    flag: "🇺🇬",
  },

  TZS: {
    code: "TZS",
    name: "Tanzanian Shilling",
    symbol: "TSh",
    flag: "🇹🇿",
  },

  MWK: {
    code: "MWK",
    name: "Malawian Kwacha",
    symbol: "MK",
    flag: "🇲🇼",
  },

  ZMW: {
    code: "ZMW",
    name: "Zambian Kwacha",
    symbol: "ZK",
    flag: "🇿🇲",
  },

  BWP: {
    code: "BWP",
    name: "Botswana Pula",
    symbol: "P",
    flag: "🇧🇼",
  },

  ZAR: {
    code: "ZAR",
    name: "South African Rand",
    symbol: "R",
    flag: "🇿🇦",
  },

  GHS: {
    code: "GHS",
    name: "Ghanaian Cedi",
    symbol: "GH₵",
    flag: "🇬🇭",
  },

  NGN: {
    code: "NGN",
    name: "Nigerian Naira",
    symbol: "₦",
    flag: "🇳🇬",
  },

  RWF: {
    code: "RWF",
    name: "Rwandan Franc",
    symbol: "FRw",
    flag: "🇷🇼",
  },

  BIF: {
    code: "BIF",
    name: "Burundian Franc",
    symbol: "FBu",
    flag: "🇧🇮",
  },

  ETB: {
    code: "ETB",
    name: "Ethiopian Birr",
    symbol: "Br",
    flag: "🇪🇹",
  },

  XAF: {
    code: "XAF",
    name: "Central African CFA Franc",
    symbol: "FCFA",
    flag: "🌍",
  },

  PKR: {
    code: "PKR",
    name: "Pakistani Rupee",
    symbol: "₨",
    flag: "🇵🇰",
  },

  INR: {
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳",
  },
};


// ========================================
// EXCHANGE RATES
// ========================================
//
// These are temporary/static rates for the
// game prototype.
//
// They represent:
//
// 1 USD = X local currency
//
// IMPORTANT:
// For the real production system, these
// should eventually come from the backend
// rather than being hard-coded in React.
//

export const exchangeRates = {
  USD: 1,

  KES: 129,
  UGX: 3500,
  TZS: 2500,
  MWK: 1750,
  ZMW: 24,
  BWP: 14,
  ZAR: 18,
  GHS: 11,
  NGN: 1500,
  RWF: 1450,
  BIF: 3000,
  ETB: 140,
  XAF: 560,
  PKR: 280,
  INR: 88,
};


// ========================================
// LOCAL CURRENCY → USD
// ========================================

export function localCurrencyToUsd(amount, currencyCode) {
  const rate = exchangeRates[currencyCode];

  if (!rate) {
    throw new Error(
      `Unsupported currency: ${currencyCode}`
    );
  }

  return Number(amount) / rate;
}

// =========================
// USD → COINS
// =========================

export const usdToCoins = (usd) => {
  return Math.floor(usd * COINS_PER_USD);
};

// =========================
// COINS → USD
// =========================

export const coinsToUsd = (coins) => {
  return coins / COINS_PER_USD;
};


// ========================================
// USD → LOCAL CURRENCY
// ========================================

export function usdToLocalCurrency(amount, currencyCode) {
  const rate = exchangeRates[currencyCode];

  if (!rate) {
    throw new Error(
      `Unsupported currency: ${currencyCode}`
    );
  }

  return Number(amount) * rate;
}