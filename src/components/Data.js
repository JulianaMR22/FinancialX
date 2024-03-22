const DATA = {
  years: ["2023", "2024"],
  months: { 2023: ["november", "december"], 2024: ["january"] },
  2023: {
    november: {
      obligations: [
        { name: "car", value: 600000, paid: false, comments: "" },
        { name: "debt", value: 600000, paid: false, comments: "" },
      ],
      personal: [{ name: "food", value: 600000, paid: false, comments: "" }],
      savings: [{ name: "house", value: 1500000, paid: false, comments: "" }],
      summary: {
        initialBalance: 5000000,
        totalObligations: 200000,
        totalSavings: 100000,
        totalDebits: 50000,
        totalPersonal: 150000,
        sum: 2500000,
        residue: 25000,
      },
    },
    december: {
      obligations: [
        { name: "car", value: 600000, paid: false, comments: "" },
        { name: "debt", value: 600000, paid: false, comments: "" },
      ],
      summary: {
        initialBalance: 5000000,
        totalObligations: 200000,
        totalSavings: 100000,
        totalDebits: 50000,
        totalPersonal: 150000,
        sum: 2500000,
        residue: 25000,
      },
    },
  },
  2024: {
    january: {
      obligations: [
        { name: "car", value: 600000, paid: false, comments: "" },
        { name: "debt", value: 600000, paid: false, comments: "" },
      ],
      personal: [{ name: "food", value: 600000, paid: false, comments: "" }],
      savings: [{ name: "house", value: 1500000, paid: false, comments: "" }],
      summary: {
        initialBalance: 5000000,
        totalObligations: 200000,
        totalSavings: 100000,
        totalDebits: 50000,
        totalPersonal: 150000,
        sum: 2500000,
        residue: 25000,
      },
    },
  },
};
export default DATA;
