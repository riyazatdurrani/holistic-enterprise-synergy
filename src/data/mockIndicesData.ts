
export const mockIndicesData = {
  nifty: {
    value: 22458.95,
    change: 123.45,
    changePercentage: 0.55,
    prediction: {
      direction: "buy" as const,
      entryPoint: 22400,
      targetPoint: 22650,
      stopLoss: 22300,
      bestTimeToTrade: "10:30 AM - 11:45 AM",
      confidenceScore: 87
    }
  },
  bankNifty: {
    value: 48356.70,
    change: -156.80,
    changePercentage: -0.32,
    prediction: {
      direction: "sell" as const,
      entryPoint: 48400,
      targetPoint: 48100,
      stopLoss: 48600,
      bestTimeToTrade: "1:15 PM - 2:30 PM",
      confidenceScore: 79
    }
  },
  sensex: {
    value: 73850.75,
    change: 320.65,
    changePercentage: 0.44
  }
};
