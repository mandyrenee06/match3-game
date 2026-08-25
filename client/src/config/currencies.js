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
    flag: "🌍",
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

  RWF: {
    code: "RWF",
    name: "Rwandan Franc",
    symbol: "FRw",
    flag: "🇷🇼",
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

  ZMW: {
    code: "ZMW",
    name: "Zambian Kwacha",
    symbol: "ZK",
    flag: "🇿🇲",
  },

  XOF: {
    code: "XOF",
    name: "West African CFA Franc",
    symbol: "CFA",
    flag: "🇨🇮",
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

  XAF: {
    code: "XAF",
    name: "Central African CFA Franc",
    symbol: "FCFA",
    flag: "🇨🇲",
  },

  MWK: {
    code: "MWK",
    name: "Malawian Kwacha",
    symbol: "MK",
    flag: "🇲🇼",
  },

  ETB: {
    code: "ETB",
    name: "Ethiopian Birr",
    symbol: "Br",
    flag: "🇪🇹",
  },
};


// ========================================
// EXCHANGE RATES
// ========================================

export const exchangeRates = {
  USD: 1,

  KES: 129.4,
  UGX: 3720,
  TZS: 2640,
  RWF: 1475,
  GHS: 12.9,
  NGN: 1352,
  ZMW: 19.0,
  XOF: 610,
  BWP: 13.4,
  ZAR: 16.0,
  XAF: 610,
  MWK: 1735,
  ETB: 150,
};

// ========================================
// CURRENCIES THAT DO NOT USE DECIMAL DISPLAY
// ========================================

export const NO_DECIMAL_CURRENCIES = [
  "KES",
  "UGX",
  "GHS",
  "TZS",
  "NGN",
  "XAF",
  "XOF",
  "MWK",
  "RWF",
  "ZMW",
  "BWP",
  "ZAR",
];


// ========================================
// LOCAL CURRENCY → USD
// ========================================

export function localCurrencyToUsd(
  amount,
  currencyCode
) {
  const rate = exchangeRates[currencyCode];

  if (!rate) {
    throw new Error(
      `Unsupported currency: ${currencyCode}`
    );
  }

  return Number(amount) / rate;
}


// ========================================
// USD → COINS
// ========================================

export const usdToCoins = (usd) => {
  return Math.floor(
    Number(usd) * COINS_PER_USD
  );
};


// ========================================
// COINS → USD
// ========================================

export const coinsToUsd = (coins) => {
  return Number(coins) / COINS_PER_USD;
};


// ========================================
// USD → LOCAL CURRENCY
// ========================================

export function usdToLocalCurrency(
  amount,
  currencyCode
) {
  const rate = exchangeRates[currencyCode];

  if (!rate) {
    throw new Error(
      `Unsupported currency: ${currencyCode}`
    );
  }

  return Number(amount) * rate;
};