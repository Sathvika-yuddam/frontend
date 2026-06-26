const pricingData = [
  {
    id: 1,
    name: "Starter",
    basePrice: 15,
    features: [
      "5 AI Workflows",
      "Basic Analytics",
      "Email Support",
      "Community Access"
    ]
  },

  {
    id: 2,
    name: "Pro",
    basePrice: 39,
    features: [
      "Unlimited Workflows",
      "Advanced Analytics",
      "Priority Support",
      "API Access"
    ]
  },

  {
    id: 3,
    name: "Enterprise",
    basePrice: 89,
    features: [
      "Unlimited Everything",
      "Dedicated Manager",
      "Custom AI Models",
      "24/7 Support"
    ]
  }
];

export default pricingData;

export const currencies = {
  USD: {
    symbol: "$",
    rate: 1
  },

  EUR: {
    symbol: "€",
    rate: 0.92
  },

  INR: {
    symbol: "₹",
    rate: 83
  }
};