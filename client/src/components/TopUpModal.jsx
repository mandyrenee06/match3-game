function TopUpModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="top-up-overlay">
      <div className="top-up-modal">

        <button
          className="close-modal"
          onClick={onClose}
        >
          ×
        </button>

        <h2>🎮 Top Up Game Wallet</h2>

        <p className="modal-description">
          Choose your country and how you would like to
          top up your game wallet.
        </p>

        <div className="form-group">
          <label htmlFor="country">
            Country
          </label>

          <select id="country">
            <option value="">
              Select your country...
            </option>

            <option value="kenya">Kenya</option>
            <option value="uganda">Uganda</option>
            <option value="tanzania">Tanzania</option>
            <option value="malawi">Malawi</option>
            <option value="cameroon">Cameroon</option>
            <option value="ghana">Ghana</option>
            <option value="zambia">Zambia</option>
            <option value="botswana">Botswana</option>
            <option value="south-africa">South Africa</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="rwanda">Rwanda</option>
            <option value="burundi">Burundi</option>
            <option value="nigeria">Nigeria</option>
            <option value="pakistan">Pakistan</option>
            <option value="india">India</option>
            <option value="international">
              International
            </option>
          </select>
        </div>

        <div className="top-up-options">

          <button className="top-up-option">
            💳
            <div>
              <strong>Direct Deposit</strong>
              <span>
                Deposit directly into your game wallet
              </span>
            </div>
          </button>

          <button className="top-up-option">
            💰
            <div>
              <strong>Main Wallet</strong>
              <span>
                Transfer funds from your account balance
              </span>
            </div>
          </button>

        </div>

      </div>
    </div>
  );
}

export default TopUpModal;