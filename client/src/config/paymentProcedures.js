export const paymentProcedures = {
  Kenya: {
    flag: "🇰🇪",
    currency: "KES",
    methods: [
      {
        name: "M-PESA",
        recipient: {
          label: "Till Number",
          value: "3121029",
          name: "GROWVIA DIGITAL",
        },
        instructions: [
          "Go to M-PESA",
          "Select Lipa na M-PESA",
          "Choose Buy Goods and Services",
          "Enter Till Number: 3121029",
          "Confirm Name: GROWVIA DIGITAL",
          "Enter the amount you want to deposit",
          "Enter your M-PESA PIN to confirm",
        ],
      },
      {
        name: "Airtel Money",
        recipient: {
          label: "Till Number",
          value: "3121029",
          name: "GROWVIA DIGITAL",
        },
        instructions: [
          "Dial *222# on your Airtel line",
          "Select Lipa na M-PESA, Equity & Airtel",
          "Choose M-PESA Till",
          "Enter Till Number: 3121029",
          "Confirm Name: GROWVIA DIGITAL",
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
          value: "254742893070",
          name: "Joy Njoki Gathara",
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
          value: "254787793344",
          name: "Joy Njoki Gathara",
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
        name: "Vodacom",
        recipient: {
          label: "Kenyan M-PESA Number",
          value: "254742893070",
          name: "Joy Njoki Gathara",
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
          value: "254742893070",
          name: "Joy Njoki Gathara",
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
          value: "254742893070",
          name: "Joy Njoki Gathara",
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
          label: "Agent Code",
          value: "391122",
          name: "Benson Blessings",
        },
        instructions: [
          "Dial *211#",
          "Select 4 (withdraw from agent)",
          "Enter the agent code shown below",
          "Confirm the recipient name",
          "Enter the amount",
          "Enter your PIN to complete the transaction",
        ],
      },
      {
        name: "TNM Mpamba",
        recipient: {
          label: "Agent Code",
          value: "2064245",
          name: "Benson Blessings",
        },
        instructions: [
          "Dial *444#",
          "Select 3 on Cashout",
          "Select 1 (Agent)",
          "Enter the agent code shown below",
          "Confirm the recipient name",
          "Enter the amount",
          "Enter your TNM Mpamba PIN",
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
          label: "Recipient Phone Number",
          value: "694496282",
          name: "TESE ANTOINETTE",
        },
        instructions: [
          "Dial #150#",
          "Select 1. Transfer Money",
          "Choose Orange Money User",
          "Enter the provided recipient phone number",
          "Enter the amount in CFA",
          "Add withdrawal fee if required",
          "Enter reference: 1",
          "Enter your Mobile Money PIN",
        ],
      },
      {
        name: "MTN Mobile Money",
        recipient: {
          label: "Recipient Phone Number",
          value: "676675726",
          name: "MARIE MAIPOSSA",
        },
        instructions: [
          "Dial *126#",
          "Select 1. Transfer Money",
          "Choose MTN MoMo User",
          "Enter the provided recipient phone number",
          "Enter the amount in CFA",
          "Enter reference: 1",
          "Confirm the recipient name",
          "Enter your Mobile Money PIN",
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
          label: "Beneficiary",
          value: "Joy Gathara",
          details: "Kenya",
        },
        instructions: [
          "Download Eversend from the app store",
          "Verify your Eversend account",
          "Add funds to your Eversend account",
          "Tap Send",
          "Add the beneficiary details provided by Nehxify",
          "Select Kenya as the destination",
          "Enter the required amount",
          "Complete the transfer",
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
          label: "Safaricom Kenya Number",
          value: "254742893070",
          name: "Joy Njoki Gathara",
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
          value: "254787793344",
          name: "Joy Njoki Gathara",
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

  Rwanda: {
    flag: "🇷🇼",
    currency: "RWF",
    methods: [
      {
        name: "MTN",
        recipient: {
          label: "Kenyan Phone Number",
          value: "254742893070",
          name: "Joy Njoki Gathara",
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

  Ethiopia: {
    flag: "🇪🇹",
    currency: "ETB",
    methods: [
      {
        name: "Safaricom",
        recipient: {
          label: "M-PESA Recipient Number",
          value: "254759227496",
          name: "Victor Wachira",
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

  Ghana: {
    flag: "🇬🇭",
    currency: "GHS",
    methods: [
      {
        name: "MTN Mobile Money",
        recipient: {
          label: "Recipient Phone Number",
          value: "0544770848",
          name: "Ohene Yaw Nartey Aikins",
        },
        instructions: [
          "Dial *170#",
          "Select 1. Transfer Money",
          "Choose 1. MoMo User",
          "Enter the provided recipient phone number",
          "Confirm the recipient name",
          "Enter the required amount",
          "Enter reference: Nehxify or your username",
          "Enter your Mobile Money PIN",
        ],
      },
      {
        name: "Vodafone Cash",
        recipient: {
          label: "Recipient Phone Number",
          value: "0544770848",
          name: "Ohene Yaw Nartey Aikins",
        },
        instructions: [
          "Dial *110#",
          "Select 1. Send Money",
          "Choose Vodafone User",
          "Enter the provided recipient phone number",
          "Confirm the recipient name",
          "Enter the required amount",
          "Enter reference: Nehxify or your username",
          "Enter your PIN",
        ],
      },
      {
        name: "AirtelTigo Money",
        recipient: {
          label: "Recipient Phone Number",
          value: "0544770848",
          name: "Ohene Yaw Nartey Aikins",
        },
        instructions: [
          "Dial *110#",
          "Select 1. Send Money",
          "Choose AirtelTigo Money User",
          "Enter the provided recipient phone number",
          "Confirm the recipient name",
          "Enter the required amount",
          "Enter reference: Nehxify or your username",
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
          label: "Beneficiary Number",
          value: "+233544770848",
          name: "Ohene Yaw Nartey Aikins",
        },
        instructions: [
          "Dial *145#",
          "Select 2. Orange Money Transactions",
          "Choose International Money Transfer",
          "Select Ghana",
          "Enter the provided beneficiary number",
          "Enter the required amount",
          "Select the source of funds",
          "Enter your Orange Money PIN",
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