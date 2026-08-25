import { useState } from "react";
import { paymentProcedures } from "../config/paymentProcedures";
import {
  currencies,
  usdToCoins,
  localCurrencyToUsd,
} from "../config/currencies";

function TopUpGameWallet({ isOpen, onClose }) {
  const [country, setCountry] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentNumber, setPaymentNumber] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [copied, setCopied] = useState(false);

  const [topUpMethod, setTopUpMethod] = useState("choice");

  // Temporary account-balance simulation
  // Later this will come from the real user's Nehxify account.
  const [accountBalance, setAccountBalance] = useState(1000);

  const [accountCurrency, setAccountCurrency] = useState("");

  const [transferAmount, setTransferAmount] = useState("");

  if (!isOpen) {
    return null;
  }

  const selectedCountry = paymentProcedures[country];

  const selectedMethod = selectedCountry?.methods.find(
    (method) => method.name === paymentMethod
  );

  // --------------------------------
  // COUNTRY CHANGE
  // --------------------------------

  function handleCountryChange(event) {
    const selectedCountryCode = event.target.value;

    setCountry(selectedCountryCode);
    setPaymentMethod("");
    setAmount("");

    const selected = paymentProcedures[selectedCountryCode];

    if (selected?.currency) {
      setAccountCurrency(selected.currency);
    } else {
      setAccountCurrency("");
    }
  }

  // --------------------------------
  // COPY
  // --------------------------------

  function handleCopy(value) {
    navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  // --------------------------------
  // LOCAL CURRENCY PREVIEW
  // --------------------------------

  const localAmount = Number(amount) || 0;

  const estimatedUsd =
    selectedCountry && localAmount > 0
      ? localCurrencyToUsd(
          localAmount,
          selectedCountry.currency
        )
      : 0;

  const estimatedCoins =
    estimatedUsd > 0
      ? usdToCoins(estimatedUsd)
      : 0;

  // --------------------------------
  // ACCOUNT BALANCE TRANSFER
  // --------------------------------

  function handleAccountTransfer(event) {
    event.preventDefault();

    const amount = Number(transferAmount);

    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (amount > accountBalance) {
      alert("Insufficient account balance.");
      return;
    }

    const usdAmount =
      accountCurrency === "USD"
        ? amount
        : localCurrencyToUsd(
            amount,
            accountCurrency
          );

    const coinsReceived =
      usdToCoins(usdAmount);

    const transferData = {
      amount,
      currency: accountCurrency,
      usdAmount,
      coinsReceived,
      source: "Account Balance",
      destination: "Game Wallet",
    };

    console.log(
      "Account balance transfer:",
      transferData
    );

    setAccountBalance(
      (prev) => prev - amount
    );

    setTransferAmount("");

    alert(
      `Transfer successful! You received ${coinsReceived.toLocaleString()} coins.`
    );
  }

  // --------------------------------
  // DIRECT DEPOSIT
  // --------------------------------

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedCountry) {
      alert("Please select your country.");
      return;
    }

    const localAmount = Number(amount);

    if (localAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const usdAmount =
      localCurrencyToUsd(
        localAmount,
        selectedCountry.currency
      );

    const coinsReceived =
      usdToCoins(usdAmount);

    const paymentData = {
      country,
      currency: selectedCountry.currency,
      amount: localAmount,
      usdAmount,
      coinsReceived,
      paymentMethod,
      paymentNumber,
      paymentMessage,
      paymentScreenshot,
    };

    console.log(
      "Game wallet top-up submitted:",
      paymentData
    );

    alert(
      `Payment submitted for verification.\n\nEstimated coins: ${coinsReceived.toLocaleString()}`
    );
  }

  return (
    <div className="top-up-modal">

      {/* CLOSE */}

      <button
        className="close-modal"
        onClick={onClose}
      >
        ×
      </button>

      <h2>🎮 Top Up Game Wallet</h2>

      {/* =========================
          CHOICE SCREEN
      ========================= */}

      {topUpMethod === "choice" && (
        <div className="top-up-choice">

          <p className="modal-description">
            Choose how you would like to add
            funds to your game wallet.
          </p>

          <button
            type="button"
            className="top-up-option"
            onClick={() =>
              setTopUpMethod("direct")
            }
          >
            <span className="top-up-option-icon">
              💳
            </span>

            <span>
              <strong>
                Direct Deposit
              </strong>

              <small>
                Pay directly using your
                country's available payment
                method.
              </small>
            </span>
          </button>

          <button
            type="button"
            className="top-up-option"
            onClick={() =>
              setTopUpMethod("balance")
            }
          >
            <span className="top-up-option-icon">
              💰
            </span>

            <span>
              <strong>
                Account Balance
              </strong>

              <small>
                Transfer funds from your main
                Nehxify wallet.
              </small>
            </span>
          </button>

        </div>
      )}

      {/* =========================
          DIRECT DEPOSIT
      ========================= */}

      {topUpMethod === "direct" && (
        <div className="top-up-form">

          <button
            type="button"
            className="back-button"
            onClick={() =>
              setTopUpMethod("choice")
            }
          >
            ← Back
          </button>

          <p className="form-method-title">
            💳 Direct Deposit
          </p>

          <form onSubmit={handleSubmit}>

            {/* COUNTRY */}

            <div className="form-group">

              <label htmlFor="country">
                Country
              </label>

              <select
                id="country"
                value={country}
                onChange={
                  handleCountryChange
                }
                required
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

                <option value="Cote d'Ivoire">
                  🇨🇮 Côte d'Ivoire
                </option>

                <option value="Malawi">
                  🇲🇼 Malawi
                </option>

                <option value="Cameroon">
                  🇨🇲 Cameroon
                </option>

                <option value="Ghana">
                  🇬🇭 Ghana
                </option>

                <option value="Zambia">
                  🇿🇲 Zambia
                </option>

                <option value="Botswana">
                  🇧🇼 Botswana
                </option>

                <option value="South Africa">
                  🇿🇦 South Africa
                </option>

                <option value="Ethiopia">
                  🇪🇹 Ethiopia
                </option>

                <option value="Rwanda">
                  🇷🇼 Rwanda
                </option>

                <option value="Burundi">
                  🇧🇮 Burundi
                </option>

                <option value="Nigeria">
                  🇳🇬 Nigeria
                </option>

                <option value="Pakistan">
                  🇵🇰 Pakistan
                </option>

                <option value="India">
                  🇮🇳 India
                </option>

                <option value="International">
                  🌍 International
                </option>

              </select>

            </div>

            {/* PAYMENT SECTION */}

            {selectedCountry && (
              <>
                <div className="form-group">

                  <label htmlFor="amount">
                    Amount (
                    {selectedCountry.currency}
                    )
                  </label>

                  <input
                    id="amount"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder={`Enter amount in ${selectedCountry.currency}`}
                    value={amount}
                    onChange={(event) =>
                      setAmount(
                        event.target.value
                      )
                    }
                    required
                  />

                </div>

                {/* CONVERSION PREVIEW */}

                <div className="coin-preview">

                  <span>
                    🪙 You will receive:
                  </span>

                  <strong>
                    {estimatedCoins.toLocaleString()} Coins
                  </strong>

                </div>

                {localAmount > 0 && (
                  <div className="account-balance-display">

                    <span>
                      Deposit Amount
                    </span>

                    <strong>
                      {selectedCountry.currency}{" "}
                      {localAmount.toFixed(2)}
                    </strong>

                  </div>
                )}

                <div className="form-group">

                  <label htmlFor="paymentMethod">
                    Payment method
                  </label>

                  <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(event) =>
                      setPaymentMethod(
                        event.target.value
                      )
                    }
                    required
                  >

                    <option value="">
                      Select a payment method...
                    </option>

                    {selectedCountry.methods.map(
                      (method) => (
                        <option
                          key={method.name}
                          value={method.name}
                        >
                          {method.name}
                        </option>
                      )
                    )}

                  </select>

                </div>
              </>
            )}

            {/* PAYMENT INSTRUCTIONS */}

            {selectedMethod && (
              <div className="payment-instructions">

                <h3>
                  {selectedCountry.flag}{" "}
                  {selectedMethod.name}{" "}
                  Payment Procedure
                </h3>

                {selectedMethod.recipient && (
                  <div className="recipient-details">

                    <p>
                      📱{" "}
                      <strong>
                        {
                          selectedMethod
                            .recipient
                            .label
                        }
                      </strong>
                    </p>

                    <div className="recipient-value">

                      <span>
                        {
                          selectedMethod
                            .recipient
                            .value
                        }
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(
                            selectedMethod
                              .recipient
                              .value
                          )
                        }
                      >
                        {copied
                          ? "Copied ✓"
                          : "Copy"}
                      </button>

                    </div>

                    {
                      selectedMethod
                        .recipient
                        .name && (
                        <p>
                          👤{" "}
                          <strong>
                            {
                              selectedMethod
                                .recipient
                                .name
                            }
                          </strong>
                        </p>
                      )
                    }

                  </div>
                )}

                <ol>
                  {selectedMethod.instructions.map(
                    (instruction, index) => (
                      <li key={index}>
                        {instruction}
                      </li>
                    )
                  )}
                </ol>

              </div>
            )}

            {/* VERIFICATION */}

            {selectedMethod && (
              <div className="verification-section">

                <div className="verification-section-title">
                  🔐 Payment Verification
                </div>

                <div className="form-group">

                  <label htmlFor="paymentNumber">
                    Payment number / account used
                  </label>

                  <input
                    id="paymentNumber"
                    type="text"
                    placeholder="e.g. 0712345678"
                    value={paymentNumber}
                    onChange={(event) =>
                      setPaymentNumber(
                        event.target.value
                      )
                    }
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="paymentMessage">
                    Payment message / reference
                  </label>

                  <textarea
                    id="paymentMessage"
                    placeholder="Paste your payment confirmation message here"
                    value={paymentMessage}
                    onChange={(event) =>
                      setPaymentMessage(
                        event.target.value
                      )
                    }
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="paymentScreenshot">
                    Payment screenshot
                  </label>

                  <input
                    id="paymentScreenshot"
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      setPaymentScreenshot(
                        event.target.files[0]
                      )
                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="submit-payment"
                >
                  Submit for Verification
                </button>

              </div>
            )}

          </form>

        </div>
      )}

      {/* =========================
          ACCOUNT BALANCE
      ========================= */}

      {topUpMethod === "balance" && (
        <div className="top-up-form">

          <button
            type="button"
            className="back-button"
            onClick={() =>
              setTopUpMethod("choice")
            }
          >
            ← Back
          </button>

          <p className="form-method-title">
            💰 Transfer from Account Balance
          </p>

          <div className="account-balance-display">

            <span>
              Available account balance
            </span>

            <strong>
              {accountCurrency
                ? `${currencies[accountCurrency]?.symbol || accountCurrency} ${accountBalance.toFixed(2)}`
                : "0.00"}
            </strong>

          </div>

          <form
            onSubmit={handleAccountTransfer}
          >

            <div className="form-group">

              <label htmlFor="transferAmount">
                Amount to transfer
              </label>

              <input
                id="transferAmount"
                type="number"
                min="1"
                step="0.01"
                placeholder={
                  accountCurrency
                    ? `Enter amount in ${currencies[accountCurrency]?.code}`
                    : "Select your country first"
                }
                value={transferAmount}
                onChange={(event) =>
                  setTransferAmount(
                    event.target.value
                  )
                }
                required
              />

            </div>

            {/* COIN CONVERSION */}

            <div className="coin-preview">

              <span>
                🪙 You will receive:
              </span>

              <strong>
                {transferAmount
                  ? usdToCoins(
                      accountCurrency ===
                        "USD"
                        ? Number(
                            transferAmount
                          )
                        : localCurrencyToUsd(
                            Number(
                              transferAmount
                            ),
                            accountCurrency
                          )
                    ).toLocaleString()
                  : 0}{" "}
                Coins
              </strong>

            </div>

            <button
              type="submit"
              className="submit-payment"
            >
              💰 Transfer to Game Wallet
            </button>

          </form>

        </div>
      )}

    </div>
  );
}

export default TopUpGameWallet;