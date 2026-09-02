export const paymentProcedures = {
  Kenya: {
    flag: "🇰🇪",
    currency: "KES",
    methods: [
      {
        name: "M-PESA",
        recipient: {
          label: "Till Number",
          value: "PENDING_NEW_TILL",
          name: "PENDING",
        },
        instructions: [
          "Go to M-PESA",
          "Select Lipa na M-PESA",
          "Choose Buy Goods and Services",
          "Enter the Till Number shown below",
          "Confirm the recipient name shown below",
          "Enter the amount you want to deposit",
          "Enter your M-PESA PIN to confirm",
        ],
      },
      {
        name: "Airtel Money",
        recipient: {
          label: "Till Number",
          value: "PENDING_NEW_TILL",
          name: "PENDING",
        },
        instructions: [
          "Dial *222# on your Airtel line",
          "Select Lipa na M-PESA, Equity & Airtel",
          "Choose M-PESA Till",
          "Enter the Till Number shown below",
          "Confirm the recipient name shown below",
          "Enter the amount you want to deposit",
          "Enter your PIN to confirm",
        ],
      },
    ],
  },

  Uganda: {
    flag: "🇺🇬",
    currency: "UGX",
    methods: [
      {
        name: "MTN Uganda",
        recipient: {
          label: "Kenyan Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *165#",
          "Select 1. Send Money",
          "Choose 2. Outside Uganda",
          "Select 1. Send to Africa mobile network",
          "Enter the Kenyan phone number shown below",
          "Enter the amount",
          "Select the required source and purpose options",
          "Enter your Mobile Money PIN",
        ],
      },
      {
        name: "Airtel Money",
        recipient: {
          label: "Kenyan Airtel Number",
          value: "254784144175",
          name: "TRACEY AKINYI",
        },
        instructions: [
          "Dial *185*1*4#",
          "Select option 1 (Eastern Africa)",
          "Select option 1 (Kenya)",
          "Select Kenya (Airtel Money)",
          "Enter the Kenyan phone number shown below",
          "Enter the amount",
          "Enter your Airtel Money PIN to confirm",
        ],
      },
    ],
  },

  Tanzania: {
    flag: "🇹🇿",
    currency: "TZS",
    methods: [
      {
        name: "Vodacom M-PESA",
        recipient: {
          label: "Kenyan M-PESA Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *150*00#",
          "Select 4. Pesa Mkononi",
          "Select 5. International Money Transfer",
          "Choose Kenya (M-PESA)",
          "Enter the Kenyan number shown below",
          "Enter the amount",
          "Enter your PIN and confirm",
        ],
      },
      {
        name: "Airtel Tanzania",
        recipient: {
          label: "Kenyan M-PESA Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *150*60#",
          "Select 5. Send Money",
          "Choose International Transfer",
          "Select Kenya (M-PESA)",
          "Enter the Kenyan number shown below",
          "Enter the amount",
          "Enter your PIN and confirm",
        ],
      },
      {
        name: "Tigo",
        recipient: {
          label: "Kenyan M-PESA Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *150*01#",
          "Select 4. Send Money",
          "Choose International Transfer",
          "Select Kenya (M-PESA)",
          "Enter the Kenyan number shown below",
          "Enter the amount",
          "Enter your PIN and confirm",
        ],
      },
    ],
  },

  Malawi: {
    flag: "🇲🇼",
    currency: "MWK",
    methods: [
      {
        name: "Airtel Money",
        recipient: {
          label: "Recipient Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *211#",
          "Select Airtel Money",
          "Select Send Money",
          "Select Send Money Abroad / International Transfer",
          "Select the destination country: Kenya",
          "Enter the recipient's mobile number shown below",
          "Enter the amount in MWK",
          "Confirm the recipient's details and transaction amount",
          "Enter your Airtel Money PIN to authorize the transaction",
          "You will receive an SMS confirmation after the transaction is completed",
        ],
      },
      {
        name: "TNM Mpamba",
        recipient: {
          label: "Recipient Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *444# from your TNM line",
          "Select Send Money / Transfer from the menu",
          "Enter the recipient's mobile number shown below",
          "Enter the amount you want to send",
          "Confirm the recipient's details and transaction amount",
          "Enter your Mpamba PIN to authorize the transaction",
          "You will receive an SMS confirmation once the transaction is successfully processed",
        ],
      },
    ],
  },

  Ghana: {
    flag: "🇬🇭",
    currency: "GHS",
    methods: [
      {
        name: "MTN Mobile Money",
        recipient: {
          label: "Eversend Tag",
          value: "PENDING_EVERSEND_TAG",
          name: "PENDING",
        },
        instructions: [
          "Open Eversend",
          "Select Send Money",
          "Enter the Eversend tag shown below",
          "Enter the required amount",
          "Complete the transfer",
          "Take a screenshot of the completed payment",
        ],
      },
      {
        name: "Vodafone Cash",
        recipient: {
          label: "Eversend Tag",
          value: "PENDING_EVERSEND_TAG",
          name: "PENDING",
        },
        instructions: [
          "Open Eversend",
          "Select Send Money",
          "Enter the Eversend tag shown below",
          "Enter the required amount",
          "Complete the transfer",
          "Take a screenshot of the completed payment",
        ],
      },
      {
        name: "AirtelTigo Money",
        recipient: {
          label: "Eversend Tag",
          value: "PENDING_EVERSEND_TAG",
          name: "PENDING",
        },
        instructions: [
          "Open Eversend",
          "Select Send Money",
          "Enter the Eversend tag shown below",
          "Enter the required amount",
          "Complete the transfer",
          "Take a screenshot of the completed payment",
        ],
      },
    ],
  },

  Cameroon: {
    flag: "🇨🇲",
    currency: "XAF",
    methods: [
      {
        name: "Orange Money",
        recipient: {
          label: "Eversend Tag",
          value: "PENDING_EVERSEND_TAG",
          name: "PENDING",
        },
        instructions: [
          "Open Eversend",
          "Select Send Money",
          "Enter the Eversend tag shown below",
          "Enter the required amount",
          "Complete the transfer",
          "Take a screenshot of the completed payment",
        ],
      },
      {
        name: "MTN Mobile Money",
        recipient: {
          label: "Eversend Tag",
          value: "PENDING_EVERSEND_TAG",
          name: "PENDING",
        },
        instructions: [
          "Open Eversend",
          "Select Send Money",
          "Enter the Eversend tag shown below",
          "Enter the required amount",
          "Complete the transfer",
          "Take a screenshot of the completed payment",
        ],
      },
    ],
  },

  Zambia: {
    flag: "🇿🇲",
    currency: "ZMW",
    methods: [
      {
        name: "MTN",
        recipient: {
          label: "Kenyan Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *115#",
          "Select Send Money",
          "Select International Transfer",
          "Select Safaricom Kenya",
          "Enter the provided recipient number",
          "Enter the required amount",
          "Enter your PIN",
        ],
      },
      {
        name: "Airtel",
        recipient: {
          label: "Kenyan Airtel Number",
          value: "254784144175",
          name: "TRACEY AKINYI",
        },
        instructions: [
          "Dial *115#",
          "Select Send Money",
          "Select International Transfer",
          "Select Kenya",
          "Enter the provided recipient number",
          "Enter the required amount",
          "Enter your PIN",
        ],
      },
    ],
  },

  Botswana: {
    flag: "🇧🇼",
    currency: "BWP",
    methods: [
      {
        name: "Orange Money",
        recipient: {
          label: "Recipient Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *145#",
          "Select Option 2 – Orange Money Transactions",
          "Enter your Orange Money PIN",
          "Select Option 5 – International Money Transfer",
          "Select the destination country: Kenya",
          "Enter the recipient's mobile number shown below",
          "Enter the amount you want to send",
          "Select the source of funds",
          "Select the purpose of the transfer",
          "Confirm the recipient's details and transaction amount",
          "Enter your PIN to authorize the transfer",
          "Wait for the SMS confirmation",
        ],
      },
      {
        name: "Mascom MyZaka",
        recipient: {
          label: "Recipient Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *167#",
          "Select International Money Transfer",
          "Select the destination country: Kenya",
          "Enter the recipient's number shown below",
          "Enter the amount",
          "Confirm the recipient's details and transaction amount",
          "Enter your PIN",
          "Wait for the SMS confirmation",
        ],
      },
    ],
  },

  "South Africa": {
    flag: "🇿🇦",
    currency: "ZAR",
    methods: [
      {
        name: "Skrill",
        recipient: {
          label: "Skrill Email",
          value: "lilvkoh87@gmail.com",
        },
        instructions: [
          "Download the Skrill app",
          "Create and verify your Skrill account",
          "Add funds to your Skrill wallet",
          "Go to Transfer",
          "Select Skrill to Skrill",
          "Enter the provided recipient email",
          "Enter the required amount",
          "Send the payment",
        ],
      },
    ],
  },

  Ethiopia: {
    flag: "🇪🇹",
    currency: "ETB",
    methods: [
      {
        name: "Safaricom",
        recipient: {
          label: "M-PESA Recipient Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *334# or *840#",
          "Navigate to M-PESA Global or Send Money",
          "Select Kenya as the recipient country",
          "Enter the Kenyan phone number shown below",
          "Enter the required amount",
          "Enter your M-PESA PIN to complete the payment",
        ],
      },
    ],
  },

  Rwanda: {
    flag: "🇷🇼",
    currency: "RWF",
    methods: [
      {
        name: "MTN",
        recipient: {
          label: "Kenyan Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *830#",
          "Select 1 for sending money",
          "Select 3 for international",
          "Select 1 for using phone number",
          "Enter the Kenyan phone number shown below",
          "Enter the amount",
          "Confirm with your MoMo PIN",
        ],
      },
    ],
  },

  Burundi: {
    flag: "🇧🇮",
    currency: "BIF",
    methods: [
      {
        name: "Lumicash",
        recipient: {
          label: "Recipient Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *163#",
          "Select Send Money / Transfer",
          "Select International Transfer, if available",
          "Select the destination country: Kenya",
          "Enter the recipient's mobile number shown below",
          "Enter the amount",
          "Confirm the recipient's details and transaction amount",
          "Enter your PIN to authorize the transaction",
          "Wait for the SMS confirmation",
        ],
      },
      {
        name: "EcoCash",
        recipient: {
          label: "Recipient Phone Number",
          value: "254718819647",
          name: "AMANDA ONYANGO",
        },
        instructions: [
          "Dial *555#",
          "Select Send Money / Transfer",
          "Select International Transfer, if available",
          "Select the destination country: Kenya",
          "Enter the recipient's mobile number shown below",
          "Enter the amount",
          "Confirm the recipient's details and transaction amount",
          "Enter your PIN to authorize the transaction",
          "Wait for the SMS confirmation",
        ],
      },
    ],
  },

  "Cote d'Ivoire": {
    flag: "🇨🇮",
    currency: "XOF",
    methods: [
      {
        name: "PayPal",
        recipient: {
          label: "PayPal Email",
          value: "mentorsebikeith@gmail.com",
          name: "Keith Omondi",
        },
        instructions: [
          "Open the PayPal app",
          "Register and verify your PayPal account",
          "Fund your PayPal account using an available method",
          "Send the required amount to the provided recipient",
          "Include your Nehxify username in the payment note",
          "Take a screenshot of the completed payment",
        ],
      },
    ],
  },

  Nigeria: {
    flag: "🇳🇬",
    currency: "NGN",
    methods: [
      {
        name: "Eversend",
        recipient: {
          label: "Eversend Tag",
          value: "PENDING_EVERSEND_TAG",
          name: "PENDING",
        },
        instructions: [
          "Open Eversend",
          "Select Send Money",
          "Enter the Eversend tag shown below",
          "Enter the required amount",
          "Complete the transfer",
          "Take a screenshot of the completed payment",
        ],
      },
    ],
  },

  Pakistan: {
    flag: "🇵🇰",
    currency: "PKR",
    methods: [
      {
        name: "PayPal",
        recipient: {
          label: "PayPal Email",
          value: "mentorsebikeith@gmail.com",
          name: "Keith Omondi",
        },
        instructions: [
          "Open the PayPal app",
          "Register and verify your PayPal account",
          "Fund your PayPal account using an available method",
          "Send the required amount to the provided recipient",
          "Include your Nehxify username in the payment note",
          "Take a screenshot of the completed payment",
        ],
      },
      {
        name: "Binance",
        recipient: {
          label: "Binance Pay ID",
          value: "869543850",
        },
        instructions: [
          "Log in to your Binance account",
          "Open Wallet",
          "Select Withdraw",
          "Select the required USDT option",
          "Use the provided recipient details",
          "Complete the transfer",
          "Take a screenshot of the completed payment",
        ],
      },
    ],
  },

  International: {
    flag: "🌍",
    currency: "USD",
    methods: [
      {
        name: "PayPal",
        recipient: {
          label: "PayPal Email",
          value: "mentorsebikeith@gmail.com",
          name: "Keith Omondi",
        },
        instructions: [
          "Open the PayPal app",
          "Register and verify your PayPal account",
          "Fund your PayPal account using an available method",
          "Send the required amount to the provided recipient",
          "Include your Nehxify username in the payment note",
          "Take a screenshot of the completed payment",
        ],
      },
      {
        name: "Binance",
        recipient: {
          label: "Binance Pay ID",
          value: "869543850",
        },
        instructions: [
          "Log in to your Binance account",
          "Open Wallet",
          "Select Withdraw",
          "Select the required USDT option",
          "Use the provided recipient details",
          "Complete the transfer",
          "Take a screenshot of the completed payment",
        ],
      },
    ],
  },
};