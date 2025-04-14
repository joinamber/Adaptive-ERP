
export const transformationData = {
  banking: {
    title: "Banking & Finance",
    cards: [
      {
        title: "Intelligent Financial Close",
        items: [
          "Auto-reconciliation",
          "Reduction in manual matching tasks",
          "Faster close cycles"
        ]
      },
      {
        title: "Treasury & Cash Management",
        items: [
          "Dynamic cash flow forecasting",
          "Lower short-term borrowing costs"
        ]
      },
      {
        title: "Regulatory Compliance",
        items: [
          "Continuous monitoring",
          "Automatically identifies affected processes"
        ]
      }
    ]
  },
  ecommerce: {
    title: "Ecommerce Operations",
    cards: [
      {
        title: "Intelligent Product Catalog",
        items: [
          "Auto product classification",
          "Improve search relevancy"
        ]
      },
      {
        title: "Customer Service Automation",
        items: [
          "Full context awareness",
          "Reduction in manual ticket handling"
        ]
      },
      {
        title: "Return Processing",
        items: [
          "Return classification",
          "Authenticity verification"
        ]
      }
    ]
  },
  logistics: {
    title: "Logistics & Supply Chain",
    cards: [
      {
        title: "Supply Chain Risk Management",
        items: [
          "Monitor supply chain vulnerabilities",
          "Recommend optimal approaches"
        ]
      },
      {
        title: "Demand Sensing & Forecasting",
        items: [
          "Unstructured market signals",
          "Visual data analysis"
        ]
      },
      {
        title: "Intelligent Inventory Optimization",
        items: [
          "Understand supply constraints",
          "Initiate procurement actions"
        ]
      }
    ]
  }
};

export type TransformationDataKey = keyof typeof transformationData;
