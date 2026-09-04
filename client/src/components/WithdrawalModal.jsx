import { useState } from "react";
import {
  coinsToUsd,
  usdToLocalCurrency,
  currencies,
  NO_DECIMAL_CURRENCIES,
} from "../config/currencies";
import { withdrawalLimits } from "../config/withdrawalLimits";

const countryCurrencies = {
  Kenya: "KES",
  Uganda: "UGX",
  Tanzania: "TZS",
  Rwanda: "RWF",
  Ghana: "GHS",
  Nigeria: "NGN",
  Zambia: "ZMW",
  "Cote d'Ivoire": "XOF",
  Botswana: "BWP",
  "South Africa": "ZAR",
  Cameroon: "XAF",
  Malawi: "MWK",
  Ethiopia: "ETB",
  International: "USD",
};

function WithdrawalModal({
  isOpen,
  onClose,
  coinBalance,
  onWithdraw,
}) {
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [accountType, setAccountType] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] =
    useState("");
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  if (!isOpen) {
    return null;
  }

  // -------------------------
  // SELECTED CURRENCY
  // -------------------------

  const selectedCurrencyCode =
    countryCurrencies[country];

  const selectedCurrency =
    selectedCurrencyCode
      ? currencies[selectedCurrencyCode]
      : null;

  // -------------------------
  // WITHDRAWAL CALCULATION
  // -------------------------

  const coinsRequested =
    Number(withdrawalAmount) || 0;

  const usdAmount =
    coinsRequested > 0
      ? coinsToUsd(coinsRequested)
      : 0;

  const selectedWithdrawalLimit =
    withdrawalLimits[country];

  const belowWithdrawalMinimum =
    coinsRequested > 0 &&
    selectedWithdrawalLimit &&
    coinsRequested <
      selectedWithdrawalLimit.minimumCoins;

  const localAmount =
    selectedCurrencyCode && usdAmount > 0
      ? usdToLocalCurrency(
          usdAmount,
          selectedCurrencyCode
        )
      : 0;

  // -------------------------
  // FORM VALIDATION
  // -------------------------

  const canWithdraw =
    coinsRequested > 0 &&
    !belowWithdrawalMinimum &&
    coinsRequested <= coinBalance &&
    country &&
    fullName.trim() &&
    username.trim() &&
    accountType;

  // -------------------------
  // FORMAT LOCAL CURRENCY
  // -------------------------

  function formatLocalAmount(amount) {
    if (!selectedCurrencyCode) {
      return "0";
    }

    const noDecimals =
      NO_DECIMAL_CURRENCIES.includes(
        selectedCurrencyCode
      );

    return amount.toLocaleString(undefined, {
      minimumFractionDigits: noDecimals ? 0 : 2,
      maximumFractionDigits: noDecimals ? 0 : 2,
    });
  }

  // -------------------------
  // SUBMIT WITHDRAWAL
  // -------------------------

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (coinsRequested <= 0) {
      alert(
        "Please enter a valid withdrawal amount."
      );
      return;
    }

    if (!Number.isInteger(coinsRequested)) {
      alert(
        "Withdrawal amount must be a whole number of coins."
      );
      return;
    }

    if (belowWithdrawalMinimum) {
      alert(
        selectedWithdrawalLimit?.label ||
        "The amount entered is too low to process this withdrawal. Please increase the amount."
      );
      return;
    }

    if (coinsRequested > coinBalance) {
      alert(
        "You do not have enough coins for this withdrawal."
      );
      return;
    }

    if (!country) {
      alert("Please select your country.");
      return;
    }

    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!username.trim()) {
      alert("Please enter your Nehxify username.");
      return;
    }

    if (!accountType) {
      alert("Please select your payout method.");
      return;
    }

    setIsSubmitting(true);

    try {
      // -------------------------
      // SEND TO BACKEND
      // -------------------------

      const withdrawalResult =
        await onWithdraw(
          coinsRequested,
          accountType
        );

      if (!withdrawalResult?.success) {
        alert(
          withdrawalResult?.message ||
          "Withdrawal could not be processed."
        );

        return;
      }

      // -------------------------
      // SUCCESS
      // -------------------------

      alert(
        "Withdrawal request submitted successfully. Your request is now pending manual processing."
      );

      // -------------------------
      // RESET FORM
      // -------------------------

      setCountry("");
      setFullName("");
      setUsername("");
      setAccountType("");
      setWithdrawalAmount("");

      onClose();

    } catch (error) {
      console.error(
        "Withdrawal submission error:",
        error
      );

      alert(
        "Something went wrong while submitting your withdrawal. Please try again."
      );

    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="modal-overlay">

      <div className="top-up-modal withdrawal-modal">

        {/* CLOSE */}

        <button
          className="close-modal"
          onClick={onClose}
          disabled={isSubmitting}
        >
          ×
        </button>

        <h2>💸 Withdraw Coins</h2>

        <p className="modal-description">
          Convert your game coins into money and
          submit a withdrawal request.
        </p>

        {/* AVAILABLE BALANCE */}

        <div className="account-balance-display">

          <span>
            🪙 Available Game Wallet
          </span>

          <strong>
            {coinBalance.toLocaleString()} Coins
          </strong>

        </div>

        <form onSubmit={handleSubmit}>

          {/* COUNTRY */}

          <div className="form-group">

            <label htmlFor="withdrawal-country">
              Country
            </label>

            <select
              id="withdrawal-country"
              value={country}
              onChange={(event) =>
                setCountry(event.target.value)
              }
              required
              disabled={isSubmitting}
            >

              <option value="">
                Select your country...
              </option>

              <option value="Kenya">
                🇰🇪 Kenya
              </option>

              <option value="Uganda">
                🇺🇬 Uganda
              </option>

              <option value="Tanzania">
                🇹🇿 Tanzania
              </option>

              <option value="Rwanda">
                🇷🇼 Rwanda
              </option>

              <option value="Ghana">
                🇬🇭 Ghana
              </option>

              <option value="Nigeria">
                🇳🇬 Nigeria
              </option>

              <option value="Zambia">
                🇿🇲 Zambia
              </option>

              <option value="Cote d'Ivoire">
                🇨🇮 Côte d'Ivoire
              </option>

              <option value="Botswana">
                🇧🇼 Botswana
              </option>

              <option value="South Africa">
                🇿🇦 South Africa
              </option>

              <option value="Cameroon">
                🇨🇲 Cameroon
              </option>

              <option value="Malawi">
                🇲🇼 Malawi
              </option>

              <option value="Ethiopia">
                🇪🇹 Ethiopia
              </option>

              <option value="International">
                🌍 International
              </option>

            </select>

          </div>

          {/* FULL NAME */}

          <div className="form-group">

            <label htmlFor="withdrawal-name">
              Full Name
            </label>

            <input
              id="withdrawal-name"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(event) =>
                setFullName(event.target.value)
              }
              required
              disabled={isSubmitting}
            />

          </div>

          {/* USERNAME */}

          <div className="form-group">

            <label htmlFor="withdrawal-username">
              Nehxify Username
            </label>

            <input
              id="withdrawal-username"
              type="text"
              placeholder="Enter your Nehxify username"
              value={username}
              onChange={(event) =>
                setUsername(event.target.value)
              }
              required
              disabled={isSubmitting}
            />

          </div>

          {/* PAYOUT METHOD */}

          <div className="form-group">

            <label htmlFor="withdrawal-account-type">
              Withdrawal Network
            </label>

            <select
              id="withdrawal-account-type"
              value={accountType}
              onChange={(event) =>
                setAccountType(event.target.value)
              }
              required
              disabled={isSubmitting}
            >

              <option value="">
                Select payout method
              </option>

              <option value="mpesa">
                M-Pesa
              </option>

              <option value="airtel money">
                Airtel Money
              </option>

              <option value="Tigo">
                Tigo
              </option>

              <option value="mtn">
                MTN
              </option>

              <option value="vodafone">
                Vodafone
              </option>

              <option value="vodacom">
                Vodacom
              </option>

              <option value="TNM mpamba">
                TNM Mpamba
              </option>

              <option value="orange">
                Orange
              </option>

              <option value="mukuru">
                Mukuru
              </option>

              <option value="paypal">
                PayPal
              </option>

              <option value="bank account">
                Bank Account
              </option>

            </select>

          </div>

          {/* COINS */}

          <div className="form-group">

            <label htmlFor="withdrawal-amount">
              Coins to Withdraw
            </label>

            <input
              id="withdrawal-amount"
              type="number"
              min="1"
              max={coinBalance}
              step="1"
              placeholder="e.g. 1000"
              value={withdrawalAmount}
              onChange={(event) =>
                setWithdrawalAmount(
                  event.target.value
                )
              }
              required
              disabled={isSubmitting}
            />

          </div>

          {/* CONVERSION PREVIEW */}

          {coinsRequested > 0 && (
            <div className="withdrawal-preview">

              <div>
                <span>Coins</span>

                <strong>
                  {coinsRequested.toLocaleString()}
                </strong>
              </div>

              <div>
                <span>USD Value</span>

                <strong>
                  ${usdAmount.toFixed(2)}
                </strong>
              </div>

              {selectedCurrency && (
                <div>

                  <span>
                    {selectedCurrency.flag}{" "}
                    Local Value
                  </span>

                  <strong>
                    {selectedCurrency.symbol}{" "}
                    {formatLocalAmount(
                      localAmount
                    )}
                  </strong>

                </div>
              )}

            </div>
          )}

          {/* MINIMUM WITHDRAWAL WARNING */}

          {belowWithdrawalMinimum && (
            <p className="withdrawal-warning">
              ⚠️ {selectedWithdrawalLimit?.label}
            </p>
          )}

          {/* SUBMIT */}

          <button
            type="submit"
            className="submit-payment"
            disabled={
              !canWithdraw ||
              isSubmitting
            }
          >
            {isSubmitting
              ? "⏳ Processing..."
              : "💸 Request Withdrawal"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default WithdrawalModal;