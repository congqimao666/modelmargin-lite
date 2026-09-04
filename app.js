(function () {
  "use strict";

  const ids = [
    "inputTokens", "outputTokens", "inputRate", "outputRate", "requests",
    "customerPrice", "feePercent", "feeFixed", "refundRate", "infraCost",
    "fixedOverhead", "targetMargin"
  ];
  const form = document.getElementById("calculator");
  const value = (id) => Math.max(0, Number(document.getElementById(id).value) || 0);
  const money = (amount, digits) => Number.isFinite(amount) ? `$${amount.toFixed(digits)}` : "—";

  function calculate() {
    const costRequest = value("inputTokens") / 1e6 * value("inputRate") +
      value("outputTokens") / 1e6 * value("outputRate");
    const costCustomer = costRequest * value("requests");
    const price = value("customerPrice");
    const feeRatio = value("feePercent") / 100;
    const refundRatio = value("refundRate") / 100;
    const targetRatio = value("targetMargin") / 100;
    const paymentFee = price * feeRatio + value("feeFixed");
    const refundAllowance = price * refundRatio;
    const contribution = price - costCustomer - paymentFee - refundAllowance - value("infraCost");
    const margin = price > 0 ? contribution / price * 100 : 0;
    const breakEven = contribution > 0 ? Math.ceil(value("fixedOverhead") / contribution) : Infinity;
    const targetDenominator = 1 - feeRatio - refundRatio - targetRatio;
    const targetPrice = targetDenominator > 0
      ? (costCustomer + value("feeFixed") + value("infraCost")) / targetDenominator
      : Infinity;
    const budgetForModel = price * (1 - feeRatio - refundRatio - targetRatio) - value("feeFixed") - value("infraCost");
    const maxRequests = costRequest > 0 && budgetForModel > 0 ? Math.floor(budgetForModel / costRequest) : 0;

    document.getElementById("costRequest").textContent = money(costRequest, 4);
    document.getElementById("costCustomer").textContent = money(costCustomer, 2);
    document.getElementById("contribution").textContent = money(contribution, 2);
    document.getElementById("margin").textContent = `${margin.toFixed(1)}%`;
    document.getElementById("breakEven").textContent = Number.isFinite(breakEven) ? String(breakEven) : "No break-even";
    document.getElementById("targetPrice").textContent = money(targetPrice, 2);
    document.getElementById("maxRequests").textContent = String(maxRequests);

    const signal = document.getElementById("signal");
    signal.classList.toggle("bad", contribution <= 0 || margin < targetRatio * 100);
    signal.textContent = contribution <= 0
      ? "This price loses money on each customer under the assumptions above."
      : margin < targetRatio * 100
        ? "Contribution is positive, but below the selected target margin."
        : "The assumptions clear the selected target contribution margin.";
  }

  ids.forEach((id) => document.getElementById(id).addEventListener("input", calculate));
  form.addEventListener("reset", () => setTimeout(calculate, 0));
  calculate();
}());
